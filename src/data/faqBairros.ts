export interface FaqItem {
  question: string;
  answer: string;
}

export function getFaqBairro(nome: string, tempo: string, via: string): FaqItem[] {
  return [
    {
      question: `Tem loja de pneus perto do ${nome}?`,
      answer: `Sim! A Carplus Centro Automotivo fica a apenas ${tempo} de carro do ${nome}, na Av. Arthur da Silva Bernardes, 1323 – Portão, Curitiba. Vendemos pneus Pirelli, Michelin, Goodyear, Continental, Firestone, Bridgestone e Yokohama com montagem e balanceamento inclusos no preço.`,
    },
    {
      question: `Como chegar do ${nome} até a Carplus no Portão?`,
      answer: `Do ${nome} até a Carplus são aproximadamente ${tempo} de carro via ${via}. Não precisa agendar, pode vir direto! Horário de funcionamento: Segunda a Sexta das 8h às 18h e Sábados das 8h às 12h. Estacionamento próprio gratuito.`,
    },
    {
      question: `A Carplus atende moradores do ${nome}?`,
      answer: `Com certeza! Recebemos clientes do ${nome} com frequência. A distância é pequena (${tempo}) e o custo-benefício compensa muito a viagem até o Portão — pneus das melhores marcas, parcelamento em até 10x sem juros e serviço full service completo.`,
    },
    {
      question: `Qual oficina mecânica atende quem mora no ${nome}?`,
      answer: `A Carplus Centro Automotivo é a oficina full service mais recomendada para quem mora no ${nome}. Realizamos alinhamento 3D computadorizado, balanceamento de rodas, troca de óleo (sintético e mineral), revisão completa, suspensão, freios, ar-condicionado automotivo e diagnóstico eletrônico com scanner — tudo em um só lugar, a ${tempo} do ${nome}.`,
    },
    {
      question: `Vale a pena sair do ${nome} para trocar pneu na Carplus?`,
      answer: `Sim, e muitos clientes do ${nome} confirmam nas nossas avaliações (4,9 estrelas no Google com 850+ avaliações). Com apenas ${tempo} de deslocamento, você tem acesso às melhores marcas de pneus, serviço profissional com garantia de fábrica e parcelamento em até 10x sem juros. A economia compensa!`,
    },
    {
      question: `A Carplus faz alinhamento e balanceamento para quem vem do ${nome}?`,
      answer: `Sim! Nosso equipamento de alinhamento é computadorizado 3D, o mais preciso do mercado atualmente. Atendemos todos os modelos de carros (nacionais e importados) e fazemos balanceamento de rodas de todos os aros (13" a 22"). Clientes do ${nome} podem vir sem agendamento ou ligar antes: (41) 3082-7282.`,
    },
    {
      question: `Quanto custa trocar pneu vindo do ${nome}?`,
      answer: `Os preços variam conforme marca e medida. Trabalhamos com opções a partir de R$ 269,00 para pneus econômicos e parcelamos em até 10x sem juros. Moradores do ${nome} podem enviar uma mensagem no WhatsApp (41) 3082-7282 com a medida do seu pneu (ex: 185/65R15) para receber um orçamento rápido e personalizado.`,
    },
    {
      question: `Quais marcas de pneus a Carplus tem para moradores do ${nome}?`,
      answer: `Trabalhamos com as principais marcas do mercado: Pirelli (P400 Evo, P7, P Zero, Scorpion), Michelin (Energy XM2, Primacy 4, Pilot Sport), Goodyear (Direction, EfficientGrip), Continental (ComfortContact, SportContact), Firestone, Bridgestone e Yokohama. Todas com garantia de fábrica e instalação profissional inclusa.`,
    },
    {
      question: `A Carplus aceita cartão e parcela para clientes do ${nome}?`,
      answer: `Sim! Aceitamos todos os cartões de crédito e débito. Parcelamos em até 10x sem juros no cartão. Também aceitamos Pix, dinheiro e transferência bancária. Moradores do ${nome} podem aproveitar as mesmas condições de pagamento.`,
    },
    {
      question: `Preciso agendar para ir do ${nome} à Carplus?`,
      answer: `Não é necessário agendar! Trabalhamos com atendimento por ordem de chegada. No entanto, se preferir garantir prioridade, pode agendar pelo WhatsApp (41) 3082-7282. Horário: Seg-Sex 8h às 18h, Sábado 8h às 12h. O trajeto do ${nome} é de aproximadamente ${tempo}.`,
    },
  ];
}

