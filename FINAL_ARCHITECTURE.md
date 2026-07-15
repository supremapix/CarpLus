# FINAL_ARCHITECTURE.md — Manual Técnico do Projeto Carplus

> Site: **Carplus Centro Automotivo** — loja de pneus e oficina em Curitiba/PR.
> Domínio de produção: `https://www.carpluspneuseoficina.com.br`
> Repositório: `supremapix/CarpLus` · Projeto Vercel: `carp-lus`

Este documento é o manual técnico de referência da arquitetura atual. Descreve
como o projeto é construído, como as ~1.512 páginas são geradas estaticamente,
como funcionam redirects, sitemaps, 404, robots, llms e SEO, e os procedimentos
operacionais (deploy, novas páginas, novos produtos, regeneração e rollback).

---

## 1. Visão geral da arquitetura

O projeto é uma **SPA React (Vite + React Router)** que, no momento do deploy,
é transformada em um **site estático pré-renderizado (SSG por snapshot headless)**.
A estratégia central é:

1. **Runtime (navegador):** aplicação React normal (Vite, React Router, lazy routes).
2. **Build de deploy:** além do bundle SPA, um gerador abre cada rota indexável
   em um **Chrome headless** e captura o **HTML já renderizado** em disco
   (`dist/<rota>/index.html`). O Google e demais bots recebem HTML físico
   completo (título, H1, canonical, JSON-LD, conteúdo) — **sem depender de
   nenhum serviço externo de prerender** (não há Prerender.io no runtime).
3. **Vercel:** serve os arquivos estáticos. Rotas conhecidas batem no filesystem
   (HTML físico); rotas desconhecidas caem no `404.html` (HTTP 404 real).

Princípio de resiliência: a geração estática é **opt-in** (`GENERATE_STATIC=1`)
e **best-effort**. Se falhar, o deploy **não quebra** — publica-se o SPA. Com a
flag ligada e tudo OK, publicam-se as 1.512 páginas físicas.

### Stack

| Camada | Tecnologia |
|---|---|
| UI | React 18 + React Router DOM (rotas lazy) |
| Bundler | Vite (plugin React + Tailwind v4 via `@tailwindcss/vite`) |
| Estilo | Tailwind CSS v4 |
| SEO runtime | Hook `useSEO` (`src/hooks/useSEO.ts`) + JSON-LD global no `index.html` |
| SSG | Puppeteer-core + `@sparticuz/chromium` (Chromium serverless na Vercel) |
| Execução de scripts TS | `scripts/run-ts.mjs` (wrapper `tsx`/esbuild) |
| Hospedagem | Vercel (static output em `dist/`) |
| Dados | Arquivos TS versionados (`src/data.ts`, `src/data/*`) — sem banco de dados |

> **Não há backend nem banco de dados.** Todo o catálogo (pneus, medidas,
> veículos, serviços, bairros, landings) vive em arquivos TypeScript versionados.

---

## 2. Fluxo completo do build

O comando de build da Vercel é definido em `vercel.json`:

```json
"buildCommand": "npm run build:deploy"
```

`npm run build:deploy` executa `node scripts/build-deploy.mjs`, que roda em
**duas camadas**:

### Camada 1 — ESSENCIAL (sempre roda; falha = deploy falha)

```
npm run sitemap      → gera os sitemaps XML em public/
npm run redirects    → reescreve a chave "redirects" do vercel.json
npm run build:spa    → vite build (gera dist/ com o bundle SPA)
emit404()            → copia o shell SPA limpo para dist/404.html
```

- `emit404()` captura o `dist/index.html` **logo após o `build:spa` e ANTES**
  de a geração estática sobrescrever a home. Assim o `404.html` é sempre o shell
  SPA limpo, que a Vercel serve com **HTTP 404 real** para rotas desconhecidas.

### Camada 2 — OPT-IN / best-effort (só com `GENERATE_STATIC=1`)

```
npm run generate:static:all   → gera o HTML físico de TODAS as rotas indexáveis
npm run validate:static:all   → revalida cada index.html gravado
```

- Se `GENERATE_STATIC` **não** for `1`: pula esta camada e publica só o SPA
  (comportamento seguro). **É exatamente isso que NÃO queremos em produção.**
- Se qualquer passo aqui falhar: registra **AVISO** e conclui com sucesso
  servindo o SPA — habilitar a flag nunca derruba a produção.

