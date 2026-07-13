import { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, X, MapPin, Wrench, Car, FileText, ChevronRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { TIRES, SERVICES, NEIGHBORHOODS } from '../data';

interface SearchResult {
  type: 'pneu' | 'servico' | 'bairro' | 'pagina';
  title: string;
  description: string;
  url: string;
  icon: React.ReactNode;
}

// Paginas estaticas do site
const STATIC_PAGES = [
  { title: 'Inicio', description: 'Pagina inicial da Carplus Centro Automotivo', url: '/', keywords: ['home', 'inicio', 'principal'] },
  { title: 'Quem Somos', description: 'Conheca a historia e equipe da Carplus', url: '/quem-somos', keywords: ['sobre', 'historia', 'equipe', 'empresa'] },
  { title: 'Catalogo de Pneus', description: 'Todos os pneus disponiveis na Carplus', url: '/pneus', keywords: ['pneus', 'catalogo', 'comprar', 'loja'] },
  { title: 'Servicos', description: 'Todos os servicos automotivos oferecidos', url: '/servicos', keywords: ['servicos', 'mecanica', 'oficina'] },
  { title: 'Como Chegar', description: 'Localizacao e mapa da Carplus no Portao', url: '/como-chegar', keywords: ['mapa', 'endereco', 'localizacao', 'gps'] },
  { title: 'FAQ - Perguntas Frequentes', description: 'Duvidas comuns sobre nossos servicos', url: '/faq', keywords: ['duvidas', 'perguntas', 'ajuda', 'faq'] },
  { title: 'Contato', description: 'Entre em contato com a Carplus', url: '/contato', keywords: ['contato', 'telefone', 'whatsapp', 'email'] },
  { title: 'Centro Automotivo Portao', description: 'Centro automotivo completo no bairro Portao', url: '/centro-automotivo-portao', keywords: ['centro automotivo', 'portao', 'oficina', 'mecanica'] },
  { title: 'Politica de Privacidade', description: 'Nossa politica de privacidade e dados', url: '/politica-de-privacidade', keywords: ['privacidade', 'dados', 'lgpd'] },
  { title: 'Trocas e Devolucoes', description: 'Politica de trocas e devolucoes', url: '/trocas-e-devolucoes', keywords: ['troca', 'devolucao', 'garantia'] },
  { title: 'Sitemap', description: 'Mapa do site completo', url: '/sitemap', keywords: ['sitemap', 'mapa', 'paginas'] },
  { title: 'Bairros Atendidos', description: 'Todos os bairros de Curitiba que atendemos', url: '/bairros', keywords: ['bairros', 'regioes', 'curitiba'] },
];

interface GlobalSearchProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function GlobalSearch({ isOpen: externalIsOpen, onClose }: GlobalSearchProps = {}) {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const isOpen = externalIsOpen !== undefined ? externalIsOpen : internalIsOpen;
  const setIsOpen = onClose ? (val: boolean) => { if (!val) onClose(); } : setInternalIsOpen;
  
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // Criar indice de busca com todos os dados
  const searchIndex = useMemo(() => {
    const index: SearchResult[] = [];

    // Adicionar pneus
    TIRES.forEach(tire => {
      index.push({
        type: 'pneu',
        title: tire.nome,
        description: `Pneu ${tire.categoria} - ${tire.indiceVelocidade ? `Indice ${tire.indiceVelocidade}` : 'Aro ' + tire.aro}`,
        url: `/pneu/${tire.slug}`,
        icon: <Car size={16} className="text-primary" />
      });
    });

    // Adicionar servicos
    SERVICES.forEach(service => {
      index.push({
        type: 'servico',
        title: service.title,
        description: service.description.substring(0, 100) + '...',
        url: `/servico/${service.slug}`,
        icon: <Wrench size={16} className="text-primary" />
      });
    });

    // Adicionar bairros
    NEIGHBORHOODS.forEach(neighborhood => {
      const zonaLabel = neighborhood.zona === 'sul' ? 'Zona Sul' : 
                       neighborhood.zona === 'norte' ? 'Zona Norte' :
                       neighborhood.zona === 'leste' ? 'Zona Leste' :
                       neighborhood.zona === 'oeste' ? 'Zona Oeste' : 
                       neighborhood.zona === 'rmc' ? 'Regiao Metropolitana' : 'Curitiba';
      
      index.push({
        type: 'bairro',
        title: neighborhood.name,
        description: `${zonaLabel} - ${neighborhood.tempo} da Carplus`,
        url: `/bairro/${neighborhood.slug || neighborhood.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '-')}`,
        icon: <MapPin size={16} className="text-primary" />
      });
    });

    // Adicionar paginas estaticas
    STATIC_PAGES.forEach(page => {
      index.push({
        type: 'pagina',
        title: page.title,
        description: page.description,
        url: page.url,
        icon: <FileText size={16} className="text-primary" />
      });
    });

    return index;
  }, []);

  // Funcao de busca
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const normalizedQuery = query.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    
    const filtered = searchIndex.filter(item => {
      const normalizedTitle = item.title.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      const normalizedDescription = item.description.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      
      return normalizedTitle.includes(normalizedQuery) || normalizedDescription.includes(normalizedQuery);
    });

    // Limitar resultados e ordenar por relevancia
    const sorted = filtered.sort((a, b) => {
      const aTitle = a.title.toLowerCase();
      const bTitle = b.title.toLowerCase();
      const q = normalizedQuery;
      
      // Priorizar titulos que comecam com a query
      if (aTitle.startsWith(q) && !bTitle.startsWith(q)) return -1;
      if (!aTitle.startsWith(q) && bTitle.startsWith(q)) return 1;
      
      return 0;
    });

    setResults(sorted.slice(0, 10));
  }, [query, searchIndex]);

  // Abrir modal de busca
  const openSearch = () => {
    setIsOpen(true);
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  // Fechar modal de busca
  const closeSearch = () => {
    setIsOpen(false);
    setQuery('');
    setResults([]);
  };

  // Navegar para resultado
  const handleResultClick = (url: string) => {
    navigate(url);
    closeSearch();
  };

  // Atalho de teclado Cmd/Ctrl + K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        openSearch();
      }
      if (e.key === 'Escape') {
        closeSearch();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Agrupar resultados por tipo
  const groupedResults = useMemo(() => {
    const groups: Record<string, SearchResult[]> = {
      pagina: [],
      servico: [],
      bairro: [],
      pneu: []
    };

    results.forEach(result => {
      groups[result.type].push(result);
    });

    return groups;
  }, [results]);

  const typeLabels: Record<string, string> = {
    pagina: 'Paginas',
    servico: 'Servicos',
    bairro: 'Bairros',
    pneu: 'Pneus'
  };

  return (
    <>
      {/* Modal de busca completa */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeSearch}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="fixed top-[10%] left-1/2 -translate-x-1/2 w-full max-w-2xl z-[101] px-4"
            >
              <div className="bg-dark border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
                {/* Input de busca */}
                <div className="flex items-center gap-4 p-4 border-b border-white/10">
                  <Search size={20} className="text-primary" />
                  <input
                    ref={inputRef}
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Buscar pneus, servicos, bairros, paginas..."
                    className="flex-1 bg-transparent text-white text-lg placeholder:text-white/40 outline-none"
                  />
                  <button
                    onClick={closeSearch}
                    className="text-white/40 hover:text-white p-1"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Resultados */}
                <div className="max-h-[60vh] overflow-y-auto">
                  {query.trim() === '' ? (
                    <div className="p-8 text-center">
                      <Search size={48} className="mx-auto text-white/20 mb-4" />
                      <p className="text-white/40 text-sm">Digite para buscar em todo o site</p>
                      <p className="text-white/20 text-xs mt-2">Pneus, servicos, bairros, paginas e mais</p>
                    </div>
                  ) : results.length === 0 ? (
                    <div className="p-8 text-center">
                      <p className="text-white/40">Nenhum resultado encontrado para &quot;{query}&quot;</p>
                      <p className="text-white/20 text-sm mt-2">Tente buscar por outra palavra-chave</p>
                    </div>
                  ) : (
                    <div className="divide-y divide-white/5">
                      {Object.entries(groupedResults).map(([type, items]) => 
                        items.length > 0 && (
                          <div key={type} className="py-2">
                            <p className="px-4 py-2 text-xs font-bold text-primary uppercase tracking-widest">
                              {typeLabels[type]}
                            </p>
                            {items.map((result, index) => (
                              <button
                                key={`${result.url}-${index}`}
                                onClick={() => handleResultClick(result.url)}
                                className="w-full flex items-center gap-4 px-4 py-3 hover:bg-white/5 transition-colors text-left group"
                              >
                                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                  {result.icon}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <p className="text-white font-medium truncate">{result.title}</p>
                                  <p className="text-white/40 text-sm truncate">{result.description}</p>
                                </div>
                                <ChevronRight size={16} className="text-white/20 group-hover:text-primary transition-colors" />
                              </button>
                            ))}
                          </div>
                        )
                      )}
                    </div>
                  )}
                </div>

                {/* Footer */}
                <div className="border-t border-white/10 px-4 py-3 flex items-center justify-between text-xs text-white/30">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <kbd className="bg-white/5 px-1.5 py-0.5 rounded">↵</kbd> selecionar
                    </span>
                    <span className="flex items-center gap-1">
                      <kbd className="bg-white/5 px-1.5 py-0.5 rounded">esc</kbd> fechar
                    </span>
                  </div>
                  <span className="text-primary font-bold">Carplus</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
