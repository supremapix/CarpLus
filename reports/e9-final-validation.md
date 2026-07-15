# E9 — Validação final (pós-remoção do Prerender.io)

Executada localmente após remover todo o acoplamento. Objetivo: provar que o site
funciona integralmente sem o Prerender.io.

## Resultados

| # | Verificação | Resultado |
|---|---|---|
| 1 | `tsc --noEmit` nos arquivos alterados (`useSEO`, `NotFound`) | **0 erros novos** (erros pré-existentes não relacionados permanecem) |
| 2 | Build SPA (`prebuild` + `build:spa`) | **OK** — sitemap 1.512 URLs, 152 redirects |
| 3 | Geração estática (amostra 30 rotas, shuffle) | **30/30 OK, 0 falhas** — prova que remover `render-event` não quebrou o SSG |
| 4 | HTML físico de produto: JSON-LD / canonical / h1 / `data-prerendered` | **presentes** (4 blocos JSON-LD, canonical absoluto, h1 correto) |
| 5 | HTML físico: vestígios de Prerender.io | **0** (`prerender-token`, `prerender-status-code`, `prerender.io`, `render-event`) |
| 6 | Home `dist/index.html` | JSON-LD (3) + canonical corretos, **0 vestígios** |
| 7 | `dist/404.html` (via `emit404`) | shell SPA presente, **0 vestígios** |
| 8 | `validate-redirects.mjs` | **APROVADO (0 erros)** — inclui o guard `/pneus/:medida([^.]+)` |
| 9 | Browser real — produto (pós-hidratação) | h1, 5 JSON-LD, canonical, `robots: index, follow`; `prerenderTokenMeta=false`, `prerenderStatusMeta=false` |
| 10 | Browser real — 404 SPA | `robots: noindex, follow`; sem meta de status; h1 da 404 correto |
| 11 | Console do browser | sem erros de hidratação |
| 12 | Shell-fonte `index.html` | **0 vestígios** de Prerender.io |
| 13 | Varredura repo (`src/`, `scripts/`, `index.html`, `vercel.json`, `package.json`) | **0 acoplamento de runtime**; únicas menções restantes são comentários históricos no script de auditoria `e8.7-edge-audit.mjs` |
| 14 | `middleware.js` / `proxy.js` | **ausente** |

## Preservado e verificado
- SSG interno intacto: `data-prerendered` (2 arquivos), `__STATIC_RENDER_READY__` (1).
- 152 redirects (incl. fix das imagens `/pneus/*.webp`), 404 real, sitemap/robots/llms.

## Pendência não-código
- Remover `PRERENDER_TOKEN` no dashboard da Vercel (código já não a lê).

## Veredito
```text
E9 APROVADA (local) — Prerender.io removido do código, config e shell. Build e geração
estática OK (30/30), HTML físico com JSON-LD/canonical/h1 e ZERO vestígios, 404 real,
redirects APROVADOS, runtime no browser sem erros de hidratação e sem metas de prerender.
O SEO passa a depender exclusivamente do HTML físico (SSG interno), já validado no edge
(E8.7). Resta apenas remover a env var PRERENDER_TOKEN no dashboard (ação do dono; sem
efeito no código). Migração concluída.
```
