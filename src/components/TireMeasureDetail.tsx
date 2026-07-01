import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { MessageSquare, Phone, ChevronRight, CircleCheck as CheckCircle2, ShieldCheck, Clock, Award, Star, ArrowLeft, CarFront, Layers } from 'lucide-react';
import { TIRES, Tire } from '../data';
import Navbar from './Navbar';
import Footer from './Footer';
import TireFAQ from './TireFAQ';
import TireTips from './TireTips';
import { useState, useEffect, useMemo } from 'react';
import { useSEO } from '../hooks/useSEO';
import { isMeasureIndexable } from '../lib/seoIndexing';

export default function TireMeasureDetail() {
  const { medida } = useParams<{ medida: string }>();
  
  // Normaliza a medida da URL (ex: 175-70r13 -> 175/70R13)
  const normalizedMedida = useMemo(() => {
    if (!medida) return '';
    return medida
      .replace(/-/g, '/')
      .toUpperCase()
      .replace(/R(\d)/i, 'R$1');
  }, [medida]);

  // Encontra todos os pneus com essa medida
  const tiresWithMeasure = useMemo(() => {
    return TIRES.filter(t => 
      t && t.medida && t.medida.toUpperCase().replace(/\s/g, '') === normalizedMedida.replace(/\s/g, '')
    );
  }, [normalizedMedida]);

  // Agrupa por linha para seleção
  const lineGroups = useMemo(() => {
    const groups: { [key: string]: Tire[] } = {};
    tiresWithMeasure.forEach(tire => {
      const key = `${tire.marca} - ${tire.linha}`;
      if (!groups[key]) groups[key] = [];
      groups[key].push(tire);
    });
    return groups;
  }, [tiresWithMeasure]);

  const lineOptions = Object.keys(lineGroups);
  const [selectedLine, setSelectedLine] = useState<string>(lineOptions[0] || '');
  const [selectedTire, setSelectedTire] = useState<Tire | null>(null);

  // Atualiza pneu selecionado quando muda a linha
  useEffect(() => {
    if (lineGroups[selectedLine]?.length > 0) {
      setSelectedTire(lineGroups[selectedLine][0]);
    }
  }, [selectedLine, lineGroups]);

  // Inicializa com a primeira linha disponível
  useEffect(() => {
    if (lineOptions.length > 0 && !selectedLine) {
      setSelectedLine(lineOptions[0]);
    }
  }, [lineOptions, selectedLine]);

  const tire = selectedTire || tiresWithMeasure[0];

  const __seo = useSEO(
    tire
      ? {
          title: `Pneu ${normalizedMedida} em Curitiba | Carplus Centro Automotivo – Todas as Marcas`,
          description: `Compare e compre pneu ${normalizedMedida} na Carplus em Curitiba. Várias marcas: Pirelli, Firestone, Continental. Montagem inclusa, parcelamento em até 10x sem juros. Ligue: (41) 3082-7282.`,
          canonical: `https://www.carpluspneuseoficina.com.br/pneu-medida/${medida}`,
          noindex: !isMeasureIndexable(normalizedMedida),
          ogImage: tire.imagemGrande,
          ogType: 'product',
          schemaJSON: [
            {
              "@context": "https://schema.org",
              "@type": "ItemList",
              "name": `Pneus ${normalizedMedida}`,
              "description": `Lista de pneus disponíveis na medida ${normalizedMedida}`,
              "numberOfItems": tiresWithMeasure.length,
              "itemListElement": tiresWithMeasure.map((t, i) => ({
                "@type": "ListItem",
                "position": i + 1,
                "item": {
                  "@type": "Product",
                  "name": t.nome,
                  "image": t.imagemGrande,
                  "brand": { "@type": "Brand", "name": t.marca },
                  "url": `https://www.carpluspneuseoficina.com.br/pneu/${t.slug}`
                }
              }))
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.carpluspneuseoficina.com.br/" },
                { "@type": "ListItem", "position": 2, "name": "Pneus", "item": "https://www.carpluspneuseoficina.com.br/pneus" },
                { "@type": "ListItem", "position": 3, "name": `Medida ${normalizedMedida}`, "item": `https://www.carpluspneuseoficina.com.br/pneu-medida/${medida}` }
              ]
            }
          ]
        }
      : { title: 'Pneu não encontrado | Carplus', description: 'Pneu não encontrado.' }
  );

  if (tiresWithMeasure.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6 pt-24 md:pt-28">
        <Navbar />
        <div className="text-center">
          <h1 className="text-4xl font-bold uppercase mb-4">Medida não encontrada</h1>
          <p className="text-gray-500 mb-8">Não encontramos pneus na medida {normalizedMedida} em nosso catálogo.</p>
          <Link to="/pneus" className="bg-primary text-black px-7 py-3 rounded-full font-bold uppercase tracking-widest text-sm">Ver Catálogo Completo</Link>
        </div>
        <Footer />
      </div>
    );
  }

  if (!tire) return null;

  // Combina todos os carros compatíveis de todas as variantes
  const allCompatibleCars = useMemo(() => {
    const cars = new Set<string>();
    tiresWithMeasure.forEach(t => t.carros.forEach(car => cars.add(car)));
    return Array.from(cars).sort();
  }, [tiresWithMeasure]);

  const relatedTires = TIRES.filter(t => t && t.aro === tire.aro && !tiresWithMeasure.some(tw => tw.id === t.id)).slice(0, 4);

  const whatsappMsg = `Olá! Vi no site os pneus na medida *${normalizedMedida}*. Gostaria de consultar preços e disponibilidade das opções disponíveis.`;

  return (
    <div className="min-h-screen bg-gray-50 pt-24 md:pt-28">
      {__seo}
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 md:px-6 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-400 mb-8 overflow-x-auto whitespace-nowrap pb-2">
          <Link to="/" className="hover:text-black">Home</Link>
          <ChevronRight size={12} />
          <Link to="/pneus" className="hover:text-black">Pneus</Link>
          <ChevronRight size={12} />
          <span className="text-black">Medida {normalizedMedida}</span>
        </nav>

        {/* Header com badge de variantes */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary text-black px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
              <Layers size={16} />
              {tiresWithMeasure.length} {tiresWithMeasure.length === 1 ? 'opção disponível' : 'opções disponíveis'}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter italic leading-none mb-2">
            Pneu <span className="text-primary">{normalizedMedida}</span>
          </h1>
          <p className="text-lg text-gray-500">
            Compare todas as opções de pneus {normalizedMedida} disponíveis na Carplus
          </p>
        </div>

        {/* Seletor de Linha/Variante */}
        <section className="bg-white rounded-[2rem] p-6 md:p-8 shadow-xl border border-gray-100 mb-8">
          <h2 className="text-lg font-bold uppercase tracking-tight mb-4 flex items-center gap-2">
            <Layers size={20} className="text-primary" />
            Selecione a Linha
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {lineOptions.map((line) => {
              const lineTires = lineGroups[line];
              const firstTire = lineTires[0];
              const isSelected = selectedLine === line;
              
              return (
                <button
                  key={line}
                  onClick={() => setSelectedLine(line)}
                  className={`relative p-4 rounded-2xl border-2 transition-all text-left ${
                    isSelected 
                      ? 'border-primary bg-primary/5 shadow-lg' 
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {isSelected && (
                    <div className="absolute top-3 right-3">
                      <CheckCircle2 size={20} className="text-primary" />
                    </div>
                  )}
                  <div className="flex items-center gap-3 mb-2">
                    <img loading="lazy" 
                      src={firstTire.imagem} 
                      alt={firstTire.linha}
                      width={64}
                      height={64}
                      className="w-16 h-16 object-contain [mix-blend-mode:multiply]"
                    />
                    <div>
                      <span className="text-[10px] font-bold text-primary uppercase tracking-widest block">{firstTire.marca}</span>
                      <span className="font-bold text-black block">{firstTire.linha}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="text-[10px] bg-gray-100 text-gray-600 px-2 py-1 rounded-full font-medium">
                      {firstTire.categoria}
                    </span>
                    <span className="text-[10px] bg-gray-100 text-gray-600 px-2 py-1 rounded-full font-medium">
                      {firstTire.indiceCarga}
                    </span>
                  </div>
                  {lineTires.length > 1 && (
                    <span className="text-[10px] text-gray-400 mt-2 block">
                      + {lineTires.length - 1} {lineTires.length - 1 === 1 ? 'variante' : 'variantes'}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </section>

        {/* Detalhes do Pneu Selecionado */}
        <section className="bg-white rounded-[2.5rem] p-8 md:p-14 shadow-2xl border border-gray-100 mb-12">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            
            {/* Product Image */}
            <div className="lg:w-1/2">
              <motion.div 
                key={tire.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative overflow-visible group flex justify-center items-center py-10"
              >
                <div className="absolute top-0 left-0 z-10 flex flex-col gap-3">
                  {tire.destaque && (
                    <span className="bg-primary text-black px-4 py-1.5 rounded-full text-xs font-bold uppercase flex items-center gap-2 shadow-xl">
                      <Star size={14} fill="currentColor" /> Destaque
                    </span>
                  )}
                  {tire.novoModelo && (
                    <span className="bg-black text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-xl">
                      Lançamento
                    </span>
                  )}
                </div>
                <motion.img 
                  key={tire.imagemGrande}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  src={tire.imagemGrande} 
                  alt={tire.nome}
                  width={600}
                  height={600}
                  className="w-full h-[300px] md:h-[500px] object-contain relative z-10 [mix-blend-mode:multiply] group-hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
            </div>

            {/* Product Info */}
            <div className="lg:w-1/2">
              <motion.div
                key={tire.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <div className="flex items-center gap-3 mb-6 flex-wrap">
                  <span className="bg-black text-white px-4 py-1 rounded-lg text-xs font-bold uppercase tracking-widest">{tire.marca}</span>
                  <span className="bg-gray-100 text-gray-500 px-3 py-1 rounded-lg text-xs font-bold uppercase italic">Aro {tire.aro}</span>
                  <span className="bg-gray-100 text-gray-500 px-3 py-1 rounded-lg text-xs font-bold uppercase italic tracking-tighter">{tire.categoria}</span>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-lg text-xs font-bold uppercase">{tire.linha}</span>
                </div>

                <h2 className="text-3xl md:text-5xl font-bold mb-6 uppercase tracking-tighter italic leading-none">
                  {tire.nome}
                </h2>

                <p className="text-lg text-gray-600 mb-8 leading-relaxed font-medium">
                  {tire.descricao}
                </p>

                {/* Variantes dentro da linha */}
                {lineGroups[selectedLine]?.length > 1 && (
                  <div className="mb-8">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3 block">Variantes disponíveis:</span>
                    <div className="flex flex-wrap gap-2">
                      {lineGroups[selectedLine].map((variant) => (
                        <button
                          key={variant.id}
                          onClick={() => setSelectedTire(variant)}
                          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                            selectedTire?.id === variant.id
                              ? 'bg-primary text-black'
                              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                          }`}
                        >
                          {variant.nome.replace(`${variant.marca} ${variant.medida} `, '').replace(`${variant.linha} `, '')}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
                  <div className="bg-gray-50 p-4 rounded-2xl">
                    <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Medida</span>
                    <span className="text-lg font-bold text-black italic">{tire.medida}</span>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-2xl">
                    <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Índice Carga</span>
                    <span className="text-lg font-bold text-black italic">{tire.indiceCarga}</span>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-2xl">
                    <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Velocidade</span>
                    <span className="text-lg font-bold text-black italic">{tire.indiceVelocidade}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <motion.a 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href={`https://wa.me/554130827282?text=${encodeURIComponent(whatsappMsg)}`}
                    target="_blank"
                    className="flex-grow flex items-center justify-center gap-3 bg-[#25D366] text-white py-4 rounded-full font-bold text-base hover:bg-green-600 transition-all shadow-2xl shadow-green-200"
                  >
                    <MessageSquare size={24} /> Orçamento no WhatsApp
                  </motion.a>
                  <motion.a 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href="tel:+554130827282"
                    className="bg-black text-white px-7 py-4 rounded-full font-bold hover:bg-gray-900 transition-all flex items-center justify-center gap-3"
                  >
                    <Phone size={20} /> Ligar
                  </motion.a>
                </div>

                <div className="flex flex-wrap items-center gap-6 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span>Pronta Entrega no Portão</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck size={14} className="text-primary" />
                    <span>Garantia de Fábrica</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={14} className="text-primary" />
                    <span>Montagem em 40 min</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Technical Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {/* Specs Table */}
          <div className="lg:col-span-2 bg-white rounded-[2rem] p-8 md:p-12 shadow-xl">
            <h2 className="text-3xl font-bold mb-8 uppercase italic tracking-tighter flex items-center gap-3">
              <Award className="text-primary" size={32} /> Especificações Técnicas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-1">
              {[
                { label: 'Marca', value: tire.marca },
                { label: 'Linha', value: tire.linha },
                { label: 'Medida', value: tire.medida },
                { label: 'Aro', value: `${tire.aro}"` },
                { label: 'Largura', value: `${tire.largura}mm` },
                { label: 'Perfil', value: `${tire.perfil}%` },
                { label: 'Índice de Carga', value: tire.indiceCarga },
                { label: 'Índice de Velocidade', value: tire.indiceVelocidade },
                { label: 'Categoria', value: tire.categoria }
              ].map((spec, i) => (
                <div key={i} className="flex items-center justify-between py-4 border-b border-gray-50 last:border-0 md:last:border-b">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{spec.label}</span>
                  <span className="font-bold text-black">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Compatible Cars - todas as variantes */}
          <div className="bg-dark text-white rounded-[2rem] p-8 md:p-12 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <CarFront size={120} />
            </div>
            <h2 className="text-3xl font-bold mb-4 uppercase italic tracking-tighter relative z-10">Carros <br/> Compatíveis</h2>
            <p className="text-[10px] text-white/60 uppercase font-bold tracking-widest mb-6">
              Todos os veículos compatíveis com {normalizedMedida}
            </p>
            <div className="space-y-3 relative z-10 max-h-[400px] overflow-y-auto pr-2">
              {allCompatibleCars.length > 0 ? (
                allCompatibleCars.map((car, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 p-4 rounded-xl flex items-center gap-3 hover:bg-white/10 transition-all cursor-default group">
                    <div className="bg-primary text-black p-1.5 rounded-lg group-hover:scale-110 transition-transform">
                      <CheckCircle2 size={14} />
                    </div>
                    <span className="font-bold text-sm tracking-tight">{car}</span>
                  </div>
                ))
              ) : (
                <p className="text-white/40 text-sm">Consulte a compatibilidade com seu veículo</p>
              )}
            </div>
            <p className="mt-8 text-[10px] text-white/40 uppercase font-bold tracking-widest italic leading-relaxed">
              * Verifique sempre a medida correta no manual do proprietário ou na lateral do seu pneu atual.
            </p>
          </div>
        </div>

        {/* Comparison Table - todas as variantes */}
        <section className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl mb-20">
          <h2 className="text-3xl font-bold mb-8 uppercase italic tracking-tighter flex items-center gap-3">
            <Layers className="text-primary" size={32} /> Compare Todas as Opções {normalizedMedida}
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left text-[10px] font-bold text-gray-400 uppercase tracking-widest py-4 px-2">Pneu</th>
                  <th className="text-left text-[10px] font-bold text-gray-400 uppercase tracking-widest py-4 px-2">Linha</th>
                  <th className="text-left text-[10px] font-bold text-gray-400 uppercase tracking-widest py-4 px-2">Categoria</th>
                  <th className="text-left text-[10px] font-bold text-gray-400 uppercase tracking-widest py-4 px-2">Carga</th>
                  <th className="text-left text-[10px] font-bold text-gray-400 uppercase tracking-widest py-4 px-2">Velocidade</th>
                  <th className="text-center text-[10px] font-bold text-gray-400 uppercase tracking-widest py-4 px-2">Ação</th>
                </tr>
              </thead>
              <tbody>
                {tiresWithMeasure.map((t) => (
                  <tr 
                    key={t.id} 
                    className={`border-b border-gray-50 hover:bg-gray-50 transition-colors ${
                      selectedTire?.id === t.id ? 'bg-primary/5' : ''
                    }`}
                  >
                    <td className="py-4 px-2">
                      <div className="flex items-center gap-3">
                              <img loading="lazy" src={t.imagem} alt={t.nome} width={48} height={48} className="w-12 h-12 object-contain [mix-blend-mode:multiply]" />
                        <div>
                          <span className="text-[10px] font-bold text-primary uppercase tracking-widest block">{t.marca}</span>
                          <span className="font-bold text-sm">{t.nome.replace(`${t.marca} `, '').replace(`${t.medida} `, '')}</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-2">
                      <span className="text-sm font-medium">{t.linha}</span>
                    </td>
                    <td className="py-4 px-2">
                      <span className="text-[10px] bg-gray-100 text-gray-600 px-2 py-1 rounded-full font-medium">{t.categoria}</span>
                    </td>
                    <td className="py-4 px-2">
                      <span className="text-sm font-medium">{t.indiceCarga.split(' ')[0]}</span>
                    </td>
                    <td className="py-4 px-2">
                      <span className="text-sm font-medium">{t.indiceVelocidade.split(' ')[0]}</span>
                    </td>
                    <td className="py-4 px-2 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          onClick={() => {
                            setSelectedLine(`${t.marca} - ${t.linha}`);
                            setSelectedTire(t);
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }}
                          className="text-[10px] font-bold text-primary hover:underline uppercase"
                        >
                          Selecionar
                        </button>
                        <Link
                          to={`/pneu/${t.slug}`}
                          className="text-[10px] font-bold text-gray-400 hover:text-black uppercase"
                        >
                          Ver Detalhes
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Why Buy Carplus */}
        <section className="bg-primary rounded-[2.5rem] p-10 md:p-20 mb-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <img loading="lazy"
              src="/images/loja/oficina-mecanica-portao-curitiba.png"
              width={1200}
              height={801}
              className="w-full h-full object-cover grayscale"
              alt="Oficina Carplus no Portão em Curitiba"
            />
          </div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-7xl font-bold mb-8 uppercase tracking-tighter italic leading-none text-black">
              Por que comprar na Carplus Portão?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              {[
                "Montagem e balanceamento gratuitos",
                "Parcelamento em até 10x sem juros",
                "Garantia oficial de fábrica",
                "Instalação rápida (agendada)",
                "Atendimento Especializado em Curitiba",
                "4.9/5 estrelas no Google Maps"
              ].map((item, i) => (
                <div key={i} className="bg-black/5 p-5 rounded-2xl flex items-center gap-4 border border-black/10">
                  <div className="bg-black text-primary p-2 rounded-xl flex-shrink-0">
                    <CheckCircle2 size={20} />
                  </div>
                  <span className="font-bold text-black uppercase tracking-tighter leading-none">{item}</span>
                </div>
              ))}
            </div>
            
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="mt-12 inline-block max-w-full"
            >
              <a 
                href="https://wa.me/554130827282"
                target="_blank"
                className="bg-black text-white px-6 sm:px-10 py-3.5 sm:py-4 rounded-full font-bold text-sm sm:text-base shadow-2xl hover:bg-gray-900 transition-all flex items-center justify-center gap-3 w-full sm:w-auto"
              >
                Sair com Pneus Novos Agora <MessageSquare />
              </a>
            </motion.div>
          </div>
        </section>

        {/* Tips Section */}
        <TireTips tireName={`Pneu ${normalizedMedida}`} categoria={tire.categoria} />

        {/* FAQ Section */}
        <TireFAQ tire={tire} />

        {/* Related Products */}
        {relatedTires.length > 0 && (
          <section className="mb-20 px-4">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter italic leading-none">
                Outras Opções <span className="text-primary italic">Aro {tire.aro}</span>
              </h2>
              <Link to="/pneus" className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors flex items-center gap-2">
                Ver Tudo <ArrowLeft size={14} className="rotate-180" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedTires.map(t => (
                <Link 
                  key={t.id}
                  to={`/pneu/${t.slug}`}
                  className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-2xl hover:border-primary transition-all group"
                >
                  <div className="relative mb-6 overflow-visible flex items-center justify-center p-4">
                  <img loading="lazy"
                    src={t.imagem}
                    alt={t.nome}
                    width={600}
                    height={600}
                    className="h-32 object-contain group-hover:scale-110 transition-transform duration-500 [mix-blend-mode:multiply]"
                  />
                  </div>
                  <span className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1 block">{t.marca}</span>
                  <h3 className="font-bold uppercase tracking-tighter mb-4 line-clamp-2 leading-tight group-hover:text-primary transition-colors">
                    {t.nome}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-gray-400 italic">Disponível</span>
                    <ChevronRight className="text-gray-300 group-hover:text-primary group-hover:translate-x-1 transition-all" size={20} />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Internal linking SEO */}
        <section className="mb-20 px-4">
          <div className="bg-gray-50 rounded-[2rem] p-8 md:p-12 border border-gray-100">
            <h2 className="text-2xl font-bold uppercase tracking-tighter italic mb-2">
              Explore mais pneus em Curitiba
            </h2>
            <p className="text-gray-500 text-sm font-medium mb-8">
              Navegue por aro, marca ou veículo e encontre o pneu ideal com instalação inclusa no Portão.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to={`/pneu-aro-${tire.aro}-curitiba`}
                className="bg-primary text-black px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-tight hover:bg-black hover:text-primary transition-all"
              >
                Pneu Aro {tire.aro}
              </Link>
              {[['pirelli','Pirelli'],['michelin','Michelin'],['goodyear','Goodyear'],['continental','Continental'],['yokohama','Yokohama']].map(([slug,name]) => (
                <Link
                  key={slug}
                  to={`/pneu-${slug}-curitiba`}
                  className="bg-white border border-gray-200 px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-tight hover:border-primary hover:text-primary transition-all"
                >
                  {name}
                </Link>
              ))}
              <Link
                to="/medidas-de-pneus-curitiba"
                className="bg-white border border-gray-200 px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-tight hover:border-primary hover:text-primary transition-all"
              >
                Todas as Medidas
              </Link>
              <Link
                to="/pneus-curitiba"
                className="bg-white border border-gray-200 px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-tight hover:border-primary hover:text-primary transition-all flex items-center gap-2"
              >
                Central de Pneus <ChevronRight size={14} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
