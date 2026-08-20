import React from 'react';
import { Share2, Facebook, Linkedin, MessageCircle, X as TwitterX } from 'lucide-react';
import { Z_INDEX } from '../src/constants/zIndex';

/**
 * Barra Social Lateral Fixa (PARTE 2.1)
 * Oculta em telas menores (< 1424px) para nunca cobrir o conteúdo nem sobrepor textos no mobile.
 */
export const SocialShare: React.FC = () => {
  const currentUrl = typeof window !== 'undefined' ? encodeURIComponent(window.location.href) : '';
  const currentTitle = typeof document !== 'undefined' ? encodeURIComponent(document.title) : '';

  const shareLinks = [
    {
      name: 'WhatsApp',
      icon: <MessageCircle className="w-5 h-5" />,
      url: `https://api.whatsapp.com/send?text=${currentTitle}%20${currentUrl}`,
      color: 'hover:bg-[#25D366]',
    },
    {
      name: 'Facebook',
      icon: <Facebook className="w-5 h-5" />,
      url: `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`,
      color: 'hover:bg-[#1877F2]',
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-5 h-5" />,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}`,
      color: 'hover:bg-[#0A66C2]',
    },
    {
      name: 'Twitter (X)',
      icon: <TwitterX className="w-5 h-5" />,
      url: `https://twitter.com/intent/tweet?text=${currentTitle}&url=${currentUrl}`,
      color: 'hover:bg-black',
    },
  ];

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: document.title,
          url: window.location.href,
        });
      } catch (err) {
        // Share cancelled or failed silently
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <aside
      aria-label="Compartilhar página"
      style={{ zIndex: Z_INDEX.socialBar }}
      className="hidden [@media(min-width:1424px)]:flex fixed left-6 top-1/2 -translate-y-1/2 flex-col gap-3 animate-fadeInLeft"
    >
      {shareLinks.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`
            group relative flex items-center justify-center min-w-[44px] min-h-[44px] w-11 h-11 
            bg-gray-900/80 backdrop-blur-md text-white border border-white/10 rounded-xl
            transition-all duration-200 hover:scale-105 active:scale-95 shadow-md
            ${social.color}
          `}
          aria-label={`Compartilhar no ${social.name}`}
        >
          {social.icon}
          {/* Tooltip */}
          <span className="absolute left-full ml-3 px-3 py-1 bg-gray-950 text-white text-xs font-bold uppercase tracking-wider rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl border border-white/10">
            {social.name}
          </span>
        </a>
      ))}

      <button
        type="button"
        onClick={handleNativeShare}
        className="group relative flex items-center justify-center min-w-[44px] min-h-[44px] w-11 h-11 bg-[#5a6fa6] text-white border border-white/20 rounded-xl transition-all duration-200 hover:scale-105 active:scale-95 shadow-md hover:bg-[#4b5d8d]"
        aria-label="Compartilhar Link"
      >
        <Share2 className="w-5 h-5" />
        <span className="absolute left-full ml-3 px-3 py-1 bg-gray-950 text-white text-xs font-bold uppercase tracking-wider rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl border border-white/10">
          Compartilhar
        </span>
      </button>
    </aside>
  );
};

export default SocialShare;
