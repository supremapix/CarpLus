/**
 * Regressão local de /borracharia-portao. Não publica nem envia WhatsApp.
 * npm run build:spa
 * USE_SERVERLESS_CHROMIUM=1 node scripts/run-ts.mjs scripts/test-borracharia-portao.ts
 * Opcional: BORRACHARIA_SCREENSHOT_DIR=/tmp/carplus-borracharia-qa
 */
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import { preview } from 'vite';
import type { Page } from 'puppeteer-core';
import { launchBrowser } from './launch-browser';

const route = '/borracharia-portao';
const canonical = `https://www.carpluspneuseoficina.com.br${route}`;
const server = await preview({ preview: { host: '127.0.0.1', port: 0, open: false } });
const address = server.httpServer.address();
assert(address && typeof address !== 'string');
const origin = `http://127.0.0.1:${address.port}`;
let browser: Awaited<ReturnType<typeof launchBrowser>> | undefined;
const screenshotDir = process.env.BORRACHARIA_SCREENSHOT_DIR;

// networkidle não prova que o fallback pré-renderizado já foi substituído pela rota.
async function waitForRoute(page: Page, expectedRoute: string) {
  await page.waitForFunction((route) => {
    const status = (window as unknown as { __STATIC_RENDER_STATUS__?: { ready: boolean; route: string } }).__STATIC_RENDER_STATUS__;
    return status?.ready && status.route === route && location.pathname === route;
  }, { timeout: 15000 }, expectedRoute);
  if (expectedRoute === route) {
    await page.waitForFunction(() => document.getElementById('borracharia-title')?.textContent === 'Borracharia no Portão: conserto e troca de pneus');
  }
}

