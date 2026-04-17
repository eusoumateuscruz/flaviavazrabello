import flaviaHero from "@/assets/flavia_hero_final_v3-2.png";

const HeroBackground = () => {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none !bg-transparent"
      style={{ background: "transparent", backgroundColor: "transparent" }}
      aria-hidden="true"
    >
      {/* Soft gradient wash */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/60" />

      {/* Advogada portrait — desktop only (mobile usa imagem inline na seção) */}
      <img
        src={flaviaHero}
        alt=""
        className="hidden md:block absolute bottom-0 right-0 h-[95%] w-[50%] object-contain object-bottom-right select-none !bg-transparent"
        style={{ filter: "none", mixBlendMode: "normal", opacity: 1, background: "transparent", backgroundColor: "transparent" }}
      />

      {/* Thin gold lines */}
      <div className="absolute left-0 right-0 top-24 h-px bg-accent/20" />
      <div className="absolute left-10 top-24 bottom-24 w-px bg-accent/15 hidden md:block" />
    </div>
  );
};

export default HeroBackground;
