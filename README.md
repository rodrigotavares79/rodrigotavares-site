# rodrigotavares.com.br

Site pessoal — apresentação como músico. Next.js (App Router).

## Rodar localmente

npm install
npm run dev

Abre em http://localhost:3000

## Estrutura

- app/page.tsx            → home
- app/sobre/page.tsx       → bio
- app/musica/page.tsx      → faixas, links (Spotify/YouTube etc.)
- app/shows/page.tsx       → agenda de shows
- app/contato/page.tsx     → contato
- components/              → Nav e Footer compartilhados
- app/globals.css          → tokens de design (cores, tipografia)

## O que ainda precisa ser preenchido

Os textos e links estão marcados com [placeholder] — troque pelo conteúdo real
(bio, faixas, links de streaming, shows, e-mail de contato) antes de publicar.

## Deploy

Projeto pensado para Vercel (free tier), com o domínio rodrigotavares.com.br
apontado via Cloudflare DNS.
