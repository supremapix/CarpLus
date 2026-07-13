import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { generateRoutes } from './generate-static-pages';
import { PILOT_ROUTES } from './static-pilot-routes';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

function norm(html: string): string {
  return html
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/\sdata-prerendered="[^"]*"/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

async function main() {
  const target = '/faq';
  const routes = PILOT_ROUTES.filter((r) => r.path === target);
  const a = (await generateRoutes(routes, { viewport: 'desktop' }))[0];
  const b = (await generateRoutes(routes, { viewport: 'desktop' }))[0];
  const na = norm(a.html || '');
  const nb = norm(b.html || '');
  // Encontra os primeiros trechos divergentes.
  const ta = na.split(/(?=<)/);
  const tb = nb.split(/(?=<)/);
  const diffs: string[] = [];
  const max = Math.max(ta.length, tb.length);
  for (let i = 0; i < max && diffs.length < 12; i++) {
    if (ta[i] !== tb[i]) {
      diffs.push(`#${i}\n  A: ${(ta[i] || '∅').slice(0, 160)}\n  B: ${(tb[i] || '∅').slice(0, 160)}`);
    }
  }
  fs.writeFileSync(
    path.join(ROOT, 'reports/_diff-probe.txt'),
    `lenA=${na.length} lenB=${nb.length} equal=${na === nb}\ntokensA=${ta.length} tokensB=${tb.length}\n\n` +
      diffs.join('\n\n'),
    'utf8',
  );
}

main();
