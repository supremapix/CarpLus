import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import * as LucideIcons from 'lucide-react';
import { SERVICES } from '../data';
import { SERVICE_CATEGORIES, BUSINESS_INFO } from '../data/services';
import SectionTitle from './SectionTitle';

// Helper para pegar icone do Lucide
const getIcon = (iconName: string) => {
  const Icon = (LucideIcons as any)[iconName];
  return Icon || LucideIcons.Circle;
};

// Flatten all services from categories
const ALL_SERVICES = SERVICE_CATEGORIES.flatMap(cat => 
  cat.services.map(s => ({ ...s, categoryName: cat.name, categoryIcon: cat.icon }))
);

const STUDIO_IMAGES = [
  "/images/loja/loja-de-pneus.webp",
  "/images/loja/loja-de-pneus-pirelli.webp",
  "/images/loja/loja-de-pneus-em-curitiba.webp",
  "/images/loja/loja-de-pneus-curitiba.webp"
];

// Service Card para o carrossel
function ServiceCarouselCard({ service, index }: { service: typeof ALL_SERVICES[0]; index: number }) {
  const Icon = getIcon(service.icon);
  const CatIcon = getIcon(service.categoryIcon);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: Math.min(index * 0.05, 0.3) }}
      className="flex-shrink-0 w-[280px] sm:w-[300px] bg-gradient-to-br from-gray-50 to-white border border-gray-100 rounded-2xl p-5 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30 transition-all group"
    >
      {/* Category badge */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
          <CatIcon size={12} className="text-primary" />
        </div>
        <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">{service.categoryName}</span>
      </div>
      
      {/* Icon and title */}
      <div className="flex items-start gap-3 mb-3">
        <div className="w-12 h-12 rounded-xl bg-white shadow-md border border-gray-100 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-colors">
          <Icon size={22} className="text-gray-700 group-hover:text-white transition-colors" />
        </div>
        <h3 className="font-bold text-gray-900 text-sm uppercase tracking-tight leading-tight pt-1 flex-1">
          {service.name}
        </h3>
      </div>
      
      {/* Description */}
      <p className="text-xs text-gray-500 leading-relaxed mb-4 line-clamp-2">
        {service.shortDescription}
      </p>
      
      {/* Highlights */}
      <ul className="space-y-1.5 mb-4">
        {service.highlights.slice(0, 2).map((h, i) => (
          <li key={i} className="flex items-start gap-2 text-[11px] text-gray-600">
            <LucideIcons.Check size={12} className="text-green-500 mt-0.5 shrink-0" />
            <span className="line-clamp-1">{h}</span>
          </li>
        ))}
      </ul>
      
      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
        {service.estimatedTime && (
          <span className="text-[10px] text-gray-400 flex items-center gap-1">
            <LucideIcons.Clock size={10} /> {service.estimatedTime}
          </span>
        )}
        <Link 
          to={`/servico/${service.slug}`}
          className="text-primary text-[11px] font-bold uppercase tracking-tight flex items-center gap-1 hover:gap-2 transition-all"
        >
          Ver mais <LucideIcons.ChevronRight size={12} />
        </Link>
      </div>
    </motion.div>
  );
}

