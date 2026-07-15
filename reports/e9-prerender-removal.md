# E9 — Remoção definitiva do Prerender.io

Etapa final da migração. Remove todo o acoplamento ao Prerender.io, deixando o SEO
inteiramente sobre o HTML físico (SSG interno) já validado no edge (E8.7).

## Arquivos removidos
| Arquivo | Motivo |
|---|---|
| `middleware.js` | Ponte para `service.prerender.io` (detecção de bot, `X-Prerender-Token`, `PRERENDER_TOKEN`, kill-switch `PRERENDER_ENABLED`). Sem ele, os bots recebem o HTML físico direto do filesystem. |
| `scripts/e6-middleware-decision.mjs` | Script one-off que importava o middleware (dead code). |
| `scripts/e8-decision-check.mjs` | Idem — análise pontual do middleware (dead code). |
| `scripts/e8-bot-validate.mjs` | Validação one-off do caminho de bot via middleware (dead code). |

## Alterações de código
| Arquivo | Alteração |
|---|---|
| `index.html` | Removidas as metas `prerender-token` e `prerender-status-code`. |
| `src/hooks/useSEO.ts` | Removidos: dispatch de `render-event`, prop `prerenderStatusCode`, criação/cleanup da meta `prerender-status-code` e a dependência no array de efeito. **Preservado** o sinal SSG `__STATIC_RENDER_READY__`. |
| `src/components/NotFound.tsx` | Removido o uso de `prerenderStatusCode: 404`. O 404 real vem do `dist/404.html` servido pela Vercel; o React aplica `noindex`. |
| `scripts/build-deploy.mjs` | Comentário/aviso de runtime que citavam o Prerender.io ajustados. `emit404()` intacto. |
| `scripts/generate-static-all.ts`, `scripts/generate-static-pages.ts` | Comentários de "coexistência com Prerender.io" atualizados. Lógica intacta. |
| `scripts/validate-static-pilot.ts` | Asserção mantida e reposicionada como **guard de regressão**: falha se qualquer URL de serviço externo de pré-renderização voltar ao HTML. |

## Preservado (NÃO é Prerender.io)
Mecanismo de SSG interno, essencial e independente de serviços externos:
- `src/lib/prerender.ts` (nome interno do SSG), atributo `data-prerendered`,
  `__STATIC_RENDER_READY__`, `isPrerenderEager`.

## Ação operacional pendente (dono do projeto)
- **Remover a env var `PRERENDER_TOKEN`** do projeto na Vercel (todos os escopos).
  O código não a lê mais — a remoção é segura e sem efeito colateral.
- `PRERENDER_ENABLED` já não está presente no ambiente.
- Opcional: cancelar a assinatura do Prerender.io no painel do fornecedor.

## Dependências inesperadas investigadas
- A geração das 1.512 páginas **NÃO** dependia de `render-event`: usa o sinal próprio
  `__STATIC_RENDER_READY__`. Confirmado por geração real de amostra (30/30 OK) após a remoção.
