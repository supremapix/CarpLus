// ════════════════════════════════════════════════════════════════
// BASE DE DADOS SEO — Páginas "Oficina Especializada por Marca / Serviço"
// Conteúdo 100% original, focado em SEO local ético (Curitiba – Portão).
//
// IMPORTANTE (regra legal/ética): a Carplus NÃO é concessionária nem
// oficina AUTORIZADA de fábrica. Nunca afirmamos ser "autorizada". As páginas
// posicionam a Carplus como oficina ESPECIALIZADA e INDEPENDENTE, alternativa
// à concessionária, mantendo a garantia de fábrica conforme o CDC.
// ════════════════════════════════════════════════════════════════

// Dados reais do negócio (reutilizados em todas as páginas).
export const WHATSAPP_NUMBER = '554130827282';
export const PHONE_DISPLAY = '(41) 3082-7282';
export const PHONE_TEL = '+554130827282';
export const ADDRESS_STREET = 'Av. Presidente Arthur da Silva Bernardes, 1323';
export const ADDRESS_FULL =
  'Av. Presidente Arthur da Silva Bernardes, 1323 – Portão, Curitiba – PR';
export const ADDRESS_POSTAL = '80320-300';
export const GEO_LAT = -25.477;
export const GEO_LNG = -49.2845;
export const RATING_VALUE = 4.9;
export const REVIEW_COUNT = 234;
export const INSTAGRAM_URL = 'https://www.instagram.com/carpluscwb/';
export const MAPS_EMBED =
  'https://www.google.com/maps?q=Av.+Presidente+Arthur+da+Silva+Bernardes,+1323,+Curitiba+PR&output=embed';

export const BASE_URL = 'https://www.carpluspneuseoficina.com.br';

// ─── Tipos ────────────────────────────────────────────────────────
export interface ServicoDestaque {
  titulo: string;
  descricao: string;
}

export interface ProblemaComum {
  problema: string;
  solucao: string;
}

export interface OficinaFaq {
  pergunta: string;
  resposta: string;
}

export interface OficinaSecao {
  titulo: string;
  conteudo: string;
}

export interface OficinaMarcaPage {
  slug: string;
  marca: string;
  tipo: 'marca' | 'servico';
  titleTag: string;
  metaDescription: string;
  h1: string;
  heroSubtitulo: string;
  /** Texto curto exibido no chip acima do H1. */
  eyebrow: string;
  modelosAtendidos: string[];
  servicosDestaque: ServicoDestaque[];
  problemasComuns: ProblemaComum[];
  /** Bloco "oficina autorizada — alternativa inteligente" (páginas de marca). */
  alternativaAutorizada?: string;
  /** Texto introdutório (abre o conteúdo editorial). */
  intro: string;
  /** Seções de conteúdo editorial (para SEO, 800+ palavras). */
  secoes: OficinaSecao[];
  faq: OficinaFaq[];
  keywordsSecundarias: string[];
  /** Mensagem pré-preenchida no WhatsApp. */
  whatsappMessage: string;
  ctaTitle: string;
  ctaSubtitle: string;
}

// ─── Blocos de serviço reutilizáveis (adaptados por marca no map) ──
function servicosPorMarca(marca: string): ServicoDestaque[] {
  return [
    {
      titulo: `Revisão completa ${marca}`,
      descricao: `Revisão por quilometragem seguindo o plano do manual ${marca}, com checklist detalhado, peças adequadas e nota fiscal — mantendo a garantia de fábrica.`,
    },
    {
      titulo: 'Troca de óleo e filtros',
      descricao: `Óleo na especificação correta para motores ${marca}, troca de filtro de óleo, ar, combustível e cabine, com descarte ecológico do óleo usado.`,
    },
    {
      titulo: 'Freios',
      descricao: `Pastilhas, discos, fluido e retífica para o sistema de frenagem do seu ${marca}, com teste de eficiência após o serviço.`,
    },
    {
      titulo: 'Suspensão e direção',
      descricao: `Amortecedores, molas, batentes, buchas, pivôs e terminais dimensionados para veículos ${marca}, devolvendo conforto e estabilidade.`,
    },
    {
      titulo: 'Câmbio (automático e manual)',
      descricao: `Troca de óleo de câmbio automático com equipamento adequado, diagnóstico de trocas e reparos de embreagem em modelos ${marca}.`,
    },
    {
      titulo: 'Diagnóstico eletrônico',
      descricao: `Scanner automotivo profissional para injeção eletrônica, ABS, airbag e reset de painel dos veículos ${marca}, com laudo antes do orçamento.`,
    },
  ];
}

// ════════════════════════════════════════════════════════════════
// PÁGINAS
// ════════════════════════════════════════════════════════════════

