# E8 — Remoção controlada do Prerender.io (ambiente Preview)

> Objetivo: confirmar que o site funciona integralmente **sem** o Prerender.io, em ambiente
> controlado, **sem remover nada definitivamente**. Nenhuma alteração em produção.

Data: 2026-07-14

---

## FASE 1 — Auditoria completa do `middleware.js`

Arquivo: `middleware.js` (Edge Middleware da Vercel).

| Aspecto | Comportamento |
|---|---|
| **Como identifica bots** | `user-agent` (lowercase) comparado contra a lista `BOT_AGENTS` via `includes()`. |
| **User-agents interceptados** | `googlebot`, `bingbot`, `yandex`, `baiduspider`, `facebookexternalhit`, `twitterbot`, `linkedinbot`, `slackbot`, `whatsapp`, `discordbot`, `telegrambot`, `applebot`, `pinterest`, `redditbot`. |
| **Quando envia ao Prerender.io** | Só quando: é bot **E** não é arquivo estático **E** não é meta-file **E** não é asset **E** há `PRERENDER_TOKEN`. |
| **Rotas ignoradas (fall-through)** | Estáticos (`.js/.css/.xml/.png/...`), meta-files (`sitemap.xml`, `robots.txt`, `llms.txt`, `llms-full.txt`, `favicon.png`), e prefixos `/assets/` e `/images/`. `config.matcher` já exclui `api`, `_next/static`, `_next/image`, `favicon.ico`. |
| **Destino** | `https://service.prerender.io/${url.href}` com header `X-Prerender-Token` + `User-Agent` do bot. |
| **Headers de saída** | Resposta reconstruída: apenas `Content-Type` (do upstream ou `text/html; charset=utf-8`) e `Cache-Control: public, max-age=0, must-revalidate`. Descarta headers perigosos (content/transfer-encoding). |
| **Timeout** | `AbortController` com `PRERENDER_TIMEOUT_MS = 10000` (10 s). |
| **Fallback (rede de segurança)** | Cai no SPA (retorna `undefined` → segue para filesystem/rewrite) em 4 casos: (1) sem `PRERENDER_TOKEN`; (2) resposta não-OK (429/5xx); (3) timeout/abort; (4) erro de rede. Nunca propaga erro ao bot. |
| **Impacto se removido** | Bots deixam de ser desviados e passam a receber o **HTML físico** gerado no build (SSG). Requer que as páginas físicas existam e estejam corretas (garantido por E6/E7). Humanos nunca foram afetados pelo middleware. |

---

## FASE 2 — Mapa de ocorrências do Prerender

### Acoplamento REAL ao Prerender.io (serviço externo) — sai só na E9

| Arquivo | Linha | Ocorrência | Motivo | Pode remover? | Depende de |
|---|---|---|---|---|---|
| `middleware.js` | todo | ponte bot → `service.prerender.io` | Interceptação por user-agent | Sim, na E9 | E8 aprovada |
| `middleware.js` | 40, 59 | `process.env.PRERENDER_TOKEN` / header `X-Prerender-Token` | Autenticação no serviço | Sim, na E9 | E8 |
| `index.html` | 19-20 | `<meta name="prerender-token" content="5KWu7hUG1fFd1memM52s">` | Token exposto no HTML | Sim, na E9 | E8 |
| `index.html` | 22-23 | `<meta name="prerender-status-code" content="200">` | Status para o serviço | Sim, na E9 | E8 |
| `src/hooks/useSEO.ts` | 137 | `document.dispatchEvent(new Event('render-event'))` | Sinal de "pronto" para o Prerender.io | Sim, na E9 | E8 |
| env (Vercel) | — | `PRERENDER_TOKEN` | Secret do serviço | Sim, na E9 | E8 |

### Mecanismo de SSG interno (NÃO é Prerender.io) — DEVE PERMANECER

