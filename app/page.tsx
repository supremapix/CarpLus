import type { Metadata } from 'next';
import Link from 'next/link';
import { TIRES } from '@/lib/data';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import BackToTop from '@/components/BackToTop';

export const metadata: Metadata = {
  title: 'Carplus Auto Center | Pneus em Curitiba - Portão',
  description: 'Loja de pneus em Curitiba no bairro Portão. Pirelli, Goodyear, Bridgestone, Continental e mais. Montagem inclusa, parcelamento em até 10x sem juros. Ligue: (41) 3082-7282.',
  alternates: {
    canonical: 'https://www.carpluspneuseoficina.com.br/',
  },
};

export default function HomePage() {
  // Pneus em destaque
  const featuredTires = TIRES.filter(t => t.destaque).slice(0, 8);
  // Marcas únicas
  const brands = [...new Set(TIRES.map(t => t.marca))];

  return (
    <div className="relative">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="bg-dark text-white pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter italic mb-6">
              Pneus em <span className="text-primary">Curitiba</span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto mb-10">
              Mais de 800 modelos de pneus das melhores marcas. Montagem inclusa, parcelamento em até 10x sem juros.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/pneus"
                className="bg-primary text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 transition-all"
              >
                Ver Catálogo Completo
              </Link>
              <a 
                href="https://wa.me/554130827282"
                target="_blank"
                className="bg-[#25D366] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-600 transition-all"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Brands */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10 uppercase tracking-tighter">
              Marcas Disponíveis
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              {brands.map(brand => (
                <Link
                  key={brand}
                  href={`/pneus?marca=${brand.toLowerCase()}`}
                  className="bg-white px-6 py-3 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-primary hover:text-black transition-all shadow-sm"
                >
                  {brand}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Tires */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-4xl font-bold uppercase tracking-tighter italic">
                Pneus em <span className="text-primary">Destaque</span>
              </h2>
              <Link 
                href="/pneus"
                className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors"
              >
                Ver Todos
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredTires.map(tire => (
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
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter italic mb-6 text-black">
              Precisa de Pneus Novos?
            </h2>
            <p className="text-xl text-black/70 mb-10">
              Atendimento especializado, preço justo e montagem inclusa em todos os pneus.
            </p>
            <a 
              href="tel:+554130827282"
              className="inline-block bg-black text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-900 transition-all"
            >
              Ligar: (41) 3082-7282
            </a>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFloat />
      <BackToTop />
    </div>
  );
}
