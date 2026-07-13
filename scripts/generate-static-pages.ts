// scripts/generate-static-pages.ts
// ─────────────────────────────────────────────────────────────────────────────
// GERAÇÃO ESTÁTICA INTERNA (SNAPSHOT HEADLESS) — Etapas E2/E3/E4
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
//   4. injeta `window.__STATIC_RENDER__ = true` ANTES do app rodar → render ansioso;
//   5. aguarda um sinal confiável de render (STATUS.ready + rota correta + H1/conteúdo
//      + ausência do spinner) com timeout de segurança;
//   6. captura erros: pageerror, console.error (classificados), requisições/chunks
//      com falha, rota resolvida incorretamente;
//   7. captura o HTML final e marca <html data-prerendered="true">;
//   8. sanitiza (remove qualquer referência a localhost/porta);
//   9. grava no caminho físico correspondente à rota (após capturar TODAS);
//  10. preserva o shell original em reports/_spa-shell/;
//  11. grava um resumo JSON em reports/static-pilot-generation.json.
//
// Também expõe `generateRoutes()` para reuso pelos testes (determinismo/viewport),
// que capturam em memória SEM gravar em disco.
//
// Execução: `npm run generate:static:pilot`
//   (usa scripts/run-ts.mjs → esbuild bundle + node, portátil neste ambiente).
//   Env opcionais:
//     STATIC_RENDER_TIMEOUT=20000   timeout por rota (ms)
//     STATIC_VIEWPORT=desktop|mobile viewport de captura (default desktop)

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

