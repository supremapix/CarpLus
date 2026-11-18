export interface BlogPost {
  slug: string; title: string; description: string; category: string;
  publishedAt: string; image: string; imageAlt: string; readMinutes: number;
  sections: { heading: string; paragraphs: string[]; bullets?: string[] }[];
  sources: { label: string; url: string }[];
  relatedLinks: { label: string; href: string }[];
}

export const BLOG_POSTS: BlogPost[] = [
{
  "slug": "pneus-carros-eletricos-duvidas-curitiba",
  "title": "Pneus para elétricos e híbridos em Curitiba: desgaste, autonomia e escolha",
  "description": "Entenda o que conferir antes de trocar pneus de um elétrico ou híbrido: especificação, desgaste irregular, ruído e orçamento sem promessas de autonomia.",
  "category": "Carros elétricos e híbridos",
  "publishedAt": "2026-11-18",
  "image": "/images/galeria/display-pneus.webp",
  "imageAlt": "Exposição de pneus da Carplus; consulte a compatibilidade com seu veículo",
  "readMinutes": 4,
  "sections": [
    {
      "heading": "Preciso comprar um pneu com a palavra EV?",
      "paragraphs": [
        "A identificação comercial não basta para decidir. A Michelin explica que carros elétricos podem se beneficiar de pneus desenvolvidos para suas características, mas isso não transforma uma marcação EV em requisito universal. Confira primeiro as especificações exigidas para o modelo e a versão do veículo.",
        "O mesmo cuidado vale para híbridos. Não escolha apenas pelo aro: peça a medida completa, os índices de carga e velocidade e a confirmação de eventuais exigências da montadora. Uma recomendação para outro carro não substitui o manual do seu."
      ]
    },
    {
      "heading": "Por que o pneu parece estar acabando rápido?",
      "paragraphs": [
        "Carga, torque e condução influenciam o trabalho dos pneus; não há uma quilometragem única de duração para todo elétrico. Aceleradas intensas, condições de uso e manutenção também entram na avaliação. Evite concluir que o problema é simplesmente a propulsão elétrica.",
        "A Michelin relaciona desgaste irregular a causas como pressão inadequada e problemas de geometria. Uma região mais gasta precisa ser examinada, não apenas escondida com a troca do pneu. Peça avaliação do conjunto e um registro do padrão de desgaste encontrado."
      ]
    },
    {
      "heading": "Como comparar silêncio e autonomia sem cair em promessas?",
      "paragraphs": [
        "Solicite a ficha da medida exata e pergunte qual característica sustenta a recomendação. Pneus projetados para elétricos podem priorizar eficiência e conforto acústico, mas uma promessa de ganho fixo de autonomia não considera todas as condições do seu trajeto.",
        "Na conversa com a loja, explique se o incômodo é ruído, vibração, desgaste ou custo da troca. São perguntas diferentes: comparar só o preço da unidade pode deixar de fora o problema que motivou a compra."
      ]
    },
    {
      "heading": "Um pedido de orçamento útil para quem roda em Curitiba",
      "paragraphs": [
        "Antes de procurar atendimento no Portão ou programar uma parada entre compromissos, envie dados que permitam identificar a aplicação. Uma foto legível da lateral do pneu e da etiqueta do veículo ajuda a evitar proposta para uma medida parecida, mas diferente.",
        "Peça que disponibilidade, compatibilidade e serviços incluídos sejam confirmados antes do deslocamento. Este guia não afirma estoque imediato nem atendimento especializado para qualquer modelo elétrico."
      ],
      "bullets": [
        "Marca, modelo, ano e versão do carro.",
        "Medida completa dos pneus dianteiros e traseiros, se diferentes.",
        "Motivo da procura: troca preventiva, desgaste, ruído ou dano.",
        "Quantidade desejada e uso principal: cidade, estrada ou ambos.",
        "Solicitação de orçamento discriminando pneus, montagem e demais serviços."
      ]
    },
    {
      "heading": "Perguntas para levar à avaliação",
      "paragraphs": [
        "Vale anotar: o desgaste é uniforme? A recomendação atende ao manual? O preço inclui quais etapas? Há alguma condição do veículo que precisa ser corrigida antes da troca? O objetivo é sair com uma explicação verificável, não apenas com o nome de um produto.",
        "Para calibragem, utilize a referência do fabricante do veículo e siga as orientações de medição a frio. No manual do Model Y consultado, a monitorização de pressão auxilia o motorista, mas exige compreender a configuração do sistema. Procedimentos de um modelo não devem ser transplantados para outro."
      ]
    }
  ],
  "sources": [
    {
      "label": "Michelin: pneus para carro elétrico",
      "url": "https://www.michelin.com.br/auto/conselhos/guia-veiculo-eletrico/pneus-para-carro-eletrico"
    },
    {
      "label": "Michelin: causas de desgaste irregular",
      "url": "https://www.michelin.com.br/auto/conselhos/troca-de-pneus/desgaste-de-pneu"
    },
    {
      "label": "Tesla Model Y: cuidados com os pneus, exemplo específico de modelo",
      "url": "https://www.tesla.com/ownersmanual/modely/pt_pt/GUID-94F63B13-EA2C-45D9-83AB-5DCA6295D587.html"
    }
  ],
  "relatedLinks": [
    {
      "label": "Pneu elétrico furado e aviso de pressão",
      "href": "/blog/pneu-eletrico-furado-tpms-orcamento"
    },
    {
      "label": "Consultar a Carplus",
      "href": "/contato"
    },
    {
      "label": "Comparar pneus por medida",
      "href": "/medidas-de-pneus-curitiba"
    }
  ]
},
{
  "slug": "pneu-eletrico-furado-tpms-orcamento",
  "title": "Pneu de elétrico furado: espuma acústica, TPMS e o que perguntar à oficina",
  "description": "Saiba por que a reparação depende de inspeção, como explicar um alerta de pressão e quais informações enviar antes de levar seu elétrico ou híbrido à oficina.",
  "category": "Carros elétricos e híbridos",
  "publishedAt": "2026-11-18",
  "image": "/images/centro-automotivo/mecanico-pneus.webp",
  "imageAlt": "Área de atendimento de pneus da Carplus; imagem ilustrativa de manutenção",
  "readMinutes": 4,
  "sections": [
    {
      "heading": "Um pneu com espuma pode ser reparado?",
      "paragraphs": [
        "Não existe resposta única para todo pneu de elétrico. Um boletim da Kia para pneus com espuma do EV6 2022 descreve reparação com etapas específicas e condições que impedem o conserto. Isso demonstra que a espuma não significa descarte automático, mas também não autoriza qualquer reparo em qualquer modelo.",
        "A oficina precisa identificar o pneu e consultar as orientações aplicáveis. Não remova espuma nem improvise reparos em casa com base em vídeos ou relatos de outros proprietários."
      ]
    },
    {
      "heading": "O que decide entre reparar e substituir?",
      "paragraphs": [
        "Segundo a Michelin, localização do furo, condição interna e danos causados por rodar com pressão baixa precisam ser avaliados. Ver apenas o objeto preso na borracha não permite concluir que o pneu está seguro. A inspeção interna é importante para descobrir danos que a fotografia não mostra.",
        "Peça a explicação da decisão: onde está o dano, qual condição inviabiliza o reparo e qual orientação técnica foi utilizada. Não continue rodando com pneu vazio ou dano visível para tentar economizar o deslocamento de assistência. Pare em local seguro e procure ajuda adequada à situação."
      ]
    },
    {
      "heading": "A luz do TPMS acendeu: o sensor está quebrado?",
      "paragraphs": [
        "O alerta não deve ser tratado automaticamente como defeito eletrônico. O manual do Model Y distingue configurações de monitoramento direto e indireto e orienta verificar a pressão diante do aviso. O procedimento para calibrar ou reinicializar varia conforme o veículo.",
        "Anote a mensagem exata, quando surgiu e se houve troca de pneus ou rodas. Não apague o aviso como primeira solução: confirme a pressão e investigue perdas. A instrução do seu manual tem prioridade sobre um passo a passo feito para outro carro."
      ]
    },
    {
      "heading": "Por que proprietários procuram uma segunda avaliação?",
      "paragraphs": [
        "Em um relato público no fórum BoltEV, um proprietário descreve dificuldade para encontrar quem avaliasse um pneu com espuma acústica. O relato ajuda a identificar uma dúvida real, mas não é prova de que toda oficina possa realizar o serviço nem de que seu pneu seja reparável.",
        "Ao telefonar, pergunte se a equipe avalia a especificação exata e quais informações precisa receber. Confirmar capacidade de atendimento antes de sair evita chegar esperando um procedimento que não foi combinado."
      ]
    },
    {
      "heading": "Mensagem pronta para organizar o orçamento",
      "paragraphs": [
        "Você pode escrever: ‘Tenho um [modelo, ano e versão], com pneu [medida e identificação]. Apareceu [descrever alerta ou dano]. O veículo [está parado ou apresentou perda de pressão]. Vocês conseguem avaliar essa aplicação? Qual é a orientação para levar o carro com segurança e quais etapas entram no orçamento?’.",
        "Não envie senhas ou documentos pessoais para uma consulta inicial. Identificação do carro, fotos do pneu e descrição do problema normalmente são mais úteis para começar a conversa. A confirmação do diagnóstico depende de avaliação, não de um orçamento por mensagem."
      ],
      "bullets": [
        "Avise se utilizou selante ou kit emergencial.",
        "Informe se o pneu tem espuma acústica, quando souber.",
        "Pergunte sobre inspeção interna e condições de reparabilidade.",
        "Confirme previamente os serviços disponíveis para seu modelo.",
        "Se houver risco para rodar, combine assistência em vez de conduzir até a loja."
      ]
    },
    {
      "heading": "Atendimento em Curitiba sem diagnóstico à distância",
      "paragraphs": [
        "Use os canais da Carplus para consultar a possibilidade de avaliação e obter orientação sobre o próximo passo. Este conteúdo não representa promessa de reparo de espuma acústica, manutenção de bateria ou intervenção em sistemas de alta tensão.",
        "Para escolher pneus novos, veja também o guia de desgaste e especificações de elétricos e híbridos. Ele ajuda a organizar as perguntas antes da compra, sem atribuir a todos os carros a mesma calibragem, duração ou autonomia."
      ]
    }
  ],
  "sources": [
    {
      "label": "Kia: boletim técnico sobre pneus com espuma do EV6 2022",
      "url": "https://static.nhtsa.gov/odi/tsbs/2022/MC-10212201-0001.pdf"
    },
    {
      "label": "Michelin: quando um pneu pode ser reparado",
      "url": "https://www.michelin.com.br/auto/conselhos/troca-de-pneus/conserto-de-pneus"
    },
    {
      "label": "Tesla Model Y: cuidados e monitoramento de pressão",
      "url": "https://www.tesla.com/ownersmanual/modely/pt_pt/GUID-94F63B13-EA2C-45D9-83AB-5DCA6295D587.html"
    },
    {
      "label": "Relato de proprietário no BoltEV: inspiração editorial, não orientação técnica",
      "url": "https://www.reddit.com/r/BoltEV/comments/1wixnyb/had_a_slow_leak_flat_on_my_bolt_goodyear_electric/"
    }
  ],
  "relatedLinks": [
    {
      "label": "Pneus de elétricos: desgaste e escolha",
      "href": "/blog/pneus-carros-eletricos-duvidas-curitiba"
    },
    {
      "label": "Consultar atendimento",
      "href": "/contato"
    },
    {
      "label": "Serviços da Carplus",
      "href": "/servicos"
    }
  ]
},
  {
    slug: 'calibragem-pneus-frios-carga',
    title: 'Calibragem dos pneus: como acertar a pressão a frio e com carga',
    description: 'Saiba onde encontrar a pressão correta, por que calibrar a frio e o que conferir quando o carro vai viajar carregado.',
    category: 'Cuidados com os pneus', publishedAt: '2026-10-18', readMinutes: 3,
    image: '/images/centro-automotivo/mecanico-pneus.webp', imageAlt: 'Atendimento de pneus na oficina Carplus',
    sections: [
      { heading: 'A medida do pneu não define sozinha a calibragem', paragraphs: ['Dois carros com pneus da mesma medida podem exigir pressões diferentes. O ponto de partida é a indicação da montadora para o veículo, não o número usado no carro anterior ou a sugestão de outro motorista. Procure a etiqueta na região da porta, na tampa do combustível ou consulte o manual.', 'Confira também a unidade indicada: PSI, bar e kPa não são números intercambiáveis. No calibrador, selecione a unidade correspondente. A inscrição de pressão máxima na lateral do pneu não substitui a recomendação do veículo.'] },
      { heading: 'Por que fazer a conferência com os pneus frios?', paragraphs: ['O ar se aquece durante a rodagem e a pressão aumenta. Por isso, a referência da montadora normalmente é a pressão a frio. Planeje a conferência antes de sair, respeitando a definição de pneu frio do manual. Não retire ar de um pneu quente apenas para alcançar o valor recomendado a frio.', 'Se você só conseguiu medir depois de rodar, siga a orientação do fabricante para essa condição e faça nova conferência a frio. Não crie uma compensação própria para a temperatura.'] },
      { heading: 'Vai levar passageiros e bagagem?', paragraphs: ['Antes de uma viagem saindo de Curitiba, consulte a tabela do manual para a carga prevista. Alguns veículos têm recomendações distintas para os eixos e para uso carregado. Isso não significa que todo carro deva receber uma quantidade fixa de pressão extra.', 'Organize a conferência antes de carregar o porta-malas. Assim você consegue acessar o estepe, verificar sua condição e consultar a pressão específica sem retirar as malas depois. Respeite também os limites de carga do veículo.'], bullets: ['Identifique o modelo, a versão e a medida homologada.', 'Confira os valores para os pneus dianteiros, traseiros e estepe.', 'Verifique a pressão periodicamente e antes de viagens ou de levar carga adicional.', 'Anote perdas recorrentes e peça uma inspeção, em vez de apenas completar o ar repetidamente.'] },
      { heading: 'A luz de pressão não substitui a verificação', paragraphs: ['O sistema de monitoramento de pressão, quando presente, é uma ajuda, não uma dispensa da manutenção. Consulte o manual para saber como interpretar o aviso e quando fazer a reinicialização. Se o alerta reaparecer, investigue a causa.', 'Para pedir orientação, tenha em mãos uma foto legível da etiqueta de pressão e a identificação do carro. Se houver perda rápida, deformação ou outro dano visível, não trate o problema apenas como falta de calibragem: procure avaliação profissional antes de continuar a rodagem.'] }
    ],
    sources: [
      { label: 'Michelin: como calibrar pneus', url: 'https://www.michelin.com.br/auto/conselhos/calibragem-do-pneu/calibrar-pneus' },
      { label: 'Continental: pressão dos pneus e carga do veículo', url: 'https://www.continental-tires.com/pt/pt/tire-knowledge/tire-pressure/' }
    ], relatedLinks: [{ label: 'Conheça nossos serviços', href: '/servicos' }, { label: 'Fale com a Carplus', href: '/contato' }]
  },
  {
    slug: 'bolha-no-pneu-apos-buraco', title: 'Bolha no pneu após um buraco: o que fazer e o que não tentar',
    description: 'Entenda por que uma bolha na lateral exige atenção imediata e por que um reparo de furo não resolve dano estrutural.',
    category: 'Segurança', publishedAt: '2026-10-18', readMinutes: 3,
    image: '/images/borracharia/pneu-desgastado.webp', imageAlt: 'Pneu usado em inspeção; imagem ilustrativa, não é diagnóstico de bolha',
    sections: [
      { heading: 'Uma saliência nova não é apenas um defeito visual', paragraphs: ['Uma bolha que aparece na lateral depois de um impacto pode indicar ruptura da estrutura interna do pneu. O problema não se resume à borracha externa: há risco de perda repentina de pressão. Não é seguro decidir continuar porque o pneu ainda parece cheio.', 'A Michelin alerta que esse dano pode estar na lateral interna, que não fica visível numa olhada rápida ao lado do carro. Uma avaliação depois de um impacto deve considerar o conjunto, e não apenas a área mais fácil de fotografar.'] },
      { heading: 'Priorize um local seguro e assistência', paragraphs: ['Se perceber uma deformação ou comportamento anormal durante o trajeto, procure interromper a circulação em local seguro, sem manobras bruscas. Não continue a viagem para ver se a bolha aumenta. Quando não houver condições seguras para resolver a situação, acione assistência.', 'Trocar pelo estepe só é uma alternativa quando o local, o equipamento e as instruções do veículo permitem executar a troca com segurança. O estepe também precisa estar em condições de uso. Em uma via movimentada, a prioridade é a proteção das pessoas, não a rapidez do reparo.'] },
      { heading: 'Por que remendo e calibragem não resolvem?', paragraphs: ['Um furo reparável na banda de rodagem é diferente de uma bolha causada por dano à carcaça. A estrutura comprometida não é recuperada simplesmente vedando a saída de ar. Um pneu com esse dano precisa ser substituído; remendo, câmara ou ajuste de pressão não devem ser apresentados como solução para a bolha.', 'Mesmo um furo aparentemente pequeno precisa de inspeção. A Michelin orienta desmontar o pneu para avaliar o interior, pois rodar com pouca pressão pode provocar danos que não aparecem por fora. O local e a extensão do dano, além das orientações do fabricante, determinam a possibilidade de reparo.'] },
      { heading: 'O que informar na avaliação', paragraphs: ['Conte quando ocorreu o impacto, se houve perda de pressão e se surgiram vibrações ou mudança na direção. Se você já tiver parado em segurança, uma fotografia pode ajudar a explicar o ocorrido, mas não comprova que o pneu está apto a rodar.', 'Peça que a avaliação diferencie o dano no pneu de possíveis problemas da roda ou de outros componentes. A troca de uma peça não deve ser uma conclusão automática sobre todo o conjunto. O diagnóstico é que deve orientar os próximos passos.'], bullets: ['Não perfure, aperte ou tente achatar a bolha.', 'Não use ausência de vazamento como prova de segurança.', 'Não combine uma distância ou velocidade “segura” para rodar com o dano.', 'Na substituição, confira a especificação aprovada para o veículo.'] }
    ], sources: [
      { label: 'Michelin: danos no flanco do pneu', url: 'https://www.michelin.com.br/auto/conselhos/troca-de-pneus/danos-no-flanco-do-pneu' },
      { label: 'Michelin: quando um pneu pode ser reparado', url: 'https://www.michelin.com.br/auto/conselhos/troca-de-pneus/conserto-de-pneus' }
    ], relatedLinks: [{ label: 'Avaliação para conserto de pneu', href: '/servico/conserto-de-pneu' }, { label: 'Catálogo de pneus', href: '/pneus' }]
  },
  {
    slug: 'etiqueta-inmetro-pneus-como-ler', title: 'Etiqueta do pneu: como comparar aderência, eficiência e ruído',
    description: 'Aprenda a ler os três critérios da etiqueta do Inmetro sem confundir classificação com garantia de economia ou durabilidade.',
    category: 'Escolha do pneu', publishedAt: '2026-10-18', readMinutes: 3,
    image: '/images/galeria/display-pneus.webp', imageAlt: 'Exposição de pneus na Carplus para escolha da medida e do modelo',
    sections: [
      { heading: 'Compare primeiro produtos compatíveis com seu carro', paragraphs: ['A etiqueta ajuda na comparação, mas não decide se um pneu serve no veículo. Antes de olhar as classes, confirme a medida, os índices de carga e velocidade e eventuais requisitos específicos no manual. Uma boa classificação não torna uma especificação incompatível adequada.', 'Para evitar confusão no orçamento, peça a identificação completa do pneu: marca, modelo, medida e índices. Não compare apenas nomes de linhas ou fotografias genéricas. A informação precisa corresponder ao produto que será fornecido.'] },
      { heading: 'O que os três campos informam?', paragraphs: ['Segundo o Inmetro, a etiqueta reúne resultados de resistência ao rolamento, aderência em pista molhada e emissão sonora, avaliados por métodos padronizados. Cada campo responde a uma pergunta diferente; não existe uma nota única que resuma todas as características do pneu.'], bullets: ['Resistência ao rolamento: indica o comportamento ligado à eficiência energética. Não é uma promessa de um percentual fixo de economia no seu carro.', 'Aderência em pista molhada: permite comparar o desempenho nesse ensaio. Não significa que seja possível manter qualquer velocidade na chuva.', 'Ruído: informa a emissão sonora externa em decibéis. Não é uma medição direta do silêncio dentro da cabine.'] },
      { heading: 'O que a etiqueta não conta', paragraphs: ['A Michelin destaca que outros critérios precisam ser pesquisados em materiais do fabricante e com assistência técnica. A etiqueta não fornece, por si só, uma previsão de quilometragem, uma garantia de resistência a buracos ou um diagnóstico de conforto no seu veículo.', 'Também não substitui os cuidados de uso. Pressão, carga, manutenção e modo de conduzir continuam relevantes. Na chuva, uma classificação melhor não elimina a necessidade de reduzir a velocidade de acordo com as condições e manter distância de segurança.'] },
      { heading: 'Um roteiro simples para pedir orçamento', paragraphs: ['Comece pela aplicação correta e depois compare as prioridades. Para quem enfrenta trajetos urbanos e rodoviários em Curitiba, pode ser útil discutir aderência no molhado junto com os demais atributos, sem transformar uma classificação isolada em recomendação universal.', 'Peça para ver a etiqueta da medida exata, registre as três informações e solicite a descrição do que está incluído no orçamento. Se faltar algum dado, confirme antes de decidir. Um preço sem modelo e medida completos dificulta saber se as propostas são equivalentes.'], bullets: ['Meu veículo aceita esta medida e estes índices?', 'A etiqueta corresponde exatamente a este produto?', 'Quais são as classes de aderência e resistência ao rolamento?', 'Qual é o valor de ruído externo declarado?', 'Quais serviços e condições estão descritos no orçamento?'] },
      { heading: 'Decisão informada, sem promessas genéricas', paragraphs: ['A etiqueta funciona melhor como parte da decisão. Combine os dados com a compatibilidade e o uso real do carro. Se duas propostas diferirem, peça a explicação da diferença em termos concretos, em vez de aceitar apenas expressões como “mais econômico” ou “o mais seguro”.'] }
    ], sources: [
      { label: 'Inmetro: critérios avaliados na etiqueta de pneus', url: 'https://www.gov.br/inmetro/pt-br/acesso-a-informacao/perguntas-frequentes/avaliacao-da-conformidade/pneus-novos/quais-sao-e-como-sao-avaliados-os-criterios-de-desempenho-presentes-na-etiqueta-de-pneus-2' },
      { label: 'Michelin: como conferir a etiqueta do Inmetro', url: 'https://pro.michelin.com.br/blog/articles/aprenda-a-conferir-a-etiqueta-do-inmetro-antes-de-escolher-o-pneu' },
      { label: 'ANIP: escolha segura dos pneus', url: 'https://www.anip.org.br/releases/como-escolher-seu-pneu-de-forma-segura/' }
    ], relatedLinks: [{ label: 'Compare opções no catálogo', href: '/pneus' }, { label: 'Encontre pneus por medida', href: '/medidas-de-pneus-curitiba' }]
  },
  {
    slug: 'estepe-temporario-cuidados-viagem', title: 'Estepe temporário: o que conferir antes de viajar',
    description: 'Prepare o estepe e os equipamentos antes de sair e entenda por que os limites de uso dependem do manual do veículo.',
    category: 'Antes da viagem', publishedAt: '2026-10-18', readMinutes: 3,
    image: '/images/centro-automotivo/oficina-elevadores.webp', imageAlt: 'Área de atendimento da Carplus para manutenção antes da viagem',
    sections: [
      { heading: 'O estepe não deve ser lembrado só na emergência', paragraphs: ['É comum conferir os pneus que estão rodando e esquecer o que está guardado no porta-malas. Antes de viajar, reserve um momento para verificar se o conjunto de emergência está acessível e em condições de uso. Fazer isso antes de colocar a bagagem evita descobrir um problema no acostamento.', 'Primeiro identifique a solução prevista para o seu veículo: estepe convencional, temporário ou outro sistema. Não suponha que o equipamento do carro anterior seja igual. Procure no manual a seção de emergência e leia as instruções com antecedência.'] },
      { heading: 'Temporário significa uso restrito', paragraphs: ['Um estepe temporário não foi pensado para substituir indefinidamente o conjunto normal. Respeite as instruções da montadora e as marcações do próprio estepe, inclusive pressão, velocidade e demais restrições. Não existe um limite único que possa ser aplicado sem conferir o modelo.', 'Como exemplo da importância dessa leitura, o manual do Honda Fit 2020 alerta que o estepe temporário altera o conforto e pode oferecer menos tração em alguns pavimentos. Essa orientação é do veículo citado, não uma autorização para transplantar seus limites para outro carro.'] },
      { heading: 'Checklist antes de fechar o porta-malas', paragraphs: ['Confira a pressão específica do estepe, em vez de repetir automaticamente o valor dos pneus em uso. A Michelin recomenda verificar também esse pneu, mesmo que ele não esteja rodando. Observe sinais de dano e procure avaliação quando houver dúvida sobre sua condição.'], bullets: ['Localize o estepe ou a solução de emergência prevista pelo fabricante.', 'Confira pressão e estado do conjunto conforme o manual.', 'Verifique se macaco, chave de roda e adaptador de parafuso antifurto, quando aplicável, estão presentes.', 'Leia onde ficam os pontos de apoio do macaco e as restrições de uso.', 'Mantenha os contatos de assistência e os equipamentos de sinalização acessíveis.'] },
      { heading: 'Na estrada, não improvise para ganhar tempo', paragraphs: ['A existência de um estepe não significa que qualquer local seja apropriado para trocar a roda. Considere o trânsito, a superfície e as instruções de segurança do veículo. Se você não consegue executar a operação com segurança, peça assistência. Nunca entre sob um carro sustentado apenas pelo macaco.', 'Depois de uma substituição emergencial, procure atendimento para restabelecer o conjunto adequado e conferir a instalação conforme as orientações do fabricante. Não transforme o uso temporário em parte da rotina porque o carro parece estar rodando normalmente.'] },
      { heading: 'Leve informações, não só ferramentas', paragraphs: ['Uma preparação útil é salvar o manual oficial no celular e conferir como acessar a assistência contratada. Na hora de pedir ajuda, informe o modelo do veículo, sua localização e o que aconteceu. Isso reduz dúvidas sobre o equipamento necessário, sem exigir que você faça um diagnóstico à distância.', 'Se estiver organizando a revisão antes de sair de Curitiba, inclua o estepe na lista de itens a conferir. O objetivo é descobrir limitações antes da viagem, quando ainda há tempo para resolver o problema com tranquilidade.'] }
    ], sources: [
      { label: 'Honda Fit 2020: manual do proprietário, emergência e estepe', url: 'https://www.honda.com.br/pos-venda/automoveis/sites/customer_service/files/2020-08/Fit%202020%20-%20Manual%20do%20propriet%C3%A1rio_20200805.pdf' },
      { label: 'Michelin: calibragem e verificação do estepe', url: 'https://www.michelin.com.br/auto/conselhos/calibragem-do-pneu/calibrar-pneus' }
    ], relatedLinks: [{ label: 'Manutenção automotiva em Curitiba', href: '/manutencao-automotiva-curitiba' }, { label: 'Entre em contato antes da viagem', href: '/contato' }]
  }
];
