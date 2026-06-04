// ════════════════════════════════════════════════════════════════
// BASE DE DADOS SEO — Páginas de intenção de compra (Curitiba)
// Conteúdo 100% baseado no catálogo real da Carplus (src/data.ts)
// Clusters: Aro · Medida · Marca · Veículo · SEO Local
// ════════════════════════════════════════════════════════════════

import { TIRES, Tire } from '../data';

export const BASE_URL = 'https://www.carpluspneuseoficina.com.br';
export const WHATSAPP_NUMBER = '554130827282';
export const PHONE_DISPLAY = '(41) 3082-7282';
export const ADDRESS_FULL = 'Av. Presidente Arthur da Silva Bernardes, 1323 – Portão, Curitiba – PR';
export const OG_IMAGE = '/images/loja/carplus-oficina-portao-fachada-curitiba.jpg';

export interface FaqItem {
  question: string;
  answer: string;
}

// ─── Normalização ────────────────────────────────────────────────
export function normalizeText(value: string): string {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
}

// ─── Filtros sobre o catálogo real ───────────────────────────────
export function getTiresByAro(aro: number): Tire[] {
  return TIRES.filter((t) => t && t.aro === aro);
}

export function getTiresByBrand(marca: string): Tire[] {
  const target = marca.toLowerCase();
  return TIRES.filter((t) => t && t.marca && t.marca.toLowerCase() === target);
}

export function getTiresByMeasure(medida: string): Tire[] {
  const target = medida.toUpperCase().replace(/\s/g, '');
  return TIRES.filter(
    (t) => t && t.medida && t.medida.toUpperCase().replace(/\s/g, '') === target
  );
}

export function getTiresByVehicle(termos: string[]): Tire[] {
  const targets = termos.map((t) => t.toLowerCase());
  return TIRES.filter(
    (t) =>
      t &&
      Array.isArray(t.carros) &&
      t.carros.some((carro) =>
        targets.some((target) => carro.toLowerCase().includes(target))
      )
  );
}

export function getBrandsForTires(tires: Tire[]): string[] {
  return [...new Set(tires.filter((t) => t && t.marca).map((t) => t.marca))].sort();
}

export function getMeasuresForTires(tires: Tire[]): string[] {
  return [...new Set(tires.filter((t) => t && t.medida).map((t) => t.medida))].sort();
}

// ════════════════════════════════════════════════════════════════
// FASE 2 — PÁGINAS POR ARO (13 ao 23)
// ════════════════════════════════════════════════════════════════
export interface AroPage {
  aro: number;
  slug: string; // /pneu-aro-15-curitiba
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  aplicacoes: string;
  perfilTipico: string[];
  faq: FaqItem[];
}

export const ARO_PAGES: AroPage[] = [
  {
    aro: 13,
    slug: 'pneu-aro-13-curitiba',
    h1: 'Pneu Aro 13 em Curitiba',
    metaTitle: 'Pneu Aro 13 em Curitiba | Carplus Auto Center – Montagem Inclusa',
    metaDescription:
      'Pneu aro 13 em Curitiba na Carplus, bairro Portão. Marcas como Pirelli e Firestone para carros populares, montagem e balanceamento inclusos e até 10x sem juros. Orçamento no WhatsApp: (41) 3082-7282.',
    intro:
      'O pneu aro 13 é a medida clássica dos carros populares brasileiros. Na Carplus, no bairro Portão em Curitiba, você encontra pneus aro 13 das marcas que já trabalhamos, com montagem, balanceamento e calibragem inclusos no mesmo atendimento.',
    aplicacoes:
      'Os pneus aro 13 equipam veículos econômicos e compactos como Chevrolet Celta, Chevrolet Classic, Fiat Uno, VW Gol G4 e Fiat Palio. São pneus voltados ao uso urbano diário, priorizando economia, durabilidade e custo-benefício.',
    perfilTipico: ['Carros populares', 'Uso urbano', 'Econômico', 'Custo-benefício'],
    faq: [
      {
        question: 'Quanto custa um pneu aro 13 em Curitiba?',
        answer:
          'O preço do pneu aro 13 varia conforme a marca e a linha escolhida. Na Carplus, no Portão, o valor já inclui montagem, balanceamento e calibragem, com parcelamento em até 10x sem juros. Envie a medida exata (ex.: 175/70R13) pelo WhatsApp (41) 3082-7282 para um orçamento na hora.',
      },
      {
        question: 'Quais carros usam pneu aro 13?',
        answer:
          'O aro 13 equipa modelos populares como Celta, Classic, Fiat Uno, Gol G4 e Palio. Confira a medida original na lateral do pneu atual ou no manual do proprietário antes de comprar.',
      },
      {
        question: 'A troca do pneu aro 13 já inclui alinhamento e balanceamento?',
        answer:
          'O balanceamento está incluso na montagem. O alinhamento 3D é altamente recomendado a cada troca de pneus para evitar desgaste irregular e é feito na própria Carplus, sem necessidade de agendamento.',
      },
    ],
  },
  {
    aro: 14,
    slug: 'pneu-aro-14-curitiba',
    h1: 'Pneu Aro 14 em Curitiba',
    metaTitle: 'Pneu Aro 14 em Curitiba | Carplus Auto Center – Pirelli e mais',
    metaDescription:
      'Pneu aro 14 em Curitiba na Carplus Portão. Medidas como 175/65R14, 185/60R14 e 185/65R14 para hatch e sedan, montagem inclusa e 10x sem juros. WhatsApp: (41) 3082-7282.',
    intro:
      'O pneu aro 14 é uma das medidas mais procuradas do Brasil, presente em grande parte dos hatchbacks e sedans compactos. A Carplus, no Portão em Curitiba, mantém pneus aro 14 com pronta entrega e instalação completa no mesmo dia.',
    aplicacoes:
      'Os pneus aro 14 equipam veículos como VW Gol G5/G6, Chevrolet Onix 1.0, Fiat Palio, Renault Logan e VW Polo. Medidas comuns incluem 175/65R14, 185/60R14 e 185/65R14, equilibrando conforto, economia e segurança no uso urbano.',
    perfilTipico: ['Hatch compacto', 'Sedan de entrada', 'Uso urbano', 'Equilíbrio conforto/economia'],
    faq: [
      {
        question: 'Qual a medida de pneu aro 14 mais comum?',
        answer:
          'As medidas aro 14 mais vendidas são 175/65R14, 185/60R14 e 185/65R14. Confirme a sua na lateral do pneu atual e consulte a disponibilidade pelo WhatsApp (41) 3082-7282.',
      },
      {
        question: 'Vale a pena trocar pneu aro 14 na Carplus do Portão?',
        answer:
          'Sim. Além do preço justo e do parcelamento em até 10x sem juros, a montagem, o balanceamento e a calibragem já estão inclusos, e o alinhamento 3D é feito na hora para prolongar a vida útil do conjunto.',
      },
      {
        question: 'Vocês têm pneu aro 14 de marca premium?',
        answer:
          'Trabalhamos com marcas como Pirelli, Michelin e Goodyear no aro 14, além de opções econômicas. Informe seu carro e seu objetivo de uso que indicamos a melhor linha.',
      },
    ],
  },
  {
    aro: 15,
    slug: 'pneu-aro-15-curitiba',
    h1: 'Pneu Aro 15 em Curitiba',
    metaTitle: 'Pneu Aro 15 em Curitiba | Carplus Auto Center – Maior Estoque',
    metaDescription:
      'Pneu aro 15 em Curitiba na Carplus Portão. Maior variedade: 185/60R15, 185/65R15, 195/55R15, 195/60R15 e 195/65R15. Montagem inclusa e 10x sem juros. WhatsApp: (41) 3082-7282.',
    intro:
      'O aro 15 é a medida com a maior variedade de modelos no estoque da Carplus. No bairro Portão, em Curitiba, oferecemos pneus aro 15 econômicos, de conforto e all season, sempre com montagem e balanceamento inclusos.',
    aplicacoes:
      'O aro 15 equipa um leque enorme de veículos: Chevrolet Onix Plus, Chevrolet Cruze, Fiat Argo, Honda City, VW Virtus, VW Golf e muitos outros. As medidas mais buscadas são 185/60R15, 185/65R15, 195/55R15, 195/60R15 e 195/65R15.',
    perfilTipico: ['Hatch e sedan', 'Maior variedade de estoque', 'Conforto e economia', 'All season disponível'],
    faq: [
      {
        question: 'Por que o aro 15 tem tantas opções?',
        answer:
          'O aro 15 é a transição entre os carros populares e os modelos de conforto, por isso atende a muitos veículos. Na Carplus temos a maior variedade de medidas e marcas nesse aro, do econômico ao premium.',
      },
      {
        question: 'Qual pneu aro 15 dura mais?',
        answer:
          'A durabilidade depende da linha e do uso, mas pneus de conforto e all season tendem a oferecer maior quilometragem. Mantendo calibragem, alinhamento e rodízio em dia, a vida útil aumenta significativamente.',
      },
      {
        question: 'Posso comprar pneu aro 15 e instalar no mesmo dia?',
        answer:
          'Sim. Com pronta entrega no Portão, a maioria das medidas aro 15 é instalada no mesmo dia, com balanceamento e calibragem inclusos. Agende pelo WhatsApp (41) 3082-7282.',
      },
    ],
  },
  {
    aro: 16,
    slug: 'pneu-aro-16-curitiba',
    h1: 'Pneu Aro 16 em Curitiba',
    metaTitle: 'Pneu Aro 16 em Curitiba | Carplus Auto Center – Sedan e SUV',
    metaDescription:
      'Pneu aro 16 em Curitiba na Carplus Portão. Medidas 205/55R16, 205/60R16, 215/65R16 e mais para sedans e SUVs. Montagem inclusa e 10x sem juros. WhatsApp: (41) 3082-7282.',
    intro:
      'O pneu aro 16 atende sedans médios, hatchbacks premium e SUVs compactos. A Carplus, no Portão em Curitiba, oferece pneus aro 16 de marcas como Michelin, Goodyear, Continental e Pirelli, com instalação completa.',
    aplicacoes:
      'O aro 16 equipa modelos como VW Jetta, Toyota Corolla, Honda Civic, Chevrolet Cruze LT e Hyundai HB20S. As medidas mais procuradas são 205/55R16, 205/60R16 e 215/65R16, ideais para quem quer conforto e estabilidade.',
    perfilTipico: ['Sedan médio', 'Hatch premium', 'SUV compacto', 'Conforto e performance'],
    faq: [
      {
        question: 'Quais carros usam pneu aro 16?',
        answer:
          'Sedans médios e SUVs compactos como Corolla, Civic, Jetta, Cruze e HB20S costumam usar aro 16, nas medidas 205/55R16 e 205/60R16. Confirme a medida original do seu veículo antes de comprar.',
      },
      {
        question: 'Qual a melhor marca de pneu aro 16?',
        answer:
          'Depende do uso. Para conforto, linhas Michelin Primacy e Goodyear EfficientGrip são excelentes; para custo-benefício, há opções equilibradas. Nossa equipe técnica indica a melhor escolha gratuitamente.',
      },
      {
        question: 'O alinhamento é necessário ao trocar pneu aro 16?',
        answer:
          'Sim. Recomendamos sempre o alinhamento 3D e o balanceamento ao trocar os pneus, garantindo estabilidade, menor consumo e desgaste uniforme. Ambos são feitos na Carplus.',
      },
    ],
  },
  {
    aro: 17,
    slug: 'pneu-aro-17-curitiba',
    h1: 'Pneu Aro 17 em Curitiba',
    metaTitle: 'Pneu Aro 17 em Curitiba | Carplus Auto Center – Performance e SUV',
    metaDescription:
      'Pneu aro 17 em Curitiba na Carplus Portão. Medidas 215/50R17, 215/55R17, 225/45R17, 225/50R17, 225/65R17 e mais. Montagem inclusa e 10x sem juros. WhatsApp: (41) 3082-7282.',
    intro:
      'O pneu aro 17 é a escolha de quem busca esportividade e presença, equipando sedans premium, hatches esportivos e SUVs. Na Carplus, no Portão em Curitiba, temos ampla variedade de pneus aro 17 com instalação especializada.',
    aplicacoes:
      'O aro 17 equipa modelos como Jeep Compass, Toyota Corolla Cross, Honda HR-V, VW T-Cross, Audi A4 e BMW 320i. As medidas mais buscadas incluem 215/50R17, 215/55R17, 225/45R17, 225/50R17 e 225/65R17.',
    perfilTipico: ['SUV', 'Sedan premium', 'Hatch esportivo', 'Performance'],
    faq: [
      {
        question: 'Pneu aro 17 é mais caro que aro 15?',
        answer:
          'Em geral sim, pois são pneus de maior diâmetro e performance. Mas na Carplus você parcela em até 10x sem juros e a montagem e o balanceamento já estão inclusos no valor.',
      },
      {
        question: 'Qual medida de pneu aro 17 para SUV?',
        answer:
          'SUVs como Compass, Corolla Cross, HR-V e T-Cross costumam usar 225/65R17, 225/50R17 ou 215/55R17. Confira a medida original e consulte disponibilidade pelo WhatsApp (41) 3082-7282.',
      },
      {
        question: 'Balanceamento é mais importante em aro 17?',
        answer:
          'Sim. Quanto maior o aro e menor o perfil, mais sensível o conjunto a desequilíbrios. Por isso fazemos balanceamento computadorizado preciso em todos os pneus aro 17 instalados.',
      },
    ],
  },
  {
    aro: 18,
    slug: 'pneu-aro-18-curitiba',
    h1: 'Pneu Aro 18 em Curitiba',
    metaTitle: 'Pneu Aro 18 em Curitiba | Carplus Auto Center – SUV e Premium',
    metaDescription:
      'Pneu aro 18 em Curitiba na Carplus Portão. Medidas 225/45R18, 235/55R18, 235/60R18, 245/40R18, 245/45R18 e mais. Montagem inclusa e 10x sem juros. WhatsApp: (41) 3082-7282.',
    intro:
      'O pneu aro 18 equipa SUVs médios e veículos premium que exigem estabilidade e desempenho. A Carplus, no Portão em Curitiba, oferece pneus aro 18 de marcas como Michelin, Continental e Pirelli com montagem profissional.',
    aplicacoes:
      'O aro 18 equipa modelos como Jeep Compass, Toyota RAV4, Honda CR-V, Audi Q3, Volvo XC40 e BMW X1. As medidas mais procuradas são 225/45R18, 235/55R18, 235/60R18, 245/40R18 e 245/45R18.',
    perfilTipico: ['SUV médio', 'Premium', 'Alta performance', 'Estabilidade'],
    faq: [
      {
        question: 'Quais SUVs usam pneu aro 18?',
        answer:
          'SUVs como Compass, RAV4, CR-V, Q3, XC40 e X1 usam aro 18, nas medidas 235/55R18, 235/60R18 ou 225/45R18. Confirme a medida original do seu veículo antes de comprar.',
      },
      {
        question: 'Pneu aro 18 perde conforto?',
        answer:
          'Pneus de perfil mais baixo são mais firmes, mas linhas premium de conforto compensam com tecnologia de absorção de ruído e impacto. Indicamos a melhor linha conforme seu objetivo.',
      },
      {
        question: 'Vocês instalam pneu aro 18 sem danificar a roda?',
        answer:
          'Sim. Usamos equipamento de montagem moderno que preserva o aro e o acabamento, essencial para rodas de liga leve comuns no aro 18.',
      },
    ],
  },
  {
    aro: 19,
    slug: 'pneu-aro-19-curitiba',
    h1: 'Pneu Aro 19 em Curitiba',
    metaTitle: 'Pneu Aro 19 em Curitiba | Carplus Auto Center – SUV e Esportivo',
    metaDescription:
      'Pneu aro 19 em Curitiba na Carplus Portão. Medidas 235/50R19, 235/55R19, 245/40R19, 245/45R19, 255/35R19 e mais. Montagem inclusa e 10x sem juros. WhatsApp: (41) 3082-7282.',
    intro:
      'O pneu aro 19 é destinado a SUVs premium e veículos esportivos de alta performance. A Carplus, no Portão em Curitiba, trabalha com pneus aro 19 e oferece montagem e balanceamento de alta precisão para esse tipo de conjunto.',
    aplicacoes:
      'O aro 19 equipa modelos premium como Audi Q5, BMW X3, Volvo XC60, Mercedes GLA e Jeep Compass topo de linha. As medidas mais buscadas são 235/50R19, 235/55R19, 245/40R19, 245/45R19 e 255/35R19.',
    perfilTipico: ['SUV premium', 'Esportivo', 'Alta performance', 'Perfil baixo'],
    faq: [
      {
        question: 'Pneu aro 19 precisa de balanceamento especial?',
        answer:
          'Pneus aro 19 têm perfil baixo e exigem balanceamento computadorizado preciso para eliminar qualquer vibração. Na Carplus, todos os pneus aro 19 recebem balanceamento de alta precisão.',
      },
      {
        question: 'Quais carros usam pneu aro 19?',
        answer:
          'SUVs e sedans premium como Q5, X3, XC60 e GLA usam aro 19. Informe a medida exata (ex.: 235/55R19) pelo WhatsApp (41) 3082-7282 para verificarmos disponibilidade.',
      },
      {
        question: 'Vale a pena alinhar ao trocar pneu aro 19?',
        answer:
          'Sim. Em pneus de alto custo como o aro 19, o alinhamento 3D protege o investimento, evitando desgaste irregular precoce. É um serviço essencial a cada troca.',
      },
    ],
  },
  {
    aro: 20,
    slug: 'pneu-aro-20-curitiba',
    h1: 'Pneu Aro 20 em Curitiba',
    metaTitle: 'Pneu Aro 20 em Curitiba | Carplus Auto Center – SUV e Picape',
    metaDescription:
      'Pneu aro 20 em Curitiba na Carplus Portão. Medidas 255/35R20, 245/40R20, 245/45R20 e mais para SUVs e picapes premium. Montagem inclusa e 10x sem juros. WhatsApp: (41) 3082-7282.',
    intro:
      'O pneu aro 20 equipa SUVs grandes, picapes premium e veículos esportivos de luxo. A Carplus, no Portão em Curitiba, oferece pneus aro 20 com montagem especializada e balanceamento de alta precisão.',
    aplicacoes:
      'O aro 20 equipa modelos como Ford Ranger, Chevrolet S10, Porsche Cayenne, BMW X3/X5 e SUVs premium. As medidas mais procuradas incluem 255/35R20, 245/40R20 e 245/45R20.',
    perfilTipico: ['SUV grande', 'Picape premium', 'Esportivo de luxo', 'Perfil baixo'],
    faq: [
      {
        question: 'Quais veículos usam pneu aro 20?',
        answer:
          'SUVs grandes e picapes premium como Ranger, S10, Cayenne e X5 usam aro 20. Confirme a medida original do seu veículo e consulte disponibilidade pelo WhatsApp (41) 3082-7282.',
      },
      {
        question: 'Pneu aro 20 é difícil de encontrar em Curitiba?',
        answer:
          'Na Carplus trabalhamos com medidas aro 20 das marcas que já atendemos. Caso a medida específica não esteja em estoque, fazemos a busca para você com agilidade.',
      },
      {
        question: 'A montagem de pneu aro 20 tem cuidado especial?',
        answer:
          'Sim. Rodas aro 20, geralmente de liga leve e alto valor, são montadas com equipamento que preserva o acabamento, seguidas de balanceamento de precisão.',
      },
    ],
  },
  {
    aro: 21,
    slug: 'pneu-aro-21-curitiba',
    h1: 'Pneu Aro 21 em Curitiba',
    metaTitle: 'Pneu Aro 21 em Curitiba | Carplus Auto Center – SUV Premium',
    metaDescription:
      'Pneu aro 21 em Curitiba na Carplus Portão. Medidas 245/40R21, 275/45R21, 285/45R21, 315/40R21 e mais para SUVs e esportivos premium. Montagem inclusa e 10x sem juros. WhatsApp: (41) 3082-7282.',
    intro:
      'O pneu aro 21 equipa SUVs premium de grande porte e esportivos de alto desempenho. A Carplus, no Portão em Curitiba, trabalha com pneus aro 21 de marcas como Yokohama, Continental, Bridgestone e Pirelli, com montagem especializada e balanceamento de alta precisão.',
    aplicacoes:
      'O aro 21 equipa modelos como BMW X5 e X6, Porsche Cayenne, Audi Q7 e Q8, Land Rover e Range Rover Sport. As medidas mais procuradas são 245/40R21, 275/45R21, 285/45R21, 285/40R21 e 315/40R21.',
    perfilTipico: ['SUV premium', 'Esportivo de luxo', 'Alta performance', 'Perfil baixo'],
    faq: [
      {
        question: 'Quais veículos usam pneu aro 21?',
        answer:
          'SUVs premium como BMW X5/X6, Porsche Cayenne, Audi Q7/Q8 e Range Rover Sport usam aro 21. Confirme a medida original (ex.: 275/45R21) e consulte disponibilidade pelo WhatsApp (41) 3082-7282.',
      },
      {
        question: 'A Carplus tem pneu aro 21 em Curitiba?',
        answer:
          'Sim. Trabalhamos com medidas aro 21 de marcas como Yokohama, Continental, Bridgestone e Pirelli. Caso a medida específica não esteja em estoque, fazemos a busca para você com agilidade.',
      },
      {
        question: 'O balanceamento de pneu aro 21 é diferente?',
        answer:
          'Sim. Quanto maior o aro e menor o perfil, mais sensível o conjunto a vibrações. Por isso usamos balanceamento computadorizado de alta precisão em todos os pneus aro 21.',
      },
    ],
  },
  {
    aro: 22,
    slug: 'pneu-aro-22-curitiba',
    h1: 'Pneu Aro 22 em Curitiba',
    metaTitle: 'Pneu Aro 22 em Curitiba | Carplus Auto Center – SUV de Luxo',
    metaDescription:
      'Pneu aro 22 em Curitiba na Carplus Portão. Medidas 265/40R22, 275/40R22, 285/40R22, 315/35R22 e mais para SUVs de luxo. Montagem inclusa e 10x sem juros. WhatsApp: (41) 3082-7282.',
    intro:
      'O pneu aro 22 é destinado a SUVs de luxo e veículos premium de grande porte. A Carplus, no Portão em Curitiba, oferece pneus aro 22 das marcas que já atendemos, com montagem cuidadosa que preserva o acabamento das rodas e balanceamento de precisão.',
    aplicacoes:
      'O aro 22 equipa modelos como Range Rover, BMW X6 e X7, Mercedes GLE e GLS, Porsche Cayenne Turbo e picapes customizadas. As medidas mais buscadas são 265/40R22, 275/40R22, 285/40R22 e 315/35R22.',
    perfilTipico: ['SUV de luxo', 'Premium grande porte', 'Customização', 'Perfil extrabaixo'],
    faq: [
      {
        question: 'Quais carros usam pneu aro 22?',
        answer:
          'SUVs de luxo como Range Rover, BMW X7, Mercedes GLS e Porsche Cayenne, além de picapes customizadas, usam aro 22. Informe a medida exata pelo WhatsApp (41) 3082-7282 para verificarmos disponibilidade.',
      },
      {
        question: 'A montagem de pneu aro 22 preserva a roda?',
        answer:
          'Sim. Rodas aro 22 são de alto valor e exigem cuidado. Usamos equipamento de montagem moderno que protege o acabamento, seguido de balanceamento computadorizado de precisão.',
      },
      {
        question: 'A Carplus encontra pneu aro 22 sob encomenda?',
        answer:
          'Sim. Caso a medida aro 22 específica não esteja em estoque, fazemos a busca junto aos nossos fornecedores com agilidade para você.',
      },
    ],
  },
  {
    aro: 23,
    slug: 'pneu-aro-23-curitiba',
    h1: 'Pneu Aro 23 em Curitiba',
    metaTitle: 'Pneu Aro 23 em Curitiba | Carplus Auto Center – Alto Padrão',
    metaDescription:
      'Pneu aro 23 em Curitiba na Carplus Portão. Medidas 275/35R23, 305/35R23, 315/30R23 e mais para SUVs de alto padrão e customizações. Montagem inclusa e 10x sem juros. WhatsApp: (41) 3082-7282.',
    intro:
      'O pneu aro 23 é uma medida de alto padrão, voltada a SUVs de luxo e projetos de customização. A Carplus, no Portão em Curitiba, trabalha com pneus aro 23 com montagem especializada e o máximo cuidado com rodas de alto valor.',
    aplicacoes:
      'O aro 23 equipa SUVs premium de grande porte e veículos customizados, como Range Rover e modelos com rodas esportivas de alto padrão. As medidas disponíveis incluem 275/35R23, 305/35R23 e 315/30R23.',
    perfilTipico: ['SUV de luxo', 'Customização', 'Alto padrão', 'Perfil extrabaixo'],
    faq: [
      {
        question: 'A Carplus trabalha com pneu aro 23?',
        answer:
          'Sim. Temos pneus aro 23 das marcas que atendemos, com destaque para a Yokohama. Informe a medida exata (ex.: 305/35R23) pelo WhatsApp (41) 3082-7282 para confirmar disponibilidade.',
      },
      {
        question: 'Quais veículos usam pneu aro 23?',
        answer:
          'O aro 23 é usado em SUVs premium de grande porte e em projetos de customização com rodas esportivas. Por ser uma medida especial, recomendamos confirmar a disponibilidade antes da compra.',
      },
      {
        question: 'A montagem de pneu aro 23 tem cuidado especial?',
        answer:
          'Sim. Rodas aro 23 são de altíssimo valor e exigem o máximo cuidado. A montagem é feita com equipamento que preserva o acabamento, seguida de balanceamento de alta precisão.',
      },
    ],
  },
];

