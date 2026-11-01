import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Copy, MessageCircle, Phone, Share2, X } from 'lucide-react';

/** One global, keyboard-accessible set of actions, including editorial routes. */
export default function FloatingActions() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState('');
  const [context, setContext] = useState({ title: '', url: '', image: '' });
  const trigger = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  const close = () => { setOpen(false); trigger.current?.focus(); };
  useEffect(() => { setOpen(false); setStatus(''); }, [location.pathname, location.search]);
  useEffect(() => {
    if (!open) return;
    panel.current?.querySelector<HTMLButtonElement>('button')?.focus();
    const key = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { event.preventDefault(); close(); }
      if (event.key === 'Tab' && panel.current) {
        const items = Array.from(panel.current.querySelectorAll<HTMLElement>('a[href], button, input'));
        const first = items[0], last = items[items.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
      }
    };
    document.addEventListener('keydown', key);
    return () => document.removeEventListener('keydown', key);
  }, [open]);
  const text = `Confira esta página da Carplus: ${context.title}`;
  const encodedUrl = encodeURIComponent(context.url);
  const encodedText = encodeURIComponent(text);
  const links = [
    ['WhatsApp', `https://wa.me/?text=${encodeURIComponent(`${text}\n${context.url}`)}`],
    ['Facebook', `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`],
    ['X', `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`],
    ['Pinterest', `https://pinterest.com/pin/create/button/?url=${encodedUrl}&description=${encodedText}&media=${encodeURIComponent(context.image)}`],
    ['LinkedIn', `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`],
    ['Threads', `https://www.threads.net/intent/post?text=${encodeURIComponent(`${text}\n${context.url}`)}`],
  ];
  const copy = async () => {
    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(`${text}\n${context.url}`);
      setStatus('Texto e link copiados. Cole onde quiser recomendar.');
    } catch { setStatus('Não foi possível copiar automaticamente. Selecione e copie o link abaixo.'); }
  };
  return <>
    <div className="fixed bottom-4 left-4 z-40" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
      <button ref={trigger} type="button" aria-label="Compartilhar esta página" aria-expanded={open} aria-controls="global-share-panel"
        className="flex min-h-12 min-w-12 items-center justify-center gap-2 rounded-full bg-dark px-4 text-white shadow-lg border border-white/30"
        onClick={() => {
          if (open) { close(); return; }
          setContext({ title: document.title, url: window.location.href, image: document.querySelector<HTMLMetaElement>('meta[property="og:image"]')?.content ?? '' });
          setStatus(''); setOpen(true);
        }}><Share2 size={20} aria-hidden="true" /><span className="hidden sm:inline">Compartilhar</span></button>
    </div>
    {open && <div className="fixed inset-0 z-[1100] flex items-end justify-start bg-black/40 p-4 sm:items-center" onClick={(e) => { if (e.target === e.currentTarget) close(); }}>
      <div ref={panel} id="global-share-panel" role="dialog" aria-modal="true" aria-labelledby="global-share-title" className="w-full max-w-sm max-h-[85dvh] overflow-y-auto rounded-2xl bg-white p-5 text-dark shadow-2xl">
        <div className="flex items-center justify-between gap-3"><h2 id="global-share-title" className="text-xl">Recomendar esta página</h2><button type="button" onClick={close} aria-label="Fechar compartilhamento" className="min-h-11 min-w-11 flex items-center justify-center"><X aria-hidden="true" /></button></div>
        <p className="my-3 text-sm">Compartilhe o título e o link. A publicação só acontece se você confirmar na rede escolhida.</p>
        <div className="grid grid-cols-2 gap-2">{links.map(([name, href]) => <a key={name} href={href} target="_blank" rel="noopener noreferrer" className="flex min-h-12 items-center justify-center rounded-lg border border-gray-300 px-3 text-base font-semibold hover:bg-gray-100" aria-label={`Compartilhar no ${name} (abre nova aba)`}>{name}</a>)}</div>
        <button type="button" onClick={copy} className="mt-3 flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-primary px-3 font-bold"><Copy size={18} aria-hidden="true" />Copiar texto e link</button>
        <p role="status" aria-live="polite" className="my-2 text-sm">{status}</p>
        <label className="block text-sm font-semibold" htmlFor="share-page-url">Link desta página</label><input id="share-page-url" readOnly value={context.url} onFocus={(e) => e.currentTarget.select()} className="mt-1 w-full min-h-11 rounded border border-gray-400 p-2 text-sm" />
      </div>
    </div>}
    <div className="fixed bottom-4 right-4 z-40 flex flex-col gap-2" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
      <a href="tel:+554130827282" aria-label="Ligar para Carplus: (41) 3082-7282" className="flex h-12 w-12 items-center justify-center rounded-full bg-dark text-white shadow-lg border border-white/30"><Phone size={22} aria-hidden="true" /></a>
      <a href="https://wa.me/554130827282" target="_blank" rel="noopener noreferrer" aria-label="Consultar Carplus no WhatsApp (abre nova aba)" className="flex h-12 w-12 items-center justify-center rounded-full bg-green-700 text-white shadow-lg border border-white/30"><MessageCircle size={24} aria-hidden="true" /></a>
    </div>
  </>;
}
