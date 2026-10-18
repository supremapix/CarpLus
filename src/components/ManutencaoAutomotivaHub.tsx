import { Link } from 'react-router-dom';
import { ChevronRight, MessageSquare, Navigation, Phone, AlertTriangle, MapPin, Wrench } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useSEO } from '../hooks/useSEO';
import { generateBreadcrumbSchema, generateFaqSchema } from '../lib/schema';
import { BASE_URL, WHATSAPP_NUMBER, PHONE_DISPLAY } from '../data/seoLanding';
import { HUB_FAQS, HUB_SYMPTOMS } from '../data/maintenanceHub';

const contactUrl = (classic = false) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  `${classic ? 'Olá! Quero consultar atendimento para meu carro antigo.' : 'Olá! Quero consultar uma avaliação na Carplus.'} Meu carro é [modelo], ano [ano]. Percebi [sintoma ou necessidade]. Começou [quando].`
)}`;
const container = 'max-w-7xl mx-auto px-4 md:px-6';
const heading = 'text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight italic leading-tight';
const primaryButton = 'inline-flex min-h-12 items-center justify-center gap-2 bg-primary hover:bg-yellow-400 text-dark font-bold text-sm px-5 py-3 rounded-md transition-colors text-center';
const textLink = 'inline-flex min-h-11 items-center gap-1 font-bold text-sm underline underline-offset-4 hover:text-amber-700';
const services = [
  ['Revisão geral', '/servico/revisao-geral', 'Para organizar a manutenção do veículo.'],
  ['Troca de óleo', '/servico/troca-de-oleo', 'Consulte a especificação e os intervalos indicados para seu carro.'],
  ['Freios', '/servico/manutencao-de-freios', 'Avaliação do sistema de frenagem.'],
  ['Suspensão', '/servico/revisao-de-suspensao', 'Investigação de ruídos, desgaste e alterações de comportamento.'],
  ['Pneus', '/pneus', 'Consulte a medida adequada e a disponibilidade.'],
  ['Conserto de pneu', '/servico/conserto-de-pneu', 'A possibilidade de reparo depende da avaliação do dano e do pneu.'],
];

export default function ManutencaoAutomotivaHub() {
  useSEO({
    title: 'Manutenção automotiva e mecânico no Portão | Carplus Curitiba',
    description: 'Procura um mecânico confiável em Curitiba? Conheça a Carplus no Portão, veja orientações por sintomas e consulte manutenção para carros atuais e antigos.',
    canonical: `${BASE_URL}/manutencao-automotiva-curitiba`,
    ogImage: '/images/loja/carplus-oficina-portao-fachada-curitiba.jpg',
    schemaJSON: [
      generateBreadcrumbSchema([
        { name: 'Início', url: `${BASE_URL}/` },
        { name: 'Manutenção automotiva', url: `${BASE_URL}/manutencao-automotiva-curitiba` },
      ]),
      generateFaqSchema(HUB_FAQS),
      // The single LocalBusiness entity is maintained in index.html.
    ],
  });

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />
      <main>
        <section className="pt-32 pb-14 md:pb-20 bg-dark text-white" aria-labelledby="manutencao-h1">
          <div className={container}>
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs text-white/70 mb-8">
              <Link to="/" className="hover:text-primary">Início</Link><ChevronRight size={14} aria-hidden="true" />
              <span aria-current="page">Manutenção automotiva</span>
            </nav>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">Carplus Pneus e Oficina</p>
                <h1 id="manutencao-h1" className="text-3xl sm:text-4xl xl:text-5xl font-black uppercase tracking-tight italic leading-tight mb-6">Manutenção automotiva em Curitiba, <span className="text-primary">no Portão</span></h1>
                <p className="text-base text-white/85 leading-relaxed mb-4">Procurando um mecânico confiável para cuidar do seu carro? Comece contando o que mudou: volante vibrando, carro puxando, barulho ao frear ou uma manutenção que ficou pendente. A Carplus reúne oficina mecânica e pneus no Portão, com atendimento também a carros antigos.</p>
                <p className="text-sm text-white/80 leading-relaxed mb-6">Você não precisa chegar sabendo qual peça trocar. Informe modelo, ano e sintoma para conversar sobre a avaliação adequada ao veículo.</p>
                <div className="flex flex-col sm:items-start gap-3">
                  <a href={contactUrl()} target="_blank" rel="noopener noreferrer" className={primaryButton}><MessageSquare size={18} className="shrink-0" aria-hidden="true" />Descrever meu problema no WhatsApp</a>
                  <a href="#sintomas" className="inline-flex min-h-11 items-center text-sm font-bold underline underline-offset-4 hover:text-primary">Ver orientações por sintoma</a>
                </div>
                <p className="text-xs text-white/70 leading-relaxed mt-4">A conversa inicial não substitui a avaliação presencial nem confirma que o veículo pode circular com segurança.</p>
              </div>
              <figure className="overflow-hidden rounded-lg border border-white/15 bg-white/5">
                <img src="/images/loja/carplus-oficina-portao-fachada-curitiba.jpg" alt="Fachada da Carplus Pneus e Oficina no Portão, em Curitiba" width="1200" height="801" fetchPriority="high" className="w-full aspect-[4/3] object-cover" />
                <figcaption className="p-4 text-sm text-white/80 flex gap-2"><MapPin size={18} className="text-primary shrink-0" aria-hidden="true" />Av. Presidente Arthur da Silva Bernardes, 1323</figcaption>
              </figure>
            </div>
          </div>
        </section>

        <nav aria-label="Nesta página" className="bg-white border-b border-gray-200">
          <div className={`${container} flex flex-wrap gap-x-6 gap-y-1 py-3`}>
            {[['sintomas', 'Sintomas'], ['seguranca', 'Quando parar'], ['confianca', 'Conheça a oficina'], ['carros-antigos', 'Carros antigos'], ['servicos', 'Serviços'], ['perguntas', 'Perguntas']].map(([id, label]) => <a key={id} href={`#${id}`} className="inline-flex min-h-11 items-center text-sm font-bold hover:underline underline-offset-4">{label}</a>)}
          </div>
        </nav>

        <section id="sintomas" className="py-14 md:py-20 scroll-mt-28" aria-labelledby="sintomas-title">
          <div className={container}>
            <header className="max-w-3xl mb-9">
              <p className="text-xs font-bold uppercase tracking-widest text-amber-700 mb-3">Comece pelo que você percebeu</p>
              <h2 id="sintomas-title" className={heading}>O que você percebeu no carro?</h2>
              <p className="mt-5 text-gray-600 leading-relaxed">Estes sinais ajudam a organizar o atendimento, mas podem ter mais de uma causa. Não faça testes na rua nem tente reproduzir uma falha para gravar um vídeo. Relate apenas o que já percebeu, com o veículo parado em segurança.</p>
            </header>
            <div className="grid md:grid-cols-2 gap-5">
              {HUB_SYMPTOMS.map((symptom) => <article key={symptom.title} className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">{symptom.title}</h3>
                {symptom.paragraphs.map((paragraph) => <p key={paragraph} className="text-sm text-gray-600 leading-relaxed mb-4">{paragraph}</p>)}
                <div className="border-t border-gray-100 pt-2 flex flex-wrap gap-x-5">{symptom.links.map((link) => <Link key={link.to} to={link.to} className={textLink}>{link.label}<ChevronRight size={14} aria-hidden="true" /></Link>)}</div>
              </article>)}
              <aside id="seguranca" aria-labelledby="seguranca-title" className="scroll-mt-28 bg-amber-50 border border-amber-300 rounded-lg p-6">
                <AlertTriangle size={28} className="text-amber-800 mb-4" aria-hidden="true" />
                <h3 id="seguranca-title" className="text-xl font-bold mb-4">Quando não continuar dirigindo</h3>
                <p className="text-sm leading-relaxed mb-4">Se houver perda de frenagem, dificuldade para controlar a direção, instabilidade intensa ou dano visível importante no pneu, interrompa o deslocamento assim que for seguro e solicite assistência. Não dirija até a oficina para tentar resolver uma condição de risco.</p>
                <p className="text-sm leading-relaxed">Alertas de pressão do óleo, superaquecimento e sistema de freios exigem atenção às instruções do manual do veículo. Em caso de dúvida sobre a segurança, mantenha o carro parado em local seguro e procure assistência. O WhatsApp da oficina não substitui atendimento de emergência.</p>
              </aside>
            </div>
          </div>
        </section>

        <section id="confianca" className="py-14 md:py-20 bg-white scroll-mt-28" aria-labelledby="confianca-title">
          <div className={`${container} grid lg:grid-cols-2 items-center gap-10`}>
            <figure>
              <img src="/images/loja/carplus-oficina-interior.webp" alt="Interior da Carplus com área de oficina e serviço de alinhamento" loading="lazy" width="1001" height="1200" className="w-full rounded-lg" />
              <figcaption className="text-xs text-gray-500 mt-3">Estrutura da Carplus no Portão, em Curitiba.</figcaption>
            </figure>
            <div>
              <h2 id="confianca-title" className={heading}>Confiança começa com informação clara</h2>
              <p className="text-gray-600 leading-relaxed mt-6">Antes de autorizar um serviço, vale entender o que foi encontrado, quais itens serão trabalhados e como o orçamento está composto. Pergunte o que exige atenção agora e o que pode ser acompanhado depois da avaliação.</p>
              <p className="text-gray-600 leading-relaxed mt-4">Na Carplus, o atendimento acontece na Av. Presidente Arthur da Silva Bernardes, 1323, no Portão, em Curitiba. Conheça a oficina, consulte os serviços e converse sobre a necessidade do seu veículo.</p>
              <div className="flex flex-wrap gap-x-5 mt-5"><Link to="/quem-somos" className={textLink}>Conhecer a Carplus</Link><Link to="/como-chegar" className={textLink}>Como chegar</Link><Link to="/servicos" className={textLink}>Todos os serviços</Link></div>
              <div className="border-t border-gray-200 mt-6 pt-5 text-sm text-gray-600 space-y-2"><p>Segunda a sexta: 08h às 18h · Sábado: 08h às 12h</p><p>Consulte a equipe antes de planejar o atendimento.</p><a href="tel:+554130827282" className={textLink}><Phone size={16} aria-hidden="true" />{PHONE_DISPLAY}</a></div>
            </div>
          </div>
        </section>

        <section id="carros-antigos" className="py-14 md:py-20 bg-dark text-white scroll-mt-28" aria-labelledby="antigos-title">
          <div className={`${container} grid lg:grid-cols-[1.2fr_1fr] gap-8 items-center`}>
            <div><p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">Manutenção e reparos</p><h2 id="antigos-title" className={heading}>Seu carro é antigo? Também atendemos</h2><p className="text-white/80 mt-6 leading-relaxed">A Carplus trabalha com manutenção e reparos de carros antigos. Seja um veículo de uso diário ou um carro que passa mais tempo guardado, conte o histórico e o que precisa de atenção.</p><Link to="/servico/carros-classicos" className="inline-flex min-h-11 items-center text-sm text-primary font-bold underline underline-offset-4 mt-4">Manutenção de carros antigos e clássicos</Link></div>
            <div className="border border-white/15 rounded-lg p-6 bg-white/5"><Wrench size={28} className="text-primary mb-4" aria-hidden="true" /><p className="text-white/85 leading-relaxed text-sm mb-6">O atendimento considera o modelo, o ano e as condições do carro. Informe também se ele ficou parado por muito tempo ou passou por modificações. A equipe confirma o escopo da avaliação e do serviço para cada caso.</p><a href={contactUrl(true)} target="_blank" rel="noopener noreferrer" className={primaryButton}>Consultar atendimento para meu carro antigo</a></div>
          </div>
        </section>

        <section id="servicos" className="py-14 md:py-20 scroll-mt-28" aria-labelledby="servicos-title">
          <div className={container}><h2 id="servicos-title" className={heading}>Já sabe do que precisa?</h2><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">{services.map(([title, to, description]) => <article key={to} className="bg-white border border-gray-200 rounded-lg p-6"><h3 className="text-lg font-bold"><Link to={to} className="inline-flex min-h-11 items-center gap-2 hover:underline underline-offset-4">{title}<ChevronRight size={18} className="text-amber-700" aria-hidden="true" /></Link></h3><p className="text-sm text-gray-600 leading-relaxed mt-2">{description}</p></article>)}</div><div className="flex flex-wrap gap-x-6 mt-5"><Link to="/servicos" className={textLink}>Ver todos os serviços</Link><Link to="/borracharia-portao" className={textLink}>Borracharia no Portão</Link></div></div>
        </section>

        <section id="perguntas" className="py-14 md:py-20 bg-white border-y border-gray-200 scroll-mt-28" aria-labelledby="perguntas-title">
          <div className="max-w-4xl mx-auto px-4 md:px-6"><h2 id="perguntas-title" className={heading}>Perguntas sobre manutenção automotiva</h2><div className="mt-8 divide-y divide-gray-200 border-y border-gray-200">{HUB_FAQS.map((faq) => <details key={faq.question} className="group py-4"><summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 font-bold text-sm sm:text-base [&::-webkit-details-marker]:hidden"><span>{faq.question}</span><span aria-hidden="true" className="text-xl text-amber-700 group-open:rotate-45">+</span></summary><p className="text-sm text-gray-600 leading-relaxed pt-4 pb-2">{faq.answer}</p></details>)}</div></div>
        </section>

        <section className="py-14 md:py-20" aria-labelledby="contato-title"><div className="max-w-3xl mx-auto px-4 md:px-6 text-center"><h2 id="contato-title" className={heading}>Conte o que está acontecendo</h2><p className="text-gray-600 leading-relaxed mt-5 mb-7">Envie o modelo, o ano e o sintoma do carro. Se souber, acrescente a quilometragem, quando o problema começou e o último serviço realizado. Assim, a conversa começa com informações úteis, sem escolher uma peça por tentativa.</p><div className="flex flex-col sm:flex-row justify-center gap-3"><a href={contactUrl()} target="_blank" rel="noopener noreferrer" className={primaryButton}><MessageSquare size={18} aria-hidden="true" />Falar com a Carplus</a><Link to="/como-chegar" className="inline-flex min-h-12 items-center justify-center gap-2 border border-gray-300 rounded-md px-5 py-3 font-bold text-sm hover:bg-white"><Navigation size={18} aria-hidden="true" />Como chegar</Link></div><p className="text-xs text-gray-500 mt-5">A mensagem abre para você completar e enviar. Em caso de risco, pare em segurança e solicite assistência.</p></div></section>

        <section className="bg-white border-t border-gray-200 py-8" aria-labelledby="fontes-title"><div className={`${container} text-xs text-gray-600 leading-relaxed`}><h2 id="fontes-title" className="font-bold text-sm text-gray-900 mb-3">Referências para as orientações</h2><p className="mb-3">Conteúdo revisado em 18/10/2026. As referências abaixo ajudam a contextualizar os sintomas, não substituem a avaliação do veículo nem representam afiliação com a Carplus. As instruções do manual do seu carro prevalecem.</p><ul className="flex flex-wrap gap-x-6 gap-y-2 list-none">{[
          ['Michelin: alinhamento, balanceamento e vibração', 'https://www.michelin.com.br/auto/conselhos/cuidados-com-pneus/alinhamento-de-roda-balanceamento-de-roda'],
          ['Bosch: sinais e manutenção dos freios', 'https://am.boschcarservice.com/br/pt/nossos-servicos/sistema-de-freio/manutencao-dos-freios/'],
          ['Monroe: componentes e ruídos da suspensão', 'https://www.monroe.com/pt-pt/support/technical-tips/lv/mounting-kits-protection-kits/value-and-importance-mounting-kits.html'],
          ['Ford: exemplo de manual sobre luzes de advertência', 'https://www.fordservicecontent.com/Ford_Content/vdirsnet/OwnerManual/Home/Content?ProcUid=G2139020&Uid=G2139014&buildtype=web&countryCode=BRA&div=f&languageCode=pt&moidRef=G2130115&userMarket=BRA&vFilteringEnabled=False&variantid=9543'],
        ].map(([label, href]) => <li key={href}><a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center underline underline-offset-4 hover:text-gray-900">{label}</a></li>)}</ul></div></section>
      </main>
      <Footer />
    </div>
  );
}
