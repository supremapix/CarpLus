import { GOOGLE_REVIEW_SUMMARY } from './reviewSummary';
export interface FaqItem {
  question: string;
  answer: string;
}

export function getFaqBairro(nome: string, tempo: string, via: string): FaqItem[] {
  return [
    {
      question: `Tem loja de pneus perto do ${nome}?`,
      answer: `A Carplus atende na Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Para quem vem de ${nome}, consulte o trajeto no mapa e confirme a medida, a disponibilidade do pneu e os valores dos serviços antes de vir.`,
    },
    {
      question: `Como chegar do ${nome} até a Carplus no Portão?`,
      answer: `Abra o mapa com origem no seu endereço e destino na Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Rotas e tempos variam conforme o trânsito. Confirme a agenda pelo WhatsApp (41) 3082-7282.`,
    },
    {
      question: `A Carplus atende moradores do ${nome}?`,
      answer: `Quem mora em ${nome} pode consultar o atendimento na unidade do Portão, em Curitiba. A Carplus não tem uma unidade em cada região citada. Informe seu veículo e a necessidade para conferir os serviços e a agenda.`,
    },
    {
      question: `Qual oficina mecânica atende quem mora no ${nome}?`,
      answer: `A unidade da Carplus no Portão, Curitiba, recebe consultas de quem vem de ${nome} para pneus, alinhamento, balanceamento, óleo, freios e suspensão. A indicação do serviço depende da avaliação dos sintomas e do veículo.`,
    },
    {
      question: `Vale a pena sair do ${nome} para trocar pneu na Carplus?`,
      answer: `Compare a especificação do pneu, o orçamento e o deslocamento desde seu endereço. As avaliações da Carplus no Google somavam ${GOOGLE_REVIEW_SUMMARY.count}, com nota ${GOOGLE_REVIEW_SUMMARY.ratingDisplay}, em ${GOOGLE_REVIEW_SUMMARY.checkedDateDisplay}; elas não identificam todos os clientes como moradores de ${nome}.`,
    },
    {
      question: `A Carplus faz alinhamento e balanceamento para quem vem do ${nome}?`,
      answer: `Consulte a avaliação de alinhamento e balanceamento na unidade do Portão. Informe modelo, ano, versão e sintomas; a necessidade de ajustes depende da inspeção. Confirme a agenda antes de se deslocar.`,
    },
    {
      question: `Quanto custa trocar pneu vindo do ${nome}?`,
      answer: `Os valores dependem da medida, do modelo do pneu e dos serviços necessários. Envie a especificação, ano e versão do veículo pelo WhatsApp (41) 3082-7282 para consultar disponibilidade, orçamento e condições de pagamento.`,
    },
    {
      question: `Quais marcas de pneus a Carplus tem para moradores do ${nome}?`,
      answer: `O catálogo reúne marcas como Pirelli, Michelin, Goodyear, Continental, Firestone, Bridgestone e Yokohama. Confirme a aplicação pelo manual, a disponibilidade da medida e as condições de instalação e garantia antes de comprar.`,
    },
    {
      question: `A Carplus aceita cartão e parcela para clientes do ${nome}?`,
      answer: `Consulte as formas de pagamento e as condições de parcelamento vigentes no orçamento. A consulta é feita com a mesma unidade do Portão, em Curitiba, independentemente da sua região de origem.`,
    },
    {
      question: `Preciso agendar para ir do ${nome} à Carplus?`,
      answer: `Antes de sair de ${nome}, consulte a agenda e a disponibilidade pelo WhatsApp (41) 3082-7282. Confira o trajeto atualizado no mapa para a Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba.`,
    },
  ];
}

