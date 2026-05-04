import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';

export default function TireMeasuresSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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
      className="relative w-full overflow-hidden pt-12 pb-0 px-4 md:pt-16 md:px-8 text-center"
      style={{
        backgroundColor: '#1a1a1a',
        backgroundImage: `
          repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 8px,
            rgba(255,255,255,0.025) 8px,
            rgba(255,255,255,0.025) 10px
          )
        `,
      }}
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="text-xl sm:text-2xl md:text-3xl font-bold mb-8 md:mb-10"
        style={{ 
          fontSize: 'clamp(1.1rem, 4vw, 1.75rem)',
        }}
      >
        <span className="text-white">Como entender as </span>
        <span className="text-amber-500">medidas</span>
        <span className="text-white"> do meu pneu?</span>
      </motion.h2>

      {/* Infographic Image */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full max-w-[900px] mx-auto"
      >
        <img
          src="https://carpluscwb.com.br/wp-content/uploads/2025/06/pneus-medidas.webp"
          alt="Infográfico mostrando as medidas de um pneu: Largura em milímetros, Altura em relação à largura e Aro em polegadas, com exemplo 225/55 R18"
          className="w-full h-auto"
          loading="lazy"
        />
      </motion.div>
    </section>
  );
}
