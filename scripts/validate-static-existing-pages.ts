import fs from 'node:fs';
import { getShellTitle, outputFileFor, resolveShellHtml } from './generate-static-pages';
import { getEssentialExistingRoutes, validateEssentialExistingHtml } from './essential-existing-routes';

const shellTitle = getShellTitle(resolveShellHtml());
const routes = getEssentialExistingRoutes();
for (const route of routes) {
  const file = outputFileFor(route);
  const problems = fs.existsSync(file)
    ? validateEssentialExistingHtml(route, fs.readFileSync(file, 'utf8'), shellTitle)
    : ['HTML ausente'];
  if (problems.length) throw new Error(`${route.path}: ${problems.join('; ')}`);
}
console.log(`[existing-pages] ${routes.length} arquivos finais validados; sitemap e política preservados.`);
