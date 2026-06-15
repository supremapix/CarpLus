// /src/lib/seoIndexing.ts
// ─────────────────────────────────────────────────────────────────────────────
// MOTOR DE INDEXAÇÃO INTELIGENTE + CANONICALIZAÇÃO
// ─────────────────────────────────────────────────────────────────────────────
// Resolve o problema "Detectada, mas não indexada no momento" do Google Search
// Console concentrando a autoridade em UMA URL canônica por produto e marcando
// as variantes equivalentes (por veículo, -para-*, -run-flat, -oe, -yt, -1..-9)
// como noindex,follow.
//
// Este módulo é usado tanto no client (componentes React) quanto no build
// (scripts/generate-sitemap.ts) para garantir uma única fonte da verdade.

import { TIRES, type Tire } from '../data';

export const BASE_URL = 'https://www.carpluspneuseoficina.com.br';

// Mínimo de palavras únicas exigido para uma página de produto ser indexável.
export const MIN_PRODUCT_WORDS = 900;

// ─── Detecção de variantes duplicadas ───────────────────────────────────────
// Marcas/modelos comuns que aparecem como sufixo em slugs específicos por veículo.
const VEHICLE_TOKENS = [
  'chevrolet', 'gm', 'fiat', 'volkswagen', 'vw', 'honda', 'toyota', 'hyundai',
  'renault', 'ford', 'jeep', 'nissan', 'peugeot', 'citroen', 'mitsubishi',
  'kia', 'bmw', 'audi', 'mercedes', 'mini', 'volvo', 'land-rover', 'seat',
  'celta', 'classic', 'onix', 'prisma', 'cruze', 'corsa', 'montana', 'spin',
  'cobalt', 'tracker', 's10', 'uno', 'palio', 'argo', 'cronos', 'mobi', 'toro',
  'strada', 'siena', 'punto', 'bravo', 'idea', 'stilo', 'tempra', 'gol', 'voyage',
  'polo', 'virtus', 'golf', 'jetta', 'fox', 'saveiro', 'up', 'tcross', 't-cross',
  'nivus', 'amarok', 'civic', 'city', 'fit', 'hrv', 'hr-v', 'wrv', 'wr-v',
  'corolla', 'etios', 'yaris', 'hilux', 'sw4', 'rav4', 'hb20', 'hb20s', 'creta',
  'tucson', 'ix35', 'sandero', 'logan', 'duster', 'kwid', 'captur', 'oroch',
  'fluence', 'megane', 'ka', 'fiesta', 'focus', 'ecosport', 'ranger', 'territory',
  'compass', 'renegade', 'commander', 'kicks', 'versa', 'march', 'frontier',
  '206', '207', '208', '2008', '3008', '308',
];

// Sufixos técnicos que costumam gerar URLs equivalentes duplicadas.
const VARIANT_SUFFIX_RE = /-(run-flat|runflat|oe|oem|yt|bl|xl|mo|moe|ao|ssr|star)$/i;
const TRAILING_NUMBER_RE = /-\d{1,2}$/;
const PARA_VEICULO_RE = /-para-/i;

const VEHICLE_SUFFIX_RE = new RegExp(
  `-(${VEHICLE_TOKENS.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})(-[a-z0-9]+)*$`,
  'i',
);

/**
 * Assinatura de especificação técnica. Pneus com a MESMA assinatura são
 * considerados equivalentes (mesmo produto) e compartilham uma única canônica.
 */
function specKey(t: Tire): string {
  return [t.marca, t.medida, t.linha, t.indiceCarga, t.indiceVelocidade]
    .map((s) => (s || '').toString().toLowerCase().replace(/\s+/g, ''))
    .join('|');
}

/**
 * Penalidade de "variante": quanto MAIOR, menos canônico é o slug.
 * O slug com a menor penalidade do grupo vira a URL principal.
 */
