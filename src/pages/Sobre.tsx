import { Link } from "react-router-dom";
import { Mail, ArrowRight, GraduationCap } from "lucide-react";
import PageHero from "@/components/PageHero";
import Seo from "@/components/Seo";
import { EMAIL, WHATSAPP_URL } from "@/lib/site";
import flaviaFoto from "@/assets/flavia_sobre_v2.png";

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
      <PageHero
        eyebrow="Conheça"
        title="Flávia Vaz Rabello"
        subtitle="Advogada inscrita na OAB 262057/SP, dedicada à advocacia humanizada e estratégica."
      />

      <section className="py-20 md:py-28">
        <div className="container-narrow grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16 items-start">
          <div className="reveal">
            <div
              className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0"
              style={{ background: 'transparent', overflow: 'hidden' }}
            >
              <img
                src={flaviaFoto}
                alt="Dra. Flávia Vaz Rabello"
                style={{
                  filter: 'none',
                  mixBlendMode: 'normal',
                  opacity: 1,
                  objectFit: 'contain',
                  objectPosition: 'bottom center',
                  width: '100%',
                  height: '100%',
                  maxHeight: '600px',
                  display: 'block'
                }}
              />
            </div>

            <div className="mt-10 border-l-2 border-accent pl-5">
              <p className="label-eyebrow mb-2">Credenciais</p>
              <p className="font-serif text-xl text-primary">OAB 262057/SP</p>
              <a href={`mailto:${EMAIL}`} className="text-sm text-foreground/75 hover:text-accent transition-colors break-all">
                {EMAIL}
              </a>
            </div>
          </div>

          <div className="reveal">
            <p className="label-eyebrow mb-4">Trajetória</p>
            <h2 className="font-serif text-3xl md:text-4xl text-primary leading-[1.1]">
              Uma advocacia construída com escuta, ética e estratégia.
            </h2>
            <div className="mt-6 h-px w-16 bg-accent" />

            <div className="mt-8 space-y-5 text-foreground/80 leading-relaxed text-justify">
              <p>
                Há mais de 20 anos no mercado jurídico, atuante em várias áreas, a advogada preza por atendimento com excelência e serviços jurídicos de qualidade, atuando de forma criteriosa na defesa de seus clientes.
              </p>
              <p>
                Apresentando soluções momentâneas e resolução plena dos problemas e desafios propostos, com alto nível de satisfação, celeridade, eficiência, atendimento humanizado, praticidade, confiança e qualificação.
              </p>
              <p>
                Compromisso de prestar serviços jurídicos de alta qualidade, zelando pelo atendimento personalíssimo e relação transparente com os clientes. Oferecendo serviço qualificado na obtenção dos melhores resultados para nossos clientes.
              </p>
              <p>
                Nosso objetivo além de solucionar questões jurídicas é atender com excelência. A técnica jurídica aliada ao conhecimento sobre o ramo que nossos clientes estão inseridos, fazem toda a diferença na defesa dos interesses de modo prático e com resultados efetivos. O compromisso é com o resultado, a melhor solução técnica e prática ao cliente.
              </p>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <div className="border border-border bg-card p-6">
                <p className="label-eyebrow mb-2">Missão</p>
                <p className="font-serif text-lg text-primary leading-snug">
                  Defender direitos com rigor técnico e respeito humano.
                </p>
              </div>
              <div className="border border-border bg-card p-6">
                <p className="label-eyebrow mb-2">Valores</p>
                <p className="font-serif text-lg text-primary leading-snug">
                  Ética, transparência, sigilo e dedicação.
                </p>
              </div>
            </div>
          </div>
        </div>
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
