import { useState } from 'react';
import { Play } from 'lucide-react';

interface LiteYouTubeProps {
  /** ID do vídeo do YouTube (ex: "TY8qfETXlJQ"). */
  videoId: string;
  /** Título acessível do vídeo. */
  title: string;
  /**
   * Parâmetros extras do embed (ex: "mute=1&loop=1&controls=1").
   * `autoplay=1` é sempre adicionado no clique para iniciar a reprodução.
   */
  params?: string;
  /** Classe do container. Por padrão preenche o elemento pai. */
  className?: string;
  /** Qualidade da thumbnail estática. */
  thumbnailQuality?: 'maxresdefault' | 'sddefault' | 'hqdefault' | 'mqdefault';
}

/**
 * Façade ("lite embed") para vídeos do YouTube.
 *
 * Antes do clique: renderiza apenas uma thumbnail estática (imagem) com um
 * botão de play. NENHUM script/iframe do YouTube é carregado.
 *
 * Após o clique: injeta o iframe (domínio youtube-nocookie) com autoplay,
 * carregando o player somente mediante interação do usuário.
 */
export default function LiteYouTube({
  videoId,
  title,
  params = '',
  className = 'absolute inset-0 w-full h-full',
  thumbnailQuality = 'maxresdefault',
}: LiteYouTubeProps) {
  const [activated, setActivated] = useState(false);
  const [thumbErrored, setThumbErrored] = useState(false);

  // maxresdefault não existe para todos os vídeos; caímos para hqdefault.
  const thumbSrc = thumbErrored
    ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
    : `https://img.youtube.com/vi/${videoId}/${thumbnailQuality}.jpg`;

  if (activated) {
    const query = `autoplay=1${params ? `&${params}` : ''}`;
    return (
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}?${query}`}
        title={title}
        className={className}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setActivated(true)}
      className={`${className} group/lyt flex items-center justify-center bg-black cursor-pointer`}
      aria-label={`Reproduzir vídeo: ${title}`}
    >
      <img
        src={thumbSrc}
        alt={title}
        loading="lazy"
        decoding="async"
        width={480}
        height={360}
        onError={() => setThumbErrored(true)}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <span className="absolute inset-0 bg-black/15 transition-colors group-hover/lyt:bg-black/5" />
      <span className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-red-600 shadow-2xl transition-transform group-hover/lyt:scale-110 md:h-20 md:w-20">
        <Play className="ml-1 h-8 w-8 text-white md:h-9 md:w-9" fill="white" />
      </span>
    </button>
  );
}
