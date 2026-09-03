import Footer from "@/components/Footer";

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

export default function Musica() {
  return (
    <>
      <section className="block" style={{ paddingTop: "4rem" }}>
        <div className="container">
          <div className="split-block" style={{ alignItems: "center" }}>
            <div>
              <span className="eyebrow" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span className="nav-dot" aria-hidden="true" /> Parcerias Autorais
              </span>
              <h1 style={{ fontSize: "clamp(2.4rem, 6vw, 3.6rem)", lineHeight: 0.98, marginTop: "0.5rem" }}>
                Ouça agora
                <br />
                no Spotify
              </h1>
            </div>

            <div
              style={{
                background: "linear-gradient(160deg, var(--accent-deep) 0%, var(--surface) 65%)",
                border: "1px solid var(--border)",
                borderRadius: "16px",
                padding: "1.25rem",
              }}
            >
              <iframe
                style={{ borderRadius: "12px" }}
                src="https://open.spotify.com/embed/playlist/1EmHSIgGTQJUr7ekjlaILk?utm_source=generator&theme=0"
                width="100%"
                height="352"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="block" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <div className="split-block" style={{ alignItems: "center" }}>
            <div>
              <span className="eyebrow">Regravações</span>
              <h2 style={{ marginTop: "0.5rem" }}>
                Ouça agora
                <br />
                no Soundcloud
              </h2>
            </div>

            <div
              style={{
                background: "linear-gradient(160deg, var(--accent-deep) 0%, var(--surface) 65%)",
                border: "1px solid var(--border)",
                borderRadius: "16px",
                padding: "1.25rem",
              }}
            >
              <iframe
                style={{ borderRadius: "12px" }}
                src="https://w.soundcloud.com/player/?url=https%3A%2F%2Fsoundcloud.com%2Fosinoxidaveis&color=%23e8a33d&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=false"
                width="100%"
                height="300"
                frameBorder="0"
                allow="autoplay"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="block" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <span className="eyebrow">Vídeos</span>

          <div className="grid" style={{ marginTop: "2rem" }}>
            <div className="card">
              <video
                controls
                preload="metadata"
                style={{ width: "100%", borderRadius: "2px", display: "block", background: "#000" }}
              >
                <source src="/videos/Inox_ShesElectric.mp4" type="video/mp4" />
              </video>
              <p style={{ marginTop: "0.6rem", fontSize: "0.85rem" }}>
                She&apos;s Electric (Oasis cover)
              </p>
              <p className="text-muted" style={{ fontSize: "0.8rem" }}>
                Os Inoxidáveis (Rodrigo Tavares e Rafael Oliveira)
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
