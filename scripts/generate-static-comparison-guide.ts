// O guia precisa de HTML próprio também quando o snapshot global está desativado.
import fs from 'node:fs';
import path from 'node:path';
import { COMPARISON_GUIDE_PATH, COMPARISON_GUIDE_SEO } from '../src/data/comparisonGuide';
import { generateRoutes, preserveShellBackup } from './generate-static-pages';

preserveShellBackup();
const pages = await generateRoutes([{ path: COMPARISON_GUIDE_PATH, type: 'institucional', expectJsonLd: true }]);
const page = pages[0];
if (pages.length !== 1 || page.result.status !== 'ok' || !page.html || page.result.canonical !== COMPARISON_GUIDE_SEO.canonical) {
  throw new Error(`Falha na geração do guia de comparação: ${JSON.stringify(page?.result)}`);
}
fs.mkdirSync(path.dirname(page.outputFile), { recursive: true });
fs.writeFileSync(page.outputFile, page.html, 'utf8');
console.log('[comparison-guide] HTML próprio gerado e validado.');