> **Fonte:** `scripts/build-deploy.mjs`.

### Diagrama do fluxo

```
vercel deploy
   └─ buildCommand: npm run build:deploy
        └─ scripts/build-deploy.mjs
             ├─ [essencial] npm run sitemap      (public/sitemap*.xml)
             ├─ [essencial] npm run redirects    (vercel.json > redirects)
             ├─ [essencial] npm run build:spa    (dist/ + assets)
             ├─ emit404()                        (dist/404.html = shell limpo)
             └─ if GENERATE_STATIC=1:
                  ├─ [best-effort] generate:static:all  (dist/<rota>/index.html)
                  └─ [best-effort] validate:static:all
```

---

## 3. Geração das ~1.512 páginas (SSG)

### 3.1 Enumeração — fonte única da verdade

Todas as rotas indexáveis são enumeradas por **`scripts/static-routes.ts`**
(`getStaticRoutes()`). É a **fonte única** consumida por:

- `scripts/generate-sitemap.ts` (emite os XML);
- `scripts/generate-static-all.ts` (gera o HTML de cada rota);
- `scripts/e6-route-inventory.ts` / `e6-sitemap-parity.ts` (auditorias).

As rotas vêm das mesmas fontes de dados usadas em runtime (sem listas manuais):

| Tipo | Origem dos dados | Padrão de URL | Sitemap |
|---|---|---|---|
| `produto` | `src/data.ts` (TIRES) via `getIndexableTireSlugs()` | `/pneu/:slug` | produtos |
| `medida` | `src/data/seoLanding.ts` (`MEASURE_SEO`, 2+ opções) | `/pneu-medida/:medida` | medidas |
| `veiculo` | `src/data/seoLanding.ts` (`VEHICLE_PAGES`) | `/:slug` | veiculos |
| `servico` | `src/data/services.ts` (`SERVICE_CATEGORIES`) | `/servico/:slug` | servicos |
| `bairro` | `src/data/indexableNeighborhoods.ts` | `/bairro/:slug` | servicos |
| `aro`/`marca`/landings | `src/data/seoLanding.ts` + `centroAutomotivoSeo.ts` | `/:slug` | servicos |
| institucional/hub | lista fixa em `static-routes.ts` | `/`, `/pneus`, `/servicos`, … | servicos |

- Cada rota carrega: `path`, `type`, `id`, `expectedCanonical` (auto-referencial),
  `sitemap`, `priority`, `changefreq` e `genPriority` (ordem de geração).
- **Dedupe obrigatório por `path`:** o catálogo bruto tem registros duplicados
  (mesmo slug canônico). O enumerador mantém a 1ª ocorrência, garantindo que
  nenhuma URL pública apareça duas vezes (nem no sitemap, nem na escrita de HTML).

### 3.2 Motor de render — `scripts/generate-static-pages.ts`

Expõe a **primitiva única** `renderRouteOnPage()`, usada por todo gerador
(sem lógica divergente). Fluxo por rota:

1. Usa o build existente em `dist/` (rode `vite build` antes).
2. Sobe um **servidor estático local** com fallback SPA (serve o shell original
   para rotas de aplicação; só serve arquivos de asset reais do disco).
3. Abre a rota em Chrome headless (Puppeteer).
4. Injeta `window.__STATIC_RENDER__ = true` **antes** dos scripts do app (render ansioso).
5. Aguarda **sinal confiável de prontidão**: rota correta + `title` aplicado +
   canonical presente + sem spinner + `h1`/`main` presentes (via
   `window.__STATIC_RENDER_STATUS__` emitido pelo `useSEO`, ou heurística de DOM).
6. Captura erros (`pageerror`, `console.error` classificado, requests/chunks 4xx/5xx).
7. Marca `<html data-prerendered="true">` e serializa o HTML **atomicamente**
   (normaliza animações do framer-motion, deduplica tags de `<head>`).
8. **Sanitiza** qualquer vazamento de `localhost`/`127.0.0.1:porta` → `BASE_URL`.
9. Devolve o HTML em memória (quem chama grava).

Uma rota é `ok` **somente** se: sem erros críticos, sem requests falhos, rota
resolvida correta, com `<title>` e com `<h1>`. Caso contrário é `falha`.

### 3.3 Orquestrador escalável — `scripts/generate-static-all.ts`

Escala a primitiva para todas as rotas com robustez:

- **Concorrência controlada** (default 4 páginas no mesmo browser; `--concurrency=N`).
- **Checkpoint/retomada** em `reports/e6-progress.json`: rotas já `ok` são puladas;
  falhas reprocessáveis com `--retry-failed`.
- **Escrita atômica** (`.tmp` + `rename`): nunca deixa `index.html` parcial.
- **Amostragem determinística** (`--shuffle` com seed fixa; `--limit=N`).
  Amostras pequenas sempre incluem a home + ≥1 rota de cada tipo.
- **Preserva o shell SPA** original como fallback (`reports/_spa-shell/`).
- Caminho de saída: home → `dist/index.html`; demais → `dist/<rota>/index.html`
  (`outputFileFor()`).
- Ao final, escreve `reports/e6-generation-summary.json`. Se houver `falha>0`,
  sai com código 1.

**Detalhe crítico da home:** a home grava em `dist/index.html`, o mesmo arquivo
que `build:spa` regravou como shell vazio. O orquestrador só considera a home
concluída se o arquivo existir **E** contiver `data-prerendered` (`isPrerenderedFile`),
evitando publicar a raiz como shell vazio.

### 3.4 Validação — `scripts/validate-static-all.ts`

Reabre **cada** `index.html` gravado e verifica invariantes de SEO/estrutura:

- arquivo existe e é não-trivial (`≥ 2000 B`);
- `<title>` presente, não vazio e `≠` título do shell;
- canonical presente e **igual** ao `expectedCanonical` do enumerador;
- `robots` sem `noindex`;
- `<h1>` presente; ≥1 bloco JSON-LD; `og:title` + `og:url` + `twitter:card`;
- sem `localhost`/`127.0.0.1`;
- `data-prerendered="true"` presente;
- detecta canonicais duplicados entre rotas distintas.

---

## 4. Funcionamento do `build-deploy`

`scripts/build-deploy.mjs` é o **único ponto de entrada** do build na Vercel.
Características:

- **Duas camadas** (essencial vs. opt-in) — ver seção 2.
- `run(cmd, { essential })`: passos essenciais abortam o build em erro; passos
  best-effort apenas avisam.
- **`emit404()`** roda entre `build:spa` e a geração estática, garantindo um
  `404.html` limpo.
- Loga o ambiente (`VERCEL`, `GENERATE_STATIC`) para diagnóstico nos logs de build.

**Regra de ouro:** a variável **`GENERATE_STATIC=1` deve estar presente em
Production (e Preview)**. Sem ela, o build publica só o SPA + 404.html, e as
~1.512 rotas físicas retornam **404** (regressão já observada e corrigida).

---

## 5. Funcionamento dos redirects

Definidos na chave `redirects` do `vercel.json`, **gerados** por
`scripts/generate-redirects.ts` (via `npm run redirects`, no build). Total atual:
**152 redirects** (todos `permanent: true` → 301/308).

Duas origens claramente separadas:

1. **Manuais** — `scripts/manual-redirects.ts` (fonte única versionada, ~76 regras):
   - ~69 bairros/cidades: `/<slug>.html` → `/bairro/<slug>`;
   - 1 medida dinâmica: `/pneus/:medida` → `/pneu-medida/:medida`;
   - 6 slugs de marca legados: `/pneu-<marca>-curitiba` → `/pneus-<marca>-curitiba`.
2. **Paginação** — autogeradas de `src/lib/seoIndexing.ts` (~76 regras):
   `/pneus?page=N` → landing temática dominante (`getPaginationRedirects()`).

**Garantias do gerador:**

- **Idempotente:** rodar `npm run redirects` sempre restaura os manuais.
- **Não-perda:** regras presentes no `vercel.json` que não sejam paginação nem
  do conjunto manual são preservadas como "manual desconhecido".
- **Ordem final do `vercel.json`:** `buildCommand`, `redirects`, `rewrites`,
  `headers`. A Vercel avalia **redirects → filesystem → rewrites**.

**Rewrites (fallback SPA)** — servem `index.html` para rotas que o React resolve
no cliente (ex.: `/bairro/:slug`, `/servico/:slug`, `/admin/:path*`,
`/politica-de-privacidade`, `/pneu-promocao/:slug`, `/sitemap`). Com o SSG ligado,
essas rotas já têm HTML físico em disco (o filesystem tem precedência sobre o rewrite).

---

## 6. Geração dos sitemaps

`scripts/generate-sitemap.ts` (via `npm run sitemap`) emite, em `public/`:

