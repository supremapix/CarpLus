// Fontes de dados para REDIRECTS 301 de URLs legadas.
// Compartilhado entre:
//  - src/routes.tsx (fallback client-side via <Navigate>, por seguranca)
//  - scripts/generate-redirects.ts (gera os 301 reais no vercel.json, corretos p/ SEO)
//
// Manter sem dependencia de React para poder ser importado por scripts Node (tsx).

// Slugs de bairros antigos servidos como ".html" (SPA legada) → /bairro/:slug
export const LEGACY_BAIRRO_HTML: string[] = [
  'taboao', 'agua-verde', 'alto-da-rua-xv', 'bacacheri', 'batel', 'boqueirao',
  'caiua', 'campo-comprido', 'campo-de-santana', 'capao-raso', 'cascatinha',
  'caximba', 'centro', 'cic', 'conquista', 'cristo-rei', 'fazendinha',
  'ganchinho', 'guaira', 'hauer', 'hugo-lange', 'jardim-botanico',
  'jardim-das-americas', 'jardim-gabineto', 'jardim-da-ordem', 'jardim-itatiaia',
  'jardim-social', 'juveve', 'lamenha-pequena', 'lindoia', 'merces', 'neoville',
  'novo-mundo', 'orleans', 'parolin', 'pilarzinho', 'prado-velho', 'reboucas',
  'santa-candida', 'santa-felicidade', 'santo-inacio', 'sao-braz', 'sao-lourenco',
  'sao-miguel', 'taruma', 'uberaba', 'umbara', 'vila-nossa-senhora-da-luz',
  'vila-oficinas', 'vila-sandra', 'vila-sao-pedro', 'vista-alegre', 'vitoria-regia',
  'ahu', 'atenas', 'bairro-alto', 'bigorrilho', 'butiatuvinha', 'cajuru', 'portao',
  'santa-quiteria', 'sao-jose-dos-pinhais', 'colombo', 'araucaria', 'pinhais',
  'campo-largo', 'almirante-tamandare', 'fazenda-rio-grande', 'contenda',
];
