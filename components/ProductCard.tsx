"use client";

import Image from "next/image";
import type { TireProduct } from "@/types";
import {
  CheckCircle,
  XCircle,
  Clock,
  ImageIcon,
} from "lucide-react";

interface ProductCardProps {
  product: TireProduct;
}

export function ProductCard({ product }: ProductCardProps) {
  const categories = product.categories.split(",").map((c) => c.trim());
  const aroCategory = categories.find((c) => c.startsWith("Aro "));
  const subcategory = categories.find((c) => c.startsWith("Yokohama >"));

  const statusConfig = {
    pending: {
      icon: Clock,
      text: "Aguardando importacao",
      className: "bg-muted text-muted-foreground",
    },
    imported: {
      icon: CheckCircle,
      text: "Importado",
      className: "bg-success/20 text-success",
    },
    error: {
      icon: XCircle,
      text: "Erro",
      className: "bg-destructive/20 text-destructive",
    },
  };

  const status = statusConfig[product.status];
  const StatusIcon = status.icon;

  return (
    <div className="flex flex-col rounded-lg border border-border bg-card overflow-hidden hover:border-primary/50 transition-colors">
      <div className="relative aspect-square bg-muted flex items-center justify-center">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-4"
            unoptimized
          />
        ) : (
          <ImageIcon className="w-12 h-12 text-muted-foreground" />
        )}
      </div>

      <div className="flex flex-col gap-3 p-4">
        <h3 className="font-semibold text-sm leading-tight line-clamp-2 text-foreground">
          {product.name}
        </h3>

        <div className="flex flex-wrap gap-1.5">
          {aroCategory && (
            <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-primary/20 text-primary">
              {aroCategory}
            </span>
          )}
          {subcategory && (
            <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
              {subcategory.replace("Yokohama > ", "")}
            </span>
          )}
        </div>

        <div className="flex gap-2 text-xs text-muted-foreground">
          <span className="px-2 py-1 bg-muted rounded">
            L: {product.attributes.Largura}
          </span>
          <span className="px-2 py-1 bg-muted rounded">
            A: {product.attributes.Altura}
          </span>
          <span className="px-2 py-1 bg-muted rounded">
            Aro: {product.attributes.Aro}
          </span>
        </div>

        <div
          className={`flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-medium w-fit ${status.className}`}
        >
          <StatusIcon className="w-3.5 h-3.5" />
          <span>{status.text}</span>
          {product.wooId && (
            <span className="text-muted-foreground">(ID: {product.wooId})</span>
          )}
        </div>
      </div>
    </div>
  );
}
