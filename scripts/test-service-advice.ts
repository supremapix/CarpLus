import assert from 'node:assert/strict';
import fs from 'node:fs';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import ServiceAdvice from '../src/components/ServiceAdvice';
import { SERVICES } from '../src/data';
import { getManualRedirects } from './manual-redirects';
import { getAllServices } from '../src/data/services';
import { SERVICE_ADVICE } from '../src/data/serviceAdvice';
const modernServices = getAllServices();
assert.equal(modernServices.length, 40, 'Review inventory explicitly if service list changes');
const redirected = new Set(getManualRedirects().map(rule => rule.source));
const services = [...modernServices, ...SERVICES.filter(old => !modernServices.some(s => s.slug === old.slug)).map(old => ({ slug: old.slug, name: old.title }))].filter(s => !redirected.has(`/servico/${s.slug}`));
assert.equal(services.length, 45);
assert.deepEqual(Object.keys(SERVICE_ADVICE).sort(), services.map(s => s.slug).sort());
for (const field of ['signs', 'tip', 'process'] as const) {
  const values = Object.values(SERVICE_ADVICE).map(a => a[field]);
  assert.equal(new Set(values).size, services.length, `${field} must be service-specific`);
  assert.ok(values.every(value => value.length > 70), `${field} must be substantive`);
}
for (const service of services) {
  const advice = SERVICE_ADVICE[service.slug];
  const html = renderToStaticMarkup(createElement(ServiceAdvice, { slug: service.slug }));
  assert.ok(html.includes(service.name), `service name missing for ${service.slug}`);
  assert.equal((html.match(/<details/g) ?? []).length, 2);
  assert.ok(html.includes('https://wa.me/554130827282?text='));
  assert.ok(!html.includes('<h1'));
  assert.equal(advice.questions.length, 2);
  assert.ok(advice.questions.every(q => q.question.length > 15 && q.answer.length > 50));
}
const component = fs.readFileSync('src/components/ServiceAdvice.tsx', 'utf8');
assert.ok(!component.includes('<h1'));
assert.ok(component.includes('<h2') && component.includes('<h3'));
assert.ok(component.includes('554130827282'));
assert.ok(component.includes('service.name'));
assert.ok(component.includes('encodeURIComponent(message)'));
assert.equal(renderToStaticMarkup(createElement(ServiceAdvice, { slug: 'unknown-service' })), '');
console.log('Service advice: 45/45 exact live slugs (40 modern + 5 legacy), unique symptoms/tips/process, 90 contextual answers, semantic headings and contextual CTA.');
