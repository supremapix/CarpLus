// Public, non-sensitive publication evidence. Called only after every required
// build validation succeeds; no domain/account credentials are exposed.
import fs from 'node:fs';
import { execFileSync } from 'node:child_process';

const summary = JSON.parse(fs.readFileSync('reports/e6-generation-summary.json', 'utf8'));
const validation = fs.readFileSync('reports/e6-validation.md', 'utf8');
if (summary.selected !== 1738 || summary.ok !== 1738 || summary.falha !== 0 || summary.byType?.produto?.ok !== 1350 || !validation.includes('VALIDAÇÃO GLOBAL APROVADA — 1738 arquivos íntegros, 0 problemas')) {
  throw new Error('Build receipt requires successful complete indexed inventory generation and validation');
}
const commit = process.env.VERCEL_GIT_COMMIT_SHA || execFileSync('git', ['rev-parse', 'HEAD'], { encoding: 'utf8' }).trim();
if (!/^[a-f0-9]{40}$/i.test(commit)) throw new Error('Missing or invalid build commit identity');
const receipt = {
  package: 'suprema-2026-11-01',
  commit,
  generatedAt: new Date().toISOString(),
  validated: { indexedPages: summary.ok, productPages: summary.byType.produto.ok },
};
fs.writeFileSync('dist/build-info.json', `${JSON.stringify(receipt, null, 2)}\n`);
const verified = JSON.parse(fs.readFileSync('dist/build-info.json', 'utf8'));
if (verified.commit !== commit || verified.validated.indexedPages !== 1738 || verified.validated.productPages !== 1350) throw new Error('Invalid build receipt round trip');
console.log(`[build-receipt] ${commit}: ${verified.validated.indexedPages} indexed pages validated.`);
