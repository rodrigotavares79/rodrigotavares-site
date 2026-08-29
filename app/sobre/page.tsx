import Footer from "@/components/Footer";

export default function Sobre() {
  return (
    <>
      <section className="block" style={{ paddingTop: "4rem" }}>
        <div className="container">
          <span className="eyebrow">A2 — Sobre</span>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", marginTop: "0.5rem" }}>
            [placeholder] Título curto da bio
          </h1>

          <div style={{ maxWidth: "38rem", marginTop: "2rem" }}>
            <p>
              [placeholder] Parágrafo 1 — como começou na música: primeiro
              instrumento, primeira banda, o momento em que decidiu que isso
              seria sério.
            </p>
            <p className="text-muted">
              [placeholder] Parágrafo 2 — o que te influencia hoje: artistas,
              gêneros, cenas. O que você está tentando dizer com o que faz.
            </p>
            <p className="text-muted">
              [placeholder] Parágrafo 3 — onde as pessoas podem te encontrar
              tocando ou ouvir seu trabalho mais recente.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
