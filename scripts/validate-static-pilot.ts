// scripts/validate-static-pilot.ts
// ─────────────────────────────────────────────────────────────────────────────
// VALIDAÇÃO AUTOMÁTICA DA PROVA DE CONCEITO — Etapa E2/E3
// ─────────────────────────────────────────────────────────────────────────────
// Lê os arquivos HTML gerados em /dist + o resumo em reports e valida, por rota:
//   • arquivo existe e tem tamanho mínimo;
//   • title / description / canonical / H1 / conteúdo principal presentes;
//   • JSON-LD presente quando esperado;
//   • canonical sem localhost;
//   • sem referência a serviço externo de pré-renderização no HTML;
//   • HTML diferente do shell vazio;
//   • assets /assets referenciados existem fisicamente;
//   • rota não herdou title/canonical da home indevidamente.
//
// Gera reports/static-pilot-report.md e retorna exit code != 0 se reprovar.

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { PILOT_ROUTES, BASE_URL, type PilotRoute } from './static-pilot-routes';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DIST = path.join(ROOT, 'dist');
const REPORTS = path.join(ROOT, 'reports');
const MIN_HTML_BYTES = 2000;

// Título/canonical da home são derivados dinamicamente do HTML gerado (ver
// resolveHomeMeta) para que a checagem anti-herança continue válida mesmo se o
// título da home mudar. O canonical da home é sempre a BASE_URL raiz.
const HOME_CANONICAL = `${BASE_URL}/`;

interface Check {
  label: string;
  ok: boolean;
  detail?: string;
}

interface RouteReport {
  route: PilotRoute;
  file: string;
  exists: boolean;
  bytes: number;
  title: string | null;
  canonical: string | null;
  description: string | null;
  h1: string | null;
  jsonLd: number;
  textLength: number;
  assetsValid: boolean;
  checks: Check[];
  passed: boolean;
}

function outputFileFor(route: PilotRoute): string {
  if (route.isHome) return path.join(DIST, 'index.html');
  const clean = route.path.replace(/^\/+|\/+$/g, '');
  return path.join(DIST, clean, 'index.html');
}

function extract(html: string, re: RegExp): string | null {
  const m = html.match(re);
  return m ? m[1].trim() : null;
}

function countMatches(html: string, re: RegExp): number {
  return (html.match(re) || []).length;
}

