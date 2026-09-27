import { MapPin, CreditCard, ShieldCheck, Star } from 'lucide-react';

interface TrustBarProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export default function TrustBar({ className = '', variant = 'light' }: TrustBarProps) {
  const isDark = variant === 'dark';

  const items = [
    {
      icon: MapPin,
      title: 'Portão, Curitiba',
      desc: 'Av. Pres. Arthur Bernardes, 1323',
    },
    {
      icon: CreditCard,
      title: 'Até 10x sem juros',
      desc: 'No cartão de crédito',
    },
    {
      icon: ShieldCheck,
      title: 'Garantia & Nota Fiscal',
      desc: 'Em peças e serviços',
    },
    {
      icon: Star,
      title: '5.0 ★ no Google',
      desc: 'Mais de 234 avaliações reais',
    },
  ];

  return (
    <section
      aria-label="Diferenciais e garantias da Carplus"
      className={`w-full py-4 border-y ${
        isDark
          ? 'bg-neutral-900/90 border-white/10 text-white'
          : 'bg-white border-gray-100 text-gray-900 shadow-xs'
      } ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <li
                key={idx}
                className={`flex items-center gap-3 p-2.5 sm:p-3 rounded-xl transition-colors ${
                  isDark ? 'hover:bg-white/5' : 'hover:bg-gray-50'
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                    isDark ? 'bg-primary/20 text-primary' : 'bg-primary/15 text-neutral-900'
                  }`}
                  aria-hidden="true"
                >
                  <Icon size={20} className={isDark ? 'text-primary' : 'text-neutral-800'} />
                </div>
                <div className="min-w-0">
                  <p className="font-bold text-xs sm:text-sm leading-snug truncate">
                    {item.title}
                  </p>
                  <p
                    className={`text-[11px] sm:text-xs truncate ${
                      isDark ? 'text-white/60' : 'text-gray-500'
                    }`}
                  >
                    {item.desc}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
