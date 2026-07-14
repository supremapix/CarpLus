#!/usr/bin/env node
// Emulador fiel da ordem de resolução da Vercel para validar a E8.6 (404 real).
// Ordem: redirects (301) → filesystem (200) → rewrites (200 → index.html) → 404.html (404).
// Lê o vercel.json REAL para não divergir da produção.
import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';

const ROOT = process.cwd();
const DIST = path.join(ROOT, 'dist');
const cfg = JSON.parse(fs.readFileSync(path.join(ROOT, 'vercel.json'), 'utf8'));
const redirects = cfg.redirects ?? [];
const rewrites = cfg.rewrites ?? [];
const PORT = Number(process.env.PORT || 4790);

// Converte "source" path-to-regexp simplificado (:slug, :path*, (.*)) em RegExp.
function toRegExp(source) {
  let re = source
    .replace(/[.+^${}()|[\]\\]/g, (m) => (m === '(.*)' ? m : '\\' + m)) // escapa, exceto (.*)
    .replace(/\\\(\\\.\\\*\\\)/g, '(.*)') // restaura (.*)
    .replace(/:[A-Za-z0-9_]+\*/g, '.*') // :path* → .*
    .replace(/:[A-Za-z0-9_]+/g, '[^/]+'); // :slug → um segmento
  return new RegExp('^' + re + '$');
}

const MIME = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css',
  '.xml': 'application/xml', '.txt': 'text/plain; charset=utf-8', '.json': 'application/json',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.svg': 'image/svg+xml',
  '.webp': 'image/webp', '.ico': 'image/x-icon', '.woff': 'font/woff', '.woff2': 'font/woff2',
};

function fsFileFor(pathname) {
  // Arquivo exato (assets, sitemap.xml, robots.txt, favicon...).
  const direct = path.join(DIST, pathname);
  if (pathname !== '/' && fs.existsSync(direct) && fs.statSync(direct).isFile()) return direct;
  // Rota → dist/<rota>/index.html ; home → dist/index.html
  const asDir = pathname === '/' ? path.join(DIST, 'index.html') : path.join(DIST, pathname, 'index.html');
  if (fs.existsSync(asDir) && fs.statSync(asDir).isFile()) return asDir;
  return null;
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://localhost:${PORT}`);
  const pathname = decodeURIComponent(url.pathname);

  // 1) REDIRECTS (301/permanent) — inclui query has (paginação).
  for (const r of redirects) {
    if (r.source === '/pneus' && Array.isArray(r.has)) {
      const q = r.has.find((h) => h.type === 'query' && h.key === 'page');
      if (pathname === '/pneus' && q && url.searchParams.get('page') === String(q.value)) {
        res.writeHead(r.permanent ? 301 : 302, { location: r.destination }); return res.end();
      }
      continue;
    }
    if (toRegExp(r.source).test(pathname)) {
      const dest = r.destination.replace(/:medida|:slug/g, pathname.split('/').pop());
      res.writeHead(r.permanent ? 301 : 302, { location: dest }); return res.end();
    }
  }

  // 2) FILESYSTEM (200) — arquivos físicos e páginas pré-geradas.
  const file = fsFileFor(pathname);
  if (file) {
    const body = fs.readFileSync(file);
    res.writeHead(200, { 'content-type': MIME[path.extname(file)] || 'application/octet-stream' });
    return res.end(body);
  }

  // 3) REWRITES (200 → index.html) — rotas válidas não-físicas (SPA).
  for (const rw of rewrites) {
    if (toRegExp(rw.source).test(pathname)) {
      const dest = path.join(DIST, rw.destination.replace(/^\//, ''));
      if (fs.existsSync(dest)) {
        res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });
        return res.end(fs.readFileSync(dest));
      }
    }
  }

  // 4) 404.html (HTTP 404) — rota desconhecida.
  const notFound = path.join(DIST, '404.html');
  if (fs.existsSync(notFound)) {
    res.writeHead(404, { 'content-type': 'text/html; charset=utf-8' });
    return res.end(fs.readFileSync(notFound));
  }
  res.writeHead(404); res.end('Not Found');
});

server.listen(PORT, () => console.log(`[e8.6-server] emulando Vercel em http://localhost:${PORT}`));
