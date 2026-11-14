import assert from 'node:assert/strict';
import fs from 'node:fs';
import { INTENT_PAGES, WHATSAPP_NUMBER, ADDRESS_FULL } from '../src/data/seoLanding';
const slug = 'centro-automotivo-para-troca-de-pneus-curitiba';
const page = INTENT_PAGES.find(p => p.slug === slug)!;
assert(page);
assert.equal(INTENT_PAGES.filter(p => p.slug === slug).length, 1);
assert.equal(WHATSAPP_NUMBER, '554130827282');
assert(ADDRESS_FULL.includes('1323'));
assert(page.h1.includes('Onde trocar pneus em Curitiba'));
assert.equal(page.sections.length, 7);
assert.equal(page.faq.length, 6);
assert(JSON.stringify(page).includes('antes de autorizar'));
assert(!/sem fila|instalação imediata|garantindo total|menor preço/.test(JSON.stringify(page)));
for (const component of ['PneusCuritibaHub', 'TireReplacementAdvice']) {
  assert(fs.readFileSync(`src/components/${component}.tsx`, 'utf8').includes(`to="/${slug}"`));
}
console.log('PASS: existing local replacement route, six FAQs, seven sections, confirmed contacts and hub/product links');
