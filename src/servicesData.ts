// Dados completos dos serviços com conteúdo expandido para SEO

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceData {
  id: number;
  slug: string;
  title: string;
  icon: string;
  shortDescription: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  heroDescription: string;
  fullDescription: string[];
  benefits: string[];
  includedItems: string[];
  whenYouNeed: string[];
  averageTime: string;
  warranty: string;
  faqs: ServiceFAQ[];
}

export const SERVICES_DATA: ServiceData[] = [
  {
    id: 1,
    slug: 'loja-de-pneus',
    title: 'Loja de Pneus',
    icon: 'Disc',
    shortDescription: 'Pneus Pirelli, Michelin, Goodyear, Continental, Bridgestone e Yokohama. Parcelamento em até 10x sem juros.',
    metaTitle: 'Loja de Pneus em Curitiba | Pirelli, Michelin, Goodyear | Carplus Portão',
    metaDescription: 'Loja de pneus no Portão, Curitiba. Pirelli, Michelin, Goodyear, Continental, Bridgestone e Yokohama. Todos os aros do 13 ao 22. Parcelamento em até 10x sem juros. Montagem e balanceamento inclusos.',
    keywords: ['loja de pneus curitiba', 'pneus portão', 'pneus pirelli curitiba', 'pneus michelin curitiba', 'pneus goodyear', 'comprar pneus curitiba', 'pneu barato curitiba'],
    heroDescription: 'Encontre o pneu ideal para o seu veículo na Carplus. Trabalhamos com as melhores marcas do mercado: Pirelli, Michelin, Goodyear, Continental, Bridgestone e Yokohama. Atendemos todos os modelos de veículos nacionais e importados.',
    fullDescription: [
      'A Carplus é a loja de pneus de referência no bairro Portão e região sul de Curitiba. Com mais de 10 anos de experiência, oferecemos pneus das melhores marcas do mundo com preços competitivos e condições de pagamento facilitadas.',
      'Nosso estoque inclui pneus para todos os tipos de veículos: carros de passeio, SUVs, picapes, vans e utilitários. Trabalhamos com aros do 13 ao 22, atendendo desde veículos populares até carros premium e esportivos.',
      'Todos os pneus vendidos na Carplus incluem montagem, balanceamento e alinhamento de cortesia. Nossa equipe técnica é treinada para orientar você na escolha do melhor pneu de acordo com seu perfil de uso, tipo de veículo e orçamento.',
      'Oferecemos parcelamento em até 10x sem juros nos cartões de crédito. Aceitamos também PIX, débito e dinheiro com desconto especial.'
    ],
    benefits: [
      'Pirelli, Michelin, Goodyear, Continental, Bridgestone, Yokohama',
      'Todos os aros: do 13 ao 22',
      'Montagem e balanceamento inclusos no preço',
      'Alinhamento de cortesia na compra de 4 pneus',
      'Parcelamento em até 10x sem juros',
      'Garantia de fábrica em todos os pneus',
      'Estoque pronto para retirada imediata',
      'Atendimento técnico especializado'
    ],
    includedItems: [
      'Desmontagem dos pneus antigos',
      'Montagem dos pneus novos',
      'Balanceamento computadorizado',
      'Calibragem com nitrogênio',
      'Verificação da pressão ideal',
      'Inspeção visual das rodas'
    ],
    whenYouNeed: [
      'Pneus com menos de 2mm de sulco (banda de rodagem)',
      'Desgaste irregular ou em formato de "dente de serra"',
      'Rachaduras ou bolhas na lateral do pneu',
      'Pneu furado sem possibilidade de reparo',
      'Veículo puxando para um lado',
      'Vibração no volante em alta velocidade',
      'Pneus com mais de 5 anos de fabricação'
    ],
    averageTime: '45-60 minutos',
    warranty: 'Garantia de fábrica (5 anos)',
    faqs: [
      {
        question: 'Qual a melhor marca de pneu para meu carro?',
        answer: 'A escolha depende do seu perfil de uso. Para uso urbano e economia, recomendamos Pirelli P400 ou Goodyear Direction. Para performance e conforto, Michelin Primacy ou Continental. Para SUVs, temos linhas específicas de cada marca. Nossa equipe pode ajudar na escolha ideal.'
      },
      {
        question: 'Vocês trabalham com pneus Run Flat?',
        answer: 'Sim! Temos pneus Run Flat das principais marcas como Pirelli, Michelin, Continental e Yokohama. Esses pneus permitem rodar até 80km mesmo sem pressão, ideais para veículos BMW, Mercedes e outros importados.'
      },
      {
        question: 'Posso parcelar a compra dos pneus?',
        answer: 'Sim, parcelamos em até 10x sem juros nos principais cartões de crédito. Também aceitamos PIX, débito e dinheiro com desconto especial de 5%.'
      },
      {
        question: 'Quanto tempo demora para trocar os 4 pneus?',
        answer: 'O serviço completo (desmontagem, montagem, balanceamento e alinhamento) leva em média 45 a 60 minutos. Trabalhamos com agendamento para sua comodidade, mas também atendemos por ordem de chegada.'
      },
      {
        question: 'O alinhamento está incluso na compra dos pneus?',
        answer: 'Sim! Na compra de 4 pneus, o alinhamento 3D computadorizado é cortesia. A montagem e o balanceamento já estão inclusos no preço de qualquer quantidade de pneus.'
      },
      {
        question: 'Vocês fazem orçamento por WhatsApp?',
        answer: 'Sim! Envie a medida do seu pneu (ex: 195/55R15) pelo WhatsApp (41) 3082-7282 que respondemos rapidamente com valores e disponibilidade.'
      }
    ]
  },
  {
    id: 2,
    slug: 'alinhamento-3d',
    title: 'Alinhamento 3D',
    icon: 'Target',
    shortDescription: 'Alinhamento computadorizado 3D de alta precisão. Equipamento Hunter de última geração.',
    metaTitle: 'Alinhamento 3D em Curitiba | Computadorizado | Carplus Portão',
    metaDescription: 'Alinhamento 3D computadorizado no Portão, Curitiba. Equipamento Hunter de última geração. Evita desgaste irregular dos pneus e melhora a estabilidade do veículo. Resultado em 30 minutos.',
    keywords: ['alinhamento 3d curitiba', 'alinhamento computadorizado', 'alinhamento portão', 'alinhamento hunter', 'alinhamento de rodas curitiba', 'alinhamento carro curitiba'],
    heroDescription: 'O alinhamento 3D computadorizado é essencial para a segurança e economia do seu veículo. Na Carplus utilizamos equipamento Hunter de última geração, garantindo precisão milimétrica em todos os ângulos.',
    fullDescription: [
      'O alinhamento de direção é um dos serviços mais importantes para a manutenção do seu veículo. Com o tempo, buracos, lombadas e o próprio uso desregulam os ângulos das rodas, causando desgaste irregular dos pneus, consumo excessivo de combustível e problemas de dirigibilidade.',
      'Na Carplus, utilizamos o sistema de alinhamento 3D computadorizado Hunter, referência mundial em precisão. Nosso equipamento utiliza 4 câmeras de alta resolução e alvos refletivos nas rodas para medir todos os ângulos com precisão de centésimos de grau.',
      'O alinhamento 3D permite ajustar Cambagem, Caster e Convergência de acordo com as especificações originais do fabricante do seu veículo. Isso garante que os pneus trabalhem sempre na posição correta, aumentando sua vida útil em até 30%.',
      'Nossos técnicos são treinados e certificados pela Hunter, garantindo que seu veículo receba o melhor tratamento. Emitimos relatório técnico completo com os valores antes e depois do serviço.'
    ],
    benefits: [
      'Equipamento Hunter 3D de última geração',
      'Precisão de centésimos de grau',
      'Relatório técnico impresso com antes e depois',
      'Técnicos certificados pela Hunter',
      'Banco de dados atualizado de todos os veículos',
      'Atendemos nacionais e importados',
      'Serviço rápido: 30 a 40 minutos',
      'Sem necessidade de agendamento'
    ],
    includedItems: [
      'Medição computadorizada 3D dos 4 eixos',
      'Ajuste de Cambagem (quando regulável)',
      'Ajuste de Caster (quando regulável)',
      'Ajuste de Convergência dianteira e traseira',
      'Verificação da geometria da suspensão',
      'Relatório técnico impresso'
    ],
    whenYouNeed: [
      'Volante torto ou desalinhado com o carro reto',
      'Veículo puxando para um lado',
      'Desgaste irregular dos pneus',
      'Após trocar pneus novos',
      'Após bater em buracos ou guias',
      'Após serviços na suspensão',
      'A cada 10.000 km rodados',
      'Direção "pesada" ou instável'
    ],
    averageTime: '30-40 minutos',
    warranty: '90 dias ou 5.000 km',
    faqs: [
      {
        question: 'Com que frequência devo fazer o alinhamento?',
        answer: 'Recomendamos fazer o alinhamento a cada 10.000 km ou sempre que perceber o carro puxando para um lado, volante torto ou desgaste irregular nos pneus. Também é importante após trocar pneus ou fazer serviços na suspensão.'
      },
      {
        question: 'Qual a diferença entre alinhamento 2D e 3D?',
        answer: 'O alinhamento 3D utiliza câmeras e alvos para medir todos os ângulos simultaneamente com precisão muito maior. O sistema 2D é mais antigo e menos preciso. Na Carplus utilizamos apenas o sistema 3D Hunter.'
      },
      {
        question: 'O alinhamento resolve o carro puxando para o lado?',
        answer: 'Na maioria dos casos, sim. Porém, se houver peças da suspensão desgastadas (pivôs, terminais, buchas), primeiro é necessário trocar essas peças. Nossa equipe faz a verificação antes do serviço.'
      },
      {
        question: 'Preciso fazer balanceamento junto com o alinhamento?',
        answer: 'São serviços diferentes e complementares. O alinhamento ajusta a direção das rodas. O balanceamento distribui o peso do conjunto pneu/roda. Se sentir vibração no volante, provavelmente precisa dos dois.'
      },
      {
        question: 'Vocês alinham carros rebaixados?',
        answer: 'Sim, alinhamos veículos rebaixados. Nosso equipamento permite ajustes especiais para carros com suspensão modificada. Orientamos também sobre possíveis limitações de ajuste.'
      },
      {
        question: 'Quanto custa o alinhamento 3D?',
        answer: 'Entre em contato pelo WhatsApp (41) 3082-7282 para valores atualizados. Oferecemos desconto na compra conjunta com balanceamento ou pneus.'
      }
    ]
  },
  {
    id: 3,
    slug: 'troca-de-oleo',
    title: 'Troca de Óleo',
    icon: 'Droplets',
    shortDescription: 'Troca de óleo e filtros com lubrificantes de primeira linha. Todas as marcas e viscosidades.',
    metaTitle: 'Troca de Óleo em Curitiba | Óleo Sintético | Carplus Portão',
    metaDescription: 'Troca de óleo no Portão, Curitiba. Óleos Mobil, Castrol, Shell, Petronas. Sintético, semissintético e mineral. Filtro de óleo incluso. Atendemos todos os veículos.',
    keywords: ['troca de oleo curitiba', 'troca oleo portão', 'oleo sintetico curitiba', 'troca de filtro curitiba', 'oleo mobil curitiba', 'oleo motor curitiba'],
    heroDescription: 'A troca de óleo regular é fundamental para a vida útil do motor. Na Carplus trabalhamos com as melhores marcas de lubrificantes: Mobil, Castrol, Shell e Petronas, em todas as viscosidades.',
    fullDescription: [
      'O óleo lubrificante é o "sangue" do motor do seu carro. Ele reduz o atrito entre as peças, dissipa calor, limpa impurezas e protege contra corrosão. Com o tempo, o óleo perde suas propriedades e precisa ser substituído.',
      'Na Carplus, oferecemos troca de óleo com lubrificantes de primeira linha das marcas Mobil, Castrol, Shell e Petronas. Trabalhamos com óleos minerais, semissintéticos e 100% sintéticos em todas as viscosidades (5W30, 5W40, 0W20, 10W40, etc.).',
      'Cada troca de óleo inclui a substituição do filtro de óleo e a verificação do nível de todos os fluidos do veículo. Nossos técnicos seguem as especificações do fabricante do seu carro para garantir a escolha correta do lubrificante.',
      'Fazemos também troca de óleo do câmbio automático e manual, óleo de diferencial e fluido de direção hidráulica. Consulte nossa equipe sobre a manutenção completa do seu veículo.'
    ],
    benefits: [
      'Óleos Mobil, Castrol, Shell, Petronas',
      'Sintético, semissintético e mineral',
      'Filtro de óleo incluso no serviço',
      'Verificação de todos os fluidos',
      'Adesivo de próxima troca no parabrisa',
      'Descarte ecológico do óleo usado',
      'Atendemos todos os modelos',
      'Serviço rápido: 20 a 30 minutos'
    ],
    includedItems: [
      'Drenagem completa do óleo usado',
      'Substituição do filtro de óleo',
      'Abastecimento com óleo novo',
      'Verificação do nível de fluido de freio',
      'Verificação do fluido de arrefecimento',
      'Verificação do fluido de direção',
      'Adesivo com quilometragem da próxima troca'
    ],
    whenYouNeed: [
      'A cada 5.000 a 10.000 km (conforme fabricante)',
      'Luz de óleo acesa no painel',
      'Óleo escuro ou com cheiro de queimado',
      'Barulho no motor ao dar partida',
      'Consumo excessivo de óleo',
      'Antes de viagens longas',
      'A cada 6 meses (mesmo rodando pouco)'
    ],
    averageTime: '20-30 minutos',
    warranty: '5.000 km ou 6 meses',
    faqs: [
      {
        question: 'Qual óleo devo usar no meu carro?',
        answer: 'O óleo correto está especificado no manual do proprietário. Geralmente, carros modernos usam óleo sintético 5W30 ou 5W40. Carros mais antigos podem usar semissintético ou mineral. Nossa equipe consulta o banco de dados do fabricante.'
      },
      {
        question: 'Qual a diferença entre óleo sintético e mineral?',
        answer: 'O óleo sintético é produzido em laboratório com moléculas uniformes, oferecendo melhor proteção, maior durabilidade e melhor desempenho em temperaturas extremas. O mineral é derivado do petróleo refinado, mais simples e econômico.'
      },
      {
        question: 'De quanto em quanto tempo devo trocar o óleo?',
        answer: 'Depende do tipo de óleo e recomendação do fabricante. Em média: óleo mineral a cada 5.000 km, semissintético a cada 7.500 km e sintético a cada 10.000 km. Carros com uso urbano intenso podem precisar de intervalos menores.'
      },
      {
        question: 'Posso misturar óleos de marcas diferentes?',
        answer: 'Não é recomendado misturar óleos de marcas diferentes ou viscosidades diferentes. Na troca, drenamos todo o óleo antigo antes de colocar o novo. Em emergências, é possível completar, mas o ideal é trocar o mais rápido possível.'
      },
      {
        question: 'O filtro de óleo está incluso?',
        answer: 'Sim! Toda troca de óleo na Carplus inclui o filtro de óleo no preço. Utilizamos filtros de qualidade compatíveis com cada modelo de veículo.'
      },
      {
        question: 'Vocês fazem troca de óleo do câmbio automático?',
        answer: 'Sim, fazemos troca de óleo do câmbio automático e CVT com fluidos ATF específicos para cada marca (Dexron, Mercon, CVT NS2, etc.). Consulte valores pelo WhatsApp.'
      }
    ]
  },
  {
    id: 4,
    slug: 'scanner-automotivo',
    title: 'Scanner Automotivo',
    icon: 'Cpu',
    shortDescription: 'Diagnóstico eletrônico completo. Leitura de falhas, reset de luzes e programações.',
    metaTitle: 'Scanner Automotivo em Curitiba | Diagnóstico Eletrônico | Carplus Portão',
    metaDescription: 'Scanner automotivo no Portão, Curitiba. Diagnóstico eletrônico completo de motor, câmbio, ABS, airbag. Reset de luzes e códigos de falha. Nacionais e importados.',
    keywords: ['scanner automotivo curitiba', 'diagnostico eletronico curitiba', 'leitura de falhas curitiba', 'reset luz motor curitiba', 'scanner carro curitiba', 'injecao eletronica curitiba'],
    heroDescription: 'O diagnóstico eletrônico identifica problemas ocultos no seu veículo. Na Carplus utilizamos scanner multimarcas de última geração para leitura de todos os sistemas: motor, câmbio, ABS, airbag e mais.',
    fullDescription: [
      'Os carros modernos possuem dezenas de sensores e módulos eletrônicos que monitoram todos os sistemas do veículo. Quando algo sai do normal, o computador de bordo registra um código de falha (DTC) e acende uma luz de advertência no painel.',
      'O scanner automotivo é a ferramenta que "conversa" com o computador do carro, permitindo identificar exatamente qual problema está ocorrendo. Na Carplus utilizamos scanner multimarcas profissional capaz de diagnosticar veículos nacionais e importados de todas as marcas.',
      'Nosso diagnóstico vai além da simples leitura de códigos. Analisamos dados em tempo real (rotação, temperatura, pressão, etc.), verificamos a comunicação entre módulos e identificamos a causa raiz do problema. Isso evita trocas desnecessárias de peças.',
      'Oferecemos também programações e adaptações eletrônicas como: reset de luz de óleo, calibração de borboleta, reset de câmbio automático, codificação de peças novas e muito mais.'
    ],
    benefits: [
      'Scanner multimarcas profissional',
      'Diagnóstico de motor, câmbio, ABS, airbag',
      'Leitura e apagamento de códigos de falha',
      'Análise de dados em tempo real',
      'Reset de luz de óleo e manutenção',
      'Programações e adaptações eletrônicas',
      'Relatório técnico detalhado',
      'Nacionais e importados'
    ],
    includedItems: [
      'Conexão OBD2 e diagnóstico completo',
      'Leitura de todos os módulos eletrônicos',
      'Identificação de códigos de falha (DTC)',
      'Verificação de dados em tempo real',
      'Teste de atuadores (quando aplicável)',
      'Relatório impresso com as falhas encontradas'
    ],
    whenYouNeed: [
      'Luz de injeção (check engine) acesa',
      'Luz de ABS ou airbag acesa',
      'Luz de bateria ou temperatura acesa',
      'Consumo excessivo de combustível',
      'Motor falhando ou engasgando',
      'Câmbio automático com problemas',
      'Antes de comprar um carro usado',
      'Após realizar manutenções'
    ],
    averageTime: '30-60 minutos',
    warranty: 'Diagnóstico sem garantia (identificação)',
    faqs: [
      {
        question: 'O scanner consegue identificar qualquer problema do carro?',
        answer: 'O scanner identifica problemas eletrônicos registrados nos módulos do veículo. Problemas mecânicos puros (desgaste de peças, folgas, vazamentos) precisam de inspeção visual. Combinamos diagnóstico eletrônico e mecânico para precisão.'
      },
      {
        question: 'Apagar a luz do painel resolve o problema?',
        answer: 'Não. Apagar a luz apenas limpa o código de falha. Se o problema persistir, a luz voltará a acender. O correto é identificar e corrigir a causa antes de limpar os códigos.'
      },
      {
        question: 'Vocês fazem diagnóstico de carros importados?',
        answer: 'Sim! Nosso scanner é multimarcas e atende BMW, Mercedes, Audi, Volkswagen, Volvo, Land Rover, Jeep, Toyota, Honda e todas as outras marcas vendidas no Brasil.'
      },
      {
        question: 'O diagnóstico é cobrado separadamente?',
        answer: 'Cobramos uma taxa pelo diagnóstico que é abatida caso o serviço de reparo seja realizado conosco. Assim você não paga duas vezes.'
      },
      {
        question: 'Quanto tempo leva o diagnóstico?',
        answer: 'Um diagnóstico básico leva de 30 a 60 minutos. Casos mais complexos com múltiplas falhas podem levar mais tempo para análise completa.'
      },
      {
        question: 'Vocês resetam a luz de óleo e manutenção?',
        answer: 'Sim, fazemos reset da luz de óleo, luz de manutenção e demais indicadores de serviço para todas as marcas após a realização do serviço correspondente.'
      }
    ]
  },
  {
    id: 5,
    slug: 'suspensao-e-freios',
    title: 'Suspensão e Freios',
    icon: 'ShieldAlert',
    shortDescription: 'Amortecedores, molas, pastilhas, discos e todo o sistema de suspensão e frenagem.',
    metaTitle: 'Suspensão e Freios em Curitiba | Amortecedores, Pastilhas | Carplus Portão',
    metaDescription: 'Suspensão e freios no Portão, Curitiba. Amortecedores Monroe, Cofap, Kayaba. Pastilhas e discos Fras-le, Bosch. Troca e reparo com garantia. Orçamento grátis.',
    keywords: ['suspensao curitiba', 'amortecedor curitiba', 'freios curitiba', 'pastilha freio curitiba', 'troca amortecedor curitiba', 'disco freio curitiba', 'suspensao portão'],
    heroDescription: 'A suspensão e os freios são sistemas críticos para sua segurança. Na Carplus realizamos diagnóstico completo e reparo de amortecedores, molas, buchas, pivôs, pastilhas, discos e todo o sistema.',
    fullDescription: [
      'A suspensão é responsável pelo conforto de rodagem e pela estabilidade do veículo. Com o tempo, componentes como amortecedores, molas, buchas e pivôs se desgastam, comprometendo a segurança e o conforto. Já o sistema de freios precisa de atenção constante, pois é sua última linha de defesa.',
      'Na Carplus, realizamos diagnóstico completo de suspensão e freios antes de qualquer orçamento. Verificamos o estado de todos os componentes e indicamos apenas o que realmente precisa ser trocado, com transparência total.',
      'Trabalhamos com as melhores marcas do mercado: amortecedores Monroe, Cofap e Kayaba; pastilhas e discos Fras-le, Cobreq e Bosch; kits de reparo originais e paralelos de qualidade. Todas as peças têm garantia.',
      'Nossos técnicos são especializados em suspensão e freios de veículos nacionais e importados. Após o serviço, recomendamos sempre o alinhamento para garantir o correto funcionamento do sistema.'
    ],
    benefits: [
      'Diagnóstico gratuito antes do orçamento',
      'Amortecedores Monroe, Cofap, Kayaba',
      'Pastilhas e discos Fras-le, Bosch, Cobreq',
      'Molas originais e esportivas',
      'Pivôs, terminais, bandejas, buchas',
      'Cilindro mestre e auxiliares de freio',
      'Flexíveis e tubulações de freio',
      'Garantia em peças e mão de obra'
    ],
    includedItems: [
      'Diagnóstico visual e em elevador',
      'Teste de componentes da suspensão',
      'Verificação de vazamentos nos amortecedores',
      'Medição das pastilhas e discos',
      'Orçamento detalhado por escrito',
      'Alinhamento após serviços de suspensão'
    ],
    whenYouNeed: [
      'Carro "afundando" em buracos e lombadas',
      'Barulho de batidas na suspensão',
      'Vazamento de óleo nos amortecedores',
      'Pneus com desgaste irregular',
      'Freio chiando ou rangendo',
      'Pedal de freio baixo ou esponjoso',
      'Vibração ao frear',
      'Carro puxando ao frear'
    ],
    averageTime: '2-4 horas',
    warranty: '12 meses ou 20.000 km',
    faqs: [
      {
        question: 'Com que frequência devo trocar os amortecedores?',
        answer: 'Geralmente entre 50.000 e 80.000 km, mas depende das condições de uso e qualidade das ruas. Sinais de desgaste incluem vazamento de óleo, barulhos e perda de estabilidade. Recomendamos verificação a cada 30.000 km.'
      },
      {
        question: 'Posso trocar apenas os amortecedores dianteiros?',
        answer: 'Sim, mas recomendamos trocar aos pares (os dois dianteiros ou os dois traseiros) para manter o equilíbrio do veículo. Se um lado está ruim, o outro geralmente está próximo do fim também.'
      },
      {
        question: 'Qual a diferença entre amortecedor a gás e a óleo?',
        answer: 'O amortecedor a gás (pressurizado) oferece resposta mais rápida e melhor controle, ideal para quem busca performance. O amortecedor a óleo é mais macio, priorizando conforto. Ambos funcionam bem para uso normal.'
      },
      {
        question: 'Quando devo trocar as pastilhas de freio?',
        answer: 'Quando a espessura da pastilha estiver abaixo de 3mm. A maioria dos carros tem sensor que acende uma luz no painel. Sinais de desgaste incluem chiado ao frear e pedal mais baixo que o normal.'
      },
      {
        question: 'Preciso trocar os discos junto com as pastilhas?',
        answer: 'Nem sempre. Os discos duram mais que as pastilhas (geralmente 2 a 3 trocas de pastilhas). Verificamos a espessura e condição dos discos e recomendamos a troca apenas quando necessário.'
      },
      {
        question: 'Vocês fazem suspensão de carros rebaixados?',
        answer: 'Sim, trabalhamos com molas esportivas, kits de rosca e preparação de suspensão. Orientamos sobre altura mínima legal e ajustes necessários no sistema.'
      }
    ]
  },
  {
    id: 6,
    slug: 'ar-condicionado',
    title: 'Ar-Condicionado',
    icon: 'Snowflake',
    shortDescription: 'Higienização, carga de gás, reparo de compressor e manutenção completa do sistema.',
    metaTitle: 'Ar Condicionado Automotivo Curitiba | Carga de Gás, Higienização | Carplus Portão',
    metaDescription: 'Ar condicionado automotivo no Portão, Curitiba. Higienização com ozônio, carga de gás R134a e R1234yf, reparo de compressor. Elimina odores e bactérias. Orçamento grátis.',
    keywords: ['ar condicionado automotivo curitiba', 'carga gas ar condicionado curitiba', 'higienizacao ar carro curitiba', 'ar condicionado carro portão', 'reparo ar condicionado curitiba'],
    heroDescription: 'Mantenha o ar-condicionado do seu carro funcionando perfeitamente. Na Carplus realizamos higienização com ozônio, carga de gás, reparo de compressor e manutenção completa do sistema de climatização.',
    fullDescription: [
      'O ar-condicionado automotivo é essencial para o conforto, especialmente no verão curitibano. Além de refrigerar, ele filtra o ar que entra no veículo. Quando mal cuidado, pode se tornar foco de bactérias, fungos e mau cheiro.',
      'Na Carplus, oferecemos manutenção completa do sistema de ar-condicionado. A higienização com ozônio elimina 99,9% das bactérias, fungos e ácaros do sistema, acabando com odores desagradáveis. É um tratamento seguro e eficiente.',
      'Realizamos também carga de gás refrigerante (R134a e R1234yf) com equipamento específico que identifica vazamentos e garante a quantidade exata de gás. Gás insuficiente ou em excesso prejudica o funcionamento e pode danificar o compressor.',
      'Para problemas mais sérios, fazemos reparo e substituição de compressor, condensador, evaporador, válvula de expansão, filtro secador e demais componentes. Utilizamos peças de qualidade com garantia.'
    ],
    benefits: [
      'Higienização com ozônio (elimina 99,9% de bactérias)',
      'Carga de gás R134a e R1234yf',
      'Teste de vazamento com equipamento especial',
      'Reparo de compressor e componentes',
      'Troca de filtro de cabine',
      'Verificação de correias e tensores',
      'Atendemos todas as marcas',
      'Garantia em peças e serviços'
    ],
    includedItems: [
      'Teste completo do sistema de A/C',
      'Verificação de temperatura de saída',
      'Teste de vazamento de gás',
      'Verificação do compressor e correia',
      'Limpeza do filtro de cabine ou indicação de troca',
      'Orçamento detalhado para reparos'
    ],
    whenYouNeed: [
      'Ar-condicionado não gela ou gela pouco',
      'Mau cheiro ao ligar o A/C',
      'Barulho estranho ao ligar o ar',
      'Ar-condicionado liga e desliga sozinho',
      'Embaçamento excessivo dos vidros',
      'Filtro de cabine com mais de 1 ano',
      'Antes do verão (manutenção preventiva)',
      'Ar saindo fraco pelas saídas'
    ],
    averageTime: '1-3 horas',
    warranty: '90 dias (carga de gás) / 12 meses (peças)',
    faqs: [
      {
        question: 'De quanto em quanto tempo devo fazer carga de gás?',
        answer: 'O gás não é consumido normalmente. Se precisa recarregar frequentemente, há vazamento no sistema. Em condições normais, uma carga dura anos. Recomendamos verificação anual preventiva.'
      },
      {
        question: 'A higienização elimina o mau cheiro do ar?',
        answer: 'Sim! A higienização com ozônio elimina bactérias, fungos e ácaros que causam o mau cheiro. O ozônio penetra em todo o sistema, incluindo o evaporador, onde esses micro-organismos se acumulam.'
      },
      {
        question: 'Qual a diferença entre R134a e R1234yf?',
        answer: 'São tipos diferentes de gás refrigerante. O R134a é usado na maioria dos carros até 2015. O R1234yf é mais ecológico e usado em carros mais novos, especialmente europeus. Cada sistema usa um tipo específico.'
      },
      {
        question: 'O ar-condicionado aumenta o consumo de combustível?',
        answer: 'Sim, em média de 5% a 15%, pois o compressor consome energia do motor. Um sistema em bom estado consome menos. Recomendamos desligar o A/C em subidas fortes se o carro for pouco potente.'
      },
      {
        question: 'Quando devo trocar o filtro de cabine?',
        answer: 'Recomendamos trocar a cada 12 meses ou 15.000 km. Em cidades com muito trânsito ou poluição, pode ser necessário trocar antes. Filtro sujo reduz o fluxo de ar e a eficiência do sistema.'
      },
      {
        question: 'Meu ar-condicionado faz barulho, o que pode ser?',
        answer: 'Pode ser correia do compressor desgastada, rolamento do compressor com problema, ou objetos no ventilador interno. Recomendamos diagnóstico para identificar a causa exata antes do reparo.'
      }
    ]
  },
  {
    id: 7,
    slug: 'manutencao-motor',
    title: 'Manutenção Motor',
    icon: 'Wrench',
    shortDescription: 'Manutenção preventiva e corretiva. Revisão de fábrica, injeção eletrônica e reparos gerais.',
    metaTitle: 'Mecânica de Motor Curitiba | Revisão, Reparo Motor | Carplus Portão',
    metaDescription: 'Mecânica de motor no Portão, Curitiba. Revisão de fábrica, manutenção preventiva, reparo de motor, injeção eletrônica. Nacionais e importados. Orçamento grátis.',
    keywords: ['mecanica motor curitiba', 'revisao motor curitiba', 'reparo motor curitiba', 'mecanico portão curitiba', 'oficina mecanica curitiba', 'injecao eletronica curitiba'],
    heroDescription: 'Seu motor merece cuidado especializado. Na Carplus realizamos manutenção preventiva, revisões de fábrica e reparos completos de motor para veículos nacionais e importados.',
    fullDescription: [
      'O motor é o coração do seu veículo. Mantê-lo em perfeitas condições garante desempenho, economia de combustível e longa vida útil. Na Carplus, oferecemos desde a manutenção preventiva até reparos complexos de motor.',
      'Realizamos revisões seguindo o manual do fabricante, substituindo peças conforme a quilometragem: óleo, filtros, velas, cabos, correias, fluidos e demais itens. Isso mantém a garantia de fábrica e evita problemas futuros.',
      'Para problemas existentes, fazemos diagnóstico completo com scanner e testes práticos. Identificamos a causa exata antes de qualquer reparo. Trabalhamos com peças originais e paralelas de qualidade, sempre com transparência no orçamento.',
      'Nossa equipe é especializada em motores de todas as marcas, incluindo importados. Realizamos desde ajustes simples até retíficas completas, cabeçotes, juntas, anéis, pistões e muito mais.'
    ],
    benefits: [
      'Revisão conforme manual do fabricante',
      'Manutenção preventiva programada',
      'Diagnóstico eletrônico completo',
      'Reparo de motor e componentes',
      'Injeção eletrônica e sensores',
      'Troca de correias e tensores',
      'Nacionais e importados',
      'Garantia em peças e serviços'
    ],
    includedItems: [
      'Diagnóstico com scanner automotivo',
      'Verificação de todos os fluidos',
      'Teste de compressão (quando necessário)',
      'Verificação de vazamentos',
      'Orçamento detalhado por escrito',
      'Acompanhamento do serviço'
    ],
    whenYouNeed: [
      'Luz de injeção acesa no painel',
      'Motor falhando ou engasgando',
      'Consumo excessivo de combustível',
      'Fumaça saindo do escapamento',
      'Barulhos estranhos no motor',
      'Perda de força ou potência',
      'Vazamento de óleo ou fluidos',
      'Revisão por quilometragem'
    ],
    averageTime: '2-8 horas (conforme serviço)',
    warranty: '12 meses ou 20.000 km',
    faqs: [
      {
        question: 'Qual a diferença entre manutenção preventiva e corretiva?',
        answer: 'A manutenção preventiva é feita antes de problemas aparecerem, seguindo o manual do fabricante (revisões por km). A corretiva é feita para consertar problemas já existentes. A preventiva evita a corretiva e sai mais barata.'
      },
      {
        question: 'Vocês fazem revisão de fábrica?',
        answer: 'Sim! Realizamos revisões seguindo exatamente o manual do fabricante, substituindo todas as peças indicadas para cada quilometragem. Isso mantém o histórico do veículo e pode preservar a garantia.'
      },
      {
        question: 'O que significa a luz de injeção acesa?',
        answer: 'A luz de injeção (check engine) indica que o sistema eletrônico detectou uma falha. Pode ser algo simples como sensor de oxigênio ou complexo como problema no motor. Diagnóstico com scanner identifica a causa exata.'
      },
      {
        question: 'Fumaça branca no escapamento é grave?',
        answer: 'Pode ser. Fumaça branca em excesso pode indicar problema na junta do cabeçote ou entrada de água no motor. Fumaça leve ao ligar o carro frio é normal. Recomendamos avaliação se persistir.'
      },
      {
        question: 'Vocês fazem retífica de motor?',
        answer: 'Realizamos serviços de cabeçote e reparos de motor. Para retífica completa de bloco, encaminhamos para retificadoras parceiras especializadas e montamos o motor aqui.'
      },
      {
        question: 'Quanto custa uma revisão de 40.000 km?',
        answer: 'O valor varia conforme o modelo do veículo e itens a serem substituídos. Entre em contato pelo WhatsApp (41) 3082-7282 informando seu carro que enviamos orçamento detalhado.'
      }
    ]
  },
  {
    id: 8,
    slug: 'conserto-de-rodas',
    title: 'Conserto de Rodas',
    icon: 'Hammer',
    shortDescription: 'Reparo de rodas amassadas, trincadas ou deformadas. Liga leve e aço.',
    metaTitle: 'Conserto de Rodas em Curitiba | Roda Amassada, Liga Leve | Carplus Portão',
    metaDescription: 'Conserto de rodas no Portão, Curitiba. Reparo de rodas amassadas, trincadas e deformadas. Rodas de liga leve e aço. Recuperação da geometria original. Orçamento grátis.',
    keywords: ['conserto roda curitiba', 'roda amassada curitiba', 'reparo roda liga leve curitiba', 'consertar roda curitiba', 'roda torta curitiba', 'desamassar roda curitiba'],
    heroDescription: 'Bateu a roda em um buraco? Não precisa trocar! Na Carplus consertamos rodas de liga leve e aço, recuperando a geometria original e eliminando vazamentos.',
    fullDescription: [
      'Buracos, guias e obstáculos nas ruas de Curitiba são inimigos das suas rodas. Uma pancada forte pode amassar, trincar ou deformar a roda, causando vazamento de ar, vibração no volante e desgaste irregular dos pneus.',
      'Na Carplus, realizamos conserto de rodas com equipamento especializado de martelinho. Recuperamos a geometria original da roda sem comprometer sua estrutura. O processo é muito mais econômico que trocar a roda por uma nova.',
      'Trabalhamos com rodas de liga leve (alumínio) e rodas de aço (ferro). Após o reparo, a roda é testada no balanceamento para garantir que está perfeitamente redonda. Consertamos também rodas com pequenas trincas.',
      'Para rodas muito danificadas que não podem ser consertadas, oferecemos também venda de rodas novas e usadas em bom estado.'
    ],
    benefits: [
      'Reparo de rodas de liga leve e aço',
      'Equipamento especializado de martelinho',
      'Recuperação da geometria original',
      'Eliminação de vazamentos',
      'Balanceamento após o reparo',
      'Muito mais econômico que trocar a roda',
      'Serviço rápido: 1-2 horas',
      'Avaliação gratuita'
    ],
    includedItems: [
      'Avaliação do dano na roda',
      'Desmontagem do pneu',
      'Reparo com martelinho especializado',
      'Teste de empenamento',
      'Remontagem e balanceamento',
      'Garantia contra vazamento'
    ],
    whenYouNeed: [
      'Roda amassada por buraco ou guia',
      'Vazamento de ar pelo aro',
      'Vibração no volante acima de 80 km/h',
      'Roda visivelmente torta ou empenada',
      'Pneu perdendo pressão sem furo',
      'Após pancada forte na roda'
    ],
    averageTime: '1-2 horas',
    warranty: '6 meses contra vazamento',
    faqs: [
      {
        question: 'Toda roda amassada pode ser consertada?',
        answer: 'A maioria sim. Rodas com pequenas e médias deformações são facilmente reparadas. Rodas com trincas grandes, rachaduras profundas ou danos estruturais severos podem não ser seguras para reparo.'
      },
      {
        question: 'O conserto enfraquece a roda?',
        answer: 'Quando feito corretamente com equipamento adequado, o conserto não enfraquece a roda. Trabalhamos apenas na área afetada, sem aplicar calor excessivo que poderia comprometer o material.'
      },
      {
        question: 'Quanto custa consertar uma roda?',
        answer: 'O valor depende do tamanho do dano e tipo de roda. Geralmente é muito mais econômico que comprar uma roda nova. Entre em contato para avaliação gratuita.'
      },
      {
        question: 'Vocês consertam rodas de motos?',
        answer: 'Nosso foco é rodas de carros. Para rodas de motos, recomendamos oficinas especializadas em motocicletas.'
      },
      {
        question: 'A roda fica igual a nova após o conserto?',
        answer: 'Funcionalmente sim, a roda fica redonda e sem vazamentos. Visualmente, dependendo do dano, pode ficar uma pequena marca. Para rodas com acabamento especial, avaliamos caso a caso.'
      },
      {
        question: 'Vocês fazem repintura de rodas?',
        answer: 'Não realizamos pintura de rodas. Para esse serviço, indicamos empresas parceiras especializadas em acabamento de rodas.'
      }
    ]
  },
  {
    id: 9,
    slug: 'correia-dentada',
    title: 'Correia Dentada',
    icon: 'Link',
    shortDescription: 'Troca preventiva de correia dentada com peças originais e garantia.',
    metaTitle: 'Troca de Correia Dentada Curitiba | Kit Completo | Carplus Portão',
    metaDescription: 'Troca de correia dentada no Portão, Curitiba. Kit completo com tensor e bomba d\'água. Peças originais Gates, Continental, Dayco. Evite danos graves ao motor.',
    keywords: ['correia dentada curitiba', 'troca correia dentada curitiba', 'kit correia dentada curitiba', 'correia motor curitiba', 'tensor correia curitiba', 'correia sincronizadora curitiba'],
    heroDescription: 'A correia dentada é uma peça crítica do motor. Sua ruptura pode causar danos gravíssimos e custos altíssimos de reparo. Na Carplus realizamos a troca preventiva com peças de qualidade.',
    fullDescription: [
      'A correia dentada (ou correia sincronizadora) é responsável por sincronizar o movimento entre o virabrequim e o comando de válvulas do motor. Se ela romper com o motor funcionando, os pistões podem colidir com as válvulas, causando danos severos.',
      'O reparo de um motor com válvulas tortas pode custar mais de R$ 5.000 em muitos casos. Por isso, a troca preventiva da correia dentada conforme o manual do fabricante é fundamental. Geralmente recomenda-se trocar entre 50.000 e 100.000 km.',
      'Na Carplus, utilizamos kits de correia dentada de alta qualidade das marcas Gates, Continental e Dayco. O kit inclui a correia, tensor(es) e, quando recomendado, a bomba d\'água (que também é movida pela correia).',
      'Nossos técnicos são experientes na troca de correia de todos os motores, incluindo importados. Seguimos rigorosamente o procedimento do fabricante para garantir o sincronismo perfeito do motor.'
    ],
    benefits: [
      'Kit completo: correia, tensor e bomba d\'água',
      'Peças Gates, Continental, Dayco',
      'Técnicos experientes em todos os motores',
      'Procedimento conforme fabricante',
      'Verificação de polias e componentes',
      'Troca preventiva evita danos graves',
      'Garantia de 12 meses',
      'Orçamento detalhado antes do serviço'
    ],
    includedItems: [
      'Correia dentada de alta qualidade',
      'Tensor(es) da correia',
      'Bomba d\'água (quando recomendado)',
      'Verificação e limpeza das polias',
      'Líquido de arrefecimento (se necessário)',
      'Teste de funcionamento do motor'
    ],
    whenYouNeed: [
      'Quilometragem recomendada pelo fabricante atingida',
      'Correia com mais de 5 anos (mesmo com baixa km)',
      'Chiado vindo da região frontal do motor',
      'Vazamento de óleo na região da correia',
      'Ao comprar carro usado sem histórico',
      'Recomendação após revisão'
    ],
    averageTime: '3-6 horas',
    warranty: '12 meses ou 20.000 km',
    faqs: [
      {
        question: 'Com quantos km devo trocar a correia dentada?',
        answer: 'Varia conforme o fabricante, geralmente entre 50.000 e 100.000 km. Alguns motores modernos usam corrente, que não precisa de troca regular. Consulte o manual do seu veículo ou pergunte à nossa equipe.'
      },
      {
        question: 'Por que trocar a bomba d\'água junto com a correia?',
        answer: 'Em muitos motores, a bomba d\'água é movida pela correia dentada. Se ela travar ou vazar após a troca da correia, será necessário desmontar tudo novamente. Trocar junto evita trabalho dobrado e economiza.'
      },
      {
        question: 'Meu carro tem corrente, preciso trocar?',
        answer: 'Correntes de comando são mais duráveis que correias e geralmente não têm intervalo de troca definido. Porém, se estiver fazendo barulho (estralo ou chiado), pode precisar de substituição.'
      },
      {
        question: 'Quanto custa trocar a correia dentada?',
        answer: 'O valor varia muito conforme o veículo (de R$ 600 a R$ 2.500+). Entre em contato informando seu carro para orçamento preciso. Lembre-se: é muito mais barato que consertar o motor.'
      },
      {
        question: 'O que acontece se a correia arrebentar?',
        answer: 'Na maioria dos motores, as válvulas batem nos pistões causando empenamento. O reparo envolve retífica do cabeçote, troca de válvulas e pode chegar a milhares de reais. Por isso a troca preventiva é essencial.'
      },
      {
        question: 'Quanto tempo leva a troca da correia dentada?',
        answer: 'De 3 a 6 horas, dependendo do modelo. Alguns veículos exigem remoção de várias peças para acessar a correia. Recomendamos deixar o carro e buscar depois.'
      }
    ]
  }
];

// Função para buscar serviço por slug
export function getServiceBySlug(slug: string): ServiceData | undefined {
  return SERVICES_DATA.find(service => service.slug === slug);
}
