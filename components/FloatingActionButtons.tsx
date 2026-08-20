import React, { useState, useEffect } from 'react';
import { MessageCircle, ArrowUp } from 'lucide-react';
import { COMPANY } from '../src/data/company';
import { Z_INDEX } from '../src/constants/zIndex';

/**
 * FABs Unificados: WhatsApp + Voltar ao Topo (PARTE 2.2)
 * Empilhados numa coluna única sem sobreposição de conteúdo.
 */
export const FloatingActionButtons: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <aside
      aria-label="Ações rápidas e contato"
      style={{ zIndex: Z_INDEX.fabs }}
      className="fixed bottom-[max(1.5rem,env(safe-area-inset-bottom))] right-4 md:right-6 flex flex-col items-end gap-3 pointer-events-none"
    >
      {/* Botão Voltar ao Topo */}
      {showBackToTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="pointer-events-auto min-w-[44px] min-h-[44px] w-12 h-12 bg-gray-900/90 backdrop-blur-md text-white rounded-full shadow-lg border border-white/10 hover:bg-[#5a6fa6] transition-all flex items-center justify-center animate-fadeIn group"
          aria-label="Voltar ao topo da página"
        >
          <ArrowUp className="w-5 h-5 transition-transform group-hover:-translate-y-0.5" />
        </button>
      )}

      {/* FAB WhatsApp */}
      <a
        href={COMPANY.telefone.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto min-w-[48px] min-h-[48px] p-3.5 sm:p-4 bg-[#25D366] text-white rounded-full shadow-[0_8px_24px_rgba(37,211,102,0.4)] hover:scale-105 active:scale-95 transition-all flex items-center gap-2.5 group relative"
        aria-label="Acionar Central 24 Horas via WhatsApp"
      >
        <MessageCircle className="w-7 h-7 shrink-0" />
        <span className="hidden md:inline-block font-bold text-xs uppercase tracking-wider pr-1">
          Plantão 24h
        </span>

        {/* Indicador de Status Ativo */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-600 border-2 border-white" />
        </span>
      </a>
    </aside>
  );
};

export default FloatingActionButtons;
