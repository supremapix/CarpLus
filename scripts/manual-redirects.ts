// scripts/manual-redirects.ts
// ─────────────────────────────────────────────────────────────────────────────
// FONTE ÚNICA DOS REDIRECTS MANUAIS (promovidos na etapa E5)
// ─────────────────────────────────────────────────────────────────────────────
// Estes 301 eram, até a E5, aplicados apenas no cliente (via <Navigate> no
// src/App.tsx). A E5 os promove a redirects server-side no vercel.json, mantendo
// os <Navigate> como redundância de segurança (removíveis só na E9).
//
// São 76 regras, organizadas em 3 grupos:
//   • 69 bairros/cidades legados: /<slug>.html      → /bairro/<slug>
//   •  1 medida legada (dinâmica): /pneus/:medida     → /pneu-medida/:medida
//   •  6 slugs legados de marca:   /<legacySlug>       → /<slug>   (derivados de BRAND_PAGES)
//
// IMPORTANTE: este módulo é a fonte de verdade. O generate-redirects.ts SEMPRE
// reescreve estas regras no vercel.json, então elas nunca se perdem — mesmo que
// o vercel.json seja apagado, `npm run redirects` as restaura por completo.

import { BRAND_PAGES } from '../src/data/seoLanding';

export interface RedirectRule {
  source: string;
  has?: { type: 'query'; key: string; value: string }[];
  destination: string;
  permanent: boolean;
}

/**
 * 69 bairros e cidades da RMC cujas URLs legadas `.html` foram rastreadas pelo
 * Google. O basename do arquivo `.html` coincide com o slug de `/bairro/<slug>`.
 * Lista histórica fixa (URLs antigas) — espelha exatamente os <Navigate> do App.tsx.
 */
export const LEGACY_NEIGHBORHOOD_SLUGS: string[] = [
  // ── Bairros de Curitiba (61) ──
  'taboao',
  'agua-verde',
  'alto-da-rua-xv',
  'bacacheri',
  'batel',
  'boqueirao',
  'caiua',
  'campo-comprido',
  'campo-de-santana',
  'capao-raso',
  'cascatinha',
  'caximba',
  'centro',
  'cic',
  'conquista',
  'cristo-rei',
  'fazendinha',
  'ganchinho',
  'guaira',
  'hauer',
  'hugo-lange',
  'jardim-botanico',
  'jardim-das-americas',
  'jardim-gabineto',
  'jardim-da-ordem',
  'jardim-itatiaia',
  'jardim-social',
  'juveve',
  'lamenha-pequena',
  'lindoia',
  'merces',
  'neoville',
  'novo-mundo',
  'orleans',
  'parolin',
  'pilarzinho',
  'prado-velho',
  'reboucas',
  'santa-candida',
  'santa-felicidade',
  'santo-inacio',
  'sao-braz',
  'sao-lourenco',
  'sao-miguel',
  'taruma',
  'uberaba',
  'umbara',
  'vila-nossa-senhora-da-luz',
  'vila-oficinas',
  'vila-sandra',
  'vila-sao-pedro',
  'vista-alegre',
  'vitoria-regia',
  'ahu',
  'atenas',
  'bairro-alto',
  'bigorrilho',
  'butiatuvinha',
  'cajuru',
  'portao',
  'santa-quiteria',
  // ── Cidades da Região Metropolitana (8) ──
  'sao-jose-dos-pinhais',
  'colombo',
  'araucaria',
  'pinhais',
  'campo-largo',
  'almirante-tamandare',
  'fazenda-rio-grande',
  'contenda',
];

/** 301 dos bairros/cidades legados: /<slug>.html → /bairro/<slug>. */
function buildNeighborhoodRedirects(): RedirectRule[] {
  return LEGACY_NEIGHBORHOOD_SLUGS.map((slug) => ({
    source: `/${slug}.html`,
    destination: `/bairro/${slug}`,
    permanent: true,
  }));
}

/**
 * 301 dinâmico de medida legada: /pneus/:medida → /pneu-medida/:medida.
 * O Google rastreou URLs como /pneus/325-30-19, que nunca existiram como rota.
 * Não colide com /pneus (catálogo, sem segmento) nem com /pneus-* (sem barra).
 *
 * O padrão `:medida([^.]+)` casa apenas segmentos SEM ponto, para NÃO capturar
 * arquivos estáticos como /pneus/bridgestone.webp (imagens dos pneus em promoção).
 * Como o Vercel aplica redirects antes do filesystem, sem esta restrição as
 * imagens em /pneus/*.webp eram redirecionadas (308) e não carregavam em produção.
 * Medidas reais (ex.: 325-30-19, 175-65r14) não contêm ponto, então seguem casando.
 */
function buildMeasureRedirect(): RedirectRule[] {
  return [
    {
      source: '/pneus/:medida([^.]+)',
      destination: '/pneu-medida/:medida',
      permanent: true,
    },
  ];
}

/** 301 de slug legado (singular) → slug atual (plural) de marca, derivado dos dados. */
function buildBrandRedirects(): RedirectRule[] {
  return BRAND_PAGES.filter((p) => p.legacySlug).map((p) => ({
    source: `/${p.legacySlug}`,
    destination: `/${p.slug}`,
    permanent: true,
  }));
}

/** Todos os 76 redirects manuais promovidos na E5, na ordem: bairros → medida → marcas. */
export function getManualRedirects(): RedirectRule[] {
  return [...buildNeighborhoodRedirects(), ...buildMeasureRedirect(), ...buildBrandRedirects()];
}

/** Chave estável para deduplicação (source + query normalizada). */
export function redirectKey(r: RedirectRule): string {
  const q = (r.has ?? [])
    .map((h) => `${h.type}:${h.key}=${h.value}`)
    .sort()
    .join('&');
  return `${r.source}::${q}`;
}
