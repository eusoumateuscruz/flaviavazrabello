import { Link } from "react-router-dom";
import {
  Award,
  Heart,
  ShieldCheck,
  MapPin,
  Users,
  FileText,
  Briefcase,
  Scale,
  MessageSquare,
  Sparkles,
  Eye,
  Quote,
  ArrowRight,
} from "lucide-react";
import HeroBackground from "@/components/HeroBackground";
import SectionHeader from "@/components/SectionHeader";
import { Monogram } from "@/components/Logo";
import { PRACTICE_AREAS, WHATSAPP_URL } from "@/lib/site";

const trustItems = [
  { icon: Award, label: "OAB 262057/SP" },
  { icon: Heart, label: "Atendimento Humanizado" },
  { icon: ShieldCheck, label: "Sigilo e Ética Profissional" },
  { icon: MapPin, label: "Campinas e Região" },
];

const areaIcons = [Users, FileText, Briefcase, Scale];

const differentials = [
  {
    icon: Sparkles,
    title: "Atendimento Personalizado",
    text: "Cada cliente é único. Seu caso recebe atenção individual e dedicada.",
  },
  {
    icon: Award,
    title: "Experiência Comprovada",
    text: "Anos de atuação com resultados em todas as áreas de especialidade.",
  },
  {
    icon: MessageSquare,
    title: "Comunicação Clara",
    text: "Você é informado em cada etapa do processo, sem termos jurídicos desnecessários.",
  },
  {
    icon: Eye,
    title: "Ética e Sigilo",
    text: "Relação de total confiança, com absoluto respeito à confidencialidade.",
  },
];

const testimonials = [
  {
    name: "Mariana S.",
    role: "Cliente — Direito de Família",
    text: "A Dra. Flávia conduziu meu processo de divórcio com sensibilidade e firmeza. Me senti acolhida do início ao fim.",
  },
  {
    name: "Ricardo A.",
    role: "Cliente — Direito Bancário",
    text: "Resolveu uma questão de juros abusivos que arrastava há anos. Profissional excepcional e clara em cada explicação.",
  },
  {
    name: "Juliana M.",
    role: "Cliente — Trabalhista",
    text: "Atendimento humano e técnico. Recomendo a todos que precisam de uma advogada de confiança em Campinas.",
  },
];

const blogPosts = [
  {
    category: "Família",
    title: "Divórcio consensual: o que você precisa saber antes de iniciar",
    excerpt: "Entenda as etapas, documentos necessários e como o processo pode ser conduzido de forma rápida e amigável.",
  },
  {
    category: "Bancário",
    title: "Como identificar juros abusivos no seu contrato",
    excerpt: "Saiba reconhecer cláusulas indevidas e como buscar a revisão judicial do seu financiamento.",
  },
  {
    category: "Trabalhista",
    title: "Seus direitos em caso de demissão sem justa causa",
    excerpt: "Verbas rescisórias, FGTS, aviso prévio e seguro-desemprego: o que a lei garante ao trabalhador.",
  },
];

