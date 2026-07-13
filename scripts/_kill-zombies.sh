#!/usr/bin/env bash
# Mata processos de navegador órfãos deixados por execuções interrompidas do
# gerador estático. Usa -x (nome exato do processo) e padrões de --type=... que
# NUNCA aparecem no comando que invoca este script, evitando auto-kill.
pkill -9 -x chrome 2>/dev/null
pkill -9 -x chrome-headless-shell 2>/dev/null
pkill -9 -x chrome_crashpad_handler 2>/dev/null
pkill -9 -f -- '--type=renderer' 2>/dev/null
pkill -9 -f -- '--type=gpu-process' 2>/dev/null
pkill -9 -f -- '--type=utility' 2>/dev/null
pkill -9 -f -- '--type=zygote' 2>/dev/null
exit 0
