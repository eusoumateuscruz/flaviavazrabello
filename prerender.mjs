/**
 * Pre-renderiza uma SPA Vite/React em HTML estatico, uma pagina por rota.
 *
 * Sobe um servidor estatico sobre dist/, abre cada rota no Chromium, espera a
 * renderizacao terminar e grava o DOM resultante como <rota>/index.html.
 *
 * O bundle JS continua carregando: o HTML passa a trazer o conteudo pronto
 * (que e o que rastreador e scraper leem) e a interatividade segue funcionando.
 *
 * Uso:
 *   node scripts/prerender.mjs --raiz <pasta-do-projeto> --saida <pasta-destino> \
 *        --rotas / /sobre /contato
 */
import { chromium } from "@playwright/test";
import { createServer } from "node:http";
import { readFile, mkdir, writeFile, cp } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join, extname, dirname } from "node:path";

const args = process.argv.slice(2);
const val = (nome) => {
  const i = args.indexOf(nome);
  return i === -1 ? null : args[i + 1];
};
const lista = (nome) => {
  const i = args.indexOf(nome);
  if (i === -1) return [];
  const out = [];
  for (let j = i + 1; j < args.length && !args[j].startsWith("--"); j++) out.push(args[j]);
  return out;
};

/* Rotas do site. Fica versionado aqui, e nao so na linha de comando: rota que
   nao entra nesta lista vira 404 de verdade no destino estatico — nao existe
   fallback de SPA no vercel.json, entao o bundle nem chega a carregar. */
const AREAS = [
  "direito-de-familia", "direito-bancario", "direito-do-consumidor",
  "direito-do-trabalho", "assessoria-juridica",
];
const SERVICOS = ["familia", "bancario", "consumidor", "trabalhista", "extrajudicial"];
const BLOG = [
  "golpe-do-pix-o-que-fazer", "guarda-compartilhada-como-funciona",
  "demissao-sem-justa-causa-direitos", "como-identificar-juros-abusivos",
  "divorcio-consensual-indaiatuba", "pensao-alimenticia-como-e-calculado-o-valor",
  "alienacao-parental-o-que-e-como-provar", "nome-sujo-indevidamente-o-que-fazer",
  "revisao-contrato-financiamento-veiculo", "assedio-moral-no-trabalho-o-que-fazer",
  "empresa-nao-pagou-horas-extras-o-que-fazer", "produto-com-defeito-quais-sao-meus-direitos",
  "compra-cancelada-loja-nao-devolveu-dinheiro",
];
const ROTAS_PADRAO = [
  "/", "/sobre",
  "/areas", // rota do menu principal; sem ela o item "Áreas de Atuação" da 404
  "/areas-de-atuacao", ...AREAS.map((a) => `/areas-de-atuacao/${a}`),
  ...SERVICOS.map((s) => `/servicos/${s}`), // botoes "Saber mais" da home
  "/blog", ...BLOG.map((s) => `/blog/${s}`),
  "/perguntas-frequentes", "/contato",
];

const raiz = val("--raiz");
const saida = val("--saida");
const rotas = lista("--rotas").length ? lista("--rotas") : ROTAS_PADRAO;
if (!raiz || !saida) {
  console.error("uso: --raiz <projeto> --saida <destino> [--rotas / /sobre ...]");
  process.exit(1);
}

const dist = join(raiz, "dist");
if (!existsSync(dist)) {
  console.error(`dist/ nao encontrado em ${raiz}. Rode o build antes.`);
  process.exit(1);
}

const MIME = {
  ".html": "text/html; charset=utf-8", ".js": "text/javascript", ".css": "text/css",
  ".json": "application/json", ".svg": "image/svg+xml", ".png": "image/png",
  ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".webp": "image/webp",
  ".ico": "image/x-icon", ".woff2": "font/woff2", ".xml": "application/xml",
  ".txt": "text/plain",
};

/* Servidor estatico com fallback de SPA. */
const servidor = createServer(async (req, res) => {
  const caminho = decodeURIComponent(new URL(req.url, "http://x").pathname);
  let arquivo = join(dist, caminho);
  try {
    if (!extname(caminho)) arquivo = join(dist, "index.html");
    const dados = await readFile(arquivo);
    res.writeHead(200, { "Content-Type": MIME[extname(arquivo)] || "application/octet-stream" });
    res.end(dados);
  } catch {
    try {
      const dados = await readFile(join(dist, "index.html"));
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      res.end(dados);
    } catch {
      res.writeHead(404).end("nao encontrado");
    }
  }
});

await new Promise((r) => servidor.listen(0, "127.0.0.1", r));
const porta = servidor.address().port;
const base = `http://127.0.0.1:${porta}`;
console.log(`servidor local em ${base}`);

const navegador = await chromium.launch();
const pagina = await navegador.newPage({ viewport: { width: 1280, height: 900 } });

let ok = 0;
for (const rota of rotas) {
  const url = base + rota;
  await pagina.goto(url, { waitUntil: "networkidle", timeout: 45000 });
  // Espera o conteudo de fato montar. Checar "#root > *" nao serve: componentes
  // invisiveis (region de toast, por exemplo) satisfazem o seletor antes da
  // pagina existir.
  await pagina.waitForFunction(
    () => (document.querySelector("#root")?.innerText || "").trim().length > 200,
    null, { timeout: 25000 });
  await pagina.waitForTimeout(700);

  const html = await pagina.evaluate(() => {
    // Marca que este HTML foi pre-renderizado, para diagnostico futuro.
    document.documentElement.setAttribute("data-prerendered", "true");
    return "<!doctype html>\n" + document.documentElement.outerHTML;
  });

  const destino = rota === "/"
    ? join(saida, "index.html")
    : join(saida, rota.replace(/^\//, ""), "index.html");
  await mkdir(dirname(destino), { recursive: true });
  await writeFile(destino, html, "utf-8");

  const h1 = await pagina.locator("h1").count();
  const titulo = await pagina.title();
  console.log(`  ${rota.padEnd(22)} ${String(html.length).padStart(7)} bytes  h1=${h1}  "${titulo.slice(0, 46)}"`);
  ok++;
}

await navegador.close();
servidor.close();

/* Copia os assets do build para o destino.
   "images" precisa estar aqui: as fotos de Hero e Sobre sao referenciadas por
   caminho literal (/images/...), nao por import do Vite, entao nao entram no
   bundle com hash. Sem esta linha elas ficam de fora do export e dao 404. */
for (const item of ["assets", "images", "favicon.ico", "robots.txt", "sitemap.xml", "placeholder.svg"]) {
  const de = join(dist, item);
  if (existsSync(de)) await cp(de, join(saida, item), { recursive: true });
}

console.log(`\n${ok} rota(s) pre-renderizada(s) em ${saida}`);
