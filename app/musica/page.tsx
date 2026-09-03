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

const FAIXAS_SOUNDCLOUD = [
  {
    index: "C1",
    titulo: "Knockin' on Heaven's Door",
    ano: "2020",
    descricao: "Os Inoxidáveis — Rodrigo Tavares",
    capa: "/gallery/os-inoxidaveis-capa.jpg",
    soundcloud: "https://soundcloud.com/osinoxidaveis/knockin-on-heavens-door",
  },
  {
    index: "C2",
    titulo: "Something",
    ano: "2020",
    descricao: "Os Inoxidáveis — Rodrigo Tavares (voz), Rafael Oliveira (violão e guitarra)",
    capa: "/gallery/os-inoxidaveis-capa.jpg",
    soundcloud: "https://soundcloud.com/osinoxidaveis/something",
  },
  {
    index: "C3",
    titulo: "I Wanna Hold Your Hand",
    ano: "2013",
    descricao: "Os Inoxidáveis — Rodrigo Tavares (voz), Francis Magalhães (violão, baixo, percussão e backing vocals)",
    capa: "/gallery/os-inoxidaveis-capa.jpg",
    soundcloud: "https://soundcloud.com/osinoxidaveis/i-wanna-hold-your-hand",
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
                <span className="nav-dot" aria-hidden="true" /> Discografia
              </span>
              <h1 style={{ fontSize: "clamp(2.4rem, 6vw, 3.6rem)", lineHeight: 0.98, marginTop: "0.5rem" }}>
                Ouça agora
                <br />
                no Spotify
              </h1>
              <p className="text-muted" style={{ maxWidth: "26rem", marginTop: "1rem" }}>
                Parcerias autorais
              </p>
            </div>

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
      </section>

      <section className="block" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <span className="eyebrow">Regravações</span>
          <h2>No Soundcloud</h2>
          
          <div className="grid">
            {FAIXAS_SOUNDCLOUD.map((faixa) => (
              <div className="card" key={faixa.index}>
                <div style={{ aspectRatio: "1 / 1", overflow: "hidden", borderRadius: "2px", marginBottom: "1rem" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={faixa.capa}
                    alt={faixa.titulo}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <span className="index">{faixa.ano}</span>
                <h3>
                  <a href={faixa.soundcloud} target="_blank" rel="noopener noreferrer" style={{ color: "inherit" }}>
                    {faixa.titulo}
                  </a>
                </h3>
                <p>{faixa.descricao}</p>
                <div className="links">
                  <a href={faixa.soundcloud} target="_blank" rel="noopener noreferrer">Soundcloud</a>
                </div>
              </div>
            ))}
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
