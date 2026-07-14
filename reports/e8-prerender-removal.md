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

- FASE 1-2: auditoria completa (acima). **Nenhuma alteração** além do kill-switch.
- FASE 3: `PRERENDER_ENABLED` implementado e verificado por execução real do middleware.
- FASE 9: rollback por env var, < 5 min, sem tocar código.
- FASES 4-7 (deploy Preview + validação no edge): ver `reports/e8-preview-results.md`.
