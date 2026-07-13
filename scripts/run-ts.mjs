#!/usr/bin/env node
// Runner portátil de scripts TypeScript.
//
// Motivo: neste ambiente (Node 24 + loader do runtime v0) o `tsx` sai
// silenciosamente sem executar o script. Este runner empacota o script alvo
// com esbuild (mantendo node_modules como externos) e executa o bundle com
// `node` puro — funciona tanto no sandbox quanto no build da Vercel.
//
// Uso: node scripts/run-ts.mjs scripts/generate-static-pages.ts [args...]

import { build } from 'esbuild';
import { pathToFileURL, fileURLToPath } from 'node:url';
import path from 'node:path';
import fs from 'node:fs';

const entry = process.argv[2];
if (!entry) {
  console.error('[run-ts] Uso: node scripts/run-ts.mjs <arquivo.ts> [args...]');
  process.exit(1);
}

// IMPORTANTE: os scripts alvo derivam a raiz do projeto de
// `path.resolve(dirname(fileURLToPath(import.meta.url)), '..')`. Para que essa
// conta continue correta no bundle, emitimos em `<raiz>/.v0-build/`, que fica
// exatamente UM nível abaixo da raiz (igual a `scripts/`). Emitir em os.tmpdir()
// faria ROOT resolver para /tmp e quebraria a leitura de dist/ e a escrita de
// reports/.
const runnerDir = path.dirname(fileURLToPath(import.meta.url)); // <raiz>/scripts
const projectRoot = path.resolve(runnerDir, '..');
const outDir = path.join(projectRoot, '.v0-build');
fs.mkdirSync(outDir, { recursive: true });
const entryAbs = path.resolve(entry);
const outFile = path.join(outDir, path.basename(entryAbs).replace(/\.tsx?$/, '') + '.mjs');

await build({
  entryPoints: [entryAbs],
  bundle: true,
  platform: 'node',
  format: 'esm',
  packages: 'external',
  outfile: outFile,
  sourcemap: 'inline',
  logLevel: 'warning',
});

// Repassa os argumentos restantes ao script alvo.
process.argv = [process.argv[0], entryAbs, ...process.argv.slice(3)];
await import(pathToFileURL(outFile).href);