// ════════════════════════════════════════════════════════════════
// FASE 4 — PÁGINAS POR MARCA (somente marcas presentes no catálogo)
// ════════════════════════════════════════════════════════════════
export interface BrandPage {
  marca: string; // valor exato em TIRES.marca
  slug: string; // /pneu-michelin-curitiba
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  linhas: string;
  faq: FaqItem[];
}

export const BRAND_PAGES: BrandPage[] = [
  {
    marca: 'Pirelli',
    slug: 'pneu-pirelli-curitiba',
    h1: 'Pneu Pirelli em Curitiba',
    metaTitle: 'Pneu Pirelli em Curitiba | Carplus Auto Center – Revenda no Portão',
    metaDescription:
      'Pneu Pirelli em Curitiba na Carplus Portão. Linhas P400 Evo, Cinturato P7 e P Zero com montagem, balanceamento e 10x sem juros. Orçamento no WhatsApp: (41) 3082-7282.',
    intro:
      'A Pirelli é uma das marcas mais tradicionais do mercado e está entre as mais vendidas na Carplus, no bairro Portão em Curitiba. Trabalhamos com diversas linhas Pirelli para uso urbano, conforto e alta performance.',
    linhas:
      'No catálogo Pirelli da Carplus você encontra a linha P400 Evo (econômica e urbana), a Cinturato P7 e P7 All Season (conforto e desempenho) e a P Zero (esportiva premium, inclusive Run Flat), cobrindo dos carros populares aos veículos premium.',
    faq: [
      {
        question: 'A Carplus é revenda Pirelli em Curitiba?',
        answer:
          'A Carplus trabalha com pneus Pirelli e mantém as principais linhas em estoque no Portão, com montagem, balanceamento e calibragem inclusos e parcelamento em até 10x sem juros.',
      },
      {
        question: 'Qual a melhor linha Pirelli para meu carro?',
        answer:
          'Para uso urbano e economia, a P400 Evo é ideal; para conforto e desempenho, a Cinturato P7; para esportividade, a P Zero. Informe seu veículo pelo WhatsApp (41) 3082-7282 que indicamos a melhor opção.',
      },
      {
        question: 'O pneu Pirelli tem garantia na Carplus?',
        answer:
          'Sim. Todos os pneus Pirelli contam com garantia de fábrica contra defeitos de fabricação, e oferecemos suporte completo para acionamento na própria loja.',
      },
    ],
  },
  {
    marca: 'Michelin',
    slug: 'pneu-michelin-curitiba',
    h1: 'Pneu Michelin em Curitiba',
    metaTitle: 'Pneu Michelin em Curitiba | Carplus Auto Center – Portão',
    metaDescription:
      'Pneu Michelin em Curitiba na Carplus Portão. Linhas Energy XM2, Primacy 4 e Pilot Sport 4 com montagem, balanceamento e 10x sem juros. WhatsApp: (41) 3082-7282.',
    intro:
      'A Michelin é referência mundial em durabilidade e segurança. Na Carplus, no Portão em Curitiba, você encontra pneus Michelin para economia, conforto premium e alta performance, com instalação completa.',
    linhas:
      'No catálogo Michelin da Carplus estão linhas como Energy XM2 (eficiência e economia de combustível), Primacy 4 e Primacy SUV (conforto e segurança premium) e Pilot Sport 4 (esportiva de altíssima performance).',
    faq: [
      {
        question: 'Por que o pneu Michelin dura mais?',
        answer:
          'A Michelin investe em tecnologia de composto e desenho que mantém o desempenho do primeiro ao último quilômetro, oferecendo frenagem segura mesmo com o pneu desgastado. Isso resulta em maior quilometragem útil.',
      },
      {
        question: 'A Carplus tem pneu Michelin para SUV?',
        answer:
          'Sim. Trabalhamos com linhas Michelin para SUV, como a Primacy SUV e a Pilot Sport. Informe a medida do seu veículo pelo WhatsApp (41) 3082-7282 para verificar disponibilidade.',
      },
      {
        question: 'Pneu Michelin é mais caro? Posso parcelar?',
        answer:
          'A Michelin é uma marca premium, mas a Carplus parcela em até 10x sem juros e já inclui montagem e balanceamento, tornando o investimento mais acessível.',
      },
    ],
  },
  {
    marca: 'Goodyear',
    slug: 'pneu-goodyear-curitiba',
    h1: 'Pneu Goodyear em Curitiba',
    metaTitle: 'Pneu Goodyear em Curitiba | Carplus Auto Center – Portão',
    metaDescription:
      'Pneu Goodyear em Curitiba na Carplus Portão. Linhas Direction Touring e EfficientGrip com montagem, balanceamento e 10x sem juros. WhatsApp: (41) 3082-7282.',
    intro:
      'A Goodyear é sinônimo de tecnologia e conforto para o dia a dia e viagens. Na Carplus, no Portão em Curitiba, oferecemos pneus Goodyear com instalação completa e preço justo.',
    linhas:
      'No catálogo Goodyear da Carplus você encontra linhas como a Direction Touring (conforto e estabilidade para viagens) e a EfficientGrip Performance (frenagem em molhado e baixa resistência ao rolamento).',
    faq: [
      {
        question: 'O pneu Goodyear é bom para viagens?',
        answer:
          'Sim. A linha Direction Touring é desenvolvida para conforto e estabilidade em longas distâncias, com baixo ruído e boa aderência na chuva, ideal para quem viaja com frequência.',
      },
      {
        question: 'A Carplus tem pneu Goodyear aro 15 e 16?',
        answer:
          'Sim, trabalhamos com Goodyear nos aros mais procurados, como 15 e 16. Consulte a medida exata do seu carro pelo WhatsApp (41) 3082-7282.',
      },
      {
        question: 'A instalação do pneu Goodyear já está inclusa?',
        answer:
          'Sim. Montagem, balanceamento e calibragem estão inclusos, e o alinhamento 3D é feito na própria Carplus para prolongar a vida útil dos pneus.',
      },
    ],
  },
  {
    marca: 'Continental',
    slug: 'pneu-continental-curitiba',
    h1: 'Pneu Continental em Curitiba',
    metaTitle: 'Pneu Continental em Curitiba | Carplus Auto Center – Portão',
    metaDescription:
      'Pneu Continental em Curitiba na Carplus Portão. Tecnologia alemã com conforto e segurança, montagem inclusa e 10x sem juros. WhatsApp: (41) 3082-7282.',
    intro:
      'A Continental traz a tecnologia alemã para conforto, segurança e baixo ruído. Na Carplus, no Portão em Curitiba, você encontra uma ampla variedade de pneus Continental para passeio, sedans e SUVs.',
    linhas:
      'No catálogo Continental da Carplus estão linhas voltadas ao conforto e à eficiência, como a ContiComfortContact, com foco em menor emissão de ruído e dirigibilidade refinada na cidade e na estrada.',
    faq: [
      {
        question: 'Por que escolher pneu Continental?',
        answer:
          'A Continental é reconhecida pela tecnologia alemã que entrega conforto acústico, frenagem segura e dirigibilidade precisa. É uma excelente escolha para quem valoriza silêncio e estabilidade.',
      },
      {
        question: 'A Carplus tem boa variedade de pneu Continental?',
        answer:
          'Sim. A Continental está entre as marcas com maior variedade de medidas no nosso estoque, cobrindo do aro 15 aos aros maiores para SUVs. Consulte pelo WhatsApp (41) 3082-7282.',
      },
      {
        question: 'Pneu Continental é indicado para SUV?',
        answer:
          'Sim. Há linhas Continental específicas para SUVs, com reforço estrutural e estabilidade. Informe a medida do seu veículo que verificamos a melhor opção.',
      },
    ],
  },
  {
    marca: 'Yokohama',
    slug: 'pneu-yokohama-curitiba',
    h1: 'Pneu Yokohama em Curitiba',
    metaTitle: 'Pneu Yokohama em Curitiba | Carplus Auto Center – Maior Variedade',
    metaDescription:
      'Pneu Yokohama em Curitiba na Carplus Portão. Maior variedade de medidas para passeio, SUV e performance, com montagem inclusa e 10x sem juros. WhatsApp: (41) 3082-7282.',
    intro:
      'A Yokohama é a marca com a maior variedade de modelos no estoque da Carplus, no Portão em Curitiba. São opções para carros de passeio, SUVs e veículos de performance, com tecnologia japonesa.',
    linhas:
      'O catálogo Yokohama da Carplus cobre uma ampla gama de medidas e categorias, do uso urbano à alta performance, sendo uma das marcas com mais opções de aros e perfis disponíveis para pronta entrega.',
    faq: [
      {
        question: 'A Carplus tem muitas opções de pneu Yokohama?',
        answer:
          'Sim. A Yokohama é a marca com a maior variedade de medidas no nosso catálogo, cobrindo de carros populares a SUVs e esportivos. Há grande chance de termos a sua medida em estoque.',
      },
      {
        question: 'Pneu Yokohama é bom para performance?',
        answer:
          'A Yokohama é reconhecida mundialmente por linhas de performance e aderência. Informe seu veículo e estilo de uso pelo WhatsApp (41) 3082-7282 que indicamos a linha ideal.',
      },
      {
        question: 'A montagem do pneu Yokohama está inclusa?',
        answer:
          'Sim. Montagem, balanceamento e calibragem estão inclusos, com alinhamento 3D disponível na própria Carplus.',
      },
    ],
  },
  {
    marca: 'Bridgestone',
    slug: 'pneu-bridgestone-curitiba',
    h1: 'Pneu Bridgestone em Curitiba',
    metaTitle: 'Pneu Bridgestone em Curitiba | Carplus Auto Center – Portão',
    metaDescription:
      'Pneu Bridgestone em Curitiba na Carplus Portão. Linhas Turanza, Ecopia e Potenza com montagem, balanceamento e 10x sem juros. WhatsApp: (41) 3082-7282.',
    intro:
      'A Bridgestone é a maior fabricante de pneus do mundo e está entre as marcas com maior estoque na Carplus, no Portão em Curitiba. Trabalhamos com linhas Bridgestone para conforto, economia e alta performance, com instalação completa.',
    linhas:
      'No catálogo Bridgestone da Carplus você encontra linhas como a Turanza (conforto e silêncio para sedans), a Ecopia (baixa resistência ao rolamento e economia de combustível) e a Potenza (esportiva, com aderência e resposta de direção).',
    faq: [
      {
        question: 'A Carplus tem boa variedade de pneu Bridgestone?',
        answer:
          'Sim. A Bridgestone é uma das marcas com maior estoque na Carplus, cobrindo do aro 14 aos aros maiores para SUVs e esportivos. Consulte a sua medida pelo WhatsApp (41) 3082-7282.',
      },
      {
        question: 'Qual a melhor linha Bridgestone para economia de combustível?',
        answer:
          'A linha Ecopia foi desenvolvida para reduzir a resistência ao rolamento, ajudando a economizar combustível sem abrir mão de segurança. É ideal para quem roda muito na cidade.',
      },
      {
        question: 'O pneu Bridgestone tem garantia na Carplus?',
        answer:
          'Sim. Todos os pneus Bridgestone contam com garantia de fábrica contra defeitos de fabricação, com suporte completo para acionamento na própria loja.',
      },
    ],
  },
  {
    marca: 'Firestone',
    slug: 'pneu-firestone-curitiba',
    h1: 'Pneu Firestone em Curitiba',
    metaTitle: 'Pneu Firestone em Curitiba | Carplus Auto Center – Portão',
    metaDescription:
      'Pneu Firestone em Curitiba na Carplus Portão. Custo-benefício com qualidade Bridgestone, montagem inclusa e 10x sem juros. WhatsApp: (41) 3082-7282.',
    intro:
      'A Firestone une tradição e custo-benefício, com a confiabilidade do grupo Bridgestone. Na Carplus, no Portão em Curitiba, você encontra pneus Firestone para uso urbano e viagens, com instalação completa e preço justo.',
    linhas:
      'No catálogo Firestone da Carplus estão linhas voltadas ao dia a dia, como a F-700 e a Firehawk, equilibrando durabilidade, conforto e um preço acessível para carros de passeio e sedans.',
    faq: [
      {
        question: 'Pneu Firestone é uma boa opção de custo-benefício?',
        answer:
          'Sim. A Firestone entrega qualidade do grupo Bridgestone a um preço mais acessível, sendo uma ótima escolha para quem busca durabilidade e segurança sem gastar com a linha premium.',
      },
      {
        question: 'A Carplus tem pneu Firestone para o meu carro?',
        answer:
          'Trabalhamos com diversas medidas Firestone em estoque. Informe a medida do seu pneu atual pelo WhatsApp (41) 3082-7282 que verificamos a disponibilidade na hora.',
      },
      {
        question: 'A instalação do pneu Firestone já está inclusa?',
        answer:
          'Sim. Montagem, balanceamento e calibragem estão inclusos, com alinhamento 3D disponível na Carplus para prolongar a vida útil dos pneus.',
      },
    ],
  },
  {
    marca: 'Prinx',
    slug: 'pneu-prinx-curitiba',
    h1: 'Pneu Prinx em Curitiba',
    metaTitle: 'Pneu Prinx em Curitiba | Carplus Auto Center – Portão',
    metaDescription:
      'Pneu Prinx em Curitiba na Carplus Portão. Excelente custo-benefício para passeio e SUV, montagem inclusa e 10x sem juros. WhatsApp: (41) 3082-7282.',
    intro:
      'A Prinx é uma marca em forte crescimento, reconhecida pelo excelente custo-benefício. Na Carplus, no Portão em Curitiba, ela está entre as marcas com maior estoque, com opções para carros de passeio, sedans e SUVs.',
    linhas:
      'No catálogo Prinx da Carplus você encontra linhas para uso urbano e SUVs, com boa quilometragem, aderência em piso molhado e preço competitivo, cobrindo uma ampla gama de medidas e aros.',
    faq: [
      {
        question: 'Pneu Prinx é bom?',
        answer:
          'Sim. A Prinx oferece ótimo custo-benefício, com bom desempenho em piso seco e molhado e durabilidade adequada para o uso diário. É uma das marcas mais procuradas por quem busca economia com qualidade.',
      },
      {
        question: 'A Carplus tem bastante pneu Prinx em estoque?',
        answer:
          'Sim. A Prinx está entre as marcas com maior estoque na Carplus, com grande variedade de medidas para pronta entrega. Consulte pelo WhatsApp (41) 3082-7282.',
      },
      {
        question: 'O pneu Prinx tem garantia?',
        answer:
          'Sim. Os pneus Prinx contam com garantia de fábrica contra defeitos de fabricação, com suporte da Carplus para o acionamento.',
      },
    ],
  },
  {
    marca: 'Delinte',
    slug: 'pneu-delinte-curitiba',
    h1: 'Pneu Delinte em Curitiba',
    metaTitle: 'Pneu Delinte em Curitiba | Carplus Auto Center – Portão',
    metaDescription:
      'Pneu Delinte em Curitiba na Carplus Portão. Opções de performance e SUV com ótimo preço, montagem inclusa e 10x sem juros. WhatsApp: (41) 3082-7282.',
    intro:
      'A Delinte é uma marca voltada a desempenho e perfil esportivo com preço acessível. Na Carplus, no Portão em Curitiba, você encontra pneus Delinte para carros de perfil baixo, esportivos e SUVs, com instalação completa.',
    linhas:
      'No catálogo Delinte da Carplus há opções de perfil baixo e medidas para SUV, com foco em aderência e visual esportivo, atendendo quem busca performance sem pagar o preço das marcas premium.',
    faq: [
      {
        question: 'Pneu Delinte é indicado para carro esportivo?',
        answer:
          'Sim. A Delinte tem linhas de perfil baixo e desenho esportivo, com boa aderência, sendo uma alternativa de custo acessível para carros rebaixados e esportivos.',
      },
      {
        question: 'A Carplus trabalha com pneu Delinte para SUV?',
        answer:
          'Sim, temos medidas Delinte para SUVs e veículos de perfil baixo. Informe a medida do seu veículo pelo WhatsApp (41) 3082-7282 para confirmar disponibilidade.',
      },
      {
        question: 'A montagem do pneu Delinte está inclusa?',
        answer:
          'Sim. Montagem, balanceamento e calibragem estão inclusos, com alinhamento 3D disponível na própria Carplus.',
      },
    ],
  },
];

