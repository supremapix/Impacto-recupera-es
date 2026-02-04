
import React from 'react';
import { Share2, Facebook, Linkedin, Send, MessageCircle, X as TwitterX } from 'lucide-react';

export const SocialShare: React.FC = () => {
  const currentUrl = encodeURIComponent(window.location.href);
  const currentTitle = encodeURIComponent(document.title);

  const shareLinks = [
    {
      name: 'WhatsApp',
      icon: <MessageCircle size={20} />,
      url: `https://api.whatsapp.com/send?text=${currentTitle}%20${currentUrl}`,
      color: 'bg-[#25D366]',
      hoverColor: 'hover:bg-[#25D366]'
    },
    {
      name: 'Facebook',
      icon: <Facebook size={20} />,
      url: `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`,
      color: 'bg-[#1877F2]',
      hoverColor: 'hover:bg-[#1877F2]'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={20} />,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}`,
      color: 'bg-[#0A66C2]',
      hoverColor: 'hover:bg-[#0A66C2]'
    },
    {
      name: 'Twitter (X)',
      icon: <TwitterX size={20} />,
      url: `https://twitter.com/intent/tweet?text=${currentTitle}&url=${currentUrl}`,
      color: 'bg-black',
      hoverColor: 'hover:bg-black'
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
        console.log('Share cancelled or failed');
      }
    } else {
      // Fallback: Copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copiado para a área de transferência!');
    }
  };

  return (
    <div className="fixed left-2 sm:left-6 top-1/2 -translate-y-1/2 z-[999] flex flex-col gap-3 animate-fadeInLeft">
      {shareLinks.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`
            group relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 
            bg-accent/80 backdrop-blur-md text-white border border-white/10 rounded-2xl
            transition-all duration-300 hover:scale-110 active:scale-95 hover:shadow-2xl
            ${social.hoverColor}
          `}
          aria-label={`Compartilhar no ${social.name}`}
        >
          {social.icon}
          
          {/* Tooltip */}
          <span className="absolute left-full ml-3 px-3 py-1 bg-accent text-white text-[10px] font-black uppercase tracking-widest rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl border border-white/10 translate-x-[-10px] group-hover:translate-x-0">
            {social.name}
          </span>
        </a>
      ))}

      {/* Botão de Compartilhamento Geral */}
      <button
        onClick={handleNativeShare}
        className="group relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-primary text-white border border-white/20 rounded-2xl transition-all duration-300 hover:scale-110 active:scale-95 hover:shadow-2xl shadow-primary/20"
        aria-label="Mais opções de compartilhamento"
      >
        <Share2 size={20} />
        <span className="absolute left-full ml-3 px-3 py-1 bg-accent text-white text-[10px] font-black uppercase tracking-widest rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl border border-white/10 translate-x-[-10px] group-hover:translate-x-0">
          Compartilhar Link
        </span>
      </button>
    </div>
  );
};
