
import React from 'react';
import { Radio, Wifi, Signal, Zap, Shield, MapPin, Activity, CheckCircle2 } from 'lucide-react';
import { Logo } from './Logo';
import { COMPANY } from '../src/data/company';
import Container from '../src/components/ui/Container';

export const FeaturedVisual: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#0a0d14] text-white relative overflow-hidden border-t border-slate-800/80">
      <Container>
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#5a6fa6]/15 border border-[#5a6fa6]/25 px-3.5 py-1.5 rounded-full text-[#8ba2d4] text-xs font-semibold uppercase tracking-wider mb-3">
            <Activity className="w-3.5 h-3.5" />
            <span>Infraestrutura Operacional</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Centro de Monitoramento & Varredura RF
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2.5 leading-relaxed">
            Operações contínuas integrando sinais de radiofrequência, agentes em campo e central 24h para localização rápida em cenários de risco.
          </p>
        </div>

        {/* Painel Tático Central */}
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="rounded-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
            {/* Barra de Status do CMD */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center">
                  <Logo light className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                    Impacto Recuperações · CMD Operacional
                  </h3>
                  <p className="text-xs text-slate-400 font-mono">
                    Central Indaiatuba / SP · Cobertura Brasil
                  </p>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 bg-emerald-950/60 border border-emerald-500/30 px-3 py-1 rounded-full text-emerald-400 text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>MONITORAMENTO ATIVO 24H</span>
              </div>
            </div>

            {/* Grid de Métricas e Tecnologias */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 my-8">
              <div className="p-5 rounded-2xl bg-slate-800/50 border border-slate-700/60">
                <div className="w-9 h-9 rounded-lg bg-[#5a6fa6]/20 border border-[#5a6fa6]/30 flex items-center justify-center text-[#8ba2d4] mb-3">
                  <Radio className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-white mb-1">Varredura Anti-Jammer</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Detecção de frequências e transmissores em pontos de bloqueio ou áreas de sombra.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-800/50 border border-slate-700/60">
                <div className="w-9 h-9 rounded-lg bg-[#5a6fa6]/20 border border-[#5a6fa6]/30 flex items-center justify-center text-[#8ba2d4] mb-3">
                  <Signal className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-white mb-1">Triangulação de Sinal</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Cálculo de aproximação vetorial para guiar agentes em solo com precisão métrica.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-800/50 border border-slate-700/60">
                <div className="w-9 h-9 rounded-lg bg-[#5a6fa6]/20 border border-[#5a6fa6]/30 flex items-center justify-center text-[#8ba2d4] mb-3">
                  <Zap className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-white mb-1">Despacho Imediato</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Acionamento instantâneo da malha de mais de 630 parceiros no ponto mais próximo.
                </p>
              </div>
            </div>

            {/* Rodapé de Acionamento Tático */}
            <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Protocolo de segurança homologado para frotas, pesados e utilitários.</span>
              </div>

              <a
                href={COMPANY.telefone.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#5a6fa6] hover:bg-[#4b5e91] text-white font-bold text-xs sm:text-sm inline-flex items-center justify-center gap-2 shadow-md transition-colors shrink-0"
              >
                <span>Acionar Suporte Imediato</span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedVisual;

