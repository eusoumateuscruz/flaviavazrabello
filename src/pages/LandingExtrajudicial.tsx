import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  FileText, 
  ShieldCheck, 
  CheckCircle2,
  MessageSquare,
  Scale,
  Gavel,
  ClipboardCheck,
  Zap
} from "lucide-react";
import HeroBackground from "@/components/HeroBackground";
import { WHATSAPP_URL } from "@/lib/site";
import SectionHeader from "@/components/SectionHeader";
import flaviaFoto from "@/assets/flavia_sobre_branco.png";

const LandingExtrajudicial = () => {
  const WHATSAPP_MESSAGE = encodeURIComponent("Olá Dra. Flávia, vim pela página de Assessoria Jurídica e gostaria de saber mais sobre seus serviços.");
  const WHATSAPP_LINK = `${WHATSAPP_URL}?text=${WHATSAPP_MESSAGE}`;

  const services = [
    {
      title: "Consultoria Preventiva",
      description: "Análise estratégica de riscos para evitar processos judiciais e garantir segurança jurídica.",
      icon: ShieldCheck
    },
    {
      title: "Contratos e Acordos",
      description: "Elaboração e revisão criteriosa de contratos civis, comerciais e imobiliários.",
      icon: FileText
    },
    {
      title: "Regularização de Imóveis",
      description: "Soluções ágeis para questões documentais, escrituras e registros imobiliários.",
      icon: ClipboardCheck
    },
    {
      title: "Resolução de Conflitos",
      description: "Mediação e negociação extrajudicial para soluções rápidas e menos onerosas.",
      icon: Zap
    }
  ];

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <HeroBackground />
        <div className="container-narrow relative z-10 pt-32 pb-20">
          <div className="max-w-3xl">
            <span className="label-eyebrow text-accent mb-6 block animate-fade-in">
              Assessoria Jurídica Extrajudicial e Judicial
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-primary leading-tight animate-fade-in opacity-0" style={{ animationDelay: "0.2s" }}>
              Soluções <span className="italic text-accent">estratégicas</span> para sua segurança jurídica.
            </h1>
            <p className="mt-8 text-lg text-foreground/75 leading-relaxed max-w-xl animate-fade-in opacity-0" style={{ animationDelay: "0.4s" }}>
              Evite litígios demorados com uma assessoria preventiva eficiente ou conte com uma defesa judicial técnica e combativa.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in opacity-0" style={{ animationDelay: "0.6s" }}>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-accent px-8 py-4 text-xs font-medium uppercase tracking-widest text-accent-foreground transition-all hover:bg-accent/90 hover:shadow-xl group"
              >
                Consultar Especialista
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 bg-secondary/30">
        <div className="container-narrow">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center p-8 bg-white/50 border border-accent/10 rounded-lg">
              <Zap className="h-8 w-8 text-accent mx-auto mb-6" />
              <h3 className="font-serif text-xl text-primary mb-4">Agilidade</h3>
              <p className="text-sm text-foreground/70">Foco em resoluções extrajudiciais que economizam tempo e recursos financeiros.</p>
            </div>
            <div className="text-center p-8 bg-white/50 border border-accent/10 rounded-lg">
              <ShieldCheck className="h-8 w-8 text-accent mx-auto mb-6" />
              <h3 className="font-serif text-xl text-primary mb-4">Segurança</h3>
              <p className="text-sm text-foreground/70">Análise preventiva que antecipa riscos e protege seus interesses de forma robusta.</p>
            </div>
            <div className="text-center p-8 bg-white/50 border border-accent/10 rounded-lg">
              <Scale className="h-8 w-8 text-accent mx-auto mb-6" />
              <h3 className="font-serif text-xl text-primary mb-4">Expertise</h3>
              <p className="text-sm text-foreground/70">Atuação técnica em processos judiciais complexos com foco em resultados reais.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-24">
        <div className="container-narrow">
          <SectionHeader
            eyebrow="Nossos Serviços"
            title="Assessoria Completa"
            subtitle="Do consultivo ao contencioso, oferecemos suporte jurídico de alta qualidade."
          />
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            {services.map((service, index) => (
              <div 
                key={index}
                className="flex gap-6 p-8 border border-border bg-card hover:bg-primary hover:text-primary-foreground transition-all group"
              >
                <service.icon className="h-10 w-10 text-accent shrink-0" />
                <div>
                  <h3 className="font-serif text-2xl mb-4 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-foreground/75 group-hover:text-white/80 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground text-center">
        <div className="container-narrow">
          <h2 className="font-serif text-3xl md:text-5xl mb-8">
            Precisa de uma análise do seu caso?
          </h2>
          <p className="text-primary-foreground/80 mb-12 max-w-2xl mx-auto text-lg">
            Um acompanhamento jurídico adequado pode ser a diferença entre o sucesso e o prejuízo. Fale conosco hoje mesmo.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-accent text-accent-foreground px-10 py-5 rounded-none font-bold uppercase tracking-widest hover:bg-white hover:text-primary transition-all shadow-2xl"
          >
            Solicitar Consultoria
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>

      {/* About Section */}
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
              <h3 className="font-serif text-2xl text-primary mb-4">Dra. Flávia Vaz Rabello</h3>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Atuação criteriosa e técnica na defesa dos interesses de seus clientes. Especialista em encontrar soluções ágeis e resoluções plenas para conflitos extrajudiciais e judiciais.
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2 text-sm text-foreground/70">
                  <Gavel className="h-4 w-4 text-accent" />
                  OAB 262057/SP
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground/70">
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                  +20 anos de experiência
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingExtrajudicial;