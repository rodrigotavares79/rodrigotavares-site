import Footer from "@/components/Footer";
import PhotoGrid, { Photo } from "@/components/PhotoGrid";

const RETRATO: Photo[] = [
  { src: "/gallery/Rodrigo-3.jpg", label: "Retrato" },
];

export default function Sobre() {
  return (
    <>
      <section className="block" style={{ paddingTop: "4rem" }}>
        <div className="container">
          <span className="eyebrow">A2 — Sobre</span>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", marginTop: "0.5rem" }}>
            Pop and Roll !
          </h1>

          <div className="split-block" style={{ marginTop: "2.5rem" }}>
            <PhotoGrid photos={RETRATO} />
            <div>
              <p>
                Rodrigo Tavares é cantor, compositor e instrumentista, com
                mais de duas décadas de música no currículo. Começou em Juiz
                de Fora (MG), sua cidade natal, integrando a banda Etanoise
                e assinando composições do primeiro disco do grupo — foi
                ali que deu os primeiros passos como compositor.
              </p>
              <p className="text-muted">
                Desde 2006 vive e toca em Belo Horizonte. Passou pela
                Radiotape, ainda no início da banda, e depois assumiu baixo
                e voz no Cevada Blues. Ao longo do caminho,
                foi se firmando no pop rock brasileiro e internacional —
                principalmente aquelas músicas que atravessam dos anos 1970
                aos 2000 — sempre transitando entre bandas, estilos e formatos
                diferentes.
              </p>
              <p className="text-muted">
                Hoje toca ao lado de Rafael Oliveira no duo Os Inoxidáveis,
                revisitando clássicos da música brasileira e internacional
                com o projeto "Rock and Roll de Boteco".
              </p>
              <p className="text-muted">
                Desde que chegou a BH, já passou pelos principais palcos da
                noite da cidade — Jack Rock Bar, The Bridge Pub, 100%
                Malte, StoneHenge, Underground Pub — construindo uma
                relação de anos com o circuito de bares e casas de show.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
