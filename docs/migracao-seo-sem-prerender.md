# Migração SEO — Remoção do Prerender.io e adoção de HTML gerado no build

> **Status:** Etapa 1 concluída (auditoria) · **Etapa E2/E3 concluída — PROVA DE CONCEITO APROVADA (8/8 rotas)**.
> **Site:** https://www.carpluspneuseoficina.com.br
> **Stack atual:** React 19 + Vite 6 + React Router DOM 7 (SPA) + hospedagem Vercel.
> **Objetivo:** eliminar a dependência do Prerender.io e passar a servir HTML pré-renderizado
> no build (SSG), sem alterar URLs, conteúdos, schemas ou canonicals existentes.

---

## 1. Diagnóstico da arquitetura atual

### 1.1 Como o app é carregado
- **SPA pura.** `index.html` entrega apenas `<div id="root"></div>` + `<script type="module" src="/src/main.tsx">`. Todo o conteúdo textual é montado por JavaScript no cliente.
- `src/main.tsx` monta `BrowserRouter` + `HelmetProvider` (react-helmet-async está instalado, mas o SEO real é feito pelo hook `useSEO`, não pelo Helmet).
- `src/App.tsx` define **todas as rotas** com `react-router-dom` e usa `React.lazy` + `Suspense` (code-splitting por rota). O catálogo de dados (`src/data.ts`, ~24.700 linhas / ~2 MB) é isolado em um chunk `tire-catalog` (ver `vite.config.ts`).

### 1.2 Como os metadados são gerados
- Hook **`src/hooks/useSEO.ts`**: dentro de `useEffect`, manipula o DOM em runtime para setar `document.title`, `meta description/robots/keywords`, Open Graph, Twitter Card, `canonical`, `rel=prev/next` e injeta JSON-LD dinâmico (`script[data-dynamic-schema]`).
- Ao final, dispara `document.dispatchEvent(new Event('render-event'))` — **sinal usado pelo Prerender.io** para saber que a página terminou de renderizar.
- **Schema global** (`Organization` + `WebSite` + `LocalBusiness/TireShop/AutoRepair` + `Store`) vive como **fonte única** hardcoded no `<head>` do `index.html`. Schemas por página (`Product`, `FAQPage`, `BreadcrumbList`, `ItemList`) são injetados via `useSEO`.

### 1.3 Dependência do Prerender.io
- `index.html` contém `<meta name="prerender-token" content="...">` e `<meta name="prerender-status-code" content="200">`.
- **Não há rewrite/middleware de Prerender no `vercel.json`.** O `vercel.json` só faz `rewrites: /(.*) → /index.html`. Ou seja, a interceptação por user-agent de bot hoje depende de configuração **externa ao repositório** (proxy/DNS/serviço Prerender.io), o que é um ponto cego e um risco: não é versionado nem auditável aqui.
- `useSEO` dispara `render-event` exclusivamente para o Prerender — esse acoplamento precisa ser mantido durante a transição e removido só no fim.

### 1.4 Hospedagem e roteamento (`vercel.json`)
- `rewrites`: `/(.*) → /index.html` (fallback global de SPA — **toda** rota cai no mesmo HTML vazio).
- `redirects`: **76** regras 301 de paginação (`/pneus?page=N → /landing-tematica`), geradas por `scripts/generate-redirects.ts` (contagem confirmada no `vercel.json`).
- `headers`: content-type/cache para sitemaps, robots, llms; headers de segurança globais.
- Redirects adicionais (`*.html` de bairros, slugs legados de marca, `/pneus/:medida`) são feitos **client-side** via `<Navigate>` no React Router — logo, dependem de JS e do fallback do index.html.

### 1.5 Sitemaps e robots
- `scripts/generate-sitemap.ts` roda no `prebuild` e gera índice + 4 sitemaps segmentados a partir do mesmo motor de indexação (`src/lib/seoIndexing.ts`).
- **Volume real hoje (contado nos XML):**
  - `sitemap-produtos.xml`: **1.371** URLs
  - `sitemap-servicos.xml`: **120** URLs (institucional + serviços + bairros + landings)
  - `sitemap-medidas.xml`: **24** URLs
  - `sitemap-veiculos.xml`: **18** URLs
  - **Total ≈ 1.533 URLs indexáveis** (+ home ≈ 1.537).
- `public/robots.txt`: bem estruturado (regras por bot, bloqueio de `?page=`/`?q=`/`/pneus?*`, aponta os 5 sitemaps, referencia `llms.txt`).

### 1.6 Camada de dados
- `src/data.ts`: catálogo com **2.488** registros `slug:` de pneus (dos quais **1.371** são canônicos indexáveis após dedup em `seoIndexing.ts`).
- Landings SEO em `src/data/seoLanding.ts` (`ARO_PAGES`, `BRAND_PAGES`, `VEHICLE_PAGES`, `LOCAL_COMBO_PAGES`, `INTENT_PAGES`, `COMPARISON_PAGES`, `MEASURE_SEO`), `src/data/centroAutomotivoSeo.ts`, `src/data/services.ts`, `src/data/indexableNeighborhoods.ts`.
- **Todas as rotas são deriváveis em build-time a partir desses arrays** — não há dados vindos de API em runtime. Isso é o que torna a SSG viável.

---

## 2. Gargalos identificados

1. **HTML inicial vazio.** Sem JS (ou antes da execução), toda URL é o mesmo shell — conteúdo, `title` e `description` corretos só existem após hidratação.
2. **SEO 100% client-side.** `useSEO` só roda no navegador; bots sem JS não veem `title`/`description`/canonical/JSON-LD específicos da página.
3. **Interceptação de bots fora do repositório.** A ponte Prerender.io não está no `vercel.json`; é frágil e invisível (cache velho, expiração de token, falha de crédito → Google passa a ver páginas vazias).
4. **Redirects client-side.** `*.html`, slugs legados e `/pneus/:medida` redirecionam via `<Navigate>` — dependem de JS; sem prerender/SSG podem ser vistos como página vazia pelo bot.
5. **`render-event` acoplado ao Prerender.io** em `useSEO`.
6. **Fallback único `/(.*) → /index.html`** impede servir HTML específico por rota (obstáculo direto à SSG).
7. **Chunk `tire-catalog` de ~2 MB** carregado nas rotas de produto — pesa na renderização/prerender de ~1.371 páginas.
8. **Divergências de metadados** (não bloqueiam a migração, mas devem ser corrigidas junto): `og:image` ora `og-image.jpg` ora `og-carplus.webp`; `robots.txt` cita `og-carplus.jpg` (extensão divergente).

---

## 3. Mapa dos arquivos envolvidos

| Arquivo | Papel | Ação na migração |
|---|---|---|
| `index.html` | Shell do SPA, schema global, token Prerender | Vira template do prerender; remover metas Prerender no fim |
| `src/main.tsx` | Bootstrap (`createRoot`/`BrowserRouter`) | Adaptar para hydrate + entry de SSG |
| `src/App.tsx` | Todas as rotas (React Router) | Fonte da lista de rotas a pré-renderizar |
| `src/hooks/useSEO.ts` | Metadados client-side + `render-event` | Precisa ser capturado no HTML gerado; remover `render-event` no fim |
| `vercel.json` | rewrites/redirects/headers | Ajustar para servir HTML estático por rota (não só index.html) |
| `scripts/generate-sitemap.ts` | Sitemaps segmentados | **Reaproveitar** como enumerador de rotas do prerender |
| `scripts/generate-redirects.ts` | 301 de paginação no vercel.json | Manter |
| `src/lib/seoIndexing.ts` | Motor canônico/indexável | **Reaproveitar** para definir o que gerar |
| `src/data.ts`, `src/data/*.ts` | Fonte das rotas dinâmicas | Fonte de enumeração (build-time) |
| `public/robots.txt`, `public/sitemap*.xml`, `public/llms*.txt` | Arquivos estáticos SEO | Manter |
| `src/components/*` (páginas lazy) | Conteúdo | Devem renderizar em SSR/headless sem `window` obrigatório |