// ══════════════════════════════════════════════════════���═════════
// FASE 5 — PÁGINAS POR VEÍCULO (clusters de modelos populares)
// ════════════════════════════════════════════════════════════════
export interface VehiclePage {
  slug: string; // /pneu-para-hb20-curitiba
  nome: string; // HB20
  termos: string[]; // termos de busca em carros[]
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  medidasComuns: string;
  pneuOriginal?: string; // medida(s) de fábrica e contexto (ETAPA 4)
  faq: FaqItem[];
}

export const VEHICLE_PAGES: VehiclePage[] = [
  {
    slug: 'pneu-para-hb20-curitiba',
    nome: 'Hyundai HB20',
    termos: ['HB20'],
    h1: 'Pneu para Hyundai HB20 em Curitiba',
    metaTitle: 'Pneu para HB20 em Curitiba | Carplus Auto Center – Medidas e Preço',
    metaDescription:
      'Pneu para Hyundai HB20 em Curitiba na Carplus Portão. Medidas originais aro 14, 15 e 16, montagem inclusa e 10x sem juros. Orçamento no WhatsApp: (41) 3082-7282.',
    intro:
      'O Hyundai HB20 é um dos hatchbacks mais vendidos do Brasil. Na Carplus, no Portão em Curitiba, você encontra os pneus certos para o HB20 e o HB20S, com instalação completa no mesmo dia.',
    medidasComuns:
      'Dependendo da versão e do ano, o HB20 utiliza medidas como 175/70R14, 185/65R15 e 195/55R16. Versões com rodas maiores podem usar aro 16. Confirme sempre a medida na lateral do pneu atual.',
    faq: [
      {
        question: 'Qual a medida de pneu do HB20?',
        answer:
          'As versões do HB20 usam medidas como 175/70R14, 185/65R15 e 195/55R16, conforme o acabamento e o ano. Verifique a medida na lateral do seu pneu atual e consulte pelo WhatsApp (41) 3082-7282.',
      },
      {
        question: 'Quanto custa o jogo de pneus do HB20?',
        answer:
          'O valor depende da marca e da medida escolhidas. Na Carplus, você parcela em até 10x sem juros, com montagem, balanceamento e calibragem inclusos. Peça seu orçamento no WhatsApp.',
      },
      {
        question: 'Preciso alinhar o HB20 ao trocar os pneus?',
        answer:
          'Sim. O alinhamento 3D e o balanceamento são recomendados a cada troca para evitar desgaste irregular e melhorar a estabilidade. Fazemos ambos na própria Carplus.',
      },
    ],
  },
  {
    slug: 'pneu-para-onix-curitiba',
    nome: 'Chevrolet Onix',
    termos: ['Onix'],
    h1: 'Pneu para Chevrolet Onix em Curitiba',
    metaTitle: 'Pneu para Onix em Curitiba | Carplus Auto Center – Medidas e Preço',
    metaDescription:
      'Pneu para Chevrolet Onix e Onix Plus em Curitiba na Carplus Portão. Medidas aro 14, 15 e 16, montagem inclusa e 10x sem juros. WhatsApp: (41) 3082-7282.',
    intro:
      'O Chevrolet Onix é o carro mais vendido do Brasil. Na Carplus, no Portão em Curitiba, temos os pneus ideais para o Onix e o Onix Plus, com pronta entrega e instalação no mesmo dia.',
    medidasComuns:
      'O Onix 1.0 costuma usar 185/65R14 ou 185/65R15, enquanto versões mais equipadas e o Onix Plus utilizam 195/60R15 e até 195/55R16. Confirme a medida original do seu carro.',
    faq: [
      {
        question: 'Qual a medida de pneu do Onix?',
        answer:
          'O Onix usa medidas como 185/65R14, 185/65R15 e 195/60R15, dependendo da versão. O Onix Plus pode usar aro 16. Verifique na lateral do pneu e consulte pelo WhatsApp (41) 3082-7282.',
      },
      {
        question: 'Vocês têm pneu para Onix com pronta entrega?',
        answer:
          'Sim. As medidas do Onix estão entre as mais procuradas e costumam estar em estoque no Portão para instalação no mesmo dia.',
      },
      {
        question: 'A troca de pneus do Onix inclui balanceamento?',
        answer:
          'Sim. Montagem, balanceamento e calibragem estão inclusos, e recomendamos o alinhamento 3D a cada troca para maior durabilidade.',
      },
    ],
  },
  {
    slug: 'pneu-para-corolla-curitiba',
    nome: 'Toyota Corolla',
    termos: ['Corolla'],
    h1: 'Pneu para Toyota Corolla em Curitiba',
    metaTitle: 'Pneu para Corolla em Curitiba | Carplus Auto Center – Medidas e Preço',
    metaDescription:
      'Pneu para Toyota Corolla e Corolla Cross em Curitiba na Carplus Portão. Medidas aro 16, 17 e 18, montagem inclusa e 10x sem juros. WhatsApp: (41) 3082-7282.',
    intro:
      'O Toyota Corolla é referência em conforto e durabilidade entre os sedans. Na Carplus, no Portão em Curitiba, você encontra pneus para o Corolla e o Corolla Cross, com marcas premium e instalação especializada.',
    medidasComuns:
      'O Corolla sedan costuma usar 205/55R16 e 215/45R17, enquanto o Corolla Cross utiliza medidas aro 17 e 18, como 225/50R18. Confirme a medida original do seu veículo.',
    faq: [
      {
        question: 'Qual a medida de pneu do Corolla?',
        answer:
          'O Corolla sedan usa 205/55R16 ou 215/45R17, conforme a versão; o Corolla Cross usa aro 17 ou 18. Verifique a medida na lateral do pneu atual e consulte pelo WhatsApp (41) 3082-7282.',
      },
      {
        question: 'Qual a melhor marca de pneu para o Corolla?',
        answer:
          'Para conforto e durabilidade, linhas Michelin Primacy, Goodyear EfficientGrip e Continental são excelentes. Nossa equipe indica a melhor opção conforme seu uso.',
      },
      {
        question: 'O Corolla Cross usa pneu diferente do sedan?',
        answer:
          'Sim. Por ser um SUV, o Corolla Cross usa aros maiores (17 ou 18) e perfis adequados ao peso e à altura do veículo. Confirme a medida correta com a gente.',
      },
    ],
  },
  {
    slug: 'pneu-para-civic-curitiba',
    nome: 'Honda Civic',
    termos: ['Civic'],
    h1: 'Pneu para Honda Civic em Curitiba',
    metaTitle: 'Pneu para Civic em Curitiba | Carplus Auto Center – Medidas e Preço',
    metaDescription:
      'Pneu para Honda Civic em Curitiba na Carplus Portão. Medidas aro 16, 17 e 18, marcas premium, montagem inclusa e 10x sem juros. WhatsApp: (41) 3082-7282.',
    intro:
      'O Honda Civic combina esportividade e conforto, exigindo pneus à altura. Na Carplus, no Portão em Curitiba, oferecemos pneus para o Civic de várias gerações, com marcas premium e instalação especializada.',
    medidasComuns:
      'Conforme a geração e a versão, o Civic usa medidas como 205/55R16, 215/55R16, 215/50R17 e 235/40R18 (versões esportivas). Confirme a medida original na lateral do pneu.',
    faq: [
      {
        question: 'Qual a medida de pneu do Civic?',
        answer:
          'O Civic usa medidas como 205/55R16, 215/55R16, 215/50R17 e 235/40R18 nas versões esportivas. Verifique a medida no pneu atual e consulte disponibilidade pelo WhatsApp (41) 3082-7282.',
      },
      {
        question: 'Qual pneu deixa o Civic mais confortável?',
        answer:
          'Linhas de conforto premium, como Michelin Primacy e Continental, reduzem ruído e melhoram a absorção de impactos, mantendo a esportividade do Civic.',
      },
      {
        question: 'Balanceamento é importante no Civic com aro grande?',
        answer:
          'Muito. Versões com aro 17 e 18 têm perfil baixo e exigem balanceamento computadorizado preciso, que fazemos em todos os pneus instalados na Carplus.',
      },
    ],
  },
  {
    slug: 'pneu-para-compass-curitiba',
    nome: 'Jeep Compass',
    termos: ['Compass'],
    h1: 'Pneu para Jeep Compass em Curitiba',
    metaTitle: 'Pneu para Compass em Curitiba | Carplus Auto Center – SUV',
    metaDescription:
      'Pneu para Jeep Compass em Curitiba na Carplus Portão. Medidas aro 17, 18 e 19, montagem inclusa e 10x sem juros. WhatsApp: (41) 3082-7282.',
    intro:
      'O Jeep Compass é um dos SUVs mais populares do país. Na Carplus, no Portão em Curitiba, você encontra pneus para o Compass de todas as versões, com marcas adequadas ao peso e ao uso do SUV.',
    medidasComuns:
      'O Compass usa medidas como 225/65R17, 225/55R18 e 235/45R19, conforme a versão (Sport, Longitude, Limited e topo de linha). Confirme a medida original do seu Compass.',
    pneuOriginal:
      'O pneu original de fábrica do Jeep Compass é o 225/65R17 nas versões Sport e Longitude, o 225/55R18 nas versões Limited e o 235/45R19 nos topos de linha. A medida correta está na lateral do pneu atual e na etiqueta da porta do motorista.',
    faq: [
      {
        question: 'Qual o pneu original do Jeep Compass?',
        answer:
          'O pneu original do Jeep Compass é o 225/65R17 (Sport e Longitude), 225/55R18 (Limited) ou 235/45R19 (topo de linha), conforme a versão. Confirme na etiqueta da porta do motorista.',
      },
      {
        question: 'Qual a medida de pneu do Compass?',
        answer:
          'O Compass usa 225/65R17, 225/55R18 ou 235/45R19, dependendo da versão. Verifique a medida na lateral do pneu e consulte pelo WhatsApp (41) 3082-7282.',
      },
      {
        question: 'Qual pneu é melhor para o Compass na cidade?',
        answer:
          'Para uso urbano e rodoviário, pneus de SUV com foco em conforto e baixo ruído são ideais. Indicamos a linha certa conforme seu estilo de uso.',
      },
      {
        question: 'O Compass precisa de alinhamento ao trocar pneus?',
        answer:
          'Sim. Por ser um SUV mais pesado, o alinhamento 3D e o balanceamento são essenciais a cada troca para evitar desgaste irregular e trepidação.',
      },
    ],
  },
  {
    slug: 'pneu-para-renegade-curitiba',
    nome: 'Jeep Renegade',
    termos: ['Renegade'],
    h1: 'Pneu para Jeep Renegade em Curitiba',
    metaTitle: 'Pneu para Renegade em Curitiba | Carplus Auto Center – SUV',
    metaDescription:
      'Pneu para Jeep Renegade em Curitiba na Carplus Portão. Medidas aro 16, 17 e 18, montagem inclusa e 10x sem juros. WhatsApp: (41) 3082-7282.',
    intro:
      'O Jeep Renegade é um SUV compacto versátil para cidade e estrada. Na Carplus, no Portão em Curitiba, oferecemos pneus para o Renegade adequados ao uso urbano e leve off-road.',
    medidasComuns:
      'O Renegade usa medidas como 215/65R16, 215/60R17 e 235/55R18, conforme a versão. Confirme a medida original na lateral do seu pneu.',
    pneuOriginal:
      'O pneu original de fábrica do Jeep Renegade é o 215/65R16 nas versões de entrada, o 215/60R17 nas intermediárias e o 235/55R18 nos topos de linha. A medida correta vem indicada na lateral do pneu atual e na etiqueta da porta do motorista.',
    faq: [
      {
        question: 'Qual o pneu original do Jeep Renegade?',
        answer:
          'O pneu original do Jeep Renegade é o 215/65R16 (entrada), 215/60R17 (intermediárias) ou 235/55R18 (topo de linha), conforme a versão. Confirme na etiqueta da porta do motorista.',
      },
      {
        question: 'Qual a medida de pneu do Renegade?',
        answer:
          'O Renegade usa 215/65R16, 215/60R17 ou 235/55R18, conforme a versão. Verifique a medida no pneu atual e consulte disponibilidade pelo WhatsApp (41) 3082-7282.',
      },
      {
        question: 'Posso usar pneu de uso misto no Renegade?',
        answer:
          'Depende do seu uso. Para quem encara estradas de terra, há opções de uso misto; para cidade, pneus de asfalto oferecem mais conforto e economia. Orientamos a melhor escolha.',
      },
      {
        question: 'A troca de pneus do Renegade inclui balanceamento?',
        answer:
          'Sim. Montagem, balanceamento e calibragem estão inclusos, com alinhamento 3D recomendado a cada troca.',
      },
    ],
  },
  {
    slug: 'pneu-para-t-cross-curitiba',
    nome: 'VW T-Cross',
    termos: ['T-Cross'],
    h1: 'Pneu para VW T-Cross em Curitiba',
    metaTitle: 'Pneu para T-Cross em Curitiba | Carplus Auto Center – SUV',
    metaDescription:
      'Pneu para Volkswagen T-Cross em Curitiba na Carplus Portão. Medidas aro 16, 17 e 18, montagem inclusa e 10x sem juros. WhatsApp: (41) 3082-7282.',
    intro:
      'O VW T-Cross é um dos SUVs compactos mais vendidos do Brasil. Na Carplus, no Portão em Curitiba, você encontra pneus para o T-Cross de todas as versões, com instalação completa.',
    medidasComuns:
      'O T-Cross usa medidas como 205/60R16, 215/55R17 e 235/45R18, conforme a versão (Sense, Comfortline e Highline). Confirme a medida original do seu T-Cross.',
    faq: [
      {
        question: 'Qual a medida de pneu do T-Cross?',
        answer:
          'O T-Cross usa 205/60R16, 215/55R17 ou 235/45R18, dependendo da versão. Verifique a medida na lateral do pneu e consulte pelo WhatsApp (41) 3082-7282.',
      },
      {
        question: 'Qual a melhor marca de pneu para o T-Cross?',
        answer:
          'Para conforto e durabilidade no uso urbano, linhas premium de SUV das marcas que trabalhamos são ideais. Indicamos a melhor conforme seu perfil de uso.',
      },
      {
        question: 'O T-Cross precisa de alinhamento ao trocar pneus?',
        answer:
          'Sim. O alinhamento 3D e o balanceamento garantem estabilidade e evitam desgaste irregular, sendo recomendados a cada troca de pneus.',
      },
    ],
  },
  {
    slug: 'pneu-para-creta-curitiba',
    nome: 'Hyundai Creta',
    termos: ['Creta'],
    h1: 'Pneu para Hyundai Creta em Curitiba',
    metaTitle: 'Pneu para Creta em Curitiba | Carplus Auto Center – SUV',
    metaDescription:
      'Pneu para Hyundai Creta em Curitiba na Carplus Portão. Medidas aro 16 e 17, montagem inclusa e 10x sem juros. WhatsApp: (41) 3082-7282.',
    intro:
      'O Hyundai Creta é um SUV compacto que une conforto e robustez. Na Carplus, no Portão em Curitiba, oferecemos pneus para o Creta com instalação completa e marcas adequadas ao SUV.',
    medidasComuns:
      'O Creta usa medidas como 205/65R16 e 215/60R17, conforme a versão. Confirme a medida original na lateral do seu pneu.',
    pneuOriginal:
      'O pneu original de fábrica do Hyundai Creta é o 205/65R16 nas versões de entrada e o 215/60R17 nas versões mais equipadas. A medida correta está indicada na lateral do pneu atual e na etiqueta da porta do motorista.',
    faq: [
      {
        question: 'Qual o pneu original do Hyundai Creta?',
        answer:
          'O pneu original do Hyundai Creta é o 205/65R16 nas versões de entrada e o 215/60R17 nas versões mais equipadas. Confirme a medida na etiqueta da porta do motorista.',
      },
      {
        question: 'Qual a medida de pneu do Creta?',
        answer:
          'O Creta usa 205/65R16 ou 215/60R17, conforme a versão. Verifique a medida no pneu atual e consulte disponibilidade pelo WhatsApp (41) 3082-7282.',
      },
      {
        question: 'Qual pneu deixa o Creta mais silencioso?',
        answer:
          'Linhas de conforto com tecnologia de redução de ruído tornam o Creta mais silencioso. Indicamos a melhor opção conforme seu uso.',
      },
      {
        question: 'A troca de pneus do Creta inclui balanceamento?',
        answer:
          'Sim. Montagem, balanceamento e calibragem estão inclusos, com alinhamento 3D recomendado a cada troca.',
      },
    ],
  },
  {
    slug: 'pneu-para-argo-curitiba',
    nome: 'Fiat Argo',
    termos: ['Argo'],
    h1: 'Pneu para Fiat Argo em Curitiba',
    metaTitle: 'Pneu para Argo em Curitiba | Carplus Auto Center – Medidas e Preço',
    metaDescription:
      'Pneu para Fiat Argo em Curitiba na Carplus Portão. Medidas aro 15 e 16, montagem inclusa e 10x sem juros. WhatsApp: (41) 3082-7282.',
    intro:
      'O Fiat Argo é um hatch moderno e econômico. Na Carplus, no Portão em Curitiba, você encontra os pneus certos para o Argo de todas as versões, com instalação no mesmo dia.',
    medidasComuns:
      'O Argo usa medidas como 185/65R15, 195/60R15 e 195/55R16 (versões mais equipadas, como o Argo Trekking). Confirme a medida original do seu Argo.',
    faq: [
      {
        question: 'Qual a medida de pneu do Argo?',
        answer:
          'O Argo usa 185/65R15, 195/60R15 ou 195/55R16, conforme a versão. Verifique a medida na lateral do pneu e consulte pelo WhatsApp (41) 3082-7282.',
      },
      {
        question: 'Vocês têm pneu para Argo com pronta entrega?',
        answer:
          'Sim. As medidas do Argo são bastante comuns e costumam estar em estoque no Portão para instalação no mesmo dia.',
      },
      {
        question: 'Preciso alinhar o Argo ao trocar os pneus?',
        answer:
          'Sim. O alinhamento 3D e o balanceamento evitam desgaste irregular e melhoram a estabilidade, sendo recomendados a cada troca.',
      },
    ],
  },
  {
    slug: 'pneu-para-kwid-curitiba',
    nome: 'Renault Kwid',
    termos: ['Kwid'],
    h1: 'Pneu para Renault Kwid em Curitiba',
    metaTitle: 'Pneu para Kwid em Curitiba | Carplus Auto Center – Medidas e Preço',
    metaDescription:
      'Pneu para Renault Kwid em Curitiba na Carplus Portão. Medidas aro 13 e 14, montagem inclusa e 10x sem juros. WhatsApp: (41) 3082-7282.',
    intro:
      'O Renault Kwid é um dos carros mais econômicos do Brasil. Na Carplus, no Portão em Curitiba, oferecemos pneus para o Kwid com foco em economia, durabilidade e segurança no uso urbano.',
    medidasComuns:
      'O Kwid usa medidas como 165/70R14 e 175/65R14, conforme a versão. Confirme a medida original na lateral do seu pneu.',
    faq: [
      {
        question: 'Qual a medida de pneu do Kwid?',
        answer:
          'O Kwid usa 165/70R14 ou 175/65R14, conforme a versão. Verifique a medida no pneu atual e consulte disponibilidade pelo WhatsApp (41) 3082-7282.',
      },
      {
        question: 'Qual pneu é mais econômico para o Kwid?',
        answer:
          'Pneus de baixa resistência ao rolamento ajudam a manter o baixo consumo do Kwid. Indicamos opções econômicas e seguras conforme sua necessidade.',
      },
      {
        question: 'A troca de pneus do Kwid inclui balanceamento?',
        answer:
          'Sim. Montagem, balanceamento e calibragem estão inclusos, com alinhamento 3D recomendado a cada troca.',
      },
    ],
  },
  {
    slug: 'pneu-para-gol-curitiba',
    nome: 'Volkswagen Gol',
    termos: ['Gol'],
    h1: 'Pneu para Volkswagen Gol em Curitiba',
    metaTitle: 'Pneu para Gol em Curitiba | Carplus Auto Center – Medidas e Preço',
    metaDescription:
      'Pneu para Volkswagen Gol em Curitiba na Carplus Portão. Medidas aro 13, 14 e 15, montagem inclusa e 10x sem juros. Orçamento no WhatsApp: (41) 3082-7282.',
    intro:
      'O Volkswagen Gol é um dos carros mais populares da história do Brasil. Na Carplus, no Portão em Curitiba, você encontra os pneus certos para todas as gerações do Gol, com pronta entrega e instalação no mesmo dia.',
    medidasComuns:
      'Conforme a geração e a versão, o Gol usa medidas como 175/70R13, 175/65R14, 185/60R14 e 185/65R15. Confirme sempre a medida na lateral do pneu atual.',
    faq: [
      {
        question: 'Qual a medida de pneu do Gol?',
        answer:
          'O Gol usa medidas como 175/70R13, 175/65R14 e 185/65R15, conforme a geração e a versão. Verifique na lateral do pneu e consulte pelo WhatsApp (41) 3082-7282.',
      },
      {
        question: 'Vocês têm pneu para Gol com pronta entrega?',
        answer:
          'Sim. As medidas do Gol estão entre as mais procuradas e costumam estar em estoque no Portão para instalação no mesmo dia.',
      },
      {
        question: 'A troca de pneus do Gol inclui balanceamento?',
        answer:
          'Sim. Montagem, balanceamento e calibragem estão inclusos, e recomendamos o alinhamento 3D a cada troca para maior durabilidade.',
      },
    ],
  },
  {
    slug: 'pneu-para-polo-curitiba',
    nome: 'Volkswagen Polo',
    termos: ['Polo'],
    h1: 'Pneu para Volkswagen Polo em Curitiba',
    metaTitle: 'Pneu para Polo em Curitiba | Carplus Auto Center – Medidas e Preço',
    metaDescription:
      'Pneu para Volkswagen Polo em Curitiba na Carplus Portão. Medidas aro 15, 16 e 17, montagem inclusa e 10x sem juros. WhatsApp: (41) 3082-7282.',
    intro:
      'O Volkswagen Polo é um dos hatchbacks mais vendidos do país. Na Carplus, no Portão em Curitiba, oferecemos os pneus ideais para o Polo, do econômico ao esportivo da versão GTS, com instalação completa.',
    medidasComuns:
      'Dependendo da versão, o Polo utiliza medidas como 185/65R15, 195/55R16 e 205/45R17 (GTS). Confirme a medida original do seu veículo.',
    faq: [
      {
        question: 'Qual a medida de pneu do Polo?',
        answer:
          'O Polo usa medidas como 185/65R15, 195/55R16 e 205/45R17 na versão GTS. Verifique a medida no pneu atual e consulte disponibilidade pelo WhatsApp (41) 3082-7282.',
      },
      {
        question: 'Qual a melhor marca de pneu para o Polo?',
        answer:
          'Depende do uso. Para conforto e durabilidade há ótimas linhas premium; para custo-benefício, opções equilibradas. Nossa equipe indica a melhor escolha gratuitamente.',
      },
      {
        question: 'A troca de pneus do Polo inclui balanceamento?',
        answer:
          'Sim. Montagem, balanceamento e calibragem estão inclusos, com alinhamento 3D recomendado a cada troca.',
      },
    ],
  },
  {
    slug: 'pneu-para-hrv-curitiba',
    nome: 'Honda HR-V',
    termos: ['HR-V'],
    h1: 'Pneu para Honda HR-V em Curitiba',
    metaTitle: 'Pneu para HR-V em Curitiba | Carplus Auto Center – Medidas e Preço',
    metaDescription:
      'Pneu para Honda HR-V em Curitiba na Carplus Portão. Medidas aro 16, 17 e 18, montagem inclusa e 10x sem juros. WhatsApp: (41) 3082-7282.',
    intro:
      'O Honda HR-V é um dos SUVs compactos mais vendidos do Brasil. Na Carplus, no Portão em Curitiba, você encontra pneus para o HR-V com marcas premium e instalação especializada no mesmo dia.',
    medidasComuns:
      'Conforme a versão e o ano, o HR-V usa medidas como 215/60R16, 215/55R17 e 225/50R18 (Touring). Confirme a medida original na lateral do pneu.',
    faq: [
      {
        question: 'Qual a medida de pneu do HR-V?',
        answer:
          'O HR-V usa medidas como 215/60R16, 215/55R17 e 225/50R18, conforme a versão. Verifique a medida no pneu atual e consulte pelo WhatsApp (41) 3082-7282.',
      },
      {
        question: 'Qual a melhor marca de pneu para o HR-V?',
        answer:
          'Para conforto e baixo ruído, linhas premium são excelentes para o HR-V. Nossa equipe técnica indica a melhor opção conforme seu uso e orçamento.',
      },
      {
        question: 'A troca de pneus do HR-V inclui alinhamento?',
        answer:
          'O balanceamento está incluso na montagem, e recomendamos o alinhamento 3D a cada troca para evitar desgaste irregular. Fazemos ambos na Carplus.',
      },
    ],
  },
  {
    slug: 'pneu-para-ranger-curitiba',
    nome: 'Ford Ranger',
    termos: ['Ranger'],
    h1: 'Pneu para Ford Ranger em Curitiba',
    metaTitle: 'Pneu para Ranger em Curitiba | Carplus Auto Center – Picape',
    metaDescription:
      'Pneu para Ford Ranger em Curitiba na Carplus Portão. Medidas aro 16, 17, 18 e 20 para picape, montagem inclusa e 10x sem juros. WhatsApp: (41) 3082-7282.',
    intro:
      'A Ford Ranger é uma das picapes médias mais robustas do mercado. Na Carplus, no Portão em Curitiba, oferecemos pneus para a Ranger em uso urbano, estrada e trabalho, com instalação especializada para picapes.',
    medidasComuns:
      'Conforme a versão, a Ranger usa medidas como 265/70R16, 255/70R16, 265/65R17, 265/60R18 e 255/55R20 (Limited). Confirme a medida original do seu veículo.',
    pneuOriginal:
      'O pneu original de fábrica da Ford Ranger é o 265/65R17 na maioria das versões intermediárias e topo de linha, enquanto versões de trabalho saem com 265/70R16. A medida correta vem indicada na lateral do pneu atual e na etiqueta da porta do motorista.',
    faq: [
      {
        question: 'Qual o pneu original da Ford Ranger?',
        answer:
          'O pneu original da Ford Ranger é o 265/65R17 na maioria das versões e o 265/70R16 nas versões de trabalho. Confirme a medida na etiqueta da porta do motorista.',
      },
      {
        question: 'Qual a medida de pneu da Ranger?',
        answer:
          'A Ranger usa medidas como 265/70R16, 255/70R16, 265/65R17, 265/60R18 e 255/55R20, conforme a versão. Verifique no pneu atual e consulte pelo WhatsApp (41) 3082-7282.',
      },
      {
        question: 'Tem pneu para Ranger com perfil para estrada e trabalho?',
        answer:
          'Sim. Trabalhamos com pneus de uso misto (HT) e mais robustos conforme a sua necessidade. Informe como usa a picape que indicamos o pneu ideal.',
      },
      {
        question: 'A montagem de pneu da Ranger está inclusa?',
        answer:
          'Sim. Montagem, balanceamento e calibragem estão inclusos, com alinhamento 3D recomendado para picapes a cada troca.',
      },
    ],
  },
  {
    slug: 'pneu-para-hilux-curitiba',
    nome: 'Toyota Hilux',
    termos: ['Hilux'],
    h1: 'Pneu para Toyota Hilux em Curitiba',
    metaTitle: 'Pneu para Hilux em Curitiba | Carplus Auto Center – Picape',
    metaDescription:
      'Pneu para Toyota Hilux em Curitiba na Carplus Portão. Medidas aro 16, 17 e 18 para picape, montagem inclusa e 10x sem juros. WhatsApp: (41) 3082-7282.',
    intro:
      'A Toyota Hilux é referência em durabilidade entre as picapes médias. Na Carplus, no Portão em Curitiba, você encontra pneus para a Hilux em uso urbano, estrada e trabalho pesado, com instalação especializada.',
    medidasComuns:
      'Conforme a versão, a Hilux usa medidas como 265/70R16, 255/65R17, 265/65R17 e 265/60R18. Confirme a medida original na lateral do pneu.',
    pneuOriginal:
      'O pneu original de fábrica da Toyota Hilux é o 265/65R17 na maioria das versões SR e SRV, enquanto versões de trabalho usam 265/70R16 e topos de linha (SRX) usam 265/60R18. A medida correta vem indicada na lateral do pneu atual e na etiqueta da porta do motorista.',
    faq: [
      {
        question: 'Qual o pneu original da Toyota Hilux?',
        answer:
          'O pneu original da Toyota Hilux é o 265/65R17 na maioria das versões, o 265/70R16 nas de trabalho e o 265/60R18 nos topos de linha. Confirme na etiqueta da porta do motorista.',
      },
      {
        question: 'Qual a medida de pneu da Hilux?',
        answer:
          'A Hilux usa medidas como 265/70R16, 255/65R17, 265/65R17 e 265/60R18, conforme a versão. Verifique no pneu atual e consulte pelo WhatsApp (41) 3082-7282.',
      },
      {
        question: 'Tem pneu para Hilux de uso misto?',
        answer:
          'Sim. Trabalhamos com pneus HT (estrada) e opções mais robustas conforme o uso da picape. Informe sua necessidade que indicamos a melhor linha.',
      },
      {
        question: 'A troca de pneus da Hilux inclui balanceamento?',
        answer:
          'Sim. Montagem, balanceamento e calibragem estão inclusos, com alinhamento 3D recomendado a cada troca para picapes.',
      },
    ],
  },
  {
    slug: 'pneu-para-s10-curitiba',
    nome: 'Chevrolet S10',
    termos: ['S10'],
    h1: 'Pneu para Chevrolet S10 em Curitiba',
    metaTitle: 'Pneu para S10 em Curitiba | Carplus Auto Center – Picape',
    metaDescription:
      'Pneu para Chevrolet S10 em Curitiba na Carplus Portão. Medidas aro 16, 17 e 18 para picape, montagem inclusa e 10x sem juros. WhatsApp: (41) 3082-7282.',
    intro:
      'A Chevrolet S10 é uma picape média robusta e versátil. Na Carplus, no Portão em Curitiba, oferecemos pneus para a S10 em uso urbano, estrada e trabalho, com montagem especializada para picapes.',
    medidasComuns:
      'Conforme a versão, a S10 usa medidas como 255/70R16, 255/65R17 e 265/60R18. Confirme a medida original do seu veículo.',
    faq: [
      {
        question: 'Qual a medida de pneu da S10?',
        answer:
          'A S10 usa medidas como 255/70R16, 255/65R17 e 265/60R18, conforme a versão. Verifique no pneu atual e consulte disponibilidade pelo WhatsApp (41) 3082-7282.',
      },
      {
        question: 'Tem pneu para S10 com bom desempenho em estrada?',
        answer:
          'Sim. Trabalhamos com pneus HT de uso misto, ideais para quem roda muito em estrada, além de opções mais robustas. Indicamos conforme o seu uso.',
      },
      {
        question: 'A montagem de pneu da S10 está inclusa?',
        answer:
          'Sim. Montagem, balanceamento e calibragem estão inclusos, com alinhamento 3D recomendado a cada troca.',
      },
    ],
  },
  {
    slug: 'pneu-para-strada-curitiba',
    nome: 'Fiat Strada',
    termos: ['Strada'],
    h1: 'Pneu para Fiat Strada em Curitiba',
    metaTitle: 'Pneu para Strada em Curitiba | Carplus Auto Center – Medidas e Preço',
    metaDescription:
      'Pneu para Fiat Strada em Curitiba na Carplus Portão. Medidas aro 14, 15 e 16, montagem inclusa e 10x sem juros. WhatsApp: (41) 3082-7282.',
    intro:
      'A Fiat Strada é a picape leve mais vendida do Brasil. Na Carplus, no Portão em Curitiba, você encontra os pneus ideais para a Strada em trabalho e uso urbano, com pronta entrega e instalação no mesmo dia.',
    medidasComuns:
      'Conforme a versão e o ano, a Strada usa medidas como 175/70R14, 185/65R15 e 205/60R15. Confirme a medida original na lateral do pneu.',
    faq: [
      {
        question: 'Qual a medida de pneu da Strada?',
        answer:
          'A Strada usa medidas como 175/70R14, 185/65R15 e 205/60R15, conforme a versão. Verifique no pneu atual e consulte pelo WhatsApp (41) 3082-7282.',
      },
      {
        question: 'Vocês têm pneu para Strada com pronta entrega?',
        answer:
          'Sim. As medidas da Strada estão entre as mais procuradas e costumam estar em estoque no Portão para instalação no mesmo dia.',
      },
      {
        question: 'Tem pneu reforçado para a Strada que trabalha com carga?',
        answer:
          'Sim. Para uso com carga, indicamos pneus com índice de carga adequado. Informe como utiliza a picape que recomendamos o pneu correto.',
      },
    ],
  },
  {
    slug: 'pneu-para-toro-curitiba',
    nome: 'Fiat Toro',
    termos: ['Toro'],
    h1: 'Pneu para Fiat Toro em Curitiba',
    metaTitle: 'Pneu para Toro em Curitiba | Carplus Auto Center – Picape',
    metaDescription:
      'Pneu para Fiat Toro em Curitiba na Carplus Portão. Medidas aro 17, 18 e 20, montagem inclusa e 10x sem juros. WhatsApp: (41) 3082-7282.',
    intro:
      'A Fiat Toro é uma das picapes intermediárias mais desejadas do mercado. Na Carplus, no Portão em Curitiba, oferecemos pneus para a Toro em uso urbano, estrada e trabalho leve, com instalação especializada.',
    medidasComuns:
      'Conforme a versão, a Toro usa medidas como 215/65R16, 225/65R17, 235/60R18 e 245/45R20 (Ultra). Confirme a medida original do seu veículo.',
    pneuOriginal:
      'O pneu original de fábrica da Fiat Toro é, na maioria das versões, o 225/65R17, enquanto versões de entrada saem com 215/65R16 e topos de linha usam 235/60R18 ou 245/45R20. A medida exata vem indicada na lateral do pneu atual e na etiqueta da porta do motorista.',
    faq: [
      {
        question: 'Qual o pneu original da Fiat Toro?',
        answer:
          'O pneu original da Fiat Toro é, na maioria das versões, o 225/65R17. Versões de entrada usam 215/65R16 e topos de linha usam 235/60R18 ou 245/45R20.',
      },
      {
        question: 'Qual a medida de pneu da Toro?',
        answer:
          'A Toro usa medidas como 215/65R16, 225/65R17, 235/60R18 e 245/45R20, conforme a versão. Verifique no pneu atual e consulte disponibilidade pelo WhatsApp (41) 3082-7282.',
      },
      {
        question: 'Qual a melhor marca de pneu para a Toro?',
        answer:
          'Depende do uso. Para conforto urbano e estrada há ótimas linhas premium e de uso misto. Nossa equipe indica a melhor escolha conforme sua necessidade.',
      },
      {
        question: 'A montagem de pneu da Toro está inclusa?',
        answer:
          'Sim. Montagem, balanceamento e calibragem estão inclusos, com alinhamento 3D recomendado a cada troca.',
      },
    ],
  },
];

