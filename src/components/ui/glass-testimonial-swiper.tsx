import * as React from "react";

export type Testimonial = {
  initials: string;
  name: string;
  role: string;
  quote: string;
  tag: string;
  featured?: boolean;
  avatarGradient: string;
};

type Props = {
  testimonials: Testimonial[];
};

export const TestimonialStack: React.FC<Props> = ({ testimonials }) => {
  const [active, setActive] = React.useState(0);
  const [dragX, setDragX] = React.useState(0);
  const [isDragging, setIsDragging] = React.useState(false);
  const startX = React.useRef(0);

  const total = testimonials.length;

  const next = React.useCallback(() => setActive((i) => (i + 1) % total), [total]);
  const prev = React.useCallback(() => setActive((i) => (i - 1 + total) % total), [total]);

  const onPointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    startX.current = e.clientX;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    setDragX(e.clientX - startX.current);
  };

  const onPointerUp = () => {
    if (!isDragging) return;
    const threshold = 80;
    if (dragX < -threshold) next();
    else if (dragX > threshold) prev();
    setIsDragging(false);
    setDragX(0);
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="testimonials-stack w-full">
        {testimonials.map((t, i) => {
          const offset = (i - active + total) % total;
          const isTop = offset === 0;
          const visible = offset <= 2;

          let translateY = 0;
          let scale = 1;
          let opacity = 1;
          let zIndex = total - offset;
          let translateX = 0;
          let rotate = 0;

          if (offset === 1) {
            translateY = 16;
            scale = 0.96;
            opacity = 0.85;
          } else if (offset === 2) {
            translateY = 32;
            scale = 0.92;
            opacity = 0.6;
          } else if (offset > 2) {
            opacity = 0;
          }

          if (isTop && isDragging) {
            translateX = dragX;
            rotate = dragX * 0.04;
          }

          return (
            <div
              key={i}
              className={`testimonial-card p-8 md:p-10 ${isTop && isDragging ? "is-dragging" : ""}`}
              style={{
                transform: `translate(${translateX}px, ${translateY}px) scale(${scale}) rotate(${rotate}deg)`,
                opacity: visible ? opacity : 0,
                zIndex,
                pointerEvents: isTop ? "auto" : "none",
              }}
              onPointerDown={isTop ? onPointerDown : undefined}
              onPointerMove={isTop ? onPointerMove : undefined}
              onPointerUp={isTop ? onPointerUp : undefined}
              onPointerCancel={isTop ? onPointerUp : undefined}
            >
              <div className="flex items-center gap-4">
                <div
                  className="h-14 w-14 rounded-full flex items-center justify-center text-white font-serif text-lg shrink-0"
                  style={{ background: t.avatarGradient }}
                >
                  {t.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-serif text-lg" style={{ color: "#3B4A2F" }}>
                    {t.name}
                  </div>
                  <div className="text-xs uppercase tracking-[0.18em]" style={{ color: "#6B6B5A" }}>
                    {t.role}
                  </div>
                </div>
                <span
                  className="text-xs px-3 py-1 rounded-full font-medium whitespace-nowrap"
                  style={
                    t.featured
                      ? { background: "#A66219", color: "#fff" }
                      : { background: "rgba(166,98,25,0.1)", color: "#A66219" }
                  }
                >
                  {t.tag}
                </span>
              </div>
              <blockquote
                className="mt-6 font-serif text-base md:text-lg italic leading-relaxed"
                style={{ color: "#3B4A2F" }}
              >
                "{t.quote}"
              </blockquote>
            </div>
          );
        })}
      </div>

      <div className="mt-8 flex items-center gap-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            aria-label={`Ir para depoimento ${i + 1}`}
            className={`pagination-dot ${i === active ? "active" : ""}`}
            onClick={() => setActive(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialStack;
