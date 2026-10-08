import { Link, useParams } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import Seo from "@/components/Seo";
import NotFound from "@/pages/NotFound";
import { PAGINAS_LOCAIS } from "@/lib/paginasLocais";
import { LOCATION, OAB, WHATSAPP_BASE_URL, urlDaArea } from "@/lib/site";

const SITE = "https://www.flaviavazrabello.com.br";

/* Página "serviço + Indaiatuba" (dados em src/lib/paginasLocais.ts). */
const PaginaLocalPage = ({ slugFixo }: { slugFixo?: string }) => {
  const { slug } = useParams();
  const p = PAGINAS_LOCAIS.find((x) => x.slug === (slugFixo ?? slug));
  if (!p) return <NotFound />;

  const url = `${SITE}/${p.slug}`;
  const areaId = p.area ?? "familia";
  const areaNome = p.areaNome ?? "Direito de Família";
  const whatsapp = `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(`Olá, Dra. Flávia. Vim pela página de ${p.servico.toLowerCase()} em Indaiatuba e quero agendar uma consulta.
Minha cidade: 
Resumo do caso: `)}`;
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "LegalService",
      name: "Flávia Vaz Rabello Advocacia",
      url,
      telephone: "+55-19-99743-9157",
      image: `${SITE}/images/hero-desktop.webp`,
      areaServed: { "@type": "City", name: "Indaiatuba" },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Avenida Coronel Antonio Estanislau do Amaral, 635, sala 10, Itaici Office",
        addressLocality: "Indaiatuba",
        addressRegion: "SP",
        postalCode: "13340-480",
        addressCountry: "BR",
      },
      knowsAbout: p.servico,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: p.faq.map((f) => ({ "@type": "Question", name: f.pergunta, acceptedAnswer: { "@type": "Answer", text: f.resposta } })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: SITE },
        { "@type": "ListItem", position: 2, name: areaNome, item: `${SITE}${urlDaArea(areaId)}` },
        { "@type": "ListItem", position: 3, name: p.h1, item: url },
      ],
    },
  ];

  return (
    <>
      <Seo title={p.title} description={p.description} canonical={url} jsonLd={jsonLd} />
      <section className="py-14 md:py-20 bg-secondary/40 border-b border-border">
        <div className="container-narrow">
          <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-accent">{areaNome} · Indaiatuba/SP</p>
          <h1 className="mt-3 font-serif text-[34px] leading-[1.1] text-primary md:text-[48px]">{p.h1}</h1>
          <p className="mt-5 max-w-2xl text-foreground/80 leading-relaxed">{p.intro}</p>
          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex min-h-[52px] items-center gap-3 rounded-sm bg-primary px-6 text-[12px] font-semibold uppercase tracking-[0.16em] text-primary-foreground hover:bg-primary/90"
          >
            Agendar consulta pelo WhatsApp <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="container-narrow max-w-3xl space-y-10">
          {p.secoes.map((s) => (
            <div key={s.titulo}>
              <h2 className="font-serif text-2xl text-primary md:text-3xl">{s.titulo}</h2>
              {s.texto.map((t, i) => (
                <p key={i} className="mt-4 text-foreground/80 leading-relaxed">{t}</p>
              ))}
            </div>
          ))}

          <div>
            <h2 className="font-serif text-2xl text-primary md:text-3xl">Perguntas frequentes</h2>
            <div className="mt-4 space-y-5">
              {p.faq.map((f) => (
                <div key={f.pergunta}>
                  <h3 className="font-semibold text-foreground">{f.pergunta}</h3>
                  <p className="mt-1 text-foreground/80 leading-relaxed">{f.resposta}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-border bg-card p-6">
            <h2 className="font-serif text-xl text-primary">Atendimento em Indaiatuba</h2>
            <p className="mt-3 flex items-start gap-2 text-sm text-foreground/80">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" /> {LOCATION}
            </p>
            <p className="mt-2 text-sm text-foreground/70">Dra. Flávia Vaz Rabello, {OAB}.</p>
            <div className="mt-4 flex flex-wrap gap-4 text-sm">
              <Link to={urlDaArea(areaId)} className="text-accent underline-offset-4 hover:underline">{areaNome}</Link>
              {PAGINAS_LOCAIS.filter((x) => x.slug !== p.slug && (x.area ?? "familia") === areaId).map((x) => (
                <Link key={x.slug} to={`/${x.slug}`} className="text-accent underline-offset-4 hover:underline">{x.h1}</Link>
              ))}
            </div>
          </div>

          <div className="text-xs text-foreground/60">
            <p className="font-semibold">Fontes</p>
            <ul className="mt-1 list-disc pl-5 space-y-1">
              {p.fontes.map((f) => (
                <li key={f.url}><a href={f.url} target="_blank" rel="noopener noreferrer" className="hover:underline">{f.nome}</a></li>
              ))}
            </ul>
            <p className="mt-3">Conteúdo informativo. Cada caso precisa de análise individual.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default PaginaLocalPage;
