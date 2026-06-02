import fs from 'fs';
import path from 'path';

// Read data.ts to extract all tires
const dataPath = path.join(process.cwd(), 'src/data.ts');
const dataContent = fs.readFileSync(dataPath, 'utf-8');

// Extract all tire slugs
const slugMatches = dataContent.matchAll(/slug:\s*["']([^"']+)["']/g);
const tireSlugs = [...slugMatches].map(m => m[1]).filter(Boolean);

// Remove duplicates
const uniqueTireSlugs = [...new Set(tireSlugs)];

console.log(`Found ${uniqueTireSlugs.length} unique tire slugs`);

// Extract SEO landing page slugs from seoLanding.ts
const seoLandingPath = path.join(process.cwd(), 'src/data/seoLanding.ts');
const seoLandingContent = fs.readFileSync(seoLandingPath, 'utf-8');
const seoSlugMatches = seoLandingContent.matchAll(/slug:\s*["']([^"']+)["']/g);
const seoLandingSlugs = [...new Set([...seoSlugMatches].map(m => m[1]).filter(Boolean))];
console.log(`Found ${seoLandingSlugs.length} SEO landing page slugs`);

// Base URL
const baseUrl = 'https://www.carpluspneuseoficina.com.br';

// Static pages with priorities
const staticPages = [
  { url: '/', changefreq: 'daily', priority: '1.0' },
  { url: '/pneus', changefreq: 'daily', priority: '0.9' },
  { url: '/pneus-curitiba', changefreq: 'weekly', priority: '0.9' },
  { url: '/loja-de-pneus-curitiba-perto-de-mim', changefreq: 'weekly', priority: '0.9' },
  { url: '/servicos', changefreq: 'weekly', priority: '0.9' },
  { url: '/quem-somos', changefreq: 'monthly', priority: '0.8' },
  { url: '/contato', changefreq: 'monthly', priority: '0.8' },
  { url: '/como-chegar', changefreq: 'monthly', priority: '0.8' },
  { url: '/faq', changefreq: 'weekly', priority: '0.7' },
  { url: '/bairros', changefreq: 'weekly', priority: '0.8' },
  { url: '/politica-de-privacidade', changefreq: 'yearly', priority: '0.3' },
  { url: '/trocas-e-devolucoes', changefreq: 'yearly', priority: '0.3' },
  { url: '/sitemap', changefreq: 'weekly', priority: '0.5' },
];

// Services
const services = [
  'troca-de-pneus', 'alinhamento', 'balanceamento', 'cambagem', 'geometria',
  'suspensao', 'freios', 'oleo-e-filtros', 'injecao-eletronica', 
  'troca-de-fluido-de-freio', 'ar-condicionado', 'diagnostico-computadorizado',
  'recuperacao-de-rodas', 'revisao-completa',
  // New services from services.ts
  'troca-de-pneus', 'alinhamento-3d', 'balanceamento-computadorizado', 'calibragem-nitrogenio',
  'rodizio-pneus', 'inspecao-pneus', 'reparo-pneu-furado', 'desempeno-rodas',
  'polimento-rodas', 'pintura-rodas', 'cambagem', 'caster',
  'pastilhas-freio', 'discos-freio', 'fluido-freio', 'freio-mao', 'abs-sensor',
  'amortecedores', 'molas', 'buchas', 'bieletas', 'pivos', 'terminais-direcao',
  'troca-oleo', 'filtro-oleo', 'filtro-ar', 'filtro-combustivel', 'filtro-cabine',
  'correia-dentada', 'velas-ignicao', 'bateria', 'alternador', 'motor-partida',
  'farol-lanterna', 'som-automotivo', 'central-multimidia', 'sensor-estacionamento', 'camera-re',
  'higienizacao-ar', 'vitrificacao', 'polimento-farol', 'insulfilm', 'envelopamento',
  'preparacao-track-day', 'upgrade-performance', 'inspecao-pre-compra', 'socorro-guincho', 'revisao-viagem'
];

// Remove duplicates from services
const uniqueServices = [...new Set(services)];