export const OFICINA_MARCA_PAGES: OficinaMarcaPage[] = [
  // ───────────────────────────── 1) FIAT ─────────────────────────────
  {
    slug: 'oficina-especializada-fiat-curitiba',
    marca: 'Fiat',
    tipo: 'marca',
    titleTag: 'Oficina Especializada Fiat em Curitiba | Carplus – Portão',
    metaDescription:
      'Oficina especializada em Fiat no Portão, Curitiba. Revisão, câmbio Dualogic, injeção e diagnóstico com garantia. Orçamento no WhatsApp (41) 3082-7282.',
    h1: 'Oficina Especializada em Fiat em Curitiba',
    heroSubtitulo:
      'Revisão, mecânica e diagnóstico computadorizado para veículos Fiat no bairro Portão, em Curitiba. Peças de qualidade, nota fiscal e garantia em todos os serviços.',
    eyebrow: 'Especialista Fiat • Portão, Curitiba',
    modelosAtendidos: ['Argo', 'Mobi', 'Strada', 'Toro', 'Pulse', 'Fastback', 'Cronos', 'Uno', 'Palio', 'Fiorino'],
    servicosDestaque: servicosPorMarca('Fiat'),
    problemasComuns: [
      {
        problema: 'Câmbio Dualogic com trepidação e demora nas trocas',
        solucao:
          'Fazemos a leitura do módulo com scanner, calibração do ponto de embreagem, troca do fluido correto e avaliação do atuador — resolvendo os solavancos típicos do Dualogic sem trocar o câmbio à toa.',
      },
      {
        problema: 'Barulho de corrente de comando em motores Firefly e E.torQ',
        solucao:
          'Diagnosticamos o esticador e a folga da corrente, substituindo o kit completo quando necessário para evitar salto de dente e dano ao motor.',
      },
      {
        problema: 'Falha no sensor de fase gerando luz de injeção acesa',
        solucao:
          'Lemos o código de falha, testamos o sensor e a fiação e substituímos a peça original, eliminando falhas de partida e marcha lenta irregular.',
      },
      {
        problema: 'Embreagem gasta na Strada e na Toro',
        solucao:
          'Avaliamos o desgaste do platô, disco e rolamento e fazemos a troca do kit de embreagem com peças de qualidade, restaurando o engate suave.',
      },
      {
        problema: 'Body Computer com falhas elétricas intermitentes',
        solucao:
          'Testamos o módulo Body Computer e os chicotes, corrigindo falhas de vidros, trava, painel e iluminação com reparo elétrico especializado.',
      },
    ],
    alternativaAutorizada:
      'A Carplus é uma oficina ESPECIALIZADA e INDEPENDENTE — não é concessionária nem autorizada Fiat. Atendemos veículos Fiat com diagnóstico computadorizado, scanner específico, peças de qualidade e nota fiscal em tudo, mantendo a garantia de fábrica conforme o Código de Defesa do Consumidor. Na prática, você tem o mesmo cuidado técnico de uma autorizada, com preço em média mais acessível e atendimento mais rápido, aqui no Portão em Curitiba.',
    intro:
      'Encontrar uma oficina especializada em Fiat em Curitiba que una conhecimento técnico da marca, equipamento certo e preço justo faz toda a diferença para quem roda com Argo, Mobi, Strada, Toro, Pulse ou qualquer outro modelo da linha. Na Carplus, no bairro Portão, somos referência no atendimento a veículos Fiat: conhecemos a fundo as particularidades dos motores Firefly e E.torQ, do câmbio Dualogic e da parte elétrica que costuma dar dor de cabeça nesses carros. Antes de qualquer orçamento, fazemos um diagnóstico computadorizado para identificar exatamente o que o seu Fiat precisa.',
    secoes: [
      {
        titulo: 'Por que escolher uma oficina especializada em Fiat',
        conteudo:
          'Os veículos Fiat têm soluções de engenharia próprias — como o câmbio automatizado Dualogic e os motores da família Firefly — que exigem scanner compatível e experiência de quem já resolveu esses problemas centenas de vezes. Uma oficina generalista pode até fazer a troca de óleo, mas dificilmente domina a calibração do Dualogic ou a leitura correta dos módulos Fiat. A equipe da Carplus trata cada Fiat com o cuidado técnico que a marca pede, evitando trocas desnecessárias e indo direto à causa do problema.',
      },
      {
        titulo: 'Revisão do seu Fiat sem perder a garantia de fábrica',
        conteudo:
          'Muitos donos de Fiat acreditam que precisam revisar o carro só na concessionária para não perder a garantia. Isso é mito: o Código de Defesa do Consumidor garante que você pode fazer a revisão em qualquer oficina de sua confiança, desde que sejam seguidos o plano do manual e usadas peças adequadas, com nota fiscal. A Carplus emite nota fiscal de tudo e segue rigorosamente o cronograma de revisão do seu Fiat — 10.000, 20.000, 30.000 km e assim por diante — normalmente a um custo bem menor que o da rede autorizada.',
      },
      {
        titulo: 'Diagnóstico eletrônico e injeção Fiat',
        conteudo:
          'A luz de injeção acesa no painel do Fiat pode significar dezenas de coisas diferentes — de um sensor de fase com defeito a um problema de sonda lambda ou bico entupido. Em vez de trocar peça por tentativa, usamos scanner automotivo profissional para ler os códigos de falha, testar sensores e atuadores e chegar à origem do problema. Fazemos também limpeza de bicos injetores, reset de painel, verificação de ABS e airbag, tudo com laudo apresentado antes do orçamento.',
      },
      {
        titulo: 'Atendimento no Portão para toda Curitiba',
        conteudo:
          'Nossa oficina fica na Avenida Presidente Arthur da Silva Bernardes, 1323, no Portão, com fácil acesso para quem vem da Água Verde, Novo Mundo, Fazendinha, Santa Quitéria, Capão Raso e de toda a região sul e central de Curitiba. Trabalhamos com parcelamento em até 10x sem juros, diagnóstico antes do orçamento e garantia em todos os serviços. Traga seu Fiat para uma avaliação sem compromisso e descubra por que somos uma das oficinas mais bem avaliadas da cidade.',
      },
    ],
    faq: [
      { pergunta: 'A revisão na Carplus mantém a garantia de fábrica do meu Fiat?', resposta: 'Sim. Pelo Código de Defesa do Consumidor, você pode revisar o Fiat fora da concessionária sem perder a garantia, desde que seja seguido o plano do manual e usadas peças adequadas, com nota fiscal. A Carplus emite nota fiscal de todos os serviços e peças.' },
      { pergunta: 'Quanto custa a revisão do Fiat em Curitiba?', resposta: 'O valor depende do modelo e da quilometragem (10.000, 20.000, 30.000 km etc.). Fazemos um diagnóstico e apresentamos o orçamento detalhado antes de iniciar, normalmente com preço mais acessível que a concessionária. Peça um orçamento sem compromisso pelo WhatsApp (41) 3082-7282.' },
      { pergunta: 'Vocês têm scanner para Fiat?', resposta: 'Sim. Contamos com scanner automotivo profissional que lê injeção eletrônica, ABS, airbag e módulos Fiat, incluindo o câmbio Dualogic, além de reset de painel e limpeza de bicos.' },
      { pergunta: 'Vocês resolvem problema de câmbio Dualogic?', resposta: 'Sim. Fazemos leitura do módulo, calibração do ponto de embreagem, troca do fluido correto e avaliação do atuador para corrigir trepidação e demora nas trocas do Dualogic.' },
      { pergunta: 'Atendem qual região de Curitiba?', resposta: 'Estamos no Portão e atendemos toda Curitiba e região metropolitana, com fácil acesso para Água Verde, Novo Mundo, Fazendinha, Capão Raso, Santa Quitéria e demais bairros.' },
      { pergunta: 'Precisa agendar para levar o Fiat?', resposta: 'Atendemos por ordem de chegada e com hora marcada. Para revisões completas, recomendamos agendar pelo WhatsApp (41) 3082-7282 para agilizar o atendimento.' },
      { pergunta: 'Vocês parcelam os serviços?', resposta: 'Sim, parcelamos em até 10x sem juros e aceitamos cartão, débito, dinheiro e PIX.' },
      { pergunta: 'Trabalham com peças originais Fiat?', resposta: 'Trabalhamos com peças de qualidade — genuínas ou de primeira linha equivalentes — sempre com nota fiscal e garantia, mantendo a especificação de fábrica do seu Fiat.' },
    ],
    keywordsSecundarias: ['oficina especializada fiat curitiba', 'oficina especializada em fiat', 'só fiat curitiba', 'revisão fiat curitiba', 'oficina fiat curitiba', 'mecânica fiat curitiba'],
    whatsappMessage: 'Olá! Vi a página de oficina especializada Fiat no site e gostaria de um orçamento para meu Fiat.',
    ctaTitle: 'Cuide do seu Fiat com quem entende da marca',
    ctaSubtitle: 'Agende uma avaliação ou peça seu orçamento sem compromisso. Atendemos toda Curitiba a partir do Portão.',
  },

  // ───────────────────────────── 2) VOLKSWAGEN ─────────────────────────────
  {
    slug: 'oficina-especializada-volkswagen-curitiba',
    marca: 'Volkswagen',
    tipo: 'marca',
    titleTag: 'Oficina Especializada Volkswagen em Curitiba | Carplus – Portão',
    metaDescription:
      'Oficina especializada em Volkswagen no Portão, Curitiba. Revisão, motores TSI, câmbio e diagnóstico com garantia. Orçamento no WhatsApp (41) 3082-7282.',
    h1: 'Oficina Especializada em Volkswagen em Curitiba',
    heroSubtitulo:
      'Revisão, mecânica e diagnóstico computadorizado para veículos Volkswagen no Portão, em Curitiba. Domínio dos motores TSI e MSI, com garantia e nota fiscal.',
    eyebrow: 'Especialista Volkswagen • Portão, Curitiba',
    modelosAtendidos: ['Polo', 'Virtus', 'Nivus', 'T-Cross', 'Taos', 'Gol', 'Voyage', 'Saveiro', 'Amarok', 'Jetta'],
    servicosDestaque: servicosPorMarca('Volkswagen'),
    problemasComuns: [
      {
        problema: 'Carbonização e perda de potência em motores TSI',
        solucao:
          'Fazemos a descarbonização das válvulas de admissão e a limpeza do sistema, recuperando a potência e o consumo dos motores TSI turbo da VW.',
      },
      {
        problema: 'Barulho de corrente de comando no motor EA211',
        solucao:
          'Avaliamos o tensionador e substituímos o kit de corrente quando necessário, evitando salto de sincronismo e danos graves ao motor.',
      },
      {
        problema: 'Falha de ignição por bobinas defeituosas',
        solucao:
          'Diagnosticamos com scanner qual cilindro está falhando e trocamos bobinas e velas na especificação VW, eliminando trancos e luz de injeção.',
      },
      {
        problema: 'Câmbio automatizado I-Motion com trancos',
        solucao:
          'Lemos o módulo, calibramos o ponto de embreagem e avaliamos o atuador, resolvendo os solavancos característicos do I-Motion.',
      },
      {
        problema: 'Atuador de embreagem com desgaste',
        solucao:
          'Testamos o conjunto e substituímos o atuador quando necessário, restaurando as trocas suaves do câmbio automatizado.',
      },
    ],
    alternativaAutorizada:
      'A Carplus é uma oficina ESPECIALIZADA e INDEPENDENTE — não é concessionária nem autorizada Volkswagen. Atendemos veículos VW com diagnóstico computadorizado, scanner específico, peças de qualidade e nota fiscal em tudo, mantendo a garantia de fábrica conforme o Código de Defesa do Consumidor. Você tem o mesmo rigor técnico de uma autorizada, com preço em média mais acessível e atendimento mais ágil, aqui no Portão em Curitiba.',
    intro:
      'Se você procura uma oficina especializada em Volkswagen em Curitiba, a Carplus, no Portão, é a escolha inteligente para cuidar do seu Polo, Virtus, T-Cross, Nivus, Gol e demais modelos da marca. Conhecemos a fundo os motores TSI e MSI, o câmbio automatizado I-Motion e os pontos de atenção elétricos e mecânicos que a linha VW costuma apresentar. Todo atendimento começa com um diagnóstico computadorizado, para que o orçamento seja preciso e você pague apenas pelo que o carro realmente precisa.',
    secoes: [
      {
        titulo: 'Especialistas nos motores TSI e MSI da Volkswagen',
        conteudo:
          'Os motores turbo TSI trouxeram muito desempenho para a linha Volkswagen, mas também demandam manutenção correta: óleo na especificação exata, atenção à carbonização das válvulas de admissão e cuidado com a corrente de comando do EA211. A Carplus domina esses detalhes e usa scanner compatível para acompanhar a saúde do motor. Assim, evitamos que um problema pequeno — como uma bobina de ignição fraca — evolua para uma pane cara e deixe você na mão.',
      },
      {
        titulo: 'Revisão Volkswagen mantendo a garantia de fábrica',
        conteudo:
          'Você não precisa ir à concessionária para manter a garantia do seu Volkswagen. O Código de Defesa do Consumidor permite revisar o carro em qualquer oficina de confiança, desde que se siga o plano de manutenção do manual e se usem peças adequadas, com nota fiscal. A Carplus segue exatamente o cronograma VW por quilometragem, emite nota fiscal de todos os serviços e, na maioria dos casos, oferece um custo bem mais atrativo que o da rede autorizada, sem abrir mão da qualidade.',
      },
      {
        titulo: 'Câmbio, injeção e parte elétrica VW',
        conteudo:
          'Do câmbio automatizado I-Motion às falhas de injeção eletrônica, a linha Volkswagen tem particularidades que só uma equipe experiente resolve com segurança. Fazemos calibração do ponto de embreagem, troca de fluido de câmbio com equipamento adequado, limpeza de bicos, teste de bobinas e reparo elétrico. Nosso scanner lê ABS, airbag e módulos VW, e apresentamos sempre um laudo claro antes de qualquer serviço.',
      },
      {
        titulo: 'Oficina VW no Portão, fácil acesso em Curitiba',
        conteudo:
          'Estamos na Avenida Presidente Arthur da Silva Bernardes, 1323, no Portão, ponto de fácil acesso para quem vem da Água Verde, Fazendinha, Novo Mundo, Capão Raso e de toda Curitiba e região metropolitana. Oferecemos parcelamento em até 10x sem juros, diagnóstico antes do orçamento e garantia em todos os serviços. Agende a avaliação do seu Volkswagen e conte com uma das oficinas mais bem avaliadas da cidade.',
      },
    ],
    faq: [
      { pergunta: 'A revisão na Carplus mantém a garantia de fábrica do meu Volkswagen?', resposta: 'Sim. Pelo Código de Defesa do Consumidor, a revisão pode ser feita fora da concessionária sem perder a garantia, desde que seguido o plano do manual e usadas peças adequadas, com nota fiscal — o que a Carplus emite em todos os serviços.' },
      { pergunta: 'Quanto custa a revisão do Volkswagen em Curitiba?', resposta: 'Depende do modelo e da quilometragem. Fazemos o diagnóstico e apresentamos um orçamento detalhado antes de iniciar, normalmente mais acessível que a concessionária. Peça pelo WhatsApp (41) 3082-7282.' },
      { pergunta: 'Vocês têm scanner para Volkswagen?', resposta: 'Sim. Nosso scanner profissional lê injeção eletrônica, ABS, airbag e módulos VW, incluindo o câmbio automatizado I-Motion, com reset de painel e limpeza de bicos.' },
      { pergunta: 'Resolvem carbonização de motor TSI?', resposta: 'Sim. Fazemos a descarbonização das válvulas de admissão e a limpeza do sistema, recuperando potência e consumo dos motores TSI.' },
      { pergunta: 'Atendem qual região de Curitiba?', resposta: 'Estamos no Portão e atendemos toda Curitiba e região metropolitana, com acesso fácil para Água Verde, Fazendinha, Novo Mundo, Capão Raso e demais bairros.' },
      { pergunta: 'Trabalham com câmbio automatizado I-Motion?', resposta: 'Sim. Fazemos leitura de módulo, calibração do ponto de embreagem e avaliação do atuador para corrigir os trancos típicos do I-Motion.' },
      { pergunta: 'É possível parcelar os serviços?', resposta: 'Sim, parcelamos em até 10x sem juros e aceitamos cartão, débito, dinheiro e PIX.' },
      { pergunta: 'Usam peças originais Volkswagen?', resposta: 'Usamos peças de qualidade — genuínas ou de primeira linha equivalentes — sempre na especificação de fábrica, com nota fiscal e garantia.' },
    ],
    keywordsSecundarias: ['oficina especializada volkswagen curitiba', 'oficina vw curitiba', 'revisão volkswagen curitiba', 'mecânica volkswagen curitiba'],
    whatsappMessage: 'Olá! Vi a página de oficina especializada Volkswagen no site e gostaria de um orçamento para meu Volkswagen.',
    ctaTitle: 'Seu Volkswagen em boas mãos no Portão',
    ctaSubtitle: 'Agende uma avaliação ou peça seu orçamento sem compromisso. Atendemos toda Curitiba a partir do Portão.',
  },

  // ───────────────────────────── 3) CHEVROLET ─────────────────────────────
  {
    slug: 'oficina-especializada-chevrolet-curitiba',
    marca: 'Chevrolet',
    tipo: 'marca',
    titleTag: 'Oficina Especializada Chevrolet em Curitiba | Carplus – Portão',
    metaDescription:
      'Oficina especializada em Chevrolet no Portão, Curitiba. Revisão do Onix, motores 1.0/1.4, câmbio e diagnóstico com garantia. WhatsApp (41) 3082-7282.',
    h1: 'Oficina Especializada em Chevrolet em Curitiba',
    heroSubtitulo:
      'Revisão, mecânica e diagnóstico computadorizado para veículos Chevrolet no Portão, em Curitiba. Especialistas em Onix, Tracker, S10 e toda a linha GM.',
    eyebrow: 'Especialista Chevrolet • Portão, Curitiba',
    modelosAtendidos: ['Onix', 'Onix Plus', 'Tracker', 'Montana', 'S10', 'Spin', 'Cruze', 'Cobalt', 'Prisma', 'Equinox'],
    servicosDestaque: servicosPorMarca('Chevrolet'),
    problemasComuns: [
      {
        problema: 'Barulho de corrente de comando nos motores 1.0 e 1.4',
        solucao:
          'Avaliamos o tensionador e a folga da corrente e substituímos o kit completo quando necessário, evitando salto de sincronismo nos motores GM.',
      },
      {
        problema: 'Superaquecimento no Cruze',
        solucao:
          'Testamos válvula termostática, bomba d\u2019água, radiador e sensores de temperatura, corrigindo a origem do superaquecimento antes que danifique o motor.',
      },
      {
        problema: 'Câmbio automatizado Easytronic com falhas',
        solucao:
          'Fazemos leitura do módulo, calibração e avaliação do atuador do Easytronic, resolvendo trancos e demora nas trocas.',
      },
      {
        problema: 'Sensor de detonação acusando falha',
        solucao:
          'Diagnosticamos com scanner, testamos o sensor e a fiação e substituímos a peça, eliminando perda de desempenho e luz de injeção acesa.',
      },
      {
        problema: 'Bomba de combustível fraca causando falhas de partida',
        solucao:
          'Medimos a pressão da linha de combustível e trocamos a bomba quando necessário, restaurando a partida rápida e o funcionamento estável.',
      },
    ],
    alternativaAutorizada:
      'A Carplus é uma oficina ESPECIALIZADA e INDEPENDENTE — não é concessionária nem autorizada Chevrolet/GM. Atendemos veículos Chevrolet com diagnóstico computadorizado, scanner específico, peças de qualidade e nota fiscal em tudo, mantendo a garantia de fábrica conforme o Código de Defesa do Consumidor — com preço em média mais acessível e atendimento mais rápido, aqui no Portão em Curitiba.',
    intro:
      'Procurando uma oficina especializada em Chevrolet em Curitiba? A Carplus, no Portão, é a alternativa inteligente para cuidar do seu Onix, Tracker, S10, Spin, Cruze e demais modelos GM. Conhecemos os motores 1.0 e 1.4 turbo, o comportamento da corrente de comando e os pontos de atenção elétricos e de arrefecimento que a linha Chevrolet costuma apresentar. Cada atendimento começa com diagnóstico computadorizado, garantindo um orçamento preciso e sem surpresas.',
    secoes: [
      {
        titulo: 'Conhecimento técnico da linha Chevrolet',
        conteudo:
          'O Onix é um dos carros mais vendidos do Brasil, e junto com Tracker, Spin e S10 forma a base da frota Chevrolet em Curitiba. Esses modelos têm particularidades — como a corrente de comando dos motores 1.0/1.4 e o histórico de superaquecimento do Cruze — que pedem uma oficina que já resolveu esses casos muitas vezes. A Carplus reúne experiência e scanner compatível para tratar cada Chevrolet com precisão, indo direto à causa do problema.',
      },
      {
        titulo: 'Revisão Chevrolet sem perder a garantia',
        conteudo:
          'Manter a garantia do seu Chevrolet não obriga você a ir à concessionária. Pelo Código de Defesa do Consumidor, a revisão pode ser feita em qualquer oficina de confiança, desde que se siga o plano do manual e se usem peças adequadas, com nota fiscal. A Carplus cumpre à risca o cronograma GM por quilometragem, emite nota fiscal de tudo e costuma oferecer um custo bem menor que o da rede autorizada, com a mesma qualidade técnica.',
      },
      {
        titulo: 'Diagnóstico, arrefecimento e injeção GM',
        conteudo:
          'Luz de injeção acesa, marcha lenta irregular ou temperatura subindo são sinais que não devem ser ignorados no seu Chevrolet. Usamos scanner profissional para ler os códigos de falha e testar sensores, bomba de combustível, sistema de arrefecimento e injeção. Fazemos limpeza de bicos, verificação de ABS e airbag, reset de painel e reparos elétricos, sempre apresentando um laudo antes do orçamento para você decidir com clareza.',
      },
      {
        titulo: 'Oficina Chevrolet no Portão para toda Curitiba',
        conteudo:
          'Ficamos na Avenida Presidente Arthur da Silva Bernardes, 1323, no Portão, com acesso rápido para Água Verde, Novo Mundo, Fazendinha, Capão Raso, Santa Quitéria e toda a região sul e central de Curitiba. Trabalhamos com parcelamento em até 10x sem juros, diagnóstico antes do orçamento e garantia em todos os serviços. Traga seu Chevrolet para uma avaliação sem compromisso.',
      },
    ],
    faq: [
      { pergunta: 'A revisão na Carplus mantém a garantia de fábrica do meu Chevrolet?', resposta: 'Sim. Pelo Código de Defesa do Consumidor, a revisão pode ser feita fora da concessionária sem perder a garantia, desde que seguido o plano do manual e usadas peças adequadas, com nota fiscal, que a Carplus emite em tudo.' },
      { pergunta: 'Quanto custa a revisão do Chevrolet em Curitiba?', resposta: 'O valor depende do modelo e da quilometragem. Fazemos o diagnóstico e apresentamos o orçamento antes de iniciar, geralmente mais acessível que a concessionária. Peça pelo WhatsApp (41) 3082-7282.' },
      { pergunta: 'Vocês têm scanner para Chevrolet?', resposta: 'Sim. Nosso scanner profissional lê injeção eletrônica, ABS, airbag e módulos GM, com reset de painel e limpeza de bicos.' },
      { pergunta: 'Resolvem superaquecimento do Cruze?', resposta: 'Sim. Testamos válvula termostática, bomba d\u2019água, radiador e sensores para corrigir a causa do superaquecimento antes que danifique o motor.' },
      { pergunta: 'Atendem qual região de Curitiba?', resposta: 'Estamos no Portão e atendemos toda Curitiba e região metropolitana, com acesso fácil para Água Verde, Novo Mundo, Fazendinha, Capão Raso e demais bairros.' },
      { pergunta: 'Fazem manutenção do câmbio Easytronic?', resposta: 'Sim. Fazemos leitura de módulo, calibração e avaliação do atuador do Easytronic para corrigir trancos e demora nas trocas.' },
      { pergunta: 'É possível parcelar os serviços?', resposta: 'Sim, parcelamos em até 10x sem juros e aceitamos cartão, débito, dinheiro e PIX.' },
      { pergunta: 'Usam peças originais Chevrolet?', resposta: 'Usamos peças de qualidade — genuínas ou de primeira linha equivalentes — na especificação de fábrica, sempre com nota fiscal e garantia.' },
    ],
    keywordsSecundarias: ['oficina especializada chevrolet curitiba', 'oficina gm curitiba', 'revisão chevrolet curitiba', 'mecânica onix curitiba'],
    whatsappMessage: 'Olá! Vi a página de oficina especializada Chevrolet no site e gostaria de um orçamento para meu Chevrolet.',
    ctaTitle: 'Seu Chevrolet cuidado por especialistas',
    ctaSubtitle: 'Agende uma avaliação ou peça seu orçamento sem compromisso. Atendemos toda Curitiba a partir do Portão.',
  },

  // ───────────────────────────── 4) HYUNDAI ─────────────────────────────
  {
    slug: 'oficina-especializada-hyundai-curitiba',
    marca: 'Hyundai',
    tipo: 'marca',
    titleTag: 'Oficina Especializada Hyundai em Curitiba | Carplus – Portão',
    metaDescription:
      'Oficina especializada em Hyundai no Portão, Curitiba. Revisão do HB20, Creta, câmbio automático e diagnóstico com garantia. WhatsApp (41) 3082-7282.',
    h1: 'Oficina Especializada em Hyundai em Curitiba',
    heroSubtitulo:
      'Revisão, mecânica e diagnóstico computadorizado para veículos Hyundai no Portão, em Curitiba. Especialistas em HB20, Creta e Tucson, com garantia e nota fiscal.',
    eyebrow: 'Especialista Hyundai • Portão, Curitiba',
    modelosAtendidos: ['HB20', 'HB20S', 'Creta', 'Tucson', 'ix35', 'Santa Fe'],
    servicosDestaque: servicosPorMarca('Hyundai'),
    problemasComuns: [
      {
        problema: 'Embreagem do HB20 com desgaste precoce',
        solucao:
          'Avaliamos platô, disco e rolamento e trocamos o kit de embreagem com peças de qualidade, recuperando o engate suave do HB20.',
      },
      {
        problema: 'Barulho na junta homocinética em curvas',
        solucao:
          'Inspecionamos a coifa e a junta homocinética e fazemos a substituição quando necessário, eliminando o estalo típico ao esterçar.',
      },
      {
        problema: 'Falha no sensor de rotação',
        solucao:
          'Diagnosticamos com scanner, testamos o sensor e a fiação e substituímos a peça, corrigindo falhas de partida e cortes de motor.',
      },
      {
        problema: 'Câmbio automático do Creta com trocas bruscas',
        solucao:
          'Fazemos a troca do fluido de câmbio automático com equipamento adequado e leitura do módulo, suavizando as trocas do Creta.',
      },
      {
        problema: 'Luz de injeção acesa por sonda lambda',
        solucao:
          'Lemos os códigos de falha, testamos a sonda lambda e substituímos quando necessário, normalizando consumo e emissões.',
      },
    ],
    alternativaAutorizada:
      'A Carplus é uma oficina ESPECIALIZADA e INDEPENDENTE — não é concessionária nem autorizada Hyundai. Atendemos veículos Hyundai com diagnóstico computadorizado, scanner específico, peças de qualidade e nota fiscal em tudo, mantendo a garantia de fábrica conforme o Código de Defesa do Consumidor — com preço em média mais acessível e atendimento mais rápido, aqui no Portão em Curitiba.',
    intro:
      'Se você tem um HB20, Creta, Tucson ou outro Hyundai e procura uma oficina especializada em Curitiba, a Carplus, no Portão, é a alternativa inteligente à concessionária. Conhecemos as particularidades da linha Hyundai — da embreagem do HB20 ao câmbio automático do Creta — e usamos diagnóstico computadorizado para acertar de primeira. Assim, você economiza sem abrir mão da qualidade e mantém a garantia de fábrica do seu carro.',
    secoes: [
      {
        titulo: 'Especialistas na linha Hyundai',
        conteudo:
          'O HB20 é um dos hatches mais populares do país e o Creta lidera vendas entre os SUVs compactos — o que faz da Hyundai uma marca muito presente nas ruas de Curitiba. Esses modelos têm pontos de atenção conhecidos, como o desgaste de embreagem do HB20 e o comportamento do câmbio automático do Creta. Na Carplus, a experiência da equipe e o scanner compatível permitem diagnosticar e resolver esses casos com segurança.',
      },
      {
        titulo: 'Revisão Hyundai mantendo a garantia',
        conteudo:
          'Você pode revisar seu Hyundai fora da concessionária sem perder a garantia de fábrica. O Código de Defesa do Consumidor assegura esse direito, desde que se siga o plano do manual e se usem peças adequadas, com nota fiscal. A Carplus segue o cronograma de revisão Hyundai por quilometragem, emite nota fiscal de tudo e costuma oferecer um custo menor que o da rede autorizada.',
      },
      {
        titulo: 'Câmbio automático e diagnóstico Hyundai',
        conteudo:
          'A troca de fluido do câmbio automático é fundamental para a durabilidade do Creta e do Tucson, e deve ser feita com o equipamento e o fluido corretos. Fazemos esse serviço com equipamento adequado, além de leitura de módulos, teste de sensores e limpeza de bicos. Nosso scanner lê injeção, ABS e airbag, e você recebe um laudo claro antes de aprovar qualquer serviço.',
      },
      {
        titulo: 'Oficina Hyundai no Portão, Curitiba',
        conteudo:
          'Estamos na Avenida Presidente Arthur da Silva Bernardes, 1323, no Portão, com fácil acesso para toda Curitiba e região metropolitana. Oferecemos parcelamento em até 10x sem juros, diagnóstico antes do orçamento e garantia em todos os serviços. Agende a avaliação do seu Hyundai e conte com uma das oficinas mais bem avaliadas da cidade.',
      },
    ],
    faq: [
      { pergunta: 'A revisão na Carplus mantém a garantia de fábrica do meu Hyundai?', resposta: 'Sim. Pelo Código de Defesa do Consumidor, a revisão pode ser feita fora da concessionária sem perder a garantia, desde que seguido o plano do manual e usadas peças adequadas, com nota fiscal — o que a Carplus emite em tudo.' },
      { pergunta: 'Quanto custa a revisão do Hyundai em Curitiba?', resposta: 'Depende do modelo e da quilometragem. Fazemos o diagnóstico e apresentamos o orçamento antes de iniciar, normalmente mais acessível que a concessionária. Peça pelo WhatsApp (41) 3082-7282.' },
      { pergunta: 'Vocês têm scanner para Hyundai?', resposta: 'Sim. Nosso scanner profissional lê injeção eletrônica, ABS, airbag e módulos Hyundai, com reset de painel e limpeza de bicos.' },
      { pergunta: 'Fazem troca de óleo do câmbio automático do Creta?', resposta: 'Sim. Fazemos a troca do fluido de câmbio automático com equipamento adequado e leitura do módulo para suavizar as trocas.' },
      { pergunta: 'Atendem qual região de Curitiba?', resposta: 'Estamos no Portão e atendemos toda Curitiba e região metropolitana, com fácil acesso para Água Verde, Novo Mundo, Fazendinha, Capão Raso e demais bairros.' },
      { pergunta: 'Resolvem embreagem do HB20?', resposta: 'Sim. Avaliamos platô, disco e rolamento e trocamos o kit de embreagem com peças de qualidade, recuperando o engate suave.' },
      { pergunta: 'É possível parcelar os serviços?', resposta: 'Sim, parcelamos em até 10x sem juros e aceitamos cartão, débito, dinheiro e PIX.' },
      { pergunta: 'Usam peças originais Hyundai?', resposta: 'Usamos peças de qualidade — genuínas ou de primeira linha equivalentes — na especificação de fábrica, com nota fiscal e garantia.' },
    ],
    keywordsSecundarias: ['oficina especializada hyundai curitiba', 'revisão hb20 curitiba', 'mecânica hyundai curitiba', 'oficina creta curitiba'],
    whatsappMessage: 'Olá! Vi a página de oficina especializada Hyundai no site e gostaria de um orçamento para meu Hyundai.',
    ctaTitle: 'Seu Hyundai cuidado por especialistas',
    ctaSubtitle: 'Agende uma avaliação ou peça seu orçamento sem compromisso. Atendemos toda Curitiba a partir do Portão.',
  },

  // ───────────────────────────── 5) TOYOTA ─────────────────────────────
  {
    slug: 'oficina-especializada-toyota-curitiba',
    marca: 'Toyota',
    tipo: 'marca',
    titleTag: 'Oficina Especializada Toyota em Curitiba | Carplus – Portão',
    metaDescription:
      'Oficina especializada em Toyota no Portão, Curitiba. Revisão do Corolla e Hilux, câmbio CVT e diagnóstico com garantia. WhatsApp (41) 3082-7282.',
    h1: 'Oficina Especializada em Toyota em Curitiba',
    heroSubtitulo:
      'Revisão, mecânica e diagnóstico computadorizado para veículos Toyota no Portão, em Curitiba. Revisão mais econômica que a concessionária, com garantia e nota fiscal.',
    eyebrow: 'Especialista Toyota • Portão, Curitiba',
    modelosAtendidos: ['Corolla', 'Corolla Cross', 'Hilux', 'Yaris', 'Etios', 'SW4'],
    servicosDestaque: servicosPorMarca('Toyota'),
    problemasComuns: [
      {
        problema: 'Câmbio CVT com fluido vencido',
        solucao:
          'Fazemos a troca do fluido de CVT com a especificação Toyota correta e equipamento adequado, preservando a vida útil do câmbio.',
      },
      {
        problema: 'Revisão cara na concessionária',
        solucao:
          'Seguimos o plano de revisão programada do manual Toyota com preço mais acessível, mantendo a garantia e emitindo nota fiscal de tudo.',
      },
      {
        problema: 'Óleo fora da especificação em revisões anteriores',
        solucao:
          'Usamos óleo exatamente na especificação Toyota, corrigindo escolhas erradas que aumentam consumo e desgaste do motor.',
      },
      {
        problema: 'Ruído de suspensão na Hilux e SW4',
        solucao:
          'Inspecionamos amortecedores, buchas e batentes reforçados e substituímos os itens desgastados, devolvendo conforto e segurança.',
      },
      {
        problema: 'Freios da Corolla com trepidação',
        solucao:
          'Avaliamos discos e pastilhas, fazemos a retífica ou troca conforme o caso e testamos a frenagem para eliminar a trepidação.',
      },
    ],
    alternativaAutorizada:
      'A Carplus é uma oficina ESPECIALIZADA e INDEPENDENTE — não é concessionária nem autorizada Toyota. Atendemos veículos Toyota com diagnóstico computadorizado, óleo e fluidos na especificação correta, peças de qualidade e nota fiscal em tudo, mantendo a garantia de fábrica conforme o Código de Defesa do Consumidor — com preço em média mais acessível e atendimento mais rápido, aqui no Portão em Curitiba.',
    intro:
      'Dono de Corolla, Hilux, Yaris ou SW4 sabe que a Toyota é sinônimo de durabilidade — mas a revisão na concessionária costuma pesar no bolso. A Carplus, no Portão em Curitiba, é a oficina especializada em Toyota que oferece a mesma qualidade técnica com preço mais justo, seguindo à risca o plano de revisão programada do manual e usando óleo e fluidos na especificação correta, para manter a garantia de fábrica.',
    secoes: [
      {
        titulo: 'Revisão Toyota mais econômica, sem perder a garantia',
        conteudo:
          'A grande dúvida de quem tem Toyota é: posso revisar fora da concessionária sem perder a garantia? A resposta é sim. O Código de Defesa do Consumidor garante esse direito, desde que se siga o plano de manutenção do manual e se usem peças e fluidos adequados, com nota fiscal. A Carplus cumpre exatamente o cronograma de revisão programada da Toyota, emite nota fiscal de tudo e oferece um custo consideravelmente menor que o da rede autorizada.',
      },
      {
        titulo: 'Câmbio CVT com a especificação correta',
        conteudo:
          'O câmbio CVT presente em modelos como Corolla e Corolla Cross exige fluido específico e troca no intervalo certo. Usar o produto errado ou pular a manutenção pode encurtar a vida do câmbio. Na Carplus, fazemos a troca do fluido de CVT com equipamento adequado e a especificação Toyota, além de leitura de módulos e diagnóstico eletrônico completo.',
      },
      {
        titulo: 'Mecânica completa para Hilux, SW4 e linha de passeio',
        conteudo:
          'Da picape Hilux ao sedã Corolla, atendemos toda a linha Toyota com serviços de suspensão reforçada, freios, injeção, arrefecimento e diagnóstico eletrônico. Usamos scanner profissional para ler injeção, ABS e airbag, e apresentamos sempre um laudo claro antes do orçamento. Assim, você mantém seu Toyota rodando com segurança e economia por muitos anos.',
      },
      {
        titulo: 'Oficina Toyota no Portão, Curitiba',
        conteudo:
          'Estamos na Avenida Presidente Arthur da Silva Bernardes, 1323, no Portão, com fácil acesso para toda Curitiba e região metropolitana. Oferecemos parcelamento em até 10x sem juros, diagnóstico antes do orçamento e garantia em todos os serviços. Agende a avaliação do seu Toyota sem compromisso.',
      },
    ],
    faq: [
      { pergunta: 'A revisão na Carplus mantém a garantia de fábrica do meu Toyota?', resposta: 'Sim. Pelo Código de Defesa do Consumidor, a revisão pode ser feita fora da concessionária sem perder a garantia, desde que seguido o plano do manual e usados peças e fluidos adequados, com nota fiscal — o que a Carplus emite em tudo.' },
      { pergunta: 'Quanto custa a revisão do Toyota em Curitiba?', resposta: 'Depende do modelo e da quilometragem, mas normalmente é mais acessível que na concessionária. Fazemos o diagnóstico e apresentamos o orçamento antes de iniciar. Peça pelo WhatsApp (41) 3082-7282.' },
      { pergunta: 'Vocês têm scanner para Toyota?', resposta: 'Sim. Nosso scanner profissional lê injeção eletrônica, ABS, airbag e módulos Toyota, com reset de painel e limpeza de bicos.' },
      { pergunta: 'Fazem a troca de fluido do câmbio CVT?', resposta: 'Sim. Fazemos a troca do fluido de CVT com equipamento adequado e a especificação Toyota correta, preservando o câmbio.' },
      { pergunta: 'Atendem qual região de Curitiba?', resposta: 'Estamos no Portão e atendemos toda Curitiba e região metropolitana, com fácil acesso para Água Verde, Novo Mundo, Fazendinha, Capão Raso e demais bairros.' },
      { pergunta: 'Usam o óleo na especificação Toyota?', resposta: 'Sim. Usamos óleo exatamente na especificação indicada pela Toyota para o seu modelo, evitando desgaste e consumo excessivo.' },
      { pergunta: 'É possível parcelar os serviços?', resposta: 'Sim, parcelamos em até 10x sem juros e aceitamos cartão, débito, dinheiro e PIX.' },
      { pergunta: 'Atendem a picape Hilux e a SW4?', resposta: 'Sim. Atendemos toda a linha Toyota, incluindo Hilux e SW4, com suspensão reforçada, freios, injeção e diagnóstico eletrônico.' },
    ],
    keywordsSecundarias: ['oficina especializada toyota curitiba', 'revisão corolla curitiba', 'mecânica toyota curitiba', 'revisão toyota mais barata curitiba'],
    whatsappMessage: 'Olá! Vi a página de oficina especializada Toyota no site e gostaria de um orçamento para meu Toyota.',
    ctaTitle: 'Revisão Toyota com qualidade e economia',
    ctaSubtitle: 'Agende uma avaliação ou peça seu orçamento sem compromisso. Atendemos toda Curitiba a partir do Portão.',
  },

  // ───────────────────────────── 6) RENAULT ─────────────────────────────
  {
    slug: 'oficina-especializada-renault-curitiba',
    marca: 'Renault',
    tipo: 'marca',
    titleTag: 'Oficina Especializada Renault em Curitiba | Carplus – Portão',
    metaDescription:
      'Oficina especializada em Renault no Portão, Curitiba. Revisão do Kwid, Duster, câmbio e diagnóstico com garantia. WhatsApp (41) 3082-7282.',
    h1: 'Oficina Especializada em Renault em Curitiba',
    heroSubtitulo:
      'Revisão, mecânica e diagnóstico computadorizado para veículos Renault no Portão, em Curitiba. Especialistas em Kwid, Sandero e Duster, com garantia e nota fiscal.',
    eyebrow: 'Especialista Renault • Portão, Curitiba',
    modelosAtendidos: ['Kwid', 'Sandero', 'Logan', 'Duster', 'Oroch', 'Captur'],
    servicosDestaque: servicosPorMarca('Renault'),
    problemasComuns: [
      {
        problema: 'Falha de ignição por bobina defeituosa',
        solucao:
          'Diagnosticamos com scanner qual cilindro falha e trocamos bobinas e velas na especificação Renault, eliminando trancos e luz de injeção.',
      },
      {
        problema: 'Câmbio automatizado Easy\u2019R com trancos',
        solucao:
          'Fazemos leitura do módulo, calibração e avaliação do atuador, suavizando as trocas do câmbio automatizado.',
      },
      {
        problema: 'Ruído na suspensão dianteira',
        solucao:
          'Inspecionamos amortecedores, bieletas, buchas e pivôs e substituímos os itens desgastados, eliminando barulhos e trepidações.',
      },
      {
        problema: 'Falha no sensor MAP afetando o desempenho',
        solucao:
          'Testamos o sensor MAP e a mangueira de admissão e substituímos quando necessário, restaurando potência e consumo.',
      },
      {
        problema: 'Consumo elevado por bicos sujos',
        solucao:
          'Fazemos limpeza de bicos injetores e verificação do sistema de injeção, normalizando o consumo do seu Renault.',
      },
    ],
    alternativaAutorizada:
      'A Carplus é uma oficina ESPECIALIZADA e INDEPENDENTE — não é concessionária nem autorizada Renault. Atendemos veículos Renault com diagnóstico computadorizado, scanner específico, peças de qualidade e nota fiscal em tudo, mantendo a garantia de fábrica conforme o Código de Defesa do Consumidor — com preço em média mais acessível e atendimento mais rápido, aqui no Portão em Curitiba.',
    intro:
      'Se você procura uma oficina especializada em Renault em Curitiba para cuidar do seu Kwid, Sandero, Logan, Duster ou Captur, a Carplus, no Portão, é a alternativa inteligente à concessionária. Conhecemos os pontos de atenção da linha Renault — de bobinas de ignição ao câmbio automatizado — e usamos diagnóstico computadorizado para acertar de primeira, com preço justo e garantia mantida.',
    secoes: [
      {
        titulo: 'Conhecimento técnico da linha Renault',
        conteudo:
          'O Kwid e o Sandero estão entre os carros mais econômicos do mercado, e o Duster é um dos SUVs mais versáteis — todos com boa presença em Curitiba. Esses modelos têm características próprias, como o comportamento das bobinas de ignição e do câmbio automatizado, que pedem uma oficina experiente. A Carplus reúne experiência e scanner compatível para diagnosticar e resolver esses casos com precisão.',
      },
      {
        titulo: 'Revisão Renault mantendo a garantia',
        conteudo:
          'Você pode revisar seu Renault fora da concessionária sem perder a garantia de fábrica. O Código de Defesa do Consumidor assegura esse direito, desde que se siga o plano do manual e se usem peças adequadas, com nota fiscal. A Carplus segue o cronograma de revisão Renault por quilometragem, emite nota fiscal de tudo e oferece um custo mais acessível que o da rede autorizada.',
      },
      {
        titulo: 'Injeção, câmbio e suspensão Renault',
        conteudo:
          'Da limpeza de bicos ao reparo do câmbio automatizado, atendemos toda a linha Renault com diagnóstico eletrônico completo. Nosso scanner lê injeção, ABS e airbag, e fazemos serviços de suspensão, freios e arrefecimento. Antes de qualquer reparo, apresentamos um laudo claro para você decidir com segurança e sem surpresas no orçamento.',
      },
      {
        titulo: 'Oficina Renault no Portão, Curitiba',
        conteudo:
          'Estamos na Avenida Presidente Arthur da Silva Bernardes, 1323, no Portão, com fácil acesso para toda Curitiba e região metropolitana. Oferecemos parcelamento em até 10x sem juros, diagnóstico antes do orçamento e garantia em todos os serviços. Agende a avaliação do seu Renault sem compromisso.',
      },
    ],
    faq: [
      { pergunta: 'A revisão na Carplus mantém a garantia de fábrica do meu Renault?', resposta: 'Sim. Pelo Código de Defesa do Consumidor, a revisão pode ser feita fora da concessionária sem perder a garantia, desde que seguido o plano do manual e usadas peças adequadas, com nota fiscal — o que a Carplus emite em tudo.' },
      { pergunta: 'Quanto custa a revisão do Renault em Curitiba?', resposta: 'Depende do modelo e da quilometragem. Fazemos o diagnóstico e apresentamos o orçamento antes de iniciar, normalmente mais acessível que a concessionária. Peça pelo WhatsApp (41) 3082-7282.' },
      { pergunta: 'Vocês têm scanner para Renault?', resposta: 'Sim. Nosso scanner profissional lê injeção eletrônica, ABS, airbag e módulos Renault, com reset de painel e limpeza de bicos.' },
      { pergunta: 'Resolvem trancos do câmbio automatizado?', resposta: 'Sim. Fazemos leitura de módulo, calibração e avaliação do atuador para suavizar as trocas do câmbio automatizado Renault.' },
      { pergunta: 'Atendem qual região de Curitiba?', resposta: 'Estamos no Portão e atendemos toda Curitiba e região metropolitana, com fácil acesso para Água Verde, Novo Mundo, Fazendinha, Capão Raso e demais bairros.' },
      { pergunta: 'Fazem limpeza de bicos no Kwid e Sandero?', resposta: 'Sim. Fazemos limpeza de bicos injetores e verificação do sistema de injeção para normalizar o consumo.' },
      { pergunta: 'É possível parcelar os serviços?', resposta: 'Sim, parcelamos em até 10x sem juros e aceitamos cartão, débito, dinheiro e PIX.' },
      { pergunta: 'Usam peças originais Renault?', resposta: 'Usamos peças de qualidade — genuínas ou de primeira linha equivalentes — na especificação de fábrica, com nota fiscal e garantia.' },
    ],
    keywordsSecundarias: ['oficina especializada renault curitiba', 'revisão kwid curitiba', 'mecânica renault curitiba', 'oficina duster curitiba'],
    whatsappMessage: 'Olá! Vi a página de oficina especializada Renault no site e gostaria de um orçamento para meu Renault.',
    ctaTitle: 'Seu Renault cuidado por especialistas',
    ctaSubtitle: 'Agende uma avaliação ou peça seu orçamento sem compromisso. Atendemos toda Curitiba a partir do Portão.',
  },

  // ───────────────────────────── 7) HONDA ─────────────────────────────
  {
    slug: 'oficina-especializada-honda-curitiba',
    marca: 'Honda',
    tipo: 'marca',
    titleTag: 'Oficina Especializada Honda em Curitiba | Carplus – Portão',
    metaDescription:
      'Oficina especializada em Honda no Portão, Curitiba. Revisão do Civic e HR-V, câmbio CVT e diagnóstico com garantia. WhatsApp (41) 3082-7282.',
    h1: 'Oficina Especializada em Honda em Curitiba',
    heroSubtitulo:
      'Revisão, mecânica e diagnóstico computadorizado para veículos Honda no Portão, em Curitiba. Especialistas em Civic, City e HR-V, com garantia e nota fiscal.',
    eyebrow: 'Especialista Honda • Portão, Curitiba',
    modelosAtendidos: ['Civic', 'City', 'Fit', 'HR-V', 'WR-V', 'CR-V'],
    servicosDestaque: servicosPorMarca('Honda'),
    problemasComuns: [
      {
        problema: 'Câmbio CVT com fluido fora da especificação',
        solucao:
          'Fazemos a troca do fluido de CVT com a especificação Honda correta e equipamento adequado, evitando trancos e desgaste do câmbio.',
      },
      {
        problema: 'Revisão cara fora da garantia',
        solucao:
          'Seguimos o plano de manutenção Honda com preço mais acessível, mantendo a qualidade técnica e emitindo nota fiscal de tudo.',
      },
      {
        problema: 'Ruído de rolamento de roda',
        solucao:
          'Inspecionamos e substituímos rolamentos desgastados, eliminando o zunido que aumenta com a velocidade.',
      },
      {
        problema: 'Coxim do motor gasto gerando vibração',
        solucao:
          'Avaliamos os coxins e substituímos os desgastados, reduzindo a vibração transmitida à carroceria em marcha lenta.',
      },
      {
        problema: 'Luz de injeção por sonda lambda',
        solucao:
          'Lemos os códigos de falha, testamos a sonda lambda e substituímos quando necessário, normalizando consumo e emissões.',
      },
    ],
    alternativaAutorizada:
      'A Carplus é uma oficina ESPECIALIZADA e INDEPENDENTE — não é concessionária nem autorizada Honda. Atendemos veículos Honda com diagnóstico computadorizado, fluidos na especificação correta, peças de qualidade e nota fiscal em tudo, mantendo a garantia de fábrica conforme o Código de Defesa do Consumidor — com preço em média mais acessível e atendimento mais rápido, aqui no Portão em Curitiba.',
    intro:
      'Dono de Honda valoriza a confiabilidade da marca, mas a manutenção fora da garantia costuma sair cara na concessionária. A Carplus, no Portão em Curitiba, é a oficina especializada em Honda que entrega a mesma qualidade técnica com preço mais justo, cuidando de Civic, City, Fit, HR-V e CR-V com atenção especial ao câmbio CVT — um dos pontos mais sensíveis da marca.',
    secoes: [
      {
        titulo: 'Especialistas no câmbio CVT Honda',
        conteudo:
          'O câmbio CVT é uma marca registrada da Honda e exige cuidado específico: fluido na especificação correta e troca no intervalo indicado. Muitos problemas de trancos e desgaste vêm justamente de manutenção feita com produto errado ou fora do prazo. Na Carplus, fazemos a troca do fluido de CVT com equipamento adequado e a especificação Honda, prolongando a vida do câmbio e mantendo a suavidade das trocas.',
      },
      {
        titulo: 'Revisão Honda fora da garantia com economia',
        conteudo:
          'Quando o carro sai da garantia de fábrica, não faz sentido continuar pagando os preços da concessionária. A Carplus segue o plano de manutenção da Honda com o mesmo rigor técnico, usando peças de qualidade e emitindo nota fiscal de tudo, por um custo bem mais acessível. E se o seu Honda ainda estiver na garantia, o Código de Defesa do Consumidor permite revisá-lo aqui sem perder esse direito.',
      },
      {
        titulo: 'Mecânica e diagnóstico completos',
        conteudo:
          'Atendemos toda a linha Honda com serviços de suspensão, freios, arrefecimento, injeção e diagnóstico eletrônico. Nosso scanner profissional lê injeção, ABS e airbag, identificando falhas com precisão. Fazemos limpeza de bicos, troca de coxins, rolamentos e reparos elétricos, sempre com laudo apresentado antes do orçamento.',
      },
      {
        titulo: 'Oficina Honda no Portão, Curitiba',
        conteudo:
          'Estamos na Avenida Presidente Arthur da Silva Bernardes, 1323, no Portão, com fácil acesso para toda Curitiba e região metropolitana. Oferecemos parcelamento em até 10x sem juros, diagnóstico antes do orçamento e garantia em todos os serviços. Agende a avaliação do seu Honda sem compromisso.',
      },
    ],
    faq: [
      { pergunta: 'A revisão na Carplus mantém a garantia de fábrica do meu Honda?', resposta: 'Sim. Pelo Código de Defesa do Consumidor, a revisão pode ser feita fora da concessionária sem perder a garantia, desde que seguido o plano do manual e usadas peças e fluidos adequados, com nota fiscal — o que a Carplus emite em tudo.' },
      { pergunta: 'Quanto custa a revisão do Honda em Curitiba?', resposta: 'Depende do modelo e da quilometragem, mas normalmente é mais acessível que na concessionária, especialmente fora da garantia. Fazemos o diagnóstico e apresentamos o orçamento antes. Peça pelo WhatsApp (41) 3082-7282.' },
      { pergunta: 'Vocês têm scanner para Honda?', resposta: 'Sim. Nosso scanner profissional lê injeção eletrônica, ABS, airbag e módulos Honda, com reset de painel e limpeza de bicos.' },
      { pergunta: 'Fazem a troca de fluido do câmbio CVT Honda?', resposta: 'Sim. Fazemos a troca do fluido de CVT com equipamento adequado e a especificação Honda correta, evitando trancos e desgaste.' },
      { pergunta: 'Atendem qual região de Curitiba?', resposta: 'Estamos no Portão e atendemos toda Curitiba e região metropolitana, com fácil acesso para Água Verde, Novo Mundo, Fazendinha, Capão Raso e demais bairros.' },
      { pergunta: 'Vale a pena revisar o Honda fora da concessionária?', resposta: 'Sim, especialmente fora da garantia. Mantemos o mesmo rigor técnico com preço mais acessível e nota fiscal de tudo.' },
      { pergunta: 'É possível parcelar os serviços?', resposta: 'Sim, parcelamos em até 10x sem juros e aceitamos cartão, débito, dinheiro e PIX.' },
      { pergunta: 'Usam peças originais Honda?', resposta: 'Usamos peças de qualidade — genuínas ou de primeira linha equivalentes — na especificação de fábrica, com nota fiscal e garantia.' },
    ],
    keywordsSecundarias: ['oficina especializada honda curitiba', 'revisão civic curitiba', 'mecânica honda curitiba', 'câmbio cvt honda curitiba'],
    whatsappMessage: 'Olá! Vi a página de oficina especializada Honda no site e gostaria de um orçamento para meu Honda.',
    ctaTitle: 'Seu Honda cuidado por especialistas',
    ctaSubtitle: 'Agende uma avaliação ou peça seu orçamento sem compromisso. Atendemos toda Curitiba a partir do Portão.',
  },

  // ───────────────────────────── 8) JEEP ─────────────────────────────
  {
    slug: 'oficina-especializada-jeep-curitiba',
    marca: 'Jeep',
    tipo: 'marca',
    titleTag: 'Oficina Especializada Jeep em Curitiba | Carplus – Portão',
    metaDescription:
      'Oficina especializada em Jeep no Portão, Curitiba. Revisão do Renegade e Compass, câmbio automático e diagnóstico com garantia. WhatsApp (41) 3082-7282.',
    h1: 'Oficina Especializada em Jeep em Curitiba',
    heroSubtitulo:
      'Revisão, mecânica e diagnóstico computadorizado para veículos Jeep no Portão, em Curitiba. Especialistas em Renegade e Compass, com garantia e nota fiscal.',
    eyebrow: 'Especialista Jeep • Portão, Curitiba',
    modelosAtendidos: ['Renegade', 'Compass', 'Commander'],
    servicosDestaque: servicosPorMarca('Jeep'),
    problemasComuns: [
      {
        problema: 'Câmbio automático de 6 e 9 marchas com trocas bruscas',
        solucao:
          'Fazemos a troca do fluido do câmbio automático com equipamento adequado e leitura do módulo, suavizando as trocas do Renegade e Compass.',
      },
      {
        problema: 'Superaquecimento e falhas de arrefecimento',
        solucao:
          'Testamos válvula termostática, bomba d\u2019água, radiador e sensores, corrigindo a causa antes que danifique o motor.',
      },
      {
        problema: 'Ruído e desgaste na suspensão',
        solucao:
          'Inspecionamos amortecedores, bieletas, buchas e pivôs e substituímos os itens desgastados, devolvendo conforto e estabilidade ao SUV.',
      },
      {
        problema: 'Luz de injeção acesa no motor T270/GSE',
        solucao:
          'Lemos os códigos de falha com scanner, testamos sensores e atuadores e corrigimos a origem, evitando perda de desempenho.',
      },
      {
        problema: 'Falha elétrica intermitente',
        solucao:
          'Testamos módulos e chicotes e fazemos reparo elétrico especializado, resolvendo falhas de painel, vidros e iluminação.',
      },
    ],
    alternativaAutorizada:
      'A Carplus é uma oficina ESPECIALIZADA e INDEPENDENTE — não é concessionária nem autorizada Jeep. Atendemos veículos Jeep com diagnóstico computadorizado, scanner específico, peças de qualidade e nota fiscal em tudo, mantendo a garantia de fábrica conforme o Código de Defesa do Consumidor — com preço em média mais acessível e atendimento mais rápido, aqui no Portão em Curitiba.',
    intro:
      'O Jeep Renegade e o Compass estão entre os SUVs mais desejados do Brasil, e por compartilharem a plataforma Stellantis com a Fiat, a Carplus tem grande sinergia técnica para atendê-los. No Portão em Curitiba, somos a oficina especializada em Jeep que cuida do seu SUV com diagnóstico computadorizado, atenção ao câmbio automático e ao sistema de arrefecimento, mantendo a garantia de fábrica e com preço mais justo que a concessionária.',
    secoes: [
      {
        titulo: 'Sinergia técnica com a plataforma Stellantis',
        conteudo:
          'Renegade, Compass e Commander compartilham motores e soluções de engenharia com a linha Fiat, dentro do grupo Stellantis. Isso significa que a experiência acumulada da Carplus com motores e câmbios dessa plataforma se aplica diretamente ao seu Jeep. Conhecemos os pontos de atenção do câmbio automático de 6 e 9 marchas, do sistema de arrefecimento e da parte eletrônica, resolvendo com precisão o que outras oficinas demoram para diagnosticar.',
      },
      {
        titulo: 'Revisão Jeep mantendo a garantia',
        conteudo:
          'Você pode revisar seu Jeep fora da concessionária sem perder a garantia de fábrica. O Código de Defesa do Consumidor assegura esse direito, desde que se siga o plano do manual e se usem peças adequadas, com nota fiscal. A Carplus segue o cronograma de revisão Jeep por quilometragem, emite nota fiscal de tudo e oferece um custo mais acessível que o da rede autorizada.',
      },
      {
        titulo: 'Câmbio automático, arrefecimento e diagnóstico',
        conteudo:
          'A troca de fluido do câmbio automático é essencial para a durabilidade do Renegade e do Compass, e deve ser feita com equipamento adequado. Fazemos esse serviço, além de reparos de arrefecimento, suspensão, freios e diagnóstico eletrônico completo. Nosso scanner lê injeção, ABS e airbag, e apresentamos sempre um laudo antes do orçamento.',
      },
      {
        titulo: 'Oficina Jeep no Portão, Curitiba',
        conteudo:
          'Estamos na Avenida Presidente Arthur da Silva Bernardes, 1323, no Portão, com fácil acesso para toda Curitiba e região metropolitana. Oferecemos parcelamento em até 10x sem juros, diagnóstico antes do orçamento e garantia em todos os serviços. Agende a avaliação do seu Jeep sem compromisso.',
      },
    ],
    faq: [
      { pergunta: 'A revisão na Carplus mantém a garantia de fábrica do meu Jeep?', resposta: 'Sim. Pelo Código de Defesa do Consumidor, a revisão pode ser feita fora da concessionária sem perder a garantia, desde que seguido o plano do manual e usadas peças adequadas, com nota fiscal — o que a Carplus emite em tudo.' },
      { pergunta: 'Quanto custa a revisão do Jeep em Curitiba?', resposta: 'Depende do modelo e da quilometragem. Fazemos o diagnóstico e apresentamos o orçamento antes de iniciar, normalmente mais acessível que a concessionária. Peça pelo WhatsApp (41) 3082-7282.' },
      { pergunta: 'Vocês têm scanner para Jeep?', resposta: 'Sim. Nosso scanner profissional lê injeção eletrônica, ABS, airbag e módulos Jeep, com reset de painel e limpeza de bicos.' },
      { pergunta: 'Fazem a troca de óleo do câmbio automático do Compass?', resposta: 'Sim. Fazemos a troca do fluido do câmbio automático com equipamento adequado e leitura do módulo para suavizar as trocas.' },
      { pergunta: 'Atendem qual região de Curitiba?', resposta: 'Estamos no Portão e atendemos toda Curitiba e região metropolitana, com fácil acesso para Água Verde, Novo Mundo, Fazendinha, Capão Raso e demais bairros.' },
      { pergunta: 'Resolvem superaquecimento do Renegade?', resposta: 'Sim. Testamos válvula termostática, bomba d\u2019água, radiador e sensores para corrigir a causa do superaquecimento antes que danifique o motor.' },
      { pergunta: 'É possível parcelar os serviços?', resposta: 'Sim, parcelamos em até 10x sem juros e aceitamos cartão, débito, dinheiro e PIX.' },
      { pergunta: 'Usam peças originais Jeep?', resposta: 'Usamos peças de qualidade — genuínas ou de primeira linha equivalentes — na especificação de fábrica, com nota fiscal e garantia.' },
    ],
    keywordsSecundarias: ['oficina especializada jeep curitiba', 'revisão renegade curitiba', 'mecânica jeep curitiba', 'oficina compass curitiba'],
    whatsappMessage: 'Olá! Vi a página de oficina especializada Jeep no site e gostaria de um orçamento para meu Jeep.',
    ctaTitle: 'Seu Jeep cuidado por especialistas',
    ctaSubtitle: 'Agende uma avaliação ou peça seu orçamento sem compromisso. Atendemos toda Curitiba a partir do Portão.',
  },

  // ───────────────────────── 9) CÂMBIO AUTOMÁTICO (serviço) ─────────────────────────
  {
    slug: 'oficina-especializada-cambio-automatico-curitiba',
    marca: 'Câmbio Automático',
    tipo: 'servico',
    titleTag: 'Câmbio Automático em Curitiba | Oficina Especializada Carplus',
    metaDescription:
      'Oficina especializada em câmbio automático em Curitiba: troca de óleo AT, CVT e DCT com equipamento adequado e diagnóstico. WhatsApp (41) 3082-7282.',
    h1: 'Oficina Especializada em Câmbio Automático em Curitiba',
    heroSubtitulo:
      'Troca de óleo de câmbio automático com equipamento adequado, diagnóstico por scanner e manutenção de câmbios AT, CVT, DCT e automatizados. No Portão, em Curitiba.',
    eyebrow: 'Câmbio Automático • Portão, Curitiba',
    modelosAtendidos: ['Câmbio AT (conversor)', 'Câmbio CVT', 'Câmbio DCT (dupla embreagem)', 'Câmbio automatizado', 'Aisin', 'ZF', 'Powershift'],
    servicosDestaque: [
      { titulo: 'Troca de óleo do câmbio automático', descricao: 'Troca do fluido com equipamento adequado e a especificação correta para AT, CVT e DCT, preservando a vida útil do câmbio.' },
      { titulo: 'Diagnóstico por scanner', descricao: 'Leitura de módulos do câmbio, verificação de trocas, temperatura e pressão para identificar a origem de trancos e patinações.' },
      { titulo: 'Manutenção de câmbios CVT', descricao: 'Cuidado específico com o fluido e a correia/polias do CVT, evitando desgaste precoce e falhas caras.' },
      { titulo: 'Câmbios de dupla embreagem (DCT)', descricao: 'Avaliação de embreagens e atuadores em câmbios DCT, resolvendo trepidação e demora nas trocas.' },
      { titulo: 'Câmbios automatizados', descricao: 'Calibração do ponto de embreagem e avaliação do atuador em câmbios automatizados, suavizando o funcionamento.' },
      { titulo: 'Troca preventiva programada', descricao: 'Recomendação e execução da troca preventiva a cada 40 a 60 mil km, evitando reparos de alto custo.' },
    ],
    problemasComuns: [
      {
        problema: 'Trancos e solavancos nas trocas',
        solucao:
          'Fazemos a leitura do módulo, verificamos o nível e a qualidade do fluido e calibramos o câmbio, eliminando os trancos nas trocas.',
      },
      {
        problema: 'Patinação (o motor acelera e o carro não responde)',
        solucao:
          'Diagnosticamos a causa da patinação — fluido degradado, embreagem ou conversor — e indicamos o reparo correto antes que o dano aumente.',
      },
      {
        problema: 'Demora para engatar marcha (D ou R)',
        solucao:
          'Verificamos pressão, solenoides e fluido e corrigimos a origem da demora ao engatar, restaurando a resposta imediata do câmbio.',
      },
      {
        problema: 'Câmbio esquentando demais',
        solucao:
          'Avaliamos o radiador/resfriador do câmbio e a qualidade do fluido, fazendo a troca e a limpeza para normalizar a temperatura.',
      },
      {
        problema: 'Fluido nunca trocado (acima de 60 mil km)',
        solucao:
          'Fazemos a troca do fluido com equipamento adequado, essencial para evitar o desgaste interno e o retrabalho caro do câmbio.',
      },
    ],
    intro:
      'O câmbio automático é um dos componentes mais caros de um veículo, e a manutenção correta faz toda a diferença na sua durabilidade. A Carplus, no Portão em Curitiba, é uma oficina especializada em câmbio automático que faz a troca de óleo com equipamento adequado e diagnóstico por scanner, atendendo câmbios AT (conversor), CVT, DCT (dupla embreagem) e automatizados de todas as marcas. Antes de qualquer serviço, identificamos a real condição do seu câmbio para evitar gastos desnecessários.',
    secoes: [
      {
        titulo: 'Por que a troca de óleo do câmbio automático é tão importante',
        conteudo:
          'Muita gente acredita que o câmbio automático é "selado" e nunca precisa de manutenção — um dos maiores mitos do universo automotivo. Na verdade, o fluido do câmbio se degrada com o tempo e o calor, perdendo suas propriedades de lubrificação e resfriamento. Sem a troca preventiva, o resultado costuma ser desgaste interno, trancos, patinação e, no pior cenário, a necessidade de retificar ou trocar o câmbio inteiro — um reparo que pode custar muitas vezes o valor de uma simples troca de fluido.',
      },
      {
        titulo: 'Troca com equipamento adequado, não improviso',
        conteudo:
          'Existe diferença enorme entre trocar apenas parte do fluido (dreno simples) e fazer a troca completa com equipamento adequado, que circula o novo fluido por todo o sistema. Na Carplus, usamos o método correto para cada tipo de câmbio e a especificação de fluido exata que o fabricante recomenda. Isso garante que o câmbio receba o produto certo, na quantidade certa, sem misturas que possam comprometer o funcionamento.',
      },
      {
        titulo: 'AT, CVT, DCT e automatizado: cada um com seu cuidado',
        conteudo:
          'Câmbios de conversor de torque (AT), continuamente variáveis (CVT), de dupla embreagem (DCT) e automatizados têm construções e necessidades diferentes. O CVT, por exemplo, usa fluido específico e é sensível à falta de manutenção; o DCT tem embreagens que pedem avaliação periódica; o automatizado depende da calibração correta do ponto de embreagem. Nosso scanner lê os módulos de cada tipo, verificando temperatura, pressão e códigos de falha para um diagnóstico preciso.',
      },
      {
        titulo: 'Quando fazer a troca preventiva',
        conteudo:
          'Como regra geral, recomendamos a troca preventiva do fluido do câmbio automático a cada 40 a 60 mil km, ou antes disso se você anda muito em trânsito pesado, como no dia a dia de Curitiba. Sinais como trancos, demora para engatar, patinação ou câmbio esquentando indicam que a manutenção não pode esperar. Traga seu carro para uma avaliação sem compromisso e evite um reparo caro no futuro.',
      },
    ],
    faq: [
      { pergunta: 'De quanto em quanto tempo trocar o óleo do câmbio automático?', resposta: 'Como regra geral, a cada 40 a 60 mil km, ou antes se o carro roda muito em trânsito pesado. Sinais de trancos ou patinação indicam que a troca não deve esperar.' },
      { pergunta: 'Câmbio automático é selado e não precisa de manutenção?', resposta: 'Não, isso é mito. O fluido se degrada com o tempo e o calor. A troca preventiva evita desgaste interno e reparos caros.' },
      { pergunta: 'Vocês atendem câmbio CVT e DCT?', resposta: 'Sim. Atendemos câmbios AT, CVT, DCT (dupla embreagem) e automatizados, com o fluido e o método corretos para cada tipo.' },
      { pergunta: 'Quanto custa a troca de óleo do câmbio automático em Curitiba?', resposta: 'O valor depende do tipo de câmbio e da quantidade de fluido. Fazemos o diagnóstico e apresentamos o orçamento antes de iniciar. Peça pelo WhatsApp (41) 3082-7282.' },
      { pergunta: 'O que causa trancos no câmbio automático?', resposta: 'Geralmente fluido degradado, nível incorreto ou necessidade de calibração. Fazemos a leitura do módulo para identificar a causa exata.' },
      { pergunta: 'Vocês têm scanner para o câmbio?', resposta: 'Sim. Nosso scanner lê os módulos do câmbio, verificando temperatura, pressão, trocas e códigos de falha.' },
      { pergunta: 'Atendem qual região de Curitiba?', resposta: 'Estamos no Portão e atendemos toda Curitiba e região metropolitana, com fácil acesso para Água Verde, Novo Mundo, Fazendinha, Capão Raso e demais bairros.' },
      { pergunta: 'É possível parcelar o serviço?', resposta: 'Sim, parcelamos em até 10x sem juros e aceitamos cartão, débito, dinheiro e PIX.' },
    ],
    keywordsSecundarias: ['oficina especializada em câmbio automático em curitiba', 'troca de óleo câmbio automático curitiba', 'manutenção câmbio automático curitiba', 'câmbio cvt curitiba'],
    whatsappMessage: 'Olá! Vi a página de câmbio automático no site e gostaria de um orçamento para a manutenção do câmbio do meu carro.',
    ctaTitle: 'Cuide do câmbio automático do seu carro',
    ctaSubtitle: 'Agende uma avaliação ou peça seu orçamento sem compromisso. Atendemos toda Curitiba a partir do Portão.',
  },

  // ───────────────────────── 10) REVISÃO AUTOMOTIVA (serviço) ─────────────────────────
  {
    slug: 'revisao-automotiva-curitiba',
    marca: 'Revisão Automotiva',
    tipo: 'servico',
    titleTag: 'Revisão Automotiva em Curitiba | Oficina Carplus – Portão',
    metaDescription:
      'Revisão automotiva completa em Curitiba, multimarcas, mantendo a garantia de fábrica. Checklist, nota fiscal e preço justo. WhatsApp (41) 3082-7282.',
    h1: 'Revisão Automotiva em Curitiba',
    heroSubtitulo:
      'Revisão completa multimarcas por quilometragem, mantendo a garantia de fábrica. Checklist detalhado, nota fiscal e preço mais acessível que a concessionária.',
    eyebrow: 'Revisão Multimarcas • Portão, Curitiba',
    modelosAtendidos: ['Revisão 10.000 km', 'Revisão 20.000 km', 'Revisão 30.000 km', 'Revisão 40.000 km', 'Revisão pré-viagem', 'Todas as marcas'],
    servicosDestaque: [
      { titulo: 'Revisão por quilometragem', descricao: 'Seguimos o plano do manual (10.000, 20.000, 30.000 km...) com o checklist exato que o seu carro precisa em cada etapa.' },
      { titulo: 'Troca de óleo e filtros', descricao: 'Óleo na especificação correta, com filtro de óleo, ar, combustível e cabine, e descarte ecológico do óleo usado.' },
      { titulo: 'Freios e suspensão', descricao: 'Verificação de pastilhas, discos, fluido, amortecedores, molas e buchas para segurança e conforto.' },
      { titulo: 'Sistema de arrefecimento', descricao: 'Checagem do líquido de arrefecimento, radiador, mangueiras e válvula termostática para evitar superaquecimento.' },
      { titulo: 'Diagnóstico eletrônico', descricao: 'Scanner para leitura de falhas de injeção, ABS e airbag, identificando problemas antes que se agravem.' },
      { titulo: 'Revisão pré-viagem', descricao: 'Checklist completo de segurança antes de pegar a estrada, incluindo pneus, freios, fluidos e iluminação.' },
    ],
    problemasComuns: [
      {
        problema: 'Medo de perder a garantia revisando fora da concessionária',
        solucao:
          'Pelo Código de Defesa do Consumidor, você mantém a garantia revisando em oficina de confiança, seguindo o manual e com nota fiscal — que a Carplus emite em tudo.',
      },
      {
        problema: 'Revisão na concessionária muito cara',
        solucao:
          'Seguimos o mesmo plano do manual com peças de qualidade por um preço bem mais acessível, com total transparência no orçamento.',
      },
      {
        problema: 'Não saber o que é verificado na revisão',
        solucao:
          'Apresentamos um checklist detalhado do que foi inspecionado, explicando o que é urgente e o que pode esperar, sem empurrar serviços.',
      },
      {
        problema: 'Carro sem revisão há muito tempo',
        solucao:
          'Fazemos uma avaliação completa e priorizamos os itens críticos de segurança, colocando o veículo em dia de forma planejada.',
      },
      {
        problema: 'Viagem chegando e carro sem checagem',
        solucao:
          'Fazemos a revisão pré-viagem com checklist de segurança (pneus, freios, fluidos, iluminação e suspensão) para você viajar tranquilo.',
      },
    ],
    intro:
      'A revisão automotiva preventiva é o melhor investimento para quem quer evitar panes, gastos altos e imprevistos na estrada. A Carplus, no Portão em Curitiba, faz revisão completa multimarcas seguindo exatamente o plano do manual de cada veículo, por quilometragem, com checklist detalhado, peças de qualidade e nota fiscal de tudo — mantendo a garantia de fábrica e por um preço mais acessível que o da concessionária.',
    secoes: [
      {
        titulo: 'Revisão fora da concessionária mantém a garantia',
        conteudo:
          'Este é o maior receio de quem tem carro novo, e a boa notícia é clara: a Lei nº 8.078 (Código de Defesa do Consumidor) assegura que o consumidor pode fazer a revisão fora da concessionária sem perder a garantia de fábrica, desde que siga o plano de manutenção do manual, use peças adequadas e guarde a nota fiscal dos serviços. A Carplus cumpre rigorosamente esse plano e emite nota fiscal de tudo, garantindo o seu direito e a sua economia ao mesmo tempo.',
      },
      {
        titulo: 'O que é verificado em uma revisão completa',
        conteudo:
          'Nossa revisão segue um checklist detalhado: nível e qualidade do óleo do motor, filtros (óleo, ar, combustível e cabine), correias, sistema de arrefecimento, freios (pastilhas, discos e fluido), suspensão, direção, pneus, bateria, iluminação e leitura eletrônica com scanner. Identificar um problema cedo custa muito menos do que consertá-lo depois que o estrago aconteceu — por isso a revisão preventiva é tão importante.',
      },
      {
        titulo: 'Revisão por quilometragem, do jeito certo',
        conteudo:
          'Cada revisão programada (10.000, 20.000, 30.000, 40.000 km e assim por diante) prevê itens específicos no manual do fabricante. Seguir esse cronograma corretamente é o que mantém o carro saudável e a garantia válida. Na Carplus, sabemos exatamente o que cada etapa exige para o seu modelo, evitando tanto o excesso de serviços quanto a omissão de itens importantes.',
      },
      {
        titulo: 'Revisão pré-viagem e transparência total',
        conteudo:
          'Antes de pegar a estrada — seja para o litoral, a serra ou uma viagem longa pela BR-116 — vale fazer a revisão pré-viagem, com checklist reforçado de segurança: pneus, freios, fluidos, suspensão e iluminação. Em todos os atendimentos, apresentamos um orçamento transparente, explicando o que é urgente e o que pode esperar. Nunca empurramos serviços desnecessários — é assim que construímos uma nota média 4,9 no Google.',
      },
    ],
    faq: [
      { pergunta: 'A revisão na Carplus mantém a garantia de fábrica?', resposta: 'Sim. Pelo Código de Defesa do Consumidor (Lei nº 8.078), você pode revisar o carro fora da concessionária sem perder a garantia, desde que seguido o plano do manual e usadas peças adequadas, com nota fiscal — o que a Carplus emite em tudo.' },
      { pergunta: 'Quanto custa a revisão automotiva em Curitiba?', resposta: 'Depende do modelo e da quilometragem, mas normalmente é mais acessível que na concessionária. Fazemos o diagnóstico e apresentamos o orçamento antes de iniciar. Peça pelo WhatsApp (41) 3082-7282.' },
      { pergunta: 'Vocês fazem revisão de qualquer marca?', resposta: 'Sim. Fazemos revisão completa multimarcas, nacionais e importadas, seguindo o plano do manual de cada veículo.' },
      { pergunta: 'O que é verificado na revisão?', resposta: 'Óleo e filtros, correias, arrefecimento, freios, suspensão, direção, pneus, bateria, iluminação e leitura eletrônica com scanner, entre outros itens do checklist.' },
      { pergunta: 'De quanto em quanto tempo fazer a revisão?', resposta: 'Conforme o plano do manual, geralmente a cada 10.000 km ou uma vez por ano, além da revisão pré-viagem antes de trajetos longos.' },
      { pergunta: 'Preciso agendar a revisão?', resposta: 'Para revisões completas, recomendamos agendar pelo WhatsApp (41) 3082-7282 para agilizar o atendimento.' },
      { pergunta: 'Atendem qual região de Curitiba?', resposta: 'Estamos no Portão e atendemos toda Curitiba e região metropolitana, com fácil acesso para Água Verde, Novo Mundo, Fazendinha, Capão Raso e demais bairros.' },
      { pergunta: 'É possível parcelar a revisão?', resposta: 'Sim, parcelamos em até 10x sem juros e aceitamos cartão, débito, dinheiro e PIX.' },
    ],
    keywordsSecundarias: ['revisão automotiva curitiba', 'revisão de carro curitiba', 'revisão completa curitiba', 'revisão mantendo garantia curitiba'],
    whatsappMessage: 'Olá! Vi a página de revisão automotiva no site e gostaria de um orçamento para a revisão do meu carro.',
    ctaTitle: 'Faça a revisão do seu carro com quem você confia',
    ctaSubtitle: 'Agende sua revisão ou peça um orçamento sem compromisso. Atendemos toda Curitiba a partir do Portão.',
  },

  // ───────────────────────── 11) OFICINA MECÂNICA (pilar) ─────────────────────────
  {
    slug: 'oficina-mecanica-curitiba',
    marca: 'Oficina Mecânica',
    tipo: 'servico',
    titleTag: 'Oficina Mecânica em Curitiba | Centro Automotivo Carplus',
    metaDescription:
      'Oficina mecânica de confiança em Curitiba: revisão, freios, suspensão, injeção, câmbio e diagnóstico com garantia. Centro automotivo no Portão. (41) 3082-7282.',
    h1: 'Oficina Mecânica em Curitiba',
    heroSubtitulo:
      'Centro automotivo full service no Portão, em Curitiba: revisão, mecânica, injeção, câmbio, freios, suspensão e diagnóstico eletrônico. Garantia e nota fiscal em tudo.',
    eyebrow: 'Oficina Mecânica • Portão, Curitiba',
    modelosAtendidos: ['Carros nacionais', 'Carros importados', 'SUVs', 'Picapes', 'Utilitários leves', 'Todas as marcas'],
    servicosDestaque: [
      { titulo: 'Revisão e manutenção preventiva', descricao: 'Checklist completo por quilometragem, mantendo a garantia de fábrica e evitando panes.' },
      { titulo: 'Freios e suspensão', descricao: 'Pastilhas, discos, fluido, amortecedores, molas e buchas para segurança e conforto.' },
      { titulo: 'Injeção eletrônica', descricao: 'Diagnóstico e limpeza de bicos, correção de falhas de injeção e marcha lenta irregular.' },
      { titulo: 'Câmbio automático e manual', descricao: 'Troca de óleo de câmbio, reparo de embreagem e calibração de câmbios automatizados.' },
      { titulo: 'Reparo elétrico e bateria', descricao: 'Diagnóstico de módulos, chicotes, alternador, motor de partida e troca de bateria.' },
      { titulo: 'Ar-condicionado', descricao: 'Higienização, recarga de gás e reparo do sistema de ar-condicionado automotivo.' },
    ],
    problemasComuns: [
      {
        problema: 'Não saber em qual oficina confiar',
        solucao:
          'A Carplus tem nota 4,9 no Google e diagnóstico antes do orçamento, com total transparência.',
      },
      {
        problema: 'Orçamento com valores escondidos',
        solucao:
          'Apresentamos o orçamento detalhado antes de qualquer serviço, explicando o que é urgente e o que pode esperar, sem surpresas.',
      },
      {
        problema: 'Carro parado por muito tempo na oficina',
        solucao:
          'Boa parte dos serviços é feita no mesmo dia; quando o prazo é maior, informamos com antecedência e mantemos você atualizado.',
      },
      {
        problema: 'Troca de peças desnecessárias',
        solucao:
          'Com diagnóstico computadorizado, vamos direto à causa do problema, evitando a troca de peças que ainda estão boas.',
      },
      {
        problema: 'Serviço sem garantia',
        solucao:
          'Todos os nossos serviços têm garantia, com peças de qualidade e nota fiscal em cada atendimento.',
      },
    ],
    intro:
      'Encontrar uma oficina mecânica de confiança em Curitiba, que reúna mecânica completa, diagnóstico moderno e preço justo, faz toda a diferença na rotina de quem depende do carro. A Carplus é um centro automotivo full service no bairro Portão, com nota 4,9 no Google e garantia em todos os serviços. Aqui você resolve tudo em um só lugar, com diagnóstico computadorizado antes do orçamento.',
    secoes: [
      {
        titulo: 'Um centro automotivo completo em Curitiba',
        conteudo:
          'Em vez de levar o carro a vários lugares diferentes, na Carplus você resolve revisão, mecânica, injeção, câmbio, freios, suspensão, elétrica, ar-condicionado e diagnóstico eletrônico no mesmo atendimento. Essa estrutura completa economiza seu tempo e garante que todos os sistemas do veículo sejam avaliados por uma equipe que conhece carros nacionais e importados. Somos referência em atendimento honesto e transparente na região.',
      },
      {
        titulo: 'Diagnóstico computadorizado antes do orçamento',
        conteudo:
          'Nosso diferencial começa antes de qualquer reparo: fazemos um diagnóstico computadorizado com scanner profissional para identificar a real condição do veículo. Isso evita a troca de peças por tentativa e garante um orçamento preciso. Você recebe um laudo claro do que é urgente e do que pode esperar, e decide com total segurança — sem pressão e sem serviços desnecessários.',
      },
      {
        titulo: 'Oficina especializada por marca',
        conteudo:
          'Além da mecânica geral, a Carplus atende com conhecimento específico as principais marcas do mercado. Temos páginas dedicadas para quem procura oficina especializada em Fiat, Volkswagen, Chevrolet, Hyundai, Toyota, Renault, Honda e Jeep, além de serviços especializados como câmbio automático e revisão automotiva. Seja qual for o seu carro, temos o scanner e a experiência para cuidar dele.',
      },
      {
        titulo: 'Localização e atendimento no Portão',
        conteudo:
          'Estamos na Avenida Presidente Arthur da Silva Bernardes, 1323, no Portão, ponto de fácil acesso para toda Curitiba e região metropolitana. Funcionamos de segunda a sexta das 8h às 18h e aos sábados das 8h às 12h. Trabalhamos com parcelamento em até 10x sem juros, diagnóstico antes do orçamento e garantia em todos os serviços. Traga seu carro para uma avaliação sem compromisso.',
      },
    ],
    faq: [
      { pergunta: 'Qual a melhor oficina mecânica em Curitiba?', resposta: 'A Carplus é uma das oficinas mais bem avaliadas de Curitiba, com nota 4,9 no Google, diagnóstico computadorizado e garantia em todos os serviços.' },
      { pergunta: 'A oficina atende toda Curitiba?', resposta: 'Sim. Embora nossa estrutura fique no Portão, atendemos motoristas de toda Curitiba e da região metropolitana.' },
      { pergunta: 'Quais serviços a oficina oferece?', resposta: 'Revisão, freios, suspensão, injeção eletrônica, câmbio automático e manual, reparo elétrico, bateria, ar-condicionado, escapamento, pneus e alinhamento 3D.' },
      { pergunta: 'O orçamento é gratuito?', resposta: 'Sim, o orçamento é sem compromisso. Fazemos o diagnóstico e apresentamos os valores antes de qualquer serviço, com total transparência.' },
      { pergunta: 'Os serviços têm garantia?', resposta: 'Sim, todos os serviços têm garantia, com peças de qualidade e nota fiscal.' },
      { pergunta: 'Atendem carros importados?', resposta: 'Sim. Atendemos todas as marcas e modelos, nacionais e importados, com diagnóstico e equipamento adequados.' },
      { pergunta: 'Qual o horário de funcionamento?', resposta: 'Funcionamos de segunda a sexta das 8h às 18h e aos sábados das 8h às 12h.' },
      { pergunta: 'É possível parcelar os serviços?', resposta: 'Sim, parcelamos em até 10x sem juros e aceitamos cartão, débito, dinheiro e PIX.' },
    ],
    keywordsSecundarias: ['oficina mecânica curitiba', 'oficina mecânica perto de mim', 'mecânica de confiança curitiba', 'centro automotivo curitiba'],
    whatsappMessage: 'Olá! Vi a página da oficina mecânica no site e gostaria de um orçamento para meu carro.',
    ctaTitle: 'Sua oficina mecânica de confiança em Curitiba',
    ctaSubtitle: 'Agende uma avaliação ou peça seu orçamento sem compromisso. Atendemos toda Curitiba a partir do Portão.',
  },

  // ───────────────────────── 12) OFICINA MECÂNICA PORTÃO (hiperlocal) ─────────────────────────
  {
    slug: 'oficina-mecanica-portao-curitiba',
    marca: 'Oficina no Portão',
    tipo: 'servico',
    titleTag: 'Oficina Mecânica no Portão em Curitiba | Carplus',
    metaDescription:
      'Oficina mecânica no bairro Portão, em Curitiba. Revisão, mecânica, câmbio e diagnóstico com garantia, pertinho de você. WhatsApp (41) 3082-7282.',
    h1: 'Oficina Mecânica no Portão, em Curitiba',
    heroSubtitulo:
      'Centro automotivo completo no coração do Portão: revisão, mecânica, câmbio, freios, suspensão e diagnóstico eletrônico. Perto de você, com garantia e nota fiscal.',
    eyebrow: 'Bairro Portão • Curitiba',
    modelosAtendidos: ['Portão', 'Água Verde', 'Novo Mundo', 'Fazendinha', 'Vila Izabel', 'Capão Raso', 'Santa Quitéria', 'Lindóia', 'Seminário'],
    servicosDestaque: [
      { titulo: 'Revisão e manutenção preventiva', descricao: 'Checklist completo por quilometragem, mantendo a garantia de fábrica, pertinho de casa.' },
      { titulo: 'Freios e suspensão', descricao: 'Pastilhas, discos, amortecedores e buchas — essenciais para as ruas e paralelepípedos do Portão.' },
      { titulo: 'Injeção e diagnóstico', descricao: 'Scanner profissional para leitura de falhas de injeção, ABS e airbag, com laudo antes do orçamento.' },
      { titulo: 'Câmbio automático e manual', descricao: 'Troca de óleo de câmbio, reparo de embreagem e calibração de câmbios automatizados.' },
      { titulo: 'Alinhamento 3D e balanceamento', descricao: 'Alinhamento computadorizado e balanceamento para eliminar desgaste irregular e vibração.' },
      { titulo: 'Pneus e reparo elétrico', descricao: 'Venda e montagem de pneus, além de diagnóstico elétrico, bateria e alternador.' },
    ],
    problemasComuns: [
      {
        problema: 'Não achar oficina de confiança perto de casa',
        solucao:
          'Estamos no coração do Portão, com nota 4,9 no Google, pertinho de quem mora e trabalha na região.',
      },
      {
        problema: 'Perder tempo indo a oficinas distantes',
        solucao:
          'Resolvemos tudo em um só endereço no Portão, com boa parte dos serviços feitos no mesmo dia.',
      },
      {
        problema: 'Suspensão castigada pelas ruas do bairro',
        solucao:
          'Fazemos avaliação completa de amortecedores, buchas e batentes, essenciais para o asfalto irregular e paralelepípedos da região.',
      },
      {
        problema: 'Dúvida sobre orçamento justo',
        solucao:
          'Apresentamos o orçamento detalhado antes do serviço, com diagnóstico computadorizado e total transparência.',
      },
      {
        problema: 'Serviço sem garantia',
        solucao:
          'Todos os serviços têm garantia, com peças de qualidade e nota fiscal em cada atendimento.',
      },
    ],
    intro:
      'Se você mora ou trabalha no Portão e procura uma oficina mecânica de confiança pertinho de casa, a Carplus é a escolha certa. Estamos no coração do bairro, na Avenida Presidente Arthur da Silva Bernardes, 1323, atendendo com mecânica completa, diagnóstico computadorizado e garantia em todos os serviços. Perto de você, sem precisar atravessar a cidade para cuidar do seu carro.',
    secoes: [
      {
        titulo: 'A oficina mecânica do seu bairro, no Portão',
        conteudo:
          'O Portão é um dos bairros mais movimentados de Curitiba, e ter uma oficina mecânica completa por perto faz toda a diferença. A Carplus reúne em um só endereço revisão, mecânica, injeção, câmbio, freios, suspensão, alinhamento 3D e pneus, sem que você precise rodar a cidade atrás de vários especialistas. Atendemos quem vive e trabalha no bairro com a comodidade de resolver tudo pertinho de casa.',
      },
      {
        titulo: 'Atendemos o Portão e os bairros vizinhos',
        conteudo:
          'Nossa localização é estratégica para toda a região sul e central de Curitiba. Além do Portão, atendemos com facilidade quem vem da Água Verde, Novo Mundo, Fazendinha, Vila Izabel, Capão Raso, Santa Quitéria, Lindóia e Seminário. São poucos minutos de deslocamento, com acesso rápido pelas principais vias do bairro e estacionamento próximo.',
      },
      {
        titulo: 'Suspensão e alinhamento para as ruas de Curitiba',
        conteudo:
          'As ruas do Portão e dos bairros vizinhos, com trechos de paralelepípedo e asfalto irregular, exigem uma suspensão em bom estado. Fazemos avaliação completa de amortecedores, molas, buchas e batentes, além de alinhamento 3D e balanceamento — serviços que evitam o desgaste irregular dos pneus e trazem de volta o conforto e a segurança na direção.',
      },
      {
        titulo: 'Confiança, garantia e transparência',
        conteudo:
          'Com nota 4,9 no Google, a Carplus construiu sua reputação no atendimento honesto. Fazemos diagnóstico computadorizado antes do orçamento, explicamos o que é urgente e o que pode esperar e oferecemos garantia em todos os serviços, com nota fiscal e parcelamento em até 10x sem juros. Traga seu carro para uma avaliação sem compromisso, aqui no Portão.',
      },
    ],
    faq: [
      { pergunta: 'Onde fica a oficina mecânica no Portão?', resposta: 'A Carplus fica na Av. Presidente Arthur da Silva Bernardes, 1323, no bairro Portão, em Curitiba, com fácil acesso e estacionamento próximo.' },
      { pergunta: 'Quais bairros vocês atendem além do Portão?', resposta: 'Atendemos Água Verde, Novo Mundo, Fazendinha, Vila Izabel, Capão Raso, Santa Quitéria, Lindóia, Seminário e toda a região de Curitiba.' },
      { pergunta: 'Quais serviços a oficina oferece?', resposta: 'Revisão, freios, suspensão, injeção, câmbio, alinhamento 3D, balanceamento, reparo elétrico, bateria, ar-condicionado e pneus.' },
      { pergunta: 'Preciso agendar para ser atendido?', resposta: 'Atendemos por ordem de chegada e com hora marcada. Para serviços mais longos, recomendamos agendar pelo WhatsApp (41) 3082-7282.' },
      { pergunta: 'Os serviços têm garantia?', resposta: 'Sim, todos os serviços têm garantia, com peças de qualidade e nota fiscal.' },
      { pergunta: 'Qual o horário de funcionamento?', resposta: 'Funcionamos de segunda a sexta das 8h às 18h e aos sábados das 8h às 12h.' },
      { pergunta: 'O orçamento é gratuito?', resposta: 'Sim, o orçamento é sem compromisso. Fazemos o diagnóstico e apresentamos os valores antes de qualquer serviço.' },
      { pergunta: 'É possível parcelar os serviços?', resposta: 'Sim, parcelamos em até 10x sem juros e aceitamos cartão, débito, dinheiro e PIX.' },
    ],
    keywordsSecundarias: ['oficina mecânica portão', 'oficina mecânica portão curitiba', 'mecânico portão', 'centro automotivo portão'],
    whatsappMessage: 'Olá! Vi a página da oficina mecânica no Portão e gostaria de um orçamento para meu carro.',
    ctaTitle: 'A oficina mecânica do Portão perto de você',
    ctaSubtitle: 'Agende uma avaliação ou peça seu orçamento sem compromisso. Estamos no coração do Portão, em Curitiba.',
  },
];

// ─── Helpers ─────────────────────────────────────────────────────
export function getOficinaMarcaPage(slug: string): OficinaMarcaPage | undefined {
  return OFICINA_MARCA_PAGES.find((p) => p.slug === slug);
}

export const OFICINA_MARCA_SLUGS = OFICINA_MARCA_PAGES.map((p) => p.slug);

/** Depoimentos reais (Google) reutilizados nas páginas. */
export const OFICINA_DEPOIMENTOS = [
  {
    author: 'Isaac Coelho',
    text: 'Atendimento excelente e muito honesto. Explicaram tudo antes de fazer, o preço foi justo e o carro ficou pronto no prazo. Recomendo demais.',
    rating: 5,
  },
  {
    author: 'Adriana Rocha',
    text: 'Levei meu carro para revisão e fui super bem atendida. Equipe atenciosa, ambiente organizado e serviço com garantia. Voltarei sempre.',
    rating: 5,
  },
  {
    author: 'Edson Lara',
    text: 'Profissionais competentes e transparentes. Fizeram o diagnóstico certinho e resolveram o problema sem enrolação. Nota 10 para a Carplus.',
    rating: 5,
  },
];
