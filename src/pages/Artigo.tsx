import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import Seo from "@/components/Seo";
import { WHATSAPP_BASE_URL } from "@/lib/site";
import {
  AREA_POR_CATEGORIA,
  ARTIGOS,
  artigoEmCache,
  carregarArtigo,
  formatarData,
  type Artigo as TArtigo,
  type ArtigoMeta,
} from "@/lib/artigos";

const SITE = "https://www.flaviavazrabello.com.br";

const PROSA =
  "prose prose-neutral max-w-none prose-headings:font-serif prose-headings:text-primary " +
  "prose-h2:text-2xl md:prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 " +
  "prose-p:text-foreground/80 prose-p:leading-relaxed prose-li:text-foreground/80 prose-strong:text-primary " +
  "prose-a:text-accent prose-a:underline-offset-2 hover:prose-a:underline " +
  "prose-table:text-sm prose-th:text-primary prose-td:text-foreground/80";

function schemas(a: TArtigo) {
  const url = `${SITE}/blog/${a.slug}`;
  const area = AREA_POR_CATEGORIA[a.categoria];
  const texto = [a.resposta, a.intro, ...a.secoes.map((s) => s.h2 + " " + s.html)].join(" ").replace(/<[^>]+>/g, " ");
  return [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: a.h1,
      description: a.description,
      image: [`${SITE}${a.imagem}`],
      datePublished: `${a.data}T08:00:00-03:00`,
      dateModified: `${a.data}T08:00:00-03:00`,
      inLanguage: "pt-BR",
      articleSection: area.nome,
      wordCount: (texto.match(/\S+/g) || []).length,
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      url,
      author: {
        "@type": "Person",
        name: "Flávia Vaz Rabello",
        jobTitle: "Advogada",
        url: `${SITE}/sobre`,
      },
      publisher: {
        "@type": "Organization",
        name: "Flávia Vaz Rabello Advocacia",
        url: SITE,
        logo: { "@type": "ImageObject", url: `${SITE}/favicon.ico` },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: a.faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: `${SITE}/` },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE}/blog` },
        { "@type": "ListItem", position: 3, name: a.h1, item: url },
      ],
    },
  ];
}

/* Outros artigos da mesma area, os mais proximos na data primeiro. */
function relacionados(a: ArtigoMeta, n = 4) {
  return ARTIGOS.filter((x) => x.categoria === a.categoria && x.slug !== a.slug)
    .sort((x, y) => Math.abs(Date.parse(x.data) - Date.parse(a.data)) - Math.abs(Date.parse(y.data) - Date.parse(a.data)))
    .slice(0, n);
}

const Artigo = ({ meta }: { meta: ArtigoMeta }) => {
  const [artigo, setArtigo] = useState<TArtigo | undefined>(() => artigoEmCache(meta.slug));

  useEffect(() => {
    if (artigo?.slug === meta.slug) return;
    let vivo = true;
    setArtigo(artigoEmCache(meta.slug));
    carregarArtigo(meta.slug).then((a) => vivo && setArtigo(a));
    return () => {
      vivo = false;
    };
  }, [meta.slug, artigo?.slug]);

  const area = AREA_POR_CATEGORIA[meta.categoria];
  const whatsapp = `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(
    `Olá, Dra. Flávia. Li o artigo "${meta.h1}" e gostaria de orientação.`,
  )}`;

  return (
    <>
      {artigo && (
        <Seo
          title={artigo.title}
          description={artigo.description}
          canonical={`${SITE}/blog/${meta.slug}`}
          image={`${SITE}${meta.imagem}`}
          jsonLd={schemas(artigo)}
        />
      )}
      <PageHero eyebrow={meta.categoria} title={meta.h1} />

      <section className="py-14 md:py-20">
        <div className="container-narrow max-w-3xl">
          <nav aria-label="Trilha" className="mb-8 text-xs uppercase tracking-[0.18em] text-foreground/60">
            <Link to="/" className="hover:text-accent">Início</Link>
            <span className="mx-2">/</span>
            <Link to="/blog" className="hover:text-accent">Blog</Link>
            <span className="mx-2">/</span>
            <Link to={`/areas-de-atuacao/${area.slug}`} className="hover:text-accent">{area.nome}</Link>
          </nav>

          <p className="mb-8 text-sm text-foreground/70">
            Por <Link to="/sobre" className="text-primary hover:text-accent">Dra. Flávia Vaz Rabello</Link>, advogada (OAB/SP 262.057)
            <span className="mx-2">·</span>
            <time dateTime={meta.data}>{formatarData(meta.data)}</time>
          </p>

          <div className="mb-10 aspect-[16/10] overflow-hidden bg-secondary/40 border border-border">
            <img
              src={meta.imagem}
              alt={meta.alt}
              width={1200}
              height={750}
              fetchPriority="high"
              className="h-full w-full object-cover"
            />
          </div>

          {!artigo ? (
            <div data-carregando className="py-16 text-center text-foreground/60">Carregando artigo...</div>
          ) : (
            <div data-artigo-pronto>
              <div className="mb-10 border-l-2 border-accent bg-secondary/40 px-6 py-5">
                <p className="label-eyebrow mb-2">Resposta direta</p>
                <p className="text-foreground/85 leading-relaxed">{artigo.resposta}</p>
              </div>

              <article className={PROSA}>
                <div dangerouslySetInnerHTML={{ __html: artigo.intro }} />
                {artigo.secoes.map((s) => (
                  <section key={s.h2}>
                    <h2>{s.h2}</h2>
                    <div dangerouslySetInnerHTML={{ __html: s.html }} />
                  </section>
                ))}

                <section>
                  <h2>Perguntas frequentes</h2>
                  {artigo.faq.map((f) => (
                    <div key={f.q}>
                      <h3>{f.q}</h3>
                      <p>{f.a}</p>
                    </div>
                  ))}
                </section>
              </article>

              <div className="mt-12 p-6 md:p-8 bg-secondary/40 border border-border" data-cta-origem="artigo-rodape">
                <p className="text-foreground/85 leading-relaxed">
                  Este conteúdo é informativo e não substitui a análise do seu caso. A Dra. Flávia Vaz Rabello atua em{" "}
                  <Link to={`/areas-de-atuacao/${area.slug}`} className="text-accent underline-offset-2 hover:underline">
                    {area.nome}
                  </Link>{" "}
                  com escritório em Indaiatuba/SP e atendimento online.
                </p>
                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex min-h-[44px] items-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-xs uppercase tracking-[0.2em] hover:bg-accent transition-colors"
                >
                  Conversar pelo WhatsApp
                </a>
              </div>

              <details className="mt-10 border-t border-border pt-6 text-sm text-foreground/70">
                <summary className="cursor-pointer text-xs uppercase tracking-[0.2em] text-primary">Fontes consultadas</summary>
                <ul className="mt-4 space-y-2 list-disc pl-5">
                  {artigo.fontes.map((f) => (
                    <li key={f.url + f.afirmacao}>
                      {f.afirmacao}:{" "}
                      <a href={f.url} target="_blank" rel="noopener noreferrer" className="text-accent break-all hover:underline">
                        {f.url.replace(/^https?:\/\//, "").slice(0, 70)}
                      </a>
                    </li>
                  ))}
                </ul>
              </details>
            </div>
          )}

          {relacionados(meta).length > 0 && (
            <div className="mt-14">
              <h2 className="font-serif text-2xl text-primary mb-6">Leia também</h2>
              <ul className="grid gap-4 sm:grid-cols-2">
                {relacionados(meta).map((r) => (
                  <li key={r.slug}>
                    <Link
                      to={`/blog/${r.slug}`}
                      className="block h-full border border-border bg-card p-5 hover:border-accent transition-colors"
                    >
                      <span className="font-serif text-lg text-primary leading-snug">{r.h1}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-12 flex flex-wrap gap-6">
            <Link
              to="/blog"
              className="inline-flex min-h-[44px] items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary hover:text-accent transition-colors"
            >
              <ArrowLeft className="h-3 w-3" /> Voltar ao blog
            </Link>
            <Link
              to={`/areas-de-atuacao/${area.slug}`}
              className="inline-flex min-h-[44px] items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary hover:text-accent transition-colors"
            >
              {area.nome} <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Artigo;