---

## 4. Estratégia recomendada

**Abordagem principal: SSG por "snapshot" em build-time (auto-hospedar o que o Prerender.io faz hoje).**

Como não há dados de runtime e todas as rotas são deriváveis dos arrays de dados, o caminho de **menor risco e maior reaproveitamento** é pré-renderizar cada rota no build e emitir um `index.html` estático por URL:

- **Opção A (recomendada) — Prerender headless no build (ex.: `@prerenderer/prerenderer` + Puppeteer, ou `vite-plugin-ssr`/`react-snap`-like):**
  - Roda o app buildado em Chrome headless para cada rota, aguarda o `render-event` (que **já existe** em `useSEO`) e serializa o HTML final (com `title`, metas, canonical e JSON-LD já no `<head>`).
  - **Reaproveita `useSEO` como está** — zero refatoração de SEO. Basta enumerar as rotas (mesma lógica do `generate-sitemap.ts`).
  - Saída: um HTML por rota em `dist/`, servido diretamente pela Vercel.

- **Opção B — SSG "nativo" com `vite-react-ssg`:**
  - Render real no Node (sem Chrome), mais rápido no CI, mas exige **refatorar** `useSEO` para o modelo de `<Head>`/roteamento do `vite-react-ssg` e adaptar componentes que tocam `window`/`document`. Maior esforço e risco.

- **Opção C — Migrar para Next.js (App Router + SSG/ISR):**
  - Melhor resultado de longo prazo, porém **reescrita grande** (roteamento, `useSEO`, lazy, data). Não recomendada agora dado o volume de rotas customizadas já maduras.

**Decisão sugerida:** começar pela **Opção A** (snapshot headless), que remove o Prerender.io externo trazendo o mesmo mecanismo para dentro do build, sem reescrever a base. Avaliar Opção B/C só se o tempo de build headless de ~1.537 páginas se tornar proibitivo.

### Ajuste de hospedagem
- Trocar o `rewrites: /(.*) → /index.html` por uma estratégia que **sirva o HTML estático da rota** quando existir (`cleanUrls`/`trailingSlash` + filesystem), mantendo o fallback SPA apenas para rotas não pré-renderizadas.
- Migrar os redirects hoje client-side (`*.html`, slugs legados, `/pneus/:medida`) para **301 no `vercel.json`** (server-side), eliminando a dependência de JS.

---

## 5. Riscos da migração

1. **Tempo/custo de build:** renderizar ~1.537 páginas em headless é lento; exige concorrência controlada e pode estourar limites de build. Mitigar com paralelismo e, se preciso, geração incremental por segmento.
2. **Componentes que assumem `window`/`document`:** podem quebrar no prerender (Opção B) — na Opção A o risco é menor (roda em Chrome real). Auditar acessos a `window` fora de `useEffect`.
3. **Divergência HTML estático × app hidratado:** mismatch de hidratação se o HTML snapshot diferir do primeiro render do React. Testar hidratação.
4. **Redirects:** ao mover para server-side, validar que nenhum 301 legado seja perdido (bairros `*.html`, marcas, medidas).
5. **JSON-LD duplicado:** garantir que o schema global (index.html) + schema por página apareçam uma única vez cada no HTML final.
6. **Analytics (GTM diferido) e `render-event`:** manter o disparo até desligar o Prerender.io; só então remover token e evento.
7. **Peso do chunk `tire-catalog` (2 MB):** afeta LCP e tempo de snapshot das páginas de produto.

---

## 6. Sequência segura de implementação (próximas etapas)

> Executar em PRs pequenos, sempre validando no Search Console (Inspeção de URL → HTML renderizado) e no Rich Results Test.

- [x] **E2.** Criar enumerador único de rotas (reutilizar lógica de `generate-sitemap.ts` / `seoIndexing.ts`) que devolva a lista completa de URLs a gerar. → prova de conceito usa `scripts/static-pilot-routes.ts` (slugs lidos das fontes reais); a escala completa reutilizará o mesmo motor do sitemap.
- [x] **E3.** Provar conceito: pré-renderizar em build um subconjunto (home + produto + medida + serviço + veículo + bairro + institucional + 404) e inspecionar o HTML emitido (title/description/canonical/JSON-LD). → **APROVADA** (ver Seção 10).
- [x] **E4.** Auditar componentes quanto a acesso a `window`/`document` fora de efeitos; corrigir os que quebrarem no prerender; garantir completude, sinal de prontidão confiável, captura de erros de runtime e **determinismo** da geração. → **APROVADA** (ver Seção 11).
- [ ] **E5.** Ajustar `vercel.json`: servir HTML estático por rota + fallback SPA; mover redirects client-side para 301 server-side. → **pendente** (não iniciada).
- [ ] **E6.** Escalar o prerender para todas as ~1.537 rotas com concorrência controlada; medir tempo de build.
- [ ] **E7.** Validar paridade (amostragem): título, description, canonical, OG, JSON-LD e conteúdo textual presentes no HTML servido sem JS.
- [ ] **E8.** Corrigir divergências de `og:image`/robots e padronizar `sameAs`.
- [ ] **E9.** Desligar o Prerender.io: remover `<meta prerender-*>` do `index.html` e o `dispatchEvent('render-event')` do `useSEO`; remover interceptação externa por user-agent.
- [ ] **E10.** Monitorar indexação (cobertura do Search Console, `site:` e logs) por 2–4 semanas antes de considerar concluída.

---

## 7. Componentes/artefatos que poderão ser REAPROVEITADOS

- `scripts/generate-sitemap.ts` e `src/lib/seoIndexing.ts` → enumeração de rotas do prerender (fonte única de verdade).
- `src/hooks/useSEO.ts` → **reutilizável como está** na Opção A (o snapshot captura o DOM que ele monta).
- `scripts/generate-redirects.ts` + `vercel.json` (redirects de paginação) → mantidos.
- Todos os arrays de dados (`src/data.ts`, `src/data/*.ts`) → fonte das rotas.
- `public/robots.txt`, `public/sitemap*.xml`, `public/llms*.txt` → mantidos.
- Schema global do `index.html` → mantido (vira template).

## 8. Componentes/artefatos que precisarão ser REESTRUTURADOS

- `vercel.json` → estratégia de servir HTML por rota + redirects client-side promovidos a 301 server-side.
- `src/main.tsx` → suportar hidratação do HTML pré-renderizado (e entry de SSG na Opção B).
- Redirects client-side em `src/App.tsx` (`<Navigate>` de `*.html`, slugs legados, `/pneus/:medida`) → migrar para server-side.
- `src/hooks/useSEO.ts` → remover acoplamento ao `render-event`/Prerender **apenas na etapa final**.
- Componentes com acesso direto a `window`/`document` fora de `useEffect` (a mapear na E4) — crítico na Opção B.
- Pipeline de build (`package.json` scripts) → adicionar etapa de prerender pós-`vite build`.

