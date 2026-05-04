import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Users, 
  Heart, 
  ShieldCheck, 
  Scale, 
  MessageSquare,
  CheckCircle2,
  Phone,
  Calendar,
  Gavel
} from "lucide-react";
import HeroBackground from "@/components/HeroBackground";
import { WHATSAPP_URL } from "@/lib/site";
import SectionHeader from "@/components/SectionHeader";
import flaviaFoto from "@/assets/flavia_sobre_branco.png";

const LandingFamilia = () => {
  const WHATSAPP_MESSAGE = encodeURIComponent("Olá Dra. Flávia, vim pela página de Direito de Família e gostaria de uma consulta.");
  const WHATSAPP_LINK = `${WHATSAPP_URL}?text=${WHATSAPP_MESSAGE}`;

  const services = [
    {
      title: "Divórcio e União Estável",
      description: "Condução ética e humanizada para dissoluções consensuais ou litigiosas."
    },
    {
      title: "Guarda e Pensão Alimentícia",
      description: "Foco total no bem-estar dos filhos e no equilíbrio financeiro necessário."
    },
    {
      title: "Inventário e Partilha",
      description: "Agilidade na regularização de bens e respeito à memória familiar."
    },
    {
      title: "Planejamento Sucessório",
      description: "Proteção do patrimônio e prevenção de conflitos futuros entre herdeiros."
    }
  ];

  const benefits = [
    "Atendimento totalmente personalizado e humanizado",
    "Sigilo absoluto e discrição total em seu caso",
    "Transparência em todas as etapas do processo",
    "Foco em soluções consensuais e rápidas",
    "Suporte jurídico especializado em conflitos complexos"
  ];

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <HeroBackground />
        <div className="container-narrow relative z-10 pt-32 pb-20">
          <div className="max-w-3xl">
            <span className="label-eyebrow text-accent mb-6 block animate-fade-in">
              Direito de Família e Sucessões
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-primary leading-tight animate-fade-in opacity-0" style={{ animationDelay: "0.2s" }}>
              Protegendo o que é mais <span className="italic text-accent">importante</span> para você.
            </h1>
            <p className="mt-8 text-lg text-foreground/75 leading-relaxed max-w-xl animate-fade-in opacity-0" style={{ animationDelay: "0.4s" }}>
              Atendimento jurídico especializado, humanizado e focado em soluções que trazem paz e segurança para a sua família.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in opacity-0" style={{ animationDelay: "0.6s" }}>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-accent px-8 py-4 text-xs font-medium uppercase tracking-widest text-accent-foreground transition-all hover:bg-accent/90 hover:shadow-xl group"
              >
                Falar com Especialista agora
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <h2 className="font-serif text-3xl md:text-4xl text-primary mb-6">
                Momentos delicados exigem uma condução experiente
              </h2>
              <p className="text-foreground/80 mb-8 leading-relaxed">
                Questões familiares envolvem não apenas leis, mas sentimentos e histórias de vida. Por isso, nossa atuação é pautada pela empatia e pelo rigor técnico, buscando sempre o melhor caminho para resolver conflitos de forma digna.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-foreground/90">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="reveal relative group">
              <div className="absolute -inset-4 bg-accent/10 rounded-2xl blur-2xl group-hover:bg-accent/20 transition-all" />
              <div className="relative bg-white p-8 md:p-12 rounded-xl border border-accent/20 shadow-xl">
                <h3 className="font-serif text-2xl text-primary mb-6">Agende uma consulta</h3>
                <p className="text-sm text-foreground/70 mb-8">
                  Clique no botão abaixo para iniciar um atendimento via WhatsApp e tirar suas dúvidas com a Dra. Flávia.
                </p>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full bg-primary text-primary-foreground py-4 rounded-lg hover:bg-primary/90 transition-all font-medium uppercase tracking-wider text-xs"
                >
                  <MessageSquare className="h-4 w-4" />
                  Iniciar Atendimento
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container-narrow">
          <SectionHeader
            eyebrow="Especialidades"
            title="Como podemos ajudar sua família"
            subtitle="Soluções jurídicas completas para cada etapa e necessidade familiar."
          />
          <div className="grid sm:grid-cols-2 gap-8 mt-16">
            {services.map((service, index) => (
              <div 
                key={index}
                className="p-8 border border-border bg-card hover:border-accent/50 transition-all group"
              >
                <h3 className="font-serif text-2xl text-primary mb-4 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-foreground/75 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="container-narrow relative z-10 text-center">
          <h2 className="font-serif text-3xl md:text-5xl mb-8">
            Não deixe para amanhã a proteção <br className="hidden md:block" /> dos seus direitos.
          </h2>
          <p className="text-primary-foreground/80 mb-12 max-w-2xl mx-auto text-lg">
            Conte com uma assessoria jurídica que entende a complexidade das relações familiares e atua com foco na sua tranquilidade.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-accent text-accent-foreground px-10 py-5 rounded-none font-bold uppercase tracking-widest hover:bg-white hover:text-primary transition-all shadow-2xl"
          >
            Falar com a Dra. Flávia
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>

      {/* Final Mini About */}
      <section className="py-24 border-t border-border">
        <div className="container-narrow">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-48 h-48 rounded-full overflow-hidden shrink-0 border-4 border-accent/20">
              <img 
                src={flaviaFoto} 
                alt="Dra. Flávia Vaz Rabello" 
                className="w-full h-full object-cover scale-110"
              />
            </div>
            <div>
              <h3 className="font-serif text-2xl text-primary mb-4">Sobre a Dra. Flávia Vaz Rabello</h3>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Com mais de 20 anos de experiência, a Dra. Flávia é especialista em conduzir casos de alta complexidade com leveza e humanidade, garantindo que o cliente se sinta seguro e amparado durante todo o processo.
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2 text-sm text-foreground/70">
                  <Gavel className="h-4 w-4 text-accent" />
                  OAB 262057/SP
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground/70">
                  <Users className="h-4 w-4 text-accent" />
                  Atendimento em todo o Brasil
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingFamilia;