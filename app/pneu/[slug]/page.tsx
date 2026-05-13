import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { TIRES } from '@/lib/data';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import BackToTop from '@/components/BackToTop';

// Gerar todas as páginas estáticas
export async function generateStaticParams() {
  return TIRES.map((tire) => ({
    slug: tire.slug,
  }));
}

// Metadata dinâmica para SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tire = TIRES.find((t) => t.slug === slug);
  
  if (!tire) {
    return {
      title: 'Pneu não encontrado | Carplus Auto Center',
    };
  }

  const title = `${tire.nome} | Comprar Pneu ${tire.medida} em Curitiba`;
  const description = tire.descricao || `${tire.nome} - ${tire.marca} ${tire.linha}. Pneu ${tire.medida} aro ${tire.aro}. Compre com montagem inclusa na Carplus Auto Center em Curitiba.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://www.carpluspneuseoficina.com.br/pneu/${slug}`,
    },
    openGraph: {
      title,
      description,
      images: [{ url: tire.imagemGrande || tire.imagem }],
      type: 'website',
    },
  };
}

export default async function PneuPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tire = TIRES.find((t) => t.slug === slug);

  if (!tire) {
    notFound();
  }

  // Pneus relacionados (mesma medida ou marca)
  const relatedTires = TIRES.filter(
    (t) =>
      t.id !== tire.id &&
      (t.medida === tire.medida || t.marca === tire.marca)
  ).slice(0, 4);

  // Schema.org Product
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: tire.nome,
    description: tire.descricao,
    image: tire.imagemGrande || tire.imagem,
    brand: {
      '@type': 'Brand',
      name: tire.marca,
    },
    category: 'Pneus',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'BRL',
      seller: {
        '@type': 'LocalBusiness',
        name: 'Carplus Auto Center',
        telephone: '+554130827282',
      },
    },
  };

  return (
    <div className="relative">
      <Navbar />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      <main className="pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-primary transition-colors">
              Início
            </Link>
            <span>/</span>
            <Link href="/pneus" className="hover:text-primary transition-colors">
              Pneus
            </Link>
            <span>/</span>
            <Link
              href={`/pneus?marca=${tire.marca.toLowerCase()}`}
              className="hover:text-primary transition-colors"
            >
              {tire.marca}
            </Link>
            <span>/</span>
            <span className="text-foreground">{tire.medida}</span>
          </nav>

          {/* Produto */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* Imagem */}
            <div className="bg-white rounded-3xl p-12 shadow-sm border border-gray-100 flex items-center justify-center">
              <img
                src={tire.imagemGrande || tire.imagem}
                alt={tire.nome}
                className="max-h-96 object-contain [mix-blend-mode:multiply]"
              />
            </div>

            {/* Info */}
            <div>
              <span className="text-xs font-bold text-primary uppercase tracking-widest mb-2 block">
                {tire.marca} · {tire.linha}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter italic mb-6">
                {tire.nome}
              </h1>
              <p className="text-lg text-gray-500 mb-8">{tire.descricao}</p>

              {/* Especificações */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-gray-50 rounded-2xl p-4">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-1">
                    Medida
                  </span>
                  <span className="text-xl font-bold">{tire.medida}</span>
                </div>
                <div className="bg-gray-50 rounded-2xl p-4">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-1">
                    Aro
                  </span>
                  <span className="text-xl font-bold">{tire.aro}"</span>
                </div>
                <div className="bg-gray-50 rounded-2xl p-4">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-1">
                    Velocidade
                  </span>
                  <span className="text-xl font-bold">{tire.indiceVelocidade}</span>
                </div>
                <div className="bg-gray-50 rounded-2xl p-4">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-1">
                    Carga
                  </span>
                  <span className="text-xl font-bold">{tire.indiceCarga}</span>
                </div>
              </div>

              {/* Carros compatíveis */}
              {tire.carros && tire.carros.length > 0 && (
                <div className="mb-8">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-3">
                    Veículos Compatíveis
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {tire.carros.map((carro) => (
                      <span
                        key={carro}
                        className="bg-gray-100 px-3 py-1.5 rounded-full text-sm font-medium"
                      >
                        {carro}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`https://wa.me/554130827282?text=Olá! Tenho interesse no pneu ${tire.nome} (${tire.medida})`}
                  target="_blank"
                  className="bg-[#25D366] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-600 transition-all text-center"
                >
                  Consultar Preço
                </a>
                <a
                  href="tel:+554130827282"
                  className="border-2 border-black px-8 py-4 rounded-full font-bold text-lg hover:bg-black hover:text-white transition-all text-center"
                >
                  Ligar Agora
                </a>
              </div>
            </div>
          </div>

          {/* Pneus Relacionados */}
          {relatedTires.length > 0 && (
            <section>
              <h2 className="text-3xl font-bold uppercase tracking-tighter italic mb-8">
                Pneus <span className="text-primary">Relacionados</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedTires.map((relTire) => (
                  <Link
                    key={relTire.id}
                    href={`/pneu/${relTire.slug}`}
                    className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-2xl hover:border-primary transition-all group"
                  >
                    <div className="relative mb-6 flex items-center justify-center p-4">
                      <img
                        src={relTire.imagem}
                        alt={relTire.nome}
                        className="h-24 object-contain group-hover:scale-110 transition-transform duration-500 [mix-blend-mode:multiply]"
                      />
                    </div>
                    <span className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1 block">
                      {relTire.marca}
                    </span>
                    <h3 className="font-bold uppercase tracking-tighter mb-2 line-clamp-2 leading-tight group-hover:text-primary transition-colors text-sm">
                      {relTire.nome}
                    </h3>
                    <p className="text-xs text-gray-400">
                      {relTire.medida} · Aro {relTire.aro}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      <Footer />
      <WhatsAppFloat />
      <BackToTop />
    </div>
  );
}