function variantPenalty(t: Tire): number {
  const s = t.slug || '';
  let p = 0;
  if (PARA_VEICULO_RE.test(s)) p += 1000;
  if (VEHICLE_SUFFIX_RE.test(s)) p += 800;
  if (VARIANT_SUFFIX_RE.test(s)) p += 400;
  if (TRAILING_NUMBER_RE.test(s)) p += 300;
  // Quanto menor o slug, mais "limpo"/canônico (desempate).
  p += s.length * 0.1;
  // Pneus em destaque ganham leve prioridade como representantes.
  if (t.destaque) p -= 5;
  return p;
}

// ─── Mapa canônico (memoizado) ───────────────────────────────────────────────
let _canonicalMap: Map<string, string> | null = null;

function buildCanonicalMap(): Map<string, string> {
  const groups = new Map<string, Tire[]>();
  for (const t of TIRES) {
    if (!t || !t.slug) continue;
    const k = specKey(t);
    const arr = groups.get(k);
    if (arr) arr.push(t);
    else groups.set(k, [t]);
  }

  const map = new Map<string, string>(); // slug -> slug canônico
  for (const arr of groups.values()) {
    let rep = arr[0];
    let best = variantPenalty(rep);
    for (let i = 1; i < arr.length; i++) {
      const pen = variantPenalty(arr[i]);
      if (pen < best) {
        best = pen;
        rep = arr[i];
      }
    }
    for (const t of arr) map.set(t.slug, rep.slug);
  }
  return map;
}

function canonicalMap(): Map<string, string> {
  if (!_canonicalMap) _canonicalMap = buildCanonicalMap();
  return _canonicalMap;
}

/** Slug canônico para um dado slug de pneu (pode ser ele mesmo). */
export function getCanonicalSlug(slug: string): string {
  return canonicalMap().get(slug) ?? slug;
}

/** True quando o slug É a versão canônica do seu grupo. */
export function isCanonicalSlug(slug: string): boolean {
  return getCanonicalSlug(slug) === slug;
}

/** URL absoluta canônica para a página de um pneu. */
export function getCanonicalTireUrl(slug: string): string {
  return `${BASE_URL}/pneu/${getCanonicalSlug(slug)}`;
}

// ─── SEO SCORE ───────────────────────────────────────────────────────────────
// SEO_SCORE = conteúdo + estoque + buscas + links internos + conversão.
export interface SeoScoreBreakdown {
  conteudo: number;
  estoque: number;
  buscas: number;
  linksInternos: number;
  conversao: number;
  total: number;
}

// Medidas de alta demanda (sinal de "buscas"). Espelha o sitemap.
const HIGH_DEMAND_MEASURES = new Set([
  '175/70R13', '185/60R15', '185/65R14', '195/55R15', '195/60R15', '185/65R15',
  '205/55R16', '195/65R15', '205/45R17', '225/45R17', '215/50R17', '205/60R16',
]);

export function computeSeoScore(tire: Tire): SeoScoreBreakdown {
  // Conteúdo (0-30): descrição + variedade de aplicações.
  const descWords = (tire.descricao || '').trim().split(/\s+/).filter(Boolean).length;
  const conteudo = Math.min(30, Math.round(descWords / 4) + Math.min(10, (tire.carros?.length || 0)));

  // Estoque (0-20): assume-se disponível (catálogo de pronta-entrega).
  const estoque = 20;

  // Buscas (0-25): medida de alta demanda + marca premium + destaque.
  let buscas = HIGH_DEMAND_MEASURES.has(tire.medida) ? 18 : 8;
  if (tire.destaque) buscas += 4;
  if (tire.novoModelo) buscas += 3;
  buscas = Math.min(25, buscas);

  // Links internos (0-15): potencial de linkagem (carros + tipo de veículo).
  const linksInternos = Math.min(
    15,
    (tire.carros?.length || 0) * 2 + (tire.tipoVeiculo?.length || 0) * 2,
  );

  // Conversão (0-10): categorias premium/esportivas convertem mais alto.
  const cat = (tire.categoria || '').toLowerCase();
  const conversao = /premium|esportivo|suv|performance|conforto/.test(cat) ? 10 : 6;

  const total = conteudo + estoque + buscas + linksInternos + conversao;
  return { conteudo, estoque, buscas, linksInternos, conversao, total };
}

