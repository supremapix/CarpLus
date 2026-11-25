import { useRef, useState, type KeyboardEvent } from 'react';
import { ChevronLeft, ChevronRight, Expand, Minus, Plus, X } from 'lucide-react';

const navigation = 'grid size-11 shrink-0 place-items-center rounded-md border border-gray-300 bg-white text-gray-900 hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600';

export function SuspensionGallery({ name, images }: { name: string; images: readonly string[] }) {
  const [index, setIndex] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const modal = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const count = images.length;
  const step = (delta: number) => { setZoomed(false); setIndex(current => (current + delta + count) % count); };
  const keys = (event: KeyboardEvent) => {
    if (count < 2) return;
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      step(event.key === 'ArrowLeft' ? -1 : 1);
    }
  };
  return <figure className="space-y-3" aria-label="Galeria de fotos do produto" onKeyDown={keys}>
    <button ref={trigger} type="button" onClick={() => modal.current?.showModal()} aria-haspopup="dialog" aria-label="Ampliar foto do produto" className="group relative block min-h-64 w-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600">
      <img src={images[index]} alt={name + ' · foto ' + (index + 1)} fetchPriority="high" decoding="async" width={1000} height={1000} className="mx-auto aspect-square max-h-[39rem] w-full object-contain p-2 sm:p-4" />
      <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-md border border-gray-300 bg-white px-3 py-2 text-xs font-bold text-gray-900 shadow-sm group-hover:bg-amber-100"><Expand size={16} aria-hidden="true" /> Ampliar foto</span>
    </button>
    {count > 1 && <div className="flex flex-wrap gap-2" aria-label="Miniaturas da galeria">
      {images.map((src, i) => <button type="button" key={src} onClick={() => setIndex(i)} aria-label={'Ver foto ' + (i + 1)} aria-pressed={index === i} className={'size-16 overflow-hidden rounded-md border-2 bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600 sm:size-20 ' + (index === i ? 'border-amber-600' : 'border-gray-200 hover:border-gray-400')}>
        <img src={src} alt="" width={72} height={72} loading="lazy" decoding="async" className="h-full w-full object-contain p-1" />
      </button>)}
    </div>}
    <figcaption aria-live="polite" className="text-sm text-gray-700">Foto do produto {index + 1} de {count}</figcaption>
    <dialog ref={modal} onClose={() => { setZoomed(false); trigger.current?.focus(); }} onClick={event => { if (event.target === event.currentTarget) modal.current?.close(); }} aria-label="Foto ampliada do produto" className="m-auto max-h-[94dvh] w-[94vw] max-w-5xl overflow-auto rounded-xl bg-white p-3 text-gray-900 shadow-2xl backdrop:bg-black/80 sm:p-5">
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-bold" aria-live="polite">Foto {index + 1} de {count}</p>
        <div className="flex gap-2"><button type="button" aria-label={zoomed ? 'Reduzir zoom' : 'Aumentar zoom'} aria-pressed={zoomed} onClick={() => setZoomed(z => !z)} className={navigation}>{zoomed ? <Minus size={20} aria-hidden="true" /> : <Plus size={20} aria-hidden="true" />}</button><button type="button" aria-label="Fechar foto ampliada" onClick={() => modal.current?.close()} className={navigation}><X size={22} aria-hidden="true" /></button></div>
      </div>
      <div className="relative my-2 max-h-[72dvh] overflow-auto"><img src={images[index]} alt={name + ' · foto ampliada ' + (index + 1)} width={1000} height={1000} loading="lazy" className={'object-contain ' + (zoomed ? 'h-auto w-[170%] max-w-none' : 'mx-auto h-[72dvh] w-full')} /></div>
      {count > 1 && <div className="flex justify-center gap-3">
        <button type="button" aria-label="Foto anterior" onClick={() => step(-1)} className={navigation}><ChevronLeft size={22} aria-hidden="true" /></button>
        <button type="button" aria-label="Próxima foto" onClick={() => step(1)} className={navigation}><ChevronRight size={22} aria-hidden="true" /></button>
      </div>}
    </dialog>
  </figure>;
}
