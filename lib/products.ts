import type { TireProduct } from "@/types";
import rawProducts from "./yokohama-products.json";

export const DEFAULT_IMAGE =
  "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-advan-db.webp";

interface RawProduct {
  name: string;
  description: string;
  categories: string;
  image: string;
  attributes: {
    Largura: string;
    Altura: string;
    Aro: string;
  };
}

export const YOKOHAMA_PRODUCTS: TireProduct[] = (
  rawProducts as RawProduct[]
).map((product, index) => ({
  id: index + 1,
  name: product.name,
  description: product.description,
  categories: product.categories,
  image: product.image || DEFAULT_IMAGE,
  attributes: product.attributes,
  status: "pending" as const,
}));

export function getSubcategories(): string[] {
  const subcats = new Set<string>();
  YOKOHAMA_PRODUCTS.forEach((product) => {
    const cats = product.categories.split(",").map((c) => c.trim());
    cats.forEach((cat) => {
      if (cat.startsWith("Yokohama >")) {
        subcats.add(cat.replace("Yokohama > ", ""));
      }
    });
  });
  return Array.from(subcats).sort();
}

export function getAros(): string[] {
  const aros = new Set<string>();
  YOKOHAMA_PRODUCTS.forEach((product) => {
    const cats = product.categories.split(",").map((c) => c.trim());
    cats.forEach((cat) => {
      if (cat.startsWith("Aro ")) {
        aros.add(cat);
      }
    });
  });
  return Array.from(aros).sort((a, b) => {
    const numA = parseInt(a.replace("Aro ", ""));
    const numB = parseInt(b.replace("Aro ", ""));
    return numA - numB;
  });
}

export function getProductStats() {
  const total = YOKOHAMA_PRODUCTS.length;
  const withImage = YOKOHAMA_PRODUCTS.filter(
    (p) => p.image && p.image !== DEFAULT_IMAGE
  ).length;
  const withDefaultImage = total - withImage;

  return {
    total,
    withImage,
    withDefaultImage,
  };
}
