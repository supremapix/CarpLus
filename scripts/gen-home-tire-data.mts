import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { TIRES } from '../src/data.ts';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.resolve(__dirname, '../src/data');

// === 1) Arvore de filtros: aro -> larguras -> alturas (perfis) ===
const tree: Record<number, Record<number, Set<number>>> = {};
for (const t of TIRES) {
  if (!t || !t.aro) continue;
  tree[t.aro] ??= {};
  if (t.largura) {
    tree[t.aro][t.largura] ??= new Set<number>();
    if (t.perfil) tree[t.aro][t.largura].add(t.perfil);
  }
}
const aros = Object.keys(tree).map(Number).sort((a, b) => a - b);
const filterTree: Record<number, Record<number, number[]>> = {};
for (const aro of aros) {
  const larguras = Object.keys(tree[aro]).map(Number).sort((a, b) => a - b);
  filterTree[aro] = {};
  for (const l of larguras) filterTree[aro][l] = [...tree[aro][l]].sort((a, b) => a - b);
}

// === 2) 8 pneus mais vendidos (destaque) com diversidade de marcas ===
// Prioriza marcas premium e no maximo 2 pneus por marca, para uma vitrine variada.
const BRAND_PRIORITY = ['Pirelli', 'Michelin', 'Goodyear', 'Continental', 'Bridgestone', 'Yokohama', 'Firestone', 'Dunlop', 'Hankook'];
const destaque = TIRES.filter((t) => t && t.destaque);
const perBrand: Record<string, number> = {};
const picked: typeof destaque = [];
// Ordena por prioridade de marca, mantendo a ordem original dentro de cada marca
const ordered = [...destaque].sort((a, b) => {
  const ia = BRAND_PRIORITY.indexOf(a.marca);
  const ib = BRAND_PRIORITY.indexOf(b.marca);
  return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib);
});
for (const t of ordered) {
  if (picked.length >= 8) break;
  if ((perBrand[t.marca] ?? 0) >= 2) continue;
  perBrand[t.marca] = (perBrand[t.marca] ?? 0) + 1;
  picked.push(t);
}
const featured = picked.slice(0, 8).map((t) => ({
  id: t.id, slug: t.slug, nome: t.nome, marca: t.marca, linha: t.linha,
  aro: t.aro, medida: t.medida, imagem: t.imagem, categoria: t.categoria,
  destaque: !!t.destaque, novoModelo: !!t.novoModelo,
}));

const filtersFile = `// ARQUIVO GERADO automaticamente por scripts/gen-home-tire-data.mts
// Arvore de filtros (aro -> largura -> alturas) extraida do catalogo.
// Permite o TireSearchBar funcionar SEM importar o catalogo completo (~2 MB) na Home.

export const TIRE_FILTER_TREE: Record<number, Record<number, number[]>> = ${JSON.stringify(filterTree)};

export const TIRE_AROS: number[] = ${JSON.stringify(aros)};
`;

const featuredFile = `// ARQUIVO GERADO automaticamente por scripts/gen-home-tire-data.mts
// 8 pneus mais vendidos (destaque) para a Home, SEM importar o catalogo completo.

export interface FeaturedTire {
  id: number;
  slug: string;
  nome: string;
  marca: string;
  linha: string;
  aro: number;
  medida: string;
  imagem: string;
  categoria: string;
  destaque: boolean;
  novoModelo: boolean;
}

export const FEATURED_TIRES: FeaturedTire[] = ${JSON.stringify(featured, null, 2)};
`;

fs.writeFileSync(path.join(outDir, 'tireFilters.ts'), filtersFile);
fs.writeFileSync(path.join(outDir, 'featuredTires.ts'), featuredFile);

console.log('OK | total:', TIRES.length, '| destaque:', TIRES.filter((t) => t && t.destaque).length, '| aros:', aros.length, '| featured:', featured.length);
console.log('Marcas featured:', featured.map((f) => f.marca).join(', '));
console.log('tireFilters.ts bytes:', fs.statSync(path.join(outDir, 'tireFilters.ts')).size);