// Score mínimo para uma página canônica ser indexável.
export const MIN_SEO_SCORE = 45;

// ─── DECISÃO DE INDEXAÇÃO ─────────────────────────────────────────────────────
export type NoindexReason =
  | 'duplicate'
  | 'low-score'
  | 'thin-content';

export interface IndexDecision {
  index: boolean;
  canonicalSlug: string;
  canonicalUrl: string;
  reasons: NoindexReason[];
  score: number;
}

/**
 * Decide se a página de um pneu deve ser indexada.
 * Regras:
 *  - Variante equivalente (não-canônica)  → noindex,follow + canonical p/ a principal.
 *  - Score SEO abaixo do mínimo           → noindex,follow.
 *  - Caso contrário                       → index,follow (canonical para si).
 *
 * Observação: o conteúdo "fino" é resolvido automaticamente pelo gerador
 * programático (tireContent.ts), que garante 900+ palavras nas páginas canônicas.
 */
export function decideTireIndexing(tire: Tire): IndexDecision {
  const canonicalSlug = getCanonicalSlug(tire.slug);
  const isCanonical = canonicalSlug === tire.slug;
  const { total } = computeSeoScore(tire);
  const reasons: NoindexReason[] = [];

  if (!isCanonical) reasons.push('duplicate');
  if (isCanonical && total < MIN_SEO_SCORE) reasons.push('low-score');

  return {
    index: reasons.length === 0,
    canonicalSlug,
    canonicalUrl: `${BASE_URL}/pneu/${canonicalSlug}`,
    reasons,
    score: total,
  };
}

// ─── MEDIDAS ──────────────────────────────────────────────────────────────────
/** Quantos pneus existem para uma medida normalizada (ex.: "195/60R15"). */
export function countTiresByMeasure(normalizedMedida: string): number {
  const target = normalizedMedida.replace(/\s/g, '').toUpperCase();
  let n = 0;
  for (const t of TIRES) {
    if (t && t.medida && t.medida.replace(/\s/g, '').toUpperCase() === target) n++;
  }
  return n;
}

/** Uma página de medida é indexável quando tem variedade suficiente (2+ opções). */
export function isMeasureIndexable(normalizedMedida: string): boolean {
  return countTiresByMeasure(normalizedMedida) >= 2;
}

// ─── AGREGADOS PARA O DASHBOARD / SITEMAP ──────────────────────────────────────
export interface IndexableTire {
  tire: Tire;
  decision: IndexDecision;
}

/** Lista TODOS os pneus já com sua decisão de indexação. */
export function getAllTireDecisions(): IndexableTire[] {
  return TIRES.filter((t) => t && t.slug).map((tire) => ({
    tire,
    decision: decideTireIndexing(tire),
  }));
}

/** Apenas os slugs canônicos e indexáveis (para o sitemap de produtos). */
export function getIndexableTireSlugs(): string[] {
  return getAllTireDecisions()
    .filter((d) => d.decision.index)
    .map((d) => d.tire.slug);
}

export interface SeoStats {
  total: number;
  indexable: number;
  duplicates: number;
  lowScore: number;
  uniqueProducts: number;
  reductionPct: number;
}

/** Estatísticas globais de indexação (usadas pelo dashboard). */
export function getSeoStats(): SeoStats {
  const all = getAllTireDecisions();
  const total = all.length;
  const indexable = all.filter((d) => d.decision.index).length;
  const duplicates = all.filter((d) => d.decision.reasons.includes('duplicate')).length;
  const lowScore = all.filter((d) => d.decision.reasons.includes('low-score')).length;
  return {
    total,
    indexable,
    duplicates,
    lowScore,
    uniqueProducts: indexable,
    reductionPct: total > 0 ? Math.round(((total - indexable) / total) * 100) : 0,
  };
}
