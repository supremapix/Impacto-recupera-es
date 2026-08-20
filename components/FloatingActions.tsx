import React, { useState, useEffect, useRef } from 'react';
import {
  Share2,
  PhoneCall,
  MessageCircle,
  ArrowUp,
  X,
  Check,
  Copy,
  Facebook,
  Linkedin,
  Sparkles,
} from 'lucide-react';
import { COMPANY } from '../src/data/company';
import { Z_INDEX } from '../src/constants/zIndex';

// Custom icons for Pinterest, Threads, and Twitter/X with Lucide matching style
const TwitterXIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const PinterestIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.546.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
  </svg>
);

const ThreadsIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M12.186 24h-.007C5.854 23.957.9 18.94.856 12.505.811 5.922 6.07.545 12.652.5c6.643-.045 12.068 5.344 12.112 11.986.024 3.652-1.48 7.027-4.123 9.255l-1.579-1.921c2.164-1.82 3.39-4.57 3.37-7.48-.036-5.34-4.385-9.664-9.724-9.627-5.276.036-9.49 4.348-9.454 9.688.037 5.176 4.025 9.215 9.155 9.25 2.506.017 4.88-.934 6.674-2.682l1.637 1.867C18.423 22.84 15.429 24 12.186 24zm4.84-9.98c-.143-2.825-1.88-4.884-4.888-4.884-3.155 0-5.187 2.222-5.187 5.417 0 3.298 2.06 5.428 5.215 5.428 1.954 0 3.493-.775 4.453-2.24l-1.86-1.397c-.604.834-1.472 1.257-2.593 1.257-1.745 0-2.733-1.077-2.853-2.62h7.713zm-2.45-1.76c-.035-1.127-.723-2.023-2.278-2.023-1.464 0-2.235.885-2.396 2.023h4.674z" />
  </svg>
);

