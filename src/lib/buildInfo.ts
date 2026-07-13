// ─────────────────────────────────────────────────────────────────────────────
// Data de build determinística (E4).
// ─────────────────────────────────────────────────────────────────────────────
// `__BUILD_DATE__` é injetado pelo Vite (define) no momento do build como uma
// string ISO "YYYY-MM-DD". Fica BAKED no bundle: idêntico em todas as páginas,
// no snapshot headless e na hidratação do cliente (mesmo bundle) → elimina
// "hydration mismatch" de datas e mantém a geração determinística.
//
// Fora do build (dev / scripts via tsx, onde o define não roda), cai no dia atual.

declare const __BUILD_DATE__: string | undefined;

export const BUILD_DATE_ISO: string =
  typeof __BUILD_DATE__ !== 'undefined' && __BUILD_DATE__
    ? __BUILD_DATE__
    : new Date().toISOString().slice(0, 10);

/** Data de conteúdo formatada em pt-BR (ex.: "13 de julho de 2026"), determinística. */
export function buildDatePtBR(): string {
  return new Date(BUILD_DATE_ISO + 'T00:00:00').toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
}
