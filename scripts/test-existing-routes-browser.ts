/**
 * QA local da entrega (redirects → filesystem → rewrites → 404) + runtime.
 * Não substitui preview real da Vercel. Não publica nem acessa sites externos.
 * USE_SERVERLESS_CHROMIUM=1 npm run test:existing-routes:browser
 * Opcional: EXISTING_PAGES_SCREENSHOT_DIR=/caminho/privado
 */
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import { launchBrowser } from './launch-browser';
import { getEssentialExistingRoutes, validateEssentialExistingHtml } from './essential-existing-routes';
import { getShellTitle, listenOnFreePort, outputFileFor, resolveShellHtml } from './generate-static-pages';
import type { Page } from 'puppeteer-core';

const routes = getEssentialExistingRoutes();
const dist = path.resolve('dist');
const config = JSON.parse(fs.readFileSync('vercel.json', 'utf8'));
const shellTitle = getShellTitle(resolveShellHtml());
const mime: Record<string, string> = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.png': 'image/png', '.jpg': 'image/jpeg', '.woff2': 'font/woff2' };
const server = http.createServer((request, response) => {
  const url = new URL(request.url || '/', 'http://localhost');
  // Somente redirects exatos no host canônico são relevantes a este teste.
  const redirect = config.redirects.find(rule => !rule.has && rule.source === url.pathname);
  if (redirect) { response.writeHead(redirect.permanent ? 308 : 307, { location: redirect.destination + url.search }); response.end(); return; }
  const direct = path.resolve(dist, '.' + decodeURIComponent(url.pathname));
  if (!direct.startsWith(dist + path.sep) && direct !== dist) { response.writeHead(403); response.end(); return; }
  const file = [direct, path.join(direct, 'index.html')].find(candidate => fs.existsSync(candidate) && fs.statSync(candidate).isFile());
  const rewrite = config.rewrites.find(rule => {
    const pattern = rule.source.split('/').map(segment => segment.startsWith(':') ? (segment.endsWith('*') ? '.*' : '[^/]+') : segment.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('/');
    return new RegExp(`^${pattern}$`).test(url.pathname);
  });
  const target = file ?? (rewrite ? path.join(dist, rewrite.destination) : path.join(dist, '404.html'));
  response.writeHead(file || rewrite ? 200 : 404, { 'content-type': mime[path.extname(target)] ?? 'application/octet-stream' });
  response.end(fs.readFileSync(target));
});
const port = await listenOnFreePort(server);
const origin = `http://127.0.0.1:${port}`;
let browser: Awaited<ReturnType<typeof launchBrowser>> | undefined;
const screenshots = process.env.EXISTING_PAGES_SCREENSHOT_DIR;
const errors: string[] = [];

async function waitForSeo(page: Page, expected: string, noindex = false) {
  await page.waitForFunction((route, expectedNoindex) => {
    const status = (window as unknown as { __STATIC_RENDER_STATUS__?: { route: string; ready: boolean; noindex: boolean } }).__STATIC_RENDER_STATUS__;
    return status?.route === route && status.noindex === expectedNoindex && (status.ready || expectedNoindex);
  }, { timeout: 20000 }, expected, noindex);
}
async function metadata(page: Page) {
  return page.evaluate(() => ({
    title: document.title,
    canonical: [...document.querySelectorAll<HTMLLinkElement>('link[rel="canonical"]')].map(link => link.href),
    robots: document.querySelector<HTMLMetaElement>('meta[name="robots"]')?.content,
    h1: [...document.querySelectorAll('h1')].map(node => node.textContent?.replace(/\s+/g, ' ').trim()),
    overflow: document.documentElement.scrollWidth > innerWidth,
  }));
}
try {
  for (const pathname of ['/catalogo', '/catalogo/']) {
    const redirect = await fetch(origin + pathname, { redirect: 'manual' });
    assert.equal(redirect.status, 308);
    assert.equal(redirect.headers.get('location'), '/pneus');
    const final = await fetch(origin + '/pneus', { redirect: 'manual' });
    assert.equal(final.status, 200, 'um salto, sem loop');
    assert.equal(final.headers.get('location'), null);
  }
  for (const route of routes) for (const suffix of ['', '/']) {
    const response = await fetch(origin + route.path + suffix, { redirect: 'manual' });
    assert.equal(response.status, 200);
    assert.equal(response.headers.get('location'), null);
    const html = await response.text();
    assert.equal(html, fs.readFileSync(outputFileFor(route), 'utf8'), 'resposta inicial é o HTML da rota, não fallback da home');
    assert.deepEqual(validateEssentialExistingHtml(route, html, shellTitle), []);
  }
  const unknown = '/pagina-inexistente-controle-p2';
  const notFound = await fetch(origin + unknown);
  const notFoundHtml = await notFound.text();
  assert.equal(notFound.status, 404);
  assert(/name="robots" content="noindex, follow"/.test(notFoundHtml));
  assert(!/rel="canonical"/.test(notFoundHtml));

  browser = await launchBrowser();
  const page = await browser.newPage();
  await page.setRequestInterception(true);
  page.on('request', request => { if (request.url().startsWith(origin) || /^(data:|blob:)/.test(request.url())) void request.continue(); else void request.abort(); });
  page.on('pageerror', error => errors.push(String(error)));
  const baseline = new Map<string, Awaited<ReturnType<typeof metadata>>>();
  // Sem JS: conteúdo e metadados completos já no primeiro documento.
  await page.setJavaScriptEnabled(false);
  await page.setViewport({ width: 1440, height: 900 });
  for (const route of routes) {
    await page.goto(origin + route.path, { waitUntil: 'load' });
    const state = await metadata(page);
    assert.deepEqual(state.canonical, [route.expectedCanonical]);
    assert.equal(state.h1.length, 1);
    assert(state.h1[0]?.includes(route.headingText));
    assert(!state.robots?.includes('noindex'));
    baseline.set(route.path, state);
  }
  // Com JS, mobile e barra final: não pode trocar os sinais da resposta inicial.
  await page.setJavaScriptEnabled(true);
  await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true });
  for (const route of routes) for (const suffix of ['', '/']) {
    const pathname = route.path + suffix;
    const response = await page.goto(origin + pathname, { waitUntil: 'load' });
    assert.equal(response?.status(), 200);
    await waitForSeo(page, pathname);
    const state = await metadata(page);
    const initial = baseline.get(route.path)!;
    assert.equal(state.title, initial.title);
    assert.deepEqual(state.canonical, initial.canonical);
    assert.equal(state.robots, initial.robots);
    assert.deepEqual(state.h1, initial.h1);
    assert.equal(state.overflow, false, `${pathname}: sem overflow mobile`);
    if (screenshots && !suffix) {
      fs.mkdirSync(screenshots, { recursive: true });
      // Percorre a página para ativar as animações/lazy images já existentes,
      // sem registrar como defeito um elemento que ainda não entrou na viewport.
      await page.evaluate(async () => {
        document.documentElement.style.scrollBehavior = 'auto';
        for (let top = 0; top < document.documentElement.scrollHeight; top += 650) {
          window.scrollTo({ top, behavior: 'instant' });
          await new Promise(resolve => setTimeout(resolve, 60));
        }
        window.scrollTo({ top: 0, behavior: 'instant' });
      });
      await new Promise(resolve => setTimeout(resolve, 700));
      await page.screenshot({ path: path.join(screenshots, `${route.path.slice(1).replaceAll('/', '-')}-390.png`), fullPage: false });
    }
  }
  // Controles canônicos atuais: não promovemos noindex nem mudamos os resolutores.
  for (const pathname of ['/pneus', '/servico/scanner-automotivo', '/servico/troca-de-correia-dentada', '/bairro/portao', '/pneu/pneu-pirelli-175-70r13-p400-evo-82t', '/pneu-medida/195-55r15']) {
    await page.goto(origin + pathname, { waitUntil: 'load' });
    await waitForSeo(page, pathname);
    const state = await metadata(page);
    assert.deepEqual(state.canonical, [`https://www.carpluspneuseoficina.com.br${pathname}`]);
    assert(!state.robots?.includes('noindex'));
  }
  for (const pathname of [unknown, '/servico/servico-inexistente-controle-p2', '/bairro/umbara', '/pneu/pneu-pirelli-175-70r13-p400-evo-82t-chevrolet-celta']) {
    await page.goto(origin + pathname, { waitUntil: 'load' });
    await waitForSeo(page, pathname, true);
    const state = await metadata(page);
    assert.deepEqual(state.canonical, []);
    assert(state.robots?.includes('noindex'));
  }
  // Navegação SPA e histórico pelo link existente da página 404.
  await page.goto(origin + unknown, { waitUntil: 'load' });
  await waitForSeo(page, unknown, true);
  await page.evaluate(() => (document.querySelector('a[href="/pneus"]') as HTMLAnchorElement).click());
  await waitForSeo(page, '/pneus');
  await page.goBack();
  await waitForSeo(page, unknown, true);
  await page.goForward();
  await waitForSeo(page, '/pneus');
  assert.deepEqual((await metadata(page)).canonical, ['https://www.carpluspneuseoficina.com.br/pneus']);
  assert.deepEqual(errors, [], 'sem erros JavaScript');
  console.log('PASS: HTTP local nas 12 entradas, 2 redirects 308 sem cadeia, HTML sem JS, paridade mobile com JS, canonical/noindex/404 e histórico SPA. Preview Vercel não executado.');
} finally {
  if (browser) await browser.close();
  await new Promise<void>((resolve, reject) => server.close(error => error ? reject(error) : resolve()));
}
