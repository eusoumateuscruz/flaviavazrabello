import { Link } from "react-router-dom";
import { Mail, ArrowRight, GraduationCap } from "lucide-react";
import PageHero from "@/components/PageHero";
import { EMAIL, WHATSAPP_URL } from "@/lib/site";
import flaviaSobre from "@/assets/flavia_sobre_branco.png";

const formation = [
  { year: "2010", title: "Bacharel em Direito", subtitle: "Universidade reconhecida — São Paulo" },
  { year: "2011", title: "Inscrição na OAB 262057/SP", subtitle: "Início da atuação profissional" },
  { year: "2014", title: "Especialização em Direito de Família", subtitle: "Pós-graduação lato sensu" },
  { year: "2018", title: "Especialização em Direito Bancário", subtitle: "Atuação consultiva e contenciosa" },
];

const Sobre = () => {
  return (
    <>
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
              style={{
                background: 'transparent',
                backgroundColor: 'transparent',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <img
                src={flaviaSobre}
                alt="Flávia Vaz Rabello, advogada OAB 262057/SP"
                style={{
                  filter: 'none',
                  mixBlendMode: 'normal',
                  opacity: 1,
                  objectFit: 'contain',
                  objectPosition: 'bottom center',
                  width: '100%',
                  height: '100%',
                  maxHeight: '600px',
                  display: 'block',
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

            <div className="mt-8 space-y-5 text-foreground/80 leading-relaxed">
              <p>
                Flávia Vaz Rabello é advogada com formação sólida e atuação focada nas áreas de Direito de Família,
                Direito Bancário e do Consumidor, e Direito Trabalhista. Sua trajetória é marcada pelo compromisso com a
                excelência técnica e pelo cuidado com cada cliente que confia a ela suas questões mais delicadas.
              </p>
              <p>
                Acredita que o exercício do Direito vai além da técnica jurídica: envolve sensibilidade para
                compreender o contexto humano de cada caso e clareza para conduzir os processos com transparência.
              </p>
              <p>
                Em seu escritório, você encontra uma advocacia personalizada, que prioriza a comunicação direta, o
                sigilo absoluto e a busca por soluções que efetivamente protejam seus direitos e seu patrimônio.
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

      {/* Formation timeline */}
      <section className="py-20 md:py-28 bg-card border-y border-border">
        <div className="container-narrow">
          <div className="reveal text-center max-w-xl mx-auto">
            <p className="label-eyebrow mb-4">Formação</p>
            <h2 className="font-serif text-3xl md:text-4xl text-primary">Formação Acadêmica</h2>
            <div className="gold-rule mt-6" />
          </div>

          <ol className="mt-16 max-w-3xl mx-auto relative">
            <div className="absolute left-[7.5rem] top-0 bottom-0 w-px bg-border hidden md:block" />
            {formation.map((f) => (
              <li key={f.year} className="reveal relative grid md:grid-cols-[7rem_1fr] gap-4 md:gap-8 pb-10 last:pb-0">
                <div className="font-serif text-2xl text-accent md:text-right">{f.year}</div>
                <div className="md:pl-8 relative">
                  <div className="hidden md:block absolute -left-[5px] top-3 h-2.5 w-2.5 rounded-full bg-accent" />
                  <div className="flex items-start gap-3">
                    <GraduationCap className="h-5 w-5 text-accent mt-1 shrink-0 md:hidden" />
                    <div>
                      <h3 className="font-serif text-xl text-primary">{f.title}</h3>
                      <p className="text-sm text-foreground/70 mt-1">{f.subtitle}</p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
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