// ════════════════════════════════════════════════════════════════
// FASE 3 — CONTEÚDO POR MEDIDA (reforça /pneu-medida/:medida)
// ════════════════════════════════════════════════════════════════
export interface MeasureSeoContent {
  medida: string; // 195/65R15
  resumo: string;
  aplicacoes: string;
}

export const MEASURE_SEO: MeasureSeoContent[] = [
  {
    medida: '175/65R14',
    resumo:
      'A medida 175/65R14 é típica de carros compactos e econômicos, oferecendo bom custo-benefício e conforto para o uso urbano diário.',
    aplicacoes: 'Comum em modelos como Renault Kwid, Hyundai HB20 de entrada e outros compactos.',
  },
  {
    medida: '185/60R15',
    resumo:
      'A medida 185/60R15 equilibra conforto e estabilidade, sendo muito usada em hatches e sedans compactos com aro 15.',
    aplicacoes: 'Presente em modelos como Fiat Argo, VW Polo e hatchbacks de porte médio.',
  },
  {
    medida: '185/65R15',
    resumo:
      'A 185/65R15 é uma das medidas mais populares do Brasil, conhecida pelo conforto e pela ampla disponibilidade de marcas.',
    aplicacoes: 'Equipa modelos como Onix, HB20, VW Polo, Toyota Yaris e Honda Fit.',
  },
  {
    medida: '195/55R15',
    resumo:
      'A 195/55R15 traz visual mais esportivo com perfil mais baixo, mantendo o conforto adequado para o dia a dia.',
    aplicacoes: 'Comum em modelos como VW Golf, Peugeot 206/207 e hatches esportivos.',
  },
  {
    medida: '195/65R15',
    resumo:
      'A 195/65R15 é uma medida de conforto bastante procurada, oferecendo bom amortecimento e estabilidade em sedans e hatches.',
    aplicacoes: 'Presente em modelos como Toyota Corolla antigo, Honda Civic e Renault Fluence.',
  },
  {
    medida: '205/55R16',
    resumo:
      'A 205/55R16 é referência em sedans médios e hatches premium, combinando conforto, estabilidade e bom desempenho.',
    aplicacoes: 'Equipa modelos como Corolla, Civic, Jetta, Cruze e HB20S.',
  },
  {
    medida: '205/60R16',
    resumo:
      'A 205/60R16 entrega conforto e robustez, sendo usada em sedans e SUVs compactos que pedem perfil um pouco mais alto.',
    aplicacoes: 'Comum em SUVs compactos como o VW T-Cross e sedans médios.',
  },
  {
    medida: '215/55R17',
    resumo:
      'A 215/55R17 une esportividade e conforto, muito presente em SUVs compactos e sedans com aro 17.',
    aplicacoes: 'Equipa modelos como VW T-Cross, Jeep Compass de entrada e sedans premium.',
  },
  {
    medida: '225/45R17',
    resumo:
      'A 225/45R17 é uma medida esportiva de perfil baixo, oferecendo ótima aderência e resposta de direção.',
    aplicacoes: 'Presente em modelos esportivos e premium como Audi A4, BMW 320i e VW Golf GTI.',
  },
  {
    medida: '175/70R14',
    resumo:
      'A 175/70R14 é uma medida econômica e de fácil reposição, valorizada pelo conforto e pelo baixo custo de manutenção em carros compactos.',
    aplicacoes: 'Comum em modelos como Renault Sandero, Fiat Uno, Palio e outros hatches de entrada.',
  },
  {
    medida: '195/60R15',
    resumo:
      'A 195/60R15 entrega conforto e estabilidade em hatches e sedans compactos, com boa absorção de irregularidades.',
    aplicacoes: 'Presente em modelos como Honda City, Fiat Linea e sedans compactos.',
  },
  {
    medida: '215/65R16',
    resumo:
      'A 215/65R16 é uma medida robusta de SUV compacto, com perfil mais alto que favorece conforto e segurança em pisos irregulares.',
    aplicacoes: 'Equipa SUVs como Jeep Renegade, Hyundai Creta e Honda HR-V.',
  },
  {
    medida: '205/50R17',
    resumo:
      'A 205/50R17 combina perfil baixo e aro 17, trazendo visual esportivo e boa estabilidade em curvas para hatches e sedans.',
    aplicacoes: 'Comum em modelos como VW Golf, Hyundai HB20 esportivo e hatches premium.',
  },
  {
    medida: '225/50R17',
    resumo:
      'A 225/50R17 equilibra esportividade e conforto, sendo bastante procurada em sedans médios e SUVs com aro 17.',
    aplicacoes: 'Presente em modelos como Toyota Corolla, Honda Civic e Jeep Compass.',
  },
  {
    medida: '225/65R17',
    resumo:
      'A 225/65R17 é uma medida de SUV com perfil alto, priorizando conforto, robustez e segurança no dia a dia e em estradas.',
    aplicacoes: 'Equipa SUVs como Jeep Compass, Toyota RAV4 e Hyundai Tucson.',
  },
  {
    medida: '245/45R17',
    resumo:
      'A 245/45R17 é uma medida esportiva larga, que entrega excelente aderência e estabilidade em sedans e esportivos premium.',
    aplicacoes: 'Presente em modelos como BMW Série 3, Mercedes Classe C e sedans de performance.',
  },
  {
    medida: '245/40R17',
    resumo:
      'A 245/40R17 traz perfil baixo e pegada larga, oferecendo resposta de direção precisa para carros esportivos.',
    aplicacoes: 'Comum em esportivos e sedans premium rebaixados.',
  },
  {
    medida: '245/40R18',
    resumo:
      'A 245/40R18 é uma das medidas de performance mais procuradas, unindo aro 18, perfil baixo e ampla área de contato.',
    aplicacoes: 'Equipa modelos como Audi A4/A5, BMW Série 3 e sedans esportivos premium.',
  },
  {
    medida: '245/45R18',
    resumo:
      'A 245/45R18 combina esportividade e conforto em aro 18, com boa estabilidade para sedans e cupês premium.',
    aplicacoes: 'Presente em modelos como Mercedes Classe E, Audi A6 e sedans de luxo.',
  },
  {
    medida: '225/45R18',
    resumo:
      'A 225/45R18 oferece visual esportivo com perfil baixo em aro 18, mantendo equilíbrio entre conforto e desempenho.',
    aplicacoes: 'Comum em modelos como Honda Civic, Toyota Corolla GR-S e sedans premium.',
  },
  {
    medida: '245/40R19',
    resumo:
      'A 245/40R19 é uma medida de alta performance em aro 19, com perfil baixo que privilegia precisão e aderência.',
    aplicacoes: 'Equipa esportivos e sedans premium como Audi A5, BMW Série 4 e cupês.',
  },
  {
    medida: '255/35R20',
    resumo:
      'A 255/35R20 é uma medida premium de aro 20 e perfil extrabaixo, voltada a SUVs esportivos e veículos de alto desempenho.',
    aplicacoes: 'Presente em SUVs e esportivos de luxo como BMW X5, Porsche Cayenne e sedans top de linha.',
  },
  {
    medida: '245/40R20',
    resumo:
      'A 245/40R20 combina aro 20 e perfil baixo, entregando presença visual e estabilidade em SUVs e sedans premium.',
    aplicacoes: 'Comum em SUVs premium e sedans esportivos de grande porte.',
  },
  {
    medida: '245/45R20',
    resumo:
      'A 245/45R20 oferece o porte do aro 20 com perfil um pouco mais alto, equilibrando conforto e esportividade em SUVs grandes.',
    aplicacoes: 'Equipa SUVs premium como BMW X3/X5, Audi Q5 e veículos de luxo.',
  },
];