---

## 9. Estimativa de volume de páginas a gerar no build

| Segmento | Qtd. (indexável) |
|---|---|
| Produtos (`/pneu/:slug` canônicos) | ~1.371 |
| Institucional + serviços + bairros + landings (`sitemap-servicos`) | ~120 |
| Medidas (`/pneu-medida/:medida`, 2+ opções) | ~24 |
| Veículos | ~18 |
| Home + hubs já contabilizados acima | — |
| **Total aproximado** | **≈ 1.533–1.537 páginas HTML** |

> Observação: `src/data.ts` tem 2.488 registros de pneus, mas apenas ~1.371 são canônicos/indexáveis após o dedup de `seoIndexing.ts`. O prerender deve seguir exatamente o conjunto indexável (mesma fonte do sitemap) para não gerar HTML de páginas `noindex`/duplicadas.

---

---

## 10. Etapa E2/E3 — Prova de conceito (RESULTADO)

### 10.1 Status
**PROVA DE CONCEITO APROVADA** — 8/8 rotas piloto geradas e validadas automaticamente, com conteúdo real no HTML, metadados corretos, assets válidos, sem `localhost`, mantendo conteúdo com JavaScript desativado e hidratação sem quebra. **O Prerender.io não foi tocado** (token/meta/`render-event` permanecem) e o `vercel.json` **não foi alterado**.

### 10.2 Arquivos criados/alterados nesta etapa
- **Criado** `scripts/static-pilot-routes.ts` — lista explícita das rotas piloto (slugs lidos das fontes reais; nenhum inventado). Compartilhada entre gerador e validador.
- **Criado** `scripts/generate-static-pages.ts` — sobe servidor estático sobre `dist` com fallback SPA, abre cada rota em Chrome headless (Puppeteer), aguarda sinal confiável de render, captura e sanitiza o HTML, grava por rota **após** capturar todas (evita contaminar o fallback) e emite `reports/static-pilot-generation.json`. Preserva o shell original em `reports/_spa-shell/index.html`.
- **Criado** `scripts/validate-static-pilot.ts` — valida cada página e gera `reports/static-pilot-report.md`.
- **Alterado** `src/hooks/useSEO.ts` — **ajuste mínimo**: além do `render-event` (mantido), seta `window.__STATIC_RENDER_READY__ = true` como sinal confiável de que título/description/canonical já foram aplicados. Coexiste com o Prerender.io.
- **Alterado** `package.json` — scripts `build:spa`, `generate:static:pilot`, `build:static:pilot`, `validate:static:pilot`, `test:static:pilot`.
- **Dependência (dev)** `puppeteer` instalada + Chromium headless.

### 10.3 Rotas piloto selecionadas (reais)
| Tipo | Rota | Arquivo gerado |
|---|---|---|
| Home | `/` | `dist/index.html` |
| Produto | `/pneu/pneu-pirelli-175-70r13-p400-evo-82t` | `dist/pneu/.../index.html` |
| Serviço | `/servico/venda-de-pneus` | `dist/servico/venda-de-pneus/index.html` |
| Medida | `/pneu-medida/175-65r14` | `dist/pneu-medida/175-65r14/index.html` |
| Veículo | `/pneu-para-hb20-curitiba` | `dist/pneu-para-hb20-curitiba/index.html` |
| Local/Bairro | `/bairro/portao` | `dist/bairro/portao/index.html` |
| Institucional | `/quem-somos` | `dist/quem-somos/index.html` |
| 404 (erro) | `/rota-inexistente-teste-404` | `dist/rota-inexistente-teste-404/index.html` |

### 10.4 Critério de "render concluído"
Combinação (não tempo fixo): `window.__STATIC_RENDER_READY__` (pós `render-event`) **+** ausência do spinner de rota (`[role="status"][aria-label="Carregando"]`) **+** presença de `<h1>`/conteúdo principal **+** estabilização de 400 ms **+** timeout de segurança (20 s). Como as rotas são `lazy`, quando `useSEO` roda o chunk já montou o conteúdo — o sinal se mostrou confiável (0 timeouts).

### 10.5 Evidências
- **Conteúdo no HTML** (texto real, não só JS): produto ~13,9k chars; medida ~9,8k; bairro ~8,3k; serviço ~9,5k; home ~6,9k. Sem JS (via `curl`), o título e o texto continuam presentes.
- **Metadados por rota:** exatamente 1 `<title>`, 1 `canonical`, 1 `og:title`, 1 `description` por página (sem duplicação). Canonicais refletem o caminho de cada rota; nenhuma rota indexável herdou o canonical da home.
- **JSON-LD:** produto 5 blocos, veículo 7, bairro 6, medida/serviço 5, home/institucional 2 (schema global do shell).
- **Assets:** todas as referências `/assets/...` são absolutas e existem fisicamente em `dist`.
- **Sanitização:** nenhuma ocorrência de `localhost`/porta no HTML gerado (canonical/OG/schema limpos).
- **Sem JS:** conteúdo essencial (título, H1, textos, breadcrumbs, telefone/WhatsApp, links) permanece visível.
- **Hidratação:** no navegador, a página gerada hidrata sem tela branca, sem duplicação/fl' de conteúdo e sem erros de console; navegação SPA e elementos interativos (171 na página de produto) funcionam.

### 10.6 Como reproduzir
```bash
npm run build:spa            # vite build
npm run generate:static:pilot # snapshot headless das rotas piloto
npm run validate:static:pilot # valida e gera reports/static-pilot-report.md
# ou tudo de uma vez:
npm run test:static:pilot
```
Relatórios: `reports/static-pilot-report.md` e `reports/static-pilot-generation.json`. Shell original preservado em `reports/_spa-shell/index.html`.

### 10.7 Inventário de redirects client-side (para promover a 301 na etapa E5)
Ainda **não convertidos** nesta etapa — apenas inventariados (contagens reconferidas na E5.0 contra o código real):
- **69** redirects de bairros/cidades `*.html → /bairro/:slug` (`<Navigate>` em `src/App.tsx`; `grep -c '.html" element={<Navigate' = 69`).
- **1** redirect de rota legada `/pneus/:medida → /pneu-medida/:medida` (componente `LegacyMedidaRedirect`).
- **6** redirects de slug legado de marca (`BRAND_PAGES[].legacySlug → slug`: Pirelli, Michelin, Goodyear, Continental, Yokohama, Bridgestone).
- **Total client-side a promover a 301: 76** (69 + 1 + 6).
- **Total projetado no `vercel.json` após a E5: 152 regras** = 76 de paginação já existentes + 76 client-side promovidas.
- Todos deverão virar `redirects` 301 no `vercel.json` (ou arquivo de config) na etapa E5.

> **Correção de contagem (E5.0):** versões anteriores deste inventário citavam **3** slugs legados de marca — número **desatualizado**. A releitura da fonte real (`src/data/seoLanding.ts`) confirma **6** marcas com `legacySlug`, elevando o total client-side de 73 → **76**. O grep bruto por `legacySlug` pode retornar 7 ocorrências, mas 1 é a declaração de tipo/opcional; o valor real (`BRAND_PAGES.filter(p => p.legacySlug)`) é **6**.

