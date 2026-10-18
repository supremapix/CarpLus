// HTML essencial das rotas antigas já existentes no runtime, fora do sitemap.
import fs from 'node:fs';
import path from 'node:path';
import { generateRoutes, getShellTitle, preserveShellBackup, resolveShellHtml } from './generate-static-pages';
import { getEssentialExistingRoutes, validateEssentialExistingHtml } from './essential-existing-routes';

preserveShellBackup();
const routes = getEssentialExistingRoutes();
const shellTitle = getShellTitle(resolveShellHtml());
const pages = await generateRoutes(routes);
// Valida o lote inteiro antes de gravar: nenhuma falha pode virar fallback SPA.
for (const [index, page] of pages.entries()) {
  const problems = page.result.status === 'ok' && page.html
    ? validateEssentialExistingHtml(routes[index], page.html, shellTitle)
    : [page.result.error ?? 'render incompleto'];
  if (problems.length) throw new Error(`${routes[index].path}: ${problems.join('; ')}`);
}
if (pages.length !== routes.length) throw new Error('Lote de páginas existentes incompleto');
for (const page of pages) {
  fs.mkdirSync(path.dirname(page.outputFile), { recursive: true });
  const temporary = `${page.outputFile}.tmp`;
  fs.writeFileSync(temporary, page.html!, 'utf8');
  fs.renameSync(temporary, page.outputFile);
}
console.log(`[existing-pages] ${pages.length} páginas com HTML próprio geradas e validadas.`);
