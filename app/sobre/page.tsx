import Footer from "@/components/Footer";
import PhotoGrid, { Photo } from "@/components/PhotoGrid";

const RETRATO: Photo[] = [
  { src: null, label: "Retrato", caption: "[placeholder] legenda" },
];

export default function Sobre() {
  return (
    <>
      <section className="block" style={{ paddingTop: "4rem" }}>
        <div className="container">
          <span className="eyebrow">A2 — Sobre</span>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", marginTop: "0.5rem" }}>
            [placeholder] Título curto da bio
          </h1>

          <div className="split-block" style={{ marginTop: "2.5rem" }}>
            <PhotoGrid photos={RETRATO} />
            <div>
              <p>
                [placeholder] Parágrafo 1 — como começou na música: primeiro
                instrumento, primeira banda, o momento em que decidiu que
                isso seria sério.
              </p>
              <p className="text-muted">
                [placeholder] Parágrafo 2 — o que te influencia hoje:
                artistas, gêneros, cenas. O que você está tentando dizer com
                o que faz.
              </p>
              <p className="text-muted">
                [placeholder] Parágrafo 3 — onde as pessoas podem te
                encontrar tocando ou ouvir seu trabalho mais recente.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
