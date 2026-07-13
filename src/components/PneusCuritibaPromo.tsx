import { useEffect, useRef, useState } from 'react';
import { MapPin, Tag, Phone, ChevronRight, ChevronLeft, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import LiteYouTube from './LiteYouTube';
import { isPrerenderEager } from '../lib/prerender';

const VIDEOS = [
  {
    id: 'xlwso3EmUog',
    title: 'CarPlus Pneus',
    subtitle: 'Sua loja de pneus no Portão',
  },
  {
    id: 'v72kI13VyAU',
    title: 'Promoções CarPlus',
    subtitle: 'Ofertas imperdíveis para você',
  },
  {
    id: 'TY8qfETXlJQ',
    title: 'Troca de Óleo e Filtros',
    subtitle: 'Manutenção completa do motor',
  },
];

export default function PneusCuritibaPromo() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(isPrerenderEager);
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const nextVideo = () => {
    setActiveVideoIndex((prev) => (prev + 1) % VIDEOS.length);
  };

  const prevVideo = () => {
    setActiveVideoIndex((prev) => (prev - 1 + VIDEOS.length) % VIDEOS.length);
  };

  const activeVideo = VIDEOS[activeVideoIndex];

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden py-16 md:py-24 px-4 md:px-8 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-12 md:mb-16 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 text-primary px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5">
            <Tag size={14} />
            Ofertas Exclusivas
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 uppercase tracking-normal">
            <span className="text-dark">Pneus em Curitiba e </span>
            <span className="text-primary italic">Promoção!</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Os melhores preços em pneus no bairro Portão. Condições imperdíveis para você trocar seus pneus com segurança e economia.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Video Gallery 9:16 */}
          <div
            className={`relative mx-auto w-full max-w-[320px] lg:max-w-[380px] transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
          >
            {/* Navigation Arrows */}
            <button
              onClick={prevVideo}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-dark hover:bg-primary hover:text-black transition-colors"
              aria-label="Vídeo anterior"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextVideo}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-dark hover:bg-primary hover:text-black transition-colors"
              aria-label="Próximo vídeo"
            >
              <ChevronRight size={20} />
            </button>

            <div className="relative aspect-[9/16] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-dark/10">
              {/* YouTube Shorts Embed */}
              <div
                key={activeVideo.id}
                className="absolute inset-0 [animation:var(--animate-fade-in)]"
              >
                <LiteYouTube
                  videoId={activeVideo.id}
                  title={`CarPlus - ${activeVideo.title}`}
                  params={`mute=1&loop=1&playlist=${activeVideo.id}&controls=1&showinfo=0&rel=0&modestbranding=1&playsinline=1`}
                />
              </div>
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-dark/20 pointer-events-none" />
              
              {/* Premium Badge */}
              <div className="absolute top-4 left-4 z-10">
                <div className="bg-primary text-black px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-1.5 shadow-lg">
                  <Play size={10} fill="currentColor" />
                  Destaque Premium
                </div>
              </div>
              
              {/* Bottom Info */}
              <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                <p className="text-white font-bold text-lg mb-1">{activeVideo.title}</p>
                <p className="text-white/70 text-sm">{activeVideo.subtitle}</p>
              </div>
            </div>

            {/* Video Indicators */}
            <div className="flex justify-center gap-2 mt-4">
              {VIDEOS.map((video, index) => (
                <button
                  key={video.id}
                  onClick={() => setActiveVideoIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === activeVideoIndex
                      ? 'bg-primary w-8'
                      : 'bg-dark/30 hover:bg-dark/50'
                  }`}
                  aria-label={`Ver vídeo ${index + 1}`}
                />
              ))}
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
          </div>

          {/* Promo Content */}
          <div
            className={`space-y-6 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
          >
            {/* Promo Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Tag className="text-primary" size={24} />
                </div>
                <h3 className="font-bold text-lg mb-2 text-dark">Até 10x Sem Juros</h3>
                <p className="text-gray-500 text-sm">Parcele sua compra em até 10x sem juros no cartão de crédito.</p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <MapPin className="text-primary" size={24} />
                </div>
                <h3 className="font-bold text-lg mb-2 text-dark">Montagem Grátis</h3>
                <p className="text-gray-500 text-sm">Montagem, balanceamento e alinhamento gratuitos.</p>
              </div>
            </div>

            {/* Highlight Box */}
            <div className="bg-dark text-white p-8 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
              <div className="relative z-10 text-center">
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 uppercase italic tracking-tight">
                  Check-up <br /><span className="text-primary">Automotivo</span>
                </h3>
                <p className="text-white/70 mb-6 text-base sm:text-lg">
                  Garanta sua segurança com nossa revisão completa. Verificação de freios, suspensão, fluidos e sistema elétrico para uma viagem tranquila.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link
                    to="/centro-automotivo-portao"
                    className="bg-primary text-black px-6 py-3 rounded-xl font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-yellow-400 transition-colors shadow-lg shadow-primary/30"
                  >
                    Ver Serviços <ChevronRight size={16} />
                  </Link>
                  <a
                    href="https://wa.me/554130827282?text=Olá! Gostaria de agendar um Check-up Automotivo completo para meu veículo!"
                    className="bg-white/10 border border-white/30 text-white px-6 py-3 rounded-xl font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-white/20 transition-colors"
                  >
                    <Phone size={16} /> Agendar Agora
                  </a>
                </div>
              </div>
            </div>

            {/* Location Info */}
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="text-black" size={24} />
              </div>
              <div>
                <p className="font-bold text-dark">Portão, Curitiba - PR</p>
                <p className="text-gray-500 text-sm">Av. Presidente Arthur da Silva Bernardes, 1323 - Atendimento de Seg a Sáb</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
