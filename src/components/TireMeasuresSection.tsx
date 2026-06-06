import { useEffect, useRef, useState } from 'react';

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
      className="relative w-full overflow-hidden pt-8 pb-0 px-4 md:pt-12 md:px-8 text-center"
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
      <h2
        className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}
      >
        <span className="text-white">Como entender as </span>
        <span className="text-amber-500">medidas</span>
        <span className="text-white"> do pneu?</span>
      </h2>

      {/* Description */}
      <p
        className={`text-gray-400 text-base sm:text-lg md:text-xl max-w-xl mx-auto mb-6 md:mb-8 leading-relaxed px-2 transition-all duration-500 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2.5'}`}
      >
        Entenda o significado dos numeros na lateral do seu pneu e escolha o modelo certo.
      </p>

      {/* Infographic Image */}
      <div
        className={`w-full max-w-[900px] mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <img
          src="/images/pneus/pneus-medidas.webp"
          alt="Infográfico mostrando as medidas de um pneu: Largura em milímetros, Altura em relação à largura e Aro em polegadas, com exemplo 225/55 R18"
          width={600}
          height={396}
          className="w-full h-auto"
          loading="lazy"
        />
      </div>
    </section>
  );
}