// FAQ extra específico por bairro com conteúdo semântico focado em SEO
const faqExtra: Record<string, FaqItem[]> = {
  'portao': [
    {
      question: 'A Carplus fica no Portão mesmo?',
      answer: 'A Carplus fica na Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Consulte o mapa a partir do seu endereço: o tempo e o trajeto dependem do trânsito. Antes de vir, confirme a disponibilidade e a agenda pelo WhatsApp (41) 3082-7282.',
    },
    {
      question: 'Tem oficina perto do Shopping Palladium?',
      answer: 'A Carplus fica na Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Consulte o mapa a partir do seu endereço: o tempo e o trajeto dependem do trânsito. Antes de vir, confirme a disponibilidade e a agenda pelo WhatsApp (41) 3082-7282.',
    },
  ],
  'agua-verde': [
    {
      question: 'Qual o caminho do Água Verde até a Carplus?',
      answer: 'A Carplus fica na Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Consulte o mapa a partir do seu endereço: o tempo e o trajeto dependem do trânsito. Antes de vir, confirme a disponibilidade e a agenda pelo WhatsApp (41) 3082-7282.',
    },
    {
      question: 'A Carplus atende carros executivos do Água Verde?',
      answer: 'Informe o modelo, ano, versão, medida e índices exigidos no manual para pesquisar as opções do catálogo. A aplicação e a disponibilidade precisam ser confirmadas antes de comprar; a região onde você mora não determina o pneu recomendado.',
    },
  ],
  'campo-comprido': [
    {
      question: 'A Carplus atende SUVs e picapes do Campo Comprido?',
      answer: 'Informe o modelo, ano, versão, medida e índices exigidos no manual para pesquisar as opções do catálogo. A aplicação e a disponibilidade precisam ser confirmadas antes de comprar; a região onde você mora não determina o pneu recomendado.',
    },
    {
      question: 'Qual pneu é melhor para SUV no Campo Comprido?',
      answer: 'Informe o modelo, ano, versão, medida e índices exigidos no manual para pesquisar as opções do catálogo. A aplicação e a disponibilidade precisam ser confirmadas antes de comprar; a região onde você mora não determina o pneu recomendado.',
    },
  ],
  'cic': [
    {
      question: 'A Carplus atende frotas de empresas do CIC?',
      answer: 'Consulte a equipe da unidade do Portão sobre os veículos da empresa, os serviços necessários, a agenda e as condições do orçamento pelo WhatsApp (41) 3082-7282.',
    },
    {
      question: 'A Carplus tem pneus para vans e utilitários do CIC?',
      answer: 'Sim! Trabalhamos com pneus para vans (Ducato, Master, Sprinter) e utilitários leves (HR, Daily, Bongo). Marcas como Pirelli Chrono, Michelin Agilis e Goodyear Cargo para veículos de trabalho.',
    },
  ],
  'batel': [
    {
      question: 'Para carros de luxo do Batel, quais pneus premium a Carplus tem?',
      answer: 'Informe o modelo, ano, versão, medida e índices exigidos no manual para pesquisar as opções do catálogo. A aplicação e a disponibilidade precisam ser confirmadas antes de comprar; a região onde você mora não determina o pneu recomendado.',
    },
    {
      question: 'A Carplus atende BMW e Mercedes do Batel?',
      answer: 'Informe o modelo, ano, versão, medida e índices exigidos no manual para pesquisar as opções do catálogo. A aplicação e a disponibilidade precisam ser confirmadas antes de comprar; a região onde você mora não determina o pneu recomendado.',
    },
  ],
  'centro': [
    {
      question: 'Vale a pena sair do Centro de Curitiba para ir à Carplus?',
      answer: 'A Carplus fica na Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Consulte o mapa a partir do seu endereço: o tempo e o trajeto dependem do trânsito. Antes de vir, confirme a disponibilidade e a agenda pelo WhatsApp (41) 3082-7282.',
    },
  ],
  'colombo': [
    {
      question: 'Vale a pena vir de Colombo até a Carplus?',
      answer: 'A Carplus fica na Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Consulte o mapa a partir do seu endereço: o tempo e o trajeto dependem do trânsito. Antes de vir, confirme a disponibilidade e a agenda pelo WhatsApp (41) 3082-7282.',
    },
    {
      question: 'Tem loja de pneus em Colombo que seja boa?',
      answer: 'A Carplus fica na Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Consulte o mapa a partir do seu endereço: o tempo e o trajeto dependem do trânsito. Antes de vir, confirme a disponibilidade e a agenda pelo WhatsApp (41) 3082-7282.',
    },
  ],
  'sao-jose-dos-pinhais': [
    {
      question: 'A Carplus atende quem vem de São José dos Pinhais?',
      answer: 'A Carplus fica na Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Consulte o mapa a partir do seu endereço: o tempo e o trajeto dependem do trânsito. Antes de vir, confirme a disponibilidade e a agenda pelo WhatsApp (41) 3082-7282.',
    },
    {
      question: 'Tem loja de pneus boa perto do aeroporto de Curitiba?',
      answer: 'A Carplus fica na Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Consulte o mapa a partir do seu endereço: o tempo e o trajeto dependem do trânsito. Antes de vir, confirme a disponibilidade e a agenda pelo WhatsApp (41) 3082-7282.',
    },
  ],
  'pinhais': [
    {
      question: 'De Pinhais até a Carplus demora quanto tempo?',
      answer: 'A Carplus fica na Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Consulte o mapa a partir do seu endereço: o tempo e o trajeto dependem do trânsito. Antes de vir, confirme a disponibilidade e a agenda pelo WhatsApp (41) 3082-7282.',
    },
  ],
  'araucaria': [
    {
      question: 'A Carplus atende empresas de Araucária?',
      answer: 'Consulte a equipe da unidade do Portão sobre os veículos da empresa, os serviços necessários, a agenda e as condições do orçamento pelo WhatsApp (41) 3082-7282.',
    },
  ],
  'santa-felicidade': [
    {
      question: 'De Santa Felicidade, qual o melhor caminho para a Carplus?',
      answer: 'A Carplus fica na Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Consulte o mapa a partir do seu endereço: o tempo e o trajeto dependem do trânsito. Antes de vir, confirme a disponibilidade e a agenda pelo WhatsApp (41) 3082-7282.',
    },
  ],
  'capao-raso': [
    {
      question: 'A Carplus fica perto do Terminal Capão Raso?',
      answer: 'A Carplus fica na Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Consulte o mapa a partir do seu endereço: o tempo e o trajeto dependem do trânsito. Antes de vir, confirme a disponibilidade e a agenda pelo WhatsApp (41) 3082-7282.',
    },
  ],
  'cajuru': [
    {
      question: 'Do Cajuru, como chegar na Carplus?',
      answer: 'A Carplus fica na Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Consulte o mapa a partir do seu endereço: o tempo e o trajeto dependem do trânsito. Antes de vir, confirme a disponibilidade e a agenda pelo WhatsApp (41) 3082-7282.',
    },
  ],
  'uberaba': [
    {
      question: 'A Carplus atende moradores do Uberaba?',
      answer: 'A Carplus fica na Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Consulte o mapa a partir do seu endereço: o tempo e o trajeto dependem do trânsito. Antes de vir, confirme a disponibilidade e a agenda pelo WhatsApp (41) 3082-7282.',
    },
  ],
  'bacacheri': [
    {
      question: 'Tem oficina boa perto do aeroporto do Bacacheri?',
      answer: 'A Carplus fica na Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Consulte o mapa a partir do seu endereço: o tempo e o trajeto dependem do trânsito. Antes de vir, confirme a disponibilidade e a agenda pelo WhatsApp (41) 3082-7282.',
    },
  ],
  'boa-vista': [
    {
      question: 'De Boa Vista, vale a pena ir até a Carplus?',
      answer: 'A Carplus fica na Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Consulte o mapa a partir do seu endereço: o tempo e o trajeto dependem do trânsito. Antes de vir, confirme a disponibilidade e a agenda pelo WhatsApp (41) 3082-7282.',
    },
  ],
  'santa-candida': [
    {
      question: 'A Carplus atende quem vem de Santa Cândida?',
      answer: 'A Carplus fica na Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Consulte o mapa a partir do seu endereço: o tempo e o trajeto dependem do trânsito. Antes de vir, confirme a disponibilidade e a agenda pelo WhatsApp (41) 3082-7282.',
    },
  ],
  'jardim-botanico': [
    {
      question: 'Do Jardim Botânico até a Carplus é longe?',
      answer: 'A Carplus fica na Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Consulte o mapa a partir do seu endereço: o tempo e o trajeto dependem do trânsito. Antes de vir, confirme a disponibilidade e a agenda pelo WhatsApp (41) 3082-7282.',
    },
  ],
  'bigorrilho': [
    {
      question: 'A Carplus tem pneus para carros importados do Bigorrilho?',
      answer: 'A Carplus fica na Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Consulte o mapa a partir do seu endereço: o tempo e o trajeto dependem do trânsito. Antes de vir, confirme a disponibilidade e a agenda pelo WhatsApp (41) 3082-7282.',
    },
  ],
  'merces': [
    {
      question: 'Das Mercês, como chegar na Carplus?',
      answer: 'A Carplus fica na Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Consulte o mapa a partir do seu endereço: o tempo e o trajeto dependem do trânsito. Antes de vir, confirme a disponibilidade e a agenda pelo WhatsApp (41) 3082-7282.',
    },
  ],
  'reboucas': [
    {
      question: 'Do Rebouças até a Carplus demora muito?',
      answer: 'A Carplus fica na Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Consulte o mapa a partir do seu endereço: o tempo e o trajeto dependem do trânsito. Antes de vir, confirme a disponibilidade e a agenda pelo WhatsApp (41) 3082-7282.',
    },
  ],
  'novo-mundo': [
    {
      question: 'Tem loja de pneus perto do Novo Mundo?',
      answer: 'A Carplus fica na Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Consulte o mapa a partir do seu endereço: o tempo e o trajeto dependem do trânsito. Antes de vir, confirme a disponibilidade e a agenda pelo WhatsApp (41) 3082-7282.',
    },
  ],
  'fazendinha': [
    {
      question: 'Da Fazendinha, como chegar na Carplus?',
      answer: 'A Carplus fica na Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Consulte o mapa a partir do seu endereço: o tempo e o trajeto dependem do trânsito. Antes de vir, confirme a disponibilidade e a agenda pelo WhatsApp (41) 3082-7282.',
    },
  ],
  'pinheirinho': [
    {
      question: 'Do Pinheirinho até a Carplus é longe?',
      answer: 'A Carplus fica na Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Consulte o mapa a partir do seu endereço: o tempo e o trajeto dependem do trânsito. Antes de vir, confirme a disponibilidade e a agenda pelo WhatsApp (41) 3082-7282.',
    },
  ],
  'guaira': [
    {
      question: 'A Carplus fica perto do Guaíra?',
      answer: 'A Carplus fica na Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Consulte o mapa a partir do seu endereço: o tempo e o trajeto dependem do trânsito. Antes de vir, confirme a disponibilidade e a agenda pelo WhatsApp (41) 3082-7282.',
    },
  ],
  'parolin': [
    {
      question: 'Do Parolin, qual o caminho para a Carplus?',
      answer: 'A Carplus fica na Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Consulte o mapa a partir do seu endereço: o tempo e o trajeto dependem do trânsito. Antes de vir, confirme a disponibilidade e a agenda pelo WhatsApp (41) 3082-7282.',
    },
  ],
  'campo-largo': [
    {
      question: 'Vale a pena vir de Campo Largo para trocar pneu?',
      answer: 'A Carplus fica na Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Consulte o mapa a partir do seu endereço: o tempo e o trajeto dependem do trânsito. Antes de vir, confirme a disponibilidade e a agenda pelo WhatsApp (41) 3082-7282.',
    },
  ],
  'almirante-tamandare': [
    {
      question: 'A Carplus atende Almirante Tamandaré?',
      answer: 'A Carplus fica na Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Consulte o mapa a partir do seu endereço: o tempo e o trajeto dependem do trânsito. Antes de vir, confirme a disponibilidade e a agenda pelo WhatsApp (41) 3082-7282.',
    },
  ],
  'fazenda-rio-grande': [
    {
      question: 'De Fazenda Rio Grande até a Carplus demora muito?',
      answer: 'A Carplus fica na Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Consulte o mapa a partir do seu endereço: o tempo e o trajeto dependem do trânsito. Antes de vir, confirme a disponibilidade e a agenda pelo WhatsApp (41) 3082-7282.',
    },
  ],
};

export function getFaqCompleto(nome: string, slug: string, tempo: string, via: string): FaqItem[] {
  const gerais = getFaqBairro(nome, tempo, via);
  const extras = faqExtra[slug] || [];
  return [...gerais, ...extras];
}
