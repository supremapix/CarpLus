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
  await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);
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
    assert.equal(state.quote.length, 24);
    assert.equal(state.cols, width >= 1024 ? 4 : 2);
    assert.equal(state.itemLinks, 24);
    assert(state.noEmbed);
    const hero = await page.$eval('section[aria-labelledby="suspensao-4x4-title"]', el => ({
      title: el.querySelector('h1')?.textContent,
      images: [...el.querySelectorAll<HTMLImageElement>('figure img')].map(img => [img.getAttribute('src'), img.naturalWidth]),
      callToAction: el.querySelector('a[href="#catalogo-4x4"]')?.textContent?.trim(),
    }));
    assert.equal(hero.title, 'O kit certo começa pelo seu 4×4.');
    assert.equal(hero.callToAction, 'Explorar catálogo');
    assert.deepEqual(hero.images.map(row => row[0]), ['/images/suspensao-4x4/ironman-4x4.svg', '/images/suspensao-4x4/produtos/cp4x4-001.webp']);
    assert(hero.images.every(([, width]) => Number(width) > 0));
  }
  await page.click('button[aria-label="Produto anterior"]');
  const carousel = 'figure[aria-roledescription="carrossel"]';
  assert.match(await page.$eval(carousel + ' figcaption', el => el.textContent || ''), /202 de 202/);
  assert.equal(await page.$(carousel + ' img[alt="Ironman 4x4"]'), null);
  await page.click('button[aria-label="Próximo produto"]');
  assert.equal(await page.$eval(carousel + ' > a', el => el.getAttribute('href')), suspensionPath(SUSPENSAO_4X4[0]));
  assert.match(await page.$eval(carousel + ' figcaption', el => el.textContent || ''), /1 de 202/);
  assert(await page.$('button[aria-label="Reproduzir carrossel"]'));
  const menu = 'header button[aria-controls="desktop-catalog-links"]';
  await page.click(menu);
  assert.equal(await page.$eval('#desktop-catalog-links a', links => links.length), 2);
  await page.keyboard.press('Escape');
  assert.equal(await page.$eval(menu, el => el.getAttribute('aria-expanded')), 'false');
  const crossLink = 'main section[aria-labelledby="outro-catalogo"] a';
  assert.equal(await page.$eval(crossLink, el => el.getAttribute('href')), '/pneus');
  assert.deepEqual(await page.$eval('footer nav[aria-label="Catálogos Carplus"] a', links => links.map(el => el.getAttribute('href'))), ['/pneus', '/suspensao-4x4-curitiba#linha-ironman-4x4']);
  assert.equal(embeds.length, 0);
  const selector = '[aria-label="Resultados do catálogo de suspensão 4x4"] li';
  const next = 'nav[aria-label="Paginação do catálogo 4x4"] button:last-child';
  const readRefs = () => page.$$eval(selector + ' a[href*="wa.me"]', list => list.map(a => {
    const url = new URL((a as HTMLAnchorElement).href);
    return url.hostname === 'wa.me' && url.pathname === '/554130827282' ? url.searchParams.get('text')?.match(/CP4X4-[0-9]{3}/)?.[0] : undefined;
  }));
  const allRefs = [];
  for (let p = 1; p <= 9; p++) {
    const refs = await readRefs();
    assert.equal(refs.length, p < 9 ? 24 : 10);
    allRefs.push(...refs);
    if (p < 9) await page.click(next);
  }
  assert.deepEqual(allRefs, SUSPENSAO_4X4.map(item => item.ref));
  const ironman = SUSPENSAO_4X4.filter(item => item.brand === 'Ironman');
  assert.equal(ironman.length, 114);
  assert.equal(await page.$eval('aside[aria-labelledby="linha-ironman-4x4"] img', img => img.getAttribute('src')), '/images/suspensao-4x4/produtos/cp4x4-001.webp');
  await page.click('section[aria-labelledby="suspensao-4x4-title"] button');
  await page.waitForFunction(() => document.querySelector('#resultados-catalogo-4x4')?.textContent?.includes('114 referências'));
  assert.equal(await page.evaluate(() => document.activeElement?.id), 'filtros-catalogo-4x4');
  const shownRefs = await readRefs();
  assert.deepEqual(shownRefs, ironman.slice(0, 24).map(item => item.ref));
  await page.click('::-p-text(Limpar filtros)');
  assert.equal((await page.$$(selector)).length, 24);
  await page.type('main input[type=search]', 'hilux');
  await page.waitForFunction((s) => document.querySelectorAll(s).length < 24, {}, selector);
  const hilux = await page.$$eval(selector, rs => rs.map(r => r.textContent?.toLowerCase()));
  assert(hilux.length > 0 && hilux.length < 202 && hilux.every(r => r?.includes('hilux')));
  await page.select('main select', 'Kits de suspensão');
  const kits = await page.$$(selector);
  assert(kits.length > 0 && kits.length < hilux.length);
  await page.click('::-p-text(Limpar filtros)');
  assert.equal((await page.$(selector)).length, 24);
  assert.equal(await page.$eval('a[href="https://www.instagram.com/reel/Dfrqw4itmjx/"]', a => a.getAttribute('target')), '_blank');
  await page.click('::-p-text(Carregar vídeo)');
  await page.waitForSelector('iframe[src="https://www.instagram.com/reel/Dfrqw4itmjx/embed/"]');
  for (const item of [ironman[0], SUSPENSAO_4X4.find(row => row.ref === 'CP4X4-062')!, SUSPENSAO_4X4[201], SUSPENSAO_4X4.find(row => row.brand !== 'Ironman' && row.ref !== 'CP4X4-062')!]) {
    const target = suspensionPath(item);
    assert.equal((await page.goto(origin + target, { waitUntil: 'networkidle0' }))?.status(), 200);
    await page.waitForSelector('main h1');
    assert.equal(await page.$eval('main h1', h => h.textContent), item.name);
    assert.equal(await page.$eval('link[rel="canonical"]', a => (a as HTMLLinkElement).href), BASE_URL + target);
    assert(await page.$eval('main figure img', a => (a as HTMLImageElement).naturalWidth) > 0);
    assert((await page.$eval('main a[href*="wa.me"]', a => (a as HTMLAnchorElement).href)).includes(item.ref));
    const mark = 'main img[src="/images/suspensao-4x4/ironman-4x4.svg"]';
    assert.equal(Boolean(await page.$(mark)), item.brand === 'Ironman');
    const photoButton = 'button[aria-label="Ampliar foto do produto"]';
    const premium = item.brand === 'Ironman' || item.ref === 'CP4X4-062';
    assert.equal(Boolean(await page.$(photoButton)), premium);
    if (premium) {
      assert.equal(await page.$eval(photoButton + ' img', img => getComputedStyle(img).objectFit), 'contain');
      const second = 'button[aria-label="Ver foto 2"]';
      if (await page.$(second)) {
        const firstSrc = await page.$eval(photoButton + ' img', img => img.getAttribute('src'));
        await page.click(second);
        assert.equal(await page.$eval(second, item => item.getAttribute('aria-pressed')), 'true');
        assert.notEqual(await page.$eval(photoButton + ' img', img => img.getAttribute('src')), firstSrc);
      }
      await page.click(photoButton);
      await page.waitForSelector('dialog[aria-label="Foto ampliada do produto"][open]');
      await page.click('button[aria-label="Aumentar zoom"]');
      assert.equal(await page.$eval('button[aria-label="Reduzir zoom"]', el => el.getAttribute('aria-pressed')), 'true');
      await page.click('button[aria-label="Reduzir zoom"]');
      if (await page.$(second)) {
        const before = await page.$eval('dialog[open] img', img => img.getAttribute('src'));
        await page.keyboard.press('ArrowRight');
        assert.notEqual(await page.$eval('dialog[open] img', img => img.getAttribute('src')), before);
      }
      await page.keyboard.press('Escape');
      await page.waitForSelector('dialog[aria-label="Foto ampliada do produto"][open]', {hidden: true});
      assert.equal(await page.evaluate(() => document.activeElement?.getAttribute('aria-label')), 'Ampliar foto do produto');
    }
    if (item.brand === 'Ironman') assert(await page.$eval(mark, a => (a as HTMLImageElement).naturalWidth) > 0);
    assert.equal(await page.$('iframe[src*="instagram"]'), null);
    assert.equal(await page.$eval('a[href="https://www.instagram.com/reel/Dfrqw4itmjx/"]', a => a.getAttribute('target')), '_blank');
    await page.click('::-p-text(Carregar vídeo do catálogo)');
    await page.waitForSelector('iframe[src="https://www.instagram.com/reel/Dfrqw4itmjx/embed/"]');
  }
  for (const width of [320, 390, 1440]) {
    await page.setViewport({ width, height: 900, deviceScaleFactor: 1 });
    assert.equal((await page.goto(origin, { waitUntil: 'networkidle0' }))?.status(), 200);
    const callout = 'section[aria-labelledby="home-ironman-4x4"]';
    await page.waitForSelector(callout);
    assert.equal(await page.$eval(callout + ' h2', el => el.textContent), 'Linha Ironman 4x4 na Carplus');
    assert.equal(await page.$eval(callout, el => el.getBoundingClientRect().right <= window.innerWidth), true);
    if (width <= 390) {
      await page.click('button[aria-label="Abrir menu"]');
      await page.click('button[aria-controls="mobile-catalog-links"]');
      assert.equal(await page.$eval('#mobile-catalog-links a', links => links.length), 2);
      await page.click('#mobile-catalog-links a[href="/pneus"]');
      await page.waitForFunction(() => window.location.pathname === '/pneus');
      assert.equal(await page.$('#mobile-navigation'), null);
      await page.click(crossLink);
      await page.waitForFunction(() => window.location.hash === '#linha-ironman-4x4' && !!document.getElementById('linha-ironman-4x4'));
      await page.goto(origin, { waitUntil: 'networkidle0' });
    }
    await page.click(callout + ' a');
    await page.waitForFunction(() => window.location.hash === '#linha-ironman-4x4' && !!document.getElementById('linha-ironman-4x4'));
    await page.waitForFunction(() => {
      const heading = document.getElementById('linha-ironman-4x4');
      if (!heading) return false;
      const rect = heading.getBoundingClientRect();
      return rect.top >= 0 && rect.bottom <= window.innerHeight;
    });
    assert.equal(await page.$eval('h3#linha-ironman-4x4', el => el.textContent), 'Ironman 4x4');
  }
  assert.equal(errors.length, 0, errors.join('; '));
  console.log('Suspensão 4x4: widths 320/390/1440, 202 unique quote references, filters, local asset, canonical, sitemap inventory and click-to-load frame passed. No external quote or reel requests allowed by test.');
} finally { await browser?.close(); await new Promise<void>((resolve, reject) => server.httpServer.close(e => e ? reject(e) : resolve())); }

