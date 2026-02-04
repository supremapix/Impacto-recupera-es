
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
    <section className="relative min-h-[90svh] sm:min-h-screen flex items-center bg-accent overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=1920" 
          alt="Logística de Segurança" 
          className="w-full h-full object-cover opacity-30 sm:opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-accent/95 via-accent/70 to-accent"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 z-20 relative pt-24 sm:pt-32 pb-16 lg:py-0">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
          
          <div className="w-full lg:w-[65%] text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-full text-white mb-6 sm:mb-10 animate-fadeInUp shadow-xl">
              <ShieldCheck size={14} className="text-primary animate-pulse" />
              <span className="text-[8px] sm:text-[10px] font-black tracking-[0.2em] uppercase">MONITORAMENTO NACIONAL ATIVO 24H</span>
            </div>
            
            <div className="mb-4">
              <h2 className="text-primary font-black text-xs sm:text-xl uppercase tracking-[0.4em] animate-text-reveal italic">
                A Força que Protege o Brasil
              </h2>
            </div>

            <div className="mb-8">
              <h1 className="text-[2.2rem] xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] tracking-tighter">
                Recuperação <br />
                <span className="text-primary italic inline-block min-h-[1.2em]">
                  {displayText}
                  <span className="inline-block w-1.5 h-[0.9em] bg-white ml-2 animate-pulse align-middle"></span>
                </span>
              </h1>
            </div>
            
            <p className="text-sm sm:text-lg md:text-xl text-gray-300 mb-10 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0 animate-fadeInUp">
              Especialistas em recuperação de ativos de alto valor com tecnologia CMD e pronta resposta armada. Onde o sinal falha, nossa equipe entra em ação.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 animate-fadeInUp">
              <a 
                href={whatsappHeroUrl}
                target="_blank"
                className="group bg-primary text-white px-10 py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:bg-white hover:text-primary transition-all duration-300 shadow-2xl active:scale-95"
              >
                ACIONAR CENTRAL
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="/servicos"
                className="bg-white/5 backdrop-blur-md text-white border border-white/10 px-10 py-5 rounded-2xl font-black text-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center active:scale-95"
              >
                NOSSAS UNIDADES
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-4 justify-center lg:justify-start animate-fadeInUp">
              <div className="flex items-center gap-3 bg-white/5 px-4 py-3 rounded-2xl border border-white/5">
                <MapPin size={18} className="text-primary" />
                <div className="text-left">
                  <p className="text-white font-black text-[10px] uppercase tracking-widest">Brasil Inteiro</p>
                  <p className="text-gray-500 text-[8px] font-bold uppercase">630+ Agentes</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/5 px-4 py-3 rounded-2xl border border-white/5">
                <Zap size={18} className="text-primary" fill="currentColor" />
                <div className="text-left">
                  <p className="text-white font-black text-[10px] uppercase tracking-widest">Resposta CMD</p>
                  <p className="text-gray-500 text-[8px] font-bold uppercase">Tempo Real</p>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex w-full lg:w-[35%] justify-end animate-fadeIn">
            <div className="relative group scale-110">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] border-2 border-primary/10 rounded-full animate-pulse opacity-20"></div>
              
              <div className="relative w-[400px] h-[400px] bg-white rounded-full shadow-[0_40px_80px_rgba(0,0,0,0.4)] border-[20px] border-accent/5 flex flex-col items-center justify-center p-12 overflow-hidden">
                <div className="relative w-[30%] mb-4">
                  <Logo size={undefined} />
                </div>
                <div className="text-center">
                  <p className="font-black text-6xl tracking-tighter text-accent leading-none">IMPACTO</p>
                  <p className="text-xs font-bold text-primary tracking-[0.4em] uppercase mt-4">Recuperações</p>
                </div>
                <div className="absolute top-0 left-0 w-full h-1 bg-primary/20 animate-scan"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-10 h-10 sm:h-20">
        <svg className="relative block w-[calc(100%+1.3px)] h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.41,78.27,34.17,162.15,64.28,249.63,48.51,44.25-8,84.09-23.79,122.25-41.57,18.16-8.47,35.32-17.51,59.12-25.12V120H0Z" fill="#ffffff"></path>
        </svg>
      </div>
    </section>
  );
};
