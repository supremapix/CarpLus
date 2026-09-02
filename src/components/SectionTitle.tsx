interface SectionTitleProps {
  prefix: string;        // e.g. "NOSSOS"
  highlight: string;     // e.g. "SERVIÇOS" — rendered in orange italic
  className?: string;
  darkBg?: boolean;      // Para fundos escuros, o prefix fica branco
}

export default function SectionTitle({ prefix, highlight, className = '', darkBg = false }: SectionTitleProps) {
  return (
    <div className={`text-center md:text-left max-w-[640px] mx-auto md:mx-0 mb-8 ${className}`}>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase leading-snug tracking-normal text-balance">
        <span className={darkBg ? 'text-white' : 'text-dark'}>{prefix}</span>{' '}
        <span className="text-primary italic">{highlight}</span>
      </h2>
    </div>
  );
}
