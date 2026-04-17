import { Link } from "react-router-dom";
import frSymbol from "@/assets/fr-symbol.png";

interface LogoProps {
  variant?: "dark" | "light";
  compact?: boolean;
}

export const Monogram = ({ className = "" }: { className?: string }) => (
  <img
    src={frSymbol}
    alt="Flávia Vaz Rabello — monograma FR"
    className={className}
    style={{ objectFit: "contain" }}
  />
);

const Logo = ({ variant = "dark", compact = false }: LogoProps) => {
  const text = variant === "dark" ? "text-primary" : "text-background";
  const sub = variant === "dark" ? "text-foreground/70" : "text-background/70";
  const mono = variant === "dark" ? "text-accent" : "text-accent";

  return (
    <Link to="/" className="group flex items-center gap-3" aria-label="Flávia Vaz Rabello Advocacia — Início">
      <Monogram className={`h-10 w-10 ${mono} transition-transform group-hover:scale-105`} />
      {!compact && (
        <div className="leading-tight">
          <div className={`font-serif text-base md:text-lg tracking-wide ${text}`}>
            FLÁVIA VAZ RABELLO
          </div>
          <div className={`text-[0.625rem] uppercase tracking-[0.32em] ${sub}`}>
            Advocacia
          </div>
        </div>
      )}
    </Link>
  );
};

export default Logo;
