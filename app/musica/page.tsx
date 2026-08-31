import Footer from "@/components/Footer";
import PhotoGrid, { Photo } from "@/components/PhotoGrid";

const FAIXAS = [
  {
    index: "B1",
    titulo: "Bem Vinda Noite",
    ano: "2006",
    descricao: "Etanoise — comp. Rodrigo Tavares e Rodrigo Mattos",
    capa: "/gallery/etanoise-capa.jpg",
    spotify: "https://open.spotify.com/intl-pt/track/7GiCPhwCKCQtoNEVLGwa2f?si=3d8079a7460a49ce",
  },
  {
    index: "B2",
    titulo: "Podemos Viver Mais",
    ano: "2006",
    descricao: "Etanoise — comp. Rodrigo Tavares e Rodrigo Mattos",
    capa: "/gallery/etanoise-capa.jpg",
    spotify: "https://open.spotify.com/intl-pt/track/4DxrvdUqITglAjDpuvhr10?si=2a52fe621ac44817",
  },
  {
    index: "B3",
    titulo: "Meu Tempo É Você",
    ano: "2006",
    descricao: "Etanoise — comp. Rodrigo Tavares e Rodrigo Mattos",
    capa: "/gallery/etanoise-capa.jpg",
    spotify: "https://open.spotify.com/intl-pt/track/1QwrxskAppqO6ezYhf7ZQN?si=4b8a67b2125a47dc",
  },
];

const GALERIA: Photo[] = [
  { src: "/gallery/Rodrigo-1.jpg", label: "Foto 1" },
  { src: "/gallery/Rodrigo-2.jpg", label: "Foto 2" },
  { src: "/gallery/Rodrigo-4.jpg", label: "Foto 4" },
  { src: "/gallery/Rodrigo-6.jpg", label: "Foto 6", tall: true },
  { src: "/gallery/Rodrigo-8.jpg", label: "Foto 8" },
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
            Parcerias autorais
          </p>

          <div className="grid">
            {FAIXAS.map((faixa) => (
              <div className="card" key={faixa.index}>
                <div style={{ aspectRatio: "1 / 1", overflow: "hidden", borderRadius: "2px", marginBottom: "1rem" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={faixa.capa}
                    alt={faixa.titulo}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <span className="index">{faixa.index} · {faixa.ano}</span>
                <h3>{faixa.titulo}</h3>
                <p>{faixa.descricao}</p>
                <div className="links">
                  <a href={faixa.spotify} target="_blank" rel="noopener noreferrer">Spotify</a>
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
