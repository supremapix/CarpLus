// scripts/generate-static-all.ts
// ─────────────────────────────────────────────────────────────────────────────
// GERADOR ESTÁTICO ESCALÁVEL — Etapa E6 (1.533 rotas)
// ─────────────────────────────────────────────────────────────────────────────
// Escala a prova de conceito do piloto (11 rotas) para TODAS as rotas indexáveis
// enumeradas em scripts/static-routes.ts, REUTILIZANDO a mesma primitiva de
// render comprovada (`renderRouteOnPage`) — sem lógica divergente.
//
// Recursos de robustez:
//   • Concorrência controlada (N páginas no MESMO browser headless).
//   • Checkpoint/retomada (reports/e6-progress.json): rotas já "ok" são puladas
//     numa reexecução; falhas podem ser reprocessadas com --retry-failed.
//   • Escrita ATÔMICA (arquivo .tmp + rename) → nunca deixa index.html parcial.
//   • Amostragem determinística (--shuffle usa seed fixa) para lotes
//     representativos e reproduzíveis (A=25, B=100, C=500, D=tudo).
//   • Preserva o shell SPA original como fallback (via preserveShellBackup).
//
// NÃO altera vercel.json, middleware.js, index.html-fonte nem o Prerender.io.
//
// Flags:
//   --limit=N          gera apenas as primeiras N rotas da seleção
//   --shuffle          embaralha (seed fixa) antes de aplicar --limit
//   --seed=N           seed do shuffle (default 1337)
//   --concurrency=N    páginas simultâneas (default 4)
//   --retry-failed     processa somente as rotas com falha no checkpoint
//   --viewport=desktop|mobile
//   --fresh            ignora o checkpoint existente (recomeça do zero)

import fs from 'fs';
import path from 'path';
import type { Browser } from 'puppeteer-core';
import { launchBrowser } from './launch-browser';
import { getStaticRoutes, type StaticRoute } from './static-routes';
import {
  ROOT,
  REPORTS,
  BASE_URL,
  resolveShellHtml,
  getShellTitle,
  preserveShellBackup,
  createStaticServer,
  listenOnFreePort,
  renderRouteOnPage,
  outputFileFor,
  VIEWPORTS,
  type ViewportName,
  type RouteResult,
} from './generate-static-pages';

const PROGRESS_FILE = path.join(REPORTS, 'e6-progress.json');
const SUMMARY_JSON = path.join(REPORTS, 'e6-generation-summary.json');

/**
 * Confirma que um arquivo de saída é uma página realmente pré-renderizada, e não
 * o shell SPA vazio. Todo HTML gerado recebe o atributo `data-prerendered` no
 * <html> (ver generate-static-pages). Lê apenas o início do arquivo (o marcador
 * fica no topo, dentro da tag <html>), evitando custo de ler arquivos grandes.
 */
function isPrerenderedFile(file: string): boolean {
  try {
    const fd = fs.openSync(file, 'r');
    try {
      const buf = Buffer.alloc(2048);
      const bytes = fs.readSync(fd, buf, 0, buf.length, 0);
      return buf.toString('utf8', 0, bytes).includes('data-prerendered');
    } finally {
      fs.closeSync(fd);
    }
  } catch {
    return false;
  }
}

interface Args {
  limit: number | null;
  shuffle: boolean;
  seed: number;
  concurrency: number;
  retryFailed: boolean;
  viewport: ViewportName;
  fresh: boolean;
}

function parseArgs(argv: string[]): Args {
  const get = (name: string) =>
    argv.find((a) => a === `--${name}` || a.startsWith(`--${name}=`));
  const val = (name: string, def: string) => {
    const a = get(name);
    if (!a) return def;
    const eq = a.indexOf('=');
    return eq === -1 ? def : a.slice(eq + 1);
  };
  const limitRaw = val('limit', '');
  const vp = val('viewport', 'desktop');
  return {
    limit: limitRaw ? Math.max(1, parseInt(limitRaw, 10)) : null,
    shuffle: !!get('shuffle'),
    seed: parseInt(val('seed', '1337'), 10) || 1337,
    concurrency: Math.max(1, parseInt(val('concurrency', '4'), 10) || 4),
    retryFailed: !!get('retry-failed'),
    viewport: vp === 'mobile' ? 'mobile' : 'desktop',
    fresh: !!get('fresh'),
  };
}

