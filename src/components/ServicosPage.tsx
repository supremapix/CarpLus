
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { MessageSquare, Clock, Star, ShieldCheck, CreditCard, Trophy, Gauge, Circle, Wrench, OctagonX, Cpu, Link2, Snowflake, Disc, Settings, type LucideIcon } from 'lucide-react';
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
    descricao: 'Venda e montagem de pneus das melhores marcas: Pirelli, Michelin, Goodyear, Continental, Firestone e Bridgestone. Todos os aros do 13 ao 22.',
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

      {/* CTA */}
      <section className="py-16 px-4 bg-primary">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-black mb-4 italic leading-tight">
            Pronto para agendar?
          </h2>
          <p className="text-black/70 text-base mb-8">Atendemos de Seg–Sex 8h–18h e Sábados 8h–13h. Sem agendamento para a maioria dos serviços.</p>
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
