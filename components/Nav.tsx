"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const TRACKS = [
  { index: "A1", label: "Início", href: "/" },
  { index: "A2", label: "Sobre", href: "/sobre" },
  { index: "A3", label: "Música", href: "/musica" },
  { index: "A4", label: "Shows", href: "/shows" },
  { index: "A5", label: "Da Plateia", href: "/da-plateia" },
  { index: "A6", label: "Contato", href: "/contato" },
];

export default function Nav() {
  const pathname = usePathname();

  // Na página de proposta (/contratar) o menu vira um único link para o site.
  if (pathname?.startsWith("/contratar")) {
    return (
      <nav className="tracklist-nav" aria-label="Navegação">
        <Link href="/">
          <span className="nav-dot" aria-hidden="true" />
          Meu website
        </Link>
      </nav>
    );
  }

  return (
    <nav className="tracklist-nav" aria-label="Navegação principal">
      {TRACKS.map((track) => (
        <Link
          key={track.href}
          href={track.href}
          aria-current={pathname === track.href ? "page" : undefined}
        >
          <span className="nav-dot" aria-hidden="true" />
          {track.label}
        </Link>
      ))}
    </nav>
  );
}
