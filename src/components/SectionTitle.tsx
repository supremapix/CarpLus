interface SectionTitleProps {
  prefix: string;        // e.g. "NOSSOS"
  highlight: string;     // e.g. "SERVIÇOS" — rendered in orange italic
  className?: string;
}

export default function SectionTitle({ prefix, highlight, className = '' }: SectionTitleProps) {
  return (
    <div className={`text-center md:text-left max-w-[640px] mb-8 ${className}`}>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase leading-snug tracking-normal">
        <span className="text-dark">{prefix}</span>{' '}
        <span className="text-primary italic">{highlight}</span>
      </h2>
    </div>
  );
}
