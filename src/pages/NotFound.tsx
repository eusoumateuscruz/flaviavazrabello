import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Monogram } from "@/components/Logo";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-background py-20">
      <div className="text-center">
        <Monogram className="h-20 w-20 text-accent mx-auto" />
        <p className="mt-8 label-eyebrow">Erro 404</p>
        <h1 className="mt-4 font-serif text-5xl md:text-6xl text-primary">Página não encontrada</h1>
        <div className="gold-rule mt-6" />
        <p className="mt-6 text-foreground/70">A página que você procura não existe ou foi movida.</p>
        <Link
          to="/"
          className="mt-10 inline-flex items-center justify-center gap-2 bg-accent px-7 py-3.5 text-xs uppercase tracking-[0.22em] text-accent-foreground hover:bg-accent/90 transition-colors"
        >
          Voltar ao início
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
