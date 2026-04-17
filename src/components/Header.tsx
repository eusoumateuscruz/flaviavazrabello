import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { NAV_LINKS, WHATSAPP_URL } from "@/lib/site";
import { cn } from "@/lib/utils";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-background/95 backdrop-blur shadow-[0_1px_0_0_hsl(var(--border))]" : "bg-background/80 backdrop-blur-sm"
      )}
    >
      <div className="container-narrow flex h-20 items-center justify-between">
        <Logo />

        <nav className="hidden lg:flex items-center gap-8" aria-label="Navegação principal">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                cn(
                  "relative text-sm tracking-wide transition-colors py-1",
                  "after:absolute after:left-0 after:bottom-0 after:h-px after:bg-accent after:transition-all after:duration-300",
                  isActive
                    ? "text-accent after:w-full"
                    : "text-foreground/80 hover:text-accent after:w-0 hover:after:w-full"
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-accent px-5 py-2.5 text-xs font-medium uppercase tracking-[0.2em] text-accent-foreground transition-all hover:bg-accent/90 hover:shadow-lg"
          >
            Agendar Consulta
          </a>
        </div>

        <button
          className="lg:hidden p-2 text-primary"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-[max-height] duration-300 ease-out bg-background border-t border-border",
          open ? "max-h-[480px]" : "max-h-0"
        )}
      >
        <nav className="container-narrow flex flex-col py-6 gap-4" aria-label="Navegação mobile">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                cn(
                  "text-base tracking-wide py-2",
                  isActive ? "text-accent" : "text-foreground/85"
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center justify-center bg-accent px-5 py-3 text-xs font-medium uppercase tracking-[0.2em] text-accent-foreground"
          >
            Agendar Consulta
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
