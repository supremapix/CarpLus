"use client";

import type { ImportStats } from "@/types";
import { CheckCircle, XCircle, Clock, Package } from "lucide-react";

interface ProgressPanelProps {
  stats: ImportStats;
  isRunning: boolean;
}

export function ProgressPanel({ stats, isRunning }: ProgressPanelProps) {
  const percentage = Math.round(
    ((stats.imported + stats.errors) / stats.total) * 100
  );

  return (
    <div className="rounded-lg border border-border bg-card p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-foreground">
          Progresso da Importacao
        </h3>
        <span className="text-2xl font-bold text-foreground">{percentage}%</span>
      </div>

      <div className="w-full h-3 bg-muted rounded-full overflow-hidden mb-4">
        <div
          className="h-full bg-primary transition-all duration-300 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>

      <div className="flex items-center justify-center text-sm text-muted-foreground mb-6">
        <span>
          {stats.imported + stats.errors} de {stats.total} produtos processados
        </span>
        {isRunning && (
          <span className="ml-2 inline-flex items-center gap-1 text-primary">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Importando...
          </span>
        )}
      </div>

      <div className="grid grid-cols-4 gap-4">
        <div className="flex flex-col items-center gap-1 p-3 rounded-lg bg-muted/50">
          <Package className="w-5 h-5 text-muted-foreground" />
          <span className="text-xl font-bold text-foreground">{stats.total}</span>
          <span className="text-xs text-muted-foreground">Total</span>
        </div>

        <div className="flex flex-col items-center gap-1 p-3 rounded-lg bg-success/10">
          <CheckCircle className="w-5 h-5 text-success" />
          <span className="text-xl font-bold text-success">{stats.imported}</span>
          <span className="text-xs text-muted-foreground">Importados</span>
        </div>

        <div className="flex flex-col items-center gap-1 p-3 rounded-lg bg-destructive/10">
          <XCircle className="w-5 h-5 text-destructive" />
          <span className="text-xl font-bold text-destructive">{stats.errors}</span>
          <span className="text-xs text-muted-foreground">Erros</span>
        </div>

        <div className="flex flex-col items-center gap-1 p-3 rounded-lg bg-muted/50">
          <Clock className="w-5 h-5 text-muted-foreground" />
          <span className="text-xl font-bold text-foreground">{stats.pending}</span>
          <span className="text-xs text-muted-foreground">Pendentes</span>
        </div>
      </div>
    </div>
  );
}
