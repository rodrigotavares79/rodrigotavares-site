import Footer from "@/components/Footer";

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

export default function Musica() {
  return (
    <>
      <section className="block" style={{ paddingTop: "4rem" }}>
        <div className="container">
          <span className="eyebrow">A3 — Música</span>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", marginTop: "0.5rem" }}>
            Faixas
          </h1>
          <p className="text-muted" style={{ maxWidth: "34rem", marginTop: "0.75rem" }}>
            [placeholder] Substitua os cards abaixo pelas suas faixas reais,
            com links para Spotify, YouTube ou onde estiverem publicadas.
          </p>

          <div className="grid">
            {FAIXAS.map((faixa) => (
              <div className="card" key={faixa.index}>
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
      <Footer />
    </>
  );
}