// Shuffle determinístico (LCG) — mesma seed ⇒ mesma ordem (retomada estável).
function seededShuffle<T>(arr: T[], seed: number): T[] {
  const a = arr.slice();
  let s = seed >>> 0 || 1;
  const rand = () => {
    s = (Math.imul(s, 1664525) + 1013904223) >>> 0;
    return s / 4294967296;
  };
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

interface CheckpointEntry {
  path: string;
  type: string;
  status: 'ok' | 'falha';
  htmlBytes: number;
  title: string | null;
  canonical: string | null;
  jsonLdTotal: number;
  textLength: number;
  error?: string;
  at: string;
}

interface Checkpoint {
  version: number;
  startedAt: string;
  updatedAt: string;
  totalEnumerated: number;
  entries: Record<string, CheckpointEntry>;
}

function loadCheckpoint(totalEnumerated: number): Checkpoint {
  if (fs.existsSync(PROGRESS_FILE)) {
    try {
      const cp = JSON.parse(fs.readFileSync(PROGRESS_FILE, 'utf8')) as Checkpoint;
      if (cp && cp.entries) return cp;
    } catch {
      /* checkpoint corrompido → recomeça */
    }
  }
  return {
    version: 1,
    startedAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    totalEnumerated,
    entries: {},
  };
}

function atomicWriteFile(file: string, content: string): void {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  const tmp = `${file}.tmp-${process.pid}-${Math.random().toString(36).slice(2)}`;
  fs.writeFileSync(tmp, content, 'utf8');
  fs.renameSync(tmp, file);
}

function saveCheckpoint(cp: Checkpoint): void {
  cp.updatedAt = new Date().toISOString();
  atomicWriteFile(PROGRESS_FILE, JSON.stringify(cp, null, 2));
}

function toEntry(r: RouteResult): CheckpointEntry {
  return {
    path: r.path,
    type: r.type,
    status: r.status,
    htmlBytes: r.htmlBytes,
    title: r.title,
    canonical: r.canonical,
    jsonLdTotal: r.jsonLdTotal,
    textLength: r.textLength,
    error: r.error,
    at: new Date().toISOString(),
  };
}

export async function main() {
  const args = parseArgs(process.argv.slice(2));

  if (args.fresh && fs.existsSync(PROGRESS_FILE)) fs.rmSync(PROGRESS_FILE);

  preserveShellBackup();

  // 1) Enumeração (fonte única) + seleção determinística.
  const all = getStaticRoutes();
  const ordered: StaticRoute[] = args.shuffle
    ? seededShuffle(all, args.seed)
    : all.slice().sort((a, b) => a.genPriority - b.genPriority || a.path.localeCompare(b.path));

  let selected: StaticRoute[];
  if (args.limit != null) {
    // Amostra REPRESENTATIVA e determinística: uma amostra que valida a pipeline
    // precisa cobrir a home (página SEO nº 1) e ≥1 rota de CADA tipo. Sem isso,
    // um `--limit` pequeno pode sortear só produtos e nunca exercitar a home,
    // landings, medidas, etc. Garantimos os representantes primeiro (na ordem já
    // determinística) e completamos o restante da cota preservando a ordem.
    const mustInclude: StaticRoute[] = [];
    const seenTypes = new Set<string>();
    for (const r of ordered) {
      if (r.isHome || !seenTypes.has(r.type)) {
        mustInclude.push(r);
        seenTypes.add(r.type);
      }
    }
    const quota = Math.max(args.limit, mustInclude.length);
    const inMust = new Set(mustInclude.map((r) => r.path));
    const filler = ordered.filter((r) => !inMust.has(r.path)).slice(0, quota - mustInclude.length);
    const chosen = new Set([...mustInclude, ...filler].map((r) => r.path));
    // Reordena pela ordem determinística original para geração estável.
    selected = ordered.filter((r) => chosen.has(r.path));
  } else {
    selected = ordered;
  }

  const cp = loadCheckpoint(all.length);

  // 2) Fila de trabalho conforme o modo.
  let queue: StaticRoute[];
  if (args.retryFailed) {
    queue = selected.filter((r) => cp.entries[r.path]?.status === 'falha' || !cp.entries[r.path]);
  } else {
    queue = selected.filter((r) => {
      const e = cp.entries[r.path];
      const out = outputFileFor(r);
      // Uma rota só conta como concluída se o arquivo existir E estiver de fato
      // pré-renderizado. Verificar apenas existsSync é insuficiente para a home,
      // cujo output é dist/index.html — o mesmo arquivo que `build:spa` regrava
      // como shell SPA vazio. Sem esta checagem, um checkpoint 'ok' prévio faria
      // a home ser pulada, deixando o shell sem conteúdo (bug de SEO na raiz).
      const doneOk = e?.status === 'ok' && fs.existsSync(out) && isPrerenderedFile(out);
      return !doneOk;
    });
  }

  const skipped = selected.length - queue.length;
  console.log(
    `[e6] Enumeradas ${all.length} rotas | selecionadas ${selected.length}` +
      `${args.limit != null ? ` (limit=${args.limit}${args.shuffle ? `, shuffle seed=${args.seed}` : ''})` : ''}` +
      ` | já concluídas ${skipped} | a gerar ${queue.length} | concorrência ${args.concurrency} | viewport ${args.viewport}`,
  );
  if (queue.length === 0) {
    console.log('[e6] Nada a fazer — tudo já gerado. Use --fresh ou --retry-failed se necessário.');
    finalizeSummary(cp, selected);
    return;
  }

  // 3) Servidor estático (shell original como fallback) + browser único.
  const shellHtml = resolveShellHtml();
  const shellTitle = getShellTitle(shellHtml);
  const viewport = VIEWPORTS[args.viewport];
  const server = createStaticServer(shellHtml);
  const port = await listenOnFreePort(server);
  const origin = `http://127.0.0.1:${port}`;

  let browser: Browser | null = null;
  const started = Date.now();
  let completed = 0;
  let okCount = 0;
  let failCount = 0;
  const failures: RouteResult[] = [];
  let sinceFlush = 0;

  try {
    browser = await launchBrowser();

    let cursor = 0;
    const total = queue.length;

    const worker = async () => {
      while (true) {
        const idx = cursor++;
        if (idx >= total) break;
        const route = queue[idx];
        const g = await renderRouteOnPage(browser!, route, origin, shellTitle, viewport);
        const r = g.result;

        if (g.html) {
          // Escrita atômica: nunca deixa um index.html parcial em disco.
          atomicWriteFile(outputFileFor(route), g.html);
        }

        // Atualiza checkpoint (bloco síncrono → sem corrida entre workers).
        cp.entries[route.path] = toEntry(r);
        completed++;
        sinceFlush++;
        if (r.status === 'ok') okCount++;
        else {
          failCount++;
          failures.push(r);
        }

        if (completed % 25 === 0 || completed === total) {
          const elapsed = (Date.now() - started) / 1000;
          const rate = completed / elapsed;
          const eta = rate > 0 ? Math.round((total - completed) / rate) : 0;
          console.log(
            `[e6] ${completed}/${total} (ok=${okCount} falha=${failCount}) ` +
              `${rate.toFixed(1)} rotas/s · ETA ${eta}s · última: ${route.path}`,
          );
        }

        // Flush periódico do checkpoint (resiliência a interrupções).
        if (sinceFlush >= 20 || completed === total) {
          sinceFlush = 0;
          saveCheckpoint(cp);
        }
      }
    };

    await Promise.all(Array.from({ length: Math.min(args.concurrency, total) }, worker));
  } finally {
    saveCheckpoint(cp);
    if (browser) await browser.close();
    await new Promise<void>((r) => server.close(() => r()));
  }

  const elapsed = ((Date.now() - started) / 1000).toFixed(1);
  console.log(
    `[e6] Concluído: ${okCount} ok, ${failCount} falha(s) em ${elapsed}s. ` +
      `Checkpoint: ${path.relative(ROOT, PROGRESS_FILE)}`,
  );

  finalizeSummary(cp, selected);

  if (failCount > 0) {
    console.error(`[e6] ${failCount} rota(s) falharam. Veja o resumo e rode --retry-failed.`);
    process.exit(1);
  }
}

// Escreve o resumo agregado (JSON) a partir do checkpoint atual, restrito ao
// conjunto selecionado (para lotes) — fonte para os relatórios da E6.
function finalizeSummary(cp: Checkpoint, selected: StaticRoute[]): void {
  const entries = selected.map((r) => cp.entries[r.path]).filter(Boolean) as CheckpointEntry[];
  const byType: Record<string, { total: number; ok: number; falha: number }> = {};
  for (const r of selected) {
    const e = cp.entries[r.path];
    byType[r.type] ??= { total: 0, ok: 0, falha: 0 };
    byType[r.type].total++;
    if (e?.status === 'ok') byType[r.type].ok++;
    else if (e?.status === 'falha') byType[r.type].falha++;
  }
  const summary = {
    generatedAt: new Date().toISOString(),
    baseUrl: BASE_URL,
    totalEnumerated: cp.totalEnumerated,
    selected: selected.length,
    processed: entries.length,
    ok: entries.filter((e) => e.status === 'ok').length,
    falha: entries.filter((e) => e.status === 'falha').length,
    byType,
    failures: entries
      .filter((e) => e.status === 'falha')
      .map((e) => ({ path: e.path, type: e.type, error: e.error })),
  };
  atomicWriteFile(SUMMARY_JSON, JSON.stringify(summary, null, 2));
}
