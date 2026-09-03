"use client";

import { useState } from "react";

export type VideoItem = {
  src: string;
  poster: string;
  titulo: string;
  credito: string;
};

export default function VideoCarousel({ videos }: { videos: VideoItem[] }) {
  const [index, setIndex] = useState(0);

  const goTo = (i: number) => setIndex((i + videos.length) % videos.length);
  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  const atual = videos[index];

  return (
    <div>
      <div style={{ position: "relative" }}>
        <video
          key={atual.src}
          controls
          preload="metadata"
          poster={atual.poster}
          style={{ width: "100%", borderRadius: "12px", display: "block", background: "#000" }}
        >
          <source src={atual.src} type="video/mp4" />
        </video>

        {videos.length > 1 && (
          <>
            <button className="carousel-arrow prev" onClick={prev} aria-label="Vídeo anterior">
              ←
            </button>
            <button className="carousel-arrow next" onClick={next} aria-label="Próximo vídeo">
              →
            </button>
          </>
        )}
      </div>

      <p style={{ marginTop: "0.6rem", fontSize: "0.85rem" }}>{atual.titulo}</p>
      <p className="text-muted" style={{ fontSize: "0.8rem" }}>{atual.credito}</p>

      {videos.length > 1 && (
        <div className="carousel-dots" style={{ position: "static", marginTop: "0.75rem", justifyContent: "flex-start" }}>
          {videos.map((_, i) => (
            <button
              key={i}
              className={`carousel-dot ${i === index ? "active" : ""}`}
              onClick={() => goTo(i)}
              aria-label={`Ir para vídeo ${i + 1}`}
              aria-current={i === index}
            />
          ))}
        </div>
      )}
    </div>
  );
}
