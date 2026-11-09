import type { Metadata } from "next";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

// Página de proposta para contratantes.
// Fica fora do menu e fora do Google: só acessa quem recebe o link.
export const metadata: Metadata = {
  title: "Contratar show — Rodrigo Tavares",
  description: "Formatos e valores de show de Rodrigo Tavares — Pop and Roll de Boteco.",
  robots: { index: false, follow: false },
  metadataBase: new URL("https://www.rodrigotavares.com.br"),
  // Prévia do link (WhatsApp, Instagram, etc.)
  openGraph: {
    title: "Contratar show — Rodrigo Tavares",
    description: "Pop and Roll de Boteco: formatos e valores para bares, festas e eventos. Fale direto no WhatsApp.",
    url: "/contratar",
    siteName: "Rodrigo Tavares",
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/gallery/Rodrigo-1.jpg", width: 900, height: 599, alt: "Rodrigo Tavares com violão" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contratar show — Rodrigo Tavares",
    description: "Pop and Roll de Boteco: formatos e valores para bares, festas e eventos.",
    images: ["/gallery/Rodrigo-1.jpg"],
  },
};

const WHATSAPP = "5531991206206";

function wa(mensagem: string) {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensagem)}`;
}

const base = "Olá, Rodrigo! Vi sua proposta de show e tenho interesse no ";

const planos = [
  {
    id: "A",
    titulo: "Bar",
    formato: "Solo ou duo",
    preco: "A combinar",
    itens: ["Voz e violão: solo ou duo Os Inoxidáveis", "Duração: 2h + bis", "Som: próprio ou da casa"],
    mensagem: base + "Plano A (Bar). Data do evento: ",
  },
  {
    id: "B",
    titulo: "Festas e eventos intimistas",
    formato: "Voz e violão · solo",
    preco: "R$ 700",
    itens: ["Voz e violão (solo)", "Duração: 2h + bis", "Som: próprio ou da casa"],
    mensagem: base + "Plano B (Festas e eventos intimistas – voz e violão, R$ 700). Data do evento: ",
  },
  {
    id: "C",
    titulo: "Festas e eventos intimistas",
    formato: "Duo Os Inoxidáveis",
    destaque: true,
    preco: "R$ 1.500",
    itens: ["Voz e violão: duo Os Inoxidáveis", "Duração: 2h + bis", "Som: próprio ou da casa"],
    mensagem: base + "Plano C (Festas e eventos intimistas – duo Os Inoxidáveis, R$ 1.500). Data do evento: ",
  },
  {
    id: "D",
    titulo: "Festas grandes, casamentos e eventos corporativos",
    formato: "Solo ou duo · com estrutura",
    preco: "A combinar",
    itens: [
      "Voz e violão: solo ou duo Os Inoxidáveis",
      "Duração: 2h + bis",
      "Som: próprio ou do contratante",
      "Operador de som",
      "Apoio de palco",
    ],
    mensagem: base + "Plano D (Festas grandes, casamentos e eventos corporativos). Data do evento: ",
  },
];

const palcos = [
  "The Bridge Pub",
  "Jack Rock Bar",
  "100% Malte",
  "StoneHenge",
  "Underground Pub",
  "Sirène Fleming",
  "Butiquim da Fábrica · Juiz de Fora",
];

const fotos = [
  { src: "/gallery/Rodrigo-1.jpg", alt: "Rodrigo Tavares com violão" },
  { src: "/gallery/Rodrigo-2.jpg", alt: "Retrato de Rodrigo Tavares" },
  { src: "/gallery/TheBridgePub-1.jpeg", alt: "Show no The Bridge Pub" },
];

const videos = [
  { src: "/videos/VideoTheBridgePub-1.mp4", poster: undefined, titulo: "Trecho “Don’t Let Me Down”", local: "The Bridge Pub, BH" },
  { src: "/videos/Inox_ShesElectric.mp4", poster: "/videos/Inox_ShesElectric-poster.jpg", titulo: "“She’s Electric” (Oasis cover)", local: "Os Inoxidáveis" },
];

const repertorio = {
  internacional: [
    { musica: "Come As You Are", artista: "Nirvana" },
    { musica: "A Horse with No Name", artista: "America" },
    { musica: "Sweet Home Alabama", artista: "Lynyrd Skynyrd" },
    { musica: "Learn to Fly", artista: "Foo Fighters" },
    { musica: "Don’t Let Me Down", artista: "The Beatles" },
    { musica: "Have You Ever Seen the Rain", artista: "Creedence Clearwater Revival" },
    { musica: "Stand by Me", artista: "Ben E. King" },
    { musica: "Bad Moon Rising", artista: "Creedence Clearwater Revival" },
  ],
  nacional: [
    { musica: "O Papa é Pop", artista: "Engenheiros do Hawaii" },
    { musica: "Proibida pra Mim", artista: "Charlie Brown Jr." },
    { musica: "Cowboy Fora da Lei", artista: "Raul Seixas" },
    { musica: "Exagerado", artista: "Cazuza" },
    { musica: "Televisão", artista: "Titãs" },
    { musica: "Envelheço na Cidade", artista: "Ira!" },
    { musica: "Rádio Blá", artista: "Lobão" },
    { musica: "Acima do Sol", artista: "Skank" },
    { musica: "Agora Só Falta Você", artista: "Rita Lee" },
  ],
};

// Quando tiver depoimentos reais, preencha aqui. Com a lista vazia, a seção não aparece.
const depoimentos: { texto: string; nome: string; local: string }[] = [
  // { texto: "O show foi incrível...", nome: "Fulano", local: "The Bridge Pub" },
];

function IconeWhatsApp() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 21l2.1-5.4A8.4 8.4 0 1 1 21 11.5z" />
    </svg>
  );
}

export default function ContratarPage() {
  const waGeral = wa("Olá, Rodrigo! Vi sua proposta de show e quero consultar uma data.");

  return (
    <>
    <div className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <span className={styles.eyebrow}>Proposta de show</span>
        <h1 className={styles.heroTitle}>
          Pop and Roll
          <br />
          de Boteco
        </h1>
        <p className={styles.lead}>
          Rodrigo Tavares, cantor, compositor e instrumentista. Pop rock nacional e internacional dos anos 1970 aos
          2000, para bares, casas de show, festas particulares e eventos.
        </p>
        <p className={styles.meta}>Belo Horizonte, MG · mais de 20 anos de estrada</p>
        <div className={styles.actions}>
          <a href="#formatos" className={styles.btnPrimary}>
            Ver formatos e valores
          </a>
          <a href={waGeral} target="_blank" rel="noopener noreferrer" className={styles.btnWa}>
            <IconeWhatsApp />
            Falar no WhatsApp
          </a>
        </div>
      </section>

      {/* GALERIA */}
      <section>
        <div className={styles.gallery}>
          {fotos.map((f) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={f.src} src={f.src} alt={f.alt} className={styles.photo} loading="lazy" />
          ))}
        </div>
        <p className={styles.credit}>Fotos: @thiagolemosc</p>
      </section>

      {/* PALCOS */}
      <section className={styles.section}>
        <span className={styles.eyebrow}>Palcos por onde passou</span>
        <ul className={styles.chips}>
          {palcos.map((p) => (
            <li key={p} className={styles.chip}>
              {p}
            </li>
          ))}
        </ul>
      </section>

      {/* DEPOIMENTOS (só aparece quando houver) */}
      {depoimentos.length > 0 && (
        <section className={styles.section}>
          <span className={styles.eyebrow}>Depoimentos</span>
          <h2 className={styles.h2}>Quem já contratou</h2>
          <div className={styles.cards3}>
            {depoimentos.map((d) => (
              <figure key={d.nome} className={styles.quote}>
                <blockquote>“{d.texto}”</blockquote>
                <figcaption>
                  {d.nome} — {d.local}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      {/* RELEASE */}
      <section className={`${styles.section} ${styles.release}`}>
        <div className={styles.releaseHead}>
          <span className={styles.eyebrow}>Release</span>
          <h2 className={styles.h2}>Pop and Roll!!</h2>
        </div>
        <div className={styles.releaseBody}>
          <p>
            Rodrigo Tavares é cantor, compositor e instrumentista, com mais de duas décadas de música. Começou em Juiz
            de Fora (MG), na banda Etanoise, onde assinou composições do primeiro disco do grupo.
          </p>
          <p className={styles.muted}>
            Desde 2006 vive e toca em Belo Horizonte. Passou pela banda Radiotape e assumiu baixo e voz no
            Cevada Blues. Em 2008 criou com Rafael Oliveira o duo Os Inoxidáveis, revisitando clássicos da música
            brasileira e internacional com roupagem própria.
          </p>
          <p className={styles.muted}>
            O repertório passeia pelo pop rock nacional e internacional dos anos 1970 aos 2000. Músicas que o público
            conhece e canta junto, em formatos que vão da voz e violão ao duo.
          </p>
        </div>
      </section>

      {/* REPERTORIO */}
      <section className={styles.section}>
        <span className={styles.eyebrow}>Repertório</span>
        <h2 className={styles.h2}>O que rola no show</h2>
        <p className={styles.muted}>Uma prévia do repertório. Gostaria de ouvir alguma em especial? Me envia o seu pedido!</p>
        <div className={styles.setlist}>
          {[
            { titulo: "Internacional", lista: repertorio.internacional },
            { titulo: "Nacional", lista: repertorio.nacional },
          ].map((bloco) => (
            <div key={bloco.titulo} className={styles.setlistCol}>
              <h3 className={styles.setlistTitle}>{bloco.titulo}</h3>
              <ul className={styles.songs}>
                {bloco.lista.map((m) => (
                  <li key={m.musica}>
                    <span className={styles.song}>{m.musica}</span>
                    <span className={styles.artist}>{m.artista}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* VIDEOS */}
      <section className={styles.section}>
        <span className={styles.eyebrow}>Da plateia</span>
        <h2 className={styles.h2}>Ao vivo</h2>
        <div className={styles.videos}>
          {videos.map((v) => (
            <figure key={v.src} className={styles.videoItem}>
              <video controls playsInline preload="metadata" poster={v.poster} className={styles.video}>
                <source src={v.src} type="video/mp4" />
              </video>
              <figcaption>
                {v.titulo} <span className={styles.muted}>— {v.local}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* FORMATOS */}
      <section id="formatos" className={styles.section}>
        <span className={styles.eyebrow}>Formatos</span>
        <h2 className={styles.h2}>Escolha o show do seu evento</h2>
        <p className={styles.muted}>Escolha o formato e a conversa abre no WhatsApp, já com ele preenchido.</p>
        <div className={styles.plans}>
          {planos.map((p) => (
            <div key={p.id} className={`${styles.plan} ${"destaque" in p ? styles.planFeatured : ""}`}>
              <div className={styles.planHead}>
                {"destaque" in p && <span className={styles.badge}>Mais escolhido</span>}
                <span className={styles.eyebrow}>Plano {p.id}</span>
                <h3 className={styles.planTitle}>{p.titulo}</h3>
                <span className={styles.planFormat}>{p.formato}</span>
              </div>
              <p className={styles.price}>{p.preco}</p>
              <ul className={styles.planList}>
                {p.itens.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
              <a href={wa(p.mensagem)} target="_blank" rel="noopener noreferrer" className={styles.btnPlan}>
                Quero esse formato
              </a>
            </div>
          ))}
        </div>
        <div className={styles.note}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" />
            <circle cx="12" cy="9.5" r="2.5" />
          </svg>
          <p>
            <strong>Show fora de Belo Horizonte?</strong> Os valores acima são para a capital. Para outras cidades,
            transporte, hospedagem e alimentação são combinados à parte.
          </p>
        </div>
      </section>

      {/* CHAMADA FINAL */}
      <section className={styles.cta}>
        <p className={styles.ctaTitle}>Vamos fechar a sua data?</p>
        <a href={waGeral} target="_blank" rel="noopener noreferrer" className={styles.btnWa}>
          <IconeWhatsApp />
          Chamar no WhatsApp
        </a>
      </section>
    </div>
    <a href={waGeral} target="_blank" rel="noopener noreferrer" className={styles.floatWa} aria-label="Falar no WhatsApp">
      <IconeWhatsApp />
      WhatsApp
    </a>
    <Footer showSocial />
    </>
  );
}
