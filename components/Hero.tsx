
import React, { useState, useEffect } from 'react';
import { ArrowRight, ShieldCheck, MapPin, Zap } from 'lucide-react';
import { Logo } from './Logo';

export const Hero: React.FC = () => {
  const whatsappHeroUrl = "https://wa.me/5511965020011?text=Olá,%20preciso%20de%20atendimento%20imediato%20(Cliquei%20no%20Botão%20Principal%20do%20Site).";

  const persuasiveTexts = [
    "Imediata",
    "em Tempo Real",
    "de Elite",
    "24 Horas",
    "Blindada",
    "de Cargas",
    "de Frotas",
    "com Tecnologia RF",
    "Nacional",
    "Especializada",
    "Tática",
    "Anti-Crime",
    "Ultra-Rápida",
    "Garantida",
    "Profissional",
    "de Alto Impacto",
    "Inteligente",
    "Sem Fronteiras"
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
        setTypingSpeed(100);
      } else {
        setDisplayText(currentFullText.substring(0, displayText.length - 1));
        setTypingSpeed(50);
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
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 sm:pt-24 lg:pt-0 bg-accent">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=1920" 
          alt="Logística e Segurança" 
          className="w-full h-full object-cover scale-110 animate-pulse-slow opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-accent/90 via-accent/70 to-transparent"></div>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      {/* Main Content Container */}
      <div className="container mx-auto px-4 z-20 relative py-12 lg:py-0">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 lg:gap-8 xl:gap-16">
          
          {/* Left Column: Messaging */}
          <div className="w-full lg:w-3/5 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-xl border border-white/20 px-4 py-1.5 sm:px-5 sm:py-2 rounded-full text-white mb-6 md:mb-8 animate-fadeInUp shadow-[0_0_30px_rgba(90,111,166,0.3)]">
              <ShieldCheck size={14} className="text-white animate-pulse" />
              <span className="text-[8px] sm:text-[10px] md:text-xs font-black tracking-[0.2em] uppercase">Segurança de Elite 24h</span>
            </div>
            
            <div className="overflow-hidden-text mb-1">
              <h2 className="text-primary font-black text-sm sm:text-lg md:text-2xl uppercase tracking-[0.2em] sm:tracking-[0.3em] animate-text-reveal italic">
                A Força que Protege
              </h2>
            </div>

            <div className="mb-4 sm:mb-6 min-h-[90px] sm:min-h-[110px] md:min-h-[180px] lg:min-h-[220px] flex flex-col justify-center">
              <h1 className="text-3xl sm:text-4xl md:text-7xl xl:text-8xl font-black text-white leading-[1.1] drop-shadow-2xl">
                Recuperação <br />
                <span className="text-primary italic inline-block min-h-[1.2em]">
                  {displayText}
                  <span className="inline-block w-1 md:w-2 h-[0.8em] bg-primary ml-1 animate-pulse align-middle"></span>
                </span>
              </h1>
            </div>
            
            <p className="text-sm sm:text-base md:text-xl xl:text-2xl text-gray-200 mb-8 sm:mb-10 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0 drop-shadow-md animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
              Pronta resposta especializada com tecnologia de ponta. Blindamos seu patrimônio com a rede de recuperação mais rápida do Brasil.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-10 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
              <a 
                href={whatsappHeroUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-primary text-white px-8 py-5 md:px-10 md:py-6 rounded-2xl font-black text-base sm:text-lg md:text-xl flex items-center justify-center gap-3 hover:bg-accent hover:-translate-y-1.5 transition-all duration-300 shadow-[0_20px_40px_rgba(90,111,166,0.4)] hover:shadow-[0_25px_50px_rgba(0,0,0,0.5)] active:scale-95 animate-pulse-glow"
              >
                CANAL ATENDIMENTO
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#servicos"
                className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-5 md:px-10 md:py-6 rounded-2xl font-bold text-base sm:text-lg md:text-xl hover:bg-white/20 hover:-translate-y-1.5 transition-all duration-300 text-center flex items-center justify-center active:scale-95 shadow-xl"
              >
                SERVIÇOS
              </a>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 justify-center lg:justify-start animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
              <div className="flex items-center gap-3 bg-black/40 backdrop-blur-xl p-2.5 pr-5 rounded-2xl border border-white/10 w-full sm:w-auto">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/40 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-white" size={16} />
                </div>
                <div className="text-left">
                  <p className="text-white font-black leading-none text-[8px] sm:text-[10px] md:text-xs uppercase tracking-tight">Cobertura Nacional</p>
                  <p className="text-gray-400 text-[8px] mt-1 font-bold">Tempo recorde</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-black/40 backdrop-blur-xl p-2.5 pr-5 rounded-2xl border border-white/10 w-full sm:w-auto">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-accent/80 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Zap className="text-primary" size={16} fill="currentColor" />
                </div>
                <div className="text-left">
                  <p className="text-white font-black leading-none text-[8px] sm:text-[10px] md:text-xs uppercase tracking-tight">Agilidade Máxima</p>
                  <p className="text-gray-400 text-[8px] mt-1 font-bold">Tecnologia RF</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Badge */}
          <div className="w-full lg:w-2/5 flex justify-center lg:justify-end animate-fadeInRight" style={{ animationDelay: '0.5s' }}>
            <div className="relative animate-float scale-90 sm:scale-95 md:scale-100">
              {/* Radar Emitters */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] border-2 border-primary/10 rounded-full animate-pulse"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-primary/30 rounded-full animate-ping opacity-10"></div>

              {/* Central Badge Container - Responsive width using vw and caps */}
              <div className="relative w-[65vw] h-[65vw] sm:w-[280px] sm:h-[280px] md:w-[380px] md:h-[380px] lg:w-[420px] lg:h-[420px] xl:w-[480px] xl:h-[480px] bg-white rounded-full shadow-2xl border-[8px] sm:border-[12px] md:border-[20px] border-accent/10 flex flex-col items-center justify-center p-4 sm:p-8 md:p-12 z-30 transition-all hover:scale-105 duration-700 overflow-hidden">
                
                {/* Logo and Overlaid Pin Container */}
                <div className="relative w-[30%] h-[30%] mb-2 sm:mb-4 md:mb-6 flex items-center justify-center">
                  <Logo size={undefined} className="w-full h-full" />
                  
                  {/* Overlaid Map Pin - Posicionamento tático */}
                  <div className="absolute -top-1 sm:-top-2 md:-top-4 left-1/2 -translate-x-1/2 bg-primary p-1.5 sm:p-2 md:p-3 rounded-full shadow-[0_5px_15px_rgba(90,111,166,0.6)] animate-bounce-slow border-2 md:border-4 border-white z-40">
                    <MapPin className="text-white w-2 h-2 sm:w-4 sm:h-4 md:w-6 md:h-6" />
                    <div className="absolute inset-0 rounded-full bg-white animate-ping opacity-20"></div>
                  </div>
                </div>

                <div className="text-center">
                  <p className="font-black text-[7vw] sm:text-3xl md:text-5xl lg:text-6xl tracking-tighter text-accent leading-none">IMPACTO</p>
                  <p className="text-[1.8vw] sm:text-[8px] md:text-xs lg:text-sm font-bold text-primary tracking-[0.2em] sm:tracking-[0.4em] md:tracking-[0.5em] uppercase mt-1 sm:mt-2 md:mt-4">Recuperações</p>
                </div>
                
                {/* Visual Scan Bar */}
                <div className="absolute top-0 left-0 w-full h-1 md:h-2 bg-primary/10 animate-scan"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-10 h-[40px] sm:h-[60px] md:h-[100px]">
        <svg className="relative block w-[calc(100%+1.3px)] h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.41,78.27,34.17,162.15,64.28,249.63,48.51,44.25-8,84.09-23.79,122.25-41.57,18.16-8.47,35.32-17.51,59.12-25.12V120H0Z" fill="#ffffff"></path>
        </svg>
      </div>
    </section>
  );
};
