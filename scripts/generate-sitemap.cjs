const fs = require('fs');
const path = require('path');

// Import data - we'll read and parse manually since it's TypeScript
const dataPath = path.join(__dirname, '../src/data.ts');
const dataContent = fs.readFileSync(dataPath, 'utf-8');

// Base URL
const BASE_URL = 'https://www.carpluspneuseoficina.com.br';

// Apenas bairros mais próximos/relevantes ao Portão permanecem no sitemap.
// Espelha src/data/indexableNeighborhoods.ts. Os demais bairros recebem noindex.
const INDEXABLE_NEIGHBORHOOD_SLUGS = [
  'portao', 'agua-verde', 'fazendinha', 'novo-mundo', 'santa-quiteria',
  'vila-izabel', 'capao-raso', 'campo-comprido', 'pinheirinho', 'xaxim',
  'araucaria', 'sao-jose-dos-pinhais', 'fanny', 'lindoia', 'guaira'
];

// Extract slugs from TIRES array
function extractTireSlugs(content) {
  const slugs = [];
  const regex = /slug:\s*['"]([^'"]+)['"]/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    if (match[1].startsWith('pneu-')) {
      slugs.push(match[1]);
    }
  }
  return [...new Set(slugs)]; // Remove duplicates
}

// Extract tire measures (unique largura/perfil/aro combinations)
function extractTireMeasures(content) {
  const measures = new Set();
  // Match patterns like: largura: 175, perfil: 70, ... aro: 13
  const tireBlocks = content.split(/\{[\s\n]+id:/);
  
  for (const block of tireBlocks) {
    const larguraMatch = block.match(/largura:\s*(\d+)/);
    const perfilMatch = block.match(/perfil:\s*(\d+)/);
    const aroMatch = block.match(/aro:\s*(\d+)/);
    
    if (larguraMatch && perfilMatch && aroMatch) {
      measures.add(`${larguraMatch[1]}-${perfilMatch[1]}-${aroMatch[1]}`);
    }
  }
  return [...measures];
}

// Static pages
const staticPages = [
  { url: '/', priority: '1.0', changefreq: 'daily' },
  { url: '/catalogo', priority: '0.9', changefreq: 'daily' },
  { url: '/servicos', priority: '0.9', changefreq: 'weekly' },
  { url: '/quem-somos', priority: '0.8', changefreq: 'monthly' },
  { url: '/contato', priority: '0.8', changefreq: 'monthly' },
  { url: '/como-chegar', priority: '0.8', changefreq: 'monthly' },
  { url: '/faq', priority: '0.7', changefreq: 'weekly' },
  { url: '/bairros', priority: '0.8', changefreq: 'weekly' },
  { url: '/politica-de-privacidade', priority: '0.3', changefreq: 'yearly' },
];

// Services
const services = [
  'troca-de-pneus',
  'alinhamento',
  'balanceamento',
  'cambagem',
  'geometria',
  'suspensao',
  'freios',
  'oleo-e-filtros',
  'injecao-eletronica',
  'troca-de-fluido-de-freio',
  'ar-condicionado',
  'diagnostico-computadorizado',
  'recuperacao-de-rodas',
  'revisao-completa',
];

// Extract neighborhoods from NEIGHBORHOODS array
function extractNeighborhoods(content) {
  const neighborhoods = [];
  // Match name property in NEIGHBORHOODS array
  const neighborhoodsMatch = content.match(/export const NEIGHBORHOODS[^=]*=\s*\[([\s\S]*?)\];/);
  if (neighborhoodsMatch) {
    const nameRegex = /name:\s*["']([^"']+)["']/g;
    let match;
    while ((match = nameRegex.exec(neighborhoodsMatch[1])) !== null) {
      const slug = match[1]
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, '-');
      neighborhoods.push(slug);
    }
  }
  // Mantém apenas os bairros indexáveis no sitemap.
  return [...new Set(neighborhoods)].filter((slug) => INDEXABLE_NEIGHBORHOOD_SLUGS.includes(slug));
}

// Generate sitemap
function generateSitemap() {
  const tireSlugs = extractTireSlugs(dataContent);
  const tireMeasures = extractTireMeasures(dataContent);
  const neighborhoods = extractNeighborhoods(dataContent);
  
  console.log(`Found ${tireSlugs.length} tire slugs`);
  console.log(`Found ${tireMeasures.length} tire measures`);
  console.log(`Found ${services.length} services`);
  console.log(`Found ${neighborhoods.length} neighborhoods`);

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
`;

  // Static pages
  for (const page of staticPages) {
    xml += `  <url>
    <loc>${BASE_URL}${page.url}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
`;
  }

  // Services
  for (const service of services) {
    xml += `  <url>
    <loc>${BASE_URL}/servico/${service}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
`;
  }

  // Neighborhoods
  for (const neighborhood of neighborhoods) {
    xml += `  <url>
    <loc>${BASE_URL}/bairro/${neighborhood}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
`;
  }

  // Tire measures
  for (const measure of tireMeasures) {
    xml += `  <url>
    <loc>${BASE_URL}/pneus/${measure}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
`;
  }

  // Individual tires
  for (const slug of tireSlugs) {
    xml += `  <url>
    <loc>${BASE_URL}/pneu/${slug}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>
`;
  }

  xml += `</urlset>`;

  return xml;
}

// Write sitemap
const sitemap = generateSitemap();
const outputPath = path.join(__dirname, '../public/sitemap.xml');
fs.writeFileSync(outputPath, sitemap);

console.log(`\nSitemap generated successfully at ${outputPath}`);
console.log(`Total URLs: ${sitemap.split('<url>').length - 1}`);
