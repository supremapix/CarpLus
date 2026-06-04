import { motion } from 'motion/react';
import { Star } from 'lucide-react';

// Logo colorido do Google (26px)
function GoogleLogo() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  );
}

export default function ReviewsHeader() {
  return (
    <div className="mx-auto w-full max-w-[380px]">
      {/* Card superior */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white px-5 py-4 shadow-[0_2px_16px_rgba(0,0,0,0.07)]"
      >
        {/* Esquerda: logo Google */}
        <GoogleLogo />

        {/* Meio: estrelas acima do texto */}
        <div className="flex flex-1 flex-col gap-1">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} fill="#FACC15" color="#FACC15" aria-hidden="true" />
            ))}
          </div>
          <span className="text-[13px] font-medium text-[#202124]">4,9 de 5 estrelas</span>
        </div>

        {/* Separador: ponto */}
        <span className="h-1 w-1 flex-shrink-0 rounded-full bg-gray-400" aria-hidden="true" />

        {/* Direita: total de avaliações */}
        <span className="flex-shrink-0 text-[13px] text-gray-500">215 avaliações</span>
      </motion.div>

      {/* Título */}
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.15 }}
        className="mt-7 text-center text-[22px] font-medium uppercase leading-tight text-[#202124]"
      >
        <span className="block">O QUE NOSSOS</span>
        <span className="block italic text-[#F59E0B]">CLIENTES DIZEM</span>
      </motion.h2>
    </div>
  );
}
