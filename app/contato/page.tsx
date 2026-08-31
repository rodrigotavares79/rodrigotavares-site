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
            <a href="https://www.instagram.com/rodrigotavares" target="_blank" rel="noopener noreferrer">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: "0.4rem", verticalAlign: "-3px" }}>
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4.5" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
              Instagram - Rodrigo Tavares
            </a>
            <a href="https://soundcloud.com/osinoxidaveis" target="_blank" rel="noopener noreferrer">
              <svg width="18" height="16" viewBox="0 0 32 24" fill="currentColor" style={{ marginRight: "0.4rem", verticalAlign: "-3px" }}>
                <rect x="0" y="10" width="1.5" height="8" rx="0.75" />
                <rect x="3" y="7" width="1.5" height="11" rx="0.75" />
                <rect x="6" y="9" width="1.5" height="9" rx="0.75" />
                <path d="M9 5.5c-.4 0-.8.03-1.2.1v12.4h13.7c2.5 0 4.5-2 4.5-4.5 0-2.3-1.8-4.3-4.1-4.5-.4-3.1-3-5.5-6.2-5.5-2.4 0-4.5 1.3-5.6 3.3-.4-.1-.8-.2-1.1-.2z" />
              </svg>
              Soundcloud - Rodrigo Tavares
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
