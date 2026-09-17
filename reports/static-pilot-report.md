# Relatório — Prova de Conceito de Geração Estática (E2/E3)

> Gerado em 2026-09-17T18:55:47.691Z

## Veredito: **PROVA DE CONCEITO APROVADA** (11/11 rotas aprovadas)

## Tabela de rotas piloto

| Rota | Tipo | Arquivo | Title (início) | Canonical | HTML (bytes) | Texto (chars) | H1 | JSON-LD | Assets | Status |
|------|------|---------|----------------|-----------|--------------|---------------|----|---------|--------|--------|
| `/` | Home | `dist/index.html` | Oficina Mecânica e Loja de Pneus… | / | 488507 | 26761 | Oficina Mecânica e Loja de P | 2 | ok | APROVADA |
| `/pneu/pneu-pirelli-175-70r13-p400-evo-82t` | Produto (pneu) | `dist/pneu/pneu-pirelli-175-70r13-p400-evo-82t/index.html` | Pneu Pirelli 175/70R13 P400 Evo … | /pneu/pneu-pirelli-175-70r13-p400-evo-82t | 180580 | 14094 | Pirelli 175/70R13 P400 Evo 8 | 4 | ok | APROVADA |
| `/servico/venda-de-pneus` | Serviço | `dist/servico/venda-de-pneus/index.html` | Venda de Pneus em Curitiba / Mon… | /servico/venda-de-pneus | 135971 | 9685 | Venda de Pneus em Curitiba – | 4 | ok | APROVADA |
| `/pneu-medida/175-65r14` | Medida | `dist/pneu-medida/175-65r14/index.html` | Pneu 175/65R14 em Curitiba / Car… | /pneu-medida/175-65r14 | 182492 | 9990 | Pneu 175/65R14 | 4 | ok | APROVADA |
| `/pneu-para-hb20-curitiba` | Veículo (landing) | `dist/pneu-para-hb20-curitiba/index.html` | Pneu para HB20 em Curitiba / Car… | /pneu-para-hb20-curitiba | 150252 | 7117 | Pneu para Hyundai HB20 em Cu | 6 | ok | APROVADA |
| `/bairro/portao` | Local / Bairro | `dist/bairro/portao/index.html` | Loja de Pneus no Portão Curitiba… | /bairro/portao | 143535 | 8578 | Pneus e Oficina no Portão | 5 | ok | APROVADA |
| `/quem-somos` | Institucional | `dist/quem-somos/index.html` | Quem Somos / Carplus Pneus e Ofi… | /quem-somos | 111671 | 6682 | Quem Somos | 1 | ok | APROVADA |
| `/servicos` | Serviços (contador animado) | `dist/servicos/index.html` | Serviços de Oficina e Pneus em C… | /servicos | 224572 | 13855 | Nossos Serviços | 2 | ok | APROVADA |
| `/faq` | FAQ (scroll infinito) | `dist/faq/index.html` | FAQ - Perguntas Frequentes / Car… | /faq | 250434 | 6881 | Perguntas Frequentes | 2 | ok | APROVADA |
| `/loja-de-pneus-curitiba-perto-de-mim` | Local (navigator/geolocation) | `dist/loja-de-pneus-curitiba-perto-de-mim/index.html` | Loja de Pneus em Curitiba Perto … | /loja-de-pneus-curitiba-perto-de-mim | 109795 | 5983 | Loja de Pneus em Curitiba Pe | 3 | ok | APROVADA |
| `/rota-inexistente-teste-404` | 404 (teste de erro) | `dist/rota-inexistente-teste-404/index.html` | Página não encontrada (404) / Ca… | /rota-inexistente-teste-404 | 30240 | 753 | Essa página não existe, mas  | 1 | ok | APROVADA |

## Detalhe das verificações por rota

### [APROVADA] `/` — Home

