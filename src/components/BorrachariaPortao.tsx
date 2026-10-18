import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AlertTriangle, CheckCircle2, ChevronDown, ChevronRight, CircleDot,
  Clock, MapPin, Phone, Scale, Shield, Target, Wrench, X, Zap,
} from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import { generateBreadcrumbSchema, generateFaqSchema } from '../lib/schema';
import Navbar from './Navbar';
import Footer from './Footer';
import LiteYouTube from './LiteYouTube';

const GALERIA_BORRACHARIA = [
  { src: '/images/borracharia/proprietario-carplus.webp', alt: 'Proprietário da Carplus Pneus segurando pneu novo - Borracharia no Portão Curitiba', title: 'Atendimento especializado Carplus' },
  { src: '/images/borracharia/mecanico-balanceamento.webp', alt: 'Mecânico realizando balanceamento de pneu na Carplus - Borracharia Portão', title: 'Balanceamento profissional' },
  { src: '/images/borracharia/alinhamento-3d.webp', alt: 'Alinhamento 3D computadorizado na Carplus Pneus - Portão Curitiba', title: 'Alinhamento 3D' },
  { src: '/images/borracharia/mecanico-troca-pneu.webp', alt: 'Troca de pneu profissional na Carplus - Borracharia no bairro Portão', title: 'Troca de pneus' },
  { src: '/images/borracharia/conserto-pneu.webp', alt: 'Conserto de pneu furado na Carplus Pneus - Borracharia Portão Curitiba', title: 'Conserto de pneus' },
  { src: '/images/borracharia/pneu-desgastado.webp', alt: 'Avaliação de desgaste de pneu na Carplus - Borracharia no Portão', title: 'Avaliação de pneus' },
  { src: '/images/borracharia/pneus-yokohama.webp', alt: 'Pneus Yokohama em estoque na Carplus Pneus Portão Curitiba', title: 'Pneus Yokohama' },
  { src: '/images/borracharia/alinhamento-roda.webp', alt: 'Serviço de alinhamento de rodas na Carplus - Borracharia Portão', title: 'Alinhamento de rodas' },
  { src: '/images/borracharia/vitrine-pirelli.webp', alt: 'Vitrine de pneus Pirelli na loja Carplus - Portão Curitiba', title: 'Pneus Pirelli' },
];

const SERVICOS_BORRACHARIA = [
  { nome: 'Conserto de pneu', descricao: 'Avaliação do dano e do estado do pneu antes de definir se o reparo é indicado.', href: '/servico/conserto-de-pneu', Icone: Wrench, destaque: true },
  { nome: 'Montagem e troca de pneus', descricao: 'Consulte a montagem e a medida adequada ao veículo, conforme as especificações do fabricante.', href: '/servico/montagem-de-pneu', Icone: CircleDot, destaque: true },
  { nome: 'Alinhamento 3D', descricao: 'Consulte a avaliação da geometria e os ajustes aplicáveis ao seu veículo.', href: '/servico/alinhamento-3d', Icone: Target, destaque: false },
  { nome: 'Alinhamento e balanceamento', descricao: 'Serviços com funções diferentes. Informe se percebeu vibração, desvio de direção ou desgaste irregular.', href: '/servico/alinhamento-e-balanceamento', Icone: Scale, destaque: false },
  { nome: 'Rodízio de pneus', descricao: 'A aplicação e a sequência do rodízio dependem do veículo, dos pneus e das orientações do fabricante.', href: '/servico/rodizio-de-pneus', Icone: Zap, destaque: false },
  { nome: 'Manutenção e calibragem', descricao: 'Verificação de desgaste e pressão indicada no manual ou na etiqueta do veículo. Perdas recorrentes precisam de avaliação.', href: '/servico/manutencao-e-calibragem-de-pneus', Icone: CheckCircle2, destaque: false },
];

