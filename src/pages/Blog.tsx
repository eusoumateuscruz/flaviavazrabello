import { useMemo, useState } from "react";
import { Search, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import { Monogram } from "@/components/Logo";
import { Input } from "@/components/ui/input";

const CATEGORIES = ["Todos", "Família", "Bancário", "Trabalhista", "Geral"] as const;

const POSTS = [
  {
    category: "Família",
    title: "Divórcio consensual: o que você precisa saber antes de iniciar",
    excerpt: "Entenda as etapas, documentos necessários e como o processo pode ser conduzido de forma rápida e amigável.",
    date: "10 Mar 2025",
  },
  {
    category: "Bancário",
    title: "Como identificar juros abusivos no seu contrato",
    excerpt: "Saiba reconhecer cláusulas indevidas e como buscar a revisão judicial do seu financiamento.",
    date: "02 Mar 2025",
  },
  {
    category: "Trabalhista",
    title: "Seus direitos em caso de demissão sem justa causa",
    excerpt: "Verbas rescisórias, FGTS, aviso prévio e seguro-desemprego: o que a lei garante ao trabalhador.",
    date: "20 Fev 2025",
  },
  {
    category: "Família",
    title: "Guarda compartilhada: mitos e verdades",
    excerpt: "Esclareça as principais dúvidas sobre o regime de guarda mais comum nos tribunais brasileiros.",
    date: "12 Fev 2025",
  },
  {
    category: "Bancário",
    title: "Golpe do Pix: como agir se você foi vítima",
    excerpt: "Passo a passo jurídico para tentar reaver o valor e responsabilizar quem deve responder pelo dano.",
    date: "30 Jan 2025",
  },
  {
    category: "Geral",
    title: "Quando vale a pena buscar um advogado preventivo",
    excerpt: "Antecipar problemas jurídicos pode evitar custos altos e proteger seus interesses no longo prazo.",
    date: "18 Jan 2025",
  },
];

const Blog = () => {
  const [category, setCategory] = useState<(typeof CATEGORIES)[number]>("Todos");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return POSTS.filter((p) => {
      const matchCat = category === "Todos" || p.category === category;
      const matchQ =
        !query ||
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.excerpt.toLowerCase().includes(query.toLowerCase());
      return matchCat && matchQ;
    });
  }, [category, query]);

  return (
    <>
      <PageHero
        eyebrow="Conteúdo jurídico"
        title="Blog"
        subtitle="Artigos e orientações para você compreender melhor seus direitos."
      />

      <section className="py-16 md:py-20">
        <div className="container-narrow grid gap-12 lg:grid-cols-[1fr_280px]">
          <div>
            {/* Filters */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((c) => (
                  <button
                    key={c}
                    onClick={() => setCategory(c)}
                    className={`px-4 py-2 text-xs uppercase tracking-[0.2em] border transition-colors ${
                      category === c
                        ? "bg-primary text-primary-foreground border-primary"
                        : "border-border text-foreground/70 hover:text-accent hover:border-accent"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
              <div className="relative md:w-72">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground/50" />
                <Input
                  placeholder="Buscar artigo..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="pl-10 bg-card"
                />
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {filtered.map((p) => (
                <article key={p.title} className="group bg-card border border-border overflow-hidden">
                  <div className="aspect-[16/10] flex items-center justify-center" style={{ backgroundColor: "#EDE8E0" }}>
                    <Monogram className="h-12 w-12 text-accent" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em]">
                      <span className="text-accent">{p.category}</span>
                      <span className="text-foreground/50">{p.date}</span>
                    </div>
                    <h3 className="mt-3 font-serif text-xl text-primary leading-snug group-hover:text-accent transition-colors">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-sm text-foreground/75 leading-relaxed">{p.excerpt}</p>
                    <button className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary hover:text-accent transition-colors">
                      Ler mais <ArrowRight className="h-3 w-3" />
                    </button>
                  </div>
                </article>
              ))}
              {filtered.length === 0 && (
                <p className="col-span-full py-16 text-center text-foreground/60 italic">
                  Nenhum artigo encontrado.
                </p>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-10">
            <div>
              <h3 className="label-eyebrow mb-4">Posts recentes</h3>
              <ul className="space-y-4">
                {POSTS.slice(0, 4).map((p) => (
                  <li key={p.title} className="border-b border-border pb-4 last:border-0">
                    <div className="text-[0.65rem] uppercase tracking-[0.2em] text-accent mb-1">{p.category}</div>
                    <a href="#" className="font-serif text-base text-primary hover:text-accent transition-colors leading-snug block">
                      {p.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="label-eyebrow mb-4">Categorias</h3>
              <ul className="space-y-2">
                {CATEGORIES.filter((c) => c !== "Todos").map((c) => (
                  <li key={c}>
                    <button
                      onClick={() => setCategory(c)}
                      className="text-sm text-foreground/80 hover:text-accent transition-colors"
                    >
                      {c}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
};

export default Blog;
