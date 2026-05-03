"use client";

import { Package, Settings, Rocket, CircleDot } from "lucide-react";

type Tab = "products" | "config" | "import";

interface SidebarProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
  productCount: number;
}

export function Sidebar({ activeTab, onTabChange, productCount }: SidebarProps) {
  const tabs = [
    {
      id: "products" as Tab,
      label: "Produtos",
      icon: Package,
      badge: productCount.toString(),
    },
    {
      id: "config" as Tab,
      label: "Configuracoes",
      icon: Settings,
    },
    {
      id: "import" as Tab,
      label: "Importar",
      icon: Rocket,
    },
  ];

  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-card border-r border-border flex flex-col z-50">
      {/* Logo */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
            <CircleDot className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="font-bold text-foreground">Carplus Admin</h1>
            <p className="text-xs text-muted-foreground">Importador WooCommerce</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-1">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;

            return (
              <li key={tab.id}>
                <button
                  onClick={() => onTabChange(tab.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                    isActive
                      ? "bg-primary/20 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{tab.label}</span>
                  {tab.badge && (
                    <span
                      className={`ml-auto px-2 py-0.5 text-xs font-medium rounded-full ${
                        isActive
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {tab.badge}
                    </span>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-border">
        <p className="text-xs text-muted-foreground text-center">
          Yokohama Importer v1.0
        </p>
      </div>
    </aside>
  );
}