export type ViewportName = 'desktop' | 'mobile';
const VIEWPORTS: Record<ViewportName, { width: number; height: number; isMobile: boolean }> = {
  desktop: { width: 1307, height: 885, isMobile: false },
  mobile: { width: 390, height: 844, isMobile: true },
};

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
function createStaticServer(shellHtml: Buffer): http.Server {
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
function isNoiseOrTolerable(text: string): boolean {
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

function isCriticalError(text: string): boolean {
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
function sanitizeHtml(html: string, origin: string): string {
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

// ─── Núcleo reutilizável: gera todas as rotas e devolve HTML EM MEMÓRIA ───────
export async function generateRoutes(
  routes: PilotRoute[],
  opts: { viewport?: ViewportName } = {},
): Promise<GeneratedRoute[]> {
  if (!fs.existsSync(path.join(DIST, 'index.html'))) {
    throw new Error('dist/index.html não encontrado. Rode `npm run build:spa` antes.');
  }

  // Usa o shell original preservado (se existir) para não realimentar o fallback
  // com um index.html de rota já gravado numa execução anterior.
  const shellPath = fs.existsSync(path.join(SHELL_BACKUP, 'index.html'))
    ? path.join(SHELL_BACKUP, 'index.html')
    : path.join(DIST, 'index.html');
  const shellHtml = fs.readFileSync(shellPath);
  // Título estático do shell (index.html). Usado para rejeitar renders em que
  // a página ainda não aplicou seu próprio <title> (evita capturar a home).
  const SHELL_TITLE = (shellHtml.toString().match(/<title>([^<]*)<\/title>/i)?.[1] ?? '').trim();

  const viewport = VIEWPORTS[opts.viewport ?? 'desktop'];
  const server = createStaticServer(shellHtml);
  const port = await listenOnFreePort(server);
  const origin = `http://127.0.0.1:${port}`;

  let browser: Browser | null = null;
  const out: GeneratedRoute[] = [];

  try {
    browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
    });

    for (const route of routes) {
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

      // Render ansioso: injeta ANTES de qualquer script do app.
      // Também define o shim `__name` (tsx/esbuild keepNames) usado ao serializar
      // funções para o contexto do navegador.
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
        // Chunks/assets locais com status de erro = crítico.
        if (u.startsWith(origin) && res.status() >= 400) {
          failedRequests.push(`HTTP ${res.status()} ${u}`);
        }
      });

      try {
        await page.goto(url, { waitUntil: 'load', timeout: RENDER_TIMEOUT_MS });

        // Critério de prontidão AGNÓSTICO ao mecanismo de SEO. Nem toda página
        // usa o hook useSEO: FAQPage aplica title/canonical via useEffect e
        // LojaDePneus usa react-helmet. Por isso combinamos:
        //  (a) via preferencial: __STATIC_RENDER_STATUS__.ready da rota correta
        //      (quando a página usa useSEO); OU
        //  (b) heurística de DOM: rota correta (location.pathname), título
        //      aplicado, <link rel=canonical> presente no head, spinner de rota
        //      ausente e conteúdo principal (h1/main) presente.
        // O default title do shell é ignorado para não aceitar render incompleto.
        const expectedPath = route.path.replace(/\/+$/, '') || '/';
        await page.waitForFunction(
          (expected: string, shellTitle: string) => {
            const current = (window.location.pathname.replace(/\/+$/, '') || '/');
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
            const hasTitle = title.length > 0 && title !== shellTitle;
            const canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
            const hasCanonical = !!canonical?.getAttribute('href');
            return hasTitle && hasCanonical;
          },
          { timeout: RENDER_TIMEOUT_MS, polling: 200 },
          expectedPath,
          SHELL_TITLE,
        );

        await new Promise((r) => setTimeout(r, STABILIZE_MS));

        // Marca o documento como pré-renderizado (o cliente lê isto para hidratar
        // de forma ansiosa e casar com o HTML servido).
        await page.evaluate(() => {
          document.documentElement.setAttribute('data-prerendered', 'true');
        });

        // Captura ATÔMICA (E4): normalização de animações, dedup de <head> e a
        // serialização do HTML acontecem TODAS dentro de UM único page.evaluate.
        // Isso é essencial porque o framer-motion reaplica opacity:0/transform via
        // requestAnimationFrame. Se normalizássemos num evaluate e serializássemos
        // noutro (page.content()), o rAF dispararia no intervalo e reintroduziria
        // estilos voláteis → HTML não-determinístico. Como o JS é single-thread,
        // nada roda no meio de um evaluate: normalizamos e serializamos no mesmo
        // "tick", garantindo estabilidade entre execuções.
        const data = await page.evaluate(() => {
          // (1) Normaliza animações. O framer-motion (whileInView e afins) injeta
          // inline `opacity` e `transform` cujos valores dependem do estágio exato
          // da animação no instante da captura — inclusive resíduos no-op como
          // `opacity: 1` e `transform: none`. Para conteúdo indexável estável e
          // determinístico, removemos QUALQUER opacity/transform/will-change inline
          // (qualquer valor). São artefatos de animação: o estado final desejado é
          // "totalmente visível, sem deslocamento", que equivale à ausência dessas
          // props. A hidratação restaura tudo no cliente.
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

          // (2) Dedup de tags de <head> (mantém a última = específica da página).
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

          // (3) Coleta de metadados para o relatório.
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
            // Serializa o documento COMPLETO neste mesmo tick (pós-normalização),
            // evitando a race com o requestAnimationFrame do framer-motion.
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

        // Reprova se: erro crítico de console/exception, requisição local falha,
        // rota resolvida incorreta, ou conteúdo essencial ausente.
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

        out.push({
          result,
          html: result.status === 'ok' ? html : null,
          outputFile: outputFileFor(route),
          isHome: !!route.isHome,
        });

        const tag = result.status === 'ok' ? 'OK  ' : 'FALHA';
        console.log(
          `[static] ${tag} ${route.path}  (title="${(data.title ?? '').slice(0, 45)}…", texto=${data.textLength}, jsonld=${data.jsonLdTotal})` +
            (result.status === 'falha' ? `  → ${result.error}` : ''),
        );
      } catch (err) {
        result.error = (err as Error).message;
        out.push({ result, html: null, outputFile: outputFileFor(route), isHome: !!route.isHome });
        console.error(`[static] FALHA ${route.path} → ${result.error}`);
      } finally {
        await page.close();
      }
    }
  } finally {
    if (browser) await browser.close();
    await new Promise<void>((r) => server.close(() => r()));
  }

  return out;
}

// ─── Execução direta: gera, grava em disco e escreve o resumo JSON ────────────
export async function main() {
  fs.mkdirSync(REPORTS, { recursive: true });
  fs.mkdirSync(SHELL_BACKUP, { recursive: true });

  // Preserva o shell SPA original ANTES de qualquer escrita.
  //
  // Cuidado importante: o backup NÃO pode ficar obsoleto. Se um build novo do
  // Vite gerar novos hashes de asset (ex.: index-XXXX.js), um backup antigo
  // apontaria para um <script> que não existe mais → o app nunca monta e todas
  // as rotas dão timeout. Por outro lado, se o dist/index.html já foi
  // SOBRESCRITO por uma página pré-renderizada (rota "/"), não podemos usá-lo
  // como shell (ele já tem conteúdo). Distinguimos os dois casos pelo conteúdo:
  //   - shell SPA fresco  → <div id="root"></div> vazio, sem data-prerendered
  //   - página gerada     → #root cheio e/ou data-prerendered presente
  const shellCopy = path.join(SHELL_BACKUP, 'index.html');
  const distIndex = fs.readFileSync(path.join(DIST, 'index.html'), 'utf8');
  const distIsFreshShell =
    !/data-prerendered/i.test(distIndex) &&
    /<div id="root">\s*<\/div>/i.test(distIndex);

  if (distIsFreshShell) {
    // Build novo detectado: (re)grava o backup com os hashes atuais.
    fs.copyFileSync(path.join(DIST, 'index.html'), shellCopy);
    console.log(`[static] Shell SPA atual preservado em ${path.relative(ROOT, shellCopy)}`);
  } else if (!fs.existsSync(shellCopy)) {
    // dist/index.html já é uma página gerada e não há backup: erro de fluxo.
    throw new Error(
      'dist/index.html não é um shell SPA (parece já pré-renderizado) e não há ' +
        'backup em reports/_spa-shell. Rode `npm run build:spa` para regenerar o shell.',
    );
  } else {
    // Reutiliza o backup existente, mas valida que seus assets ainda existem.
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

  const viewport = (process.env.STATIC_VIEWPORT as ViewportName) || 'desktop';
  console.log(`[static] Gerando ${PILOT_ROUTES.length} rotas piloto (viewport=${viewport})…`);

  const generated = await generateRoutes(PILOT_ROUTES, { viewport });

  // Grava apenas as rotas OK.
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

  // Relatório de erros de runtime (E4).
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

// NOTA: este módulo NÃO auto-executa main(). Ele é importado por
// scripts/test-static-determinism.ts (que usa apenas generateRoutes) e
// executado como entrypoint por scripts/generate-static-pages.entry.ts.
// Assim evitamos o guard frágil de "invocado diretamente" sob bundling.
