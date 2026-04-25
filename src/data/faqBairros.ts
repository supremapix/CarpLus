export interface FaqItem {
  question: string;
  answer: string;
}

export function getFaqBairro(nome: string, tempo: string, via: string): FaqItem[] {
  return [
    {
      question: `Tem loja de pneus perto do ${nome}?`,
      answer: `Sim! A Carplus Auto Center fica a apenas ${tempo} de carro do ${nome}, na Av. Arthur da Silva Bernardes, 1323 – Portão, Curitiba. Vendemos pneus Pirelli, Michelin, Goodyear, Continental, Firestone e Bridgestone com montagem e balanceamento inclusos.`,
    },
    {
      question: `Como chegar do ${nome} até a Carplus no Portão?`,
      answer: `Do ${nome} até a Carplus são aproximadamente ${tempo} de carro via ${via}. Não precisa agendar, pode vir direto! Horário: Seg–Sex das 8h às 18h e Sábados das 8h às 13h.`,
    },
    {
      question: `A Carplus atende moradores do ${nome}?`,
      answer: `Com certeza! Recebemos clientes do ${nome} com frequência. A distância é pequena e o custo-benefício compensa muito a viagem até o Portão — pneus das melhores marcas, parcelamento em 10x e serviço full service.`,
    },
    {
      question: `Qual oficina mecânica atende quem mora no ${nome}?`,
      answer: `A Carplus Auto Center é a oficina full service mais recomendada para quem mora no ${nome}. Realizamos alinhamento 3D, balanceamento, troca de óleo, revisão completa, suspensão, freios, ar-condicionado e diagnóstico eletrônico — tudo em um só lugar, a ${tempo} do ${nome}.`,
    },
    {
      question: `Vale a pena sair do ${nome} para trocar pneu na Carplus?`,
      answer: `Sim, e muitos clientes do ${nome} confirmam nas nossas avaliações (4,9 ⭐ no Google). Com ${tempo} de deslocamento, você tem acesso às melhores marcas de pneus, serviço profissional com garantia de fábrica e parcelamento em até 10x sem juros.`,
    },
    {
      question: `A Carplus faz alinhamento e balanceamento para quem vem do ${nome}?`,
      answer: `Sim! Nosso equipamento de alinhamento é computadorizado 3D, o mais preciso do mercado. Atendemos todos os modelos de carros e fazemos balanceamento de rodas. Clientes do ${nome} podem vir sem agendamento ou ligar antes: (41) 3082-7282.`,
    },
    {
      question: `Quanto custa trocar pneu vindo do ${nome}?`,
      answer: `Os preços variam por marca e medida. Trabalhamos com opções a partir de R$ 269,00 e parcelamos em até 10x sem juros. Para moradores do ${nome}, envie uma mensagem no WhatsApp (41) 3082-7282 com a medida do seu pneu para um orçamento rápido.`,
    },
  ];
}

const faqExtra: Record<string, FaqItem[]> = {
  'agua-verde': [
    {
      question: 'Qual o caminho do Água Verde até a Carplus?',
      answer: 'Do Água Verde, siga pela Av. República Argentina até a Av. Arthur da Silva Bernardes. São apenas 5 minutos de carro sem trânsito intenso.',
    },
  ],
  'campo-comprido': [
    {
      question: 'A Carplus atende SUVs e picapes do Campo Comprido?',
      answer: 'Sim! Trabalhamos com todos os aros incluindo 18, 19, 20 e 22 — comuns em SUVs. Temos pneus Pirelli Scorpion, Michelin CrossClimate e Goodyear Wrangler.',
    },
  ],
  'cic': [
    {
      question: 'A Carplus atende frotas de empresas do CIC?',
      answer: 'Sim! Temos condições especiais para frotas empresariais do CIC: contratos de manutenção preventiva, troca de pneus em quantidade e revisões periódicas com nota fiscal. Contato: (41) 3082-7282.',
    },
  ],
  'batel': [
    {
      question: 'Para carros de luxo do Batel, quais pneus premium a Carplus tem?',
      answer: 'Para veículos premium do Batel, trabalhamos com Pirelli P Zero, Michelin Pilot Sport 4, Continental SportContact e Goodyear Eagle F1. Alta performance com serviço especializado.',
    },
  ],
  'colombo': [
    {
      question: 'Vale a pena vir de Colombo até a Carplus?',
      answer: 'Sim! Muitos clientes de Colombo escolhem a Carplus pela variedade de marcas e qualidade do serviço. São cerca de 30 minutos pela PR-417. Parcelamos em até 10x e a montagem é inclusa.',
    },
  ],
  'sao-jose-dos-pinhais': [
    {
      question: 'A Carplus atende quem vem de São José dos Pinhais?',
      answer: 'Sim! A rota mais comum é pela BR-376 → contorno sul → acesso ao Portão. Cerca de 30 minutos. Com tanta variedade de pneus e serviços full service, vale muito o deslocamento.',
    },
  ],
};

export function getFaqCompleto(nome: string, slug: string, tempo: string, via: string): FaqItem[] {
  const gerais = getFaqBairro(nome, tempo, via);
  const extras = faqExtra[slug] || [];
  return [...gerais, ...extras];
}
