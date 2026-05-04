import { useState } from "react";
 import { Mail, MapPin, Clock, MessageCircle, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Monogram } from "@/components/Logo";
 import { EMAIL, LOCATION, WHATSAPP_URL, PHONES, HOURS } from "@/lib/site";
import { toast } from "@/hooks/use-toast";

const Contato = () => {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast({
        title: "Mensagem enviada com sucesso",
        description: "Entrarei em contato em breve. Obrigada!",
      });
    }, 700);
  };

  return (
    <>
      <PageHero
        eyebrow="Fale conosco"
        title="Contato"
        subtitle="Estou à disposição para ouvir o seu caso com atenção e sigilo."
      />

      <section className="py-20 md:py-28">
        <div className="container-narrow grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
          {/* Form */}
          <div className="reveal bg-card border border-border p-8 md:p-10">
            <h2 className="font-serif text-2xl md:text-3xl text-primary uppercase tracking-wider">Como podemos ajudar?</h2>
            <div className="mt-3 h-px w-12 bg-accent" />
            <p className="mt-4 text-sm text-foreground/70">
              Preencha o formulário abaixo. Todas as informações são tratadas com absoluto sigilo.
            </p>

            <form onSubmit={onSubmit} className="mt-8 space-y-6">
              <div className="space-y-2">
                <Label htmlFor="nome" className="text-xs uppercase tracking-[0.2em] text-foreground/70">Nome completo:</Label>
                <Input id="nome" name="nome" required className="bg-background" />
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-xs uppercase tracking-[0.2em] text-foreground/70">E-mail:</Label>
                  <Input id="email" name="email" type="email" required className="bg-background" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="telefone" className="text-xs uppercase tracking-[0.2em] text-foreground/70">Telefone/WhatsApp:</Label>
                  <Input id="telefone" name="telefone" type="tel" className="bg-background" />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="origem" className="text-xs uppercase tracking-[0.2em] text-foreground/70">Como nos conheceu?</Label>
                  <select
                    id="origem"
                    name="origem"
                    required
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    defaultValue=""
                  >
                    <option value="" disabled>Selecione...</option>
                    <option>Indicação</option>
                    <option>Google</option>
                    <option>Instagram</option>
                    <option>TikTok</option>
                    <option>Facebook</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="assunto" className="text-xs uppercase tracking-[0.2em] text-foreground/70">Assunto:</Label>
                  <Input id="assunto" name="assunto" required className="bg-background" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="mensagem" className="text-xs uppercase tracking-[0.2em] text-foreground/70">Mensagem:</Label>
                <Textarea id="mensagem" name="mensagem" required rows={5} className="bg-background" />
              </div>

              <div className="flex items-start gap-3 pt-2">
                <input
                  type="checkbox"
                  id="termos"
                  name="termos"
                  required
                  className="mt-1 h-4 w-4 rounded border-gray-300 text-accent focus:ring-accent"
                />
                <Label htmlFor="termos" className="text-xs text-foreground/70 leading-relaxed cursor-pointer">
                  Li e concordo com os termos de uso e política de privacidade
                </Label>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-accent px-10 py-4 text-xs font-bold uppercase tracking-[0.22em] text-accent-foreground hover:bg-accent/90 transition-colors disabled:opacity-60"
              >
                {submitting ? "ENVIANDO..." : "ENVIAR"}
              </button>
            </form>
          </div>

          {/* Sidebar info */}
          <aside className="reveal space-y-6">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-primary text-primary-foreground p-8 group hover:bg-primary/90 transition-colors"
            >
              <MessageCircle className="h-7 w-7 text-accent" />
              <h3 className="mt-5 font-serif text-2xl">WhatsApp</h3>
              <p className="mt-2 text-sm text-primary-foreground/75">Atendimento ágil e direto.</p>
              <span className="mt-5 inline-block text-xs uppercase tracking-[0.22em] text-accent border-b border-accent pb-1 group-hover:tracking-[0.28em] transition-all">
                Iniciar conversa
              </span>
            </a>

            <div className="bg-card border border-border p-8 space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="h-5 w-5 text-accent mt-1 shrink-0" />
                <div>
                  <p className="label-eyebrow">E-mail</p>
                  <a href={`mailto:${EMAIL}`} className="mt-1 block font-serif text-lg text-primary hover:text-accent transition-colors break-all">
                    {EMAIL}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="h-5 w-5 text-accent mt-1 shrink-0" />
                <div>
                  <p className="label-eyebrow">Endereço</p>
                  <p className="mt-1 font-serif text-lg text-primary">{LOCATION}</p>
                </div>
              </div>
               <div className="flex items-start gap-4">
                 <Phone className="h-5 w-5 text-accent mt-1 shrink-0" />
                 <div>
                   <p className="label-eyebrow">Telefones</p>
                   {PHONES.map(phone => (
                     <p key={phone} className="mt-1 font-serif text-lg text-primary">{phone}</p>
                   ))}
                 </div>
               </div>
               <div className="flex items-start gap-4">
                 <Clock className="h-5 w-5 text-accent mt-1 shrink-0" />
                 <div>
                   <p className="label-eyebrow">Atendimento</p>
                   <p className="mt-1 text-sm text-foreground/80">Seg. a Sex. — {HOURS.weekdays}</p>
                   <p className="text-sm text-foreground/70">Sábados — {HOURS.saturday}</p>
                 </div>
               </div>
             </div>
 
             <div className="aspect-[16/9] w-full overflow-hidden border border-border rounded-lg grayscale hover:grayscale-0 transition-all duration-700">
               <iframe
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.328330768913!2d-47.17482342468494!3d-23.139912079092825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf51cf15222687%3A0x868c68c6a0c5c4e8!2sAv.%20Cel.%20Ant%C3%B4nio+Estanislau+do+Amaral%2C+635+-+Itaici%2C+Indaiatuba+-+SP%2C+13340-480!5e0!3m2!1spt-BR!2sbr!4v1715432000000"
                 width="100%"
                 height="100%"
                 style={{ border: 0 }}
                 allowFullScreen
                 loading="lazy"
                 referrerPolicy="no-referrer-when-downgrade"
                 title="Localização"
               ></iframe>
             </div>
          </aside>
        </div>
      </section>
    </>
  );
};

export default Contato;