- `sitemap.xml` — índice que aponta para os 4 segmentos abaixo;
- `sitemap-produtos.xml` — produtos canônicos indexáveis (`/pneu/:slug`);
- `sitemap-medidas.xml` — medidas com 2+ opções (`/pneu-medida/:medida`);
- `sitemap-veiculos.xml` — páginas por veículo;
- `sitemap-servicos.xml` — institucional + serviços + bairros + landings.

Características:

- **Fonte única:** agrupa `getStaticRoutes()` por `r.sitemap`, preservando a
  ordem de emissão (paridade byte-a-byte com o histórico).
- Cada `<url>` recebe `<loc>`, `<lastmod>` (data do build), `<changefreq>`, `<priority>`.
- Exclui automaticamente noindex, paginações (`?page=N`) e medidas de conteúdo
  fino (via motor de indexação `src/lib/seoIndexing.ts`).
- A home é normalizada para terminar em `/`.

Servidos com `Content-Type: application/xml` e `Cache-Control: public, max-age=86400`
(headers no `vercel.json`).

---

## 7. Geração do 404

- `emit404()` em `build-deploy.mjs` copia o shell SPA limpo (`dist/index.html`
  logo após `build:spa`) para **`dist/404.html`**.
- A Vercel serve `/404.html` com **HTTP 404 real** para qualquer rota não
  resolvida por **redirects → filesystem → rewrites**.
- No cliente, o React Router renderiza o componente `NotFound`
  (`src/components/NotFound.tsx`), marcado como `noindex`.
- **Observação (comportamento conhecido):** prefixos com rewrite (`/servico/*`,
  `/admin/*`, `/bairro/*`) servem o shell SPA mesmo para slugs inexistentes —
  logo respondem 200, não 404. Slugs reais desses tipos têm HTML físico. Nenhuma
  dessas URLs "fantasma" está no sitemap. Endurecer isso para 404-real é uma
  melhoria futura opcional.

---

## 8. Robots

Arquivo estático **`public/robots.txt`** (não gerado por script). Conteúdo-chave:

- `User-agent: *` → `Allow: /`.
- Lista os 5 sitemaps (índice + 4 segmentos).
- `Disallow` de paginação/busca: `/*?page=`, `/*?q=`, `/pneus?*`.
- `Disallow` de internos: `/admin/`, `/api/`, `/_next/`, `/private/`.
- Blocos específicos para `Googlebot`, `Bingbot`, `Googlebot-Image`.
- Diretiva `Host:` com o domínio canônico.

Servido com `Content-Type: text/plain` e cache de 1 dia (headers no `vercel.json`).

---

## 9. LLMs

Dois arquivos estáticos em `public/` (não gerados por script):

