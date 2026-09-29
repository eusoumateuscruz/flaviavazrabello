// Trava de publicação: falha (exit 1) se qualquer artigo com data futura (fuso de Brasília)
// aparecer no build — página, rota, sitemap, link interno, bundle JS, JSON, dados estruturados
// ou imagem. Roda depois do build/prerender, antes de qualquer deploy.
//   node scripts/blog/trava-futuro.mjs <pasta-do-build>     (ex.: dist ou ../saida)
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { hojeBrasilia, lerArtigos, publicado } from "./publicacao.mjs";

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const alvo = process.argv[2];
if (!alvo || !fs.existsSync(alvo)) {
  console.error("uso: node scripts/blog/trava-futuro.mjs <pasta-do-build>");
  process.exit(2);
}

const hoje = hojeBrasilia();
const todos = lerArtigos(RAIZ);
const futuros = todos.filter((a) => !publicado(a, hoje));
// Imagem compartilhada com artigo publicado não identifica o futuro (não é vazamento).
const imagensPublicadas = new Set(todos.filter((a) => publicado(a, hoje)).map((a) => a.imagem));
const TEXTO = /\.(html?|js|mjs|css|json|xml|txt|map|webmanifest|svg)$/i;

const arquivos = [];
const andar = (d) => {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    if (e.name === ".git") continue;
    const p = path.join(d, e.name);
    if (e.isDirectory()) andar(p); else arquivos.push(p);
  }
};
andar(alvo);

// Assinaturas de cada artigo futuro: rota, slug entre aspas, nome de chunk, imagem e textos próprios.
const assinaturas = futuros.map((a) => ({
  slug: a.slug,
  data: a.data,
  textos: [`/blog/${a.slug}`, `"${a.slug}"`, imagensPublicadas.has(a.imagem) ? null : a.imagem, a.h1, a.title, a.description].filter((t) => t && t.length >= 8),
  nomeArquivo: new RegExp(`(^|[\\\\/])${a.slug.replace(/[-]/g, "\\-")}(-[A-Za-z0-9_-]{8})?\\.(js|json|html|jpe?g|png|webp|avif)$`),
}));

const achados = [];
for (const f of arquivos) {
  const rel = path.relative(alvo, f).replace(/\\/g, "/");
  for (const s of assinaturas) if (s.nomeArquivo.test("/" + rel)) achados.push(`${rel}: arquivo do artigo futuro ${s.slug} (${s.data})`);
  if (!TEXTO.test(f)) continue;
  const conteudo = fs.readFileSync(f, "utf8");
  for (const s of assinaturas) for (const t of s.textos) if (conteudo.includes(t)) { achados.push(`${rel}: contém "${t.slice(0, 60)}" do artigo futuro ${s.slug} (${s.data})`); break; }
}

console.log(`trava-futuro: hoje ${hoje}, ${futuros.length} artigo(s) com data futura, ${arquivos.length} arquivo(s) verificados em ${alvo}`);
if (achados.length) {
  console.error(`\nFALHOU: ${achados.length} ocorrência(s) de conteúdo com data futura no build:`);
  for (const a of achados.slice(0, 50)) console.error("  " + a);
  if (achados.length > 50) console.error(`  ... e mais ${achados.length - 50}`);
  process.exit(1);
}
console.log("OK: nenhum conteúdo com data futura no build.");
