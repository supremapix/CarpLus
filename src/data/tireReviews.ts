// /src/data/tireReviews.ts
// Fonte de dados de avaliações e preços por pneu.
//
// IMPORTANTE (política do Google): nunca insira avaliações fictícias.
// O AggregateRating só é adicionado ao schema do produto quando houver
// dados REAIS cadastrados aqui. Enquanto o mapa estiver vazio para um
// determinado pneu, o schema é gerado sem rating/preço — o que é válido
// e evita penalizações por "fake reviews".

export interface TireReviewEntry {
  /** Nota média real (1 a 5). */
  ratingValue: number;
  /** Quantidade de avaliações reais que compõem a média. */
  reviewCount: number;
  /** Preço à vista em BRL, quando disponível/divulgado. */
  price?: number;
  /** Avaliações individuais reais (opcional). */
  reviews?: Array<{
    author: string;
    datePublished: string; // ISO: 2025-01-20
    reviewBody: string;
    ratingValue: number;
  }>;
}

// Chave = slug do pneu (Tire.slug). Preencha conforme as avaliações reais
// forem coletadas (Google, WhatsApp, pós-venda etc.).
export const TIRE_REVIEWS: Record<string, TireReviewEntry> = {
  // Exemplo de estrutura (comentado — ative apenas com dados reais):
  // "pneu-pirelli-175-70r13-p400-evo-82t": {
  //   ratingValue: 4.8,
  //   reviewCount: 12,
  //   price: 289.9,
  //   reviews: [
  //     {
  //       author: "Marcos A.",
  //       datePublished: "2025-02-10",
  //       reviewBody: "Pneu excelente para o dia a dia, silencioso e econômico.",
  //       ratingValue: 5,
  //     },
  //   ],
  // },
};

/** Retorna os dados de avaliação/preço de um pneu, se houver. */
export function getTireReview(slug: string): TireReviewEntry | undefined {
  const entry = TIRE_REVIEWS[slug];
  if (!entry || !entry.reviewCount || entry.reviewCount <= 0) return undefined;
  return entry;
}
