# E5.0 — Validação de Preview antes do roteamento definitivo

> **Etapa intermediária de validação técnica antes de implementar a E5.**
> Nada foi publicado em produção. O Prerender.io, o `middleware.js`, o rewrite global da SPA
> e todos os redirects (server e client-side) permanecem **intactos**. Nenhum dos 76 redirects
> novos foi promovido; `cleanUrls`/`trailingSlash` não foram habilitados; 404 real não foi implementado.

---

## 1. Ambiente e identificação

| Item | Valor |
|---|---|
| Branch | `v0/supremapix-04b25f59` |
| Commit base | `eab6003` (refactor: update button styles and SEO content formatting) |
| Data | 2026-07-14 |
| Runtime de geração | Node + Puppeteer `25.3.0` + Chrome headless `150.0.7871.24` |
| Build | `vite build` (`npm run build:spa`) → `dist/` |
| Geração | `npm run generate:static:pilot` (11 rotas piloto) |
| Validação oficial | `npm run validate:static:pilot` → **11/11 APROVADA** |
| Prova de precedência | Servidor estático `scripts/e5-precedence-server.mjs` replicando a ordem da Vercel (**redirects → filesystem → rewrite SPA**) em `http://localhost:4599`, com header de diagnóstico `X-Served-By` |
| Teste de hidratação | `agent-browser` (Chrome real) contra o servidor de precedência |

**Limitação de escopo declarada:** esta validação foi executada **na VM (Vercel Sandbox) com um servidor que replica fielmente a ordem de resolução documentada da Vercel** (arquivo físico tem precedência sobre `rewrites`, que são fallback). **Não foi criado um deploy de Preview real na Vercel** nesta sessão (isso exigiria uma ação de deploy/autorização). A precedência do filesystem sobre o rewrite e o comportamento do middleware são **determinísticos e comprovados** localmente + por análise de código; o único passo remanescente para o *sign-off* pleno da E5.0 é rodar o mesmo checklist numa URL de Preview da Vercel (ver Seção 11, bloqueador B1).

---

## 2. Rotas testadas

As 8 categorias obrigatórias foram cobertas (dentro das 11 rotas piloto geradas):

| # | Tipo | Rota | Arquivo físico gerado |
|---|---|---|---|
| 1 | Home | `/` | `dist/index.html` |
| 2 | Produto | `/pneu/pneu-pirelli-175-70r13-p400-evo-82t` | `dist/pneu/.../index.html` |
| 3 | Serviço | `/servico/venda-de-pneus` | `dist/servico/venda-de-pneus/index.html` |
| 4 | Medida | `/pneu-medida/175-65r14` | `dist/pneu-medida/175-65r14/index.html` |
| 5 | Veículo | `/pneu-para-hb20-curitiba` | `dist/pneu-para-hb20-curitiba/index.html` |
| 6 | Bairro/Local | `/bairro/portao` | `dist/bairro/portao/index.html` |
| 7 | Institucional | `/quem-somos` | `dist/quem-somos/index.html` |
| 8 | **Inexistente** | `/rota-inexistente-teste-e5-preview` | *(nenhum — cai no fallback SPA)* |

Rotas de risco adicionais também geradas e aprovadas: `/servicos` (AnimatedCounter), `/faq` (scroll infinito), `/loja-de-pneus-curitiba-perto-de-mim` (geolocation), `/rota-inexistente-teste-404` (página de erro `noindex`).

---

## 3. Prova de precedência do filesystem (evidência `curl`)

Requisições `curl` ao servidor de precedência. O header `X-Served-By` indica qual camada respondeu:

| Rota | HTTP | `X-Served-By` | Título servido (específico da rota?) | bytes |
|---|---|---|---|---|
| `/` | 200 | **filesystem** | "Carplus Centro Automotivo – Loja de Pneus e Oficina…" | 577.229 |
| `/pneu/pneu-pirelli-175-70r13-p400-evo-82t` | 200 | **filesystem** | "Pirelli 175/70R13 P400 Evo 82T em Curitiba…" | 171.329 |
| `/servico/venda-de-pneus` | 200 | **filesystem** | "Venda de Pneus em Curitiba Portão…" | 126.660 |
| `/pneu-medida/175-65r14` | 200 | **filesystem** | "Pneu 175/65R14 em Curitiba…" | 173.176 |
| `/pneu-para-hb20-curitiba` | 200 | **filesystem** | "Pneu para HB20 em Curitiba…" | 140.599 |
| `/bairro/portao` | 200 | **filesystem** | "Loja de Pneus no Portão Curitiba…" | 133.778 |
| `/quem-somos` | 200 | **filesystem** | "Quem Somos | Carplus…" | 102.149 |
| `/rota-inexistente-teste-e5-preview` | 200 | **spa-fallback-rewrite** | (home shell — soft-404) | 577.229 |

