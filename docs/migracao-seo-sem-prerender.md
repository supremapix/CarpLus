# Migração SEO — Remoção do Prerender.io e adoção de HTML gerado no build

> **Status:** Etapa 1 concluída — Auditoria técnica (sem migração).
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
- `redirects`: ~80 regras 301 de paginação (`/pneus?page=N → /landing-tematica`), geradas por `scripts/generate-redirects.ts`.
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

- [ ] **E2.** Criar enumerador único de rotas (reutilizar lógica de `generate-sitemap.ts` / `seoIndexing.ts`) que devolva a lista completa de URLs a gerar.
- [ ] **E3.** Provar conceito: pré-renderizar em build um subconjunto (home + 1 produto + 1 medida + 1 serviço + 1 bairro + 1 landing) e inspecionar o HTML emitido (title/description/canonical/JSON-LD).
- [ ] **E4.** Auditar componentes quanto a acesso a `window`/`document` fora de efeitos; corrigir os que quebrarem no prerender.
- [ ] **E5.** Ajustar `vercel.json`: servir HTML estático por rota + fallback SPA; mover redirects client-side para 301 server-side.
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

*Documento gerado na Etapa 1 (auditoria). Nenhuma alteração de código de aplicação foi feita nesta etapa além da criação deste arquivo.*
