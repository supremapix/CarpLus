/**
 * Regressão local, sem abrir serviços externos ou enviar mensagens.
 * npm run build:spa
 * USE_SERVERLESS_CHROMIUM=1 npm run generate:static:comparison-guide
 * USE_SERVERLESS_CHROMIUM=1 npm run test:comparison-guide:browser
 * Opcional: COMPARISON_GUIDE_SCREENSHOT_DIR=/tmp/carplus-comparison-guide-qa
 */
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import { preview } from 'vite';
import type { Page } from 'puppeteer-core';
import { launchBrowser } from './launch-browser';
import { COMPARISON_FAQ, COMPARISON_GUIDE_PATH as route, COMPARISON_GUIDE_SEO as seo, CARPLUS_GOOGLE_MAPS, COMPARISON_TECHNICAL_SOURCE } from '../src/data/comparisonGuide';

const staticHtml = await fs.readFile(`dist${route}/index.html`, 'utf8');
assert(staticHtml.includes('Como comparar anúncios de pneus e atendimento em loja'), 'HTML estático deve conter o guia, não o shell da home');
assert(staticHtml.includes(seo.canonical) && staticHtml.includes('FAQPage'), 'HTML estático com canonical e FAQ');
assert(!staticHtml.includes('Pesquisa pública e limites') && !staticHtml.includes('1517352816'), 'Nenhuma nota interna no HTML');

// O preview SPA do Vite não resolve /rota para /rota/index.html. Sirva o
// snapshot explicitamente antes do fallback para testar HTML real + hidratação.
const server = await preview({
  preview: { host: '127.0.0.1', port: 0, open: false },
  plugins: [{
    name: 'comparison-guide-static-preview',
    configurePreviewServer(previewServer) {
      previewServer.middlewares.use((request, response, next) => {
        if ((request.url || '').split('?')[0] !== route) return next();
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/html; charset=utf-8');
        response.end(staticHtml);
      });
    },
  }],
});
const address = server.httpServer.address();
assert(address && typeof address !== 'string');
const origin = `http://127.0.0.1:${address.port}`;
let browser: Awaited<ReturnType<typeof launchBrowser>> | undefined;
const screenshotDir = process.env.COMPARISON_GUIDE_SCREENSHOT_DIR;
async function waitForRoute(page: Page, expected: string) {
  await page.waitForFunction((expectedRoute) => {
    const status = (window as unknown as { __STATIC_RENDER_STATUS__?: { ready: boolean; route: string } }).__STATIC_RENDER_STATUS__;
    return status?.ready && status.route === expectedRoute && location.pathname === expectedRoute;
  }, { timeout: 15000 }, expected);
}

