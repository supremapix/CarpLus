import type { Metadata } from 'next';
import Link from 'next/link';
import { TIRES } from '@/lib/data';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import BackToTop from '@/components/BackToTop';

export const metadata: Metadata = {
  title: 'Catálogo de Pneus | Carplus Auto Center',
  description: 'Mais de 800 modelos de pneus em Curitiba. Pirelli, Goodyear, Bridgestone, Continental e mais. Encontre o pneu ideal para seu veículo.',
  alternates: {
    canonical: 'https://www.carpluspneuseoficina.com.br/pneus',
  },
};

export default async function PneusPage({
  searchParams,
}: {
  searchParams: Promise<{ marca?: string; aro?: string; medida?: string }>;
}) {
  const params = await searchParams;
  
  // Filtrar pneus
  let filteredTires = TIRES;
  
  if (params.marca) {
    filteredTires = filteredTires.filter(
      t => t.marca.toLowerCase() === params.marca?.toLowerCase()
    );
  }
  
  if (params.aro) {
    filteredTires = filteredTires.filter(
      t => t.aro === parseInt(params.aro!, 10)
    );
  }
  
  if (params.medida) {
    filteredTires = filteredTires.filter(
      t => t.medida.toLowerCase().includes(params.medida!.toLowerCase())
    );
  }

  // Dados para filtros
  const brands = [...new Set(TIRES.map(t => t.marca))].sort();
  const aros = [...new Set(TIRES.map(t => t.aro))].sort((a, b) => a - b);

  return (
    <div className="relative">
      <Navbar />
      
      <main className="pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl font-bold uppercase tracking-tighter italic mb-4">
              Catálogo de <span className="text-primary">Pneus</span>
            </h1>
            <p className="text-xl text-gray-500">
              {filteredTires.length} pneus encontrados
              {params.marca && ` • ${params.marca}`}
              {params.aro && ` • Aro ${params.aro}`}
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <aside className="w-full lg:w-64 shrink-0">
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 sticky top-28">
                <h2 className="text-sm font-bold uppercase tracking-widest mb-6">Filtros</h2>
                
                {/* Marcas */}
                <div className="mb-6">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Marca</h3>
                  <div className="flex flex-wrap gap-2">
                    <Link
                      href="/pneus"
                      className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                        !params.marca ? 'bg-primary text-black' : 'bg-gray-100 hover:bg-gray-200'
                      }`}
                    >
                      Todas
                    </Link>
                    {brands.map(brand => (
                      <Link
                        key={brand}
                        href={`/pneus?marca=${brand.toLowerCase()}${params.aro ? `&aro=${params.aro}` : ''}`}
                        className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                          params.marca?.toLowerCase() === brand.toLowerCase()
                            ? 'bg-primary text-black'
                            : 'bg-gray-100 hover:bg-gray-200'
                        }`}
                      >
                        {brand}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Aros */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Aro</h3>
                  <div className="flex flex-wrap gap-2">
                    <Link
                      href={`/pneus${params.marca ? `?marca=${params.marca}` : ''}`}
                      className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                        !params.aro ? 'bg-primary text-black' : 'bg-gray-100 hover:bg-gray-200'
                      }`}
                    >
                      Todos
                    </Link>
                    {aros.map(aro => (
                      <Link
                        key={aro}
                        href={`/pneus?${params.marca ? `marca=${params.marca}&` : ''}aro=${aro}`}
                        className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                          params.aro === String(aro)
                            ? 'bg-primary text-black'
                            : 'bg-gray-100 hover:bg-gray-200'
                        }`}
                      >
                        {aro}"
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            {/* Grid de Pneus */}
            <div className="flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredTires.map(tire => (
                  <Link
                    key={tire.id}
                    href={`/pneu/${tire.slug}`}
                    className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-2xl hover:border-primary transition-all group"
                  >
                    <div className="relative mb-6 flex items-center justify-center p-4">
                      <img 
                        src={tire.imagem} 
                        alt={tire.nome}
                        className="h-32 object-contain group-hover:scale-110 transition-transform duration-500 [mix-blend-mode:multiply]"
                      />
                      {tire.novoModelo && (
                        <span className="absolute top-0 right-0 bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase">
                          Novo
                        </span>
                      )}
                    </div>
                    <span className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1 block">
                      {tire.marca}
                    </span>
                    <h3 className="font-bold uppercase tracking-tighter mb-2 line-clamp-2 leading-tight group-hover:text-primary transition-colors">
                      {tire.nome}
                    </h3>
                    <p className="text-xs text-gray-400">
                      {tire.medida} · Aro {tire.aro}
                    </p>
                  </Link>
                ))}
              </div>

              {filteredTires.length === 0 && (
                <div className="text-center py-20">
                  <p className="text-xl text-gray-400 mb-4">Nenhum pneu encontrado</p>
                  <Link 
                    href="/pneus"
                    className="text-primary font-bold hover:underline"
                  >
                    Limpar filtros
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppFloat />
      <BackToTop />
    </div>
  );
}
