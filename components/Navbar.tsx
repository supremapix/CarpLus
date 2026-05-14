'use client';

import { motion, AnimatePresence } from 'motion/react';
import { Phone, MapPin, Clock, MessageSquare, Menu, X } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

function useBusinessStatus() {
  const now = new Date();
  const day = now.getDay();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const time = hour + minute / 60;

  const isOpen =
    (day >= 1 && day <= 5 && time >= 8 && time < 18) ||
    (day === 6 && time >= 8 && time < 12);

  return isOpen;
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isOpen = useBusinessStatus();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '/' },
    { name: 'Quem Somos', href: '/quem-somos' },
    { name: 'Catálogo', href: '/pneus' },
    { name: 'Serviços', href: '/servicos' },
    { name: 'Como Chegar', href: '/como-chegar' },
    { name: 'FAQ', href: '/faq' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top bar */}
      <div className="bg-primary text-white py-1.5 px-4 text-[10px] md:text-xs font-medium">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1"><MapPin size={12} /> Portão, Curitiba</span>
            <span className="flex items-center gap-1"><Phone size={12} /> (41) 3082-7282</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden sm:flex items-center gap-1"><Clock size={12} /> Seg-Sex 8h-18h | Sáb 8h-12h</span>

            <motion.div
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full font-black text-[11px] uppercase tracking-wider border-2 shadow-lg ${
                isOpen
                  ? 'bg-[#00C853] border-[#00C853] text-white shadow-[#00C853]/40'
                  : 'bg-red-600 border-red-600 text-white shadow-red-600/40'
              }`}
            >
              <span
                className={`w-2 h-2 rounded-full bg-white`}
                style={{
                  boxShadow: '0 0 8px rgba(255,255,255,0.8)',
                  animation: 'pulse 1.5s ease-in-out infinite',
                }}
              />
              {isOpen ? 'ABERTO' : 'FECHADO'}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`transition-all duration-300 px-4 ${isScrolled ? 'bg-dark shadow-xl py-2' : 'bg-dark py-3'}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex-shrink-1">
            <img
              src="https://lp.carpluscwb.com.br/wp-content/uploads/2025/08/carplus-pneus-oficina-mecanica-full-service-horizontal.svg"
              alt="Carplus Auto Center"
              className={`hidden lg:block transition-all duration-300 w-auto ${isScrolled ? 'h-10 md:h-12' : 'h-12 md:h-14'}`}
            />
            <img
              src="/carplus-pneus-oficina-mecanica-full-service-horizontal.svg"
              alt="Carplus Auto Center"
              className={`lg:hidden transition-all duration-300 w-auto ${isScrolled ? 'h-9' : 'h-11'}`}
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-display text-lg uppercase tracking-tight hover:text-primary transition-colors text-white"
              >
                {link.name}
              </Link>
            ))}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/554130827282"
              target="_blank"
              className="bg-[#25D366] text-white px-5 py-2 rounded-full font-bold flex items-center gap-2 hover:bg-opacity-90 transition-all text-sm uppercase tracking-tighter shadow-lg"
            >
              <MessageSquare size={16} /> WhatsApp
            </motion.a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="text-white" />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-dark text-white p-6 flex flex-col"
          >
            <div className="flex justify-between items-center mb-8 bg-dark/30 p-4 rounded-3xl border border-white/5">
              <img
                src="/carplus-pneus-oficina-mecanica-full-service-horizontal.svg"
                alt="Carplus Auto Center"
                className="h-10"
              />
              <button onClick={() => setIsMobileMenuOpen(false)} className="bg-white/10 p-2 rounded-xl">
                <X size={32} />
              </button>
            </div>

            <div className="flex flex-col gap-8 overflow-y-auto pb-12">
              <div className="space-y-4">
                <p className="text-primary font-bold text-xs uppercase tracking-widest pl-2">Menu Principal</p>
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-display text-4xl font-bold uppercase block hover:text-primary transition-colors py-2 border-l-4 border-transparent hover:border-primary pl-2"
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  href="/contato"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-display text-4xl font-bold uppercase block hover:text-primary transition-colors py-2 border-l-4 border-transparent hover:border-primary pl-2"
                >
                  Contato
                </Link>
              </div>

              <div className="pt-8 border-t border-white/10 space-y-6">
                <p className="text-primary font-bold text-xs uppercase tracking-widest pl-2">Informações de Contato</p>

                <div className="grid grid-cols-1 gap-4">
                  <a
                    href="tel:+554130827282"
                    className="bg-white/5 p-6 rounded-3xl border border-white/10 flex items-center gap-6 group hover:bg-white/10 transition-all"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center text-black">
                      <Phone size={32} />
                    </div>
                    <div>
                      <p className="text-white font-black text-2xl leading-none mb-1">(41) 3082-7282</p>
                      <p className="text-white/40 text-xs font-bold uppercase tracking-widest">Ligar Agora</p>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/554130827282"
                    className="bg-[#25D366]/10 p-6 rounded-3xl border border-[#25D366]/20 flex items-center gap-6 group hover:bg-[#25D366]/20 transition-all"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-[#25D366] flex items-center justify-center text-white">
                      <MessageSquare size={32} />
                    </div>
                    <div>
                      <p className="text-[#25D366] font-black text-2xl leading-none mb-1">WhatsApp</p>
                      <p className="text-white/40 text-xs font-bold uppercase tracking-widest">Falar com Consultor</p>
                    </div>
                  </a>
                </div>

                <div className="flex items-center gap-4 bg-white/5 p-6 rounded-3xl border border-white/10 mt-6">
                  <MapPin className="text-primary" size={32} />
                  <div>
                    <p className="text-white font-bold text-base leading-tight">Portão – Curitiba</p>
                    <p className="text-white/40 text-xs font-bold uppercase tracking-widest">Av. Arthur Bernardes, 1323</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
