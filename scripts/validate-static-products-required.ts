// Required HTML for the existing indexed product inventory only. No new URLs,
// no new indexing decisions, and no successful deploy on a partial product set.
import fs from 'node:fs';
import { TIRES } from '../src/data';
import { getStaticRoutes } from './static-routes';
import { resolveShellHtml, getShellTitle, outputFileFor } from './generate-static-pages';
import { validateStaticHtml } from './static-html-validation';

const routes = getStaticRoutes().filter(route => route.type === 'produto');
if (routes.length !== 1350) throw new Error(`Product inventory changed unexpectedly: ${routes.length}, expected existing 1350`);
// Match TireDetail's find(): the first source record wins for duplicated slugs.
const tiresBySlug = new Map<string, typeof TIRES[number]>();
for (const tire of TIRES) if (!tiresBySlug.has(tire.slug)) tiresBySlug.set(tire.slug, tire);
const shell = resolveShellHtml();
const shellTitle = getShellTitle(shell);
function textContent(value: string) {
  return value.replace(/<[^>]*>/g, '').replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#(?:39|x27);/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/\s+/g, ' ').trim();
}
function validate(route: typeof routes[number], html: string) {
  const problems = validateStaticHtml(route.path, html, route.expectedCanonical, shellTitle);
  if ([...html.matchAll(/<h1\b/gi)].length !== 1) problems.push('H1 ausente ou duplicado');
  if ([...html.matchAll(/<link\b[^>]*rel="canonical"/gi)].length !== 1) problems.push('canonical ausente ou duplicada');
  if ([...html.matchAll(/<meta\b[^>]*property="og:image"/gi)].length !== 1) problems.push('og:image ausente ou duplicada');
  try {
    const schemas = [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)].flatMap(match => { const schema = JSON.parse(match[1]); return schema['@graph'] ?? [schema]; });
    const products = schemas.filter(schema => schema['@type'] === 'Product');
    if (products.length !== 1 || products[0].url !== route.expectedCanonical || products[0].sku !== route.path.slice('/pneu/'.length)) problems.push('Product identity/URL does not match route');
    const tire = tiresBySlug.get(route.path.slice('/pneu/'.length));
    const heading = textContent(html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i)?.[1] ?? '');
    if (!tire || products[0]?.name !== tire.nome || products[0]?.description !== tire.descricao || heading !== textContent(tire.nome)) problems.push('Product name/description and visible H1 do not match the catalog source');
    if (products.some(product => product.offers || product.aggregateRating || product.review)) problems.push('unconfirmed product commercial/review schema');
  } catch { problems.push('invalid JSON-LD'); }
  return problems;
}
for (const route of routes) {
  const file = outputFileFor(route);
  const errors = fs.existsSync(file) ? validate(route, fs.readFileSync(file, 'utf8')) : ['HTML missing'];
  if (errors.length) throw new Error(`${route.path}: ${errors.join('; ')}`);
}
console.log(`[required-products] All ${routes.length} existing indexed products have validated route-specific HTML.`);
