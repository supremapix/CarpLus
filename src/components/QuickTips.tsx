import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Lightbulb, X, MessageSquare } from 'lucide-react';

export function getQuickTips(pathname: string) {
  if (/^\/pneu(?:\/|-promocao\/)/.test(pathname)) return {
    title: 'Dúvidas sobre este pneu?',
    tips: [
      'Confira no manual a medida e os índices de carga e velocidade para o ano e a versão do veículo.',
      'Confirme com a equipe a aplicação, disponibilidade, valor e condições antes de decidir.',
    ],
  };
  if (/pneu|pneus|ofertas/.test(pathname)) return {
    title: 'Como escolher um pneu?',
    tips: [
      'Comece pela medida indicada no manual do veículo; não escolha apenas pelo modelo ou pelo aro.',
      'Informe ano, versão e uso do veículo para consultar as opções. Preço e disponibilidade precisam de confirmação.',
    ],
  };
  if (/servic|oficina|manutencao|automotivo|borracharia/.test(pathname)) return {
    title: 'Dúvidas sobre manutenção?',
    tips: [
      'Descreva o sintoma, quando começou e os dados do veículo. A causa depende de avaliação, não só de uma mensagem.',
      'Peça orçamento e confirme o que está incluído, o prazo e as condições antes de autorizar o serviço.',
    ],
  };
  if (/bairro|como-chegar|perto-de-mim|contato/.test(pathname)) return {
    title: 'Planejando sua visita?',
    tips: [
      'Nossa loja fica no Portão, em Curitiba: Av. Pres. Arthur da Silva Bernardes, 1323. As páginas de bairros não indicam outras unidades.',
      'Se você está no Portão, nos bairros próximos ou em outra região, confirme o atendimento com a equipe e consulte a rota atual no mapa.',
    ],
  };
  if (/blog|comparar/.test(pathname)) return {
    title: 'Do conteúdo para a prática',
    tips: [
      'Use estas orientações como referência; o manual do seu veículo e a avaliação presencial ajudam a decidir.',
      'Ao comparar propostas, confira medida, índices, itens incluídos e condições. Tire dúvidas antes de autorizar.',
    ],
  };
  return {
    title: 'Podemos ajudar?',
    tips: [
      'Para pneus, tenha a medida, o ano e a versão do veículo. Para manutenção, descreva o sintoma que deseja avaliar.',
      'Atendimento na loja no Portão, em Curitiba, para clientes dos bairros próximos e de outras regiões. Consulte condições e agendamento.',
    ],
  };
}

export default function QuickTips() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const content = getQuickTips(pathname);

  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialogRef.current?.querySelector<HTMLButtonElement>('button')?.focus();
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { event.preventDefault(); setOpen(false); }
      if (event.key !== 'Tab') return;
      const items = Array.from(dialogRef.current?.querySelectorAll<HTMLElement>('button, a[href]') ?? []);
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
    };
    document.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKey);
      triggerRef.current?.focus();
    };
  }, [open]);

  return <>
    <button
      ref={triggerRef}
      type="button"
      onClick={() => setOpen(true)}
      aria-expanded={open}
      aria-controls={open ? 'quick-tips-dialog' : undefined}
      aria-label="Abrir dicas e dúvidas rápidas"
      className="fixed bottom-4 left-1/2 z-40 flex min-h-11 -translate-x-1/2 items-center gap-1.5 rounded-full border border-white/30 bg-dark px-3 text-sm font-bold text-white shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    >
      <Lightbulb size={18} aria-hidden="true" /> Dicas
    </button>
    {open && <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/75 p-4" onClick={() => setOpen(false)}>
      <div
        ref={dialogRef}
        id="quick-tips-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="quick-tips-heading"
        className="max-h-[85dvh] w-full max-w-md overflow-y-auto rounded-2xl bg-white p-5 text-dark shadow-xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mb-4 flex items-start justify-between gap-3">
          <h2 id="quick-tips-heading" className="pt-2 text-2xl font-bold">{content.title}</h2>
          <button type="button" aria-label="Fechar dicas" onClick={() => setOpen(false)} className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-gray-100 hover:bg-gray-200 focus-visible:outline-2 focus-visible:outline-primary"><X size={22} /></button>
        </div>
        <ul className="list-disc space-y-4 pl-5 text-base leading-relaxed">
          {content.tips.map(tip => <li key={tip}>{tip}</li>)}
        </ul>
        <a
          href={`https://wa.me/554130827282?text=${encodeURIComponent('Olá! Gostaria de tirar uma dúvida sobre esta página da Carplus: https://www.carpluspneuseoficina.com.br' + pathname)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 flex min-h-12 items-center justify-center gap-2 rounded-lg bg-dark px-4 py-3 text-base font-bold text-white"
        ><MessageSquare size={20} aria-hidden="true" /> Consultar a equipe no WhatsApp</a>
        <p className="mt-3 text-sm text-gray-600">Abre o WhatsApp; nenhuma mensagem é enviada automaticamente.</p>
      </div>
    </div>}
  </>;
}
