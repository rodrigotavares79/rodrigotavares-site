import Footer from "@/components/Footer";
import PhotoGrid, { Photo } from "@/components/PhotoGrid";

const RETRATO: Photo[] = [
  { src: "/gallery/Rodrigo-3.jpg", label: "Retrato" },
];

const GALERIA: Photo[] = [
  { src: "/gallery/Rodrigo-1.jpg", label: "Foto 1" },
  { src: "/gallery/Rodrigo-2.jpg", label: "Foto 2" },
  { src: "/gallery/Rodrigo-4.jpg", label: "Foto 4" },
  { src: "/gallery/Rodrigo-6.jpg", label: "Foto 6", tall: true },
  { src: "/gallery/Rodrigo-8.jpg", label: "Foto 8", tall: true },
];

export default function Sobre() {
  return (
    <>
      <section className="block" style={{ paddingTop: "4rem" }}>
        <div className="container">
          <span className="eyebrow" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span className="nav-dot" aria-hidden="true" /> Sobre
          </span>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", marginTop: "0.5rem" }}>
            Pop and Roll!!
          </h1>

          <div className="split-block" style={{ marginTop: "2.5rem" }}>
            <PhotoGrid photos={RETRATO} />
            <div>
              <p>
                Rodrigo Tavares é cantor, compositor e instrumentista, com
                mais de duas décadas de música nas costas. Começou em Juiz
                de Fora (MG), sua cidade natal, integrando a banda Etanoise
                e assinando composições do primeiro disco do grupo — foi
                ali que deu os primeiros passos como compositor.
              </p>
              <p className="text-muted">
                Desde 2006 vive e toca em Belo Horizonte. Passou pela banda
                indie Radiotape, ainda no seu início, e depois assumiu
                baixo e voz no Cevada Blues. Ao longo do caminho, foi se
                firmando no pop rock brasileiro e internacional —
                principalmente aquelas músicas que atravessam dos anos 1970
                aos 2000 — sempre transitando entre bandas e formatos
                diferentes.
              </p>
              <p className="text-muted">
                Em 2008 montou o projeto "Rock and Roll de Boteco" com
                Rafael Oliveira no duo Os Inoxidáveis, revisitando
                clássicos da música brasileira e internacional em
                apresentações com roupagem criativa e original.
              </p>
              <p className="text-muted">
                Desde que chegou a BH, já passou pelos principais palcos da
                noite da cidade — Jack Rock Bar, The Bridge Pub, 100%
                Malte, StoneHenge, Underground Pub — construindo uma
                relação de anos com o circuito de bares e casas de show.
              </p>
              <p className="text-muted">
                Além dos reconhecidos palcos e casas da capital mineira,
                Rodrigo Tavares também se apresenta em festas particulares
                e eventos diversos.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="block" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <span className="eyebrow">Galeria</span>
          <PhotoGrid photos={GALERIA} />
        </div>
      </section>

      <Footer />
    </>
  );
}
