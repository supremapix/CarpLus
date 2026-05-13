import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { SERVICES } from '@/lib/data';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import BackToTop from '@/components/BackToTop';

// Gerar todas as páginas estáticas
export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

// Metadata dinâmica para SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  
  if (!service) {
    return {
      title: 'Serviço não encontrado | Carplus Auto Center',
    };
  }

  return {
    title: `${service.title} em Curitiba | Carplus Auto Center`,
    description: `${service.description} Serviço de ${service.title.toLowerCase()} com qualidade e preço justo na Carplus Auto Center em Curitiba - Portão.`,
    alternates: {
      canonical: `https://www.carpluspneuseoficina.com.br/servico/${slug}`,
    },
  };
}

// Conteúdo detalhado dos serviços
const serviceContent: Record<string, { intro: string; benefits: string[]; faq: { q: string; a: string }[] }> = {
  'loja-de-pneus': {
    intro: 'A Carplus Auto Center é referência em pneus em Curitiba. Trabalhamos com as melhores marcas do mercado: Pirelli, Michelin, Goodyear, Bridgestone, Continental, Dunlop e muito mais. São mais de 800 modelos para você escolher o pneu ideal para seu veículo.',
    benefits: [
      'Mais de 800 modelos de pneus em estoque',
      'Montagem e balanceamento inclusos',
      'Parcelamento em até 10x sem juros',
      'Garantia de fábrica em todos os pneus',
      'Atendimento especializado para sua medida'
    ],
    faq: [
      { q: 'Quais marcas de pneus vocês trabalham?', a: 'Trabalhamos com Pirelli, Michelin, Goodyear, Bridgestone, Continental, Dunlop, Firestone, Falken, Yokohama, entre outras.' },
      { q: 'A montagem está inclusa no preço?', a: 'Sim! Todos os nossos pneus incluem montagem e balanceamento no preço.' },
      { q: 'Vocês fazem parcelamento?', a: 'Sim, parcelamos em até 10x sem juros no cartão de crédito.' }
    ]
  },
  'alinhamento-3d': {
    intro: 'Nosso alinhamento computadorizado 3D utiliza equipamentos de última geração para garantir precisão milimétrica. Um alinhamento correto aumenta a vida útil dos pneus, melhora a dirigibilidade e economiza combustível.',
    benefits: [
      'Equipamento de alinhamento 3D de última geração',
      'Técnicos especializados e certificados',
      'Relatório completo do antes e depois',
      'Melhora a estabilidade e segurança',
      'Aumenta a durabilidade dos pneus'
    ],
    faq: [
      { q: 'Com que frequência devo fazer alinhamento?', a: 'Recomendamos a cada 10.000 km ou quando sentir o carro puxando para um lado.' },
      { q: 'Quanto tempo leva o serviço?', a: 'O alinhamento 3D leva em média 30 a 45 minutos.' }
    ]
  },
  'troca-de-oleo': {
    intro: 'A troca de óleo é fundamental para manter o motor do seu veículo funcionando perfeitamente. Trabalhamos com os melhores lubrificantes do mercado: Mobil, Shell, Petronas, entre outros.',
    benefits: [
      'Óleos sintéticos e semi-sintéticos de alta qualidade',
      'Troca de filtro de óleo inclusa',
      'Verificação dos níveis de fluidos',
      'Descarte ecológico do óleo usado',
      'Registro de manutenção no sistema'
    ],
    faq: [
      { q: 'De quanto em quanto tempo devo trocar o óleo?', a: 'Depende do tipo de óleo. Mineral: 5.000 km. Semi-sintético: 7.500 km. Sintético: 10.000 km.' },
      { q: 'Posso escolher a marca do óleo?', a: 'Sim, trabalhamos com diversas marcas premium como Mobil 1, Shell Helix e Petronas.' }
    ]
  },
  'scanner-automotivo': {
    intro: 'Nosso diagnóstico eletrônico identifica problemas no sistema de injeção, ABS, airbag, câmbio automático e muito mais. Equipamentos atualizados para atender veículos nacionais e importados.',
    benefits: [
      'Diagnóstico completo do sistema eletrônico',
      'Leitura e exclusão de códigos de falha',
      'Equipamento atualizado para novos veículos',
      'Relatório detalhado dos problemas encontrados',
      'Atendimento para carros nacionais e importados'
    ],
    faq: [
      { q: 'O que é possível identificar com o scanner?', a: 'Falhas no motor, injeção eletrônica, ABS, airbag, câmbio automático, ar-condicionado e muito mais.' },
      { q: 'Quanto tempo demora o diagnóstico?', a: 'O diagnóstico básico leva cerca de 30 minutos.' }
    ]
  },
  'suspensao-e-freios': {
    intro: 'Segurança é prioridade. Realizamos revisão completa de amortecedores, molas, buchas, pastilhas, discos e todo o sistema de suspensão e frenagem do seu veículo.',
    benefits: [
      'Revisão completa do sistema de suspensão',
      'Troca de pastilhas e discos de freio',
      'Verificação de amortecedores e molas',
      'Peças originais e paralelas de qualidade',
      'Garantia em todos os serviços'
    ],
    faq: [
      { q: 'Como sei que preciso trocar os amortecedores?', a: 'Se o carro balança muito, faz barulho ou os pneus estão desgastando irregularmente.' },
      { q: 'De quanto em quanto tempo devo verificar os freios?', a: 'Recomendamos verificar a cada 10.000 km ou quando sentir ruídos ou perda de eficiência.' }
    ]
  },
  'ar-condicionado': {
    intro: 'Mantenha o conforto térmico do seu veículo com nossa higienização e carga de gás. Limpamos o sistema de ar-condicionado, eliminando fungos e bactérias.',
    benefits: [
      'Higienização completa do sistema',
      'Carga de gás R134a e R1234yf',
      'Verificação de vazamentos',
      'Troca de filtro de cabine',
      'Eliminação de odores e fungos'
    ],
    faq: [
      { q: 'Com que frequência devo fazer a higienização?', a: 'Recomendamos a cada 12 meses ou 15.000 km.' },
      { q: 'Por que o ar-condicionado está com cheiro ruim?', a: 'Pode ser acúmulo de fungos e bactérias no evaporador. A higienização resolve o problema.' }
    ]
  },
  'manutencao-motor': {
    intro: 'Realizamos manutenção preventiva e corretiva no motor do seu veículo. Desde ajustes simples até reparos mais complexos, nossa equipe está preparada.',
    benefits: [
      'Diagnóstico completo do motor',
      'Troca de velas e cabos de ignição',
      'Regulagem de válvulas',
      'Troca de correias e tensores',
      'Mecânicos experientes e certificados'
    ],
    faq: [
      { q: 'O que é manutenção preventiva?', a: 'São serviços realizados antes de ocorrer problemas, como troca de filtros, velas e correias.' },
      { q: 'Como sei que meu motor precisa de manutenção?', a: 'Barulhos estranhos, perda de potência, aumento no consumo de combustível são sinais.' }
    ]
  },
  'conserto-de-rodas': {
    intro: 'Recuperamos rodas de liga leve danificadas por impactos em buracos e guias. Serviço de retífica e pintura para deixar suas rodas como novas.',
    benefits: [
      'Retífica de rodas amassadas',
      'Solda em rodas trincadas',
      'Pintura e polimento',
      'Reparo de rodas diamantadas',
      'Orçamento sem compromisso'
    ],
    faq: [
      { q: 'É possível consertar qualquer tipo de roda?', a: 'Na maioria dos casos sim. Fazemos uma avaliação para verificar se o reparo é possível.' },
      { q: 'Quanto tempo demora o conserto?', a: 'Depende do dano. Em média, de 1 a 3 dias.' }
    ]
  },
  'correia-dentada': {
    intro: 'A troca da correia dentada é fundamental para evitar danos graves ao motor. Realizamos a substituição preventiva com peças de qualidade e garantia.',
    benefits: [
      'Troca preventiva da correia dentada',
      'Substituição do tensor e rolamento',
      'Verificação da bomba d\'água',
      'Peças originais com garantia',
      'Evita danos graves ao motor'
    ],
    faq: [
      { q: 'Quando devo trocar a correia dentada?', a: 'A cada 50.000 km ou conforme recomendação do fabricante do seu veículo.' },
      { q: 'O que acontece se a correia arrebentar?', a: 'Pode causar danos graves ao motor, como entortar válvulas. Por isso é importante a troca preventiva.' }
    ]
  },
  'troca-de-fluido-de-freio': {
    intro: 'O fluido de freio é essencial para a segurança do seu veículo. Com o tempo, ele absorve umidade e perde eficiência. Realizamos a troca completa com produtos DOT3 e DOT4.',
    benefits: [
      'Troca completa do fluido de freio',
      'Fluidos DOT3 e DOT4 de alta qualidade',
      'Sangria completa do sistema',
      'Verificação de vazamentos',
      'Garantia de frenagem eficiente'
    ],
    faq: [
      { q: 'De quanto em quanto tempo devo trocar o fluido de freio?', a: 'Recomendamos a cada 2 anos ou 40.000 km.' },
      { q: 'Qual a diferença entre DOT3 e DOT4?', a: 'O DOT4 tem maior resistência a altas temperaturas, indicado para veículos com uso mais intenso.' }
    ]
  }
};

