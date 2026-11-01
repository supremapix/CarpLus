# Carplus: revisão Suprema — 01/11/2026

## Escopo preservado

- Base: `fb6ade57b438b3b3ab799edd3423439c3db19851`.
- Mesmas 1.533 URLs indexáveis de sitemap: 1.350 produtos, 24 medidas, 18 veículos e 141 gerais.
- Identificadores, slugs, medidas, índices, associações e imagens do catálogo preservados. Sem criação de filiais ou páginas regionais adicionais.
- 85 redirects manuais e 24 rewrites preservados. Foram retirados somente os 76 redirects automáticos de paginação, que trocavam a seleção do catálogo por páginas temáticas não equivalentes.
- A política existente de noindex para consultas/filtros/página 2+ foi preservada e explicitada também em cabeçalhos HTTP condicionais.

## Conteúdo e interface

- Orientações próprias para 45 serviços existentes (40 atuais e 5 legados), com 90 respostas contextualizadas; orientação de troca nos dois templates de pneus.
- Unidade única no Portão; conteúdo para bairros próximos e outras regiões sem prometer deslocamento, raio de posicionamento ou classificação em buscas/LLMs.
- Removidas promessas comerciais, de compatibilidade universal, tempos de trajeto e garantias não sustentadas. Condições dependem de consulta, manual e avaliação.
- Compartilhamento global em seis redes, cópia com confirmação real, telefone/WhatsApp, dicas contextuais e voltar ao topo. Navegação, busca e avaliações com melhorias de teclado/foco e movimento reduzido.

## Avaliações Google

Fonte: https://maps.google.com/maps?cid=11894120831274747055

Consulta de 01/11/2026: nota 4,9, 271 avaliações. Fonte única em `src/data/reviewSummary.ts`.

O corpus literal anterior foi preservado. Três textos curtos adicionais foram verificados e importados com autoria, estrelas e proveniência em `src/data/googleReviewsVerified.json`. Acesso sem login mostrou somente cinco avaliações; **não se afirma importar todas as 271**. Depoimentos interpolados por bairro foram substituídos pelo corpus real, sem mudar os textos dos clientes. Avaliações da empresa não foram convertidas em avaliações de produtos.

## Entrega de HTML e validação

O build agora exige HTML próprio para o inventário indexável existente e para as rotas extras essenciais. A geração completa deixou de depender de `GENERATE_STATIC=1`: uma falha ou arquivo ausente impede publicar um fallback com metadados da home. Essa alteração protege a entrega já existente, sem ampliar indexação.

- Validação de cada URL, canonical, título, descrição, H1 único e JSON-LD parseável.
- Validação adicional dos 1.350 produtos: URL, SKU, nome, descrição e H1 correspondentes ao catálogo; sem estoque/ofertas/avaliações não confirmados.
- Validação de 64 páginas essenciais de serviços/promoções/políticas/sitemap, mais seis páginas legadas/regionais.
- `build-info.json`, emitido apenas após validação completa, permite conferir o commit publicado (`VERCEL_GIT_COMMIT_SHA`) no domínio final.

## Comandos de verificação

```sh
npm ci
npm run lint
npm run test:suprema
npm run test:global-schema
npm run test:service-explainers
npm run test:comparison-guide
npm run validate:redirects
npm run routes:parity
USE_SERVERLESS_CHROMIUM=1 npm run build
USE_SERVERLESS_CHROMIUM=1 npm run test:suprema:seo-html
```

QA de interface usa o Chromium automatizado já suportado pelo repositório (`scripts/launch-browser.ts`), com inspeção das capturas. Não equivale a teste em aparelhos físicos. Casos: 320/390/1172/1536 px, menu, busca/cancelamento/reabertura, foco/Escape, compartilhamento/cópia, dicas, movimento reduzido e avaliações. Nenhuma mensagem ou formulário real foi enviado.

## Resultado local da versão candidata

Build completo em 736 segundos (12 min 16 s), com 1.533/1.533 páginas geradas, zero falhas e zero canonicals duplicadas. Os 1.350 produtos e as páginas extras passaram na validação final. Também passaram os 66 testes de HTML por família, incluindo os 45 serviços, e os testes de fonte/conteúdo/interface descritos acima. A publicação é uma etapa distinta: conferir o commit remoto, checks Vercel e o recibo no domínio final antes de afirmar que esta versão está no ar.

## Regressão de paginação em JavaScript

A checagem posterior em navegador encontrou um segundo redirecionamento independente no catálogo, além das regras HTTP já removidas. A correção mantém a página selecionada, título de página N e navegação anterior/próxima; a página temática é apenas um link opcional. O teste `test:catalog-pagination:browser` passou com páginas 1/2/3 distintas, histórico, recarregamento e combinações de filtros. Agora esse teste é uma etapa obrigatória do build, antes da geração integral. Nenhuma URL de sitemap, política de noindex ou registro de produto foi alterado nessa correção.