### 10.8 Ressalvas (status HTTP e escopo)
- Gerar arquivos físicos **não garante sozinho** os códigos HTTP corretos na Vercel. O `vercel.json` ainda tem `rewrites: /(.*) → /index.html`, que **não foi alterado** nesta etapa. Servir o HTML por rota (e o 404 com status 404 real) será tratado na E5, após validação.
- A POC cobre 8 rotas; a escala para ~1.537 páginas (E6) exigirá concorrência controlada e medição de tempo de build.

### 10.9 Próximos passos
Prosseguir para **E4** (auditar acessos a `window`/`document` fora de efeitos) e **E5** (ajuste de `vercel.json` + promoção dos redirects a 301), **somente após** aprovação destes resultados. Não avançar para todas as rotas antes disso.

---

## 11. Etapa E4 — Compatibilidade, robustez e determinismo da geração estática

### 11.1 Status
**E4 APROVADA** — concluída em **2026-07-13** (data das execuções que geraram os relatórios desta seção). As 11 rotas piloto (8 da POC + 3 rotas de risco + a rota 404 de teste) foram geradas, validadas, verificadas quanto a hidratação e quanto a conteúdo sem JavaScript, com **determinismo comprovado** (duas gerações byte-a-byte equivalentes após normalização) e **0 erros críticos de runtime**. **O Prerender.io não foi tocado** e o **`vercel.json` não foi alterado** nesta etapa.

### 11.2 Objetivo da etapa
A E4 teve como objetivo endurecer a geração estática antes de qualquer mudança de produção:
- auditar acessos a APIs do navegador (`window`, `document`, `navigator`, `IntersectionObserver`, `requestAnimationFrame`);
- identificar e neutralizar riscos que produzissem **snapshots incompletos** (conteúdo preguiçoso/lazy, contadores em "0", seções reveladas só por scroll);
- tornar o **sinal de prontidão** confiável e agnóstico ao mecanismo de SEO (hook `useSEO`, `useEffect` direto ou `react-helmet`);
- **capturar erros de runtime** (console.error, `pageerror`, requisições falhas) durante a geração;
- validar **hidratação** sem "mismatch" (o DOM inicial do cliente casa com o HTML servido);
- garantir **determinismo** (mesma entrada → mesmo HTML), removendo artefatos de animação voláteis;
- testar **casos de risco** além da POC inicial (contador animado, scroll infinito, geolocalização).

### 11.3 Alterações realizadas

> Confirmadas no repositório (fonte: `git log` das branches de E4 e leitura dos arquivos). Nenhum arquivo ou mudança foi inventado.

**Código de aplicação (`src/`)**

| Arquivo | Tipo | Finalidade | Impacto na geração | Risco residual |
|---|---|---|---|---|
| `src/lib/prerender.ts` | **Criado** | Helpers `isStaticGeneration()` e `isPrerenderEager()` — decidem, de forma pura/determinística, se a primeira render deve ser "ansiosa". Baseiam-se em `window.__STATIC_RENDER__` (geração) e no atributo `html[data-prerendered]` (hidratação). | Componentes lazy montam conteúdo completo no snapshot **e** na 1ª render do cliente. | Baixo — helpers puros, sem efeito colateral. |
| `src/components/DeferredSection.tsx` | **Alterado** | Renderiza o conteúdo imediatamente quando `isPrerenderEager()` é verdadeiro (em vez de esperar o `IntersectionObserver`). | Seções abaixo da dobra entram no HTML estático. | Baixo — comportamento preguiçoso normal preservado em navegação SPA. |
| `src/components/Hero.tsx` | **Alterado** | O efeito _typewriter_ do `<h1>` inicia com a **primeira palavra completa** (e não anima) sob prerender. | `<h1>` completo e determinístico (antes vinha parcial/instável). | Baixo. |
| `src/components/ServicosPage.tsx` | **Alterado** | `AnimatedCounter` (via IntersectionObserver) mostra o **valor final** sob prerender, não "0". | Rota `/servicos` com números corretos no HTML. | Baixo. |
| `src/components/PneusCuritibaPromo.tsx` | **Alterado** | Render ansioso de blocos condicionados a viewport/observer. | Conteúdo completo no snapshot. | Baixo. |
| `src/components/TireMeasuresSection.tsx` | **Alterado** | Render ansioso da listagem de medidas sob prerender. | Conteúdo completo no snapshot. | Baixo. |
| `src/hooks/useSEO.ts` | **Alterado** | Mantém o `render-event` (Prerender.io) e adiciona o sinal estruturado `window.__STATIC_RENDER_STATUS__ = { ready, route }` além de `__STATIC_RENDER_READY__`. | Sinal de prontidão confiável e com rota resolvida. | Baixo — coexiste com o Prerender.io, não o substitui. |
| `src/App.tsx` | **Alterado** | Após hidratar, remove `html[data-prerendered]` para que navegações SPA voltem ao comportamento preguiçoso (performance). | Evita render ansioso permanente no cliente. | Baixo. |
| `src/lib/schema.ts`, `src/lib/buildInfo.ts`, `src/components/PneuPromocaoDetalhe.tsx`, `src/components/TireDetail.tsx` | **Alterado** | Ajustes de robustez/guarda relacionados à auditoria de APIs de navegador e a metadados/JSON-LD. | Estabilidade da captura. | Baixo. |

**Scripts e tooling**

| Arquivo | Tipo | Finalidade | Impacto na geração | Risco residual |
|---|---|---|---|---|
| `scripts/static-pilot-routes.ts` | **Alterado** | Acrescentou as **3 rotas de risco** (`/servicos`, `/faq`, `/loja-de-pneus-curitiba-perto-de-mim`) com o campo `risk`, além da rota 404 de teste. | Cobertura dos piores casos. | — |
| `scripts/generate-static-pages.ts` | **Alterado** | **Captura atômica** (normalização de animações + dedup de `<head>` + serialização do HTML num único `page.evaluate`, evitando a corrida com o `requestAnimationFrame` do framer-motion); sinal de prontidão agnóstico ao mecanismo de SEO; correção do **backup de shell obsoleto** (assets com hash antigo); coleta de erros de runtime. | Determinismo + robustez do gerador. | Médio — depende de Chrome headless disponível no ambiente. |
| `scripts/generate-static-pages.entry.ts` | **Criado** | _Entrypoint_ fino que só chama `main()`, separando o núcleo reutilizável do ponto de execução (o teste de determinismo importa `generateRoutes` sem disparar `main`). | Permite reuso sem efeitos colaterais. | Baixo. |
| `scripts/test-static-determinism.ts` | **Criado** | Gera cada rota **duas vezes** e compara o HTML normalizado; também valida completude no viewport **mobile**. Emite `reports/static-determinism-report.md`. | Prova de determinismo. | Baixo. |
| `scripts/validate-static-pilot.ts` | **Alterado** | Deriva o título/canonical da home dinamicamente (checagem anti-herança robusta) e adiciona a seção de rotas de risco ao relatório. | Validação mais fiel. | Baixo. |
| `scripts/run-ts.mjs` | **Criado** | _Runner_ portátil (bundle via `esbuild` + `node`) porque o `tsx` está quebrado neste ambiente. Emite o bundle em `<raiz>/.v0-build/` para preservar o cálculo de `ROOT`. | Torna os scripts executáveis no sandbox. | Baixo. |
| `package.json` | **Alterado** | Adicionou `esbuild` (devDependency) e apontou os scripts estáticos para o `run-ts.mjs`; scripts `generate/validate/test:static:*`. | Pipeline executável. | Baixo. |
| `.gitignore` | **Alterado** | Ignora `.v0-build/` (bundles temporários do runner). | Higiene do repositório. | — |
| `vite.config.ts` | **Alterado** | Ajustes de build relacionados à geração (chunking/estabilidade dos nomes de asset). | Estabilidade dos assets referenciados no HTML. | Baixo. |

