interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

const SectionHeader = ({ eyebrow, title, subtitle, align = "center" }: SectionHeaderProps) => {
  return (
    <div className={`reveal max-w-2xl ${align === "center" ? "mx-auto text-center" : "text-left"}`}>
      {eyebrow && <p className="label-eyebrow mb-4">{eyebrow}</p>}
      <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary leading-[1.1]">
        {title}
      </h2>
      {align === "center" && <div className="gold-rule mt-6" />}
      {subtitle && (
        <p className="mt-6 text-base md:text-lg text-foreground/75 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
