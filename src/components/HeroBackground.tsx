const HeroBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Soft gradient wash */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/60" />

      {/* Geometric monogram echo */}
      <svg
        className="absolute -right-20 top-1/2 -translate-y-1/2 w-[640px] h-[640px] text-primary/[0.06]"
        viewBox="0 0 64 64"
        fill="none"
      >
        <path
          d="M18 46 V20 H40 M18 32 H34 M34 32 L46 46 M34 32 C40 32 44 28 44 24 C44 20 40 18 36 18"
          stroke="currentColor"
          strokeWidth="0.6"
          fill="none"
        />
      </svg>

      {/* Thin gold lines */}
      <div className="absolute left-0 right-0 top-24 h-px bg-accent/20" />
      <div className="absolute left-10 top-24 bottom-24 w-px bg-accent/15 hidden md:block" />
    </div>
  );
};

export default HeroBackground;
