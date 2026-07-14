// scripts/generate-static-pages.ts
// ─────────────────────────────────────────────────────────────────────────────
// GERAÇÃO ESTÁTICA INTERNA (SNAPSHOT HEADLESS) — Etapas E2/E3/E4 (+ núcleo E6)
// ─────────────────────────────────────────────────────────────────────────────
// Substitui FUTURAMENTE o Prerender.io. Nesta etapa COEXISTE com ele:
//   • não remove o token/meta Prerender.io do index.html;
//   • não altera vercel.json;
//   • no modo piloto aplica-se apenas às rotas piloto (static-pilot-routes.ts).
//
// Este módulo expõe as PRIMITIVAS reutilizáveis (fonte única de render) usadas
// tanto pelo piloto (main) quanto pelo gerador completo E6
// (generate-static-all.ts): `renderRouteOnPage`, servidor estático, resolução
// de shell e sanitização. Assim a MESMA rota é sempre renderizada da mesma
// forma, sem lógica divergente entre scripts.
//
// Fluxo por rota:
//   1. usa o build já existente em /dist (rode `vite build` antes);
//   2. sobe um servidor estático local com fallback SPA (shell original);
//   3. abre a rota em Chrome headless (puppeteer);
//   4. injeta `window.__STATIC_RENDER__ = true` ANTES do app → render ansioso;
//   5. aguarda sinal confiável de render (STATUS.ready + rota + H1/conteúdo
//      + ausência de spinner) com timeout de segurança;
//   6. captura erros (pageerror, console.error classificado, requests/chunks
//      com falha, rota resolvida incorretamente);
//   7. captura o HTML final e marca <html data-prerendered="true">;
//   8. sanitiza (remove localhost/porta do servidor temporário);
//   9. devolve o HTML EM MEMÓRIA (quem chama decide gravar).
//
// Env opcionais:
//   STATIC_RENDER_TIMEOUT=20000    timeout por rota (ms)
//   STATIC_VIEWPORT=desktop|mobile viewport de captura (default desktop)

import fs from 'fs';
import path from 'path';
import http from 'http';
import { fileURLToPath } from 'url';
import type { Browser } from 'puppeteer-core';
import { launchBrowser } from './launch-browser';
import { PILOT_ROUTES, BASE_URL, type PilotRoute } from './static-pilot-routes';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
export const ROOT = path.resolve(__dirname, '..');
export const DIST = path.join(ROOT, 'dist');
export const REPORTS = path.join(ROOT, 'reports');
export const SHELL_BACKUP = path.join(REPORTS, '_spa-shell');
export { BASE_URL };

const RENDER_TIMEOUT_MS = Number(process.env.STATIC_RENDER_TIMEOUT ?? 20000);
const STABILIZE_MS = 400;

export type ViewportName = 'desktop' | 'mobile';
export const VIEWPORTS: Record<ViewportName, { width: number; height: number; isMobile: boolean }> = {
  desktop: { width: 1307, height: 885, isMobile: false },
  mobile: { width: 390, height: 844, isMobile: true },
};

// Interface mínima de rota renderizável (compatível com PilotRoute e StaticRoute).
export interface RenderableRoute {
  path: string;
  type: string;
  isHome?: boolean;
}

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
// IMPORTANTE: durante a geração usamos SEMPRE o shell original (nunca um
// index.html de rota já gravado), para não contaminar o fallback de outra rota.
export function createStaticServer(shellHtml: Buffer): http.Server {
  return http.createServer((req, res) => {
    try {
      const urlPath = decodeURIComponent((req.url ?? '/').split('?')[0]);
      const filePath = path.join(DIST, urlPath);

      // Impede path traversal para fora de /dist.
      if (!filePath.startsWith(DIST)) {
        res.statusCode = 403;
        res.end('Forbidden');
        return;
      }

      // Só serve ARQUIVOS DE ASSET reais (js/css/img/fonts...). NUNCA serve um
      // index.html de rota gravado: rotas de aplicação sempre recebem o shell.
      const ext = path.extname(filePath).toLowerCase();
      const isRealAsset =
        ext && ext !== '.html' && fs.existsSync(filePath) && fs.statSync(filePath).isFile();

      if (isRealAsset) {
        res.setHeader('Content-Type', MIME[ext] ?? 'application/octet-stream');
        res.end(fs.readFileSync(filePath));
        return;
      }

      // Fallback SPA: qualquer rota "de aplicação" recebe o shell original.
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      res.end(shellHtml);
    } catch (err) {
      res.statusCode = 500;
      res.end('Server error: ' + (err as Error).message);
    }
  });
}

