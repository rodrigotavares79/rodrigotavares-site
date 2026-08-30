Coloque aqui as fotos reais (shows, estúdio, retratos etc.).

Depois, em app/page.tsx, app/sobre/page.tsx e app/musica/page.tsx,
troque `src: null` por `src: "/gallery/nome-do-arquivo.jpg"` em cada
slide/foto correspondente.

Dica: exporte as fotos já em proporções próximas das usadas no layout
(carrossel do topo: 16:9 no desktop; grade de fotos: quadradas ou
verticais) pra evitar cortes estranhos no object-fit: cover.
