import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  MessageSquare,
  Search,
  ChevronRight,
  ArrowUpDown,
  Tag,
  ExternalLink,
  Car,
  ShieldCheck,
  CreditCard,
} from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useSEO } from '../hooks/useSEO';
import { generateProductListSchema, generateBreadcrumbSchema } from '../lib/schema';
import { PROMO_TIRES } from '../data/promoTires';

const BASE_URL = 'https://www.carpluspneuseoficina.com.br';
const WHATSAPP_PHONE = '554130827282';

type Ordenacao = 'menor' | 'maior' | 'marca';

const FALLBACK_IMG =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="200" height="200" fill="%23f3f4f6"/><text x="50%" y="50%" font-size="16" fill="%239ca3af" text-anchor="middle" dy=".3em">Pneu</text></svg>',
  );

export default function PneusPromocaoLista() {
  const [busca, setBusca] = useState('');
  const [ordem, setOrdem] = useState<Ordenacao>('menor');

  const pageUrl = `${BASE_URL}/pneus-promocao`;

  const listaFiltrada = useMemo(() => {
    const termo = busca
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .trim();

    const filtrada = PROMO_TIRES.filter((t) => {
      if (!termo) return true;
      const alvo = `${t.marca} ${t.nome} ${t.medida} ${t.carros.join(' ')}`
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');
      return alvo.includes(termo);
    });

    return [...filtrada].sort((a, b) => {
      if (ordem === 'menor') return a.precoNumero - b.precoNumero;
      if (ordem === 'maior') return b.precoNumero - a.precoNumero;
      return a.marca.localeCompare(b.marca);
    });
  }, [busca, ordem]);

  const productListSchema = generateProductListSchema(
    PROMO_TIRES.map((t, i) => ({
      name: `Pneu ${t.marca} ${t.nome}`,
      url: `${BASE_URL}/pneu-promocao/${t.slug}`,
      image: t.imagem,
      position: i + 1,
    })),
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: BASE_URL },
    { name: 'Pneus em Promoção', url: pageUrl },
  ]);

  useSEO({
    title: 'Pneus em Promoção em Curitiba | Lista Completa – Carplus Portão',
    description:
      'Lista completa de pneus em promoção em Curitiba a partir de R$ 239. Veja preço, medida e carros compatíveis de cada modelo. Montagem inclusa e até 10x sem juros na Carplus, no Portão. WhatsApp: (41) 3082-7282.',
    canonical: pageUrl,
    keywords: [
      'pneus em promoção curitiba',
      'pneu barato curitiba',
      'lista de pneus em promoção',
      'preço de pneu curitiba',
      'loja de pneus portão curitiba',
      'carplus pneus',
    ],
    schemaJSON: [productListSchema, breadcrumbSchema],
  });

  const precoMin = Math.min(...PROMO_TIRES.map((t) => t.precoNumero));

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      <main className="flex-1 pt-24 md:pt-28">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="max-w-6xl mx-auto w-full px-4 md:px-6 mb-4">
          <ol className="flex items-center gap-1.5 text-sm text-gray-400">
            <li>
              <Link to="/" className="hover:text-primary">
                Home
              </Link>
            </li>
            <ChevronRight size={14} />
            <li className="text-gray-700 font-semibold">Pneus em Promoção</li>
          </ol>
        </nav>

        {/* Cabeçalho */}
        <header className="max-w-6xl mx-auto w-full px-4 md:px-6 mb-8">
          <span className="inline-flex items-center gap-2 bg-primary/10 text-primary font-accent font-bold uppercase tracking-wider text-sm px-3 py-1 rounded-full">
            <Tag size={15} /> Ofertas Carplus
          </span>
          <h1 className="mt-3 text-3xl md:text-5xl font-bold uppercase italic tracking-tight text-gray-900 text-balance">
            Pneus em Promoção em Curitiba
          </h1>
          <p className="mt-3 text-gray-600 leading-relaxed max-w-2xl">
            Confira a lista completa das nossas ofertas a partir de{' '}
            <strong className="text-gray-900">
              R$ {precoMin.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
            </strong>
            . Todos os preços já incluem montagem, balanceamento e calibragem, com parcelamento em até 10x sem juros na
            Carplus, no bairro Portão.
          </p>
        </header>

        {/* Controles de busca e ordenação */}
        <div className="max-w-6xl mx-auto w-full px-4 md:px-6 mb-6 flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="search"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              placeholder="Buscar por marca, medida ou carro (ex: Onix, 175/65/14)"
              className="w-full rounded-xl border border-gray-200 bg-white pl-11 pr-4 py-3 text-gray-800 placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
              aria-label="Buscar pneu"
            />
          </div>
          <div className="relative sm:w-64">
            <ArrowUpDown size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <select
              value={ordem}
              onChange={(e) => setOrdem(e.target.value as Ordenacao)}
              className="w-full appearance-none rounded-xl border border-gray-200 bg-white pl-11 pr-8 py-3 text-gray-800 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none cursor-pointer"
              aria-label="Ordenar lista"
            >
              <option value="menor">Menor preço</option>
              <option value="maior">Maior preço</option>
              <option value="marca">Marca (A-Z)</option>
            </select>
          </div>
        </div>

        {/* Contador */}
        <div className="max-w-6xl mx-auto w-full px-4 md:px-6 mb-4">
          <p className="text-sm text-gray-500">
            {listaFiltrada.length} {listaFiltrada.length === 1 ? 'pneu encontrado' : 'pneus encontrados'}
          </p>
        </div>

        {/* Lista */}
        <section className="max-w-6xl mx-auto w-full px-4 md:px-6 pb-16">
          {listaFiltrada.length === 0 ? (
            <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center">
              <p className="text-gray-500">Nenhum pneu encontrado para a sua busca.</p>
            </div>
          ) : (
            <ul className="flex flex-col gap-4">
              {listaFiltrada.map((tire, i) => {
                const msg = `Olá! Vi a *promoção do pneu ${tire.marca} ${tire.nome}* (medida ${tire.medida}) por ${tire.preco}. Gostaria de garantir esse preço.\n\nOrigem do contato: ${BASE_URL}/pneus-promocao (lista)`;
                const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(msg)}`;

                return (
                  <motion.li
                    key={tire.slug}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.4, delay: Math.min(i * 0.03, 0.3) }}
                    className="group flex flex-col sm:flex-row gap-4 bg-white rounded-2xl border border-gray-100 p-4 shadow-sm hover:shadow-lg hover:border-primary/40 transition-all"
                  >
                    {/* Imagem */}
                    <Link
                      to={`/pneu-promocao/${tire.slug}`}
                      className="relative flex-shrink-0 w-full sm:w-36 h-36 bg-white rounded-xl overflow-hidden flex items-center justify-center"
                    >
                      <img
                        src={tire.imagem}
                        alt={`Pneu ${tire.marca} ${tire.nome}`}
                        loading="lazy"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).src = FALLBACK_IMG;
                        }}
                        className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute top-2 left-2 bg-black text-white text-[10px] font-accent font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                        Promoção
                      </span>
                    </Link>

                    {/* Infos */}
                    <div className="flex flex-1 flex-col">
                      <Link
                        to={`/pneu-promocao/${tire.slug}`}
                        className="font-accent font-bold uppercase tracking-wide text-primary text-lg leading-none hover:underline"
                      >
                        {tire.marca}
                      </Link>
                      <p className="mt-1 text-gray-800 font-semibold">{tire.nome}</p>

                      <div className="mt-2 flex flex-wrap items-center gap-2 text-xs">
                        <span className="inline-flex items-center gap-1 bg-gray-100 text-gray-600 rounded-full px-2.5 py-1 font-semibold">
                          Aro {tire.aro}
                        </span>
                        <span className="inline-flex items-center gap-1 bg-gray-100 text-gray-600 rounded-full px-2.5 py-1 font-semibold">
                          {tire.medida}
                        </span>
                        {tire.carros.length > 0 && (
                          <span className="inline-flex items-center gap-1 bg-gray-100 text-gray-600 rounded-full px-2.5 py-1 font-semibold">
                            <Car size={12} /> {tire.carros.slice(0, 2).join(', ')}
                            {tire.carros.length > 2 ? '…' : ''}
                          </span>
                        )}
                      </div>

                      {/* Link de catálogo */}
                      <Link
                        to={tire.catalogoUrl}
                        className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-gray-700 hover:text-primary w-fit"
                      >
                        <ExternalLink size={14} />
                        {tire.temCatalogoMarca
                          ? `Ver catálogo ${tire.marca}`
                          : 'Ver catálogo completo de pneus'}
                      </Link>
                    </div>

                    {/* Preço + CTA */}
                    <div className="flex flex-row sm:flex-col items-end justify-between sm:justify-center gap-2 sm:w-48 sm:border-l sm:border-gray-100 sm:pl-4">
                      <div className="text-right">
                        <span className="block text-[11px] text-gray-400 uppercase tracking-wide">a partir de</span>
                        <span className="font-accent font-bold text-gray-900 text-2xl leading-none">{tire.preco}</span>
                      </div>
                      <div className="flex flex-col gap-2 w-auto sm:w-full">
                        <a
                          href={whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 rounded-xl bg-black px-4 py-2.5 font-accent font-bold uppercase tracking-wide !text-white text-sm transition-colors hover:bg-neutral-800"
                        >
                          <MessageSquare size={16} strokeWidth={2.5} />
                          Pedir orçamento
                        </a>
                        <Link
                          to={`/pneu-promocao/${tire.slug}`}
                          className="inline-flex items-center justify-center gap-1 rounded-xl border border-gray-200 px-4 py-2 font-accent font-bold uppercase tracking-wide text-gray-700 text-xs transition-colors hover:border-primary hover:text-primary"
                        >
                          Saiba mais
                        </Link>
                      </div>
                    </div>
                  </motion.li>
                );
              })}
            </ul>
          )}
        </section>

        {/* Faixa de benefícios */}
        <section className="bg-white border-t border-gray-100">
          <div className="max-w-6xl mx-auto w-full px-4 md:px-6 py-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <span className="flex-shrink-0 w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <ShieldCheck size={22} />
              </span>
              <p className="text-sm text-gray-700 font-semibold leading-snug">
                Montagem, balanceamento e garantia de fábrica inclusos
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex-shrink-0 w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <CreditCard size={22} />
              </span>
              <p className="text-sm text-gray-700 font-semibold leading-snug">Parcele em até 10x sem juros no cartão</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex-shrink-0 w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <Tag size={22} />
              </span>
              <p className="text-sm text-gray-700 font-semibold leading-snug">Preços de Curitiba, no bairro Portão</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
