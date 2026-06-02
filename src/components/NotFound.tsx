import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Hop as Home, Disc3, MapPin, Phone, Clock, ChevronDown } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

const FAQ_ITEMS = [
  {
    q: 'Como chegar na Carplus no Portão?',
    a: 'Estamos na Av. Arthur da Silva Bernardes, 1323 – Portão, Curitiba – PR. Fácil acesso pela Av. República Argentina, Av. Sete de Setembro e Av. Winston Churchill.',
  },
  {
    q: 'Quais pneus a Carplus vende?',
    a: 'Trabalhamos com Pirelli, Michelin, Goodyear, Continental, Firestone, Bridgestone e Yokohama. Todos os aros, do 13 ao 22. Parcelamos em até 10x sem juros.',
  },
  {
    q: 'Qual o horário de funcionamento?',
    a: 'Segunda a Sexta: 8h às 18h | Sábado: 8h às 12h. Domingos e feriados: fechado.',
  },
  {
    q: 'A Carplus faz alinhamento e balanceamento?',
    a: 'Sim! Temos equipamento 3D computadorizado para alinhamento de precisão e balanceamento de rodas. Serviço rápido, com ou sem hora marcada.',
  },
  {
    q: 'Quais serviços a oficina realiza?',
    a: 'Oficina Full Service: troca de óleo, revisão, suspensão, freios, correia dentada, ar-condicionado, diagnóstico eletrônico, retífica de discos e mais.',
  },
  {
    q: 'Como pedir orçamento?',
    a: 'Pelo WhatsApp (41) 3082-7282, por telefone ou presencialmente na loja. Orçamento gratuito e sem compromisso.',
  },
  {
    q: 'A Carplus parcela pneus?',
    a: 'Sim! Pneus parcelados em até 10x sem juros no cartão de crédito. Aceitamos débito, PIX e dinheiro.',
  },
];

export default function NotFound() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useSEO({
    title: 'Página não encontrada (404) | Carplus Pneus e Oficina Curitiba',
    description: 'A página que você procura não existe. Conheça os pneus e serviços da Carplus Pneus e Oficina Mecânica no Portão, Curitiba.',
    noindex: true,
  });

  return (
    <div className="min-h-screen bg-dark text-white flex flex-col">
      {/* Hero 404 */}
      <section className="flex-1 flex flex-col items-center justify-center px-4 py-20 text-center">
        {/* Logo animada */}
        <div className="w-32 h-32 rounded-full bg-surface border-2 border-accent flex items-center justify-center mb-8 animate-pulse-glow overflow-hidden">
          <img
            src="/favicon-carplus.png"
            alt="Carplus Pneus e Oficina Mecânica"
            className="w-24 h-auto object-contain"
          />
        </div>

        <div
          className="text-[clamp(80px,18vw,160px)] font-bold leading-none text-primary mb-2"
          style={{ textShadow: '0 0 40px rgba(227,6,19,0.3)' }}
        >
          404
        </div>

        <h1 className="text-3xl md:text-5xl font-bold uppercase mb-4">
          Essa página não existe,{' '}
          <span className="text-accent italic">mas a Carplus sim!</span>
        </h1>

        <p className="text-white/60 text-lg max-w-md mb-10 leading-relaxed">
          A URL que você buscou não foi encontrada. Visite nossa loja no Portão
          ou confira nosso catálogo de pneus.
        </p>

        <div className="flex flex-wrap gap-3 justify-center mb-16">
          <Link
            to="/"
            className="flex items-center gap-2 bg-primary hover:bg-red-700 text-white px-6 py-3 rounded-xl font-bold uppercase tracking-wide transition-all"
          >
            <Home size={18} /> Ir para a Home
          </Link>
          <Link
            to="/pneus"
            className="flex items-center gap-2 bg-accent hover:bg-yellow-500 text-dark px-6 py-3 rounded-xl font-bold uppercase tracking-wide transition-all"
          >
            <Disc3 size={18} /> Ver Catálogo de Pneus
          </Link>
        </div>

        {/* Contatos */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-2xl mb-20">
          {[
            { icon: Phone, label: 'Telefone / WhatsApp', value: '(41) 3082-7282', href: 'tel:+554130827282', color: 'bg-[#25D366]' },
            { icon: MapPin, label: 'Endereço', value: 'Portão, Curitiba – PR', href: 'https://maps.app.goo.gl/75ZjiqbsPe9QWrPs7', color: 'bg-[#1565C0]' },
            { icon: Clock, label: 'Horário', value: 'Seg–Sex 8h–18h | Sáb 8h–12h', href: null, color: 'bg-surface' },
          ].map((c, i) => (
            <a
              key={i}
              href={c.href || undefined}
              target={c.href?.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className={`${c.color} rounded-2xl p-5 text-center flex flex-col items-center gap-2 ${c.href ? 'hover:scale-105 transition-transform cursor-pointer' : 'cursor-default'}`}
            >
              <c.icon size={24} />
              <span className="text-[10px] uppercase tracking-widest opacity-70">{c.label}</span>
              <span className="font-bold text-sm">{c.value}</span>
            </a>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-surface px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2 uppercase">Perguntas Frequentes</h2>
          <p className="text-white/40 text-center text-sm mb-10">Tudo que você precisa saber sobre a Carplus</p>

          <div className="flex flex-col gap-2">
            {FAQ_ITEMS.map((item, i) => (
              <div
                key={i}
                className={`rounded-2xl overflow-hidden border transition-colors ${openFaq === i ? 'border-accent' : 'border-white/5'}`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex justify-between items-center p-5 text-left gap-4 hover:bg-white/5 transition-colors"
                >
                  <span className="font-bold text-sm md:text-base">{item.q}</span>
                  <ChevronDown
                    size={18}
                    className={`text-accent flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-white/60 text-sm leading-relaxed">{item.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(255,214,0,0.4); }
          50%       { box-shadow: 0 0 24px 12px rgba(255,214,0,0.1); }
        }
        .animate-pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
      `}</style>
    </div>
  );
}
