
import { Phone, MapPin, Clock, MessageSquare, Menu, X, Search } from 'lucide-react';
import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';

// Carrega o modal de busca (e o catalogo de pneus que ele usa) somente sob demanda.
const GlobalSearch = lazy(() => import('./GlobalSearch'));

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Atalho de teclado Cmd/Ctrl + K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Início', href: '/#inicio' },
    { name: 'Quem Somos', href: '/quem-somos' },
    { name: 'Catálogo', href: '/pneus' },
    { name: 'Serviços', href: '/servicos' },
    { name: 'Como Chegar', href: '/como-chegar' },
    { name: 'FAQ', href: '/faq' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#') && window.location.pathname === '/') {
      e.preventDefault();
      const id = href.replace('/#', '');
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top bar */}
      <div className="bg-primary text-white py-1.5 px-4 text-[10px] md:text-xs font-medium">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1"><MapPin size={12} /> Portão, Curitiba</span>
            <a href="tel:+554130827282" className="hidden items-center gap-1 sm:flex"><Phone size={12} /> (41) 3082-7282</a>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden sm:flex items-center gap-1"><Clock size={12} /> Seg-Sex 8h-18h | Sáb 8h-12h</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`transition-all duration-300 px-4 ${isScrolled ? 'bg-dark shadow-xl py-2' : 'bg-dark py-3'}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="flex-shrink-1">
            {/* Desktop: logo externa / Mobile: SVG local */}
            <img loading="lazy"
              src="/images/logos/logo-horizontal.svg"
              alt="Carplus Centro Automotivo"
              width={1182}
              height={168}
              className={`hidden lg:block transition-all duration-300 w-auto ${isScrolled ? 'h-10 md:h-12' : 'h-12 md:h-14'}`}
            />
            <img loading="lazy"
              src="/carplus-pneus-oficina-mecanica-full-service-horizontal.svg"
              alt="Carplus Centro Automotivo"
              width={2952}
              height={708}
              className={`lg:hidden transition-all duration-300 w-auto ${isScrolled ? 'h-9' : 'h-11'}`}
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Botao de busca */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full px-4 py-2 transition-all group"
            >
              <Search size={14} className="text-white/40 group-hover:text-primary transition-colors" />
              <span className="text-white/40 text-xs">Buscar...</span>
              <kbd className="flex items-center gap-0.5 text-[10px] text-white/30 bg-white/5 px-1.5 py-0.5 rounded ml-2">
                <span>⌘</span>K
              </kbd>
            </button>
            
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={(e: any) => handleLinkClick(e, link.href)}
                className="font-display text-sm uppercase tracking-tight hover:text-primary transition-colors text-white"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://wa.me/554130827282"
              target="_blank"
              className="bg-[#25D366] text-white px-5 py-2 rounded-full font-bold flex items-center gap-2 hover:bg-opacity-90 transition-transform hover:scale-105 active:scale-95 text-sm uppercase tracking-tighter shadow-lg"
            >
              <MessageSquare size={16} /> WhatsApp
            </a>
          </div>

          {/* Mobile: header minimalista — apenas logo + menu (WhatsApp fica no drawer, footer e CTAs) */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              className="flex size-11 items-center justify-center rounded-full text-white"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Abrir menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              <Menu className="text-white" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        id="mobile-navigation"
        className={`fixed inset-0 z-[60] flex flex-col overflow-hidden bg-white p-4 text-dark transition-transform duration-300 ease-out will-change-transform sm:p-6 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full pointer-events-none'}`}
        aria-hidden={!isMobileMenuOpen}
        role="dialog"
        aria-modal="true"
        aria-label="Menu principal"
      >
            {/* Header do drawer com logo local */}
            <div className="mb-5 flex items-center justify-between rounded-2xl bg-dark p-3">
              <img loading="lazy"
                src="/carplus-pneus-oficina-mecanica-full-service-horizontal.svg"
                alt="Carplus Centro Automotivo"
                width={2952}
                height={708}
                className="h-10"
              />
              <button type="button" onClick={() => setIsMobileMenuOpen(false)} className="flex size-11 items-center justify-center rounded-xl bg-white/10 text-white" aria-label="Fechar menu">
                <X size={24} />
              </button>
            </div>

            <div className="flex flex-col gap-6 overflow-y-auto overscroll-contain pb-8">
              <button
                type="button"
                onClick={() => { setIsMobileMenuOpen(false); setIsSearchOpen(true); }}
                className="flex min-h-12 w-full items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 px-4 text-left text-sm text-gray-500"
              >
                <Search size={18} className="shrink-0 text-gray-400" />
                Buscar pneus e serviços
              </button>
              <div className="flex flex-col gap-1">
                <p className="px-2 pb-2 text-xs font-bold uppercase tracking-widest text-primary">Menu principal</p>
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={(e: any) => handleLinkClick(e, link.href)}
                    className="flex min-h-12 items-center rounded-xl px-3 font-display text-xl font-bold uppercase transition-colors hover:bg-gray-100 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    {link.name}
                  </Link>
                ))}
                {/* Links institucionais */}
                <Link
                  to="/contato"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-display text-2xl font-bold uppercase block hover:text-primary transition-colors py-2 border-l-4 border-transparent hover:border-primary pl-2"
                >
                  Contato
                </Link>
              </div>

              <div className="flex flex-col gap-4 border-t border-gray-200 pt-5">
                <p className="text-primary font-bold text-xs uppercase tracking-widest pl-2">Informações de Contato</p>

                <div className="grid grid-cols-1 gap-4">
                  <a
                    href="tel:+554130827282"
                    className="flex min-h-16 items-center gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-4 transition-colors hover:border-primary"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center text-black">
                      <Phone size={32} />
                    </div>
                    <div>
                      <p className="text-xl font-black leading-none text-dark">(41) 3082-7282</p>
                      <p className="mt-1 text-xs font-bold uppercase tracking-widest text-gray-500">Ligar agora</p>
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
                      <p className="mt-1 text-xs font-bold uppercase tracking-widest text-gray-500">Falar com consultor</p>
                    </div>
                  </a>
                </div>

                <address className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-4 not-italic">
                  <MapPin className="shrink-0 text-primary" size={28} />
                  <div>
                    <p className="text-base font-bold leading-tight text-dark">Portão – Curitiba</p>
                    <p className="mt-1 text-xs font-bold uppercase tracking-widest text-gray-500">Av. Pres. Arthur da Silva Bernardes, 1323</p>
                  </div>
                </address>
              </div>
            </div>
      </div>

      {/* Global Search Modal — montado (e o catalogo carregado) apenas apos abrir a busca */}
      {isSearchOpen && (
        <Suspense fallback={null}>
          <GlobalSearch isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
        </Suspense>
      )}
    </header>
  );
}
