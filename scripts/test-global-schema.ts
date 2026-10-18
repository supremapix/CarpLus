// Regressão do catálogo global, sem navegador, rede ou geração de páginas.
// Opcional: --baseline=<commit> comprova o escopo exato contra uma revisão Git.
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { generateProductSchema, type ProductSchemaProps } from '../src/lib/schema';

type JsonNode = { [key: string]: unknown };
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const baseUrl = 'https://www.carpluspneuseoficina.com.br';
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
let assertions = 0;
function equal(actual: unknown, expected: unknown, message: string) {
  assert.deepEqual(actual, expected, message);
  assertions++;
}
function jsonLdFrom(source: string): JsonNode[] {
  const scripts = [...source.matchAll(/<script\b[^>]*\btype=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
  assert(scripts.length > 0, 'at least one JSON-LD script must be present');
  return scripts.map(([, json]) => JSON.parse(json));
}
function nodesOfType(value: unknown, type: string): JsonNode[] {
  if (Array.isArray(value)) return value.flatMap(item => nodesOfType(item, type));
  if (value === null || typeof value !== 'object') return [];
  const node = value as JsonNode;
  const types = Array.isArray(node['@type']) ? node['@type'] : [node['@type']];
  return [
    ...(types.includes(type) ? [node] : []),
    ...Object.values(node).flatMap(item => nodesOfType(item, type)),
  ];
}

// Detecta inclusive o padrão original Offer.itemOffered.Product, não só @graph.
equal(nodesOfType({ '@graph': [{ itemListElement: [{ itemOffered: { '@type': ['Product', 'Thing'] } }] }] }, 'Product').length, 1, 'recursive traversal finds nested and array-valued types');
const documents = jsonLdFrom(html);
equal(documents.length, 1, 'one global JSON-LD document');
equal(nodesOfType(documents, 'Product'), [], 'global shell must not mark brand/category entries as Product');
for (const [type, id] of [['Organization', 'organization'], ['WebSite', 'website'], ['LocalBusiness', 'localbusiness']]) {
  const entities = nodesOfType(documents, type);
  equal(entities.length, 1, `one global ${type}`);
  equal(entities[0]['@id'], `${baseUrl}/#${id}`, `stable ${type} identity`);
}
const catalogs = nodesOfType(documents, 'OfferCatalog');
equal(catalogs.map(catalog => catalog.name), [
  'Pneus e Serviços Automotivos no Portão, Curitiba',
  'Venda e Montagem de Pneus',
  'Serviços de Pneus e Rodas',
  'Oficina Mecânica',
], 'all existing catalogs retained');
equal(catalogs[1], {
  '@type': 'OfferCatalog',
  name: 'Venda e Montagem de Pneus',
  url: `${baseUrl}/pneus`,
}, 'tire catalog remains a neutral reference, without fabricated offers');
equal(nodesOfType(documents, 'Brand').map(brand => brand.name), [
  'Pirelli', 'Michelin', 'Goodyear', 'Continental', 'Bridgestone', 'Firestone', 'Yokohama', 'Prinx', 'Delinte',
], 'existing brand information retained independently of Product');
const services = nodesOfType(documents, 'Service');
equal(services.map(service => service.url), [
  'montagem-de-pneu', 'alinhamento-3d', 'alinhamento-e-balanceamento', 'rodizio-de-pneus',
  'conserto-de-pneu', 'conserto-de-rodas', 'manutencao-de-freios', 'revisao-de-suspensao',
  'reparo-de-direcao-hidraulica', 'troca-de-oleo', 'scanner-automotivo',
].map(slug => `${baseUrl}/servico/${slug}`), 'all eleven service destinations retained');
equal(nodesOfType(documents, 'Offer').map(offer => offer.itemOffered), services, 'remaining global offers describe services only');
equal(nodesOfType(documents, 'AggregateRating'), [], 'no invented global ratings');
equal(nodesOfType(documents, 'Review'), [], 'no invented global reviews');

// Fixtures de teste apenas: nenhum preço/avaliação abaixo alimenta o site.
const productInput: ProductSchemaProps = {
  name: 'Pneu específico de teste 205/55R16', description: 'Fixture de regressão.',
  image: 'https://example.test/tire.webp', sku: 'test-tire-205-55r16',
  brand: 'Marca de teste', url: 'https://example.test/pneu/test-tire-205-55r16',
  dateModified: '2026-01-01',
};
function productWith(extra: Partial<ProductSchemaProps> = {}): JsonNode {
  const product = generateProductSchema({ ...productInput, ...extra }) as JsonNode;
  equal(product['@type'], 'Product', 'specific product generator remains available');
  equal(product.sku, productInput.sku, 'specific product identity retained');
  return product;
}
const unpricedProduct = productWith();
equal(['offers', 'aggregateRating', 'review'].filter(key => key in unpricedProduct), [], 'missing commercial/review data is not invented');
for (const price of [0, -1, Number.NaN]) {
  equal('offers' in productWith({ price }), false, 'non-positive/invalid price does not create an offer');
}
const pricedProduct = productWith({ price: 123.45, availability: 'OutOfStock' });
const offer = pricedProduct.offers as JsonNode;
equal([offer['@type'], offer.price, offer.priceCurrency, offer.url, offer.availability], [
  'Offer', '123.45', 'BRL', productInput.url, 'https://schema.org/OutOfStock',
], 'provided offer data remains intact');
const ratedProduct = productWith({ ratingValue: 4.5, reviewCount: 2 });
equal(nodesOfType(ratedProduct, 'AggregateRating').map(rating => [rating.ratingValue, rating.reviewCount]), [['4.5', 2]], 'provided aggregate rating remains available');
equal('offers' in ratedProduct, false, 'rating does not invent a price');
const reviewedProduct = productWith({ reviews: [{
  author: 'Pessoa de teste', datePublished: '2026-01-01', reviewBody: 'Avaliação de teste.', ratingValue: 4,
}] });
equal(nodesOfType(reviewedProduct, 'Review').length, 1, 'provided review remains available');
equal('offers' in reviewedProduct, false, 'review does not invent a price');
for (const product of [unpricedProduct, pricedProduct, ratedProduct, reviewedProduct]) {
  const page = `${html}\n<script type="application/ld+json">${JSON.stringify(product)}</script>`;
  equal(nodesOfType(jsonLdFrom(page), 'Product'), [product], 'page-specific Product survives alongside the corrected global shell');
}

// Verificação opcional de escopo: não exige histórico Git para a suíte normal.
const baseline = process.argv.find(arg => arg.startsWith('--baseline='))?.slice('--baseline='.length);
if (baseline) {
  assert(/^[a-f0-9]{7,40}$/i.test(baseline), 'baseline must be a Git commit hash');
  const beforeHtml = execFileSync('git', ['show', `${baseline}:index.html`], { cwd: root, encoding: 'utf8' });
  const before = jsonLdFrom(beforeHtml);
  const beforeCatalog = nodesOfType(before, 'OfferCatalog').find(catalog => catalog.name === 'Venda e Montagem de Pneus')!;
  equal(nodesOfType(beforeCatalog, 'Product').length, 9, 'baseline contains the nine nested generic Products');
  delete beforeCatalog.itemListElement;
  equal(documents, before, 'entire global graph is unchanged except for the nine generic product offers');
  const stripJsonLd = (source: string) => source.replace(/<script\b[^>]*\btype=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>/gi, '');
  equal(stripJsonLd(html), stripJsonLd(beforeHtml), 'HTML, metadata, canonical and tracking outside JSON-LD remain byte-identical');
}
console.log(`PASS: ${assertions} global schema assertions; no browser launched.`);
