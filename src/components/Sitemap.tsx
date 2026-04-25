import Navbar from './Navbar';
import Footer from './Footer';
import { NEIGHBORHOODS, CITIES, POPULAR_REGIONS, SERVICES } from '../data';
import { Link } from 'react-router-dom';
import { MapPin, Wrench, Globe, ChevronRight } from 'lucide-react';

export default function Sitemap() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <main className="pt-[160px] pb-24">
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
                  <li><Link to="/" className="hover:text-primary transition-colors">Página Inicial</Link></li>
                  <li><Link to="/quem-somos" className="hover:text-primary transition-colors">Quem Somos</Link></li>
                  <li><Link to="/contato" className="hover:text-primary transition-colors">Contato</Link></li>
                  <li><Link to="/politica-de-privacidade" className="hover:text-primary transition-colors">Política de Privacidade</Link></li>
                  <li><Link to="/trocas-e-devolucoes" className="hover:text-primary transition-colors">Trocas e Devoluções</Link></li>
               </ul>
            </div>

            {/* Serviços */}
            <div className="space-y-6">
               <h2 className="text-2xl font-bold uppercase tracking-tight flex items-center gap-2 border-b-2 border-primary pb-2">
                 <Wrench size={24} className="text-primary" /> Nossos Serviços
               </h2>
               <ul className="space-y-3 font-medium text-gray-600">
                  {SERVICES.map(s => (
                     <li key={s.slug}><Link to={`/servico/${s.slug}`} className="hover:text-primary transition-colors">{s.title}</Link></li>
                  ))}
               </ul>
            </div>

            {/* Bairros Oficiais */}
            <div className="space-y-6 lg:col-span-2">
               <h2 className="text-2xl font-bold uppercase tracking-tight flex items-center gap-2 border-b-2 border-primary pb-2">
                 <MapPin size={24} className="text-primary" /> Bairros Atendidos
               </h2>
               <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2 text-sm text-gray-500">
                  {NEIGHBORHOODS.map(n => (
                     <Link key={n.name} to={`/bairro/${n.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '-')}`} className="hover:text-primary truncate">
                        {n.name}
                     </Link>
                  ))}
               </div>
               
               <h3 className="text-lg font-bold mt-8 uppercase tracking-widest text-gray-400">Regiões Populares e Vilas</h3>
               <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2 text-sm text-gray-500">
                  {POPULAR_REGIONS.map(r => (
                     <span key={r.name} className="flex items-center gap-1">
                        <ChevronRight size={10} className="text-primary" /> {r.name}
                     </span>
                  ))}
               </div>

               <h3 className="text-lg font-bold mt-8 uppercase tracking-widest text-gray-400">Região Metropolitana (RMC)</h3>
               <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2 text-sm text-gray-500">
                  {CITIES.map(c => (
                     <span key={c.name} className="font-bold text-gray-700">{c.name}</span>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
