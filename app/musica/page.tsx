import Footer from "@/components/Footer";
import PhotoGrid, { Photo } from "@/components/PhotoGrid";

const FAIXAS = [
  {
    index: "B1",
    titulo: "[placeholder] Nome da faixa",
    ano: "2026",
    descricao: "[placeholder] Uma linha sobre a faixa — de onde veio, com quem foi feita.",
    spotify: "#",
    youtube: "#",
  },
  {
    index: "B2",
    titulo: "[placeholder] Nome da faixa",
    ano: "2025",
    descricao: "[placeholder] Uma linha sobre a faixa.",
    spotify: "#",
    youtube: "#",
  },
  {
    index: "B3",
    titulo: "[placeholder] Nome da faixa",
    ano: "2025",
    descricao: "[placeholder] Uma linha sobre a faixa.",
    spotify: "#",
    youtube: "#",
  },
];

const GALERIA: Photo[] = [
  { src: null, label: "Foto 1", tall: true },
  { src: null, label: "Foto 2" },
  { src: null, label: "Foto 3" },
  { src: null, label: "Foto 4" },
  { src: null, label: "Foto 5" },
  { src: null, label: "Foto 6" },
];

export default function Musica() {
  return (
    <>
      <section className="block" style={{ paddingTop: "4rem" }}>
        <div className="container">
          <span className="eyebrow" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span className="nav-dot" aria-hidden="true" /> Música
          </span>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", marginTop: "0.5rem" }}>
            Faixas
          </h1>
          <p className="text-muted" style={{ maxWidth: "34rem", marginTop: "0.75rem" }}>
            [placeholder] Cada card abaixo é pensado pra ter uma foto de capa
            — troque o bloco de placeholder por &lt;img src="/gallery/..."&gt;
            assim que tiver a arte de cada faixa.
          </p>

          <div className="grid">
            {FAIXAS.map((faixa) => (
              <div className="card" key={faixa.index}>
                <div className="photo-placeholder" style={{ aspectRatio: "1 / 1", marginBottom: "1rem" }}>
                  <span className="index">{faixa.index}</span>
                  <span className="text-muted">[placeholder] capa</span>
                </div>
                <span className="index">{faixa.index} · {faixa.ano}</span>
                <h3>{faixa.titulo}</h3>
                <p>{faixa.descricao}</p>
                <div className="links">
                  <a href={faixa.spotify}>Spotify</a>
                  <a href={faixa.youtube}>YouTube</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="block" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <span className="eyebrow">Galeria</span>
          <h2>Fotos oficiais</h2>
          <PhotoGrid photos={GALERIA} />
        </div>
      </section>

      <Footer />
    </>
  );
}
