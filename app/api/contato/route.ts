import { NextRequest, NextResponse } from "next/server";

function escapeHtml(value: unknown): string {
  const str = String(value ?? "");
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const { nome, email, mensagem } = data ?? {};

    if (!nome || typeof nome !== "string") {
      return NextResponse.json({ error: "Nome é obrigatório." }, { status: 400 });
    }
    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "E-mail inválido." }, { status: 400 });
    }
    if (!mensagem || typeof mensagem !== "string") {
      return NextResponse.json({ error: "Mensagem é obrigatória." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "RESEND_API_KEY não configurada." }, { status: 500 });
    }

    const html = `
      <div style="background:#14110e;padding:24px;font-family:Arial,Helvetica,sans-serif;">
        <div style="max-width:560px;margin:0 auto;border:1px solid #332c22;border-radius:6px;overflow:hidden;">
          <div style="background:#1d1913;color:#f3ecdd;padding:18px 24px;border-bottom:2px solid #e8a33d;">
            <div style="font-weight:700;font-size:16px;">Rodrigo Tavares</div>
            <div style="font-size:12px;opacity:0.75;margin-top:2px;">Nova mensagem pelo site</div>
          </div>
          <div style="background:#ffffff;padding:24px;">
            <table style="width:100%;border-collapse:collapse;">
              <tr>
                <td style="padding:8px 0;border-bottom:1px solid #e4e2dd;color:#6b6b66;width:30%;font-size:13px;">Nome</td>
                <td style="padding:8px 0;border-bottom:1px solid #e4e2dd;color:#1a1a18;font-size:13px;font-weight:500;">${escapeHtml(nome)}</td>
              </tr>
              <tr>
                <td style="padding:8px 0;border-bottom:1px solid #e4e2dd;color:#6b6b66;font-size:13px;">E-mail</td>
                <td style="padding:8px 0;border-bottom:1px solid #e4e2dd;color:#1a1a18;font-size:13px;font-weight:500;">${escapeHtml(email)}</td>
              </tr>
            </table>
            <p style="font-size:13px;color:#6b6b66;margin:18px 0 6px;">Mensagem</p>
            <p style="font-size:14px;line-height:1.6;color:#1a1a18;white-space:pre-wrap;margin:0;">${escapeHtml(mensagem)}</p>
          </div>
          <div style="background:#fafaf9;padding:12px 24px;font-size:11px;color:#6b6b66;border-top:1px solid #e4e2dd;">
            Enviado pelo formulário de contato de rodrigotavares.com.br. Responda direto este e-mail para falar com quem enviou.
          </div>
        </div>
      </div>
    `;

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Site Rodrigo Tavares <contato@rodrigotavares.com.br>",
        to: ["contato@rodrigotavares.com.br"],
        reply_to: email,
        subject: `Nova mensagem de ${nome} pelo site`,
        html,
      }),
    });

    if (!resendResponse.ok) {
      const errText = await resendResponse.text();
      console.error("Resend error:", errText);
      return NextResponse.json({ error: "Falha ao enviar o e-mail." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Erro interno ao processar o envio." }, { status: 500 });
  }
}