export const FloatingActions: React.FC = () => {
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const shareMenuRef = useRef<HTMLDivElement>(null);

  // Monitora scroll para exibição suave do botão Voltar ao Topo (> 300px)
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fechar menu ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (shareMenuRef.current && !shareMenuRef.current.contains(event.target as Node)) {
        setShowShareMenu(false);
      }
    };
    if (showShareMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showShareMenu]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Metadados dinâmicos para compartilhamento
  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://www.impactorecuperacoes.com.br';
  const pageTitle = typeof document !== 'undefined' ? document.title : 'Impacto Recuperações | Pronta Resposta 24h';
  const encodedUrl = encodeURIComponent(currentUrl);
  const encodedTitle = encodeURIComponent(pageTitle);
  const defaultMedia = 'https://www.impactorecuperacoes.com.br/og-image.jpg';
  const encodedMedia = encodeURIComponent(defaultMedia);

  // Mensagem Semântica de Indicação
  const indicationMessage = `Estou indicando o melhor serviço de Pronta Resposta & Recuperação Veicular - Impacto Recuperações: ${pageTitle} (${currentUrl})`;
  const encodedIndicationMessage = encodeURIComponent(indicationMessage);

  // Ação de Copiar Link da Página
  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(indicationMessage);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 3000);
    } catch (err) {
      console.warn('Falha ao copiar link:', err);
    }
  };

  const shareChannels = [
    {
      name: 'WhatsApp',
      icon: <MessageCircle className="w-4 h-4" />,
      url: `https://api.whatsapp.com/send?text=${encodedIndicationMessage}`,
      bgClass: 'bg-[#25D366] hover:bg-[#20ba59] text-white',
      badge: 'Direto',
    },
    {
      name: 'Facebook',
      icon: <Facebook className="w-4 h-4" />,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      bgClass: 'bg-[#1877F2] hover:bg-[#1565cc] text-white',
    },
    {
      name: 'Twitter (X)',
      icon: <TwitterXIcon className="w-4 h-4" />,
      url: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
      bgClass: 'bg-black hover:bg-neutral-800 text-white border border-white/10',
    },
    {
      name: 'Pinterest',
      icon: <PinterestIcon className="w-4 h-4" />,
      url: `https://pinterest.com/pin/create/button/?url=${encodedUrl}&media=${encodedMedia}&description=${encodedTitle}`,
      bgClass: 'bg-[#E60023] hover:bg-[#c9001f] text-white',
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-4 h-4" />,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      bgClass: 'bg-[#0A66C2] hover:bg-[#084e94] text-white',
    },
    {
      name: 'Threads',
      icon: <ThreadsIcon className="w-4 h-4" />,
      url: `https://www.threads.net/intent/post?text=${encodedIndicationMessage}`,
      bgClass: 'bg-[#101010] hover:bg-black text-white border border-white/10',
    },
  ];

  return (
    <>
      {/* 1. BOTÃO DE COMPARTILHAMENTO FLUTUANTE (CANTO INFERIOR ESQUERDO) */}
      <div
        style={{ zIndex: Z_INDEX.socialBar }}
        className="fixed bottom-[max(1.5rem,env(safe-area-inset-bottom))] left-4 sm:left-6 flex flex-col items-start"
        ref={shareMenuRef}
      >
        {/* Menu / Popup de Compartilhamento com Efeito Vidro Fosco (backdrop-blur) */}
        {showShareMenu && (
          <div
            id="floating-share-menu"
            className="mb-3 w-72 sm:w-80 bg-slate-950/90 backdrop-blur-xl border border-slate-700/60 rounded-3xl p-4 sm:p-5 shadow-[0_20px_50px_rgba(0,0,0,0.6)] text-white animate-fadeInUp origin-bottom-left transition-all duration-300"
            role="dialog"
            aria-label="Opções de compartilhamento"
          >
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800/80">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-xl bg-[#5a6fa6]/30 border border-[#5a6fa6]/50 flex items-center justify-center text-[#8ba2d4]">
                  <Share2 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="font-black text-xs uppercase tracking-wider text-white">
                    Compartilhar Página
                  </h4>
                  <p className="text-[10px] text-slate-400 font-mono">Espalhe esta solução</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowShareMenu(false)}
                className="w-7 h-7 rounded-full bg-white/5 hover:bg-white/15 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Fechar menu de compartilhamento"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Grid dos Canais de Compartilhamento Direto */}
            <div className="grid grid-cols-2 gap-2 mb-3">
              {shareChannels.map((channel) => (
                <a
                  key={channel.name}
                  href={channel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-sm ${channel.bgClass}`}
                  aria-label={`Compartilhar via ${channel.name}`}
                >
                  <span className="shrink-0">{channel.icon}</span>
                  <span className="truncate">{channel.name}</span>
                </a>
              ))}
            </div>

            {/* Botão Copiar Link com Feedback Semântico */}
            <div className="pt-2 border-t border-slate-800/80">
              <button
                type="button"
                id="btn-copy-share-link"
                onClick={handleCopyLink}
                className={`w-full py-2.5 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all duration-200 border ${
                  copied
                    ? 'bg-emerald-600/90 border-emerald-400 text-white shadow-[0_0_15px_rgba(16,185,129,0.3)]'
                    : 'bg-white/10 hover:bg-white/20 border-white/15 text-slate-200 hover:text-white'
                }`}
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-300" />
                    <span className="font-bold">Link Copiado com Sucesso!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#8ba2d4]" />
                    <span>Copiar Link da Página</span>
                  </>
                )}
              </button>
            </div>
          </div>
        )}

        {/* Botão Gatilho de Compartilhamento com Efeito Pulso/Brilho */}
        <div className="relative group">
          {/* Efeito Glow / Pulso no fundo */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#5a6fa6] via-blue-500 to-indigo-600 rounded-full blur opacity-65 group-hover:opacity-100 transition duration-500 animate-pulse" />

          <button
            type="button"
            id="floating-share-btn"
            onClick={() => setShowShareMenu(!showShareMenu)}
            aria-expanded={showShareMenu}
            aria-controls="floating-share-menu"
            aria-label="Abrir opções de compartilhamento nas redes sociais"
            className="relative min-w-[48px] min-h-[48px] w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-slate-950 text-white border border-white/20 flex items-center justify-center shadow-xl hover:scale-105 active:scale-95 transition-all duration-200"
          >
            <Share2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#8ba2d4] group-hover:text-white transition-colors" />

            {/* Badge Indicador Sutil */}
            <span className="absolute -top-0.5 -right-0.5 flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8ba2d4] opacity-75" />
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#5a6fa6] border border-white" />
            </span>
          </button>
        </div>
      </div>

      {/* 2. BOTÕES DE CONTATO RÁPIDO E VOLTAR AO TOPO (CANTO INFERIOR DIREITO) */}
      <aside
        aria-label="Atendimento rápido e navegação"
        style={{ zIndex: Z_INDEX.fabs }}
        className="fixed bottom-[max(1.5rem,env(safe-area-inset-bottom))] right-4 sm:right-6 flex flex-col items-end gap-2.5 sm:gap-3 pointer-events-none"
      >
        {/* Botão Voltar ao Topo (Aparece suavemente após 300px) */}
        <button
          type="button"
          id="btn-back-to-top"
          onClick={scrollToTop}
          className={`pointer-events-auto min-w-[42px] min-h-[42px] w-10 h-10 sm:w-11 sm:h-11 bg-slate-900/90 backdrop-blur-md text-white rounded-full shadow-lg border border-white/15 hover:bg-[#5a6fa6] transition-all duration-300 flex items-center justify-center group ${
            showBackToTop
              ? 'opacity-100 translate-y-0 scale-100'
              : 'opacity-0 translate-y-3 scale-90 pointer-events-none'
          }`}
          aria-label="Voltar suavemente ao topo da página"
        >
          <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:-translate-y-0.5" />
        </button>

        {/* Botão "Ligar Agora" (Gradiente chamativo, animação de pulso/bounce) */}
        <a
          id="btn-call-now"
          href={`tel:${COMPANY.telefone.e164}`}
          className="pointer-events-auto min-h-[46px] px-4 py-2.5 sm:px-5 sm:py-3 bg-gradient-to-r from-red-600 via-rose-500 to-amber-500 hover:from-red-500 hover:to-amber-400 text-white rounded-full shadow-[0_8px_20px_rgba(225,29,72,0.4)] hover:shadow-[0_8px_25px_rgba(225,29,72,0.6)] hover:scale-105 active:scale-95 transition-all duration-200 flex items-center gap-2.5 border border-white/20 group"
          aria-label={`Ligar Agora para ${COMPANY.telefone.exibicao}`}
        >
          <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center shrink-0">
            <PhoneCall className="w-4 h-4 text-white animate-bounce" />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-red-100 leading-none">
              Plantão 24h
            </span>
            <span className="text-xs sm:text-sm font-black tracking-tight leading-tight">
              Ligar Agora
            </span>
          </div>
        </a>

        {/* Botão "WhatsApp 24h" (Gradiente verde, luz pulsante e indicador "Online Agora") */}
        <a
          id="btn-whatsapp-24h"
          href={COMPANY.telefone.whatsappUrl || COMPANY.whatsapp?.url}
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto relative min-h-[50px] px-4 py-3 sm:px-5 sm:py-3.5 bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600 hover:from-emerald-400 hover:to-green-500 text-white rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.45)] hover:shadow-[0_10px_35px_rgba(37,211,102,0.7)] hover:scale-105 active:scale-95 transition-all duration-200 flex items-center gap-3 border border-white/25 group"
          aria-label="Conversar com a Central 24h via WhatsApp"
        >
          {/* Indicador de Luz Verde Piscando ("Online Agora") */}
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-90" />
            <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white shadow-sm" />
          </span>

          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
            <MessageCircle className="w-5 h-5 text-white transition-transform group-hover:scale-110 group-hover:rotate-6" />
          </div>

          <div className="flex flex-col text-left">
            <div className="flex items-center gap-1.5 leading-none">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-100">
                Online Agora
              </span>
            </div>
            <span className="text-xs sm:text-sm font-black tracking-tight leading-tight mt-0.5">
              WhatsApp 24h
            </span>
          </div>
        </a>
      </aside>
    </>
  );
};

// Aliases para compatibilidade total
export const FloatingActionButtons = FloatingActions;
export default FloatingActions;
