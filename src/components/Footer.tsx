import { Link } from "react-router-dom";
import { Instagram, Linkedin, MessageCircle, Mail, MapPin } from "lucide-react";
import Logo from "./Logo";
import { EMAIL, LOCATION, NAV_LINKS, PRACTICE_AREAS, WHATSAPP_URL } from "@/lib/site";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-narrow py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo variant="light" />
            <p className="mt-6 text-sm leading-relaxed text-primary-foreground/70 max-w-xs">
              Advocacia com propósito, ética e dedicação. Atendimento humanizado em Campinas e região.
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
                  <Link to="/areas" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
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
                <span>{LOCATION}</span>
              </li>
            </ul>

            <div className="mt-6 flex items-center gap-3">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-2 border border-primary-foreground/20 hover:border-accent hover:text-accent transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2 border border-primary-foreground/20 hover:border-accent hover:text-accent transition-colors">
                <Linkedin className="h-4 w-4" />
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
