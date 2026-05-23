import { useState } from 'react';
import { Lightbulb, ChevronRight, Shield, Gauge, ThermometerSun, AlertTriangle, Wrench, Car } from 'lucide-react';

interface TireTipsProps {
  tireName: string;
  categoria: string;
}

interface Tip {
  id: number;
  icon: React.ReactNode;
  title: string;
  shortDesc: string;
  fullDesc: string;
  category: string;
}

const allTips: Tip[] = [
  {
    id: 1,
    icon: <Gauge className="w-6 h-6" />,
    title: "Calibragem Correta",
    shortDesc: "Verifique a pressão a cada 15 dias",
    fullDesc: "A calibragem correta dos pneus é essencial para segurança, economia de combustível e durabilidade. Verifique a pressão sempre com os pneus frios, seguindo a especificação do fabricante do veículo (geralmente na porta do motorista). Pneus mal calibrados podem aumentar o consumo em até 3% e reduzir a vida útil em 25%.",
    category: "geral"
  },
  {
    id: 2,
    icon: <Shield className="w-6 h-6" />,
    title: "Rodízio de Pneus",
    shortDesc: "A cada 10.000 km para desgaste uniforme",
    fullDesc: "O rodízio dos pneus garante desgaste uniforme e prolonga a vida útil do conjunto. Em veículos de tração dianteira, os pneus da frente desgastam mais rápido. Recomendamos fazer o rodízio a cada 10.000 km ou conforme manual do veículo. Isso pode aumentar a durabilidade dos pneus em até 20%.",
    category: "geral"
  },
  {
    id: 3,
    icon: <ThermometerSun className="w-6 h-6" />,
    title: "Cuidados com o Calor",
    shortDesc: "Evite exposição prolongada ao sol",
    fullDesc: "O calor excessivo acelera o envelhecimento da borracha dos pneus. Sempre que possível, estacione em locais cobertos ou à sombra. Em dias muito quentes, a pressão dos pneus pode aumentar naturalmente - não esvazie, pois ao esfriar a pressão ficará abaixo do ideal. Pneus de alta performance são mais sensíveis às variações térmicas.",
    category: "esportivo"
  },
  {
    id: 4,
    icon: <AlertTriangle className="w-6 h-6" />,
    title: "Sinais de Desgaste",
    shortDesc: "Observe indicadores TWI no pneu",
    fullDesc: "Os pneus possuem indicadores de desgaste (TWI - Tread Wear Indicator) nas ranhuras principais. Quando a banda de rodagem atinge 1,6mm, esses indicadores ficam nivelados com a superfície, indicando necessidade de troca. Para pneus de alta performance, recomendamos trocar com 3mm para manter a dirigibilidade em pista molhada.",
    category: "geral"
  },
  {
    id: 5,
    icon: <Wrench className="w-6 h-6" />,
    title: "Alinhamento e Balanceamento",
    shortDesc: "Essencial após troca ou impacto",
    fullDesc: "Alinhamento incorreto causa desgaste irregular e compromete a dirigibilidade. Faça o alinhamento 3D a cada 10.000 km ou após impactos em buracos/guias. O balanceamento deve ser verificado sempre que houver vibração no volante. Na Carplus, oferecemos alinhamento 3D computadorizado de alta precisão.",
    category: "geral"
  },
  {
    id: 6,
    icon: <Car className="w-6 h-6" />,
    title: "Amaciamento de Pneus Novos",
    shortDesc: "Primeiros 500 km com cautela",
    fullDesc: "Pneus novos possuem uma camada de desmoldante da fábrica que reduz a aderência inicial. Nos primeiros 500 km, evite acelerações bruscas, frenagens fortes e curvas em alta velocidade. Isso permite que a borracha atinja sua capacidade máxima de aderência de forma segura e gradual.",
    category: "esportivo"
  },
  {
    id: 7,
    icon: <Gauge className="w-6 h-6" />,
    title: "Pressão para Track Days",
    shortDesc: "Ajuste fino para máxima performance",
    fullDesc: "Em uso de pista, a pressão ideal varia conforme temperatura ambiente, tipo de asfalto e estilo de pilotagem. Comece com a pressão recomendada e ajuste em incrementos de 2 PSI após cada sessão, verificando a temperatura do pneu. O objetivo é obter temperatura uniforme em toda a banda de rodagem.",
    category: "esportivo"
  },
  {
    id: 8,
    icon: <Shield className="w-6 h-6" />,
    title: "Armazenamento Correto",
    shortDesc: "Proteja seus pneus quando não usados",
    fullDesc: "Ao armazenar pneus, mantenha-os em local fresco, seco e protegido da luz solar. Pneus montados em rodas devem ser guardados deitados ou pendurados. Pneus sem roda devem ficar em pé e ser girados mensalmente. Cubra com sacos plásticos para proteger da poeira e ozônio.",
    category: "geral"
  }
];

