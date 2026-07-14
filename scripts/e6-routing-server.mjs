#!/usr/bin/env node
// Servidor de validação E6.5 — estende a fidelidade do e5-routing-server
// aplicando TAMBÉM os `headers` do vercel.json (Cache-Control, segurança) por
// `source` (glob estilo Vercel). Mantém a cadeia:
//   1) REDIRECTS (301): vercel.json "redirects" (query `has` + `:param` dinâmico)
//   2) FILESYSTEM: dist/<rota>/index.html (ou arquivo) → 200 + headers casados
//   3) REWRITE fallback SPA: /(.*) -> /index.html (shell) → 200 (soft-404)
// Uso: PORT=4600 node scripts/e6-routing-server.mjs
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const PROJECT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const ROOT = path.join(PROJECT, 'dist');
const PORT = Number(process.env.PORT || 4600);
const config = JSON.parse(fs.readFileSync(path.join(PROJECT, 'vercel.json'), 'utf-8'));
const REDIRECTS = config.redirects ?? [];
const HEADER_RULES = config.headers ?? [];

const MIME = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css',
  '.json': 'application/json', '.xml': 'application/xml', '.svg': 'image/svg+xml',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp',
  '.ico': 'image/x-icon', '.woff': 'font/woff', '.woff2': 'font/woff2', '.txt': 'text/plain',
};

// Converte o `source` de header (glob estilo Vercel) em RegExp.
// Suporta: /(.*) , :path* , /assets/(.*) , sufixos como (.*).js
function sourceToRegExp(source) {
  // Normaliza tokens Vercel comuns para regex.
  let p = source
    .replace(/\/:[a-zA-Z0-9_]+\*/g, '/.*') // /:path* -> /.*
    .replace(/:[a-zA-Z0-9_]+\*/g, '.*') // :path* -> .*
    .replace(/:[a-zA-Z0-9_]+/g, '[^/]+'); // :param -> um segmento
  // (.*) já é regex válido; garante âncoras.
  return new RegExp('^' + p + '$');
}

const HEADER_MATCHERS = HEADER_RULES.map((rule) => ({
  re: sourceToRegExp(rule.source),
  headers: rule.headers ?? [],
}));

function headersFor(pathname) {
  const out = {};
  for (const m of HEADER_MATCHERS) {
    if (m.re.test(pathname)) {
      for (const h of m.headers) out[h.key] = h.value;
    }
  }
  return out;
}

function paramMatcher(source) {
  if (!source.includes(':')) return null;
  const keys = [];
  const pattern = source.replace(/:[a-zA-Z0-9_]+/g, (m) => {
    keys.push(m.slice(1));
    return '([^/]+)';
  });
  return { re: new RegExp('^' + pattern + '$'), keys };
}

function matchRedirect(pathname, query) {
  for (const r of REDIRECTS) {
    if (Array.isArray(r.has)) {
      if (pathname !== r.source) continue;
      const allMatch = r.has.every((h) => h.type === 'query' && query.get(h.key) === h.value);
      if (allMatch) return { destination: r.destination };
      continue;
    }
    const pm = paramMatcher(r.source);
    if (pm) {
      const mt = pathname.match(pm.re);
      if (mt) {
        let dest = r.destination;
        pm.keys.forEach((k, i) => {
          dest = dest.replace(':' + k, mt[i + 1]);
        });
        return { destination: dest };
      }
      continue;
    }
    if (pathname === r.source) return { destination: r.destination };
  }
  return null;
}

function resolvePhysical(pathname) {
  const clean = decodeURIComponent(pathname.split('?')[0]);
  const full = path.join(ROOT, clean);
  if (fs.existsSync(full) && fs.statSync(full).isFile()) return full;
  const asIndex = path.join(full, 'index.html');
  if (fs.existsSync(asIndex) && fs.statSync(asIndex).isFile()) return asIndex;
  return null;
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://localhost:${PORT}`);
  const extraHeaders = headersFor(url.pathname);

  // 1) REDIRECTS
  const red = matchRedirect(url.pathname, url.searchParams);
  if (red) {
    res.writeHead(301, { Location: red.destination, 'X-Served-By': 'redirect', ...extraHeaders });
    res.end();
    return;
  }
  // 2) FILESYSTEM
  const physical = resolvePhysical(url.pathname);
  if (physical) {
    const ext = path.extname(physical).toLowerCase();
    res.writeHead(200, {
      'Content-Type': MIME[ext] || 'application/octet-stream',
      'X-Served-By': 'filesystem',
      ...extraHeaders,
    });
    fs.createReadStream(physical).pipe(res);
    return;
  }
  // 3) REWRITE fallback SPA
  const shell = path.join(ROOT, 'index.html');
  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8',
    'X-Served-By': 'spa-fallback-rewrite',
    ...extraHeaders,
  });
  fs.createReadStream(shell).pipe(res);
});

server.listen(PORT, () =>
  console.log(
    `[e6-routing] ${REDIRECTS.length} redirects | ${HEADER_RULES.length} header-rules | dist/ em http://localhost:${PORT}`,
  ),
);
