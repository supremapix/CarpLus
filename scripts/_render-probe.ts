import http from 'node:http';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DIST = path.join(ROOT, 'dist');

const MIME: Record<string, string> = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.webp': 'image/webp',
  '.woff2': 'font/woff2',
  '.ico': 'image/x-icon',
};

const server = http.createServer((req, res) => {
  const urlPath = decodeURIComponent((req.url || '/').split('?')[0]);
  let filePath = path.join(DIST, urlPath);
  if (!path.extname(filePath)) filePath = path.join(DIST, 'index.html');
  if (!fs.existsSync(filePath)) filePath = path.join(DIST, 'index.html');
  const ext = path.extname(filePath);
  res.setHeader('Content-Type', MIME[ext] || 'application/octet-stream');
  fs.createReadStream(filePath).pipe(res);
});

async function main() {
  await new Promise<void>((r) => server.listen(0, r));
  const port = (server.address() as { port: number }).port;
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  const page = await browser.newPage();
  const errors: string[] = [];
  page.on('pageerror', (e) => errors.push('PAGEERROR: ' + e.message));
  page.on('console', (m) => {
    if (m.type() === 'error') errors.push('CONSOLE.ERROR: ' + m.text());
  });
  page.on('requestfailed', (r) => errors.push('REQFAIL: ' + r.url() + ' ' + r.failure()?.errorText));

  await page.evaluateOnNewDocument(() => {
    (globalThis as unknown as { __name?: (f: unknown) => unknown }).__name = (f) => f;
    (window as unknown as { __STATIC_RENDER__?: boolean }).__STATIC_RENDER__ = true;
  });

  const gotoStart = Date.now();
  await page.goto(`http://localhost:${port}/`, { waitUntil: 'networkidle0', timeout: 30000 }).catch((e) => errors.push('GOTO: ' + e.message));
  errors.push('GOTO_MS=' + (Date.now() - gotoStart));

  // Replica EXATAMENTE a predicate do gerador para isolar o timeout.
  const expected = '/';
  const shellTitle = 'SHELL_UNUSED';
  let waitResult = 'PENDING';
  try {
    await page.waitForFunction(
      (exp: string, sh: string) => {
        const current = (window.location.pathname.replace(/\/+$/, '') || '/');
        if (current !== exp) return false;
        const spinner = document.querySelector('[role="status"][aria-label="Carregando"]');
        if (spinner) return false;
        const h1 = document.querySelector('h1');
        const main = document.querySelector('main') || document.querySelector('#root > div');
        if (!(h1 || main)) return false;
        const w = window as unknown as { __STATIC_RENDER_STATUS__?: { ready: boolean; route: string } };
        const st = w.__STATIC_RENDER_STATUS__;
        if (st && st.ready && (st.route.replace(/\/+$/, '') || '/') === exp) return true;
        const title = (document.title || '').trim();
        const hasTitle = title.length > 0 && title !== sh;
        const canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
        const hasCanonical = !!canonical?.getAttribute('href');
        return hasTitle && hasCanonical;
      },
      { timeout: 20000, polling: 200 },
      expected,
      shellTitle,
    );
    waitResult = 'RESOLVED';
  } catch (e) {
    waitResult = 'TIMEOUT: ' + (e as Error).message;
  }
  errors.push('WAIT_RESULT=' + waitResult);

  const state = await page.evaluate(() => {
    const w = window as unknown as { __STATIC_RENDER__?: boolean; __STATIC_RENDER_STATUS__?: unknown };
    const root = document.getElementById('root');
    return {
      title: document.title,
      staticFlag: w.__STATIC_RENDER__,
      status: w.__STATIC_RENDER_STATUS__ ?? null,
      rootChildren: root ? root.children.length : -1,
      rootHtmlLen: root ? root.innerHTML.length : -1,
      h1: document.querySelector('h1')?.textContent ?? null,
      canonical: (document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null)?.href ?? null,
      bodyText: (document.body.textContent || '').trim().slice(0, 120),
    };
  });

  fs.writeFileSync(
    path.join(ROOT, 'reports/_render-probe.txt'),
    JSON.stringify({ state, errors: errors.slice(0, 15) }, null, 2),
  );

  await browser.close();
  await new Promise<void>((r) => server.close(() => r()));
}

main();