export default function TireTips({ tireName, categoria }: TireTipsProps) {
  const [expandedTip, setExpandedTip] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState<'todos' | 'geral' | 'esportivo'>('todos');

  const isEsportivo = categoria.toLowerCase().includes('esportivo') || 
                      categoria.toLowerCase().includes('uhp') ||
                      tireName.toLowerCase().includes('neova') ||
                      tireName.toLowerCase().includes('pilot sport') ||
                      tireName.toLowerCase().includes('potenza');

  const filteredTips = allTips.filter(tip => {
    if (activeFilter === 'todos') return true;
    return tip.category === activeFilter;
  });

  const toggleTip = (id: number) => {
    setExpandedTip(expandedTip === id ? null : id);
  };

  return (
    <section className="py-12 bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-800 rounded-2xl my-8 overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#F7941D]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#F7941D]/3 rounded-full blur-2xl" />
      
      <div className="relative z-10 px-6 md:px-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-[#F7941D]/20 rounded-xl">
            <Lightbulb className="w-7 h-7 text-[#F7941D]" />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Dicas de Especialistas
            </h2>
            <p className="text-zinc-400 text-sm md:text-base">
              Maximize a performance e durabilidade do seu {tireName.split(' ').slice(0, 2).join(' ')}
            </p>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 mb-6 flex-wrap">
          <button
            onClick={() => setActiveFilter('todos')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeFilter === 'todos'
                ? 'bg-[#F7941D] text-white shadow-lg shadow-[#F7941D]/30'
                : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white'
            }`}
          >
            Todas as Dicas
          </button>
          <button
            onClick={() => setActiveFilter('geral')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeFilter === 'geral'
                ? 'bg-[#F7941D] text-white shadow-lg shadow-[#F7941D]/30'
                : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white'
            }`}
          >
            Manutenção Geral
          </button>
          {isEsportivo && (
            <button
              onClick={() => setActiveFilter('esportivo')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === 'esportivo'
                  ? 'bg-[#F7941D] text-white shadow-lg shadow-[#F7941D]/30'
                  : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white'
              }`}
            >
              Performance Esportiva
            </button>
          )}
        </div>

        {/* Tips Grid */}
        <div className="grid md:grid-cols-2 gap-3 md:gap-4">
          {filteredTips.map((tip) => (
            <div
              key={tip.id}
              className={`group bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-xl overflow-hidden transition-all duration-300 hover:border-[#F7941D]/50 hover:shadow-lg hover:shadow-[#F7941D]/10 ${
                expandedTip === tip.id ? 'ring-2 ring-[#F7941D]/50' : ''
              }`}
            >
              <button
                onClick={() => toggleTip(tip.id)}
                className="w-full p-4 md:p-5 text-left flex items-start gap-3 md:gap-4"
                aria-expanded={expandedTip === tip.id}
              >
                <div className={`p-2 md:p-2.5 rounded-lg transition-colors duration-300 flex-shrink-0 ${
                  expandedTip === tip.id 
                    ? 'bg-[#F7941D] text-white' 
                    : 'bg-zinc-700/50 text-[#F7941D] group-hover:bg-[#F7941D]/20'
                }`}>
                  {tip.icon}
                </div>
                <div className="flex-1 min-w-0 overflow-hidden">
                  <h3 className="font-bold text-white text-sm md:text-base mb-1 group-hover:text-[#F7941D] transition-colors truncate">
                    {tip.title}
                  </h3>
                  <p className="text-xs md:text-sm text-zinc-400 line-clamp-2">
                    {tip.shortDesc}
                  </p>
                </div>
                <ChevronRight 
                  className={`w-4 h-4 md:w-5 md:h-5 text-zinc-500 transition-transform duration-300 flex-shrink-0 mt-0.5 ${
                    expandedTip === tip.id ? 'rotate-90 text-[#F7941D]' : 'group-hover:text-[#F7941D]'
                  }`} 
                />
              </button>
              
              {/* Expanded Content */}
              <div className={`overflow-hidden transition-all duration-300 ${
                expandedTip === tip.id ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-4 md:px-5 pb-4 md:pb-5 pt-0">
                  <div className="h-px bg-gradient-to-r from-transparent via-zinc-600 to-transparent mb-3 md:mb-4" />
                  <p className="text-zinc-300 text-xs md:text-sm leading-relaxed">
                    {tip.fullDesc}
                  </p>
                  {tip.category === 'esportivo' && (
                    <span className="inline-flex items-center gap-1.5 mt-3 px-2.5 md:px-3 py-1 bg-[#F7941D]/10 text-[#F7941D] text-xs font-medium rounded-full">
                      <Gauge className="w-3 h-3 md:w-3.5 md:h-3.5" />
                      Dica para Alta Performance
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-8 p-6 bg-gradient-to-r from-[#F7941D]/20 via-[#F7941D]/10 to-transparent rounded-xl border border-[#F7941D]/30">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-[#F7941D] rounded-full">
                <Wrench className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-white text-lg">Precisa de ajuda profissional?</h3>
                <p className="text-zinc-400 text-sm">Nossa equipe especializada está pronta para atender você</p>
              </div>
            </div>
            <a
              href="https://wa.me/5541991677282?text=Olá! Gostaria de agendar um serviço para meus pneus."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#F7941D] hover:bg-[#e8850f] text-white font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#F7941D]/30 whitespace-nowrap"
            >
              Agendar Serviço
              <ChevronRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
