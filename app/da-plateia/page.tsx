import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";

// Fotos enviadas pelo público nos shows. Arquivos em public/gallery/.
const FOTOS = [
  { src: "/gallery/TheBridgePub-1.jpeg", label: "Foto 1", caption: "The Bridge Pub — Belo Horizonte, MG" },
  { src: "/gallery/TheBridgePub-2.jpeg", label: "Foto 2", caption: "The Bridge Pub — Belo Horizonte, MG" },
  { src: "/gallery/TheBridgePub-3.jpeg", label: "Foto 3", caption: "The Bridge Pub — Belo Horizonte, MG" },
  { src: "/gallery/DaPlateia-Sirene_Fleming-01.jpg", label: "Foto 4", caption: "Sirene Fleming — Belo Horizonte, MG" },
  { src: "/gallery/DaPlateia-Sirene_Fleming-02.jpeg", label: "Foto 5", caption: "Sirene Fleming — Belo Horizonte, MG" },
  { src: "/gallery/DaPlateia-Sirene_Fleming-03.jpeg", label: "Foto 6", caption: "Sirene Fleming — Belo Horizonte, MG" },
  { src: "/gallery/DaPlateia-The_Bridge_Pub-01.jpeg", label: "Foto 7", caption: "The Bridge Pub — Belo Horizonte, MG", position: "center 40%" },
  { src: "/gallery/DaPlateia-The_Bridge_Pub-02.jpeg", label: "Foto 8", caption: "The Bridge Pub — Belo Horizonte, MG", position: "center 30%" },
  { src: "/gallery/DaPlateia-The_Bridge_Pub-03.jpg", label: "Foto 9", caption: "The Bridge Pub — Belo Horizonte, MG" },
  { src: "/gallery/DaPlateia-100__Malte-05.jpg", label: "Foto 10", caption: "100% Malte — Belo Horizonte, MG" },
  { src: "/gallery/DaPlateia-Festa_Particular-02.jpg", label: "Foto 11", caption: "Festa Particular — Belo Horizonte, MG" },
  { src: "/gallery/DaPlateia-Festa_Particular-06.jpg", label: "Foto 12", caption: "Festa Particular — Belo Horizonte, MG" },
];

// Vídeos enviados pelo público. "src" para arquivo local (em
// public/videos/), ou "link" para algo hospedado fora (Instagram, YouTube).
const VIDEOS: { titulo: string; local: string; src?: string; link?: string; poster?: string }[] = [
  { titulo: "Registro do show", local: "The Bridge Pub — Belo Horizonte, MG", src: "/videos/VideoTheBridgePub-1.mp4" },
  { titulo: "Trecho 'Heart of Gold'", local: "Sirène Fleming — Belo Horizonte, MG", src: "/videos/Video_Sirene.mp4", poster: "/videos/Video_Sirene-poster.jpg" },
];

export default function DaPlateia() {
  return (
    <>
      <section className="block" style={{ paddingTop: "4rem" }}>
        <div className="container">
          <span className="eyebrow" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span className="nav-dot" aria-hidden="true" /> Da Plateia
          </span>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", marginTop: "0.5rem" }}>
            Registros de quem estava lá
          </h1>
          <p className="text-muted" style={{ maxWidth: "34rem", marginTop: "0.75rem" }}>
            Fotos e vídeos feitos pelo público nos shows. Se você registrou
            algum momento, envia uma mensagem para mim em{" "}
            <a href="/contato" style={{ color: "var(--accent)" }}>contato</a>{" "}
            que eu combino de pegar com você!
          </p>
        </div>
      </section>

      <section className="block" style={{ borderTop: "1px solid var(--border)", paddingTop: "3rem" }}>
        <div className="container">
          <span className="eyebrow">Fotos</span>
          {FOTOS.length === 0 ? (
            <div className="empty-state">
              <strong>Nenhuma foto enviada ainda</strong>
              Assim que alguém compartilhar um registro, ele aparece aqui.
            </div>
          ) : (
            <Gallery photos={FOTOS} />
          )}
        </div>
      </section>

      <section className="block" style={{ borderTop: "1px solid var(--border)", paddingTop: "3rem" }}>
        <div className="container">
          <span className="eyebrow">Vídeos</span>
          {VIDEOS.length === 0 ? (
            <div className="empty-state">
              <strong>Nenhum vídeo enviado ainda</strong>
              Assim que alguém compartilhar um registro, ele aparece aqui.
            </div>
          ) : (
            <div className="grid" style={{ marginTop: "2rem" }}>
              {VIDEOS.map((video, i) =>
                video.src ? (
                  <div className="card" key={i}>
                    <video
                      controls
                      preload="metadata"
                      poster={video.poster}
                      style={{ width: "100%", borderRadius: "2px", display: "block", background: "#000" }}
                    >
                      <source src={video.src} type="video/mp4" />
                    </video>
                    <p style={{ marginTop: "0.6rem", fontSize: "0.85rem" }}>{video.titulo}</p>
                    <p className="text-muted" style={{ fontSize: "0.8rem" }}>{video.local}</p>
                  </div>
                ) : (
                  <div className="card" key={i}>
                    <h3>{video.titulo}</h3>
                    <p>{video.local}</p>
                    <div className="links">
                      <a href={video.link} target="_blank" rel="noopener noreferrer">Assistir →</a>
                    </div>
                  </div>
                )
              )}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
