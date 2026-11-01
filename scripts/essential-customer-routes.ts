// Existing customer routes only: delivery coverage, not a sitemap/indexing expansion.
import { SERVICES } from '../src/data';
import { SERVICE_CATEGORIES } from '../src/data/services';
import { PROMO_TIRES } from '../src/data/promoTires';
import { BASE_URL } from './static-routes';
import { validateStaticHtml } from './static-html-validation';

const indexedServices = Array.from(new Map(SERVICE_CATEGORIES.flatMap(category => category.services).map(service => [service.slug, service])).values());
const SERVICE_HEADINGS: Record<string, string> = {
  'scanner-automotivo': 'Scanner Automotivo em Curitiba',
  'alinhamento-e-balanceamento': 'Alinhamento e Balanceamento em Curitiba',
  'alinhamento-3d': 'Alinhamento 3D em Curitiba',
  'troca-de-oleo': 'Troca de Óleo em Curitiba',
  'manutencao-de-freios': 'Manutenção de Freios em Curitiba',
  'revisao-de-suspensao': 'Suspensão Automotiva em Curitiba',
  'conserto-de-rodas': 'Conserto de Rodas em Curitiba',
};
export const CUSTOMER_ROUTES = [
  ...indexedServices.map(service => {
    const serviceName = SERVICES.find(old => old.slug === service.slug)?.title ?? service.name;
    return { path: `/servico/${service.slug}`, type: 'servico', expectJsonLd: true, serviceName, heading: SERVICE_HEADINGS[service.slug] ?? `${serviceName} em Curitiba – Bairro Portão` };
  }),
  ...PROMO_TIRES.map(tire => ({ path: `/pneu-promocao/${tire.slug}`, type: 'promo', expectJsonLd: true, heading: `Pneu ${tire.marca} ${tire.nome} em Curitiba` })),
  { path: '/pneus-promocao', type: 'promo-list', expectJsonLd: true, heading: 'Pneus em Promoção em Curitiba' },
  { path: '/politica-de-privacidade', type: 'policy', expectJsonLd: false, heading: 'Política de Privacidade' },
  { path: '/trocas-e-devolucoes', type: 'policy', expectJsonLd: false, heading: 'Política de Devolução e Garantia' },
  { path: '/sitemap', type: 'sitemap', expectJsonLd: true, heading: 'Sitemap Carplus' },
];

export function validateCustomerHtml(route: typeof CUSTOMER_ROUTES[number], html: string, shellTitle: string) {
  const problems = validateStaticHtml(route.path, html, `${BASE_URL}${route.path}`, shellTitle);
  const headings = [...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)].map(m => m[1].replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim());
  if (headings.length !== 1 || headings[0] !== route.heading) problems.push('H1 incorreto para a rota');
  for (const [label, pattern] of [
    ['canonical', /<link\b[^>]*rel="canonical"/gi],
    ['og:image', /<meta\b[^>]*property="og:image"/gi],
    ['description', /<meta\b[^>]*name="description"/gi],
  ] as const) {
    if ([...html.matchAll(pattern)].length !== 1) problems.push(`${label} ausente ou duplicado`);
  }
  if (!html.includes(`property="og:url" content="${BASE_URL}${route.path}"`)) problems.push('og:url incorreta');
  if (route.type === 'servico') {
    try {
      const schemas = [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)].flatMap(match => { const value = JSON.parse(match[1]); return value['@graph'] ?? [value]; });
      if (!schemas.some(schema => schema['@type'] === 'Service' && schema.url === `${BASE_URL}${route.path}` && schema.name === ('serviceName' in route ? route.serviceName : undefined))) problems.push('Service sem identidade e URL correspondentes');
    } catch { problems.push('JSON-LD inválido'); }
  }
  return problems;
}
