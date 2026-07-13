// ─────────────────────────────────────────────────────────────────────────────
// Coordenação de prontidão / renderização ansiosa para a geração estática (E4).
// ─────────────────────────────────────────────────────────────────────────────
// Objetivo: garantir que componentes que normalmente montam de forma preguiçosa
// (via IntersectionObserver) apareçam COMPLETOS no snapshot estático, sem causar
// "hydration mismatch" quando o cliente real hidratar a página pré-renderizada.
//
// Como funciona (determinístico e idêntico entre snapshot e primeira render):
//   • Durante a GERAÇÃO headless: o gerador seta `window.__STATIC_RENDER__ = true`
//     ANTES do app rodar → componentes renderizam o conteúdo imediatamente.
//   • No HTML capturado, o gerador marca `<html data-prerendered="true">`.
//   • Na HIDRATAÇÃO do cliente: a primeira render lê esse mesmo marcador e também
//     renderiza ansiosamente → o DOM inicial do React casa com o HTML servido.
//   • Após hidratar, App remove o marcador (ver App.tsx) para que navegações SPA
//     subsequentes voltem ao comportamento preguiçoso normal (performance).
//
// NÃO gera HTML diferente para bots: o mesmo mecanismo vale para qualquer cliente
// que carregue uma página pré-renderizada.

/** Estamos dentro do processo de geração estática (Chrome headless do gerador)? */
export function isStaticGeneration(): boolean {
  if (typeof window === 'undefined') return false;
  return (window as unknown as { __STATIC_RENDER__?: boolean }).__STATIC_RENDER__ === true;
}

/**
 * A primeira renderização deve ser "ansiosa" (conteúdo montado imediatamente)?
 * Verdadeiro durante a geração OU ao hidratar uma página marcada como pré-renderizada.
 * Puro e determinístico: seguro para usar como inicializador de useState.
 */
export function isPrerenderEager(): boolean {
  if (typeof window === 'undefined') return false;
  if (isStaticGeneration()) return true;
  if (typeof document !== 'undefined') {
    return document.documentElement.getAttribute('data-prerendered') === 'true';
  }
  return false;
}
