// Regra única de publicação do blog: um artigo só existe no site quando a data dele
// (campo "data", AAAA-MM-DD) já chegou no fuso de Brasília. Usada pelo indice.mjs,
// pelo plugin do Vite (vite.config.ts) e pela trava pós-build (trava-futuro.mjs).
import fs from "node:fs";
import path from "node:path";

export const hojeBrasilia = () => new Date().toLocaleDateString("sv-SE", { timeZone: "America/Sao_Paulo" });

export function lerArtigos(raiz) {
  const dir = path.join(raiz, "src/content/artigos");
  return fs.readdirSync(dir).filter((f) => f.endsWith(".json")).map((f) => ({
    arquivo: path.join(dir, f),
    ...JSON.parse(fs.readFileSync(path.join(dir, f), "utf8")),
  }));
}

export const publicado = (artigo, hoje = hojeBrasilia()) => artigo.data <= hoje;
