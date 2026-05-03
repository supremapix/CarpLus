export interface TireProduct {
  id: number;
  name: string;
  description: string;
  categories: string;
  image: string;
  attributes: {
    Largura: string;
    Altura: string;
    Aro: string;
  };
  status: "pending" | "imported" | "error";
  wooId?: number;
  errorMessage?: string;
}

export interface WooConfig {
  storeUrl: string;
  consumerKey: string;
  consumerSecret: string;
  batchSize: number;
  delayMs: number;
}

export interface ImportStats {
  imported: number;
  errors: number;
  pending: number;
  total: number;
}

export interface LogEntry {
  timestamp: string;
  type: "success" | "error" | "info";
  message: string;
}

export interface WooProduct {
  name: string;
  type: string;
  status: string;
  description: string;
  short_description: string;
  categories: { name: string }[];
  images: { src: string; name: string }[];
  attributes: {
    name: string;
    options: string[];
    visible: boolean;
  }[];
  meta_data: { key: string; value: string }[];
}
