"use client";

import { useEffect, useRef, useState } from "react";

export type Slide = {
  // Caminho da imagem em /public (ex: "/gallery/show-1.jpg").
  // Enquanto não houver foto real, deixe null: o slide renderiza
  // um placeholder com o texto de "label" no lugar da imagem.
  src: string | null;
  label: string;
  caption?: string;
};

export default function Carousel({
  slides,
  autoplayMs = 5000,
}: {
  slides: Slide[];
  autoplayMs?: number;
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = (i: number) => setIndex((i + slides.length) % slides.length);
  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  useEffect(() => {
    if (paused || slides.length <= 1) return;
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, autoplayMs);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused, slides.length, autoplayMs]);

  return (
    <div
      className="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="carousel-track">
        {slides.map((slide, i) => (
          <div
            key={i}
            className="carousel-slide"
            style={{ opacity: i === index ? 1 : 0, zIndex: i === index ? 1 : 0 }}
            aria-hidden={i !== index}
          >
            {slide.src ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={slide.src} alt={slide.caption ?? slide.label} />
            ) : (
              <div className="carousel-placeholder">
                <span className="index">{slide.label}</span>
                <span className="text-muted">[placeholder] adicione a foto em /public/gallery</span>
              </div>
            )}
            {slide.caption && <span className="carousel-caption">{slide.caption}</span>}
          </div>
        ))}
      </div>

      {slides.length > 1 && (
        <>
          <button className="carousel-arrow prev" onClick={prev} aria-label="Foto anterior">
            ←
          </button>
          <button className="carousel-arrow next" onClick={next} aria-label="Próxima foto">
            →
          </button>
          <div className="carousel-dots" role="tablist" aria-label="Selecionar foto">
            {slides.map((_, i) => (
              <button
                key={i}
                className={`carousel-dot ${i === index ? "active" : ""}`}
                onClick={() => goTo(i)}
                aria-label={`Ir para foto ${i + 1}`}
                aria-current={i === index}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
