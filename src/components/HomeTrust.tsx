import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare } from 'lucide-react';

const evidence = [
  { title: 'Pneus e oficina no mesmo endereço', text: 'Venda e montagem de pneus, alinhamento, freios e suspensão no Portão, em Curitiba.', image: '/images/galeria/oficina-carros.webp', alt: 'Área da Carplus com veículos nos elevadores', link: '/servicos', action: 'Conhecer os serviços' },
  { title: 'Conheça a estrutura antes de vir', text: 'Veja a fachada e os espaços da Carplus. Saiba onde seu carro será atendido.', image: '/images/galeria/fachada-fullservice.webp', alt: 'Fachada identificada da Carplus Pneus e Oficina', link: '/quem-somos', action: 'Ver mais fotos da Carplus' },
  { title: 'Fale diretamente com a equipe', text: 'Conte o que seu carro precisa, tire suas dúvidas e consulte os próximos passos pelo WhatsApp.', image: '/images/galeria/atendimento-cliente.webp', alt: 'Conversa durante atendimento na área de oficina da Carplus', link: '/contato', action: 'Ver canais de atendimento' },
];

export default function HomeTrust() {
  return <section id="por-que-confiar" aria-labelledby="home-trust-title" className="scroll-mt-28 bg-white py-14 md:py-20">
    <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
      <header className="max-w-3xl mb-9">
        <p className="text-sm font-bold uppercase tracking-widest text-gray-600 mb-3">Conheça a Carplus</p>
        <h2 id="home-trust-title" className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-dark">Por que confiar <span className="text-primary">na Carplus?</span></h2>
        <p className="mt-5 text-lg text-gray-600 leading-relaxed">Conheça onde seu carro será atendido e fale com a equipe antes de vir. Nossa estrutura, nossos serviços e nossos canais estão aqui para você conferir.</p>
      </header>
      <div className="mb-8 rounded-xl border border-gray-200 bg-gray-50 p-5 sm:flex sm:items-center sm:justify-between sm:gap-5">
        <div><p className="text-lg font-bold text-dark">4,9 de 5 em 262 avaliações no Google</p><p className="mt-1 text-sm text-gray-600">Dados consultados em 18/10/2026. A nota e o total podem mudar.</p></div>
        <a href="https://maps.google.com/maps?cid=11894120831274747055" target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex min-h-11 items-center font-bold text-dark underline underline-offset-4 sm:mt-0">Ver avaliações no Google</a>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {evidence.map(item => <article key={item.title} className="rounded-xl overflow-hidden border border-gray-200 bg-gray-50">
          <img src={item.image} alt={item.alt} loading="lazy" decoding="async" width={800} height={450} className="w-full aspect-[2/1] md:aspect-video object-cover" />
          <div className="p-5 md:p-6"><h3 className="text-xl md:text-2xl font-bold text-dark leading-tight mb-3">{item.title}</h3><p className="text-gray-600 leading-relaxed mb-5">{item.text}</p><Link to={item.link} className="inline-flex items-center gap-2 font-bold text-sm underline underline-offset-4 text-dark hover:text-primary">{item.action}<ArrowRight size={16} aria-hidden="true" /></Link></div>
        </article>)}
      </div>
      <div className="mt-8 grid md:grid-cols-2 items-center overflow-hidden rounded-xl bg-dark text-white">
        <div className="relative aspect-video bg-black">
          <a href="https://www.youtube.com/watch?v=xlwso3EmUog" target="_blank" rel="noopener noreferrer" aria-label="Assistir ao vídeo da Carplus no YouTube" className="block relative h-full"><img src="/images/video/carplus-revisao-poster.jpg" alt="Capa do vídeo da Carplus sobre preparação para viagens" loading="lazy" width={480} height={360} className="h-full w-full object-cover" /><span className="absolute bottom-4 left-4 rounded-md bg-black/85 px-4 py-2 text-sm font-bold text-white">Assistir no YouTube</span></a>
        </div>
        <div className="p-6 md:p-8">
          <h3 className="text-2xl md:text-3xl font-bold mb-3">Vídeo da Carplus: preparação para viagens</h3>
          <p className="text-white/80 leading-relaxed mb-3">Assista ao conteúdo da Carplus sobre revisão e preparação do carro para viagens.</p>
          <p className="text-sm text-white/60 mb-6">O vídeo abre no YouTube em uma nova aba. Nenhum player externo é carregado nesta página.</p>
          <a href="https://wa.me/554130827282?text=Ol%C3%A1!%20Vi%20a%20estrutura%20da%20Carplus%20no%20site%20e%20gostaria%20de%20conversar%20sobre%20meu%20carro." target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[#25D366] px-5 py-3 font-bold text-sm text-dark hover:bg-[#20bd5a]"><MessageSquare size={18} aria-hidden="true" />Conversar sobre meu carro</a>
          <p className="text-sm text-white/70 mt-4">Atendemos também carros antigos. Informe o modelo do carro e o que precisa. Para pneus, envie também a medida.</p>
          <Link to="/manutencao-automotiva-curitiba" className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-primary underline underline-offset-4">Não sabe qual serviço procurar? Veja orientações por sintoma<ArrowRight size={16} aria-hidden="true" /></Link>
        </div>
      </div>
    </div>
  </section>;
}
