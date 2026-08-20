import React from 'react';
import { PhoneCall, MessageSquare, ShieldAlert } from 'lucide-react';
import { COMPANY } from '../../data/company';

interface CtaCentralProps {
  titulo?: string;
  subtitulo?: string;
  compacto?: boolean;
}

export const CtaCentral: React.FC<CtaCentralProps> = ({
  titulo = 'Precisa de ajuda agora, não de leitura?',
  subtitulo = 'Nossa central de prontidão tática opera 24 horas por dia, 7 dias por semana, com despacho imediato para todo o Brasil.',
  compacto = false,
}) => {
  const whatsappUrl = COMPANY.telefone.whatsappUrl || 'https://wa.me/5511965020011';

  return (
    <div className={`rounded-3xl bg-[#171922] text-white border border-slate-800 shadow-2xl overflow-hidden relative ${compacto ? 'p-6 sm:p-8 my-8' : 'p-8 sm:p-12 my-12'}`}>
      {/* Detalhe de fundo tático */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#5a6fa6]/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative z-10 max-w-3xl mx-auto text-center sm:text-left flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 border border-red-500/30 text-red-300 text-xs font-mono font-bold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span>Plantão 24 Horas Ativo</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            {titulo}
          </h3>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {subtitulo}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
          <a
            href={`tel:${COMPANY.telefone.e164}`}
            className="min-h-[46px] min-w-[44px] px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm inline-flex items-center justify-center gap-2.5 transition-all active:scale-95"
            aria-label={`Ligar para a central de emergência 24h: ${COMPANY.telefone.exibicao}`}
          >
            <PhoneCall className="w-4 h-4 text-[#8ba2d4]" />
            <span className="font-mono">{COMPANY.telefone.exibicao}</span>
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[46px] min-w-[44px] px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-white font-bold text-sm inline-flex items-center justify-center gap-2.5 shadow-lg shadow-emerald-950/40 transition-all active:scale-95"
            aria-label="Acionar central de prontidão imediatamente pelo WhatsApp"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chamar no WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CtaCentral;
