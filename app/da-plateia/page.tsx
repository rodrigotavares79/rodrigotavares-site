import Footer from "@/components/Footer";
import PhotoGrid, { Photo } from "@/components/PhotoGrid";

// [placeholder] Fotos enviadas pelo público nos shows. Coloque os arquivos
// em public/gallery/ e adicione aqui, no mesmo padrão da galeria de /musica.
const FOTOS: Photo[] = [];

// [placeholder] Vídeos enviados pelo público — pode ser um link do
// Instagram, YouTube, ou onde estiver hospedado.
const VIDEOS: { titulo: string; autor: string; link: string }[] = [];

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
            <div style={{ marginTop: "2rem" }}>
              {VIDEOS.map((video, i) => (
                <div className="show-row" key={i}>
                  <span className="show-date">{video.autor}</span>
                  <a href={video.link} target="_blank" rel="noopener noreferrer">
                    {video.titulo} →
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
