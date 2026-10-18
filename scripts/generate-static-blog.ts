// Blog pages are essential output, even when the full-site snapshot is disabled.
// Reuse the site's rendering pipeline; never publish the home shell as an article.
import fs from 'node:fs';
import path from 'node:path';
import { BLOG_POSTS } from '../src/data/blogPosts';
import { generateRoutes, preserveShellBackup } from './generate-static-pages';

async function main() {
  preserveShellBackup();
  const routes = ['/blog', ...BLOG_POSTS.map(p => `/blog/${p.slug}`)].map(route => ({ path: route, type: 'blog', expectJsonLd: true }));
  const pages = await generateRoutes(routes);
  const failed = pages.filter(p => p.result.status !== 'ok' || !p.html || p.result.canonical !== `https://www.carpluspneuseoficina.com.br${p.result.path}`);
  if (failed.length) throw new Error(`Blog HTML validation failed: ${failed.map(p => p.result.path).join(', ')}`);
  for (const page of pages) {
    fs.mkdirSync(path.dirname(page.outputFile), { recursive: true });
    fs.writeFileSync(page.outputFile, page.html!, 'utf8');
  }
  console.log(`[blog] ${pages.length} static pages generated and validated.`);
}
main().catch(error => { console.error(error); process.exit(1); });
