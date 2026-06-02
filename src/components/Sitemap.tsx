import Navbar from './Navbar';
import Footer from './Footer';
import { NEIGHBORHOODS, CITIES, POPULAR_REGIONS, SERVICES, TIRES } from '../data';
import { ARO_PAGES, BRAND_PAGES, VEHICLE_PAGES, LOCAL_COMBO_PAGES } from '../data/seoLanding';
import { Link } from 'react-router-dom';
import { MapPin, Wrench, Globe, ChevronRight, Circle, Car, Tag, Navigation } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

// Get unique brands from TIRES
const TIRE_BRANDS = [...new Set(TIRES.filter(t => t && t.marca).map(t => t.marca))].sort();

// Get popular/featured tires (first 50 of each brand)
const FEATURED_TIRES = TIRE_BRANDS.flatMap(brand => 
  TIRES.filter(t => t && t.marca === brand).slice(0, 30)
);

export default function Sitemap() {
  useSEO({
    title: 'Mapa do Site | Carplus Pneus e Oficina Mecânica - Pneus e Servicos em Curitiba',
    description: 'Navegue por todas as paginas do site Carplus Pneus e Oficina Mecânica. Encontre pneus por marca, servicos automotivos, bairros atendidos em Curitiba e regiao metropolitana.',
    canonical: 'https://www.carpluspneuseoficina.com.br/sitemap',
    schemaJSON: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Mapa do Site - Carplus Pneus e Oficina Mecânica",
      "description": "Indice completo de todas as paginas do site Carplus Pneus e Oficina Mecânica",
      "url": "https://www.carpluspneuseoficina.com.br/sitemap",
      "mainEntity": {
        "@type": "ItemList",
        "numberOfItems": TIRES.length + SERVICES.length + NEIGHBORHOODS.length,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Catalogo de Pneus", "url": "https://www.carpluspneuseoficina.com.br/pneus" },
          { "@type": "ListItem", "position": 2, "name": "Servicos", "url": "https://www.carpluspneuseoficina.com.br/servicos" },
          { "@type": "ListItem", "position": 3, "name": "Bairros Atendidos", "url": "https://www.carpluspneuseoficina.com.br/bairros" }
        ]
      }
    }
  });

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <main className="pt-32 md:pt-36 pb-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-16 text-center">
            <h1 className="text-6xl mb-4 italic uppercase tracking-tighter">Sitemap <span className="text-primary italic">Carplus</span></h1>
            <p className="text-xl text-gray-500">Mapa completo de navegação do site e regiões atendidas.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Institucional */}
            <div className="space-y-6">
               <h2 className="text-2xl font-bold uppercase tracking-tight flex items-center gap-2 border-b-2 border-primary pb-2">
                 <Globe size={24} className="text-primary" /> Institucional
               </h2>
               <ul className="space-y-3 font-medium text-gray-600">
                  <li><Link to="/" className="hover:text-primary transition-colors">Pagina Inicial</Link></li>
                  <li><Link to="/quem-somos" className="hover:text-primary transition-colors">Quem Somos</Link></li>
                  <li><Link to="/contato" className="hover:text-primary transition-colors">Contato</Link></li>
                  <li><Link to="/faq" className="hover:text-primary transition-colors">Perguntas Frequentes (FAQ)</Link></li>
                  <li><Link to="/politica-de-privacidade" className="hover:text-primary transition-colors">Politica de Privacidade</Link></li>
                  <li><Link to="/trocas-e-devolucoes" className="hover:text-primary transition-colors">Trocas e Devolucoes</Link></li>
               </ul>
            </div>

            {/* Serviços */}
            <div className="space-y-6">
               <h2 className="text-2xl font-bold uppercase tracking-tight flex items-center gap-2 border-b-2 border-primary pb-2">
                 <Wrench size={24} className="text-primary" /> Nossos Servicos
               </h2>
               <ul className="space-y-3 font-medium text-gray-600">
                  {SERVICES.map(s => (
                     <li key={s.slug}><Link to={`/servico/${s.slug}`} className="hover:text-primary transition-colors">{s.title}</Link></li>
                  ))}
               </ul>
            </div>

            {/* Pneus por Marca */}
            <div className="space-y-6">
               <h2 className="text-2xl font-bold uppercase tracking-tight flex items-center gap-2 border-b-2 border-primary pb-2">
                 <Circle size={24} className="text-primary" /> Pneus por Marca
               </h2>
               <ul className="space-y-3 font-medium text-gray-600">
                  <li><Link to="/pneus" className="hover:text-primary transition-colors font-bold">Ver Todos os Pneus</Link></li>
                  {TIRE_BRANDS.map(brand => (
                     <li key={brand}>
                        <Link 
                           to={`/pneus?marca=${brand.toLowerCase()}`} 
                           className="hover:text-primary transition-colors flex items-center gap-2"
                        >
                           <ChevronRight size={12} className="text-primary" />
                           Pneus {brand}
                        </Link>
                     </li>
                  ))}
               </ul>
            </div>

            {/* Bairros Oficiais */}
            <div className="space-y-6">
               <h2 className="text-2xl font-bold uppercase tracking-tight flex items-center gap-2 border-b-2 border-primary pb-2">
                 <MapPin size={24} className="text-primary" /> Bairros Atendidos
               </h2>
               <div className="grid grid-cols-1 gap-y-2 text-sm text-gray-500 max-h-[400px] overflow-y-auto pr-2">
                  {NEIGHBORHOODS.slice(0, 20).map(n => (
                     <Link key={n.name} to={`/bairro/${n.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '-')}`} className="hover:text-primary truncate">
                        {n.name}
                     </Link>
                  ))}
                  <Link to="/bairros" className="text-primary font-bold mt-2">Ver todos os bairros...</Link>
               </div>
            </div>
          </div>

          {/* Páginas de Pneus (SEO Landing Pages) */}
          <div className="mt-16 pt-12 border-t border-gray-100">
            <h2 className="text-2xl font-bold uppercase tracking-tight flex items-center gap-2 border-b-2 border-primary pb-2 mb-8">
              <Circle size={24} className="text-primary" /> Paginas de Pneus por Categoria
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {/* Por Aro */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold uppercase tracking-widest text-gray-400 flex items-center gap-2">
                  <Circle size={18} className="text-primary" /> Pneus por Aro
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  {ARO_PAGES.map(p => (
                    <li key={p.slug}>
                      <Link to={`/${p.slug}`} className="hover:text-primary transition-colors flex items-center gap-1">
                        <ChevronRight size={12} className="text-primary" /> Pneu Aro {p.aro}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Por Marca */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold uppercase tracking-widest text-gray-400 flex items-center gap-2">
                  <Tag size={18} className="text-primary" /> Pneus por Marca
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  {BRAND_PAGES.map(p => (
                    <li key={p.slug}>
                      <Link to={`/${p.slug}`} className="hover:text-primary transition-colors flex items-center gap-1">
                        <ChevronRight size={12} className="text-primary" /> Pneu {p.marca}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Por Veículo */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold uppercase tracking-widest text-gray-400 flex items-center gap-2">
                  <Car size={18} className="text-primary" /> Pneus por Veiculo
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  {VEHICLE_PAGES.map(p => (
                    <li key={p.slug}>
                      <Link to={`/${p.slug}`} className="hover:text-primary transition-colors flex items-center gap-1">
                        <ChevronRight size={12} className="text-primary" /> Pneu {p.nome}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Páginas Locais */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold uppercase tracking-widest text-gray-400 flex items-center gap-2">
                  <Navigation size={18} className="text-primary" /> Paginas Locais
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>
                    <Link to="/pneus-curitiba" className="hover:text-primary transition-colors flex items-center gap-1 font-bold">
                      <ChevronRight size={12} className="text-primary" /> Pneus em Curitiba (Hub)
                    </Link>
                  </li>
                  <li>
                    <Link to="/loja-de-pneus-curitiba-perto-de-mim" className="hover:text-primary transition-colors flex items-center gap-1 font-bold">
                      <ChevronRight size={12} className="text-primary" /> Loja de Pneus Perto de Mim
                    </Link>
                  </li>
                  <li>
                    <Link to="/centro-automotivo-portao" className="hover:text-primary transition-colors flex items-center gap-1">
                      <ChevronRight size={12} className="text-primary" /> Centro Automotivo Portao
                    </Link>
                  </li>
                  {LOCAL_COMBO_PAGES.map(p => (
                    <li key={p.slug}>
                      <Link to={`/${p.slug}`} className="hover:text-primary transition-colors flex items-center gap-1">
                        <ChevronRight size={12} className="text-primary" /> {p.h1}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Full Bairros Section */}
          <div className="mt-16 pt-12 border-t border-gray-100">
            <h2 className="text-2xl font-bold uppercase tracking-tight flex items-center gap-2 border-b-2 border-primary pb-2 mb-8">
              <MapPin size={24} className="text-primary" /> Todos os Bairros e Regioes Atendidas
            </h2>
            
            <h3 className="text-lg font-bold uppercase tracking-widest text-gray-400 mb-4">Bairros de Curitiba</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-2 text-sm text-gray-500 mb-8">
               {NEIGHBORHOODS.map(n => (
                  <Link key={n.name} to={`/bairro/${n.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '-')}`} className="hover:text-primary truncate">
                     {n.name}
                  </Link>
               ))}
            </div>
            
            <h3 className="text-lg font-bold uppercase tracking-widest text-gray-400 mb-4">Regioes Populares e Vilas</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-2 text-sm text-gray-500 mb-8">
               {POPULAR_REGIONS.map(r => (
                  <Link 
                    key={`${r.name}-${r.via}`} 
                    to={`/bairro/${r.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '-')}`} 
                    className="flex items-center gap-1 hover:text-primary transition-colors"
                  >
                     <ChevronRight size={10} className="text-primary" /> {r.name}
                  </Link>
               ))}
            </div>

            <h3 className="text-lg font-bold uppercase tracking-widest text-gray-400 mb-4">Regiao Metropolitana (RMC)</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-2 text-sm">
               {CITIES.map(c => (
                  <Link 
                    key={c.name} 
                    to={`/bairro/${c.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '-')}`}
                    className="font-bold text-gray-700 hover:text-primary transition-colors"
                  >
                    {c.name}
                  </Link>
               ))}
            </div>
          </div>

          {/* All Tires Section - For SEO crawling */}
          <div className="mt-16 pt-12 border-t border-gray-100">
            <h2 className="text-2xl font-bold uppercase tracking-tight flex items-center gap-2 border-b-2 border-primary pb-2 mb-8">
              <Circle size={24} className="text-primary" /> Catalogo Completo de Pneus ({TIRES.length} produtos)
            </h2>
            
            {TIRE_BRANDS.map(brand => {
              const brandTires = TIRES.filter(t => t && t.marca === brand);
              return (
                <div key={brand} className="mb-8">
                  <h3 className="text-lg font-bold uppercase tracking-widest text-gray-400 mb-4">
                    Pneus {brand} ({brandTires.length} modelos)
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-1 text-xs text-gray-500 max-h-[300px] overflow-y-auto">
                    {brandTires.map(tire => (
                      <Link 
                        key={tire.slug} 
                        to={`/pneu/${tire.slug}`}
                        className="hover:text-primary truncate"
                        title={tire.nome}
                      >
                        {tire.nome}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
