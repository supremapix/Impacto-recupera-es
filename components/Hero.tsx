
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
    "Especializada",
    "Anti-Crime",
    "Garantida",
    "Inteligente"
  ];

  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleType = () => {
      const currentFullText = persuasiveTexts[textIndex];
      
      if (!isDeleting) {
        setDisplayText(currentFullText.substring(0, displayText.length + 1));
        setTypingSpeed(70);
      } else {
        setDisplayText(currentFullText.substring(0, displayText.length - 1));
        setTypingSpeed(40);
      }

      if (!isDeleting && displayText === currentFullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % persuasiveTexts.length);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, textIndex]);

  return (
    <section className="relative min-h-[100svh] flex items-center bg-accent overflow-hidden">
      {/* Background with optimized opacity for legibility */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=1920" 
          alt="Logística" 
          className="w-full h-full object-cover scale-110 opacity-30 sm:opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-accent/90 via-accent/60 to-accent"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 z-20 relative pt-24 pb-12 sm:pt-32 sm:pb-24 lg:py-0">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
          
          {/* Main Content Column */}
          <div className="w-full lg:w-[60%] text-center lg:text-left flex flex-col items-center lg:items-start">
            <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-full text-white mb-6 sm:mb-8 animate-fadeInUp shadow-lg">
              <ShieldCheck size={14} className="text-primary-light animate-pulse" />
              <span className="text-[9px] sm:text-xs font-black tracking-[0.2em] uppercase">MONITORAMENTO ATIVO 24H</span>
            </div>
            
            <div className="mb-2 sm:mb-4 overflow-hidden">
              <h2 className="text-primary font-black text-xs sm:text-lg uppercase tracking-[0.3em] animate-text-reveal italic">
                A Força que Protege
              </h2>
            </div>

            <div className="mb-6 sm:mb-8 min-h-[100px] sm:min-h-[140px] flex flex-col justify-center">
              <h1 className="text-[2.6rem] sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[1.05] tracking-tighter drop-shadow-xl">
                Recuperação <br />
                <span className="text-primary italic inline-block drop-shadow-[0_4px_20px_rgba(90,111,166,0.4)]">
                  {displayText}
                  <span className="inline-block w-1 h-[0.8em] bg-white ml-1 animate-pulse align-middle"></span>
                </span>
              </h1>
            </div>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-10 font-medium leading-relaxed max-w-xl animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              Proteção especializada com tecnologia de ponta e pronta resposta armada. Onde outros perdem o sinal, nós encontramos o alvo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-10 sm:mb-12 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
              <a 
                href={whatsappHeroUrl}
                target="_blank"
                className="group bg-primary text-white px-8 py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:bg-white hover:text-primary transition-all duration-300 shadow-2xl active:scale-95"
              >
                ACIONAR CENTRAL
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#servicos"
                className="bg-white/10 backdrop-blur-md text-white border border-white/10 px-8 py-5 rounded-2xl font-black text-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center active:scale-95"
              >
                UNIDADES TÁTICAS
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-3 justify-center lg:justify-start animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
              <div className="flex items-center gap-3 bg-black/30 backdrop-blur-md px-4 py-3 rounded-xl border border-white/5">
                <MapPin size={16} className="text-primary" />
                <div className="text-left">
                  <p className="text-white font-black text-[9px] uppercase tracking-widest leading-none">Cobertura Global</p>
                  <p className="text-gray-500 text-[8px] font-bold mt-1 uppercase">Brasil Inteiro</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-black/30 backdrop-blur-md px-4 py-3 rounded-xl border border-white/5">
                <Zap size={16} className="text-primary" fill="currentColor" />
                <div className="text-left">
                  <p className="text-white font-black text-[9px] uppercase tracking-widest leading-none">Agilidade CMD</p>
                  <p className="text-gray-500 text-[8px] font-bold mt-1 uppercase">Resposta Imediata</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Column - Refined for perfect fit */}
          <div className="w-full lg:w-[40%] flex justify-center lg:justify-end animate-fadeIn" style={{ animationDelay: '0.3s' }}>
            <div className="relative group scale-[0.7] sm:scale-90 lg:scale-110">
              {/* Radar Rings */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border-2 border-primary/5 rounded-full animate-pulse opacity-30"></div>
              
              <div className="relative w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] lg:w-[420px] lg:h-[420px] bg-white rounded-full shadow-[0_30px_60px_rgba(0,0,0,0.5)] border-[12px] sm:border-[16px] border-accent/10 flex flex-col items-center justify-center p-8 transition-all duration-700 overflow-hidden">
                <div className="relative w-[25%] h-[25%] mb-4 flex items-center justify-center">
                  <Logo size={undefined} className="w-full h-full" />
                </div>

                <div className="text-center">
                  <p className="font-black text-4xl sm:text-6xl tracking-tighter text-accent leading-none">IMPACTO</p>
                  <p className="text-[10px] sm:text-xs font-bold text-primary tracking-[0.4em] uppercase mt-3">Recuperações</p>
                </div>
                
                <div className="absolute top-0 left-0 w-full h-1 bg-primary/20 animate-scan"></div>
                <div className="absolute -top-4 right-1/2 translate-x-1/2 bg-primary p-2.5 rounded-full shadow-lg border-2 border-white">
                  <MapPin className="text-white" size={18} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modern Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-10 h-[50px] sm:h-[80px]">
        <svg className="relative block w-[calc(100%+1.3px)] h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.41,78.27,34.17,162.15,64.28,249.63,48.51,44.25-8,84.09-23.79,122.25-41.57,18.16-8.47,35.32-17.51,59.12-25.12V120H0Z" fill="#ffffff"></path>
        </svg>
      </div>
    </section>
  );
};