export const MEASURE_SLUGS = MEASURE_SEO.map((m) =>
  m.medida.toLowerCase().replace('/', '-').replace('r', 'r')
);

export function getMeasureSeo(medida: string): MeasureSeoContent | undefined {
  const target = medida.toUpperCase().replace(/\s/g, '');
  return MEASURE_SEO.find((m) => m.medida.toUpperCase().replace(/\s/g, '') === target);
}

// ════════════════════════════════════════════════════════════════
// FASE 6 — SEO LOCAL (combinações bairro + intenção)
// ════════════════════════════════════════════════════════════════
export interface LocalComboPage {
  slug: string;
  tipo: 'aro' | 'marca' | 'loja';
  aro?: number;
  marca?: string;
  bairro: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  faq: FaqItem[];
}

export const LOCAL_COMBO_PAGES: LocalComboPage[] = [
  {
    slug: 'pneu-aro-15-portao-curitiba',
    tipo: 'aro',
    aro: 15,
    bairro: 'Portão',
    h1: 'Pneu Aro 15 no Portão, Curitiba',
    metaTitle: 'Pneu Aro 15 no Portão Curitiba | Carplus Auto Center',
    metaDescription:
      'Pneu aro 15 no bairro Portão, em Curitiba, na Carplus. Maior variedade de medidas, montagem inclusa e 10x sem juros. Venha à Av. Arthur da Silva Bernardes, 1323. WhatsApp: (41) 3082-7282.',
    intro:
      'A Carplus fica no coração do bairro Portão, em Curitiba, e é referência em pneu aro 15 na região. Aqui você encontra a maior variedade de medidas aro 15, com montagem, balanceamento e alinhamento no mesmo lugar.',
    faq: [
      {
        question: 'Onde comprar pneu aro 15 no Portão em Curitiba?',
        answer:
          'Na Carplus Auto Center, na Av. Presidente Arthur da Silva Bernardes, 1323, bairro Portão. Temos a maior variedade de pneus aro 15 com montagem inclusa e parcelamento em até 10x sem juros.',
      },
      {
        question: 'A Carplus do Portão instala o pneu aro 15 na hora?',
        answer:
          'Sim. Com pronta entrega, a maioria das medidas aro 15 é instalada no mesmo dia, com balanceamento e calibragem inclusos. Agende pelo WhatsApp (41) 3082-7282.',
      },
    ],
  },
  {
    slug: 'pneu-aro-16-agua-verde-curitiba',
    tipo: 'aro',
    aro: 16,
    bairro: 'Água Verde',
    h1: 'Pneu Aro 16 no Água Verde, Curitiba',
    metaTitle: 'Pneu Aro 16 no Água Verde Curitiba | Carplus Auto Center',
    metaDescription:
      'Pneu aro 16 para quem é do Água Verde, em Curitiba. A Carplus fica ao lado, no Portão, com medidas 205/55R16 e 205/60R16, montagem inclusa e 10x sem juros. WhatsApp: (41) 3082-7282.',
    intro:
      'Quem mora ou trabalha no Água Verde, em Curitiba, tem a Carplus pertinho, no bairro Portão. Somos especialistas em pneu aro 16 para sedans e SUVs, com instalação completa e atendimento rápido.',
    faq: [
      {
        question: 'A Carplus atende a região do Água Verde?',
        answer:
          'Sim. A Carplus fica no Portão, bairro vizinho ao Água Verde, a poucos minutos de carro. Atendemos diariamente clientes da região com pneu aro 16 e serviços automotivos completos.',
      },
      {
        question: 'Quais medidas de pneu aro 16 vocês têm?',
        answer:
          'Trabalhamos com as medidas aro 16 mais procuradas, como 205/55R16 e 205/60R16, ideais para sedans médios e SUVs compactos. Consulte pelo WhatsApp (41) 3082-7282.',
      },
    ],
  },
  {
    slug: 'pneu-michelin-seminario-curitiba',
    tipo: 'marca',
    marca: 'Michelin',
    bairro: 'Seminário',
    h1: 'Pneu Michelin no Seminário, Curitiba',
    metaTitle: 'Pneu Michelin no Seminário Curitiba | Carplus Auto Center',
    metaDescription:
      'Pneu Michelin para quem é do Seminário, em Curitiba. A Carplus fica no Portão, ao lado, com linhas Energy XM2, Primacy 4 e Pilot Sport 4. Montagem inclusa e 10x sem juros. WhatsApp: (41) 3082-7282.',
    intro:
      'Moradores do Seminário, em Curitiba, contam com a Carplus no bairro Portão, ao lado, para comprar pneu Michelin com instalação completa. Trabalhamos com as principais linhas Michelin para economia, conforto e performance.',
    faq: [
      {
        question: 'Onde comprar pneu Michelin perto do Seminário?',
        answer:
          'Na Carplus Auto Center, no bairro Portão, vizinho ao Seminário em Curitiba. Trabalhamos com pneus Michelin com montagem inclusa e parcelamento em até 10x sem juros.',
      },
      {
        question: 'Quais linhas Michelin a Carplus tem?',
        answer:
          'Trabalhamos com linhas como Energy XM2, Primacy 4 e Pilot Sport 4. Informe a medida do seu carro pelo WhatsApp (41) 3082-7282 para verificar disponibilidade.',
      },
    ],
  },
  {
    slug: 'loja-de-pneus-portao-curitiba',
    tipo: 'loja',
    bairro: 'Portão',
    h1: 'Loja de Pneus no Portão, Curitiba',
    metaTitle: 'Loja de Pneus no Portão Curitiba | Carplus Auto Center',
    metaDescription:
      'Loja de pneus no Portão, em Curitiba: Carplus Auto Center. Pneus de várias marcas, oficina mecânica completa, alinhamento 3D, montagem inclusa e 10x sem juros. WhatsApp: (41) 3082-7282.',
    intro:
      'A Carplus Auto Center é a loja de pneus e oficina mecânica completa do bairro Portão, em Curitiba. Aqui você compra pneus de várias marcas e ainda faz alinhamento, balanceamento, freios, suspensão e troca de óleo no mesmo lugar.',
    faq: [
      {
        question: 'Qual o endereço da loja de pneus no Portão?',
        answer:
          'A Carplus fica na Av. Presidente Arthur da Silva Bernardes, 1323, bairro Portão, Curitiba – PR. Atendemos de segunda a sexta das 8h às 18h e sábados das 8h às 12h.',
      },
      {
        question: 'A loja de pneus do Portão também é oficina mecânica?',
        answer:
          'Sim. Além da venda e montagem de pneus, a Carplus é uma oficina mecânica full service, com alinhamento 3D, balanceamento, freios, suspensão, troca de óleo e muito mais.',
      },
    ],
  },
];

// ════════════════════════════════════════════════════════════════
// FASE 7 — PÁGINAS DE INTENÇÃO DE COMPRA (Curitiba)
// Termos de alta conversão que ainda não tinham página dedicada.
// Não duplicam os clusters Aro/Marca/Bairro já existentes.
// ════════════════════════════════════════════════════════════════
export interface IntentPage {
  slug: string;
  badge: string;
  h1: string;
  highlight: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  tags: string[];
  sections: { title: string; content: string }[];
  faq: FaqItem[];
  whatsappMsg: string;
}

