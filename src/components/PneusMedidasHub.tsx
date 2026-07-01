import { Link } from 'react-router-dom';
import { ChevronRight, Ruler, MessageSquare, Phone, Search } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useSEO } from '../hooks/useSEO';
import { generateBreadcrumbSchema, generateFaqSchema } from '../lib/schema';
import {
  MEASURE_SEO,
  ARO_PAGES,
  BRAND_PAGES,
  VEHICLE_PAGES,
  BASE_URL,
  WHATSAPP_NUMBER,
  PHONE_DISPLAY,
} from '../data/seoLanding';

function measureToSlug(medida: string): string {
  return medida.toLowerCase().replace(/\//g, '-');
}

// Extrai o aro da medida (ex.: "195/65R15" -> 15)
function aroFromMedida(medida: string): number {
  const match = medida.match(/R(\d{2})/i);
  return match ? Number(match[1]) : 0;
}

const HUB_FAQ = [
  {
    question: 'Como sei qual a medida do pneu do meu carro?',
    answer:
      'A medida está gravada na lateral do pneu, no formato 195/65R15, por exemplo. Os três números indicam a largura, o perfil e o aro. Você também encontra essa informação no manual do veículo ou na etiqueta da porta do motorista. Em caso de dúvida, envie a medida pelo WhatsApp (41) 3082-7282 que confirmamos para você.',
  },
  {
    question: 'O que significam os números da medida do pneu?',
    answer:
      'No exemplo 195/65R15: 195 é a largura em milímetros, 65 é o perfil (altura proporcional à largura, em %), R indica construção radial e 15 é o diâmetro do aro em polegadas. Cada medida é indicada para determinados modelos de carro.',
  },
  {
    question: 'A Carplus tem todas as medidas em estoque?',
    answer:
      'Trabalhamos com as medidas mais procuradas do mercado, do aro 13 ao aro 20 e além, em várias marcas. A disponibilidade varia por modelo — confirme a sua medida pelo WhatsApp (41) 3082-7282 ou consulte o catálogo completo.',
  },
  {
    question: 'Posso trocar a medida original do meu pneu?',
    answer:
      'É possível em alguns casos, respeitando o diâmetro externo e a capacidade de carga recomendados pelo fabricante. Recomendamos sempre consultar nossa equipe técnica antes de mudar a medida, para garantir segurança e o correto funcionamento do velocímetro.',
  },
];

export default function PneusMedidasHub() {
  const __seo = useSEO({
    title: 'Medidas de Pneus em Curitiba | Carplus Centro Automotivo – Portão',
    description:
      'Encontre pneus por medida em Curitiba na Carplus, bairro Portão. Veja as medidas mais procuradas (175/65R14, 195/65R15, 205/55R16, 225/65R17 e mais), aplicações por modelo, montagem inclusa e 10x sem juros. WhatsApp: (41) 3082-7282.',
    canonical: `${BASE_URL}/medidas-de-pneus-curitiba`,
    ogImage: '/images/loja/carplus-oficina-portao-fachada-curitiba.jpg',
    schemaJSON: [
      generateBreadcrumbSchema([
        { name: 'Home', url: `${BASE_URL}/` },
        { name: 'Pneus Curitiba', url: `${BASE_URL}/pneus-curitiba` },
        { name: 'Medidas de Pneus', url: `${BASE_URL}/medidas-de-pneus-curitiba` },
      ]),
      generateFaqSchema(HUB_FAQ),
      {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Medidas de pneus disponíveis em Curitiba',
        numberOfItems: MEASURE_SEO.length,
        itemListElement: MEASURE_SEO.map((m, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: `Pneu ${m.medida}`,
          url: `${BASE_URL}/pneu-medida/${measureToSlug(m.medida)}`,
        })),
      },
    ],
  });

  // Agrupa medidas por aro para uma navegação organizada.
  const byAro = MEASURE_SEO.reduce<Record<number, typeof MEASURE_SEO>>((acc, m) => {
    const aro = aroFromMedida(m.medida);
    (acc[aro] = acc[aro] || []).push(m);
    return acc;
  }, {});
  const aros = Object.keys(byAro)
    .map(Number)
    .filter((a) => a > 0)
    .sort((a, b) => a - b);

  const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    'Olá! Quero um orçamento de pneus. A medida do meu carro é:'
  )}`;

  return (
    <div className="min-h-screen bg-gray-50 pt-24 md:pt-28 pb-20 md:pb-0">
      {__seo}
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 md:px-6 py-8">
        {/* Breadcrumb */}
        <nav
          aria-label="breadcrumb"
          className="flex items-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-400 mb-8 overflow-x-auto whitespace-nowrap pb-2"
        >
          <Link to="/" className="hover:text-black">
            Home
          </Link>
          <ChevronRight size={12} />
          <Link to="/pneus-curitiba" className="hover:text-black">
            Pneus Curitiba
          </Link>
          <ChevronRight size={12} />
          <span className="text-black">Medidas de Pneus</span>
        </nav>

        {/* Hero */}
        <section className="mb-14">
          <span className="inline-flex items-center gap-2 bg-primary text-black px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-5">
            <div className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" /> Medidas de Pneus · Curitiba
          </span>
          <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter italic leading-none mb-5 text-balance">
            Pneus por <span className="text-primary">Medida</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 font-medium leading-relaxed max-w-3xl text-pretty">
            Saiba qual pneu é o ideal para o seu carro. Reunimos as medidas mais procuradas em Curitiba, com as
            aplicações por modelo e os pneus disponíveis na Carplus, no bairro Portão. Montagem, balanceamento e
            calibragem inclusos, com até 10x sem juros.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold hover:bg-green-600 transition-all shadow-2xl shadow-green-200"
            >
              <MessageSquare size={22} /> Enviar minha medida
            </a>
            <a
              href={`tel:+${WHATSAPP_NUMBER}`}
              className="flex items-center justify-center gap-3 bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-gray-900 transition-all"
            >
              <Phone size={20} /> {PHONE_DISPLAY}
            </a>
          </div>
        </section>

        {/* Como ler a medida */}
        <section className="bg-dark text-white rounded-[2.5rem] p-8 md:p-12 mb-14 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Ruler size={160} />
          </div>
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tighter italic mb-4">
              Como ler a <span className="text-primary">medida do pneu</span>
            </h2>
            <p className="text-white/70 leading-relaxed mb-6">
              A medida fica gravada na lateral do pneu. No exemplo <strong className="text-white">195/65R15</strong>:
              <strong className="text-white"> 195</strong> é a largura em milímetros,
              <strong className="text-white"> 65</strong> é o perfil (% da largura),
              <strong className="text-white"> R</strong> indica construção radial e
              <strong className="text-white"> 15</strong> é o aro em polegadas. Cada medida atende modelos específicos.
            </p>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-black px-6 py-3 rounded-full font-bold hover:bg-yellow-400 transition-all uppercase italic tracking-tighter text-sm"
            >
              <Search size={16} /> Não sei minha medida
            </a>
          </div>
        </section>

        {/* Medidas agrupadas por aro */}
        {aros.map((aro) => {
          const aroPage = ARO_PAGES.find((a) => a.aro === aro);
          return (
            <section key={aro} className="mb-12">
              <div className="flex items-center justify-between gap-3 border-b-2 border-primary pb-3 mb-6 flex-wrap">
                <div className="flex items-center gap-3">
                  <Ruler size={22} className="text-primary" />
                  <h2 className="text-2xl font-bold uppercase tracking-tighter italic">Medidas Aro {aro}</h2>
                </div>
                {aroPage && (
                  <Link
                    to={`/${aroPage.slug}`}
                    className="text-primary font-bold hover:underline uppercase text-xs tracking-tight inline-flex items-center gap-1"
                  >
                    Ver tudo do aro {aro} <ChevronRight size={14} />
                  </Link>
                )}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {byAro[aro].map((m) => (
                  <Link
                    key={m.medida}
                    to={`/pneu-medida/${measureToSlug(m.medida)}`}
                    className="group bg-white border border-gray-200 hover:border-primary rounded-2xl p-5 transition-all hover:shadow-md"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-lg font-bold tracking-tight group-hover:text-black">{m.medida}</span>
                      <ChevronRight size={18} className="text-primary" />
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">{m.aplicacoes}</p>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}

        {/* Navegação cruzada: marcas e veículos */}
        <section className="mb-14">
          <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-gray-100">
            <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tighter italic mb-2">
              Busque também por <span className="text-primary">marca ou veículo</span>
            </h2>
            <p className="text-gray-500 text-sm font-medium mb-8">
              Prefere escolher pela marca do pneu ou pelo modelo do seu carro? Use os atalhos abaixo.
            </p>

            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Por marca</h3>
            <div className="flex flex-wrap gap-3 mb-8">
              {BRAND_PAGES.map((b) => (
                <Link
                  key={b.slug}
                  to={`/${b.slug}`}
                  className="bg-gray-50 border border-gray-200 px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-tight hover:border-primary hover:text-primary transition-all"
                >
                  {b.marca}
                </Link>
              ))}
            </div>

            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Por veículo</h3>
            <div className="flex flex-wrap gap-3">
              {VEHICLE_PAGES.slice(0, 12).map((v) => (
                <Link
                  key={v.slug}
                  to={`/${v.slug}`}
                  className="bg-gray-50 border border-gray-200 px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-tight hover:border-primary hover:text-primary transition-all"
                >
                  {v.nome}
                </Link>
              ))}
              <Link
                to="/pneus-curitiba"
                className="bg-primary text-black px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-tight hover:bg-yellow-400 transition-all inline-flex items-center gap-1"
              >
                Central de Pneus <ChevronRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl mb-14">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tighter italic mb-8">
            Perguntas Frequentes
          </h2>
          <div className="space-y-6">
            {HUB_FAQ.map((item) => (
              <div key={item.question} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                <h3 className="font-bold text-lg mb-2">{item.question}</h3>
                <p className="text-gray-600 leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA final */}
        <section className="bg-primary rounded-[2.5rem] p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-black leading-tight uppercase italic">
              Não achou sua medida?
            </h2>
            <p className="text-black/70 font-medium mt-2">
              Envie a medida do seu carro e nossa equipe confirma a disponibilidade na hora.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-gray-900 transition-all flex items-center justify-center gap-3 uppercase tracking-tight"
            >
              <MessageSquare size={20} /> WhatsApp
            </a>
            <Link
              to="/pneus"
              className="bg-black/10 text-black border border-black/10 px-8 py-4 rounded-full font-bold hover:bg-black/20 transition-all flex items-center justify-center gap-3 uppercase tracking-tight"
            >
              Catálogo <ChevronRight size={20} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />

      {/* Barra de CTA fixa — somente mobile */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-t border-gray-200 px-3 py-3 flex gap-2 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-full font-bold text-sm"
          aria-label="Enviar medida no WhatsApp"
        >
          <MessageSquare size={18} /> Enviar medida
        </a>
        <a
          href={`tel:+${WHATSAPP_NUMBER}`}
          className="flex items-center justify-center gap-2 bg-black text-white px-5 py-3 rounded-full font-bold text-sm"
          aria-label={`Ligar para ${PHONE_DISPLAY}`}
        >
          <Phone size={18} /> Ligar
        </a>
      </div>
    </div>
  );
}
