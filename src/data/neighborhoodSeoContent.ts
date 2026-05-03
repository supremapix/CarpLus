/**
 * Conteúdo SEO semântico otimizado para cada bairro/localidade
 * Frases de busca focadas em pneus e serviços automotivos em Curitiba
 */

export interface NeighborhoodSeoContent {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  heroSubtitle: string;
  introText: string;
  localContext: string;
  servicesHighlight: string[];
  searchPhrases: string[];
  nearbyLandmarks: string[];
  trafficTips: string;
  testimonialContext: string;
  whyChooseUs: string[];
  localBenefits: string;
}

// Conteúdo específico para cada bairro
export const NEIGHBORHOOD_SEO_CONTENT: Record<string, NeighborhoodSeoContent> = {
  // ══════════════════════════════════════
  // ZONA SUL - MUITO PRÓXIMOS (até 10 min)
  // ══════════════════════════════════════
  'portao': {
    slug: 'portao',
    name: 'Portão',
    metaTitle: 'Loja de Pneus no Portão Curitiba | Carplus Auto Center - 2 min',
    metaDescription: 'Loja de pneus no Portão, Curitiba. Pneus Pirelli, Michelin, Goodyear com montagem inclusa. Alinhamento 3D, balanceamento e troca de óleo. Estamos na sua porta!',
    h1: 'Pneus e Oficina no Portão',
    heroSubtitle: 'A melhor loja de pneus do seu bairro, a apenas 2 minutos de você!',
    introText: 'Moradores do Portão têm a vantagem de contar com a Carplus Auto Center literalmente a poucos passos de casa. Localizada na Av. Arthur da Silva Bernardes, 1323, somos referência em pneus e serviços automotivos na região sul de Curitiba há mais de 10 anos.',
    localContext: 'O Portão é um dos bairros mais tradicionais de Curitiba, conhecido pelo comércio forte e pela proximidade com o Shopping Palladium. Quem mora aqui sabe que praticidade é essencial — e é exatamente isso que oferecemos: serviço de qualidade sem precisar atravessar a cidade.',
    servicesHighlight: [
      'Troca de pneus com montagem e balanceamento inclusos',
      'Alinhamento computadorizado 3D de alta precisão',
      'Revisão completa para carros do dia a dia',
      'Diagnóstico eletrônico com scanner automotivo',
      'Troca de óleo sintético e mineral',
      'Manutenção de suspensão e freios'
    ],
    searchPhrases: [
      'loja de pneus no Portão',
      'pneus baratos Portão Curitiba',
      'oficina mecânica Portão',
      'alinhamento Portão',
      'troca de óleo Portão Curitiba',
      'borracharia Portão',
      'pneu Pirelli Portão',
      'balanceamento perto do Palladium'
    ],
    nearbyLandmarks: [
      'Shopping Palladium (3 min)',
      'Supermercado Condor Portão',
      'Terminal do Portão',
      'Colégio Estadual do Paraná',
      'Praça do Portão'
    ],
    trafficTips: 'A Carplus fica na Av. Arthur da Silva Bernardes, uma das principais vias do bairro. Acesso fácil tanto para quem vem da Av. República Argentina quanto da Av. Presidente Kennedy.',
    testimonialContext: 'vizinhos do Portão',
    whyChooseUs: [
      'Somos do bairro — conhecemos as necessidades dos moradores',
      'Estacionamento próprio amplo',
      'Atendimento sem agendamento',
      'Preço de atacado em pneus das melhores marcas'
    ],
    localBenefits: 'Você pode deixar o carro para serviço e resolver outras coisas no comércio local enquanto esperamos. Ou simplesmente tomar um café no Palladium enquanto seu carro fica pronto!'
  },

  'agua-verde': {
    slug: 'agua-verde',
    name: 'Água Verde',
    metaTitle: 'Loja de Pneus Água Verde Curitiba | Carplus - 5 min',
    metaDescription: 'Pneus em Curitiba para moradores do Água Verde. Pirelli, Michelin, Goodyear. Alinhamento 3D e balanceamento. A 5 minutos pela República Argentina.',
    h1: 'Pneus para Moradores do Água Verde',
    heroSubtitle: 'Só 5 minutos pela República Argentina até a melhor loja de pneus de Curitiba',
    introText: 'O Água Verde é conhecido pela qualidade de vida e pelo perfil exigente de seus moradores. Para quem preza por segurança e busca os melhores produtos para seu veículo, a Carplus Auto Center está a apenas 5 minutos de distância.',
    localContext: 'Um dos bairros mais nobres e arborizados de Curitiba, o Água Verde reúne famílias que valorizam conforto e praticidade. Com fácil acesso pela Avenida República Argentina, chegar à Carplus é rápido e sem complicações.',
    servicesHighlight: [
      'Pneus premium para sedans e SUVs do Água Verde',
      'Alinhamento 3D para veículos executivos',
      'Troca de óleo com lubrificantes sintéticos',
      'Revisão pré-viagem com checklist completo',
      'Manutenção de ar-condicionado automotivo'
    ],
    searchPhrases: [
      'loja de pneus Água Verde',
      'pneus perto do Água Verde Curitiba',
      'oficina mecânica Água Verde',
      'alinhamento Água Verde',
      'troca de pneu Água Verde',
      'pneus Michelin Água Verde',
      'mecânica automotiva Água Verde Curitiba'
    ],
    nearbyLandmarks: [
      'Praça do Japão',
      'Shopping Curitiba',
      'Parque Barigui',
      'Hospital Nossa Senhora das Graças'
    ],
    trafficTips: 'Siga pela Av. República Argentina sentido Portão. Em aproximadamente 5 minutos você chega na Carplus, sem precisar pegar vias muito movimentadas.',
    testimonialContext: 'moradores do Água Verde',
    whyChooseUs: [
      'Variedade de pneus para SUVs e sedans executivos',
      'Atendimento personalizado para quem valoriza qualidade',
      'Ambiente climatizado para espera confortável',
      'Parcelamento em até 10x sem juros'
    ],
    localBenefits: 'Moradores do Água Verde podem trazer o carro pela manhã e buscar no final do dia, ou esperar no local com Wi-Fi gratuito e café.'
  },

  'guaira': {
    slug: 'guaira',
    name: 'Guaíra',
    metaTitle: 'Pneus no Guaíra Curitiba | Oficina Carplus - 5 min',
    metaDescription: 'Loja de pneus para moradores do Guaíra. Pneus Pirelli, Michelin e Goodyear. Alinhamento, balanceamento e serviços automotivos a 5 min de você.',
    h1: 'Oficina e Loja de Pneus para o Guaíra',
    heroSubtitle: 'Moradores do Guaíra: sua oficina de confiança está a 5 minutos',
    introText: 'O Guaíra é um bairro tradicional de Curitiba, com forte presença comercial e residencial. Para quem mora aqui e precisa de pneus novos ou serviços automotivos, a Carplus oferece tudo em um só lugar, pertinho de casa.',
    localContext: 'Vizinho do Portão e com acesso direto pela Rua Kennedy, o Guaíra tem moradores que valorizam praticidade e preço justo. Nossa loja atende exatamente esse perfil: serviço de qualidade sem complicação.',
    servicesHighlight: [
      'Pneus econômicos e premium para todos os bolsos',
      'Alinhamento computadorizado 3D',
      'Balanceamento de rodas',
      'Troca de óleo e filtros',
      'Revisão de suspensão e freios',
      'Diagnóstico eletrônico completo'
    ],
    searchPhrases: [
      'pneus Guaíra Curitiba',
      'loja de pneus perto do Guaíra',
      'oficina mecânica Guaíra',
      'borracharia Guaíra',
      'alinhamento Guaíra Curitiba',
      'troca de pneu Guaíra',
      'pneus baratos Guaíra'
    ],
    nearbyLandmarks: [
      'Mercado Municipal do Guaíra',
      'Terminal do Capão Raso',
      'Parque Barigui',
      'Shopping Palladium'
    ],
    trafficTips: 'Do Guaíra, siga pela Rua Kennedy até a Av. República Argentina. Vire à esquerda e em poucos metros estará na Av. Arthur da Silva Bernardes.',
    testimonialContext: 'vizinhos do Guaíra',
    whyChooseUs: [
      'Próximo ao Guaíra com fácil acesso',
      'Preços de atacado para pneus',
      'Montagem e balanceamento inclusos',
      'Garantia de fábrica em todos os pneus'
    ],
    localBenefits: 'Agende pelo WhatsApp e ganhe prioridade no atendimento. Moradores do Guaíra são nossos vizinhos e clientes frequentes!'
  },

  'parolin': {
    slug: 'parolin',
    name: 'Parolin',
    metaTitle: 'Loja de Pneus Parolin Curitiba | Carplus Auto Center - 8 min',
    metaDescription: 'Pneus e serviços automotivos para o Parolin, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D, troca de óleo. A 8 minutos pela Getúlio Vargas.',
    h1: 'Pneus e Oficina Mecânica para o Parolin',
    heroSubtitle: 'Do Parolin à Carplus em apenas 8 minutos pela Getúlio Vargas',
    introText: 'O Parolin, um dos bairros mais antigos de Curitiba, tem moradores que conhecem bem o valor de um serviço de qualidade. A Carplus atende a comunidade do Parolin com pneus das melhores marcas e serviços mecânicos completos.',
    localContext: 'Localizado próximo ao centro e com fácil acesso a diversas regiões de Curitiba, o Parolin é um bairro misto de residências e comércios. Quem mora aqui encontra na Carplus uma oficina completa sem precisar ir longe.',
    servicesHighlight: [
      'Pneus para carros populares e compactos',
      'Alinhamento 3D para veículos do dia a dia',
      'Troca de óleo com filtros de qualidade',
      'Revisão de freios e suspensão',
      'Serviço de ar-condicionado automotivo'
    ],
    searchPhrases: [
      'pneus Parolin Curitiba',
      'loja de pneus perto do Parolin',
      'oficina mecânica Parolin',
      'borracharia Parolin Curitiba',
      'alinhamento Parolin',
      'troca de pneu Parolin',
      'mecânico Parolin'
    ],
    nearbyLandmarks: [
      'Praça Zacarias',
      'Shopping Estação',
      'Rodoferroviária de Curitiba',
      'Centro Histórico'
    ],
    trafficTips: 'Siga pela Av. Getúlio Vargas em direção ao Portão. A Carplus fica na Av. Arthur da Silva Bernardes, com fácil acesso.',
    testimonialContext: 'moradores do Parolin',
    whyChooseUs: [
      'Trajeto rápido e sem trânsito pesado',
      'Opções econômicas e premium de pneus',
      'Atendimento rápido sem agendamento',
      'Pagamento parcelado em até 10x'
    ],
    localBenefits: 'Do Parolin você pode vir de carro ou até de ônibus — o Terminal do Portão fica próximo à nossa loja.'
  },

  'campo-comprido': {
    slug: 'campo-comprido',
    name: 'Campo Comprido',
    metaTitle: 'Pneus Campo Comprido Curitiba | Carplus - 8 min',
    metaDescription: 'Loja de pneus para Campo Comprido, Curitiba. Pneus para SUVs e sedans. Alinhamento 3D, balanceamento. A 8 min pela Eduardo Sprada.',
    h1: 'Pneus e Serviços para Campo Comprido',
    heroSubtitle: 'Campo Comprido está a apenas 8 minutos da melhor oficina de Curitiba',
    introText: 'O Campo Comprido é um bairro em expansão, com muitas famílias e veículos novos. Para quem precisa de pneus de qualidade ou serviços automotivos confiáveis, a Carplus oferece o melhor custo-benefício da região.',
    localContext: 'Com ruas amplas e fácil acesso pela Rua Eduardo Sprada, o Campo Comprido concentra moradores que valorizam praticidade. A Carplus atende esse público com pneus para SUVs, picapes e sedans de todas as marcas.',
    servicesHighlight: [
      'Pneus para SUVs e crossovers',
      'Pneus para picapes (Hilux, Ranger, S10)',
      'Alinhamento 3D para veículos altos',
      'Balanceamento de rodas grandes (17" a 22")',
      'Revisão completa pré-viagem'
    ],
    searchPhrases: [
      'pneus Campo Comprido',
      'loja de pneus Campo Comprido Curitiba',
      'oficina Campo Comprido',
      'pneus para SUV Campo Comprido',
      'alinhamento Campo Comprido',
      'troca de pneu Campo Comprido',
      'pneus Pirelli Scorpion Campo Comprido'
    ],
    nearbyLandmarks: [
      'Parque Barigui',
      'Shopping Barigui',
      'UTFPR - Campus Ecoville',
      'Hospital Marcelino Champagnat'
    ],
    trafficTips: 'Do Campo Comprido, siga pela Rua Eduardo Sprada até a Av. Affonso Camargo. O trajeto é rápido e com poucas semáforos.',
    testimonialContext: 'moradores do Campo Comprido',
    whyChooseUs: [
      'Especialistas em pneus para SUVs e picapes',
      'Estoque de aros grandes (18", 19", 20", 22")',
      'Atendimento técnico especializado',
      'Condições especiais para troca do jogo completo'
    ],
    localBenefits: 'Moradores do Campo Comprido podem aproveitar para fazer a revisão completa do veículo enquanto estão perto do Barigui.'
  },

  'novo-mundo': {
    slug: 'novo-mundo',
    name: 'Novo Mundo',
    metaTitle: 'Loja de Pneus Novo Mundo Curitiba | Carplus - 7 min',
    metaDescription: 'Pneus para moradores do Novo Mundo, Curitiba. Pirelli, Michelin, Goodyear. Oficina completa a 7 min pela Av. Brasília. Alinhamento 3D incluso.',
    h1: 'Pneus e Oficina para o Novo Mundo',
    heroSubtitle: 'Novo Mundo: sua oficina de confiança está a 7 minutos',
    introText: 'O Novo Mundo é um bairro consolidado de Curitiba, com forte comércio e moradores que conhecem bem a importância de manter o carro em dia. A Carplus está próxima para atender com qualidade e preço justo.',
    localContext: 'Localizado entre o Portão e o Capão Raso, o Novo Mundo tem acesso facilitado pela Av. Brasília. Em apenas 7 minutos você chega à Carplus para trocar pneus, fazer alinhamento ou revisão completa.',
    servicesHighlight: [
      'Pneus econômicos para carros populares',
      'Pneus Pirelli P400 Evo em estoque',
      'Alinhamento computadorizado 3D',
      'Balanceamento de rodas',
      'Troca de óleo e filtros',
      'Suspensão e freios'
    ],
    searchPhrases: [
      'pneus Novo Mundo Curitiba',
      'loja de pneus Novo Mundo',
      'oficina mecânica Novo Mundo',
      'borracharia Novo Mundo',
      'alinhamento Novo Mundo Curitiba',
      'pneus baratos Novo Mundo',
      'troca de pneu Novo Mundo'
    ],
    nearbyLandmarks: [
      'Terminal Capão Raso',
      'Supermercado Condor Novo Mundo',
      'Shopping Palladium',
      'Parque Caiuá'
    ],
    trafficTips: 'Siga pela Av. Brasília em direção ao Portão. A Carplus fica na Av. Arthur da Silva Bernardes, próxima ao cruzamento principal.',
    testimonialContext: 'moradores do Novo Mundo',
    whyChooseUs: [
      'Preços competitivos em pneus',
      'Atendimento rápido e sem fila',
      'Montagem e balanceamento inclusos',
      'Garantia de fábrica'
    ],
    localBenefits: 'Venha pela manhã e aproveite para resolver outras coisas no comércio do Portão enquanto seu carro fica pronto.'
  },

  // ══════════════════════════════════════
  // ZONA SUL - PRÓXIMOS (10-15 min)
  // ══════════════════════════════════════
  'fazendinha': {
    slug: 'fazendinha',
    name: 'Fazendinha',
    metaTitle: 'Pneus Fazendinha Curitiba | Carplus Auto Center - 10 min',
    metaDescription: 'Loja de pneus para Fazendinha, Curitiba. Pirelli, Michelin, Goodyear com instalação inclusa. Alinhamento 3D e troca de óleo a 10 min de você.',
    h1: 'Pneus e Oficina para a Fazendinha',
    heroSubtitle: 'Da Fazendinha à Carplus em 10 minutos pela João Dembinski',
    introText: 'A Fazendinha é um bairro residencial tradicional de Curitiba, com famílias que valorizam serviço de qualidade. A Carplus oferece pneus das melhores marcas com preço justo e atendimento diferenciado.',
    localContext: 'Com fácil acesso pela Rua João Dembinski, a Fazendinha está bem conectada ao Portão. São apenas 10 minutos até a Carplus, onde você encontra tudo para seu veículo.',
    servicesHighlight: [
      'Pneus para carros populares e familiares',
      'Alinhamento 3D de precisão',
      'Balanceamento computadorizado',
      'Troca de óleo com filtros',
      'Revisão de freios'
    ],
    searchPhrases: [
      'pneus Fazendinha Curitiba',
      'loja de pneus Fazendinha',
      'oficina mecânica Fazendinha',
      'alinhamento Fazendinha',
      'borracharia Fazendinha Curitiba'
    ],
    nearbyLandmarks: [
      'Terminal Fazendinha',
      'CIC',
      'Parque dos Tropeiros'
    ],
    trafficTips: 'Siga pela Rua João Dembinski até a Av. Winston Churchill, depois acesse a Av. República Argentina.',
    testimonialContext: 'moradores da Fazendinha',
    whyChooseUs: [
      'Trajeto rápido sem trânsito',
      'Preços de atacado',
      'Atendimento sem agendamento'
    ],
    localBenefits: 'Moradores da Fazendinha economizam tempo e dinheiro vindo até a Carplus no Portão.'
  },

  'capao-raso': {
    slug: 'capao-raso',
    name: 'Capão Raso',
    metaTitle: 'Pneus Capão Raso Curitiba | Carplus - 10 min',
    metaDescription: 'Loja de pneus Capão Raso, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D e balanceamento. A 10 min pela Winston Churchill.',
    h1: 'Pneus e Serviços Automotivos para o Capão Raso',
    heroSubtitle: 'Capão Raso: pneus de qualidade a 10 minutos de distância',
    introText: 'O Capão Raso é um dos bairros mais populosos da zona sul de Curitiba. Para atender essa comunidade exigente, a Carplus oferece pneus de todas as marcas e serviços automotivos completos.',
    localContext: 'Com o Terminal do Capão Raso como referência, o bairro tem fácil acesso ao Portão pela Av. Winston Churchill. A Carplus está pronta para receber moradores que buscam qualidade e economia.',
    servicesHighlight: [
      'Pneus econômicos e intermediários',
      'Alinhamento 3D para veículos leves',
      'Balanceamento de rodas',
      'Troca de óleo e revisão básica',
      'Suspensão e freios'
    ],
    searchPhrases: [
      'pneus Capão Raso',
      'loja de pneus Capão Raso Curitiba',
      'oficina Capão Raso',
      'alinhamento Capão Raso',
      'borracharia perto do Capão Raso',
      'pneus baratos Capão Raso',
      'mecânico Capão Raso'
    ],
    nearbyLandmarks: [
      'Terminal Capão Raso',
      'Supermercado Festval',
      'UPA Capão Raso'
    ],
    trafficTips: 'Do Capão Raso, siga pela Av. Winston Churchill até a Av. República Argentina. A Carplus fica a poucos metros, na Arthur da Silva Bernardes.',
    testimonialContext: 'moradores do Capão Raso',
    whyChooseUs: [
      'Próximo ao Terminal do Capão Raso',
      'Preços competitivos',
      'Atendimento rápido'
    ],
    localBenefits: 'Venha de carro ou de ônibus — estamos pertinho do Terminal do Portão!'
  },

  'cic': {
    slug: 'cic',
    name: 'CIC',
    metaTitle: 'Pneus CIC Curitiba | Carplus Auto Center - 15 min',
    metaDescription: 'Loja de pneus para o CIC, Curitiba. Pneus para carros, vans e utilitários. Alinhamento 3D e serviços mecânicos. Atendemos frotas empresariais.',
    h1: 'Pneus e Oficina para o CIC (Cidade Industrial)',
    heroSubtitle: 'CIC: pneus e serviços para frotas e veículos particulares',
    introText: 'A Cidade Industrial de Curitiba (CIC) concentra empresas e trabalhadores que dependem de seus veículos todos os dias. A Carplus oferece pneus para carros, vans e utilitários leves, além de condições especiais para frotas.',
    localContext: 'O CIC é o maior bairro de Curitiba em extensão e abriga centenas de empresas. Para esse público, a Carplus oferece atendimento ágil, preços de atacado e suporte para gestão de frotas.',
    servicesHighlight: [
      'Pneus para vans e utilitários',
      'Atendimento para frotas empresariais',
      'Alinhamento 3D para veículos de carga leve',
      'Troca de óleo e revisão preventiva',
      'Manutenção de suspensão e freios'
    ],
    searchPhrases: [
      'pneus CIC Curitiba',
      'loja de pneus CIC',
      'pneus para van CIC',
      'oficina mecânica CIC',
      'pneus para frota CIC',
      'borracharia CIC Curitiba',
      'alinhamento CIC'
    ],
    nearbyLandmarks: [
      'Parque dos Tropeiros',
      'Via rápida Linha Verde',
      'Rodovia do Xisto'
    ],
    trafficTips: 'Do CIC, siga pela Rodovia do Xisto até a Av. República Argentina, ou acesse pela Linha Verde.',
    testimonialContext: 'trabalhadores e empresas do CIC',
    whyChooseUs: [
      'Condições especiais para frotas',
      'Pneus para vans e utilitários',
      'Nota fiscal para pessoa jurídica',
      'Atendimento prioritário para empresas'
    ],
    localBenefits: 'Empresas do CIC podem fechar contratos de manutenção preventiva com a Carplus. Ligue: (41) 3082-7282.'
  },

  'pinheirinho': {
    slug: 'pinheirinho',
    name: 'Pinheirinho',
    metaTitle: 'Pneus Pinheirinho Curitiba | Carplus - 15 min',
    metaDescription: 'Loja de pneus para o Pinheirinho, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D e balanceamento. A 15 min pela Linha Verde.',
    h1: 'Pneus e Oficina para o Pinheirinho',
    heroSubtitle: 'Do Pinheirinho à Carplus em 15 minutos pela Linha Verde',
    introText: 'O Pinheirinho é um dos bairros mais populosos de Curitiba, com forte comércio local. Para quem precisa de pneus novos ou serviços mecânicos, a Carplus oferece qualidade com preço justo.',
    localContext: 'Com acesso facilitado pela Linha Verde, o trajeto do Pinheirinho ao Portão é rápido e sem complicações. A Carplus está pronta para atender com agilidade.',
    servicesHighlight: [
      'Pneus econômicos para carros populares',
      'Alinhamento 3D',
      'Balanceamento',
      'Troca de óleo',
      'Freios e suspensão'
    ],
    searchPhrases: [
      'pneus Pinheirinho Curitiba',
      'loja de pneus Pinheirinho',
      'oficina Pinheirinho',
      'alinhamento Pinheirinho',
      'borracharia Pinheirinho'
    ],
    nearbyLandmarks: [
      'Terminal Pinheirinho',
      'Shopping Total',
      'Linha Verde'
    ],
    trafficTips: 'Siga pela Linha Verde sentido centro até a saída para o Portão.',
    testimonialContext: 'moradores do Pinheirinho',
    whyChooseUs: [
      'Acesso rápido pela Linha Verde',
      'Preços de atacado',
      'Atendimento sem agendamento'
    ],
    localBenefits: 'O trajeto pela Linha Verde é rápido e sem semáforos. Vale a pena vir até a Carplus!'
  },

  // ══════════════════════════════════════
  // ZONA CENTRO
  // ══════════════════════════════════════
  'batel': {
    slug: 'batel',
    name: 'Batel',
    metaTitle: 'Pneus Batel Curitiba | Carplus - Pneus Premium - 8 min',
    metaDescription: 'Pneus premium para o Batel, Curitiba. Pirelli P Zero, Michelin Pilot Sport, Continental. Alinhamento 3D. A 8 min pela Sete de Setembro.',
    h1: 'Pneus Premium para Moradores do Batel',
    heroSubtitle: 'Batel: pneus de alta performance para quem exige o melhor',
    introText: 'O Batel é referência em sofisticação em Curitiba. Para moradores que dirigem veículos premium e esportivos, a Carplus oferece pneus das linhas mais exclusivas: Pirelli P Zero, Michelin Pilot Sport e Continental SportContact.',
    localContext: 'Um dos bairros mais nobres de Curitiba, o Batel concentra veículos de luxo e esportivos. A Carplus atende esse público exigente com pneus de alta performance e serviço técnico especializado.',
    servicesHighlight: [
      'Pneus Pirelli P Zero e Cinturato',
      'Pneus Michelin Pilot Sport 4',
      'Pneus Continental SportContact',
      'Alinhamento 3D de precisão para importados',
      'Balanceamento para rodas de liga leve',
      'Run Flat em estoque'
    ],
    searchPhrases: [
      'pneus Batel Curitiba',
      'pneus premium Batel',
      'loja de pneus Batel',
      'pneus para BMW Batel',
      'pneus Michelin Batel',
      'pneus esportivos Batel',
      'alinhamento Batel Curitiba',
      'pneus Run Flat Batel'
    ],
    nearbyLandmarks: [
      'Shopping Pátio Batel',
      'Oscar Niemeyer',
      'Praça do Japão',
      'Shopping Curitiba'
    ],
    trafficTips: 'Do Batel, siga pela Av. Sete de Setembro até a Av. República Argentina. A Carplus fica na Arthur da Silva Bernardes, Portão.',
    testimonialContext: 'moradores do Batel',
    whyChooseUs: [
      'Especialistas em pneus para veículos premium',
      'Estoque de Run Flat e alta performance',
      'Técnicos treinados para carros importados',
      'Ambiente confortável para espera'
    ],
    localBenefits: 'Traga seu BMW, Mercedes ou Audi para a Carplus. Temos os pneus certos e o serviço que seu carro merece.'
  },

  'centro': {
    slug: 'centro',
    name: 'Centro',
    metaTitle: 'Pneus Centro de Curitiba | Carplus - 12 min',
    metaDescription: 'Loja de pneus perto do Centro de Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D e serviços automotivos. A 12 min pela Visconde de Guarapuava.',
    h1: 'Pneus e Oficina para o Centro de Curitiba',
    heroSubtitle: 'Do Centro ao Portão em 12 minutos — fuja do trânsito, venha para a Carplus',
    introText: 'Quem trabalha ou mora no Centro de Curitiba sabe que encontrar uma oficina de confiança pode ser um desafio. A Carplus está a apenas 12 minutos e oferece tudo que você precisa: pneus, alinhamento, balanceamento e revisão.',
    localContext: 'O Centro de Curitiba é movimentado e nem sempre tem estacionamento fácil. Na Carplus, você encontra estacionamento próprio, atendimento rápido e pode resolver tudo em uma só visita.',
    servicesHighlight: [
      'Pneus para todos os modelos',
      'Alinhamento 3D computadorizado',
      'Balanceamento de rodas',
      'Troca de óleo expressa',
      'Diagnóstico eletrônico'
    ],
    searchPhrases: [
      'pneus Centro Curitiba',
      'loja de pneus perto do Centro',
      'oficina Centro Curitiba',
      'alinhamento Centro',
      'borracharia Centro Curitiba',
      'troca de pneu Centro'
    ],
    nearbyLandmarks: [
      'Rua XV de Novembro',
      'Praça Tiradentes',
      'Shopping Estação',
      'Mercado Municipal'
    ],
    trafficTips: 'Siga pela Av. Visconde de Guarapuava até a Av. República Argentina. O trajeto é tranquilo fora do horário de pico.',
    testimonialContext: 'trabalhadores do Centro',
    whyChooseUs: [
      'Estacionamento próprio',
      'Fora da zona de estacionamento pago',
      'Atendimento rápido'
    ],
    localBenefits: 'Fuja do trânsito e dos estacionamentos caros do Centro. Na Carplus você estaciona de graça e resolve tudo!'
  },

  'reboucas': {
    slug: 'reboucas',
    name: 'Rebouças',
    metaTitle: 'Pneus Rebouças Curitiba | Carplus - 10 min',
    metaDescription: 'Loja de pneus para o Rebouças, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D e balanceamento. A 10 min pela Westphalen.',
    h1: 'Pneus e Oficina para o Rebouças',
    heroSubtitle: 'Do Rebouças à Carplus em 10 minutos',
    introText: 'O Rebouças é um bairro central de Curitiba, com fácil acesso ao Portão. Moradores e trabalhadores da região encontram na Carplus pneus de qualidade e serviços automotivos completos.',
    localContext: 'Próximo ao Centro e com bom acesso pela Rua Westphalen, o Rebouças está bem posicionado para quem precisa de uma oficina de confiança sem ir muito longe.',
    servicesHighlight: [
      'Pneus para sedans e hatches',
      'Alinhamento 3D',
      'Balanceamento',
      'Troca de óleo',
      'Revisão completa'
    ],
    searchPhrases: [
      'pneus Rebouças Curitiba',
      'loja de pneus Rebouças',
      'oficina Rebouças',
      'alinhamento Rebouças',
      'borracharia Rebouças'
    ],
    nearbyLandmarks: [
      'Shopping Estação',
      'Rodoferroviária',
      'Batel',
      'Centro'
    ],
    trafficTips: 'Siga pela Rua Westphalen até a Av. Sete de Setembro, depois acesse a República Argentina.',
    testimonialContext: 'moradores do Rebouças',
    whyChooseUs: [
      'Localização estratégica',
      'Atendimento rápido',
      'Preços justos'
    ],
    localBenefits: 'Do Rebouças você chega rápido à Carplus e ainda foge do trânsito do Centro.'
  },

  'bigorrilho': {
    slug: 'bigorrilho',
    name: 'Bigorrilho',
    metaTitle: 'Pneus Bigorrilho Curitiba | Carplus - 10 min',
    metaDescription: 'Pneus para moradores do Bigorrilho, Curitiba. Pirelli, Michelin. Alinhamento 3D e balanceamento. A 10 min pela Padre Agostinho.',
    h1: 'Pneus e Serviços para o Bigorrilho',
    heroSubtitle: 'Bigorrilho: pneus de qualidade a 10 minutos de distância',
    introText: 'O Bigorrilho é um dos bairros mais valorizados de Curitiba, com moradores que prezam por qualidade em tudo. A Carplus oferece pneus premium e serviços de alto padrão para esse público exigente.',
    localContext: 'Vizinho do Batel e com fácil acesso pela Rua Padre Agostinho, o Bigorrilho está a poucos minutos da Carplus. Atendemos veículos de todas as marcas com o cuidado que você merece.',
    servicesHighlight: [
      'Pneus para SUVs e sedans executivos',
      'Alinhamento 3D de precisão',
      'Balanceamento computadorizado',
      'Troca de óleo sintético'
    ],
    searchPhrases: [
      'pneus Bigorrilho Curitiba',
      'loja de pneus Bigorrilho',
      'oficina Bigorrilho',
      'alinhamento Bigorrilho',
      'pneus Michelin Bigorrilho'
    ],
    nearbyLandmarks: [
      'Parque Barigui',
      'Shopping Barigui',
      'Batel'
    ],
    trafficTips: 'Siga pela Rua Padre Agostinho até a Av. Sete de Setembro, depois acesse a República Argentina.',
    testimonialContext: 'moradores do Bigorrilho',
    whyChooseUs: [
      'Pneus premium em estoque',
      'Atendimento personalizado',
      'Ambiente confortável'
    ],
    localBenefits: 'Moradores do Bigorrilho podem aproveitar a proximidade com o Barigui para um passeio enquanto o carro fica pronto.'
  },

  'merces': {
    slug: 'merces',
    name: 'Mercês',
    metaTitle: 'Pneus Mercês Curitiba | Carplus - 12 min',
    metaDescription: 'Loja de pneus para as Mercês, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D e serviços mecânicos. A 12 min pela Manoel Ribas.',
    h1: 'Pneus e Oficina para as Mercês',
    heroSubtitle: 'Das Mercês à Carplus em 12 minutos',
    introText: 'As Mercês são um bairro tradicional de Curitiba, com moradores que valorizam serviço de qualidade. A Carplus oferece pneus das melhores marcas e atendimento diferenciado.',
    localContext: 'Com fácil acesso pela Rua Manoel Ribas, as Mercês estão bem conectadas ao Portão. Em 12 minutos você chega à Carplus para resolver tudo em uma visita.',
    servicesHighlight: [
      'Pneus para todos os modelos',
      'Alinhamento 3D',
      'Balanceamento',
      'Troca de óleo',
      'Revisão de freios'
    ],
    searchPhrases: [
      'pneus Mercês Curitiba',
      'loja de pneus Mercês',
      'oficina Mercês',
      'alinhamento Mercês',
      'borracharia Mercês'
    ],
    nearbyLandmarks: [
      'Praça de Bolso do Ciclista',
      'Centro Cívico',
      'Bigorrilho'
    ],
    trafficTips: 'Siga pela Rua Manoel Ribas até a Av. Iguaçu, depois acesse a República Argentina.',
    testimonialContext: 'moradores das Mercês',
    whyChooseUs: [
      'Trajeto rápido',
      'Preços competitivos',
      'Atendimento de qualidade'
    ],
    localBenefits: 'Das Mercês o acesso é fácil e o trajeto é tranquilo, mesmo em horários de pico.'
  },

  'jardim-botanico': {
    slug: 'jardim-botanico',
    name: 'Jardim Botânico',
    metaTitle: 'Pneus Jardim Botânico Curitiba | Carplus - 15 min',
    metaDescription: 'Loja de pneus para Jardim Botânico, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D e balanceamento. A 15 min pela Omar Sabbag.',
    h1: 'Pneus e Oficina para o Jardim Botânico',
    heroSubtitle: 'Do Jardim Botânico à Carplus em 15 minutos',
    introText: 'O Jardim Botânico é o cartão-postal de Curitiba e abriga moradores que valorizam qualidade de vida. Para manter seu carro em perfeito estado, a Carplus está a apenas 15 minutos de distância.',
    localContext: 'Próximo ao famoso parque, o bairro Jardim Botânico tem acesso fácil pela Av. Pref. Omar Sabbag. A Carplus oferece pneus e serviços para todos os tipos de veículos.',
    servicesHighlight: [
      'Pneus para carros e SUVs',
      'Alinhamento 3D',
      'Balanceamento',
      'Revisão pré-viagem',
      'Troca de óleo'
    ],
    searchPhrases: [
      'pneus Jardim Botânico Curitiba',
      'loja de pneus Jardim Botânico',
      'oficina Jardim Botânico',
      'alinhamento Jardim Botânico',
      'mecânica Jardim Botânico'
    ],
    nearbyLandmarks: [
      'Jardim Botânico de Curitiba',
      'UFPR',
      'Prado Velho'
    ],
    trafficTips: 'Siga pela Av. Pref. Omar Sabbag até a Av. Sete de Setembro, depois acesse a República Argentina.',
    testimonialContext: 'moradores do Jardim Botânico',
    whyChooseUs: [
      'Trajeto tranquilo',
      'Variedade de pneus',
      'Serviço completo'
    ],
    localBenefits: 'Aproveite para visitar o parque enquanto seu carro fica pronto na Carplus!'
  },

  // ══════════════════════════════════════
  // ZONA NORTE / LESTE
  // ══════════════════════════════════════
  'santa-felicidade': {
    slug: 'santa-felicidade',
    name: 'Santa Felicidade',
    metaTitle: 'Pneus Santa Felicidade Curitiba | Carplus - 20 min',
    metaDescription: 'Loja de pneus para Santa Felicidade, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D e serviços. A 20 min pela Manoel Ribas.',
    h1: 'Pneus e Oficina para Santa Felicidade',
    heroSubtitle: 'De Santa Felicidade à Carplus em 20 minutos',
    introText: 'Santa Felicidade, o bairro italiano de Curitiba, é conhecido pela gastronomia e pela comunidade acolhedora. Moradores que buscam pneus de qualidade encontram na Carplus o melhor custo-benefício.',
    localContext: 'Com acesso pela Av. Manoel Ribas, Santa Felicidade está a 20 minutos da Carplus. O trajeto é agradável e vale a pena pela qualidade do serviço e variedade de pneus.',
    servicesHighlight: [
      'Pneus para todos os veículos',
      'Alinhamento 3D',
      'Balanceamento',
      'Troca de óleo',
      'Revisão completa'
    ],
    searchPhrases: [
      'pneus Santa Felicidade',
      'loja de pneus Santa Felicidade Curitiba',
      'oficina Santa Felicidade',
      'alinhamento Santa Felicidade',
      'borracharia Santa Felicidade'
    ],
    nearbyLandmarks: [
      'Restaurantes italianos',
      'Vinícolas',
      'Parque Tingui'
    ],
    trafficTips: 'Siga pela Av. Manoel Ribas sentido centro, depois acesse a República Argentina.',
    testimonialContext: 'moradores de Santa Felicidade',
    whyChooseUs: [
      'Vale a pena o trajeto',
      'Preços de atacado',
      'Qualidade garantida'
    ],
    localBenefits: 'Aproveite para almoçar nos restaurantes de Santa Felicidade antes ou depois de visitar a Carplus!'
  },

  'cajuru': {
    slug: 'cajuru',
    name: 'Cajuru',
    metaTitle: 'Pneus Cajuru Curitiba | Carplus - 20 min',
    metaDescription: 'Loja de pneus para o Cajuru, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D e serviços mecânicos. A 20 min pela Mauricio Fruet.',
    h1: 'Pneus e Oficina para o Cajuru',
    heroSubtitle: 'Do Cajuru à Carplus em 20 minutos',
    introText: 'O Cajuru é um dos maiores bairros de Curitiba, com comunidade ativa e diversificada. A Carplus atende moradores do Cajuru com pneus de qualidade e preços justos.',
    localContext: 'Com acesso pela Av. Prefeito Mauricio Fruet, o Cajuru está bem conectado ao Portão. São 20 minutos até a Carplus, onde você encontra tudo para seu veículo.',
    servicesHighlight: [
      'Pneus econômicos e intermediários',
      'Alinhamento 3D',
      'Balanceamento',
      'Troca de óleo',
      'Suspensão e freios'
    ],
    searchPhrases: [
      'pneus Cajuru Curitiba',
      'loja de pneus Cajuru',
      'oficina Cajuru',
      'alinhamento Cajuru',
      'borracharia Cajuru Curitiba'
    ],
    nearbyLandmarks: [
      'Terminal do Cajuru',
      'Zoológico de Curitiba',
      'Linha Verde'
    ],
    trafficTips: 'Siga pela Av. Prefeito Mauricio Fruet até a Linha Verde, depois acesse a saída para o Portão.',
    testimonialContext: 'moradores do Cajuru',
    whyChooseUs: [
      'Acesso fácil pela Linha Verde',
      'Preços competitivos',
      'Atendimento rápido'
    ],
    localBenefits: 'Moradores do Cajuru encontram na Carplus qualidade que vale o trajeto.'
  },

  'uberaba': {
    slug: 'uberaba',
    name: 'Uberaba',
    metaTitle: 'Pneus Uberaba Curitiba | Carplus - 18 min',
    metaDescription: 'Loja de pneus para o Uberaba, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D e balanceamento. A 18 min pela Av. das Torres.',
    h1: 'Pneus e Oficina para o Uberaba',
    heroSubtitle: 'Do Uberaba à Carplus em 18 minutos',
    introText: 'O Uberaba é um bairro residencial importante de Curitiba, com fácil acesso pela Av. das Torres. Moradores encontram na Carplus pneus de qualidade e serviço profissional.',
    localContext: 'Bem localizado na zona leste, o Uberaba tem acesso rápido ao Portão pela Av. das Torres. A Carplus oferece atendimento completo para todos os tipos de veículos.',
    servicesHighlight: [
      'Pneus para carros e SUVs',
      'Alinhamento 3D',
      'Balanceamento',
      'Troca de óleo',
      'Revisão geral'
    ],
    searchPhrases: [
      'pneus Uberaba Curitiba',
      'loja de pneus Uberaba',
      'oficina Uberaba',
      'alinhamento Uberaba',
      'borracharia Uberaba'
    ],
    nearbyLandmarks: [
      'Zoológico de Curitiba',
      'Linha Verde',
      'Av. das Torres'
    ],
    trafficTips: 'Siga pela Av. das Torres até acessar a Linha Verde ou a Av. Comendador Franco.',
    testimonialContext: 'moradores do Uberaba',
    whyChooseUs: [
      'Trajeto rápido',
      'Variedade de pneus',
      'Preço justo'
    ],
    localBenefits: 'Do Uberaba o acesso é rápido e direto pela Av. das Torres.'
  },

  'bacacheri': {
    slug: 'bacacheri',
    name: 'Bacacheri',
    metaTitle: 'Pneus Bacacheri Curitiba | Carplus - 20 min',
    metaDescription: 'Loja de pneus para o Bacacheri, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D e serviços. A 20 min pela Erasto Gaertner.',
    h1: 'Pneus e Oficina para o Bacacheri',
    heroSubtitle: 'Do Bacacheri à Carplus em 20 minutos',
    introText: 'O Bacacheri é um bairro tranquilo da zona norte de Curitiba, próximo ao aeroporto. Moradores encontram na Carplus pneus de todas as marcas e serviços automotivos completos.',
    localContext: 'Com fácil acesso pela Av. Erasto Gaertner, o Bacacheri está a 20 minutos da Carplus. O trajeto é agradável e o serviço vale a viagem.',
    servicesHighlight: [
      'Pneus para todos os modelos',
      'Alinhamento 3D',
      'Balanceamento',
      'Troca de óleo',
      'Revisão pré-viagem'
    ],
    searchPhrases: [
      'pneus Bacacheri Curitiba',
      'loja de pneus Bacacheri',
      'oficina Bacacheri',
      'alinhamento Bacacheri',
      'mecânica Bacacheri'
    ],
    nearbyLandmarks: [
      'Aeroporto do Bacacheri',
      'Parque Bacacheri',
      'Parque General Iberê de Mattos'
    ],
    trafficTips: 'Siga pela Av. Erasto Gaertner até o centro, depois acesse a República Argentina.',
    testimonialContext: 'moradores do Bacacheri',
    whyChooseUs: [
      'Qualidade que vale o trajeto',
      'Preços de atacado',
      'Serviço profissional'
    ],
    localBenefits: 'Moradores do Bacacheri podem aproveitar a revisão pré-viagem antes de pegar a estrada.'
  },

  'boa-vista': {
    slug: 'boa-vista',
    name: 'Boa Vista',
    metaTitle: 'Pneus Boa Vista Curitiba | Carplus - 22 min',
    metaDescription: 'Loja de pneus para Boa Vista, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D e serviços mecânicos. A 22 min pela Rua Holanda.',
    h1: 'Pneus e Oficina para Boa Vista',
    heroSubtitle: 'De Boa Vista à Carplus em 22 minutos',
    introText: 'Boa Vista é um dos bairros mais tradicionais da zona norte de Curitiba. Para moradores que buscam pneus de qualidade e serviço profissional, a Carplus oferece o melhor custo-benefício.',
    localContext: 'Com acesso pela Rua Holanda, Boa Vista está bem conectado ao centro e ao Portão. A Carplus atende com pneus de todas as marcas e serviços completos.',
    servicesHighlight: [
      'Pneus para carros e SUVs',
      'Alinhamento 3D',
      'Balanceamento',
      'Troca de óleo',
      'Revisão completa'
    ],
    searchPhrases: [
      'pneus Boa Vista Curitiba',
      'loja de pneus Boa Vista',
      'oficina Boa Vista',
      'alinhamento Boa Vista',
      'borracharia Boa Vista'
    ],
    nearbyLandmarks: [
      'Parque São Lourenço',
      'Terminal Boa Vista',
      'Barreirinha'
    ],
    trafficTips: 'Siga pela Rua Holanda até a Av. Paraná, depois acesse o centro e a República Argentina.',
    testimonialContext: 'moradores de Boa Vista',
    whyChooseUs: [
      'Qualidade garantida',
      'Preços justos',
      'Atendimento profissional'
    ],
    localBenefits: 'De Boa Vista o trajeto é tranquilo e vale a pena pela qualidade do serviço.'
  },

  'santa-candida': {
    slug: 'santa-candida',
    name: 'Santa Cândida',
    metaTitle: 'Pneus Santa Cândida Curitiba | Carplus - 25 min',
    metaDescription: 'Loja de pneus para Santa Cândida, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D e balanceamento. A 25 min pela Av. Paraná.',
    h1: 'Pneus e Oficina para Santa Cândida',
    heroSubtitle: 'De Santa Cândida à Carplus em 25 minutos',
    introText: 'Santa Cândida é um bairro em crescimento na zona norte de Curitiba. Moradores que buscam pneus de qualidade encontram na Carplus variedade e preço justo.',
    localContext: 'Com acesso pela Av. Paraná, Santa Cândida está a 25 minutos da Carplus. O trajeto é direto e vale a pena pela economia e qualidade.',
    servicesHighlight: [
      'Pneus econômicos e intermediários',
      'Alinhamento 3D',
      'Balanceamento',
      'Troca de óleo',
      'Freios e suspensão'
    ],
    searchPhrases: [
      'pneus Santa Cândida Curitiba',
      'loja de pneus Santa Cândida',
      'oficina Santa Cândida',
      'alinhamento Santa Cândida',
      'borracharia Santa Cândida'
    ],
    nearbyLandmarks: [
      'Terminal Santa Cândida',
      'Colombo',
      'BR-116'
    ],
    trafficTips: 'Siga pela Av. Paraná sentido centro, depois acesse a República Argentina.',
    testimonialContext: 'moradores de Santa Cândida',
    whyChooseUs: [
      'Preços de atacado',
      'Variedade de marcas',
      'Atendimento rápido'
    ],
    localBenefits: 'Moradores de Santa Cândida economizam comprando pneus na Carplus.'
  },

  // ══════════════════════════════════════
  // REGIÃO METROPOLITANA
  // ══════════════════════════════════════
  'sao-jose-dos-pinhais': {
    slug: 'sao-jose-dos-pinhais',
    name: 'São José dos Pinhais',
    metaTitle: 'Pneus São José dos Pinhais | Carplus Curitiba - 30 min',
    metaDescription: 'Loja de pneus para São José dos Pinhais. Pirelli, Michelin, Goodyear. Alinhamento 3D e balanceamento. A 30 min pela Av. das Torres.',
    h1: 'Pneus e Oficina para São José dos Pinhais',
    heroSubtitle: 'De São José dos Pinhais à Carplus em 30 minutos',
    introText: 'São José dos Pinhais é a segunda maior cidade da região metropolitana de Curitiba. Moradores encontram na Carplus pneus de qualidade com preços de atacado que compensam o deslocamento.',
    localContext: 'Com acesso pela Av. das Torres e BR-376, São José dos Pinhais está bem conectado a Curitiba. A Carplus oferece variedade de pneus e serviços que fazem valer a viagem.',
    servicesHighlight: [
      'Pneus para todos os veículos',
      'Alinhamento 3D de precisão',
      'Balanceamento computadorizado',
      'Troca de óleo',
      'Revisão completa pré-viagem'
    ],
    searchPhrases: [
      'pneus São José dos Pinhais',
      'loja de pneus SJP',
      'oficina São José dos Pinhais',
      'alinhamento São José dos Pinhais',
      'pneus baratos SJP',
      'borracharia São José dos Pinhais'
    ],
    nearbyLandmarks: [
      'Aeroporto Afonso Pena',
      'Centro de SJP',
      'BR-376'
    ],
    trafficTips: 'Siga pela Av. das Torres ou BR-376 até o contorno sul, depois acesse o Portão.',
    testimonialContext: 'moradores de São José dos Pinhais',
    whyChooseUs: [
      'Preços de atacado que compensam o trajeto',
      'Variedade de marcas',
      'Serviço profissional'
    ],
    localBenefits: 'Muitos clientes de São José dos Pinhais confirmam: vale a pena vir até a Carplus pela economia e qualidade!'
  },

  'colombo': {
    slug: 'colombo',
    name: 'Colombo',
    metaTitle: 'Pneus Colombo PR | Carplus Curitiba - 30 min',
    metaDescription: 'Loja de pneus para Colombo, PR. Pirelli, Michelin, Goodyear. Alinhamento 3D e balanceamento. A 30 min pela PR-417.',
    h1: 'Pneus e Oficina para Colombo',
    heroSubtitle: 'De Colombo à Carplus em 30 minutos',
    introText: 'Colombo é uma das maiores cidades da região metropolitana de Curitiba. Moradores encontram na Carplus pneus de qualidade e serviços que fazem valer o deslocamento.',
    localContext: 'Com acesso pela PR-417, Colombo está bem conectado a Curitiba. A Carplus oferece preços de atacado e atendimento profissional para moradores da região.',
    servicesHighlight: [
      'Pneus para carros e SUVs',
      'Alinhamento 3D',
      'Balanceamento',
      'Troca de óleo',
      'Revisão geral'
    ],
    searchPhrases: [
      'pneus Colombo PR',
      'loja de pneus Colombo',
      'oficina Colombo',
      'alinhamento Colombo',
      'borracharia Colombo'
    ],
    nearbyLandmarks: [
      'Centro de Colombo',
      'Atuba',
      'Santa Cândida'
    ],
    trafficTips: 'Siga pela PR-417 até a Av. Paraná em Curitiba, depois acesse a República Argentina.',
    testimonialContext: 'moradores de Colombo',
    whyChooseUs: [
      'Preços de atacado',
      'Qualidade garantida',
      'Atendimento profissional'
    ],
    localBenefits: 'Muitos clientes de Colombo já são clientes fiéis da Carplus. Venha conhecer!'
  },

  'pinhais': {
    slug: 'pinhais',
    name: 'Pinhais',
    metaTitle: 'Pneus Pinhais PR | Carplus Curitiba - 22 min',
    metaDescription: 'Loja de pneus para Pinhais, PR. Pirelli, Michelin, Goodyear. Alinhamento 3D e serviços mecânicos. A 22 min pela Rodovia João Leopoldo Jacomel.',
    h1: 'Pneus e Oficina para Pinhais',
    heroSubtitle: 'De Pinhais à Carplus em 22 minutos',
    introText: 'Pinhais faz divisa com Curitiba e tem acesso fácil ao Portão. Moradores encontram na Carplus pneus de qualidade e serviços profissionais pertinho de casa.',
    localContext: 'Com acesso pela Rodovia Deputado João Leopoldo Jacomel, Pinhais está a apenas 22 minutos da Carplus. O trajeto é rápido e vale pela qualidade.',
    servicesHighlight: [
      'Pneus para todos os veículos',
      'Alinhamento 3D',
      'Balanceamento',
      'Troca de óleo',
      'Revisão completa'
    ],
    searchPhrases: [
      'pneus Pinhais PR',
      'loja de pneus Pinhais',
      'oficina Pinhais',
      'alinhamento Pinhais',
      'borracharia Pinhais'
    ],
    nearbyLandmarks: [
      'Centro de Pinhais',
      'Piraquara',
      'Cajuru'
    ],
    trafficTips: 'Siga pela Rodovia João Leopoldo Jacomel até a Linha Verde ou centro de Curitiba.',
    testimonialContext: 'moradores de Pinhais',
    whyChooseUs: [
      'Proximidade com Curitiba',
      'Preços competitivos',
      'Serviço de qualidade'
    ],
    localBenefits: 'Pinhais está tão perto que parece Curitiba. Venha conhecer a Carplus!'
  },

  'araucaria': {
    slug: 'araucaria',
    name: 'Araucária',
    metaTitle: 'Pneus Araucária PR | Carplus Curitiba - 30 min',
    metaDescription: 'Loja de pneus para Araucária, PR. Pirelli, Michelin, Goodyear. Alinhamento 3D e serviços automotivos. A 30 min pela Rodovia do Xisto.',
    h1: 'Pneus e Oficina para Araucária',
    heroSubtitle: 'De Araucária à Carplus em 30 minutos',
    introText: 'Araucária é uma importante cidade industrial da região metropolitana. Moradores e empresas encontram na Carplus pneus de qualidade e condições especiais para frotas.',
    localContext: 'Com acesso pela Rodovia do Xisto, Araucária está bem conectada ao Portão. A Carplus oferece atendimento para veículos particulares e frotas empresariais.',
    servicesHighlight: [
      'Pneus para carros, vans e utilitários',
      'Atendimento para frotas',
      'Alinhamento 3D',
      'Balanceamento',
      'Troca de óleo'
    ],
    searchPhrases: [
      'pneus Araucária PR',
      'loja de pneus Araucária',
      'oficina Araucária',
      'pneus para frota Araucária',
      'alinhamento Araucária'
    ],
    nearbyLandmarks: [
      'Centro de Araucária',
      'Refinaria Getúlio Vargas',
      'CIC'
    ],
    trafficTips: 'Siga pela Rodovia do Xisto até a Av. República Argentina.',
    testimonialContext: 'moradores e empresas de Araucária',
    whyChooseUs: [
      'Condições especiais para frotas',
      'Preços de atacado',
      'Atendimento profissional'
    ],
    localBenefits: 'Empresas de Araucária podem fechar contratos de manutenção com a Carplus.'
  },

  'campo-largo': {
    slug: 'campo-largo',
    name: 'Campo Largo',
    metaTitle: 'Pneus Campo Largo PR | Carplus Curitiba - 35 min',
    metaDescription: 'Loja de pneus para Campo Largo, PR. Pirelli, Michelin, Goodyear. Alinhamento 3D e balanceamento. A 35 min pela BR-277.',
    h1: 'Pneus e Oficina para Campo Largo',
    heroSubtitle: 'De Campo Largo à Carplus em 35 minutos',
    introText: 'Campo Largo, a capital da louça, tem moradores que conhecem qualidade. Para pneus e serviços automotivos, a Carplus oferece o melhor custo-benefício da região.',
    localContext: 'Com acesso pela BR-277, Campo Largo está a 35 minutos da Carplus. O trajeto vale pela economia em pneus de qualidade.',
    servicesHighlight: [
      'Pneus para todos os veículos',
      'Alinhamento 3D',
      'Balanceamento',
      'Troca de óleo',
      'Revisão geral'
    ],
    searchPhrases: [
      'pneus Campo Largo PR',
      'loja de pneus Campo Largo',
      'oficina Campo Largo',
      'alinhamento Campo Largo',
      'borracharia Campo Largo'
    ],
    nearbyLandmarks: [
      'Centro de Campo Largo',
      'Museu da Louça',
      'BR-277'
    ],
    trafficTips: 'Siga pela BR-277 até o acesso ao Portão pela Av. República Argentina.',
    testimonialContext: 'moradores de Campo Largo',
    whyChooseUs: [
      'Preços de atacado',
      'Qualidade garantida',
      'Variedade de marcas'
    ],
    localBenefits: 'Moradores de Campo Largo economizam comprando pneus na Carplus!'
  },

  'almirante-tamandare': {
    slug: 'almirante-tamandare',
    name: 'Almirante Tamandaré',
    metaTitle: 'Pneus Almirante Tamandaré PR | Carplus Curitiba - 25 min',
    metaDescription: 'Loja de pneus para Almirante Tamandaré, PR. Pirelli, Michelin, Goodyear. Alinhamento 3D e serviços. A 25 min pela Rodovia dos Minérios.',
    h1: 'Pneus e Oficina para Almirante Tamandaré',
    heroSubtitle: 'De Almirante Tamandaré à Carplus em 25 minutos',
    introText: 'Almirante Tamandaré é uma cidade em crescimento na região metropolitana. Moradores encontram na Carplus pneus de qualidade e preços justos.',
    localContext: 'Com acesso pela Rodovia dos Minérios, Almirante Tamandaré está a 25 minutos da Carplus. O trajeto é direto e vale a pena.',
    servicesHighlight: [
      'Pneus econômicos e intermediários',
      'Alinhamento 3D',
      'Balanceamento',
      'Troca de óleo',
      'Revisão básica'
    ],
    searchPhrases: [
      'pneus Almirante Tamandaré PR',
      'loja de pneus Almirante Tamandaré',
      'oficina Almirante Tamandaré',
      'alinhamento Almirante Tamandaré',
      'borracharia Almirante Tamandaré'
    ],
    nearbyLandmarks: [
      'Centro de Almirante Tamandaré',
      'Colombo',
      'Santa Cândida'
    ],
    trafficTips: 'Siga pela Rodovia dos Minérios até a BR-476, depois acesse Curitiba.',
    testimonialContext: 'moradores de Almirante Tamandaré',
    whyChooseUs: [
      'Preços competitivos',
      'Qualidade garantida',
      'Atendimento rápido'
    ],
    localBenefits: 'Moradores de Almirante Tamandaré são bem-vindos na Carplus!'
  },

  'fazenda-rio-grande': {
    slug: 'fazenda-rio-grande',
    name: 'Fazenda Rio Grande',
    metaTitle: 'Pneus Fazenda Rio Grande PR | Carplus Curitiba - 35 min',
    metaDescription: 'Loja de pneus para Fazenda Rio Grande, PR. Pirelli, Michelin, Goodyear. Alinhamento 3D e balanceamento. A 35 min pela BR-116.',
    h1: 'Pneus e Oficina para Fazenda Rio Grande',
    heroSubtitle: 'De Fazenda Rio Grande à Carplus em 35 minutos',
    introText: 'Fazenda Rio Grande é uma cidade em expansão na região sul de Curitiba. Moradores encontram na Carplus pneus de qualidade e serviços profissionais.',
    localContext: 'Com acesso pela BR-116, Fazenda Rio Grande está a 35 minutos da Carplus. O trajeto compensa pelos preços de atacado.',
    servicesHighlight: [
      'Pneus para todos os veículos',
      'Alinhamento 3D',
      'Balanceamento',
      'Troca de óleo',
      'Revisão geral'
    ],
    searchPhrases: [
      'pneus Fazenda Rio Grande PR',
      'loja de pneus Fazenda Rio Grande',
      'oficina Fazenda Rio Grande',
      'alinhamento Fazenda Rio Grande',
      'borracharia Fazenda Rio Grande'
    ],
    nearbyLandmarks: [
      'Centro de Fazenda Rio Grande',
      'BR-116',
      'Pinheirinho'
    ],
    trafficTips: 'Siga pela BR-116 até o contorno sul, depois acesse o Portão.',
    testimonialContext: 'moradores de Fazenda Rio Grande',
    whyChooseUs: [
      'Preços de atacado',
      'Variedade de pneus',
      'Serviço profissional'
    ],
    localBenefits: 'Fazenda Rio Grande está mais perto do que parece. Venha conhecer a Carplus!'
  },

  // ══════════════════════════════════════
  // BAIRROS ADICIONAIS DE CURITIBA
  // ══════════════════════════════════════
  'sitio-cercado': {
    slug: 'sitio-cercado',
    name: 'Sítio Cercado',
    metaTitle: 'Pneus Sítio Cercado Curitiba | Carplus - 20 min',
    metaDescription: 'Loja de pneus para o Sítio Cercado, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D e balanceamento. A 20 min pela Izaac Ferreira da Cruz.',
    h1: 'Pneus e Oficina para o Sítio Cercado',
    heroSubtitle: 'Do Sítio Cercado à Carplus em 20 minutos',
    introText: 'O Sítio Cercado é um dos maiores bairros de Curitiba em população. Para essa comunidade que busca qualidade e economia, a Carplus oferece pneus das melhores marcas com preço justo.',
    localContext: 'Com acesso pela Rua Izaac Ferreira da Cruz, o Sítio Cercado está bem conectado à zona sul de Curitiba. A Carplus no Portão atende moradores da região com serviço profissional.',
    servicesHighlight: [
      'Pneus econômicos para carros populares',
      'Alinhamento 3D computadorizado',
      'Balanceamento de rodas',
      'Troca de óleo e filtros',
      'Revisão de freios e suspensão'
    ],
    searchPhrases: [
      'pneus Sítio Cercado',
      'loja de pneus Sítio Cercado Curitiba',
      'oficina Sítio Cercado',
      'alinhamento Sítio Cercado',
      'borracharia Sítio Cercado'
    ],
    nearbyLandmarks: [
      'Terminal Sítio Cercado',
      'Pinheirinho',
      'Linha Verde'
    ],
    trafficTips: 'Do Sítio Cercado, siga pela Rua Izaac Ferreira da Cruz até a Linha Verde, depois acesse o Portão.',
    testimonialContext: 'moradores do Sítio Cercado',
    whyChooseUs: [
      'Preços de atacado',
      'Opções econômicas',
      'Atendimento rápido'
    ],
    localBenefits: 'Moradores do Sítio Cercado economizam comprando pneus na Carplus.'
  },

  'tatuquara': {
    slug: 'tatuquara',
    name: 'Tatuquara',
    metaTitle: 'Pneus Tatuquara Curitiba | Carplus - 25 min',
    metaDescription: 'Loja de pneus para o Tatuquara, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D e serviços. A 25 min pela Regis Bittencourt.',
    h1: 'Pneus e Oficina para o Tatuquara',
    heroSubtitle: 'Do Tatuquara à Carplus em 25 minutos',
    introText: 'O Tatuquara é um bairro em desenvolvimento na zona sul de Curitiba. Moradores encontram na Carplus pneus de qualidade com preços que cabem no orçamento.',
    localContext: 'Com acesso pela Rodovia Regis Bittencourt, o Tatuquara está a 25 minutos da Carplus. O trajeto vale pela economia em pneus de qualidade.',
    servicesHighlight: [
      'Pneus para carros populares',
      'Alinhamento 3D',
      'Balanceamento',
      'Troca de óleo',
      'Freios básicos'
    ],
    searchPhrases: [
      'pneus Tatuquara Curitiba',
      'loja de pneus Tatuquara',
      'oficina Tatuquara',
      'alinhamento Tatuquara'
    ],
    nearbyLandmarks: [
      'Terminal Tatuquara',
      'CIC',
      'Rodovia Regis Bittencourt'
    ],
    trafficTips: 'Do Tatuquara, siga pela Rodovia Regis Bittencourt ou pela Av. Winston Churchill até o Portão.',
    testimonialContext: 'moradores do Tatuquara',
    whyChooseUs: [
      'Preços acessíveis',
      'Variedade de marcas',
      'Parcelamento em 10x'
    ],
    localBenefits: 'Vale a pena o trajeto do Tatuquara para economizar em pneus de qualidade.'
  },

  'umbara': {
    slug: 'umbara',
    name: 'Umbará',
    metaTitle: 'Pneus Umbará Curitiba | Carplus - 25 min',
    metaDescription: 'Loja de pneus para o Umbará, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D e balanceamento. A 25 min pela Nicola Pellanda.',
    h1: 'Pneus e Oficina para o Umbará',
    heroSubtitle: 'Do Umbará à Carplus em 25 minutos',
    introText: 'O Umbará é um bairro residencial tranquilo na zona sul de Curitiba. Moradores que buscam pneus de qualidade encontram na Carplus variedade e bom preço.',
    localContext: 'Com acesso pela Rua Nicola Pellanda, o Umbará está a 25 minutos da Carplus. O trajeto é direto e vale pela qualidade.',
    servicesHighlight: [
      'Pneus para todos os modelos',
      'Alinhamento 3D',
      'Balanceamento',
      'Troca de óleo',
      'Revisão geral'
    ],
    searchPhrases: [
      'pneus Umbará Curitiba',
      'loja de pneus Umbará',
      'oficina Umbará',
      'alinhamento Umbará'
    ],
    nearbyLandmarks: [
      'Sítio Cercado',
      'Pinheirinho',
      'BR-116'
    ],
    trafficTips: 'Do Umbará, siga pela Rua Nicola Pellanda até a BR-116 ou Linha Verde.',
    testimonialContext: 'moradores do Umbará',
    whyChooseUs: [
      'Qualidade garantida',
      'Preços justos',
      'Atendimento profissional'
    ],
    localBenefits: 'Moradores do Umbará são bem-vindos na Carplus!'
  },

  'centro-civico': {
    slug: 'centro-civico',
    name: 'Centro Cívico',
    metaTitle: 'Pneus Centro Cívico Curitiba | Carplus - 15 min',
    metaDescription: 'Loja de pneus para o Centro Cívico, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D e serviços. A 15 min pela Cândido de Abreu.',
    h1: 'Pneus e Oficina para o Centro Cívico',
    heroSubtitle: 'Do Centro Cívico à Carplus em 15 minutos',
    introText: 'O Centro Cívico é o coração administrativo de Curitiba, próximo ao Palácio Iguaçu. Servidores e moradores encontram na Carplus pneus de qualidade a poucos minutos.',
    localContext: 'Com fácil acesso pela Av. Cândido de Abreu, o Centro Cívico está a 15 minutos da Carplus. Ideal para quem trabalha na região e quer resolver tudo em um lugar.',
    servicesHighlight: [
      'Pneus para sedans executivos',
      'Alinhamento 3D',
      'Balanceamento',
      'Troca de óleo sintético',
      'Diagnóstico eletrônico'
    ],
    searchPhrases: [
      'pneus Centro Cívico Curitiba',
      'loja de pneus Centro Cívico',
      'oficina Centro Cívico',
      'alinhamento Centro Cívico'
    ],
    nearbyLandmarks: [
      'Palácio Iguaçu',
      'Museu Oscar Niemeyer',
      'Bosque do Papa'
    ],
    trafficTips: 'Do Centro Cívico, siga pela Av. Cândido de Abreu até o centro, depois acesse a República Argentina.',
    testimonialContext: 'servidores e moradores do Centro Cívico',
    whyChooseUs: [
      'Localização estratégica',
      'Atendimento rápido',
      'Estacionamento gratuito'
    ],
    localBenefits: 'Resolva tudo em um lugar só e fuja do trânsito do centro!'
  },

  'ahu': {
    slug: 'ahu',
    name: 'Ahú',
    metaTitle: 'Pneus Ahú Curitiba | Carplus - 18 min',
    metaDescription: 'Loja de pneus para o Ahú, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D e balanceamento. A 18 min pela Anita Garibaldi.',
    h1: 'Pneus e Oficina para o Ahú',
    heroSubtitle: 'Do Ahú à Carplus em 18 minutos',
    introText: 'O Ahú é um bairro tradicional e arborizado de Curitiba. Moradores que valorizam qualidade encontram na Carplus pneus das melhores marcas.',
    localContext: 'Com acesso pela Av. Anita Garibaldi, o Ahú está a 18 minutos da Carplus. Trajeto tranquilo para um atendimento de qualidade.',
    servicesHighlight: [
      'Pneus para carros e SUVs',
      'Alinhamento 3D',
      'Balanceamento',
      'Troca de óleo',
      'Revisão completa'
    ],
    searchPhrases: [
      'pneus Ahú Curitiba',
      'loja de pneus Ahú',
      'oficina Ahú',
      'alinhamento Ahú'
    ],
    nearbyLandmarks: [
      'Parque São Lourenço',
      'Bosque do Alemão',
      'Centro Cívico'
    ],
    trafficTips: 'Do Ahú, siga pela Av. Anita Garibaldi até o centro, depois acesse a República Argentina.',
    testimonialContext: 'moradores do Ahú',
    whyChooseUs: [
      'Qualidade premium',
      'Atendimento personalizado',
      'Variedade de marcas'
    ],
    localBenefits: 'Moradores do Ahú apreciam qualidade. Venha conhecer a Carplus!'
  },

  'cabral': {
    slug: 'cabral',
    name: 'Cabral',
    metaTitle: 'Pneus Cabral Curitiba | Carplus - 18 min',
    metaDescription: 'Loja de pneus para o Cabral, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D e serviços mecânicos. A 18 min pela Av. Paraná.',
    h1: 'Pneus e Oficina para o Cabral',
    heroSubtitle: 'Do Cabral à Carplus em 18 minutos',
    introText: 'O Cabral é um bairro valorizado de Curitiba, com infraestrutura completa. Moradores exigentes encontram na Carplus pneus premium e serviço de qualidade.',
    localContext: 'Com acesso pela Av. Paraná, o Cabral está a 18 minutos da Carplus. O trajeto é agradável e o serviço vale a visita.',
    servicesHighlight: [
      'Pneus para veículos executivos',
      'Alinhamento 3D de precisão',
      'Balanceamento computadorizado',
      'Troca de óleo sintético',
      'Ar-condicionado automotivo'
    ],
    searchPhrases: [
      'pneus Cabral Curitiba',
      'loja de pneus Cabral',
      'oficina Cabral',
      'alinhamento Cabral'
    ],
    nearbyLandmarks: [
      'Shopping Mueller',
      'Juvevê',
      'Alto da Glória'
    ],
    trafficTips: 'Do Cabral, siga pela Av. Paraná até o centro, depois acesse a República Argentina.',
    testimonialContext: 'moradores do Cabral',
    whyChooseUs: [
      'Pneus premium em estoque',
      'Técnicos especializados',
      'Ambiente confortável'
    ],
    localBenefits: 'Moradores do Cabral merecem o melhor. Venha à Carplus!'
  },

  'juveve': {
    slug: 'juveve',
    name: 'Juvevê',
    metaTitle: 'Pneus Juvevê Curitiba | Carplus - 15 min',
    metaDescription: 'Loja de pneus para o Juvevê, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D e balanceamento. A 15 min pela João Gualberto.',
    h1: 'Pneus e Oficina para o Juvevê',
    heroSubtitle: 'Do Juvevê à Carplus em 15 minutos',
    introText: 'O Juvevê é um bairro nobre de Curitiba, conhecido pela gastronomia e qualidade de vida. Moradores encontram na Carplus pneus de alta qualidade.',
    localContext: 'Com acesso pela Rua João Gualberto, o Juvevê está a 15 minutos da Carplus. Trajeto rápido para um atendimento premium.',
    servicesHighlight: [
      'Pneus para carros de luxo',
      'Alinhamento 3D',
      'Balanceamento',
      'Troca de óleo premium',
      'Revisão executiva'
    ],
    searchPhrases: [
      'pneus Juvevê Curitiba',
      'loja de pneus Juvevê',
      'oficina Juvevê',
      'alinhamento Juvevê'
    ],
    nearbyLandmarks: [
      'Alto da Glória',
      'Centro',
      'Cabral'
    ],
    trafficTips: 'Do Juvevê, siga pela Rua João Gualberto até o centro, depois acesse a República Argentina.',
    testimonialContext: 'moradores do Juvevê',
    whyChooseUs: [
      'Qualidade premium',
      'Atendimento diferenciado',
      'Marcas exclusivas'
    ],
    localBenefits: 'O Juvevê merece qualidade. Carplus é a escolha certa!'
  },

  'alto-da-gloria': {
    slug: 'alto-da-gloria',
    name: 'Alto da Glória',
    metaTitle: 'Pneus Alto da Glória Curitiba | Carplus - 15 min',
    metaDescription: 'Loja de pneus para o Alto da Glória, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D e serviços. A 15 min pela Nicolau Maeder.',
    h1: 'Pneus e Oficina para o Alto da Glória',
    heroSubtitle: 'Do Alto da Glória à Carplus em 15 minutos',
    introText: 'O Alto da Glória é um dos bairros mais tradicionais de Curitiba, próximo ao centro. Moradores encontram na Carplus pneus de qualidade e atendimento profissional.',
    localContext: 'Com acesso pela Rua Nicolau Maeder, o Alto da Glória está a 15 minutos da Carplus. Localização conveniente para resolver tudo rapidamente.',
    servicesHighlight: [
      'Pneus para sedans e hatches',
      'Alinhamento 3D',
      'Balanceamento',
      'Troca de óleo',
      'Revisão geral'
    ],
    searchPhrases: [
      'pneus Alto da Glória Curitiba',
      'loja de pneus Alto da Glória',
      'oficina Alto da Glória',
      'alinhamento Alto da Glória'
    ],
    nearbyLandmarks: [
      'Praça Ouvidor Pardinho',
      'Centro',
      'Juvevê'
    ],
    trafficTips: 'Do Alto da Glória, siga pela Rua Nicolau Maeder até a Sete de Setembro, depois acesse a República Argentina.',
    testimonialContext: 'moradores do Alto da Glória',
    whyChooseUs: [
      'Proximidade com o centro',
      'Preços justos',
      'Atendimento rápido'
    ],
    localBenefits: 'Do Alto da Glória você chega rápido à Carplus!'
  },

  'alto-da-rua-xv': {
    slug: 'alto-da-rua-xv',
    name: 'Alto da Rua XV',
    metaTitle: 'Pneus Alto da XV Curitiba | Carplus - 15 min',
    metaDescription: 'Loja de pneus para o Alto da Rua XV, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D e balanceamento. A 15 min pela Itupava.',
    h1: 'Pneus e Oficina para o Alto da Rua XV',
    heroSubtitle: 'Do Alto da XV à Carplus em 15 minutos',
    introText: 'O Alto da Rua XV é um bairro charmoso de Curitiba, conhecido pelos bares e restaurantes. Moradores encontram na Carplus pneus de qualidade pertinho de casa.',
    localContext: 'Com acesso pela Rua Itupava, o Alto da XV está a 15 minutos da Carplus. Aproveite para trocar os pneus e depois curtir o bairro!',
    servicesHighlight: [
      'Pneus para carros urbanos',
      'Alinhamento 3D',
      'Balanceamento',
      'Troca de óleo',
      'Revisão básica'
    ],
    searchPhrases: [
      'pneus Alto da XV Curitiba',
      'loja de pneus Alto da Rua XV',
      'oficina Alto da XV',
      'alinhamento Alto da XV'
    ],
    nearbyLandmarks: [
      'Rua Itupava',
      'Cristo Rei',
      'Centro'
    ],
    trafficTips: 'Do Alto da XV, siga pela Rua Itupava até a Av. Sete de Setembro, depois acesse a República Argentina.',
    testimonialContext: 'moradores do Alto da Rua XV',
    whyChooseUs: [
      'Trajeto rápido',
      'Preços acessíveis',
      'Bom atendimento'
    ],
    localBenefits: 'Resolva os pneus e depois aproveite o Alto da XV!'
  },

  'cristo-rei': {
    slug: 'cristo-rei',
    name: 'Cristo Rei',
    metaTitle: 'Pneus Cristo Rei Curitiba | Carplus - 15 min',
    metaDescription: 'Loja de pneus para o Cristo Rei, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D e serviços. A 15 min pela Av. São José.',
    h1: 'Pneus e Oficina para o Cristo Rei',
    heroSubtitle: 'Do Cristo Rei à Carplus em 15 minutos',
    introText: 'O Cristo Rei é um bairro universitário de Curitiba, próximo à PUC-PR. Estudantes e moradores encontram na Carplus pneus com bom preço.',
    localContext: 'Com acesso pela Av. São José, o Cristo Rei está a 15 minutos da Carplus. Opção acessível para quem precisa de pneus de qualidade.',
    servicesHighlight: [
      'Pneus econômicos',
      'Alinhamento 3D',
      'Balanceamento',
      'Troca de óleo',
      'Freios básicos'
    ],
    searchPhrases: [
      'pneus Cristo Rei Curitiba',
      'loja de pneus Cristo Rei',
      'oficina Cristo Rei',
      'alinhamento Cristo Rei'
    ],
    nearbyLandmarks: [
      'PUC-PR',
      'Jardim Botânico',
      'Alto da XV'
    ],
    trafficTips: 'Do Cristo Rei, siga pela Av. São José até a Sete de Setembro, depois acesse a República Argentina.',
    testimonialContext: 'estudantes e moradores do Cristo Rei',
    whyChooseUs: [
      'Preços acessíveis',
      'Opções econômicas',
      'Parcelamento'
    ],
    localBenefits: 'Estudantes e moradores do Cristo Rei economizam na Carplus!'
  },

  'tingui': {
    slug: 'tingui',
    name: 'Tingui',
    metaTitle: 'Pneus Tingui Curitiba | Carplus - 20 min',
    metaDescription: 'Loja de pneus para o Tingui, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D e balanceamento. A 20 min pela Mascarenhas de Moraes.',
    h1: 'Pneus e Oficina para o Tingui',
    heroSubtitle: 'Do Tingui à Carplus em 20 minutos',
    introText: 'O Tingui é um bairro tranquilo de Curitiba, próximo ao famoso Parque Tingui. Moradores encontram na Carplus pneus de qualidade a 20 minutos.',
    localContext: 'Com acesso pela Rua Mascarenhas de Moraes, o Tingui está bem conectado ao resto da cidade. A Carplus atende com qualidade.',
    servicesHighlight: [
      'Pneus para carros e SUVs',
      'Alinhamento 3D',
      'Balanceamento',
      'Troca de óleo',
      'Revisão pré-viagem'
    ],
    searchPhrases: [
      'pneus Tingui Curitiba',
      'loja de pneus Tingui',
      'oficina Tingui',
      'alinhamento Tingui'
    ],
    nearbyLandmarks: [
      'Parque Tingui',
      'Bacacheri',
      'Boa Vista'
    ],
    trafficTips: 'Do Tingui, siga pela Rua Mascarenhas de Moraes até a Av. Paraná ou Linha Verde.',
    testimonialContext: 'moradores do Tingui',
    whyChooseUs: [
      'Qualidade garantida',
      'Preços justos',
      'Bom atendimento'
    ],
    localBenefits: 'Aproveite para visitar o Parque Tingui depois de passar na Carplus!'
  },

  'atuba': {
    slug: 'atuba',
    name: 'Atuba',
    metaTitle: 'Pneus Atuba Curitiba | Carplus - 25 min',
    metaDescription: 'Loja de pneus para o Atuba, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D e serviços. A 25 min pela BR-116.',
    h1: 'Pneus e Oficina para o Atuba',
    heroSubtitle: 'Do Atuba à Carplus em 25 minutos',
    introText: 'O Atuba fica na divisa entre Curitiba e Colombo, com fácil acesso pela BR-116. Moradores encontram na Carplus pneus de qualidade.',
    localContext: 'Com acesso pela BR-116, o Atuba está a 25 minutos da Carplus. O trajeto vale pela variedade e preço de pneus.',
    servicesHighlight: [
      'Pneus para todos os veículos',
      'Alinhamento 3D',
      'Balanceamento',
      'Troca de óleo',
      'Revisão completa'
    ],
    searchPhrases: [
      'pneus Atuba Curitiba',
      'loja de pneus Atuba',
      'oficina Atuba',
      'alinhamento Atuba'
    ],
    nearbyLandmarks: [
      'Colombo',
      'Santa Cândida',
      'BR-116'
    ],
    trafficTips: 'Do Atuba, siga pela BR-116 ou Av. Paraná sentido centro, depois acesse a República Argentina.',
    testimonialContext: 'moradores do Atuba',
    whyChooseUs: [
      'Preços de atacado',
      'Variedade de marcas',
      'Atendimento profissional'
    ],
    localBenefits: 'Moradores do Atuba e Colombo encontram qualidade na Carplus!'
  },

  'barreirinha': {
    slug: 'barreirinha',
    name: 'Barreirinha',
    metaTitle: 'Pneus Barreirinha Curitiba | Carplus - 22 min',
    metaDescription: 'Loja de pneus para a Barreirinha, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D e balanceamento. A 22 min pela Anita Garibaldi.',
    h1: 'Pneus e Oficina para a Barreirinha',
    heroSubtitle: 'Da Barreirinha à Carplus em 22 minutos',
    introText: 'A Barreirinha é um bairro tradicional da zona norte de Curitiba. Moradores encontram na Carplus pneus de qualidade com preço acessível.',
    localContext: 'Com acesso pela Av. Anita Garibaldi, a Barreirinha está a 22 minutos da Carplus. Trajeto direto e sem complicações.',
    servicesHighlight: [
      'Pneus econômicos e intermediários',
      'Alinhamento 3D',
      'Balanceamento',
      'Troca de óleo',
      'Freios e suspensão'
    ],
    searchPhrases: [
      'pneus Barreirinha Curitiba',
      'loja de pneus Barreirinha',
      'oficina Barreirinha',
      'alinhamento Barreirinha'
    ],
    nearbyLandmarks: [
      'Parque da Barreirinha',
      'Boa Vista',
      'Santa Cândida'
    ],
    trafficTips: 'Da Barreirinha, siga pela Av. Anita Garibaldi sentido centro, depois acesse a República Argentina.',
    testimonialContext: 'moradores da Barreirinha',
    whyChooseUs: [
      'Preços acessíveis',
      'Boa variedade',
      'Atendimento rápido'
    ],
    localBenefits: 'Da Barreirinha o trajeto é tranquilo. Venha conhecer a Carplus!'
  },

  'pilarzinho': {
    slug: 'pilarzinho',
    name: 'Pilarzinho',
    metaTitle: 'Pneus Pilarzinho Curitiba | Carplus - 20 min',
    metaDescription: 'Loja de pneus para o Pilarzinho, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D e serviços. A 20 min pela Amauri Lange Silveira.',
    h1: 'Pneus e Oficina para o Pilarzinho',
    heroSubtitle: 'Do Pilarzinho à Carplus em 20 minutos',
    introText: 'O Pilarzinho é um bairro residencial tranquilo de Curitiba. Moradores encontram na Carplus pneus de todas as marcas com preço justo.',
    localContext: 'Com acesso pela Rua Amauri Lange Silveira, o Pilarzinho está a 20 minutos da Carplus. O trajeto é agradável.',
    servicesHighlight: [
      'Pneus para carros e SUVs',
      'Alinhamento 3D',
      'Balanceamento',
      'Troca de óleo',
      'Revisão básica'
    ],
    searchPhrases: [
      'pneus Pilarzinho Curitiba',
      'loja de pneus Pilarzinho',
      'oficina Pilarzinho',
      'alinhamento Pilarzinho'
    ],
    nearbyLandmarks: [
      'São Lourenço',
      'Barreirinha',
      'Santa Felicidade'
    ],
    trafficTips: 'Do Pilarzinho, siga pela Rua Amauri Lange Silveira até a Av. Manoel Ribas.',
    testimonialContext: 'moradores do Pilarzinho',
    whyChooseUs: [
      'Preços justos',
      'Variedade de marcas',
      'Bom atendimento'
    ],
    localBenefits: 'Moradores do Pilarzinho são bem-vindos na Carplus!'
  },

  'sao-lourenco': {
    slug: 'sao-lourenco',
    name: 'São Lourenço',
    metaTitle: 'Pneus São Lourenço Curitiba | Carplus - 18 min',
    metaDescription: 'Loja de pneus para o São Lourenço, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D e balanceamento. A 18 min pela Mateus Leme.',
    h1: 'Pneus e Oficina para o São Lourenço',
    heroSubtitle: 'Do São Lourenço à Carplus em 18 minutos',
    introText: 'O São Lourenço é conhecido pelo famoso parque de mesmo nome. Moradores encontram na Carplus pneus de qualidade a 18 minutos.',
    localContext: 'Com acesso pela Rua Mateus Leme, o São Lourenço está bem conectado ao centro e ao Portão. Trajeto rápido e fácil.',
    servicesHighlight: [
      'Pneus para todos os modelos',
      'Alinhamento 3D',
      'Balanceamento',
      'Troca de óleo',
      'Revisão completa'
    ],
    searchPhrases: [
      'pneus São Lourenço Curitiba',
      'loja de pneus São Lourenço',
      'oficina São Lourenço',
      'alinhamento São Lourenço'
    ],
    nearbyLandmarks: [
      'Parque São Lourenço',
      'Ahú',
      'Pilarzinho'
    ],
    trafficTips: 'Do São Lourenço, siga pela Rua Mateus Leme até o centro, depois acesse a República Argentina.',
    testimonialContext: 'moradores do São Lourenço',
    whyChooseUs: [
      'Qualidade garantida',
      'Preços competitivos',
      'Atendimento profissional'
    ],
    localBenefits: 'Aproveite para passear no Parque São Lourenço depois de visitar a Carplus!'
  },

  'bairro-alto': {
    slug: 'bairro-alto',
    name: 'Bairro Alto',
    metaTitle: 'Pneus Bairro Alto Curitiba | Carplus - 20 min',
    metaDescription: 'Loja de pneus para o Bairro Alto, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D e serviços. A 20 min pela Alberico Flores Bueno.',
    h1: 'Pneus e Oficina para o Bairro Alto',
    heroSubtitle: 'Do Bairro Alto à Carplus em 20 minutos',
    introText: 'O Bairro Alto é um bairro tranquilo da zona norte de Curitiba. Moradores encontram na Carplus pneus de qualidade e preço acessível.',
    localContext: 'Com acesso pela Rua Alberico Flores Bueno, o Bairro Alto está a 20 minutos da Carplus. Trajeto direto pela zona norte.',
    servicesHighlight: [
      'Pneus econômicos e intermediários',
      'Alinhamento 3D',
      'Balanceamento',
      'Troca de óleo',
      'Revisão geral'
    ],
    searchPhrases: [
      'pneus Bairro Alto Curitiba',
      'loja de pneus Bairro Alto',
      'oficina Bairro Alto',
      'alinhamento Bairro Alto'
    ],
    nearbyLandmarks: [
      'Boa Vista',
      'Bacacheri',
      'Tingui'
    ],
    trafficTips: 'Do Bairro Alto, siga pela Rua Alberico Flores Bueno até a Linha Verde ou Av. Paraná.',
    testimonialContext: 'moradores do Bairro Alto',
    whyChooseUs: [
      'Preços acessíveis',
      'Variedade de pneus',
      'Atendimento rápido'
    ],
    localBenefits: 'Moradores do Bairro Alto economizam comprando pneus na Carplus!'
  }
};

