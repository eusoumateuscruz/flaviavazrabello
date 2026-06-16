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
  Clock,
  Phone,
  Gavel,
} from "lucide-react";
import heroBanner from "@/assets/hero-banner-new.jpeg.asset.json";
import heroFlaviaMobile from "@/assets/hero-flavia-mobile.jpeg.asset.json";
import SectionHeader from "@/components/SectionHeader";
import { Monogram } from "@/components/Logo";
import { PRACTICE_AREAS, WHATSAPP_URL } from "@/lib/site";
import sobreAsset from "@/assets/sobre-advogada-v4.jpeg.asset.json";
import { TestimonialStack } from "@/components/ui/glass-testimonial-swiper";
import Seo from "@/components/Seo";

const trustItems = [
  { icon: Award, label: "OAB 262057/SP" },
  { icon: Heart, label: "Atendimento Humanizado" },
  { icon: ShieldCheck, label: "Sigilo e Ética Profissional" },
];

const areaIcons = [Users, FileText, Briefcase, Scale, Gavel];

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
    text: "Atendimento humano e técnico. Recomendo a todos que precisam de uma advogada de confiança em Indaiatuba.",
  },
];


const Index = () => {
  return (
    <>
      <Seo
        title="Advogada em Indaiatuba | Dra. Flávia Vaz Rabello — Família, Bancário e Trabalhista"
        description="Advogada em Indaiatuba SP com mais de 20 anos de experiência em Direito de Família, Bancário, Consumidor e Trabalhista. Atendimento presencial e online em todo o Brasil."
        canonical="https://www.flaviavazrabello.com.br/"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Como agendar uma consulta com a Dra. Flávia Vaz Rabello?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Você pode agendar sua consulta pelo WhatsApp (19) 99743-9157 ou pelo formulário de contato do site. O atendimento é presencial em Indaiatuba SP ou online para todo o Brasil.",
              },
            },
            {
              "@type": "Question",
              name: "Quais áreas de atuação a Dra. Flávia Vaz Rabello atende?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Direito de Família e Sucessões, Direito Bancário, Direito do Consumidor, Direito do Trabalho e Assessoria Jurídica Extrajudicial e Judicial.",
              },
            },
            {
              "@type": "Question",
              name: "A Dra. Flávia atende fora de Indaiatuba?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Sim. Além do atendimento presencial em Indaiatuba SP, a Dra. Flávia realiza atendimento online para clientes em todo o Brasil. OAB 262057/SP.",
              },
            },
          ],
        }}
      />
      {/* HERO */}
      <section className="relative w-full md:block">
        {/* HERO MOBILE — imagem no topo, conteúdo abaixo em coluna única */}
        <div className="md:hidden bg-secondary">
          <img
            src={heroFlaviaMobile.url}
            alt="Dra. Flávia Vaz Rabello"
            className="block w-full h-[440px] min-[390px]:h-[480px] min-[480px]:h-[520px] object-cover object-[88%_center]"
          />
          <div
            className="px-5 pt-9 pb-11 flex flex-col"
            style={{
              background:
                "linear-gradient(180deg, hsl(36 24% 90%) 0%, hsl(36 22% 86%) 100%), radial-gradient(ellipse at top, hsl(24 58% 40% / 0.06), transparent 60%)",
            }}
          >
            <h1 className="font-serif font-light text-[36px] leading-[1.08] tracking-[-0.01em] text-primary min-[390px]:text-[40px] min-[480px]:text-[44px]">
              Seu direito defendido{" "}
              <em className="font-serif italic font-normal text-accent">com experiência</em>
              , estratégia e dedicação.
            </h1>
            <p className="mt-5 font-serif italic text-[17px] leading-[1.55] text-primary/75 min-[390px]:text-[18px]">
              Atendimento presencial e online em todo o Brasil.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex min-h-[56px] w-full items-center justify-center gap-3 rounded-sm border border-primary bg-primary px-4 text-center text-[12px] font-semibold uppercase tracking-[0.16em] text-primary-foreground shadow-[0_14px_32px_hsl(var(--primary)/0.35)] hover:bg-primary/90"
            >
              Falar com a Dra. Flávia
              <ArrowRight className="h-4 w-4 shrink-0" />
            </a>
            <div className="mt-7 inline-flex self-start items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span className="text-[10.5px] font-medium uppercase tracking-[0.22em] text-primary">
                Atendimentos presenciais e on-line
              </span>
            </div>
            <p className="mt-4 text-[10.5px] font-medium uppercase tracking-[0.28em] text-accent">
              OAB 262057/SP
            </p>
          </div>
        </div>
        <img
          src={heroBanner.url}
          alt="Flávia Vaz Rabello Advocacia — Seu direito defendido com experiência, estratégia e dedicação. Atendimento presencial e online em todo o Brasil · OAB 262057/SP"
          className="hidden md:block w-full h-auto"
        />
        {/* CTA desktop — posicionado sobre a imagem */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex absolute left-[15.5%] bottom-[26%] min-h-[48px] w-fit items-center gap-3 rounded-sm border border-primary bg-primary px-10 py-0 text-[12px] font-semibold uppercase tracking-[0.22em] text-primary-foreground shadow-[0_14px_32px_hsl(var(--primary)/0.35)] transition-colors hover:bg-primary/90"
        >
          Quero falar com a Dra. Flávia
          <ArrowRight className="h-3.5 w-3.5 shrink-0" />
        </a>
      </section>

       {/* TRUST BAR */}
       <section className="bg-primary text-primary-foreground border-y border-accent/20">
         <div className="container-narrow py-7 md:py-6">
           <ul className="flex flex-col md:flex-row items-center md:justify-around gap-6 md:gap-4 text-center">
             {trustItems.map(({ icon: Icon, label }) => (
               <li key={label} className="flex items-center gap-3 justify-center">
                 <Icon className="h-4 w-4 text-accent shrink-0" />
                 <span className="text-[10px] md:text-xs uppercase tracking-[0.18em] text-primary-foreground/85">{label}</span>
               </li>
             ))}
           </ul>
         </div>
       </section>

      {/* PRACTICE AREAS */}
       <section className="relative py-16 md:py-32 overflow-hidden">
        {/* Subtle depth gradient overlay */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at top, hsl(var(--accent) / 0.05), transparent 60%), linear-gradient(to bottom, transparent, hsl(var(--secondary) / 0.3))",
          }}
        />

        <div className="container-narrow relative">
          <SectionHeader
            eyebrow="Nossas áreas de atuação"
            title="Áreas de Atuação"
            subtitle="Cada área de atuação reflete um compromisso real com quem precisa de amparo jurídico sério e humanizado."
          />

           <div className="mt-12 md:mt-20 mx-auto max-w-[1040px] flex flex-col gap-6 md:gap-8">
            {PRACTICE_AREAS.map((area, idx) => {
              const Icon = areaIcons[idx];
              const isFeatured = idx === 1 || idx === 3;
              const number = String(idx + 1).padStart(2, "0");
              const manyServices = area.services.length >= 4;

              return (
                <article
                  key={area.id}
                  style={
                    isFeatured
                      ? {
                          background:
                            "linear-gradient(135deg, hsl(92 22% 28%) 0%, hsl(92 22% 18%) 100%)",
                          boxShadow:
                            "0 40px 90px -25px hsl(92 22% 12% / 0.6), 0 12px 28px rgba(0,0,0,0.14)",
                          border: "1px solid hsl(var(--accent) / 0.3)",
                        }
                      : {
                          boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
                          border: "1px solid rgba(0,0,0,0.05)",
                          borderLeft: "3px solid #A66219",
                        }
                  }
                  className={`reveal group relative overflow-hidden rounded-[14px] w-full transition-all duration-300 ease-out ${
                    isFeatured
                      ? "bg-primary text-primary-foreground p-6 sm:p-8 md:p-16 md:scale-[1.02] hover:-translate-y-2 hover:shadow-[0_50px_110px_-25px_hsl(92_22%_12%/0.7)]"
                      : "bg-card p-6 sm:p-8 md:p-14 hover:-translate-y-1.5 hover:shadow-[0_22px_55px_rgba(0,0,0,0.10)]"
                  }`}
                >
                  {/* Number watermark — very subtle, very large */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute font-serif select-none"
                    style={{
                      bottom: "-40px",
                      right: "-10px",
                      fontSize: `clamp(140px, 28vw, ${isFeatured ? "260px" : "220px"})`,
                      fontWeight: 300,
                      lineHeight: 1,
                      zIndex: 0,
                       color: isFeatured ? "#F3F2ED" : "#3B4A2F",
                       opacity: isFeatured ? 0.07 : 0.1,
                      letterSpacing: "-0.04em",
                    }}
                  >
                    {number}
                  </span>

                  <div className="relative z-[1] grid gap-8 md:grid-cols-[40%_1fr] md:gap-16">
                    <div>
                      <Icon
                        className="mb-6 md:mb-8"
                        style={{ width: 32, height: 32, color: "#A66219" }}
                        strokeWidth={1.4}
                      />
                      <h3
                        className={`font-serif leading-[1.15] ${
                          isFeatured ? "text-primary-foreground" : "text-primary"
                        }`}
                        style={{ fontSize: `clamp(26px, 7vw, ${isFeatured ? "32px" : "28px"})` }}
                      >
                        <span className="font-serif mr-3 align-baseline text-[0.6em] text-accent font-normal tracking-wider">
                          {number}
                        </span>
                        {area.title}
                      </h3>
                      <p
                        className={isFeatured ? "text-primary-foreground/90" : "text-foreground/85"}
                        style={{ fontSize: "clamp(15px, 4vw, 15px)", lineHeight: 1.75, marginTop: "18px" }}
                      >
                        {area.description}
                      </p>
                      <Link
                        to={`/servicos/${area.id}`}
                        className="mt-8 inline-flex items-center gap-2 uppercase"
                        style={{
                          fontSize: "12px",
                          letterSpacing: "0.18em",
                          fontWeight: 600,
                          color: isFeatured ? "#A66219" : "#3B4A2F",
                        }}
                      >
                        <span className="relative">
                          Saber mais
                          <span
                            className="absolute left-0 -bottom-1 h-px w-0 transition-all duration-300 group-hover:w-full"
                            style={{ backgroundColor: "#A66219" }}
                          />
                        </span>
                        <ArrowRight className="h-3.5 w-3.5 transition-all duration-300 group-hover:translate-x-2" />
                      </Link>
                    </div>

                    <div>
                      <ul
                        className={`grid content-start gap-y-3 gap-x-6 sm:gap-x-8 ${
                          manyServices ? "md:grid-cols-2" : "grid-cols-1"
                        }`}
                      >
                        {area.services.map((s) => (
                          <li
                            key={s}
                            className={`flex items-start gap-3 ${
                              isFeatured ? "text-primary-foreground/95" : "text-foreground/90"
                            }`}
                            style={{ fontSize: "clamp(13.5px, 3.4vw, 14.5px)", lineHeight: 1.5 }}
                          >
                            <span
                              className="mt-2.5 h-px w-3.5 shrink-0"
                              style={{ backgroundColor: "#A66219" }}
                            />
                            <span>{s}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

       {/* DIFFERENTIALS */}
       <section className="py-16 md:py-28 bg-card border-y border-border">
         <div className="container-narrow">
           <SectionHeader
             eyebrow="Diferenciais"
             title="Por que escolher a Flávia Vaz Rabello Advocacia?"
           />
 
            <div className="mt-10 md:mt-16 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3 border border-border">
             <div className="reveal bg-card p-8 md:p-10 transition-colors hover:bg-secondary/40">
               <Sparkles className="h-6 w-6 text-accent" strokeWidth={1.4} />
               <h3 className="mt-5 font-serif text-xl md:text-2xl text-primary">Atendimento Individualizado</h3>
               <p className="mt-3 text-sm text-foreground/75 leading-relaxed">Soluções alinhadas às suas necessidades específicas com atenção total ao seu caso.</p>
             </div>
             <div className="reveal bg-card p-8 md:p-10 transition-colors hover:bg-secondary/40">
               <ShieldCheck className="h-6 w-6 text-accent" strokeWidth={1.4} />
               <h3 className="mt-5 font-serif text-xl md:text-2xl text-primary">Advocacia Personalizada</h3>
               <p className="mt-3 text-sm text-foreground/75 leading-relaxed">Atuação sigilosa e estratégica, garantindo segurança e discrição em todos os processos.</p>
             </div>
             <div className="reveal bg-card p-8 md:p-10 transition-colors hover:bg-secondary/40">
               <Award className="h-6 w-6 text-accent" strokeWidth={1.4} />
               <h3 className="mt-5 font-serif text-xl md:text-2xl text-primary">Experiência Consolidada</h3>
               <p className="mt-3 text-sm text-foreground/75 leading-relaxed">Mais de 20 anos de atuação no mercado jurídico com equipe altamente qualificada.</p>
             </div>
           </div>
         </div>
       </section>

      {/* ABOUT PREVIEW */}
      <section className="relative w-full bg-background">
        <div className="md:hidden px-5 py-14">
          <div className="overflow-hidden rounded-[18px] border border-border bg-card shadow-[0_20px_50px_rgba(59,74,47,0.12)]">
            <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
              <img
                src={sobreAsset.url}
                alt="Sobre a Dra. Flávia Vaz Rabello"
                className="absolute inset-0 h-full w-full object-cover object-[43%_center]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/35 via-transparent to-transparent" />
            </div>
            <div className="p-5 pt-6">
              <Link
                to="/sobre"
                className="inline-flex min-h-[56px] w-full items-center justify-center gap-3 rounded-sm border border-primary bg-primary px-5 text-[12px] font-semibold uppercase tracking-[0.16em] text-primary-foreground shadow-[0_14px_32px_hsl(var(--primary)/0.35)] hover:bg-primary/90"
              >
                Saiba mais sobre a Flávia
                <ArrowRight className="h-4 w-4 shrink-0" />
              </Link>
            </div>
          </div>
        </div>
        <img
          src={sobreAsset.url}
          alt="Sobre a Dra. Flávia Vaz Rabello"
          className="hidden md:block w-full h-auto object-cover"
        />
        {/* CTA desktop sobreposto */}
        <div className="hidden md:grid pointer-events-none absolute inset-0 grid-cols-[56%_1fr]">
          <div aria-hidden="true" />
          <div className="flex h-full flex-col justify-end pb-[9%]">
            <Link
              to="/sobre"
              className="pointer-events-auto inline-flex min-h-[48px] w-fit items-center gap-3 self-start rounded-sm border border-primary bg-primary px-10 py-0 text-[12px] font-semibold uppercase tracking-[0.22em] text-primary-foreground shadow-[0_14px_32px_hsl(var(--primary)/0.35)] hover:bg-primary/90"
            >
              Saiba mais sobre a Flávia
              <ArrowRight className="h-3.5 w-3.5 shrink-0" />
            </Link>
          </div>
        </div>
        {/* CTA mobile abaixo da imagem */}
        <div className="hidden px-5 -mt-2 pb-8 justify-center">
          <Link
            to="/sobre"
            className="inline-flex min-h-[52px] w-full max-w-sm items-center justify-center gap-2 rounded-sm border border-primary bg-primary px-6 text-[13px] font-semibold uppercase tracking-[0.18em] text-primary-foreground shadow-[0_14px_32px_hsl(var(--primary)/0.35)] hover:bg-primary/90"
          >
            Saiba mais sobre a Flávia
            <ArrowRight className="h-4 w-4 shrink-0" />
          </Link>
        </div>
      </section>
 
       {/* LOCATION & MAP */}
       <section id="localizacao" className="py-16 md:py-32 bg-secondary/30 border-y border-border">
         <div className="container-narrow">
           <SectionHeader
             eyebrow="Onde Estamos"
             title="Nossa Localização"
             subtitle="Ambiente preparado para oferecer conforto e sigilo no seu atendimento presencial."
           />
 
            <div className="mt-10 md:mt-16 grid gap-8 md:gap-12 lg:grid-cols-[1fr_1.5fr] items-start">
             <div className="reveal space-y-8">
                <div className="bg-card border border-border p-6 md:p-8 space-y-7 md:space-y-8">
                 <div className="flex items-start gap-4">
                   <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                     <MapPin className="h-5 w-5 text-accent" />
                   </div>
                   <div>
                     <h4 className="font-serif text-lg text-primary">Endereço</h4>
                     <p className="mt-2 text-sm text-foreground/75 leading-relaxed">
                       Avenida Coronel Antonio Estanislau do Amaral, 635<br />
                       Sala 10 - Itaici Office - Itaici<br />
                       CEP 13.340-480 - Indaiatuba/SP
                     </p>
                   </div>
                 </div>
 
                 <div className="flex items-start gap-4">
                   <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                     <Clock className="h-5 w-5 text-accent" />
                   </div>
                   <div>
                     <h4 className="font-serif text-lg text-primary">Atendimento</h4>
                     <p className="mt-2 text-sm text-foreground/75">
                       Segunda à Sexta: 09h00 às 18h30<br />
                       Sábado: Mediante agendamento
                     </p>
                   </div>
                 </div>
 
                 <div className="flex items-start gap-4">
                   <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                     <Phone className="h-5 w-5 text-accent" />
                   </div>
                   <div>
                     <h4 className="font-serif text-lg text-primary">Contato</h4>
                     <p className="mt-2 text-sm text-foreground/75">
                       <a href="tel:+5519997439157" className="hover:text-accent transition-colors">(19) 9 9743-9157</a><br />
                       <a href="tel:+551930162688" className="hover:text-accent transition-colors">(19) 3016-2688</a>
                     </p>
                   </div>
                 </div>
               </div>
 
               <a
                 href="https://www.google.com/maps/dir//Avenida+Coronel+Antonio+Estanislau+do+Amaral,+635+-+Itaici+Office+-+Indaiatuba+-+SP"
                 target="_blank"
                 rel="noopener noreferrer"
                  className="w-full min-h-[56px] inline-flex items-center justify-center gap-2 bg-primary px-5 md:px-7 py-4 text-[11px] md:text-xs font-medium uppercase tracking-[0.14em] md:tracking-[0.22em] text-primary-foreground transition-all hover:bg-primary/90 text-center"
               >
                 Como chegar pelo Google Maps
               </a>
             </div>
 
              <div className="reveal h-[320px] md:h-[450px] w-full border border-border overflow-hidden rounded-[14px] shadow-lg grayscale hover:grayscale-0 transition-all duration-700">
               <iframe
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.328330768913!2d-47.17482342468494!3d-23.139912079092825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf51cf15222687%3A0x868c68c6a0c5c4e8!2sAv.%20Cel.%20Ant%C3%B4nio+Estanislau+do+Amaral%2C+635+-+Itaici%2C+Indaiatuba+-+SP%2C+13340-480!5e0!3m2!1spt-BR!2sbr!4v1715432000000"
                 width="100%"
                 height="100%"
                 style={{ border: 0 }}
                 allowFullScreen
                 loading="lazy"
                 referrerPolicy="no-referrer-when-downgrade"
                 title="Localização do Escritório"
               ></iframe>
             </div>
           </div>
         </div>
       </section>
 
       {/* TESTIMONIALS */}
        {/* HOW IT WORKS */}
         <section className="py-16 md:py-28 bg-secondary/30 border-y border-border">
          <div className="container-narrow">
            <SectionHeader
              eyebrow="Atendimento"
              title="Como Funciona o Atendimento?"
              subtitle="Um processo claro, do primeiro contato ao acompanhamento do seu caso."
            />

            <div className="mt-10 md:mt-16 grid gap-5 md:gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  n: "01",
                  title: "Agendamento da Consulta",
                  desc: "Análise inicial do seu caso de forma presencial em Indaiatuba ou online para todo o Brasil.",
                },
                {
                  n: "02",
                  title: "Avaliação Jurídica",
                  desc: "Estudo detalhado da sua situação e apresentação clara das possibilidades jurídicas disponíveis.",
                },
                {
                  n: "03",
                  title: "Definição da Estratégia",
                  desc: "Construção da melhor solução jurídica para proteção dos seus direitos e interesses.",
                },
                {
                  n: "04",
                  title: "Acompanhamento Contínuo",
                  desc: "Você recebe orientações e atualizações durante todo o processo, com transparência e proximidade.",
                },
              ].map((step) => (
                <div
                  key={step.n}
                  className="reveal relative bg-card border border-border p-8 h-full"
                >
                  <span className="font-serif text-5xl text-accent/80 leading-none">
                    {step.n}
                  </span>
                  <div className="mt-4 h-px w-10 bg-accent" />
                  <h3 className="mt-5 font-serif text-xl text-primary leading-snug">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm text-foreground/75 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
      <section className="py-16 md:py-28">
        <div className="container-narrow">
          <SectionHeader
            eyebrow="Depoimentos"
            title="O que dizem nossos clientes"
            subtitle="Avaliações reais publicadas por clientes diretamente no Google, refletindo a confiança construída em cada atendimento."
          />

          <div className="mt-6 flex justify-center">
            <TestimonialStack
              testimonials={[
                { initials: "MS", name: "Mariana S.", role: "Cliente — Direito de Família", quote: "A Dra. Flávia conduziu meu processo de divórcio com sensibilidade e firmeza. Me senti acolhida do início ao fim.", tag: "Direito de Família", featured: true, avatarGradient: "linear-gradient(135deg, #A66219, #D17C1F)" },
                { initials: "RA", name: "Ricardo A.", role: "Cliente — Direito Bancário", quote: "Resolveu uma questão de juros abusivos que arrastava há anos. Profissional excepcional e clara em cada explicação.", tag: "Direito Bancário", featured: true, avatarGradient: "linear-gradient(135deg, #3B4A2F, #5E5F35)" },
                { initials: "JM", name: "Juliana M.", role: "Cliente — Trabalhista", quote: "Atendimento humano e técnico. Recomendo a todos que precisam de uma advogada de confiança em Campinas.", tag: "Trabalhista", featured: true, avatarGradient: "linear-gradient(135deg, #A66219, #3B4A2F)" },
                { initials: "PC", name: "Patrícia C.", role: "Cliente — Direito de Família", quote: "Conduziu a guarda dos meus filhos com extrema delicadeza. Sempre disponível para tirar dúvidas.", tag: "Direito de Família", featured: true, avatarGradient: "linear-gradient(135deg, #D17C1F, #A66219)" },
                { initials: "LF", name: "Lucas F.", role: "Cliente — Direito Civil", quote: "Ganhei minha causa em primeira instância. Estratégia jurídica impecável.", tag: "Direito Civil", featured: true, avatarGradient: "linear-gradient(135deg, #3B4A2F, #A66219)" },
                { initials: "CB", name: "Camila B.", role: "Cliente — Trabalhista", quote: "Recebi todas as verbas devidas após anos sem reconhecimento. Gratidão eterna pela dedicação.", tag: "Trabalhista", featured: true, avatarGradient: "linear-gradient(135deg, #A66219, #5E5F35)" },
                { initials: "FO", name: "Fernando O.", role: "Cliente — Direito Bancário", quote: "Conseguiu reverter cobranças indevidas do meu financiamento. Atendimento de altíssimo nível.", tag: "Direito Bancário", featured: true, avatarGradient: "linear-gradient(135deg, #5E5F35, #D17C1F)" },
                { initials: "BV", name: "Beatriz V.", role: "Cliente — Direito de Família", quote: "Processo de inventário resolvido sem desgaste familiar. A Dra. Flávia faz toda a diferença.", tag: "Direito de Família", featured: true, avatarGradient: "linear-gradient(135deg, #A66219, #3B4A2F)" },
                { initials: "GT", name: "Gustavo T.", role: "Cliente — Direito Civil", quote: "Excelente assessoria contratual. Evitou problemas que eu nem sabia que existiam.", tag: "Direito Civil", featured: true, avatarGradient: "linear-gradient(135deg, #D17C1F, #3B4A2F)" },
                { initials: "AL", name: "Amanda L.", role: "Cliente — Trabalhista", quote: "Reconhecimento de vínculo após 8 anos de luta. Profissional que realmente abraça a causa.", tag: "Trabalhista", featured: true, avatarGradient: "linear-gradient(135deg, #3B4A2F, #D17C1F)" },
                { initials: "RC", name: "Roberto C.", role: "Cliente — Direito Bancário", quote: "Renegociação de dívidas que pareciam impossíveis. Mudou minha vida financeira.", tag: "Direito Bancário", featured: true, avatarGradient: "linear-gradient(135deg, #A66219, #D17C1F)" },
                { initials: "SN", name: "Sandra N.", role: "Cliente — Direito de Família", quote: "Adoção concluída com todo o suporte jurídico e emocional necessário.", tag: "Direito de Família", featured: true, avatarGradient: "linear-gradient(135deg, #5E5F35, #A66219)" },
                { initials: "EP", name: "Eduardo P.", role: "Cliente — Direito Civil", quote: "Ação indenizatória vencida com valor acima do esperado. Recomendo de olhos fechados.", tag: "Direito Civil", featured: true, avatarGradient: "linear-gradient(135deg, #3B4A2F, #5E5F35)" },
                { initials: "TM", name: "Tatiana M.", role: "Cliente — Trabalhista", quote: "Assédio moral comprovado em juízo. Nunca me senti tão respeitada por uma profissional.", tag: "Trabalhista", featured: true, avatarGradient: "linear-gradient(135deg, #D17C1F, #5E5F35)" },
                { initials: "HD", name: "Henrique D.", role: "Cliente — Direito Bancário", quote: "Revisão de contrato que rendeu reembolso significativo. Trabalho minucioso e ético.", tag: "Direito Bancário", featured: true, avatarGradient: "linear-gradient(135deg, #A66219, #3B4A2F)" },
                { initials: "VR", name: "Vanessa R.", role: "Cliente — Direito de Família", quote: "Pensão alimentícia revisada com justiça. Sempre transparente sobre prazos e expectativas.", tag: "Direito de Família", featured: true, avatarGradient: "linear-gradient(135deg, #3B4A2F, #A66219)" },
                { initials: "MO", name: "Marcelo O.", role: "Cliente — Direito Civil", quote: "Disputa imobiliária resolvida em tempo recorde. Conhecimento técnico admirável.", tag: "Direito Civil", featured: true, avatarGradient: "linear-gradient(135deg, #D17C1F, #A66219)" },
                { initials: "IS", name: "Isabela S.", role: "Cliente — Trabalhista", quote: "Demissão revertida em acordo justo. A Dra. Flávia luta verdadeiramente pelo cliente.", tag: "Trabalhista", featured: true, avatarGradient: "linear-gradient(135deg, #5E5F35, #3B4A2F)" },
                { initials: "PA", name: "Paulo A.", role: "Cliente — Direito Bancário", quote: "Suspensão de cobranças abusivas em poucos dias. Agilidade e competência.", tag: "Direito Bancário", featured: true, avatarGradient: "linear-gradient(135deg, #A66219, #5E5F35)" },
                { initials: "KL", name: "Karina L.", role: "Cliente — Direito de Família", quote: "Reconhecimento de união estável feito com toda segurança jurídica. Excelente orientação.", tag: "Direito de Família", featured: true, avatarGradient: "linear-gradient(135deg, #3B4A2F, #D17C1F)" },
                { initials: "DF", name: "Daniel F.", role: "Cliente — Direito Civil", quote: "Resolveu litígio com vizinho que durava anos. Diplomacia e firmeza na medida certa.", tag: "Direito Civil", featured: true, avatarGradient: "linear-gradient(135deg, #A66219, #D17C1F)" },
                { initials: "LC", name: "Letícia C.", role: "Cliente — Trabalhista", quote: "Horas extras reconhecidas integralmente. Atendimento próximo e humano do começo ao fim.", tag: "Trabalhista", featured: true, avatarGradient: "linear-gradient(135deg, #D17C1F, #3B4A2F)" },
                { initials: "AR", name: "André R.", role: "Cliente — Direito Bancário", quote: "Excluiu meu nome de cadastros indevidos rapidamente. Profissional dedicada e ágil.", tag: "Direito Bancário", featured: true, avatarGradient: "linear-gradient(135deg, #5E5F35, #D17C1F)" },
                { initials: "NF", name: "Nathalia F.", role: "Cliente — Direito de Família", quote: "Partilha de bens sem brigas, com diálogo e estratégia. Faria tudo de novo com ela.", tag: "Direito de Família", featured: true, avatarGradient: "linear-gradient(135deg, #3B4A2F, #5E5F35)" },
                { initials: "BG", name: "Bruno G.", role: "Cliente — Direito Civil", quote: "Cobrança judicial bem-sucedida após meses de tentativas frustradas com outros escritórios.", tag: "Direito Civil", featured: true, avatarGradient: "linear-gradient(135deg, #A66219, #3B4A2F)" },
                { initials: "RS", name: "Renata S.", role: "Cliente — Trabalhista", quote: "Acidente de trabalho indenizado com justiça. Senti que minha história foi ouvida de verdade.", tag: "Trabalhista", featured: true, avatarGradient: "linear-gradient(135deg, #D17C1F, #5E5F35)" },
                { initials: "JC", name: "João C.", role: "Cliente — Direito Bancário", quote: "Renegociação de empréstimo com economia enorme. Domina o tema como poucos.", tag: "Direito Bancário", featured: true, avatarGradient: "linear-gradient(135deg, #3B4A2F, #A66219)" },
                { initials: "CM", name: "Carla M.", role: "Cliente — Direito de Família", quote: "Divórcio consensual rápido e sem dor de cabeça. Recomendo para qualquer mulher.", tag: "Direito de Família", featured: true, avatarGradient: "linear-gradient(135deg, #5E5F35, #A66219)" },
                { initials: "VT", name: "Vitor T.", role: "Cliente — Direito Civil", quote: "Defesa em ação injusta resultou em arquivamento total. Excelente argumentação.", tag: "Direito Civil", featured: true, avatarGradient: "linear-gradient(135deg, #A66219, #D17C1F)" },
                { initials: "PS", name: "Priscila S.", role: "Cliente — Trabalhista", quote: "Equiparação salarial conquistada após anos de injustiça. Gratidão pela coragem.", tag: "Trabalhista", featured: true, avatarGradient: "linear-gradient(135deg, #3B4A2F, #D17C1F)" },
              ]}
            />
          </div>
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section className="py-16 md:py-28 bg-secondary/40 border-y border-border">
        <div className="container-narrow">
          <SectionHeader
            eyebrow="Conteúdo"
            title="Artigos e Orientações Jurídicas"
            subtitle="Conteúdos para você compreender melhor seus direitos e tomar decisões informadas."
          />

          <div className="mt-10 md:mt-16 grid gap-5 md:gap-6 md:grid-cols-3">
            {blogPosts.map((p) => (
              <article key={p.title} className="reveal group bg-card border border-border overflow-hidden">
                <div className="aspect-[16/10] flex items-center justify-center" style={{ backgroundColor: "#EDE8E0" }}>
                  <Monogram className="h-12 w-12 text-accent" />
                </div>
                <div className="p-6 md:p-7">
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
              className="inline-flex min-h-[52px] w-full max-w-sm items-center justify-center gap-2 border border-primary text-primary px-5 py-3 text-[11px] md:text-xs uppercase tracking-[0.16em] md:tracking-[0.2em] hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Ver todos os artigos
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-px bg-accent/40" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-accent/40" />
        <div className="container-narrow relative text-center">
          <p className="label-eyebrow mb-4">Atendimento</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight max-w-3xl mx-auto">
            Está enfrentando um <span className="italic text-accent">problema jurídico?</span>
          </h2>
          <p className="mt-6 text-primary-foreground/75 max-w-2xl mx-auto">
            Receba orientação jurídica especializada e entenda quais são os próximos passos para proteger seus direitos. Você não precisa enfrentar isso sozinho(a).
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex min-h-[56px] w-full max-w-sm items-center justify-center gap-2 bg-accent px-5 md:px-8 py-4 text-[11px] md:text-xs font-medium uppercase tracking-[0.14em] md:tracking-[0.22em] text-accent-foreground hover:bg-accent/90 transition-colors group"
          >
            <MessageSquare className="h-4 w-4" />
            Fale comigo agora
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </section>
    </>
  );
};

export default Index;
