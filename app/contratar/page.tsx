import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Carousel, { Slide } from "@/components/Carousel";
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

// Fonte dos títulos das seções (pesada, no estilo do logo)
const titulo = Montserrat({ subsets: ["latin"], weight: ["800", "900"], variable: "--font-titulo", display: "swap" });

// Logos das casas. Sem logo, a casa aparece só com o nome.
const palcos: { nome: string; logo?: string }[] = [
  { nome: "The Bridge Pub", logo: "/gallery/logo-the-bridge-pub.png" },
  { nome: "Jack Rock Bar", logo: "/gallery/logo-jack-rock-bar.png" },
  { nome: "100% Malte", logo: "/gallery/logo-100-malte.png" },
  { nome: "Stonehenge Rock Bar", logo: "/gallery/logo-stonehenge.png" },
  { nome: "Sirène Fleming", logo: "/gallery/logo-sirene-fleming.png" },
  { nome: "Butiquim da Fábrica", logo: "/gallery/logo-butiquim-da-fabrica.png" },
  { nome: "Underground Pub" },
];

const fotos: Slide[] = [
  { src: "/gallery/Rodrigo-4.jpg", label: "Rodrigo Tavares" },
  { src: "/gallery/Rodrigo-2.jpg", label: "Rodrigo Tavares" },
  { src: "/gallery/TheBridgePub-1.jpeg", label: "Show no The Bridge Pub", caption: "The Bridge Pub, BH", fit: "contain" },
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
  ],
  nacional: [
    { musica: "O Papa é Pop", artista: "Engenheiros do Hawaii" },
    { musica: "Cowboy Fora da Lei", artista: "Raul Seixas" },
    { musica: "Exagerado", artista: "Cazuza" },
    { musica: "Televisão", artista: "Titãs" },
    { musica: "Acima do Sol", artista: "Skank" },
    { musica: "Agora Só Falta Você", artista: "Rita Lee" },
  ],
};

const perguntas = [
  {
    pergunta: "Como funciona o pagamento?",
    resposta: "50% do valor na contratação, como sinal via Pix, e 50% após o show, por transferência bancária ou Pix.",
  },
  {
    pergunta: "Com quanta antecedência devo reservar?",
    resposta:
      "Quanto mais antecedência, melhor. Principalmente se houver pedido de música especial, que precisa de tempo para ensaio.",
  },
  {
    pergunta: "Você emite nota fiscal?",
    resposta: "Sim.",
  },
  {
    pergunta: "Há intervalo durante o show?",
    resposta: "A combinar. O show pode ser dividido em 2 sets ou feito em apresentação única, sem intervalo.",
  },
];

// Quando tiver depoimentos reais, preencha aqui. Com a lista vazia, a seção não aparece.
const depoimentos = [
  {
    texto:
      "A relação do Butiquim da Fábrica com o músico Rodrigo Tavares não é de hoje. O músico já se apresentou com banda no finado Bar da Fábrica, em meados dos anos de 2015 e novamente é comprovada a sua responsabilidade e dedicação com o trabalho feito! Carismático, sua interação com o público é um show à parte! Um repertório que não deixa ninguém ficar parado! Que essa parceria continue rendendo bons frutos!",
    nome: "Lívia Machado",
    local: "Gerente do Butiquim da Fábrica, Juiz de Fora",
    instagram: "butiquimdafabricajf",
    foto: "/gallery/depoimento-butiquim-da-fabrica.jpg",
  },
  {
    texto:
      "Acompanho o trabalho do Rodrigo há bastante tempo e já assisti a vários shows dele. Com seu grande conhecimento musical, ele tem uma facilidade incrível para adaptar o setlist. Vai do rock internacional — com um inglês impecável, por sinal — aos clássicos do rock nacional dos anos 70, 80 e 90. Além de tudo, é um músico de altíssima qualidade!",
    nome: "Tarcísio Portes",
    local: "Público",
    instagram: "tmportes_paz",
    foto: "/gallery/depoimento-tarcisio-portes.jpg",
  },
  {
    texto:
      "Um talentoso cantor que apresenta vários estilos durante o show. Rock clássico, nacionais e muita música boa. Recomendo para seu evento ou festa! Vale o momento, valem as músicas!",
    nome: "Luís Eduardo",
    local: "Contratante · Evento particular, Belo Horizonte",
    instagram: "lessmkt",
    foto: "/gallery/depoimento-luis-eduardo.jpg",
  },
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
    <div className={`${styles.page} ${titulo.variable}`}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroText}>
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
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/gallery/Rodrigo-1.jpg" alt="Rodrigo Tavares com violão" className={styles.heroPhoto} />
      </section>

      {/* GALERIA */}
      <section>
        <div className={styles.carouselBox}>
          <Carousel slides={fotos} autoplayMs={4500} />
        </div>
        <p className={styles.credit}>Fotos: @thiagolemosc e público</p>
      </section>

      {/* PALCOS */}
      <section className={styles.section}>
        <span className={styles.eyebrow}>Palcos por onde passou</span>
        <ul className={styles.logos}>
          {palcos.map((p) => (
            <li key={p.nome} className={styles.logoTile} title={p.nome}>
              {p.logo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={p.logo} alt={p.nome} loading="lazy" />
              ) : (
                <span className={styles.logoName}>{p.nome}</span>
              )}
            </li>
          ))}
        </ul>
      </section>

      {/* DEPOIMENTOS (só aparece quando houver) */}
      {depoimentos.length > 0 && (
        <section className={styles.section}>
          <span className={styles.eyebrow}>Depoimentos</span>
          <h2 className={styles.h2}>Quem já viu o show</h2>
          <div className={styles.quotes}>
            {depoimentos.map((d) => (
              <figure key={d.nome} className={styles.quote}>
                <blockquote>“{d.texto}”</blockquote>
                <figcaption className={styles.quoteAuthor}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={d.foto} alt={d.nome} className={styles.avatar} width={48} height={48} loading="lazy" />
                  <span className={styles.authorInfo}>
                    <strong className={styles.authorName}>{d.nome}</strong>
                    <span>{d.local}</span>
                    <a
                      href={`https://www.instagram.com/${d.instagram}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.authorHandle}
                    >
                      @{d.instagram}
                    </a>
                  </span>
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

      {/* PERGUNTAS FREQUENTES */}
      <section className={styles.section}>
        <span className={styles.eyebrow}>Perguntas frequentes</span>
        <h2 className={styles.h2}>Antes de fechar</h2>
        <div className={styles.faq}>
          {perguntas.map((q) => (
            <details key={q.pergunta} name="faq" className={styles.faqItem}>
              <summary className={styles.faqQuestion}>{q.pergunta}</summary>
              <p className={styles.faqAnswer}>{q.resposta}</p>
            </details>
          ))}
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
    <div className={styles.floatSpacer} aria-hidden="true" />
    </>
  );
}