// Função para obter conteúdo SEO por slug
export function getNeighborhoodSeoContent(slug: string): NeighborhoodSeoContent | null {
  return NEIGHBORHOOD_SEO_CONTENT[slug] || null;
}

// Função para gerar conteúdo genérico quando não há conteúdo específico
export function generateGenericSeoContent(name: string, slug: string, tempo: string, via: string): NeighborhoodSeoContent {
  return {
    slug,
    name,
    metaTitle: `Pneus ${name} | Carplus Auto Center Curitiba - ${tempo}`,
    metaDescription: `Loja de pneus para ${name}. Pirelli, Michelin, Goodyear com instalação inclusa. Alinhamento 3D e balanceamento. A ${tempo} de você.`,
    h1: `Pneus e Oficina para ${name}`,
    heroSubtitle: `${name}: sua oficina de confiança está a ${tempo}`,
    introText: `Moradores de ${name} encontram na Carplus Auto Center a melhor opção em pneus e serviços automotivos em Curitiba. Localizada no Portão, a ${tempo} de você, oferecemos pneus Pirelli, Michelin, Goodyear e Continental com montagem e balanceamento inclusos.`,
    localContext: `${name} tem acesso fácil ao Portão via ${via}. A Carplus atende moradores da região com qualidade, preço justo e atendimento profissional há mais de 10 anos.`,
    servicesHighlight: [
      'Pneus das melhores marcas com instalação inclusa',
      'Alinhamento computadorizado 3D',
      'Balanceamento de rodas',
      'Troca de óleo e filtros',
      'Revisão de suspensão e freios',
      'Diagnóstico eletrônico'
    ],
    searchPhrases: [
      `pneus ${name}`,
      `loja de pneus ${name}`,
      `oficina ${name}`,
      `alinhamento ${name}`,
      `borracharia ${name}`,
      `troca de pneu ${name}`
    ],
    nearbyLandmarks: [],
    trafficTips: `Do ${name}, siga pela ${via} em direção ao Portão. A Carplus fica na Av. Arthur da Silva Bernardes, 1323.`,
    testimonialContext: `moradores de ${name}`,
    whyChooseUs: [
      'Preços de atacado em pneus',
      'Montagem e balanceamento inclusos',
      'Garantia de fábrica',
      'Parcelamento em até 10x sem juros'
    ],
    localBenefits: `Moradores de ${name} são bem-vindos! Venha conhecer a Carplus e descubra por que somos a oficina mais bem avaliada do Portão.`
  };
}
