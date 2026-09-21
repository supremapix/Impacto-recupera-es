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
          className="absolute inset-0 w-full h-full object-cover scale-[1.01] transform-gpu"
        />

        {/* Camada cinematográfica de profundidade e contraste institucional */}
        <div className="absolute inset-0 bg-[#0a0d14]/75 backdrop-blur-[0.5px]" />
        
        {/* Vinhetas superior e inferior suaves para legibilidade de texto */}
        <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#0a0d14] via-[#0a0d14]/40 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#0a0d14] via-[#0a0d14]/80 to-transparent" />
      </div>

      {/* Controle de Áudio Discreto */}
      <div className="relative z-20 w-full px-4 sm:px-8 flex justify-end">
        <button
          type="button"
          onClick={toggleAudio}
          aria-label={isMuted ? 'Ativar áudio do vídeo' : 'Desativar áudio do vídeo'}
          className="min-h-[38px] px-3.5 py-1.5 rounded-full bg-black/50 hover:bg-black/80 border border-white/15 hover:border-white/30 text-white backdrop-blur-md transition-all flex items-center gap-2 text-xs font-medium shadow-sm hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
        >
          {isMuted ? (
            <>
              <VolumeX className="w-3.5 h-3.5 text-slate-300" />
              <span className="text-[11px] text-slate-300">Áudio do Vídeo</span>
            </>
          ) : (
            <>
              <Volume2 className="w-3.5 h-3.5 text-[#8ba2d4]" />
              <span className="text-[11px] text-white font-semibold">Áudio Ativo</span>
            </>
          )}
        </button>
      </div>

      {/* CENTRO DA HERO: IDENTIDADE INSTITUCIONAL DE ALTO PADRÃO */}
      <Container wide className="relative z-10 my-auto py-8 sm:py-12">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
          {/* Logo & Nome de Impacto */}
          <div className="flex flex-col items-center mb-6">
            <div className="w-20 h-20 sm:w-24 sm:h-24 mb-4 drop-shadow-[0_8px_20px_rgba(0,0,0,0.8)] transition-transform hover:scale-105 duration-300">
              <Logo light className="w-full h-full" />
            </div>
            
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight uppercase leading-none">
              IMPACTO <span className="text-[#8ba2d4] font-extrabold tracking-[0.2em] text-2xl sm:text-4xl md:text-5xl block sm:inline sm:ml-2">RECUPERAÇÕES</span>
            </h1>
            
            <p className="text-slate-200 text-sm sm:text-base md:text-lg max-w-2xl mt-4 font-normal leading-relaxed text-pretty">
              Pronta resposta especializada e recuperação estratégica de veículos, frotas e cargas em território nacional.
            </p>
          </div>

          {/* Credenciais Operacionais em Linha Elegante */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs font-medium text-slate-300 py-2 border-y border-white/10 max-w-3xl">
            <span className="flex items-center gap-1.5 px-2.5 py-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#8ba2d4]" />
              <span>Base Matriz em Indaiatuba / SP</span>
            </span>
            <span className="hidden sm:inline text-white/30">•</span>
            <span className="flex items-center gap-1.5 px-2.5 py-1">
              <Activity className="w-3.5 h-3.5 text-[#8ba2d4]" />
              <span>Rede Nacional com +630 Homologados</span>
            </span>
            <span className="hidden sm:inline text-white/30">•</span>
            <span className="flex items-center gap-1.5 px-2.5 py-1">
              <Radio className="w-3.5 h-3.5 text-[#8ba2d4]" />
              <span>Tecnologia Anti-Jammer & Varredura RF</span>
            </span>
          </div>
        </div>
      </Container>

      {/* Indicador de Deslocamento Suave */}
      <div className="relative z-10 flex flex-col items-center">
        <button
          type="button"
          onClick={scrollToCommandTask}
          className="group flex items-center gap-2 text-xs text-slate-300 hover:text-white transition-colors cursor-pointer py-2 px-4 rounded-full bg-black/40 hover:bg-black/60 border border-white/10 hover:border-white/25 backdrop-blur-sm"
          aria-label="Ir para a Central de Operações e Plantão 24h"
        >
          <span className="text-[11px] font-medium tracking-wide">
            Central de Operações 24h
          </span>
          <ChevronDown className="w-3.5 h-3.5 text-[#8ba2d4] transition-transform group-hover:translate-y-0.5" />
        </button>
      </div>
    </section>
  );
};

export default Hero;

