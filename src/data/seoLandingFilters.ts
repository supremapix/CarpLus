// ════════════════════════════════════════════════════════════════
// Filtros sobre o catálogo real de pneus (src/data.ts → TIRES).
// Mantido SEPARADO de seoLanding.ts para que o catálogo completo
// (≈2 MB) NÃO entre no bundle inicial: estas funções só são usadas
// dentro de componentes carregados via lazy/Suspense.
// ════════════════════════════════════════════════════════════════

import { TIRES, Tire } from '../data';

export function getTiresByAro(aro: number): Tire[] {
  return TIRES.filter((t) => t && t.aro === aro);
}

export function getTiresByBrand(marca: string): Tire[] {
  const target = marca.toLowerCase();
  return TIRES.filter((t) => t && t.marca && t.marca.toLowerCase() === target);
}

export function getTiresByMeasure(medida: string): Tire[] {
  const target = medida.toUpperCase().replace(/\s/g, '');
  return TIRES.filter(
    (t) => t && t.medida && t.medida.toUpperCase().replace(/\s/g, '') === target
  );
}

export function getTiresByVehicle(termos: string[]): Tire[] {
  const targets = termos.map((t) => t.toLowerCase());
  return TIRES.filter(
    (t) =>
      t &&
      Array.isArray(t.carros) &&
      t.carros.some((carro) =>
        targets.some((target) => carro.toLowerCase().includes(target))
      )
  );
}

export function getBrandsForTires(tires: Tire[]): string[] {
  return [...new Set(tires.filter((t) => t && t.marca).map((t) => t.marca))].sort();
}

export function getMeasuresForTires(tires: Tire[]): string[] {
  return [...new Set(tires.filter((t) => t && t.medida).map((t) => t.medida))].sort();
}

// Seleção representativa do catálogo para páginas de intenção genéricas
export function getFeaturedTires(limit = 12): Tire[] {
  const featured: Tire[] = [];
  const seen = new Set<number>();
  for (const aro of [14, 15, 16, 17, 18, 13]) {
    for (const tire of getTiresByAro(aro)) {
      if (tire && !seen.has(tire.id)) {
        seen.add(tire.id);
        featured.push(tire);
      }
      if (featured.length >= limit) return featured;
    }
  }
  return featured;
}
