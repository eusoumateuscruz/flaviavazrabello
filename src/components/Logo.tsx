import { Link } from "react-router-dom";

interface LogoProps {
  variant?: "dark" | "light";
  compact?: boolean;
}

export const Monogram = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 64 64"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <rect x="1" y="1" width="62" height="62" stroke="currentColor" strokeWidth="1" />
    <path
      d="M18 46 V20 H40 M18 32 H34 M34 32 L46 46 M34 32 C40 32 44 28 44 24 C44 20 40 18 36 18"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="square"
      fill="none"
    />
  </svg>
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
