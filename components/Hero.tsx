import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, MapPin, Zap, PhoneCall, Radio, ChevronRight } from 'lucide-react';
import { Logo } from './Logo';
import { COMPANY } from '../src/data/company';
import Container from '../src/components/ui/Container';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero-principal"
      className="relative min-h-[92svh] sm:min-h-[85vh] lg:min-h-[760px] flex items-center bg-[#0d111a] overflow-hidden pt-24 pb-12 sm:pt-28 sm:pb-16 lg:py-28"
    >
      {/* Background Tático Sutil com Iluminação Controlada */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <div className="absolute -top-40 right-[-10%] w-[550px] h-[550px] rounded-full bg-gradient-to-bl from-[#5a6fa6]/20 via-blue-900/10 to-transparent blur-3xl opacity-70" />
        <div className="absolute -bottom-32 left-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#5a6fa6]/15 via-slate-900/20 to-transparent blur-3xl opacity-60" />
        <div 
          className="absolute inset-0 opacity-[0.07]" 
          style={{
            backgroundImage: 'radial-gradient(#8ba2d4 1px, transparent 1px)',
            backgroundSize: '28px 28px'
          }}
        />
      </div>

      <Container wide className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14 2xl:gap-18">
          {/* Lado Esquerdo: Conteúdo Direto, Claro e Sem Poluição */}
          <div className="w-full lg:w-[60%] text-center lg:text-left">
            {/* Badge de Status Oficial e Discreto */}
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full text-slate-200 mb-5 shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs font-semibold tracking-wide text-slate-300">
                Plantão 24h Ativo · Indaiatuba & Cobertura Brasil
              </span>
            </div>

            {/* H1 Conciso, Tipografia Balanceada */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-white tracking-tight leading-[1.12] mb-4 sm:mb-5 text-balance">
              Pronta resposta e recuperação tática de veículos e cargas
            </h1>

            {/* Texto de Apoio Fluido e Natural */}
            <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed mb-7 sm:mb-8 max-w-[62ch] mx-auto lg:mx-0 text-pretty">
              Atuação especializada na localização e recuperação de frotas e cargas roubadas ou furtadas. 
              Central 24 horas em <strong>Indaiatuba/SP</strong> com malha de mais de <strong>630 profissionais homologados</strong> e varredura de radiofrequência anti-jammer em todo o território nacional.
            </p>

            {/* Botões de Ação Imediata (Design Ergonômico para Mobile e Desktop) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 justify-center lg:justify-start mb-8 sm:mb-10">
              <a
                href={COMPANY.telefone.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[50px] px-7 py-3.5 rounded-xl bg-[#5a6fa6] hover:bg-[#4b5e91] text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-lg shadow-[#5a6fa6]/25 hover:shadow-[#5a6fa6]/40 active:scale-[0.98] transition-all"
                aria-label="Acionar Central de Emergência 24h via WhatsApp"
              >
                <PhoneCall className="w-4 h-4 shrink-0" />
                <span>Acionar Plantão 24h</span>
                <ChevronRight className="w-4 h-4 shrink-0 opacity-80" />
              </a>

              <a
                href={`tel:${COMPANY.telefone.e164}`}
                className="min-h-[50px] px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white font-semibold text-sm sm:text-base flex items-center justify-center gap-2 active:scale-[0.98] transition-all"
                aria-label={`Ligar para ${COMPANY.telefone.exibicao}`}
              >
                <span className="text-xs font-mono text-[#8ba2d4]">Ligar:</span>
                <span className="font-bold">{COMPANY.telefone.exibicao}</span>
              </a>
            </div>

            {/* Micro-Barra de Confiança Tática (Discreta, sem caixas pesadas no mobile) */}
            <div className="pt-5 border-t border-white/10 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-5 text-xs text-slate-300">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#8ba2d4]" />
                <span>Base Indaiatuba / SP</span>
              </div>
              <span className="hidden sm:inline text-slate-600">·</span>
              <div className="flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-[#8ba2d4]" />
                <span>+630 Profissionais Homologados</span>
              </div>
              <span className="hidden sm:inline text-slate-600">·</span>
              <div className="flex items-center gap-1.5">
                <Radio className="w-3.5 h-3.5 text-emerald-400" />
                <span>Varredura Anti-Jammer</span>
              </div>
            </div>
          </div>

          {/* Lado Direito: Emblema Oficial de Comando (Visível em Telas Médias e Grandes) */}
          <div className="hidden lg:flex w-full lg:w-[38%] justify-center 2xl:justify-end">
            <div className="relative w-full max-w-[380px] rounded-3xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-700/60 p-8 flex flex-col items-center justify-center shadow-2xl backdrop-blur-xl">
              {/* Logo e Tipografia da Marca */}
              <div className="w-24 h-24 mb-5 drop-shadow-md">
                <Logo light className="w-full h-full" />
              </div>
              <p className="text-white font-black text-2xl tracking-tight text-center">
                IMPACTO
              </p>
              <p className="text-[#8ba2d4] font-bold text-[11px] uppercase tracking-[0.25em] mt-0.5 text-center">
                RECUPERAÇÕES
              </p>

              {/* Status de Prontidão */}
              <div className="mt-6 pt-5 border-t border-slate-800 w-full space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">Status da Central:</span>
                  <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    OPERANTE 24H
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">Tempo de Resposta:</span>
                  <span className="text-slate-200 font-semibold">Despacho Imediato</span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">Atendimento:</span>
                  <span className="text-slate-200 font-semibold">Nacional</span>
                </div>
              </div>

              {/* Link Direto */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 w-full text-center">
                <Link
                  to="/servicos"
                  className="text-xs text-[#8ba2d4] hover:text-white font-semibold flex items-center justify-center gap-1 transition-colors"
                >
                  <span>Conhecer Estrutura Operacional</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;

