# E6 — Geração estática em escala (todas as rotas indexáveis)

Data: 2026-07-14 · Branch: `v0/supremapix-04b25f59`

Objetivo: escalar a geração de HTML físico do piloto (11 rotas) para **todas as
rotas indexáveis** do site, com pipeline determinística, retomável, validada e
sem regressão de SEO — sem publicar em produção nem tocar em `middleware.js` /
Prerender.io.

## 1. Resultado

```text
Geração:   1512/1512 rotas OK · 0 falhas · 389.3s · 3.88 rotas/s (conc=4)
Validação: 1512/1512 com arquivo · 0 problemas · 0 canonicais duplicados → APROVADO
Paridade:  enum=1512 · sitemap=1512 · 0 divergências → OK
HTTP:      279/279 (200 físicas do filesystem + 76 redirects 301 + soft-404) → APROVADO
Hidratação: React assume sem erros/flicker em todos os tipos de rota
```

### Composição das 1512 rotas
| Tipo | Qtd |
| --- | --- |
| Produtos (pneus) | 1350 |
| Landings (aro/marca/local/intenção/comparação/centro) | 55 |
| Serviços | 39 |
| Medidas | 24 |
| Veículos | 18 |
| Bairros/cidades | 15 |
| Institucionais (home, quem-somos, contato, faq, etc.) | 11 |
| **Total** | **1512** |

> Nota: o alvo inicial era ~1533. O número final **correto** é 1512 após remover
> 21 URLs de produto duplicadas (ver §3.1). 1512 é o total real de URLs únicas.

## 2. Arquitetura da pipeline

- **Fonte única de rotas** — `scripts/static-routes.ts` enumera todas as rotas
  a partir das mesmas fontes de dados usadas em runtime. O **sitemap**
  (`generate-sitemap.ts`) foi refatorado para consumir esse enumerador →
  paridade sitemap↔geração **por construção**.
- **Núcleo de render reutilizado** — `generate-static-pages.ts` foi refatorado
  para exportar `renderRouteOnPage()` (a mesma lógica comprovada no piloto:
  espera de prontidão, captura do HTML hidratado, `data-prerendered`). Zero
  duplicação de lógica; piloto continua passando (não-regressão).
- **Gerador escalável** — `scripts/generate-static-all.ts`:
  - **Concorrência** configurável (padrão 4 páginas simultâneas por browser).
  - **Checkpoint/retomada** — `reports/e6-progress.json`; reexecuções pulam o
    que já está OK. Flags `--fresh` e `--retry-failed`.
  - **Escrita atômica** — grava em arquivo temporário + `rename` (nunca deixa
    HTML parcial em disco se o processo cair).
  - **Amostragem determinística e representativa** — `--limit=N --shuffle`
    (seed fixa) sempre inclui a **home** e ≥1 rota de **cada tipo** (ver §3.3).
- **Validação global** — `scripts/validate-static-all.ts` relê o HTML do disco
  (não a captura de geração) e verifica title/description/canonical
  (auto-referencial e = URL do sitemap)/robots/`<h1>`/JSON-LD/ausência de
  `localhost`, e detecta canonicais duplicados entre rotas.
- **Similaridade** — `scripts/e6-content-similarity.mjs` (shingles de 4 palavras)
  detecta quase-duplicatas por tipo.
- **HTTP** — `scripts/e6-http-routing-test.mjs` sobre `e5-routing-server.mjs`
  (redirects→filesystem→rewrite) confirma precedência real.

## 3. Correções técnicas indispensáveis (com causa-raiz)

### 3.1 URLs de produto duplicadas (defeito de dados pré-existente)
O catálogo bruto `TIRES` continha **30 registros com slug repetido** (produtos
idênticos: mesma marca/medida/linha/índices), dos quais **21** eram canônicos e
indexáveis. Isso já poluía o **sitemap de produção** com `<loc>` repetidos e
tentaria escrever o mesmo `index.html` duas vezes. **Correção:** dedupe por path
no enumerador (fonte única), mantendo a 1ª ocorrência e preservando ordem. Não
altera dados, preços nem schemas. Total de produtos: 1371 brutos → **1350 únicos**.

### 3.2 Canonical de serviço com barra final (defeito de SEO pré-existente)
`ServicosPage.tsx` e `ServiceDetail.tsx` emitiam canonical **com** barra final
(`/servicos/`, `/servico/{slug}/`), enquanto o sitemap e todas as outras rotas
usam **sem** barra. O canonical apontava para uma URL diferente da indexada.
**Correção** (aprovada pelo usuário): remover a barra final nos dois componentes.
Mudança cirúrgica no SEO de runtime; alinha 100% com o sitemap.

### 3.3 Home ausente de amostras `--limit` (defeito da própria pipeline)
A amostragem `--shuffle` pegava as N primeiras rotas embaralhadas, podendo
**excluir a home** (página SEO nº 1) e tipos inteiros. **Correção:** a amostra
agora garante home + ≥1 rota de cada tipo antes de completar a cota, de forma
determinística. Descoberto no lote C (500) e corrigido antes da geração completa.

### 3.4 Runner do sitemap (consistência)
O passo de sitemap do `prebuild` ainda usava `tsx` (no-op silencioso neste
runtime — observação da E5.5). Padronizado para `node scripts/run-ts.mjs`,
igual a redirects. Agora o sitemap realmente executa em qualquer ambiente.

## 4. Escalonamento controlado (lotes)

| Lote | Rotas | Resultado | Achado |
| --- | --- | --- | --- |
| A | 25 | 25/25 OK, 3.3 r/s | pipeline base OK |
| B | 100 | resume de 25 → 100 OK | retomada OK |
| C | 500 | 500/500 OK, 3.9 r/s | achou §3.1, §3.2, §3.3 |
| D | 1512 | 1512/1512 OK, 3.88 r/s | geração completa |

## 5. Similaridade de conteúdo (observação não-bloqueante)

Máxima global **0.963** entre duas variantes de produto (mesmo pneu, índices de
carga diferentes: 84H vs 88H XL). Esperado num catálogo de pneus — variantes
quase idênticas têm páginas quase idênticas, mas com **canonical/title/URL
únicos** por variante. É uma **observação de estratégia de conteúdo**, não um
defeito de pipeline. Demais tipos ≤ 0.65. Recomendação (fora do escopo E6):
enriquecer a diferenciação textual entre variantes de um mesmo modelo.

## 6. Higiene de repositório

- `dist/` já ignorado → os 1512 HTML **não** são commitados (são artefato de build).
- Adicionados ao `.gitignore` e destrackeados os artefatos de runtime:
  `reports/e6-progress.json` (checkpoint) e `reports/e6-generation-summary.json`.

## 7. Limites respeitados

Sem publicar em produção. Sem tocar em `middleware.js`, `vercel.json` (rewrite,
headers, cleanUrls), `index.html` ou Prerender.io. 404 HTTP real permanece
soft-404 (fallback SPA, HTTP 200) — a troca para 404 real depende de etapa
posterior. As únicas mudanças de runtime foram as 2 correções de canonical (§3.2),
explicitamente aprovadas.

## 8. Veredito

```text
E6 IMPLEMENTADA E VALIDADA — 1512/1512 rotas geradas, 0 falhas, 0 problemas de
validação, paridade e roteamento HTTP íntegros. 3 defeitos reais corrigidos
(2 pré-existentes de dados/SEO, 1 da pipeline). 1 observação de conteúdo
não-bloqueante. Pronta para publicar em Preview.
```