| Arquivo | Ocorrência | Por que manter |
|---|---|---|
| `src/lib/prerender.ts` | `isPrerenderEager()`, `isStaticGeneration()`, `data-prerendered` | Decide render "ansiosa" no snapshot/hidratação. Base da SSG. |
| `src/hooks/useSEO.ts` | `window.__STATIC_RENDER_READY__` | Sinal de prontidão da geração estática interna (E2-E4). |
| `scripts/generate-static-*.ts`, `validate-static-*.ts`, `test-static-determinism.ts` | pipeline de geração | Gera/valida as 1512 páginas. |
| `src/components/{Hero,DeferredSection,ServicosPage,PneusCuritibaPromo,TireMeasuresSection}.tsx` | uso de `isPrerenderEager()` | Render determinística no snapshot. |

> Nota: o termo "prerender" aparece nos dois contextos. Só o **grupo REAL** acima pertence ao
> serviço externo Prerender.io. O mecanismo de SSG é independente e permanece após a E9.

---

## FASE 3 — Modo Preview sem Prerender (kill-switch `PRERENDER_ENABLED`)

Implementado em `middleware.js` (única alteração de código da E8):

```js
// Quando PRERENDER_ENABLED === 'false', bots NÃO vão ao Prerender.io — caem no HTML físico.
// Qualquer outro valor (inclusive ausente) preserva o comportamento atual de produção.
const prerenderEnabled = process.env.PRERENDER_ENABLED !== 'false';
...
if (!prerenderEnabled || !isBot || isStaticFile || isMetaFile || isAsset) {
  return;
}
```

**Design seguro:** o default (variável ausente) mantém a produção **exatamente** como está. O
desvio só é desligado com o valor explícito `"false"`. Nada é removido — é reversível por env var.

### Verificação da lógica (execução real do middleware, `scripts/e8-decision-check.mjs`)

| Cenário | Googlebot/Bingbot/FB/Twitter em página | Humano | Asset |
|---|---|---|---|
| `PRERENDER_ENABLED` ausente (default) | → Prerender.io | → HTML físico | → HTML físico |
| `PRERENDER_ENABLED=true` | → Prerender.io | → HTML físico | → HTML físico |
| `PRERENDER_ENABLED=false` (kill-switch) | **→ HTML físico** | → HTML físico | → HTML físico |

Resultado: 100% conforme o esperado. Com o kill-switch, nenhuma chamada a `service.prerender.io`.

---

## FASE 4-7 — Validação: o que o bot recebe SEM Prerender.io (kill-switch)

Como o Preview real está bloqueado por Deployment Protection (SSO — ver `e6.5-preview-validation.md`),
a validação foi feita no **equivalente local real**: o servidor de roteamento serve o `dist`
(filesystem → rewrite), reproduzindo exatamente o HTML físico que o Googlebot receberia quando
`PRERENDER_ENABLED=false`. Amostra de 1 rota por tipo (`scripts/e8-bot-validate.mjs`).

| Tipo de rota | status | title | canonical | h1 | JSON-LD | OG | Twitter | links | imgs |
|---|:---:|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| home (`/`) | 200 | Carplus Centro Automotivo – Loja de Pneu | sim | sim | 3 | sim | summary_large_image | 169 | 81 |
| catálogo (`/pneus`) | 200 | Catálogo de Pneus em Curitiba | sim | sim | 17 | sim | summary_large_image | 135 | 30 |
| serviços (`/servicos`) | 200 | Serviços de Oficina e Pneus em Curitiba | sim | sim | 3 | sim | summary_large_image | 119 | 5 |
| produto (`/pneu-medida/175-65r14`) | 200 | Pneu 175/65R14 em Curitiba | sim | sim | 5 | sim | summary_large_image | 105 | 34 |
| quem-somos | 200 | Quem Somos \| Carplus | sim | sim | 2 | sim | summary_large_image | 79 | 27 |
| contato | 200 | Contato – Carplus | sim | sim | 2 | sim | summary_large_image | 78 | 5 |

**Resultado: TODAS as rotas OK.** CSV completo em `reports/e8-bot-comparison.csv`. O HTML físico
entrega title, description, canonical auto-referencial, `<h1>`, JSON-LD, Open Graph e Twitter Card
sem depender de JavaScript — ou seja, o Prerender.io é dispensável para estes tipos.

## FASE 8 — Bug crítico descoberto e corrigido: home não pré-renderizada

