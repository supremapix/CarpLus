// Complemento de entrega, NÃO um novo inventário de URLs para o sitemap.
// A mesma coleção que ServiceDetail aceita em runtime define os serviços antigos;
// os já enumerados e os aliases HTTP ficam fora deste lote essencial.
import { SERVICES } from '../src/data';
import { getManualRedirects } from './manual-redirects';
import { BASE_URL, getStaticRoutes } from './static-routes';
import { validateStaticHtml } from './static-html-validation';

export function getLegacyServiceRoutes() {
  const enumerated = new Set(getStaticRoutes().map(route => route.path));
  const redirected = new Set(getManualRedirects().map(rule => rule.source));
  return SERVICES.filter(service => {
    const route = `/servico/${service.slug}`;
    return !enumerated.has(route) && !redirected.has(route);
  }).map(service => ({
    path: `/servico/${service.slug}`,
    type: 'servico',
    expectJsonLd: true,
    expectedCanonical: `${BASE_URL}/servico/${service.slug}`,
    headingText: service.title,
    serviceTitle: service.title,
  }));
}

export function getEssentialExistingRoutes() {
  return [
    ...getLegacyServiceRoutes(),
    // Página regional já registrada no App e autocanônica em useSEO. Mantida
    // separada dos serviços derivados; não amplia o inventário do sitemap.
    {
      path: '/centro-automotivo-portao',
      type: 'hub',
      expectJsonLd: true,
      expectedCanonical: `${BASE_URL}/centro-automotivo-portao`,
      headingText: 'Centro Automotivo',
      serviceTitle: undefined,
    },
  ];
}

export type EssentialExistingRoute = ReturnType<typeof getEssentialExistingRoutes>[number];

// Não afrouxa o validador indexável nem muda a política de useSEO. Os serviços
// existentes deste lote têm canonical própria e index, follow no runtime atual.
export function validateEssentialExistingHtml(route: EssentialExistingRoute, html: string, shellTitle: string): string[] {
  const problems = validateStaticHtml(route.path, html, route.expectedCanonical, shellTitle);
  if ((html.match(/<link\b[^>]*rel="canonical"/gi) ?? []).length !== 1) problems.push('canonical duplicada ou ausente');
  const h1s = [...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)];
  if (h1s.length !== 1 || !h1s[0][1].replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').includes(route.headingText)) problems.push('H1 não corresponde à rota');
  const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)?.[1] ?? html.match(/<body\b[^>]*>([\s\S]*?)<\/body>/i)?.[1] ?? '';
  const text = main.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
  if (text.length < 1000 || (main.match(/<section\b/gi) ?? []).length < 3) problems.push('conteúdo principal incompleto');
  if (!/<meta\b[^>]*name="robots"[^>]*content="index, follow[^"\n]*"/i.test(html)) problems.push('robots diverge do runtime indexável');
  const schemas = [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)];
  try {
    const parsed = schemas.flatMap(match => { const value = JSON.parse(match[1]); return value['@graph'] ?? value; });
    if (route.serviceTitle && !parsed.some(schema => schema['@type'] === 'Service' && schema.url === route.expectedCanonical && schema.name === route.serviceTitle)) problems.push('schema Service incorreto ou ausente');
    if (!parsed.some(schema => schema['@type'] === 'BreadcrumbList' && schema.itemListElement?.some(item => item.item === route.expectedCanonical))) problems.push('breadcrumb sem URL da rota');
  } catch { problems.push('JSON-LD inválido'); }
  return problems;
}