export function listenOnFreePort(server: http.Server): Promise<number> {
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
export function outputFileFor(route: RenderableRoute): string {
  if (route.isHome) return path.join(DIST, 'index.html');
  const clean = route.path.replace(/^\/+|\/+$/g, '');
  return path.join(DIST, clean, 'index.html');
}

export interface RouteResult {
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
  consoleErrorsCritical: string[];
  consoleErrorsTolerable: string[];
  failedRequests: string[];
  resolvedRoute: string | null;
  routeMatched: boolean;
  containsLocalhost: boolean;
  error?: string;
}

// Classifica um erro de console/rede quanto à severidade para a geração.
// - crítico: reprova a rota (React/chunk/import/exception real).
// - tolerável: não reprova (analytics/terceiros/avisos de dev).
export function isNoiseOrTolerable(text: string): boolean {
  const t = text.toLowerCase();
  return (
    t.includes('googletagmanager') ||
    t.includes('google-analytics') ||
    t.includes('gtag') ||
    t.includes('gtm') ||
    t.includes('facebook') ||
    t.includes('fbevents') ||
    t.includes('youtube') ||
    t.includes('ytimg') ||
    t.includes('doubleclick') ||
    t.includes('favicon') ||
    t.includes('preload') ||
    t.includes('was preloaded using link preload') ||
    t.includes('downloadable font') ||
    t.includes('third-party cookie')
  );
}

export function isCriticalError(text: string): boolean {
  if (isNoiseOrTolerable(text)) return false;
  const t = text.toLowerCase();
  return (
    t.includes('failed to fetch dynamically imported module') ||
    t.includes('error loading dynamically imported module') ||
    t.includes('chunkloaderror') ||
    t.includes('unexpected token') ||
    t.includes('is not defined') ||
    t.includes('is not a function') ||
    t.includes('cannot read') ||
    t.includes('cannot access') ||
    t.includes('minified react error') ||
    t.includes('hydration') ||
    t.includes('uncaught') ||
    t.includes('pageerror:') ||
    t.includes('syntaxerror') ||
    t.includes('typeerror') ||
    t.includes('referenceerror')
  );
}

// Sanitiza qualquer vazamento de localhost/porta do servidor temporário.
export function sanitizeHtml(html: string, origin: string): string {
  const escaped = origin.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const re = new RegExp(escaped, 'g');
  let out = html.replace(re, BASE_URL);
  out = out.replace(/https?:\/\/127\.0\.0\.1:\d+/g, BASE_URL);
  out = out.replace(/https?:\/\/localhost:\d+/g, BASE_URL);
  if (!/^<!doctype html>/i.test(out)) out = '<!doctype html>\n' + out;
  return out;
}

export interface GeneratedRoute {
  result: RouteResult;
  html: string | null;
  outputFile: string;
  isHome: boolean;
}

// ─── Resolução de shell (backup preservado) ───────────────────────────────────
/** Lê o shell SPA a usar como fallback (backup preservado se existir). */
export function resolveShellHtml(): Buffer {
  if (!fs.existsSync(path.join(DIST, 'index.html'))) {
    throw new Error('dist/index.html não encontrado. Rode `npm run build:spa` antes.');
  }
  const shellPath = fs.existsSync(path.join(SHELL_BACKUP, 'index.html'))
    ? path.join(SHELL_BACKUP, 'index.html')
    : path.join(DIST, 'index.html');
  return fs.readFileSync(shellPath);
}

/** Título estático do shell — usado para rejeitar renders incompletos (home). */
export function getShellTitle(shellHtml: Buffer): string {
  return (shellHtml.toString().match(/<title>([^<]*)<\/title>/i)?.[1] ?? '').trim();
}

/**
 * Preserva o shell SPA original ANTES de qualquer escrita, com verificação de
 * obsolescência de assets (novos hashes do Vite). Idempotente e seguro para
 * reexecuções. Reutilizado pelo piloto e pelo gerador completo (E6).
 */
export function preserveShellBackup(): void {
  fs.mkdirSync(REPORTS, { recursive: true });
  fs.mkdirSync(SHELL_BACKUP, { recursive: true });

  const shellCopy = path.join(SHELL_BACKUP, 'index.html');
  const distIndex = fs.readFileSync(path.join(DIST, 'index.html'), 'utf8');
  const distIsFreshShell =
    !/data-prerendered/i.test(distIndex) && /<div id="root">\s*<\/div>/i.test(distIndex);

  if (distIsFreshShell) {
    fs.copyFileSync(path.join(DIST, 'index.html'), shellCopy);
    console.log(`[static] Shell SPA atual preservado em ${path.relative(ROOT, shellCopy)}`);
  } else if (!fs.existsSync(shellCopy)) {
    throw new Error(
      'dist/index.html não é um shell SPA (parece já pré-renderizado) e não há ' +
        'backup em reports/_spa-shell. Rode `npm run build:spa` para regenerar o shell.',
    );
  } else {
    const backupHtml = fs.readFileSync(shellCopy, 'utf8');
    const mainJs = backupHtml.match(/src="(\/assets\/[^"]+\.js)"/)?.[1];
    if (mainJs && !fs.existsSync(path.join(DIST, mainJs.replace(/^\//, '')))) {
      throw new Error(
        `Backup do shell (${path.relative(ROOT, shellCopy)}) está obsoleto: o asset ` +
          `${mainJs} não existe mais em dist/. Rode \`npm run build:spa\` e gere novamente.`,
      );
    }
    console.log(`[static] Reutilizando shell preservado em ${path.relative(ROOT, shellCopy)}`);
  }
}

// ─── NÚCLEO REUTILIZÁVEL: renderiza UMA rota numa página nova e devolve HTML ───
// Fonte única de render. Cria sua própria `page` (isolamento por rota), o que
// permite execução concorrente (várias páginas no mesmo browser). Não grava em
// disco: devolve o HTML em memória.
export async function renderRouteOnPage(
  browser: Browser,
  route: RenderableRoute,
  origin: string,
  shellTitle: string,
  viewport: { width: number; height: number; isMobile: boolean },
): Promise<GeneratedRoute> {
  const url = origin + route.path;
  const consoleErrorsCritical: string[] = [];
  const consoleErrorsTolerable: string[] = [];
  const failedRequests: string[] = [];

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
    consoleErrorsCritical,
    consoleErrorsTolerable,
    failedRequests,
    resolvedRoute: null,
    routeMatched: false,
    containsLocalhost: false,
  };

  const page = await browser.newPage();
  await page.setViewport({
    width: viewport.width,
    height: viewport.height,
    isMobile: viewport.isMobile,
    deviceScaleFactor: 1,
    hasTouch: viewport.isMobile,
  });

  // Render ansioso: injeta ANTES de qualquer script do app. Também define o shim
  // `__name` (tsx/esbuild keepNames) usado ao serializar funções p/ o navegador.
  await page.evaluateOnNewDocument(() => {
    (globalThis as unknown as { __name?: (f: unknown) => unknown }).__name = (f) => f;
    (window as unknown as { __STATIC_RENDER__?: boolean }).__STATIC_RENDER__ = true;
  });

  const classify = (text: string) => {
    if (isCriticalError(text)) consoleErrorsCritical.push(text);
    else consoleErrorsTolerable.push(text);
  };
  page.on('console', (msg) => {
    if (msg.type() === 'error') classify(msg.text());
  });
  page.on('pageerror', (err: unknown) =>
    classify('pageerror: ' + (err instanceof Error ? err.message : String(err))),
  );
  page.on('requestfailed', (req) => {
    const u = req.url();
    if (u.startsWith(origin)) failedRequests.push(`${req.failure()?.errorText ?? 'failed'} ${u}`);
  });
  page.on('response', (res) => {
    const u = res.url();
    if (u.startsWith(origin) && res.status() >= 400) {
      failedRequests.push(`HTTP ${res.status()} ${u}`);
    }
  });

  const expectedPath = route.path.replace(/\/+$/, '') || '/';

  try {
    await page.goto(url, { waitUntil: 'load', timeout: RENDER_TIMEOUT_MS });

    // Critério de prontidão AGNÓSTICO ao mecanismo de SEO (useSEO OU heurística
    // de DOM: rota correta + título aplicado + canonical + spinner ausente +
    // conteúdo principal presente). O title do shell é ignorado.
    await page.waitForFunction(
      (expected: string, shellTitleInner: string) => {
        const current = window.location.pathname.replace(/\/+$/, '') || '/';
        if (current !== expected) return false;
        const spinner = document.querySelector('[role="status"][aria-label="Carregando"]');
        if (spinner) return false;
        const h1 = document.querySelector('h1');
        const main = document.querySelector('main') || document.querySelector('#root > div');
        if (!(h1 || main)) return false;

        const w = window as unknown as {
          __STATIC_RENDER_STATUS__?: { ready: boolean; route: string };
        };
        const st = w.__STATIC_RENDER_STATUS__;
        if (st && st.ready && (st.route.replace(/\/+$/, '') || '/') === expected) {
          return true; // via (a): useSEO confirmou metadados da rota
        }
        // via (b): heurística de DOM independente do useSEO
        const title = (document.title || '').trim();
        const hasTitle = title.length > 0 && title !== shellTitleInner;
        const canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
        const hasCanonical = !!canonical?.getAttribute('href');
        return hasTitle && hasCanonical;
      },
      { timeout: RENDER_TIMEOUT_MS, polling: 200 },
      expectedPath,
      shellTitle,
    );

    await new Promise((r) => setTimeout(r, STABILIZE_MS));

    await page.evaluate(() => {
      document.documentElement.setAttribute('data-prerendered', 'true');
    });

    // Captura ATÔMICA (E4): normalização de animações, dedup de <head> e
    // serialização acontecem TODAS dentro de UM único page.evaluate (single-tick),
    // evitando a race com o requestAnimationFrame do framer-motion.
    const data = await page.evaluate(() => {
      document.querySelectorAll<HTMLElement>('[style]').forEach((el) => {
        const s = el.style;
        let touched = false;
        if (s.opacity !== '') {
          s.removeProperty('opacity');
          touched = true;
        }
        if (s.transform !== '') {
          s.removeProperty('transform');
          touched = true;
        }
        if (s.willChange !== '') {
          s.removeProperty('will-change');
          touched = true;
        }
        if (touched && s.length === 0) el.removeAttribute('style');
      });

      const dedupeKeepLast = (selector: string) => {
        const nodes = Array.from(document.head.querySelectorAll(selector));
        for (let i = 0; i < nodes.length - 1; i++) nodes[i].remove();
      };
      [
        'link[rel="canonical"]',
        'meta[name="description"]',
        'meta[name="robots"]',
        'meta[property="og:title"]',
        'meta[property="og:url"]',
        'meta[property="og:description"]',
        'meta[name="twitter:card"]',
        'meta[name="twitter:title"]',
        'meta[name="twitter:description"]',
      ].forEach(dedupeKeepLast);

      const meta = (sel: string) =>
        (document.querySelector(sel) as HTMLMetaElement | null)?.content ?? null;
      const link = (sel: string) =>
        (document.querySelector(sel) as HTMLLinkElement | null)?.href ?? null;
      const jsonLdTotal = document.querySelectorAll('script[type="application/ld+json"]').length;
      const jsonLdDynamic = document.querySelectorAll('script[data-dynamic-schema="true"]').length;
      const h1El = document.querySelector('h1');
      const assetRefs: string[] = [];
      document.querySelectorAll('script[src]').forEach((s) => {
        const src = (s as HTMLScriptElement).getAttribute('src');
        if (src && src.startsWith('/assets')) assetRefs.push(src);
      });
      document
        .querySelectorAll('link[rel="stylesheet"][href], link[rel="modulepreload"][href]')
        .forEach((l) => {
          const href = (l as HTMLLinkElement).getAttribute('href');
          if (href && href.startsWith('/assets')) assetRefs.push(href);
        });
      const hasBreadcrumb =
        !!document.querySelector('nav[aria-label*="readcrumb" i]') ||
        !!document.querySelector('[class*="breadcrumb" i]') ||
        !!document.querySelector('ol[itemtype*="BreadcrumbList"]');
      const st = (window as unknown as { __STATIC_RENDER_STATUS__?: { route: string } })
        .__STATIC_RENDER_STATUS__;
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
        resolvedRoute: st?.route ?? window.location.pathname,
        serializedHtml: '<!doctype html>\n' + document.documentElement.outerHTML,
      };
    });

    const { serializedHtml, ...meta } = data;
    const html = sanitizeHtml(serializedHtml, origin);

    Object.assign(result, meta);
    result.htmlBytes = Buffer.byteLength(html, 'utf8');
    result.containsLocalhost = /localhost|127\.0\.0\.1/.test(html);
    result.routeMatched =
      (data.resolvedRoute ?? '').replace(/\/+$/, '') === expectedPath.replace(/\/+$/, '');

    const hardFail =
      consoleErrorsCritical.length > 0 ||
      failedRequests.length > 0 ||
      !result.routeMatched ||
      !data.title ||
      !data.h1;

    result.status = hardFail ? 'falha' : 'ok';
    if (hardFail) {
      result.error =
        (consoleErrorsCritical[0] ||
          failedRequests[0] ||
          (!result.routeMatched ? `rota resolvida "${data.resolvedRoute}" ≠ "${route.path}"` : '') ||
          (!data.title ? 'sem <title>' : '') ||
          (!data.h1 ? 'sem <h1>' : '')) ?? 'falha';
    }

    return {
      result,
      html: result.status === 'ok' ? html : null,
      outputFile: outputFileFor(route),
      isHome: !!route.isHome,
    };
  } catch (err) {
    result.error = (err as Error).message;
    return { result, html: null, outputFile: outputFileFor(route), isHome: !!route.isHome };
  } finally {
    await page.close();
  }
}

// ─── Núcleo reutilizável (piloto): gera todas as rotas SEQUENCIALMENTE ─────────
export async function generateRoutes(
  routes: PilotRoute[],
  opts: { viewport?: ViewportName } = {},
): Promise<GeneratedRoute[]> {
  const shellHtml = resolveShellHtml();
  const shellTitle = getShellTitle(shellHtml);

  const viewport = VIEWPORTS[opts.viewport ?? 'desktop'];
  const server = createStaticServer(shellHtml);
  const port = await listenOnFreePort(server);
  const origin = `http://127.0.0.1:${port}`;

  let browser: Browser | null = null;
  const out: GeneratedRoute[] = [];

  try {
    browser = await launchBrowser();

    for (const route of routes) {
      const g = await renderRouteOnPage(browser, route, origin, shellTitle, viewport);
      out.push(g);
      const r = g.result;
      const tag = r.status === 'ok' ? 'OK  ' : 'FALHA';
      console.log(
        `[static] ${tag} ${route.path}  (title="${(r.title ?? '').slice(0, 45)}…", texto=${r.textLength}, jsonld=${r.jsonLdTotal})` +
          (r.status === 'falha' ? `  → ${r.error}` : ''),
      );
    }
  } finally {
    if (browser) await browser.close();
    await new Promise<void>((r) => server.close(() => r()));
  }

  return out;
}

// ─── Execução direta (piloto): gera, grava em disco e escreve o resumo JSON ────
export async function main() {
  preserveShellBackup();

  const viewport = (process.env.STATIC_VIEWPORT as ViewportName) || 'desktop';
  console.log(`[static] Gerando ${PILOT_ROUTES.length} rotas piloto (viewport=${viewport})…`);

  const generated = await generateRoutes(PILOT_ROUTES, { viewport });

  for (const g of generated) {
    if (g.html) {
      fs.mkdirSync(path.dirname(g.outputFile), { recursive: true });
      fs.writeFileSync(g.outputFile, g.html, 'utf8');
      console.log(`[static] Gravado ${path.relative(ROOT, g.outputFile)} (${Buffer.byteLength(g.html)} bytes)`);
    }
  }

  const results = generated.map((g) => g.result);
  const summary = {
    generatedAt: new Date().toISOString(),
    baseUrl: BASE_URL,
    viewport,
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

  writeRuntimeErrorsReport(results);

  console.log(
    `[static] Concluído: ${summary.ok}/${summary.total} rotas geradas. Resumo em reports/static-pilot-generation.json`,
  );

  if (summary.falhas > 0) process.exit(1);
}

function writeRuntimeErrorsReport(results: RouteResult[]) {
  const lines: string[] = [];
  lines.push('# Relatório de erros de runtime — geração estática (E4)');
  lines.push('');
  lines.push(`Gerado em: ${new Date().toISOString()}`);
  lines.push('');
  const totalCrit = results.reduce((n, r) => n + r.consoleErrorsCritical.length, 0);
  const totalTol = results.reduce((n, r) => n + r.consoleErrorsTolerable.length, 0);
  const totalReq = results.reduce((n, r) => n + r.failedRequests.length, 0);
  lines.push(`- Erros críticos: **${totalCrit}**`);
  lines.push(`- Erros toleráveis/ruído: ${totalTol}`);
  lines.push(`- Requisições locais com falha: **${totalReq}**`);
  lines.push('');
  for (const r of results) {
    lines.push(`## ${r.path} — ${r.status.toUpperCase()}`);
    lines.push(`- rota resolvida: \`${r.resolvedRoute}\` (match: ${r.routeMatched ? 'sim' : 'NÃO'})`);
    if (r.error) lines.push(`- motivo da falha: ${r.error}`);
    lines.push(`- críticos: ${r.consoleErrorsCritical.length ? r.consoleErrorsCritical.join('; ') : 'nenhum'}`);
    lines.push(`- toleráveis: ${r.consoleErrorsTolerable.length ? r.consoleErrorsTolerable.slice(0, 5).join('; ') : 'nenhum'}`);
    lines.push(`- requisições falhas: ${r.failedRequests.length ? r.failedRequests.join('; ') : 'nenhuma'}`);
    lines.push('');
  }
  fs.writeFileSync(path.join(REPORTS, 'static-runtime-errors.md'), lines.join('\n'), 'utf8');
}

// NOTA: este módulo NÃO auto-executa main(). É importado por
// scripts/test-static-determinism.ts (usa generateRoutes), por
// scripts/generate-static-all.ts (usa renderRouteOnPage) e executado como
// entrypoint por scripts/generate-static-pages.entry.ts.
