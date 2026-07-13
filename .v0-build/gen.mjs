// scripts/generate-static-pages.ts
import fs from "fs";
import path from "path";
import http from "http";
import { fileURLToPath } from "url";
import puppeteer from "puppeteer";

// scripts/static-pilot-routes.ts
var PILOT_ROUTES = [
  {
    path: "/",
    type: "Home",
    expectJsonLd: false,
    // schema global vive no shell (index.html), não como data-dynamic-schema
    isHome: true
  },
  {
    path: "/pneu/pneu-pirelli-175-70r13-p400-evo-82t",
    type: "Produto (pneu)",
    expectJsonLd: true
  },
  {
    path: "/servico/venda-de-pneus",
    type: "Servi\xE7o",
    expectJsonLd: true
  },
  {
    path: "/pneu-medida/175-65r14",
    type: "Medida",
    expectJsonLd: true
  },
  {
    path: "/pneu-para-hb20-curitiba",
    type: "Ve\xEDculo (landing)",
    expectJsonLd: true
  },
  {
    path: "/bairro/portao",
    type: "Local / Bairro",
    expectJsonLd: true
  },
  {
    path: "/quem-somos",
    type: "Institucional",
    expectJsonLd: false
  },
  // ─── Rotas de risco (E4) ────────────────────────────────────────────────
  // Exercitam os componentes com maior chance de conteúdo incompleto/instável
  // no snapshot: contador animado, scroll infinito e uso de navigator.
  {
    path: "/servicos",
    type: "Servi\xE7os (contador animado)",
    expectJsonLd: false,
    risk: 'AnimatedCounter (IntersectionObserver) \u2014 deve mostrar valor final, n\xE3o "0"'
  },
  {
    path: "/faq",
    type: "FAQ (scroll infinito)",
    expectJsonLd: false,
    risk: "FAQInfiniteScroll \u2014 conte\xFAdo essencial n\xE3o pode depender de scroll"
  },
  {
    path: "/loja-de-pneus-curitiba-perto-de-mim",
    type: "Local (navigator/geolocation)",
    expectJsonLd: false,
    risk: "navigator.geolocation em handler \u2014 n\xE3o pode bloquear/alterar o render"
  },
  {
    path: "/rota-inexistente-teste-404",
    type: "404 (teste de erro)",
    expectJsonLd: false,
    noindex: true,
    isNotFound: true
  }
];
var BASE_URL = "https://www.carpluspneuseoficina.com.br";

