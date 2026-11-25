import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { SUSPENSAO_4X4 } from '../data/suspensao4x4';
import { SUSPENSION_IMAGES } from '../data/suspensao4x4Images';
import { suspensionPath } from '../data/suspensao4x4Details';

const IRONMAN = 'Ironman';
const withPhotos = SUSPENSAO_4X4.filter(item => Boolean(SUSPENSION_IMAGES[item.ref]));
const slides = [
  ...withPhotos.filter(item => item.brand === IRONMAN),
  ...withPhotos.filter(item => item.brand !== IRONMAN),
];
const CONTROL = 'inline-flex min-h-11 min-w-11 items-center justify-center gap-1.5 rounded-md border border-neutral-300 bg-white px-2 text-dark hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-amber-700';

export default function SuspensionHeroCarousel() {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [productFocused, setProductFocused] = useState(false);
  const figure = useRef<HTMLElement>(null);
  const count = slides.length;
  const item = slides[index];
  const rotating = playing && visible && !hovered && !productFocused;
  const nextIndex = (index + 1) % count;

  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const apply = () => setPlaying(!motion.matches);
    apply();
    motion.addEventListener('change', apply);
    return () => motion.removeEventListener('change', apply);
  }, []);

  useEffect(() => {
    const element = figure.current;
    if (!element || !('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.15 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (count < 2 || !rotating) return;
    const nextPhoto = new Image();
    nextPhoto.src = SUSPENSION_IMAGES[slides[nextIndex].ref];
    const timer = window.setTimeout(() => {
      if (!document.hidden) setIndex(nextIndex);
    }, 5500);
    const resume = () => {
      if (!document.hidden) {
        window.clearTimeout(timer);
        setIndex(nextIndex);
      }
    };
    document.addEventListener('visibilitychange', resume);
    return () => { window.clearTimeout(timer); document.removeEventListener('visibilitychange', resume); };
  }, [count, nextIndex, rotating]);

  const go = (direction: number) => {
    setPlaying(false);
    setIndex(current => (current + direction + count) % count);
  };

  if (!item) return null;

  return (
    <figure ref={figure} aria-label="Fotos dos produtos do catálogo de suspensão 4x4" aria-roledescription="carrossel"
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      className="min-w-0 overflow-hidden rounded-2xl border border-white/20 bg-white text-dark shadow-lg shadow-black/25">
      <div className="flex min-h-14 flex-wrap items-center justify-between gap-x-3 gap-y-2 border-b border-neutral-200 bg-neutral-50 px-4 py-3 sm:px-6">
        {item.brand === IRONMAN
          ? <img src="/images/suspensao-4x4/ironman-4x4.svg" alt="Ironman 4x4" width={152} height={34} className="h-auto w-28 sm:w-36" decoding="async" />
          : <span className="text-sm font-black">{item.brand || 'Catálogo 4x4'}</span>}
        <span className="rounded-full border border-neutral-300 bg-white px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-neutral-700">Na Carplus</span>
      </div>
      <Link to={suspensionPath(item)} aria-label={`Ver ficha: ${item.name}`} onFocus={() => setProductFocused(true)} onBlur={() => setProductFocused(false)}
        className="relative grid h-56 place-items-center overflow-hidden bg-white focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-amber-700 sm:h-72 xl:h-80">
        <img src={SUSPENSION_IMAGES[item.ref]} alt={item.name} width={800} height={800}
          fetchPriority={index === 0 ? 'high' : 'auto'} decoding="async"
          className="absolute inset-0 mx-auto h-full w-full object-contain px-3 py-2 sm:px-5" />
      </Link>
      <figcaption className="border-t border-neutral-200 px-4 py-3 sm:px-6">
        <div aria-live={rotating ? 'off' : 'polite'} className="min-h-12">
          <p className="text-sm font-bold leading-snug">{item.name}</p>
          <p className="mt-1 text-xs text-neutral-600">Referência {item.ref}</p>
        </div>
        <div className="mt-2 flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
          <div className="flex items-center gap-1">
            <button type="button" className={CONTROL} onClick={() => go(-1)} aria-label="Produto anterior"><ChevronLeft size={18} aria-hidden="true" /></button>
            <button type="button" className={CONTROL} onClick={() => setPlaying(!playing)} aria-label={playing ? 'Pausar carrossel' : 'Reproduzir carrossel'}>
              {playing ? <Pause size={16} aria-hidden="true" /> : <Play size={16} aria-hidden="true" />}
            </button>
            <button type="button" className={CONTROL} onClick={() => go(1)} aria-label="Próximo produto"><ChevronRight size={18} aria-hidden="true" /></button>
            <span className="ml-2 text-xs tabular-nums text-neutral-700">{index + 1} de {count}</span>
          </div>
          <Link to={suspensionPath(item)} onFocus={() => setProductFocused(true)} onBlur={() => setProductFocused(false)} className="inline-flex min-h-11 items-center gap-1 text-sm font-bold text-dark underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-amber-700">Ver ficha <ArrowRight size={16} aria-hidden="true" /></Link>
        </div>
      </figcaption>
    </figure>
  );
}
