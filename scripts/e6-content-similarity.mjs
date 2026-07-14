// E6 — Detector de conteúdo quase-duplicado entre páginas geradas.
//
// Objetivo: garantir que as ~1.5k páginas não sejam "thin/duplicate content"
// (risco de SEO). Extrai o texto visível do <main> de cada HTML gerado, calcula
// shingles de palavras (n-gramas) e a similaridade de Jaccard entre pares dentro
// do MESMO tipo (produto×produto, medida×medida, etc.), reportando os pares mais
// similares. Não altera nada; apenas lê o dist e escreve um relatório.
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const DIST = path.join(ROOT, 'dist');
const REPORT = path.join(ROOT, 'reports', 'e6-content-similarity.md');
const SHINGLE = 4; // n-grama de palavras
const PER_TYPE_SAMPLE = 40; // amostra por tipo (determinística)
const THRESHOLD = 0.9; // acima disso = quase-duplicado (alerta)

function walk(dir) {
  const out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (['assets', 'images'].includes(e.name)) continue;
      out.push(...walk(full));
    } else if (e.name === 'index.html') {
      out.push(full);
    }
  }
  return out;
}

function extractMainText(html) {
  const m = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
  const body = m ? m[1] : html;
  return body
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z]+;/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();
}

function typeOf(file) {
  const rel = path.relative(DIST, file).replace(/\\/g, '/');
  if (rel === 'index.html') return 'home';
  const seg = rel.split('/')[0];
  if (seg === 'pneu') return 'produto';
  if (seg === 'pneu-medida') return 'medida';
  if (seg === 'servico') return 'servico';
  if (seg === 'bairro') return 'bairro';
  if (seg === 'pneus-para' || seg.startsWith('pneus-')) return 'landing';
  return seg;
}

function shingles(text) {
  const words = text.split(' ').filter(Boolean);
  const set = new Set();
  for (let i = 0; i + SHINGLE <= words.length; i++) {
    set.add(words.slice(i, i + SHINGLE).join(' '));
  }
  return set;
}

function jaccard(a, b) {
  let inter = 0;
  for (const s of a) if (b.has(s)) inter++;
  const union = a.size + b.size - inter;
  return union === 0 ? 0 : inter / union;
}

const files = walk(DIST);
const byType = new Map();
for (const f of files) {
  const t = typeOf(f);
  if (!byType.has(t)) byType.set(t, []);
  byType.get(t).push(f);
}

const lines = ['# E6 — Similaridade de conteúdo (quase-duplicatas)', ''];
lines.push(`Gerado em: ${new Date().toISOString()}`);
lines.push(`Shingle=${SHINGLE} palavras · amostra/tipo=${PER_TYPE_SAMPLE} · limiar alerta=${THRESHOLD}`);
lines.push('');

let worstOverall = 0;
let alerts = 0;
const summaryRows = [];

for (const [type, list] of [...byType.entries()].sort()) {
  const sample = list.slice().sort().slice(0, PER_TYPE_SAMPLE);
  const shs = sample.map((f) => ({ f, s: shingles(extractMainText(fs.readFileSync(f, 'utf8'))) }));
  let worst = 0;
  let worstPair = null;
  let sum = 0;
  let n = 0;
  for (let i = 0; i < shs.length; i++) {
    for (let j = i + 1; j < shs.length; j++) {
      const sim = jaccard(shs[i].s, shs[j].s);
      sum += sim;
      n++;
      if (sim > worst) {
        worst = sim;
        worstPair = [shs[i].f, shs[j].f];
      }
    }
  }
  const avg = n ? sum / n : 0;
  worstOverall = Math.max(worstOverall, worst);
  const flag = worst >= THRESHOLD ? ' ⚠️' : '';
  if (worst >= THRESHOLD) alerts++;
  summaryRows.push(
    `| ${type} | ${list.length} | ${sample.length} | ${avg.toFixed(3)} | ${worst.toFixed(3)}${flag} |`,
  );
  lines.push(`### Tipo: ${type}`);
  lines.push(`- páginas: ${list.length} · amostradas: ${sample.length}`);
  lines.push(`- similaridade média (pares): ${avg.toFixed(3)} · máxima: ${worst.toFixed(3)}`);
  if (worstPair) {
    lines.push(`- par mais similar:`);
    lines.push(`  - ${path.relative(ROOT, worstPair[0])}`);
    lines.push(`  - ${path.relative(ROOT, worstPair[1])}`);
  }
  lines.push('');
}

const summary = [
  '## Resumo por tipo',
  '',
  '| Tipo | Total | Amostra | Sim. média | Sim. máxima |',
  '| --- | --- | --- | --- | --- |',
  ...summaryRows,
  '',
  '## Veredito',
  '',
  alerts === 0
    ? `APROVADO — nenhum par acima do limiar ${THRESHOLD}. Similaridade máxima global: ${worstOverall.toFixed(3)}. Conteúdo suficientemente diferenciado entre páginas.`
    : `ATENÇÃO — ${alerts} tipo(s) com par acima de ${THRESHOLD}. Similaridade máxima global: ${worstOverall.toFixed(3)}. Revisar diferenciação de conteúdo.`,
  '',
];

fs.mkdirSync(path.dirname(REPORT), { recursive: true });
fs.writeFileSync(REPORT, [...lines, ...summary].join('\n'), 'utf8');

console.log(`[similarity] tipos=${byType.size} arquivos=${files.length} simMaxGlobal=${worstOverall.toFixed(3)} alertas=${alerts}`);
console.log(`[similarity] Relatório: ${path.relative(ROOT, REPORT)}`);
process.exit(alerts === 0 ? 0 : 1);