- **`llms.txt`** — resumo estruturado (empresa, endereço, contato, catálogo,
  serviços) no padrão [llmstxt.org](https://llmstxt.org/).
- **`llms-full.txt`** — versão expandida.

Ambos servidos com `Content-Type: text/plain; charset=utf-8` e cache de 1 dia
(headers no `vercel.json`). Também referenciados em comentários no `robots.txt`.

> Atenção: dados de contato/endereço no `llms.txt` devem ser mantidos coerentes
> com o JSON-LD do `index.html` e com os componentes institucionais.

---

## 10. JSON-LD (dados estruturados)

Duas camadas:

1. **Global (fonte única)** — no `index.html` (shell), sempre presente em todas
   as páginas:
   - `@graph` com **Organization** (`#organization`), **WebSite** (`#website`,
     com `SearchAction`) e **LocalBusiness** (`#localbusiness`, tipos
     `AutoRepair`/`TireShop`/`LocalBusiness`, com endereço, geo, horários,
     `aggregateRating`, `areaServed`).
   - Bloco **Store** (`#store`) para Google Shopping/rich snippets.
   - **Não duplicar** Organization/WebSite/LocalBusiness no React.
2. **Dinâmico por rota** — injetado pelo hook `useSEO` via prop `schemaJSON`,
   marcado com `data-dynamic-schema="true"` (ex.: `Product`, `Service`,
   `BreadcrumbList`, `FAQPage`). É removido/reaplicado a cada troca de rota.

Na geração estática, ambos são capturados no HTML físico; a validação exige
≥1 bloco JSON-LD por página.

---

## 11. Estrutura SEO

- **`src/hooks/useSEO.ts`** — centraliza, por rota, `document.title`, meta
  description, robots (`index,follow` ou `noindex,follow`), keywords, Open Graph,
  Twitter Card, canonical, `rel=prev/next` (paginação) e JSON-LD dinâmico.
  Também emite `window.__STATIC_RENDER_STATUS__`, o **sinal de prontidão** que o
  SSG usa para capturar a página no momento certo.
- **`src/lib/seoIndexing.ts`** — motor de indexação: decide o que é indexável
  (`getIndexableTireSlugs()`, `isMeasureIndexable()`), gera redirects de
  paginação e o `REDIRECT_THRESHOLD`. É a fonte que alimenta o enumerador.
- **`src/data/seoLanding.ts`, `centroAutomotivoSeo.ts`, `services.ts`,
  `indexableNeighborhoods.ts`** — coleções que definem landings/serviços/bairros.
- **Canonical auto-referencial** em toda página indexável (validado contra
  `expectedCanonical`).
- **Meta globais** no `index.html`: viewport, geo (`BR-PR`, Curitiba, coords),
  `google-site-verification`, favicons, theme-color, preloads de fonte/hero.
- **Analytics diferido:** GTM `GTM-W4SBDRGD` carregado após 5s/scroll/clique
  (`AnalyticsLoader`), fora do load inicial — não interfere no SSG (erros de
  terceiros são classificados como toleráveis).

---

## 12. Dependências importantes

| Pacote | Papel |
|---|---|
| `react`, `react-dom`, `react-router-dom` | UI e roteamento (SPA) |
| `vite`, `@vitejs/plugin-react` | Bundler/build |
| `@tailwindcss/vite`, `tailwindcss` | Estilo (Tailwind v4) |
| `react-helmet-async` | Suporte a `<head>` (complementa `useSEO`) |
| `motion` (framer-motion) | Animações (normalizadas no snapshot) |
| `lucide-react` | Ícones |
| `puppeteer-core` | Controla o Chrome headless na geração estática |
| `@sparticuz/chromium` | Binário do Chromium serverless (Vercel) |
| `puppeteer` (dev) | Chrome local para gerar/testar fora da Vercel |
| `tsx`, `esbuild` (dev) | Execução dos scripts TS (`run-ts.mjs`) |
| `sharp` (dev) | Processamento de imagens |

`vite.config.ts` faz **code-splitting** manual: `tire-catalog` (o `src/data.ts`
de ~1,6 MB é um chunk isolado, carregado sob demanda), `react-vendor`, `motion`,
`helmet`, `icons`, `vendor`. Injeta `__BUILD_DATE__` determinística no bundle.

---

## 13. Variáveis de ambiente obrigatórias

| Variável | Escopos | Obrigatória? | Efeito |
|---|---|---|---|
| **`GENERATE_STATIC=1`** | **Production + Preview** | **SIM (crítica)** | Liga a Camada 2 do build (gera as 1.512 páginas). **Se ausente, o site publica só o SPA e as rotas físicas voltam a dar 404.** |

Variáveis que **não** devem existir (legado do Prerender.io, já removido):

- `PRERENDER_TOKEN` — removido; não recolocar.
- `PRERENDER_ENABLED` — deve ser removida (não há mais middleware que a leia).

> Não há segredos de banco/API no runtime (o site é 100% estático + dados versionados).

---

## 14. Como fazer deploy

O deploy é **git-based** via Vercel:

1. Faça as alterações em uma branch e abra um **PR** para `main`.
2. A Vercel cria um **deploy de Preview** automaticamente (com `GENERATE_STATIC=1`
   no escopo Preview, o Preview também gera as páginas).
3. Faça **merge na `main`** → dispara o **deploy de Production**.
4. O build roda `npm run build:deploy` (ver seção 2). Com `GENERATE_STATIC=1`,
   a geração das ~1.512 páginas leva vários minutos.
5. Após `Ready`, valide externamente (ver seção 18).

**Nunca** faça push direto na `main` sem PR, salvo pedido explícito. **Não** rode
redeploy achando que corrige 404 em massa — verifique primeiro `GENERATE_STATIC`.

---

## 15. Como adicionar novas páginas

Uma nova página indexável precisa existir em **três lugares coerentes**:

1. **Rota React** em `src/App.tsx` (`<Route path=... element={...} />`,
   componente via `lazy(() => import(...))`).
2. **Dados/enumeração**: adicione a página à coleção de dados apropriada em
   `src/data/*` (ex.: `seoLanding.ts`, `services.ts`) — o
   **`scripts/static-routes.ts`** deve passar a enumerá-la (se for um tipo novo,
   adicione o bloco correspondente em `getStaticRoutes()`).
3. **SEO**: o componente da página deve chamar `useSEO({ title, description,
   canonical, schemaJSON, ... })` com canonical **auto-referencial**.

Consequência automática: ao aparecer no enumerador, a URL entra no **sitemap**
e passa a ser **pré-renderizada** no próximo deploy. Se a rota depender de rewrite
(prefixo), confirme/adicione o rewrite em `vercel.json`.

**Checklist:** rota no `App.tsx` · dado na coleção · enumerada em
`static-routes.ts` · `useSEO` com canonical · `npm run sitemap` mostra a URL ·
`npm run build:static` gera e valida o `index.html`.

---

## 16. Como adicionar novos produtos (pneus)

O catálogo vive em **`src/data.ts`** (array `TIRES`). Cada pneu tem: `id`, `slug`
(único), `titulo`, `medida`, `linha`, `marca`, `categoria`, `indiceCarga`,
`indiceVelocidade`, `preco`, `precoAntigo`, `imagem`, `imagemGrande`, `emEstoque`,
`destaque`, `descricao`, `carrosCompativeis`.

Duas formas:

**A) Em lote (script)** — `scripts/add-new-tires-v2.cjs`:
1. Preencha `scripts/new-tires-input.txt` (linhas TSV: `wpId, título, imageURL, preço`).
2. Rode `node scripts/add-new-tires-v2.cjs`. Ele: deduplica por título, gera slug
   único, extrai medida/linha/marca/categoria/índices, baixa a imagem para
   `public/images/pneus/` e insere os registros em `src/data.ts`.