export const INTENT_PAGES: IntentPage[] = [
  {
    slug: 'pneus-em-curitiba-melhor-preco',
    badge: 'Melhor Preço · Curitiba',
    h1: 'Pneus em Curitiba com o Melhor Preço',
    highlight: 'Melhor Preço',
    metaTitle: 'Pneus em Curitiba com o Melhor Preço | Carplus Auto Center',
    metaDescription:
      'Pneus em Curitiba com o melhor preço na Carplus, bairro Portão. Montagem, balanceamento e calibragem inclusos, várias marcas e 10x sem juros. Orçamento no WhatsApp: (41) 3082-7282.',
    intro:
      'Procurando pneus em Curitiba com o melhor preço? Na Carplus, no bairro Portão, você compara marcas e medidas com valor justo, montagem inclusa e parcelamento em até 10x sem juros — tudo no mesmo atendimento.',
    tags: ['Preço justo', 'Montagem inclusa', '10x sem juros', 'Várias marcas'],
    sections: [
      {
        title: 'Como conseguimos o melhor preço',
        content:
          'Trabalhamos com compra direta e giro alto de estoque, o que nos permite oferecer pneus com preço competitivo sem abrir mão da qualidade. O valor já inclui montagem, balanceamento e calibragem, sem surpresas no fechamento.',
      },
      {
        title: 'Preço com serviço completo',
        content:
          'Na Carplus, o melhor preço vem acompanhado de garantia com nota fiscal, alinhamento 3D feito na hora e equipe técnica que indica a linha ideal para o seu carro e o seu bolso.',
      },
    ],
    faq: [
      {
        question: 'Como pedir o melhor preço de pneus em Curitiba?',
        answer:
          'Envie a medida do seu pneu (ex.: 195/55R15) pelo WhatsApp (41) 3082-7282 que enviamos um orçamento com o melhor preço, já incluindo montagem e balanceamento.',
      },
      {
        question: 'O preço inclui montagem e balanceamento?',
        answer:
          'Sim. Na Carplus, o preço do pneu já inclui montagem, balanceamento e calibragem. O alinhamento 3D é recomendado a cada troca e feito na própria loja.',
      },
      {
        question: 'Dá para parcelar a compra dos pneus?',
        answer:
          'Sim, parcelamos a compra dos pneus em até 10x sem juros no cartão de crédito, mantendo o melhor preço final.',
      },
    ],
    whatsappMsg: 'Olá! Quero o melhor preço de pneus em Curitiba. Pode me passar um orçamento?',
  },
  {
    slug: 'loja-de-pneus-curitiba',
    badge: 'Loja de Pneus · Curitiba',
    h1: 'Loja de Pneus em Curitiba',
    highlight: 'Pneus',
    metaTitle: 'Loja de Pneus em Curitiba | Carplus Auto Center – Portão',
    metaDescription:
      'Loja de pneus em Curitiba: Carplus Auto Center, no bairro Portão. Pneus de várias marcas, oficina mecânica completa, montagem inclusa e 10x sem juros. WhatsApp: (41) 3082-7282.',
    intro:
      'A Carplus é uma loja de pneus completa em Curitiba, no bairro Portão, que também é oficina mecânica full service. Aqui você compra pneus de várias marcas e ainda faz alinhamento, balanceamento, freios e troca de óleo no mesmo lugar.',
    tags: ['Loja física', 'Oficina completa', 'Várias marcas', 'Portão · Curitiba'],
    sections: [
      {
        title: 'Loja de pneus e oficina no mesmo lugar',
        content:
          'Diferente de uma loja comum, a Carplus une a venda de pneus a uma oficina mecânica completa. Você resolve pneu, alinhamento, suspensão, freios e revisão em uma única visita, no bairro Portão.',
      },
      {
        title: 'Atendimento e estrutura',
        content:
          'Contamos com equipe técnica experiente, equipamentos modernos de montagem e balanceamento e alinhamento 3D computadorizado. Tudo com garantia e nota fiscal.',
      },
    ],
    faq: [
      {
        question: 'Onde fica a loja de pneus da Carplus em Curitiba?',
        answer:
          'Na Av. Presidente Arthur da Silva Bernardes, 1323, bairro Portão, Curitiba – PR. Atendemos de segunda a sexta das 8h às 18h e aos sábados das 8h às 12h.',
      },
      {
        question: 'A loja de pneus também faz serviços de oficina?',
        answer:
          'Sim. Além de vender e montar pneus, a Carplus é uma oficina mecânica completa: alinhamento, balanceamento, freios, suspensão e troca de óleo.',
      },
      {
        question: 'Preciso agendar para ir à loja?',
        answer:
          'Não é obrigatório, mas para a maioria das medidas você pode chamar antes pelo WhatsApp (41) 3082-7282 para confirmar disponibilidade e agilizar o atendimento.',
      },
    ],
    whatsappMsg: 'Olá! Vi a página da loja de pneus em Curitiba e gostaria de um orçamento.',
  },
  {
    slug: 'pneus-baratos-curitiba',
    badge: 'Pneus Baratos · Curitiba',
    h1: 'Pneus Baratos em Curitiba',
    highlight: 'Baratos',
    metaTitle: 'Pneus Baratos em Curitiba | Carplus Auto Center – Portão',
    metaDescription:
      'Pneus baratos em Curitiba com qualidade na Carplus, bairro Portão. Opções econômicas e premium, montagem inclusa e 10x sem juros. Orçamento no WhatsApp: (41) 3082-7282.',
    intro:
      'Pneu barato não precisa ser pneu ruim. Na Carplus, no bairro Portão em Curitiba, você encontra opções econômicas com boa procedência, além de linhas premium, sempre com montagem inclusa e parcelamento.',
    tags: ['Econômico', 'Custo-benefício', 'Montagem inclusa', '10x sem juros'],
    sections: [
      {
        title: 'Pneu barato com procedência',
        content:
          'Selecionamos linhas econômicas de marcas reconhecidas, que entregam segurança e durabilidade por um preço acessível. Você economiza sem comprometer a segurança do seu carro.',
      },
      {
        title: 'Economia que continua depois da troca',
        content:
          'Calibragem correta, balanceamento e alinhamento 3D prolongam a vida útil do pneu e reduzem o consumo de combustível — economia que se mantém no dia a dia.',
      },
    ],
    faq: [
      {
        question: 'Pneu barato é seguro?',
        answer:
          'Sim, desde que tenha procedência. Na Carplus trabalhamos apenas com marcas reconhecidas, inclusive nas linhas econômicas, garantindo segurança e nota fiscal.',
      },
      {
        question: 'Qual o pneu mais barato para o meu carro?',
        answer:
          'Depende da medida e do modelo. Envie a medida pelo WhatsApp (41) 3082-7282 que indicamos a opção mais econômica disponível para o seu veículo.',
      },
      {
        question: 'Pneu barato também tem montagem inclusa?',
        answer:
          'Sim. Independente da linha escolhida, a montagem, o balanceamento e a calibragem já estão inclusos no valor.',
      },
    ],
    whatsappMsg: 'Olá! Quero pneus baratos em Curitiba. Pode me passar as opções econômicas?',
  },
  {
    slug: 'maior-estoque-de-pneus-curitiba',
    badge: 'Maior Estoque · Curitiba',
    h1: 'Maior Estoque de Pneus em Curitiba',
    highlight: 'Estoque',
    metaTitle: 'Maior Estoque de Pneus em Curitiba | Carplus Auto Center',
    metaDescription:
      'Maior estoque de pneus em Curitiba na Carplus, bairro Portão. Aros 13 a 23, várias marcas e pronta entrega com montagem inclusa. WhatsApp: (41) 3082-7282.',
    intro:
      'Na Carplus, no bairro Portão em Curitiba, você encontra um dos maiores estoques de pneus da região: do aro 13 ao 23, com diversas medidas e marcas em pronta entrega para instalação no mesmo dia.',
    tags: ['Pronta entrega', 'Aros 13 a 23', 'Várias marcas', 'Instalação no dia'],
    sections: [
      {
        title: 'Variedade do aro 13 ao 23',
        content:
          'Mantemos em estoque pneus para carros populares, hatches, sedans, SUVs e veículos premium. Isso significa menos espera e mais chance de instalar o pneu no mesmo dia.',
      },
      {
        title: 'Pronta entrega e instalação rápida',
        content:
          'Com amplo estoque, a maioria das medidas é montada no mesmo dia, com balanceamento e calibragem inclusos. Caso a medida específica falte, fazemos a busca com agilidade.',
      },
    ],
    faq: [
      {
        question: 'A Carplus tem a minha medida de pneu em estoque?',
        answer:
          'Com um dos maiores estoques de Curitiba, a chance é alta. Confirme a disponibilidade da sua medida pelo WhatsApp (41) 3082-7282.',
      },
      {
        question: 'Quais aros vocês têm em estoque?',
        answer:
          'Trabalhamos com pneus do aro 13 ao aro 23, atendendo de carros populares a SUVs e veículos premium.',
      },
      {
        question: 'Consigo instalar o pneu no mesmo dia?',
        answer:
          'Sim. Por termos pronta entrega, a maioria das medidas é instalada no mesmo dia, com montagem e balanceamento inclusos.',
      },
    ],
    whatsappMsg: 'Olá! Quero saber se vocês têm a minha medida no maior estoque de pneus de Curitiba.',
  },
  {
    slug: 'onde-comprar-pneus-curitiba',
    badge: 'Onde Comprar · Curitiba',
    h1: 'Onde Comprar Pneus em Curitiba',
    highlight: 'Comprar Pneus',
    metaTitle: 'Onde Comprar Pneus em Curitiba | Carplus Auto Center – Portão',
    metaDescription:
      'Onde comprar pneus em Curitiba com segurança? Na Carplus, bairro Portão: várias marcas, montagem inclusa, garantia com nota fiscal e 10x sem juros. WhatsApp: (41) 3082-7282.',
    intro:
      'Se você está em dúvida sobre onde comprar pneus em Curitiba, a Carplus, no bairro Portão, reúne tudo o que importa: variedade de marcas, preço justo, montagem inclusa e uma oficina mecânica completa no mesmo endereço.',
    tags: ['Loja confiável', 'Garantia com NF', 'Montagem inclusa', 'Portão · Curitiba'],
    sections: [
      {
        title: 'O que avaliar na hora de comprar',
        content:
          'Procedência das marcas, garantia com nota fiscal, montagem e balanceamento inclusos e a possibilidade de alinhar na hora. A Carplus reúne todos esses pontos em um só lugar.',
      },
      {
        title: 'Comprar com instalação no mesmo lugar',
        content:
          'Além de comprar o pneu, você faz a montagem, o balanceamento e o alinhamento 3D na Carplus, evitando deslocamentos e garantindo que tudo fique perfeito.',
      },
    ],
    faq: [
      {
        question: 'Onde comprar pneus em Curitiba com garantia?',
        answer:
          'Na Carplus Auto Center, no bairro Portão. Todos os pneus têm garantia e nota fiscal, com montagem e balanceamento inclusos.',
      },
      {
        question: 'Vale a pena comprar pneu em loja com oficina?',
        answer:
          'Sim. Comprar onde também se faz alinhamento, balanceamento e suspensão garante que o conjunto fique ajustado e dure mais, tudo em uma visita.',
      },
      {
        question: 'Como faço para comprar?',
        answer:
          'Envie a medida do pneu pelo WhatsApp (41) 3082-7282 ou venha à loja na Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba.',
      },
    ],
    whatsappMsg: 'Olá! Quero saber onde comprar pneus em Curitiba e pedir um orçamento.',
  },
  {
    slug: 'promocao-de-pneus-curitiba',
    badge: 'Promoção · Curitiba',
    h1: 'Promoção de Pneus em Curitiba',
    highlight: 'Promoção',
    metaTitle: 'Promoção de Pneus em Curitiba | Carplus Auto Center – Portão',
    metaDescription:
      'Promoção de pneus em Curitiba na Carplus, bairro Portão. Condições especiais por medida, montagem inclusa e 10x sem juros. Consulte a promoção no WhatsApp: (41) 3082-7282.',
    intro:
      'Aproveite a promoção de pneus em Curitiba da Carplus, no bairro Portão. Temos condições especiais por medida e marca, sempre com montagem inclusa e parcelamento em até 10x sem juros.',
    tags: ['Condições especiais', 'Montagem inclusa', '10x sem juros', 'Por medida'],
    sections: [
      {
        title: 'Promoções que mudam conforme o estoque',
        content:
          'Nossas promoções variam por medida e marca conforme a disponibilidade. Por isso, consulte sempre a condição atual da sua medida antes de comprar — pode haver uma oferta especial para o seu carro.',
      },
      {
        title: 'Promoção com serviço completo',
        content:
          'Mesmo nas promoções, mantemos montagem, balanceamento e calibragem inclusos, além de garantia com nota fiscal e alinhamento 3D disponível na hora.',
      },
    ],
    faq: [
      {
        question: 'Qual a promoção de pneus em Curitiba agora?',
        answer:
          'As promoções mudam conforme o estoque. Envie a medida do seu pneu pelo WhatsApp (41) 3082-7282 para saber a condição especial disponível hoje.',
      },
      {
        question: 'A promoção inclui montagem?',
        answer:
          'Sim. Mesmo nas promoções, a montagem, o balanceamento e a calibragem já estão inclusos no valor.',
      },
      {
        question: 'Posso parcelar na promoção?',
        answer:
          'Sim, as promoções podem ser parceladas em até 10x sem juros no cartão de crédito.',
      },
    ],
    whatsappMsg: 'Olá! Quero saber a promoção de pneus em Curitiba para a minha medida.',
  },
  {
    slug: 'pneus-em-oferta-curitiba',
    badge: 'Pneus em Oferta · Curitiba',
    h1: 'Pneus em Oferta em Curitiba',
    highlight: 'Oferta',
    metaTitle: 'Pneus em Oferta em Curitiba | Carplus Auto Center – Portão',
    metaDescription:
      'Pneus em oferta em Curitiba na Carplus, bairro Portão. Ofertas por medida e marca, montagem inclusa e 10x sem juros. Consulte no WhatsApp: (41) 3082-7282.',
    intro:
      'Confira os pneus em oferta em Curitiba na Carplus, no bairro Portão. Reunimos ofertas em diversas medidas e marcas, com montagem inclusa e parcelamento, para você trocar os pneus pagando menos.',
    tags: ['Ofertas por medida', 'Várias marcas', 'Montagem inclusa', '10x sem juros'],
    sections: [
      {
        title: 'Ofertas em diversas medidas',
        content:
          'Temos ofertas que abrangem desde aros populares até medidas para SUV e premium. A condição varia conforme o estoque, então vale consultar a sua medida específica.',
      },
      {
        title: 'Oferta com tudo incluso',
        content:
          'As ofertas da Carplus já consideram montagem, balanceamento e calibragem. Você ainda pode adicionar o alinhamento 3D, feito na própria loja no mesmo dia.',
      },
    ],
    faq: [
      {
        question: 'Quais pneus estão em oferta em Curitiba?',
        answer:
          'As ofertas variam por medida e marca conforme o estoque. Consulte a oferta da sua medida pelo WhatsApp (41) 3082-7282.',
      },
      {
        question: 'A oferta vale para qualquer carro?',
        answer:
          'Temos ofertas para carros populares, hatches, sedans e SUVs. Informe seu veículo ou a medida do pneu para verificarmos a melhor oferta.',
      },
      {
        question: 'A oferta inclui instalação?',
        answer:
          'Sim. Toda oferta já inclui montagem, balanceamento e calibragem no valor final.',
      },
    ],
    whatsappMsg: 'Olá! Quero ver os pneus em oferta em Curitiba para a minha medida.',
  },
  {
    slug: 'pneus-parcelados-curitiba',
    badge: 'Pneus Parcelados · Curitiba',
    h1: 'Pneus Parcelados em Curitiba',
    highlight: 'Parcelados',
    metaTitle: 'Pneus Parcelados em Curitiba | Carplus Auto Center – 10x sem juros',
    metaDescription:
      'Pneus parcelados em Curitiba na Carplus, bairro Portão. Até 10x sem juros no cartão, montagem inclusa e várias marcas. Orçamento no WhatsApp: (41) 3082-7282.',
    intro:
      'Precisa trocar os pneus mas quer dividir o pagamento? Na Carplus, no bairro Portão em Curitiba, você compra pneus parcelados em até 10x sem juros no cartão, com montagem inclusa e várias marcas.',
    tags: ['10x sem juros', 'Cartão de crédito', 'Montagem inclusa', 'Várias marcas'],
    sections: [
      {
        title: 'Parcelamento em até 10x sem juros',
        content:
          'Você troca os pneus agora e divide o valor em até 10 vezes sem juros no cartão de crédito, mantendo a segurança do carro sem pesar no orçamento do mês.',
      },
      {
        title: 'Parcelar pneu e serviços juntos',
        content:
          'Além dos pneus, você pode incluir alinhamento, balanceamento e outros serviços de oficina no mesmo parcelamento, resolvendo tudo de uma vez.',
      },
    ],
    faq: [
      {
        question: 'Em quantas vezes posso parcelar os pneus?',
        answer:
          'Na Carplus você parcela os pneus em até 10x sem juros no cartão de crédito.',
      },
      {
        question: 'O parcelamento tem juros?',
        answer:
          'Em até 10x no cartão de crédito o parcelamento é sem juros. Consulte condições para outras formas de pagamento.',
      },
      {
        question: 'Posso parcelar pneus e serviços juntos?',
        answer:
          'Sim. Você pode incluir alinhamento, balanceamento e demais serviços no mesmo parcelamento. Fale com a gente pelo WhatsApp (41) 3082-7282.',
      },
    ],
    whatsappMsg: 'Olá! Quero comprar pneus parcelados em até 10x sem juros em Curitiba.',
  },
  {
    slug: 'melhor-loja-de-pneus-curitiba',
    badge: 'Melhor Loja · Curitiba',
    h1: 'Melhor Loja de Pneus em Curitiba',
    highlight: 'Melhor Loja',
    metaTitle: 'Melhor Loja de Pneus em Curitiba | Carplus Auto Center – 4,9 no Google',
    metaDescription:
      'Considerada uma das melhores lojas de pneus de Curitiba, a Carplus fica no Portão: 4,9 no Google, várias marcas, oficina completa e 10x sem juros. WhatsApp: (41) 3082-7282.',
    intro:
      'A Carplus é reconhecida como uma das melhores lojas de pneus de Curitiba, no bairro Portão, com nota 4,9 no Google e mais de 300 avaliações. Aqui você encontra pneus de várias marcas e uma oficina mecânica completa.',
    tags: ['4,9 no Google', '+300 avaliações', 'Oficina completa', 'Garantia com NF'],
    sections: [
      {
        title: 'Por que somos referência em Curitiba',
        content:
          'Atendimento técnico honesto, marcas reconhecidas, montagem e balanceamento inclusos, alinhamento 3D na hora e garantia com nota fiscal. Esse conjunto fez da Carplus uma das lojas de pneus mais bem avaliadas da cidade.',
      },
      {
        title: 'Avaliações reais de clientes',
        content:
          'Com mais de 300 avaliações e nota 4,9 no Google, a confiança dos clientes é o nosso melhor argumento. Venha conferir o atendimento que rende essa reputação.',
      },
    ],
    faq: [
      {
        question: 'Qual a melhor loja de pneus em Curitiba?',
        answer:
          'A Carplus Auto Center, no bairro Portão, é uma das mais bem avaliadas de Curitiba, com nota 4,9 no Google e mais de 300 avaliações de clientes.',
      },
      {
        question: 'O que torna a Carplus a melhor opção?',
        answer:
          'A união entre loja de pneus e oficina mecânica completa, com montagem inclusa, alinhamento 3D, garantia com nota fiscal e parcelamento em até 10x sem juros.',
      },
      {
        question: 'Onde fica a Carplus?',
        answer:
          'Na Av. Presidente Arthur da Silva Bernardes, 1323, bairro Portão, Curitiba – PR.',
      },
    ],
    whatsappMsg: 'Olá! Vi que a Carplus é uma das melhores lojas de pneus de Curitiba. Quero um orçamento.',
  },
  {
    slug: 'qual-o-melhor-pneu-curitiba',
    badge: 'Qual o Melhor Pneu · Curitiba',
    h1: 'Qual o Melhor Pneu em Curitiba',
    highlight: 'Melhor Pneu',
    metaTitle: 'Qual o Melhor Pneu para o seu Carro em Curitiba | Carplus Auto Center',
    metaDescription:
      'Qual o melhor pneu para o seu carro? A Carplus, no Portão em Curitiba, ajuda a escolher entre economia, conforto e performance. Montagem inclusa e 10x sem juros. WhatsApp: (41) 3082-7282.',
    intro:
      'Não existe um único "melhor pneu" — existe o melhor pneu para o seu carro e o seu uso. Na Carplus, no bairro Portão em Curitiba, nossa equipe técnica ajuda você a escolher entre linhas econômicas, de conforto e de performance.',
    tags: ['Consultoria técnica', 'Economia x conforto', 'Performance', 'Sob medida'],
    sections: [
      {
        title: 'Como escolher o melhor pneu',
        content:
          'A escolha depende do seu perfil de uso: rodagem urbana, estrada, economia de combustível, conforto acústico ou esportividade. Avaliamos a medida original, o tipo de carro e a sua prioridade para indicar a linha ideal.',
      },
      {
        title: 'Economia, conforto ou performance',
        content:
          'Linhas econômicas priorizam custo-benefício; linhas de conforto reduzem ruído e absorvem impactos; linhas de performance entregam aderência e dirigibilidade. Indicamos a melhor opção sem empurrar o que você não precisa.',
      },
    ],
    faq: [
      {
        question: 'Qual o melhor pneu para uso urbano?',
        answer:
          'Para cidade, linhas econômicas e de conforto costumam ser as melhores, equilibrando durabilidade, baixo ruído e bom custo. Informe seu carro pelo WhatsApp (41) 3082-7282 para uma indicação precisa.',
      },
      {
        question: 'Pneu mais caro é sempre melhor?',
        answer:
          'Nem sempre. O melhor pneu é o mais adequado ao seu uso. Às vezes uma linha intermediária atende melhor que uma premium para o seu perfil de rodagem.',
      },
      {
        question: 'Vocês ajudam a escolher o pneu certo?',
        answer:
          'Sim. Nossa equipe técnica faz essa consultoria gratuitamente, considerando seu carro, seu orçamento e seu estilo de direção.',
      },
    ],
    whatsappMsg: 'Olá! Quero saber qual o melhor pneu para o meu carro. Pode me ajudar a escolher?',
  },
  {
    slug: 'pneus-com-instalacao-curitiba',
    badge: 'Pneus com Instalação · Curitiba',
    h1: 'Pneus com Instalação em Curitiba',
    highlight: 'Instalação',
    metaTitle: 'Pneus com Instalação em Curitiba | Carplus Auto Center – Montagem Inclusa',
    metaDescription:
      'Pneus com instalação em Curitiba na Carplus, bairro Portão. Montagem, balanceamento e calibragem inclusos, alinhamento 3D na hora e 10x sem juros. WhatsApp: (41) 3082-7282.',
    intro:
      'Na Carplus, no bairro Portão em Curitiba, você compra os pneus e já sai com tudo instalado. Montagem, balanceamento e calibragem estão inclusos, e o alinhamento 3D pode ser feito na mesma visita.',
    tags: ['Montagem inclusa', 'Balanceamento incluso', 'Alinhamento na hora', 'No mesmo dia'],
    sections: [
      {
        title: 'Instalação completa no mesmo lugar',
        content:
          'Você não precisa procurar outra borracharia: a Carplus faz a montagem com equipamento que preserva a roda, o balanceamento computadorizado e a calibragem, tudo incluso no valor do pneu.',
      },
      {
        title: 'Alinhamento 3D na mesma visita',
        content:
          'Como somos também oficina mecânica, fazemos o alinhamento 3D na hora, garantindo estabilidade, segurança e maior durabilidade do conjunto recém-instalado.',
      },
    ],
    faq: [
      {
        question: 'A instalação dos pneus está inclusa no preço?',
        answer:
          'Sim. A montagem, o balanceamento e a calibragem já estão inclusos no valor dos pneus na Carplus.',
      },
      {
        question: 'Vocês fazem alinhamento na mesma hora?',
        answer:
          'Sim. O alinhamento 3D é feito na própria loja, na mesma visita, sem necessidade de agendar em outro lugar.',
      },
      {
        question: 'Quanto tempo leva a instalação?',
        answer:
          'Na maioria dos casos, a montagem com balanceamento é rápida e feita no mesmo dia. Chame pelo WhatsApp (41) 3082-7282 para confirmar.',
      },
    ],
    whatsappMsg: 'Olá! Quero comprar pneus com instalação inclusa em Curitiba.',
  },
  {
    slug: 'pneus-com-alinhamento-e-balanceamento-curitiba',
    badge: 'Pneus + Alinhamento · Curitiba',
    h1: 'Pneus com Alinhamento e Balanceamento em Curitiba',
    highlight: 'Alinhamento e Balanceamento',
    metaTitle: 'Pneus com Alinhamento e Balanceamento em Curitiba | Carplus Auto Center',
    metaDescription:
      'Pneus com alinhamento e balanceamento em Curitiba na Carplus, bairro Portão. Troca completa com alinhamento 3D, montagem inclusa e 10x sem juros. WhatsApp: (41) 3082-7282.',
    intro:
      'Pneu novo pede alinhamento e balanceamento. Na Carplus, no bairro Portão em Curitiba, você faz a troca completa: pneus com montagem inclusa, balanceamento computadorizado e alinhamento 3D no mesmo lugar.',
    tags: ['Alinhamento 3D', 'Balanceamento computadorizado', 'Troca completa', 'Portão · Curitiba'],
    sections: [
      {
        title: 'Por que alinhar e balancear ao trocar pneus',
        content:
          'O alinhamento 3D corrige a geometria das rodas, evitando desgaste irregular e reduzindo o consumo. O balanceamento elimina vibrações no volante. Juntos, prolongam a vida útil dos pneus e aumentam a segurança.',
      },
      {
        title: 'Tudo na mesma visita',
        content:
          'Como a Carplus é loja de pneus e oficina mecânica, você resolve pneu, alinhamento e balanceamento de uma só vez, com equipamento computadorizado de precisão e garantia com nota fiscal.',
      },
    ],
    faq: [
      {
        question: 'Preciso alinhar e balancear ao trocar os pneus?',
        answer:
          'Sim, é altamente recomendado. O balanceamento já está incluso na montagem, e o alinhamento 3D garante que os pneus novos durem mais e o carro fique estável.',
      },
      {
        question: 'Qual a diferença entre alinhamento e balanceamento?',
        answer:
          'O alinhamento ajusta a geometria das rodas em relação ao solo; o balanceamento distribui o peso da roda para eliminar vibrações. Os dois se complementam.',
      },
      {
        question: 'Vocês fazem os dois no mesmo lugar dos pneus?',
        answer:
          'Sim. A Carplus faz pneus, alinhamento 3D e balanceamento computadorizado no mesmo endereço, no bairro Portão.',
      },
    ],
    whatsappMsg: 'Olá! Quero trocar os pneus com alinhamento e balanceamento em Curitiba.',
  },
  {
    slug: 'centro-automotivo-para-troca-de-pneus-curitiba',
    badge: 'Centro Automotivo · Curitiba',
    h1: 'Centro Automotivo para Troca de Pneus em Curitiba',
    highlight: 'Troca de Pneus',
    metaTitle: 'Centro Automotivo para Troca de Pneus em Curitiba | Carplus Auto Center',
    metaDescription:
      'Centro automotivo para troca de pneus em Curitiba: Carplus, no bairro Portão. Pneus, alinhamento, balanceamento, freios, suspensão e troca de óleo. WhatsApp: (41) 3082-7282.',
    intro:
      'A Carplus é o centro automotivo completo para troca de pneus em Curitiba, no bairro Portão. Além dos pneus, você faz alinhamento, balanceamento, freios, suspensão e troca de óleo em um único lugar.',
    tags: ['Centro automotivo', 'Troca de pneus', 'Oficina completa', 'Tudo em um lugar'],
    sections: [
      {
        title: 'Muito além da troca de pneus',
        content:
          'Como centro automotivo, a Carplus resolve a troca de pneus e ainda cuida de alinhamento, balanceamento, freios, suspensão e revisão. Você economiza tempo fazendo tudo em uma visita.',
      },
      {
        title: 'Estrutura e equipe técnica',
        content:
          'Contamos com equipamentos modernos de montagem e balanceamento, alinhamento 3D computadorizado e mecânicos experientes, sempre com garantia e nota fiscal.',
      },
    ],
    faq: [
      {
        question: 'O que é um centro automotivo para troca de pneus?',
        answer:
          'É um local que une a venda e a troca de pneus a uma oficina mecânica completa. Na Carplus, você troca os pneus e ainda faz alinhamento, balanceamento, freios e suspensão no mesmo lugar.',
      },
      {
        question: 'A Carplus faz só pneus ou também serviços de oficina?',
        answer:
          'Faz os dois. Somos um centro automotivo completo: pneus, alinhamento, balanceamento, freios, suspensão, troca de óleo e mais.',
      },
      {
        question: 'Onde fica o centro automotivo Carplus?',
        answer:
          'Na Av. Presidente Arthur da Silva Bernardes, 1323, bairro Portão, Curitiba – PR. WhatsApp: (41) 3082-7282.',
      },
    ],
    whatsappMsg: 'Olá! Quero fazer a troca de pneus no centro automotivo Carplus em Curitiba.',
  },
];

