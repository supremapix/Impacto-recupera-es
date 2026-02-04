
import React, { useState, useEffect } from 'react';
import { ArrowRight, ShieldCheck, MapPin, Zap } from 'lucide-react';
import { Logo } from './Logo';

export const Hero: React.FC = () => {
  const whatsappHeroUrl = "https://wa.me/5511965020011?text=Olá,%20preciso%20de%20atendimento%20imediato%20(Cliquei%20no%20Botão%20Principal%20do%20Site).";

  const persuasiveTexts = [
    "de Cargas",
    "em Tempo Real",
    "de Elite",
    "24 Horas",
    "Blindada",
    "de Frotas",
    "com Tecnologia RF",
    "Especializada",
    "Anti-Crime",
    "Ultra-Rápida",
    "Garantida",
    "Inteligente"
  ];

  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleType = () => {
      const currentFullText = persuasiveTexts[textIndex];
      
      if (!isDeleting) {
        setDisplayText(currentFullText.substring(0, displayText.length + 1));
        setTypingSpeed(80);
      } else {
        setDisplayText(currentFullText.substring(0, displayText.length - 1));
        setTypingSpeed(40);
      }

      if (!isDeleting && displayText === currentFullText) {
        setTimeout(() => setIsDeleting(true), 2500);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % persuasiveTexts.length);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, textIndex]);

  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden bg-accent pt-10 sm:pt-0">
      {/* Background Layer com efeito Parallax simulado */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=1920" 
          alt="Logística Segura" 
          className="w-full h-full object-cover scale-110 animate-pulse-slow opacity-40 md:opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-accent via-accent/60 to-accent/90"></div>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 z-20 relative py-20 lg:py-0">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* Coluna Texto */}
          <div className="w-full lg:w-[65%] text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-2xl border border-white/10 px-4 py-2 rounded-full text-white mb-8 animate-fadeInUp shadow-2xl">
              <ShieldCheck size={16} className="text-primary-light animate-pulse" />
              <span className="text-[10px] sm:text-xs font-black tracking-[0.3em] uppercase">Status: Monitoramento Ativo 24h</span>
            </div>
            
            <div className="mb-4 overflow-hidden">
              <h2 className="text-primary font-black text-sm sm:text-xl uppercase tracking-[0.4em] animate-text-reveal italic">
                A Força que Protege
              </h2>
            </div>

            <div className="mb-8 min-h-[140px] sm:min-h-[180px] lg:min-h-[240px] flex flex-col justify-center">
              <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-white leading-[1] tracking-tighter drop-shadow-2xl">
                Recuperação <br />
                <span className="text-primary italic inline-block drop-shadow-[0_10px_30px_rgba(90,111,166,0.6)]">
                  {displayText}
                  <span className="inline-block w-1.5 md:w-3 h-[0.85em] bg-white ml-2 animate-pulse align-middle"></span>
                </span>
              </h1>
            </div>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-10 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
              Proteção de ativos com tecnologia militar e pronta resposta armada. Onde outros perdem o sinal, nós encontramos o alvo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
              <a 
                href={whatsappHeroUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-primary text-white px-10 py-6 rounded-[2rem] font-black text-xl flex items-center justify-center gap-4 hover:bg-white hover:text-primary transition-all duration-500 shadow-[0_20px_60px_rgba(90,111,166,0.5)] active:scale-95 animate-pulse-glow"
              >
                ACIONAR CENTRAL
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </a>
              <a 
                href="#servicos"
                className="bg-white/5 backdrop-blur-xl text-white border border-white/10 px-10 py-6 rounded-[2rem] font-black text-xl hover:bg-white/20 transition-all duration-500 flex items-center justify-center active:scale-95 shadow-xl"
              >
                UNIDADES TÁTICAS
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-4 justify-center lg:justify-start animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
              <div className="flex items-center gap-4 bg-black/40 backdrop-blur-2xl p-4 pr-6 rounded-[1.5rem] border border-white/5">
                <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center text-primary">
                  <MapPin size={20} />
                </div>
                <div className="text-left">
                  <p className="text-white font-black text-[10px] uppercase tracking-widest leading-none">Cobertura Global</p>
                  <p className="text-gray-500 text-[10px] font-bold mt-1 uppercase italic">Pronta Resposta</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-black/40 backdrop-blur-2xl p-4 pr-6 rounded-[1.5rem] border border-white/5">
                <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center text-primary">
                  <Zap size={20} fill="currentColor" />
                </div>
                <div className="text-left">
                  <p className="text-white font-black text-[10px] uppercase tracking-widest leading-none">Agilidade CMD</p>
                  <p className="text-gray-500 text-[10px] font-bold mt-1 uppercase italic">Zero Latência</p>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna Visual - Ajustada para Mobile */}
          <div className="w-full lg:w-[35%] flex justify-center lg:justify-end animate-fadeIn" style={{ animationDelay: '0.5s' }}>
            <div className="relative group scale-75 sm:scale-90 lg:scale-100">
              {/* Radar Rings */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160%] h-[160%] border-2 border-primary/5 rounded-full animate-pulse opacity-50"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] border border-primary/10 rounded-full animate-ping opacity-20"></div>

              {/* Distintivo Central */}
              <div className="relative w-[320px] h-[320px] md:w-[420px] md:h-[420px] lg:w-[480px] lg:h-[480px] bg-white rounded-full shadow-[0_50px_100px_rgba(0,0,0,0.5)] border-[20px] border-accent/20 flex flex-col items-center justify-center p-12 transition-all duration-700 hover:scale-105 overflow-hidden group-hover:border-primary/20">
                
                <div className="relative w-[30%] h-[30%] mb-6 flex items-center justify-center">
                  <Logo size={undefined} className="w-full h-full" />
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-primary p-3 rounded-full shadow-2xl animate-bounce-slow border-4 border-white">
                    <MapPin className="text-white" size={24} />
                  </div>
                </div>

                <div className="text-center">
                  <p className="font-black text-5xl md:text-7xl tracking-tighter text-accent leading-none">IMPACTO</p>
                  <p className="text-xs md:text-sm font-bold text-primary tracking-[0.5em] uppercase mt-4">Recuperações</p>
                </div>
                
                {/* Linha de Scan IA */}
                <div className="absolute top-0 left-0 w-full h-1.5 bg-primary/20 animate-scan shadow-[0_0_20px_rgba(90,111,166,0.5)]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Onda de Transição Suave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-10 h-[60px] md:h-[120px]">
        <svg className="relative block w-[calc(100%+1.3px)] h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.41,78.27,34.17,162.15,64.28,249.63,48.51,44.25-8,84.09-23.79,122.25-41.57,18.16-8.47,35.32-17.51,59.12-25.12V120H0Z" fill="#ffffff"></path>
        </svg>
      </div>
    </section>
  );
};