3. Revise o diff de `src/data.ts` e confira as imagens.

**B) Manual:** adicione o objeto ao array `TIRES` respeitando o formato acima e
coloque a imagem em `public/images/pneus/`.

Indexação: apenas pneus retornados por `getIndexableTireSlugs()`
(`src/lib/seoIndexing.ts`) viram `/pneu/:slug` no sitemap e são pré-renderizados.
Depois de adicionar, rode `npm run sitemap` para confirmar a contagem e o próximo
deploy gera as páginas.

> Cuidado: `src/data.ts` tem ~1,6 MB. Edições em lote devem passar pelo script
> ou por edição cuidadosa; sempre revise o diff.

---

## 17. Como regenerar todas as páginas

Localmente (requer Chrome — `puppeteer` dev instala um):

```bash
npm run build:static
# = sitemap → redirects → build:spa → generate:static:all → validate:static:all
```

Comandos úteis (todos via `scripts/run-ts.mjs`):

| Comando | Efeito |
|---|---|
| `npm run build:spa` | Só o bundle SPA (pré-requisito da geração). |
| `npm run generate:static:all` | Gera o HTML de todas as rotas (usa checkpoint). |
| `npm run generate:static:all -- --fresh` | Ignora o checkpoint e recomeça do zero. |
| `npm run generate:static:retry` | Reprocessa só as rotas com `falha`. |
| `npm run generate:static:25 / :100 / :500` | Lotes amostrais determinísticos. |
| `npm run validate:static:all` | Revalida os `index.html` gravados. |
| `npm run routes:inventory` / `routes:parity` | Auditorias de rotas × sitemap. |

Flags do gerador: `--limit=N`, `--shuffle`, `--seed=N`, `--concurrency=N`,
`--retry-failed`, `--viewport=desktop|mobile`, `--fresh`.

**Em produção**, a regeneração acontece a cada deploy com `GENERATE_STATIC=1`
(basta fazer um novo deploy/redeploy). O checkpoint (`reports/e6-progress.json`)
acelera reexecuções locais; num build limpo da Vercel tudo é gerado do zero.

---

## 18. Como fazer rollback

Como todo estado de páginas é derivado do código + `GENERATE_STATIC`, o rollback
é feito no nível de deploy/commit:

1. **Rollback instantâneo (Vercel):** no dashboard do projeto `carp-lus` →
   Deployments → escolha o último deploy `Ready` bom → **"Promote to Production"**
   (ou "Rollback"). Restaura o output estático anterior imediatamente.
