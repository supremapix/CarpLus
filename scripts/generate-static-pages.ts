// scripts/generate-static-pages.ts
// ─────────────────────────────────────────────────────────────────────────────
// PROVA DE CONCEITO — GERAÇÃO ESTÁTICA INTERNA (SNAPSHOT HEADLESS) — Etapa E2/E3
// ─────────────────────────────────────────────────────────────────────────────
// Substitui FUTURAMENTE o Prerender.io. Nesta etapa COEXISTE com ele:
//   • não remove o token/meta Prerender.io do index.html;
//   • não altera vercel.json;
//   • aplica-se apenas às rotas piloto (scripts/static-pilot-routes.ts).
//
// Fluxo:
//   1. usa o build já existente em /dist (rode `vite build` antes);
//   2. sobe um servidor estático local com fallback SPA;
//   3. abre cada rota piloto em Chrome headless (puppeteer);
//   4. aguarda um sinal confiável de render (render-event + __STATIC_RENDER_READY__
//      + H1/conteúdo + ausência do spinner) com timeout de segurança;
//   5. captura o HTML final já renderizado;
//   6. sanitiza (remove qualquer referência a localhost/porta);
//   7. grava no caminho físico correspondente à rota (após capturar TODAS);
//   8. preserva uma cópia do shell original em reports/_spa-shell/;
//   9. encerra navegador e servidor;
//  10. grava um resumo JSON em reports/static-pilot-generation.json.
//
// Execução: `tsx scripts/generate-static-pages.ts`

import fs from 'fs';
import path from 'path';
import http from 'http';
import { fileURLToPath } from 'url';
import puppeteer, { type Browser } from 'puppeteer';
import { PILOT_ROUTES, BASE_URL, type PilotRoute } from './static-pilot-routes';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DIST = path.join(ROOT, 'dist');
const REPORTS = path.join(ROOT, 'reports');
const SHELL_BACKUP = path.join(REPORTS, '_spa-shell');

const RENDER_TIMEOUT_MS = Number(process.env.STATIC_RENDER_TIMEOUT ?? 20000);
const STABILIZE_MS = 400;

// ─── Content-Types para o servidor estático ──────────────────────────────────
const MIME: Record<string, string> = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.webmanifest': 'application/manifest+json; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
};

// ─── Servidor estático com fallback SPA (serve index.html p/ rotas sem arquivo) ─
function createStaticServer(): http.Server {
  const indexHtml = fs.readFileSync(path.join(DIST, 'index.html'));
  return http.createServer((req, res) => {
    try {
      const urlPath = decodeURIComponent((req.url ?? '/').split('?')[0]);
      let filePath = path.join(DIST, urlPath);

      // Impede path traversal para fora de /dist.
      if (!filePath.startsWith(DIST)) {
        res.statusCode = 403;
        res.end('Forbidden');
        return;
      }

      if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
        const ext = path.extname(filePath).toLowerCase();
        res.setHeader('Content-Type', MIME[ext] ?? 'application/octet-stream');
        res.end(fs.readFileSync(filePath));
        return;
      }

      // Fallback SPA: qualquer rota "de aplicação" recebe o shell index.html.
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      res.end(indexHtml);
    } catch (err) {
      res.statusCode = 500;
      res.end('Server error: ' + (err as Error).message);
    }
  });
}

function listenOnFreePort(server: http.Server): Promise<number> {
  return new Promise((resolve, reject) => {
    server.once('error', reject);
    server.listen(0, '127.0.0.1', () => {
      const addr = server.address();
      if (addr && typeof addr === 'object') resolve(addr.port);
      else reject(new Error('Falha ao obter porta livre'));
    });
  });
}

// ─── Caminho físico de saída para cada rota ──────────────────────────────────
function outputFileFor(route: PilotRoute): string {
  if (route.isHome) return path.join(DIST, 'index.html');
  const clean = route.path.replace(/^\/+|\/+$/g, '');
  return path.join(DIST, clean, 'index.html');
}

interface RouteResult {
  path: string;
  type: string;
  outputFile: string;
  status: 'ok' | 'falha';
  title: string | null;
  description: string | null;
  canonical: string | null;
  robots: string | null;
  ogTitle: string | null;
  ogUrl: string | null;
  twitterCard: string | null;
  h1: string | null;
  hasMain: boolean;
  hasBreadcrumb: boolean;
  jsonLdTotal: number;
  jsonLdDynamic: number;
  htmlBytes: number;
  textLength: number;
  assetRefs: string[];
  consoleErrors: string[];
  containsLocalhost: boolean;
  error?: string;
}

