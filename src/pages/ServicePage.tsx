import { Link, useParams } from "react-router-dom";
import { ArrowRight, MessageSquare, CheckCircle2, Gavel, Users, ShieldCheck } from "lucide-react";
import HeroBackground from "@/components/HeroBackground";
import { WHATSAPP_URL, PRACTICE_AREAS } from "@/lib/site";
import SectionHeader from "@/components/SectionHeader";
import flaviaFoto from "@/assets/flavia_sobre_branco.png";

const ServicePage = () => {
  const { id } = useParams();
  const service = PRACTICE_AREAS.find((area) => area.id === id);

  if (!service) {
    return (
      <div className="container-narrow py-32 text-center">
        <h1 className="text-4xl font-serif text-primary">Serviço não encontrado</h1>
        <Link to="/areas" className="mt-8 inline-block text-accent underline">Voltar para áreas de atuação</Link>
      </div>
    );
  }

  const WHATSAPP_MESSAGE = encodeURIComponent(`Olá Dra. Flávia, gostaria de saber mais sobre ${service.title}.`);
  const WHATSAPP_LINK = `${WHATSAPP_URL}?text=${WHATSAPP_MESSAGE}`;

  return (
    <div className="bg-background">
      <section className="relative min-h-[60vh] flex items-center overflow-hidden pt-20">
        <HeroBackground />
        <div className="container-narrow relative z-10 py-20">
          <div className="max-w-3xl">
            <span className="label-eyebrow text-accent mb-6 block animate-fade-in">
              Área de Atuação
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-primary leading-tight animate-fade-in opacity-0" style={{ animationDelay: "0.2s" }}>
              {service.title}
            </h1>
            <p className="mt-8 text-lg text-foreground/75 leading-relaxed animate-fade-in opacity-0" style={{ animationDelay: "0.4s" }}>
              {service.description}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in opacity-0" style={{ animationDelay: "0.6s" }}>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-accent px-8 py-4 text-xs font-medium uppercase tracking-widest text-accent-foreground transition-all hover:bg-accent/90 hover:shadow-xl group"
              >
                Falar com Especialista
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-narrow">
          <SectionHeader title="Serviços Oferecidos" />
          <div className="grid sm:grid-cols-2 gap-8 mt-16">
            {service.services.map((s, idx) => (
              <div key={idx} className="p-8 border border-border bg-card flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-accent shrink-0" />
                <span className="text-lg text-primary font-medium">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-primary-foreground text-center">
        <div className="container-narrow">
          <h2 className="font-serif text-3xl md:text-5xl mb-8">Precisa de assistência especializada?</h2>
          <p className="text-primary-foreground/80 mb-12 max-w-2xl mx-auto text-lg">
            Estamos prontos para analisar seu caso e oferecer a melhor solução jurídica.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-accent text-accent-foreground px-10 py-5 rounded-none font-bold uppercase tracking-widest hover:bg-white hover:text-primary transition-all shadow-2xl"
          >
            Iniciar Atendimento
            <MessageSquare className="h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;
