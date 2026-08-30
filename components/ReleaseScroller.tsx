export type Release = {
  index: string;
  titulo: string;
  tipo: string; // "Single", "EP", "Álbum"
  ano: string;
  href: string;
};

export default function ReleaseScroller({ releases }: { releases: Release[] }) {
  return (
    <div className="release-scroller">
      {releases.map((r) => (
        <a className="release-card" href={r.href} key={r.index}>
          <div className="photo-placeholder" style={{ aspectRatio: "1 / 1" }}>
            <span className="index">{r.index}</span>
            <span className="text-muted">[placeholder] capa</span>
          </div>
          <span className="eyebrow" style={{ marginTop: "0.75rem", display: "block" }}>
            {r.tipo} · {r.ano}
          </span>
          <h3 style={{ fontSize: "1rem", marginTop: "0.25rem" }}>{r.titulo}</h3>
        </a>
      ))}
    </div>
  );
}
