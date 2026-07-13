// scripts/static-pilot-routes.ts
// ─────────────────────────────────────────────────────────────────────────────
// ROTAS PILOTO DA PROVA DE CONCEITO (Etapa E2/E3)
// ─────────────────────────────────────────────────────────────────────────────
// Lista EXPLÍCITA de rotas reais do projeto, cobrindo cada tipo de página.
// Os slugs foram lidos das fontes reais (seoIndexing/seoLanding/services/
// indexableNeighborhoods) — NENHUM slug foi inventado.
//
// Compartilhada entre o gerador (generate-static-pages.ts) e o validador
// (validate-static-pilot.ts) para manter os dois 100% sincronizados.
//
// No futuro, o gerador poderá receber TODAS as rotas indexáveis; nesta etapa
// usamos apenas este conjunto piloto.

export interface PilotRoute {
  /** Caminho público exato (como o usuário/Google acessam). */
  path: string;
  /** Tipo da página (para o relatório). */
  type: string;
  /** Espera-se JSON-LD dinâmico (data-dynamic-schema) nesta página? */
  expectJsonLd: boolean;
  /** Página deve ser noindex? (404 e afins) */
  noindex?: boolean;
  /** É a home? (grava direto em dist/index.html) */
  isHome?: boolean;
  /** É uma URL propositalmente inexistente (teste de erro 404)? */
  isNotFound?: boolean;
}

export const PILOT_ROUTES: PilotRoute[] = [
  {
    path: '/',
    type: 'Home',
    expectJsonLd: false, // schema global vive no shell (index.html), não como data-dynamic-schema
    isHome: true,
  },
  {
    path: '/pneu/pneu-pirelli-175-70r13-p400-evo-82t',
    type: 'Produto (pneu)',
    expectJsonLd: true,
  },
  {
    path: '/servico/venda-de-pneus',
    type: 'Serviço',
    expectJsonLd: true,
  },
  {
    path: '/pneu-medida/175-65r14',
    type: 'Medida',
    expectJsonLd: true,
  },
  {
    path: '/pneu-para-hb20-curitiba',
    type: 'Veículo (landing)',
    expectJsonLd: true,
  },
  {
    path: '/bairro/portao',
    type: 'Local / Bairro',
    expectJsonLd: true,
  },
  {
    path: '/quem-somos',
    type: 'Institucional',
    expectJsonLd: false,
  },
  {
    path: '/rota-inexistente-teste-404',
    type: '404 (teste de erro)',
    expectJsonLd: false,
    noindex: true,
    isNotFound: true,
  },
];

export const BASE_URL = 'https://www.carpluspneuseoficina.com.br';
