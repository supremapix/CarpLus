const BOT_AGENTS = [
  'googlebot',
  'bingbot',
  'yandex',
  'baiduspider',
  'facebookexternalhit',
  'twitterbot',
  'linkedinbot',
  'slackbot',
  'whatsapp',
  'discordbot',
  'telegrambot',
  'applebot',
  'pinterest',
  'redditbot',
];

const PRERENDER_TIMEOUT_MS = 10000;

export default async function middleware(request) {
  const userAgent = request.headers.get('user-agent')?.toLowerCase() || '';
  const url = new URL(request.url);

  // Kill-switch controlado (E8): quando PRERENDER_ENABLED === 'false', o middleware
  // NÃO envia bots ao Prerender.io — eles caem no HTML físico gerado no build (SSG).
  // Qualquer outro valor (inclusive ausente) preserva o comportamento atual de produção.
  // Isso permite validar o site sem Prerender.io em Preview, sem remover nada.
  const prerenderEnabled = process.env.PRERENDER_ENABLED !== 'false';

  // Check if request is from a bot
  const isBot = BOT_AGENTS.some((bot) => userAgent.includes(bot));

  // Skip prerendering for static files
  const isStaticFile = /\.(js|css|xml|png|jpg|jpeg|gif|ico|svg|webp|woff|woff2|ttf|eot|map)$/i.test(url.pathname);

  // Skip for meta files
  const isMetaFile = /^\/(sitemap\.xml|robots\.txt|llms\.txt|llms-full\.txt|favicon\.png)$/i.test(url.pathname);

  // Skip for assets
  const isAsset = url.pathname.startsWith('/assets/') || url.pathname.startsWith('/images/');

  if (!prerenderEnabled || !isBot || isStaticFile || isMetaFile || isAsset) {
    return;
  }

  const prerenderToken = process.env.PRERENDER_TOKEN;

  // Sem token configurado: não há como pré-renderizar. Cai no SPA normal (index.html)
  // em vez de devolver erro ao bot.
  if (!prerenderToken) {
    console.error('[v0][prerender] PRERENDER_TOKEN ausente. Servindo SPA como fallback para:', url.href);
    return;
  }

  // Rewrite to Prerender.io
  const prerenderUrl = new URL(`https://service.prerender.io/${url.href}`);

  // Timeout de 10s para evitar que renderizações lentas virem 504 para o Googlebot.
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), PRERENDER_TIMEOUT_MS);

  try {
    const response = await fetch(prerenderUrl.toString(), {
      headers: {
        'X-Prerender-Token': prerenderToken,
        'User-Agent': userAgent,
      },
      signal: controller.signal,
    });

    // Qualquer resposta de erro do Prerender (429, 5xx, etc.) não deve ser repassada
    // ao bot. Caímos no SPA normal para o Google ainda conseguir indexar.
    if (!response.ok) {
      console.error(
        `[v0][prerender] Resposta nao-OK (${response.status}) para ${url.href}. Servindo SPA como fallback.`
      );
      return;
    }

    // Reconstrói a resposta apenas com headers seguros, evitando repassar headers como
    // content-encoding/transfer-encoding do Prerender que podem corromper a resposta.
    const body = await response.text();
    const headers = new Headers();
    headers.set('Content-Type', response.headers.get('content-type') || 'text/html; charset=utf-8');
    headers.set('Cache-Control', 'public, max-age=0, must-revalidate');

    return new Response(body, {
      status: 200,
      headers,
    });
  } catch (error) {
    // Timeout (AbortError) ou falha de rede no fetch ao Prerender.
    const reason = error?.name === 'AbortError' ? `timeout apos ${PRERENDER_TIMEOUT_MS}ms` : error?.message || 'erro desconhecido';
    console.error(`[v0][prerender] Falha ao pre-renderizar ${url.href}: ${reason}. Servindo SPA como fallback.`);
    return;
  } finally {
    clearTimeout(timeoutId);
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
