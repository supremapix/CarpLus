"use client";

import { useState, useEffect, useCallback } from "react";
import type { TireProduct, WooConfig } from "@/types";
import { YOKOHAMA_PRODUCTS } from "@/lib/products";
import { saveConfig, loadConfig, DEFAULT_CONFIG } from "@/lib/woocommerce";
import { Sidebar } from "./Sidebar";
import { ProductsTab } from "./ProductsTab";
import { ConfigForm } from "./ConfigForm";
import { ImportTab } from "./ImportTab";
import { Menu, X } from "lucide-react";

type Tab = "products" | "config" | "import";

export function ImporterApp() {
  const [activeTab, setActiveTab] = useState<Tab>("products");
  const [products, setProducts] = useState<TireProduct[]>(YOKOHAMA_PRODUCTS);
  const [config, setConfig] = useState<WooConfig>(DEFAULT_CONFIG);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedConfig = loadConfig();
    if (savedConfig) {
      setConfig(savedConfig);
    }
  }, []);

  const handleConfigChange = useCallback((newConfig: WooConfig) => {
    setConfig(newConfig);
  }, []);

  const handleConfigSave = useCallback(() => {
    saveConfig(config);
  }, [config]);

  const handleProductUpdate = useCallback(
    (id: number, updates: Partial<TireProduct>) => {
      setProducts((prev) =>
        prev.map((p) => (p.id === id ? { ...p, ...updates } : p))
      );
    },
    []
  );

  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab);
    setSidebarOpen(false);
  };

  if (!mounted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-card border-b border-border px-4 py-3">
        <div className="flex items-center justify-between">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-lg hover:bg-muted transition-colors"
          >
            {sidebarOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
          <h1 className="font-bold text-foreground">Carplus Admin</h1>
          <div className="w-10" />
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`lg:block ${
          sidebarOpen ? "block" : "hidden"
        }`}
      >
        <Sidebar
          activeTab={activeTab}
          onTabChange={handleTabChange}
          productCount={products.length}
        />
      </div>

      {/* Main Content */}
      <main className="lg:ml-64 pt-16 lg:pt-0">
        <div className="p-6 lg:p-8">
          {/* Page Title */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-foreground">
              {activeTab === "products" && "Produtos Yokohama"}
              {activeTab === "config" && "Configuracoes"}
              {activeTab === "import" && "Importar Produtos"}
            </h1>
            <p className="text-muted-foreground mt-1">
              {activeTab === "products" &&
                "Visualize e gerencie os produtos Yokohama para importacao"}
              {activeTab === "config" &&
                "Configure as credenciais da API WooCommerce"}
              {activeTab === "import" &&
                "Importe os produtos para sua loja WooCommerce"}
            </p>
          </div>

          {/* Tab Content */}
          {activeTab === "products" && <ProductsTab products={products} />}

          {activeTab === "config" && (
            <ConfigForm
              config={config}
              onConfigChange={handleConfigChange}
              onSave={handleConfigSave}
            />
          )}

          {activeTab === "import" && (
            <ImportTab
              products={products}
              config={config}
              onProductUpdate={handleProductUpdate}
            />
          )}
        </div>
      </main>
    </div>
  );
}