// FAQ extra específico por bairro com conteúdo semântico focado em SEO
const faqExtra: Record<string, FaqItem[]> = {
  'portao': [
    {
      question: 'A Carplus fica no Portão mesmo?',
      answer: 'Sim! Estamos localizados no coração do Portão, na Av. Arthur da Silva Bernardes, 1323, a poucos metros do Shopping Palladium. Somos a principal loja de pneus do bairro há mais de 10 anos.',
    },
    {
      question: 'Tem oficina perto do Shopping Palladium?',
      answer: 'A Carplus Centro Automotivo fica a apenas 3 minutos do Shopping Palladium! Você pode trazer o carro para revisão ou troca de pneus e aproveitar para fazer compras enquanto esperamos.',
    },
  ],
  'agua-verde': [
    {
      question: 'Qual o caminho do Água Verde até a Carplus?',
      answer: 'Do Água Verde, siga pela Av. República Argentina até a Av. Arthur da Silva Bernardes. São apenas 5 minutos de carro sem trânsito intenso. Fácil estacionamento na loja.',
    },
    {
      question: 'A Carplus atende carros executivos do Água Verde?',
      answer: 'Sim! Atendemos veículos executivos e de luxo. Temos pneus premium como Pirelli P Zero, Michelin Pilot Sport 4 e Continental SportContact para BMW, Mercedes, Audi e outros importados.',
    },
  ],
  'campo-comprido': [
    {
      question: 'A Carplus atende SUVs e picapes do Campo Comprido?',
      answer: 'Sim! Somos especialistas em pneus para SUVs e picapes. Trabalhamos com todos os aros (18", 19", 20", 22") e temos em estoque Pirelli Scorpion, Michelin CrossClimate, Goodyear Wrangler e outras linhas específicas para veículos altos.',
    },
    {
      question: 'Qual pneu é melhor para SUV no Campo Comprido?',
      answer: 'Para SUVs do Campo Comprido, recomendamos o Pirelli Scorpion (excelente durabilidade), Michelin CrossClimate (bom em todas as condições) ou Continental CrossContact (conforto e silêncio). Venha até a Carplus para uma avaliação personalizada do seu veículo.',
    },
  ],
  'cic': [
    {
      question: 'A Carplus atende frotas de empresas do CIC?',
      answer: 'Sim! Temos condições especiais para frotas empresariais do CIC: contratos de manutenção preventiva, troca de pneus em quantidade, revisões periódicas com nota fiscal e atendimento prioritário. Contato comercial: (41) 3082-7282.',
    },
    {
      question: 'A Carplus tem pneus para vans e utilitários do CIC?',
      answer: 'Sim! Trabalhamos com pneus para vans (Ducato, Master, Sprinter) e utilitários leves (HR, Daily, Bongo). Marcas como Pirelli Chrono, Michelin Agilis e Goodyear Cargo para veículos de trabalho.',
    },
  ],
  'batel': [
    {
      question: 'Para carros de luxo do Batel, quais pneus premium a Carplus tem?',
      answer: 'Para veículos premium do Batel, trabalhamos com as melhores linhas: Pirelli P Zero (Ferrari, Lamborghini, Porsche), Michelin Pilot Sport 4 (BMW, Mercedes), Continental SportContact 5 (Audi) e versões Run Flat para quem precisa.',
    },
    {
      question: 'A Carplus atende BMW e Mercedes do Batel?',
      answer: 'Sim! Somos especializados em pneus para veículos importados. Temos pneus Run Flat, perfil baixo e alta performance em estoque. Nossos técnicos são treinados para atender BMW, Mercedes, Audi, Porsche e outras marcas premium.',
    },
  ],
  'centro': [
    {
      question: 'Vale a pena sair do Centro de Curitiba para ir à Carplus?',
      answer: 'Com certeza! Em 12 minutos você chega à Carplus no Portão e encontra: estacionamento gratuito (ao contrário do Centro), atendimento sem fila, preços de atacado e parcelamento em até 10x. A economia compensa o deslocamento.',
    },
  ],
  'colombo': [
    {
      question: 'Vale a pena vir de Colombo até a Carplus?',
      answer: 'Sim! Muitos clientes de Colombo escolhem a Carplus pela variedade de marcas, qualidade do serviço e preços de atacado. São cerca de 30 minutos pela PR-417. A economia em pneus compensa o deslocamento, especialmente na troca do jogo completo.',
    },
    {
      question: 'Tem loja de pneus em Colombo que seja boa?',
      answer: 'A Carplus no Portão (Curitiba) é a escolha de muitos moradores de Colombo que buscam qualidade. Apesar da distância de 30 minutos, os preços de atacado e a variedade de marcas compensam. Parcelamos em até 10x sem juros.',
    },
  ],
  'sao-jose-dos-pinhais': [
    {
      question: 'A Carplus atende quem vem de São José dos Pinhais?',
      answer: 'Sim! A rota mais comum de São José dos Pinhais é pela BR-376 ou Av. das Torres → contorno sul → acesso ao Portão. Cerca de 30 minutos. Com a variedade de pneus e serviços full service, muitos clientes de SJP preferem a Carplus.',
    },
    {
      question: 'Tem loja de pneus boa perto do aeroporto de Curitiba?',
      answer: 'A Carplus fica a cerca de 30 minutos do Aeroporto Afonso Pena. Moradores de São José dos Pinhais e região do aeroporto encontram na Carplus pneus das melhores marcas com preços de atacado.',
    },
  ],
  'pinhais': [
    {
      question: 'De Pinhais até a Carplus demora quanto tempo?',
      answer: 'De Pinhais até a Carplus são aproximadamente 22 minutos de carro pela Rodovia Deputado João Leopoldo Jacomel. O trajeto é rápido e direto, e a economia em pneus compensa o deslocamento.',
    },
  ],
  'araucaria': [
    {
      question: 'A Carplus atende empresas de Araucária?',
      answer: 'Sim! Araucária tem muitas indústrias e frotas. A Carplus oferece condições especiais para empresas: contratos de manutenção, atendimento prioritário, nota fiscal e pneus para vans/utilitários. Contato: (41) 3082-7282.',
    },
  ],
  'santa-felicidade': [
    {
      question: 'De Santa Felicidade, qual o melhor caminho para a Carplus?',
      answer: 'De Santa Felicidade, siga pela Av. Manoel Ribas sentido centro, depois acesse a Av. República Argentina até o Portão. São aproximadamente 20 minutos. Aproveite para almoçar nos restaurantes italianos e depois visite a Carplus!',
    },
  ],
  'capao-raso': [
    {
      question: 'A Carplus fica perto do Terminal Capão Raso?',
      answer: 'Sim! A Carplus fica a cerca de 10 minutos do Terminal Capão Raso, no bairro Portão. Acesso fácil pela Av. Winston Churchill e depois Av. República Argentina.',
    },
  ],
  'cajuru': [
    {
      question: 'Do Cajuru, como chegar na Carplus?',
      answer: 'Do Cajuru, siga pela Av. Prefeito Mauricio Fruet até a Linha Verde, depois acesse a saída para o Portão. São aproximadamente 20 minutos. O trajeto é tranquilo e a economia em pneus vale o deslocamento.',
    },
  ],
  'uberaba': [
    {
      question: 'A Carplus atende moradores do Uberaba?',
      answer: 'Sim! Do Uberaba, o acesso é fácil pela Av. das Torres. São aproximadamente 18 minutos até a Carplus no Portão. Muitos moradores do Uberaba já são clientes fiéis pela qualidade e preço justo.',
    },
  ],
  'bacacheri': [
    {
      question: 'Tem oficina boa perto do aeroporto do Bacacheri?',
      answer: 'A Carplus fica a cerca de 20 minutos do Bacacheri. Apesar de não ser no bairro, a qualidade do serviço e os preços de atacado atraem muitos clientes da região norte de Curitiba.',
    },
  ],
  'boa-vista': [
    {
      question: 'De Boa Vista, vale a pena ir até a Carplus?',
      answer: 'Sim! De Boa Vista até a Carplus são aproximadamente 22 minutos. A variedade de pneus e o atendimento profissional compensam o deslocamento. Parcelamos em até 10x sem juros.',
    },
  ],
  'santa-candida': [
    {
      question: 'A Carplus atende quem vem de Santa Cândida?',
      answer: 'Sim! De Santa Cândida, siga pela Av. Paraná sentido centro, depois acesse a República Argentina. São aproximadamente 25 minutos. Muitos moradores de Santa Cândida e região norte já são clientes.',
    },
  ],
  'jardim-botanico': [
    {
      question: 'Do Jardim Botânico até a Carplus é longe?',
      answer: 'Não! Do Jardim Botânico até a Carplus são aproximadamente 15 minutos de carro. Siga pela Av. Pref. Omar Sabbag até a Sete de Setembro, depois acesse a República Argentina.',
    },
  ],
  'bigorrilho': [
    {
      question: 'A Carplus tem pneus para carros importados do Bigorrilho?',
      answer: 'Sim! Atendemos veículos importados com pneus premium: Pirelli P Zero, Michelin Pilot Sport, Continental SportContact. O Bigorrilho fica a apenas 10 minutos da Carplus.',
    },
  ],
  'merces': [
    {
      question: 'Das Mercês, como chegar na Carplus?',
      answer: 'Das Mercês, siga pela Rua Manoel Ribas até a Av. Iguaçu, depois acesse a República Argentina. São aproximadamente 12 minutos até a Carplus no Portão.',
    },
  ],
  'reboucas': [
    {
      question: 'Do Rebouças até a Carplus demora muito?',
      answer: 'Não! Do Rebouças até a Carplus são apenas 10 minutos de carro. Siga pela Rua Westphalen até a Sete de Setembro, depois acesse a República Argentina.',
    },
  ],
  'novo-mundo': [
    {
      question: 'Tem loja de pneus perto do Novo Mundo?',
      answer: 'A Carplus fica a apenas 7 minutos do Novo Mundo! Siga pela Av. Brasília em direção ao Portão. Somos a opção mais próxima com preços de atacado e serviço profissional.',
    },
  ],
  'fazendinha': [
    {
      question: 'Da Fazendinha, como chegar na Carplus?',
      answer: 'Da Fazendinha, siga pela Rua João Dembinski até a Av. Winston Churchill, depois acesse a República Argentina. São aproximadamente 10 minutos até a Carplus.',
    },
  ],
  'pinheirinho': [
    {
      question: 'Do Pinheirinho até a Carplus é longe?',
      answer: 'Não! Do Pinheirinho, siga pela Linha Verde sentido centro até a saída para o Portão. São aproximadamente 15 minutos. O trajeto é rápido e sem semáforos.',
    },
  ],
  'guaira': [
    {
      question: 'A Carplus fica perto do Guaíra?',
      answer: 'Sim! O Guaíra fica a apenas 5 minutos da Carplus. Somos vizinhos! Siga pela Rua Kennedy até a República Argentina e em poucos metros estará na nossa loja.',
    },
  ],
  'parolin': [
    {
      question: 'Do Parolin, qual o caminho para a Carplus?',
      answer: 'Do Parolin, siga pela Av. Getúlio Vargas em direção ao Portão. A Carplus fica na Av. Arthur da Silva Bernardes. São aproximadamente 8 minutos de carro.',
    },
  ],
  'campo-largo': [
    {
      question: 'Vale a pena vir de Campo Largo para trocar pneu?',
      answer: 'Sim! Apesar da distância de 35 minutos pela BR-277, os preços de atacado da Carplus compensam. Muitos clientes de Campo Largo vêm especialmente para trocar o jogo completo de pneus.',
    },
  ],
  'almirante-tamandare': [
    {
      question: 'A Carplus atende Almirante Tamandaré?',
      answer: 'Sim! De Almirante Tamandaré, siga pela Rodovia dos Minérios até a BR-476, depois acesse Curitiba. São aproximadamente 25 minutos. A economia em pneus compensa o trajeto.',
    },
  ],
  'fazenda-rio-grande': [
    {
      question: 'De Fazenda Rio Grande até a Carplus demora muito?',
      answer: 'São aproximadamente 35 minutos pela BR-116 até o contorno sul e depois acesso ao Portão. Muitos clientes de Fazenda Rio Grande escolhem a Carplus pelos preços de atacado.',
    },
  ],
};

export function getFaqCompleto(nome: string, slug: string, tempo: string, via: string): FaqItem[] {
  const gerais = getFaqBairro(nome, tempo, via);
  const extras = faqExtra[slug] || [];
  return [...gerais, ...extras];
}