const Index = () => {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[calc(100vh-5rem)] flex items-center">
        <HeroBackground />
        <div className="container-narrow relative z-10 py-20">
          <div className="max-w-3xl">
            <p className="label-eyebrow mb-6 animate-fade-in-slow opacity-0" style={{ animationDelay: "0.1s" }}>
              Advocacia · Campinas / SP · OAB 262057/SP
            </p>
            <h1
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary leading-[1.05] animate-fade-in opacity-0"
              style={{ animationDelay: "0.2s" }}
            >
              Seu direito,
              <br />
              <span className="italic text-accent">defendido</span> com
              <br />
              expertise e dedicação.
            </h1>
            <div className="mt-8 h-px w-24 bg-accent animate-fade-in opacity-0" style={{ animationDelay: "0.4s" }} />
            <p
              className="mt-8 max-w-xl text-base md:text-lg text-foreground/75 leading-relaxed animate-fade-in opacity-0"
              style={{ animationDelay: "0.5s" }}
            >
              Cada caso carrega uma história. Aqui, ela é tratada com o rigor jurídico que merece e o cuidado humano que você precisa.
            </p>
            <div
              className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in opacity-0"
              style={{ animationDelay: "0.65s" }}
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-accent px-7 py-4 text-xs font-medium uppercase tracking-[0.22em] text-accent-foreground transition-all hover:bg-accent/90 hover:shadow-xl group"
              >
                Agendar consulta gratuita
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </a>
              <Link
                to="/areas"
                className="inline-flex items-center justify-center gap-2 border border-primary px-7 py-4 text-xs font-medium uppercase tracking-[0.22em] text-primary transition-all hover:bg-primary hover:text-primary-foreground"
              >
                Conhecer as áreas
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-primary text-primary-foreground border-y border-accent/20">
        <div className="container-narrow py-6">
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
            {trustItems.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-3 justify-center md:justify-start">
                <Icon className="h-4 w-4 text-accent shrink-0" />
                <span className="text-xs uppercase tracking-[0.18em] text-primary-foreground/85">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PRACTICE AREAS */}
      <section className="py-20 md:py-28">
        <div className="container-narrow">
          <SectionHeader
            eyebrow="O que fazemos"
            title="Áreas de Atuação"
            subtitle="Cada área de atuação reflete um compromisso real com quem precisa de amparo jurídico sério e humanizado."
          />

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {PRACTICE_AREAS.map((area, idx) => {
              const Icon = areaIcons[idx];
              const isFeatured = idx === 1;
              return (
                <article
                  key={area.id}
                  className={`reveal group relative border-t-[3px] border-accent p-10 transition-all duration-300 hover:-translate-y-1 ${
                    isFeatured
                      ? "bg-primary text-primary-foreground shadow-[0_4px_24px_rgba(0,0,0,0.12)]"
                      : "bg-card shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
                  }`}
                >
                  <Icon
                    className="h-8 w-8 text-accent"
                    strokeWidth={1.4}
                  />
                  <p
                    className="mt-6 font-serif text-[13px] tracking-[0.2em] text-accent"
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </p>
                  <h3
                    className={`mt-3 font-serif text-2xl leading-tight ${
                      isFeatured ? "text-primary-foreground" : "text-primary"
                    }`}
                  >
                    {area.title}
                  </h3>
                  <p
                    className={`mt-4 text-sm leading-relaxed ${
                      isFeatured ? "text-primary-foreground/80" : "text-foreground/75"
                    }`}
                  >
                    {area.description}
                  </p>

                  <ul className="mt-6 space-y-2">
                    {area.services.map((s) => (
                      <li
                        key={s}
                        className={`flex items-start gap-2 text-sm ${
                          isFeatured ? "text-primary-foreground/90" : "text-foreground/85"
                        }`}
                      >
                        <span className="mt-2 h-px w-3 bg-accent shrink-0" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/areas"
                    className={`mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] transition-all ${
                      isFeatured ? "text-accent" : "text-primary"
                    } [&>span.line]:bg-current relative`}
                  >
                    <span className="relative">
                      Saber mais
                      <span className="absolute left-0 -bottom-1 h-px w-0 bg-current transition-all duration-300 group-hover:w-full" />
                    </span>
                    <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* DIFFERENTIALS */}
      <section className="py-20 md:py-28 bg-card border-y border-border">
        <div className="container-narrow">
          <SectionHeader
            eyebrow="Diferenciais"
            title="Por que escolher a Flávia Vaz Rabello Advocacia?"
          />

          <div className="mt-16 grid gap-px bg-border sm:grid-cols-2 border border-border">
            {differentials.map(({ icon: Icon, title, text }) => (
              <div key={title} className="reveal bg-card p-8 md:p-10 transition-colors hover:bg-secondary/40">
                <Icon className="h-6 w-6 text-accent" strokeWidth={1.4} />
                <h3 className="mt-5 font-serif text-xl md:text-2xl text-primary">{title}</h3>
                <p className="mt-3 text-sm text-foreground/75 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="bg-primary text-primary-foreground py-20 md:py-28 relative overflow-hidden">
        <Monogram className="absolute -left-20 -bottom-20 h-[420px] w-[420px] text-primary-foreground/[0.04]" />
        <div className="container-narrow relative grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          <div className="reveal">
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0">
              <div className="absolute inset-0 border border-accent/40 translate-x-4 translate-y-4" />
              <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-primary-foreground/5 to-primary flex items-center justify-center">
                <Monogram className="h-32 w-32 text-accent/70" />
              </div>
            </div>
          </div>

          <div className="reveal">
            <p className="label-eyebrow mb-4">Sobre a advogada</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.1]">
              Advocacia com propósito e comprometimento
            </h2>
            <div className="mt-6 h-px w-16 bg-accent" />
            <div className="mt-8 space-y-4 text-primary-foreground/80 leading-relaxed">
              <p>
                Flávia Vaz Rabello é advogada inscrita na OAB 262057/SP, com atuação dedicada às áreas de Direito de Família,
                Direito Bancário e do Consumidor, e Direito Trabalhista.
              </p>
              <p>
                Ao longo de sua trajetória, construiu uma prática jurídica pautada pela ética, pela escuta atenta e pela
                busca incansável por soluções que respeitem a integridade e os direitos de cada cliente.
              </p>
              <p>
                Com escritório em Campinas e atendimento em toda a região, oferece assessoria jurídica
                personalizada, com transparência em cada etapa do processo.
              </p>
            </div>
            <Link
              to="/sobre"
              className="mt-8 inline-flex items-center gap-2 border border-accent text-accent px-6 py-3 text-xs uppercase tracking-[0.2em] hover:bg-accent hover:text-accent-foreground transition-colors group"
            >
              Saiba mais sobre a Flávia
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 md:py-28">
        <div className="container-narrow">
          <SectionHeader eyebrow="Depoimentos" title="O que dizem nossos clientes" />

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="reveal bg-card border border-border p-8 flex flex-col"
              >
                <Quote className="h-7 w-7 text-accent" />
                <blockquote className="mt-5 flex-1 font-serif text-lg italic text-foreground/85 leading-relaxed">
                  "{t.text}"
                </blockquote>
                <figcaption className="mt-6 pt-6 border-t border-border">
                  <div className="text-sm font-medium text-primary">{t.name}</div>
                  <div className="text-xs uppercase tracking-[0.18em] text-foreground/60 mt-1">{t.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section className="py-20 md:py-28 bg-secondary/40 border-y border-border">
        <div className="container-narrow">
          <SectionHeader
            eyebrow="Conteúdo"
            title="Artigos e Orientações Jurídicas"
            subtitle="Conteúdos para você compreender melhor seus direitos e tomar decisões informadas."
          />

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {blogPosts.map((p) => (
              <article key={p.title} className="reveal group bg-card border border-border overflow-hidden">
                <div className="aspect-[16/10] bg-gradient-to-br from-primary/15 to-accent/15 flex items-center justify-center">
                  <Monogram className="h-16 w-16 text-accent/40" />
                </div>
                <div className="p-7">
                  <span className="text-xs uppercase tracking-[0.2em] text-accent">{p.category}</span>
                  <h3 className="mt-3 font-serif text-xl text-primary leading-snug group-hover:text-accent transition-colors">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm text-foreground/75 leading-relaxed">{p.excerpt}</p>
                  <Link
                    to="/blog"
                    className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary hover:text-accent transition-colors"
                  >
                    Ler mais <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 border border-primary text-primary px-6 py-3 text-xs uppercase tracking-[0.2em] hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Ver todos os artigos
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="bg-primary text-primary-foreground py-20 md:py-24 relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-px bg-accent/40" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-accent/40" />
        <div className="container-narrow relative text-center">
          <p className="label-eyebrow mb-4">Atendimento</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight max-w-3xl mx-auto">
            Tem dúvidas sobre seu caso? <span className="italic text-accent">Fale comigo agora.</span>
          </h2>
          <p className="mt-6 text-primary-foreground/75 max-w-xl mx-auto">
            Atendimento ágil, sigiloso e humanizado.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center justify-center gap-2 bg-accent px-8 py-4 text-xs font-medium uppercase tracking-[0.22em] text-accent-foreground hover:bg-accent/90 transition-colors group"
          >
            <MessageSquare className="h-4 w-4" />
            Iniciar Conversa no WhatsApp
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </section>
    </>
  );
};

export default Index;
