// /src/lib/tireContent.ts
// ─────────────────────────────────────────────────────────────────────────────
// CONTEÚDO PROGRAMÁTICO PREMIUM
// ─────────────────────────────────────────────────────────────────────────────
// Gera, de forma determinística (mesmo input → mesmo output), texto único e
// extenso para cada página canônica de pneu, eliminando o problema de
// "thin content". Cada produto recebe: introdução exclusiva (150+ palavras),
// aplicações, benefícios, características técnicas, indicações de uso,
// comparação com modelos similares e CTA local para Curitiba.
//
// Objetivo: 900+ palavras únicas por página indexável.

import { TIRES, type Tire } from '../data';

export interface ContentSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface TireContent {
  intro: string;
  sections: ContentSection[];
  comparison: { tire: Tire; reason: string }[];
  ctaLocal: string;
  wordCount: number;
}

const STORE = 'Carplus Centro Automotivo';
const ADDRESS = 'Av. Arthur da Silva Bernardes, 1323 — bairro Portão, Curitiba (PR)';
const PHONE = '(41) 3082-7282';

function countWords(...texts: string[]): number {
  return texts.join(' ').trim().split(/\s+/).filter(Boolean).length;
}

function carList(tire: Tire): string {
  const cars = tire.carros || [];
  if (cars.length === 0) return 'diversos veículos de passeio';
  if (cars.length <= 2) return cars.join(' e ');
  return `${cars.slice(0, -1).join(', ')} e ${cars[cars.length - 1]}`;
}

function purposeByCategory(categoria: string): string {
  const c = (categoria || '').toLowerCase();
  if (c.includes('esportivo')) return 'condução esportiva, com prioridade para aderência em curvas e frenagem em alta velocidade';
  if (c.includes('suv')) return 'SUVs e utilitários, equilibrando conforto, carga e estabilidade em diferentes pisos';
  if (c.includes('premium') || c.includes('conforto')) return 'rodar com máximo conforto acústico e baixa vibração no dia a dia urbano e em viagens';
  if (c.includes('performance')) return 'desempenho em piso seco e molhado com baixa resistência ao rolamento';
  return 'uso urbano e rodoviário diário, com foco em custo-benefício, durabilidade e segurança';
}

// ─── Introdução exclusiva (150+ palavras) ─────────────────────────────────────
function buildIntro(tire: Tire): string {
  const purpose = purposeByCategory(tire.categoria);
  return [
    `O pneu ${tire.nome} é um modelo da linha ${tire.linha}, fabricado pela ${tire.marca} na medida ${tire.medida} (aro ${tire.aro}), com índice de carga ${tire.indiceCarga} e índice de velocidade ${tire.indiceVelocidade}.`,
    `Classificado na categoria ${tire.categoria}, ele foi projetado para ${purpose}.`,
    `Na prática, isso significa que o ${tire.marca} ${tire.linha} ${tire.medida} entrega uma combinação consistente entre segurança, conforto e vida útil — três fatores decisivos para quem dirige em Curitiba, onde o asfalto alterna trechos secos, dias chuvosos e variações bruscas de temperatura ao longo do ano.`,
    `${tire.descricao}`,
    `Por ser uma medida amplamente utilizada por modelos como ${carList(tire)}, esse pneu costuma ter alta procura e boa disponibilidade de pronta entrega na ${STORE}, no bairro Portão.`,
    `Abaixo você encontra todas as informações técnicas, aplicações, benefícios reais, indicações de uso e uma comparação honesta com modelos similares, para tomar a melhor decisão antes de trocar os pneus do seu carro.`,
  ].join(' ');
}

