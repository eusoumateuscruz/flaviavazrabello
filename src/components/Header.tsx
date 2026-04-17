import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, WHATSAPP_URL } from "@/lib/site";
import { cn } from "@/lib/utils";
import frSymbol from "@/assets/fr-symbol.png";

const LEFT_LINKS = NAV_LINKS.slice(0, 3);
const RIGHT_LINKS = NAV_LINKS.slice(3);

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    cn(
      "relative transition-colors py-1 px-4 whitespace-nowrap",
      "after:absolute after:left-0 after:bottom-0 after:h-px after:bg-accent after:transition-all after:duration-300",
      isActive
        ? "text-accent after:w-full"
        : "text-foreground/80 hover:text-accent after:w-0 hover:after:w-full"
    );

  return (
    <header className="fixed top-5 left-0 right-0 z-50 px-4 pointer-events-none">
      <div
        className="pointer-events-auto relative"
        style={{ width: "90%", maxWidth: "1200px", margin: "0 auto", overflow: "visible" }}
      >
        {/* Glass bar */}
        <div
          className="hidden lg:flex relative items-center justify-between px-8 rounded-full border"
          style={{
            background: "rgba(243, 242, 237, 0.6)",
            backdropFilter: "blur(16px) saturate(180%)",
            WebkitBackdropFilter: "blur(16px) saturate(180%)",
            borderColor: "rgba(166, 98, 25, 0.2)",
            boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
            overflow: "visible",
            height: "56px",
            fontSize: "14px",
            letterSpacing: "0.04em",
          }}
        >
          <nav
            className="flex items-center"
            style={{ flex: 1, justifyContent: "flex-end", paddingRight: "48px" }}
            aria-label="Navegação esquerda"
          >
            {LEFT_LINKS.map((link) => (
              <NavLink key={link.to} to={link.to} end={link.to === "/"} className={navLinkClass}>
                {link.label}
              </NavLink>
            ))}
          </nav>

          <Link
            to="/"
            aria-label="Flávia Vaz Rabello Advocacia — Início"
            className="group absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex shrink-0 items-center justify-center"
          >
            <span
              className="flex h-[60px] w-[60px] items-center justify-center rounded-full transition-transform group-hover:scale-105"
              style={{
                background: "#F3F2ED",
                border: "1px solid #A66219",
                boxShadow: "0 4px 16px rgba(0,0,0,0.10)",
              }}
            >
              <img
                src={frSymbol}
                alt="Flávia Vaz Rabello — monograma FR"
                className="h-8 w-auto"
              />
            </span>
          </Link>

          <nav
            className="flex items-center"
            style={{ flex: 1, justifyContent: "flex-start", paddingLeft: "48px" }}
            aria-label="Navegação direita"
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
              className="relative py-1 px-4 whitespace-nowrap text-accent hover:text-accent/80 after:absolute after:left-4 after:right-4 after:bottom-0 after:h-px after:bg-accent"
            >
              Agendar Consulta
            </a>
          </nav>
        </div>

        {/* Mobile glass bar */}
        <div
          className="lg:hidden flex items-center justify-between gap-4 px-5 py-2.5 rounded-full border"
          style={{
            background: "rgba(243, 242, 237, 0.6)",
            backdropFilter: "blur(16px) saturate(180%)",
            WebkitBackdropFilter: "blur(16px) saturate(180%)",
            borderColor: "rgba(166, 98, 25, 0.2)",
            boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
          }}
        >
          <Link to="/" aria-label="Início" className="flex items-center">
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-accent/70">
              <img
                src={frSymbol}
                alt="Flávia Vaz Rabello — monograma FR"
                className="h-7 w-auto"
              />
            </span>
          </Link>
          <button
            className="p-2 text-primary"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu panel */}
        <div
          className={cn(
            "lg:hidden mt-3 overflow-hidden transition-[max-height] duration-300 ease-out rounded-3xl border",
            open ? "max-h-[480px]" : "max-h-0 border-transparent"
          )}
          style={
            open
              ? {
                  background: "rgba(243, 242, 237, 0.85)",
                  backdropFilter: "blur(16px) saturate(180%)",
                  WebkitBackdropFilter: "blur(16px) saturate(180%)",
                  borderColor: "rgba(166, 98, 25, 0.2)",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
                }
              : undefined
          }
        >
          <nav className="flex flex-col p-6 gap-4" aria-label="Navegação mobile">
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
              className="mt-2 inline-flex items-center justify-center bg-accent px-5 py-3 text-xs font-medium uppercase tracking-[0.2em] text-accent-foreground rounded-full"
            >
              Agendar Consulta
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
