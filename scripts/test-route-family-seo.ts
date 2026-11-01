// Render representative existing route families against the built SPA. No writes
// to dist and no catalog/sitemap policy changes. Production HTML is separately
// verified by the essential generators and final deployment checks.
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { TIRES } from '../src/data';
import { PROMO_TIRES } from '../src/data/promoTires';
import { getStaticRoutes } from './static-routes';
import { getEssentialExistingRoutes } from './essential-existing-routes';
import { CUSTOMER_ROUTES } from './essential-customer-routes';
import { generateRoutes } from './generate-static-pages';

const inventory = getStaticRoutes();
const familySamples = Array.from(new Map(inventory.map(route => [route.type, route])).values());
const routes = Array.from(new Map([
  ...getEssentialExistingRoutes(),
  ...familySamples.map(route => ({ ...route, expectJsonLd: true, isHome: route.path === '/' })),
  ...CUSTOMER_ROUTES.filter(route => route.type !== 'promo' || route === CUSTOMER_ROUTES.find(r => r.type === 'promo')),
  ...['/pneus', '/servicos', '/bairro/araucaria', '/bairro/sao-jose-dos-pinhais'].map(path => ({ path, type: 'regression', expectJsonLd: true })),
].map(route => [route.path, route])).values());
function typed(value: unknown, type: string): any[] {
  if (Array.isArray(value)) return value.flatMap(item => typed(item, type));
  if (!value || typeof value !== 'object') return [];
  const node = value as Record<string, any>;
  return [...([node['@type']].flat().includes(type) ? [node] : []), ...Object.values(node).flatMap(item => typed(item, type))];
}
assert.equal(routes.filter(route => route.type === 'servico').length, 45, 'All 40 indexed and 5 legacy services covered');
const pages = await generateRoutes(routes);
const summaries = [];
for (const [i, page] of pages.entries()) {
  const route = routes[i];
  assert.equal(page.result.status, 'ok', `${route.path}: ${page.result.error}`);
  const html = page.html!;
  const titles = [...html.matchAll(/<title>([^<]*)<\/title>/g)];
  const descriptions = [...html.matchAll(/<meta\b[^>]*name="description"[^>]*content="([^"]*)"/g)];
  const headings = [...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/g)];
  assert.equal(titles.length, 1, route.path);
  assert.equal(descriptions.length, 1, route.path);
  assert.equal(headings.length, 1, route.path);
  assert.ok(titles[0][1].length > 10 && descriptions[0][1].length > 30, route.path);
  assert.equal(page.result.canonical, `https://www.carpluspneuseoficina.com.br${route.path === '/' ? '/' : route.path}`, route.path);
  assert.equal([...html.matchAll(/property="og:image"/g)].length, 1, route.path);
  const schemas = [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map(match => JSON.parse(match[1]));
  const businesses = typed(schemas, 'LocalBusiness');
  assert.equal(businesses.length, 1, `${route.path}: one actual store, not duplicate route businesses`);
  assert.equal(businesses[0]['@id'], 'https://www.carpluspneuseoficina.com.br/#localbusiness');
  for (const product of typed(schemas, 'Product')) {
    assert.ok(product.name && product.url, `${route.path}: concrete product identity`);
    const productPath = new URL(product.url).pathname;
    const catalogTire = productPath.startsWith('/pneu/') ? TIRES.find(tire => `/pneu/${tire.slug}` === productPath) : undefined;
    const promoTire = productPath.startsWith('/pneu-promocao/') ? PROMO_TIRES.find(tire => `/pneu-promocao/${tire.slug}` === productPath) : undefined;
    const allowedNames = catalogTire ? [catalogTire.nome, `${catalogTire.marca} ${catalogTire.nome} ${catalogTire.medida} - Curitiba`] : promoTire ? [`Pneu ${promoTire.marca} ${promoTire.nome}`] : [];
    assert.ok(allowedNames.includes(product.name), `${route.path}: Product name+URL must identify a real catalog record`);
    if (route.type === 'produto' || route.type === 'promo') assert.equal(product.sku, productPath.split('/').at(-1), `${route.path}: detail Product SKU`);
    assert.ok(!product.offers && !product.aggregateRating && !product.review, `${route.path}: catalog currently has no confirmed product commercial/review data`);
  }
  if (route.type === 'produto' || route.type === 'promo') assert.equal(typed(schemas, 'Product').length, 1, route.path);
  if (route.type === 'blog') assert.equal(typed(schemas, 'BlogPosting').length, 1, route.path);
  if (route.type === 'servico') assert.ok(typed(schemas, 'Service').some(service => service.url === page.result.canonical), route.path);
  summaries.push({ route: route.path, family: route.type, title: titles[0][1], description: descriptions[0][1], h1: headings[0][1].replace(/<[^>]*>/g, '').trim(), schemaTypes: [...new Set(schemas.flatMap(schema => (schema['@graph'] ?? [schema]).flatMap((node: any) => [node['@type']].flat())))] });
}
fs.mkdirSync('reports', { recursive: true });
fs.writeFileSync('reports/suprema-route-family-seo.json', JSON.stringify(summaries, null, 2));
console.log(`PASS: ${pages.length} route-family HTML checks: semantic headings, route metadata, canonical, OG, parseable schema, one store and no unconfirmed Product offers/ratings.`);
