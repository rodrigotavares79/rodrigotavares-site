"use client";

import { useState } from "react";

export type GalleryPhoto = {
  src: string;
  label: string;
  caption?: string;
  tall?: boolean;
  // Posição vertical do recorte (ex: "center 40%") — ajuste fino pra
  // fotos onde o recorte automático corta a cabeça de alguém.
  position?: string;
  // "contain" mostra a foto inteira (zoom out), sem cortar nada.
  fit?: "cover" | "contain";
}; 

export default function Gallery({ photos }: { photos: GalleryPhoto[] }) {
  const [open, setOpen] = useState<number | null>(null);

  const close = () => setOpen(null);
  const next = () => setOpen((i) => (i === null ? null : (i + 1) % photos.length));
  const prev = () => setOpen((i) => (i === null ? null : (i - 1 + photos.length) % photos.length));

  return (
    <>
      <div className="photo-grid">
        {photos.map((photo, i) => (
          <figure
            className={`photo-tile ${photo.tall ? "tall" : ""}`}
            key={i}
            onClick={() => setOpen(i)}
            style={{ cursor: "zoom-in", background: photo.fit === "contain" ? "var(--surface)" : undefined }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photo.src}
              alt={photo.caption ?? photo.label}
              style={{
                ...(photo.position ? { objectPosition: photo.position } : {}),
                ...(photo.fit === "contain" ? { objectFit: "contain" as const } : {}),
              }}
            />
            {photo.caption && <figcaption>{photo.caption}</figcaption>}
          </figure>
        ))}
      </div>

      {open !== null && (
        <div
          onClick={close}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(10, 9, 8, 0.92)",
            zIndex: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
          }}
        >
          <button
            onClick={(e) => { e.stopPropagation(); close(); }}
            aria-label="Fechar"
            style={{
              position: "absolute", top: "1.25rem", right: "1.5rem",
              background: "transparent", border: "1px solid var(--border)",
              color: "var(--text)", width: "2.5rem", height: "2.5rem",
              borderRadius: "999px", fontSize: "1.1rem", cursor: "pointer",
            }}
          >
            ✕
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Foto anterior"
            className="carousel-arrow prev"
            style={{ position: "absolute" }}
          >
            ←
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Próxima foto"
            className="carousel-arrow next"
            style={{ position: "absolute" }}
          >
            →
          </button>

          <figure
            onClick={(e) => e.stopPropagation()}
            style={{ margin: 0, maxWidth: "90vw", maxHeight: "85vh", textAlign: "center" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photos[open].src}
              alt={photos[open].caption ?? photos[open].label}
              style={{ maxWidth: "90vw", maxHeight: "78vh", objectFit: "contain", display: "block", margin: "0 auto", borderRadius: "4px" }}
            />
            {photos[open].caption && (
              <figcaption style={{ marginTop: "0.75rem", fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "var(--text-muted)" }}>
                {photos[open].caption}
              </figcaption>
            )}
          </figure>
        </div>
      )}
    </>
  );
}
