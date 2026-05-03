"use client";

import { useState, useMemo } from "react";
import type { TireProduct } from "@/types";
import { ProductCard } from "./ProductCard";
import { getSubcategories, getAros, getProductStats } from "@/lib/products";
import {
  Search,
  Filter,
  ChevronLeft,
  ChevronRight,
  Package,
  Image as ImageIcon,
} from "lucide-react";

interface ProductsTabProps {
  products: TireProduct[];
}

const ITEMS_PER_PAGE = 50;

export function ProductsTab({ products }: ProductsTabProps) {
  const [search, setSearch] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [selectedAro, setSelectedAro] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const subcategories = useMemo(() => getSubcategories(), []);
  const aros = useMemo(() => getAros(), []);
  const stats = useMemo(() => getProductStats(), []);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        search === "" ||
        product.name.toLowerCase().includes(search.toLowerCase());

      const matchesSubcategory =
        selectedSubcategory === "" ||
        product.categories.includes(selectedSubcategory);

      const matchesAro =
        selectedAro === "" || product.categories.includes(selectedAro);

      return matchesSearch && matchesSubcategory && matchesAro;
    });
  }, [products, search, selectedSubcategory, selectedAro]);

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handleSearchChange = (value: string) => {
    setSearch(value);
    setCurrentPage(1);
  };

  const handleSubcategoryChange = (value: string) => {
    setSelectedSubcategory(value);
    setCurrentPage(1);
  };

  const handleAroChange = (value: string) => {
    setSelectedAro(value);
    setCurrentPage(1);
  };

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="flex flex-wrap items-center gap-4 text-sm">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-card border border-border">
          <Package className="w-4 h-4 text-primary" />
          <span className="text-foreground font-medium">{stats.total}</span>
          <span className="text-muted-foreground">produtos</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-card border border-border">
          <ImageIcon className="w-4 h-4 text-success" />
          <span className="text-foreground font-medium">{stats.withImage}</span>
          <span className="text-muted-foreground">com imagem</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-card border border-border">
          <ImageIcon className="w-4 h-4 text-muted-foreground" />
          <span className="text-foreground font-medium">{stats.withDefaultImage}</span>
          <span className="text-muted-foreground">com imagem padrao</span>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Buscar por nome do produto..."
            value={search}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>

        <div className="flex gap-4">
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
            <select
              value={selectedSubcategory}
              onChange={(e) => handleSubcategoryChange(e.target.value)}
              className="pl-10 pr-8 py-2 rounded-lg border border-border bg-card text-foreground appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              <option value="">Todas as Linhas</option>
              {subcategories.map((subcat) => (
                <option key={subcat} value={subcat}>
                  {subcat}
                </option>
              ))}
            </select>
          </div>

          <select
            value={selectedAro}
            onChange={(e) => handleAroChange(e.target.value)}
            className="px-4 py-2 rounded-lg border border-border bg-card text-foreground appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/50"
          >
            <option value="">Todos os Aros</option>
            {aros.map((aro) => (
              <option key={aro} value={aro}>
                {aro}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Results count */}
      <div className="text-sm text-muted-foreground">
        Exibindo {paginatedProducts.length} de {filteredProducts.length} produtos
        {filteredProducts.length !== products.length && (
          <span> (filtrado de {products.length} total)</span>
        )}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {paginatedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 pt-4">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="p-2 rounded-lg border border-border bg-card text-foreground hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-1">
            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              let pageNum;
              if (totalPages <= 5) {
                pageNum = i + 1;
              } else if (currentPage <= 3) {
                pageNum = i + 1;
              } else if (currentPage >= totalPages - 2) {
                pageNum = totalPages - 4 + i;
              } else {
                pageNum = currentPage - 2 + i;
              }

              return (
                <button
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  className={`w-10 h-10 rounded-lg text-sm font-medium transition-colors ${
                    currentPage === pageNum
                      ? "bg-primary text-primary-foreground"
                      : "border border-border bg-card text-foreground hover:bg-muted"
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}
          </div>

          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="p-2 rounded-lg border border-border bg-card text-foreground hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}
