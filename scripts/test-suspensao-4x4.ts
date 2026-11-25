import assert from 'node:assert/strict';
import { preview } from 'vite';
import { launchBrowser } from './launch-browser';
import { getStaticRoutes, BASE_URL } from './static-routes';
import { SUSPENSAO_4X4 } from '../src/data/suspensao4x4';

import { suspensionPath } from '../src/data/suspensao4x4Details';

const route = '/suspensao-4x4-curitiba';
const canonical = BASE_URL + route;
assert.equal(SUSPENSAO_4X4.length, 202);
assert.equal(new Set(SUSPENSAO_4X4.map(item => item.ref)).size, 202);
assert.equal(getStaticRoutes().filter(item => item.path === route && item.expectedCanonical === canonical && item.sitemap === 'sitemap-servicos.xml').length, 1);
const server = await preview({ preview: { host: '127.0.0.1', port: 0, open: false } });
const addr = server.httpServer.address();
assert(addr && typeof addr !== 'string');
const origin = `http://127.0.0.1:${addr.port}`;
let browser: Awaited<ReturnType<typeof launchBrowser>> | undefined;
try {
  browser = await launchBrowser();
  const page = await browser.newPage();
  await page.setCacheEnabled(false);
  const errors: string[] = [];
  const embeds: string[] = [];
  page.on('pageerror', (e) => errors.push(String(e)));
  await page.setRequestInterception(true);
  page.on('request', (r) => {
    if (r.url().startsWith(origin)) return void r.continue();
    if (r.url().startsWith('https://www.instagram.com/reel/')) embeds.push(r.url());
    void r.abort();
  });
  for (const width of [320, 390, 1440]) {
    await page.setViewport({ width, height: 900, deviceScaleFactor: 1 });
    assert.equal((await page.goto(origin + route, { waitUntil: 'networkidle0' }))?.status(), 200);
    await page.waitForSelector('main h1');
    const state = await page.evaluate(() => ({
      h1: document.querySelectorAll('h1').length,
      canonical: [...document.querySelectorAll<HTMLLinkElement>('link[rel="canonical"]')].map(a => a.href),
      overflow: document.documentElement.scrollWidth > window.innerWidth,
      imgReady: document.querySelector<HTMLImageElement>('main img')?.naturalWidth,
      outstanding: [...document.querySelectorAll('main a[href^="#"]')].some((a) => !document.getElementById(a.getAttribute('href')!.slice(1))),
      quote: [...document.querySelectorAll<HTMLAnchorElement>('[aria-label="Resultados do catálogo de suspensão 4x4"] a[href*="wa.me"]')].map(a => new URL(a.href)),
      cols: getComputedStyle(document.querySelector('[aria-label="Resultados do catálogo de suspensão 4x4"]')!).gridTemplateColumns.split(' ').length,
      itemLinks: document.querySelectorAll('[aria-label="Resultados do catálogo de suspensão 4x4"] a[href^="/suspensao-4x4-curitiba/"]').length,
      noEmbed: !document.querySelector('iframe[src*="instagram"]'),
    }));
    assert.equal(state.h1, 1);
    assert.deepEqual(state.canonical, [canonical]);
    assert(!state.overflow, `Excesso de largura em ${width}px`);
    assert(state.imgReady && state.imgReady > 0);
    assert(!state.outstanding);
    assert.equal(state.quote.length, 202);
    assert.equal(state.cols, width >= 1024 ? 4 : 2);
    assert.equal(state.itemLinks, 202);
    assert(state.noEmbed);
  }
  assert.equal(embeds.length, 0);
  const links = await page.$$eval('[aria-label="Resultados do catálogo de suspensão 4x4"] a[href*="wa.me"]', a => a.map(x => (x as HTMLAnchorElement).href));
  assert(links.every(link => { const url = new URL(link); return url.hostname === 'wa.me' && url.pathname === '/554130827282' && url.searchParams.get('text')?.includes('CP4X4-'); }));
  const selector = '[aria-label="Resultados do catálogo de suspensão 4x4"] li';
  const ironman = SUSPENSAO_4X4.filter(item => item.brand === 'Ironman');
  assert.equal(ironman.length, 114);
  assert.equal(await page.$eval('aside[aria-labelledby="linha-ironman-4x4"] img', img => img.getAttribute('src')), '/images/suspensao-4x4/produtos/cp4x4-001.webp');
  await page.click('::-p-text(Ver linha Ironman 4x4)');
  await page.waitForFunction((sel) => document.querySelectorAll(sel).length === 114, {}, selector);
  assert.equal(await page.evaluate(() => document.activeElement?.id), 'filtros-catalogo-4x4');
  const shownRefs = await page.$eval(selector + ' a[href*="wa.me"]', list => list.map(a => new URL((a as HTMLAnchorElement).href).searchParams.get('text')?.match(/CP4X4-[0-9]{3}/)?.[0]));
  assert.deepEqual(shownRefs, ironman.map(item => item.ref));
  await page.click('::-p-text(Limpar filtros)');
  assert.equal((await page.$(selector)).length, 202);
  await page.type('main input[type=search]', 'hilux');
  await page.waitForFunction((s) => document.querySelectorAll(s).length < 202, {}, selector);
  const hilux = await page.$$eval(selector, rs => rs.map(r => r.textContent?.toLowerCase()));
  assert(hilux.length > 0 && hilux.length < 202 && hilux.every(r => r?.includes('hilux')));
  await page.select('main select', 'Kits de suspensão');
  const kits = await page.$$(selector);
  assert(kits.length > 0 && kits.length < hilux.length);
  await page.click('::-p-text(Limpar filtros)');
  assert.equal((await page.$$(selector)).length, 202);
  assert.equal(await page.$eval('a[href="https://www.instagram.com/reel/Dfrqw4itmjx/"]', a => a.getAttribute('target')), '_blank');
  await page.click('::-p-text(Carregar vídeo)');
  await page.waitForSelector('iframe[src="https://www.instagram.com/reel/Dfrqw4itmjx/embed/"]');
  for (const item of [SUSPENSAO_4X4[0], SUSPENSAO_4X4[201]]) {
    const target = suspensionPath(item);
    assert.equal((await page.goto(origin + target, { waitUntil: 'networkidle0' }))?.status(), 200);
    await page.waitForSelector('main h1');
    assert.equal(await page.$eval('main h1', h => h.textContent), item.name);
    assert.equal(await page.$eval('link[rel="canonical"]', a => (a as HTMLLinkElement).href), BASE_URL + target);
    assert(await page.$eval('main figure img', a => (a as HTMLImageElement).naturalWidth) > 0);
    assert((await page.$eval('main a[href*="wa.me"]', a => (a as HTMLAnchorElement).href)).includes(item.ref));
  }
  assert.equal(errors.length, 0, errors.join('; '));
  console.log('Suspensão 4x4: widths 320/390/1440, 202 unique quote references, filters, local asset, canonical, sitemap inventory and click-to-load frame passed. No external quote or reel requests allowed by test.');
} finally { await browser?.close(); await new Promise<void>((resolve, reject) => server.httpServer.close(e => e ? reject(e) : resolve())); }

