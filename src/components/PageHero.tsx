interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

const PageHero = ({ eyebrow, title, subtitle }: PageHeroProps) => {
  return (
    <section className="relative bg-secondary/40 border-b border-border">
      <div className="container-narrow pt-36 md:pt-44 pb-20 md:pb-28 text-center">
        {eyebrow && <p className="label-eyebrow mb-4">{eyebrow}</p>}
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary leading-[1.05]">
          {title}
        </h1>
        <div className="gold-rule mt-6" />
        {subtitle && (
          <p className="mt-6 mx-auto max-w-2xl text-base md:text-lg text-foreground/75">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageHero;
