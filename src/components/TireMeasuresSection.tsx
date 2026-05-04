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
      className="relative w-full overflow-hidden bg-zinc-900"
    >
      {/* Content Container */}
      <div className="py-10 md:py-16">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center text-lg md:text-2xl font-bold uppercase tracking-wide mb-10 md:mb-14 px-4"
        >
          <span className="text-white">Como entender as </span>
          <span className="text-[#f5a623]">medidas</span>
          <span className="text-white"> do meu pneu?</span>
        </motion.h2>

        {/* Three Columns - Largura, Altura, Aro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-row justify-center items-start gap-6 md:gap-16 px-4 mb-10 md:mb-14"
        >
          {/* Largura */}
          <div className="flex flex-col items-center text-center">
            <svg
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-16 h-16 md:w-20 md:h-20 mb-3"
            >
              {/* Tire side view */}
              <rect x="15" y="20" width="50" height="40" rx="4" stroke="#f5a623" strokeWidth="2" fill="none" />
              <rect x="20" y="25" width="40" height="30" rx="2" stroke="#f5a623" strokeWidth="1" fill="none" opacity="0.5" />
              {/* Horizontal arrow */}
              <line x1="10" y1="70" x2="70" y2="70" stroke="#f5a623" strokeWidth="2" />
              <polygon points="10,70 16,67 16,73" fill="#f5a623" />
              <polygon points="70,70 64,67 64,73" fill="#f5a623" />
            </svg>
            <span className="text-[#f5a623] font-bold text-sm md:text-base uppercase tracking-wide">Largura</span>
            <span className="text-zinc-400 text-xs md:text-sm mt-1">em milimetros</span>
          </div>

          {/* Altura */}
          <div className="flex flex-col items-center text-center">
            <svg
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-16 h-16 md:w-20 md:h-20 mb-3"
            >
              {/* Tire cross section */}
              <path d="M20 65 L20 15 L60 15 L60 65" stroke="#f5a623" strokeWidth="2" fill="none" />
              <path d="M25 60 L25 20 L55 20 L55 60" stroke="#f5a623" strokeWidth="1" fill="none" opacity="0.5" />
              {/* Vertical arrow */}
              <line x1="70" y1="15" x2="70" y2="65" stroke="#f5a623" strokeWidth="2" />
              <polygon points="70,15 67,21 73,21" fill="#f5a623" />
              <polygon points="70,65 67,59 73,59" fill="#f5a623" />
            </svg>
            <span className="text-[#f5a623] font-bold text-sm md:text-base uppercase tracking-wide">Altura</span>
            <span className="text-zinc-400 text-xs md:text-sm mt-1">em relacao a largura</span>
          </div>

          {/* Aro */}
          <div className="flex flex-col items-center text-center">
            <svg
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-16 h-16 md:w-20 md:h-20 mb-3"
            >
              {/* Tire front view with rim */}
              <circle cx="40" cy="40" r="28" stroke="#f5a623" strokeWidth="2" fill="none" />
              <circle cx="40" cy="40" r="18" stroke="#f5a623" strokeWidth="2" fill="none" />
              <circle cx="40" cy="40" r="6" stroke="#f5a623" strokeWidth="1.5" fill="none" opacity="0.7" />
              {/* Horizontal arrow for diameter */}
              <line x1="10" y1="75" x2="70" y2="75" stroke="#f5a623" strokeWidth="2" />
              <polygon points="10,75 16,72 16,78" fill="#f5a623" />
              <polygon points="70,75 64,72 64,78" fill="#f5a623" />
            </svg>
            <span className="text-[#f5a623] font-bold text-sm md:text-base uppercase tracking-wide">Aro</span>
            <span className="text-zinc-400 text-xs md:text-sm mt-1">em polegadas</span>
          </div>
        </motion.div>

        {/* Bottom Section - Tire with measurement overlay */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative bg-zinc-950 py-8 md:py-12"
        >
          <div className="max-w-md mx-auto px-4">
            {/* Large Tire SVG */}
            <div className="relative flex justify-center items-center">
              <svg
                width="240"
                height="240"
                viewBox="0 0 240 240"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-48 h-48 md:w-60 md:h-60"
              >
                {/* Outer tire */}
                <circle cx="120" cy="120" r="110" stroke="#3f3f46" strokeWidth="3" fill="none" />
                <circle cx="120" cy="120" r="95" stroke="#3f3f46" strokeWidth="2" fill="#27272a" />
                {/* Tread pattern */}
                <circle cx="120" cy="120" r="100" stroke="#52525b" strokeWidth="8" fill="none" strokeDasharray="12 6" />
                {/* Rim */}
                <circle cx="120" cy="120" r="55" stroke="#71717a" strokeWidth="3" fill="#18181b" />
                <circle cx="120" cy="120" r="45" stroke="#52525b" strokeWidth="2" fill="none" />
                {/* Center hub */}
                <circle cx="120" cy="120" r="20" stroke="#71717a" strokeWidth="2" fill="#27272a" />
                <circle cx="120" cy="120" r="8" fill="#3f3f46" />
                {/* Spokes */}
                {[0, 72, 144, 216, 288].map((angle, i) => (
                  <line
                    key={i}
                    x1={120 + Math.cos((angle * Math.PI) / 180) * 22}
                    y1={120 + Math.sin((angle * Math.PI) / 180) * 22}
                    x2={120 + Math.cos((angle * Math.PI) / 180) * 50}
                    y2={120 + Math.sin((angle * Math.PI) / 180) * 50}
                    stroke="#52525b"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                ))}
              </svg>

              {/* Measurement text overlay */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white tracking-wider">
                    <span className="text-white">225</span>
                    <span className="text-zinc-500 mx-1">/</span>
                    <span className="text-white">55</span>
                    <span className="text-zinc-500 mx-1"> </span>
                    <span className="text-white">R18</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Labels with connecting lines */}
            <div className="flex justify-between items-start mt-6 px-2">
              <div className="flex flex-col items-center">
                <div className="w-px h-6 bg-[#f5a623] mb-2" />
                <span className="text-[#f5a623] font-bold text-xs md:text-sm uppercase">225</span>
                <span className="text-zinc-500 text-[10px] md:text-xs">Largura</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-px h-6 bg-[#f5a623] mb-2" />
                <span className="text-[#f5a623] font-bold text-xs md:text-sm uppercase">55</span>
                <span className="text-zinc-500 text-[10px] md:text-xs">Altura</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-px h-6 bg-[#f5a623] mb-2" />
                <span className="text-[#f5a623] font-bold text-xs md:text-sm uppercase">R18</span>
                <span className="text-zinc-500 text-[10px] md:text-xs">Aro</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
