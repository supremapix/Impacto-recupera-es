
import React from 'react';
import { Logo } from './Logo';
import { Radio, Wifi, Signal, Zap, RadioReceiver, MapPin } from 'lucide-react';

interface SignalPointProps {
  icon: React.ReactNode;
  label: string;
  className?: string;
  delay?: string;
}

const SignalPoint: React.FC<SignalPointProps> = ({ icon, label, className, delay }) => (
  <div 
    className={`absolute z-20 group cursor-pointer transition-all duration-500 hover:scale-110 ${className}`}
    style={{ animationDelay: delay }}
  >
    <div className="relative flex items-center justify-center">
      {/* Ripple effect on hover */}
      <div className="absolute inset-0 rounded-full bg-primary/20 scale-100 group-hover:animate-ping"></div>
      <div className="absolute inset-0 rounded-full border border-primary/30 group-hover:scale-150 transition-transform duration-700"></div>
      
      {/* Icon Container - Scaled for Mobile */}
      <div className="relative bg-white p-2 sm:p-3 md:p-6 rounded-lg md:rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center gap-2 group-hover:border-primary group-hover:shadow-primary/20 transition-all">
        <div className="text-primary animate-pulse group-hover:animate-none">
          <div className="w-5 h-5 sm:w-8 sm:h-8 md:w-12 md:h-12 flex items-center justify-center">
            {icon}
          </div>
        </div>
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">
           <span className="bg-accent text-white text-[7px] md:text-[10px] font-black px-2 py-1 rounded-full uppercase tracking-widest shadow-lg">
             {label}
           </span>
        </div>
      </div>
    </div>
  </div>
);

export const FeaturedVisual: React.FC = () => {
  return (
    <section className="relative py-12 md:py-32 bg-white overflow-hidden border-t border-gray-50">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#5a6fa6 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className="container mx-auto px-4">
        {/* Responsive Heights - Reduced on mobile to prevent overflow */}
        <div className="relative max-w-6xl mx-auto min-h-[400px] sm:min-h-[500px] md:min-h-[650px] lg:h-[800px] flex items-center justify-center">
          
          {/* SINAL POINTS - Repositioned strategically for mobile */}
          <SignalPoint 
            className="left-[5%] top-[5%] sm:left-[5%] sm:top-[20%] animate-fadeInLeft" 
            icon={<Radio />} 
            label="Unidade Movel" 
            delay="0.2s"
          />
          
          <SignalPoint 
            className="right-[5%] top-[5%] sm:left-[40%] sm:top-[5%] animate-fadeIn" 
            icon={<Signal />} 
            label="Base Satélite" 
            delay="0.8s"
          />

          <SignalPoint 
            className="left-[5%] bottom-[5%] sm:left-[15%] sm:bottom-[10%] animate-fadeInUp" 
            icon={<Wifi />} 
            label="Central RF" 
            delay="0.5s"
          />

          <SignalPoint 
            className="right-[5%] bottom-[5%] sm:left-[0%] sm:bottom-[40%] animate-fadeInLeft" 
            icon={<RadioReceiver />} 
            label="Rastreador CMD" 
            delay="1.1s"
          />

          {/* CENTRAL BADGE - Dynamic Sizing */}
          <div className="relative z-30 flex flex-col items-center w-full max-w-full">
            
            <div className="relative flex items-center justify-center w-full">
              
              {/* SINAL ATIVO RF Badge - Adjusted for mobile position */}
              <div className="absolute -top-16 sm:-top-20 md:-top-40 bg-white/95 backdrop-blur-md px-4 py-2 md:px-8 md:py-4 rounded-full border border-gray-200 shadow-xl animate-bounce-slow z-50 flex items-center gap-2 md:gap-4">
                <span className="w-2 h-2 md:w-4 md:h-4 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,1)]"></span>
                <p className="text-[10px] sm:text-xs md:text-lg font-black text-primary uppercase tracking-[0.1em] md:tracking-[0.3em] whitespace-nowrap">Sinal Ativo RF</p>
              </div>

              {/* Radar Rings - Hidden on very small screens to improve performance */}
              <div className="hidden sm:block absolute w-[100%] h-[100%] sm:w-[120%] sm:h-[120%] md:w-[150%] md:h-[150%] border-[2px] md:border-[8px] border-primary/5 rounded-full animate-pulse-slow"></div>
              
              {/* MAIN CIRCLE - Responsive proportions */}
              <div className="relative group w-[65vw] h-[65vw] sm:w-[320px] sm:h-[320px] md:w-[480px] md:h-[480px] lg:w-[580px] lg:h-[580px] max-w-full">
                <div className="absolute inset-0 bg-primary/10 rounded-full blur-[30px] md:blur-[100px] opacity-40"></div>
                
                <div className="relative w-full h-full bg-white rounded-full shadow-2xl border-[8px] sm:border-[18px] md:border-[28px] lg:border-[35px] border-accent flex flex-col items-center justify-center p-6 sm:p-10 md:p-14 lg:p-20 transition-all duration-1000 hover:scale-105 overflow-hidden">
                  
                  {/* Internal Logo */}
                  <div className="relative w-[35%] h-[35%] mb-4 sm:mb-5 md:mb-8 flex items-center justify-center">
                    <Logo size={undefined} className="w-full h-full" />
                    
                    {/* Tactical Pin */}
                    <div className="absolute -top-2 md:-top-3 lg:-top-5 left-1/2 -translate-x-1/2 bg-primary p-1.5 md:p-2.5 rounded-full shadow-lg animate-pulse border-2 md:border-4 border-white z-40">
                      <MapPin className="text-white w-3 h-3 md:w-5 md:h-5 lg:w-7 lg:h-7" />
                    </div>
                  </div>

                  <div className="text-center w-full px-2">
                    <h4 className="font-black text-[10vw] sm:text-4xl md:text-6xl lg:text-8xl tracking-tighter text-accent leading-tight uppercase">Impacto</h4>
                    <p className="text-[2.5vw] sm:text-[10px] md:text-sm lg:text-lg font-bold text-primary tracking-[0.3em] md:tracking-[0.6em] uppercase mt-1 sm:mt-2 md:mt-4">Recuperações</p>
                  </div>
                  
                  {/* Scan Effect */}
                  <div className="absolute top-0 left-0 w-full h-1 md:h-1.5 bg-primary/20 shadow-[0_0_10px_rgba(90,111,166,0.3)] animate-scan"></div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Tactical Footer - Simplified for mobile */}
        <div className="mt-12 sm:mt-16 text-center relative z-50">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-8 bg-accent px-8 py-6 rounded-2xl sm:rounded-[2.5rem] shadow-xl w-full sm:w-auto mx-auto">
            <div className="flex items-center gap-3">
              <Zap className="text-primary animate-pulse w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" />
              <span className="text-white font-black uppercase italic text-sm sm:text-xl tracking-tight">Rede de Operações Nacional</span>
            </div>
            <div className="hidden sm:block w-px h-10 bg-white/20"></div>
            <p className="text-gray-400 font-bold uppercase tracking-[0.1em] text-[10px] sm:text-xs">
              Tecnologia de Resposta Crítica 24h
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