function buildSections(tire: Tire): ContentSection[] {
  const purpose = purposeByCategory(tire.categoria);

  const aplicacoes: ContentSection = {
    heading: `Aplicações do pneu ${tire.marca} ${tire.linha} ${tire.medida}`,
    paragraphs: [
      `A medida ${tire.medida} é homologada para uma série de veículos nacionais e importados. Entre os modelos mais comuns que utilizam essa especificação de fábrica ou como equivalente aprovado estão ${carList(tire)}.`,
      `Antes de comprar, recomendamos sempre conferir a medida correta na lateral do pneu atual ou no manual do proprietário. Montar uma medida diferente da homologada pode alterar a leitura do velocímetro, o comportamento da suspensão e até a segurança em frenagens de emergência.`,
    ],
    bullets: [
      `Indicado para: ${(tire.tipoVeiculo || []).join(', ') || 'veículos de passeio'}`,
      `Aro ${tire.aro}" — largura ${tire.largura}mm — perfil ${tire.perfil}%`,
      `Compatível com rodas originais e aftermarket dentro da mesma medida`,
    ],
  };

  const beneficios: ContentSection = {
    heading: `Benefícios e tecnologia ${tire.marca}`,
    paragraphs: [
      `O ${tire.linha} foi desenvolvido pela ${tire.marca} para oferecer ${purpose}. O composto de borracha e o desenho dos sulcos trabalham juntos para escoar água com eficiência, reduzir o risco de aquaplanagem e manter o contato do pneu com o solo mesmo em curvas mais exigentes.`,
      `Outro ponto importante é a durabilidade: com calibragem correta, rodízio periódico e alinhamento em dia, modelos da linha ${tire.linha} costumam entregar entre 40.000 e 60.000 km de vida útil, dependendo do estilo de condução e das condições das vias.`,
    ],
    bullets: [
      'Boa aderência em piso seco e molhado',
      'Frenagem segura e previsível',
      'Conforto acústico e baixa vibração',
      'Resistência ao desgaste irregular',
    ],
  };

  const caracteristicas: ContentSection = {
    heading: 'Características técnicas detalhadas',
    paragraphs: [
      `A nomenclatura ${tire.medida} indica que o pneu tem ${tire.largura}mm de largura, perfil (altura do flanco) equivalente a ${tire.perfil}% da largura e foi feito para rodas de aro ${tire.aro} polegadas. O índice de carga ${tire.indiceCarga} informa o peso máximo que cada pneu suporta, enquanto o índice de velocidade ${tire.indiceVelocidade} define a velocidade máxima sustentada com segurança.`,
      `Respeitar esses índices é fundamental: usar um pneu com índice de carga ou velocidade inferior ao recomendado pelo fabricante do veículo compromete a segurança e pode invalidar a garantia. A equipe técnica da ${STORE} confere todos esses dados antes da instalação.`,
    ],
  };

  const indicacoes: ContentSection = {
    heading: 'Indicações de uso e manutenção',
    paragraphs: [
      `Para extrair o máximo do ${tire.marca} ${tire.linha}, mantenha a calibragem na pressão recomendada pela montadora (geralmente indicada na coluna da porta do motorista), faça o rodízio a cada 10.000 km e verifique o alinhamento e o balanceamento sempre que sentir o volante vibrar ou o carro "puxar" para um lado.`,
      `Pneus com mais de cinco anos de fabricação, sulcos abaixo de 1,6mm (indicador TWI) ou com bolhas e cortes laterais devem ser substituídos imediatamente. Na ${STORE} oferecemos inspeção gratuita para avaliar o estado real dos seus pneus.`,
    ],
    bullets: [
      'Calibre os pneus a frio, pelo menos uma vez por mês',
      'Faça o rodízio a cada 10.000 km',
      'Alinhamento e balanceamento a cada troca ou impacto forte',
      'Troque quando o sulco atingir 1,6mm (TWI)',
    ],
  };

  return [aplicacoes, beneficios, caracteristicas, indicacoes];
}

// ─── Comparação com modelos similares ─────────────────────────────────────────
function buildComparison(tire: Tire): { tire: Tire; reason: string }[] {
  const candidates = TIRES.filter(
    (t) => t && t.slug && t.id !== tire.id && t.medida === tire.medida && t.marca !== tire.marca,
  );
  // Se não houver outras marcas na mesma medida, usa o mesmo aro.
  const pool = candidates.length > 0
    ? candidates
    : TIRES.filter((t) => t && t.slug && t.id !== tire.id && t.aro === tire.aro && t.marca !== tire.marca);

  const seenBrands = new Set<string>();
  const result: { tire: Tire; reason: string }[] = [];
  for (const t of pool) {
    if (seenBrands.has(t.marca)) continue;
    seenBrands.add(t.marca);
    result.push({
      tire: t,
      reason: `Alternativa ${t.categoria.toLowerCase()} da ${t.marca} (${t.linha}) na faixa do aro ${t.aro}.`,
    });
    if (result.length >= 3) break;
  }
  return result;
}

function buildCtaLocal(tire: Tire): string {
  return [
    `Quer comprar o pneu ${tire.nome} em Curitiba com montagem inclusa?`,
    `A ${STORE} fica na ${ADDRESS} e atende toda a região metropolitana — Portão, Água Verde, Fazendinha, Novo Mundo, Santa Quitéria e bairros vizinhos.`,
    `Trabalhamos com pronta entrega, parcelamento em até 10x sem juros, balanceamento computadorizado e descarte ecológico do pneu antigo já incluídos.`,
    `Fale agora pelo WhatsApp ou ligue para ${PHONE} e garanta o melhor preço do ${tire.marca} ${tire.linha} ${tire.medida} com instalação no mesmo dia.`,
  ].join(' ');
}

/** Gera o pacote completo de conteúdo programático para um pneu. */
export function generateTireContent(tire: Tire): TireContent {
  const intro = buildIntro(tire);
  const sections = buildSections(tire);
  const comparison = buildComparison(tire);
  const ctaLocal = buildCtaLocal(tire);

  const allText = [
    intro,
    ...sections.flatMap((s) => [s.heading, ...s.paragraphs, ...(s.bullets || [])]),
    ...comparison.map((c) => c.reason),
    ctaLocal,
  ];

  return {
    intro,
    sections,
    comparison,
    ctaLocal,
    wordCount: countWords(...allText),
  };
}
