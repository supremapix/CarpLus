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
  // ZONA SUL - MUITO PRÓXIMOS
  // ══════════════════════════════════════
  'portao': {
    slug: 'portao',
    name: 'Portão',
    metaTitle: 'Pneus para Portão | Carplus no Portão, Curitiba',
    metaDescription: 'Loja de pneus no Portão, Curitiba. Pneus Pirelli, Michelin, Goodyear com montagem sob consulta. Alinhamento 3D, balanceamento e troca de óleo. Estamos na sua porta!',
    h1: 'Pneus e Oficina no Portão',
    heroSubtitle: 'Atendimento para quem vem de Portão na unidade do Portão, Curitiba',
    introText: 'Moradores do Portão têm a vantagem de contar com a Carplus Centro Automotivo literalmente a poucos passos de casa. Localizada na Av. Arthur da Silva Bernardes, 1323, somos referência em pneus e serviços automotivos na região sul de Curitiba há mais de 10 anos.',
    localContext: 'O Portão é um dos bairros mais tradicionais de Curitiba, conhecido pelo comércio forte e pela proximidade com o Shopping Palladium. Quem mora aqui sabe que praticidade é essencial — e é exatamente isso que oferecemos: serviço de qualidade sem precisar atravessar a cidade.',
    servicesHighlight: [
      'Troca de pneus com montagem e balanceamento sob consulta',
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
      'Consulte o trajeto atualizado no mapa',
      'Supermercado Condor Portão',
      'Terminal do Portão',
      'Colégio Estadual do Paraná',
      'Praça do Portão'
    ],
    trafficTips: 'Para sair de Portão, consulte o mapa com destino à Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Rotas e tempos variam conforme o trânsito.',
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
    metaTitle: 'Pneus para Água Verde | Carplus no Portão, Curitiba',
    metaDescription: 'Pneus e serviços para quem vem de Água Verde. Atendimento na unidade do Portão, Curitiba. Consulte medida, disponibilidade, orçamento e trajeto no mapa.',
    h1: 'Pneus para Moradores do Água Verde',
    heroSubtitle: 'Atendimento para quem vem de Água Verde na unidade do Portão, Curitiba',
    introText: 'Quem vem de Água Verde pode consultar pneus e serviços na Carplus, na Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Informe ano, versão e medida do veículo para conferir as opções e os serviços necessários.',
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
    trafficTips: 'Para sair de Água Verde, consulte o mapa com destino à Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Rotas e tempos variam conforme o trânsito.',
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
    metaTitle: 'Pneus para Guaíra | Carplus no Portão, Curitiba',
    metaDescription: 'Pneus e serviços para quem vem de Guaíra. Atendimento na unidade do Portão, Curitiba. Consulte medida, disponibilidade, orçamento e trajeto no mapa.',
    h1: 'Oficina e Loja de Pneus para o Guaíra',
    heroSubtitle: 'Atendimento para quem vem de Guaíra na unidade do Portão, Curitiba',
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
    trafficTips: 'Para sair de Guaíra, consulte o mapa com destino à Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Rotas e tempos variam conforme o trânsito.',
    testimonialContext: 'vizinhos do Guaíra',
    whyChooseUs: [
      'Próximo ao Guaíra com fácil acesso',
      'Preços de atacado para pneus',
      'Montagem e balanceamento sob consulta',
      'Garantia de fábrica em todos os pneus'
    ],
    localBenefits: 'Agende pelo WhatsApp e ganhe prioridade no atendimento. Moradores do Guaíra são nossos vizinhos e clientes frequentes!'
  },

  'parolin': {
    slug: 'parolin',
    name: 'Parolin',
    metaTitle: 'Pneus para Parolin | Carplus no Portão, Curitiba',
    metaDescription: 'Pneus e serviços para quem vem de Parolin. Atendimento na unidade do Portão, Curitiba. Consulte medida, disponibilidade, orçamento e trajeto no mapa.',
    h1: 'Pneus e Oficina Mecânica para o Parolin',
    heroSubtitle: 'Atendimento para quem vem de Parolin na unidade do Portão, Curitiba',
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
    trafficTips: 'Para sair de Parolin, consulte o mapa com destino à Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Rotas e tempos variam conforme o trânsito.',
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
    metaTitle: 'Pneus para Campo Comprido | Carplus no Portão, Curitiba',
    metaDescription: 'Pneus e serviços para quem vem de Campo Comprido. Atendimento na unidade do Portão, Curitiba. Consulte medida, disponibilidade, orçamento e trajeto no mapa.',
    h1: 'Pneus e Serviços para Campo Comprido',
    heroSubtitle: 'Atendimento para quem vem de Campo Comprido na unidade do Portão, Curitiba',
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
    trafficTips: 'Para sair de Campo Comprido, consulte o mapa com destino à Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Rotas e tempos variam conforme o trânsito.',
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
    metaTitle: 'Pneus para Novo Mundo | Carplus no Portão, Curitiba',
    metaDescription: 'Pneus e serviços para quem vem de Novo Mundo. Atendimento na unidade do Portão, Curitiba. Consulte medida, disponibilidade, orçamento e trajeto no mapa.',
    h1: 'Pneus e Oficina para o Novo Mundo',
    heroSubtitle: 'Atendimento para quem vem de Novo Mundo na unidade do Portão, Curitiba',
    introText: 'O Novo Mundo é um bairro consolidado de Curitiba, com forte comércio e moradores que conhecem bem a importância de manter o carro em dia. A Carplus está próxima para atender com qualidade e preço justo.',
    localContext: 'Antes de se deslocar de Novo Mundo, confirme a disponibilidade e a agenda. Use o mapa para escolher o trajeto até a unidade do Portão, em Curitiba.',
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
    trafficTips: 'Para sair de Novo Mundo, consulte o mapa com destino à Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Rotas e tempos variam conforme o trânsito.',
    testimonialContext: 'moradores do Novo Mundo',
    whyChooseUs: [
      'Preços competitivos em pneus',
      'Atendimento rápido e sem fila',
      'Montagem e balanceamento sob consulta',
      'Garantia de fábrica'
    ],
    localBenefits: 'Venha pela manhã e aproveite para resolver outras coisas no comércio do Portão enquanto seu carro fica pronto.'
  },

  // ══════════════════════════════════════
  // ZONA SUL - PRÓXIMOS
  // ══════════════════════════════════════
  'fazendinha': {
    slug: 'fazendinha',
    name: 'Fazendinha',
    metaTitle: 'Pneus para Fazendinha | Carplus no Portão, Curitiba',
    metaDescription: 'Pneus e serviços para quem vem de Fazendinha. Atendimento na unidade do Portão, Curitiba. Consulte medida, disponibilidade, orçamento e trajeto no mapa.',
    h1: 'Pneus e Oficina para a Fazendinha',
    heroSubtitle: 'Atendimento para quem vem de Fazendinha na unidade do Portão, Curitiba',
    introText: 'A Fazendinha é um bairro residencial tradicional de Curitiba, com famílias que valorizam serviço de qualidade. A Carplus oferece pneus das melhores marcas com preço justo e atendimento diferenciado.',
    localContext: 'Antes de se deslocar de Fazendinha, confirme a disponibilidade e a agenda. Use o mapa para escolher o trajeto até a unidade do Portão, em Curitiba.',
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
    trafficTips: 'Para sair de Fazendinha, consulte o mapa com destino à Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Rotas e tempos variam conforme o trânsito.',
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
    metaTitle: 'Pneus para Capão Raso | Carplus no Portão, Curitiba',
    metaDescription: 'Pneus e serviços para quem vem de Capão Raso. Atendimento na unidade do Portão, Curitiba. Consulte medida, disponibilidade, orçamento e trajeto no mapa.',
    h1: 'Pneus e Serviços Automotivos para o Capão Raso',
    heroSubtitle: 'Atendimento para quem vem de Capão Raso na unidade do Portão, Curitiba',
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
    trafficTips: 'Para sair de Capão Raso, consulte o mapa com destino à Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Rotas e tempos variam conforme o trânsito.',
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
    metaTitle: 'Pneus para CIC | Carplus no Portão, Curitiba',
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
    trafficTips: 'Para sair de CIC, consulte o mapa com destino à Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Rotas e tempos variam conforme o trânsito.',
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
    metaTitle: 'Pneus para Pinheirinho | Carplus no Portão, Curitiba',
    metaDescription: 'Pneus e serviços para quem vem de Pinheirinho. Atendimento na unidade do Portão, Curitiba. Consulte medida, disponibilidade, orçamento e trajeto no mapa.',
    h1: 'Pneus e Oficina para o Pinheirinho',
    heroSubtitle: 'Atendimento para quem vem de Pinheirinho na unidade do Portão, Curitiba',
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
    trafficTips: 'Para sair de Pinheirinho, consulte o mapa com destino à Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Rotas e tempos variam conforme o trânsito.',
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
    metaTitle: 'Pneus para Batel | Carplus no Portão, Curitiba',
    metaDescription: 'Pneus e serviços para quem vem de Batel. Atendimento na unidade do Portão, Curitiba. Consulte medida, disponibilidade, orçamento e trajeto no mapa.',
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
    trafficTips: 'Para sair de Batel, consulte o mapa com destino à Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Rotas e tempos variam conforme o trânsito.',
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
    metaTitle: 'Pneus para Centro | Carplus no Portão, Curitiba',
    metaDescription: 'Pneus e serviços para quem vem de Centro. Atendimento na unidade do Portão, Curitiba. Consulte medida, disponibilidade, orçamento e trajeto no mapa.',
    h1: 'Pneus e Oficina para o Centro de Curitiba',
    heroSubtitle: 'Atendimento para quem vem de Centro na unidade do Portão, Curitiba',
    introText: 'Quem vem de Centro pode consultar pneus e serviços na Carplus, na Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Informe ano, versão e medida do veículo para conferir as opções e os serviços necessários.',
    localContext: 'O Centro de Curitiba é movimentado e nem sempre tem estacionamento fácil. Na Carplus, você encontra acesso fácil com vagas para clientes em frente à loja, atendimento rápido e pode resolver tudo em uma só visita.',
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
    trafficTips: 'Para sair de Centro, consulte o mapa com destino à Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Rotas e tempos variam conforme o trânsito.',
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
    metaTitle: 'Pneus para Rebouças | Carplus no Portão, Curitiba',
    metaDescription: 'Pneus e serviços para quem vem de Rebouças. Atendimento na unidade do Portão, Curitiba. Consulte medida, disponibilidade, orçamento e trajeto no mapa.',
    h1: 'Pneus e Oficina para o Rebouças',
    heroSubtitle: 'Atendimento para quem vem de Rebouças na unidade do Portão, Curitiba',
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
    trafficTips: 'Para sair de Rebouças, consulte o mapa com destino à Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Rotas e tempos variam conforme o trânsito.',
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
    metaTitle: 'Pneus para Bigorrilho | Carplus no Portão, Curitiba',
    metaDescription: 'Pneus e serviços para quem vem de Bigorrilho. Atendimento na unidade do Portão, Curitiba. Consulte medida, disponibilidade, orçamento e trajeto no mapa.',
    h1: 'Pneus e Serviços para o Bigorrilho',
    heroSubtitle: 'Atendimento para quem vem de Bigorrilho na unidade do Portão, Curitiba',
    introText: 'O Bigorrilho é um dos bairros mais valorizados de Curitiba, com moradores que prezam por qualidade em tudo. A Carplus oferece pneus premium e serviços de alto padrão para esse público exigente.',
    localContext: 'Antes de se deslocar de Bigorrilho, confirme a disponibilidade e a agenda. Use o mapa para escolher o trajeto até a unidade do Portão, em Curitiba.',
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
    trafficTips: 'Para sair de Bigorrilho, consulte o mapa com destino à Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Rotas e tempos variam conforme o trânsito.',
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
    metaTitle: 'Pneus para Mercês | Carplus no Portão, Curitiba',
    metaDescription: 'Pneus e serviços para quem vem de Mercês. Atendimento na unidade do Portão, Curitiba. Consulte medida, disponibilidade, orçamento e trajeto no mapa.',
    h1: 'Pneus e Oficina para as Mercês',
    heroSubtitle: 'Atendimento para quem vem de Mercês na unidade do Portão, Curitiba',
    introText: 'As Mercês são um bairro tradicional de Curitiba, com moradores que valorizam serviço de qualidade. A Carplus oferece pneus das melhores marcas e atendimento diferenciado.',
    localContext: 'Antes de se deslocar de Mercês, confirme a disponibilidade e a agenda. Use o mapa para escolher o trajeto até a unidade do Portão, em Curitiba.',
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
    trafficTips: 'Para sair de Mercês, consulte o mapa com destino à Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Rotas e tempos variam conforme o trânsito.',
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
    metaTitle: 'Pneus para Jardim Botânico | Carplus no Portão, Curitiba',
    metaDescription: 'Pneus e serviços para quem vem de Jardim Botânico. Atendimento na unidade do Portão, Curitiba. Consulte medida, disponibilidade, orçamento e trajeto no mapa.',
    h1: 'Pneus e Oficina para o Jardim Botânico',
    heroSubtitle: 'Atendimento para quem vem de Jardim Botânico na unidade do Portão, Curitiba',
    introText: 'O Jardim Botânico é o cartão-postal de Curitiba e abriga moradores que valorizam qualidade de vida. O prazo depende da avaliação do veículo e da agenda da oficina; confirme com a equipe antes de se deslocar.',
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
    trafficTips: 'Para sair de Jardim Botânico, consulte o mapa com destino à Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Rotas e tempos variam conforme o trânsito.',
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
    metaTitle: 'Pneus para Santa Felicidade | Carplus no Portão, Curitiba',
    metaDescription: 'Pneus e serviços para quem vem de Santa Felicidade. Atendimento na unidade do Portão, Curitiba. Consulte medida, disponibilidade, orçamento e trajeto no mapa.',
    h1: 'Pneus e Oficina para Santa Felicidade',
    heroSubtitle: 'Atendimento para quem vem de Santa Felicidade na unidade do Portão, Curitiba',
    introText: 'Santa Felicidade, o bairro italiano de Curitiba, é conhecido pela gastronomia e pela comunidade acolhedora. Moradores que buscam pneus de qualidade encontram na Carplus o melhor custo-benefício.',
    localContext: 'Antes de se deslocar de Santa Felicidade, confirme a disponibilidade e a agenda. Use o mapa para escolher o trajeto até a unidade do Portão, em Curitiba.',
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
    trafficTips: 'Para sair de Santa Felicidade, consulte o mapa com destino à Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Rotas e tempos variam conforme o trânsito.',
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
    metaTitle: 'Pneus para Cajuru | Carplus no Portão, Curitiba',
    metaDescription: 'Pneus e serviços para quem vem de Cajuru. Atendimento na unidade do Portão, Curitiba. Consulte medida, disponibilidade, orçamento e trajeto no mapa.',
    h1: 'Pneus e Oficina para o Cajuru',
    heroSubtitle: 'Atendimento para quem vem de Cajuru na unidade do Portão, Curitiba',
    introText: 'O Cajuru é um dos maiores bairros de Curitiba, com comunidade ativa e diversificada. A Carplus atende moradores do Cajuru com pneus de qualidade e preços justos.',
    localContext: 'Antes de se deslocar de Cajuru, confirme a disponibilidade e a agenda. Use o mapa para escolher o trajeto até a unidade do Portão, em Curitiba.',
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
    trafficTips: 'Para sair de Cajuru, consulte o mapa com destino à Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Rotas e tempos variam conforme o trânsito.',
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
    metaTitle: 'Pneus para Uberaba | Carplus no Portão, Curitiba',
    metaDescription: 'Pneus e serviços para quem vem de Uberaba. Atendimento na unidade do Portão, Curitiba. Consulte medida, disponibilidade, orçamento e trajeto no mapa.',
    h1: 'Pneus e Oficina para o Uberaba',
    heroSubtitle: 'Atendimento para quem vem de Uberaba na unidade do Portão, Curitiba',
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
    trafficTips: 'Para sair de Uberaba, consulte o mapa com destino à Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Rotas e tempos variam conforme o trânsito.',
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
    metaTitle: 'Pneus para Bacacheri | Carplus no Portão, Curitiba',
    metaDescription: 'Pneus e serviços para quem vem de Bacacheri. Atendimento na unidade do Portão, Curitiba. Consulte medida, disponibilidade, orçamento e trajeto no mapa.',
    h1: 'Pneus e Oficina para o Bacacheri',
    heroSubtitle: 'Atendimento para quem vem de Bacacheri na unidade do Portão, Curitiba',
    introText: 'O Bacacheri é um bairro tranquilo da zona norte de Curitiba, próximo ao aeroporto. Moradores encontram na Carplus pneus de todas as marcas e serviços automotivos completos.',
    localContext: 'Antes de se deslocar de Bacacheri, confirme a disponibilidade e a agenda. Use o mapa para escolher o trajeto até a unidade do Portão, em Curitiba.',
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
    trafficTips: 'Para sair de Bacacheri, consulte o mapa com destino à Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Rotas e tempos variam conforme o trânsito.',
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
    metaTitle: 'Pneus para Boa Vista | Carplus no Portão, Curitiba',
    metaDescription: 'Pneus e serviços para quem vem de Boa Vista. Atendimento na unidade do Portão, Curitiba. Consulte medida, disponibilidade, orçamento e trajeto no mapa.',
    h1: 'Pneus e Oficina para Boa Vista',
    heroSubtitle: 'Atendimento para quem vem de Boa Vista na unidade do Portão, Curitiba',
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
    trafficTips: 'Para sair de Boa Vista, consulte o mapa com destino à Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Rotas e tempos variam conforme o trânsito.',
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
    metaTitle: 'Pneus para Santa Cândida | Carplus no Portão, Curitiba',
    metaDescription: 'Pneus e serviços para quem vem de Santa Cândida. Atendimento na unidade do Portão, Curitiba. Consulte medida, disponibilidade, orçamento e trajeto no mapa.',
    h1: 'Pneus e Oficina para Santa Cândida',
    heroSubtitle: 'Atendimento para quem vem de Santa Cândida na unidade do Portão, Curitiba',
    introText: 'Santa Cândida é um bairro em crescimento na zona norte de Curitiba. Moradores que buscam pneus de qualidade encontram na Carplus variedade e preço justo.',
    localContext: 'Antes de se deslocar de Santa Cândida, confirme a disponibilidade e a agenda. Use o mapa para escolher o trajeto até a unidade do Portão, em Curitiba.',
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
    trafficTips: 'Para sair de Santa Cândida, consulte o mapa com destino à Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Rotas e tempos variam conforme o trânsito.',
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
    metaTitle: 'Pneus para São José dos Pinhais | Carplus no Portão, Curitiba',
    metaDescription: 'Pneus e serviços para quem vem de São José dos Pinhais. Atendimento na unidade do Portão, Curitiba. Consulte medida, disponibilidade, orçamento e trajeto no mapa.',
    h1: 'Pneus e Oficina para São José dos Pinhais',
    heroSubtitle: 'Atendimento para quem vem de São José dos Pinhais na unidade do Portão, Curitiba',
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
    trafficTips: 'Para sair de São José dos Pinhais, consulte o mapa com destino à Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Rotas e tempos variam conforme o trânsito.',
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
    metaTitle: 'Pneus para Colombo | Carplus no Portão, Curitiba',
    metaDescription: 'Pneus e serviços para quem vem de Colombo. Atendimento na unidade do Portão, Curitiba. Consulte medida, disponibilidade, orçamento e trajeto no mapa.',
    h1: 'Pneus e Oficina para Colombo',
    heroSubtitle: 'Atendimento para quem vem de Colombo na unidade do Portão, Curitiba',
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
    trafficTips: 'Para sair de Colombo, consulte o mapa com destino à Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Rotas e tempos variam conforme o trânsito.',
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
    metaTitle: 'Pneus para Pinhais | Carplus no Portão, Curitiba',
    metaDescription: 'Pneus e serviços para quem vem de Pinhais. Atendimento na unidade do Portão, Curitiba. Consulte medida, disponibilidade, orçamento e trajeto no mapa.',
    h1: 'Pneus e Oficina para Pinhais',
    heroSubtitle: 'Atendimento para quem vem de Pinhais na unidade do Portão, Curitiba',
    introText: 'Pinhais faz divisa com Curitiba e tem acesso fácil ao Portão. Moradores encontram na Carplus pneus de qualidade e serviços profissionais pertinho de casa.',
    localContext: 'Antes de se deslocar de Pinhais, confirme a disponibilidade e a agenda. Use o mapa para escolher o trajeto até a unidade do Portão, em Curitiba.',
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
    trafficTips: 'Para sair de Pinhais, consulte o mapa com destino à Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Rotas e tempos variam conforme o trânsito.',
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
    metaTitle: 'Pneus para Araucária | Carplus no Portão, Curitiba',
    metaDescription: 'Pneus e serviços para quem vem de Araucária. Atendimento na unidade do Portão, Curitiba. Consulte medida, disponibilidade, orçamento e trajeto no mapa.',
    h1: 'Pneus e Oficina para Araucária',
    heroSubtitle: 'Atendimento para quem vem de Araucária na unidade do Portão, Curitiba',
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
    trafficTips: 'Para sair de Araucária, consulte o mapa com destino à Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Rotas e tempos variam conforme o trânsito.',
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
    metaTitle: 'Pneus para Campo Largo | Carplus no Portão, Curitiba',
    metaDescription: 'Pneus e serviços para quem vem de Campo Largo. Atendimento na unidade do Portão, Curitiba. Consulte medida, disponibilidade, orçamento e trajeto no mapa.',
    h1: 'Pneus e Oficina para Campo Largo',
    heroSubtitle: 'Atendimento para quem vem de Campo Largo na unidade do Portão, Curitiba',
    introText: 'Campo Largo, a capital da louça, tem moradores que conhecem qualidade. Para pneus e serviços automotivos, a Carplus oferece o melhor custo-benefício da região.',
    localContext: 'Antes de se deslocar de Campo Largo, confirme a disponibilidade e a agenda. Use o mapa para escolher o trajeto até a unidade do Portão, em Curitiba.',
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
    trafficTips: 'Para sair de Campo Largo, consulte o mapa com destino à Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Rotas e tempos variam conforme o trânsito.',
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
    metaTitle: 'Pneus para Almirante Tamandaré | Carplus no Portão, Curitiba',
    metaDescription: 'Pneus e serviços para quem vem de Almirante Tamandaré. Atendimento na unidade do Portão, Curitiba. Consulte medida, disponibilidade, orçamento e trajeto no mapa.',
    h1: 'Pneus e Oficina para Almirante Tamandaré',
    heroSubtitle: 'Atendimento para quem vem de Almirante Tamandaré na unidade do Portão, Curitiba',
    introText: 'Almirante Tamandaré é uma cidade em crescimento na região metropolitana. Moradores encontram na Carplus pneus de qualidade e preços justos.',
    localContext: 'Antes de se deslocar de Almirante Tamandaré, confirme a disponibilidade e a agenda. Use o mapa para escolher o trajeto até a unidade do Portão, em Curitiba.',
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
    trafficTips: 'Para sair de Almirante Tamandaré, consulte o mapa com destino à Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Rotas e tempos variam conforme o trânsito.',
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
    metaTitle: 'Pneus para Fazenda Rio Grande | Carplus no Portão, Curitiba',
    metaDescription: 'Pneus e serviços para quem vem de Fazenda Rio Grande. Atendimento na unidade do Portão, Curitiba. Consulte medida, disponibilidade, orçamento e trajeto no mapa.',
    h1: 'Pneus e Oficina para Fazenda Rio Grande',
    heroSubtitle: 'Atendimento para quem vem de Fazenda Rio Grande na unidade do Portão, Curitiba',
    introText: 'Fazenda Rio Grande é uma cidade em expansão na região sul de Curitiba. Moradores encontram na Carplus pneus de qualidade e serviços profissionais.',
    localContext: 'Antes de se deslocar de Fazenda Rio Grande, confirme a disponibilidade e a agenda. Use o mapa para escolher o trajeto até a unidade do Portão, em Curitiba.',
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
    trafficTips: 'Para sair de Fazenda Rio Grande, consulte o mapa com destino à Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Rotas e tempos variam conforme o trânsito.',
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
    metaTitle: 'Pneus para Sítio Cercado | Carplus no Portão, Curitiba',
    metaDescription: 'Pneus e serviços para quem vem de Sítio Cercado. Atendimento na unidade do Portão, Curitiba. Consulte medida, disponibilidade, orçamento e trajeto no mapa.',
    h1: 'Pneus e Oficina para o Sítio Cercado',
    heroSubtitle: 'Atendimento para quem vem de Sítio Cercado na unidade do Portão, Curitiba',
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
    trafficTips: 'Para sair de Sítio Cercado, consulte o mapa com destino à Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Rotas e tempos variam conforme o trânsito.',
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
    metaTitle: 'Pneus para Tatuquara | Carplus no Portão, Curitiba',
    metaDescription: 'Pneus e serviços para quem vem de Tatuquara. Atendimento na unidade do Portão, Curitiba. Consulte medida, disponibilidade, orçamento e trajeto no mapa.',
    h1: 'Pneus e Oficina para o Tatuquara',
    heroSubtitle: 'Atendimento para quem vem de Tatuquara na unidade do Portão, Curitiba',
    introText: 'O Tatuquara é um bairro em desenvolvimento na zona sul de Curitiba. Moradores encontram na Carplus pneus de qualidade com preços que cabem no orçamento.',
    localContext: 'Antes de se deslocar de Tatuquara, confirme a disponibilidade e a agenda. Use o mapa para escolher o trajeto até a unidade do Portão, em Curitiba.',
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
    trafficTips: 'Para sair de Tatuquara, consulte o mapa com destino à Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Rotas e tempos variam conforme o trânsito.',
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
    metaTitle: 'Pneus para Umbará | Carplus no Portão, Curitiba',
    metaDescription: 'Pneus e serviços para quem vem de Umbará. Atendimento na unidade do Portão, Curitiba. Consulte medida, disponibilidade, orçamento e trajeto no mapa.',
    h1: 'Pneus e Oficina para o Umbará',
    heroSubtitle: 'Atendimento para quem vem de Umbará na unidade do Portão, Curitiba',
    introText: 'O Umbará é um bairro residencial tranquilo na zona sul de Curitiba. Moradores que buscam pneus de qualidade encontram na Carplus variedade e bom preço.',
    localContext: 'Antes de se deslocar de Umbará, confirme a disponibilidade e a agenda. Use o mapa para escolher o trajeto até a unidade do Portão, em Curitiba.',
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
    trafficTips: 'Para sair de Umbará, consulte o mapa com destino à Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Rotas e tempos variam conforme o trânsito.',
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
    metaTitle: 'Pneus para Centro Cívico | Carplus no Portão, Curitiba',
    metaDescription: 'Pneus e serviços para quem vem de Centro Cívico. Atendimento na unidade do Portão, Curitiba. Consulte medida, disponibilidade, orçamento e trajeto no mapa.',
    h1: 'Pneus e Oficina para o Centro Cívico',
    heroSubtitle: 'Atendimento para quem vem de Centro Cívico na unidade do Portão, Curitiba',
    introText: 'Quem vem de Centro Cívico pode consultar pneus e serviços na Carplus, na Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Informe ano, versão e medida do veículo para conferir as opções e os serviços necessários.',
    localContext: 'Antes de se deslocar de Centro Cívico, confirme a disponibilidade e a agenda. Use o mapa para escolher o trajeto até a unidade do Portão, em Curitiba.',
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
    trafficTips: 'Para sair de Centro Cívico, consulte o mapa com destino à Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Rotas e tempos variam conforme o trânsito.',
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
    metaTitle: 'Pneus para Ahú | Carplus no Portão, Curitiba',
    metaDescription: 'Pneus e serviços para quem vem de Ahú. Atendimento na unidade do Portão, Curitiba. Consulte medida, disponibilidade, orçamento e trajeto no mapa.',
    h1: 'Pneus e Oficina para o Ahú',
    heroSubtitle: 'Atendimento para quem vem de Ahú na unidade do Portão, Curitiba',
    introText: 'O Ahú é um bairro tradicional e arborizado de Curitiba. Moradores que valorizam qualidade encontram na Carplus pneus das melhores marcas.',
    localContext: 'Antes de se deslocar de Ahú, confirme a disponibilidade e a agenda. Use o mapa para escolher o trajeto até a unidade do Portão, em Curitiba.',
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
    trafficTips: 'Para sair de Ahú, consulte o mapa com destino à Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Rotas e tempos variam conforme o trânsito.',
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
    metaTitle: 'Pneus para Cabral | Carplus no Portão, Curitiba',
    metaDescription: 'Pneus e serviços para quem vem de Cabral. Atendimento na unidade do Portão, Curitiba. Consulte medida, disponibilidade, orçamento e trajeto no mapa.',
    h1: 'Pneus e Oficina para o Cabral',
    heroSubtitle: 'Atendimento para quem vem de Cabral na unidade do Portão, Curitiba',
    introText: 'O Cabral é um bairro valorizado de Curitiba, com infraestrutura completa. Moradores exigentes encontram na Carplus pneus premium e serviço de qualidade.',
    localContext: 'Antes de se deslocar de Cabral, confirme a disponibilidade e a agenda. Use o mapa para escolher o trajeto até a unidade do Portão, em Curitiba.',
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
    trafficTips: 'Para sair de Cabral, consulte o mapa com destino à Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Rotas e tempos variam conforme o trânsito.',
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
    metaTitle: 'Pneus para Juvevê | Carplus no Portão, Curitiba',
    metaDescription: 'Pneus e serviços para quem vem de Juvevê. Atendimento na unidade do Portão, Curitiba. Consulte medida, disponibilidade, orçamento e trajeto no mapa.',
    h1: 'Pneus e Oficina para o Juvevê',
    heroSubtitle: 'Atendimento para quem vem de Juvevê na unidade do Portão, Curitiba',
    introText: 'O Juvevê é um bairro nobre de Curitiba, conhecido pela gastronomia e qualidade de vida. Moradores encontram na Carplus pneus de alta qualidade.',
    localContext: 'Antes de se deslocar de Juvevê, confirme a disponibilidade e a agenda. Use o mapa para escolher o trajeto até a unidade do Portão, em Curitiba.',
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
    trafficTips: 'Para sair de Juvevê, consulte o mapa com destino à Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Rotas e tempos variam conforme o trânsito.',
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
    metaTitle: 'Pneus para Alto da Glória | Carplus no Portão, Curitiba',
    metaDescription: 'Pneus e serviços para quem vem de Alto da Glória. Atendimento na unidade do Portão, Curitiba. Consulte medida, disponibilidade, orçamento e trajeto no mapa.',
    h1: 'Pneus e Oficina para o Alto da Glória',
    heroSubtitle: 'Atendimento para quem vem de Alto da Glória na unidade do Portão, Curitiba',
    introText: 'O Alto da Glória é um dos bairros mais tradicionais de Curitiba, próximo ao centro. Moradores encontram na Carplus pneus de qualidade e atendimento profissional.',
    localContext: 'Antes de se deslocar de Alto da Glória, confirme a disponibilidade e a agenda. Use o mapa para escolher o trajeto até a unidade do Portão, em Curitiba.',
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
    trafficTips: 'Para sair de Alto da Glória, consulte o mapa com destino à Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Rotas e tempos variam conforme o trânsito.',
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
    metaTitle: 'Pneus para Alto da Rua XV | Carplus no Portão, Curitiba',
    metaDescription: 'Pneus e serviços para quem vem de Alto da Rua XV. Atendimento na unidade do Portão, Curitiba. Consulte medida, disponibilidade, orçamento e trajeto no mapa.',
    h1: 'Pneus e Oficina para o Alto da Rua XV',
    heroSubtitle: 'Atendimento para quem vem de Alto da Rua XV na unidade do Portão, Curitiba',
    introText: 'O Alto da Rua XV é um bairro charmoso de Curitiba, conhecido pelos bares e restaurantes. Moradores encontram na Carplus pneus de qualidade pertinho de casa.',
    localContext: 'Antes de se deslocar de Alto da Rua XV, confirme a disponibilidade e a agenda. Use o mapa para escolher o trajeto até a unidade do Portão, em Curitiba.',
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
    trafficTips: 'Para sair de Alto da Rua XV, consulte o mapa com destino à Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Rotas e tempos variam conforme o trânsito.',
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
    metaTitle: 'Pneus para Cristo Rei | Carplus no Portão, Curitiba',
    metaDescription: 'Pneus e serviços para quem vem de Cristo Rei. Atendimento na unidade do Portão, Curitiba. Consulte medida, disponibilidade, orçamento e trajeto no mapa.',
    h1: 'Pneus e Oficina para o Cristo Rei',
    heroSubtitle: 'Atendimento para quem vem de Cristo Rei na unidade do Portão, Curitiba',
    introText: 'O Cristo Rei é um bairro universitário de Curitiba, próximo à PUC-PR. Estudantes e moradores encontram na Carplus pneus com bom preço.',
    localContext: 'Antes de se deslocar de Cristo Rei, confirme a disponibilidade e a agenda. Use o mapa para escolher o trajeto até a unidade do Portão, em Curitiba.',
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
    trafficTips: 'Para sair de Cristo Rei, consulte o mapa com destino à Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Rotas e tempos variam conforme o trânsito.',
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
    metaTitle: 'Pneus para Tingui | Carplus no Portão, Curitiba',
    metaDescription: 'Pneus e serviços para quem vem de Tingui. Atendimento na unidade do Portão, Curitiba. Consulte medida, disponibilidade, orçamento e trajeto no mapa.',
    h1: 'Pneus e Oficina para o Tingui',
    heroSubtitle: 'Atendimento para quem vem de Tingui na unidade do Portão, Curitiba',
    introText: 'Quem vem de Tingui pode consultar pneus e serviços na Carplus, na Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Informe ano, versão e medida do veículo para conferir as opções e os serviços necessários.',
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
    trafficTips: 'Para sair de Tingui, consulte o mapa com destino à Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Rotas e tempos variam conforme o trânsito.',
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
    metaTitle: 'Pneus para Atuba | Carplus no Portão, Curitiba',
    metaDescription: 'Pneus e serviços para quem vem de Atuba. Atendimento na unidade do Portão, Curitiba. Consulte medida, disponibilidade, orçamento e trajeto no mapa.',
    h1: 'Pneus e Oficina para o Atuba',
    heroSubtitle: 'Atendimento para quem vem de Atuba na unidade do Portão, Curitiba',
    introText: 'O Atuba fica na divisa entre Curitiba e Colombo, com fácil acesso pela BR-116. Moradores encontram na Carplus pneus de qualidade.',
    localContext: 'Antes de se deslocar de Atuba, confirme a disponibilidade e a agenda. Use o mapa para escolher o trajeto até a unidade do Portão, em Curitiba.',
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
    trafficTips: 'Para sair de Atuba, consulte o mapa com destino à Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Rotas e tempos variam conforme o trânsito.',
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
    metaTitle: 'Pneus para Barreirinha | Carplus no Portão, Curitiba',
    metaDescription: 'Pneus e serviços para quem vem de Barreirinha. Atendimento na unidade do Portão, Curitiba. Consulte medida, disponibilidade, orçamento e trajeto no mapa.',
    h1: 'Pneus e Oficina para a Barreirinha',
    heroSubtitle: 'Atendimento para quem vem de Barreirinha na unidade do Portão, Curitiba',
    introText: 'A Barreirinha é um bairro tradicional da zona norte de Curitiba. Moradores encontram na Carplus pneus de qualidade com preço acessível.',
    localContext: 'Antes de se deslocar de Barreirinha, confirme a disponibilidade e a agenda. Use o mapa para escolher o trajeto até a unidade do Portão, em Curitiba.',
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
    trafficTips: 'Para sair de Barreirinha, consulte o mapa com destino à Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Rotas e tempos variam conforme o trânsito.',
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
    metaTitle: 'Pneus para Pilarzinho | Carplus no Portão, Curitiba',
    metaDescription: 'Pneus e serviços para quem vem de Pilarzinho. Atendimento na unidade do Portão, Curitiba. Consulte medida, disponibilidade, orçamento e trajeto no mapa.',
    h1: 'Pneus e Oficina para o Pilarzinho',
    heroSubtitle: 'Atendimento para quem vem de Pilarzinho na unidade do Portão, Curitiba',
    introText: 'O Pilarzinho é um bairro residencial tranquilo de Curitiba. Moradores encontram na Carplus pneus de todas as marcas com preço justo.',
    localContext: 'Antes de se deslocar de Pilarzinho, confirme a disponibilidade e a agenda. Use o mapa para escolher o trajeto até a unidade do Portão, em Curitiba.',
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
    trafficTips: 'Para sair de Pilarzinho, consulte o mapa com destino à Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Rotas e tempos variam conforme o trânsito.',
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
    metaTitle: 'Pneus para São Lourenço | Carplus no Portão, Curitiba',
    metaDescription: 'Pneus e serviços para quem vem de São Lourenço. Atendimento na unidade do Portão, Curitiba. Consulte medida, disponibilidade, orçamento e trajeto no mapa.',
    h1: 'Pneus e Oficina para o São Lourenço',
    heroSubtitle: 'Atendimento para quem vem de São Lourenço na unidade do Portão, Curitiba',
    introText: 'Quem vem de São Lourenço pode consultar pneus e serviços na Carplus, na Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Informe ano, versão e medida do veículo para conferir as opções e os serviços necessários.',
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
    trafficTips: 'Para sair de São Lourenço, consulte o mapa com destino à Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Rotas e tempos variam conforme o trânsito.',
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
    metaTitle: 'Pneus para Bairro Alto | Carplus no Portão, Curitiba',
    metaDescription: 'Pneus e serviços para quem vem de Bairro Alto. Atendimento na unidade do Portão, Curitiba. Consulte medida, disponibilidade, orçamento e trajeto no mapa.',
    h1: 'Pneus e Oficina para o Bairro Alto',
    heroSubtitle: 'Atendimento para quem vem de Bairro Alto na unidade do Portão, Curitiba',
    introText: 'O Bairro Alto é um bairro tranquilo da zona norte de Curitiba. Moradores encontram na Carplus pneus de qualidade e preço acessível.',
    localContext: 'Antes de se deslocar de Bairro Alto, confirme a disponibilidade e a agenda. Use o mapa para escolher o trajeto até a unidade do Portão, em Curitiba.',
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
    trafficTips: 'Para sair de Bairro Alto, consulte o mapa com destino à Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Rotas e tempos variam conforme o trânsito.',
    testimonialContext: 'moradores do Bairro Alto',
    whyChooseUs: [
      'Preços acessíveis',
      'Variedade de pneus',
      'Atendimento rápido'
    ],
    localBenefits: 'Moradores do Bairro Alto economizam comprando pneus na Carplus!'
  },

  // ══════════════════════════════════════
  // NOVOS BAIRROS - ZONA SUL E OESTE
  // ══════════════════════════════════════
  'abranches': {
    slug: 'abranches',
    name: 'Abranches',
    metaTitle: 'Pneus para Abranches | Carplus no Portão, Curitiba',
    metaDescription: 'Pneus e serviços para quem vem de Abranches. Atendimento na unidade do Portão, Curitiba. Consulte medida, disponibilidade, orçamento e trajeto no mapa.',
    h1: 'Pneus e Oficina para Abranches',
    heroSubtitle: 'Atendimento para quem vem de Abranches na unidade do Portão, Curitiba',
    introText: 'O bairro Abranches, tradicional região norte de Curitiba, conta com a Carplus Centro Automotivo para todas as necessidades automotivas. Oferecemos pneus das melhores marcas com instalação profissional e preço justo.',
    localContext: 'Antes de se deslocar de Abranches, confirme a disponibilidade e a agenda. Use o mapa para escolher o trajeto até a unidade do Portão, em Curitiba.',
    servicesHighlight: [
      'Pneus Pirelli, Michelin, Goodyear e Yokohama',
      'Alinhamento computadorizado 3D Hunter',
      'Balanceamento de rodas',
      'Troca de óleo sintético e mineral',
      'Revisão de suspensão e freios'
    ],
    searchPhrases: [
      'pneus Abranches Curitiba',
      'loja de pneus Abranches',
      'oficina mecânica Abranches',
      'alinhamento Abranches',
      'borracharia Abranches'
    ],
    nearbyLandmarks: [
      'Parque Tingui',
      'Santa Cândida',
      'Cachoeira'
    ],
    trafficTips: 'Para sair de Abranches, consulte o mapa com destino à Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Rotas e tempos variam conforme o trânsito.',
    testimonialContext: 'moradores de Abranches',
    whyChooseUs: [
      'Preços de atacado em todas as marcas',
      'Montagem e balanceamento sob consulta',
      'Atendimento sem agendamento',
      'Garantia de fábrica'
    ],
    localBenefits: 'Moradores de Abranches podem combinar a visita à Carplus com um passeio pelo Parque Tingui!'
  },

  'bom-retiro': {
    slug: 'bom-retiro',
    name: 'Bom Retiro',
    metaTitle: 'Pneus para Bom Retiro | Carplus no Portão, Curitiba',
    metaDescription: 'Pneus e serviços para quem vem de Bom Retiro. Atendimento na unidade do Portão, Curitiba. Consulte medida, disponibilidade, orçamento e trajeto no mapa.',
    h1: 'Pneus e Oficina para o Bom Retiro',
    heroSubtitle: 'Atendimento para quem vem de Bom Retiro na unidade do Portão, Curitiba',
    introText: 'O Bom Retiro é um bairro tradicional e bem localizado de Curitiba. Para moradores que buscam pneus de qualidade e serviços automotivos confiáveis, a Carplus Centro Automotivo oferece o melhor atendimento.',
    localContext: 'Com fácil acesso ao centro e outras regiões, o Bom Retiro tem moradores exigentes que valorizam qualidade. A Carplus atende esse perfil com pneus premium e serviços de alta qualidade.',
    servicesHighlight: [
      'Pneus para carros populares e executivos',
      'Alinhamento 3D de precisão',
      'Balanceamento computadorizado',
      'Troca de óleo com filtros',
      'Diagnóstico eletrônico'
    ],
    searchPhrases: [
      'pneus Bom Retiro Curitiba',
      'loja de pneus Bom Retiro',
      'oficina Bom Retiro',
      'alinhamento Bom Retiro',
      'troca de pneu Bom Retiro'
    ],
    nearbyLandmarks: [
      'Centro Cívico',
      'Ahú',
      'Mercês'
    ],
    trafficTips: 'Para sair de Bom Retiro, consulte o mapa com destino à Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Rotas e tempos variam conforme o trânsito.',
    testimonialContext: 'moradores do Bom Retiro',
    whyChooseUs: [
      'Qualidade premium',
      'Atendimento personalizado',
      'Parcelamento facilitado'
    ],
    localBenefits: 'O Bom Retiro tem acesso direto ao Portão - aproveite para conhecer a Carplus!'
  },

  'boqueirao': {
    slug: 'boqueirao',
    name: 'Boqueirão',
    metaTitle: 'Pneus para Boqueirão | Carplus no Portão, Curitiba',
    metaDescription: 'Pneus e serviços para quem vem de Boqueirão. Atendimento na unidade do Portão, Curitiba. Consulte medida, disponibilidade, orçamento e trajeto no mapa.',
    h1: 'Pneus e Oficina para o Boqueirão',
    heroSubtitle: 'Atendimento para quem vem de Boqueirão na unidade do Portão, Curitiba',
    introText: 'O Boqueirão é um dos maiores e mais populosos bairros de Curitiba. A Carplus Centro Automotivo atende essa comunidade com pneus de todas as marcas e serviços automotivos completos, com preço justo e atendimento de qualidade.',
    localContext: 'Com forte comércio e grande população, o Boqueirão tem moradores que precisam de praticidade. A Carplus oferece estoque próprio de pneus e serviços rápidos para quem não pode perder tempo.',
    servicesHighlight: [
      'Pneus econômicos e intermediários para carros populares',
      'Pneus para SUVs e picapes leves',
      'Alinhamento computadorizado 3D',
      'Balanceamento de rodas aro 13 a 22',
      'Troca de óleo e revisão básica',
      'Suspensão e freios'
    ],
    searchPhrases: [
      'pneus Boqueirão Curitiba',
      'loja de pneus Boqueirão',
      'oficina mecânica Boqueirão',
      'alinhamento Boqueirão',
      'borracharia Boqueirão',
      'pneus baratos Boqueirão'
    ],
    nearbyLandmarks: [
      'Terminal do Boqueirão',
      'Supermercado Condor Boqueirão',
      'Av. Marechal Floriano Peixoto'
    ],
    trafficTips: 'Para sair de Boqueirão, consulte o mapa com destino à Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Rotas e tempos variam conforme o trânsito.',
    testimonialContext: 'moradores do Boqueirão',
    whyChooseUs: [
      'Maior estoque de pneus da região',
      'Preços competitivos',
      'Atendimento rápido sem fila',
      'Parcelamento em até 10x'
    ],
    localBenefits: 'O Boqueirão tem acesso direto pela Linha Verde - venha conhecer a Carplus e aproveite os melhores preços!'
  },

  'butiatuvinha': {
    slug: 'butiatuvinha',
    name: 'Butiatuvinha',
    metaTitle: 'Pneus para Butiatuvinha | Carplus no Portão, Curitiba',
    metaDescription: 'Pneus e serviços para quem vem de Butiatuvinha. Atendimento na unidade do Portão, Curitiba. Consulte medida, disponibilidade, orçamento e trajeto no mapa.',
    h1: 'Pneus e Oficina para Butiatuvinha',
    heroSubtitle: 'Butiatuvinha: pneus de qualidade com atendimento diferenciado',
    introText: 'Butiatuvinha é um bairro residencial na região noroeste de Curitiba. Moradores encontram na Carplus Centro Automotivo todas as soluções em pneus e serviços automotivos.',
    localContext: 'O bairro Butiatuvinha fica próximo ao Parque Tingui e Santa Felicidade. A Carplus atende moradores da região com qualidade e preço justo.',
    servicesHighlight: [
      'Pneus para todos os tipos de veículos',
      'Alinhamento 3D',
      'Balanceamento',
      'Troca de óleo',
      'Revisão completa'
    ],
    searchPhrases: [
      'pneus Butiatuvinha',
      'oficina Butiatuvinha',
      'alinhamento Butiatuvinha Curitiba',
      'troca de pneu Butiatuvinha'
    ],
    nearbyLandmarks: [
      'Parque Tingui',
      'Santa Felicidade',
      'Lamenha Pequena'
    ],
    trafficTips: 'Para sair de Butiatuvinha, consulte o mapa com destino à Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Rotas e tempos variam conforme o trânsito.',
    testimonialContext: 'moradores de Butiatuvinha',
    whyChooseUs: [
      'Atendimento especializado',
      'Preços justos',
      'Garantia de fábrica'
    ],
    localBenefits: 'Moradores de Butiatuvinha podem aproveitar para conhecer nossa loja no caminho para o centro!'
  },

  'cachoeira': {
    slug: 'cachoeira',
    name: 'Cachoeira',
    metaTitle: 'Pneus para Cachoeira | Carplus no Portão, Curitiba',
    metaDescription: 'Pneus e serviços para quem vem de Cachoeira. Atendimento na unidade do Portão, Curitiba. Consulte medida, disponibilidade, orçamento e trajeto no mapa.',
    h1: 'Pneus e Oficina para Cachoeira',
    heroSubtitle: 'Atendimento para quem vem de Cachoeira na unidade do Portão, Curitiba',
    introText: 'O bairro Cachoeira, na zona norte de Curitiba, conta com a Carplus Centro Automotivo para todas as necessidades em pneus e serviços automotivos.',
    localContext: 'Cachoeira é um bairro tranquilo com fácil acesso à região central. A Carplus oferece pneus de qualidade e serviços profissionais.',
    servicesHighlight: [
      'Pneus das melhores marcas',
      'Alinhamento computadorizado',
      'Balanceamento de rodas',
      'Troca de óleo',
      'Suspensão e freios'
    ],
    searchPhrases: [
      'pneus Cachoeira Curitiba',
      'oficina Cachoeira',
      'alinhamento Cachoeira',
      'loja de pneus Cachoeira'
    ],
    nearbyLandmarks: [
      'Abranches',
      'Santa Cândida',
      'Barreirinha'
    ],
    trafficTips: 'Para sair de Cachoeira, consulte o mapa com destino à Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Rotas e tempos variam conforme o trânsito.',
    testimonialContext: 'moradores de Cachoeira',
    whyChooseUs: [
      'Qualidade garantida',
      'Preços acessíveis',
      'Atendimento rápido'
    ],
    localBenefits: 'Moradores de Cachoeira economizam tempo e dinheiro na Carplus!'
  },

  'campina-do-siqueira': {
    slug: 'campina-do-siqueira',
    name: 'Campina do Siqueira',
    metaTitle: 'Pneus para Campina do Siqueira | Carplus no Portão, Curitiba',
    metaDescription: 'Pneus e serviços para quem vem de Campina do Siqueira. Atendimento na unidade do Portão, Curitiba. Consulte medida, disponibilidade, orçamento e trajeto no mapa.',
    h1: 'Pneus e Oficina para Campina do Siqueira',
    heroSubtitle: 'Atendimento para quem vem de Campina do Siqueira na unidade do Portão, Curitiba',
    introText: 'A Campina do Siqueira é um bairro bem localizado na região oeste de Curitiba. Moradores contam com a Carplus para pneus e serviços automotivos de qualidade.',
    localContext: 'Antes de se deslocar de Campina do Siqueira, confirme a disponibilidade e a agenda. Use o mapa para escolher o trajeto até a unidade do Portão, em Curitiba.',
    servicesHighlight: [
      'Pneus Pirelli, Michelin, Goodyear e Yokohama',
      'Alinhamento 3D Hunter',
      'Balanceamento computadorizado',
      'Troca de óleo sintético',
      'Revisão de suspensão'
    ],
    searchPhrases: [
      'pneus Campina do Siqueira',
      'oficina Campina do Siqueira',
      'alinhamento Campina do Siqueira Curitiba',
      'troca de pneu Campina do Siqueira'
    ],
    nearbyLandmarks: [
      'Bigorrilho',
      'Mercês',
      'Seminário'
    ],
    trafficTips: 'Para sair de Campina do Siqueira, consulte o mapa com destino à Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Rotas e tempos variam conforme o trânsito.',
    testimonialContext: 'moradores da Campina do Siqueira',
    whyChooseUs: [
      'Localização estratégica',
      'Preços competitivos',
      'Atendimento profissional'
    ],
    localBenefits: 'A Campina do Siqueira tem acesso direto ao Portão - venha conhecer a Carplus!'
  },

  'campo-de-santana': {
    slug: 'campo-de-santana',
    name: 'Campo de Santana',
    metaTitle: 'Pneus para Campo de Santana | Carplus no Portão, Curitiba',
    metaDescription: 'Pneus e serviços para quem vem de Campo de Santana. Atendimento na unidade do Portão, Curitiba. Consulte medida, disponibilidade, orçamento e trajeto no mapa.',
    h1: 'Pneus e Oficina para Campo de Santana',
    heroSubtitle: 'Campo de Santana: pneus com instalação profissional',
    introText: 'Campo de Santana é um bairro em crescimento na região sul de Curitiba. A Carplus Centro Automotivo oferece pneus de qualidade e serviços completos para moradores do bairro.',
    localContext: 'O Campo de Santana fica na região sul de Curitiba, com fácil acesso pela Av. Raimundo Blum. A Carplus atende moradores com preço justo.',
    servicesHighlight: [
      'Pneus para carros populares',
      'Pneus para SUVs e picapes',
      'Alinhamento 3D',
      'Balanceamento',
      'Troca de óleo'
    ],
    searchPhrases: [
      'pneus Campo de Santana Curitiba',
      'oficina Campo de Santana',
      'alinhamento Campo de Santana',
      'borracharia Campo de Santana'
    ],
    nearbyLandmarks: [
      'Caximba',
      'Ganchinho',
      'Umbará'
    ],
    trafficTips: 'Para sair de Campo de Santana, consulte o mapa com destino à Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Rotas e tempos variam conforme o trânsito.',
    testimonialContext: 'moradores do Campo de Santana',
    whyChooseUs: [
      'Preços acessíveis',
      'Qualidade garantida',
      'Parcelamento facilitado'
    ],
    localBenefits: 'Moradores do Campo de Santana encontram na Carplus os orçamento sob consulta!'
  },

  'capao-da-imbuia': {
    slug: 'capao-da-imbuia',
    name: 'Capão da Imbuia',
    metaTitle: 'Pneus para Capão da Imbuia | Carplus no Portão, Curitiba',
    metaDescription: 'Pneus e serviços para quem vem de Capão da Imbuia. Atendimento na unidade do Portão, Curitiba. Consulte medida, disponibilidade, orçamento e trajeto no mapa.',
    h1: 'Pneus e Oficina para Capão da Imbuia',
    heroSubtitle: 'Atendimento para quem vem de Capão da Imbuia na unidade do Portão, Curitiba',
    introText: 'O Capão da Imbuia é um bairro tradicional da zona leste de Curitiba. A Carplus Centro Automotivo oferece pneus de todas as marcas e serviços automotivos completos.',
    localContext: 'Com fácil acesso pela Av. Prefeito Mauricio Fruet, o Capão da Imbuia está bem conectado ao Portão. A Carplus atende moradores com qualidade e preço justo.',
    servicesHighlight: [
      'Pneus econômicos e premium',
      'Alinhamento computadorizado 3D',
      'Balanceamento de rodas',
      'Troca de óleo e filtros',
      'Revisão de suspensão e freios'
    ],
    searchPhrases: [
      'pneus Capão da Imbuia',
      'loja de pneus Capão da Imbuia Curitiba',
      'oficina Capão da Imbuia',
      'alinhamento Capão da Imbuia',
      'troca de pneu Capão da Imbuia'
    ],
    nearbyLandmarks: [
      'Jardim Botânico',
      'Cajuru',
      'Guabirotuba'
    ],
    trafficTips: 'Para sair de Capão da Imbuia, consulte o mapa com destino à Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Rotas e tempos variam conforme o trânsito.',
    testimonialContext: 'moradores do Capão da Imbuia',
    whyChooseUs: [
      'Estoque completo de pneus',
      'Preços competitivos',
      'Atendimento sem agendamento'
    ],
    localBenefits: 'O Capão da Imbuia tem acesso rápido ao Portão - visite a Carplus!'
  },

  'caximba': {
    slug: 'caximba',
    name: 'Caximba',
    metaTitle: 'Pneus para Caximba | Carplus no Portão, Curitiba',
    metaDescription: 'Loja de pneus para Caximba, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D e serviços automotivos.',
    h1: 'Pneus e Oficina para Caximba',
    heroSubtitle: 'Caximba: pneus de qualidade para sua família',
    introText: 'O bairro Caximba, na extremidade sul de Curitiba, conta com a Carplus Centro Automotivo para todas as necessidades em pneus e serviços automotivos.',
    localContext: 'A Caximba é um dos bairros mais ao sul de Curitiba. A Carplus oferece pneus de qualidade e preço justo para moradores que buscam economia.',
    servicesHighlight: [
      'Pneus econômicos para carros populares',
      'Alinhamento 3D',
      'Balanceamento',
      'Troca de óleo',
      'Suspensão e freios'
    ],
    searchPhrases: [
      'pneus Caximba Curitiba',
      'oficina Caximba',
      'alinhamento Caximba',
      'borracharia Caximba'
    ],
    nearbyLandmarks: [
      'Ganchinho',
      'Umbará',
      'Campo de Santana'
    ],
    trafficTips: 'Para sair de Caximba, consulte o mapa com destino à Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Rotas e tempos variam conforme o trânsito.',
    testimonialContext: 'moradores da Caximba',
    whyChooseUs: [
      'Orçamento sob consulta',
      'Qualidade garantida',
      'Parcelamento em até 10x'
    ],
    localBenefits: 'Moradores da Caximba economizam na Carplus - preço de atacado!'
  },

  'ecoville': {
    slug: 'ecoville',
    name: 'Ecoville',
    metaTitle: 'Pneus para Ecoville | Carplus no Portão, Curitiba',
    metaDescription: 'Pneus e serviços para quem vem de Ecoville. Atendimento na unidade do Portão, Curitiba. Consulte medida, disponibilidade, orçamento e trajeto no mapa.',
    h1: 'Pneus e Oficina para o Ecoville',
    heroSubtitle: 'Ecoville: pneus premium para veículos de alto padrão',
    introText: 'O Ecoville é uma das regiões mais valorizadas de Curitiba, com moradores que buscam qualidade e excelência. A Carplus Centro Automotivo oferece pneus premium das melhores marcas mundiais e serviços de alta precisão.',
    localContext: 'Conhecido pelo alto padrão de vida e proximidade com o Parque Barigui, o Ecoville reúne profissionais exigentes. A Carplus atende esse perfil com pneus para SUVs premium, sedans executivos e carros importados.',
    servicesHighlight: [
      'Pneus premium para BMW, Mercedes, Audi e Volvo',
      'Pneus Run Flat em estoque',
      'Alinhamento 3D Hunter para veículos importados',
      'Balanceamento de rodas aro 18 a 22',
      'Troca de óleo com lubrificantes sintéticos premium'
    ],
    searchPhrases: [
      'pneus Ecoville Curitiba',
      'pneus para BMW Ecoville',
      'loja de pneus Ecoville',
      'oficina Ecoville',
      'pneus premium Ecoville',
      'alinhamento Ecoville'
    ],
    nearbyLandmarks: [
      'Parque Barigui',
      'Shopping Barigui',
      'ParkShopping Barigui',
      'Hospital Marcelino Champagnat'
    ],
    trafficTips: 'Para sair de Ecoville, consulte o mapa com destino à Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Rotas e tempos variam conforme o trânsito.',
    testimonialContext: 'moradores do Ecoville',
    whyChooseUs: [
      'Especialistas em pneus para veículos importados',
      'Estoque de pneus Run Flat e alta performance',
      'Atendimento premium',
      'Ambiente climatizado para espera'
    ],
    localBenefits: 'Moradores do Ecoville encontram na Carplus pneus para veículos de alto padrão com atendimento diferenciado!'
  },

  'fanny': {
    slug: 'fanny',
    name: 'Fanny',
    metaTitle: 'Pneus para Fanny | Carplus no Portão, Curitiba',
    metaDescription: 'Pneus e serviços para quem vem de Fanny. Atendimento na unidade do Portão, Curitiba. Consulte medida, disponibilidade, orçamento e trajeto no mapa.',
    h1: 'Pneus e Oficina para o Fanny',
    heroSubtitle: 'Fanny: pneus de qualidade pertinho de você',
    introText: 'O bairro Fanny é uma região residencial tradicional de Curitiba. A Carplus Centro Automotivo, localizada no Portão vizinho, oferece pneus das melhores marcas com instalação profissional.',
    localContext: 'Antes de se deslocar de Fanny, confirme a disponibilidade e a agenda. Use o mapa para escolher o trajeto até a unidade do Portão, em Curitiba.',
    servicesHighlight: [
      'Pneus para carros populares e familiares',
      'Alinhamento 3D de precisão',
      'Balanceamento computadorizado',
      'Troca de óleo e filtros',
      'Revisão de freios'
    ],
    searchPhrases: [
      'pneus Fanny Curitiba',
      'loja de pneus Fanny',
      'oficina Fanny',
      'alinhamento Fanny',
      'troca de pneu Fanny'
    ],
    nearbyLandmarks: [
      'Portão',
      'Lindóia',
      'Novo Mundo'
    ],
    trafficTips: 'Para sair de Fanny, consulte o mapa com destino à Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Rotas e tempos variam conforme o trânsito.',
    testimonialContext: 'vizinhos do Fanny',
    whyChooseUs: [
      'Vizinho do seu bairro',
      'Preços de atacado',
      'Atendimento rápido'
    ],
    localBenefits: 'O Fanny está pertinho da Carplus - venha nos visitar!'
  },

  'ganchinho': {
    slug: 'ganchinho',
    name: 'Ganchinho',
    metaTitle: 'Pneus para Ganchinho | Carplus no Portão, Curitiba',
    metaDescription: 'Loja de pneus para Ganchinho, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D e serviços automotivos.',
    h1: 'Pneus e Oficina para Ganchinho',
    heroSubtitle: 'Ganchinho: pneus com preço justo',
    introText: 'O Ganchinho é um bairro da zona sul de Curitiba. A Carplus Centro Automotivo oferece pneus de qualidade e preço acessível para moradores da região.',
    localContext: 'Localizado na região sul, o Ganchinho tem acesso ao Portão pela Linha Verde. A Carplus oferece os melhores preços de pneus de Curitiba.',
    servicesHighlight: [
      'Pneus econômicos',
      'Alinhamento 3D',
      'Balanceamento',
      'Troca de óleo',
      'Suspensão'
    ],
    searchPhrases: [
      'pneus Ganchinho Curitiba',
      'oficina Ganchinho',
      'alinhamento Ganchinho',
      'borracharia Ganchinho'
    ],
    nearbyLandmarks: [
      'Umbará',
      'Sítio Cercado',
      'Caximba'
    ],
    trafficTips: 'Para sair de Ganchinho, consulte o mapa com destino à Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Rotas e tempos variam conforme o trânsito.',
    testimonialContext: 'moradores do Ganchinho',
    whyChooseUs: [
      'Melhores preços',
      'Qualidade garantida',
      'Parcelamento'
    ],
    localBenefits: 'Moradores do Ganchinho economizam na Carplus!'
  },

  'guabirotuba': {
    slug: 'guabirotuba',
    name: 'Guabirotuba',
    metaTitle: 'Pneus para Guabirotuba | Carplus no Portão, Curitiba',
    metaDescription: 'Pneus e serviços para quem vem de Guabirotuba. Atendimento na unidade do Portão, Curitiba. Consulte medida, disponibilidade, orçamento e trajeto no mapa.',
    h1: 'Pneus e Oficina para Guabirotuba',
    heroSubtitle: 'Atendimento para quem vem de Guabirotuba na unidade do Portão, Curitiba',
    introText: 'O Guabirotuba é um bairro residencial da zona leste de Curitiba. A Carplus Centro Automotivo oferece pneus de todas as marcas e serviços automotivos completos para moradores do bairro.',
    localContext: 'Bem localizado entre o Centro e o Jardim Botânico, o Guabirotuba tem fácil acesso à Carplus pela Av. das Torres ou Centro.',
    servicesHighlight: [
      'Pneus Pirelli, Michelin, Goodyear e Yokohama',
      'Alinhamento computadorizado 3D',
      'Balanceamento de rodas',
      'Troca de óleo sintético e mineral',
      'Revisão de freios e suspensão'
    ],
    searchPhrases: [
      'pneus Guabirotuba Curitiba',
      'loja de pneus Guabirotuba',
      'oficina Guabirotuba',
      'alinhamento Guabirotuba',
      'troca de pneu Guabirotuba'
    ],
    nearbyLandmarks: [
      'Jardim Botânico',
      'Prado Velho',
      'Hauer'
    ],
    trafficTips: 'Para sair de Guabirotuba, consulte o mapa com destino à Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Rotas e tempos variam conforme o trânsito.',
    testimonialContext: 'moradores do Guabirotuba',
    whyChooseUs: [
      'Estoque completo',
      'Preços competitivos',
      'Atendimento profissional'
    ],
    localBenefits: 'O Guabirotuba está bem conectado ao Portão - venha conhecer a Carplus!'
  },

  'hauer': {
    slug: 'hauer',
    name: 'Hauer',
    metaTitle: 'Pneus para Hauer | Carplus no Portão, Curitiba',
    metaDescription: 'Pneus e serviços para quem vem de Hauer. Atendimento na unidade do Portão, Curitiba. Consulte medida, disponibilidade, orçamento e trajeto no mapa.',
    h1: 'Pneus e Oficina para o Hauer',
    heroSubtitle: 'Atendimento para quem vem de Hauer na unidade do Portão, Curitiba',
    introText: 'Quem vem de Hauer pode consultar pneus e serviços na Carplus, na Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Informe ano, versão e medida do veículo para conferir as opções e os serviços necessários.',
    localContext: 'Localizado entre o Boqueirão e o Centro, o Hauer tem fácil acesso ao Portão. A Carplus oferece pneus de qualidade e serviços profissionais.',
    servicesHighlight: [
      'Pneus para carros populares e SUVs',
      'Alinhamento 3D Hunter',
      'Balanceamento computadorizado',
      'Troca de óleo',
      'Revisão de suspensão e freios'
    ],
    searchPhrases: [
      'pneus Hauer Curitiba',
      'loja de pneus Hauer',
      'oficina Hauer',
      'alinhamento Hauer',
      'troca de pneu Hauer'
    ],
    nearbyLandmarks: [
      'Boqueirão',
      'Prado Velho',
      'Guabirotuba'
    ],
    trafficTips: 'Para sair de Hauer, consulte o mapa com destino à Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Rotas e tempos variam conforme o trânsito.',
    testimonialContext: 'moradores do Hauer',
    whyChooseUs: [
      'Qualidade premium',
      'Preços justos',
      'Atendimento rápido'
    ],
    localBenefits: 'O Hauer tem acesso direto ao Portão - visite a Carplus!'
  },

  'hugo-lange': {
    slug: 'hugo-lange',
    name: 'Hugo Lange',
    metaTitle: 'Pneus para Hugo Lange | Carplus no Portão, Curitiba',
    metaDescription: 'Pneus e serviços para quem vem de Hugo Lange. Atendimento na unidade do Portão, Curitiba. Consulte medida, disponibilidade, orçamento e trajeto no mapa.',
    h1: 'Pneus e Oficina para Hugo Lange',
    heroSubtitle: 'Hugo Lange: pneus premium para veículos de alto padrão',
    introText: 'Hugo Lange é um bairro nobre de Curitiba, com moradores que valorizam qualidade. A Carplus Centro Automotivo oferece pneus premium e serviços de excelência.',
    localContext: 'Localizado próximo ao Jardim Botânico, Hugo Lange reúne famílias que buscam o melhor. A Carplus atende com pneus para veículos de alto padrão.',
    servicesHighlight: [
      'Pneus premium para sedans executivos',
      'Alinhamento 3D de precisão',
      'Balanceamento',
      'Troca de óleo sintético',
      'Diagnóstico eletrônico'
    ],
    searchPhrases: [
      'pneus Hugo Lange',
      'oficina Hugo Lange Curitiba',
      'alinhamento Hugo Lange',
      'troca de pneu Hugo Lange'
    ],
    nearbyLandmarks: [
      'Jardim Botânico',
      'Cristo Rei',
      'Jardim Social'
    ],
    trafficTips: 'Para sair de Hugo Lange, consulte o mapa com destino à Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Rotas e tempos variam conforme o trânsito.',
    testimonialContext: 'moradores de Hugo Lange',
    whyChooseUs: [
      'Qualidade premium',
      'Atendimento diferenciado',
      'Pneus para importados'
    ],
    localBenefits: 'Hugo Lange merece o melhor - visite a Carplus!'
  },

  'jardim-das-americas': {
    slug: 'jardim-das-americas',
    name: 'Jardim das Américas',
    metaTitle: 'Pneus para Jardim das Américas | Carplus no Portão, Curitiba',
    metaDescription: 'Pneus e serviços para quem vem de Jardim das Américas. Atendimento na unidade do Portão, Curitiba. Consulte medida, disponibilidade, orçamento e trajeto no mapa.',
    h1: 'Pneus e Oficina para Jardim das Américas',
    heroSubtitle: 'Jardim das Américas: pneus das melhores marcas',
    introText: 'O Jardim das Américas é um bairro tradicional de Curitiba. A Carplus Centro Automotivo oferece pneus de qualidade e serviços automotivos completos para moradores.',
    localContext: 'Antes de se deslocar de Jardim das Américas, confirme a disponibilidade e a agenda. Use o mapa para escolher o trajeto até a unidade do Portão, em Curitiba.',
    servicesHighlight: [
      'Pneus para carros e SUVs',
      'Alinhamento 3D',
      'Balanceamento',
      'Troca de óleo',
      'Suspensão e freios'
    ],
    searchPhrases: [
      'pneus Jardim das Américas Curitiba',
      'oficina Jardim das Américas',
      'alinhamento Jardim das Américas',
      'troca de pneu Jardim das Américas'
    ],
    nearbyLandmarks: [
      'Uberaba',
      'Guabirotuba',
      'Prado Velho'
    ],
    trafficTips: 'Para sair de Jardim das Américas, consulte o mapa com destino à Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Rotas e tempos variam conforme o trânsito.',
    testimonialContext: 'moradores do Jardim das Américas',
    whyChooseUs: [
      'Variedade de pneus',
      'Preços justos',
      'Atendimento rápido'
    ],
    localBenefits: 'O Jardim das Américas está bem conectado - venha à Carplus!'
  },

  'jardim-social': {
    slug: 'jardim-social',
    name: 'Jardim Social',
    metaTitle: 'Pneus para Jardim Social | Carplus no Portão, Curitiba',
    metaDescription: 'Loja de pneus Jardim Social, Curitiba. Pirelli, Michelin, Continental. Alinhamento 3D para veículos de alto padrão.',
    h1: 'Pneus e Oficina para Jardim Social',
    heroSubtitle: 'Jardim Social: pneus premium para seu veículo',
    introText: 'O Jardim Social é um dos bairros mais nobres de Curitiba. A Carplus Centro Automotivo oferece pneus premium para veículos de alto padrão.',
    localContext: 'Bairro residencial de alto padrão, o Jardim Social reúne famílias exigentes. A Carplus atende com pneus para veículos importados e nacionais premium.',
    servicesHighlight: [
      'Pneus para BMW, Mercedes, Audi',
      'Alinhamento 3D Hunter',
      'Balanceamento de precisão',
      'Troca de óleo sintético',
      'Diagnóstico eletrônico'
    ],
    searchPhrases: [
      'pneus Jardim Social Curitiba',
      'oficina Jardim Social',
      'alinhamento Jardim Social',
      'pneus premium Jardim Social'
    ],
    nearbyLandmarks: [
      'Hugo Lange',
      'Jardim Botânico',
      'Cristo Rei'
    ],
    trafficTips: 'Para sair de Jardim Social, consulte o mapa com destino à Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Rotas e tempos variam conforme o trânsito.',
    testimonialContext: 'moradores do Jardim Social',
    whyChooseUs: [
      'Especialistas em pneus premium',
      'Atendimento VIP',
      'Ambiente climatizado'
    ],
    localBenefits: 'O Jardim Social merece qualidade - visite a Carplus!'
  },

  'lamenha-pequena': {
    slug: 'lamenha-pequena',
    name: 'Lamenha Pequena',
    metaTitle: 'Pneus para Lamenha Pequena | Carplus no Portão, Curitiba',
    metaDescription: 'Loja de pneus para Lamenha Pequena. Pirelli, Michelin, Goodyear. Alinhamento 3D e serviços.',
    h1: 'Pneus e Oficina para Lamenha Pequena',
    heroSubtitle: 'Lamenha Pequena: pneus de qualidade',
    introText: 'Lamenha Pequena é um bairro da região noroeste de Curitiba. A Carplus Centro Automotivo oferece pneus de qualidade e preço justo.',
    localContext: 'Próximo a Santa Felicidade, Lamenha Pequena tem acesso fácil ao centro. A Carplus atende moradores com qualidade.',
    servicesHighlight: [
      'Pneus das melhores marcas',
      'Alinhamento 3D',
      'Balanceamento',
      'Troca de óleo',
      'Revisão geral'
    ],
    searchPhrases: [
      'pneus Lamenha Pequena',
      'oficina Lamenha Pequena Curitiba',
      'alinhamento Lamenha Pequena'
    ],
    nearbyLandmarks: [
      'Santa Felicidade',
      'Butiatuvinha',
      'São Braz'
    ],
    trafficTips: 'Para sair de Lamenha Pequena, consulte o mapa com destino à Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Rotas e tempos variam conforme o trânsito.',
    testimonialContext: 'moradores de Lamenha Pequena',
    whyChooseUs: [
      'Qualidade garantida',
      'Preços justos',
      'Atendimento profissional'
    ],
    localBenefits: 'Moradores de Lamenha Pequena são bem-vindos na Carplus!'
  },

  'lindoia': {
    slug: 'lindoia',
    name: 'Lindóia',
    metaTitle: 'Pneus para Lindóia | Carplus no Portão, Curitiba',
    metaDescription: 'Pneus e serviços para quem vem de Lindóia. Atendimento na unidade do Portão, Curitiba. Consulte medida, disponibilidade, orçamento e trajeto no mapa.',
    h1: 'Pneus e Oficina para Lindóia',
    heroSubtitle: 'Atendimento para quem vem de Lindóia na unidade do Portão, Curitiba',
    introText: 'Quem vem de Lindóia pode consultar pneus e serviços na Carplus, na Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Informe ano, versão e medida do veículo para conferir as opções e os serviços necessários.',
    localContext: 'Vizinho do Portão e Fanny, o Lindóia tem acesso direto à Carplus. Moradores encontram pneus das melhores marcas com preço justo.',
    servicesHighlight: [
      'Pneus Pirelli, Michelin, Goodyear',
      'Alinhamento 3D Hunter',
      'Balanceamento computadorizado',
      'Troca de óleo',
      'Revisão de freios'
    ],
    searchPhrases: [
      'pneus Lindóia Curitiba',
      'oficina Lindóia',
      'alinhamento Lindóia',
      'troca de pneu Lindóia'
    ],
    nearbyLandmarks: [
      'Portão',
      'Fanny',
      'Novo Mundo'
    ],
    trafficTips: 'Para sair de Lindóia, consulte o mapa com destino à Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Rotas e tempos variam conforme o trânsito.',
    testimonialContext: 'vizinhos do Lindóia',
    whyChooseUs: [
      'Pertinho do seu bairro',
      'Preços de atacado',
      'Atendimento rápido'
    ],
    localBenefits: 'Consulte o trajeto desde Lindóia no mapa e confirme o atendimento na unidade do Portão, em Curitiba.'
  },

  'mossungue': {
    slug: 'mossungue',
    name: 'Mossunguê',
    metaTitle: 'Pneus para Mossunguê | Carplus no Portão, Curitiba',
    metaDescription: 'Pneus e serviços para quem vem de Mossunguê. Atendimento na unidade do Portão, Curitiba. Consulte medida, disponibilidade, orçamento e trajeto no mapa.',
    h1: 'Pneus e Oficina para Mossunguê',
    heroSubtitle: 'Mossunguê: pneus premium para seu veículo',
    introText: 'O Mossunguê é um bairro de alto padrão de Curitiba, próximo ao Parque Barigui. A Carplus Centro Automotivo oferece pneus premium e serviços de qualidade.',
    localContext: 'Antes de se deslocar de Mossunguê, confirme a disponibilidade e a agenda. Use o mapa para escolher o trajeto até a unidade do Portão, em Curitiba.',
    servicesHighlight: [
      'Pneus premium para SUVs',
      'Alinhamento 3D de precisão',
      'Balanceamento',
      'Troca de óleo sintético',
      'Revisão completa'
    ],
    searchPhrases: [
      'pneus Mossunguê Curitiba',
      'oficina Mossunguê',
      'alinhamento Mossunguê',
      'pneus para SUV Mossunguê'
    ],
    nearbyLandmarks: [
      'Parque Barigui',
      'Ecoville',
      'Campo Comprido'
    ],
    trafficTips: 'Para sair de Mossunguê, consulte o mapa com destino à Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Rotas e tempos variam conforme o trânsito.',
    testimonialContext: 'moradores do Mossunguê',
    whyChooseUs: [
      'Pneus para veículos de alto padrão',
      'Atendimento premium',
      'Qualidade garantida'
    ],
    localBenefits: 'O Mossunguê merece qualidade - visite a Carplus!'
  },

  'orleans': {
    slug: 'orleans',
    name: 'Orleans',
    metaTitle: 'Pneus para Orleans | Carplus no Portão, Curitiba',
    metaDescription: 'Loja de pneus Orleans, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D e serviços automotivos.',
    h1: 'Pneus e Oficina para Orleans',
    heroSubtitle: 'Orleans: pneus de qualidade',
    introText: 'Orleans é um bairro residencial de Curitiba. A Carplus Centro Automotivo oferece pneus de qualidade e serviços profissionais.',
    localContext: 'O bairro Orleans está bem localizado com acesso fácil ao Portão. A Carplus atende moradores com preço justo.',
    servicesHighlight: [
      'Pneus das melhores marcas',
      'Alinhamento 3D',
      'Balanceamento',
      'Troca de óleo',
      'Suspensão e freios'
    ],
    searchPhrases: [
      'pneus Orleans Curitiba',
      'oficina Orleans',
      'alinhamento Orleans',
      'troca de pneu Orleans'
    ],
    nearbyLandmarks: [
      'Seminário',
      'Bigorrilho',
      'Mercês'
    ],
    trafficTips: 'Para sair de Orleans, consulte o mapa com destino à Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Rotas e tempos variam conforme o trânsito.',
    testimonialContext: 'moradores de Orleans',
    whyChooseUs: [
      'Preços competitivos',
      'Qualidade',
      'Atendimento profissional'
    ],
    localBenefits: 'Orleans está próximo da Carplus - venha nos visitar!'
  },

  'prado-velho': {
    slug: 'prado-velho',
    name: 'Prado Velho',
    metaTitle: 'Pneus para Prado Velho | Carplus no Portão, Curitiba',
    metaDescription: 'Pneus e serviços para quem vem de Prado Velho. Atendimento na unidade do Portão, Curitiba. Consulte medida, disponibilidade, orçamento e trajeto no mapa.',
    h1: 'Pneus e Oficina para Prado Velho',
    heroSubtitle: 'Atendimento para quem vem de Prado Velho na unidade do Portão, Curitiba',
    introText: 'O Prado Velho é um bairro bem localizado de Curitiba, próximo ao Centro e à PUCPR. A Carplus Centro Automotivo oferece pneus de qualidade.',
    localContext: 'Antes de se deslocar de Prado Velho, confirme a disponibilidade e a agenda. Use o mapa para escolher o trajeto até a unidade do Portão, em Curitiba.',
    servicesHighlight: [
      'Pneus para carros populares',
      'Alinhamento 3D',
      'Balanceamento',
      'Troca de óleo',
      'Revisão básica'
    ],
    searchPhrases: [
      'pneus Prado Velho Curitiba',
      'oficina Prado Velho',
      'alinhamento Prado Velho',
      'borracharia Prado Velho'
    ],
    nearbyLandmarks: [
      'PUCPR',
      'Guabirotuba',
      'Parolin'
    ],
    trafficTips: 'Para sair de Prado Velho, consulte o mapa com destino à Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Rotas e tempos variam conforme o trânsito.',
    testimonialContext: 'moradores do Prado Velho',
    whyChooseUs: [
      'Preços acessíveis',
      'Qualidade',
      'Atendimento rápido'
    ],
    localBenefits: 'O Prado Velho está bem conectado - visite a Carplus!'
  },

  'santa-quiteria': {
    slug: 'santa-quiteria',
    name: 'Santa Quitéria',
    metaTitle: 'Pneus para Santa Quitéria | Carplus no Portão, Curitiba',
    metaDescription: 'Pneus e serviços para quem vem de Santa Quitéria. Atendimento na unidade do Portão, Curitiba. Consulte medida, disponibilidade, orçamento e trajeto no mapa.',
    h1: 'Pneus e Oficina para Santa Quitéria',
    heroSubtitle: 'Santa Quitéria: pneus de qualidade pertinho',
    introText: 'Quem vem de Santa Quitéria pode consultar pneus e serviços na Carplus, na Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Informe ano, versão e medida do veículo para conferir as opções e os serviços necessários.',
    localContext: 'Vizinho do Portão, Santa Quitéria tem acesso direto à Carplus. Moradores encontram qualidade e preço justo.',
    servicesHighlight: [
      'Pneus Pirelli, Michelin, Goodyear',
      'Alinhamento 3D',
      'Balanceamento',
      'Troca de óleo',
      'Suspensão e freios'
    ],
    searchPhrases: [
      'pneus Santa Quitéria Curitiba',
      'oficina Santa Quitéria',
      'alinhamento Santa Quitéria',
      'troca de pneu Santa Quitéria'
    ],
    nearbyLandmarks: [
      'Portão',
      'Campo Comprido',
      'Fazendinha'
    ],
    trafficTips: 'Para sair de Santa Quitéria, consulte o mapa com destino à Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Rotas e tempos variam conforme o trânsito.',
    testimonialContext: 'vizinhos de Santa Quitéria',
    whyChooseUs: [
      'Pertinho do seu bairro',
      'Preços de atacado',
      'Atendimento profissional'
    ],
    localBenefits: 'Santa Quitéria está pertinho da Carplus - venha nos visitar!'
  },

  'santo-inacio': {
    slug: 'santo-inacio',
    name: 'Santo Inácio',
    metaTitle: 'Pneus para Santo Inácio | Carplus no Portão, Curitiba',
    metaDescription: 'Loja de pneus Santo Inácio, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D e serviços.',
    h1: 'Pneus e Oficina para Santo Inácio',
    heroSubtitle: 'Santo Inácio: pneus de qualidade',
    introText: 'Santo Inácio é um bairro da região oeste de Curitiba. A Carplus Centro Automotivo oferece pneus de qualidade e serviços profissionais.',
    localContext: 'Antes de se deslocar de Santo Inácio, confirme a disponibilidade e a agenda. Use o mapa para escolher o trajeto até a unidade do Portão, em Curitiba.',
    servicesHighlight: [
      'Pneus das melhores marcas',
      'Alinhamento 3D',
      'Balanceamento',
      'Troca de óleo',
      'Revisão completa'
    ],
    searchPhrases: [
      'pneus Santo Inácio Curitiba',
      'oficina Santo Inácio',
      'alinhamento Santo Inácio',
      'borracharia Santo Inácio'
    ],
    nearbyLandmarks: [
      'CIC',
      'Campo Comprido',
      'Santa Quitéria'
    ],
    trafficTips: 'Para sair de Santo Inácio, consulte o mapa com destino à Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Rotas e tempos variam conforme o trânsito.',
    testimonialContext: 'moradores de Santo Inácio',
    whyChooseUs: [
      'Preços competitivos',
      'Qualidade garantida',
      'Parcelamento'
    ],
    localBenefits: 'Santo Inácio está bem conectado - visite a Carplus!'
  },

  'sao-braz': {
    slug: 'sao-braz',
    name: 'São Braz',
    metaTitle: 'Pneus para São Braz | Carplus no Portão, Curitiba',
    metaDescription: 'Loja de pneus São Braz, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D e balanceamento.',
    h1: 'Pneus e Oficina para São Braz',
    heroSubtitle: 'São Braz: pneus de qualidade',
    introText: 'São Braz é um bairro tradicional da região noroeste de Curitiba. A Carplus Centro Automotivo oferece pneus de qualidade e preço justo.',
    localContext: 'Próximo a Santa Felicidade, São Braz tem acesso fácil ao Portão. A Carplus atende moradores com qualidade.',
    servicesHighlight: [
      'Pneus Pirelli, Michelin, Goodyear',
      'Alinhamento 3D',
      'Balanceamento',
      'Troca de óleo',
      'Suspensão'
    ],
    searchPhrases: [
      'pneus São Braz Curitiba',
      'oficina São Braz',
      'alinhamento São Braz',
      'troca de pneu São Braz'
    ],
    nearbyLandmarks: [
      'Santa Felicidade',
      'Butiatuvinha',
      'Lamenha Pequena'
    ],
    trafficTips: 'Para sair de São Braz, consulte o mapa com destino à Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Rotas e tempos variam conforme o trânsito.',
    testimonialContext: 'moradores de São Braz',
    whyChooseUs: [
      'Qualidade',
      'Preços justos',
      'Atendimento profissional'
    ],
    localBenefits: 'Moradores de São Braz são bem-vindos na Carplus!'
  },

  'sao-francisco': {
    slug: 'sao-francisco',
    name: 'São Francisco',
    metaTitle: 'Pneus para São Francisco | Carplus no Portão, Curitiba',
    metaDescription: 'Pneus e serviços para quem vem de São Francisco. Atendimento na unidade do Portão, Curitiba. Consulte medida, disponibilidade, orçamento e trajeto no mapa.',
    h1: 'Pneus e Oficina para São Francisco',
    heroSubtitle: 'São Francisco: pneus de qualidade',
    introText: 'O bairro São Francisco é uma região nobre de Curitiba. A Carplus Centro Automotivo oferece pneus premium e serviços de qualidade.',
    localContext: 'Localizado próximo ao Centro, São Francisco tem moradores exigentes. A Carplus atende com pneus de alta qualidade.',
    servicesHighlight: [
      'Pneus premium',
      'Alinhamento 3D Hunter',
      'Balanceamento',
      'Troca de óleo sintético',
      'Diagnóstico eletrônico'
    ],
    searchPhrases: [
      'pneus São Francisco Curitiba',
      'oficina São Francisco',
      'alinhamento São Francisco',
      'pneus premium São Francisco'
    ],
    nearbyLandmarks: [
      'Centro Histórico',
      'Mercês',
      'Batel'
    ],
    trafficTips: 'Para sair de São Francisco, consulte o mapa com destino à Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Rotas e tempos variam conforme o trânsito.',
    testimonialContext: 'moradores de São Francisco',
    whyChooseUs: [
      'Qualidade premium',
      'Atendimento diferenciado',
      'Pneus para importados'
    ],
    localBenefits: 'São Francisco merece qualidade - visite a Carplus!'
  },

  'sao-joao': {
    slug: 'sao-joao',
    name: 'São João',
    metaTitle: 'Pneus para São João | Carplus no Portão, Curitiba',
    metaDescription: 'Loja de pneus São João, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D e serviços.',
    h1: 'Pneus e Oficina para São João',
    heroSubtitle: 'São João: pneus de qualidade',
    introText: 'São João é um bairro da região norte de Curitiba. A Carplus Centro Automotivo oferece pneus de qualidade e preço justo.',
    localContext: 'O bairro São João tem acesso fácil ao centro. A Carplus atende moradores com qualidade e atendimento profissional.',
    servicesHighlight: [
      'Pneus das melhores marcas',
      'Alinhamento 3D',
      'Balanceamento',
      'Troca de óleo',
      'Revisão geral'
    ],
    searchPhrases: [
      'pneus São João Curitiba',
      'oficina São João',
      'alinhamento São João',
      'borracharia São João'
    ],
    nearbyLandmarks: [
      'Santa Cândida',
      'Boa Vista',
      'Tingui'
    ],
    trafficTips: 'Para sair de São João, consulte o mapa com destino à Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Rotas e tempos variam conforme o trânsito.',
    testimonialContext: 'moradores de São João',
    whyChooseUs: [
      'Preços acessíveis',
      'Qualidade',
      'Atendimento rápido'
    ],
    localBenefits: 'Moradores de São João são bem-vindos na Carplus!'
  },

  'sao-miguel': {
    slug: 'sao-miguel',
    name: 'São Miguel',
    metaTitle: 'Pneus para São Miguel | Carplus no Portão, Curitiba',
    metaDescription: 'Loja de pneus São Miguel, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D e serviços.',
    h1: 'Pneus e Oficina para São Miguel',
    heroSubtitle: 'São Miguel: pneus com preço justo',
    introText: 'São Miguel é um bairro da zona sul de Curitiba. A Carplus Centro Automotivo oferece pneus de qualidade e preço acessível.',
    localContext: 'O bairro São Miguel fica na região sul com acesso pela Linha Verde. A Carplus atende moradores com os melhores preços.',
    servicesHighlight: [
      'Pneus econômicos',
      'Alinhamento 3D',
      'Balanceamento',
      'Troca de óleo',
      'Suspensão'
    ],
    searchPhrases: [
      'pneus São Miguel Curitiba',
      'oficina São Miguel',
      'alinhamento São Miguel',
      'borracharia São Miguel'
    ],
    nearbyLandmarks: [
      'CIC',
      'Tatuquara',
      'Pinheirinho'
    ],
    trafficTips: 'Para sair de São Miguel, consulte o mapa com destino à Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Rotas e tempos variam conforme o trânsito.',
    testimonialContext: 'moradores de São Miguel',
    whyChooseUs: [
      'Melhores preços',
      'Qualidade',
      'Parcelamento'
    ],
    localBenefits: 'Moradores de São Miguel economizam na Carplus!'
  },

  'seminario': {
    slug: 'seminario',
    name: 'Seminário',
    metaTitle: 'Pneus para Seminário | Carplus no Portão, Curitiba',
    metaDescription: 'Pneus e serviços para quem vem de Seminário. Atendimento na unidade do Portão, Curitiba. Consulte medida, disponibilidade, orçamento e trajeto no mapa.',
    h1: 'Pneus e Oficina para o Seminário',
    heroSubtitle: 'Atendimento para quem vem de Seminário na unidade do Portão, Curitiba',
    introText: 'Quem vem de Seminário pode consultar pneus e serviços na Carplus, na Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Informe ano, versão e medida do veículo para conferir as opções e os serviços necessários.',
    localContext: 'Vizinho do Bigorrilho e Mercês, o Seminário tem fácil acesso ao Portão. Moradores encontram qualidade e preço justo.',
    servicesHighlight: [
      'Pneus Pirelli, Michelin, Goodyear',
      'Alinhamento 3D Hunter',
      'Balanceamento',
      'Troca de óleo',
      'Revisão de freios'
    ],
    searchPhrases: [
      'pneus Seminário Curitiba',
      'oficina Seminário',
      'alinhamento Seminário',
      'troca de pneu Seminário'
    ],
    nearbyLandmarks: [
      'Bigorrilho',
      'Mercês',
      'Campina do Siqueira'
    ],
    trafficTips: 'Para sair de Seminário, consulte o mapa com destino à Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Rotas e tempos variam conforme o trânsito.',
    testimonialContext: 'moradores do Seminário',
    whyChooseUs: [
      'Localização estratégica',
      'Preços competitivos',
      'Atendimento profissional'
    ],
    localBenefits: 'O Seminário está pertinho da Carplus - visite-nos!'
  },

  'taboao': {
    slug: 'taboao',
    name: 'Taboão',
    metaTitle: 'Pneus para Taboão | Carplus no Portão, Curitiba',
    metaDescription: 'Loja de pneus Taboão, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D e serviços.',
    h1: 'Pneus e Oficina para Taboão',
    heroSubtitle: 'Taboão: pneus de qualidade',
    introText: 'Taboão é um bairro da região sul de Curitiba. A Carplus Centro Automotivo oferece pneus de qualidade e preço justo.',
    localContext: 'O bairro Taboão tem acesso fácil pela Linha Verde. A Carplus atende moradores com qualidade.',
    servicesHighlight: [
      'Pneus das melhores marcas',
      'Alinhamento 3D',
      'Balanceamento',
      'Troca de óleo',
      'Suspensão e freios'
    ],
    searchPhrases: [
      'pneus Taboão Curitiba',
      'oficina Taboão',
      'alinhamento Taboão',
      'borracharia Taboão'
    ],
    nearbyLandmarks: [
      'Pinheirinho',
      'Capão Raso',
      'Novo Mundo'
    ],
    trafficTips: 'Para sair de Taboão, consulte o mapa com destino à Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Rotas e tempos variam conforme o trânsito.',
    testimonialContext: 'moradores do Taboão',
    whyChooseUs: [
      'Preços justos',
      'Qualidade',
      'Atendimento rápido'
    ],
    localBenefits: 'Moradores do Taboão são bem-vindos na Carplus!'
  },

  'taruma': {
    slug: 'taruma',
    name: 'Tarumã',
    metaTitle: 'Pneus para Tarumã | Carplus no Portão, Curitiba',
    metaDescription: 'Pneus e serviços para quem vem de Tarumã. Atendimento na unidade do Portão, Curitiba. Consulte medida, disponibilidade, orçamento e trajeto no mapa.',
    h1: 'Pneus e Oficina para Tarumã',
    heroSubtitle: 'Tarumã: pneus de qualidade',
    introText: 'O Tarumã é um bairro tradicional de Curitiba, próximo ao Parque do Tarumã. A Carplus Centro Automotivo oferece pneus de qualidade.',
    localContext: 'Com o famoso Parque do Tarumã, o bairro tem moradores que valorizam qualidade de vida. A Carplus atende com pneus de alta qualidade.',
    servicesHighlight: [
      'Pneus para carros e SUVs',
      'Alinhamento 3D',
      'Balanceamento',
      'Troca de óleo',
      'Revisão completa'
    ],
    searchPhrases: [
      'pneus Tarumã Curitiba',
      'oficina Tarumã',
      'alinhamento Tarumã',
      'troca de pneu Tarumã'
    ],
    nearbyLandmarks: [
      'Parque do Tarumã',
      'Capão da Imbuia',
      'Cajuru'
    ],
    trafficTips: 'Para sair de Tarumã, consulte o mapa com destino à Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Rotas e tempos variam conforme o trânsito.',
    testimonialContext: 'moradores do Tarumã',
    whyChooseUs: [
      'Qualidade',
      'Preços justos',
      'Atendimento profissional'
    ],
    localBenefits: 'O Tarumã tem acesso fácil ao Portão - visite a Carplus!'
  },

  'augusta': {
    slug: 'augusta',
    name: 'Augusta',
    metaTitle: 'Pneus para Augusta | Carplus no Portão, Curitiba',
    metaDescription: 'Loja de pneus Augusta, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D e serviços.',
    h1: 'Pneus e Oficina para Augusta',
    heroSubtitle: 'Augusta: pneus de qualidade',
    introText: 'Augusta é um bairro da região de Curitiba. A Carplus Centro Automotivo oferece pneus de qualidade e serviços profissionais.',
    localContext: 'O bairro Augusta está bem conectado às principais vias. A Carplus atende moradores com qualidade e preço justo.',
    servicesHighlight: [
      'Pneus das melhores marcas',
      'Alinhamento 3D',
      'Balanceamento',
      'Troca de óleo',
      'Revisão geral'
    ],
    searchPhrases: [
      'pneus Augusta Curitiba',
      'oficina Augusta',
      'alinhamento Augusta',
      'borracharia Augusta'
    ],
    nearbyLandmarks: [
      'Bacacheri',
      'Boa Vista',
      'Tingui'
    ],
    trafficTips: 'Para sair de Augusta, consulte o mapa com destino à Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Rotas e tempos variam conforme o trânsito.',
    testimonialContext: 'moradores de Augusta',
    whyChooseUs: [
      'Qualidade',
      'Preços competitivos',
      'Atendimento'
    ],
    localBenefits: 'Moradores de Augusta são bem-vindos na Carplus!'
  },

  'riviera': {
    slug: 'riviera',
    name: 'Riviera',
    metaTitle: 'Pneus para Riviera | Carplus no Portão, Curitiba',
    metaDescription: 'Loja de pneus Riviera, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D e serviços.',
    h1: 'Pneus e Oficina para Riviera',
    heroSubtitle: 'Riviera: pneus de qualidade',
    introText: 'Riviera é um bairro residencial de Curitiba. A Carplus Centro Automotivo oferece pneus de qualidade e preço justo.',
    localContext: 'O bairro Riviera está bem localizado com acesso fácil ao Portão. A Carplus atende moradores com qualidade.',
    servicesHighlight: [
      'Pneus Pirelli, Michelin, Goodyear',
      'Alinhamento 3D',
      'Balanceamento',
      'Troca de óleo',
      'Suspensão e freios'
    ],
    searchPhrases: [
      'pneus Riviera Curitiba',
      'oficina Riviera',
      'alinhamento Riviera',
      'troca de pneu Riviera'
    ],
    nearbyLandmarks: [
      'Santa Quitéria',
      'Campo Comprido',
      'CIC'
    ],
    trafficTips: 'Para sair de Riviera, consulte o mapa com destino à Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Rotas e tempos variam conforme o trânsito.',
    testimonialContext: 'moradores de Riviera',
    whyChooseUs: [
      'Preços justos',
      'Qualidade',
      'Atendimento profissional'
    ],
    localBenefits: 'Riviera está próximo da Carplus - venha nos visitar!'
  },

  'alto-boqueirao': {
    slug: 'alto-boqueirao',
    name: 'Alto Boqueirão',
    metaTitle: 'Pneus para Alto Boqueirão | Carplus no Portão, Curitiba',
    metaDescription: 'Pneus e serviços para quem vem de Alto Boqueirão. Atendimento na unidade do Portão, Curitiba. Consulte medida, disponibilidade, orçamento e trajeto no mapa.',
    h1: 'Pneus e Oficina para Alto Boqueirão',
    heroSubtitle: 'Alto Boqueirão: pneus de qualidade',
    introText: 'O Alto Boqueirão é uma região populosa de Curitiba. A Carplus Centro Automotivo oferece pneus de qualidade e preço acessível para moradores.',
    localContext: 'Parte do grande Boqueirão, o Alto Boqueirão tem acesso pela Linha Verde. A Carplus atende com os melhores preços.',
    servicesHighlight: [
      'Pneus econômicos e intermediários',
      'Alinhamento 3D',
      'Balanceamento',
      'Troca de óleo',
      'Suspensão'
    ],
    searchPhrases: [
      'pneus Alto Boqueirão Curitiba',
      'oficina Alto Boqueirão',
      'alinhamento Alto Boqueirão',
      'borracharia Alto Boqueirão'
    ],
    nearbyLandmarks: [
      'Boqueirão',
      'Uberaba',
      'Hauer'
    ],
    trafficTips: 'Para sair de Alto Boqueirão, consulte o mapa com destino à Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Rotas e tempos variam conforme o trânsito.',
    testimonialContext: 'moradores do Alto Boqueirão',
    whyChooseUs: [
      'Preços competitivos',
      'Qualidade',
      'Parcelamento'
    ],
    localBenefits: 'O Alto Boqueirão tem acesso direto - visite a Carplus!'
  },

  'caiua': {
    slug: 'caiua',
    name: 'Caiuá',
    metaTitle: 'Pneus para Caiuá | Carplus no Portão, Curitiba',
    metaDescription: 'Loja de pneus Caiuá, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D e serviços.',
    h1: 'Pneus e Oficina para Caiuá',
    heroSubtitle: 'Caiuá: pneus de qualidade',
    introText: 'Caiuá é um bairro da região sul de Curitiba. A Carplus Centro Automotivo oferece pneus de qualidade e preço justo.',
    localContext: 'O bairro Caiuá fica próximo ao CIC com acesso fácil ao Portão. A Carplus atende moradores com qualidade.',
    servicesHighlight: [
      'Pneus econômicos',
      'Alinhamento 3D',
      'Balanceamento',
      'Troca de óleo',
      'Suspensão e freios'
    ],
    searchPhrases: [
      'pneus Caiuá Curitiba',
      'oficina Caiuá',
      'alinhamento Caiuá',
      'borracharia Caiuá'
    ],
    nearbyLandmarks: [
      'CIC',
      'Fazendinha',
      'Campo Comprido'
    ],
    trafficTips: 'Para sair de Caiuá, consulte o mapa com destino à Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Rotas e tempos variam conforme o trânsito.',
    testimonialContext: 'moradores de Caiuá',
    whyChooseUs: [
      'Preços acessíveis',
      'Qualidade',
      'Atendimento rápido'
    ],
    localBenefits: 'Moradores de Caiuá economizam na Carplus!'
  },

  // ══════════════════════════════════════
  // VILAS
  // ══════════════════════════════════════
  'vila-izabel': {
    slug: 'vila-izabel',
    name: 'Vila Izabel',
    metaTitle: 'Pneus para Vila Izabel | Carplus no Portão, Curitiba',
    metaDescription: 'Pneus e serviços para quem vem de Vila Izabel. Atendimento na unidade do Portão, Curitiba. Consulte medida, disponibilidade, orçamento e trajeto no mapa.',
    h1: 'Pneus e Oficina para Vila Izabel',
    heroSubtitle: 'Vila Izabel: pneus de qualidade pertinho de você',
    introText: 'Quem vem de Vila Izabel pode consultar pneus e serviços na Carplus, na Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Informe ano, versão e medida do veículo para conferir as opções e os serviços necessários.',
    localContext: 'Antes de se deslocar de Vila Izabel, confirme a disponibilidade e a agenda. Use o mapa para escolher o trajeto até a unidade do Portão, em Curitiba.',
    servicesHighlight: [
      'Pneus Pirelli, Michelin, Goodyear, Yokohama',
      'Alinhamento 3D Hunter',
      'Balanceamento computadorizado',
      'Troca de óleo',
      'Revisão completa'
    ],
    searchPhrases: [
      'pneus Vila Izabel Curitiba',
      'oficina Vila Izabel',
      'alinhamento Vila Izabel',
      'troca de pneu Vila Izabel'
    ],
    nearbyLandmarks: [
      'Portão',
      'Água Verde',
      'Fanny'
    ],
    trafficTips: 'Para sair de Vila Izabel, consulte o mapa com destino à Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Rotas e tempos variam conforme o trânsito.',
    testimonialContext: 'vizinhos da Vila Izabel',
    whyChooseUs: [
      'Vizinho do seu bairro',
      'Preços de atacado',
      'Atendimento rápido'
    ],
    localBenefits: 'A Vila Izabel está pertinho da Carplus - venha nos visitar!'
  },

  'vila-hauer': {
    slug: 'vila-hauer',
    name: 'Vila Hauer',
    metaTitle: 'Pneus para Vila Hauer | Carplus no Portão, Curitiba',
    metaDescription: 'Pneus e serviços para quem vem de Vila Hauer. Atendimento na unidade do Portão, Curitiba. Consulte medida, disponibilidade, orçamento e trajeto no mapa.',
    h1: 'Pneus e Oficina para Vila Hauer',
    heroSubtitle: 'Vila Hauer: pneus de qualidade',
    introText: 'A Vila Hauer é uma região tradicional de Curitiba. A Carplus Centro Automotivo oferece pneus de qualidade e serviços profissionais.',
    localContext: 'Próxima ao Hauer, a Vila Hauer tem acesso fácil ao Portão. A Carplus atende moradores com qualidade.',
    servicesHighlight: [
      'Pneus das melhores marcas',
      'Alinhamento 3D',
      'Balanceamento',
      'Troca de óleo',
      'Suspensão'
    ],
    searchPhrases: [
      'pneus Vila Hauer Curitiba',
      'oficina Vila Hauer',
      'alinhamento Vila Hauer',
      'troca de pneu Vila Hauer'
    ],
    nearbyLandmarks: [
      'Hauer',
      'Boqueirão',
      'Prado Velho'
    ],
    trafficTips: 'Para sair de Vila Hauer, consulte o mapa com destino à Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Rotas e tempos variam conforme o trânsito.',
    testimonialContext: 'moradores da Vila Hauer',
    whyChooseUs: [
      'Preços competitivos',
      'Qualidade',
      'Atendimento profissional'
    ],
    localBenefits: 'A Vila Hauer está bem conectada - visite a Carplus!'
  },

  'vila-guaira': {
    slug: 'vila-guaira',
    name: 'Vila Guaíra',
    metaTitle: 'Pneus para Vila Guaíra | Carplus no Portão, Curitiba',
    metaDescription: 'Pneus e serviços para quem vem de Vila Guaíra. Atendimento na unidade do Portão, Curitiba. Consulte medida, disponibilidade, orçamento e trajeto no mapa.',
    h1: 'Pneus e Oficina para Vila Guaíra',
    heroSubtitle: 'Vila Guaíra: pneus de qualidade pertinho',
    introText: 'Quem vem de Vila Guaíra pode consultar pneus e serviços na Carplus, na Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Informe ano, versão e medida do veículo para conferir as opções e os serviços necessários.',
    localContext: 'Vizinha do Portão, a Vila Guaíra tem acesso direto à Carplus. Moradores encontram qualidade e preço justo.',
    servicesHighlight: [
      'Pneus Pirelli, Michelin, Goodyear',
      'Alinhamento 3D',
      'Balanceamento',
      'Troca de óleo',
      'Revisão de freios'
    ],
    searchPhrases: [
      'pneus Vila Guaíra Curitiba',
      'oficina Vila Guaíra',
      'alinhamento Vila Guaíra',
      'troca de pneu Vila Guaíra'
    ],
    nearbyLandmarks: [
      'Guaíra',
      'Portão',
      'Capão Raso'
    ],
    trafficTips: 'Para sair de Vila Guaíra, consulte o mapa com destino à Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Rotas e tempos variam conforme o trânsito.',
    testimonialContext: 'vizinhos da Vila Guaíra',
    whyChooseUs: [
      'Pertinho do seu bairro',
      'Preços de atacado',
      'Atendimento rápido'
    ],
    localBenefits: 'A Vila Guaíra está pertinho - venha à Carplus!'
  },

  'vila-fanny': {
    slug: 'vila-fanny',
    name: 'Vila Fanny',
    metaTitle: 'Pneus para Vila Fanny | Carplus no Portão, Curitiba',
    metaDescription: 'Pneus e serviços para quem vem de Vila Fanny. Atendimento na unidade do Portão, Curitiba. Consulte medida, disponibilidade, orçamento e trajeto no mapa.',
    h1: 'Pneus e Oficina para Vila Fanny',
    heroSubtitle: 'Vila Fanny: pneus de qualidade',
    introText: 'A Vila Fanny é uma região próxima ao Fanny e Portão. A Carplus Centro Automotivo oferece pneus das melhores marcas.',
    localContext: 'Vizinha do Portão, a Vila Fanny tem acesso fácil à Carplus. Moradores encontram qualidade e preço justo.',
    servicesHighlight: [
      'Pneus das melhores marcas',
      'Alinhamento 3D',
      'Balanceamento',
      'Troca de óleo',
      'Suspensão'
    ],
    searchPhrases: [
      'pneus Vila Fanny Curitiba',
      'oficina Vila Fanny',
      'alinhamento Vila Fanny',
      'troca de pneu Vila Fanny'
    ],
    nearbyLandmarks: [
      'Fanny',
      'Portão',
      'Lindóia'
    ],
    trafficTips: 'Para sair de Vila Fanny, consulte o mapa com destino à Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Rotas e tempos variam conforme o trânsito.',
    testimonialContext: 'vizinhos da Vila Fanny',
    whyChooseUs: [
      'Preços justos',
      'Qualidade',
      'Atendimento rápido'
    ],
    localBenefits: 'A Vila Fanny está pertinho - visite-nos!'
  },

  'vila-torres': {
    slug: 'vila-torres',
    name: 'Vila Torres',
    metaTitle: 'Pneus para Vila Torres | Carplus no Portão, Curitiba',
    metaDescription: 'Loja de pneus Vila Torres, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D e serviços.',
    h1: 'Pneus e Oficina para Vila Torres',
    heroSubtitle: 'Vila Torres: pneus de qualidade',
    introText: 'A Vila Torres é uma região de Curitiba próxima ao Prado Velho. A Carplus Centro Automotivo oferece pneus de qualidade e preço acessível.',
    localContext: 'A Vila Torres tem acesso fácil ao centro e ao Portão. A Carplus atende moradores com os melhores preços.',
    servicesHighlight: [
      'Pneus econômicos',
      'Alinhamento 3D',
      'Balanceamento',
      'Troca de óleo',
      'Suspensão'
    ],
    searchPhrases: [
      'pneus Vila Torres Curitiba',
      'oficina Vila Torres',
      'alinhamento Vila Torres',
      'borracharia Vila Torres'
    ],
    nearbyLandmarks: [
      'Prado Velho',
      'Centro',
      'Rebouças'
    ],
    trafficTips: 'Para sair de Vila Torres, consulte o mapa com destino à Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Rotas e tempos variam conforme o trânsito.',
    testimonialContext: 'moradores da Vila Torres',
    whyChooseUs: [
      'Preços acessíveis',
      'Qualidade',
      'Parcelamento'
    ],
    localBenefits: 'Moradores da Vila Torres economizam na Carplus!'
  },

  'vila-oficinas': {
    slug: 'vila-oficinas',
    name: 'Vila Oficinas',
    metaTitle: 'Pneus para Vila Oficinas | Carplus no Portão, Curitiba',
    metaDescription: 'Loja de pneus Vila Oficinas, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D e serviços.',
    h1: 'Pneus e Oficina para Vila Oficinas',
    heroSubtitle: 'Vila Oficinas: pneus de qualidade',
    introText: 'A Vila Oficinas é uma região de Curitiba. A Carplus Centro Automotivo oferece pneus de qualidade e preço justo.',
    localContext: 'A Vila Oficinas está bem conectada às principais vias. A Carplus atende moradores com qualidade.',
    servicesHighlight: [
      'Pneus das melhores marcas',
      'Alinhamento 3D',
      'Balanceamento',
      'Troca de óleo',
      'Revisão geral'
    ],
    searchPhrases: [
      'pneus Vila Oficinas Curitiba',
      'oficina Vila Oficinas',
      'alinhamento Vila Oficinas',
      'troca de pneu Vila Oficinas'
    ],
    nearbyLandmarks: [
      'Cajuru',
      'Capão da Imbuia',
      'Uberaba'
    ],
    trafficTips: 'Para sair de Vila Oficinas, consulte o mapa com destino à Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Rotas e tempos variam conforme o trânsito.',
    testimonialContext: 'moradores da Vila Oficinas',
    whyChooseUs: [
      'Qualidade',
      'Preços competitivos',
      'Atendimento'
    ],
    localBenefits: 'Moradores da Vila Oficinas são bem-vindos na Carplus!'
  },

  // ══════════════════════════════════════
  // NOVAS VILAS E REGIÕES POPULARES
  // ══════════════════════════════════════
  'vila-sandra': {
    slug: 'vila-sandra',
    name: 'Vila Sandra',
    metaTitle: 'Pneus para Vila Sandra | Carplus no Portão, Curitiba',
    metaDescription: 'Pneus e serviços para quem vem de Vila Sandra. Atendimento na unidade do Portão, Curitiba. Consulte medida, disponibilidade, orçamento e trajeto no mapa.',
    h1: 'Pneus e Oficina para Vila Sandra',
    heroSubtitle: 'Vila Sandra: pneus de qualidade',
    introText: 'A Vila Sandra é uma comunidade de Curitiba. A Carplus Centro Automotivo oferece pneus de qualidade e preço justo para moradores.',
    localContext: 'A Vila Sandra tem acesso fácil ao Portão. A Carplus atende moradores com qualidade e preços competitivos.',
    servicesHighlight: [
      'Pneus das melhores marcas',
      'Alinhamento 3D',
      'Balanceamento',
      'Troca de óleo',
      'Suspensão e freios'
    ],
    searchPhrases: [
      'pneus Vila Sandra Curitiba',
      'oficina Vila Sandra',
      'alinhamento Vila Sandra',
      'borracharia Vila Sandra'
    ],
    nearbyLandmarks: [
      'CIC',
      'Fazendinha',
      'Portão'
    ],
    trafficTips: 'Para sair de Vila Sandra, consulte o mapa com destino à Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Rotas e tempos variam conforme o trânsito.',
    testimonialContext: 'moradores da Vila Sandra',
    whyChooseUs: [
      'Preços acessíveis',
      'Qualidade garantida',
      'Parcelamento'
    ],
    localBenefits: 'Moradores da Vila Sandra são bem-vindos na Carplus!'
  },

  'neoville': {
    slug: 'neoville',
    name: 'Neoville',
    metaTitle: 'Pneus para Neoville | Carplus no Portão, Curitiba',
    metaDescription: 'Loja de pneus Neoville, Curitiba. Pirelli, Michelin, Goodyear, Continental. Alinhamento 3D para veículos de alto padrão.',
    h1: 'Pneus e Oficina para Neoville',
    heroSubtitle: 'Neoville: pneus premium para seu veículo',
    introText: 'O Neoville é um empreendimento de alto padrão em Curitiba. A Carplus Centro Automotivo oferece pneus premium e serviços de excelência para moradores exigentes.',
    localContext: 'O Neoville reúne moradores que valorizam qualidade. A Carplus atende com pneus para veículos de alto padrão e serviços profissionais.',
    servicesHighlight: [
      'Pneus premium para SUVs e sedans executivos',
      'Alinhamento 3D Hunter de precisão',
      'Balanceamento computadorizado',
      'Troca de óleo sintético premium',
      'Diagnóstico eletrônico completo'
    ],
    searchPhrases: [
      'pneus Neoville Curitiba',
      'oficina Neoville',
      'alinhamento Neoville',
      'pneus premium Neoville'
    ],
    nearbyLandmarks: [
      'Ecoville',
      'Campo Comprido',
      'Mossunguê'
    ],
    trafficTips: 'Para sair de Neoville, consulte o mapa com destino à Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Rotas e tempos variam conforme o trânsito.',
    testimonialContext: 'moradores do Neoville',
    whyChooseUs: [
      'Especialistas em pneus premium',
      'Atendimento VIP',
      'Pneus para importados'
    ],
    localBenefits: 'O Neoville merece qualidade premium - visite a Carplus!'
  },

  'vila-verde': {
    slug: 'vila-verde',
    name: 'Vila Verde',
    metaTitle: 'Pneus para Vila Verde | Carplus no Portão, Curitiba',
    metaDescription: 'Loja de pneus Vila Verde, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D e serviços automotivos.',
    h1: 'Pneus e Oficina para Vila Verde',
    heroSubtitle: 'Vila Verde: pneus de qualidade',
    introText: 'A Vila Verde é uma região residencial de Curitiba. A Carplus Centro Automotivo oferece pneus de qualidade e preço justo.',
    localContext: 'A Vila Verde está bem localizada com acesso ao Portão. A Carplus atende moradores com qualidade e atendimento profissional.',
    servicesHighlight: [
      'Pneus Pirelli, Michelin, Goodyear',
      'Alinhamento 3D',
      'Balanceamento',
      'Troca de óleo',
      'Revisão completa'
    ],
    searchPhrases: [
      'pneus Vila Verde Curitiba',
      'oficina Vila Verde',
      'alinhamento Vila Verde',
      'troca de pneu Vila Verde'
    ],
    nearbyLandmarks: [
      'CIC',
      'Campo Comprido',
      'Santa Quitéria'
    ],
    trafficTips: 'Para sair de Vila Verde, consulte o mapa com destino à Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Rotas e tempos variam conforme o trânsito.',
    testimonialContext: 'moradores da Vila Verde',
    whyChooseUs: [
      'Preços competitivos',
      'Qualidade',
      'Atendimento rápido'
    ],
    localBenefits: 'Moradores da Vila Verde são bem-vindos na Carplus!'
  },

  'vila-nossa-senhora-da-luz': {
    slug: 'vila-nossa-senhora-da-luz',
    name: 'Vila Nossa Senhora da Luz',
    metaTitle: 'Pneus para Vila Nossa Senhora da Luz | Carplus no Portão, Curitiba',
    metaDescription: 'Pneus e serviços para quem vem de Vila Nossa Senhora da Luz. Atendimento na unidade do Portão, Curitiba. Consulte medida, disponibilidade, orçamento e trajeto no mapa.',
    h1: 'Pneus e Oficina para Vila Nossa Senhora da Luz',
    heroSubtitle: 'Vila Nossa Senhora da Luz: pneus de qualidade',
    introText: 'A Vila Nossa Senhora da Luz é uma comunidade de Curitiba. A Carplus Centro Automotivo oferece pneus de qualidade e preço acessível.',
    localContext: 'A Vila Nossa Senhora da Luz tem acesso ao Portão pelas principais vias. A Carplus atende moradores com os melhores preços.',
    servicesHighlight: [
      'Pneus econômicos e intermediários',
      'Alinhamento 3D',
      'Balanceamento',
      'Troca de óleo',
      'Suspensão'
    ],
    searchPhrases: [
      'pneus Vila Nossa Senhora da Luz',
      'oficina Vila Nossa Senhora da Luz Curitiba',
      'alinhamento Vila Nossa Senhora da Luz',
      'borracharia Vila Nossa Senhora da Luz'
    ],
    nearbyLandmarks: [
      'CIC',
      'Pinheirinho',
      'Capão Raso'
    ],
    trafficTips: 'Para sair de Vila Nossa Senhora da Luz, consulte o mapa com destino à Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Rotas e tempos variam conforme o trânsito.',
    testimonialContext: 'moradores da Vila Nossa Senhora da Luz',
    whyChooseUs: [
      'Preços acessíveis',
      'Qualidade',
      'Parcelamento'
    ],
    localBenefits: 'Moradores da Vila Nossa Senhora da Luz economizam na Carplus!'
  },

  'vila-pantanal': {
    slug: 'vila-pantanal',
    name: 'Vila Pantanal',
    metaTitle: 'Pneus para Vila Pantanal | Carplus no Portão, Curitiba',
    metaDescription: 'Loja de pneus Vila Pantanal, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D e serviços.',
    h1: 'Pneus e Oficina para Vila Pantanal',
    heroSubtitle: 'Vila Pantanal: pneus de qualidade',
    introText: 'A Vila Pantanal é uma comunidade de Curitiba. A Carplus Centro Automotivo oferece pneus de qualidade e preço justo para moradores.',
    localContext: 'A Vila Pantanal está conectada às principais vias de Curitiba. A Carplus atende moradores com qualidade.',
    servicesHighlight: [
      'Pneus das melhores marcas',
      'Alinhamento 3D',
      'Balanceamento',
      'Troca de óleo',
      'Suspensão e freios'
    ],
    searchPhrases: [
      'pneus Vila Pantanal Curitiba',
      'oficina Vila Pantanal',
      'alinhamento Vila Pantanal',
      'borracharia Vila Pantanal'
    ],
    nearbyLandmarks: [
      'Alto Boqueirão',
      'Uberaba',
      'Cajuru'
    ],
    trafficTips: 'Para sair de Vila Pantanal, consulte o mapa com destino à Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Rotas e tempos variam conforme o trânsito.',
    testimonialContext: 'moradores da Vila Pantanal',
    whyChooseUs: [
      'Preços justos',
      'Qualidade',
      'Atendimento profissional'
    ],
    localBenefits: 'Moradores da Vila Pantanal são bem-vindos na Carplus!'
  },

  'vitoria-regia': {
    slug: 'vitoria-regia',
    name: 'Vitória Régia',
    metaTitle: 'Pneus para Vitória Régia | Carplus no Portão, Curitiba',
    metaDescription: 'Loja de pneus Vitória Régia, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D e serviços automotivos.',
    h1: 'Pneus e Oficina para Vitória Régia',
    heroSubtitle: 'Vitória Régia: pneus de qualidade',
    introText: 'Vitória Régia é uma região de Curitiba. A Carplus Centro Automotivo oferece pneus de qualidade e preço acessível para moradores.',
    localContext: 'Vitória Régia tem acesso ao Portão pelas principais vias. A Carplus atende moradores com os melhores preços.',
    servicesHighlight: [
      'Pneus econômicos',
      'Alinhamento 3D',
      'Balanceamento',
      'Troca de óleo',
      'Revisão geral'
    ],
    searchPhrases: [
      'pneus Vitória Régia Curitiba',
      'oficina Vitória Régia',
      'alinhamento Vitória Régia',
      'borracharia Vitória Régia'
    ],
    nearbyLandmarks: [
      'CIC',
      'Tatuquara',
      'Campo Comprido'
    ],
    trafficTips: 'Para sair de Vitória Régia, consulte o mapa com destino à Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Rotas e tempos variam conforme o trânsito.',
    testimonialContext: 'moradores de Vitória Régia',
    whyChooseUs: [
      'Preços acessíveis',
      'Qualidade',
      'Parcelamento'
    ],
    localBenefits: 'Moradores de Vitória Régia são bem-vindos na Carplus!'
  },

  'sabara': {
    slug: 'sabara',
    name: 'Sabará',
    metaTitle: 'Pneus para Sabará | Carplus no Portão, Curitiba',
    metaDescription: 'Loja de pneus Sabará, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D e serviços.',
    h1: 'Pneus e Oficina para Sabará',
    heroSubtitle: 'Sabará: pneus de qualidade',
    introText: 'Sabará é um bairro de Curitiba na região do Pinheirinho. A Carplus Centro Automotivo oferece pneus de qualidade e preço justo.',
    localContext: 'Sabará está bem localizado com acesso ao Portão. A Carplus atende moradores com qualidade e atendimento profissional.',
    servicesHighlight: [
      'Pneus Pirelli, Michelin, Goodyear',
      'Alinhamento 3D',
      'Balanceamento',
      'Troca de óleo',
      'Suspensão e freios'
    ],
    searchPhrases: [
      'pneus Sabará Curitiba',
      'oficina Sabará',
      'alinhamento Sabará',
      'troca de pneu Sabará'
    ],
    nearbyLandmarks: [
      'Pinheirinho',
      'Capão Raso',
      'Tatuquara'
    ],
    trafficTips: 'Para sair de Sabará, consulte o mapa com destino à Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Rotas e tempos variam conforme o trânsito.',
    testimonialContext: 'moradores de Sabará',
    whyChooseUs: [
      'Preços competitivos',
      'Qualidade',
      'Atendimento rápido'
    ],
    localBenefits: 'Moradores de Sabará são bem-vindos na Carplus!'
  },

  'santa-felicidade-norte': {
    slug: 'santa-felicidade-norte',
    name: 'Santa Felicidade Norte',
    metaTitle: 'Pneus para Santa Felicidade Norte | Carplus no Portão, Curitiba',
    metaDescription: 'Loja de pneus Santa Felicidade Norte, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D e serviços.',
    h1: 'Pneus e Oficina para Santa Felicidade Norte',
    heroSubtitle: 'Santa Felicidade Norte: pneus de qualidade',
    introText: 'Santa Felicidade Norte é uma região tradicional de Curitiba, conhecida pela gastronomia italiana. A Carplus Centro Automotivo oferece pneus de qualidade.',
    localContext: 'Santa Felicidade Norte fica na região noroeste de Curitiba, com acesso pela Av. Manoel Ribas. A Carplus atende moradores com qualidade.',
    servicesHighlight: [
      'Pneus para carros e SUVs',
      'Alinhamento 3D Hunter',
      'Balanceamento',
      'Troca de óleo',
      'Revisão completa'
    ],
    searchPhrases: [
      'pneus Santa Felicidade Norte',
      'oficina Santa Felicidade Norte Curitiba',
      'alinhamento Santa Felicidade Norte',
      'troca de pneu Santa Felicidade Norte'
    ],
    nearbyLandmarks: [
      'Santa Felicidade',
      'Butiatuvinha',
      'São Braz'
    ],
    trafficTips: 'Para sair de Santa Felicidade Norte, consulte o mapa com destino à Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Rotas e tempos variam conforme o trânsito.',
    testimonialContext: 'moradores de Santa Felicidade Norte',
    whyChooseUs: [
      'Qualidade',
      'Preços justos',
      'Atendimento profissional'
    ],
    localBenefits: 'Moradores de Santa Felicidade Norte são bem-vindos na Carplus!'
  },

  // ══════════════════════════════════════
  // REGIÃO METROPOLITANA - NOVOS
  // ══════════════════════════════════════
  'piraquara': {
    slug: 'piraquara',
    name: 'Piraquara',
    metaTitle: 'Pneus para Piraquara | Carplus no Portão, Curitiba',
    metaDescription: 'Pneus e serviços para quem vem de Piraquara. Atendimento na unidade do Portão, Curitiba. Consulte medida, disponibilidade, orçamento e trajeto no mapa.',
    h1: 'Pneus e Oficina para Piraquara',
    heroSubtitle: 'Atendimento para quem vem de Piraquara na unidade do Portão, Curitiba',
    introText: 'Piraquara é uma cidade da região metropolitana de Curitiba, conhecida pelos mananciais. Moradores encontram na Carplus pneus de qualidade e preços que compensam o deslocamento.',
    localContext: 'Antes de se deslocar de Piraquara, confirme a disponibilidade e a agenda. Use o mapa para escolher o trajeto até a unidade do Portão, em Curitiba.',
    servicesHighlight: [
      'Pneus Pirelli, Michelin, Goodyear e Yokohama',
      'Alinhamento computadorizado 3D',
      'Balanceamento de rodas',
      'Troca de óleo sintético e mineral',
      'Revisão de suspensão e freios'
    ],
    searchPhrases: [
      'pneus Piraquara PR',
      'loja de pneus Piraquara',
      'oficina Piraquara',
      'alinhamento Piraquara',
      'borracharia Piraquara'
    ],
    nearbyLandmarks: [
      'Centro de Piraquara',
      'Pinhais',
      'Quatro Barras'
    ],
    trafficTips: 'Para sair de Piraquara, consulte o mapa com destino à Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Rotas e tempos variam conforme o trânsito.',
    testimonialContext: 'moradores de Piraquara',
    whyChooseUs: [
      'Preços de atacado',
      'Variedade de pneus',
      'Atendimento profissional',
      'Parcelamento em até 10x'
    ],
    localBenefits: 'Muitos clientes de Piraquara são clientes fiéis da Carplus. Venha conhecer!'
  },

  'quatro-barras': {
    slug: 'quatro-barras',
    name: 'Quatro Barras',
    metaTitle: 'Pneus para Quatro Barras | Carplus no Portão, Curitiba',
    metaDescription: 'Pneus e serviços para quem vem de Quatro Barras. Atendimento na unidade do Portão, Curitiba. Consulte medida, disponibilidade, orçamento e trajeto no mapa.',
    h1: 'Pneus e Oficina para Quatro Barras',
    heroSubtitle: 'Atendimento para quem vem de Quatro Barras na unidade do Portão, Curitiba',
    introText: 'Quatro Barras é uma cidade da região metropolitana de Curitiba, próxima à Serra do Mar. Moradores encontram na Carplus pneus de qualidade e excelente atendimento.',
    localContext: 'Antes de se deslocar de Quatro Barras, confirme a disponibilidade e a agenda. Use o mapa para escolher o trajeto até a unidade do Portão, em Curitiba.',
    servicesHighlight: [
      'Pneus para carros e SUVs',
      'Alinhamento 3D Hunter',
      'Balanceamento computadorizado',
      'Troca de óleo',
      'Revisão completa'
    ],
    searchPhrases: [
      'pneus Quatro Barras PR',
      'loja de pneus Quatro Barras',
      'oficina Quatro Barras',
      'alinhamento Quatro Barras',
      'borracharia Quatro Barras'
    ],
    nearbyLandmarks: [
      'Centro de Quatro Barras',
      'Campina Grande do Sul',
      'Piraquara'
    ],
    trafficTips: 'Para sair de Quatro Barras, consulte o mapa com destino à Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Rotas e tempos variam conforme o trânsito.',
    testimonialContext: 'moradores de Quatro Barras',
    whyChooseUs: [
      'Preços justos',
      'Qualidade premium',
      'Atendimento especializado'
    ],
    localBenefits: 'Moradores de Quatro Barras são bem-vindos na Carplus!'
  },

  'campina-grande-do-sul': {
    slug: 'campina-grande-do-sul',
    name: 'Campina Grande do Sul',
    metaTitle: 'Pneus para Campina Grande do Sul | Carplus no Portão, Curitiba',
    metaDescription: 'Pneus e serviços para quem vem de Campina Grande do Sul. Atendimento na unidade do Portão, Curitiba. Consulte medida, disponibilidade, orçamento e trajeto no mapa.',
    h1: 'Pneus e Oficina para Campina Grande do Sul',
    heroSubtitle: 'Atendimento para quem vem de Campina Grande do Sul na unidade do Portão, Curitiba',
    introText: 'Campina Grande do Sul é uma cidade da região metropolitana de Curitiba. Moradores encontram na Carplus pneus de qualidade e preços que compensam o deslocamento.',
    localContext: 'Antes de se deslocar de Campina Grande do Sul, confirme a disponibilidade e a agenda. Use o mapa para escolher o trajeto até a unidade do Portão, em Curitiba.',
    servicesHighlight: [
      'Pneus das melhores marcas',
      'Alinhamento 3D',
      'Balanceamento',
      'Troca de óleo',
      'Suspensão e freios'
    ],
    searchPhrases: [
      'pneus Campina Grande do Sul PR',
      'loja de pneus Campina Grande do Sul',
      'oficina Campina Grande do Sul',
      'alinhamento Campina Grande do Sul',
      'borracharia Campina Grande do Sul'
    ],
    nearbyLandmarks: [
      'Centro de Campina Grande do Sul',
      'Quatro Barras',
      'Bocaiúva do Sul'
    ],
    trafficTips: 'Para sair de Campina Grande do Sul, consulte o mapa com destino à Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Rotas e tempos variam conforme o trânsito.',
    testimonialContext: 'moradores de Campina Grande do Sul',
    whyChooseUs: [
      'Preços de atacado',
      'Qualidade garantida',
      'Parcelamento facilitado'
    ],
    localBenefits: 'Moradores de Campina Grande do Sul são bem-vindos na Carplus!'
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
    metaTitle: `Pneus para ${name} | Carplus no Portão, Curitiba`,
    metaDescription: `Pneus e serviços para quem vem de ${name}. Atendimento na unidade do Portão, Curitiba. Consulte medida, disponibilidade, orçamento e trajeto no mapa.`,
    h1: `Pneus e Oficina para ${name}`,
    heroSubtitle: `Atendimento para quem vem de ${name} na unidade do Portão, Curitiba`,
    introText: `Quem vem de ${name} pode consultar pneus e serviços na Carplus, na Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Informe ano, versão e medida do veículo para conferir as opções e os serviços necessários.`,
    localContext: `Antes de se deslocar de ${name}, confirme a disponibilidade e a agenda. Use o mapa para escolher o trajeto até a unidade do Portão, em Curitiba.`,
    servicesHighlight: [
      'Pneus das melhores marcas com instalação sob consulta',
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
    trafficTips: `Para sair de ${name}, consulte o mapa com destino à Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Rotas e tempos variam conforme o trânsito.`,
    testimonialContext: `moradores de ${name}`,
    whyChooseUs: [
      'Preços de atacado em pneus',
      'Montagem e balanceamento sob consulta',
      'Garantia de fábrica',
      'Parcelamento em até 10x sem juros'
    ],
    localBenefits: `Quem vem de ${name} pode consultar pneus e serviços na nossa unidade do Portão, Curitiba. Confirme as condições do atendimento antes de vir.`
  };
}