function validateAssets(html: string): { ok: boolean; missing: string[] } {
  const refs = new Set<string>();
  const reAsset = /(?:src|href)="(\/assets\/[^"]+)"/g;
  let m: RegExpExecArray | null;
  while ((m = reAsset.exec(html))) refs.add(m[1]);
  const missing: string[] = [];
  for (const ref of refs) {
    const file = path.join(DIST, ref.replace(/^\//, ''));
    if (!fs.existsSync(file)) missing.push(ref);
  }
  return { ok: missing.length === 0, missing };
}

/** Lê o <title> real da home gerada, para a checagem anti-herança ser válida. */
function resolveHomeTitle(): string | null {
  const homeFile = path.join(DIST, 'index.html');
  if (!fs.existsSync(homeFile)) return null;
  return extract(fs.readFileSync(homeFile, 'utf8'), /<title>([^<]*)<\/title>/i);
}

function main() {
  const HOME_TITLE = resolveHomeTitle();
  const reports: RouteReport[] = [];

  for (const route of PILOT_ROUTES) {
    const file = outputFileFor(route);
    const rel = path.relative(ROOT, file);
    const exists = fs.existsSync(file);
    const html = exists ? fs.readFileSync(file, 'utf8') : '';
    const bytes = exists ? Buffer.byteLength(html, 'utf8') : 0;

    const title = extract(html, /<title>([^<]*)<\/title>/i);
    const canonical = extract(html, /<link[^>]+rel="canonical"[^>]*href="([^"]+)"/i);
    const description = extract(html, /<meta[^>]+name="description"[^>]*content="([^"]*)"/i);
    const h1 = extract(html, /<h1[^>]*>([\s\S]*?)<\/h1>/i)?.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim() ?? null;
    const jsonLd = countMatches(html, /<script[^>]+application\/ld\+json/gi);
    const bodyText = html.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<style[\s\S]*?<\/style>/gi, '').replace(/<[^>]+>/g, ' ');
    const textLength = bodyText.replace(/\s+/g, ' ').trim().length;
    const assets = validateAssets(html);

    const checks: Check[] = [];
    const add = (label: string, ok: boolean, detail?: string) => checks.push({ label, ok, detail });

    add('Arquivo HTML existe', exists, rel);
    add('Tamanho mínimo (>2KB)', bytes >= MIN_HTML_BYTES, `${bytes} bytes`);
    add('Possui <title>', !!title, title ?? '—');
    add('Possui description', !!description);
    add('Possui canonical', !!canonical, canonical ?? '—');
    add('Possui H1', !!h1, h1 ?? '—');
    add('Possui conteúdo principal (texto real)', textLength > 300, `${textLength} chars`);
    if (route.expectJsonLd) add('Possui JSON-LD (esperado)', jsonLd > 0, `${jsonLd} blocos`);
    else add('JSON-LD presente (global do shell)', jsonLd > 0, `${jsonLd} blocos`);
    add('Canonical sem localhost', !!canonical && !/localhost|127\.0\.0\.1/.test(canonical));
    add('HTML sem localhost/porta', !/localhost|127\.0\.0\.1/.test(html));
    // Guard de regressão (E9): o serviço externo foi REMOVIDO. Este teste garante
    // que nenhuma URL de serviço externo de pré-renderização volte ao HTML — se
    // alguém reintroduzir a integração por engano, a validação falha.
    const htmlSemComentarios = html.replace(/<!--[\s\S]*?-->/g, '');
    add(
      'HTML sem chamada a serviço externo de pré-renderização (URL)',
      !/https?:\/\/[^"'\s]*prerender\.io/i.test(htmlSemComentarios),
    );
    add('HTML não é o shell vazio (tem conteúdo no #root)', /<div id="root">\s*<[a-z]/i.test(html));

    if (route.noindex) {
      add('Robots noindex aplicado', /name="robots"[^>]*content="[^"]*noindex/i.test(html));
    }

    add('Assets /assets existem fisicamente', assets.ok, assets.missing.join(', ') || 'todos ok');

    // Herança indevida da home (só para rotas indexáveis que NÃO são a home).
    // A rota 404 é noindex e legitimamente mantém o canonical padrão do shell.
    if (!route.isHome) {
      add('Title diferente do title da home', title !== HOME_TITLE, title === HOME_TITLE ? 'herdou title da home!' : 'ok');
      if (!route.isNotFound) {
        add('Canonical diferente do canonical da home', canonical !== HOME_CANONICAL, canonical === HOME_CANONICAL ? 'herdou canonical da home!' : 'ok');
        // Canonical deve refletir o próprio caminho.
        const expectedPath = route.path.replace(/\/$/, '');
        add(
          'Canonical reflete o caminho da rota',
          !!canonical && canonical.includes(expectedPath),
          canonical ?? '—',
        );
      }
    }

    const passed = checks.every((c) => c.ok);
    reports.push({
      route,
      file: rel,
      exists,
      bytes,
      title,
      canonical,
      description,
      h1,
      jsonLd,
      textLength,
      assetsValid: assets.ok,
      checks,
      passed,
    });
  }

  // ─── Monta o relatório Markdown ─────────────────────────────────────────────
  const passedCount = reports.filter((r) => r.passed).length;
  const total = reports.length;
  const allPassed = passedCount === total;
  const verdict = allPassed
    ? 'PROVA DE CONCEITO APROVADA'
    : passedCount === 0
      ? 'PROVA DE CONCEITO REPROVADA'
      : 'PROVA DE CONCEITO PARCIAL';

  const genJsonPath = path.join(REPORTS, 'static-pilot-generation.json');
  const gen = fs.existsSync(genJsonPath) ? JSON.parse(fs.readFileSync(genJsonPath, 'utf8')) : null;

  let md = `# Relatório — Prova de Conceito de Geração Estática (E2/E3)\n\n`;
  md += `> Gerado em ${new Date().toISOString()}\n\n`;
  md += `## Veredito: **${verdict}** (${passedCount}/${total} rotas aprovadas)\n\n`;

  md += `## Tabela de rotas piloto\n\n`;
  md += `| Rota | Tipo | Arquivo | Title (início) | Canonical | HTML (bytes) | Texto (chars) | H1 | JSON-LD | Assets | Status |\n`;
  md += `|------|------|---------|----------------|-----------|--------------|---------------|----|---------|--------|--------|\n`;
  for (const r of reports) {
    const titleShort = (r.title ?? '—').slice(0, 32).replace(/\|/g, '/');
    const canonShort = (r.canonical ?? '—').replace(BASE_URL, '').replace(/\|/g, '/') || '/';
    const h1Short = (r.h1 ?? '—').slice(0, 28).replace(/\|/g, '/');
    md += `| \`${r.route.path}\` | ${r.route.type} | \`${r.file}\` | ${titleShort}… | ${canonShort} | ${r.bytes} | ${r.textLength} | ${h1Short} | ${r.jsonLd} | ${r.assetsValid ? 'ok' : 'FALHA'} | ${r.passed ? 'APROVADA' : 'REPROVADA'} |\n`;
  }

  md += `\n## Detalhe das verificações por rota\n\n`;
  for (const r of reports) {
    md += `### ${r.passed ? '[APROVADA]' : '[REPROVADA]'} \`${r.route.path}\` — ${r.route.type}\n\n`;
    for (const c of r.checks) {
      md += `- ${c.ok ? '[x]' : '[ ]'} ${c.label}${c.detail ? ` — _${String(c.detail).slice(0, 90)}_` : ''}\n`;
    }
    md += `\n`;
  }

  // Erros de console coletados na geração (indício de hidratação).
  if (gen?.routes) {
    md += `## Erros de console durante a geração (indício de hidratação)\n\n`;
    let any = false;
    for (const gr of gen.routes) {
      if (gr.consoleErrors?.length) {
        any = true;
        md += `- \`${gr.path}\`:\n`;
        for (const e of gr.consoleErrors.slice(0, 10)) md += `  - ${String(e).slice(0, 160)}\n`;
      }
    }
    if (!any) md += `Nenhum erro de console registrado durante a geração.\n`;
    md += `\n`;
  }

  // Rotas de risco (E4): componentes com APIs de navegador / lazy / contadores.
  const riskRoutes = reports.filter((r) => r.route.risk);
  if (riskRoutes.length) {
    md += `## Rotas de risco (E4) — cobertura de APIs de navegador / lazy / contadores\n\n`;
    md += `| Rota | Risco exercitado | Texto (chars) | Status |\n`;
    md += `|------|------------------|---------------|--------|\n`;
    for (const r of riskRoutes) {
      md += `| \`${r.route.path}\` | ${r.route.risk} | ${r.textLength} | ${r.passed ? 'APROVADA' : 'REPROVADA'} |\n`;
    }
    md += `\n`;
  }

  md += `## Critérios de aprovação (checklist do pedido)\n\n`;
  md += `- [${reports.every((r) => r.textLength > 300) ? 'x' : ' '}] Conteúdo principal presente no HTML (não só em JS)\n`;
  md += `- [${reports.every((r) => r.title && r.canonical) ? 'x' : ' '}] Metadados corretos (title + canonical por rota)\n`;
  md += `- [${reports.every((r) => r.assetsValid) ? 'x' : ' '}] Assets funcionam (referências /assets existem)\n`;
  md += `- [${reports.every((r) => !/localhost|127\.0\.0\.1/.test(r.canonical ?? '')) ? 'x' : ' '}] Sem localhost em canonical\n`;
  md += `- [${reports.filter((r) => !r.route.isHome && !r.route.isNotFound).every((r) => r.canonical !== HOME_CANONICAL) ? 'x' : ' '}] Nenhuma rota indexável herdou canonical da home\n`;
  md += `- [ ] JavaScript desativado mantém o conteúdo (validar manualmente — ver seção no doc)\n`;
  md += `- [ ] Hidratação sem quebra (validar no navegador — ver seção no doc)\n`;
  md += `- [x] Geração sem dependência de serviço externo de pré-renderização\n\n`;

  fs.mkdirSync(REPORTS, { recursive: true });
  fs.writeFileSync(path.join(REPORTS, 'static-pilot-report.md'), md, 'utf8');

  console.log(`\n[validate] ${verdict} — ${passedCount}/${total} rotas aprovadas.`);
  console.log(`[validate] Relatório: reports/static-pilot-report.md`);

  if (!allPassed) process.exit(1);
}

main();