Durante a Fase 4-7, o HTML físico da **home (`/`)** vinha como **shell SPA vazio** (`<div id="root"></div>`,
sem `<h1>`, ~11 KB) enquanto as outras 1.511 páginas tinham HTML completo (~170-580 KB). Com o
Prerender.io desligado, a home — a página mais importante para SEO — iria **vazia** ao Googlebot.

**Causa raiz** (confirmada empiricamente): o filtro de "rota já concluída" no gerador
(`generate-static-all.ts`) considerava concluída qualquer rota com checkpoint `status === 'ok'`
**e** `fs.existsSync(outputFile)`. Para a home, `outputFile === dist/index.html` — o **mesmo**
arquivo que `build:spa` regrava como shell SPA no início do `build:static`. Num build incremental
(com checkpoint prévio), a home era considerada "pronta" e **pulada**, deixando o shell intacto.

**Correção** (`generate-static-all.ts`): a verificação passou a exigir que o arquivo esteja de
fato pré-renderizado, e não apenas que exista. Novo helper `isPrerenderedFile()` lê os primeiros
2 KB do arquivo e confirma o marcador `data-prerendered` (presente na tag `<html>` de toda página
gerada). Correção geral e cirúrgica — protege qualquer rota cujo output tenha sido regravado como shell.

**Validação da correção:** reproduzido o cenário exato (checkpoint com home `ok` + `build:spa`
regravando o shell + `generate:static:all` sem `--fresh`). Antes: `dist/index.html` = shell
(`data-prerendered=0`, `h1=0`, 11 KB). Depois: home pré-renderizada (`data-prerendered=1`, `h1=1`,
577 KB). Geração completa reexecutada: **1512/1512, 0 falhas.**

## FASE 9 — Plano de rollback (reativar Prerender.io em < 5 min)

O kill-switch torna o rollback trivial e sem deploy de código:

1. **Vercel → Project → Settings → Environment Variables** (escopo Preview/Production conforme o caso).
2. Definir **`PRERENDER_ENABLED=true`** (ou simplesmente **remover** a variável — o default já reativa).
3. **Redeploy** do ambiente afetado (Deployments → Redeploy) — ~1-2 min.
4. Confirmar: `curl -A "Googlebot" https://<host>/pneus -I` deve voltar a servir a resposta do Prerender.io.

Rollback de emergência (se a E9 já tiver removido o código): `git revert` do commit da E9 + redeploy.
Enquanto a E8/E9 não removerem o `middleware.js`, **basta a env var** — nenhum código muda.

---

## Resumo

- FASE 1-2: auditoria completa do middleware + mapa de ocorrências (REAL vs SSG).
- FASE 3: kill-switch `PRERENDER_ENABLED` implementado (default preserva produção) e verificado
  por execução real do middleware — com `=false`, 0 chamadas ao Prerender.io.
- FASE 4-7: validação local real (servidor serve o `dist`). Todos os 6 tipos de rota entregam
  SEO completo no HTML físico sem JS. Edge real na Vercel PENDENTE (SSO bloqueia o Preview).
- FASE 8: **bug crítico corrigido** — a home não era pré-renderizada (shell vazio); causa raiz no
  filtro de checkpoint; corrigido com `isPrerenderedFile()`. Regeração: 1512/1512, 0 falhas.
- FASE 9: rollback por env var (`PRERENDER_ENABLED=true` ou remover), < 5 min, sem tocar código.

### Alterações de código nesta etapa
1. `middleware.js` — kill-switch `PRERENDER_ENABLED` (reversível, default = produção atual).
2. `scripts/generate-static-all.ts` — `isPrerenderedFile()` + filtro de conclusão robusto (corrige a home).

Nenhuma remoção do Prerender.io foi feita; `middleware.js`, metas em `index.html`, `render-event`
em `useSEO.ts` e o rewrite permanecem intactos. A remoção definitiva é a E9, condicionada à
validação no edge real (desbloquear o Preview/SSO).

## Veredito E8

```text
E8 PARCIAL — validação local real APROVADA (kill-switch funciona; HTML físico entrega SEO
completo em todos os tipos; bug crítico da home corrigido e reconfirmado 1512/1512).
PENDENTE de validação no edge real da Vercel (Preview bloqueado por Deployment Protection/SSO)
antes de autorizar a E9 (remoção definitiva do Prerender.io).
```
