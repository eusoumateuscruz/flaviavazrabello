import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { componentTagger } from "lovable-tagger";
import { hojeBrasilia, lerArtigos, publicado } from "./scripts/blog/publicacao.mjs";

/* Só artigos com data já chegada entram no bundle. Antes o import.meta.glob pegava
   todos os JSON de src/content/artigos/ e cada artigo de data futura virava um chunk
   público em /assets/. O módulo virtual abaixo gera os carregadores apenas dos
   publicados, e as imagens dos futuros saem do build. */
function artigosPublicados(): Plugin {
  const ID = "virtual:artigos-publicados";
  let outDir = "dist";
  let futuros: { imagem: string }[] = [];
  return {
    name: "artigos-publicados",
    configResolved(c) {
      outDir = path.resolve(c.root, c.build.outDir);
    },
    resolveId: (id) => (id === ID ? "\0" + ID : null),
    load(id) {
      if (id !== "\0" + ID) return null;
      const hoje = hojeBrasilia();
      const todos = lerArtigos(__dirname);
      // Imagem usada também por artigo publicado continua no build.
      const imagensPublicadas = new Set(todos.filter((a) => publicado(a, hoje)).map((a) => a.imagem));
      futuros = todos.filter((a) => !publicado(a, hoje) && !imagensPublicadas.has(a.imagem));
      const linhas = todos
        .filter((a) => publicado(a, hoje))
        .map((a) => `  ${JSON.stringify(a.slug)}: () => import(${JSON.stringify(`@/content/artigos/${a.slug}.json`)}).then((m) => m.default),`);
      return `export default {\n${linhas.join("\n")}\n};\n`;
    },
    closeBundle() {
      for (const a of futuros) {
        const f = path.join(outDir, a.imagem);
        if (fs.existsSync(f)) fs.rmSync(f);
      }
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [artigosPublicados(), react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime", "@tanstack/react-query", "@tanstack/query-core"],
  },
}));
