# Home: confiança com prova visual

Lote separado do blog (PR 138). Não publicado.

## Alterações
- Abertura estática e título menor, com CTA “Conversar sobre meu carro” visível mais cedo.
- Seção “Por que confiar na Carplus?” imediatamente após a abertura. Três provas verificáveis: serviços no mesmo endereço, fotos da estrutura e canais de contato.
- Fotos reais existentes preservadas: oficina-carros.webp, fachada-fullservice.webp e atendimento-cliente.webp. Nenhuma imagem gerada por IA; nenhum nome ou qualificação atribuído a pessoas.
- Vídeo já usado no site: https://www.youtube.com/watch?v=xlwso3EmUog. Título e disponibilidade conferidos por oEmbed; canal Suprema Vídeos. Poster real do vídeo armazenado localmente. Reprodução de 47 segundos conferida no navegador do usuário: apresentador junto à S10 branca na oficina, canal Suprema Vídeos, publicação 11/05/2026, título/descrição CarPlus AutoCenter, endereço 1323 Portão e telefone 3082-7282 coincidentes. O embed ficou preto no QA do Chrome do usuário. Fallback final: poster local e link explícito “Assistir no YouTube”, sem iframe. Legenda: “Vídeo da Carplus: preparação para viagens”, sem afirmar que todos os serviços são demonstrados.
- Removidas datas relativas sintéticas das avaliações, rótulo indiscriminado Local Guide e destaques agregados antigos. A consulta oficial ao Perfil da Empresa Google confirmou posteriormente 4,9/5 e 262 avaliações; a nova seção mostra a nota/contagem com data 18/10/2026 e link direto para Maps. Textos e estrelas das avaliações existentes preservados, sem autenticação independente de cada depoimento.
- Footer troca a afirmação agregada por acesso às fotos/estrutura. Nenhuma alteração em preços, estoque ou garantia.

## Inventário visual
Não há arquivos mp4/webm locais. Vídeos incorporados existentes incluem troca de pneus (1fWqUJdCdRg), fluido de freios (-7jfKxcDlTs), óleo (TY8qfETXlJQ), freios/suspensão (OEDrtkA19mY), revisão (xlwso3EmUog), promoções (v72kI13VyAU) e venda de veículos (TL490QZpGlc). Apenas revisão foi escolhido para a nova seção.

O proprietário confirmou em 18/10/2026 que a Carplus atende carros antigos. A seção menciona esse atendimento sem prometer restauração ou especialidades.

## QA local
- npm ci --ignore-scripts; npm run lint; build com Chromium serverless: aprovados.
- scripts/test-home-trust.ts: 360, 390, 768 e 1440 px; sem overflow, um H1, CTA inicial visível, texto estável após 4,5 segundos, imagens carregadas, nenhum iframe, poster local e link YouTube correto em nova aba.
- Inspeção visual dos screenshots mobile e desktop de hero e confiança.
- A página independente do YouTube teve identidade/conteúdo conferidos; a reprodução embutida falhou no Chrome do usuário e não é apresentada como aprovada. O site usa o link externo explícito para evitar tela preta.

## Dados locais confirmados
Consulta GBP somente leitura em 18/10/2026: pino -25.4636, -49.3003; segunda a sexta 08–18h, sábado 08–12h; 4,9/5 em 262 avaliações. Fonte pública: https://maps.google.com/maps?cid=11894120831274747055 . Corrigidos schema compartilhado, constantes de páginas por marca, schema de bairros e horários visíveis nas páginas Portão/perto de mim. Não alteramos o Perfil da Empresa Google. Coordenadas de bairros, tempos e geografia permanecem para auditoria separada; não confundidos com pino da loja.

## Limites
O número histórico “10000 clientes” em Quem Somos e outras ocorrências de TrustBar fora da home não foram revisados neste lote. Não se adicionaram promessas operacionais (aprovação prévia, prazo, garantia ou qualificação) sem confirmação do proprietário.

## Atualização solicitada: logo mobile do rodapé
Logo SVG compartilhada ampliada para 200 px e centralizada abaixo de 768 px, preservando proporção e tamanho/alinhamento desktop. Teste scripts/test-footer-mobile.ts aprovado na home, artigo e serviço em 360/390/1440 px: imagem carregada e visível, alinhamento central, proporção, ausência de overflow/sobreposição com botões fixos. Revisão visual concluída. Simplificadas duas frases promocionais genéricas do rodapé para convite factual de atendimento, sem “preço justo garantido”.

A geração completa anterior à alteração visual do rodapé passou: 1531 arquivos, zero ausentes, zero problemas e zero canonicais duplicados. Regressões de home e blog também passaram. Após a alteração do rodapé, build essencial, TypeScript e QA das três páginas passaram novamente; aguardar nova validação global no preview antes de publicação.
