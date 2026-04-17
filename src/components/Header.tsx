import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Monogram } from "./Logo";
import { NAV_LINKS, WHATSAPP_URL } from "@/lib/site";
import { cn } from "@/lib/utils";

const LEFT_LINKS = NAV_LINKS.slice(0, 3); // Início, Sobre, Áreas
const RIGHT_LINKS = NAV_LINKS.slice(3);   // Blog, Contato

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

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    cn(
      "relative text-sm tracking-wide transition-colors py-1",
      "after:absolute after:left-0 after:bottom-0 after:h-px after:bg-accent after:transition-all after:duration-300",
      isActive
        ? "text-accent after:w-full"
        : "text-foreground/80 hover:text-accent after:w-0 hover:after:w-full"
    );

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/95 backdrop-blur shadow-[0_1px_0_0_hsl(var(--border))]"
          : "bg-background/80 backdrop-blur-sm"
      )}
    >
      <div className="container-narrow flex h-20 items-center justify-between gap-6">
        {/* Left nav */}
        <nav
          className="hidden lg:flex flex-1 items-center justify-start gap-8"
          aria-label="Navegação principal — esquerda"
        >
          {LEFT_LINKS.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === "/"} className={navLinkClass}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Center monogram */}
        <Link
          to="/"
          aria-label="Flávia Vaz Rabello Advocacia — Início"
          className="group flex shrink-0 items-center justify-center"
        >
          <span className="flex h-14 w-14 items-center justify-center rounded-full border border-accent transition-transform group-hover:scale-105">
            <Monogram className="h-8 w-8 text-accent" />
          </span>
        </Link>

        {/* Right nav */}
        <nav
          className="hidden lg:flex flex-1 items-center justify-end gap-8"
          aria-label="Navegação principal — direita"
        >
          {RIGHT_LINKS.map((link) => (
            <NavLink key={link.to} to={link.to} className={navLinkClass}>
              {link.label}
            </NavLink>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="relative text-sm tracking-wide py-1 text-accent after:absolute after:left-0 after:bottom-0 after:h-px after:w-full after:bg-accent after:transition-all hover:text-accent/80"
          >
            Agendar Consulta
          </a>
        </nav>

        {/* Mobile toggle */}
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
                cn("text-base tracking-wide py-2", isActive ? "text-accent" : "text-foreground/85")
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
