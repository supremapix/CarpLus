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
import { pathToFileURL } from 'node:url';
import path from 'node:path';
import os from 'node:os';
import fs from 'node:fs';

const entry = process.argv[2];
if (!entry) {
  console.error('[run-ts] Uso: node scripts/run-ts.mjs <arquivo.ts> [args...]');
  process.exit(1);
}

const entryAbs = path.resolve(entry);
const outDir = fs.mkdtempSync(path.join(os.tmpdir(), 'run-ts-'));
const outFile = path.join(outDir, 'bundle.mjs');

try {
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
} finally {
  // Limpeza best-effort do diretório temporário.
  try {
    fs.rmSync(outDir, { recursive: true, force: true });
  } catch {
    /* ignore */
  }
}
