
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { MessageSquare, Clock, Star, ShieldCheck, CreditCard, Trophy, Gauge, Circle, Wrench, OctagonX, Cpu, Link2, Snowflake, Disc, Settings, FlaskConical, Play, type LucideIcon } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

const SERVICOS: { id: string; icon: LucideIcon; titulo: string; descricao: string; beneficios: string[]; tempo: string; slug: string }[] = [
  {
    id: 'alinhamento-balanceamento',
    icon: Gauge,
    titulo: 'Alinhamento e Balanceamento',
    descricao: 'Alinhamento computadorizado 3D com equipamento de alta precisão. Evita desgaste irregular de pneus, melhora estabilidade em curvas e reduz consumo de combustível.',
    beneficios: ['Equipamento 3D computadorizado', 'Resultado em 30-40 minutos', 'Todos os modelos de veículos', 'Sem necessidade de agendamento'],
    tempo: '30-40 min',
    slug: 'alinhamento-e-balanceamento',
  },
  {
    id: 'troca-pneus',
    icon: Circle,
    titulo: 'Troca de Pneus',
    descricao: 'Venda e montagem de pneus das melhores marcas: Pirelli, Michelin, Goodyear, Continental, Firestone, Bridgestone e Yokohama. Todos os aros do 13 ao 22.',
    beneficios: ['Pirelli, Michelin, Goodyear, Continental', 'Todos os aros (13 ao 22)', 'Montagem e balanceamento inclusos', 'Parcelamento em até 10x sem juros'],
    tempo: '45-60 min',
    slug: 'troca-de-pneus',
  },
  {
    id: 'revisao',
    icon: Wrench,
    titulo: 'Revisão de Carros',
    descricao: 'Revisão preventiva e corretiva completa: troca de óleo e filtros, fluidos, velas, correias e verificação geral. Indicado para revisões de fábrica de todos os modelos.',
    beneficios: ['Revisão de fábrica e preventiva', 'Todos os modelos nacionais e importados', 'Peças de qualidade com NF', 'Laudo técnico detalhado'],
    tempo: '2-4 horas',
    slug: 'revisao-de-carros',
  },
  {
    id: 'suspensao-freios',
    icon: OctagonX,
    titulo: 'Suspensão e Freios',
    descricao: 'Reparo e substituição de amortecedores, molas, buchas, pastilhas, discos e cilindros. Diagnóstico completo do sistema de freios e suspensão com garantia.',
    beneficios: ['Amortecedores e molas', 'Pastilhas e discos de freio', 'Cilindros e pinças', 'Diagnóstico antes do orçamento'],
    tempo: '1-3 horas',
    slug: 'suspensao-e-freios',
  },
  {
    id: 'scanner',
    icon: Cpu,
    titulo: 'Diagnóstico Eletrônico',
    descricao: 'Leitura de códigos de falha DTC, diagnóstico de motor, injeção eletrônica, ABS, airbag e reset de luzes de painel. Compatível com todas as marcas.',
    beneficios: ['Scanner multiprotocolo', 'Nacionais e importados', 'Reset de todas as luzes', 'Relatório de diagnóstico'],
    tempo: '30-60 min',
    slug: 'scanner-automotivo',
  },
  {
    id: 'correia-dentada',
    icon: Link2,
    titulo: 'Troca de Correia Dentada',
    descricao: 'Substituição preventiva com peças originais ou de primeira linha. Evita danos graves ao motor. Verificação completa do tensor e bomba d\'água.',
    beneficios: ['Peças com procedência garantida', 'Kit completo (correia + tensor)', 'Verificação da bomba d\'água', 'Garantia do serviço'],
    tempo: '3-5 horas',
    slug: 'troca-de-correia-dentada',
  },
  {
    id: 'ar-condicionado',
    icon: Snowflake,
    titulo: 'Ar-Condicionado Automotivo',
    descricao: 'Higienização do sistema, carga de gás, reparo de compressor, limpeza de evaporador e manutenção completa do ar-condicionado.',
    beneficios: ['Higienização e carga de gás', 'Reparo de compressor', 'Limpeza de evaporador', 'Odores eliminados'],
    tempo: '1-3 horas',
    slug: 'ar-condicionado',
  },
  {
    id: 'retifica-discos',
    icon: Disc,
    titulo: 'Retífica de Discos de Freio',
    descricao: 'Retífica e usinagem de discos com equipamento especializado. Restaura a superfície eliminando vibrações e ranhuras. Solução econômica antes da troca.',
    beneficios: ['Elimina vibrações no freio', 'Equipamento de usinagem próprio', 'Mais econômico que a troca', 'Resultado imediato'],
    tempo: '1-2 horas',
    slug: 'retifica-de-discos',
  },
  {
    id: 'conserto-rodas',
    icon: Settings,
    titulo: 'Conserto de Rodas',
    descricao: 'Reparo de rodas amassadas, trincadas ou deformadas. Recuperação da geometria original com equipamento especializado para todos os tipos.',
    beneficios: ['Rodas de aço e liga leve', 'Todos os aros', 'Recuperação da geometria', 'Sem precisar trocar a roda'],
    tempo: '1-2 horas',
    slug: 'conserto-de-rodas',
  },
  {
    id: 'troca-fluido-freio',
    icon: FlaskConical,
    titulo: 'Troca de Fluido de Freio',
    descricao: 'Substituição do fluido de freio DOT3/DOT4 para garantir máxima segurança na frenagem. O fluido absorve umidade com o tempo e perde eficiência, comprometendo a resposta dos freios.',
    beneficios: ['Fluido DOT3 e DOT4', 'Sangria completa do sistema', 'Verificação de vazamentos', 'Maior segurança na frenagem'],
    tempo: '30-60 min',
    slug: 'troca-de-fluido-de-freio',
  },
];