### 11.4 Rotas validadas (11 rotas piloto reais)

Todas geraram HTML real, hidrataram sem quebra, mantiveram conteúdo essencial sem JavaScript e foram **determinísticas** (2 gerações equivalentes). Erros críticos de runtime: **0** em todas.

| Rota | Tipo / motivo da escolha | Geração | Validação | Hidratação | Sem JS | Determinismo |
|---|---|---|---|---|---|---|
| `/` | Home (schema global no shell) | OK | APROVADA | OK | OK | sim |
| `/pneu/pneu-pirelli-175-70r13-p400-evo-82t` | Produto (JSON-LD dinâmico) | OK | APROVADA | OK | OK | sim |
| `/servico/venda-de-pneus` | Serviço | OK | APROVADA | OK | OK | sim |
| `/pneu-medida/175-65r14` | Medida | OK | APROVADA | OK | OK | sim |
| `/pneu-para-hb20-curitiba` | Veículo (landing) | OK | APROVADA | OK | OK | sim |
| `/bairro/portao` | Local / bairro | OK | APROVADA | OK | OK | sim |
| `/quem-somos` | Institucional | OK | APROVADA | OK | OK | sim |
| `/servicos` | **Risco:** `AnimatedCounter` (IntersectionObserver) — deve exibir valor final, não "0" | OK | APROVADA | OK | OK | sim |
| `/faq` | **Risco:** `FAQInfiniteScroll` — conteúdo essencial não pode depender de scroll | OK | APROVADA | OK | OK | sim |
| `/loja-de-pneus-curitiba-perto-de-mim` | **Risco:** `navigator.geolocation` em handler — não pode bloquear/alterar o render | OK | APROVADA | OK | OK | sim |
| `/rota-inexistente-teste-404` | 404 (teste de erro, `noindex`) — valida página de erro | OK | APROVADA | OK | OK | sim |

### 11.5 Resultados consolidados
```text
Geração estática: 11/11 aprovada
Validação técnica: 11/11 aprovada
Determinismo: aprovado (2 gerações equivalentes após normalização)
Hidratação: aprovada (sem "mismatch"/tela branca; navegação e interações OK)
Conteúdo sem JavaScript: aprovado (título, H1, textos, contatos e links visíveis)
Metadados por rota: aprovados (1 title / 1 canonical / 1 og:title / 1 description por página)
JSON-LD: aprovado (produto 5, veículo 7, bairro 6, medida/serviço 5, home/institucional/404 2–3)
Assets: aprovados (referências /assets absolutas e existentes em dist)
Referências a localhost: nenhuma
Erros críticos de runtime: 0
Dependência do Prerender.io durante a geração: nenhuma
```

### 11.6 Comandos existentes (E2 / E3 / E4)

| Comando | O que executa | Pré-requisito | Resultado | Quando usar | Altera `dist`? | Falha em erro crítico? |
|---|---|---|---|---|---|---|
| `npm run build:spa` | `vite build` (gera o SPA em `dist`, incluindo o shell). | — | `dist/` com o shell e assets. | Antes de qualquer geração estática. | **Sim** (regenera `dist`). | Sim (erro de build). |
| `npm run generate:static:pilot` | Snapshot headless das 11 rotas piloto (via `run-ts.mjs` → `generate-static-pages.entry.ts`). | `build:spa` executado; Chrome headless disponível. | HTML por rota em `dist/**` + `reports/static-pilot-generation.json` + `reports/static-runtime-errors.md`. | Após o build, para gerar/atualizar o piloto. | **Sim** (grava HTML por rota). | Sim (rota que não renderiza / erro crítico). |
| `npm run validate:static:pilot` | Valida cada HTML gerado (metadados, conteúdo, assets, anti-herança de canonical) via `validate-static-pilot.ts`. | Geração já executada. | `reports/static-pilot-report.md`. | Após gerar, para auditar. | Não. | Sim (rota reprovada). |
| `npm run test:static:determinism` | Gera cada rota 2× e compara HTML normalizado + completude no mobile, via `test-static-determinism.ts`. | `build:spa` executado; Chrome headless. | `reports/static-determinism-report.md`. | Para provar determinismo. | Não (usa geração em memória). | Sim (divergência ou conteúdo incompleto). |
| `npm run build:static:pilot` | `build:spa` + `generate:static:pilot`. | — | `dist` + relatórios de geração. | Atalho build+geração. | **Sim**. | Sim. |
| `npm run test:static:pilot` | `build:static:pilot` + `validate:static:pilot` + `test:static:determinism`. | — | Pipeline completo + todos os relatórios. | Gate completo da E4. | **Sim**. | Sim (qualquer etapa). |
| `npm run sitemap` | `tsx scripts/generate-sitemap.ts` (fluxo de sitemaps existente, pré-E4). | — | Sitemaps em `public/`. | Manutenção de sitemap. | Não (`public/`). | Sim. |

### 11.7 Relatórios gerados

> Existentes no repositório após a E4 (os relatórios de "browser API audit" e "readiness audit" citados em planejamentos **não** existem como arquivos separados — a auditoria foi consolidada nas rotas de risco e no relatório de erros de runtime).

| Relatório | Finalidade | Execução que o gerou | Principais conclusões |
|---|---|---|---|
| `reports/static-pilot-report.md` | Validação técnica página a página (metadados/conteúdo/assets). | 2026-07-13T19:19 | 11/11 APROVADA; canonicais por rota corretos; nenhum `localhost`. |
| `reports/static-pilot-generation.json` | Saída bruta da geração (por rota: HTML bytes, texto, JSON-LD, erros). | 2026-07-13T19:19 | `total 11 / ok 11 / falhas 0`. |
| `reports/static-determinism-report.md` | Determinismo (2 gerações) + completude mobile. | 2026-07-13T19:19 | Veredito **APROVADO**; 11/11 determinísticas; mobile completo. |
| `reports/static-runtime-errors.md` | Erros de runtime capturados durante a geração. | 2026-07-13T19:19 | 0 críticos, 0 toleráveis, 0 requisições locais com falha. |

### 11.8 Riscos restantes após a E4
Itens **ainda não resolvidos** (fora do escopo desta etapa):
- **Fallback global do `vercel.json`** (`rewrites: /(.*) → /index.html`) ainda ativo.
- **Status 200 indevido** em URLs inexistentes (404 real ainda não implementado no roteamento).
- **Redirects client-side** ainda não promovidos a 301 server-side (69 bairros/cidades `*.html`, 1 `/pneus/:medida`, 6 slugs legados de marca = **76** no total).
- **Dependência do Prerender.io em produção** ainda vigente.
- **Escala para ~1.537 URLs** ainda não executada (piloto usa 11 rotas).
- **Tempo e memória do build completo** ainda não medidos na escala real.
- **Limites da Vercel** (tempo de build, tamanho do artefato de deploy) ainda não avaliados para o volume completo.
- **Validação de todas as rotas** (paridade título/description/canonical/OG/JSON-LD sem JS) ainda pendente na escala completa.
- **Possibilidade de páginas fracas ou duplicadas** a revisar quando toda a base for gerada.
- **Sitemaps** ainda ligados ao fluxo atual (não reavaliados para o novo modelo).

