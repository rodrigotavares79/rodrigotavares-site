"use client";

import { useState, FormEvent } from "react";
import Footer from "@/components/Footer";

export default function Contato() {
  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const [erro, setErro] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErro(null);
    setEnviado(false);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      nome: formData.get("nome"),
      email: formData.get("email"),
      mensagem: formData.get("mensagem"),
    };

    setEnviando(true);
    try {
      const res = await fetch("/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Não foi possível enviar sua mensagem.");
      }

      setEnviado(true);
      form.reset();
    } catch (err) {
      setErro(err instanceof Error ? err.message : "Erro ao enviar.");
    } finally {
      setEnviando(false);
    }
  }

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

          <div className="split-block" style={{ alignItems: "start", marginTop: "2.5rem" }}>
            <div>
              <form className="contact-form" onSubmit={handleSubmit}>
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
                <button type="submit" className="btn btn-primary" style={{ alignSelf: "flex-start" }} disabled={enviando}>
                  {enviando ? "Enviando..." : "Enviar"}
                </button>

                {enviado && (
                  <div className="form-feedback form-feedback-success">
                    Mensagem enviada com sucesso! Retorno em breve.
                  </div>
                )}
                {erro && (
                  <div className="form-feedback form-feedback-error">
                    Não foi possível enviar: {erro}
                  </div>
                )}
              </form>

              <div className="contact-links">
                <a href="https://www.instagram.com/rodrigotavares" target="_blank" rel="noopener noreferrer">
                  <svg width="16" height="16" viewBox="0 0 24 24" style={{ marginRight: "0.4rem", verticalAlign: "-3px" }}>
                    <defs>
                      <radialGradient id="ig-gradient" cx="30%" cy="107%" r="150%">
                        <stop offset="0%" stopColor="#fdf497" />
                        <stop offset="5%" stopColor="#fdf497" />
                        <stop offset="45%" stopColor="#fd5949" />
                        <stop offset="60%" stopColor="#d6249f" />
                        <stop offset="90%" stopColor="#285AEB" />
                      </radialGradient>
                    </defs>
                    <rect x="2" y="2" width="20" height="20" rx="5" fill="url(#ig-gradient)" />
                    <circle cx="12" cy="12" r="4.5" fill="none" stroke="#fff" strokeWidth="1.7" />
                    <circle cx="17.3" cy="6.7" r="1.1" fill="#fff" />
                  </svg>
                  Instagram - Rodrigo Tavares
                </a>
                <a href="https://soundcloud.com/osinoxidaveis" target="_blank" rel="noopener noreferrer">
                  <svg width="18" height="16" viewBox="0 0 32 24" fill="#ff5500" style={{ marginRight: "0.4rem", verticalAlign: "-3px" }}>
                    <rect x="0" y="10" width="1.5" height="8" rx="0.75" />
                    <rect x="3" y="7" width="1.5" height="11" rx="0.75" />
                    <rect x="6" y="9" width="1.5" height="9" rx="0.75" />
                    <path d="M9 5.5c-.4 0-.8.03-1.2.1v12.4h13.7c2.5 0 4.5-2 4.5-4.5 0-2.3-1.8-4.3-4.1-4.5-.4-3.1-3-5.5-6.2-5.5-2.4 0-4.5 1.3-5.6 3.3-.4-.1-.8-.2-1.1-.2z" />
                  </svg>
                  Soundcloud - Rodrigo Tavares
                </a>
              </div>
            </div>

            <div>
              <span className="eyebrow">Localização</span>
              <h3 style={{ marginTop: "0.4rem" }}>Belo Horizonte / MG</h3>

              <hr style={{ border: "none", borderTop: "1px solid var(--border)", margin: "2rem 0" }} />

              <span className="eyebrow">Telefone</span>
              <p className="text-muted" style={{ marginTop: "0.6rem", marginBottom: "0.25rem" }}>
                Comercial, Shows e Eventos
              </p>
              <p style={{ color: "var(--accent)", fontFamily: "var(--font-display)", textTransform: "uppercase", fontSize: "1.3rem" }}>
                (31) 99120-6206
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
