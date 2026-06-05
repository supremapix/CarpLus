
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { NEIGHBORHOODS, CITIES } from '../data';
import { LocateFixed, MapPin, Navigation, Map as MapIcon, ChevronRight, MessageSquare, ChevronDown, Clock, Car, Building2, Home as HomeIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

// Marker Icon Fix
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: '/images/leaflet/marker-icon-2x.png',
  iconUrl: '/images/leaflet/marker-icon.png',
  shadowUrl: '/images/leaflet/marker-shadow.png',
});

// Tabs definition
type TabId = 'bairros' | 'metro' | 'mapa';
const TABS = [
  { id: 'bairros' as TabId, label: 'Bairros de Curitiba', icon: HomeIcon, count: NEIGHBORHOODS.length },
  { id: 'metro' as TabId, label: 'Região Metropolitana', icon: Building2, count: CITIES.length },
  { id: 'mapa' as TabId, label: 'Mapa Interativo', icon: MapIcon, count: null },
];

// Main Carplus Icon - Vertical logo with specific anchoring and pulse effect
const carplusIcon = L.divIcon({
  className: '',   // IMPORTANTE: string vazia para não herdar CSS do Leaflet
  html: `
    <div style="
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
    ">
      <!-- CARD DA LOGO -->
      <div style="
        background: #1A1A1A;
        border: 2px solid #FFD600;
        border-radius: 10px;
        padding: 8px 10px;
        text-align: center;
        box-shadow: 0 4px 16px rgba(0,0,0,0.5);
        width: 130px;
        pointer-events: auto;
        cursor: pointer;
      ">
        <img loading="lazy" 
          src="/images/logos/logo.webp"
          style="width: 90px; height: auto; display: block; margin: 0 auto 4px;"
          alt="Carplus"
        />
        <div style="
          color: #888;
          font-size: 9px;
          font-family: Inter, sans-serif;
          line-height: 1.3;
        ">Oficina Mecânica<br>Full Service</div>
        <div style="
          background: #E30613;
          color: #fff;
          font-size: 9px;
          font-weight: 700;
          font-family: 'Barlow Condensed', sans-serif;
          letter-spacing: 1px;
          border-radius: 4px;
          padding: 2px 6px;
          margin-top: 4px;
          display: inline-block;
        ">PORTÃO</div>
      </div>

      <!-- SETA/PONTEIRO conectando o card ao pin -->
      <div style="
        width: 0;
        height: 0;
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-top: 10px solid #FFD600;
        margin-top: -1px;
      "></div>

      <!-- PIN REDONDO no ponto exato do mapa -->
      <div style="
        width: 14px;
        height: 14px;
        background: #E30613;
        border: 3px solid #FFD600;
        border-radius: 50%;
        box-shadow: 0 0 0 3px rgba(227,6,19,0.3);
        margin-top: -2px;
        animation: pulse-carplus 2s infinite;
      "></div>
    </div>

    <style>
      @keyframes pulse-carplus {
        0%   { box-shadow: 0 0 0 0 rgba(227,6,19,0.6); }
        70%  { box-shadow: 0 0 0 10px rgba(227,6,19,0); }
        100% { box-shadow: 0 0 0 0 rgba(227,6,19,0); }
      }
    </style>
  `,
  iconSize:   [130, 119],
  iconAnchor: [65, 119],   // ÂNCORA: aponta para o centro do PIN
  popupAnchor:[0, -119]    // popup abre acima do card
});

// Neighborhood Zone Icons Helper
const criarIconeBairro = (cor: string, tempo: string) => {
  return L.divIcon({
    className: '',
    html: `
      <div style="
        display:flex;flex-direction:column;align-items:center;
      ">
        <div style="
          background:${cor};color:#fff;
          font-size:10px;font-weight:700;
          padding:3px 7px;border-radius:4px;
          white-space:nowrap;
          box-shadow:0 2px 6px rgba(0,0,0,0.4);
          font-family:'Barlow Condensed',sans-serif;
        ">${tempo}</div>
        <div style="
          width:0;height:0;
          border-left:5px solid transparent;
          border-right:5px solid transparent;
          border-top:6px solid ${cor};
        "></div>
        <div style="
          width:10px;height:10px;
          background:${cor};
          border:2px solid white;
          border-radius:50%;
          margin-top:-1px;
        "></div>
      </div>
    `,
    iconSize:   [60, 30],
    iconAnchor: [30, 30],  // centro-x, base-y
    popupAnchor:[0, -30]
  });
};

