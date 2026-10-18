import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import { BLOG_POSTS } from '../src/data/blogPosts';
import { getStaticRoutes } from './static-routes';
import { launchBrowser } from './launch-browser';

async function main() {
  const dist = path.resolve('dist');
  const known = new Set(getStaticRoutes().map(r => r.path));
  const routes = ['/blog', ...BLOG_POSTS.map(p => `/blog/${p.slug}`)];
  const sitemap = fs.readFileSync('public/sitemap-servicos.xml', 'utf8');
  for (const route of routes) {
    assert(sitemap.includes(`https://www.carpluspneuseoficina.com.br${route}</loc>`));
    const html = fs.readFileSync(path.join(dist, route, 'index.html'), 'utf8');
    assert(html.includes(`href="https://www.carpluspneuseoficina.com.br${route}"`));
    assert.equal((html.match(/<h1\b/g) ?? []).length, 1);
    assert(!html.includes('content="noindex'));
  }
  for (const post of BLOG_POSTS) {
    assert(fs.existsSync(path.join('public', post.image)));
    post.relatedLinks.forEach(link => assert(known.has(link.href), `Unknown internal link: ${link.href}`));
  }
  const types: Record<string, string> = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.woff2': 'font/woff2' };
  const server = http.createServer((req, res) => {
    const pathname = decodeURIComponent(new URL(req.url ?? '/', 'http://localhost').pathname);
    let file = path.resolve(dist, `.${pathname}`);
    if (!file.startsWith(`${dist}/`) && file !== dist) { res.writeHead(403).end(); return; }
    if (fs.existsSync(file) && fs.statSync(file).isDirectory()) file = path.join(file, 'index.html');
    if (!fs.existsSync(file)) { file = path.join(dist, known.has(pathname) ? 'index.html' : '404.html'); if (!known.has(pathname)) res.statusCode = 404; }
    res.setHeader('Content-Type', types[path.extname(file)] ?? 'application/octet-stream'); res.end(fs.readFileSync(file));
  });
  await new Promise<void>(resolve => server.listen(0, '127.0.0.1', resolve));
  const address = server.address() as { port: number };
  const origin = `http://127.0.0.1:${address.port}`;
  const browser = await launchBrowser();
  try {
    const page = await browser.newPage();
    const errors: string[] = [];
    page.on('pageerror', error => errors.push(String(error)));
    await page.setRequestInterception(true);
    page.on('request', request => request.url().startsWith(origin) || request.url().startsWith('data:') ? request.continue() : request.abort());
    for (const width of [390, 768, 1440]) {
      await page.setViewport({ width, height: 900 });
      for (const route of routes) {
        const response = await page.goto(`${origin}${route}`, { waitUntil: 'networkidle0' });
        assert.equal(response?.status(), 200);
        await page.waitForFunction(() => !document.querySelector('[aria-label="Carregando"]'));
        const actual = await page.evaluate(() => ({ h1: document.querySelectorAll('h1').length, overflow: document.documentElement.scrollWidth > innerWidth, canonical: document.querySelector('link[rel="canonical"]')?.getAttribute('href'), missingImages: [...document.images].filter(i => i.complete && !i.naturalWidth).map(i => i.src), articles: [...document.querySelectorAll('script[type="application/ld+json"]')].flatMap(s => { const data = JSON.parse(s.textContent ?? '{}'); return Array.isArray(data) ? data : [data]; }).filter(s => s['@type'] === 'BlogPosting').length }));
        assert.equal(actual.h1, 1); assert(!actual.overflow, `${width}px overflow: ${route}`); assert.equal(actual.missingImages.length, 0); assert.equal(actual.canonical, `https://www.carpluspneuseoficina.com.br${route}`); if (route !== '/blog') assert.equal(actual.articles, 1);
        if (route === routes[1] && (width === 390 || width === 1440)) await page.screenshot({ path: `/tmp/carplus-blog-${width}.png`, fullPage: false });
      }
    }
    await page.setViewport({ width: 390, height: 844 });
    await page.goto(`${origin}/blog`, { waitUntil: 'networkidle0' });
    const menu = await page.$('button[aria-label="Abrir menu"]');
    assert(menu, 'Mobile menu trigger missing'); await menu.click();
    await page.waitForSelector('#mobile-navigation a[href="/blog"]', { visible: true });
    await page.click('#mobile-navigation a[href="/blog"]');
    await page.waitForFunction(() => document.body.style.overflow !== 'hidden');
    await page.click('a[href="/blog/calibragem-pneus-frios-carga"]');
    await page.waitForFunction(() => location.pathname.includes('/blog/calibragem'));
    await page.goBack({ waitUntil: 'networkidle0' });
    assert.equal(new URL(page.url()).pathname, '/blog');
    await page.goForward({ waitUntil: 'networkidle0' });
    assert.equal(new URL(page.url()).pathname, routes[1]);
    await page.goto(`${origin}/blog/nao-existe`, { waitUntil: 'networkidle0' });
    assert((await page.$eval('meta[name="robots"]', el => el.getAttribute('content')))?.includes('noindex'));
    assert.equal(errors.length, 0, errors.join('\n'));
    console.log('PASS: 5 static pages, sitemap, links, JSON-LD, canonical, 390/768/1440px, navigation and unknown slug.');
  } finally { await browser.close(); await new Promise<void>(resolve => server.close(() => resolve())); }
}
main().catch(error => { console.error(error); process.exit(1); });