**Conclusão:** para toda rota com arquivo físico, o servidor entregou o **HTML físico específico da rota** (`X-Served-By: filesystem`) — o rewrite global `/(.*) → /index.html` **não sobrescreveu** o arquivo. Só a rota inexistente caiu no fallback SPA. Isto reproduz a ordem de resolução da Vercel (arquivos estáticos têm precedência sobre `rewrites`).

### 3.1 Canonical / H1 específicos por rota (anti-herança)

Nenhuma rota indexável herdou o canonical/H1 da home:

| Rota | Canonical | H1 (início) |
|---|---|---|
| `/pneu/…p400-evo-82t` | `…/pneu/pneu-pirelli-175-70r13-p400-evo-82t` | "Pirelli 175/70R13 P400 Evo 82T…" |
| `/pneu-medida/175-65r14` | `…/pneu-medida/175-65r14` | "Pneu 175/65R14…" |
| `/pneu-para-hb20-curitiba` | `…/pneu-para-hb20-curitiba` | "Pneu para Hyundai HB20 em Curitiba…" |
| `/bairro/portao` | `…/bairro/portao` | "Pneus e Oficina no Portão…" |
| `/quem-somos` | `…/quem-somos` | "Quem Somos…" |

---

## 4. Metadados, JSON-LD e conteúdo sem JavaScript

`curl` **não executa JavaScript** — logo, tudo abaixo já existe no HTML servido (bots sem JS enxergam):

| Rota | `<title>` | `canonical` | JSON-LD (blocos) | `localhost` no HTML |
|---|---|---|---|---|
| `/` | 1 | 1 (home) | 3 | 0 |
| produto | 1 | 1 (própria) | 4 | 0 |
| serviço | 1 | 1 (própria) | 3 | 0 |
| medida | 1 | 1 (própria) | 4 | 0 |
| veículo | 1 | 1 (própria) | 3 | 0 |
| bairro | 1 | 1 (própria) | 3 | 0 |
| institucional | 1 | 1 (própria) | 2 | 0 |

- **Conteúdo textual real** presente no HTML cru (ex.: produto ~13,9k chars de texto).
- `<h1>` presente no *source* (confirmado por `grep` no HTML servido).
- Marcador `data-prerendered="true"` presente no `<html>` gerado (usado pela render ansiosa na hidratação).

### 4.1 Ocorrência de `localhost`
- **0 ocorrências em qualquer HTML** de rota (canonical/OG/schema limpos).
- **1 ocorrência** em `dist/assets/react-vendor-*.js`: string default interna do React Router (`let s="http://localhost"; typeof window<"u" && (s=window.location…)`), **inerte** e imediatamente sobrescrita por `window.location` em runtime. Não afeta SEO nem o HTML servido.

---

## 5. Assets

Assets referenciados pela página de produto, todos servidos com **HTTP 200** via `filesystem`:

```
/assets/Footer-CgNRw8zN.js    -> 200 (filesystem)
/assets/TireDetail-C5RTzw_l.js-> 200 (filesystem)
/assets/TireTips-CXQVM89H.js  -> 200 (filesystem)
/assets/helmet-BHBq6UHA.js    -> 200 (filesystem)
/assets/icons-Bps38NgO.js     -> 200 (filesystem)
/assets/index-B81SeSde.js     -> 200 (filesystem)
```
Referências `/assets/...` são **absolutas** e existem fisicamente em `dist`.

---

## 6. Renderização — `createRoot` vs `hydrateRoot`

### 6.1 Estado atual do código (`src/main.tsx`)
```tsx
createRoot(document.getElementById('root')!).render(
  <StrictMode><HelmetProvider><BrowserRouter><App /></BrowserRouter></HelmetProvider></StrictMode>
);
```
O app usa **`createRoot().render()`** (render de cliente puro). O mecanismo de compatibilidade com o HTML pré-renderizado é o par:
- `src/lib/prerender.ts` → `isPrerenderEager()` (lê `html[data-prerendered]`),
- `src/App.tsx` → remove `data-prerendered` **após** hidratar (navegações SPA voltam ao lazy).

### 6.2 Cenário A — `createRoot` (testado no navegador real)
Página de produto gerada, carregada via servidor de precedência em Chrome real (`agent-browser`):

| Verificação | Resultado |
|---|---|
| Mensagens de console (erros/avisos) | **0** (array vazio) — sem aviso de hydration mismatch |
| `<h1>` após montar | "Pirelli 175/70R13 P400 Evo 82T" (correto) |
| `document.title` | correto e específico |
| `#root` com conteúdo | 2 filhos, `body.innerText` ~13.944 chars |
| `data-prerendered` após hidratar | `null` (removido pelo `App.tsx`, como esperado) |
| Flicker / tela branca / apagamento | **Não observado** (screenshot mostra a página íntegra) |
| Duplicação de conteúdo | Não |