### 11.9 Bloqueadores para E5
```text
SEM BLOQUEADORES TÉCNICOS PARA INICIAR A E5
```
A geração estática piloto está aprovada, determinística e sem erros críticos; a E5 (roteamento de produção) pode ser iniciada de forma controlada quando autorizada.

### 11.10 Estado do Prerender.io
- A **geração estática piloto não depende** do Prerender.io (nenhuma chamada ao serviço durante a geração).
- A **produção ainda pode depender** dele (interceptação por user-agent, `<meta prerender-*>` no `index.html` e `dispatchEvent('render-event')` no `useSEO` permanecem).
- **Nenhuma integração, token ou regra foi removida.**
- **Não deve ser cancelado nem removido** antes da E5, da geração completa e da validação em produção.

### 11.11 Estado do `vercel.json`
- O arquivo **não foi modificado** na E4.
- O **rewrite global da SPA** (`/(.*) → /index.html`) **permanece**.
- **HTMLs físicos por rota ainda não estão garantidos** como resposta em produção (o rewrite global intercepta tudo).
- **404 real ainda não implementado.**
- **Redirects 301 server-side ainda não promovidos** (os 76 `redirects` já presentes no `vercel.json` são de paginação, pré-E4, e não se confundem com os client-side a promover).

### 11.12 Próxima etapa recomendada
```text
E5 — roteamento de produção, arquivos HTML por rota, redirects HTTP e 404 real
```
A E5 deve ser implementada de forma **controlada**, com **ambiente de preview** e **plano de rollback**, validando no Search Console (Inspeção de URL) antes de promover a produção.

### 11.13 Checklist consolidado
```text
E1 — auditoria inicial: concluída
E2 — enumerador de rotas: concluída
E3 — prova de conceito: aprovada
E4 — compatibilidade e determinismo: aprovada
E5.0 — validação em ambiente controlado (sem produção): aprovada
E5 — roteamento de produção (152 redirects 301): implementada e validada
E5.5 — auditoria independente da E5: aprovada (1 observação não-bloqueante)
E6 — geração estática em escala (1512 rotas): implementada e validada
E6.5 — build de deploy configurado e validado localmente: PARCIAL (deploy Vercel pendente)
Remoção do Prerender.io: pendente
Validação final: pendente
```

---

*Etapa 1 (auditoria), Etapa E2/E3 (prova de conceito) e Etapa E4 (compatibilidade, robustez e determinismo). Na E4, as mudanças de código de aplicação limitaram-se a tornar componentes lazy/animados compatíveis com o prerender (render ansioso guardado por `isPrerenderEager`) e ao sinal de prontidão no `useSEO` — o Prerender.io e o `vercel.json` permanecem intactos. A E5 (roteamento de produção) NÃO foi iniciada.*

---

## 12. Etapa E5.0 — Validação em ambiente controlado (sem produção)

Objetivo: comprovar, **sem publicar em produção e sem alterar `vercel.json`, `middleware.js` ou o Prerender.io**, que a estratégia da E5 (servir HTML físico por rota com fallback SPA) é viável e não regride. Relatório completo com evidências: **`reports/e5-preview-validation.md`**.

### 12.1 O que foi executado
- `npm run build:static:pilot` (build do SPA) + `npm run generate:static:pilot` → **11/11** rotas piloto geradas como `dist/<rota>/index.html`.
- `npm run validate:static:pilot` → **11/11 aprovadas** (title, description, canonical, JSON-LD, assets, conteúdo sem JS).
- Servidor local `scripts/e5-precedence-server.mjs` replicando a ordem da Vercel (**filesystem primeiro, rewrite `/(.*) → /index.html` como fallback**) para provar precedência via header `X-Served-By`.
- Teste de hidratação real no navegador (Cenário A — `createRoot`) e simulação da lógica de decisão do `middleware.js` por user-agent.

### 12.2 Resultados-chave
- **Precedência correta:** rotas com arquivo físico → `X-Served-By: filesystem` com metadados próprios; rota inexistente → `spa-fallback-rewrite` (soft-404, HTTP 200). O rewrite NÃO sobrepõe o HTML físico.
- **HTML preenchido:** produto ~171 KB, medida ~173 KB, home ~50 KB; `<h1>`, canonical e JSON-LD presentes no HTML cru (sem executar JS).
- **Hidratação (`createRoot`) sem quebra:** 0 mensagens no console, sem flicker/tela branca, `data-prerendered` removido após montagem. **Não é necessário migrar para `hydrateRoot` na E5.**
- **`localhost` no dist:** 0 em HTML/canonical/OG/schema. A única ocorrência é uma string interna inerte do React Router dentro de `react-vendor-*.js` (sobrescrita por `window.location`).
- **Middleware:** enquanto existir, **bots continuam desviados ao Prerender.io** (o middleware tem precedência sobre o filesystem e curto-circuita a requisição). Isso é a rede de segurança desejada durante a E5; a troca para HTML físico servido a bots só ocorre ao desativar o middleware (E9).

### 12.3 Correções de documentação aplicadas nesta etapa
- Paginação no `vercel.json`: “~80” → **76** (confirmado).
- Slugs legados de marca: **3 → 6** (Pirelli, Michelin, Goodyear, Continental, Yokohama, Bridgestone).
- Total client-side a promover: **76** (69 bairros/cidades + 1 medida + 6 marcas); total projetado no `vercel.json` após E5: **152**.

### 12.4 Limites respeitados
Nenhuma alteração em `vercel.json`, `middleware.js`, `index.html` ou no serviço Prerender.io. Nada publicado em produção. As únicas escritas foram: HTML gerado em `dist/` (piloto, descartável), o script auxiliar `scripts/e5-precedence-server.mjs`, o relatório `reports/e5-preview-validation.md` e estas correções de contagem no documento.

### 12.5 Veredito
```text
E5.0 APROVADA — E5 (roteamento de produção) LIBERADA PARA INICIAR
```
Pré-condições técnicas comprovadas em ambiente controlado. A E5, no escopo definido (HTML físico por rota + manter fallback SPA + Prerender.io ligado como segurança), está liberada. Continuam válidos os limites: **não** remover o rewrite `/(.*)`, **não** habilitar `cleanUrls`, e 404 HTTP real permanece fora do escopo (depende da E6).

---

## 13. Etapa E5 — Roteamento de produção (301 server-side)

Objetivo: promover os redirects client-side a `redirects` **301 server-side** no `vercel.json`, mantendo o fallback SPA, os headers e o Prerender.io intactos. Relatório completo: **`reports/e5-implementation.md`**.

### 13.1 Resultado
- `vercel.json`: **76 → 152 redirects** (76 paginação já existentes + 76 promovidos: 69 bairros/cidades `*.html`, 1 `/pneus/:medida` dinâmico, 6 slugs legados de marca).
- Rewrite global `/(.*) → /index.html`, `headers` e ausência de `cleanUrls`/`trailingSlash`: **preservados**.
- Redirects client-side no `App.tsx`: **mantidos** como rede de segurança (redundância).

