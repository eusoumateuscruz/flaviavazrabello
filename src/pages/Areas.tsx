import { ArrowRight, Users, FileText, Briefcase } from "lucide-react";
import PageHero from "@/components/PageHero";
import { PRACTICE_AREAS, WHATSAPP_URL } from "@/lib/site";

const icons = [Users, FileText, Briefcase];

const longDescriptions: Record<string, string> = {
  familia:
    "O Direito de Família trata das relações mais íntimas e significativas da vida. Conduzimos cada caso com o equilíbrio entre técnica jurídica e sensibilidade humana, buscando soluções que preservem a dignidade e o bem-estar de todos os envolvidos.",
  bancario:
    "Atuamos na defesa do consumidor frente a instituições financeiras, contratos com cláusulas abusivas, cobranças indevidas e fraudes digitais como o golpe do Pix. Avaliamos cada contrato com rigor técnico para identificar irregularidades e buscar a reparação devida.",
  trabalhista:
    "Atendemos trabalhadores em demandas individuais, com análise estratégica de cada situação. Também oferecemos assessoria jurídica preventiva e contínua, ajudando a estruturar relações de trabalho seguras e em conformidade com a legislação.",
};

const Areas = () => {
  return (
    <>
      <PageHero
        eyebrow="Especialidades"
        title="Áreas de Atuação"
        subtitle="Atuação técnica e estratégica nas áreas em que você mais precisa de proteção e orientação jurídica."
      />

      <div className="py-20 md:py-28">
        {PRACTICE_AREAS.map((area, idx) => {
          const Icon = icons[idx];
          const isAlt = idx % 2 === 1;
          return (
            <section
              key={area.id}
              id={area.id}
              className={`py-16 md:py-20 ${isAlt ? "bg-card border-y border-border" : ""}`}
            >
              <div className="container-narrow grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
                <div className="reveal">
                  <div className="inline-flex h-14 w-14 items-center justify-center border border-accent text-accent">
                    <Icon className="h-6 w-6" />
                  </div>
                  <p className="label-eyebrow mt-6">Área {String(idx + 1).padStart(2, "0")}</p>
                  <h2 className="mt-3 font-serif text-3xl md:text-4xl text-primary leading-tight">
                    {area.title}
                  </h2>
                  <div className="mt-5 h-px w-16 bg-accent" />
                </div>

                <div className="reveal">
                  <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
                    {longDescriptions[area.id]}
                  </p>
                  <p className="mt-4 text-foreground/75 italic font-serif text-lg">{area.description}</p>

                  <h3 className="mt-10 label-eyebrow">Serviços incluídos</h3>
                  <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                    {area.services.map((s) => (
                      <li key={s} className="flex items-start gap-3 text-foreground/85">
                        <span className="mt-2.5 h-px w-3 bg-accent shrink-0" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-10 p-6 border border-border bg-background flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <p className="font-serif text-lg text-primary">Precisa de ajuda nessa área?</p>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-accent px-6 py-3 text-xs uppercase tracking-[0.2em] text-accent-foreground hover:bg-accent/90 transition-colors group"
                    >
                      Falar agora <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
};

export default Areas;
