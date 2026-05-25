import { useState, useEffect, useRef, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import * as LucideIcons from 'lucide-react';
import { 
  MessageSquare, Clock, Star, ShieldCheck, CreditCard, Trophy, Phone,
  ChevronRight, ArrowUp
} from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import { SERVICE_CATEGORIES, BUSINESS_INFO, type Category, type Service } from '../data/services';
import { useSEO } from '../hooks/useSEO';

// Helper para pegar icone do Lucide
const getIcon = (iconName: string) => {
  const Icon = (LucideIcons as any)[iconName];
  return Icon || LucideIcons.Circle;
};

// Componente de contagem animada
function AnimatedCounter({ value, suffix = '' }: { value: string; suffix?: string }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <span ref={ref} className="font-display text-2xl md:text-3xl text-white">
      {isVisible ? value : '0'}{suffix}
    </span>
  );
}

// Card de Servico
function ServiceCard({ service, categoryId }: { service: Service; categoryId: string }) {
  const Icon = getIcon(service.icon);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-[#1a1a1a] border border-[#333] rounded-xl p-6 flex flex-col gap-4 hover:border-primary/60 transition-all group hover:shadow-lg hover:shadow-primary/10"
    >
      <div className="flex items-start gap-3">
        <div className="w-11 h-11 rounded-lg bg-[#2a2a2a] border border-[#444] flex items-center justify-center shrink-0">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        <h3 className="font-bold text-white text-base uppercase tracking-tight leading-tight pt-1">{service.name}</h3>
      </div>
      
      <p className="text-sm text-[#ccc] leading-relaxed">{service.shortDescription}</p>
      
      <ul className="space-y-1.5 flex-grow">
        {service.highlights.slice(0, 4).map((h, i) => (
          <li key={i} className="flex items-start gap-2 text-xs text-white/70">
            <span className="text-[#00C853] mt-0.5 shrink-0">✓</span>
            {h}
          </li>
        ))}
      </ul>
      
      <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#333]">
        {service.estimatedTime ? (
          <span className="text-xs text-white/40 flex items-center gap-1.5">
            <Clock size={12} /> {service.estimatedTime}
          </span>
        ) : (
          <span className="text-xs text-white/40">—</span>
        )}
        <div className="flex items-center gap-2">
          <Link
            to={`/servico/${service.slug}`}
            className="text-primary text-xs font-bold uppercase tracking-tight hover:underline flex items-center gap-1"
          >
            Detalhes <ChevronRight size={12} />
          </Link>
          <a
            href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(`Olá! Gostaria de agendar: ${service.name}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Agendar ${service.name} via WhatsApp`}
            className="bg-primary text-black px-3 py-2 rounded-full font-bold text-xs uppercase tracking-tight flex items-center gap-1.5 hover:bg-yellow-400 transition-colors group-hover:shadow-md group-hover:shadow-primary/20"
          >
            <MessageSquare size={12} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

// Secao de Categoria
function CategorySection({ category }: { category: Category }) {
  const Icon = getIcon(category.icon);
  
  return (
    <section id={category.id} className="scroll-mt-32">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-lg bg-primary/20 border border-primary/40 flex items-center justify-center">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white">
          {category.name}
        </h2>
        <div className="flex-grow h-px bg-gradient-to-r from-primary/40 to-transparent ml-4" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {category.services.map(service => (
          <ServiceCard key={service.id} service={service} categoryId={category.id} />
        ))}
      </div>
    </section>
  );
}

export default function ServicosPage() {
  const [activeCategory, setActiveCategory] = useState<string>('todos');
  const [showBackToTop, setShowBackToTop] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  // SEO - Otimizado para SEO local com canonical correto
  useSEO({
    title: 'Serviços de Oficina e Pneus em Curitiba Portão | Carplus Auto Center',
    description: 'Alinhamento 3D, troca de pneus, óleo, suspensão e freios em Curitiba. Carplus Auto Center no Portão – agende pelo (41) 3082-7282.',
    canonical: 'https://www.carpluspneuseoficina.com.br/servicos/',
    ogImage: 'https://www.carpluspneuseoficina.com.br/og-carplus.webp',
  });

  // Total de servicos
  const totalServices = useMemo(() => 
    SERVICE_CATEGORIES.reduce((acc, cat) => acc + cat.services.length, 0)
  , []);

  // Scroll listener para back to top
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll suave para categoria
  const scrollToCategory = (categoryId: string) => {
    setActiveCategory(categoryId);
    if (categoryId === 'todos') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(categoryId);
    if (element) {
      const navHeight = navRef.current?.offsetHeight || 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementPosition - navHeight - 20, behavior: 'smooth' });
    }
  };

  // Intersection Observer para highlight da categoria ativa
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveCategory(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -60% 0px' }
    );

    SERVICE_CATEGORIES.forEach(cat => {
      const element = document.getElementById(cat.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navbar />

      {/* Schema Markup */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "AutoRepair",
            "@id": "https://www.carpluspneuseoficina.com.br/#business",
            "name": "Carplus Auto Center",
            "alternateName": "Carplus Pneus e Oficina Mecânica",
            "url": "https://www.carpluspneuseoficina.com.br",
            "telephone": "+554130827282",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Av. Presidente Arthur da Silva Bernardes, 1323",
              "addressLocality": "Curitiba",
              "addressRegion": "PR",
              "postalCode": "80320-300",
              "addressCountry": "BR"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": -25.4853,
              "longitude": -49.2872
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
                "opens": "08:00",
                "closes": "18:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Saturday",
                "opens": "08:00",
                "closes": "12:00"
              }
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5.0",
              "reviewCount": "214",
              "bestRating": "5",
              "worstRating": "1"
            }
          },
          {
            "@type": "WebPage",
            "@id": "https://www.carpluspneuseoficina.com.br/servicos#webpage",
            "url": "https://www.carpluspneuseoficina.com.br/servicos",
            "name": "Serviços de Pneus e Oficina Mecânica em Curitiba | Carplus",
            "isPartOf": {"@id": "https://www.carpluspneuseoficina.com.br/#business"},
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {"@type": "ListItem", "position": 1, "name": "Início", "item": "https://www.carpluspneuseoficina.com.br"},
                {"@type": "ListItem", "position": 2, "name": "Serviços", "item": "https://www.carpluspneuseoficina.com.br/servicos"}
              ]
            }
          }
        ]
      })}} />

      {/* Hero */}
      <section className="pt-28 pb-12 px-4 bg-[#0a0a0a] text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />
        <div className="max-w-3xl mx-auto">
          {/* Breadcrumb */}
          <nav className="text-xs text-white/40 mb-6 flex items-center justify-center gap-2" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-white/70 transition-colors">Home</Link>
            <span className="text-white/20" aria-hidden="true">›</span>
            <span className="text-primary">Serviços</span>
          </nav>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white leading-tight mb-4 italic text-center">
            Nossos <span className="text-primary">Serviços</span>
          </h1>
          <p className="text-base md:text-lg text-white/55 max-w-xl mx-auto leading-relaxed">
            Oficina mecânica full service e loja de pneus no Portão, Curitiba. Tudo em um só lugar.
          </p>
          
          <div className="mt-6 inline-flex items-center gap-2 bg-primary/10 border border-primary/30 text-primary px-4 py-2 rounded-full text-sm font-bold">
            <LucideIcons.Wrench size={16} />
            {totalServices} Serviços Disponíveis
          </div>
        </div>
      </section>

      {/* Trust Bar / Stats */}
      <section className="bg-[#111] border-y border-white/05 py-8 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {BUSINESS_INFO.stats.map((stat, i) => {
            const Icon = getIcon(stat.icon);
            return (
              <div key={i} className="flex flex-col items-center gap-2 text-center">
                <Icon className="w-7 h-7 text-primary" />
                <AnimatedCounter value={stat.value} />
                <span className="text-[10px] md:text-xs text-white/45 uppercase tracking-wider">{stat.label}</span>
              </div>
            );
          })}
        </div>
      </section>

      {/* Sticky Category Navigation */}
      <div 
        ref={navRef}
        className="sticky top-0 z-50 bg-[#111] border-b border-primary/30 shadow-lg shadow-black/20"
      >
        <div className="max-w-7xl mx-auto px-4">
          {/* Scrollable nav with touch support */}
          <div className="relative">
            <nav 
              className="flex items-center gap-3 py-4 overflow-x-auto scrollbar-thin scrollbar-thumb-primary/50 scrollbar-track-transparent pb-3 cursor-grab active:cursor-grabbing touch-pan-x"
              style={{ WebkitOverflowScrolling: 'touch', scrollbarWidth: 'thin' }}
              aria-label="Filtros de categoria"
            >
              <button
                onClick={() => scrollToCategory('todos')}
                className={`shrink-0 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-tight transition-all flex items-center gap-2 ${
                  activeCategory === 'todos'
                    ? 'bg-primary text-black shadow-lg shadow-primary/30'
                    : 'bg-white/5 text-white/70 hover:bg-white/10 border border-white/10'
                }`}
              >
                <LucideIcons.LayoutGrid size={16} />
                <span>Todos</span>
              </button>
              {SERVICE_CATEGORIES.map(cat => {
                const CatIcon = getIcon(cat.icon);
                return (
                  <button
                    key={cat.id}
                    onClick={() => scrollToCategory(cat.id)}
                    className={`shrink-0 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-tight transition-all flex items-center gap-2 whitespace-nowrap ${
                      activeCategory === cat.id
                        ? 'bg-primary text-black shadow-lg shadow-primary/30'
                        : 'bg-white/5 text-white/70 hover:bg-white/10 border border-white/10'
                    }`}
                  >
                    <CatIcon size={16} />
                    <span>{cat.name}</span>
                  </button>
                );
              })}
            </nav>
            {/* Scroll indicator gradient */}
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#111] to-transparent pointer-events-none" />
          </div>
          {/* Progress bar showing scroll position */}
          <div className="h-0.5 bg-white/10 -mt-1">
            <div 
              className="h-full bg-primary transition-all duration-300"
              style={{ 
                width: `${((SERVICE_CATEGORIES.findIndex(c => c.id === activeCategory) + 1) / SERVICE_CATEGORIES.length) * 100}%` 
              }}
            />
          </div>
        </div>
      </div>

      {/* Services Sections */}
      <main className="py-16 px-4 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto space-y-20">
          {SERVICE_CATEGORIES.map(category => (
            <CategorySection key={category.id} category={category} />
          ))}
        </div>
      </main>

      {/* CTA Final */}
      <section className="py-16 px-4 bg-primary">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-black mb-4 italic leading-snug text-center">
            Pronto para agendar?
          </h2>
          <p className="text-black/70 text-base mb-8">
            Atendemos Seg–Sex 8h–18h e Sáb 8h–12h. Sem agendamento para a maioria dos serviços.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-tight flex items-center justify-center gap-2 hover:bg-gray-900 transition-colors shadow-xl"
            >
              <MessageSquare size={18} /> WhatsApp Agora
            </a>
            <Link
              to="/pneus"
              className="bg-black/10 text-black px-8 py-4 rounded-full font-bold text-sm uppercase tracking-tight flex items-center justify-center gap-2 border border-black/15 hover:bg-black/20 transition-colors"
            >
              Ver Catálogo de Pneus
            </Link>
          </div>
        </div>
      </section>

      {/* WhatsApp Flutuante */}
      <a
        href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco pelo WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 hover:scale-110 transition-transform"
      >
        <MessageSquare className="w-6 h-6 text-white" fill="white" />
      </a>

      {/* Back to Top */}
      {showBackToTop && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Voltar ao topo"
          className="fixed bottom-6 left-6 z-50 w-12 h-12 bg-white/10 backdrop-blur border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
        >
          <ArrowUp className="w-5 h-5 text-white" />
        </motion.button>
      )}

      <Footer />
    </div>
  );
}
