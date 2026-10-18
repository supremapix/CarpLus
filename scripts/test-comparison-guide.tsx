// Testes sem navegador: npm run test:comparison-guide
import assert from 'node:assert/strict';
import fs from 'node:fs';
import sharp from 'sharp';
import { renderToStaticMarkup } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import CompararAnunciosPneus, { COMPARISON_GUIDE_SCHEMA } from '../src/components/CompararAnunciosPneus';
import {
  CARPLUS_GOOGLE_MAPS, COMPARISON_CHECKLIST, COMPARISON_FAQ, COMPARISON_GUIDE_PATH,
  COMPARISON_GUIDE_SEO, COMPARISON_MESSAGE, COMPARISON_TECHNICAL_SOURCE,
} from '../src/data/comparisonGuide';
import { getStaticRoutes } from './static-routes';

let assertions = 0;
function check(condition: unknown, message: string) { assert(condition, message); assertions++; }
const html = renderToStaticMarkup(<MemoryRouter><CompararAnunciosPneus /></MemoryRouter>);
const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/)![1];
const text = main.replace(/<[^>]+>/g, ' ');
const routes = getStaticRoutes();
check((main.match(/<h1\b/g) || []).length === 1, 'one H1');
check(main.includes('Como comparar anúncios de pneus e atendimento em loja'), 'distinct editorial H1');
check(COMPARISON_GUIDE_SEO.canonical === `https://www.carpluspneuseoficina.com.br${COMPARISON_GUIDE_PATH}`, 'self-referencing canonical');
check(COMPARISON_GUIDE_SEO.title === 'Como comparar anúncios de pneus em Curitiba | Carplus', 'approved title');
check(COMPARISON_GUIDE_SEO.description.includes('medida, condição e instalação'), 'specific meta description');
const ogImage = await sharp(`public${COMPARISON_GUIDE_SEO.ogImage}`).metadata();
check(ogImage.width === COMPARISON_GUIDE_SEO.ogImageWidth && ogImage.height === COMPARISON_GUIDE_SEO.ogImageHeight, 'OG dimensions match the actual photo');
check(routes.filter(route => route.path === COMPARISON_GUIDE_PATH).length === 1, 'exactly one route in indexable inventory');
check(routes.find(route => route.path === COMPARISON_GUIDE_PATH)?.expectedCanonical === COMPARISON_GUIDE_SEO.canonical, 'inventory canonical matches');

const links = [...main.matchAll(/href="(\/[^"#?]*)"/g)].map(match => match[1]);
for (const link of links) check(routes.some(route => route.path === link), `indexable destination: ${link}`);
for (const link of ['/pneus', '/pneus-curitiba', '/medidas-de-pneus-curitiba', '/manutencao-automotiva-curitiba', '/borracharia-portao', '/contato', '/como-chegar', '/quem-somos', '/servico/montagem-de-pneu', '/servico/alinhamento-e-balanceamento']) {
  check(links.includes(link), `required exit: ${link}`);
}
for (const [, hash] of main.matchAll(/href="#([^"]+)"/g)) check(main.includes(`id="${hash}"`), `local anchor: ${hash}`);
for (const source of ['src/components/PneusCuritibaHub.tsx', 'src/components/SeoLandingPages.tsx', 'src/components/Sitemap.tsx', 'src/App.tsx']) {
  check(fs.readFileSync(source, 'utf8').includes(COMPARISON_GUIDE_PATH), `${source}: route connected`);
}

check(COMPARISON_CHECKLIST.length === 5, 'five purchase criteria');
for (const item of COMPARISON_CHECKLIST) check(main.includes(item.title) && main.includes(item.text), `complete checklist: ${item.title}`);
check(main.includes(COMPARISON_TECHNICAL_SOURCE) && main.includes('Referência técnica'), 'primary technical source next to sizing advice');
check(main.includes('Um anúncio de peça não equivale à contratação da instalação ou ao diagnóstico'), 'piece and service are distinct');
check(main.includes('separe peças e mão de obra antes de autorizar'), 'budget and authorization preserved');
check(main.includes('4,9 de 5') && main.includes('262 avaliações') && main.includes('<time dateTime="2026-10-18">18/10/2026</time>'), 'dated, factual rating');
check(main.includes('As avaliações e a quantidade podem mudar.'), 'rating caveat');
check(main.includes(CARPLUS_GOOGLE_MAPS.replaceAll('&', '&amp;')), 'verified Google profile');
check(main.includes(COMPARISON_MESSAGE), 'message is available without a third-party draft');
check(!/<form\b|<textarea\b|<input\b|wa\.me/.test(main), 'no data collection or automatic send in guide');
check(!/mais confiável|mais seguro que|melhor preço|fraude|golpe|garantia|estoque|gratuit[oa]|parcelamento|1517352816|1463164947|1362033195|dossiê|Pesquisa pública e limites/i.test(text), 'no unsupported claims or private research');
check((main.match(/OLX/g) || []).length === 2 && !main.includes('olx.com.br'), 'platform mentioned only in neutral FAQ, no listing reproduction');

const images = [...main.matchAll(/<img\b[^>]*>/g)].map(match => match[0]);
check(images.length === 2, 'two existing Carplus photos only');
for (const image of images) {
  const src = image.match(/src="([^"]+)"/)![1];
  check(src.startsWith('/images/loja/') && fs.existsSync(`public${src}`), `existing own image: ${src}`);
  check(/alt="[^"]+"/.test(image) && /width="\d+"/.test(image) && /height="\d+"/.test(image), 'descriptive alt and reserved image dimensions');
}
check((main.match(/<details\b/g) || []).length === COMPARISON_FAQ.length, 'native FAQ semantics');
for (const faq of COMPARISON_FAQ) check(main.includes(faq.question) && main.includes(faq.answer), `visible FAQ: ${faq.question}`);
const faqSchema = COMPARISON_GUIDE_SCHEMA.find(schema => schema['@type'] === 'FAQPage') as { mainEntity: Array<{ name: string; acceptedAnswer: { text: string } }> };
assert.deepEqual(faqSchema.mainEntity.map(entry => ({ question: entry.name, answer: entry.acceptedAnswer.text })), COMPARISON_FAQ); assertions++;
check(COMPARISON_GUIDE_SCHEMA.length === 2 && COMPARISON_GUIDE_SCHEMA.some(schema => schema['@type'] === 'BreadcrumbList'), 'FAQ + breadcrumb only; no duplicate business or review claims');
const sitemap = fs.readFileSync('public/sitemap-servicos.xml', 'utf8');
check(sitemap.includes(`<loc>${COMPARISON_GUIDE_SEO.canonical}</loc>`), 'generated sitemap includes guide');
check(fs.readFileSync('scripts/build-deploy.mjs', 'utf8').includes("run('node scripts/run-ts.mjs scripts/generate-static-comparison-guide.ts', { essential: true })"), 'deploy requires guide HTML even without global snapshots');
console.log(`PASS: ${assertions} assertions. Public copy, links, own photos, checklist, FAQ/schema parity, source, route inventory, sitemap and static-build wiring.`);