// Neighborhoods (bairros de Curitiba)
const bairros = [
  'portao', 'agua-verde', 'fazendinha', 'santa-quiteria', 'vila-izabel',
  'novo-mundo', 'capao-raso', 'sitio-cercado', 'xaxim', 'pinheirinho',
  'cidade-industrial', 'tatuquara', 'boqueirao', 'hauer', 'fanny',
  'lindoia', 'parolin', 'guaira', 'jardim-botanico', 'alto-da-gloria',
  'centro', 'reboucas', 'prado-velho', 'cristo-rei', 'cajuru',
  'uberaba', 'jardim-das-americas', 'guabirotuba', 'alto-da-xv', 'hugo-lange',
  'juveve', 'cabral', 'ahu', 'bom-retiro', 'centro-civico',
  'sao-francisco', 'merces', 'bigorrilho', 'champagnat', 'batel',
  'seminario', 'campo-comprido', 'mossungue', 'santo-inacio', 'cascatinha',
  'sao-joao', 'vista-alegre', 'pilarzinho', 'sao-lourenco', 'boa-vista',
  'bacacheri', 'tingui', 'atuba', 'bairro-alto', 'taruma',
  'santa-candida', 'cachoeira', 'barreirinha', 'abranches', 'taboao',
  'lamenha-pequena', 'santa-felicidade', 'butiatuvinha', 'orleans', 'sao-braz',
  'augusta', 'riviera', 'campo-de-santana', 'caximba', 'ganchinho', 'umbara'
];

// Popular tire measures
const popularMeasures = [
  '175-70-13', '175-80-14', '185-55-15', '185-60-15', '185-60-14',
  '185-65-14', '195-55-15', '195-60-15', '205-45-17', '185-65-15',
  '205-55-16', '225-45-17', '195-65-15', '215-50-17', '235-60-18',
  '245-45-18', '175-65-14', '225-65-17', '265-70-16', '225-50-17',
  '235-55-19', '235-50-18', '245-50-18', '225-40-18', '245-40-18',
  '255-35-18', '275-35-18', '225-55-17', '205-50-17', '225-45-18',
  '255-40-18', '275-40-18', '225-40-19', '245-40-19', '255-35-19',
  '275-35-19', '255-50-19', '275-45-19', '225-55-18', '235-45-18',
  '245-45-19', '265-50-19', '275-55-19', '285-45-19', '235-40-19',
  '245-35-19', '255-30-19', '275-30-19', '285-30-19', '225-35-19',
  '175-70-14', '215-65-16', '245-45-17', '245-40-17', '255-35-20',
  '245-40-20', '245-45-20'
];

// Data da última atualização (para <lastmod>)
const lastmod = new Date().toISOString().split('T')[0];

// Generate sitemap XML
let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
`;

// Add static pages
for (const page of staticPages) {
  sitemap += `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
`;
}

// Add services
for (const service of uniqueServices) {
  sitemap += `  <url>
    <loc>${baseUrl}/servico/${service}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
`;
}

// Add bairros
for (const bairro of bairros) {
  sitemap += `  <url>
    <loc>${baseUrl}/bairro/${bairro}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
`;
}

// Add tire measures
for (const measure of popularMeasures) {
  sitemap += `  <url>
    <loc>${baseUrl}/pneu-medida/${measure}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
`;
}

// Add SEO landing pages (aro, marca, veiculo, combos locais)
for (const slug of seoLandingSlugs) {
  sitemap += `  <url>
    <loc>${baseUrl}/${slug}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
`;
}

// Add ALL individual tires
console.log(`Adding ${uniqueTireSlugs.length} individual tires to sitemap...`);
for (const slug of uniqueTireSlugs) {
  sitemap += `  <url>
    <loc>${baseUrl}/pneu/${slug}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>
`;
}

sitemap += `</urlset>`;

// Write sitemap
const sitemapPath = path.join(process.cwd(), 'public/sitemap.xml');
fs.writeFileSync(sitemapPath, sitemap);

console.log(`Sitemap generated with:`);
console.log(`- ${staticPages.length} static pages`);
console.log(`- ${uniqueServices.length} services`);
console.log(`- ${bairros.length} neighborhoods`);
console.log(`- ${popularMeasures.length} tire measures`);
console.log(`- ${seoLandingSlugs.length} SEO landing pages`);
console.log(`- ${uniqueTireSlugs.length} individual tires`);
console.log(`Total URLs: ${staticPages.length + uniqueServices.length + bairros.length + popularMeasures.length + seoLandingSlugs.length + uniqueTireSlugs.length}`);
console.log(`Sitemap saved to: ${sitemapPath}`);