export default async function ServicoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const content = serviceContent[slug] || {
    intro: service.description,
    benefits: ['Serviço de qualidade', 'Profissionais especializados', 'Preço justo'],
    faq: []
  };

  return (
    <div className="relative">
      <Navbar />
      
      <main className="pt-28 pb-20">
        <div className="max-w-4xl mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-primary transition-colors">
              Início
            </Link>
            <span>/</span>
            <Link href="/servicos" className="hover:text-primary transition-colors">
              Serviços
            </Link>
            <span>/</span>
            <span className="text-foreground">{service.title}</span>
          </nav>

          {/* Header */}
          <h1 className="text-5xl md:text-6xl font-bold uppercase tracking-tighter italic mb-6">
            {service.title}
          </h1>
          <p className="text-xl text-gray-500 mb-12">{content.intro}</p>

          {/* Benefits */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 mb-12">
            <h2 className="text-2xl font-bold uppercase tracking-tighter mb-6">
              Por que escolher a Carplus?
            </h2>
            <ul className="space-y-4">
              {content.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-black font-bold text-sm shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <span className="text-gray-600">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* FAQ */}
          {content.faq.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold uppercase tracking-tighter mb-6">
                Perguntas Frequentes
              </h2>
              <div className="space-y-4">
                {content.faq.map((item, index) => (
                  <div key={index} className="bg-gray-50 rounded-2xl p-6">
                    <h3 className="font-bold mb-2">{item.q}</h3>
                    <p className="text-gray-600">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="bg-primary rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-bold uppercase tracking-tighter italic mb-4 text-black">
              Precisa de {service.title}?
            </h2>
            <p className="text-black/70 mb-8">
              Entre em contato e agende seu serviço. Atendimento rápido e sem compromisso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://wa.me/554130827282?text=Olá! Tenho interesse no serviço de ${service.title}`}
                target="_blank"
                className="bg-[#25D366] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-600 transition-all"
              >
                WhatsApp
              </a>
              <a
                href="tel:+554130827282"
                className="bg-black text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-900 transition-all"
              >
                (41) 3082-7282
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppFloat />
      <BackToTop />
    </div>
  );
}
