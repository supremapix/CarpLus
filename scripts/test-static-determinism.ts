// scripts/test-static-determinism.ts
// ─────────────────────────────────────────────────────────────────────────────
// TESTE DE DETERMINISMO + VIEWPORTS — Etapa E4
// ─────────────────────────────────────────────────────────────────────────────
// Objetivo: provar que o snapshot é ESTÁVEL (mesma entrada → mesma saída) e que
// o conteúdo essencial aparece tanto no desktop quanto no mobile.
//
// Faz:
//   1. Gera as rotas piloto DUAS vezes (desktop) em memória e compara o HTML
//      normalizado de cada rota → detecta não-determinismo (datas, random, etc.).
//   2. Gera as rotas piloto no viewport MOBILE e confere que title/H1/conteúdo
//      continuam presentes (nada de conteúdo essencial só no desktop).
//
// NÃO grava em /dist (usa captura em memória). Gera reports/static-determinism-report.md.
//
// Execução: `tsx scripts/test-static-determinism.ts` (requer `npm run build:spa` antes)

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { generateRoutes } from './generate-static-pages';
import { PILOT_ROUTES } from './static-pilot-routes';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const REPORTS = path.join(ROOT, 'reports');

// Normaliza ruído irrelevante para a comparação de determinismo:
// - remove o atributo data-prerendered (sempre presente, não é conteúdo);
// - colapsa espaços em branco;
// - remove comentários HTML;
// - remove atributos de estado voláteis do React (não afetam SEO).
function normalize(html: string): string {
  return html
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/\sdata-prerendered="[^"]*"/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

// Extrai um "esqueleto SEO" (o que realmente importa para o Google) para que a
// comparação foque em título/description/canonical/JSON-LD/H1/quantidade de texto.
function seoSkeleton(html: string) {
  const pick = (re: RegExp) => (html.match(re)?.[1] ?? '').trim();
  const jsonLd = (html.match(/<script[^>]+application\/ld\+json[^>]*>([\s\S]*?)<\/script>/gi) || [])
    .map((s) => s.replace(/\s+/g, ' ').trim());
  const text = html
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  return {
    title: pick(/<title>([^<]*)<\/title>/i),
    description: pick(/<meta[^>]+name="description"[^>]*content="([^"]*)"/i),
    canonical: pick(/<link[^>]+rel="canonical"[^>]*href="([^"]+)"/i),
    h1: pick(/<h1[^>]*>([\s\S]*?)<\/h1>/i).replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim(),
    jsonLd,
    textLength: text.length,
  };
}

async function main() {
  console.log('[determinism] Rodando 2 gerações (desktop) + 1 geração (mobile)…');

  const [runA, runB, runMobile] = [
    await generateRoutes(PILOT_ROUTES, { viewport: 'desktop' }),
    await generateRoutes(PILOT_ROUTES, { viewport: 'desktop' }),
    await generateRoutes(PILOT_ROUTES, { viewport: 'mobile' }),
  ];

  interface Row {
    path: string;
    deterministic: boolean;
    diffDetail: string;
    mobileComplete: boolean;
    mobileDetail: string;
  }
  const rows: Row[] = [];

  for (const route of PILOT_ROUTES) {
    const a = runA.find((r) => r.result.path === route.path);
    const b = runB.find((r) => r.result.path === route.path);
    const m = runMobile.find((r) => r.result.path === route.path);

    // ── Determinismo (desktop A vs B) ──
    let deterministic = false;
    let diffDetail = '';
    if (a?.html && b?.html) {
      const na = normalize(a.html);
      const nb = normalize(b.html);
      deterministic = na === nb;
      if (!deterministic) {
        // Aponta o esqueleto SEO divergente (mais útil que diff bruto).
        const sa = seoSkeleton(a.html);
        const sb = seoSkeleton(b.html);
        const diffs: string[] = [];
        if (sa.title !== sb.title) diffs.push('title');
        if (sa.description !== sb.description) diffs.push('description');
        if (sa.canonical !== sb.canonical) diffs.push('canonical');
        if (sa.h1 !== sb.h1) diffs.push('h1');
        if (JSON.stringify(sa.jsonLd) !== JSON.stringify(sb.jsonLd)) diffs.push('json-ld');
        if (Math.abs(sa.textLength - sb.textLength) > 0) diffs.push(`textLength(${sa.textLength}→${sb.textLength})`);
        diffDetail = diffs.length ? diffs.join(', ') : 'diferença fora do esqueleto SEO (markup volátil)';
      }
    } else {
      diffDetail = 'uma das gerações não produziu HTML';
    }

    // ── Completude no mobile ──
    let mobileComplete = false;
    let mobileDetail = '';
    if (m?.html) {
      const sm = seoSkeleton(m.html);
      mobileComplete = !!sm.title && !!sm.h1 && sm.textLength > 300 && !!sm.canonical;
      mobileDetail = `title:${sm.title ? 'ok' : 'FALTA'} h1:${sm.h1 ? 'ok' : 'FALTA'} texto:${sm.textLength} canonical:${sm.canonical ? 'ok' : 'FALTA'}`;
    } else {
      mobileDetail = 'mobile não produziu HTML';
    }

    rows.push({ path: route.path, deterministic, diffDetail, mobileComplete, mobileDetail });
  }

  const allDeterministic = rows.every((r) => r.deterministic);
  const allMobileComplete = rows.every((r) => r.mobileComplete);
  const passed = allDeterministic && allMobileComplete;

  // ─── Relatório ───────────────────────────────────────────────────────────
  let md = `# Relatório — Determinismo e Viewports (E4)\n\n`;
  md += `> Gerado em ${new Date().toISOString()}\n\n`;
  md += `## Veredito: **${passed ? 'APROVADO' : 'REPROVADO'}**\n\n`;
  md += `- Determinismo (2 gerações idênticas): ${allDeterministic ? 'OK' : 'FALHA'}\n`;
  md += `- Conteúdo completo no mobile: ${allMobileComplete ? 'OK' : 'FALHA'}\n\n`;
  md += `| Rota | Determinístico | Detalhe (se diferente) | Mobile completo | Detalhe mobile |\n`;
  md += `|------|----------------|------------------------|-----------------|----------------|\n`;
  for (const r of rows) {
    md += `| \`${r.path}\` | ${r.deterministic ? 'sim' : 'NÃO'} | ${r.diffDetail || '—'} | ${r.mobileComplete ? 'sim' : 'NÃO'} | ${r.mobileDetail} |\n`;
  }
  md += `\n`;

  fs.mkdirSync(REPORTS, { recursive: true });
  fs.writeFileSync(path.join(REPORTS, 'static-determinism-report.md'), md, 'utf8');

  console.log(`\n[determinism] ${passed ? 'APROVADO' : 'REPROVADO'}`);
  console.log(`[determinism]   determinismo: ${allDeterministic ? 'OK' : 'FALHA'}`);
  console.log(`[determinism]   mobile completo: ${allMobileComplete ? 'OK' : 'FALHA'}`);
  console.log(`[determinism] Relatório: reports/static-determinism-report.md`);

  if (!passed) process.exit(1);
}

main().catch((err) => {
  console.error('[determinism] Erro crítico:', err);
  process.exit(1);
});
