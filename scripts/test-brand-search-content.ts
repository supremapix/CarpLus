import assert from 'node:assert/strict';
import { OFICINA_MARCA_PAGES } from '../src/data/oficinaMarcas';

for (const marca of ['Fiat', 'Renault']) {
  const page = OFICINA_MARCA_PAGES.find(p => p.marca === marca && p.tipo === 'marca');
  assert.ok(page);
  assert.equal(page.slug, `oficina-especializada-${marca.toLowerCase()}-curitiba`);
  assert.ok(page.secoes.some(section => /ano, versão/.test(section.conteudo)));
  assert.ok(page.faq.some(item => /Quanto custa/.test(item.pergunta) && /mão de obra/.test(item.resposta)));
  assert.ok(page.alternativaAutorizada?.includes('não é concessionária'));
  assert.ok(!page.intro.includes('garantia mantida'));
  assert.ok(!page.secoes.some(section => /centenas de vezes/.test(section.conteudo)));
}
console.log('PASS: Fiat/Renault retain URLs and independent identity; practical quote content and qualified warranty wording.');
