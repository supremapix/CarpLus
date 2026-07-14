// scripts/e6-route-inventory.ts
// Emite reports/e6-route-inventory.csv com o inventário completo e tipado das
// rotas indexáveis (fonte única = static-routes.ts).
// Execução: `npm run routes:inventory`.

import fs from 'fs';
import path from 'path';
import { getStaticRoutes } from './static-routes';

const ROOT = process.cwd();
const REPORTS = path.join(ROOT, 'reports');

function csvCell(v: string | number | boolean): string {
  const s = String(v);
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}

function main() {
  fs.mkdirSync(REPORTS, { recursive: true });
  const routes = getStaticRoutes();

  const header = [
    'path',
    'type',
    'id',
    'dataSource',
    'indexable',
    'expectedCanonical',
    'sitemap',
    'priority',
    'changefreq',
    'genPriority',
  ];
  const lines = [header.join(',')];
  for (const r of routes) {
    lines.push(
      [
        r.path,
        r.type,
        r.id,
        r.dataSource,
        r.indexable,
        r.expectedCanonical,
        r.sitemap,
        r.priority,
        r.changefreq,
        r.genPriority,
      ]
        .map(csvCell)
        .join(','),
    );
  }

  const out = path.join(REPORTS, 'e6-route-inventory.csv');
  fs.writeFileSync(out, lines.join('\n') + '\n', 'utf8');

  // Resumo por tipo.
  const byType = new Map<string, number>();
  const bySitemap = new Map<string, number>();
  for (const r of routes) {
    byType.set(r.type, (byType.get(r.type) ?? 0) + 1);
    bySitemap.set(r.sitemap, (bySitemap.get(r.sitemap) ?? 0) + 1);
  }
  console.log(`[inventory] ${routes.length} rotas → ${path.relative(ROOT, out)}`);
  console.log('[inventory] por tipo:');
  for (const [t, n] of [...byType].sort((a, b) => b[1] - a[1])) console.log(`  ${t.padEnd(20)} ${n}`);
  console.log('[inventory] por sitemap:');
  for (const [s, n] of bySitemap) console.log(`  ${s.padEnd(24)} ${n}`);
}

main();
