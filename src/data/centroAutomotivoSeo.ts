// ════════════════════════════════════════════════════════════════
// BASE DE DADOS SEO — Páginas de Centro Automotivo (Curitiba)
// Conteúdo 100% original, focado em SEO local ético.
// As páginas "alternativa-*" posicionam a Carplus como OPÇÃO/alternativa,
// sem se passar por concorrentes (linguagem comparativa e informativa).
// ════════════════════════════════════════════════════════════════

import type { FaqItem, SeoLandingSection } from './seoLanding';

export const WHATSAPP_NUMBER = '554130827282';
export const PHONE_DISPLAY = '(41) 3082-7282';
export const ADDRESS_STREET = 'Av. Presidente Arthur da Silva Bernardes, 1323';
export const ADDRESS_FULL =
  'Av. Presidente Arthur da Silva Bernardes, 1323 – Portão, Curitiba – PR';
export const MAPS_EMBED =
  'https://www.google.com/maps?q=Av.+Presidente+Arthur+da+Silva+Bernardes,+1323,+Curitiba+PR&output=embed';

/** Chaves de ícones (mapeadas para lucide-react no componente). */
export type IconKey =
  | 'clock'
  | 'users'
  | 'wrench'
  | 'shield'
  | 'award'
  | 'mapPin'
  | 'star'
  | 'badgeCheck'
  | 'gauge'
  | 'truck';

export interface Benefit {
  icon: IconKey;
  title: string;
  description: string;
}

export interface Service {
  icon: IconKey;
  name: string;
  description: string;
  link: string;
}

export interface Differential {
  icon: IconKey;
  title: string;
  description: string;
}

export interface Testimonial {
  author: string;
  text: string;
  rating: number;
}

export interface CentroAutomotivoPage {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  breadcrumbName: string;
  /** Texto curto exibido no chip acima do H1. */
  eyebrow: string;
  h1: string;
  heroSubtitle: string;
  heroImage: string;
  heroImageAlt: string;
  /** Aviso de caráter comparativo (apenas páginas "alternativa-*"). */
  comparativeNotice?: string;
  benefits: Benefit[];
  services: Service[];
  differentials: Differential[];
  sections: SeoLandingSection[];
  testimonials: Testimonial[];
  faq: FaqItem[];
  ctaTitle: string;
  ctaSubtitle: string;
  /** Mensagem pré-preenchida no WhatsApp. */
  whatsappMessage: string;
}

// ─── Blocos reutilizáveis (padrão Carplus) ───────────────────────

const SERVICOS_PADRAO: Service[] = [
  { icon: 'wrench', name: 'Troca de Óleo', description: 'Óleos sintéticos e semissintéticos com filtro e descarte ecológico.', link: '/servico/troca-de-oleo' },
  { icon: 'shield', name: 'Freios', description: 'Pastilhas, discos, fluido e revisão completa do sistema de frenagem.', link: '/servico/troca-de-pastilha-de-freio' },
  { icon: 'gauge', name: 'Suspensão', description: 'Amortecedores, molas, batentes e buchas para conforto e segurança.', link: '/servico/troca-de-amortecedor' },
  { icon: 'gauge', name: 'Alinhamento', description: 'Alinhamento 3D computadorizado para evitar desgaste irregular.', link: '/servico/alinhamento' },
  { icon: 'gauge', name: 'Balanceamento', description: 'Balanceamento de rodas preciso que elimina vibrações na direção.', link: '/servico/balanceamento' },
  { icon: 'badgeCheck', name: 'Revisão Preventiva', description: 'Checklist completo do veículo antes de viagens e no dia a dia.', link: '/servicos' },
  { icon: 'gauge', name: 'Diagnóstico Eletrônico', description: 'Scanner automotivo para leitura de falhas e injeção eletrônica.', link: '/servico/injecao-eletronica' },
  { icon: 'truck', name: 'Pneus', description: 'Venda e montagem de pneus das melhores marcas, com garantia.', link: '/pneus' },
];

const DIFERENCIAIS_PADRAO: Differential[] = [
  { icon: 'award', title: 'Pirelli Performance Center', description: 'Centro certificado com equipamentos de última geração e equipe treinada.' },
  { icon: 'users', title: '+35 Anos de Experiência', description: 'Equipe liderada por especialista com mais de três décadas em diagnóstico automotivo.' },
  { icon: 'shield', title: 'Orçamento Transparente', description: 'Diagnóstico honesto e detalhado, sem surpresas no valor final.' },
  { icon: 'badgeCheck', title: 'Garantia em Todos os Serviços', description: 'Peças de qualidade e nota fiscal com garantia em cada atendimento.' },
];

const BENEFICIOS_PADRAO: Benefit[] = [
  { icon: 'clock', title: 'Atendimento Rápido', description: 'Boa parte dos serviços é feita no mesmo dia, sem deixar o carro parado.' },
  { icon: 'users', title: 'Profissionais Qualificados', description: 'Mecânicos experientes e treinados para carros nacionais e importados.' },
  { icon: 'gauge', title: 'Equipamentos Modernos', description: 'Alinhamento 3D, scanner eletrônico e ferramentas de última geração.' },
  { icon: 'shield', title: 'Garantia dos Serviços', description: 'Todos os reparos têm garantia, com nota fiscal e peças de qualidade.' },
];

const DEPOIMENTOS_PADRAO: Testimonial[] = [
  { author: 'Cliente Carplus', text: 'Atendimento honesto, me explicaram tudo antes de fazer e o preço foi justo. Recomendo o centro automotivo.', rating: 5 },
  { author: 'Cliente Carplus', text: 'Levei o carro para revisão e troca de óleo, ficou pronto rápido e com garantia. Voltarei sempre.', rating: 5 },
  { author: 'Cliente Carplus', text: 'Fiz alinhamento e balanceamento, sumiu a vibração na direção. Equipe muito atenciosa no Portão.', rating: 5 },
];