// Seleção representativa do catálogo para páginas de intenção genéricas
export function getFeaturedTires(limit = 12): Tire[] {
  const featured: Tire[] = [];
  const seen = new Set<number>();
  for (const aro of [14, 15, 16, 17, 18, 13]) {
    for (const tire of getTiresByAro(aro)) {
      if (tire && !seen.has(tire.id)) {
        seen.add(tire.id);
        featured.push(tire);
      }
      if (featured.length >= limit) return featured;
    }
  }
  return featured;
}

// ─── Helpers de busca por slug ───────────────────────────────────
export function getIntentPage(slug: string): IntentPage | undefined {
  return INTENT_PAGES.find((p) => p.slug === slug);
}
export function getAroPage(slug: string): AroPage | undefined {
  return ARO_PAGES.find((p) => p.slug === slug);
}
export function getBrandPage(slug: string): BrandPage | undefined {
  return BRAND_PAGES.find((p) => p.slug === slug);
}
export function getVehiclePage(slug: string): VehiclePage | undefined {
  return VEHICLE_PAGES.find((p) => p.slug === slug);
}
export function getLocalComboPage(slug: string): LocalComboPage | undefined {
  return LOCAL_COMBO_PAGES.find((p) => p.slug === slug);
}

// ══════════════════════════════════���═════════════════════════════
// FASE 8 — COMPARATIVOS DE MARCAS (Curitiba)
// Páginas comparativas e de avaliação ("é bom?") usando SOMENTE marcas
// efetivamente comercializadas pela Carplus. Sem XBRI (ausente do catálogo).
// Conteúdo imparcial, sem inventar especificações ou produtos inexistentes.
// ════════════════════════════════════════════════════════════════
export interface ComparisonPage {
  slug: string;
  badge: string;
  h1: string;
  highlight: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  tags: string[];
  // Marcas reais do catálogo usadas para puxar pneus disponíveis (1 ou 2).
  brands: string[];
  sections: { title: string; content: string }[];
  faq: FaqItem[];
  whatsappMsg: string;
}

