"use client";

import { useState } from "react";
import type { WooConfig } from "@/types";
import {
  Settings,
  Save,
  CheckCircle,
  XCircle,
  Loader2,
  Wifi,
} from "lucide-react";

interface ConfigFormProps {
  config: WooConfig;
  onConfigChange: (config: WooConfig) => void;
  onSave: () => void;
}

export function ConfigForm({ config, onConfigChange, onSave }: ConfigFormProps) {
  const [testing, setTesting] = useState(false);
  const [testResult, setTestResult] = useState<"success" | "error" | null>(null);
  const [testMessage, setTestMessage] = useState("");

  const handleTestConnection = async () => {
    if (!config.consumerKey || !config.consumerSecret) {
      setTestResult("error");
      setTestMessage("Consumer Key e Consumer Secret sao obrigatorios");
      return;
    }

    setTesting(true);
    setTestResult(null);

    try {
      const params = new URLSearchParams({
        storeUrl: config.storeUrl,
        ck: config.consumerKey,
        cs: config.consumerSecret,
      });

      const response = await fetch(`/api/woo/system_status?${params}`);

      if (response.ok) {
        setTestResult("success");
        setTestMessage("Conexao estabelecida com sucesso!");
      } else {
        const data = await response.json();
        setTestResult("error");
        setTestMessage(data.message || "Falha na conexao. Verifique as credenciais.");
      }
    } catch {
      setTestResult("error");
      setTestMessage("Erro de rede. Verifique a URL da loja.");
    } finally {
      setTesting(false);
    }
  };

  const handleSave = () => {
    onSave();
    setTestResult("success");
    setTestMessage("Configuracoes salvas com sucesso!");
    setTimeout(() => {
      setTestResult(null);
      setTestMessage("");
    }, 3000);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="rounded-lg border border-border bg-card p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-primary/20">
            <Settings className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-foreground">
              Configuracoes WooCommerce
            </h2>
            <p className="text-sm text-muted-foreground">
              Configure as credenciais da API REST do WooCommerce
            </p>
          </div>
        </div>

        <div className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">
              URL da Loja
            </label>
            <input
              type="url"
              value={config.storeUrl}
              onChange={(e) =>
                onConfigChange({ ...config, storeUrl: e.target.value })
              }
              className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              placeholder="https://sua-loja.com.br"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">
              Consumer Key
            </label>
            <input
              type="text"
              value={config.consumerKey}
              onChange={(e) =>
                onConfigChange({ ...config, consumerKey: e.target.value })
              }
              className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 font-mono text-sm"
              placeholder="ck_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">
              Consumer Secret
            </label>
            <input
              type="password"
              value={config.consumerSecret}
              onChange={(e) =>
                onConfigChange({ ...config, consumerSecret: e.target.value })
              }
              className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 font-mono text-sm"
              placeholder="cs_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
            />
            <p className="mt-1.5 text-xs text-muted-foreground">
              Gere as credenciais em: WooCommerce &gt; Configuracoes &gt; Avancado &gt; API REST
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">
                Tamanho do Lote
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="range"
                  min="1"
                  max="50"
                  value={config.batchSize}
                  onChange={(e) =>
                    onConfigChange({
                      ...config,
                      batchSize: parseInt(e.target.value),
                    })
                  }
                  className="flex-1 accent-primary"
                />
                <span className="w-10 text-center text-sm font-mono text-foreground">
                  {config.batchSize}
                </span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">
                Delay entre Lotes (ms)
              </label>
              <input
                type="number"
                min="100"
                max="5000"
                step="100"
                value={config.delayMs}
                onChange={(e) =>
                  onConfigChange({
                    ...config,
                    delayMs: parseInt(e.target.value),
                  })
                }
                className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
          </div>

          {testResult && (
            <div
              className={`flex items-center gap-2 p-3 rounded-lg ${
                testResult === "success"
                  ? "bg-success/20 text-success"
                  : "bg-destructive/20 text-destructive"
              }`}
            >
              {testResult === "success" ? (
                <CheckCircle className="w-4 h-4" />
              ) : (
                <XCircle className="w-4 h-4" />
              )}
              <span className="text-sm">{testMessage}</span>
            </div>
          )}

          <div className="flex gap-3 pt-2">
            <button
              onClick={handleTestConnection}
              disabled={testing}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-secondary text-secondary-foreground hover:bg-muted transition-colors disabled:opacity-50"
            >
              {testing ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Wifi className="w-4 h-4" />
              )}
              Testar Conexao
            </button>

            <button
              onClick={handleSave}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              <Save className="w-4 h-4" />
              Salvar Configuracoes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
