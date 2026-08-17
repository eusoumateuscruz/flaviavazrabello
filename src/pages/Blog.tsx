import { useMemo, useState } from "react";
import { Search, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import Seo from "@/components/Seo";
import { Input } from "@/components/ui/input";
import { BLOG_POSTS } from "@/data/blogPosts";

const CATEGORIES = ["Todos", "Família", "Bancário", "Trabalhista", "Consumidor", "Geral"] as const;

const POSTS = BLOG_POSTS.map((p) => ({
  slug: p.slug,
  category: p.category,
  title: p.title,
  excerpt: p.excerpt,
  cover: p.cover,
}));

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
      <Seo
        title="Blog Jurídico | Dicas de Direito — Flávia Vaz Rabello Advocacia"
        description="Artigos e orientações jurídicas sobre Direito de Família, Bancário e Trabalhista. Conteúdo acessível da Dra. Flávia Vaz Rabello para você conhecer seus direitos."
        canonical="https://www.flaviavazrabello.com.br/blog"
      />
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
                <Link
                  key={p.slug}
                  to={`/blog/${p.slug}`}
                  aria-label={p.title}
                  className="group flex flex-col bg-card border border-border overflow-hidden transition-shadow hover:shadow-[0_18px_40px_rgba(0,0,0,0.08)] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-secondary/40">
                    <img
                      src={p.cover}
                      alt={p.title}
                      loading="lazy"
                      width={1280}
                      height={800}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <span className="text-xs uppercase tracking-[0.2em] text-accent">{p.category}</span>
                    <h3 className="mt-3 font-serif text-xl text-primary leading-snug group-hover:text-accent transition-colors">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-sm text-foreground/75 leading-relaxed">{p.excerpt}</p>
                    <span className="mt-auto pt-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary group-hover:text-accent transition-colors self-start">
                      Ler mais <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </Link>
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
                  <li key={p.slug} className="border-b border-border pb-4 last:border-0">
                    <div className="text-[0.65rem] uppercase tracking-[0.2em] text-accent mb-1">{p.category}</div>
                    <Link to={`/blog/${p.slug}`} className="font-serif text-base text-primary hover:text-accent transition-colors leading-snug block">
                      {p.title}
                    </Link>
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
