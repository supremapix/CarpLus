import { GOOGLE_REVIEW_SUMMARY as reviews } from '../data/reviewSummary';
export default function ReviewsHeader() {
  return <div className="mx-auto w-full max-w-[380px] text-center">
    <h2 className="text-3xl font-bold uppercase leading-tight text-dark">O que nossos <span className="text-primary">clientes dizem</span></h2>
    <p className="mt-4 text-gray-600 leading-relaxed">{reviews.ratingDisplay} de 5 em {reviews.count} avaliações no Google. Consulta em {reviews.checkedDateDisplay}; os números podem mudar.</p>
  <a href={reviews.source} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex min-h-11 items-center underline">Consultar avaliações no Google</a>
  </div>;
}