try {
  browser = await launchBrowser();
  const page = await browser.newPage();
  await page.setCacheEnabled(false);
  // Testes locais não precisam abrir serviços externos ou enviar formulários.
  await page.setRequestInterception(true);
  page.on('request', (request) => {
    if (request.url().startsWith(origin) || /^(data:|blob:)/.test(request.url())) void request.continue();
    else void request.abort();
  });
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(String(error)));
  let internalLinks: string[] = [];

  for (const width of [320, 390, 1440]) {
    await page.setViewport({ width, height: 900, deviceScaleFactor: 1 });
    const response = await page.goto(`${origin}${route}`, { waitUntil: 'networkidle0' });
    assert.equal(response?.status(), 200);
    await waitForRoute(page, route);
    await page.evaluate(async () => {
      document.documentElement.style.scrollBehavior = 'auto';
      for (const image of document.querySelectorAll<HTMLImageElement>('main img')) {
        image.loading = 'eager';
        try {
          await image.decode();
        } catch (error) {
          throw new Error(`Falha real ao decodificar imagem: ${JSON.stringify({ src: image.getAttribute('src'), currentSrc: image.currentSrc, connected: image.isConnected, naturalWidth: image.naturalWidth, route: location.pathname, h1: document.querySelector('h1')?.textContent })}; ${String(error)}`);
        }
      }
      window.scrollTo({ top: 0, behavior: 'instant' });
    });
    const state = await page.evaluate(() => {
      const schemas = [...document.querySelectorAll('script[type="application/ld+json"]')]
        .map((element) => JSON.parse(element.textContent || '{}'))
        .flatMap((schema) => schema['@graph'] || schema);
      const faqs = schemas.filter((schema) => schema['@type'] === 'FAQPage');
      return {
        title: document.title,
        description: document.querySelector<HTMLMetaElement>('meta[name="description"]')?.content,
        canonical: [...document.querySelectorAll<HTMLLinkElement>('link[rel="canonical"]')].map((link) => link.href),
        robots: document.querySelector<HTMLMetaElement>('meta[name="robots"]')?.content,
        ogUrl: document.querySelector<HTMLMetaElement>('meta[property="og:url"]')?.content,
        h1: [...document.querySelectorAll('h1')].map((heading) => heading.textContent),
        overflow: document.documentElement.scrollWidth > innerWidth,
        text: document.querySelector('main')?.textContent,
        faqSchemas: faqs.length,
        faqStructured: faqs[0]?.mainEntity.map((entry: { name: string; acceptedAnswer: { text: string } }) => ({ question: entry.name, answer: entry.acceptedAnswer.text })),
        faqHtml: [...document.querySelectorAll('main details')].map((detail) => ({ question: detail.querySelector('summary span')?.textContent, answer: detail.querySelector('p')?.textContent })),
        breadcrumbSchemas: schemas.filter((schema) => schema['@type'] === 'BreadcrumbList').length,
        businessEntities: schemas.filter((schema) => [schema['@type']].flat().some((type) => ['LocalBusiness', 'AutoRepair', 'TireShop'].includes(type))).length,
        images: [...document.querySelectorAll<HTMLImageElement>('main img')].map((img) => ({ src: img.getAttribute('src'), loaded: img.complete && img.naturalWidth > 0, alt: img.alt })),
        iframes: document.querySelectorAll('main iframe').length,
        contacts: [...document.querySelectorAll<HTMLAnchorElement>('main a[href*="wa.me"]')].map((link) => link.href),
        tel: document.querySelector<HTMLAnchorElement>('main a[href^="tel:"]')?.href,
        map: document.querySelector<HTMLAnchorElement>('main a[href*="maps.google.com"]')?.href,
        internalLinks: [...new Set([...document.querySelectorAll('main a[href^="/"]')].map((link) => link.getAttribute('href')!))],
        neighborhoodLinks: [...document.querySelectorAll('main nav[aria-label="Bairros próximos da unidade no Portão"] a')].map((link) => link.getAttribute('href')),
        breadcrumbTop: document.querySelector('nav[aria-label="Breadcrumb"]')!.getBoundingClientRect().top,
        headerBottom: document.querySelector('header')!.getBoundingClientRect().bottom,
      };
    });
    assert.equal(state.title, 'Borracharia no Portão | Conserto de Pneu em Curitiba | Carplus');
    assert.equal(state.description, 'Pneu furado ou perdendo pressão? Consulte avaliação para conserto de pneu na Carplus, no Portão, Curitiba. Atendimento na oficina. (41) 3082-7282.');
    assert.deepEqual(state.canonical, [canonical]);
    assert.equal(state.ogUrl, canonical);
    assert(!state.robots?.includes('noindex'));
    assert.deepEqual(state.h1, ['Borracharia no Portão: conserto e troca de pneus']);
    assert.equal(state.overflow, false, `Overflow em ${width}px`);
    assert.equal(state.faqSchemas, 1);
    assert.equal(state.faqHtml.length, 7);
    assert.deepEqual(state.faqStructured, state.faqHtml, 'FAQPage deve corresponder às respostas acessíveis na página');
    assert.equal(state.breadcrumbSchemas, 1);
    assert.equal(state.businessEntities, 1, 'Preservar somente a entidade comercial global');
    assert.equal(state.images.length, 10, 'Nove fotos reais e um poster local');
    assert(state.images.every((image) => image.loaded && image.alt));
    assert(state.images.every((image) => image.src?.startsWith('/images/borracharia/')));
    assert.equal(state.iframes, 0, 'Vídeo não deve carregar antes de interação');
    assert.equal(state.contacts.length, 3);
    for (const href of state.contacts) {
      const url = new URL(href);
      assert.equal(url.pathname, '/554130827282');
      const message = url.searchParams.get('text') || '';
      assert(['[modelo/ano]', '[se souber]', '[descrição]'].every((field) => message.includes(field)));
    }
    assert.equal(state.tel, 'tel:+554130827282');
    assert.equal(state.map, 'https://maps.google.com/maps?cid=11894120831274747055');
    assert.deepEqual(state.neighborhoodLinks, ['/bairro/portao', '/bairro/vila-izabel', '/bairro/santa-quiteria', '/bairro/agua-verde', '/bairro/novo-mundo']);
    assert(state.breadcrumbTop >= state.headerBottom, 'Cabeçalho não deve cobrir o breadcrumb');
    assert(!/melhor preço|garantia (vitalícia|total)|6 meses|nitrogênio|gratuit[oa]|conserto na hora|24 horas|borracharia móvel|até 13h/i.test(state.text || ''), 'Sem promessas não comprovadas');
    assert(/08h às 18h/.test(state.text || '') && /08h às 12h/.test(state.text || ''));
    assert(/Não rode com pneu vazio/.test(state.text || ''));
    internalLinks = state.internalLinks;

    // Todas as respostas abrem, fecham e permitem interações repetidas.
    const summaries = await page.$$('main details summary');
    for (const summary of summaries) {
      await summary.click();
      assert(await summary.evaluate((element) => element.parentElement?.hasAttribute('open')));
      await summary.click();
      assert.equal(await summary.evaluate((element) => element.parentElement?.hasAttribute('open')), false);
    }
    await summaries[0].focus();
    await page.keyboard.press('Enter');
    assert(await summaries[0].evaluate((element) => element.parentElement?.hasAttribute('open')));
    await page.keyboard.press('Enter');

    // Lightbox por mouse e teclado, Escape, botão Fechar e reabertura.
    const firstPhoto = await page.$('button[aria-label^="Ampliar foto:"]');
    assert(firstPhoto);
    await firstPhoto.click();
    await page.waitForSelector('dialog[open]');
    await page.$eval('dialog img', (img) => (img as HTMLImageElement).decode());
    assert(await page.$eval('dialog img', (img) => (img as HTMLImageElement).complete && (img as HTMLImageElement).naturalWidth > 0));
    assert.equal(await page.$eval('dialog', (dialog) => dialog.scrollWidth > innerWidth), false);
    for (let cycle = 0; cycle < 5; cycle++) {
      await page.keyboard.press('Escape');
      await page.waitForFunction(() => !document.querySelector('dialog')?.hasAttribute('open'));
      assert(await firstPhoto.evaluate((element) => document.activeElement === element), 'Foco retorna à miniatura');
      await page.keyboard.press('Enter');
      await page.waitForSelector('dialog[open]');
    }
    await page.click('button[aria-label="Fechar foto ampliada"]');
    await page.waitForFunction(() => !document.querySelector('dialog')?.hasAttribute('open'));

    if (screenshotDir) {
      await fs.mkdir(screenshotDir, { recursive: true });
      await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
      await new Promise((resolve) => setTimeout(resolve, 400));
      // Captura em partes: Chromium serverless pode repetir pixels em imagens >8192px.
      await page.screenshot({ path: path.join(screenshotDir, `borracharia-${width}.png`) });
      for (const sectionId of ['pneu-furado-title', 'servicos-title', 'estrutura-title', 'regiao-title', 'faq-title', 'contato-title']) {
        const section = await page.$(`section[aria-labelledby="${sectionId}"]`);
        assert(section);
        await section.screenshot({ path: path.join(screenshotDir, `${sectionId}-${width}.png`) });
      }
    }
    console.log(`PASS ${width}px: layout, 10 imagens, SEO, 7 FAQs, CTAs, lightbox e teclado`);
  }

  for (const destination of internalLinks) {
    await page.goto(`${origin}${destination}`, { waitUntil: 'networkidle0' });
    await waitForRoute(page, destination);
    const invalid = await page.evaluate(() => document.querySelector<HTMLMetaElement>('meta[name="robots"]')?.content.includes('noindex') || document.body.innerText.includes('Página não encontrada'));
    assert.equal(Boolean(invalid), false, `Destino inválido: ${destination}`);
  }
  await page.goto(`${origin}/servico/conserto-de-pneu`, { waitUntil: 'networkidle0' });
  await waitForRoute(page, '/servico/conserto-de-pneu');
  const repair = await page.evaluate(() => ({ title: document.title, description: document.querySelector<HTMLMetaElement>('meta[name="description"]')?.content, text: document.querySelector('main')?.textContent || document.body.textContent }));
  assert(!/gratuit[oa]|na hora|estoque|imediat[oa]/i.test(`${repair.title} ${repair.description}`), 'Metadados do conserto sem promessas antigas');
  assert(!/20[–-]40 min/.test(repair.text || ''), 'Conserto sem tempo fixo antigo');

  await page.goto(`${origin}/servicos`, { waitUntil: 'networkidle0' });
  await waitForRoute(page, '/servicos');
  const serviceContacts = await page.$$eval('a[href*="wa.me"]', (links) => links.map((link) => (link as HTMLAnchorElement).href));
  assert(serviceContacts.length > 0);
  for (const href of serviceContacts) assert.equal(new URL(href).pathname, '/554130827282', 'Telefone dos serviços deve ter o número correto');

  // Navegação SPA, voltar e avançar não podem deixar canonical/FAQ de outra rota.
  await page.goto(`${origin}${route}`, { waitUntil: 'networkidle0' });
  await waitForRoute(page, route);
  await page.click('main a[href="/servico/conserto-de-pneu"]');
  await waitForRoute(page, '/servico/conserto-de-pneu');
  await page.goBack({ waitUntil: 'networkidle0' });
  await waitForRoute(page, route);
  assert.equal(await page.$eval('link[rel="canonical"]', (link) => link.getAttribute('href')), canonical);
  assert.equal(await page.$$eval('main details', (details) => details.length), 7);
  await page.goForward({ waitUntil: 'networkidle0' });
  await waitForRoute(page, '/servico/conserto-de-pneu');
  assert.equal(new URL(page.url()).pathname, '/servico/conserto-de-pneu');
  assert.deepEqual(errors, [], 'Sem erros JavaScript');
  console.log(`PASS ${internalLinks.length} destinos internos, /servicos, metadados do conserto e histórico SPA. Nada foi publicado.`);
} finally {
  await browser?.close();
  await new Promise<void>((resolve, reject) => server.httpServer.close((error) => error ? reject(error) : resolve()));
}
