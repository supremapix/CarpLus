
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
              className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-md px-3.5 py-2 transition-colors group"
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
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-2 rounded-md font-bold flex items-center gap-2 transition-colors text-xs uppercase tracking-wider border border-emerald-400/20 shadow-sm"
            >
              <MessageSquare size={15} /> WhatsApp
            </a>
          </div>

          {/* Mobile: header minimalista — apenas logo + menu (WhatsApp fica no drawer, footer e CTAs) */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              className="flex size-11 items-center justify-center rounded-md bg-white/10 hover:bg-white/15 border border-white/10 text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Abrir menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              <Menu className="text-white" size={22} />
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
            <div className="mb-5 flex items-center justify-between rounded-lg bg-dark p-3.5">
              <img loading="lazy"
                src="/carplus-pneus-oficina-mecanica-full-service-horizontal.svg"
                alt="Carplus Centro Automotivo"
                width={2952}
                height={708}
                className="h-9 w-auto"
              />
              <button type="button" onClick={() => setIsMobileMenuOpen(false)} className="flex size-10 items-center justify-center rounded-md bg-white/10 hover:bg-white/20 text-white transition-colors" aria-label="Fechar menu">
                <X size={22} />
              </button>
            </div>

            <div className="flex flex-col gap-6 overflow-y-auto overscroll-contain pb-8">
              <button
                type="button"
                onClick={() => { setIsMobileMenuOpen(false); setIsSearchOpen(true); }}
                className="flex min-h-12 w-full items-center gap-3 rounded-md border border-gray-200 bg-gray-50 px-4 text-left text-sm text-gray-600 hover:border-primary transition-colors"
              >
                <Search size={18} className="shrink-0 text-gray-400" />
                Buscar pneus e serviços
              </button>
              <div className="flex flex-col gap-1">
                <p className="px-2 pb-2 text-[11px] font-bold uppercase tracking-widest text-primary">Menu principal</p>
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={(e: any) => handleLinkClick(e, link.href)}
                    className="flex min-h-12 items-center rounded-md px-3 font-display text-lg font-bold uppercase transition-colors hover:bg-gray-100 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary border-l-2 border-transparent hover:border-primary"
                  >
                    {link.name}
                  </Link>
                ))}
                {/* Links institucionais */}
                <Link
                  to="/contato"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex min-h-12 items-center rounded-md px-3 font-display text-lg font-bold uppercase transition-colors hover:bg-gray-100 hover:text-primary border-l-2 border-transparent hover:border-primary"
                >
                  Contato
                </Link>
              </div>

              <div className="flex flex-col gap-3 border-t border-gray-200 pt-5">
                <p className="text-primary font-bold text-[11px] uppercase tracking-widest px-2">Atendimento Imediato</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href="https://wa.me/554130827282"
                    className="bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-lg flex items-center gap-3.5 transition-colors shadow-sm"
                  >
                    <div className="w-11 h-11 rounded-md bg-white/20 flex items-center justify-center shrink-0">
                      <MessageSquare size={22} className="text-white" />
                    </div>
                    <div>
                      <p className="text-lg font-bold leading-tight">WhatsApp</p>
                      <p className="text-xs text-white/90">Falar com consultor</p>
                    </div>
                  </a>

                  <a
                    href="tel:+554130827282"
                    className="flex items-center gap-3.5 rounded-lg border border-gray-200 bg-gray-50 p-4 transition-colors hover:border-primary"
                  >
                    <div className="w-11 h-11 rounded-md bg-dark flex items-center justify-center text-primary shrink-0">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-base font-bold leading-tight text-dark">(41) 3082-7282</p>
                      <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Ligar agora</p>
                    </div>
                  </a>
                </div>

                <address className="flex items-center gap-3.5 rounded-lg border border-gray-200 bg-gray-50 p-4 not-italic">
                  <div className="w-11 h-11 rounded-md bg-primary/15 flex items-center justify-center shrink-0 text-dark">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <p className="text-sm font-bold leading-tight text-dark">Portão – Curitiba</p>
                    <p className="mt-0.5 text-xs text-gray-500">Av. Pres. Arthur da Silva Bernardes, 1323</p>
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
