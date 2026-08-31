import type { Metadata } from "next";
import Image from "next/image";
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
  description: "Rodrigo Tavares — Pop and Roll de Boteco - Belo Horizonte, MG",
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
              <Image
                src="/brand/logo-rodrigo-tavares.png"
                alt="Rodrigo Tavares"
                width={491}
                height={162}
                priority
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
