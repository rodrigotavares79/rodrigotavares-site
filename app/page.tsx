import Footer from "@/components/Footer";
import Carousel, { Slide } from "@/components/Carousel";
import PhotoGrid, { Photo } from "@/components/PhotoGrid";
import ReleaseScroller, { Release } from "@/components/ReleaseScroller";

// Fotos reais em public/gallery/. Adicione "caption" em cada slide se
// quiser uma legenda por baixo da foto (ex: local, data, nome do show).
const SLIDES: Slide[] = [
  { src: "/gallery/Rodrigo-1.jpg", label: "Foto 1" },
  { src: "/gallery/Rodrigo-2.jpg", label: "Foto 2" },
  { src: "/gallery/Rodrigo-4.jpg", label: "Foto 3" },
];

// [placeholder] Ajuste os números reais — anos de carreira, shows, etc.
const STATS = [
  { value: "0", label: "[placeholder] anos de carreira" },
  { value: "0", label: "[placeholder] shows realizados" },
  { value: "0", label: "[placeholder] faixas lançadas" },
  { value: "0", label: "[placeholder] estatística livre" },
];

const LANCAMENTOS: Release[] = [
  { index: "B1", titulo: "[placeholder] Faixa 1", tipo: "Single", ano: "2026", href: "#" },
  { index: "B2", titulo: "[placeholder] Faixa 2", tipo: "Single", ano: "2025", href: "#" },
  { index: "B3", titulo: "[placeholder] Faixa 3", tipo: "EP", ano: "2025", href: "#" },
  { index: "B4", titulo: "[placeholder] Faixa 4", tipo: "Single", ano: "2024", href: "#" },
];

const DESTAQUES: Photo[] = [
  { src: null, label: "Foto A", tall: true },
  { src: null, label: "Foto B" },
  { src: null, label: "Foto C" },
  { src: null, label: "Foto D" },
  { src: null, label: "Foto E" },
];

export default function Home() {
  return (
    <>
      <Carousel slides={SLIDES} />

      <div className="stats-bar">
        <div className="container">
          {STATS.map((stat, i) => (
            <div className="stat" key={i}>
              <span className="value">{stat.value}</span>
              <span className="label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="now-spinning">
        <div className="container">
          <span>No ar agora:</span>
          <strong>Boletim Musical</strong>
          <span className="text-muted">— resumo semanal de notícias de música</span>
          <a href="https://lab.rodrigotavares.com.br/boletim">assistir →</a>
        </div>
      </div>

      <section className="block">
        <div className="container">
          <span className="eyebrow">A1 — Início</span>
          <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", marginTop: "0.5rem" }}>
            Rodrigo Tavares
          </h1>
          <p className="lede" style={{ marginTop: "1rem" }}>
            [placeholder] Uma frase curta que diga quem você é como músico —
            o que você toca, o estilo, e o que faz alguém querer ouvir a
            próxima faixa.
          </p>
          <div className="hero-actions">
            <a href="/musica" className="btn btn-primary">Ouvir faixas</a>
            <a href="/contato" className="btn btn-ghost">Contato</a>
          </div>
        </div>
      </section>

      <section className="block">
        <div className="container">
          <span className="eyebrow">Novidades</span>
          <h2>Últimos lançamentos</h2>
          <ReleaseScroller releases={LANCAMENTOS} />
          <a href="/musica" className="btn btn-ghost" style={{ display: "inline-block", marginTop: "1.5rem" }}>
            Ver todos
          </a>
        </div>
      </section>

      <section className="block spotify-block">
        <div className="container">
          <span className="eyebrow">Discografia</span>
          <h2>Ouça agora no Spotify</h2>
          {/*
            [placeholder] Troque SEU_ID_DE_ARTISTA pelo ID real do seu
            perfil no Spotify (aparece no link "Compartilhar > Copiar link
            do artista": open.spotify.com/artist/ESSE_ID).
          */}
          <div className="spotify-embed">
            <iframe
              src="https://open.spotify.com/embed/artist/SEU_ID_DE_ARTISTA"
              height="352"
              loading="lazy"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            />
          </div>
        </div>
      </section>

      <section className="block">
        <div className="container">
          <span className="eyebrow">Em cena</span>
          <h2>Galeria</h2>
          <PhotoGrid photos={DESTAQUES} />
        </div>
      </section>

      <Footer />
    </>
  );
}