const TRUST_ITEMS = [
  { icon: <Star size={28} className="text-primary" />, val: '4,9/5', label: '312+ avaliações Google' },
  { icon: <Trophy size={28} className="text-primary" />, val: '10 Anos', label: 'de experiência' },
  { icon: <ShieldCheck size={28} className="text-primary" />, val: 'Garantia', label: 'em todos os serviços' },
  { icon: <CreditCard size={28} className="text-primary" />, val: '10x', label: 'sem juros nos pneus' },
];

export default function ServicosPage() {
  return (
    <div className="min-h-screen bg-dark">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 bg-dark text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-white/40 mb-6 flex items-center justify-center gap-2">
            <Link to="/" className="hover:text-white/70 transition-colors">Home</Link>
            <span className="text-white/20">›</span>
            <span className="text-white/60">Serviços</span>
          </nav>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white leading-none mb-4 italic">
            Nossos <span className="text-primary">Serviços</span>
          </h1>
          <p className="text-lg text-white/55 max-w-xl mx-auto leading-relaxed">
            Oficina mecânica full service e loja de pneus no Portão, Curitiba. Tudo em um só lugar.
          </p>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-black/30 border-y border-white/05 py-8 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {TRUST_ITEMS.map((t, i) => (
            <div key={i} className="flex flex-col items-center gap-1 text-center py-2">
              {t.icon}
              <strong className="font-display text-2xl text-white">{t.val}</strong>
              <span className="text-xs text-white/45 uppercase tracking-wide">{t.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 px-4 bg-dark">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICOS.map((s, i) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-[#1e1e1e] border border-white/07 rounded-2xl p-7 flex flex-col gap-5 hover:border-primary/40 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center">
                    <s.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="font-display text-xl font-black uppercase tracking-tight text-white leading-tight">{s.titulo}</h2>
                </div>
                <p className="text-sm text-white/55 leading-relaxed">{s.descricao}</p>
                <ul className="space-y-2">
                  {s.beneficios.map((b, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs text-white/65">
                      <span className="text-[#00C853] mt-0.5 shrink-0">✓</span>
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/07">
                  <span className="text-xs text-white/35 flex items-center gap-1.5">
                    <Clock size={13} /> {s.tempo}
                  </span>
                  <a
                    href={`https://wa.me/554130827282?text=Olá! Tenho interesse no serviço de ${s.titulo}. Pode me dar mais informações?`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary text-black px-4 py-2 rounded-full font-bold text-xs uppercase tracking-tight flex items-center gap-1.5 hover:bg-yellow-400 transition-colors group-hover:shadow-lg group-hover:shadow-primary/20"
                  >
                    <MessageSquare size={12} /> Agendar
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Video Section - Troca de Fluido de Freio */}
      <section id="troca-fluido-freio-destaque" className="relative py-24 px-4 overflow-hidden bg-gradient-to-b from-dark via-[#0d0d0d] to-[#0a0a0a]">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500/20 to-primary/20 border border-red-500/40 text-red-400 px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6 shadow-lg shadow-red-500/10">
              <OctagonX size={12} />
              Destaque Maximo Premium
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-white mb-6 italic leading-[0.9]">
              Troca de <span className="text-primary">Fluido de Freio</span>
            </h2>
            <p className="text-white/50 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Servico essencial para sua seguranca. Veja como realizamos a troca completa e entenda os <span className="text-red-400 font-bold">perigos de nao fazer a manutencao</span>.
            </p>
          </motion.div>

          {/* Video + Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Premium Video Container */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative mx-auto w-full max-w-[380px] lg:max-w-[420px]"
            >
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-red-500/30 via-primary/20 to-red-500/30 rounded-[3rem] blur-2xl opacity-60" />
              
              {/* Video Frame */}
              <div className="relative aspect-[9/16] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-red-500/20 border-4 border-red-500/30">
                {/* YouTube Shorts Embed */}
                <iframe
                  src="https://www.youtube.com/embed/qTmIkTltrYk?autoplay=1&mute=0&loop=1&playlist=qTmIkTltrYk&controls=1&showinfo=0&rel=0&modestbranding=1&playsinline=1"
                  title="CarPlus - Troca de Fluido de Freio - Como e feito e perigos"
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                
                {/* Top Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none" />
                
                {/* Premium Badge */}
                <div className="absolute top-5 left-5 z-10">
                  <div className="bg-gradient-to-r from-red-500 to-primary text-white px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2 shadow-xl shadow-red-500/40">
                    <Play size={12} fill="currentColor" />
                    Video Explicativo
                  </div>
                </div>

                {/* Danger Badge */}
                <div className="absolute top-5 right-5 z-10">
                  <div className="bg-red-500/90 text-white px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest flex items-center gap-1.5 animate-pulse">
                    <OctagonX size={10} />
                    Importante
                  </div>
                </div>
                
                {/* Bottom Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10 bg-gradient-to-t from-black/90 to-transparent">
                  <p className="text-white font-black text-xl uppercase tracking-tight mb-1">Carplus Auto Center</p>
                  <p className="text-red-400/80 text-sm font-medium">Sua seguranca em primeiro lugar</p>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-red-500/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-primary/10 rounded-full blur-[50px]" />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Info Cards */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <ShieldCheck className="w-6 h-6" />, title: 'Seguranca', desc: 'Frenagem eficiente' },
                  { icon: <Clock className="w-6 h-6" />, title: '30-60 min', desc: 'Servico rapido' },
                  { icon: <Star className="w-6 h-6" />, title: 'DOT3/DOT4', desc: 'Fluidos premium' },
                  { icon: <Trophy className="w-6 h-6" />, title: 'Garantia', desc: 'No servico' },
                ].map((item, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-primary/30 transition-colors group">
                    <div className="w-11 h-11 bg-primary/15 rounded-xl flex items-center justify-center mb-3 text-primary group-hover:bg-primary/25 transition-colors">
                      {item.icon}
                    </div>
                    <h3 className="font-bold text-white text-sm uppercase tracking-tight">{item.title}</h3>
                    <p className="text-white/40 text-xs mt-0.5">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Danger Warning Box */}
              <div className="bg-gradient-to-br from-red-500/10 to-red-900/10 border-2 border-red-500/40 rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-2xl" />
                <h3 className="text-xl font-black text-red-400 uppercase tracking-tight mb-5 flex items-center gap-3 relative z-10">
                  <OctagonX className="text-red-500" size={24} />
                  Perigos de NAO Trocar
                </h3>
                <ul className="space-y-3 relative z-10">
                  {[
                    'Perda total da capacidade de frenagem em emergencias',
                    'Fluido velho ferve em altas temperaturas (fading)',
                    'Corrosao interna danifica cilindros e pinças',
                    'Pedal de freio fica "esponjoso" e sem resposta',
                    'Risco de acidentes graves por falha nos freios',
                    'Custo de reparo aumenta drasticamente',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/80 text-sm">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Feature List */}
              <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl p-8">
                <h3 className="text-xl font-black text-white uppercase tracking-tight mb-5 flex items-center gap-3">
                  <FlaskConical className="text-primary" size={24} />
                  Como Fazemos a Troca
                </h3>
                <ul className="space-y-3">
                  {[
                    'Analise do nivel e condicao atual do fluido',
                    'Sangria completa de todo o sistema de freios',
                    'Substituicao por fluido DOT3 ou DOT4 premium',
                    'Verificacao de vazamentos em todas as conexoes',
                    'Teste de pressao e resposta do pedal',
                    'Garantia total no servico realizado',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/70 text-sm">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/554130827282?text=Olá! Tenho interesse no serviço de Troca de Fluido de Freio. Pode me dar mais informações?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gradient-to-r from-primary to-yellow-400 text-black px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-tight flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-primary/30 transition-all hover:scale-[1.02]"
                >
                  <MessageSquare size={18} /> Agendar Agora
                </a>
                <a
                  href="tel:+554130827282"
                  className="bg-white/5 border border-white/20 text-white px-8 py-4 rounded-2xl font-bold text-sm uppercase tracking-tight flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
                >
                  (41) 3082-7282
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Wheel Repair Showcase Section */}
      <section id="conserto-de-rodas" className="py-20 px-4 bg-[#0a0a0a]" aria-labelledby="wheel-repair-heading">
        <div className="max-w-7xl mx-auto">
          {/* Banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="relative rounded-3xl overflow-hidden">
              <img 
                src="/images/rodas/recuperacao-rodas.png" 
                alt="Recuperação e restauração de rodas danificadas na Carplus Auto Center em Curitiba - Serviço especializado de conserto de rodas amassadas, trincadas e deformadas"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Header */}
          <header className="text-center mb-12">
            <span className="inline-block bg-primary/20 border border-primary/40 text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
              Serviço Especializado
            </span>
            <h2 id="wheel-repair-heading" className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-4 italic">
              Conserto e <span className="text-primary">Recuperação de Rodas</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto text-lg leading-relaxed">
              Restauramos rodas amassadas, trincadas, riscadas ou com corrosão. Equipamento de última geração para recuperar a geometria original e o acabamento perfeito da sua roda.
            </p>
          </header>

          {/* Benefits Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { icon: <ShieldCheck className="w-6 h-6" />, title: 'Garantia', desc: 'Em todos os reparos' },
              { icon: <Settings className="w-6 h-6" />, title: 'Equipamento', desc: 'De última geração' },
              { icon: <Clock className="w-6 h-6" />, title: 'Rapidez', desc: 'Entrega em 1-2h' },
              { icon: <Star className="w-6 h-6" />, title: 'Qualidade', desc: 'Acabamento perfeito' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#1a1a1a] border border-white/10 rounded-2xl p-5 text-center"
              >
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-3 text-primary">
                  {item.icon}
                </div>
                <h3 className="font-bold text-white text-sm uppercase tracking-tight">{item.title}</h3>
                <p className="text-white/50 text-xs mt-1">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { src: "/images/rodas/roda-polida-1.jpg", alt: "Roda de liga leve polida após conserto na Carplus Curitiba" },
              { src: "/images/rodas/roda-volvo-yokohama.jpg", alt: "Detalhe de roda Volvo recuperada com pneu Yokohama" },
              { src: "/images/rodas/volvo-xc60-rodas.jpg", alt: "Volvo XC60 com rodas restauradas na oficina Carplus Auto Center" },
              { src: "/images/rodas/veiculo-rodas-consertadas.jpg", alt: "Veículo com rodas consertadas estacionado na Carplus Pneus Curitiba" },
            ].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative rounded-2xl overflow-hidden aspect-square group"
              >
                <img 
                  src={img.src} 
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>

          {/* Services List */}
          <div className="bg-[#1a1a1a] border border-white/10 rounded-3xl p-8 md:p-10">
            <h3 className="text-2xl font-bold text-white uppercase tracking-tight mb-6">
              Tipos de Consertos que Realizamos
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" role="list">
              {[
                'Rodas amassadas por impacto',
                'Rodas trincadas ou com fissuras',
                'Rodas com corrosão ou oxidação',
                'Rodas riscadas ou arranhadas',
                'Rodas com empenamento',
                'Rodas de liga leve e alumínio',
                'Rodas de aço (ferro)',
                'Rodas cromadas ou diamantadas',
                'Restauração de acabamento original',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white/80">
                  <span className="w-2 h-2 bg-primary rounded-full shrink-0" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="mt-10 text-center">
            <a
              href="https://wa.me/554130827282?text=Olá! Tenho interesse no serviço de Conserto de Rodas. Pode me dar mais informações?"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-black px-8 py-4 rounded-full font-bold text-sm uppercase tracking-tight hover:bg-yellow-400 transition-colors shadow-lg shadow-primary/30"
            >
              <MessageSquare size={18} /> Solicitar Orçamento via WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-primary">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-black mb-4 italic leading-tight">
            Pronto para agendar?
          </h2>
          <p className="text-black/70 text-base mb-8">Atendemos de Seg–Sex 8h–18h e Sábados 8h–12h. Sem agendamento para a maioria dos serviços.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/554130827282"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-tight flex items-center justify-center gap-2 hover:bg-gray-900 transition-colors shadow-xl"
            >
              <MessageSquare size={18} /> WhatsApp Agora
            </a>
            <Link
              to="/pneus"
              className="bg-black/10 text-black px-8 py-4 rounded-full font-bold text-sm uppercase tracking-tight flex items-center justify-center gap-2 border border-black/15 hover:bg-black/20 transition-colors"
            >
              Ver Catálogo de Pneus
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
