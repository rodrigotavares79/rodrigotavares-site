import Footer from "@/components/Footer";

export default function Contato() {
  return (
    <>
      <section className="block" style={{ paddingTop: "4rem" }}>
        <div className="container">
          <span className="eyebrow" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span className="nav-dot" aria-hidden="true" /> Contato
          </span>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", marginTop: "0.5rem" }}>
            Fale comigo
          </h1>
          <p className="text-muted" style={{ maxWidth: "30rem", marginTop: "0.75rem" }}>
            Para shows, parcerias ou só para dizer oi, me envie uma mensagem.
          </p>

          {/*
            [placeholder] Este formulário ainda não envia nada — é preciso
            ligar a um serviço (ex: Formspree, Resend, ou uma rota de API do
            próprio Next.js) antes de publicar.
          */}
          <form className="contact-form">
            <div>
              <label htmlFor="nome">Nome</label>
              <input id="nome" name="nome" type="text" required />
            </div>
            <div>
              <label htmlFor="email">E-mail</label>
              <input id="email" name="email" type="email" required />
            </div>
            <div>
              <label htmlFor="mensagem">Mensagem</label>
              <textarea id="mensagem" name="mensagem" rows={5} required />
            </div>
            <button type="submit" className="btn btn-primary" style={{ alignSelf: "flex-start" }}>
              Enviar
            </button>
          </form>

          <div className="contact-links">
            <a href="mailto:contato@rodrigotavares.com.br">contato@rodrigotavares.com.br</a>
            <a href="https://www.instagram.com/rodrigotavares" target="_blank" rel="noopener noreferrer">Instagram - Rodrigo Tavares</a>
            <a href="https://soundcloud.com/osinoxidaveis" target="_blank" rel="noopener noreferrer">Soundcloud - Rodrigo Tavares</a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