### 13.2 Robustez / idempotência
- **Fonte única** `scripts/manual-redirects.ts` deriva os 76 manuais das mesmas fontes de dados do `App.tsx` (sem divergência).
- `scripts/generate-redirects.ts` reescrito: monta `[manuais, paginação]`, **preserva** manuais desconhecidos por merge (nunca apaga regras) e é **idempotente** (2 execuções → sempre 152).
- **Correção de ambiente:** `npm run redirects`/`prebuild` migraram de `tsx` para `node scripts/run-ts.mjs` — o `tsx` saía silenciosamente sem executar neste runtime (mesmo motivo do wrapper já usado no piloto), fazendo o gerador virar no-op.

### 13.3 Validação
- Análise estática (`scripts/validate-redirects.mjs`): 152 regras, **0** duplicatas, **0** cadeias, **0** loops, todos `permanent:true`.
- HTTP real (`scripts/e5-routing-server.mjs` + `scripts/test-redirects-http.mjs`): **152/152 → 301** com `Location` exato, sem encadeamento; rotas piloto → 200 filesystem; rota inexistente → 200 fallback (soft-404); assets → 200.
- Navegador: `/portao.html` → SPA resolve `/bairro/portao` com H1/conteúdo (redundância client-side confirmada).

### 13.4 Limites respeitados
Sem remover o rewrite, sem `cleanUrls`/`trailingSlash`, sem tocar em `middleware.js`/Prerender.io, sem publicar em produção. 404 HTTP real segue fora do escopo (E6).

### 13.5 Veredito
```text
E5 IMPLEMENTADA E VALIDADA — pronta para publicar
```

---

## 14. Etapa E5.5 — Auditoria independente da E5

Objetivo: verificar de forma independente (recontagem a partir das fontes, não do relatório da E5) que a promoção a 301 está correta, idempotente e sem regressão — sem publicar em produção. Relatório completo com evidências: **`reports/e5.5-audit.md`**; inventário: **`reports/e5-redirect-inventory.csv`**.

### 14.1 Confirmações
- **Contagem:** 152 redirects = 76 paginação + 69 bairros/cidades + 1 medida + 6 marcas (recontado nas fontes). 0 duplicatas, 0 loops, 0 cadeias, todos 301.
- **Idempotência:** `npm run redirects` 2× → `vercel.json` byte-idêntico; recuperação do zero restaura 152 regras idênticas.
- **`run-ts.mjs`:** propaga exit code (3→3, throw→1), stdout/stderr e args corretamente; sem órfãos.
- **HTTP:** 152/152 → 301 com `Location` exato e sem encadeamento; 14/14 controles negativos/precedência ok (`/pneus` puro = 200, filesystem tem precedência sobre rewrite, soft-404 no fallback).
- **React/SEO:** hidratação sem erros no console, canonicals auto-referenciais (nenhum herda o da home), robots/OG/Twitter/JSON-LD presentes, 0 `localhost`.
- **Bots:** `redirects` avaliados antes do middleware; rede de segurança Prerender.io intacta.
- **Rollback:** via git (`git revert` dos commits da E5) ou regeneração determinística do `vercel.json`; redundância client-side no `App.tsx` permanece como segurança.

### 14.2 Observação não-bloqueante
O passo de **sitemap** do `prebuild` ainda usa `tsx` (no-op neste sandbox; funciona no build da Vercel), enquanto **redirects** usa `run-ts.mjs`. Sem impacto em produção, mas há inconsistência de runner. Recomendação (fora do escopo da E5): padronizar o sitemap para `run-ts.mjs`.

### 14.3 Veredito
```text
E5.5 APROVADA — E5 confirmada correta, idempotente e sem regressão (1 observação não-bloqueante)
```

---

## 15. Etapa E6 — Geração estática em escala

Objetivo: escalar a geração de HTML físico de 11 rotas (piloto) para **todas as
rotas indexáveis**, com pipeline determinística, retomável e validada — sem
publicar em produção nem tocar em `middleware.js` / `vercel.json` / Prerender.io.
Relatório completo: **`reports/e6-implementation.md`**.

### 15.1 Resultado
- **1512/1512 rotas geradas, 0 falhas** em 389s (3.88 rotas/s, concorrência 4).
- **Validação global:** 1512 com arquivo, 0 problemas, 0 canonicais duplicados → APROVADO.
- **Paridade** enumerador↔sitemap: 1512 = 1512, 0 divergências.
- **HTTP** (redirects→filesystem→rewrite): 279/279 (200 físicas + 76 redirects 301 + soft-404).
- **Hidratação** React sem erros/flicker em todos os tipos de rota.

### 15.2 Arquitetura
- **Fonte única** `scripts/static-routes.ts`; o sitemap passou a consumi-la →
  paridade por construção.
- Núcleo do piloto refatorado em `renderRouteOnPage()` (reuso sem duplicação; piloto segue passando).
- `scripts/generate-static-all.ts`: concorrência, **checkpoint/retomada**
  (`--fresh`, `--retry-failed`), **escrita atômica** e amostra determinística
  **representativa** (`--limit --shuffle`).

### 15.3 Correções técnicas indispensáveis
1. **21 URLs de produto duplicadas** (defeito de dados pré-existente no `TIRES`,
   já poluía o sitemap): dedupe por path no enumerador → 1371 → **1350** produtos.
2. **Canonical de serviço com barra final** (`/servicos/`, `/servico/{slug}/`)
   divergia do sitemap: corrigido (aprovado pelo usuário) em `ServicosPage.tsx`
   e `ServiceDetail.tsx`.
3. **Home ausente de amostras `--limit`** (defeito da pipeline): amostra passou a
   garantir home + ≥1 rota por tipo.
4. **Runner do sitemap** padronizado para `run-ts.mjs` (fecha a observação da E5.5).

### 15.4 Observação não-bloqueante
Similaridade máxima **0.963** entre variantes de um mesmo pneu (índices de carga
diferentes). Esperado num catálogo; canonical/title/URL são únicos por variante.
É estratégia de conteúdo, não defeito de pipeline.

### 15.5 Limites respeitados
`dist/` não é commitado; checkpoint/summary de runtime foram ignorados/destrackeados.
Sem produção, sem middleware/Prerender.io, sem alterar rewrite/headers. 404 real
segue como soft-404 (fallback SPA).

### 15.6 Veredito
```text
E6 IMPLEMENTADA E VALIDADA — 1512/1512 rotas, 0 falhas, validação/paridade/HTTP OK.
3 defeitos reais corrigidos, 1 observação de conteúdo. Pronta para publicar em Preview.
```

---

## 16. Etapa E6.5 — Build de deploy configurado e validado localmente

Objetivo: garantir que o **build de deploy** da Vercel passe a gerar as 1.512 páginas
físicas e validar, sem publicar, todo o output real. Relatório completo com evidências:
**`reports/e6.5-local.md`**. Veredito **PARCIAL** — deploy/Preview na Vercel não executado
(sem autenticação e requer aprovação). Cada item foi rotulado **REAL** vs **PENDENTE (Preview)**.

### 16.1 O que mudou
- `vercel.json` agora define `"buildCommand": "npm run build:static"` (gera sitemap + redirects
  + SPA + 1.512 páginas + validação). Antes, o build padrão só gerava o SPA — as páginas E6
  **não** entrariam num deploy. O gerador de `vercel.json` preserva/reemite `buildCommand`
  de forma idempotente, sem afetar os 152 redirects, o rewrite SPA nem os headers.

