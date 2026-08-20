import React, { useRef, useState } from 'react';
import { ShieldCheck, Radio, Volume2, VolumeX, ChevronDown, Activity, Sparkles } from 'lucide-react';
import { Logo } from './Logo';
import { COMPANY } from '../src/data/company';
import Container from '../src/components/ui/Container';

export const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleAudio = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const scrollToCommandTask = () => {
    const el = document.getElementById('task-comando-24h');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero-principal"
      className="relative min-h-[75svh] sm:min-h-[80vh] lg:min-h-[86vh] flex flex-col justify-between items-center bg-[#0a0d14] overflow-hidden pt-24 pb-8 sm:pt-28 sm:pb-12"
    >
      {/* VÍDEO CINEMATOGRÁFICO DE FUNDO (MÁXIMA VISIBILIDADE) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden select-none pointer-events-none">
        <video
          ref={videoRef}
          src="https://img.supremasite.com.br/impacto.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover scale-[1.02] transform-gpu"
        />

        {/* Gradientes Sutis de Contraste e Transição (Mantendo máxima visibilidade do vídeo) */}
        {/* Top Vignette para contraste do cabeçalho */}
        <div className="absolute top-0 inset-x-0 h-32 sm:h-40 bg-gradient-to-b from-[#0a0d14]/80 via-[#0a0d14]/30 to-transparent" />
        
        {/* Bottom Vignette para transição suave com a task inferior */}
        <div className="absolute bottom-0 inset-x-0 h-40 sm:h-52 bg-gradient-to-t from-[#0a0d14] via-[#0a0d14]/60 to-transparent" />

        {/* Grid tático ultra-sutil sem cobrir o vídeo */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: 'radial-gradient(#8ba2d4 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      {/* Controles Flutuantes do Vídeo (Som Mudo/Ativo no canto superior direito) */}
      <div className="relative z-20 w-full px-4 sm:px-8 flex justify-end">
        <button
          type="button"
          onClick={toggleAudio}
          aria-label={isMuted ? 'Ativar áudio do vídeo institucional' : 'Desativar áudio do vídeo'}
          className="min-h-[44px] min-w-[44px] px-3 py-2 rounded-full bg-black/40 hover:bg-black/70 border border-white/20 hover:border-white/40 text-white backdrop-blur-md transition-all flex items-center gap-2 text-xs font-mono shadow-xl hover:scale-105 active:scale-95 cursor-pointer"
        >
          {isMuted ? (
            <>
              <VolumeX className="w-4 h-4 text-slate-300" />
              <span className="hidden sm:inline text-[11px] text-slate-200">Áudio Desativado</span>
            </>
          ) : (
            <>
              <Volume2 className="w-4 h-4 text-emerald-400 animate-pulse" />
              <span className="hidden sm:inline text-[11px] text-emerald-300 font-bold">Áudio Ativo</span>
            </>
          )}
        </button>
      </div>

      {/* CENTRO DA HERO: IDENTIDADE CINEMATOGRÁFICA & RECONHECIMENTO DE MARCA */}
      <Container wide className="relative z-10 my-auto py-6 sm:py-10">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
          {/* Logo & Nome de Impacto com Efeito Glassmorphism de Alta Precisão */}
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 sm:w-28 sm:h-28 mb-4 drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)] transition-transform hover:scale-105 duration-300">
              <Logo light className="w-full h-full" />
            </div>
            
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight uppercase leading-none drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
              IMPACTO
            </h1>
            <p className="text-[#8ba2d4] font-black text-base sm:text-xl md:text-2xl uppercase tracking-[0.35em] mt-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              RECUPERAÇÕES
            </p>
          </div>

          {/* Micro-telemetria tática minimalista */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-mono text-slate-200">
            <span className="px-3.5 py-1.5 rounded-lg bg-black/40 border border-white/10 backdrop-blur-md flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Base Matriz Indaiatuba / SP</span>
            </span>
            <span className="px-3.5 py-1.5 rounded-lg bg-black/40 border border-white/10 backdrop-blur-md flex items-center gap-2">
              <Activity className="w-4 h-4 text-[#8ba2d4]" />
              <span>Rede Nacional +630 Parceiros</span>
            </span>
            <span className="px-3.5 py-1.5 rounded-lg bg-black/40 border border-white/10 backdrop-blur-md flex items-center gap-2">
              <Radio className="w-4 h-4 text-amber-400" />
              <span>Tecnologia Anti-Jammer</span>
            </span>
          </div>
        </div>
      </Container>

      {/* Indicador de Deslocamento para a Task Imediata */}
      <div className="relative z-10 flex flex-col items-center">
        <button
          type="button"
          onClick={scrollToCommandTask}
          className="group flex flex-col items-center gap-1.5 text-xs font-mono text-slate-300 hover:text-white transition-colors cursor-pointer min-h-[44px] justify-center"
          aria-label="Rolar para a Central de Operações e Plantão 24h"
        >
          <span className="text-[11px] uppercase tracking-widest bg-black/40 px-3 py-1 rounded-full border border-white/10 backdrop-blur-sm group-hover:border-[#5a6fa6]/60 transition-all">
            Painel de Acionamento 24h
          </span>
          <ChevronDown className="w-5 h-5 text-[#8ba2d4] animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default Hero;

