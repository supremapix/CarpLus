"use client";

import { useRef, useEffect } from "react";
import type { LogEntry } from "@/types";
import { CheckCircle, XCircle, Info, ScrollText } from "lucide-react";

interface ImportLogProps {
  logs: LogEntry[];
}

export function ImportLog({ logs }: ImportLogProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs]);

  const getLogIcon = (type: LogEntry["type"]) => {
    switch (type) {
      case "success":
        return <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />;
      case "error":
        return <XCircle className="w-4 h-4 text-destructive flex-shrink-0" />;
      default:
        return <Info className="w-4 h-4 text-muted-foreground flex-shrink-0" />;
    }
  };

  const getLogClassName = (type: LogEntry["type"]) => {
    switch (type) {
      case "success":
        return "text-success";
      case "error":
        return "text-destructive";
      default:
        return "text-muted-foreground";
    }
  };

  return (
    <div className="rounded-lg border border-border bg-card overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/50">
        <ScrollText className="w-4 h-4 text-muted-foreground" />
        <h3 className="text-sm font-medium text-foreground">
          Log de Importacao
        </h3>
        <span className="ml-auto text-xs text-muted-foreground">
          {logs.length} {logs.length === 1 ? "entrada" : "entradas"}
        </span>
      </div>

      <div
        ref={scrollRef}
        className="h-64 overflow-y-auto p-4 font-mono text-xs space-y-1.5"
      >
        {logs.length === 0 ? (
          <p className="text-muted-foreground text-center py-8">
            Nenhum log disponivel. Inicie a importacao para ver o progresso.
          </p>
        ) : (
          logs.map((log, index) => (
            <div
              key={index}
              className="flex items-start gap-2 animate-in fade-in slide-in-from-bottom-1 duration-200"
            >
              <span className="text-muted-foreground whitespace-nowrap">
                [{log.timestamp}]
              </span>
              {getLogIcon(log.type)}
              <span className={`flex-1 ${getLogClassName(log.type)}`}>
                {log.message}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