export const COMPARISON_PAGES: ComparisonPage[] = [
  // ─── Pirelli x Bridgestone ─────────────────────────────────────
  {
    slug: 'pirelli-ou-bridgestone',
    badge: 'Comparativo · Curitiba',
    h1: 'Pirelli ou Bridgestone: qual escolher?',
    highlight: 'Pirelli ou Bridgestone',
    metaTitle: 'Pirelli ou Bridgestone: qual o melhor pneu? | Carplus Curitiba',
    metaDescription:
      'Pirelli ou Bridgestone? Comparativo imparcial das duas marcas premium na Carplus, em Curitiba. Veja modelos disponíveis, montagem inclusa e 10x sem juros. WhatsApp: (41) 3082-7282.',
    intro:
      'Pirelli e Bridgestone estão entre as marcas premium mais procuradas do mercado. Ambas oferecem ótimo desempenho e durabilidade — a melhor escolha depende da medida do seu carro, do seu estilo de uso e do orçamento. Veja abaixo um comparativo imparcial e os modelos disponíveis na Carplus, no bairro Portão.',
    tags: ['Premium', 'Pirelli', 'Bridgestone', 'Comparativo imparcial'],
    brands: ['Pirelli', 'Bridgestone'],
    sections: [
      {
        title: 'O que esperar da Pirelli',
        content:
          'A Pirelli é uma marca italiana com forte presença no Brasil, reconhecida pelo equilíbrio entre conforto, aderência e custo. Linhas como Cinturato e P400 Evo atendem bem o uso urbano e rodoviário do dia a dia, com boa disponibilidade de medidas.',
      },
      {
        title: 'O que esperar da Bridgestone',
        content:
          'A Bridgestone é uma marca japonesa referência em tecnologia, com linhas como Turanza, Ecopia (foco em economia de combustível) e Potenza (foco em performance). Costuma se destacar em conforto acústico e baixa resistência ao rolamento.',
      },
      {
        title: 'Como decidir',
        content:
          'Não existe "marca melhor" universal: o ideal é comparar o modelo certo para a sua medida e necessidade. Nossa equipe técnica ajuda você a escolher entre as opções disponíveis sem compromisso. Em ambas as marcas, a montagem, o balanceamento e a calibragem já estão inclusos, com até 10x sem juros.',
      },
    ],
    faq: [
      {
        question: 'Pirelli ou Bridgestone: qual dura mais?',
        answer:
          'A durabilidade depende mais do modelo específico e dos hábitos de condução do que da marca em si. As duas têm linhas de alta durabilidade. Informe a medida do seu carro pelo WhatsApp (41) 3082-7282 que indicamos as melhores opções disponíveis.',
      },
      {
        question: 'Qual é mais barato, Pirelli ou Bridgestone?',
        answer:
          'O preço varia conforme a medida e a linha de cada marca. Na Carplus você compara os valores das opções em estoque e parcela em até 10x sem juros, com montagem inclusa.',
      },
      {
        question: 'A Carplus trabalha com as duas marcas?',
        answer:
          'Sim. Trabalhamos com Pirelli e Bridgestone, entre outras marcas, na loja do bairro Portão, em Curitiba. Consulte a disponibilidade da sua medida pelo WhatsApp.',
      },
    ],
    whatsappMsg: 'Olá! Estou em dúvida entre Pirelli e Bridgestone. Pode me ajudar a escolher?',
  },
  // ─── Pirelli x Michelin ────────────────────────────────────────
  {
    slug: 'pirelli-ou-michelin',
    badge: 'Comparativo · Curitiba',
    h1: 'Pirelli ou Michelin: qual o melhor pneu?',
    highlight: 'Pirelli ou Michelin',
    metaTitle: 'Pirelli ou Michelin: qual escolher? | Carplus Curitiba',
    metaDescription:
      'Pirelli ou Michelin? Comparativo imparcial das duas marcas premium na Carplus, em Curitiba. Modelos disponíveis, montagem inclusa e 10x sem juros. WhatsApp: (41) 3082-7282.',
    intro:
      'Pirelli e Michelin são duas das marcas mais premiadas do mundo. As duas entregam segurança e qualidade — a diferença está nas linhas e medidas disponíveis para o seu carro. Veja o comparativo e os modelos em estoque na Carplus, no Portão, em Curitiba.',
    tags: ['Premium', 'Pirelli', 'Michelin', 'Comparativo imparcial'],
    brands: ['Pirelli', 'Michelin'],
    sections: [
      {
        title: 'O que esperar da Pirelli',
        content:
          'A Pirelli, de origem italiana, é muito popular no Brasil pelo equilíbrio entre preço e desempenho. Linhas como Cinturato P7 e P400 Evo são opções sólidas para sedans e hatches no uso diário.',
      },
      {
        title: 'O que esperar da Michelin',
        content:
          'A Michelin, francesa, costuma ser reconhecida pela durabilidade e pela tecnologia. Linhas como Energy XM2, Primacy 4 e Pilot Sport 4 cobrem do uso econômico ao de alta performance, geralmente posicionadas no topo de preço.',
      },
      {
        title: 'Como decidir',
        content:
          'Se a prioridade é custo-benefício, a Pirelli costuma ser muito competitiva; se o foco é máxima durabilidade ou performance, vale avaliar a Michelin. O melhor é comparar o modelo certo para a sua medida — fazemos isso com você, sem compromisso, com montagem inclusa e 10x sem juros.',
      },
    ],
    faq: [
      {
        question: 'Michelin é melhor que Pirelli?',
        answer:
          'Depende do modelo e do uso. A Michelin é referência em durabilidade e performance, enquanto a Pirelli costuma oferecer ótimo custo-benefício. As duas são marcas premium confiáveis. Consulte a sua medida pelo WhatsApp (41) 3082-7282.',
      },
      {
        question: 'Qual marca tem melhor custo-benefício?',
        answer:
          'Na maioria das medidas, a Pirelli tende a ter preço mais acessível que a Michelin, mas isso varia por linha e disponibilidade. Compare os valores em estoque na Carplus.',
      },
      {
        question: 'Posso parcelar a compra?',
        answer:
          'Sim. Tanto Pirelli quanto Michelin podem ser parceladas em até 10x sem juros, com montagem, balanceamento e calibragem inclusos.',
      },
    ],
    whatsappMsg: 'Olá! Estou em dúvida entre Pirelli e Michelin. Pode me ajudar a escolher?',
  },
  // ─── Pirelli x Goodyear ────────────────────────────────────────
  {
    slug: 'pirelli-ou-goodyear',
    badge: 'Comparativo · Curitiba',
    h1: 'Pirelli ou Goodyear: qual escolher?',
    highlight: 'Pirelli ou Goodyear',
    metaTitle: 'Pirelli ou Goodyear: qual o melhor pneu? | Carplus Curitiba',
    metaDescription:
      'Pirelli ou Goodyear? Comparativo imparcial na Carplus, em Curitiba. Veja modelos disponíveis, montagem inclusa e 10x sem juros. WhatsApp: (41) 3082-7282.',
    intro:
      'Pirelli e Goodyear são marcas tradicionais e confiáveis, presentes em milhões de carros. A escolha ideal depende da medida do seu veículo e da linha disponível. Confira o comparativo e os modelos em estoque na Carplus, no Portão.',
    tags: ['Pirelli', 'Goodyear', 'Comparativo imparcial', 'Curitiba'],
    brands: ['Pirelli', 'Goodyear'],
    sections: [
      {
        title: 'O que esperar da Pirelli',
        content:
          'Marca italiana com ampla oferta no Brasil, a Pirelli equilibra conforto, aderência e preço. Linhas como Cinturato e P400 Evo são bastante procuradas para o uso urbano e rodoviário.',
      },
      {
        title: 'O que esperar da Goodyear',
        content:
          'A Goodyear, de origem americana, é conhecida pela robustez e por linhas como Direction Touring e EfficientGrip, com bom desempenho em conforto e segurança no dia a dia.',
      },
      {
        title: 'Como decidir',
        content:
          'As duas marcas são confiáveis para o uso cotidiano. A melhor decisão vem da comparação direta entre os modelos disponíveis para a sua medida. A equipe da Carplus faz essa comparação com você, com montagem inclusa e parcelamento em até 10x sem juros.',
      },
    ],
    faq: [
      {
        question: 'Pirelli ou Goodyear: qual é melhor para uso urbano?',
        answer:
          'As duas têm linhas indicadas para o uso urbano. A escolha depende da medida e do modelo disponível para o seu carro. Consulte pelo WhatsApp (41) 3082-7282.',
      },
      {
        question: 'A Carplus tem as duas marcas em estoque?',
        answer:
          'Trabalhamos com Pirelli e Goodyear, entre outras marcas. A disponibilidade varia por medida — confirme a sua pelo WhatsApp ou veja os modelos abaixo.',
      },
      {
        question: 'A montagem está inclusa?',
        answer:
          'Sim. Em ambas as marcas, montagem, balanceamento e calibragem já estão inclusos no valor dos pneus.',
      },
    ],
    whatsappMsg: 'Olá! Estou em dúvida entre Pirelli e Goodyear. Pode me ajudar a escolher?',
  },
  // ─── Pirelli x Yokohama ────────────────────────────────────────
  {
    slug: 'pirelli-ou-yokohama',
    badge: 'Comparativo · Curitiba',
    h1: 'Pirelli ou Yokohama: qual o melhor?',
    highlight: 'Pirelli ou Yokohama',
    metaTitle: 'Pirelli ou Yokohama: qual escolher? | Carplus Curitiba',
    metaDescription:
      'Pirelli ou Yokohama? Comparativo imparcial na Carplus, em Curitiba. Modelos disponíveis, montagem inclusa e 10x sem juros. WhatsApp: (41) 3082-7282.',
    intro:
      'Pirelli e Yokohama atendem desde o uso urbano até a performance. As duas têm boa reputação e ampla variedade de medidas. Veja o comparativo imparcial e os modelos disponíveis na Carplus, no bairro Portão, em Curitiba.',
    tags: ['Pirelli', 'Yokohama', 'Comparativo imparcial', 'Curitiba'],
    brands: ['Pirelli', 'Yokohama'],
    sections: [
      {
        title: 'O que esperar da Pirelli',
        content:
          'A Pirelli é uma das marcas mais vendidas do Brasil, com forte equilíbrio entre conforto, aderência e custo, e ampla disponibilidade de medidas para passeio.',
      },
      {
        title: 'O que esperar da Yokohama',
        content:
          'A Yokohama, japonesa, é reconhecida pela boa relação entre desempenho e preço, com opções para passeio, SUV e performance. É uma das marcas com maior variedade de medidas na Carplus.',
      },
      {
        title: 'Como decidir',
        content:
          'Se você busca uma marca consagrada e amplamente disponível, a Pirelli é forte candidata; se quer comparar performance e preço com boa variedade, vale avaliar a Yokohama. Comparamos as opções da sua medida com você, com montagem inclusa e 10x sem juros.',
      },
    ],
    faq: [
      {
        question: 'Yokohama é uma boa marca de pneu?',
        answer:
          'Sim. A Yokohama é uma marca japonesa reconhecida, com boas opções para passeio, SUV e performance e excelente variedade de medidas. Consulte a sua pelo WhatsApp (41) 3082-7282.',
      },
      {
        question: 'Qual marca tem mais opções de medida?',
        answer:
          'Na Carplus, a Yokohama costuma ter uma das maiores variedades de medidas, mas a Pirelli também tem ampla cobertura. Confirme a sua medida abaixo ou pelo WhatsApp.',
      },
      {
        question: 'Posso parcelar?',
        answer:
          'Sim, em até 10x sem juros, com montagem, balanceamento e calibragem inclusos, em ambas as marcas.',
      },
    ],
    whatsappMsg: 'Olá! Estou em dúvida entre Pirelli e Yokohama. Pode me ajudar a escolher?',
  },
  // ─── Bridgestone x Michelin ────────────────────────────────────
  {
    slug: 'bridgestone-ou-michelin',
    badge: 'Comparativo · Curitiba',
    h1: 'Bridgestone ou Michelin: qual escolher?',
    highlight: 'Bridgestone ou Michelin',
    metaTitle: 'Bridgestone ou Michelin: qual o melhor pneu? | Carplus Curitiba',
    metaDescription:
      'Bridgestone ou Michelin? Comparativo imparcial das duas marcas premium na Carplus, em Curitiba. Montagem inclusa e 10x sem juros. WhatsApp: (41) 3082-7282.',
    intro:
      'Bridgestone e Michelin são duas marcas premium de referência mundial. As duas entregam alto padrão de qualidade — a melhor escolha depende da linha e da medida do seu carro. Veja o comparativo e os modelos disponíveis na Carplus, no Portão.',
    tags: ['Premium', 'Bridgestone', 'Michelin', 'Comparativo imparcial'],
    brands: ['Bridgestone', 'Michelin'],
    sections: [
      {
        title: 'O que esperar da Bridgestone',
        content:
          'Marca japonesa líder global, a Bridgestone tem linhas como Turanza (conforto), Ecopia (economia de combustível) e Potenza (performance), com destaque em conforto acústico e eficiência.',
      },
      {
        title: 'O que esperar da Michelin',
        content:
          'A Michelin, francesa, é referência em durabilidade. Linhas como Primacy 4, Energy XM2 e Pilot Sport 4 cobrem do uso econômico ao esportivo, geralmente no topo de preço do segmento.',
      },
      {
        title: 'Como decidir',
        content:
          'As duas são excelentes; a decisão passa por linha, medida e orçamento. Se prioriza durabilidade máxima, avalie a Michelin; se busca eficiência e conforto acústico, a Bridgestone é forte. Comparamos as opções da sua medida com você, com montagem inclusa e 10x sem juros.',
      },
    ],
    faq: [
      {
        question: 'Bridgestone ou Michelin dura mais?',
        answer:
          'A Michelin é frequentemente associada a alta durabilidade, mas a Bridgestone também tem linhas muito duráveis. O resultado depende do modelo e do uso. Consulte a sua medida pelo WhatsApp (41) 3082-7282.',
      },
      {
        question: 'Qual é mais cara?',
        answer:
          'Ambas são marcas premium e o preço varia por linha e medida. Na Carplus você compara os valores em estoque e parcela em até 10x sem juros.',
      },
      {
        question: 'A Carplus instala na hora?',
        answer:
          'Na maioria das medidas em estoque, sim — com montagem, balanceamento e calibragem inclusos. Confirme pelo WhatsApp.',
      },
    ],
    whatsappMsg: 'Olá! Estou em dúvida entre Bridgestone e Michelin. Pode me ajudar a escolher?',
  },
  // ─── Bridgestone x Goodyear ────────────────────────────────────
  {
    slug: 'bridgestone-ou-goodyear',
    badge: 'Comparativo · Curitiba',
    h1: 'Bridgestone ou Goodyear: qual o melhor?',
    highlight: 'Bridgestone ou Goodyear',
    metaTitle: 'Bridgestone ou Goodyear: qual escolher? | Carplus Curitiba',
    metaDescription:
      'Bridgestone ou Goodyear? Comparativo imparcial na Carplus, em Curitiba. Veja modelos disponíveis, montagem inclusa e 10x sem juros. WhatsApp: (41) 3082-7282.',
    intro:
      'Bridgestone e Goodyear são marcas tradicionais e confiáveis. As duas atendem bem o uso diário — a escolha depende da medida e da linha disponível para o seu carro. Confira o comparativo e os modelos em estoque na Carplus, no Portão.',
    tags: ['Bridgestone', 'Goodyear', 'Comparativo imparcial', 'Curitiba'],
    brands: ['Bridgestone', 'Goodyear'],
    sections: [
      {
        title: 'O que esperar da Bridgestone',
        content:
          'A Bridgestone, japonesa, é líder mundial e oferece linhas como Turanza, Ecopia e Potenza, com destaque em conforto e eficiência de combustível.',
      },
      {
        title: 'O que esperar da Goodyear',
        content:
          'A Goodyear, americana, é conhecida pela robustez e por linhas como Direction Touring e EfficientGrip, com bom equilíbrio entre conforto e segurança.',
      },
      {
        title: 'Como decidir',
        content:
          'As duas marcas são confiáveis para o dia a dia. A melhor escolha vem da comparação direta entre os modelos disponíveis para a sua medida — feita por nossa equipe técnica, com montagem inclusa e 10x sem juros.',
      },
    ],
    faq: [
      {
        question: 'Bridgestone ou Goodyear: qual é melhor?',
        answer:
          'As duas são confiáveis. A diferença está na linha e na medida disponível. Consulte a sua pelo WhatsApp (41) 3082-7282 e compare as opções em estoque.',
      },
      {
        question: 'Qual marca economiza mais combustível?',
        answer:
          'A linha Ecopia, da Bridgestone, tem foco em baixa resistência ao rolamento, o que ajuda na economia. A Goodyear também tem opções eficientes. Depende do modelo específico.',
      },
      {
        question: 'A montagem é inclusa?',
        answer:
          'Sim. Em ambas as marcas, montagem, balanceamento e calibragem já estão inclusos, com parcelamento em até 10x sem juros.',
      },
    ],
    whatsappMsg: 'Olá! Estou em dúvida entre Bridgestone e Goodyear. Pode me ajudar a escolher?',
  },
  // ─── Michelin x Goodyear ───────────────────────────────────────
  {
    slug: 'michelin-ou-goodyear',
    badge: 'Comparativo · Curitiba',
    h1: 'Michelin ou Goodyear: qual escolher?',
    highlight: 'Michelin ou Goodyear',
    metaTitle: 'Michelin ou Goodyear: qual o melhor pneu? | Carplus Curitiba',
    metaDescription:
      'Michelin ou Goodyear? Comparativo imparcial na Carplus, em Curitiba. Modelos disponíveis, montagem inclusa e 10x sem juros. WhatsApp: (41) 3082-7282.',
    intro:
      'Michelin e Goodyear são marcas consagradas e presentes em montadoras do mundo todo. A melhor escolha depende da linha, da medida e do orçamento. Veja o comparativo imparcial e os modelos disponíveis na Carplus, no Portão.',
    tags: ['Michelin', 'Goodyear', 'Comparativo imparcial', 'Curitiba'],
    brands: ['Michelin', 'Goodyear'],
    sections: [
      {
        title: 'O que esperar da Michelin',
        content:
          'A Michelin, francesa, é referência em durabilidade e tecnologia, com linhas como Energy XM2, Primacy 4 e Pilot Sport 4, geralmente posicionadas no topo de preço.',
      },
      {
        title: 'O que esperar da Goodyear',
        content:
          'A Goodyear, americana, é robusta e confiável, com linhas como Direction Touring e EfficientGrip, oferecendo bom equilíbrio entre conforto, segurança e preço.',
      },
      {
        title: 'Como decidir',
        content:
          'Se a prioridade é durabilidade máxima, a Michelin tende a se destacar; se você busca uma marca premium com preço mais acessível, a Goodyear é forte candidata. Comparamos as opções da sua medida com você, com montagem inclusa e 10x sem juros.',
      },
    ],
    faq: [
      {
        question: 'Michelin dura mais que Goodyear?',
        answer:
          'A Michelin é frequentemente associada a alta durabilidade, mas o resultado depende do modelo e do uso. A Goodyear também tem linhas duráveis. Consulte pelo WhatsApp (41) 3082-7282.',
      },
      {
        question: 'Qual tem melhor preço?',
        answer:
          'Na maioria das medidas, a Goodyear costuma ter preço mais acessível que a Michelin, mas isso varia por linha. Compare os valores em estoque na Carplus.',
      },
      {
        question: 'A Carplus trabalha com as duas?',
        answer:
          'Sim, com Michelin e Goodyear, entre outras marcas, na loja do bairro Portão, em Curitiba. Montagem inclusa e 10x sem juros.',
      },
    ],
    whatsappMsg: 'Olá! Estou em dúvida entre Michelin e Goodyear. Pode me ajudar a escolher?',
  },
  // ─── Yokohama x Pirelli ────────────────────────────────────────
  {
    slug: 'yokohama-ou-pirelli',
    badge: 'Comparativo · Curitiba',
    h1: 'Yokohama ou Pirelli: qual o melhor?',
    highlight: 'Yokohama ou Pirelli',
    metaTitle: 'Yokohama ou Pirelli: qual escolher? | Carplus Curitiba',
    metaDescription:
      'Yokohama ou Pirelli? Comparativo imparcial na Carplus, em Curitiba. Veja modelos disponíveis, montagem inclusa e 10x sem juros. WhatsApp: (41) 3082-7282.',
    intro:
      'Yokohama e Pirelli são marcas fortes com ampla variedade de medidas. As duas atendem do uso urbano à performance. Veja o comparativo e os modelos disponíveis na Carplus, no bairro Portão, em Curitiba.',
    tags: ['Yokohama', 'Pirelli', 'Comparativo imparcial', 'Curitiba'],
    brands: ['Yokohama', 'Pirelli'],
    sections: [
      {
        title: 'O que esperar da Yokohama',
        content:
          'A Yokohama, japonesa, oferece ótima relação entre desempenho e preço, com opções para passeio, SUV e performance. É uma das marcas com maior variedade de medidas na Carplus.',
      },
      {
        title: 'O que esperar da Pirelli',
        content:
          'A Pirelli, italiana, é uma das marcas mais vendidas do Brasil, com equilíbrio entre conforto, aderência e custo, e linhas consagradas como Cinturato e P400 Evo.',
      },
      {
        title: 'Como decidir',
        content:
          'Se você quer comparar performance e preço com boa variedade, a Yokohama é forte; se prefere uma marca amplamente consagrada e disponível, a Pirelli é ótima opção. Comparamos as opções da sua medida com você, com montagem inclusa e 10x sem juros.',
      },
    ],
    faq: [
      {
        question: 'Yokohama é tão boa quanto a Pirelli?',
        answer:
          'Sim. As duas são marcas reconhecidas e confiáveis. A diferença está na linha e na medida disponível para o seu carro. Consulte pelo WhatsApp (41) 3082-7282.',
      },
      {
        question: 'Qual tem mais opções de medida?',
        answer:
          'A Yokohama costuma ter uma das maiores variedades de medidas na Carplus, mas a Pirelli também tem ampla cobertura. Veja os modelos abaixo ou confirme pelo WhatsApp.',
      },
      {
        question: 'Posso parcelar a compra?',
        answer:
          'Sim, em até 10x sem juros, com montagem, balanceamento e calibragem inclusos, em ambas as marcas.',
      },
    ],
    whatsappMsg: 'Olá! Estou em dúvida entre Yokohama e Pirelli. Pode me ajudar a escolher?',
  },
  // ─── Prinx x Delinte ───────────────────────────────────────────
  {
    slug: 'prinx-ou-delinte',
    badge: 'Custo-benefício · Curitiba',
    h1: 'Prinx ou Delinte: qual escolher?',
    highlight: 'Prinx ou Delinte',
    metaTitle: 'Prinx ou Delinte: qual o melhor pneu de custo-benefício? | Carplus Curitiba',
    metaDescription:
      'Prinx ou Delinte? Comparativo imparcial de duas marcas de custo-benefício na Carplus, em Curitiba. Montagem inclusa e 10x sem juros. WhatsApp: (41) 3082-7282.',
    intro:
      'Prinx e Delinte são marcas que se destacam pelo custo-benefício, ideais para quem busca economia sem abrir mão de segurança. Veja o comparativo imparcial e os modelos disponíveis na Carplus, no bairro Portão, em Curitiba.',
    tags: ['Custo-benefício', 'Prinx', 'Delinte', 'Comparativo imparcial'],
    brands: ['Prinx', 'Delinte'],
    sections: [
      {
        title: 'O que esperar da Prinx',
        content:
          'A Prinx é uma marca com excelente custo-benefício para passeio e SUV, oferecendo boa qualidade por um preço acessível. É uma opção interessante para quem quer economizar na troca.',
      },
      {
        title: 'O que esperar da Delinte',
        content:
          'A Delinte oferece opções de performance e SUV com ótimo preço, atendendo bem quem busca pneus mais largos ou esportivos sem o valor das marcas premium.',
      },
      {
        title: 'Como decidir',
        content:
          'Ambas são marcas de custo-benefício. A escolha depende da medida e do perfil do seu carro. Nossa equipe ajuda você a comparar as opções disponíveis sem compromisso, com montagem inclusa e parcelamento em até 10x sem juros.',
      },
    ],
    faq: [
      {
        question: 'Prinx ou Delinte: qual tem melhor custo-benefício?',
        answer:
          'As duas são marcas de bom custo-benefício. A melhor escolha depende da medida e da disponibilidade para o seu carro. Consulte pelo WhatsApp (41) 3082-7282 e compare os valores.',
      },
      {
        question: 'Essas marcas são seguras?',
        answer:
          'Sim. Prinx e Delinte seguem os padrões exigidos para comercialização no Brasil. São boas opções para quem busca economia mantendo segurança no uso diário.',
      },
      {
        question: 'A montagem está inclusa?',
        answer:
          'Sim. Em ambas as marcas, montagem, balanceamento e calibragem já estão inclusos, com até 10x sem juros.',
      },
    ],
    whatsappMsg: 'Olá! Estou em dúvida entre Prinx e Delinte. Pode me ajudar a escolher?',
  },
  // ─── Prinx é bom? ──────────────────────────────────────────────
  {
    slug: 'prinx-e-bom',
    badge: 'Avaliação · Curitiba',
    h1: 'Pneu Prinx é bom? Vale a pena?',
    highlight: 'Prinx é bom',
    metaTitle: 'Pneu Prinx é bom? Vale a pena? | Carplus Curitiba',
    metaDescription:
      'Pneu Prinx é bom? Saiba se vale a pena, suas vantagens e os modelos disponíveis na Carplus, em Curitiba. Montagem inclusa e 10x sem juros. WhatsApp: (41) 3082-7282.',
    intro:
      'O pneu Prinx é uma das opções de custo-benefício mais procuradas por quem quer economizar na troca sem abrir mão de segurança. Veja abaixo uma avaliação honesta da marca e os modelos disponíveis na Carplus, no bairro Portão, em Curitiba.',
    tags: ['Prinx', 'Custo-benefício', 'Avaliação', 'Curitiba'],
    brands: ['Prinx'],
    sections: [
      {
        title: 'Prinx vale a pena?',
        content:
          'A Prinx é uma marca de custo-benefício que entrega boa qualidade por um preço acessível, sendo uma escolha interessante para o uso urbano e rodoviário do dia a dia. Para quem prioriza economia na troca, costuma ser uma ótima opção.',
      },
      {
        title: 'Para quem é indicada',
        content:
          'É indicada para motoristas que rodam principalmente na cidade e em estradas, sem exigência de desempenho extremo, e que querem reduzir o custo da troca mantendo segurança. Para passeio e SUV, a Prinx tem opções competitivas.',
      },
      {
        title: 'Compre com instalação na Carplus',
        content:
          'Na Carplus, no Portão, o pneu Prinx vem com montagem, balanceamento e calibragem inclusos, e você ainda pode fazer o alinhamento 3D no mesmo lugar. Parcelamento em até 10x sem juros e garantia com nota fiscal.',
      },
    ],
    faq: [
      {
        question: 'Pneu Prinx é bom mesmo?',
        answer:
          'Sim. A Prinx é uma marca de custo-benefício que cumpre bem o uso urbano e rodoviário, sendo uma boa opção para quem quer economizar mantendo segurança. Consulte a sua medida pelo WhatsApp (41) 3082-7282.',
      },
      {
        question: 'Quanto tempo dura um pneu Prinx?',
        answer:
          'A durabilidade depende dos hábitos de condução, da calibragem correta e do alinhamento em dia. Com cuidados básicos, a Prinx oferece vida útil adequada para o uso diário.',
      },
      {
        question: 'A Carplus tem pneu Prinx em estoque?',
        answer:
          'Trabalhamos com a marca Prinx em diversas medidas. A disponibilidade varia — confirme a sua medida pelo WhatsApp ou veja os modelos abaixo.',
      },
    ],
    whatsappMsg: 'Olá! Quero saber se o pneu Prinx é bom para o meu carro e o preço.',
  },
  // ─── Delinte é bom? ────────────────────────────────────────────
  {
    slug: 'delinte-e-bom',
    badge: 'Avaliação · Curitiba',
    h1: 'Pneu Delinte é bom? Vale a pena?',
    highlight: 'Delinte é bom',
    metaTitle: 'Pneu Delinte é bom? Vale a pena? | Carplus Curitiba',
    metaDescription:
      'Pneu Delinte é bom? Veja se vale a pena, vantagens e os modelos disponíveis na Carplus, em Curitiba. Montagem inclusa e 10x sem juros. WhatsApp: (41) 3082-7282.',
    intro:
      'O pneu Delinte é uma opção de custo-benefício com destaque para medidas de performance e SUV. Veja abaixo uma avaliação honesta da marca e os modelos disponíveis na Carplus, no bairro Portão, em Curitiba.',
    tags: ['Delinte', 'Custo-benefício', 'Avaliação', 'Curitiba'],
    brands: ['Delinte'],
    sections: [
      {
        title: 'Delinte vale a pena?',
        content:
          'A Delinte é uma marca de custo-benefício que se destaca em opções de performance e SUV, oferecendo pneus mais largos e esportivos por um preço acessível. É uma boa escolha para quem busca esse perfil sem o valor das marcas premium.',
      },
      {
        title: 'Para quem é indicada',
        content:
          'É indicada para motoristas que buscam medidas esportivas ou para SUV com bom preço, mantendo segurança no uso diário. Para quem quer um visual mais agressivo sem gastar como em marcas premium, é uma opção competitiva.',
      },
      {
        title: 'Compre com instalação na Carplus',
        content:
          'Na Carplus, no Portão, o pneu Delinte vem com montagem, balanceamento e calibragem inclusos, e você ainda pode fazer o alinhamento 3D no mesmo lugar. Parcelamento em até 10x sem juros e garantia com nota fiscal.',
      },
    ],
    faq: [
      {
        question: 'Pneu Delinte é bom?',
        answer:
          'Sim. A Delinte é uma marca de custo-benefício com boas opções de performance e SUV, indicada para quem quer economizar mantendo segurança. Consulte a sua medida pelo WhatsApp (41) 3082-7282.',
      },
      {
        question: 'Delinte é boa para SUV?',
        answer:
          'A Delinte tem opções voltadas para SUV e performance com bom preço. A indicação certa depende da medida do seu veículo — confirme pelo WhatsApp.',
      },
      {
        question: 'A Carplus instala o pneu Delinte?',
        answer:
          'Sim. Trabalhamos com a marca Delinte e a montagem, o balanceamento e a calibragem já estão inclusos, com até 10x sem juros.',
      },
    ],
    whatsappMsg: 'Olá! Quero saber se o pneu Delinte é bom para o meu carro e o preço.',
  },
];

export function getComparisonPage(slug: string): ComparisonPage | undefined {
  return COMPARISON_PAGES.find((p) => p.slug === slug);
}
