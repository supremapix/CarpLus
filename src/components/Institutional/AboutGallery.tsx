import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const GALLERY_IMAGES = [
  { src: '/images/galeria/fachada-fullservice.webp', alt: 'Fachada Carplus Pneus - Oficina Mecanica Full Service' },
  { src: '/images/galeria/fachada-carro.webp', alt: 'Fachada com carro da Carplus Pneus' },
  { src: '/images/galeria/proprietario-pneu.webp', alt: 'Proprietario Carplus Pneus' },
  { src: '/images/galeria/showroom.webp', alt: 'Showroom Carplus Pneus' },
  { src: '/images/galeria/sala-espera.webp', alt: 'Sala de Espera Carplus Pneus' },
  { src: '/images/galeria/atendimento-cliente.webp', alt: 'Atendimento ao cliente na Carplus Pneus' },
  { src: '/images/galeria/mecanico-carplus.webp', alt: 'Mecanico Carplus trabalhando' },
  { src: '/images/galeria/jeep-compass.webp', alt: 'Jeep Compass no elevador' },
  { src: '/images/galeria/alinhamento-jeep.webp', alt: 'Servico de alinhamento' },
  { src: '/images/galeria/troca-pneu.webp', alt: 'Troca de pneu' },
  { src: '/images/galeria/mecanico-motor.webp', alt: 'Mecanico trabalhando no motor' },
  { src: '/images/galeria/oficina-carros.webp', alt: 'Oficina com carros nos elevadores' },
  { src: '/images/galeria/montagem-pneu.webp', alt: 'Montagem de pneu' },
  { src: '/images/galeria/rodas-pretas.webp', alt: 'Rodas esportivas' },
  { src: '/images/galeria/mecanicos-trabalho.webp', alt: 'Mecanicos trabalhando na Carplus Pneus' },
  { src: '/images/galeria/oficina-vidro.webp', alt: 'Oficina vista pelo vidro' },
  { src: '/images/galeria/display-pneus.webp', alt: 'Display de pneus Pirelli' },
  { src: '/images/galeria/espaco-kids.webp', alt: 'Espaco Kids Carplus Pneus' },
  { src: '/images/galeria/escritorio.webp', alt: 'Escritorio Carplus Pneus' },
  { src: '/images/galeria/fachada-logo.webp', alt: 'Fachada com logo Carplus Pneus' },
  { src: '/images/galeria/caminhonete.webp', alt: 'Caminhonete Carplus Pneus' },
  { src: '/images/galeria/oficina-elevadores.webp', alt: 'Oficina com elevadores' },
  { src: '/images/galeria/loja-de-pneus-portao-curitiba-pirelli.png', alt: 'Loja de pneus Carplus no Portão em Curitiba - mecânico em atendimento' },
];

const AUTO_PLAY_INTERVAL = 4000;

export default function AboutGallery() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goToNext = useCallback(() => {
    setSelectedIndex((prev) => (prev + 1) % GALLERY_IMAGES.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(goToNext, AUTO_PLAY_INTERVAL);
    return () => clearInterval(interval);
  }, [isPaused, goToNext]);

  const handleThumbnailClick = (index: number) => {
    setSelectedIndex(index);
    setIsPaused(true);
  };

  const handleMainImageClick = () => {
    setIsPaused((prev) => !prev);
  };

  return (
    <section className="max-w-6xl mx-auto px-4 mb-12 md:mb-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl md:text-3xl font-bold text-white text-center mb-8"
      >
        Conheca Nossa <span className="text-amber-500">Estrutura</span>
      </motion.h2>

      <div className="flex flex-col lg:flex-row gap-4">
        {/* Main Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative flex-1 aspect-[16/10] lg:aspect-[16/9] bg-[#1a1a1a] rounded-xl overflow-hidden cursor-pointer group"
          onClick={handleMainImageClick}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={selectedIndex}
              src={GALLERY_IMAGES[selectedIndex].src}
              alt={GALLERY_IMAGES[selectedIndex].alt}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full object-cover"
            />
          </AnimatePresence>

          {/* Pause/Play indicator */}
          <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs text-white/80">
            <span
              className={`w-2 h-2 rounded-full ${isPaused ? 'bg-amber-500' : 'bg-green-500 animate-pulse'}`}
            />
            {isPaused ? 'Pausado - clique para continuar' : 'Automatico'}
          </div>

          {/* Image counter */}
          <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs text-white/80">
            {selectedIndex + 1} / {GALLERY_IMAGES.length}
          </div>
        </motion.div>

        {/* Thumbnails */}
        <div className="lg:w-32 xl:w-40 flex lg:flex-col gap-2 overflow-x-auto lg:overflow-y-auto lg:max-h-[400px] xl:max-h-[450px] pb-2 lg:pb-0 lg:pr-2 scrollbar-thin scrollbar-thumb-amber-500/50 scrollbar-track-transparent">
          {GALLERY_IMAGES.map((image, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              onClick={() => handleThumbnailClick(index)}
              className={`relative flex-shrink-0 w-20 h-14 lg:w-full lg:h-20 xl:h-24 rounded-lg overflow-hidden transition-all duration-200 ${
                selectedIndex === index
                  ? 'ring-2 ring-amber-500 ring-offset-2 ring-offset-[#0d0d0d]'
                  : 'opacity-60 hover:opacity-100'
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
              {selectedIndex === index && (
                <div className="absolute inset-0 bg-amber-500/20" />
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