export default function ServicesGrid() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % STUDIO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Check scroll position
  const checkScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('scroll', checkScroll);
      return () => carousel.removeEventListener('scroll', checkScroll);
    }
  }, [activeCategory]);

  // Scroll functions
  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 320;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Filter services by category
  const filteredServices = activeCategory 
    ? ALL_SERVICES.filter(s => SERVICE_CATEGORIES.find(c => c.id === activeCategory)?.services.some(cs => cs.id === s.id))
    : ALL_SERVICES;

  return (
    <section id="servicos" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 gap-4 md:gap-6">
          <div className="max-w-2xl">
            <SectionTitle prefix="NOSSOS" highlight="SERVIÇOS" />
            <p className="text-base sm:text-lg md:text-xl text-gray-600 font-light text-left">
              Oficina mecânica completa para todas as marcas nacionais e importadas.
            </p>
          </div>
          <Link 
            to="/servicos"
            className="flex items-center gap-2 bg-primary text-black px-5 py-3 rounded-full font-bold text-sm uppercase tracking-tight hover:bg-yellow-400 transition-colors shadow-lg shadow-primary/20"
          >
            Ver Todos os Serviços
            <LucideIcons.ArrowRight size={16} />
          </Link>
        </div>

        {/* Category Filter Pills */}
        <div className="mb-6 overflow-x-auto scrollbar-hide">
          <div className="flex items-center gap-2 pb-2">
            <button
              onClick={() => setActiveCategory(null)}
              className={`shrink-0 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-tight transition-all flex items-center gap-2 ${
                activeCategory === null
                  ? 'bg-dark text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <LucideIcons.LayoutGrid size={14} />
              Todos
            </button>
            {SERVICE_CATEGORIES.map(cat => {
              const CatIcon = getIcon(cat.icon);
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`shrink-0 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-tight transition-all flex items-center gap-2 whitespace-nowrap ${
                    activeCategory === cat.id
                      ? 'bg-dark text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <CatIcon size={14} />
                  {cat.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Services Carousel */}
        <div className="relative">
          {/* Scroll buttons - desktop only */}
          {canScrollLeft && (
            <button
              onClick={() => scroll('left')}
              className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white shadow-xl rounded-full items-center justify-center hover:bg-primary hover:text-white transition-colors border border-gray-100"
              aria-label="Rolar para esquerda"
            >
              <LucideIcons.ChevronLeft size={24} />
            </button>
          )}
          {canScrollRight && (
            <button
              onClick={() => scroll('right')}
              className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white shadow-xl rounded-full items-center justify-center hover:bg-primary hover:text-white transition-colors border border-gray-100"
              aria-label="Rolar para direita"
            >
              <LucideIcons.ChevronRight size={24} />
            </button>
          )}

          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent z-[5] pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-[5] pointer-events-none" />

          {/* Carousel container */}
          <div
            ref={carouselRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4 snap-x snap-mandatory touch-pan-x"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {filteredServices.map((service, index) => (
              <div key={service.id} className="snap-start">
                <ServiceCarouselCard service={service} index={index} />
              </div>
            ))}
          </div>

          {/* Scroll hint for mobile */}
          <div className="flex items-center justify-center gap-2 mt-4 md:hidden">
            <span className="text-xs text-gray-400">Arraste para ver mais</span>
            <LucideIcons.MoveHorizontal size={14} className="text-gray-400" />
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 bg-gray-50 rounded-2xl p-6">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-bold text-dark">{ALL_SERVICES.length}+</p>
            <p className="text-xs text-gray-500 uppercase tracking-wider">Serviços</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-bold text-primary">5.0</p>
            <p className="text-xs text-gray-500 uppercase tracking-wider">Avaliação Google</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-bold text-dark">214+</p>
            <p className="text-xs text-gray-500 uppercase tracking-wider">Avaliações</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-bold text-dark">10x</p>
            <p className="text-xs text-gray-500 uppercase tracking-wider">Sem Juros</p>
          </div>
        </div>

        {/* Diagnostic Banner */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
           <div className="bg-dark text-white p-8 md:p-12 rounded-3xl md:rounded-[40px] flex flex-col justify-center items-center text-center">
              <div className="inline-block bg-primary/20 px-4 py-1 text-[10px] font-bold uppercase tracking-widest text-primary mb-6 rounded">
                 Scanner Automotivo Profissional
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl mb-4 md:mb-6 leading-none font-bold">Diagnóstico <br/> <span className="text-primary italic">Computadorizado</span></h3>
              <p className="text-sm sm:text-base md:text-lg text-white/70 mb-6 md:mb-8 max-w-md">Utilizamos equipamentos de última geração para identificar com precisão qualquer problema no sistema eletrônico do seu veículo.</p>
              <div className="space-y-3 md:space-y-4 mb-6 md:mb-8 text-left">
                 {[
                   'Leitura de Injeção Eletrônica',
                   'Reset de Mensagens no Painel', 
                   'Análise de Sensores e Atuadores',
                   'Diagnóstico de Módulos ABS e Airbag'
                 ].map(item => (
                   <div key={item} className="flex items-center gap-3">
                      <div className="w-5 h-5 md:w-6 md:h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <LucideIcons.Check className="text-primary" size={12} />
                      </div>
                      <span className="font-medium text-white/90 text-sm md:text-base">{item}</span>
                   </div>
                 ))}
              </div>
              <Link 
                to="/servico/scanner-automotivo"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-black font-bold uppercase tracking-widest text-xs px-6 py-4 rounded-xl transition-all"
              >
                Agendar Diagnóstico <LucideIcons.ArrowRight size={14} />
              </Link>
           </div>
           
           <div className="relative rounded-3xl md:rounded-[40px] overflow-hidden flex flex-col bg-white border border-gray-100 shadow-xl">
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 rounded-t-3xl md:rounded-t-[40px]">
                {STUDIO_IMAGES.map((src, i) => (
                  <motion.img 
                    key={src}
                    src={src} 
                    alt="Oficina Mecânica Carplus" 
                    initial={false}
                    animate={{ 
                      opacity: i === currentImageIndex ? 1 : 0,
                      scale: i === currentImageIndex ? 1 : 1.05
                    }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="absolute inset-0 w-full h-full object-contain"
                  />
                ))}
                
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {STUDIO_IMAGES.map((_, i) => (
                    <button 
                      key={i}
                      onClick={() => setCurrentImageIndex(i)}
                      className={`w-2 h-2 rounded-full transition-all ${i === currentImageIndex ? 'w-8 bg-primary' : 'bg-white/50'}`}
                    />
                  ))}
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent pointer-events-none" />
              </div>
              
              <div className="p-6 md:p-8 lg:p-12 flex-grow flex flex-col justify-center">
                 <div className="inline-block bg-primary px-4 py-1 text-[10px] font-bold uppercase tracking-widest text-white mb-4 rounded self-start">
                    Equipe Especializada
                 </div>
                 <p className="text-dark text-lg md:text-xl lg:text-2xl font-bold leading-tight">Técnicos treinados para atender todas as marcas do mercado.</p>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
