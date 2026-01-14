
import React from 'react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  const whatsappFloatingUrl = "https://wa.me/5511965020011?text=Olá,%20cliquei%20no%20Botão%20Flutuante%20do%20Site%20e%20preciso%20de%20suporte.";

  return (
    <a
      href={whatsappFloatingUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 md:p-5 rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.4)] hover:scale-110 active:scale-95 transition-all group flex items-center gap-3 animate-float"
      aria-label="Fale conosco no WhatsApp"
    >
      {/* Wrapper for overflow-hidden effects (Shine & Text Expansion) */}
      <div className="absolute inset-0 overflow-hidden rounded-full pointer-events-none">
        {/* Shine effect */}
        <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
      </div>
      
      <div className="hidden md:block overflow-hidden max-w-0 group-hover:max-w-[200px] transition-all duration-500 whitespace-nowrap">
        <div className="px-2">
          <p className="text-[10px] font-black leading-none uppercase tracking-widest opacity-80">Suporte</p>
          <p className="text-sm font-black uppercase">24 Horas Online</p>
        </div>
      </div>
      
      <MessageCircle size={32} className="relative z-10" />
      
      {/* Notification Dot - Now visible outside the button bounds if needed */}
      <span className="absolute -top-1 -right-1 flex h-6 w-6 z-20">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-6 w-6 bg-red-500 border-[3px] border-white shadow-lg flex items-center justify-center">
          <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
        </span>
      </span>
    </a>
  );
};