- [x] Arquivo HTML existe — _dist/index.html_
- [x] Tamanho mínimo (>2KB) — _488507 bytes_
- [x] Possui <title> — _Oficina Mecânica e Loja de Pneus no Portão, Curitiba | Carplus_
- [x] Possui description
- [x] Possui canonical — _https://www.carpluspneuseoficina.com.br/_
- [x] Possui H1 — _Oficina Mecânica e Loja de Pneus no Portãoem Curitiba_
- [x] Possui conteúdo principal (texto real) — _26761 chars_
- [x] JSON-LD presente (global do shell) — _2 blocos_
- [x] Canonical sem localhost
- [x] HTML sem localhost/porta
- [x] HTML sem chamada a serviço externo de pré-renderização (URL)
- [x] HTML não é o shell vazio (tem conteúdo no #root)
- [x] Assets /assets existem fisicamente — _todos ok_

### [APROVADA] `/pneu/pneu-pirelli-175-70r13-p400-evo-82t` — Produto (pneu)

- [x] Arquivo HTML existe — _dist/pneu/pneu-pirelli-175-70r13-p400-evo-82t/index.html_
- [x] Tamanho mínimo (>2KB) — _180580 bytes_
- [x] Possui <title> — _Pneu Pirelli 175/70R13 P400 Evo 82T em Curitiba | Carplus_
- [x] Possui description
- [x] Possui canonical — _https://www.carpluspneuseoficina.com.br/pneu/pneu-pirelli-175-70r13-p400-evo-82t_
- [x] Possui H1 — _Pirelli 175/70R13 P400 Evo 82T_
- [x] Possui conteúdo principal (texto real) — _14094 chars_
- [x] Possui JSON-LD (esperado) — _4 blocos_
- [x] Canonical sem localhost
- [x] HTML sem localhost/porta
- [x] HTML sem chamada a serviço externo de pré-renderização (URL)
- [x] HTML não é o shell vazio (tem conteúdo no #root)
- [x] Assets /assets existem fisicamente — _todos ok_
- [x] Title diferente do title da home — _ok_
- [x] Canonical diferente do canonical da home — _ok_
- [x] Canonical reflete o caminho da rota — _https://www.carpluspneuseoficina.com.br/pneu/pneu-pirelli-175-70r13-p400-evo-82t_

### [APROVADA] `/servico/venda-de-pneus` — Serviço

- [x] Arquivo HTML existe — _dist/servico/venda-de-pneus/index.html_
- [x] Tamanho mínimo (>2KB) — _135971 bytes_
- [x] Possui <title> — _Venda de Pneus em Curitiba | Montagem Inclusa | Carplus_
- [x] Possui description
- [x] Possui canonical — _https://www.carpluspneuseoficina.com.br/servico/venda-de-pneus_
- [x] Possui H1 — _Venda de Pneus em Curitiba – Bairro Portão_
- [x] Possui conteúdo principal (texto real) — _9685 chars_
- [x] Possui JSON-LD (esperado) — _4 blocos_
- [x] Canonical sem localhost
- [x] HTML sem localhost/porta
- [x] HTML sem chamada a serviço externo de pré-renderização (URL)
- [x] HTML não é o shell vazio (tem conteúdo no #root)
- [x] Assets /assets existem fisicamente — _todos ok_
- [x] Title diferente do title da home — _ok_
- [x] Canonical diferente do canonical da home — _ok_
- [x] Canonical reflete o caminho da rota — _https://www.carpluspneuseoficina.com.br/servico/venda-de-pneus_

### [APROVADA] `/pneu-medida/175-65r14` — Medida

- [x] Arquivo HTML existe — _dist/pneu-medida/175-65r14/index.html_
- [x] Tamanho mínimo (>2KB) — _182492 bytes_
- [x] Possui <title> — _Pneu 175/65R14 em Curitiba | Carplus Centro Automotivo – Todas as Marcas_
- [x] Possui description
- [x] Possui canonical — _https://www.carpluspneuseoficina.com.br/pneu-medida/175-65r14_
- [x] Possui H1 — _Pneu 175/65R14_
- [x] Possui conteúdo principal (texto real) — _9990 chars_
- [x] Possui JSON-LD (esperado) — _4 blocos_
- [x] Canonical sem localhost
- [x] HTML sem localhost/porta
- [x] HTML sem chamada a serviço externo de pré-renderização (URL)
- [x] HTML não é o shell vazio (tem conteúdo no #root)
- [x] Assets /assets existem fisicamente — _todos ok_
- [x] Title diferente do title da home — _ok_
- [x] Canonical diferente do canonical da home — _ok_
- [x] Canonical reflete o caminho da rota — _https://www.carpluspneuseoficina.com.br/pneu-medida/175-65r14_

### [APROVADA] `/pneu-para-hb20-curitiba` — Veículo (landing)

- [x] Arquivo HTML existe — _dist/pneu-para-hb20-curitiba/index.html_
- [x] Tamanho mínimo (>2KB) — _150252 bytes_
- [x] Possui <title> — _Pneu para HB20 em Curitiba | Carplus Centro Automotivo – Medidas e Preço_
- [x] Possui description
- [x] Possui canonical — _https://www.carpluspneuseoficina.com.br/pneu-para-hb20-curitiba_
- [x] Possui H1 — _Pneu para Hyundai HB20 em Curitiba_
- [x] Possui conteúdo principal (texto real) — _7117 chars_
- [x] Possui JSON-LD (esperado) — _6 blocos_
- [x] Canonical sem localhost
- [x] HTML sem localhost/porta
- [x] HTML sem chamada a serviço externo de pré-renderização (URL)
- [x] HTML não é o shell vazio (tem conteúdo no #root)
- [x] Assets /assets existem fisicamente — _todos ok_
- [x] Title diferente do title da home — _ok_
- [x] Canonical diferente do canonical da home — _ok_
- [x] Canonical reflete o caminho da rota — _https://www.carpluspneuseoficina.com.br/pneu-para-hb20-curitiba_

### [APROVADA] `/bairro/portao` — Local / Bairro

- [x] Arquivo HTML existe — _dist/bairro/portao/index.html_
- [x] Tamanho mínimo (>2KB) — _143535 bytes_
- [x] Possui <title> — _Loja de Pneus no Portão Curitiba | Carplus Centro Automotivo - 2 min_
- [x] Possui description
- [x] Possui canonical — _https://www.carpluspneuseoficina.com.br/bairro/portao_
- [x] Possui H1 — _Pneus e Oficina no Portão_
- [x] Possui conteúdo principal (texto real) — _8578 chars_
- [x] Possui JSON-LD (esperado) — _5 blocos_
- [x] Canonical sem localhost
- [x] HTML sem localhost/porta
- [x] HTML sem chamada a serviço externo de pré-renderização (URL)
- [x] HTML não é o shell vazio (tem conteúdo no #root)
- [x] Assets /assets existem fisicamente — _todos ok_
- [x] Title diferente do title da home — _ok_
- [x] Canonical diferente do canonical da home — _ok_
- [x] Canonical reflete o caminho da rota — _https://www.carpluspneuseoficina.com.br/bairro/portao_

### [APROVADA] `/quem-somos` — Institucional

- [x] Arquivo HTML existe — _dist/quem-somos/index.html_
- [x] Tamanho mínimo (>2KB) — _111671 bytes_
- [x] Possui <title> — _Quem Somos | Carplus Pneus e Oficina em Curitiba desde 2014_
- [x] Possui description
- [x] Possui canonical — _https://www.carpluspneuseoficina.com.br/quem-somos_
- [x] Possui H1 — _Quem Somos_
- [x] Possui conteúdo principal (texto real) — _6682 chars_
- [x] JSON-LD presente (global do shell) — _1 blocos_
- [x] Canonical sem localhost
- [x] HTML sem localhost/porta
- [x] HTML sem chamada a serviço externo de pré-renderização (URL)
- [x] HTML não é o shell vazio (tem conteúdo no #root)
- [x] Assets /assets existem fisicamente — _todos ok_
- [x] Title diferente do title da home — _ok_
- [x] Canonical diferente do canonical da home — _ok_
- [x] Canonical reflete o caminho da rota — _https://www.carpluspneuseoficina.com.br/quem-somos_

### [APROVADA] `/servicos` — Serviços (contador animado)

- [x] Arquivo HTML existe — _dist/servicos/index.html_
- [x] Tamanho mínimo (>2KB) — _224572 bytes_
- [x] Possui <title> — _Serviços de Oficina e Pneus em Curitiba Portão | Carplus Centro Automotivo_
- [x] Possui description
- [x] Possui canonical — _https://www.carpluspneuseoficina.com.br/servicos_
- [x] Possui H1 — _Nossos Serviços_
- [x] Possui conteúdo principal (texto real) — _13855 chars_
- [x] JSON-LD presente (global do shell) — _2 blocos_
- [x] Canonical sem localhost
- [x] HTML sem localhost/porta
- [x] HTML sem chamada a serviço externo de pré-renderização (URL)
- [x] HTML não é o shell vazio (tem conteúdo no #root)
- [x] Assets /assets existem fisicamente — _todos ok_
- [x] Title diferente do title da home — _ok_
- [x] Canonical diferente do canonical da home — _ok_
- [x] Canonical reflete o caminho da rota — _https://www.carpluspneuseoficina.com.br/servicos_

### [APROVADA] `/faq` — FAQ (scroll infinito)

- [x] Arquivo HTML existe — _dist/faq/index.html_
- [x] Tamanho mínimo (>2KB) — _250434 bytes_
- [x] Possui <title> — _FAQ - Perguntas Frequentes | Carplus Centro Automotivo Curitiba_
- [x] Possui description
- [x] Possui canonical — _https://www.carpluspneuseoficina.com.br/faq_
- [x] Possui H1 — _Perguntas Frequentes_
- [x] Possui conteúdo principal (texto real) — _6881 chars_
- [x] JSON-LD presente (global do shell) — _2 blocos_
- [x] Canonical sem localhost
- [x] HTML sem localhost/porta
- [x] HTML sem chamada a serviço externo de pré-renderização (URL)
- [x] HTML não é o shell vazio (tem conteúdo no #root)
- [x] Assets /assets existem fisicamente — _todos ok_
- [x] Title diferente do title da home — _ok_
- [x] Canonical diferente do canonical da home — _ok_
- [x] Canonical reflete o caminho da rota — _https://www.carpluspneuseoficina.com.br/faq_

### [APROVADA] `/loja-de-pneus-curitiba-perto-de-mim` — Local (navigator/geolocation)

- [x] Arquivo HTML existe — _dist/loja-de-pneus-curitiba-perto-de-mim/index.html_
- [x] Tamanho mínimo (>2KB) — _109795 bytes_
- [x] Possui <title> — _Loja de Pneus em Curitiba Perto de Mim | Carplus - Portão_
- [x] Possui description
- [x] Possui canonical — _https://www.carpluspneuseoficina.com.br/loja-de-pneus-curitiba-perto-de-mim_
- [x] Possui H1 — _Loja de Pneus em Curitiba Perto de Você_
- [x] Possui conteúdo principal (texto real) — _5983 chars_
- [x] JSON-LD presente (global do shell) — _3 blocos_
- [x] Canonical sem localhost
- [x] HTML sem localhost/porta
- [x] HTML sem chamada a serviço externo de pré-renderização (URL)
- [x] HTML não é o shell vazio (tem conteúdo no #root)
- [x] Assets /assets existem fisicamente — _todos ok_
- [x] Title diferente do title da home — _ok_
- [x] Canonical diferente do canonical da home — _ok_
- [x] Canonical reflete o caminho da rota — _https://www.carpluspneuseoficina.com.br/loja-de-pneus-curitiba-perto-de-mim_

### [APROVADA] `/rota-inexistente-teste-404` — 404 (teste de erro)

- [x] Arquivo HTML existe — _dist/rota-inexistente-teste-404/index.html_
- [x] Tamanho mínimo (>2KB) — _30240 bytes_
- [x] Possui <title> — _Página não encontrada (404) | Carplus Pneus e Oficina Curitiba_
- [x] Possui description
- [x] Possui canonical — _https://www.carpluspneuseoficina.com.br/rota-inexistente-teste-404_
- [x] Possui H1 — _Essa página não existe, mas a Carplus sim!_
- [x] Possui conteúdo principal (texto real) — _753 chars_
- [x] JSON-LD presente (global do shell) — _1 blocos_
- [x] Canonical sem localhost
- [x] HTML sem localhost/porta
- [x] HTML sem chamada a serviço externo de pré-renderização (URL)
- [x] HTML não é o shell vazio (tem conteúdo no #root)
- [x] Robots noindex aplicado
- [x] Assets /assets existem fisicamente — _todos ok_
- [x] Title diferente do title da home — _ok_

## Erros de console durante a geração (indício de hidratação)

Nenhum erro de console registrado durante a geração.

## Rotas de risco (E4) — cobertura de APIs de navegador / lazy / contadores

| Rota | Risco exercitado | Texto (chars) | Status |
|------|------------------|---------------|--------|
| `/servicos` | AnimatedCounter (IntersectionObserver) — deve mostrar valor final, não "0" | 13855 | APROVADA |
| `/faq` | FAQInfiniteScroll — conteúdo essencial não pode depender de scroll | 6881 | APROVADA |
| `/loja-de-pneus-curitiba-perto-de-mim` | navigator.geolocation em handler — não pode bloquear/alterar o render | 5983 | APROVADA |

## Critérios de aprovação (checklist do pedido)

- [x] Conteúdo principal presente no HTML (não só em JS)
- [x] Metadados corretos (title + canonical por rota)
- [x] Assets funcionam (referências /assets existem)
- [x] Sem localhost em canonical
- [x] Nenhuma rota indexável herdou canonical da home
- [ ] JavaScript desativado mantém o conteúdo (validar manualmente — ver seção no doc)
- [ ] Hidratação sem quebra (validar no navegador — ver seção no doc)
- [x] Geração sem dependência de serviço externo de pré-renderização

