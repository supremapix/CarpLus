interface SectionTitleProps {
  prefix: string;        // e.g. "NOSSOS"
  highlight: string;     // e.g. "SERVIÇOS" — rendered in orange italic
  darkBg?: boolean;      // if true, wraps in white badge chip
  className?: string;
}

export default function SectionTitle({ prefix, highlight, darkBg = false, className = '' }: SectionTitleProps) {
  const titleContent = (
    <>
      <span className={darkBg ? 'text-dark' : 'text-dark'}>{prefix}</span>{' '}
      <span className="text-primary italic">{highlight}</span>
    </>
  );

  if (darkBg) {
    return (
      <div className={`text-left max-w-[640px] mb-8 ${className}`}>
        <h2 className="inline-block bg-white rounded-md px-4 py-2 text-2xl sm:text-3xl md:text-4xl font-bold uppercase leading-snug tracking-normal">
          {titleContent}
        </h2>
      </div>
    );
  }

  return (
    <div className={`text-left max-w-[640px] mb-8 ${className}`}>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase leading-snug tracking-normal">
        {titleContent}
      </h2>
    </div>
  );
}
