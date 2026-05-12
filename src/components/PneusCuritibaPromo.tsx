import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Tag, Phone, ChevronRight, Play, Pause } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PneusCuritibaPromo() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

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

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden py-16 md:py-24 px-4 md:px-8 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 text-primary px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5">
            <Tag size={14} />
            Ofertas Exclusivas
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 uppercase tracking-tight">
            <span className="text-dark">Pneus em Curitiba e </span>
            <span className="text-primary italic">Promoção!</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Os melhores preços em pneus no bairro Portão. Condições imperdíveis para você trocar seus pneus com segurança e economia.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Video Premium 9:16 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mx-auto w-full max-w-[320px] lg:max-w-[380px]"
          >
            <div className="relative aspect-[9/16] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-dark/10">
              {/* YouTube Shorts Embed */}
              <iframe
                src={`https://www.youtube.com/embed/xlwso3EmUog?autoplay=1&mute=1&loop=1&playlist=xlwso3EmUog&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1`}
                title="CarPlus - Pneus em Curitiba"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              
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
                <p className="text-white font-bold text-lg mb-1">CarPlus Pneus</p>
                <p className="text-white/70 text-sm">Sua loja de pneus no Portão</p>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
          </motion.div>

          {/* Promo Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
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
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-3 uppercase italic tracking-tight">
                  Promoção <span className="text-primary">Relâmpago</span>
                </h3>
                <p className="text-white/70 mb-6 text-lg">
                  Troque 4 pneus e ganhe alinhamento 3D + balanceamento. Válido para todas as marcas em estoque.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    to="/pneus"
                    className="bg-primary text-black px-6 py-3 rounded-xl font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-yellow-400 transition-colors shadow-lg shadow-primary/30"
                  >
                    Ver Pneus <ChevronRight size={16} />
                  </Link>
                  <a
                    href="https://wa.me/554130827282?text=Olá! Vi a promoção de pneus no site e gostaria de saber mais!"
                    className="bg-white/10 border border-white/30 text-white px-6 py-3 rounded-xl font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-white/20 transition-colors"
                  >
                    <Phone size={16} /> WhatsApp
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
                <p className="text-gray-500 text-sm">Av. Arthur de Holanda, 54 - Atendimento de Seg a Sáb</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