### 6.3 Cenário B — `hydrateRoot` (análise técnica; não aplicado)
`hydrateRoot` exige que o HTML servido **case exatamente** com a primeira render do React, ou dispara *hydration mismatch* (no React 19, com fallback para client render do subtree — custo + ruído de erro). Fatores de risco **concretos** nesta base:

- **`useSEO` muta o DOM imperativamente** (title/meta/canonical/JSON-LD via manipulação direta em `useEffect`). O snapshot é uma captura **pós-efeitos**, não a saída pura da 1ª render declarativa — fonte clássica de divergência.
- **`framer-motion` (`motion`)** aplica estilos/transforms via `requestAnimationFrame` após montar. O gerador normaliza animações no snapshot, mas o `hydrateRoot` compara a 1ª render **antes** dessa estabilização → alto risco de mismatch de `style`.
- O snapshot foi capturado com `__STATIC_RENDER__=true` (ansioso) e o cliente re-renderiza ansioso via `data-prerendered` — estruturalmente alinhados, mas o `hydrateRoot` é **muito mais estrito** que o `createRoot` (qualquer diferença de atributo/espaço/estilo falha).
- Adotar `hydrateRoot` com segurança exigiria **refatorar `useSEO`** (sair da mutação imperativa), tornar o `motion` SSR-safe e garantir 1ª pintura determinística — **reestruturação de risco médio/alto**, sem ganho perceptível (as páginas são estáticas; a re-render única do `createRoot` é imperceptível, como comprovado).

### 6.4 Decisão
```text
MANTER createRoot
```
**Justificativa objetiva (todos os critérios de "manter" atendidos):** sem flicker perceptível, sem apagamento visível, **0 erros de runtime/console**, sem duplicação, navegação SPA funciona, diferença de performance irrelevante (re-render única e imperceptível graças à render ansiosa) e `hydrateRoot` exigiria reestruturação arriscada (useSEO imperativo + framer-motion). O `createRoot` sobre HTML pré-renderizado + `data-prerendered` entrega hidratação visualmente contínua sem a fragilidade do `hydrateRoot`.

---

## 7. Comportamento com bots e usuários (middleware)

**Não foi possível testar contra a Vercel real** (sem deploy de Preview). O comportamento abaixo é **determinístico por análise do `middleware.js`** e confirmado por simulação local da lógica de decisão (mesma lista `BOT_AGENTS`, mesmos filtros de asset/estático):

| Cliente (User-Agent) | `isBot` | Destino |
|---|---|---|
| Usuário (Chrome) | não | **FILESYSTEM** (HTML físico) |
| Googlebot | sim | **DESVIADO ao Prerender.io** (middleware retorna `Response`, curto-circuito) |
| Bingbot | sim | **DESVIADO ao Prerender.io** |
| Facebook (`facebookexternalhit`) | sim | **DESVIADO ao Prerender.io** |
| WhatsApp | sim | **DESVIADO ao Prerender.io** |

### 7.1 Achado crítico — precedência do middleware sobre o filesystem
O **Edge Middleware roda ANTES** da resolução de filesystem/rewrite. Quando o UA é bot e a rota não é asset/estático, o middleware **faz `fetch` ao `service.prerender.io` e retorna um `Response`**, curto-circuitando o pipeline. Ou seja:

> Mesmo que `dist/<rota>/index.html` exista, um **bot continuará recebendo o HTML do Prerender.io**, não o HTML físico novo — porque **o middleware tem precedência sobre o filesystem**.

**Implicações:**
- Durante a E5.0 e a E5, isso é **seguro e desejado**: o Prerender.io permanece como caminho dos bots (rede de segurança) e o HTML físico atende usuários.
- Para os bots passarem a receber o **HTML físico**, o `middleware.js` precisará ser **removido/desativado** — e isso é **E9**, condicionada à **E6** (geração completa das ~1.533 páginas) + validação em produção. **Não faz parte da E5.**

---

## 8. Rota inexistente — classificação (soft-404)

| Aspecto | Situação atual |
|---|---|
| Status HTTP | **200** (não é 404 real) |
| Conteúdo servido (sem JS) | HTML da **home** (o `dist/index.html` gerado), via rewrite `/(.*) → /index.html` |
| Canonical do HTML servido | `…/` (home) |
| Comportamento com JS | React Router monta `NotFound`, que aplica `noindex` (via `useSEO`) |
| Classificação | **SOFT-404** |

