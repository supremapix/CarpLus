import React from 'react';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { renderToStaticMarkup } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import TireReplacementAdvice from '../src/components/TireReplacementAdvice';
import { TIRES } from '../src/data';
import { PROMO_TIRES } from '../src/data/promoTires';
import { decideTireIndexing } from '../src/lib/seoIndexing';

const render = (props: React.ComponentProps<typeof TireReplacementAdvice>) => renderToStaticMarkup(<MemoryRouter><TireReplacementAdvice {...props} /></MemoryRouter>);
const indexed = [...new Map(TIRES.filter(tire => decideTireIndexing(tire).index).map(tire => [tire.slug, tire])).values()];
assert.equal(indexed.length, 1350, 'Preserve indexed product inventory');
assert.equal(PROMO_TIRES.length, 20, 'Preserve promotion catalog inventory');
for (const tire of [...indexed, ...PROMO_TIRES]) {
  const html = render({ name: tire.nome, measure: tire.medida, rim: tire.aro, loadIndex: 'indiceCarga' in tire ? tire.indiceCarga : tire.carga, speedIndex: 'indiceVelocidade' in tire ? tire.indiceVelocidade : tire.velocidade });
  assert(html.includes(tire.medida), `${tire.slug}: contextual measure`);
  assert(html.includes('ano e a versão'), `${tire.slug}: manual/year/version`);
  assert(html.includes('pare em local seguro'), `${tire.slug}: safety guidance`);
  assert(html.includes('/servico/montagem-de-pneu') && html.includes('/servico/alinhamento-e-balanceamento'));
  assert(!/undefined|pronta entrega|montagem grátis|40\.000|60\.000/i.test(html));
}
const missing = render({ name: 'Modelo sob consulta' });
assert(missing.includes('confirme com a equipe'));
assert(!/undefined|aro 0/.test(missing));
for (const component of ['TireDetail', 'PneuPromocaoDetalhe']) {
  assert(fs.readFileSync(`src/components/${component}.tsx`, 'utf8').includes('<TireReplacementAdvice '), `${component}: advice mounted in product route`);
}
console.log(`PASS: contextual replacement guidance rendered for ${indexed.length} indexed products and ${PROMO_TIRES.length} promotional products, including missing-data fallback.`);