// scripts/generate-static-pages.ts
var __dirname = path.dirname(fileURLToPath(import.meta.url));
var ROOT = path.resolve(__dirname, "..");
var DIST = path.join(ROOT, "dist");
var REPORTS = path.join(ROOT, "reports");
var SHELL_BACKUP = path.join(REPORTS, "_spa-shell");
var RENDER_TIMEOUT_MS = Number(process.env.STATIC_RENDER_TIMEOUT ?? 2e4);
var STABILIZE_MS = 400;
var VIEWPORTS = {
  desktop: { width: 1307, height: 885, isMobile: false },
  mobile: { width: 390, height: 844, isMobile: true }
};
var MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".webmanifest": "application/manifest+json; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".gif": "image/gif",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf"
};
function createStaticServer(shellHtml) {
  return http.createServer((req, res) => {
    try {
      const urlPath = decodeURIComponent((req.url ?? "/").split("?")[0]);
      const filePath = path.join(DIST, urlPath);
      if (!filePath.startsWith(DIST)) {
        res.statusCode = 403;
        res.end("Forbidden");
        return;
      }
      const ext = path.extname(filePath).toLowerCase();
      const isRealAsset = ext && ext !== ".html" && fs.existsSync(filePath) && fs.statSync(filePath).isFile();
      if (isRealAsset) {
        res.setHeader("Content-Type", MIME[ext] ?? "application/octet-stream");
        res.end(fs.readFileSync(filePath));
        return;
      }
      res.setHeader("Content-Type", "text/html; charset=utf-8");
      res.end(shellHtml);
    } catch (err) {
      res.statusCode = 500;
      res.end("Server error: " + err.message);
    }
  });
}
function listenOnFreePort(server) {
  return new Promise((resolve, reject) => {
    server.once("error", reject);
    server.listen(0, "127.0.0.1", () => {
      const addr = server.address();
      if (addr && typeof addr === "object") resolve(addr.port);
      else reject(new Error("Falha ao obter porta livre"));
    });
  });
}
function outputFileFor(route) {
  if (route.isHome) return path.join(DIST, "index.html");
  const clean = route.path.replace(/^\/+|\/+$/g, "");
  return path.join(DIST, clean, "index.html");
}
function isNoiseOrTolerable(text) {
  const t = text.toLowerCase();
  return t.includes("googletagmanager") || t.includes("google-analytics") || t.includes("gtag") || t.includes("gtm") || t.includes("facebook") || t.includes("fbevents") || t.includes("youtube") || t.includes("ytimg") || t.includes("doubleclick") || t.includes("favicon") || t.includes("preload") || t.includes("was preloaded using link preload") || t.includes("downloadable font") || t.includes("third-party cookie");
}
function isCriticalError(text) {
  if (isNoiseOrTolerable(text)) return false;
  const t = text.toLowerCase();
  return t.includes("failed to fetch dynamically imported module") || t.includes("error loading dynamically imported module") || t.includes("chunkloaderror") || t.includes("unexpected token") || t.includes("is not defined") || t.includes("is not a function") || t.includes("cannot read") || t.includes("cannot access") || t.includes("minified react error") || t.includes("hydration") || t.includes("uncaught") || t.includes("pageerror:") || t.includes("syntaxerror") || t.includes("typeerror") || t.includes("referenceerror");
}
function sanitizeHtml(html, origin) {
  const escaped = origin.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp(escaped, "g");
  let out = html.replace(re, BASE_URL);
  out = out.replace(/https?:\/\/127\.0\.0\.1:\d+/g, BASE_URL);
  out = out.replace(/https?:\/\/localhost:\d+/g, BASE_URL);
  if (!/^<!doctype html>/i.test(out)) out = "<!doctype html>\n" + out;
  return out;
}
async function generateRoutes(routes, opts = {}) {
  if (!fs.existsSync(path.join(DIST, "index.html"))) {
    throw new Error("dist/index.html n\xE3o encontrado. Rode `npm run build:spa` antes.");
  }
  const shellPath = fs.existsSync(path.join(SHELL_BACKUP, "index.html")) ? path.join(SHELL_BACKUP, "index.html") : path.join(DIST, "index.html");
  const shellHtml = fs.readFileSync(shellPath);
  const SHELL_TITLE = (shellHtml.toString().match(/<title>([^<]*)<\/title>/i)?.[1] ?? "").trim();
  const viewport = VIEWPORTS[opts.viewport ?? "desktop"];
  const server = createStaticServer(shellHtml);
  const port = await listenOnFreePort(server);
  const origin = `http://127.0.0.1:${port}`;
  let browser = null;
  const out = [];
  try {
    browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"]
    });
    for (const route of routes) {
      const url = origin + route.path;
      const consoleErrorsCritical = [];
      const consoleErrorsTolerable = [];
      const failedRequests = [];
      const result = {
        path: route.path,
        type: route.type,
        outputFile: path.relative(ROOT, outputFileFor(route)),
        status: "falha",
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
        containsLocalhost: false
      };
      const page = await browser.newPage();
      await page.setViewport({
        width: viewport.width,
        height: viewport.height,
        isMobile: viewport.isMobile,
        deviceScaleFactor: 1,
        hasTouch: viewport.isMobile
      });
      await page.evaluateOnNewDocument(() => {
        globalThis.__name = (f) => f;
        window.__STATIC_RENDER__ = true;
      });
      const classify = (text) => {
        if (isCriticalError(text)) consoleErrorsCritical.push(text);
        else consoleErrorsTolerable.push(text);
      };
      page.on("console", (msg) => {
        if (msg.type() === "error") classify(msg.text());
      });
      page.on(
        "pageerror",
        (err) => classify("pageerror: " + (err instanceof Error ? err.message : String(err)))
      );
      page.on("requestfailed", (req) => {
        const u = req.url();
        if (u.startsWith(origin)) failedRequests.push(`${req.failure()?.errorText ?? "failed"} ${u}`);
      });
      page.on("response", (res) => {
        const u = res.url();
        if (u.startsWith(origin) && res.status() >= 400) {
          failedRequests.push(`HTTP ${res.status()} ${u}`);
        }
      });
      try {
        await page.goto(url, { waitUntil: "load", timeout: RENDER_TIMEOUT_MS });
        const expectedPath = route.path.replace(/\/+$/, "") || "/";
        await page.waitForFunction(
          (expected, shellTitle) => {
            const current = window.location.pathname.replace(/\/+$/, "") || "/";
            if (current !== expected) return false;
            const spinner = document.querySelector('[role="status"][aria-label="Carregando"]');
            if (spinner) return false;
            const h1 = document.querySelector("h1");
            const main2 = document.querySelector("main") || document.querySelector("#root > div");
            if (!(h1 || main2)) return false;
            const w = window;
            const st = w.__STATIC_RENDER_STATUS__;
            if (st && st.ready && (st.route.replace(/\/+$/, "") || "/") === expected) {
              return true;
            }
            const title = (document.title || "").trim();
            const hasTitle = title.length > 0 && title !== shellTitle;
            const canonical = document.querySelector('link[rel="canonical"]');
            const hasCanonical = !!canonical?.getAttribute("href");
            return hasTitle && hasCanonical;
          },
          { timeout: RENDER_TIMEOUT_MS, polling: 200 },
          expectedPath,
          SHELL_TITLE
        );
        await new Promise((r) => setTimeout(r, STABILIZE_MS));
        await page.evaluate(() => {
          document.documentElement.setAttribute("data-prerendered", "true");
        });
        const data = await page.evaluate(() => {
          const meta = (sel) => document.querySelector(sel)?.content ?? null;
          const link = (sel) => document.querySelector(sel)?.href ?? null;
          const jsonLdTotal = document.querySelectorAll('script[type="application/ld+json"]').length;
          const jsonLdDynamic = document.querySelectorAll('script[data-dynamic-schema="true"]').length;
          const h1El = document.querySelector("h1");
          const assetRefs = [];
          document.querySelectorAll("script[src]").forEach((s) => {
            const src = s.getAttribute("src");
            if (src && src.startsWith("/assets")) assetRefs.push(src);
          });
          document.querySelectorAll('link[rel="stylesheet"][href], link[rel="modulepreload"][href]').forEach((l) => {
            const href = l.getAttribute("href");
            if (href && href.startsWith("/assets")) assetRefs.push(href);
          });
          const hasBreadcrumb = !!document.querySelector('nav[aria-label*="readcrumb" i]') || !!document.querySelector('[class*="breadcrumb" i]') || !!document.querySelector('ol[itemtype*="BreadcrumbList"]');
          const st = window.__STATIC_RENDER_STATUS__;
          return {
            title: document.title || null,
            description: meta('meta[name="description"]'),
            canonical: link('link[rel="canonical"]'),
            robots: meta('meta[name="robots"]'),
            ogTitle: meta('meta[property="og:title"]'),
            ogUrl: meta('meta[property="og:url"]'),
            twitterCard: meta('meta[name="twitter:card"]'),
            h1: h1El ? (h1El.textContent || "").trim().replace(/\s+/g, " ") : null,
            hasMain: !!(document.querySelector("main") || document.querySelector("#root > div")),
            hasBreadcrumb,
            jsonLdTotal,
            jsonLdDynamic,
            textLength: (document.body.innerText || "").replace(/\s+/g, " ").trim().length,
            assetRefs,
            resolvedRoute: st?.route ?? window.location.pathname
          };
        });
        const rawHtml = await page.content();
        const html = sanitizeHtml(rawHtml, origin);
        Object.assign(result, data);
        result.htmlBytes = Buffer.byteLength(html, "utf8");
        result.containsLocalhost = /localhost|127\.0\.0\.1/.test(html);
        result.routeMatched = (data.resolvedRoute ?? "").replace(/\/+$/, "") === expectedPath.replace(/\/+$/, "");
        const hardFail = consoleErrorsCritical.length > 0 || failedRequests.length > 0 || !result.routeMatched || !data.title || !data.h1;
        result.status = hardFail ? "falha" : "ok";
        if (hardFail) {
          result.error = (consoleErrorsCritical[0] || failedRequests[0] || (!result.routeMatched ? `rota resolvida "${data.resolvedRoute}" \u2260 "${route.path}"` : "") || (!data.title ? "sem <title>" : "") || (!data.h1 ? "sem <h1>" : "")) ?? "falha";
        }
        out.push({
          result,
          html: result.status === "ok" ? html : null,
          outputFile: outputFileFor(route),
          isHome: !!route.isHome
        });
        const tag = result.status === "ok" ? "OK  " : "FALHA";
        console.log(
          `[static] ${tag} ${route.path}  (title="${(data.title ?? "").slice(0, 45)}\u2026", texto=${data.textLength}, jsonld=${data.jsonLdTotal})` + (result.status === "falha" ? `  \u2192 ${result.error}` : "")
        );
      } catch (err) {
        result.error = err.message;
        out.push({ result, html: null, outputFile: outputFileFor(route), isHome: !!route.isHome });
        console.error(`[static] FALHA ${route.path} \u2192 ${result.error}`);
      } finally {
        await page.close();
      }
    }
  } finally {
    if (browser) await browser.close();
    await new Promise((r) => server.close(() => r()));
  }
  return out;
}
async function main() {
  fs.mkdirSync(REPORTS, { recursive: true });
  fs.mkdirSync(SHELL_BACKUP, { recursive: true });
  const shellCopy = path.join(SHELL_BACKUP, "index.html");
  if (!fs.existsSync(shellCopy)) {
    fs.copyFileSync(path.join(DIST, "index.html"), shellCopy);
    console.log(`[static] Shell SPA original preservado em ${path.relative(ROOT, shellCopy)}`);
  }
  const viewport = process.env.STATIC_VIEWPORT || "desktop";
  console.log(`[static] Gerando ${PILOT_ROUTES.length} rotas piloto (viewport=${viewport})\u2026`);
  const generated = await generateRoutes(PILOT_ROUTES, { viewport });
  for (const g of generated) {
    if (g.html) {
      fs.mkdirSync(path.dirname(g.outputFile), { recursive: true });
      fs.writeFileSync(g.outputFile, g.html, "utf8");
      console.log(`[static] Gravado ${path.relative(ROOT, g.outputFile)} (${Buffer.byteLength(g.html)} bytes)`);
    }
  }
  const results = generated.map((g) => g.result);
  const summary = {
    generatedAt: (/* @__PURE__ */ new Date()).toISOString(),
    baseUrl: BASE_URL,
    viewport,
    total: results.length,
    ok: results.filter((r) => r.status === "ok").length,
    falhas: results.filter((r) => r.status === "falha").length,
    routes: results
  };
  fs.writeFileSync(
    path.join(REPORTS, "static-pilot-generation.json"),
    JSON.stringify(summary, null, 2),
    "utf8"
  );
  writeRuntimeErrorsReport(results);
  console.log(
    `[static] Conclu\xEDdo: ${summary.ok}/${summary.total} rotas geradas. Resumo em reports/static-pilot-generation.json`
  );
  if (summary.falhas > 0) process.exit(1);
}
function writeRuntimeErrorsReport(results) {
  const lines = [];
  lines.push("# Relat\xF3rio de erros de runtime \u2014 gera\xE7\xE3o est\xE1tica (E4)");
  lines.push("");
  lines.push(`Gerado em: ${(/* @__PURE__ */ new Date()).toISOString()}`);
  lines.push("");
  const totalCrit = results.reduce((n, r) => n + r.consoleErrorsCritical.length, 0);
  const totalTol = results.reduce((n, r) => n + r.consoleErrorsTolerable.length, 0);
  const totalReq = results.reduce((n, r) => n + r.failedRequests.length, 0);
  lines.push(`- Erros cr\xEDticos: **${totalCrit}**`);
  lines.push(`- Erros toler\xE1veis/ru\xEDdo: ${totalTol}`);
  lines.push(`- Requisi\xE7\xF5es locais com falha: **${totalReq}**`);
  lines.push("");
  for (const r of results) {
    lines.push(`## ${r.path} \u2014 ${r.status.toUpperCase()}`);
    lines.push(`- rota resolvida: \`${r.resolvedRoute}\` (match: ${r.routeMatched ? "sim" : "N\xC3O"})`);
    if (r.error) lines.push(`- motivo da falha: ${r.error}`);
    lines.push(`- cr\xEDticos: ${r.consoleErrorsCritical.length ? r.consoleErrorsCritical.join("; ") : "nenhum"}`);
    lines.push(`- toler\xE1veis: ${r.consoleErrorsTolerable.length ? r.consoleErrorsTolerable.slice(0, 5).join("; ") : "nenhum"}`);
    lines.push(`- requisi\xE7\xF5es falhas: ${r.failedRequests.length ? r.failedRequests.join("; ") : "nenhuma"}`);
    lines.push("");
  }
  fs.writeFileSync(path.join(REPORTS, "static-runtime-errors.md"), lines.join("\n"), "utf8");
}
var invokedDirectly = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (invokedDirectly) {
  main().catch((err) => {
    console.error("[static] Erro cr\xEDtico:", err);
    process.exit(1);
  });
}
export {
  generateRoutes
};
