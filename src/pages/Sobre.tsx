import { Link } from "react-router-dom";
import { Mail, ArrowRight, GraduationCap } from "lucide-react";
import Seo from "@/components/Seo";
import { EMAIL, WHATSAPP_URL } from "@/lib/site";
import sobreAsset from "@/assets/sobre-advogada.png.asset.json";

 const formation = [
   { year: "OAB/SP 262057", title: "Graduada em Direito", subtitle: "FADITU" },
   { year: "Pós-Graduação", title: "Direito do Trabalho e Processo do Trabalho", subtitle: "Especialista" },
   { year: "Pós-Graduação", title: "Direito Previdenciário", subtitle: "Especialista" },
   { year: "Pós-Graduação", title: "Direito Processual Civil", subtitle: "Especialista" },
   { year: "Especialidade", title: "Direito Bancário", subtitle: "Especialista" },
   { year: "Especialidade", title: "Direito de Família, Divórcio e Inventário", subtitle: "Especialista" },
 ];

const Sobre = () => {
  return (
    <>
      <Seo
        title="Sobre a Dra. Flávia Vaz Rabello | Advogada em Indaiatuba"
        description="Conheça a Dra. Flávia Vaz Rabello, advogada OAB 262057/SP especializada em Direito de Família, Bancário e Trabalhista em Indaiatuba e região."
        canonical="https://www.flaviavazrabello.com.br/sobre"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Flávia Vaz Rabello",
          jobTitle: "Advogada",
          description:
            "Advogada especializada em Direito de Família, Direito Bancário e Direito do Trabalho. OAB 262057/SP. Atendimento em Indaiatuba e em todo o Brasil.",
          url: "https://www.flaviavazrabello.com.br/sobre",
          image: "https://www.flaviavazrabello.com.br/assets/flavia_sobre_v2-BI3a59NW.png",
          telephone: "+55-19-99743-9157",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Indaiatuba",
            addressRegion: "SP",
            addressCountry: "BR",
          },
          alumniOf: {
            "@type": "Organization",
            name: "OAB São Paulo",
            identifier: "262057/SP",
          },
          knowsAbout: [
            "Direito de Família",
            "Direito Bancário",
            "Direito do Consumidor",
            "Direito do Trabalho",
            "Inventário e Partilha",
            "Divórcio",
            "Pensão Alimentícia",
          ],
          sameAs: [
            "https://www.instagram.com/flavia.vaz.rabello",
            "https://www.jusbrasil.com.br/advogados/flavia-vaz-rabello",
          ],
          worksFor: {
            "@type": "LegalService",
            name: "Flávia Vaz Rabello Advocacia",
            url: "https://www.flaviavazrabello.com.br",
          },
        }}
      />
      <section className="relative w-full">
        <img
          src={sobreAsset.url}
          alt="Sobre a Dra. Flávia Vaz Rabello — Advocacia com propósito e comprometimento"
          className="w-full h-auto object-cover block"
        />
      </section>

      <section className="py-20 md:py-28 bg-card border-y border-border">
        <div className="container-narrow">
          <div className="reveal text-center max-w-xl mx-auto">
            <p className="label-eyebrow mb-4">Formação</p>
            <h2 className="font-serif text-3xl md:text-4xl text-primary">Formação Acadêmica</h2>
            <div className="gold-rule mt-6" />
          </div>

           <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
             {formation.map((f, idx) => (
               <div key={idx} className="reveal bg-background border border-border p-8 transition-all hover:border-accent group">
                 <GraduationCap className="h-6 w-6 text-accent mb-4 transition-transform group-hover:scale-110" />
                 <p className="text-[10px] uppercase tracking-[0.2em] text-accent font-bold mb-2">{f.year}</p>
                 <h3 className="font-serif text-xl text-primary leading-tight">{f.title}</h3>
                 <p className="text-sm text-foreground/60 mt-2">{f.subtitle}</p>
               </div>
             ))}
           </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container-narrow text-center">
          <h2 className="font-serif text-3xl md:text-4xl">Vamos conversar sobre o seu caso?</h2>
          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-accent px-7 py-4 text-xs uppercase tracking-[0.22em] text-accent-foreground hover:bg-accent/90 transition-colors"
            >
              Falar no WhatsApp <ArrowRight className="h-3.5 w-3.5" />
            </a>
            <Link
              to="/contato"
              className="inline-flex items-center justify-center gap-2 border border-accent text-accent px-7 py-4 text-xs uppercase tracking-[0.22em] hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <Mail className="h-4 w-4" /> Enviar mensagem
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sobre;
