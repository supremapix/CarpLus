# Etapa E5 — Roteamento de produção (301 server-side)

**Branch:** `v0/supremapix-04b25f59`
**Escopo:** promover os redirects client-side a `redirects` 301 server-side no `vercel.json`, mantendo o fallback SPA e o Prerender.io intactos.
**Status:** IMPLEMENTADA E VALIDADA localmente (sem publicar em produção).

---

## 1. Objetivo

Eliminar a dependência de JavaScript para os redirects de URLs legadas, promovendo-os a HTTP 301 reais servidos pela Vercel — sem quebrar o roteamento da SPA, sem remover o rewrite global e sem tocar no middleware/Prerender.io.

---

## 2. Auditoria antes/depois

| Item | Antes (E5.0) | Depois (E5) |
| --- | --- | --- |
| `redirects` no `vercel.json` | 76 (só paginação) | **152** |
| Redirects de paginação (auto) | 76 | 76 (inalterados) |
| Bairros/cidades `*.html` → `/bairro/:slug` | client-side (`<Navigate>`) | **69 × 301 server-side** |
| `/pneus/:medida` → `/pneu-medida/:medida` | client-side (`LegacyMedidaRedirect`) | **1 × 301 server-side** (`:medida` dinâmico) |
| Slugs legados de marca | client-side (`BRAND_PAGES[].legacySlug`) | **6 × 301 server-side** |
| Rewrite global `/(.*) → /index.html` | presente | **preservado** |
| `headers` | 6 | 6 (preservados) |
| `cleanUrls` / `trailingSlash` | ausentes | **ausentes** (não habilitados) |
| Redundância client-side no `App.tsx` | presente | **preservada** (rede de segurança) |

> Os redirects client-side no `App.tsx` foram **mantidos de propósito**: funcionam como redundância caso a regra server-side não resolva (ex.: navegação SPA interna). Comprovado no teste de navegador (`/portao.html` → `/bairro/portao` renderiza mesmo sem o 301 do servidor).

---

## 3. Arquitetura da solução (robustez / idempotência)

**Problema encontrado:** o script `npm run redirects` usava `tsx`, que **neste ambiente (Node 24 + loader do runtime v0) sai silenciosamente sem executar** o arquivo — o mesmo motivo pelo qual a equipe já havia criado `scripts/run-ts.mjs` (esbuild + node) para o pipeline do piloto. Isso fazia o gerador rodar como no-op e nunca somar os manuais.

**Correção:**
- `package.json`: `"redirects"` e a parte de redirects do `"prebuild"` agora usam `node scripts/run-ts.mjs scripts/generate-redirects.ts` (runner comprovado). A geração do sitemap permanece inalterada.

**Fonte única dos redirects manuais** — `scripts/manual-redirects.ts`:
- Deriva os 69 bairros/cidades, a rota de medida e as 6 marcas a partir das **mesmas fontes de dados** usadas pelo `App.tsx` (`NEIGHBORHOOD_HTML_REDIRECTS`, `BRAND_PAGES`), evitando divergência.
- Cada regra sai como `{ source, destination, permanent: true }`.

**Gerador** — `scripts/generate-redirects.ts` (reescrito):
- Monta `redirects = [ ...manuais, ...paginação ]` (manuais primeiro para precedência de match exato antes das regras com `has`).
- **Preserva** qualquer redirect manual pré-existente desconhecido (merge por chave `source+has`), garantindo que rodar o script nunca apague regras adicionadas à mão.
- Idempotente: rodar N vezes produz sempre 152 (verificado com 2 execuções seguidas).

---

## 4. Validação

### 4.1 Análise estática — `scripts/validate-redirects.mjs`
- Total: **152** ✓
- Duplicatas de `source`: **0** ✓
- Cadeias (destino que é source de outro redirect): **0** ✓
- Loops (source === destination): **0** ✓
- Todos `permanent: true` (301): ✓
- Destinos começam com `/`: ✓

### 4.2 Testes HTTP reais — `scripts/e5-routing-server.mjs` + `scripts/test-redirects-http.mjs`
Servidor local replicando a cadeia da Vercel: **redirects 301 → filesystem → rewrite fallback**.
- **152/152** redirects retornaram **301** com `Location` exato ✓
- Nenhum redirect encadeado (o destino responde sem novo 301) ✓
- Rota de medida dinâmica (`/pneus/175-65r14` → `/pneu-medida/175-65r14`) com captura de `:medida` ✓
- Rotas piloto com HTML físico → **200 via filesystem** (não interceptadas por redirect) ✓
- Rota inexistente → **200 via rewrite fallback** (soft-404, comportamento atual preservado) ✓
- Assets `/assets/*` → 200 ✓

### 4.3 Redundância client-side (navegador)
- `/portao.html` no dev server → SPA resolve para `/bairro/portao`, `<h1>` correto, conteúdo presente ✓

---

## 5. Limites respeitados

- **NÃO** removido o rewrite `/(.*) → /index.html`.
- **NÃO** habilitado `cleanUrls` nem `trailingSlash`.
- **NÃO** alterado `middleware.js` nem o Prerender.io.
- **NÃO** publicado em produção.
- 404 HTTP real permanece **fora do escopo** (depende da E6).
- Redirects client-side do `App.tsx` mantidos como redundância.

---

## 6. Arquivos alterados/criados

| Arquivo | Mudança |
| --- | --- |
| `vercel.json` | 76 → **152** redirects (rewrites/headers preservados) |
| `package.json` | script `redirects`/`prebuild` agora via `run-ts.mjs` |
| `scripts/generate-redirects.ts` | reescrito: manuais + paginação, idempotente, merge-preserva |
| `scripts/manual-redirects.ts` | **novo** — fonte única dos 76 redirects manuais |
| `scripts/validate-redirects.mjs` | **novo** — análise estática |
| `scripts/e5-routing-server.mjs` | **novo** — servidor de teste (redirect→fs→fallback) |
| `scripts/test-redirects-http.mjs` | **novo** — harness HTTP dos 152 redirects |

---

## 7. Veredito

```text
E5 IMPLEMENTADA E VALIDADA — pronta para publicar
```

Os 152 redirects (76 paginação + 69 bairros + 1 medida + 6 marcas) estão no `vercel.json`, testados por análise estática e por HTTP real, sem cadeias/loops/duplicatas, com o fallback SPA e o Prerender.io preservados. Ao publicar, os redirects passam a ser servidos como 301 pela Vercel; a redundância client-side continua como rede de segurança. Próxima etapa sugerida: **E6 (404 HTTP real)**.
