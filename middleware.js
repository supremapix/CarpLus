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

const PRERENDER_TOKEN = '5KWu7hUG1fFd1memM52s';

export default function middleware(request) {
  const userAgent = request.headers.get('user-agent')?.toLowerCase() || '';
  const url = new URL(request.url);
  
  // Check if request is from a bot
  const isBot = BOT_AGENTS.some(bot => userAgent.includes(bot));
  
  // Skip prerendering for static files
  const isStaticFile = /\.(js|css|xml|png|jpg|jpeg|gif|ico|svg|webp|woff|woff2|ttf|eot|map)$/i.test(url.pathname);
  
  // Skip for meta files
  const isMetaFile = /^\/(sitemap\.xml|robots\.txt|llms\.txt|llms-full\.txt|favicon\.png)$/i.test(url.pathname);
  
  // Skip for assets
  const isAsset = url.pathname.startsWith('/assets/') || url.pathname.startsWith('/images/');
  
  if (!isBot || isStaticFile || isMetaFile || isAsset) {
    return;
  }
  
  // Rewrite to Prerender.io
  const prerenderUrl = new URL(`https://service.prerender.io/${url.href}`);
  
  return fetch(prerenderUrl.toString(), {
    headers: {
      'X-Prerender-Token': PRERENDER_TOKEN,
      'User-Agent': userAgent,
    },
  });
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
