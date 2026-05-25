import { Link } from "react-router-dom";
import { Instagram, Linkedin, MessageCircle, Mail, MapPin } from "lucide-react";
import Logo from "./Logo";
import { EMAIL, LOCATION, NAV_LINKS, PRACTICE_AREAS, WHATSAPP_URL, SOCIAL_LINKS } from "@/lib/site";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-narrow py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo variant="light" />
            <p className="mt-6 text-sm leading-relaxed text-primary-foreground/70 max-w-xs">
               Advocacia com propósito, ética e dedicação. Atendimento presencial e online em todo o Brasil.
            </p>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.25em] text-accent font-sans font-medium">Navegação</h3>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.25em] text-accent font-sans font-medium">Áreas</h3>
            <ul className="mt-5 space-y-3">
              {PRACTICE_AREAS.map((a) => (
                <li key={a.id}>
                  <Link to={`/servicos/${a.id}`} className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                    {a.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.25em] text-accent font-sans font-medium">Contato</h3>
            <ul className="mt-5 space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 text-accent shrink-0" />
                <a href={`mailto:${EMAIL}`} className="hover:text-accent break-all">{EMAIL}</a>
              </li>
               <li className="flex items-start gap-2">
                 <MapPin className="h-4 w-4 mt-0.5 text-accent shrink-0" />
                 <span className="text-xs leading-relaxed">{LOCATION}</span>
               </li>
            </ul>

            <div className="mt-6 flex items-center gap-3">
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-2 border border-primary-foreground/20 hover:border-accent hover:text-accent transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="p-2 border border-primary-foreground/20 hover:border-accent hover:text-accent transition-colors">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
              </a>
              <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="p-2 border border-primary-foreground/20 hover:border-accent hover:text-accent transition-colors">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.13-1.47V18c0 1.25-.33 2.48-1 3.52-1.29 2.13-3.74 3.48-6.22 3.32-2.52-.16-4.83-1.87-5.74-4.25-.92-2.4-.33-5.26 1.45-7.14 1.48-1.57 3.63-2.34 5.76-2.05v4.03c-1.12-.17-2.3.09-3.15.85-.85.76-1.11 1.95-.73 3.03.38 1.08 1.48 1.79 2.61 1.73 1.13-.06 2.09-.94 2.19-2.07l.03-14.15z"/></svg>
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="p-2 border border-primary-foreground/20 hover:border-accent hover:text-accent transition-colors">
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-primary-foreground/15 flex flex-col md:flex-row gap-4 items-center justify-between text-xs text-primary-foreground/60">
          <p>OAB 262057/SP — {EMAIL}</p>
          <p>© {new Date().getFullYear()} Flávia Vaz Rabello Advocacia. Todos os direitos reservados.</p>
          <Link to="/privacidade" className="hover:text-accent transition-colors">Política de Privacidade (LGPD)</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
