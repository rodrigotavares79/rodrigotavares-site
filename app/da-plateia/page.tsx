import Footer from "@/components/Footer";
import PhotoGrid, { Photo } from "@/components/PhotoGrid";

// Fotos enviadas pelo público nos shows. Arquivos em public/gallery/.
const FOTOS: Photo[] = [
  { src: "/gallery/TheBridgePub-1.jpeg", label: "Foto 1", caption: "The Bridge Pub — Belo Horizonte, MG" },
  { src: "/gallery/TheBridgePub-2.jpeg", label: "Foto 2", caption: "The Bridge Pub — Belo Horizonte, MG" },
  { src: "/gallery/TheBridgePub-3.jpeg", label: "Foto 3", caption: "The Bridge Pub — Belo Horizonte, MG" },
];

// Vídeos enviados pelo público. "src" para arquivo local (em
// public/videos/), ou "link" para algo hospedado fora (Instagram, YouTube).
const VIDEOS: { titulo: string; local: string; src?: string; link?: string }[] = [
  { titulo: "Registro do show", local: "The Bridge Pub — Belo Horizonte, MG", src: "/videos/VideoTheBridgePub-1.mp4" },
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
            algum momento, manda lá pelo{" "}
            <a href="/contato" style={{ color: "var(--accent)" }}>contato</a>{" "}
            que eu posso publicar aqui.
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
            <PhotoGrid photos={FOTOS} />
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
                  <div key={i}>
                    <video
                      controls
                      preload="metadata"
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
