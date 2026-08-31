import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import Nav from "@/components/Nav";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rodrigo Tavares",
  description: "[placeholder] Ajuste esta descrição — resumo de uma linha sobre o trabalho como músico.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${fraunces.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        <header className="site-header">
          <div className="container">
            <a href="/" className="wordmark">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/gallery/assinatura-rodrigo-tavares.png"
                alt="Rodrigo Tavares"
                style={{ height: "2.5rem", width: "auto", display: "block" }}
              />
            </a>
            <Nav />
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
