
import { useState, useRef, useCallback } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface TireCardProps {
  tire: {
    id: string | number;
    marca: string;
    nome: string;
    slug: string;
    imagem: string;
    medida: string;
    aro: number;
    linha: string;
    novoModelo?: boolean;
    destaque?: boolean;
    categoria?: string;
  };
  index: number;
}

function TireCard({ tire, index }: TireCardProps) {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  // Cacheia o retangulo do card medido uma unica vez ao entrar com o mouse,
  // evitando getBoundingClientRect (forced reflow) a cada onMouseMove.
  const rectRef = useRef<DOMRect | null>(null);
  const rafRef = useRef<number | null>(null);

  const handleMouseEnter = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    rectRef.current = e.currentTarget.getBoundingClientRect();
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rectRef.current = null;
    setIsHovered(false);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = rectRef.current;
    if (!rect) return;
    const clientX = e.clientX;
    const clientY = e.clientY;
    // Agrupa a atualizacao de estado num frame, sem ler layout durante o movimento.
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      const x = ((clientX - rect.left) / rect.width) * 100;
      const y = ((clientY - rect.top) / rect.height) * 100;
      setMousePos({ x, y });
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.2 }}
      className="group bg-white rounded-[2.5rem] p-6 shadow-sm border border-gray-100 relative flex flex-col justify-between hover:shadow-2xl hover:border-primary/20 transition-all overflow-hidden"
    >
      <div className="absolute top-6 left-6 flex flex-col gap-2 z-20">
         <span className="text-primary font-black text-[11px] uppercase tracking-[0.2em]">{tire.marca}</span>
         {tire.novoModelo && (
           <span className="bg-black text-white text-[9px] font-black px-2 py-0.5 rounded-full uppercase self-start tracking-wider">
             Novo
           </span>
         )}
         {tire.destaque && (
            <span className="bg-primary text-black text-[9px] font-black px-2 py-0.5 rounded-full uppercase self-start tracking-wider">
              Destaque
            </span>
         )}
      </div>
      
      <div 
        className="mt-6 mb-6 relative aspect-square cursor-none overflow-visible flex items-center justify-center p-4 bg-transparent"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
        <img 
          src={tire.imagem} 
          alt={`Pneu ${tire.marca} ${tire.nome} ${tire.medida} aro ${tire.aro}`}
          loading={index < 4 ? 'eager' : 'lazy'}
          decoding="async"
          width={400}
          height={400}
          className={`w-full h-full object-contain transition-all duration-500 transform ${isHovered ? 'scale-105 opacity-0' : 'scale-100 opacity-100'} [mix-blend-mode:multiply]`} 
        />
        
        {/* Zoom Overlay */}
        {isHovered && (
          <div 
            className="absolute inset-0 z-10 w-full h-full pointer-events-none [mix-blend-mode:multiply] transition-all duration-300"
            style={{
              backgroundImage: `url(${tire.imagem})`,
              backgroundPosition: `${mousePos.x}% ${mousePos.y}%`,
              backgroundSize: '250%',
              backgroundRepeat: 'no-repeat'
            }}
          />
        )}

        {/* Custom Zoom Cursor Indicator */}
        {isHovered && (
          <div 
            className="absolute z-20 w-16 h-16 border-2 border-primary rounded-full pointer-events-none mix-blend-difference flex items-center justify-center p-2"
            style={{
              left: `${mousePos.x}%`,
              top: `${mousePos.y}%`,
              transform: 'translate(-50%, -50%)'
            }}
          >
            <div className="w-1 h-1 bg-primary rounded-full" />
          </div>
        )}
      </div>

      <div className="relative z-20">
        <div className="flex justify-between items-start mb-2">
           <h3 className="text-xl font-black uppercase leading-none tracking-tighter truncate w-full" title={tire.nome}>{tire.nome}</h3>
        </div>
        <p className="text-gray-400 font-bold text-[11px] mb-6 uppercase tracking-widest leading-tight">
            {tire.linha} | {tire.medida}
            {tire.categoria && <span className="block mt-1 opacity-60">{tire.categoria}</span>}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-8">
            <span className="bg-gray-50 text-gray-400 px-3 py-1.5 rounded-xl text-[10px] font-black uppercase italic border border-gray-100">Aro {tire.aro}</span>
            <span className="flex items-center gap-1.5 text-[#00C853] text-[10px] font-black uppercase">
              <div className="w-2 h-2 rounded-full bg-[#00C853] animate-pulse" /> Em estoque
            </span>
        </div>

        <div className="space-y-2">
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
             <Link 
                to={`/pneu/${tire.slug}`}
                className="w-full flex items-center justify-center gap-3 bg-black hover:bg-primary hover:text-black text-white py-4 rounded-2xl font-black transition-all text-sm uppercase tracking-widest shadow-xl"
              >
                Detalhes <ChevronRight size={18} />
              </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default TireCard;
