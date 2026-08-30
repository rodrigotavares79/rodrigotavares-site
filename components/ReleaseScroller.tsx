export type Release = {
  index: string;
  titulo: string;
  tipo: string; // "Single", "EP", "Álbum"
  ano: string;
  href: string;
  creditos?: string; // ex: "Etanoise — comp. Rodrigo Tavares e Rodrigo Mattos"
  capa?: string; // ex: "/gallery/etanoise-capa.jpg"
};

export default function ReleaseScroller({ releases }: { releases: Release[] }) {
  return (
    <div className="release-scroller">
      {releases.map((r) => (
        <a className="release-card" href={r.href} key={r.index} target="_blank" rel="noopener noreferrer">
          {r.capa ? (
            <div style={{ aspectRatio: "1 / 1", overflow: "hidden", borderRadius: "2px" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={r.capa} alt={r.titulo} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          ) : (
            <div className="photo-placeholder" style={{ aspectRatio: "1 / 1" }}>
              <span className="index">{r.index}</span>
              <span className="text-muted">[placeholder] capa</span>
            </div>
          )}
          <span className="eyebrow" style={{ marginTop: "0.75rem", display: "block" }}>
            {r.tipo} · {r.ano}
          </span>
          <h3 style={{ fontSize: "1rem", marginTop: "0.25rem" }}>{r.titulo}</h3>
          {r.creditos && (
            <p className="text-muted" style={{ fontSize: "0.75rem", marginTop: "0.25rem" }}>
              {r.creditos}
            </p>
          )}
        </a>
      ))}
    </div>
  );
}
