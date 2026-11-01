import fs from 'node:fs';
import path from 'node:path';
import { generateRoutes, getShellTitle, preserveShellBackup, resolveShellHtml, outputFileFor } from './generate-static-pages';
import { CUSTOMER_ROUTES, validateCustomerHtml } from './essential-customer-routes';

const validateOnly = process.argv.includes('--validate');
preserveShellBackup();
const shellTitle = getShellTitle(resolveShellHtml());
if (!validateOnly) {
  const pages = await generateRoutes(CUSTOMER_ROUTES);
  const servicePages = pages.filter((_, i) => CUSTOMER_ROUTES[i].type === 'servico');
  for (const field of ['title', 'description'] as const) {
    const values = servicePages.map(page => page.result[field]);
    if (new Set(values).size !== servicePages.length) throw new Error(`Serviços com ${field} duplicado`);
  }
  if (pages.length !== CUSTOMER_ROUTES.length) throw new Error('Lote de páginas incompleto');
  for (const [index, page] of pages.entries()) {
    const errors = page.result.status === 'ok' && page.html
      ? validateCustomerHtml(CUSTOMER_ROUTES[index], page.html, shellTitle)
      : [page.result.error ?? 'render incompleto'];
    if (errors.length) throw new Error(`${CUSTOMER_ROUTES[index].path}: ${errors.join('; ')}`);
  }
  for (const page of pages) {
    fs.mkdirSync(path.dirname(page.outputFile), { recursive: true });
    fs.writeFileSync(`${page.outputFile}.tmp`, page.html!, 'utf8');
    fs.renameSync(`${page.outputFile}.tmp`, page.outputFile);
  }
}
// Also run after optional full-site generation to catch overwritten metadata.
for (const route of CUSTOMER_ROUTES) {
  const file = outputFileFor(route);
  const errors = fs.existsSync(file) ? validateCustomerHtml(route, fs.readFileSync(file, 'utf8'), shellTitle) : ['HTML ausente'];
  if (errors.length) throw new Error(`${route.path}: ${errors.join('; ')}`);
}
console.log(`[customer-pages] ${CUSTOMER_ROUTES.length} rotas existentes com HTML e metadados próprios validados.`);
