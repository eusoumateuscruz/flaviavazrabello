// Gera src/content/indice.json (metadados dos artigos em JSON) e public/sitemap.xml
// (todas as rotas publicas). Rode depois de adicionar ou editar artigo em
// src/content/artigos/, antes do build.
//   node scripts/blog/indice.mjs
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const SITE = "https://www.flaviavazrabello.com.br";
const DIR = path.join(RAIZ, "src/content/artigos");

const CATEGORIAS = {
  "direito-de-familia": "Família",
  "direito-bancario": "Bancário",
  "direito-do-consumidor": "Consumidor",
  "direito-do-trabalho": "Trabalhista",
  "assessoria-juridica": "Assessoria",
};
const OBRIGATORIOS = ["slug", "area", "categoria", "h1", "title", "description", "resumo", "data", "imagem", "alt",
  "resposta", "intro", "secoes", "faq", "fontes"];

const erros = [];
const artigos = fs.readdirSync(DIR).filter((f) => f.endsWith(".json")).map((f) => {
  const a = JSON.parse(fs.readFileSync(path.join(DIR, f), "utf8"));
  for (const k of OBRIGATORIOS) if (a[k] === undefined || a[k] === "") erros.push(`${f}: falta ${k}`);
  if (a.slug + ".json" !== f) erros.push(`${f}: slug diferente do nome do arquivo`);
  if (CATEGORIAS[a.area] !== a.categoria) erros.push(`${f}: categoria ${a.categoria} nao bate com a area ${a.area}`);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(a.data || "")) erros.push(`${f}: data invalida`);
  if (!fs.existsSync(path.join(RAIZ, "public", a.imagem || "-"))) erros.push(`${f}: imagem ${a.imagem} nao existe em public/`);
  return a;
});

// Nunca mais de 5 artigos com a mesma data.
const porData = {};
for (const a of artigos) (porData[a.data] ||= []).push(a.slug);
for (const [d, l] of Object.entries(porData)) if (l.length > 5) erros.push(`${l.length} artigos com a data ${d} (maximo 5)`);

if (erros.length) {
  console.error("indice NAO gerado:\n  " + erros.join("\n  "));
  process.exit(1);
}

const indice = artigos
  .map(({ slug, area, categoria, h1, resumo, data, imagem, alt }) => ({ slug, area, categoria, h1, resumo, data, imagem, alt }))
  .sort((a, b) => b.data.localeCompare(a.data) || a.slug.localeCompare(b.slug));
fs.writeFileSync(path.join(RAIZ, "src/content/indice.json"), JSON.stringify(indice, null, 1) + "\n", "utf8");

// Sitemap: rotas fixas + posts antigos (src/data/blogPosts.tsx) + artigos em JSON.
const antigos = [...fs.readFileSync(path.join(RAIZ, "src/data/blogPosts.tsx"), "utf8").matchAll(/^\s{4}slug: "([^"]+)"/gm)].map((m) => m[1]);
const hoje = new Date().toLocaleDateString("sv-SE", { timeZone: "America/Sao_Paulo" });
const fixas = [
  ["/", "1.0"], ["/sobre", "0.9"], ["/areas-de-atuacao", "0.9"],
  ...Object.keys(CATEGORIAS).map((a) => [`/areas-de-atuacao/${a}`, "0.8"]),
  ["/blog", "0.9"], ["/perguntas-frequentes", "0.9"], ["/contato", "0.9"],
];
const linha = (loc, prio, lastmod) =>
  `  <url><loc>${SITE}${loc}</loc>${lastmod ? `<lastmod>${lastmod}</lastmod>` : ""}<changefreq>monthly</changefreq><priority>${prio}</priority></url>`;
const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...fixas.map(([l, p]) => linha(l, p)),
  ...antigos.map((s) => linha(`/blog/${s}`, "0.8")),
  // lastmod nunca no futuro: artigo com data a frente leva a data de hoje.
  ...indice.map((a) => linha(`/blog/${a.slug}`, "0.8", a.data > hoje ? hoje : a.data)),
  "</urlset>",
].join("\n") + "\n";
fs.writeFileSync(path.join(RAIZ, "public/sitemap.xml"), xml, "utf8");

console.log(`${indice.length} artigo(s) em JSON, ${antigos.length} post(s) antigos, ${fixas.length} rotas fixas no sitemap`);
