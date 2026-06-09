// Bairros/cidades que permanecem INDEXÁVEIS e presentes no sitemap.
// Mantemos apenas os 15-20 bairros mais próximos/relevantes ao bairro Portão
// para evitar o problema de "thin content" detectado pelo Google nas ~70+ páginas
// de bairros geradas dinamicamente.
//
// IMPORTANTE: estes slugs seguem exatamente a mesma normalização usada nas rotas
// (lowercase + remoção de acentos + espaços -> "-"). Se adicionar um item aqui,
// adicione também em scripts/generate-sitemap.mjs (a lista é duplicada porque o
// script de sitemap roda em Node puro e não importa este módulo TypeScript).
export const INDEXABLE_NEIGHBORHOOD_SLUGS: string[] = [
  'portao',
  'agua-verde',
  'fazendinha',
  'novo-mundo',
  'santa-quiteria',
  'vila-izabel',
  'capao-raso',
  'campo-comprido',
  'pinheirinho',
  'xaxim',
  'araucaria',
  'sao-jose-dos-pinhais',
  'fanny',
  'lindoia',
  'guaira',
];

/**
 * Retorna true se o slug do bairro deve ser indexado pelos buscadores
 * (e, portanto, mantido no sitemap).
 */
export function isIndexableNeighborhood(slug: string | undefined | null): boolean {
  if (!slug) return false;
  return INDEXABLE_NEIGHBORHOOD_SLUGS.includes(slug);
}