// A mesma fonte alimenta o HTML e o FAQPage, sem respostas escondidas só no schema.
const FAQ_BORRACHARIA = [
  { question: 'Quanto custa consertar um pneu furado no Portão?', answer: 'O valor depende do dano, da condição do pneu e do serviço indicado após a avaliação. Fale com a Carplus pelo WhatsApp (41) 3082-7282 para consultar o atendimento e como obter um orçamento. A mensagem não confirma que o pneu tem conserto.' },
  { question: 'Vocês fazem conserto rápido de pneu?', answer: 'Consulte a disponibilidade pelo WhatsApp. O prazo depende da avaliação do dano e do atendimento no momento; não é possível garantir um reparo imediato apenas pela mensagem.' },
  { question: 'Todo pneu furado tem conserto?', answer: 'Não. O local e a extensão do dano, o estado interno do pneu e as orientações do fabricante precisam ser considerados. Danos na lateral, bolhas ou sinais de ter rodado vazio não devem ser tratados como um furo simples; pode ser necessária a substituição.' },
  { question: 'Posso dirigir com pneu vazio até a borracharia?', answer: 'Não continue rodando com pneu vazio ou visivelmente danificado para chegar à loja. Pare em local seguro e solicite assistência quando não houver condição segura de deslocamento. Siga o manual do veículo; uma conversa pelo WhatsApp não confirma que é seguro circular.' },
  { question: 'Meu pneu esvazia, mas não vejo um furo. O que fazer?', answer: 'A perda de pressão pode ter mais de uma causa, como pneu, válvula ou roda. Relate o que percebeu e solicite uma avaliação. Não faça testes de rodagem nem tente resolver um dano visível apenas recalibrando.' },
  { question: 'Preciso agendar o atendimento de borracharia?', answer: 'Antes de planejar a visita, consulte a equipe pelo WhatsApp ou telefone (41) 3082-7282. Informe modelo e ano do veículo, medida do pneu se souber e o problema percebido. A equipe confirma a disponibilidade e orienta sobre o atendimento presencial.' },
  { question: 'Onde fica a Carplus e qual é o horário?', answer: 'A unidade fica na Av. Presidente Arthur da Silva Bernardes, 1323, no Portão, em Curitiba. O horário é de segunda a sexta, das 08h às 18h, e sábado, das 08h às 12h. Consulte a equipe sobre feriados. O atendimento descrito nesta página é na oficina do Portão.' },
];

const BAIRROS_PROXIMOS = [
  { nome: 'Portão', href: '/bairro/portao' },
  { nome: 'Vila Izabel', href: '/bairro/vila-izabel' },
  { nome: 'Santa Quitéria', href: '/bairro/santa-quiteria' },
  { nome: 'Água Verde', href: '/bairro/agua-verde' },
  { nome: 'Novo Mundo', href: '/bairro/novo-mundo' },
];

const BASE_URL = 'https://www.carpluspneuseoficina.com.br';
const WHATSAPP_URL = `https://wa.me/554130827282?text=${encodeURIComponent('Olá! Preciso consultar atendimento de borracharia na Carplus. Veículo: [modelo/ano]. Medida do pneu: [se souber]. O problema é [descrição].')}`;
const buttonClass = 'inline-flex min-h-12 items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-center transition-colors';
const textLinkClass = 'inline-flex min-h-11 items-center gap-1 text-amber-400 font-semibold underline underline-offset-4 hover:text-amber-300';