try {
  browser = await launchBrowser();
  const page = await browser.newPage();
  await page.setCacheEnabled(false);
  await page.setRequestInterception(true);
  page.on('request', request => {
    if (request.url().startsWith(origin) || /^(data:|blob:)/.test(request.url())) void request.continue();
    else void request.abort();
  });
  const errors: string[] = [];
  page.on('pageerror', error => errors.push(String(error)));
  let internalLinks: string[] = [];

  for (const width of [320, 390, 768, 1440]) {
    await page.setViewport({ width, height: 900, deviceScaleFactor: 1 });
    const response = await page.goto(`${origin}${route}`, { waitUntil: 'networkidle0' });
    assert.equal(response?.status(), 200);
    assert((await response!.text()).includes('Como comparar anúncios de pneus e atendimento em loja'), 'Resposta HTTP contém o guia antes do JavaScript');
    await waitForRoute(page, route);
    await page.evaluate(async () => {
      document.documentElement.style.scrollBehavior = 'auto';
      for (const img of document.querySelectorAll<HTMLImageElement>('main img')) { img.loading = 'eager'; await img.decode(); }
      window.scrollTo({ top: 0, behavior: 'instant' });
    });
    const state = await page.evaluate(() => {
      const schemas = [...document.querySelectorAll('script[type="application/ld+json"]')].flatMap(script => {
        const schema = JSON.parse(script.textContent || '{}'); return schema['@graph'] || schema;
      });
      const faqs = schemas.filter(schema => schema['@type'] === 'FAQPage');
      return {
        title: document.title,
        description: document.querySelector<HTMLMetaElement>('meta[name="description"]')?.content,
        canonical: [...document.querySelectorAll<HTMLLinkElement>('link[rel="canonical"]')].map(link => link.href),
        ogUrl: document.querySelector<HTMLMetaElement>('meta[property="og:url"]')?.content,
        ogWidth: document.querySelector<HTMLMetaElement>('meta[property="og:image:width"]')?.content,
        ogHeight: document.querySelector<HTMLMetaElement>('meta[property="og:image:height"]')?.content,
        robots: document.querySelector<HTMLMetaElement>('meta[name="robots"]')?.content,
        h1: [...document.querySelectorAll('h1')].map(h => h.textContent),
        overflow: document.documentElement.scrollWidth > innerWidth,
        faqCount: faqs.length,
        faqSchema: faqs[0]?.mainEntity.map((entry: { name: string; acceptedAnswer: { text: string } }) => ({ question: entry.name, answer: entry.acceptedAnswer.text })),
        faqHtml: [...document.querySelectorAll('main details')].map(detail => ({ question: detail.querySelector('summary span')?.textContent, answer: detail.querySelector('p')?.textContent })),
        breadcrumbCount: schemas.filter(schema => schema['@type'] === 'BreadcrumbList').length,
        businessCount: schemas.filter(schema => [schema['@type']].flat().some(type => ['AutoRepair', 'LocalBusiness', 'TireShop'].includes(type))).length,
        images: [...document.querySelectorAll<HTMLImageElement>('main img')].map(img => ({ loaded: img.complete && img.naturalWidth > 0, src: img.getAttribute('src'), alt: img.alt })),
        text: document.querySelector('main')?.textContent || '',
        externalLinks: [...document.querySelectorAll<HTMLAnchorElement>('main a[href^="https:"]')].map(link => link.href),
        internalLinks: [...new Set([...document.querySelectorAll('main a[href^="/"]')].map(link => link.getAttribute('href')!))],
        invalidTargets: [...document.querySelectorAll('main a, main summary')].filter(el => el.getBoundingClientRect().height < 44).map(el => el.textContent),
        unlabeledLinks: [...document.querySelectorAll('main a')].filter(el => !el.textContent?.trim() && !el.getAttribute('aria-label')).length,
        invalidSectionNames: [...document.querySelectorAll('main section')].filter(el => !document.getElementById(el.getAttribute('aria-labelledby') || '')).length,
        duplicateIds: [...document.querySelectorAll('[id]')].map(el => el.id).filter((id, i, all) => all.indexOf(id) !== i),
        heroTop: document.querySelector('main nav[aria-label="Breadcrumb"]')!.getBoundingClientRect().top,
        headerBottom: document.querySelector('body header')!.getBoundingClientRect().bottom,
      };
    });
    assert.equal(state.title, seo.title);
    assert.equal(state.description, seo.description);
    assert.deepEqual(state.canonical, [seo.canonical]);
    assert.equal(state.ogUrl, seo.canonical);
    assert.equal(state.ogWidth, '1200');
    assert.equal(state.ogHeight, '801');
    assert(!state.robots?.includes('noindex'));
    assert.deepEqual(state.h1, ['Como comparar anúncios de pneus e atendimento em loja']);
    assert.equal(state.overflow, false, `Sem overflow a ${width}px`);
    assert.equal(state.faqCount, 1);
    assert.deepEqual(state.faqSchema, COMPARISON_FAQ);
    assert.deepEqual(state.faqHtml, COMPARISON_FAQ);
    assert.equal(state.breadcrumbCount, 1);
    assert.equal(state.businessCount, 1, 'Somente a entidade global');
    assert.equal(state.images.length, 2);
    assert(state.images.every(image => image.loaded && image.alt && image.src?.startsWith('/images/loja/')));
    assert.deepEqual(state.externalLinks.sort(), [CARPLUS_GOOGLE_MAPS, COMPARISON_TECHNICAL_SOURCE].sort());
    assert(/4,9 de 5/.test(state.text) && /262 avaliações/.test(state.text) && /18\/10\/2026/.test(state.text));
    assert(!/mais confiável|mais seguro que|golpe|fraude|melhor preço|garantia|1517352816|1463164947/i.test(state.text));
    assert.deepEqual(state.invalidTargets, [], 'Alvos de toque com pelo menos 44px de altura');
    assert.equal(state.unlabeledLinks, 0);
    assert.equal(state.invalidSectionNames, 0);
    assert.deepEqual(state.duplicateIds, []);
    assert(state.heroTop >= state.headerBottom, 'Header fixo não cobre breadcrumb');
    internalLinks = state.internalLinks;

    for (const summary of await page.$$('main details summary')) {
      for (let repeat = 0; repeat < 2; repeat++) {
        await summary.click();
        assert(await summary.evaluate(el => el.parentElement?.hasAttribute('open')));
        await summary.click();
        assert.equal(await summary.evaluate(el => el.parentElement?.hasAttribute('open')), false);
      }
    }
    const firstSummary = await page.$('main details summary');
    assert(firstSummary);
    await firstSummary.focus();
    await page.keyboard.press('Enter');
    assert(await firstSummary.evaluate(el => el.parentElement?.hasAttribute('open')));
    await page.keyboard.press('Space');
    assert.equal(await firstSummary.evaluate(el => el.parentElement?.hasAttribute('open')), false);
    assert(await firstSummary.evaluate(el => parseFloat(getComputedStyle(el).outlineWidth) >= 2), 'Foco de teclado visível');

    for (const id of ['checklist', 'peca-ou-servico', 'conheca-carplus', 'duvidas']) {
      // Após o FAQ, revele o menu no centro, não atrás do header fixo.
      await page.$eval(`main nav a[href="#${id}"]`, link => link.scrollIntoView({ block: 'center', behavior: 'instant' }));
      await page.click(`main nav a[href="#${id}"]`);
      await page.waitForFunction(hash => location.hash === hash, { timeout: 5000 }, `#${id}`);
      const visible = await page.$eval(`#${id}`, section => section.getBoundingClientRect().top >= document.querySelector('body header')!.getBoundingClientRect().bottom);
      assert(visible, `Âncora ${id} visível abaixo do header`);
    }

    if (screenshotDir) {
      await fs.mkdir(screenshotDir, { recursive: true });
      await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
      await new Promise(resolve => setTimeout(resolve, 350));
      await page.screenshot({ path: path.join(screenshotDir, `viewport-top-${width}.png`) });
      // Capturas de elementos longos não devem duplicar o chrome fixo no meio do conteúdo.
      // A captura de viewport acima e as asserções já conferem o header real.
      const captureStyle = await page.addStyleTag({ content: 'header.fixed, header.fixed *, button[aria-label="Voltar ao topo"] { visibility: hidden !important; transition: none !important; }' });
      for (const id of ['comparar-anuncios-title', 'checklist-title', 'peca-ou-servico-title', 'conheca-carplus-title', 'duvidas-title', 'orcamento-title']) {
        const section = await page.$(`main section[aria-labelledby="${id}"]`);
        assert(section);
        await section.screenshot({ path: path.join(screenshotDir, `${id}-${width}.png`) });
      }
      await captureStyle.evaluate(style => style.remove());
    }
    console.log(`PASS ${width}px: layout, imagens, SEO/schema, alvos de toque, nomes acessíveis, FAQ/teclado e âncoras`);
  }

  for (const destination of internalLinks) {
    await page.goto(`${origin}${destination}`, { waitUntil: 'networkidle0' });
    await waitForRoute(page, destination);
    assert.equal(await page.evaluate(() => document.body.innerText.includes('Página não encontrada') || !!document.querySelector<HTMLMetaElement>('meta[name="robots"]')?.content.includes('noindex')), false, `Destino válido: ${destination}`);
  }
  for (const source of ['/pneus-curitiba', '/onde-comprar-pneus-curitiba']) {
    await page.goto(`${origin}${source}`, { waitUntil: 'networkidle0' });
    await waitForRoute(page, source);
    await page.click(`a[href="${route}"]`);
    await waitForRoute(page, route);
    await page.goBack({ waitUntil: 'networkidle0' });
    await waitForRoute(page, source);
    await page.goForward({ waitUntil: 'networkidle0' });
    await waitForRoute(page, route);
    assert.equal(await page.title(), seo.title, 'SEO restaurado após Voltar/Avançar');
  }
  assert.deepEqual(errors, [], 'Sem erros JavaScript');
  console.log(`PASS: ${internalLinks.length} destinos internos, duas entradas contextuais, Voltar/Avançar e HTML próprio.`);

  await page.setJavaScriptEnabled(false);
  await page.setViewport({ width: 390, height: 900, deviceScaleFactor: 1 });
  await page.goto(`${origin}${route}`, { waitUntil: 'networkidle0' });
  assert.equal(await page.$eval('h1', heading => heading.textContent), 'Como comparar anúncios de pneus e atendimento em loja');
  assert.equal(await page.$$eval('main details', details => details.length), COMPARISON_FAQ.length);
  assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false, 'HTML sem JavaScript cabe no mobile');
  await page.$eval('main details summary', summary => summary.scrollIntoView({ block: 'center', behavior: 'instant' }));
  await page.click('main details summary');
  assert(await page.$eval('main details', detail => detail.hasAttribute('open')), 'FAQ nativo funciona sem JavaScript');
  await page.click('main details summary');
  assert.equal(await page.$eval('main details', detail => detail.hasAttribute('open')), false);
  console.log('PASS: conteúdo, layout mobile e FAQ sem JavaScript.');
} finally {
  if (browser) await browser.close();
  await new Promise<void>(resolve => server.httpServer.close(() => resolve()));
}
