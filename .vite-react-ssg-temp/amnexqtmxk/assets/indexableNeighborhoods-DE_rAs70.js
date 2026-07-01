const INDEXABLE_NEIGHBORHOOD_SLUGS = [
  "portao",
  "agua-verde",
  "fazendinha",
  "novo-mundo",
  "santa-quiteria",
  "vila-izabel",
  "capao-raso",
  "campo-comprido",
  "pinheirinho",
  "xaxim",
  "araucaria",
  "sao-jose-dos-pinhais",
  "fanny",
  "lindoia",
  "guaira"
];
function isIndexableNeighborhood(slug) {
  if (!slug) return false;
  return INDEXABLE_NEIGHBORHOOD_SLUGS.includes(slug);
}
export {
  INDEXABLE_NEIGHBORHOOD_SLUGS,
  isIndexableNeighborhood
};
