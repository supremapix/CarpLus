import { useEffect } from 'react';

/**
 * AnalyticsLoader — estrategia "Delayed Analytics".
 *
 * Nenhum script de rastreamento carrega durante o load inicial da pagina.
 * O contedor do Google Tag Manager (GTM-W4SBDRGD) — que gerencia Google Ads,
 * Facebook Pixel, Microsoft Clarity e Bing Ads — e injetado apenas apos a
 * PRIMEIRA destas condicoes:
 *   - 5 segundos decorridos, OU
 *   - primeiro scroll do usuario, OU
 *   - primeiro clique/toque do usuario.
 *
 * A injecao real usa requestIdleCallback quando disponivel, para nao competir
 * com a thread principal durante interacoes.
 *
 * Conversoes nao sao perdidas: o dataLayer e criado imediatamente, entao
 * qualquer push feito antes do carregamento do GTM fica na fila e e processado
 * assim que o contedor carrega.
 */

const GTM_ID = 'GTM-W4SBDRGD';
const DELAY_MS = 5000;

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

function injectGTM() {
  if (typeof window === 'undefined') return;
  // Evita injecao dupla.
  if (document.getElementById('gtm-script')) return;

  // Garante a fila do dataLayer e marca o inicio (preserva eventos enfileirados antes).
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });

  const script = document.createElement('script');
  script.id = 'gtm-script';
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
  document.head.appendChild(script);
}

function scheduleInjection() {
  const ric = (window as Window & {
    requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
  }).requestIdleCallback;

  if (typeof ric === 'function') {
    ric(() => injectGTM(), { timeout: 2000 });
  } else {
    injectGTM();
  }
}

export default function AnalyticsLoader() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Cria a fila do dataLayer imediatamente para nao perder conversoes
    // disparadas antes do carregamento efetivo do GTM.
    window.dataLayer = window.dataLayer || [];

    let loaded = false;
    let timerId: number | undefined;

    const events: Array<keyof WindowEventMap> = ['scroll', 'click', 'touchstart', 'keydown'];

    const cleanup = () => {
      if (timerId !== undefined) clearTimeout(timerId);
      events.forEach((evt) => window.removeEventListener(evt, trigger));
    };

    const trigger = () => {
      if (loaded) return;
      loaded = true;
      cleanup();
      scheduleInjection();
    };

    // Gatilho 1: tempo (5s).
    timerId = window.setTimeout(trigger, DELAY_MS);

    // Gatilhos 2/3: primeira interacao (scroll, clique, toque, tecla).
    events.forEach((evt) =>
      window.addEventListener(evt, trigger, { once: true, passive: true })
    );

    return cleanup;
  }, []);

  return null;
}
