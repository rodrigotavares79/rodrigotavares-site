import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <span className="eyebrow">A1 — Início</span>
          <h1>Rodrigo Tavares</h1>
          <p className="lede">
            [placeholder] Uma frase curta que diga quem você é como músico — o
            que você toca, o estilo, e o que faz alguém querer ouvir a próxima
            faixa.
          </p>
          <div className="hero-actions">
            <a href="/musica" className="btn btn-primary">Ouvir faixas</a>
            <a href="/contato" className="btn btn-ghost">Contato</a>
          </div>
        </div>
      </section>

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
          <span className="eyebrow">A2 — Sobre</span>
          <h2>[placeholder] Uma linha de abertura sobre sua trajetória</h2>
          <p className="text-muted" style={{ maxWidth: "40rem", marginTop: "1rem" }}>
            [placeholder] Dois ou três parágrafos de bio resumida vão aqui,
            com um link para a página /sobre completa. Fale sobre como
            começou, o que te move como músico hoje, e o que as pessoas podem
            esperar ao te ouvir.
          </p>
          <a href="/sobre" className="btn btn-ghost" style={{ display: "inline-block", marginTop: "1.5rem" }}>
            Ler bio completa
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