export default function BorrachariaPortao() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const lightbox = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = lightbox.current;
    if (selectedImage !== null && dialog && !dialog.open) dialog.showModal();
    if (selectedImage === null && dialog?.open) dialog.close();
  }, [selectedImage]);

  useSEO({
    title: 'Borracharia no Portão | Conserto de Pneu em Curitiba | Carplus',
    description: 'Pneu furado ou perdendo pressão? Consulte avaliação para conserto de pneu na Carplus, no Portão, Curitiba. Atendimento na oficina. (41) 3082-7282.',
    canonical: `${BASE_URL}/borracharia-portao`,
    ogImage: '/images/borracharia/conserto-pneu.webp',
    schemaJSON: [
      generateBreadcrumbSchema([
        { name: 'Início', url: `${BASE_URL}/` },
        { name: 'Borracharia no Portão', url: `${BASE_URL}/borracharia-portao` },
      ]),
      generateFaqSchema(FAQ_BORRACHARIA),
      // LocalBusiness continua como fonte única no index.html.
    ],
  });

  return (
    <>
      <Navbar />
      <main className="bg-neutral-950 min-h-screen text-white">
        <section className="relative pt-32 pb-16 overflow-hidden" aria-labelledby="borracharia-title">
          <div className="absolute inset-0 bg-gradient-to-b from-amber-500/10 via-transparent to-transparent" />
          <div className="relative max-w-7xl mx-auto px-4">
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-neutral-400 mb-8">
              <Link to="/" className="hover:text-amber-400">Início</Link>
              <ChevronRight size={14} aria-hidden="true" />
              <span aria-current="page">Borracharia no Portão</span>
            </nav>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <MapPin size={16} aria-hidden="true" />Bairro Portão, Curitiba
                </span>
                <h1 id="borracharia-title" className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
                  Borracharia no Portão: <span className="text-amber-500">conserto e troca de pneus</span>
                </h1>
                <p className="text-lg text-neutral-300 mb-5 leading-relaxed">
                  Pneu furado ou perdendo pressão? Se você procura um borracheiro perto do Portão,
                  consulte o atendimento na <strong className="text-white">Carplus Pneus e Oficina</strong>.
                  A possibilidade de conserto é definida após avaliar o pneu.
                </p>
                <div className="space-y-3 text-sm text-neutral-300 mb-7">
                  <p className="flex gap-2"><MapPin size={18} className="text-amber-500 shrink-0" aria-hidden="true" />Av. Presidente Arthur da Silva Bernardes, 1323, Portão, Curitiba.</p>
                  <p className="flex gap-2"><Clock size={18} className="text-amber-500 shrink-0" aria-hidden="true" />Segunda a sexta: 08h às 18h · Sábado: 08h às 12h.</p>
                </div>
                <div className="flex flex-wrap gap-3 mb-7">
                  <span className="flex items-center gap-2 bg-amber-500/10 text-amber-300 px-3 py-2 rounded-full text-sm"><Wrench size={16} aria-hidden="true" />Avaliação presencial</span>
                  <span className="flex items-center gap-2 bg-neutral-800 text-neutral-200 px-3 py-2 rounded-full text-sm"><Shield size={16} aria-hidden="true" />Conforme o fabricante</span>
                </div>
                <div className="flex flex-wrap gap-4">
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={`${buttonClass} bg-green-600 hover:bg-green-500 text-white`}><Phone size={18} className="shrink-0" aria-hidden="true" />Consultar conserto de pneu</a>
                  <Link to="/pneus" className={`${buttonClass} bg-amber-500 hover:bg-amber-400 text-neutral-950`}>Ver pneus<ChevronRight size={18} className="shrink-0" aria-hidden="true" /></Link>
                </div>
                <p className="text-sm text-neutral-300 leading-relaxed mt-5">Não rode com pneu vazio ou danificado para chegar à oficina. Pare em segurança e solicite assistência se não houver condição segura de deslocamento.</p>
              </div>
              <div className="relative max-w-sm w-full mx-auto">
                <div className="relative aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl shadow-amber-500/20">
                  <LiteYouTube videoId="1fWqUJdCdRg" title="Carplus Borracharia no Portão - Troca de Pneus Curitiba" poster="/images/borracharia/conserto-pneu.webp" params="rel=0&playsinline=1" />
                </div>
                <p className="mt-4 text-center text-sm text-neutral-400">Conheça o trabalho na unidade do Portão.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-neutral-900/50" aria-labelledby="pneu-furado-title">
          <div className="max-w-7xl mx-auto px-4">
            <div className="max-w-3xl mb-8">
              <h2 id="pneu-furado-title" className="text-3xl md:text-4xl font-black mb-5">Pneu furado no Portão <span className="text-amber-500">ou perto da Carplus?</span></h2>
              <p className="text-neutral-300 leading-relaxed">Informe o veículo, a medida do pneu se souber, o que aconteceu e se houve perda de pressão. A conversa inicial ajuda a organizar a avaliação, mas não substitui a inspeção nem garante conserto imediato.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <article className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6">
                <Wrench size={28} className="text-amber-500 mb-4" aria-hidden="true" />
                <h3 className="text-xl font-bold mb-4">Antes de definir o reparo</h3>
                <p className="text-neutral-300 leading-relaxed mb-4">É preciso considerar a localização e a extensão do dano, o desgaste e o estado interno do pneu. A inspeção profissional e as orientações do fabricante ajudam a definir se cabe reparo ou substituição.</p>
                <p className="text-neutral-300 leading-relaxed">Cortes na lateral e bolhas exigem atenção. Não presuma que uma vulcanização resolve qualquer dano.</p>
                <Link to="/servico/conserto-de-pneu" className={`${textLinkClass} mt-4`}>Entenda a avaliação para conserto<ChevronRight size={16} className="shrink-0" aria-hidden="true" /></Link>
              </article>
              <aside className="bg-amber-500/10 border border-amber-500/40 rounded-2xl p-6" aria-labelledby="seguranca-title">
                <AlertTriangle size={28} className="text-amber-400 mb-4" aria-hidden="true" />
                <h3 id="seguranca-title" className="text-xl font-bold mb-4">Não transforme o deslocamento em risco</h3>
                <p className="text-neutral-200 leading-relaxed mb-4">Não continue rodando com pneu vazio ou visivelmente danificado. Pare em local seguro e solicite assistência quando necessário. Não tente um teste de rodagem nem recalibre um pneu danificado para seguir viagem.</p>
                <p className="text-neutral-200 leading-relaxed">Siga o manual do veículo e as orientações do fabricante do pneu. O WhatsApp da oficina não substitui atendimento de emergência.</p>
              </aside>
            </div>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={`${buttonClass} bg-green-600 hover:bg-green-500 text-white mt-7`}><Phone size={18} className="shrink-0" aria-hidden="true" />Consultar atendimento na oficina</a>
          </div>
        </section>

        <section className="py-16" aria-labelledby="servicos-title">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 id="servicos-title" className="text-3xl md:text-4xl font-black mb-4">Serviços de <span className="text-amber-500">borracharia e pneus</span></h2>
              <p className="text-neutral-300 max-w-2xl mx-auto">Veja os serviços e consulte qual avaliação faz sentido para o seu veículo. Prazo, escopo e orçamento dependem do caso e da disponibilidade.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICOS_BORRACHARIA.map((servico) => (
                <article key={servico.href} className={`p-6 rounded-2xl border flex flex-col ${servico.destaque ? 'bg-gradient-to-br from-amber-500/20 to-amber-500/5 border-amber-500/50' : 'bg-neutral-900 border-neutral-800'}`}>
                  <div className="w-14 h-14 bg-amber-500/20 rounded-xl flex items-center justify-center mb-4"><servico.Icone className="w-7 h-7 text-amber-500" aria-hidden="true" /></div>
                  <h3 className="text-xl font-bold mb-3">{servico.nome}</h3>
                  <p className="text-neutral-300 leading-relaxed mb-4">{servico.descricao}</p>
                  <Link to={servico.href} className={`${textLinkClass} mt-auto`} aria-label={`Saiba mais: ${servico.nome}`}>Saiba mais<ChevronRight size={16} aria-hidden="true" /></Link>
                </article>
              ))}
            </div>
            <div className="flex flex-wrap gap-x-6 mt-6"><Link to="/pneus" className={textLinkClass}>Consultar pneus novos</Link><Link to="/manutencao-automotiva-curitiba" className={textLinkClass}>Outros sintomas e manutenção</Link></div>
          </div>
        </section>

        <section className="py-16 bg-neutral-900/50" aria-labelledby="estrutura-title">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12"><h2 id="estrutura-title" className="text-3xl md:text-4xl font-black mb-4">Conheça a <span className="text-amber-500">estrutura da Carplus</span></h2><p className="text-neutral-300 max-w-2xl mx-auto">Fotos da loja e do trabalho com pneus na unidade do Portão. Selecione uma foto para ampliar.</p></div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {GALERIA_BORRACHARIA.map((img, index) => (
                <button type="button" key={img.src} className={`relative rounded-2xl overflow-hidden group focus-visible:outline-2 focus-visible:outline-amber-400 focus-visible:outline-offset-4 ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''}`} onClick={() => setSelectedImage(index)} aria-label={`Ampliar foto: ${img.title}`}>
                  <img src={img.src} alt={img.alt} title={img.title} loading="lazy" width={1200} height={801} className="w-full h-full object-cover aspect-square group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-neutral-950 to-transparent pt-10 pb-3 px-3 text-sm text-left text-white">{img.title}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        <dialog ref={lightbox} aria-label="Foto ampliada da Carplus" onCancel={(event) => { event.preventDefault(); setSelectedImage(null); }} onClose={(event) => { if (!event.currentTarget.open) setSelectedImage(null); }} onClick={(event) => { if (event.target === event.currentTarget) setSelectedImage(null); }} className="fixed inset-0 m-auto max-w-[calc(100%_-_2rem)] max-h-[calc(100%_-_2rem)] p-0 rounded-2xl bg-neutral-950 text-white backdrop:bg-neutral-950/95">
          {selectedImage !== null && <div className="relative p-3 pt-16"><button type="button" autoFocus onClick={() => setSelectedImage(null)} aria-label="Fechar foto ampliada" className="absolute top-2 right-2 flex h-11 w-11 items-center justify-center rounded-full bg-neutral-800 hover:bg-neutral-700"><X size={24} aria-hidden="true" /></button><img src={GALERIA_BORRACHARIA[selectedImage].src} alt={GALERIA_BORRACHARIA[selectedImage].alt} width={1200} height={801} className="max-w-full max-h-[70vh] object-contain rounded-xl" /></div>}
        </dialog>

        <section className="py-16" aria-labelledby="regiao-title">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 id="regiao-title" className="text-3xl md:text-4xl font-black mb-5">Atendimento no Portão <span className="text-amber-500">para quem está na região</span></h2>
            <p className="text-neutral-300 leading-relaxed mb-5">A Carplus fica na Av. Presidente Arthur da Silva Bernardes, 1323, no Portão. Se você está em um bairro próximo, consulte o trajeto até a oficina e fale com a equipe sobre o serviço necessário.</p>
            <p className="text-neutral-300 leading-relaxed mb-7">O atendimento é nesta unidade do Portão. Os bairros abaixo são referências de origem para quem pretende vir à loja, não outras unidades. Distância por ruas e tempo de deslocamento dependem do seu ponto de partida.</p>
            <nav aria-label="Bairros próximos da unidade no Portão" className="flex flex-wrap justify-center gap-3">
              {BAIRROS_PROXIMOS.map((bairro) => <Link key={bairro.href} to={bairro.href} className="inline-flex min-h-11 items-center bg-neutral-800 hover:bg-amber-500/20 text-neutral-200 hover:text-amber-300 px-4 py-2 rounded-full text-sm font-medium transition-colors">{bairro.nome}</Link>)}
            </nav>
            <Link to="/como-chegar" className={`${textLinkClass} mt-6`}><MapPin size={18} aria-hidden="true" />Como chegar à unidade do Portão</Link>
          </div>
        </section>

        <section className="py-16 bg-neutral-900/50" aria-labelledby="faq-title">
          <div className="max-w-3xl mx-auto px-4">
            <h2 id="faq-title" className="text-3xl md:text-4xl font-black text-center mb-10">Dúvidas sobre <span className="text-amber-500">borracharia e conserto</span></h2>
            <div className="space-y-4">
              {FAQ_BORRACHARIA.map((faq) => <details key={faq.question} className="group bg-neutral-900 rounded-2xl border border-neutral-800 overflow-hidden"><summary className="flex min-h-14 cursor-pointer items-center justify-between gap-4 p-6 list-none [&::-webkit-details-marker]:hidden"><span className="font-bold">{faq.question}</span><ChevronDown size={20} className="text-amber-500 transition-transform shrink-0 group-open:rotate-180" aria-hidden="true" /></summary><p className="px-6 pb-6 text-neutral-300 leading-relaxed">{faq.answer}</p></details>)}
            </div>
            <div className="border-t border-neutral-800 mt-10 pt-6 text-sm text-neutral-400">
              <p className="mb-3">Referências de orientação: Michelin sobre <a href="https://www.michelin.com.br/auto/conselhos/troca-de-pneus/conserto-de-pneus" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-white">avaliação para conserto</a>, <a href="https://www.michelin.com.br/auto/conselhos/troca-de-pneus/pneu-furado" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-white">pneu furado ou vazio</a> e <a href="https://www.michelin.com.br/auto/conselhos/troca-de-pneus/danos-no-flanco-do-pneu" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-white">danos na lateral</a>.</p>
              <p>As orientações gerais não substituem a avaliação presencial, o manual do veículo nem as especificações do fabricante do seu pneu.</p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-b from-amber-500/10 to-transparent" aria-labelledby="contato-title">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 id="contato-title" className="text-3xl md:text-4xl font-black mb-6">Precisa de borracharia? <span className="text-amber-500">Consulte a Carplus</span></h2>
            <p className="text-neutral-300 text-lg mb-4">Av. Presidente Arthur da Silva Bernardes, 1323, Portão, Curitiba.</p>
            <p className="text-neutral-300 mb-7">Segunda a sexta: 08h às 18h · Sábado: 08h às 12h. Consulte a equipe sobre feriados e disponibilidade.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={`${buttonClass} bg-green-600 hover:bg-green-500 text-white`}><Phone size={20} className="shrink-0" aria-hidden="true" />Conversar no WhatsApp</a>
              <a href="tel:+554130827282" className={`${buttonClass} bg-neutral-800 hover:bg-neutral-700 text-white`}>Ligar: (41) 3082-7282</a>
              <a href="https://maps.google.com/maps?cid=11894120831274747055" target="_blank" rel="noopener noreferrer" className={`${buttonClass} bg-neutral-800 hover:bg-neutral-700 text-white`}><MapPin size={20} className="shrink-0" aria-hidden="true" />Ver localização no Google Maps</a>
            </div>
            <p className="text-sm text-neutral-400 mt-6">Com pneu vazio ou danificado, não siga dirigindo até a loja. Busque assistência para um deslocamento seguro.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
