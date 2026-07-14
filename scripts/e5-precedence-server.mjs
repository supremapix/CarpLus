// Servidor estático que REPLICA a ordem de resolução da Vercel:
//   1) redirects (nao modelados aqui - fora do escopo E5.0)
//   2) FILESYSTEM: se existir dist/<rota>/index.html (ou arquivo), serve com 200
//   3) REWRITE fallback SPA: /(.*) -> /index.html (shell), com 200
// Objetivo: provar que o arquivo fisico tem precedencia sobre o rewrite global.
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'dist');
const PORT = Number(process.env.PORT || 4599);

const MIME = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css',
  '.json': 'application/json', '.xml': 'application/xml', '.svg': 'image/svg+xml',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp',
  '.ico': 'image/x-icon', '.woff': 'font/woff', '.woff2': 'font/woff2', '.txt': 'text/plain',
};

function resolvePhysical(pathname) {
  // remove query, decode
  const clean = decodeURIComponent(pathname.split('?')[0]);
  const full = path.join(ROOT, clean);
  // arquivo exato (ex.: /assets/x.js)
  if (fs.existsSync(full) && fs.statSync(full).isFile()) return full;
  // diretorio -> index.html (ex.: /pneu/slug -> /pneu/slug/index.html)
  const asIndex = path.join(full, 'index.html');
  if (fs.existsSync(asIndex) && fs.statSync(asIndex).isFile()) return asIndex;
  return null;
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://localhost:${PORT}`);
  const physical = resolvePhysical(url.pathname);
  if (physical) {
    const ext = path.extname(physical).toLowerCase();
    res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream', 'X-Served-By': 'filesystem' });
    fs.createReadStream(physical).pipe(res);
    return;
  }
  // Fallback SPA (rewrite global) -> shell index.html, status 200 (soft-404 para rotas desconhecidas)
  const shell = path.join(ROOT, 'index.html');
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8', 'X-Served-By': 'spa-fallback-rewrite' });
  fs.createReadStream(shell).pipe(res);
});

server.listen(PORT, () => console.log(`[e5-precedence] servindo dist/ em http://localhost:${PORT} (filesystem -> SPA fallback)`));