**Detalhe importante revelado pela geração:** como o `dist/index.html` agora é a **home pré-renderizada** (577 KB, conteúdo completo) — e não mais um shell vazio —, uma URL desconhecida, **sem JS**, aparece como **conteúdo da home** (potencial duplicação) com status 200. O `noindex` só é aplicado **após** o React montar o `NotFound`. Um **404 HTTP real** só é possível **removendo o rewrite catch-all**, o que depende da **E6** (todas as rotas existirem como arquivo). **Fora do escopo da E5.0/E5** — apenas documentado.

---

## 9. Filesystem vs. rewrite — resumo

- **Arquivo existe** → servido diretamente (200), rewrite **não** dispara. ✔ comprovado (`X-Served-By: filesystem`).
- **Arquivo não existe** → rewrite `/(.*) → /index.html` assume (200, home shell). ✔ comprovado (`X-Served-By: spa-fallback-rewrite`).
- **Bot** → middleware intercepta **antes** de tudo e desvia ao Prerender.io. ✔ análise + simulação.

---

## 10. Resultado do checklist obrigatório (Seção 4 do pedido)

| # | Critério | Resultado |
|---|---|---|
| 1 | HTML físico correto servido | ✔ (por rota) |
| 2 | Resposta não é o shell genérico da home | ✔ (title/canonical/H1 próprios) |
| 3 | `title` específico | ✔ |
| 4 | `description` específica | ✔ (validador oficial 11/11) |
| 5 | `canonical` específico | ✔ (anti-herança confirmada) |
| 6 | `<h1>` no código-fonte | ✔ |
| 7 | JSON-LD no HTML | ✔ (2–7 blocos por rota) |
| 8 | Conteúdo sem JavaScript | ✔ (`curl`) |
| 9 | Status HTTP 200 | ✔ |
| 10 | Rewrite global não sobrescreveu o arquivo | ✔ (`X-Served-By: filesystem`) |
| 11 | Assets carregam | ✔ (200) |
| 12 | Sem `localhost` no HTML | ✔ (0 no HTML; 1 inerte em vendor JS) |
| 13 | Prerender.io não necessário para a resposta física | ✔ (servido do disco, sem chamada externa) |

---

## 11. Riscos e bloqueadores

### Bloqueador
- **B1 — Confirmação em Preview real da Vercel não executada nesta sessão.** Toda a validação local passou e replica fielmente a ordem de resolução da Vercel, mas o *sign-off* pleno da E5.0 pede a mesma bateria numa **URL de Preview** (deploy não realizado por não publicar/escopo). **Ação:** ao autorizar, subir Preview da branch e repetir as Seções 3–5 e 7 contra a URL real.

### Riscos documentados (não bloqueiam a E5, mas guiam a implementação)
- **R1 — Middleware tem precedência sobre o filesystem para bots.** HTML físico só chega aos bots após remover o `middleware.js` (E9, pós-E6). Até lá, bots continuam no Prerender.io (seguro).
- **R2 — Soft-404 (200 em URL inexistente) servindo conteúdo da home sem JS.** 404 real depende de remover o rewrite catch-all (E6). Mitigado por `noindex` client-side.
- **R3 — Remover o rewrite antes da E6 quebraria rotas ainda não geradas.** Manter o fallback SPA na E5.
- **R4 — `cleanUrls` conflitaria com os 69 redirects `.html`.** Não habilitar.
- **R5 — Idempotência do `generate-redirects.ts`** ao promover os 76 redirects (devem entrar como regras manuais). Validar na E5.

---

## 12. Conclusão

- **Precedência do filesystem sobre o rewrite:** comprovada localmente com fidelidade à Vercel (`X-Served-By: filesystem` em todas as rotas físicas; fallback SPA só na inexistente).
- **Metadados/JSON-LD/conteúdo sem JS/assets/sem-localhost:** aprovados (validador oficial 11/11).
- **Renderização:** decisão fundamentada **MANTER createRoot** (0 erros, sem flicker, sem reestruturação arriscada).
- **Middleware:** comportamento documentado — **bots desviados ao Prerender.io com precedência sobre o filesystem**; remoção só na E9.
- **Rota inexistente:** classificada como **SOFT-404** (200 + home shell + `noindex` client-side).
- **Produção:** **nada publicado**; Prerender.io, middleware, rewrite global e todos os redirects **intactos**.

```text
E5.0 PARCIAL — BLOQUEADORES ENCONTRADOS
```
**Único bloqueador (B1):** repetir esta bateria de testes numa **URL de Preview real da Vercel** (deploy de Preview não executado nesta sessão). **Todos os critérios tecnicamente verificáveis localmente foram APROVADOS.** Removido o B1 (Preview real confirmando os mesmos resultados), a E5 pode ser implementada com o escopo já definido (servir HTML físico + manter fallback + promover 76 redirects + manter middleware/Prerender até E9).

> **Não iniciar a E5 automaticamente.** Aguardar autorização após a confirmação em Preview real.