// ════════════════════════════════════════════════════════════════
// PÁGINAS
// ════════════════════════════════════════════════════════════════

export const CENTRO_AUTOMOTIVO_PAGES: CentroAutomotivoPage[] = [
  // ─────────────────────────────────────────────────────────────
  // 1) Centro Automotivo no Portão (alternativa / região)
  // ─────────────────────────────────────────────────────────────
  {
    slug: 'alternativa-centro-automotivo-portao',
    metaTitle: 'Centro Automotivo no Portão em Curitiba | Revisão e Mecânica Especializada',
    metaDescription:
      'Centro automotivo no Portão em Curitiba: revisão preventiva, troca de óleo, freios, suspensão, alinhamento e balanceamento. Orçamento sem compromisso no WhatsApp (41) 3082-7282.',
    keywords: [
      'centro automotivo portão',
      'centro automotivo portão curitiba',
      'oficina mecânica portão',
      'revisão portão curitiba',
      'alinhamento balanceamento portão',
    ],
    breadcrumbName: 'Centro Automotivo no Portão',
    eyebrow: 'Bairro Portão • Curitiba',
    h1: 'Procurando um Centro Automotivo no Portão?',
    heroSubtitle:
      'A Carplus é um centro automotivo completo no bairro Portão, em Curitiba. Revisão, mecânica especializada, pneus e alinhamento 3D com atendimento de confiança.',
    heroImage: '/images/centro-automotivo/oficina-elevadores.webp',
    heroImageAlt: 'Centro automotivo no Portão em Curitiba com elevadores e equipe especializada',
    benefits: BENEFICIOS_PADRAO,
    services: SERVICOS_PADRAO,
    differentials: DIFERENCIAIS_PADRAO,
    sections: [
      {
        title: 'Um centro automotivo completo no coração do Portão',
        content:
          'Se você mora ou trabalha na região do Portão e procura um centro automotivo de confiança, a Carplus reúne em um só endereço tudo o que o seu carro precisa. Estamos na Avenida Presidente Arthur da Silva Bernardes, 1323, um ponto de fácil acesso para quem vem da Água Verde, Fazendinha, Novo Mundo, Santa Quitéria, Capão Raso e de toda a região sul de Curitiba. Em vez de levar o veículo a vários lugares diferentes, aqui você resolve pneus, mecânica, suspensão, freios e revisão no mesmo atendimento, com diagnóstico transparente e orçamento sem compromisso.',
      },
      {
        title: 'Revisão preventiva: economia que cabe no bolso',
        content:
          'A revisão preventiva é o melhor investimento para quem quer evitar gastos altos e panes inesperadas. No nosso centro automotivo no Portão, fazemos um checklist completo: nível e qualidade do óleo, filtros, correias, sistema de arrefecimento, freios, suspensão, pneus e parte elétrica. Identificar um problema cedo custa muito menos do que consertá-lo depois que o estrago já aconteceu. Por isso recomendamos a revisão a cada 10.000 km ou conforme o manual do fabricante, e sempre antes de viagens longas pela BR-116 ou pela Régis Bittencourt.',
      },
      {
        title: 'Troca de óleo, freios e suspensão com peças de qualidade',
        content:
          'A troca de óleo é feita com lubrificantes sintéticos e semissintéticos compatíveis com a especificação do seu motor, incluindo a troca do filtro e o descarte ecológico do óleo usado. No sistema de freios, trabalhamos com pastilhas, discos e fluido de qualidade, sempre testando a frenagem após o serviço. Já a suspensão — amortecedores, molas, batentes e buchas — recebe atenção especial nas ruas de Curitiba, onde o asfalto irregular e os paralelepípedos exigem componentes em bom estado para garantir conforto e segurança.',
      },
      {
        title: 'Alinhamento e balanceamento computadorizado',
        content:
          'O alinhamento 3D computadorizado corrige os ângulos das rodas, evitando que o carro puxe para os lados e que os pneus se desgastem de forma irregular. Já o balanceamento elimina aquela vibração incômoda no volante em velocidade. Recomendamos os dois serviços a cada troca de pneus ou sempre que perceber desgaste desigual, direção tremendo ou o carro saindo de linha. No nosso centro automotivo no Portão, esses serviços são rápidos e, na maioria dos casos, feitos no mesmo dia.',
      },
    ],
    testimonials: DEPOIMENTOS_PADRAO,
    faq: [
      { question: 'Onde fica o centro automotivo no Portão?', answer: 'A Carplus fica na Av. Presidente Arthur da Silva Bernardes, 1323, bairro Portão, em Curitiba, com fácil acesso de toda a região sul da cidade.' },
      { question: 'Quais serviços o centro automotivo oferece?', answer: 'Oferecemos revisão preventiva, troca de óleo, freios, suspensão, alinhamento 3D, balanceamento, diagnóstico eletrônico e venda e montagem de pneus.' },
      { question: 'Preciso agendar para ser atendido?', answer: 'Atendemos por ordem de chegada e também com hora marcada. Para serviços mais longos, como revisão completa, recomendamos agendar pelo WhatsApp (41) 3082-7282.' },
      { question: 'Quanto tempo leva uma revisão?', answer: 'Serviços simples como troca de óleo e balanceamento costumam ficar prontos no mesmo dia. Revisões completas dependem do que for encontrado, mas sempre informamos o prazo antes de iniciar.' },
      { question: 'Vocês atendem carros importados?', answer: 'Sim. Atendemos todas as marcas e modelos, nacionais e importados, com equipamentos e diagnóstico adequados para cada veículo.' },
      { question: 'O orçamento é gratuito?', answer: 'Sim, o orçamento é sem compromisso. Avaliamos o veículo e apresentamos os valores antes de qualquer serviço, com total transparência.' },
    ],
    ctaTitle: 'Cuide do seu carro no centro automotivo do Portão',
    ctaSubtitle: 'Agende uma avaliação ou peça seu orçamento sem compromisso. Estamos prontos para atender você no Portão, em Curitiba.',
    whatsappMessage: 'Olá! Vi a página do Centro Automotivo no Portão e gostaria de um orçamento.',
  },

  // ─────────────────────────────────────────────────────────────
  // 2) Centro Automotivo em Curitiba
  // ─────────────────────────────────────────────────────────────
  {
    slug: 'centro-automotivo-curitiba',
    metaTitle: 'Centro Automotivo em Curitiba | Revisão Completa e Atendimento Especializado',
    metaDescription:
      'Centro automotivo em Curitiba com revisão completa, troca de óleo, freios, suspensão, alinhamento, balanceamento e pneus. Garantia e orçamento sem compromisso. WhatsApp (41) 3082-7282.',
    keywords: [
      'centro automotivo em curitiba',
      'centro automotivo curitiba',
      'oficina mecânica curitiba',
      'revisão automotiva curitiba',
      'mecânica curitiba',
    ],
    breadcrumbName: 'Centro Automotivo em Curitiba',
    eyebrow: 'Atendemos toda Curitiba',
    h1: 'Centro Automotivo em Curitiba para Todas as Necessidades do Seu Veículo',
    heroSubtitle:
      'Da revisão preventiva à troca de pneus, a Carplus é o centro automotivo em Curitiba que cuida do seu carro com tecnologia, garantia e atendimento transparente.',
    heroImage: '/images/loja/carplus-oficina-portao-fachada-curitiba.jpg',
    heroImageAlt: 'Fachada do centro automotivo Carplus em Curitiba',
    benefits: BENEFICIOS_PADRAO,
    services: SERVICOS_PADRAO,
    differentials: DIFERENCIAIS_PADRAO,
    sections: [
      {
        title: 'O centro automotivo que Curitiba confia',
        content:
          'Encontrar um centro automotivo completo em Curitiba, que reúna mecânica, pneus e serviços especializados com preço justo, faz toda a diferença na rotina de quem depende do carro. A Carplus atende motoristas de toda a cidade — do Centro ao Boqueirão, do Batel ao Cajuru — a partir da nossa estrutura no bairro Portão. Somos um Pirelli Performance Center certificado, o que garante equipamentos modernos, profissionais treinados e acesso às melhores linhas de pneus do mercado, tudo com nota fiscal e garantia.',
      },
      {
        title: 'Serviços principais para o seu dia a dia',
        content:
          'Reunimos em um só lugar os serviços que o seu veículo mais precisa: troca de óleo e filtros, revisão de freios, suspensão e amortecedores, alinhamento 3D, balanceamento, diagnóstico eletrônico e a venda e montagem de pneus das melhores marcas. Essa estrutura completa economiza o seu tempo, porque você não precisa rodar Curitiba inteira atrás de oficinas diferentes para cada problema. Tudo é executado por uma equipe que conhece carros nacionais e importados.',
      },
      {
        title: 'Garantia, transparência e avaliações reais',
        content:
          'Trabalhamos com peças de qualidade e oferecemos garantia em todos os serviços. Antes de iniciar qualquer reparo, apresentamos um orçamento detalhado, explicando o que é urgente e o que pode esperar — sem empurrar serviços desnecessários. Essa transparência é o que sustenta nossa reputação: somos um dos centros automotivos mais bem avaliados de Curitiba, com nota média 4,9 no Google e centenas de clientes satisfeitos que voltam e indicam a Carplus.',
      },
      {
        title: 'Localização e fácil acesso em Curitiba',
        content:
          'Nosso centro automotivo fica na Avenida Presidente Arthur da Silva Bernardes, 1323, no bairro Portão, uma região de fácil acesso e bem servida por vias importantes de Curitiba. Atendemos quem vem da região sul, central e até da região metropolitana — Colombo, Pinhais, São José dos Pinhais e Araucária. Você pode chegar de carro com estacionamento próximo, agendar pelo WhatsApp ou simplesmente passar na loja. Funcionamos de segunda a sexta das 8h às 18h e aos sábados das 8h às 13h.',
      },
    ],
    testimonials: DEPOIMENTOS_PADRAO,
    faq: [
      { question: 'Qual o melhor centro automotivo em Curitiba?', answer: 'A Carplus é um dos centros automotivos mais bem avaliados de Curitiba, com nota 4,9 no Google, estrutura completa de mecânica e pneus e certificação Pirelli Performance Center.' },
      { question: 'O centro automotivo atende toda Curitiba?', answer: 'Sim. Embora nossa loja fique no bairro Portão, atendemos motoristas de toda Curitiba e da região metropolitana.' },
      { question: 'Quais serviços estão disponíveis?', answer: 'Revisão completa, troca de óleo, freios, suspensão, alinhamento 3D, balanceamento, diagnóstico eletrônico e venda e montagem de pneus.' },
      { question: 'Os serviços têm garantia?', answer: 'Sim, todos os serviços têm garantia, com nota fiscal e peças de qualidade.' },
      { question: 'Como faço um orçamento?', answer: 'Você pode pedir um orçamento sem compromisso pelo WhatsApp (41) 3082-7282 ou presencialmente na loja, no bairro Portão.' },
      { question: 'Qual o horário de funcionamento?', answer: 'Funcionamos de segunda a sexta das 8h às 18h e aos sábados das 8h às 13h.' },
    ],
    ctaTitle: 'Seu centro automotivo de confiança em Curitiba',
    ctaSubtitle: 'Agende sua revisão ou peça um orçamento sem compromisso. Atendemos toda Curitiba a partir do bairro Portão.',
    whatsappMessage: 'Olá! Vi a página do Centro Automotivo em Curitiba e gostaria de um orçamento.',
  },

  // ─────────────────────────────────────────────────────────────
  // 3) Região João Bettega
  // ─────────────────────────────────────────────────────────────
  {
    slug: 'centro-automotivo-joao-bettega',
    metaTitle: 'Centro Automotivo Próximo à João Bettega em Curitiba',
    metaDescription:
      'Centro automotivo próximo à Av. João Bettega em Curitiba. Mecânica, pneus, alinhamento, balanceamento e revisão com atendimento rápido. Orçamento no WhatsApp (41) 3082-7282.',
    keywords: [
      'centro automotivo bettega',
      'centro automotivo joão bettega',
      'oficina joão bettega curitiba',
      'mecânica avenida joão bettega',
      'pneus joão bettega',
    ],
    breadcrumbName: 'Centro Automotivo João Bettega',
    eyebrow: 'Região João Bettega • Curitiba',
    h1: 'Oficina Especializada na Região da João Bettega',
    heroSubtitle:
      'Localização estratégica e atendimento rápido para quem circula pela Av. João Bettega e região. Mecânica, pneus e revisão na Carplus, no Portão.',
    heroImage: '/images/centro-automotivo/oficina-elevadores.webp',
    heroImageAlt: 'Oficina especializada próxima à João Bettega em Curitiba',
    benefits: BENEFICIOS_PADRAO,
    services: SERVICOS_PADRAO,
    differentials: DIFERENCIAIS_PADRAO,
    sections: [
      {
        title: 'Centro automotivo perto da Av. João Bettega',
        content:
          'A Avenida João Bettega é uma das principais ligações entre a Cidade Industrial, o Portão e a região central de Curitiba, com tráfego intenso de carros, utilitários e veículos de trabalho todos os dias. Quem circula por ali precisa de um centro automotivo próximo, ágil e confiável para não perder tempo. A Carplus está a poucos minutos da João Bettega, no bairro Portão, pronta para atender com mecânica completa, pneus e serviços de manutenção que cabem na sua rotina corrida.',
      },
      {
        title: 'Localização estratégica e rapidez no atendimento',
        content:
          'Nossa posição no Portão é uma vantagem para quem vive na região da João Bettega: chega-se rápido, sem enfrentar o trânsito do centro, e com acesso fácil de quem vem da CIC, Fazendinha e Novo Mundo. Sabemos que muitos clientes dependem do veículo para trabalhar, por isso priorizamos a agilidade: troca de óleo, balanceamento e reparos simples normalmente ficam prontos no mesmo dia. Quando o serviço é mais longo, informamos o prazo com antecedência e mantemos você atualizado.',
      },
      {
        title: 'Serviços oferecidos para carros e utilitários',
        content:
          'Na região da João Bettega circula de tudo: carros de passeio, SUVs e utilitários leves usados no trabalho. Por isso, oferecemos uma gama completa de serviços — troca de óleo, freios, suspensão reforçada, alinhamento 3D, balanceamento, diagnóstico eletrônico e pneus de várias medidas e marcas. Seja para a manutenção preventiva do carro da família ou para manter o utilitário de trabalho sempre rodando, temos a estrutura e a experiência necessárias.',
      },
      {
        title: 'Por que escolher a Carplus na região',
        content:
          'Além da localização estratégica, oferecemos o que mais importa: orçamento transparente, garantia em todos os serviços e mais de 35 anos de experiência em diagnóstico automotivo. Somos um Pirelli Performance Center certificado, com equipamentos modernos e equipe treinada. Para quem trabalha ou mora perto da João Bettega, isso significa resolver os problemas do carro perto de casa, com a confiança de uma das oficinas mais bem avaliadas de Curitiba.',
      },
    ],
    testimonials: DEPOIMENTOS_PADRAO,
    faq: [
      { question: 'O centro automotivo fica na João Bettega?', answer: 'Estamos a poucos minutos da Av. João Bettega, no bairro Portão (Av. Presidente Arthur da Silva Bernardes, 1323), com acesso fácil para quem circula pela região.' },
      { question: 'Vocês atendem utilitários de trabalho?', answer: 'Sim. Atendemos carros de passeio, SUVs e utilitários leves, com serviços de manutenção e pneus adequados a cada tipo de uso.' },
      { question: 'O atendimento é rápido?', answer: 'Sim. Serviços como troca de óleo, balanceamento e reparos simples costumam ficar prontos no mesmo dia.' },
      { question: 'Preciso agendar?', answer: 'Atendemos por ordem de chegada e com hora marcada. Para agilizar, recomendamos agendar pelo WhatsApp (41) 3082-7282.' },
      { question: 'Quais serviços estão disponíveis?', answer: 'Troca de óleo, freios, suspensão, alinhamento 3D, balanceamento, diagnóstico eletrônico, revisão preventiva e pneus.' },
      { question: 'Tem garantia nos serviços?', answer: 'Sim, todos os serviços têm garantia com nota fiscal e peças de qualidade.' },
    ],
    ctaTitle: 'Oficina rápida e confiável perto da João Bettega',
    ctaSubtitle: 'Não perca tempo: agende seu serviço ou peça um orçamento sem compromisso. Estamos pertinho da João Bettega.',
    whatsappMessage: 'Olá! Vi a página da região da João Bettega e gostaria de um orçamento.',
  },

  // ─────────────────────────────────────────────────────────────
  // 4) Alternativa ao Sete Centro Automotivo
  // ─────────────────────────────────────────────────────────────
  {
    slug: 'alternativa-sete-centro-automotivo',
    metaTitle: 'Procurando uma Alternativa ao Sete Centro Automotivo?',
    metaDescription:
      'Conheça a Carplus, uma opção de centro automotivo em Curitiba com mecânica completa, pneus, alinhamento e garantia. Compare diferenciais e peça seu orçamento: (41) 3082-7282.',
    keywords: [
      'sete centro automotivo',
      'alternativa centro automotivo curitiba',
      'centro automotivo curitiba',
      'oficina mecânica curitiba',
    ],
    breadcrumbName: 'Alternativa de Centro Automotivo',
    eyebrow: 'Comparativo • Curitiba',
    h1: 'Compare Antes de Escolher Seu Centro Automotivo',
    heroSubtitle:
      'Antes de decidir, vale comparar. A Carplus é uma opção de centro automotivo em Curitiba com mecânica completa, pneus, garantia e atendimento transparente.',
    heroImage: '/images/loja/carplus-oficina-interior.webp',
    heroImageAlt: 'Interior do centro automotivo Carplus, uma opção em Curitiba',
    comparativeNotice:
      'Esta página possui caráter comparativo e informativo. Não há qualquer vínculo com outras empresas mencionadas.',
    benefits: BENEFICIOS_PADRAO,
    services: SERVICOS_PADRAO,
    differentials: DIFERENCIAIS_PADRAO,
    sections: [
      {
        title: 'Por que comparar opções de centro automotivo',
        content:
          'Escolher onde cuidar do seu carro é uma decisão importante e que merece comparação. Existem diversas oficinas em Curitiba — entre elas o Sete Centro Automotivo — e cada motorista tem prioridades diferentes: preço, prazo, garantia, atendimento ou proximidade. Por isso, antes de fechar, vale conhecer os diferenciais de cada opção. A Carplus se apresenta como uma alternativa de centro automotivo completo, no bairro Portão, e nesta página reunimos informações para ajudar você a decidir com tranquilidade.',
      },
      {
        title: 'Os diferenciais reais da Carplus',
        content:
          'A Carplus é um Pirelli Performance Center certificado, com equipamentos modernos e equipe liderada por um especialista com mais de 35 anos de experiência em diagnóstico automotivo. Oferecemos orçamento transparente — explicamos o que é urgente e o que pode esperar — e garantia em todos os serviços, sempre com nota fiscal. Reunimos mecânica completa, alinhamento 3D, balanceamento, diagnóstico eletrônico e a venda e montagem de pneus das melhores marcas em um só endereço.',
      },
      {
        title: 'Atendimento transparente e bem avaliado',
        content:
          'Nossa reputação é construída sobre confiança: somos uma das oficinas mais bem avaliadas de Curitiba, com nota média 4,9 no Google. Acreditamos que um bom centro automotivo não empurra serviços desnecessários — ele explica, orienta e entrega o que foi combinado. Quando você traz o carro à Carplus, recebe um diagnóstico honesto e um orçamento detalhado antes de qualquer reparo, para que a decisão seja sempre sua.',
      },
      {
        title: 'Faça sua escolha com informação',
        content:
          'Comparar é um direito seu, e a melhor escolha é a que combina com a sua necessidade. Se você valoriza estrutura completa, certificação Pirelli, garantia e atendimento transparente, vale conhecer a Carplus de perto. Estamos no bairro Portão, em Curitiba, prontos para avaliar seu veículo e apresentar um orçamento sem compromisso. Visite a loja, fale com a nossa equipe e compare — a decisão final é sempre sua.',
      },
    ],
    testimonials: DEPOIMENTOS_PADRAO,
    faq: [
      { question: 'A Carplus tem vínculo com outras empresas mencionadas?', answer: 'Não. Esta página tem caráter exclusivamente comparativo e informativo. A Carplus é uma empresa independente, sem qualquer vínculo com outras oficinas citadas.' },
      { question: 'Quais os diferenciais da Carplus?', answer: 'Certificação Pirelli Performance Center, mais de 35 anos de experiência, orçamento transparente, garantia em todos os serviços e estrutura completa de mecânica e pneus.' },
      { question: 'Onde fica a Carplus?', answer: 'Na Av. Presidente Arthur da Silva Bernardes, 1323, bairro Portão, em Curitiba.' },
      { question: 'O orçamento é gratuito?', answer: 'Sim, o orçamento é sem compromisso. Avaliamos o veículo e apresentamos os valores antes de qualquer serviço.' },
      { question: 'Quais serviços a Carplus oferece?', answer: 'Revisão preventiva, troca de óleo, freios, suspensão, alinhamento 3D, balanceamento, diagnóstico eletrônico e pneus.' },
      { question: 'A Carplus é bem avaliada?', answer: 'Sim. A Carplus tem nota média 4,9 no Google e centenas de clientes satisfeitos em Curitiba.' },
    ],
    ctaTitle: 'Conheça a Carplus e compare por conta própria',
    ctaSubtitle: 'Peça um orçamento sem compromisso e avalie nossos diferenciais. A decisão final é sempre sua.',
    whatsappMessage: 'Olá! Estou comparando centros automotivos em Curitiba e gostaria de um orçamento da Carplus.',
  },

  // ─────────────────────────────────────────────────────────────
  // 5) Alternativa ao DW Centro Automotivo
  // ─────────────────────────────────────────────────────────────
  {
    slug: 'alternativa-dw-centro-automotivo',
    metaTitle: 'Conheça Outra Opção ao DW Centro Automotivo em Curitiba',
    metaDescription:
      'A Carplus é uma opção de centro automotivo em Curitiba: mecânica completa, pneus, alinhamento, balanceamento e garantia. Conheça os diferenciais e peça orçamento: (41) 3082-7282.',
    keywords: [
      'dw centro automotivo',
      'alternativa centro automotivo curitiba',
      'centro automotivo curitiba',
      'oficina mecânica curitiba',
    ],
    breadcrumbName: 'Outra Opção de Centro Automotivo',
    eyebrow: 'Comparativo • Curitiba',
    h1: 'Uma Alternativa para Quem Busca Serviços Automotivos de Qualidade',
    heroSubtitle:
      'Procurando serviços automotivos de qualidade em Curitiba? Conheça a Carplus, um centro automotivo completo com garantia e atendimento transparente.',
    heroImage: '/images/loja/oficina-carplus-pneus.webp',
    heroImageAlt: 'Centro automotivo Carplus, uma opção de qualidade em Curitiba',
    comparativeNotice:
      'Esta página possui caráter comparativo e informativo. Não há qualquer vínculo com outras empresas mencionadas.',
    benefits: BENEFICIOS_PADRAO,
    services: SERVICOS_PADRAO,
    differentials: DIFERENCIAIS_PADRAO,
    sections: [
      {
        title: 'Outra opção de centro automotivo em Curitiba',
        content:
          'O mercado de centros automotivos em Curitiba é amplo e oferece várias opções ao motorista — entre elas o DW Centro Automotivo. Quando o assunto é a saúde do seu veículo, ter alternativas para comparar é sempre positivo. A Carplus se posiciona como uma opção de centro automotivo completo, no bairro Portão, reunindo mecânica, pneus e serviços especializados com foco em qualidade e confiança. Nesta página, apresentamos nossos diferenciais para ajudar você a tomar a melhor decisão.',
      },
      {
        title: 'Serviços automotivos de qualidade em um só lugar',
        content:
          'Qualidade, para nós, começa pela estrutura. Somos um Pirelli Performance Center certificado, com alinhamento 3D, scanner de diagnóstico eletrônico e ferramentas modernas. Oferecemos troca de óleo, revisão de freios e suspensão, balanceamento, revisão preventiva e a montagem de pneus das melhores marcas. Reunir tudo em um só endereço economiza o seu tempo e garante que cada serviço seja feito por quem realmente entende de carros nacionais e importados.',
      },
      {
        title: 'Garantia, experiência e transparência',
        content:
          'Mais de 35 anos de experiência em diagnóstico automotivo dão à nossa equipe a segurança de identificar problemas com precisão e resolver na primeira tentativa. Todos os serviços têm garantia, com nota fiscal e peças de qualidade. E, antes de qualquer reparo, apresentamos um orçamento detalhado e transparente — você só autoriza o que faz sentido para o seu carro e para o seu bolso. Essa postura honesta é o que mantém nossa avaliação em 4,9 no Google.',
      },
      {
        title: 'Visite a Carplus e compare',
        content:
          'A melhor forma de avaliar um centro automotivo é conhecê-lo de perto. Estamos no bairro Portão, em Curitiba, com fácil acesso de toda a cidade e da região metropolitana. Traga seu veículo para uma avaliação, converse com a nossa equipe e peça um orçamento sem compromisso. Comparar opções é inteligente, e queremos que você escolha com base em informação e confiança — a decisão final é sempre sua.',
      },
    ],
    testimonials: DEPOIMENTOS_PADRAO,
    faq: [
      { question: 'A Carplus tem vínculo com outras empresas mencionadas?', answer: 'Não. Esta página tem caráter comparativo e informativo. A Carplus é uma empresa independente, sem qualquer vínculo comercial com outras oficinas citadas.' },
      { question: 'O que torna a Carplus uma boa opção?', answer: 'Certificação Pirelli Performance Center, mais de 35 anos de experiência, garantia em todos os serviços, orçamento transparente e estrutura completa de mecânica e pneus.' },
      { question: 'Quais serviços a Carplus oferece?', answer: 'Troca de óleo, freios, suspensão, alinhamento 3D, balanceamento, diagnóstico eletrônico, revisão preventiva e pneus.' },
      { question: 'Onde fica a Carplus?', answer: 'Na Av. Presidente Arthur da Silva Bernardes, 1323, bairro Portão, em Curitiba.' },
      { question: 'Os serviços têm garantia?', answer: 'Sim, todos os serviços têm garantia, com nota fiscal e peças de qualidade.' },
      { question: 'Como peço um orçamento?', answer: 'Pelo WhatsApp (41) 3082-7282 ou presencialmente na loja, no bairro Portão. O orçamento é sem compromisso.' },
    ],
    ctaTitle: 'Conheça a Carplus e decida com confiança',
    ctaSubtitle: 'Peça um orçamento sem compromisso e avalie nossos diferenciais de qualidade. A decisão final é sua.',
    whatsappMessage: 'Olá! Estou pesquisando centros automotivos em Curitiba e gostaria de um orçamento da Carplus.',
  },

  // ─────────────────────────────────────────────────────────────
  // 6) Veículos MAN
  // ─────────────────────────────────────────────────────────────
  {
    slug: 'oficina-veiculos-man',
    metaTitle: 'Oficina Especializada em Veículos MAN em Curitiba',
    metaDescription:
      'Manutenção especializada para veículos MAN em Curitiba: manutenção preventiva, diagnóstico, revisão e serviços especializados. Orçamento no WhatsApp (41) 3082-7282.',
    keywords: [
      'centro automotivo man',
      'oficina veículos man curitiba',
      'manutenção man curitiba',
      'revisão man',
      'mecânica man curitiba',
    ],
    breadcrumbName: 'Oficina Veículos MAN',
    eyebrow: 'Veículos MAN • Curitiba',
    h1: 'Manutenção Especializada para Veículos MAN',
    heroSubtitle:
      'Diagnóstico, manutenção preventiva e revisão para veículos MAN em Curitiba, com equipamentos modernos e equipe experiente. Mantenha sua frota rodando.',
    heroImage: '/images/centro-automotivo/oficina-elevadores.webp',
    heroImageAlt: 'Oficina especializada em veículos MAN em Curitiba',
    benefits: [
      { icon: 'clock', title: 'Menos Tempo Parado', description: 'Diagnóstico ágil para reduzir o tempo de imobilização do veículo.' },
      { icon: 'users', title: 'Equipe Experiente', description: 'Profissionais habituados a veículos robustos e de trabalho.' },
      { icon: 'gauge', title: 'Diagnóstico Eletrônico', description: 'Leitura de falhas e sistemas eletrônicos com scanner moderno.' },
      { icon: 'shield', title: 'Garantia dos Serviços', description: 'Reparos com garantia, nota fiscal e peças de qualidade.' },
    ],
    services: [
      { icon: 'badgeCheck', name: 'Manutenção Preventiva', description: 'Planos de manutenção para evitar paradas inesperadas.', link: '/servicos' },
      { icon: 'gauge', name: 'Diagnóstico Eletrônico', description: 'Leitura de falhas e checagem dos sistemas eletrônicos.', link: '/servico/injecao-eletronica' },
      { icon: 'wrench', name: 'Troca de Óleo e Filtros', description: 'Lubrificantes e filtros adequados à especificação do veículo.', link: '/servico/troca-de-oleo' },
      { icon: 'shield', name: 'Freios', description: 'Revisão e manutenção completa do sistema de frenagem.', link: '/servico/troca-de-pastilha-de-freio' },
      { icon: 'gauge', name: 'Suspensão', description: 'Componentes de suspensão para uso intenso e cargas.', link: '/servico/troca-de-amortecedor' },
      { icon: 'truck', name: 'Pneus', description: 'Montagem e balanceamento de pneus para veículos pesados e utilitários.', link: '/pneus' },
    ],
    differentials: [
      { icon: 'award', title: 'Estrutura Especializada', description: 'Equipamentos modernos preparados para veículos robustos.' },
      { icon: 'users', title: '+35 Anos de Experiência', description: 'Especialista em diagnóstico com mais de três décadas de atuação.' },
      { icon: 'shield', title: 'Orçamento Transparente', description: 'Avaliação detalhada antes de qualquer serviço, sem surpresas.' },
      { icon: 'gauge', title: 'Diagnóstico de Precisão', description: 'Scanner eletrônico para identificar falhas com exatidão.' },
    ],
    sections: [
      {
        title: 'Manutenção especializada para veículos MAN',
        content:
          'Os veículos MAN são reconhecidos pela robustez e pela tecnologia embarcada, e exigem manutenção feita com critério para manter o desempenho e a confiabilidade. Na Carplus, em Curitiba, oferecemos atendimento especializado para veículos MAN, unindo diagnóstico eletrônico de precisão, manutenção preventiva e a experiência de uma equipe acostumada a lidar com veículos de trabalho. O objetivo é simples: manter o seu MAN rodando com segurança e reduzir ao máximo o tempo parado.',
      },
      {
        title: 'Manutenção preventiva que evita prejuízos',
        content:
          'Para quem depende do veículo para trabalhar, cada dia parado representa prejuízo. Por isso, a manutenção preventiva é fundamental nos veículos MAN. Verificamos óleo e filtros, sistema de arrefecimento, freios, suspensão e os principais pontos de desgaste, sempre seguindo os intervalos recomendados. Identificar e corrigir problemas antes que se agravem é o caminho mais econômico para manter a confiabilidade e prolongar a vida útil do veículo.',
      },
      {
        title: 'Diagnóstico eletrônico e revisão',
        content:
          'A eletrônica embarcada dos veículos MAN exige um diagnóstico preciso. Com scanner moderno, fazemos a leitura de falhas e a checagem dos sistemas, identificando a origem do problema sem tentativa e erro. A revisão completa cobre os itens essenciais de segurança e desempenho, e tudo é executado com orçamento transparente: você sabe exatamente o que será feito e por quê, antes de autorizar qualquer serviço.',
      },
      {
        title: 'Serviços especializados em Curitiba',
        content:
          'Além da manutenção e do diagnóstico, oferecemos serviços especializados como revisão de freios, suspensão preparada para uso intenso, troca de óleo e filtros e montagem e balanceamento de pneus. Nossa estrutura no bairro Portão, em Curitiba, conta com equipamentos modernos e equipe experiente. Se você procura uma oficina de confiança para o seu veículo MAN, fale com a nossa equipe e solicite um orçamento sem compromisso.',
      },
    ],
    testimonials: DEPOIMENTOS_PADRAO,
    faq: [
      { question: 'A Carplus atende veículos MAN?', answer: 'Sim. Oferecemos manutenção preventiva, diagnóstico eletrônico, revisão e serviços especializados para veículos MAN em Curitiba.' },
      { question: 'Vocês fazem diagnóstico eletrônico em veículos MAN?', answer: 'Sim, utilizamos scanner moderno para leitura de falhas e checagem dos sistemas eletrônicos do veículo.' },
      { question: 'Como funciona a manutenção preventiva?', answer: 'Seguimos os intervalos recomendados, verificando óleo, filtros, arrefecimento, freios e suspensão para evitar paradas inesperadas.' },
      { question: 'Quanto tempo o veículo fica parado?', answer: 'Buscamos reduzir ao máximo o tempo de imobilização. Após o diagnóstico, informamos o prazo estimado antes de iniciar o serviço.' },
      { question: 'Os serviços têm garantia?', answer: 'Sim, todos os serviços têm garantia, com nota fiscal e peças de qualidade.' },
      { question: 'Onde fica a oficina?', answer: 'Na Av. Presidente Arthur da Silva Bernardes, 1323, bairro Portão, em Curitiba.' },
    ],
    ctaTitle: 'Mantenha seu veículo MAN sempre rodando',
    ctaSubtitle: 'Agende uma avaliação ou peça um orçamento sem compromisso para o seu veículo MAN em Curitiba.',
    whatsappMessage: 'Olá! Tenho um veículo MAN e gostaria de um orçamento de manutenção.',
  },

  // ─────────────────────────────────────────────────────────────
  // 7) Centro Automotivo Perto de Mim
  // ─────────────────────────────────────────────────────────────
  {
    slug: 'centro-automotivo-perto-de-mim',
    metaTitle: 'Centro Automotivo Perto de Mim em Curitiba',
    metaDescription:
      'Centro automotivo perto de você em Curitiba: mecânica, pneus, alinhamento, balanceamento e revisão. Veja o endereço, telefone e como chegar. WhatsApp (41) 3082-7282.',
    keywords: [
      'centro automotivo perto de mim',
      'oficina mecânica perto de mim curitiba',
      'centro automotivo próximo',
      'mecânica perto de mim curitiba',
    ],
    breadcrumbName: 'Centro Automotivo Perto de Mim',
    eyebrow: 'Perto de você • Curitiba',
    h1: 'Procurando um Centro Automotivo Próximo?',
    heroSubtitle:
      'A Carplus é o centro automotivo perto de você em Curitiba. Mecânica completa, pneus e revisão no bairro Portão, com fácil acesso de toda a cidade.',
    heroImage: '/images/loja/carplus-oficina-portao.webp',
    heroImageAlt: 'Centro automotivo perto de você no bairro Portão em Curitiba',
    benefits: BENEFICIOS_PADRAO,
    services: SERVICOS_PADRAO,
    differentials: DIFERENCIAIS_PADRAO,
    sections: [
      {
        title: 'Um centro automotivo perto de você',
        content:
          'Quando o carro precisa de atenção, ninguém quer rodar a cidade inteira atrás de uma oficina. Buscar um “centro automotivo perto de mim” é a forma mais rápida de encontrar atendimento de confiança sem perder tempo. A Carplus fica no bairro Portão, em Curitiba, em um ponto de fácil acesso e bem conectado às principais vias da cidade. Estamos pertinho de quem mora ou trabalha na região sul e central, e recebemos clientes de toda a capital e da região metropolitana.',
      },
      {
        title: 'Bairros e regiões que atendemos',
        content:
          'Por estarmos no Portão, atendemos com facilidade motoristas da Água Verde, Fazendinha, Novo Mundo, Santa Quitéria, Capão Raso, Cidade Industrial, Vila Izabel, Guaíra e Lindóia, além do Centro e do Batel, que ficam a poucos minutos. Também recebemos clientes de cidades vizinhas como Araucária, Fazenda Rio Grande, São José dos Pinhais, Colombo e Pinhais. Não importa de onde você vem: chegar até a Carplus é simples e rápido.',
      },
      {
        title: 'Como chegar, endereço e contato',
        content:
          'Nosso endereço é Avenida Presidente Arthur da Silva Bernardes, 1323, bairro Portão, Curitiba – PR. Você pode usar o mapa abaixo para traçar a rota a partir da sua localização. Para falar com a gente, ligue ou mande mensagem no WhatsApp (41) 3082-7282 — atendemos de segunda a sexta das 8h às 18h e aos sábados das 8h às 13h. Se preferir, agende o horário para ser atendido com ainda mais agilidade.',
      },
      {
        title: 'Tudo o que seu carro precisa por perto',
        content:
          'Ter um centro automotivo completo por perto significa resolver vários serviços em uma única parada: troca de óleo, freios, suspensão, alinhamento 3D, balanceamento, diagnóstico eletrônico, revisão preventiva e pneus das melhores marcas. Somos um Pirelli Performance Center certificado, com garantia em todos os serviços e orçamento transparente. Da próxima vez que pesquisar por um centro automotivo perto de você em Curitiba, conte com a Carplus.',
      },
    ],
    testimonials: DEPOIMENTOS_PADRAO,
    faq: [
      { question: 'Qual o endereço do centro automotivo?', answer: 'Av. Presidente Arthur da Silva Bernardes, 1323, bairro Portão, Curitiba – PR.' },
      { question: 'Quais bairros vocês atendem?', answer: 'Atendemos toda Curitiba, com facilidade para quem vem da Água Verde, Fazendinha, Novo Mundo, Capão Raso, CIC, Centro e Batel, além da região metropolitana.' },
      { question: 'Qual o telefone e WhatsApp?', answer: 'O contato é (41) 3082-7282, disponível também no WhatsApp para orçamentos e agendamentos.' },
      { question: 'Qual o horário de funcionamento?', answer: 'De segunda a sexta das 8h às 18h e aos sábados das 8h às 13h.' },
      { question: 'Preciso agendar?', answer: 'Atendemos por ordem de chegada e com hora marcada. Para mais agilidade, agende pelo WhatsApp (41) 3082-7282.' },
      { question: 'Tem estacionamento?', answer: 'Sim, há acesso fácil e opções de estacionamento próximas à loja, no bairro Portão.' },
    ],
    ctaTitle: 'O centro automotivo perto de você em Curitiba',
    ctaSubtitle: 'Veja como chegar, agende seu horário ou peça um orçamento sem compromisso. Estamos pertinho de você, no Portão.',
    whatsappMessage: 'Olá! Procurei um centro automotivo perto de mim e gostaria de um orçamento.',
  },
];

/** Lookup rápido por slug. */
export function getCentroAutomotivoPage(slug: string): CentroAutomotivoPage | undefined {
  return CENTRO_AUTOMOTIVO_PAGES.find((p) => p.slug === slug);
}
