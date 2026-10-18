# Blog Carplus: revisão de 18/10/2026

## Escopo

Base: `supremapix/CarpLus`, main `0a63350410debf8cb75cf8c2d2dd1a246cc0202d`.
A aplicação não tinha rotas ou arquivos de blog. A busca pública e o sitemap não localizaram matérias fora dessa estrutura; `/blog` respondia 404 na produção durante a revisão.

Foram criados um índice e quatro guias informativos com intenções distintas das páginas comerciais:

- `/blog/calibragem-pneus-frios-carga`: localizar pressão correta e entender frio/carga.
- `/blog/bolha-no-pneu-apos-buraco`: identificar risco e não confundir dano estrutural com furo reparável.
- `/blog/etiqueta-inmetro-pneus-como-ler`: comparar os três critérios e compreender limitações da etiqueta.
- `/blog/estepe-temporario-cuidados-viagem`: preparação pré-viagem e limites específicos do manual.

Os guias usam imagens já existentes e fontes primárias citadas no conteúdo (Michelin, Continental, Inmetro, ANIP e manual Honda). Não adicionam preços, condições comerciais, estoque ou garantias. Data de publicação e autoria editorial aparecem nas páginas.

## Implementação

- Componentes preservam navbar, footer, tipografia e cores do site, com leiaute responsivo.
- Links de blog adicionados ao menu desktop/mobile, rodapé e mapa do site.
- Links entre matérias e para serviços/catálogo verificados.
- Breadcrumb e BlogPosting estruturados; canonical, título e descrição específicos.
- As cinco páginas geram HTML completo obrigatoriamente no build, reutilizando o pipeline existente; falha de geração impede publicar o shell da home como artigo.
- Geração estática global continua opcional e não foi habilitada nesta alteração.
- `package-lock.json` foi normalizado porque `npm ci` falhava no baseline por dependências opcionais ausentes. Não houve mudança de versão em dependência que já estava registrada.
- Orientações existentes corrigidas: validade universal de cinco anos, limites universais run-flat, faixa genérica de pressão e promessa de reparo lateral/vedação garantida. Fontes: ANIP (vida útil), Continental (SSR e pressão) e Michelin (danos/reparo), além das fontes dos artigos.

## Validação

- `npm ci --ignore-scripts`: passou após normalização do lockfile.
- `npm run lint`: passou.
- `USE_SERVERLESS_CHROMIUM=1 npm run build`: passou; cinco páginas com texto, canonical próprio e JSON-LD.
- `npm run routes:parity`: 1.531 URLs no enumerador e no sitemap, zero divergências.
- `npm run validate:redirects`: 159 redirects, zero erros.
- `USE_SERVERLESS_CHROMIUM=1 node scripts/run-ts.mjs scripts/test-blog.ts`: passou, 5 páginas em 390/768/1440px, links, imagens, H1, canonical, schema, menu mobile, Back/Forward e rota desconhecida noindex.
- Capturas desktop/mobile inspecionadas visualmente.
- `git diff --check`: passou.

O Chromium do sistema não iniciou neste sandbox (socket/crashpad). O teste foi executado com o Chromium serverless já utilizado pelo projeto na Vercel. Build ainda avisa sobre o chunk de catálogo maior que 500 kB, preexistente.

## Achados separados para SEO

Em 18/10/2026, `/servico/correia-dentada` respondeu HTTP 200 com canonical da home no HTML inicial (SPA); a versão `/servico/correia-dentada/` respondeu 404. Isso não comprova canonical final após JavaScript nem reproduz o estado histórico reportado pelo Search Console. As cinco páginas novas não têm esse problema no HTML gerado. Não foi feita migração global das 1.500+ rotas nesta revisão.

Produção só deve ser atualizada depois de confirmar o projeto Vercel vinculado ao domínio e validar o preview do commit correspondente. Este relatório não declara que ocorreu publicação.

## Investigação do aviso de validação da home
O preview inicial concluiu 1531 capturas sem falhas, porém o validador global sinalizou a home por `title == shell`. Reproduzido localmente com a home original: HTML de 407110 bytes, 17692 caracteres de texto, H1, main, 2 JSON-LD, canonical próprio e marca de prerender. O validador anterior rejeita esse HTML completo unicamente porque o título da home é intencionalmente igual ao título do index.html.

A correção não muda título/conteúdo nem ignora o erro: mantém o guard de título-shell fora de `/` e exige na home aplicação renderizada, H1 no main, no mínimo 500 caracteres de texto principal e três seções, além de todos os checks anteriores de SEO/prerender. Função extraída para testes. Doze regressões passaram, incluindo shell bruto, marcador falso, fallback de loading, root ausente/vazio, pouco texto, seções ausentes, canonical incorreto, título e marcador ausentes. Build/lint local aprovados. Geração completa local iniciada para confirmar todas as 1531 rotas; resultado completo e novo preview devem ser verificados antes de merge.
