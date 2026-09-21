/* Artigos do blog em JSON (src/content/artigos/<slug>.json).
   O indice (src/content/indice.json) e gerado por scripts/blog/indice.mjs e vai no
   bundle principal; o corpo de cada artigo fica num chunk proprio, carregado sob
   demanda, para o blog crescer sem pesar nas outras paginas. */
import indice from "@/content/indice.json";

export type Categoria = "Família" | "Bancário" | "Consumidor" | "Trabalhista" | "Assessoria";

export type ArtigoMeta = {
  slug: string;
  area: string;
  categoria: Categoria;
  h1: string;
  resumo: string;
  data: string; // AAAA-MM-DD
  imagem: string;
  alt: string;
};

export type Artigo = ArtigoMeta & {
  title: string;
  description: string;
  resposta: string;
  intro: string;
  secoes: { h2: string; html: string }[];
  faq: { q: string; a: string }[];
  fontes: { afirmacao: string; url: string; conferido_em: string }[];
};

export const AREA_POR_CATEGORIA: Record<Categoria, { slug: string; nome: string }> = {
  "Família": { slug: "direito-de-familia", nome: "Direito de Família e Sucessões" },
  "Bancário": { slug: "direito-bancario", nome: "Direito Bancário" },
  "Consumidor": { slug: "direito-do-consumidor", nome: "Direito do Consumidor" },
  "Trabalhista": { slug: "direito-do-trabalho", nome: "Direito do Trabalho" },
  "Assessoria": { slug: "assessoria-juridica", nome: "Assessoria Jurídica" },
};

// Mais recente primeiro.
export const ARTIGOS: ArtigoMeta[] = [...(indice as ArtigoMeta[])].sort(
  (a, b) => b.data.localeCompare(a.data) || a.h1.localeCompare(b.h1, "pt-BR"),
);

export const artigoMeta = (slug: string) => ARTIGOS.find((a) => a.slug === slug);

const carregadores = import.meta.glob<Artigo>("../content/artigos/*.json", { import: "default" });
const cache = new Map<string, Artigo>();

export const artigoEmCache = (slug: string) => cache.get(slug);

export async function carregarArtigo(slug: string): Promise<Artigo | undefined> {
  if (cache.has(slug)) return cache.get(slug);
  const carregar = carregadores[`../content/artigos/${slug}.json`];
  if (!carregar) return undefined;
  const artigo = await carregar();
  cache.set(slug, artigo);
  return artigo;
}

export const formatarData = (iso: string) =>
  new Date(`${iso}T12:00:00`).toLocaleDateString("pt-BR", { day: "numeric", month: "long", year: "numeric" });