### 16.2 Validado de forma REAL (neste ambiente)
- **Build completo do zero:** 1512/1512 páginas, 0 falhas, **~6,9 min** (< 45 min da Vercel) e
  **pico ~2,04 GB RSS** (< ~8 GB). `dist/` ≈ 261 MB. Validação global aprovada. Determinismo
  confirmado (resultado idêntico à E6).
- **Roteamento HTTP** sobre o output real (servidor que replica redirect→filesystem→rewrite
  **+ headers**): **165/165** — 75 redirects 301, 87 rotas físicas, casos de borda (paginação,
  medida dinâmica, asset, soft-404) e precedência corretos.
- **Headers:** segurança global em todas as páginas; `Content-Type`+`Cache-Control` em sitemaps.
- **SEO/hidratação** em 4 tipos (home, produto, serviços, catálogo): title/H1/canonical corretos
  e auto-referenciais (`/servicos` sem barra, confirmando a correção da E6), hidratação sem erro
  de console.
- **Middleware/bots (lógica real executada, não simulada):** 9/9 casos. Descoberta-chave: o
  middleware roda **antes** do filesystem e, para **bots** em rotas de página, reescreve para o
  Prerender.io **antes** de alcançar as páginas físicas. Ou seja, enquanto o middleware estiver
  ativo, as 1.512 páginas E6 **beneficiam humanos** mas **bots continuam no Prerender.io**. A
  rede de segurança (SPA em ausência de token/erro/timeout) está intacta.

### 16.3 Observação não-bloqueante
`vercel.json` não define `Cache-Control` para `/assets/*` (arquivos com hash). Recomendável
`public, max-age=31536000, immutable`. Fora do escopo da E6.5.

### 16.4 PENDENTE (só verificável em Preview real)
Tempo/memória no runner da Vercel; libs de sistema do Chrome no build image; comportamento
real de bot no edge via Prerender.io; caching/headers efetivos na CDN; URL de Preview e logs.

### 16.5 Veredito
```text
E6.5 PARCIAL — build de deploy configurado (buildCommand) e validado LOCALMENTE de ponta a
ponta (1512/1512 dentro dos limites Vercel; roteamento/SEO/hidratação/headers/middleware REAIS).
Itens de infraestrutura (deploy, edge, bots, CDN) PENDENTES de um Preview real da Vercel.
```

### 16.6 Tentativa de auditoria no Preview (2026-07-14) — BLOQUEADA por SSO
URL: `https://carp-lus-git-v0-supremapix-155c8202-supremapixs-projects.vercel.app/`
Relatório: **`reports/e6.5-preview-validation.md`**.

A auditoria real **não pôde ser executada**: o Preview está sob **Deployment Protection
(Vercel Authentication/SSO)**. Todas as requisições — humano, Googlebot, Bingbot, `sitemap.xml`,
`robots.txt`, `llms.txt`, assets — retornam **HTTP 302 → `vercel.com/sso-api`** antes de alcançar
a aplicação. O bypass sem token também é rejeitado. Nenhum item da checklist foi verificável.

Para desbloquear: (a) desativar a Deployment Protection **ou** fornecer um secret de
*Protection Bypass for Automation*; e (b) garantir **`GENERATE_STATIC=1`** no ambiente de Preview
— sem essa flag o `build:deploy` (E7) publica só o SPA, sem as 1.512 páginas físicas. Após ambos,
a auditoria completa será reexecutada.

```text
E6.5 (Preview) PARCIAL — CORREÇÕES NECESSÁRIAS: Preview inacessível (SSO 302).
Auditoria pendente de: desativar Deployment Protection (ou bypass token) + GENERATE_STATIC=1.
```

---

## 17. Etapa E7 — Chromium serverless + build de deploy resiliente

Contexto: o merge da E6/E6.5 para `main` **quebrou a produção**. Causa-raiz confirmada: o
`buildCommand` rodava `build:static`, que usa o pacote `puppeteer` com Chrome empacotado — e a
imagem de build da Vercel **não tem as bibliotecas de sistema do Chrome**. Correção imediata:
`buildCommand` voltou a `npm run build` (SPA seguro), restaurando a produção. Esta etapa entrega
a capacidade de gerar as 1.512 páginas **no build da Vercel** sem risco de derrubar o deploy.

### 17.1 O que mudou
- **Chromium serverless:** `@sparticuz/chromium@^149` + `puppeteer-core@25.3.0` em
  `dependencies` (disponíveis em produção). `puppeteer` (Chrome empacotado) segue em
  `devDependencies` para uso local. Ambos os lockfiles (npm + pnpm) sincronizados.
- **Helper único `scripts/launch-browser.ts`:** detecta o ambiente e escolhe o backend.
  Na Vercel (`VERCEL=1`) usa `@sparticuz/chromium`; localmente usa `puppeteer`. Overrides:
  `USE_SERVERLESS_CHROMIUM=1` e `PUPPETEER_LOCAL=1`. Os dois pontos de launch
  (`generate-static-pages.ts` e `generate-static-all.ts`) passaram a usá-lo.
- **Build resiliente e opt-in `scripts/build-deploy.mjs`** (novo `buildCommand`):
  - Camada **ESSENCIAL** (sempre): `sitemap → redirects → build:spa`. Falha aqui = deploy falha.
  - Camada **OPT-IN/best-effort** (só com `GENERATE_STATIC=1`): `generate:static:all →
    validate:static:all`. Se o Chromium falhar, emite AVISO e **conclui com sucesso** servindo o
    SPA (bots seguem cobertos pelo Prerender.io). Habilitar a flag **nunca** derruba a produção.

### 17.2 Validado de forma REAL (neste ambiente)
- **Caminho serverless funciona:** com `USE_SERVERLESS_CHROMIUM=1`, o `@sparticuz/chromium`
  extraiu o Chromium em `/tmp/chromium` e renderizou o piloto (11/11 rotas OK) — mesmo mecanismo
  que rodará na Vercel.
- **Deploy padrão seguro:** `build:deploy` sem flag → SPA + sitemap + 152 redirects, 0 páginas,
  `exit 0`.
- **Resiliência sob falha:** `GENERATE_STATIC=1` com Chromium propositalmente quebrado → AVISO e
  **`exit 0`** com o SPA publicado. Produção protegida.
- `buildCommand` sobrevive à regeneração do `vercel.json`; rewrite e redirects intactos.

### 17.3 Como ativar a geração completa na Vercel
Definir `GENERATE_STATIC=1` nas variáveis de ambiente do projeto. PENDENTE de validação real:
tempo/memória das 1.512 renderizações no runner da Vercel (o piloto local serverless roda a
~1,3 rotas/s → estimado ~19 min para 1.512, o que pode exceder o limite de build; se exceder, a
alternativa é gerar em CI/step separado e commitar o `dist`, ou reduzir a concorrência/lote).

### 17.4 Veredito
```text
E7 IMPLEMENTADA — Chromium serverless + build resiliente. Deploy padrão seguro (SPA),
geração completa opt-in via GENERATE_STATIC=1 e à prova de falhas (nunca quebra produção).
Caminho serverless comprovado localmente; escala das 1.512 na Vercel PENDENTE de medição real.
```
