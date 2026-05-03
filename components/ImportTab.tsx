"use client";

import { useState, useRef, useCallback } from "react";
import type { TireProduct, WooConfig, ImportStats, LogEntry } from "@/types";
import { ProgressPanel } from "./ProgressPanel";
import { ImportLog } from "./ImportLog";
import {
  createWooProduct,
  chunk,
  delay,
  getTimestamp,
  downloadCSV,
} from "@/lib/woocommerce";
import {
  Play,
  Pause,
  Square,
  Download,
  Rocket,
  AlertTriangle,
} from "lucide-react";

interface ImportTabProps {
  products: TireProduct[];
  config: WooConfig;
  onProductUpdate: (id: number, updates: Partial<TireProduct>) => void;
}

export function ImportTab({
  products,
  config,
  onProductUpdate,
}: ImportTabProps) {
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [stats, setStats] = useState<ImportStats>({
    imported: products.filter((p) => p.status === "imported").length,
    errors: products.filter((p) => p.status === "error").length,
    pending: products.filter((p) => p.status === "pending").length,
    total: products.length,
  });

  const abortRef = useRef(false);
  const pauseRef = useRef(false);

  const addLog = useCallback(
    (type: LogEntry["type"], message: string) => {
      setLogs((prev) => {
        const newLogs = [...prev, { timestamp: getTimestamp(), type, message }];
        return newLogs.slice(-100);
      });
    },
    []
  );

  const updateStats = useCallback(() => {
    setStats({
      imported: products.filter((p) => p.status === "imported").length,
      errors: products.filter((p) => p.status === "error").length,
      pending: products.filter((p) => p.status === "pending").length,
      total: products.length,
    });
  }, [products]);

  const importProduct = async (product: TireProduct): Promise<boolean> => {
    const wooProduct = createWooProduct(product);

    const params = new URLSearchParams({
      storeUrl: config.storeUrl,
      ck: config.consumerKey,
      cs: config.consumerSecret,
    });

    const response = await fetch(`/api/woo/products?${params}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(wooProduct),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Erro desconhecido");
    }

    const result = await response.json();
    return result.id;
  };

  const startImport = async () => {
    if (!config.consumerKey || !config.consumerSecret) {
      addLog("error", "Configure as credenciais do WooCommerce antes de importar");
      return;
    }

    setIsRunning(true);
    setIsPaused(false);
    abortRef.current = false;
    pauseRef.current = false;

    const pendingProducts = products.filter((p) => p.status === "pending");

    if (pendingProducts.length === 0) {
      addLog("info", "Nao ha produtos pendentes para importar");
      setIsRunning(false);
      return;
    }

    addLog("info", `Iniciando importacao de ${pendingProducts.length} produtos...`);

    const batches = chunk(pendingProducts, config.batchSize);

    for (let batchIndex = 0; batchIndex < batches.length; batchIndex++) {
      if (abortRef.current) {
        addLog("info", "Importacao cancelada pelo usuario");
        break;
      }

      while (pauseRef.current && !abortRef.current) {
        await delay(100);
      }

      if (abortRef.current) {
        addLog("info", "Importacao cancelada pelo usuario");
        break;
      }

      const batch = batches[batchIndex];
      addLog(
        "info",
        `Processando lote ${batchIndex + 1}/${batches.length} (${batch.length} produtos)`
      );

      await Promise.allSettled(
        batch.map(async (product) => {
          if (abortRef.current) return;

          try {
            const wooId = await importProduct(product);
            onProductUpdate(product.id, { status: "imported", wooId });
            addLog("success", `Importado: ${product.name} (ID: ${wooId})`);
          } catch (err) {
            const errorMessage =
              err instanceof Error ? err.message : "Erro desconhecido";
            onProductUpdate(product.id, {
              status: "error",
              errorMessage,
            });
            addLog("error", `Erro: ${product.name} - ${errorMessage}`);
          }
        })
      );

      updateStats();

      if (batchIndex < batches.length - 1 && !abortRef.current) {
        await delay(config.delayMs);
      }
    }

    if (!abortRef.current) {
      addLog("info", "Importacao concluida!");
    }

    setIsRunning(false);
    setIsPaused(false);
    updateStats();
  };

  const pauseImport = () => {
    pauseRef.current = !pauseRef.current;
    setIsPaused(pauseRef.current);
    addLog("info", pauseRef.current ? "Importacao pausada" : "Importacao retomada");
  };

  const cancelImport = () => {
    abortRef.current = true;
    pauseRef.current = false;
    setIsPaused(false);
  };

  const handleExportCSV = () => {
    downloadCSV(products, `yokohama-products-${Date.now()}.csv`);
    addLog("info", "CSV exportado com sucesso");
  };

  const pendingCount = products.filter((p) => p.status === "pending").length;
  const hasCredentials = config.consumerKey && config.consumerSecret;

  return (
    <div className="space-y-6">
      {/* Summary Card */}
      <div className="rounded-lg border border-border bg-card p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 rounded-full bg-primary/20">
            <Rocket className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-foreground">
              Importador WooCommerce
            </h2>
            <p className="text-muted-foreground">
              {pendingCount} produtos prontos para importar
            </p>
          </div>
        </div>

        {!hasCredentials && (
          <div className="flex items-center gap-2 p-3 mb-4 rounded-lg bg-warning/20 text-warning">
            <AlertTriangle className="w-4 h-4" />
            <span className="text-sm">
              Configure as credenciais do WooCommerce na aba Configuracoes antes de iniciar
            </span>
          </div>
        )}

        <div className="flex flex-wrap gap-3">
          {!isRunning ? (
            <button
              onClick={startImport}
              disabled={!hasCredentials || pendingCount === 0}
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-success text-success-foreground hover:bg-success/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
            >
              <Play className="w-5 h-5" />
              Iniciar Importacao
            </button>
          ) : (
            <>
              <button
                onClick={pauseImport}
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-warning text-warning-foreground hover:bg-warning/90 transition-colors font-medium"
              >
                <Pause className="w-5 h-5" />
                {isPaused ? "Retomar" : "Pausar"}
              </button>

              <button
                onClick={cancelImport}
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-destructive text-destructive-foreground hover:bg-destructive/90 transition-colors font-medium"
              >
                <Square className="w-5 h-5" />
                Cancelar
              </button>
            </>
          )}

          <button
            onClick={handleExportCSV}
            className="flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-secondary text-secondary-foreground hover:bg-muted transition-colors font-medium"
          >
            <Download className="w-5 h-5" />
            Exportar CSV
          </button>
        </div>
      </div>

      {/* Progress */}
      <ProgressPanel stats={stats} isRunning={isRunning && !isPaused} />

      {/* Log */}
      <ImportLog logs={logs} />
    </div>
  );
}
