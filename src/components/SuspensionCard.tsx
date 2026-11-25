import { Link } from 'react-router-dom';
import { ChevronRight, MessageCircle } from 'lucide-react';
import { type Suspensao4x4Item } from '../data/suspensao4x4';
import { suspensionDetails, suspensionPath } from '../data/suspensao4x4Details';

export function SuspensionMedia({ item, eager = false }: { item: Suspensao4x4Item; eager?: boolean }) {
  const { photo, kind } = suspensionDetails(item);
  const src = photo || `/images/suspensao-4x4/guias/${kind}.svg`;
  return <figure className="relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden bg-white">
    <img src={src} alt={photo ? item.name : `Esquema ilustrativo: ${item.group.toLowerCase()}`} width={480} height={360} loading={eager ? 'eager' : 'lazy'} decoding="async" className="h-full w-full object-contain p-2 sm:p-3" />
    {!photo && <figcaption className="absolute inset-x-0 bottom-0 bg-gray-100/95 px-1 py-1 text-center text-[10px] font-semibold leading-tight text-gray-700 sm:text-xs">Ilustração da categoria</figcaption>}
  </figure>;
}

export function SuspensionCard({ item, quote }: { item: Suspensao4x4Item; quote: string }) {
  const { vehicle, brand } = suspensionDetails(item);
  return <li className="min-w-0">
    <article className="flex min-w-0 flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      <Link to={suspensionPath(item)} className="group block min-w-0 focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-amber-600" aria-label={`Ver detalhes de ${item.name}`}>
        <SuspensionMedia item={item} />
        <div className="space-y-1.5 border-t border-gray-100 p-2.5 sm:p-4">
          <p className="break-words text-[11px] font-semibold leading-tight text-amber-800 sm:text-xs">{item.group}</p>
          <h3 className="break-words text-sm font-bold leading-snug text-dark group-hover:underline sm:text-base">{item.name}</h3>
          {vehicle && <p className="break-words text-xs text-gray-700">{vehicle}</p>}
          <p className="break-words text-xs text-gray-600">{brand && <>{brand} · </>}{item.ref}</p>
          <p className="inline-flex items-center gap-0.5 text-xs font-bold leading-tight text-dark">Ver detalhes <ChevronRight size={14} aria-hidden="true" /></p>
        </div>
      </Link>
      <div className="px-2.5 pb-3 sm:px-4">
        <a href={quote} target="_blank" rel="noopener noreferrer" aria-label={`Orçar ${item.name} no WhatsApp`} className="inline-flex min-h-11 w-full items-center justify-center gap-1 rounded-md bg-green-50 px-1 text-center text-xs font-bold leading-tight text-green-900 hover:bg-green-100 focus-visible:outline-2 focus-visible:outline-green-700"><MessageCircle size={15} className="shrink-0" aria-hidden="true" /> Pedir cotação</a>
      </div>
    </article>
  </li>;
}
