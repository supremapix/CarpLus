export interface ServiceData {
  slug: string;
  title: string;
  icon: string;
  shortDesc: string;
  badge: string | null;
  badgeColor: "red" | "gray" | null;
  description: string;
  includes: string[];
  whenNeeded: string[];
  faq: { q: string; a: string }[];
}

export const SERVICES_DATA: ServiceData[] = [
  {
    slug: "alinhamento-e-balanceamento",
    title: "Alinhamento e Balanceamento",
    icon: "Gauge",
    shortDesc: "Alinhamento computadorizado 3D e balanceamento de rodas com equipamento de alta precisão.",
    badge: "Mais procurado",
    badgeColor: "red",
    description: `O alinhamento e balanceamento são serviços essenciais para a segurança e durabilidade dos pneus. Na Carplus, utilizamos equipamento de alinhamento computadorizado 3D que garante precisão milimétrica na geometria das rodas.

O balanceamento é feito com balanceadora eletrônica, eliminando vibrações no volante e prolongando a vida útil dos pneus. Recomendamos realizar os dois serviços juntos a cada troca de pneus ou a cada 10.000 km.

Trabalhamos com veículos de passeio, SUVs, picapes e veículos de frota empresarial.`,
    includes: [
      "Alinhamento computadorizado 3D das 4 rodas",
      "Balanceamento eletrônico de todas as rodas",
      "Verificação da pressão dos pneus",
      "Inspeção visual de pneus e suspensão",
      "Relatório de geometria antes e depois",
    ],
    whenNeeded: [
      "Volante desviando para um lado ao soltar",
      "Vibração no volante em velocidades altas",
      "Desgaste irregular ou excessivo nos pneus",
      "Após troca de pneus ou impactos fortes",
      "A cada 10.000 km como manutenção preventiva",
    ],
    faq: [
      {
        q: "Qual a diferença entre alinhamento e balanceamento?",
        a: "Alinhamento corrige o ângulo das rodas em relação ao solo e entre si — evita que o carro 'puxe' para um lado. Balanceamento distribui o peso igualmente em cada roda — elimina vibrações. São serviços complementares e idealmente feitos juntos."
      },
      {
        q: "Com que frequência devo fazer alinhamento?",
        a: "Recomendamos a cada 10.000 km ou sempre que trocar os pneus. Também é indicado após passar em buracos fundos, sarjetas ou sofrer qualquer impacto forte nas rodas."
      },
      {
        q: "O alinhamento 3D é melhor que o tradicional?",
        a: "Sim. O alinhamento 3D usa câmeras e sensores para medir todos os ângulos da geometria com precisão milimétrica, incluindo a traseira — algo que equipamentos antigos não conseguem fazer com a mesma exatidão."
      },
      {
        q: "Quanto tempo leva o serviço?",
        a: "Em média 45 a 60 minutos para alinhamento + balanceamento das 4 rodas. Sem necessidade de agendamento — atendemos por ordem de chegada ou pelo WhatsApp."
      },
      {
        q: "O serviço tem garantia?",
        a: "Sim. Oferecemos garantia de serviço. Se você sentir qualquer problema após o serviço, retorne à Carplus e revisamos sem custo adicional."
      },
    ]
  },
  {
    slug: "troca-de-oleo",
    title: "Troca de Óleo e Filtros",
    icon: "Droplets",
    shortDesc: "Troca de óleo lubrificante, filtros e fluidos com peças originais e garantia.",
    badge: null,
    badgeColor: null,
    description: `A troca de óleo é a manutenção mais importante para o motor do seu veículo. Um óleo degradado perde a capacidade de lubrificação e refrigeração das peças internas, acelerando o desgaste e podendo causar danos graves e custosos.

Na Carplus, realizamos a troca de óleo com produtos de primeira linha, respeitando a especificação do fabricante do seu veículo (viscosidade, norma API/ACEA). Trabalhamos com óleos minerais, semissintéticos e sintéticos das principais marcas.

Além do óleo, verificamos e substituímos filtros de óleo, ar, combustível e cabine quando necessário.`,
    includes: [
      "Troca de óleo com produto especificado pelo fabricante",
      "Substituição do filtro de óleo",
      "Verificação do nível de todos os fluidos",
      "Inspeção visual de vazamentos",
      "Adesivo de lembrete da próxima troca",
    ],
    whenNeeded: [
      "A cada 5.000–10.000 km (conforme tipo de óleo e fabricante)",
      "Quando o óleo está escuro ou com cheiro de queimado",
      "Luz de óleo acesa no painel",
      "Antes de viagens longas",
      "Ao adquirir um veículo usado sem histórico de manutenção",
    ],
    faq: [
      {
        q: "Qual óleo é recomendado para o meu carro?",
        a: "Depende do fabricante e do modelo do seu veículo. O manual do proprietário especifica a viscosidade (ex: 5W-30) e norma (API SN, ACEA C3). Na Carplus verificamos para você e usamos o produto correto."
      },
      {
        q: "Qual a diferença entre óleo mineral, semissintético e sintético?",
        a: "O mineral é derivado do petróleo com pouco refinamento — troca mais frequente (5.000 km). O semissintético combina mineral com aditivos sintéticos (7.500 km). O sintético é totalmente desenvolvido em laboratório, com maior proteção e intervalo de 10.000 km ou mais."
      },
      {
        q: "Posso misturar marcas de óleo?",
        a: "Em emergências, sim, mas não é recomendado. Óleos de marcas diferentes podem ter aditivos incompatíveis que reduzem a eficiência. Na próxima manutenção, faça a troca completa com um produto único."
      },
      {
        q: "O filtro de óleo precisa ser trocado junto?",
        a: "Sempre. O filtro retém impurezas do óleo velho — reutilizá-lo com óleo novo contamina imediatamente o fluido recém-trocado. Na Carplus, a troca do filtro já está incluída no serviço."
      },
    ]
  },
  {
    slug: "suspensao-e-freios",
    title: "Suspensão e Freios",
    icon: "Settings2",
    shortDesc: "Amortecedores, molas, pastilhas, discos, cilindros mestre e linha completa de freios.",
    badge: null,
    badgeColor: null,
    description: `A suspensão e o sistema de freios são os dois componentes mais diretamente ligados à segurança do seu veículo. Amortecedores desgastados aumentam a distância de frenagem em até 20% e prejudicam o controle em curvas.

Na Carplus, realizamos diagnóstico completo da suspensão — amortecedores, molas, bandejas, buchas e terminais — e de todo o sistema de freios: pastilhas, discos, tambores, cilindros e fluido de freio.

Trabalhamos com peças de primeira linha com procedência e nota fiscal, e todos os serviços possuem garantia.`,
    includes: [
      "Diagnóstico completo de suspensão e freios",
      "Substituição de pastilhas e/ou discos de freio",
      "Substituição de amortecedores e molas",
      "Troca de buchas, bandejas e terminais de direção",
      "Sangria e troca de fluido de freio",
      "Teste de frenagem após serviço",
    ],
    whenNeeded: [
      "Barulho ao frear (rangido, estrondo)",
      "Pedal de freio mole ou esponjoso",
      "Carro 'afunda' muito em buracos",
      "Balanceio excessivo na traseira",
      "Vazamento de fluido próximo às rodas",
      "Luz de ABS ou freio acesa no painel",
    ],
    faq: [
      {
        q: "Como sei se meus amortecedores precisam de troca?",
        a: "Pressione a frente do carro para baixo e solte. Se o veículo balançar mais de uma vez antes de estabilizar, os amortecedores estão desgastados. Outros sinais: barulhos em lombadas, instabilidade em curvas e desgaste irregular dos pneus."
      },
      {
        q: "Pastilha ou disco — qual precisa de troca primeiro?",
        a: "As pastilhas desgastam mais rápido e precisam de troca mais frequente (entre 30.000 e 60.000 km, dependendo do estilo de condução). Os discos duram mais, mas também desgastam. Na revisão, verificamos a espessura de ambos."
      },
      {
        q: "Com que frequência o fluido de freio deve ser trocado?",
        a: "A maioria dos fabricantes recomenda a cada 2 anos ou 40.000 km. O fluido de freio é higroscópico — absorve umidade do ar, reduzindo o ponto de ebulição e aumentando o risco de perda de frenagem ('fading') em descidas longas."
      },
      {
        q: "Vocês trabalham com peças originais ou paralelas?",
        a: "Trabalhamos com peças de reposição de primeira linha (Bosch, Fremax, Monroe, Cofap e outras marcas líderes) com procedência, nota fiscal e garantia do fabricante. Não utilizamos peças sem procedência."
      },
    ]
  },
  {
    slug: "mecanica-geral",
    title: "Mecânica Geral",
    icon: "Wrench",
    shortDesc: "Manutenção preventiva e corretiva, revisão de fábrica, injeção eletrônica e diagnóstico computadorizado.",
    badge: null,
    badgeColor: null,
    description: `A Carplus é uma oficina mecânica completa, preparada para resolver desde manutenções preventivas simples até diagnósticos complexos de motor e injeção eletrônica. Nossa equipe é treinada e utiliza scanner automotivo de última geração.

Realizamos revisão de fábrica dentro do prazo do fabricante, garantindo a validade da garantia do seu veículo novo. Para carros mais antigos, executamos revisão completa com checklist de mais de 30 itens.

Atendemos carros de passeio, SUVs, picapes e frotas empresariais de Curitiba e Região Metropolitana.`,
    includes: [
      "Diagnóstico computadorizado com scanner automotivo",
      "Revisão de fábrica (manutenção programada)",
      "Serviços de injeção eletrônica",
      "Checklist completo com mais de 30 itens",
      "Manutenção preventiva e corretiva",
      "Reparo de motor",
    ],
    whenNeeded: [
      "Luz 'check engine' acesa no painel",
      "Consumo de combustível aumentou",
      "Dificuldade para dar partida",
      "Perda de potência ou marcha lenta irregular",
      "Revisão de fábrica no prazo do manual",
      "Antes de viagens longas",
    ],
    faq: [
      {
        q: "O que é revisão de fábrica e por que é importante?",
        a: "É a manutenção prevista pelo fabricante do veículo em intervalos específicos de km (ex: 10.000, 20.000, 30.000 km). Inclui troca de óleo, filtros, verificação de correia dentada, fluidos e outros itens. Fazê-la no prazo mantém a garantia do carro e previne problemas maiores."
      },
      {
        q: "Vocês conseguem apagar a luz 'check engine'?",
        a: "Não apenas apagamos — identificamos a causa raiz com nosso scanner. Apagar a luz sem resolver o problema é um serviço que não fazemos, pois mascara falhas que podem causar danos sérios ao motor ou ao catalisador."
      },
      {
        q: "Quanto tempo leva uma revisão completa?",
        a: "Uma revisão padrão (óleo, filtros, verificação geral) leva entre 2 e 4 horas. Revisões mais completas com diagnóstico eletrônico e serviços adicionais podem levar o dia todo. Avisamos o prazo antes de iniciar."
      },
      {
        q: "Posso fazer a revisão na Carplus sem perder a garantia do carro?",
        a: "Sim. A legislação brasileira (Lei 8.078/90 — CDC) garante que o consumidor pode realizar manutenções em qualquer oficina idônea sem perder a garantia de fábrica, desde que sejam usadas peças adequadas e o serviço seja registrado com nota fiscal."
      },
    ]
  },
  {
    slug: "ar-condicionado",
    title: "Ar Condicionado",
    icon: "Wind",
    shortDesc: "Higienização, carga de gás, reparo de compressor e manutenção completa do sistema.",
    badge: null,
    badgeColor: null,
    description: `O sistema de ar condicionado automotivo exige manutenção regular para funcionar com eficiência e sem riscos à saúde dos ocupantes. Um sistema sujo pode concentrar fungos e bactérias no interior do veículo.

Na Carplus realizamos higienização completa do sistema, carga de gás (R-134a e R-1234yf), diagnóstico de vazamentos e reparo ou substituição do compressor.

Recomendamos higienização a cada 12 meses e verificação de gás a cada 2 anos.`,
    includes: [
      "Higienização do sistema com produto bactericida",
      "Carga de gás refrigerante (R-134a / R-1234yf)",
      "Diagnóstico eletrônico de vazamentos",
      "Substituição do filtro de cabine",
      "Verificação de correia e compressor",
      "Teste de temperatura pós-serviço",
    ],
    whenNeeded: [
      "Ar condicionado não está gelando",
      "Cheiro desagradável ao ligar o ar",
      "Compressor fazendo barulho",
      "Vidros embaçando com o ar ligado",
      "Após 2 anos sem verificação de gás",
      "Após 12 meses sem higienização",
    ],
    faq: [
      {
        q: "Por que o ar condicionado para de gelar?",
        a: "O motivo mais comum é a falta de gás refrigerante — o gás vaza lentamente ao longo do tempo. Outras causas incluem compressor desgastado, condensador sujo ou entupido, e falha no sistema elétrico. Na Carplus identificamos a causa antes de qualquer reparo."
      },
      {
        q: "O que é higienização do ar condicionado?",
        a: "É a limpeza interna do sistema com produto bactericida/fungicida aplicado nos dutos, no evaporador e na caixa de ar. Remove fungos, bactérias e ácaros que se acumulam com a umidade, causando cheiro ruim e problemas respiratórios."
      },
      {
        q: "Qual a diferença entre R-134a e R-1234yf?",
        a: "São os dois tipos de gás refrigerante automotivo. O R-134a é usado em carros mais antigos. O R-1234yf é o padrão dos veículos mais novos (a partir de ~2019/2020), com menor potencial de aquecimento global. Identificamos qual é o seu antes da carga."
      },
      {
        q: "Trocar o filtro de cabine faz diferença?",
        a: "Sim. O filtro de cabine filtra o ar que entra no habitáculo — poeira, pólen, partículas finas e até fungos. Um filtro saturado reduz a vazão de ar e pode jogar contaminantes direto na cabine. Recomendamos troca anual."
      },
    ]
  },
  {
    slug: "pneus",
    title: "Pneus",
    icon: "Circle",
    shortDesc: "Pirelli, Michelin, Goodyear, Continental, Firestone, Bridgestone e Yokohama. Parcelamento em até 10x.",
    badge: "Loja física",
    badgeColor: "gray",
    description: `A Carplus é loja de pneus das principais marcas do mercado: Pirelli, Michelin, Goodyear, Continental, Firestone, Bridgestone e Yokohama. Trabalhamos com pneus para carros de passeio, SUVs, picapes e veículos comerciais leves.

Todos os pneus incluem montagem e balanceamento no valor. Parcelamos em até 10x no cartão de crédito, sem juros em seleções especiais. Atendemos também frotas empresariais com condições especiais.

Nossa equipe orienta você na escolha do pneu ideal para o seu veículo e estilo de uso.`,
    includes: [
      "Pneus Pirelli, Michelin, Goodyear, Continental, Firestone, Bridgestone e Yokohama",
      "Montagem e balanceamento inclusos",
      "Verificação e correção de pressão",
      "Rodízio de pneus",
      "Parcelamento em até 10x no cartão",
      "Atendimento para frotas",
    ],
    whenNeeded: [
      "Desgaste no indicador de desgaste (TWI)",
      "Cortes, bolhas ou deformações visíveis",
      "Pneu com mais de 5 anos de fabricação",
      "Perda frequente de pressão",
      "Vibração mesmo após balanceamento",
      "Desempenho ruim em chuva",
    ],
    faq: [
      {
        q: "Como sei que meu pneu precisa ser trocado?",
        a: "O indicador visual é o TWI (Tread Wear Indicator) — um ressalto no fundo dos sulcos. Quando o pneu desgasta até esse nível, é hora de trocar. Também avalie: bolhas na lateral, cortes profundos, fissuras e pneus com mais de 5 anos mesmo com boa aparência."
      },
      {
        q: "Preciso trocar os 4 pneus de uma vez?",
        a: "O ideal é trocar pelo menos em pares (eixo dianteiro ou traseiro juntos) para manter equilíbrio de tração e frenagem. Se possível, trocar os 4 garante melhor performance. Nunca misture marcas ou medidas diferentes no mesmo eixo."
      },
      {
        q: "Qual a pressão correta dos pneus?",
        a: "A pressão ideal está na etiqueta colada na coluna da porta do motorista ou no manual do veículo — não na lateral do pneu (essa é a pressão máxima, não a ideal). Na Carplus verificamos e calibramos gratuitamente."
      },
      {
        q: "O que é rodízio de pneus e por que fazer?",
        a: "Rodízio é trocar os pneus de posição entre eixo dianteiro e traseiro. Como o desgaste não é igual entre os eixos (especialmente em carros tração dianteira), o rodízio equaliza o desgaste e prolonga a vida dos 4 pneus. Recomendamos a cada 10.000 km."
      },
      {
        q: "Vocês aceitam troca ou compra de pneus usados?",
        a: "Não trabalhamos com pneus usados para revenda, pois não conseguimos garantir a segurança do produto. Trabalhamos apenas com pneus novos das marcas parceiras, com garantia do fabricante."
      },
    ]
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return SERVICES_DATA.find(s => s.slug === slug);
}