// Sanitiza qualquer vazamento de localhost/porta do servidor temporário.
function sanitizeHtml(html: string, origin: string): string {
  const escaped = origin.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const re = new RegExp(escaped, 'g');
  let out = html.replace(re, BASE_URL);
  // Também cobre eventuais 127.0.0.1:PORT sem esquema.
  out = out.replace(/https?:\/\/127\.0\.0\.1:\d+/g, BASE_URL);
  out = out.replace(/https?:\/\/localhost:\d+/g, BASE_URL);
  if (!/^<!doctype html>/i.test(out)) out = '<!doctype html>\n' + out;
  return out;
}

async function main() {
  if (!fs.existsSync(path.join(DIST, 'index.html'))) {
    console.error('[static] dist/index.html não encontrado. Rode `npm run build:spa` antes.');
    process.exit(2);
  }

  fs.mkdirSync(REPORTS, { recursive: true });
  fs.mkdirSync(SHELL_BACKUP, { recursive: true });

  const server = createStaticServer();
  const port = await listenOnFreePort(server);
  const origin = `http://127.0.0.1:${port}`;
  console.log(`[static] Servidor estático em ${origin} (fallback SPA ativo)`);

  let browser: Browser | null = null;
  const results: RouteResult[] = [];
  // Captura TODO o HTML em memória antes de gravar, para não contaminar o
  // fallback SPA (evita que um index.html de rota vire fallback de outra).
  const toWrite: { file: string; html: string; isHome: boolean }[] = [];

  try {
    browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
    });

    for (const route of PILOT_ROUTES) {
      const url = origin + route.path;
      const consoleErrors: string[] = [];
      const result: RouteResult = {
        path: route.path,
        type: route.type,
        outputFile: path.relative(ROOT, outputFileFor(route)),
        status: 'falha',
        title: null,
        description: null,
        canonical: null,
        robots: null,
        ogTitle: null,
        ogUrl: null,
        twitterCard: null,
        h1: null,
        hasMain: false,
        hasBreadcrumb: false,
        jsonLdTotal: 0,
        jsonLdDynamic: 0,
        htmlBytes: 0,
        textLength: 0,
        assetRefs: [],
        consoleErrors,
        containsLocalhost: false,
      };

      const page = await browser.newPage();
      // O tsx/esbuild instrumenta funções com chamadas a `__name` (keepNames).
      // Ao serializar as funções para o contexto do navegador (evaluate/
      // waitForFunction), esse helper não existe → definimos um shim global.
      // Arrow anônima sem declarações nomeadas: não é instrumentada.
      await page.evaluateOnNewDocument(() => {
        (globalThis as unknown as { __name?: (f: unknown) => unknown }).__name = (f) => f;
      });
      page.on('console', (msg) => {
        if (msg.type() === 'error') consoleErrors.push(msg.text());
      });
      page.on('pageerror', (err) => consoleErrors.push('pageerror: ' + err.message));

      try {
        await page.goto(url, { waitUntil: 'load', timeout: RENDER_TIMEOUT_MS });

        // Sinal confiável: render-event já disparou (__STATIC_RENDER_READY__),
        // H1/conteúdo presentes e spinner de rota ausente.
        await page.waitForFunction(
          () => {
            const w = window as unknown as { __STATIC_RENDER_READY__?: boolean };
            if (!w.__STATIC_RENDER_READY__) return false;
            const spinner = document.querySelector('[role="status"][aria-label="Carregando"]');
            if (spinner) return false;
            const h1 = document.querySelector('h1');
            const main = document.querySelector('main') || document.querySelector('#root > div');
            return !!(h1 || main);
          },
          { timeout: RENDER_TIMEOUT_MS, polling: 200 },
        );

        // Estabilização curta após o sinal.
        await new Promise((r) => setTimeout(r, STABILIZE_MS));

        // Extrai metadados e conteúdo.
        const data = await page.evaluate(() => {
          const meta = (sel: string) =>
            (document.querySelector(sel) as HTMLMetaElement | null)?.content ?? null;
          const link = (sel: string) =>
            (document.querySelector(sel) as HTMLLinkElement | null)?.href ?? null;
          const jsonLdTotal = document.querySelectorAll('script[type="application/ld+json"]').length;
          const jsonLdDynamic = document.querySelectorAll(
            'script[data-dynamic-schema="true"]',
          ).length;
          const h1El = document.querySelector('h1');
          const assetRefs: string[] = [];
          document.querySelectorAll('script[src]').forEach((s) => {
            const src = (s as HTMLScriptElement).getAttribute('src');
            if (src && src.startsWith('/assets')) assetRefs.push(src);
          });
          document.querySelectorAll('link[rel="stylesheet"][href], link[rel="modulepreload"][href]').forEach((l) => {
            const href = (l as HTMLLinkElement).getAttribute('href');
            if (href && href.startsWith('/assets')) assetRefs.push(href);
          });
          const hasBreadcrumb =
            !!document.querySelector('nav[aria-label*="readcrumb" i]') ||
            !!document.querySelector('[class*="breadcrumb" i]') ||
            !!document.querySelector('ol[itemtype*="BreadcrumbList"]');
          return {
            title: document.title || null,
            description: meta('meta[name="description"]'),
            canonical: link('link[rel="canonical"]'),
            robots: meta('meta[name="robots"]'),
            ogTitle: meta('meta[property="og:title"]'),
            ogUrl: meta('meta[property="og:url"]'),
            twitterCard: meta('meta[name="twitter:card"]'),
            h1: h1El ? (h1El.textContent || '').trim().replace(/\s+/g, ' ') : null,
            hasMain: !!(document.querySelector('main') || document.querySelector('#root > div')),
            hasBreadcrumb,
            jsonLdTotal,
            jsonLdDynamic,
            textLength: (document.body.innerText || '').replace(/\s+/g, ' ').trim().length,
            assetRefs,
          };
        });

        const rawHtml = await page.content();
        const html = sanitizeHtml(rawHtml, origin);

        Object.assign(result, data);
        result.htmlBytes = Buffer.byteLength(html, 'utf8');
        result.containsLocalhost = /localhost|127\.0\.0\.1/.test(html);
        result.status = 'ok';

        toWrite.push({ file: outputFileFor(route), html, isHome: !!route.isHome });
        console.log(
          `[static] OK   ${route.path}  (title="${(data.title ?? '').slice(0, 50)}…", texto=${data.textLength}, jsonld=${data.jsonLdTotal})`,
        );
      } catch (err) {
        result.error = (err as Error).message;
        console.error(`[static] FALHA ${route.path} → ${result.error}`);
      } finally {
        results.push(result);
        await page.close();
      }
    }
  } finally {
    if (browser) await browser.close();
    await new Promise<void>((r) => server.close(() => r()));
  }

  // Preserva o shell original ANTES de sobrescrever dist/index.html.
  const shellCopy = path.join(SHELL_BACKUP, 'index.html');
  if (!fs.existsSync(shellCopy)) {
    fs.copyFileSync(path.join(DIST, 'index.html'), shellCopy);
    console.log(`[static] Shell SPA original preservado em ${path.relative(ROOT, shellCopy)}`);
  }

  // Grava os arquivos capturados.
  for (const { file, html } of toWrite) {
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, html, 'utf8');
    console.log(`[static] Gravado ${path.relative(ROOT, file)} (${Buffer.byteLength(html)} bytes)`);
  }

  // Resumo JSON para o validador/relatório.
  const summary = {
    generatedAt: new Date().toISOString(),
    baseUrl: BASE_URL,
    total: results.length,
    ok: results.filter((r) => r.status === 'ok').length,
    falhas: results.filter((r) => r.status === 'falha').length,
    routes: results,
  };
  fs.writeFileSync(
    path.join(REPORTS, 'static-pilot-generation.json'),
    JSON.stringify(summary, null, 2),
    'utf8',
  );
  console.log(
    `[static] Concluído: ${summary.ok}/${summary.total} rotas geradas. Resumo em reports/static-pilot-generation.json`,
  );

  // Exit code != 0 em falha crítica (qualquer rota piloto que não gerou).
  if (summary.falhas > 0) process.exit(1);
}

main().catch((err) => {
  console.error('[static] Erro crítico:', err);
  process.exit(1);
});
