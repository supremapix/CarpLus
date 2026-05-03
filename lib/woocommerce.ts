import type { TireProduct, WooConfig, WooProduct } from "@/types";

export function createWooProduct(product: TireProduct): WooProduct {
  const categoryList = product.categories.split(",").map((c) => c.trim());

  return {
    name: product.name,
    type: "simple",
    status: "publish",
    description: product.description,
    short_description:
      product.description.length > 150
        ? product.description.substring(0, 150) + "..."
        : product.description,
    categories: categoryList.map((name) => ({ name })),
    images: [{ src: product.image, name: product.name }],
    attributes: [
      {
        name: "Largura",
        options: [product.attributes.Largura],
        visible: true,
      },
      { name: "Altura", options: [product.attributes.Altura], visible: true },
      { name: "Aro", options: [product.attributes.Aro], visible: true },
      { name: "Marca", options: ["Yokohama"], visible: true },
    ],
    meta_data: [{ key: "_brand", value: "Yokohama" }],
  };
}

export function chunk<T>(array: T[], size: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
}

export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function getTimestamp(): string {
  return new Date().toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}

export function generateCSV(products: TireProduct[]): string {
  const headers = [
    "Type",
    "SKU",
    "Name",
    "Published",
    "Short description",
    "Description",
    "Categories",
    "Images",
    "Attribute 1 name",
    "Attribute 1 value(s)",
    "Attribute 2 name",
    "Attribute 2 value(s)",
    "Attribute 3 name",
    "Attribute 3 value(s)",
    "Attribute 4 name",
    "Attribute 4 value(s)",
  ];

  const rows = products.map((product) => {
    const shortDesc =
      product.description.length > 150
        ? product.description.substring(0, 150) + "..."
        : product.description;

    return [
      "simple",
      `YOKO-${product.id.toString().padStart(4, "0")}`,
      product.name,
      "1",
      `"${shortDesc.replace(/"/g, '""')}"`,
      `"${product.description.replace(/"/g, '""')}"`,
      product.categories,
      product.image,
      "Largura",
      product.attributes.Largura,
      "Altura",
      product.attributes.Altura,
      "Aro",
      product.attributes.Aro,
      "Marca",
      "Yokohama",
    ];
  });

  return [headers.join(","), ...rows.map((row) => row.join(","))].join("\n");
}

export function downloadCSV(products: TireProduct[], filename: string): void {
  const csv = generateCSV(products);
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.click();
  URL.revokeObjectURL(link.href);
}

export function saveConfig(config: WooConfig): void {
  if (typeof window !== "undefined") {
    localStorage.setItem("wooConfig", JSON.stringify(config));
  }
}

export function loadConfig(): WooConfig | null {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem("wooConfig");
    if (saved) {
      return JSON.parse(saved);
    }
  }
  return null;
}

export const DEFAULT_CONFIG: WooConfig = {
  storeUrl: "https://www.carpluspneuseoficina.com.br",
  consumerKey: "",
  consumerSecret: "",
  batchSize: 10,
  delayMs: 1000,
};