2. **Rollback por Git:** `git revert <commit>` (ou reverter o PR) e merge na
   `main` → novo deploy de Production com o estado anterior.
3. **Regressão de 404 em massa:** o culpado quase sempre é `GENERATE_STATIC`
   ausente/alterada. Confirme que está `=1` em Production e refaça o deploy —
   isso costuma resolver sem precisar reverter código.

Verificação externa pós-rollback (amostra):

```bash
DOM="https://www.carpluspneuseoficina.com.br"
curl -s -o /dev/null -w "%{http_code}\n" "$DOM/"                       # 200
curl -s "$DOM/" | grep -c data-prerendered                            # 1 (HTML físico)
curl -s -o /dev/null -w "%{http_code}\n" "$DOM/rota-inexistente-xyz"   # 404
```

---

## 19. Checklist para novos desenvolvedores

**Setup**
- [ ] `npm install` (Node 18+; `puppeteer` dev baixa um Chrome para SSG local).
- [ ] `npm run dev` → app em `http://localhost:3000`.
- [ ] `npm run lint` (`tsc --noEmit`) antes de commitar.

**Conceitos que você precisa entender**
- [ ] O site é **SPA em runtime** e **estático (snapshot headless) no deploy**.
- [ ] **Fonte única de rotas** = `scripts/static-routes.ts`. Sitemap e SSG saem daí.
- [ ] **`GENERATE_STATIC=1` é crítica** em Production/Preview. Sem ela = 404 em massa.
- [ ] SEO por rota vive no hook **`useSEO`**; JSON-LD global vive no `index.html`.
- [ ] **Não** duplicar Organization/WebSite/LocalBusiness no React.
- [ ] Não há Prerender.io no runtime — não recolocar `PRERENDER_*`.

**Fazer alterações com segurança**
- [ ] Trabalhe em branch + PR; nunca push direto na `main`.
- [ ] Nova página → rota (`App.tsx`) + dado (`src/data/*`) + enumeração
      (`static-routes.ts`) + `useSEO` com canonical.
- [ ] Rodou `npm run sitemap` e a URL apareceu? A contagem bate?
- [ ] Rodou `npm run build:static` local e `validate:static:all` passou?
- [ ] Redirect novo? Edite `scripts/manual-redirects.ts` (não o `vercel.json` à mão)
      e rode `npm run redirects`.

**Antes de considerar "pronto"**
- [ ] Deploy de Preview `Ready`, sem `falha>0` na geração (`1512/1512`).
- [ ] Amostra externa 200 + `data-prerendered`; inexistente = 404; redirects 301/308.
- [ ] Sitemaps/robots/llms respondendo 200 com `Content-Type` correto.

---

## 20. Mapa rápido de arquivos

| Arquivo | Responsabilidade |
|---|---|
| `vercel.json` | `buildCommand`, redirects (152), rewrites (fallback SPA), headers. |
| `scripts/build-deploy.mjs` | Orquestra o build em 2 camadas + `emit404()`. |
| `scripts/static-routes.ts` | **Fonte única** das rotas indexáveis. |
| `scripts/generate-sitemap.ts` | Emite `sitemap*.xml`. |
| `scripts/generate-redirects.ts` | Reescreve `redirects` do `vercel.json`. |
| `scripts/manual-redirects.ts` | Redirects manuais versionados. |
| `scripts/generate-static-pages.ts` | Primitiva de render headless (`renderRouteOnPage`). |
| `scripts/generate-static-all.ts` | Orquestrador escalável (checkpoint/concorrência). |
| `scripts/validate-static-all.ts` | Validação de invariantes de SEO por rota. |
| `scripts/add-new-tires-v2.cjs` | Ingestão em lote de novos pneus. |
| `scripts/run-ts.mjs` | Wrapper para rodar scripts TS. |
| `src/App.tsx` | Rotas do React Router (lazy). |
| `src/hooks/useSEO.ts` | SEO por rota + sinal de prontidão do SSG. |
| `src/lib/seoIndexing.ts` | Motor de indexação (o que é indexável, paginação). |
| `src/data.ts` | Catálogo de pneus (~1,6 MB). |
| `src/data/*` | Landings, serviços, bairros, medidas, reviews, FAQs. |
| `index.html` | Shell SPA + meta globais + JSON-LD global. |
| `public/robots.txt`, `public/llms*.txt` | Estáticos servidos com headers próprios. |

---

_Documento gerado como manual técnico de referência. Não altera código de produção._
