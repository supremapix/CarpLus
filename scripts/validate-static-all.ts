// scripts/validate-static-all.ts
// ─────────────────────────────────────────────────────────────────────────────
// VALIDAÇÃO GLOBAL DO HTML ESTÁTICO GERADO — Etapa E6
// ─────────────────────────────────────────────────────────────────────────────
// Reabre CADA arquivo index.html gravado em disco (independente da captura feita
// na geração) e verifica, por rota, os invariantes de SEO/estrutura:
//   • arquivo existe e é não-trivial;
//   • <title> presente, não vazio e ≠ título do shell;
//   • canonical presente e IGUAL ao expectedCanonical do enumerador;
//   • robots sem "noindex";
//   • <h1> presente;
//   • ≥1 bloco JSON-LD;
//   • og:title/og:url e twitter:card presentes;
//   • sem "localhost"/127.0.0.1 no HTML;
//   • marca data-prerendered="true".
//
// Por padrão valida TODAS as rotas do enumerador que possuem arquivo em dist.
// (assim funciona tanto para lotes parciais quanto para a geração completa).
// Também detecta canonicais duplicados entre rotas distintas.

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { getStaticRoutes } from './static-routes';
import { outputFileFor, resolveShellHtml, getShellTitle } from './generate-static-pages';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const REPORTS = path.join(ROOT, 'reports');

interface Issue {
  path: string;
  problems: string[];
}

function extract(html: string, re: RegExp): string | null {
  const m = html.match(re);
  return m ? m[1].trim() : null;
}

function validateHtml(
  routePath: string,
  file: string,
  expectedCanonical: string,
  shellTitle: string,
): string[] {
  const problems: string[] = [];
  if (!fs.existsSync(file)) return ['arquivo ausente em dist'];
  const html = fs.readFileSync(file, 'utf8');
  if (html.length < 2000) problems.push(`HTML muito pequeno (${html.length}B)`);

  const title = extract(html, /<title>([^<]*)<\/title>/i);
  if (!title) problems.push('sem <title>');
  else if (title === shellTitle) problems.push('title == shell (render incompleto)');

  const canonical = extract(html, /<link[^>]+rel="canonical"[^>]+href="([^"]+)"/i);
  if (!canonical) problems.push('sem canonical');
  else if (canonical !== expectedCanonical)
    problems.push(`canonical "${canonical}" ≠ esperado "${expectedCanonical}"`);

  const robots = extract(html, /<meta[^>]+name="robots"[^>]+content="([^"]+)"/i);
  if (robots && /noindex/i.test(robots)) problems.push(`robots noindex ("${robots}")`);

  if (!/<h1[\s>]/i.test(html)) problems.push('sem <h1>');
  if (!/application\/ld\+json/i.test(html)) problems.push('sem JSON-LD');
  if (!/property="og:title"/i.test(html)) problems.push('sem og:title');
  if (!/property="og:url"/i.test(html)) problems.push('sem og:url');
  if (!/name="twitter:card"/i.test(html)) problems.push('sem twitter:card');
  if (/localhost|127\.0\.0\.1/.test(html)) problems.push('contém localhost/127.0.0.1');
  if (!/data-prerendered="true"/i.test(html)) problems.push('sem data-prerendered');

  return problems;
}

function main() {
  const routes = getStaticRoutes();
  const shellTitle = getShellTitle(resolveShellHtml());

  const present = routes.filter((r) => fs.existsSync(outputFileFor(r)));
  const missing = routes.filter((r) => !fs.existsSync(outputFileFor(r)));

  console.log(
    `[validate:all] Enumeradas ${routes.length} | com arquivo ${present.length} | sem arquivo ${missing.length}`,
  );

  const issues: Issue[] = [];
  const canonicalMap = new Map<string, string[]>();

  for (const r of present) {
    const file = outputFileFor(r);
    const problems = validateHtml(r.path, file, r.expectedCanonical, shellTitle);
    const html = fs.readFileSync(file, 'utf8');
    const canonical = extract(html, /<link[^>]+rel="canonical"[^>]+href="([^"]+)"/i);
    if (canonical) {
      const arr = canonicalMap.get(canonical) ?? [];
      arr.push(r.path);
      canonicalMap.set(canonical, arr);
    }
    if (problems.length) issues.push({ path: r.path, problems });
  }

  // Canonicais compartilhados por rotas distintas → canibalização.
  const dupCanonicals = [...canonicalMap.entries()].filter(([, paths]) => paths.length > 1);

  // Relatório.
  fs.mkdirSync(REPORTS, { recursive: true });
  const lines: string[] = [];
  lines.push('# Validação global do HTML estático (E6)');
  lines.push('');
  lines.push(`Gerado em: ${new Date().toISOString()}`);
  lines.push('');
  lines.push(`- Rotas enumeradas: **${routes.length}**`);
  lines.push(`- Com arquivo em dist: **${present.length}**`);
  lines.push(`- Sem arquivo (não geradas): **${missing.length}**`);
  lines.push(`- Rotas com problemas: **${issues.length}**`);
  lines.push(`- Canonicais duplicados: **${dupCanonicals.length}**`);
  lines.push('');
  if (missing.length) {
    lines.push('## Rotas sem arquivo (amostra)');
    for (const r of missing.slice(0, 30)) lines.push(`- \`${r.path}\` (${r.type})`);
    lines.push('');
  }
  if (dupCanonicals.length) {
    lines.push('## Canonicais duplicados');
    for (const [canon, paths] of dupCanonicals.slice(0, 50)) {
      lines.push(`- \`${canon}\` ← ${paths.map((p) => `\`${p}\``).join(', ')}`);
    }
    lines.push('');
  }
  if (issues.length) {
    lines.push('## Problemas por rota (amostra)');
    for (const i of issues.slice(0, 60)) {
      lines.push(`- \`${i.path}\`: ${i.problems.join('; ')}`);
    }
    lines.push('');
  }
  const ok = issues.length === 0 && dupCanonicals.length === 0;
  lines.push('## Veredito');
  lines.push('```text');
  lines.push(
    ok
      ? `VALIDAÇÃO GLOBAL APROVADA — ${present.length} arquivos íntegros, 0 problemas`
      : `VALIDAÇÃO GLOBAL REPROVADA — ${issues.length} rota(s) com problema, ${dupCanonicals.length} canonical(is) duplicado(s)`,
  );
  lines.push('```');
  fs.writeFileSync(path.join(REPORTS, 'e6-validation.md'), lines.join('\n'), 'utf8');

  console.log(
    `[validate:all] problemas=${issues.length} canonicaisDuplicados=${dupCanonicals.length} → ${ok ? 'APROVADO' : 'REPROVADO'}`,
  );
  if (issues.length) {
    for (const i of issues.slice(0, 15))
      console.log(`  ✗ ${i.path}: ${i.problems.join('; ')}`);
  }
  console.log(`[validate:all] Relatório: reports/e6-validation.md`);

  if (!ok) process.exit(1);
}

main();
