import { Mail, MessageCircle, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import Seo from "@/components/Seo";
import { EMAIL, PHONES, WHATSAPP_URL } from "@/lib/site";

const Privacidade = () => (
  <>
    <Seo
      title="Política de Privacidade em atualização | Flávia Vaz Rabello Advocacia"
      description="Aviso temporário sobre a atualização da Política de Privacidade da Flávia Vaz Rabello Advocacia."
      canonical="https://www.flaviavazrabello.com.br/privacidade"
    />
    <PageHero
      eyebrow="Aviso temporário"
      title="Política de Privacidade"
      subtitle="Esta página será substituída antes da publicação pública."
    />

    <section className="py-20 md:py-28">
      <div className="container-narrow">
        <div className="mx-auto max-w-3xl border border-border bg-card p-8 md:p-12">
          <h2 className="font-serif text-2xl text-primary md:text-3xl">Política de Privacidade em atualização.</h2>
          <p className="mt-5 text-foreground/70">
            Para informações, utilize os meios oficiais de contato abaixo.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 border border-border p-4 text-primary transition-colors hover:border-accent hover:text-accent"
            >
              <MessageCircle className="h-5 w-5 shrink-0" />
              <span>WhatsApp</span>
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-3 border border-border p-4 text-primary transition-colors hover:border-accent hover:text-accent"
            >
              <Mail className="h-5 w-5 shrink-0" />
              <span className="break-all">{EMAIL}</span>
            </a>
            {PHONES.map((phone) => (
              <a
                key={phone}
                href={`tel:+55${phone.replace(/\D/g, "")}`}
                className="flex items-center gap-3 border border-border p-4 text-primary transition-colors hover:border-accent hover:text-accent"
              >
                <Phone className="h-5 w-5 shrink-0" />
                <span>{phone}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Privacidade;
