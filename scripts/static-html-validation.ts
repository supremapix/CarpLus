// Pure validation shared by the full-site check and regression tests.
function extract(html: string, re: RegExp): string | null {
  const m = html.match(re);
  return m ? m[1].trim() : null;
}

export function validateStaticHtml(
  routePath: string,
  html: string,
  expectedCanonical: string,
  shellTitle: string,
): string[] {
  const problems: string[] = [];
  if (html.length < 2000) problems.push(`HTML muito pequeno (${html.length}B)`);

  const title = extract(html, /<title>([^<]*)<\/title>/i);
  if (!title) problems.push('sem <title>');
  else if (title === shellTitle && routePath !== '/') problems.push('title == shell (render incompleto)');

  // The home intentionally has the same title as index.html. Validate its
  // rendered body instead of requiring a cosmetic title change. A shell,
  // loading fallback or head-only snapshot must still fail.
  if (routePath === '/') {
    const main = extract(html, /<main\b[^>]*>([\s\S]*?)<\/main>/i) ?? '';
    const text = main.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '').replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
    if (!/<div[^>]+id="root"[^>]*>\s*</i.test(html) || /<div[^>]+id="root"[^>]*>\s*<\/div>/i.test(html)) problems.push('home sem aplicação renderizada');
    if (!/<h1[\s>]/i.test(main) || text.length < 500 || (main.match(/<section[\s>]/gi) ?? []).length < 3) problems.push('home sem conteúdo principal completo');
  }

  const canonical = extract(html, /<link[^>]+rel="canonical"[^>]+href="([^"]+)"/i);
  if (!canonical) problems.push('sem canonical');
  else if (canonical !== expectedCanonical)
    problems.push(`canonical "${canonical}" ≠ esperado "${expectedCanonical}"`);

  const robots = extract(html, /<meta[^>]+name="robots"[^>]+content="([^"]+)"/i);
  if (robots && /noindex/i.test(robots)) problems.push(`robots noindex ("${robots}")`);

  if (!/<h1[\s>]/i.test(html)) problems.push('sem <h1>');
  if (!/application\/ld\+json/i.test(html)) problems.push('sem JSON-LD');
  if (!/property="og:title"/i.test(html)) problems.push('sem og:title');
  if (!/property="og:url"/i.test(html)) problems.push('sem og:url');
  if (!/name="twitter:card"/i.test(html)) problems.push('sem twitter:card');
  if (/localhost|127\.0\.0\.1/.test(html)) problems.push('contém localhost/127.0.0.1');
  if (!/data-prerendered="true"/i.test(html)) problems.push('sem data-prerendered');

  return problems;
}