// Neighborhood Zone Icons
const getZoneColor = (zona: string) => {
  switch (zona) {
    case 'sul': return '#00C853';
    case 'centro': return '#1565C0';
    case 'norte': return '#F9A825';
    case 'metro': return '#757575';
    default: return '#FAB115';
  }
};

const MapController = ({ center, zoom }: { center: [number, number], zoom: number }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(center, zoom);
  }, [center, zoom, map]);
  return null;
};

// Helper function to generate neighborhood slug
const generateSlug = (name: string) => 
  name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '-');

export default function NeighborhoodMap() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<TabId>('bairros');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewState, setViewState] = useState<{center: [number, number], zoom: number}>({
    center: [-25.4770, -49.2845],
    zoom: 13
  });

  const carplusPos: [number, number] = [-25.4770, -49.2845];

  // Filter neighborhoods based on search
  const filteredNeighborhoods = NEIGHBORHOODS.filter(b => 
    b.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredCities = CITIES.filter(c => 
    c.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="mapa" className="bg-dark relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
      </div>

      {/* Collapsible Header Button */}
      <button
        onClick={() => setIsOpen(v => !v)}
        className="w-full flex items-center justify-between px-6 py-8 md:px-12 hover:bg-white/5 transition-colors group relative z-10"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center group-hover:bg-primary/30 transition-colors">
            <MapPin size={28} className="text-primary" />
          </div>
          <div className="text-left">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-black group-hover:text-primary transition-colors text-center md:text-left">
              Estamos no Centro de Tudo
            </h2>
            <p className="text-white/50 text-base sm:text-lg md:text-xl font-light hidden md:block">
              Clique para explorar bairros e regioes atendidas
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden md:inline-flex items-center gap-2 bg-primary/20 text-primary text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest border border-primary/30">
            <MapIcon size={14} /> {NEIGHBORHOODS.length + CITIES.length} localidades
          </span>
          <motion.div 
            animate={{ rotate: isOpen ? 180 : 0 }} 
            transition={{ duration: 0.3 }}
            className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-primary transition-colors"
          >
            <ChevronDown size={24} className="text-white" />
          </motion.div>
        </div>
      </button>

      {/* Expandable Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 pb-16 relative z-10">
              {/* Tab Navigation */}
              <div className="flex flex-wrap justify-center gap-3 mb-10">
                {TABS.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`
                      flex items-center gap-3 px-6 py-4 rounded-2xl font-bold text-sm uppercase tracking-wider transition-all
                      ${activeTab === tab.id 
                        ? 'bg-primary text-dark shadow-lg shadow-primary/30' 
                        : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10'
                      }
                    `}
                  >
                    <tab.icon size={20} />
                    <span className="hidden md:inline">{tab.label}</span>
                    {tab.count && (
                      <span className={`text-xs px-2 py-0.5 rounded-full ${activeTab === tab.id ? 'bg-dark/20 text-dark' : 'bg-white/10 text-white/50'}`}>
                        {tab.count}
                      </span>
                    )}
                  </button>
                ))}
              </div>

              {/* Search Input */}
              {(activeTab === 'bairros' || activeTab === 'metro') && (
                <div className="max-w-md mx-auto mb-10">
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={20} />
                    <input
                      type="text"
                      placeholder={activeTab === 'bairros' ? 'Buscar bairro...' : 'Buscar cidade...'}
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full bg-white/10 border border-white/20 text-white placeholder-white/40 py-4 pl-12 pr-6 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>
              )}

              {/* Tab Content: Bairros */}
              {activeTab === 'bairros' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
                    {filteredNeighborhoods.map((bairro, i) => (
                      <Link
                        key={bairro.name}
                        to={`/bairro/${generateSlug(bairro.name)}`}
                        className="group bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary/50 rounded-2xl p-4 transition-all"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <div className="w-2 h-2 rounded-full mt-1.5" style={{ backgroundColor: getZoneColor(bairro.zona) }} />
                          <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                            {bairro.tempo}
                          </span>
                        </div>
                        <h4 className="text-white font-bold text-sm group-hover:text-primary transition-colors line-clamp-1">
                          {bairro.name}
                        </h4>
                        <p className="text-white/40 text-[10px] line-clamp-1 mt-1">{bairro.via}</p>
                      </Link>
                    ))}
                  </div>

                  {filteredNeighborhoods.length === 0 && (
                    <div className="text-center py-12 text-white/50">
                      Nenhum bairro encontrado para "{searchTerm}"
                    </div>
                  )}

                  <div className="mt-8 text-center">
                    <Link
                      to="/bairros"
                      className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full font-bold text-sm transition-all border border-white/20"
                    >
                      Ver Todos os Bairros <ChevronRight size={16} />
                    </Link>
                  </div>
                </motion.div>
              )}

              {/* Tab Content: Região Metropolitana */}
              {activeTab === 'metro' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                    {filteredCities.map((city) => (
                      <Link
                        key={city.name}
                        to={`/bairro/${generateSlug(city.name)}`}
                        className="group bg-gradient-to-br from-white/10 to-white/5 hover:from-primary/30 hover:to-primary/10 border border-white/10 hover:border-primary/50 rounded-3xl p-6 transition-all"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <div className="w-12 h-12 bg-white/10 group-hover:bg-primary/20 rounded-2xl flex items-center justify-center transition-colors">
                            <Building2 size={24} className="text-white/60 group-hover:text-primary" />
                          </div>
                          <div className="flex items-center gap-1 text-primary text-sm font-bold">
                            <Clock size={14} />
                            {city.tempo}
                          </div>
                        </div>
                        <h4 className="text-white text-lg font-bold group-hover:text-primary transition-colors mb-1">
                          {city.name}
                        </h4>
                        <p className="text-white/40 text-xs">{city.via}</p>
                        <div className="mt-4 flex items-center gap-2 text-white/50 group-hover:text-primary text-xs font-bold uppercase tracking-wider">
                          <span>Ver mais</span>
                          <ChevronRight size={12} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                      </Link>
                    ))}
                  </div>

                  {filteredCities.length === 0 && (
                    <div className="text-center py-12 text-white/50">
                      Nenhuma cidade encontrada para "{searchTerm}"
                    </div>
                  )}
                </motion.div>
              )}

              {/* Tab Content: Mapa */}
              {activeTab === 'mapa' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Sidebar Controls */}
                    <div className="lg:col-span-1 space-y-6">
                      <div className="bg-surface rounded-3xl p-8 border border-white/5">
                        <h3 className="text-white text-2xl mb-6">Como chegar em <span className="text-primary">minutos</span></h3>
                        
                        <div className="space-y-4 mb-8">
                          {NEIGHBORHOODS.slice(0, 5).map(bairro => (
                            <button
                              key={bairro.name}
                              onClick={() => setViewState({ center: [bairro.lat, bairro.lng], zoom: 14 })}
                              className="w-full flex items-center justify-between p-4 bg-dark/30 rounded-xl hover:bg-primary/20 transition-all group"
                            >
                              <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: getZoneColor(bairro.zona) }} />
                                <span className="text-white font-medium">{bairro.name}</span>
                              </div>
                              <span className="text-primary font-accent text-sm group-hover:translate-x-1 transition-transform">~{bairro.tempo}</span>
                            </button>
                          ))}
                        </div>

                        <div className="flex flex-col gap-3">
                          <a 
                            href="https://maps.app.goo.gl/75ZjiqbsPe9QWrPs7"
                            target="_blank"
                            className="flex items-center justify-center gap-2 bg-primary text-dark py-3 rounded-full font-bold hover:bg-yellow-400 transition-all uppercase tracking-widest text-sm"
                          >
                            <Navigation size={20} /> Abrir Rota Google
                          </a>
                          <a 
                            href="tel:+554130827282"
                            className="flex items-center justify-center gap-2 bg-white/10 text-white py-3 rounded-full font-bold hover:bg-white/20 transition-all border border-white/10 text-sm"
                          >
                            <LocateFixed size={20} /> Meu GPS Atual
                          </a>
                        </div>
                      </div>

                      {/* Stats Grid */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-primary/10 border border-primary/20 p-6 rounded-2xl">
                          <p className="text-primary text-3xl font-display mb-1">+10 ANOS</p>
                          <p className="text-white/60 text-[10px] uppercase tracking-widest font-bold">DE MERCADO</p>
                        </div>
                        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                          <p className="text-accent text-3xl font-display mb-1">4.9/5</p>
                          <p className="text-white/60 text-[10px] uppercase tracking-widest font-bold">GOOGLE</p>
                        </div>
                      </div>
                    </div>

                    {/* Map Container */}
                    <div className="lg:col-span-2 rounded-[40px] overflow-hidden border-8 border-surface shadow-2xl relative">
                      <MapContainer 
                        center={viewState.center} 
                        zoom={viewState.zoom} 
                        className="h-[600px] w-full"
                        scrollWheelZoom={false}
                      >
                        <MapController center={viewState.center} zoom={viewState.zoom} />
                        <TileLayer
                          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                        />
                        
                        {/* Carplus Main Marker */}
                        <Marker position={carplusPos} icon={carplusIcon}>
                          <Popup>
                            <div className="text-center p-3">
                              <img loading="lazy" src="/images/logos/logo-horizontal.svg" className="h-8 mx-auto mb-3" alt="Carplus Logo" />
                              <b className="text-lg block mb-1">Carplus Auto Center</b>
                              <span className="text-xs text-gray-500 block mb-3">Av. Arthur da Silva Bernardes, 1323<br/>Portao, Curitiba - PR</span>
                              
                              <a 
                                href="https://wa.me/554130827282?text=Olá! Encontrei vocês pelo mapa e gostaria de um orçamento."
                                target="_blank"
                                className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-2.5 px-4 rounded-full font-bold hover:scale-105 transition-all shadow-lg text-sm"
                              >
                                <MessageSquare size={18} /> Orcamento no WhatsApp
                              </a>
                            </div>
                          </Popup>
                        </Marker>

                        {/* City Markers */}
                        {CITIES.map(city => (
                          <Marker 
                            key={city.name} 
                            position={[city.lat, city.lng]}
                            icon={criarIconeBairro('#757575', city.tempo)}
                          >
                            <Popup>
                              <div className="text-center font-sans">
                                <p className="font-bold text-lg mb-1">{city.name}</p>
                                <p className="text-xs text-gray-500 mb-2">~{city.tempo} ate a Carplus</p>
                              </div>
                            </Popup>
                          </Marker>
                        ))}

                        {/* Neighborhood Markers */}
                        {NEIGHBORHOODS.map(bairro => (
                          <Marker 
                            key={bairro.name} 
                            position={[bairro.lat, bairro.lng]}
                            icon={criarIconeBairro(getZoneColor(bairro.zona), bairro.tempo)}
                          >
                            <Popup>
                              <div className="text-center">
                                <p className="font-bold text-lg mb-1">{bairro.name}</p>
                                <p className="text-xs text-gray-500 mb-2">~{bairro.tempo} ate a Carplus</p>
                                <button 
                                  onClick={() => setViewState({ center: [bairro.lat, bairro.lng], zoom: 15 })}
                                  className="bg-primary text-dark text-[10px] px-3 py-1 rounded-full uppercase font-bold"
                                >
                                  Ver Detalhes
                                </button>
                              </div>
                            </Popup>
                          </Marker>
                        ))}
                      </MapContainer>

                      {/* Legend Overlay */}
                      <div className="absolute bottom-6 left-6 z-[1000] bg-white/90 backdrop-blur p-4 rounded-2xl shadow-xl flex gap-4 text-xs font-bold uppercase tracking-tight">
                        <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-[#00C853]" /> 5-10 MIN</div>
                        <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-[#1565C0]" /> 10-20 MIN</div>
                        <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-[#F9A825]" /> 20+ MIN</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
