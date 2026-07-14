#!/usr/bin/env node
// Servidor que REPLICA a cadeia de roteamento da Vercel para validar a E5:
//   1) REDIRECTS (301): aplica vercel.json "redirects" (query `has` + `:param` dinâmico)
//   2) FILESYSTEM: se existir dist/<rota>/index.html (ou arquivo), serve com 200
//   3) REWRITE fallback SPA: /(.*) -> /index.html (shell), com 200 (soft-404)
// Uso: PORT=4600 node scripts/e5-routing-server.mjs
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const PROJECT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const ROOT = path.join(PROJECT, 'dist');
const PORT = Number(process.env.PORT || 4600);
const config = JSON.parse(fs.readFileSync(path.join(PROJECT, 'vercel.json'), 'utf-8'));
const REDIRECTS = config.redirects ?? [];

const MIME = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css',
  '.json': 'application/json', '.xml': 'application/xml', '.svg': 'image/svg+xml',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp',
  '.ico': 'image/x-icon', '.woff': 'font/woff', '.woff2': 'font/woff2', '.txt': 'text/plain',
};

// Converte source com :param em regex (um segmento). Retorna {re, keys} ou null.
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
    // 1. Regras com query `has` (paginação): pathname exato + todos os params batem.
    if (Array.isArray(r.has)) {
      if (pathname !== r.source) continue;
      const allMatch = r.has.every(
        (h) => h.type === 'query' && query.get(h.key) === h.value,
      );
      if (allMatch) return { destination: r.destination };
      continue;
    }
    // 2. Regras com :param dinâmico.
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
    // 3. Match exato de path.
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
  // 1) REDIRECTS
  const red = matchRedirect(url.pathname, url.searchParams);
  if (red) {
    res.writeHead(301, { Location: red.destination, 'X-Served-By': 'redirect' });
    res.end();
    return;
  }
  // 2) FILESYSTEM
  const physical = resolvePhysical(url.pathname);
  if (physical) {
    const ext = path.extname(physical).toLowerCase();
    res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream', 'X-Served-By': 'filesystem' });
    fs.createReadStream(physical).pipe(res);
    return;
  }
  // 3) REWRITE fallback SPA
  const shell = path.join(ROOT, 'index.html');
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8', 'X-Served-By': 'spa-fallback-rewrite' });
  fs.createReadStream(shell).pipe(res);
});

server.listen(PORT, () =>
  console.log(`[e5-routing] ${REDIRECTS.length} redirects | dist/ em http://localhost:${PORT}`),
);
