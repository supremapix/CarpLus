import assert from 'node:assert/strict';
import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';
import { launchBrowser } from './launch-browser';
import { listenOnFreePort } from './generate-static-pages';

// Run against a dev/live origin, or a separately-built SPA directory without
// touching the already-validated deployment output. No external links clicked.
const dist = path.resolve(process.env.TEST_DIST_DIR || 'dist');
const mime: Record<string, string> = { '.js': 'application/javascript', '.css': 'text/css', '.json': 'application/json', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.png': 'image/png', '.jpg': 'image/jpeg', '.woff2': 'font/woff2', '.ico': 'image/x-icon' };
const server = http.createServer((request, response) => {
  try {
    const pathname = decodeURIComponent(new URL(request.url || '/', 'http://localhost').pathname);
    const file = path.resolve(dist, `.${pathname}`);
    if (file !== dist && !file.startsWith(dist + path.sep)) { response.writeHead(403).end(); return; }
    const ext = path.extname(file);
    if (mime[ext] && fs.existsSync(file) && fs.statSync(file).isFile()) {
      response.setHeader('Content-Type', mime[ext]); response.end(fs.readFileSync(file)); return;
    }
    response.setHeader('Content-Type', 'text/html; charset=utf-8');
    response.end(fs.readFileSync(path.join(dist, 'index.html')));
  } catch (error) { response.writeHead(500).end(String(error)); }
});
const origin = process.env.TEST_ORIGIN?.replace(/\/$/, '') || `http://127.0.0.1:${await listenOnFreePort(server)}`;
const browser = await launchBrowser();
try {
  const page = await browser.newPage();
  await page.setViewport({ width: 1172, height: 900 });
  const errors: string[] = [];
  page.on('pageerror', error => errors.push(String(error)));
  await page.setRequestInterception(true);
  page.on('request', request => request.url().startsWith(origin) || request.url().startsWith('data:') ? request.continue() : request.abort());
  const snapshot = async () => page.evaluate(() => ({
    url: location.href,
    current: [...document.querySelectorAll('[aria-label="Paginação do catálogo de pneus"] [aria-current="page"]')].map(el => el.textContent?.trim()),
    products: [...new Set([...document.querySelectorAll<HTMLAnchorElement>('a[href^="/pneu/"]')].map(el => el.getAttribute('href')!))],
    robots: document.querySelector('meta[name="robots"]')?.getAttribute('content'),
    canonical: document.querySelector('link[rel="canonical"]')?.getAttribute('href'),
    title: document.title,
  }));
  const waitPage = async (number: number) => {
    await page.waitForFunction(expected => {
      const controls = [...document.querySelectorAll('[aria-label="Paginação do catálogo de pneus"] [aria-current="page"]')];
      return location.pathname === '/pneus' && controls.length > 0 && controls.every(el => el.textContent?.trim() === String(expected));
    }, { timeout: 15000 }, number).catch(async error => { console.error('Unexpected pagination state:', await snapshot()); throw error; });
    // Catch delayed client-side redirects, not only the first render.
    await new Promise(resolve => setTimeout(resolve, 500));
    const state = await snapshot();
    assert.equal(new URL(state.url).pathname, '/pneus');
    assert(state.current.length > 0 && state.current.every(value => value === String(number)));
    assert.equal(state.products.length, 24);
    return state;
  };
  const open = async (route: string, number: number) => {
    await page.goto(origin + route, { waitUntil: 'networkidle0' });
    return waitPage(number);
  };
  const first = await open('/pneus', 1);
  assert(!first.robots?.includes('noindex'));
  const second = await open('/pneus?page=2', 2);
  assert.equal(new URL(second.url).search, '?page=2');
  assert.notDeepEqual(first.products, second.products);
  assert(!second.products.some(product => first.products.includes(product)), 'Page 1 and 2 must not repeat product identities');
  assert(second.robots?.includes('noindex'));
  // Existing useSEO policy omits canonicals on noindex pages; if emitted, it must remain the catalog.
  if (second.canonical) assert.equal(new URL(second.canonical).pathname, '/pneus', 'Pagination must not consolidate to an unrelated brand');
  assert(second.title.startsWith('Catálogo de Pneus em Curitiba'));
  assert(!second.title.toLowerCase().includes('bridgestone'));
  await page.evaluate(() => document.querySelector<HTMLButtonElement>('[aria-label="Próxima página"]')!.click());
  const third = await waitPage(3);
  assert.equal(new URL(third.url).search, '?page=3');
  assert.notDeepEqual(second.products, third.products);
  await page.goBack({ waitUntil: 'networkidle0' });
  assert.deepEqual((await waitPage(2)).products, second.products);
  await page.goForward({ waitUntil: 'networkidle0' });
  assert.deepEqual((await waitPage(3)).products, third.products);
  await page.reload({ waitUntil: 'networkidle0' });
  assert.deepEqual((await waitPage(3)).products, third.products);
  await open('/pneus', 1);
  await page.evaluate(() => document.querySelector<HTMLButtonElement>('[aria-label="Próxima página"]')!.click());
  assert.deepEqual((await waitPage(2)).products, second.products);

  const brand = await open('/pneus?marca=bridgestone&page=2', 2);
  assert.equal(new URL(brand.url).searchParams.get('marca'), 'bridgestone');
  assert(brand.products.every(product => product.includes('bridgestone')));
  const query = await open('/pneus?q=205&page=2', 2);
  assert.equal(new URL(query.url).searchParams.get('q'), '205');
  assert(query.products.every(product => product.includes('205')));
  assert(query.robots?.includes('noindex'));
  await page.evaluate(() => document.querySelector<HTMLButtonElement>('[aria-label="Próxima página"]')!.click());
  const queryThird = await waitPage(3);
  assert.equal(new URL(queryThird.url).searchParams.get('q'), '205');
  assert(queryThird.products.every(product => product.includes('205')));
  await page.goBack({ waitUntil: 'networkidle0' });
  assert.deepEqual((await waitPage(2)).products, query.products);
  const combined = await open('/pneus?marca=pirelli&aro=15&page=2', 2);
  assert.equal(new URL(combined.url).searchParams.get('marca'), 'pirelli');
  assert.equal(new URL(combined.url).searchParams.get('aro'), '15');
  assert(combined.products.every(product => product.includes('pirelli')));
  assert(combined.robots?.includes('noindex'));
  await page.reload({ waitUntil: 'networkidle0' });
  assert.deepEqual((await waitPage(2)).products, combined.products);
  assert.deepEqual(errors, [], 'Browser runtime errors');
  console.log(JSON.stringify({ result: 'PASS', origin, cases: ['direct pages 1/2 with distinct 24 products', 'next page 3', 'Back/Forward/reload', 'page 1 next button', 'brand page 2', 'q=205 page 2/3/Back', 'brand+aro page 2/reload', 'catalog canonical, no unintended brand redirect, filter noindex'], firstProducts: [first.products[0], second.products[0], third.products[0]] }, null, 2));
} finally {
  await browser.close();
  if (server.listening) await new Promise<void>(resolve => server.close(() => resolve()));
}
