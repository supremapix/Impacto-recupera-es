
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
    className={`absolute z-20 group cursor-pointer transition-all duration-500 hover:scale-110 hidden sm:block ${className}`}
    style={{ animationDelay: delay }}
  >
    <div className="relative flex items-center justify-center">
      <div className="absolute inset-0 rounded-full bg-primary/20 scale-100 group-hover:animate-ping"></div>
      <div className="absolute inset-0 rounded-full border border-primary/30 group-hover:scale-150 transition-transform duration-700"></div>
      
      <div className="relative bg-white p-4 md:p-6 rounded-2xl shadow-2xl border border-gray-100 flex flex-col items-center gap-2 group-hover:border-primary group-hover:shadow-primary/20 transition-all">
        <div className="text-primary animate-pulse group-hover:animate-none">
          <div className="w-8 h-8 md:w-12 md:h-12 flex items-center justify-center">
            {icon}
          </div>
        </div>
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">
           <span className="bg-accent text-white text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-widest shadow-2xl">
             {label}
           </span>
        </div>
      </div>
    </div>
  </div>
);

export const FeaturedVisual: React.FC = () => {
  return (
    <section className="relative py-24 md:py-40 bg-white overflow-hidden border-t border-gray-50">
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#5a6fa6 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>

      <div className="container mx-auto px-4">
        <div className="relative max-w-6xl mx-auto min-h-[450px] md:h-[800px] flex items-center justify-center">
          
          <SignalPoint className="left-[5%] top-[15%] animate-fadeInLeft" icon={<Radio />} label="Unidade Móvel" delay="0.2s" />
          <SignalPoint className="right-[5%] top-[10%] animate-fadeInRight" icon={<Signal />} label="Base Satélite" delay="0.8s" />
          <SignalPoint className="left-[10%] bottom-[10%] animate-fadeInUp" icon={<Wifi />} label="Central RF" delay="0.5s" />
          <SignalPoint className="right-[15%] bottom-[15%] animate-fadeIn" icon={<RadioReceiver />} label="Rastreador CMD" delay="1.1s" />

          <div className="relative z-30 flex flex-col items-center w-full">
            <div className="relative flex items-center justify-center w-full">
              
              <div className="absolute -top-32 bg-white/95 backdrop-blur-xl px-10 py-5 rounded-full border border-gray-200 shadow-[0_20px_60px_rgba(0,0,0,0.1)] animate-bounce-slow z-50 flex items-center gap-4">
                <span className="w-4 h-4 bg-green-500 rounded-full animate-pulse shadow-[0_0_20px_rgba(34,197,94,1)]"></span>
                <p className="text-sm md:text-xl font-black text-primary uppercase tracking-[0.4em] whitespace-nowrap italic">SINAL ATIVO RF / CMD</p>
              </div>

              <div className="absolute w-[140%] h-[140%] border-[20px] border-primary/5 rounded-full animate-pulse-slow"></div>
              
              <div className="relative group w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] lg:w-[700px] lg:h-[700px]">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-[120px] opacity-40"></div>
                
                <div className="relative w-full h-full bg-white rounded-full shadow-[0_60px_120px_rgba(0,0,0,0.15)] border-[20px] md:border-[40px] border-accent flex flex-col items-center justify-center p-10 md:p-20 transition-all duration-1000 hover:scale-105 overflow-hidden">
                  
                  <div className="relative w-[35%] h-[35%] mb-8 flex items-center justify-center">
                    <Logo size={undefined} className="w-full h-full" />
                    <div className="absolute -top-6 md:-top-10 left-1/2 -translate-x-1/2 bg-primary p-3 md:p-5 rounded-full shadow-2xl animate-pulse border-4 border-white z-40">
                      <MapPin className="text-white w-5 h-5 md:w-10 md:h-10" />
                    </div>
                  </div>

                  <div className="text-center">
                    <h4 className="font-black text-6xl md:text-9xl tracking-tighter text-accent leading-none uppercase italic">IMPACTO</h4>
                    <p className="text-xs md:text-xl font-bold text-primary tracking-[0.6em] uppercase mt-4 md:mt-8">Recuperações</p>
                  </div>
                  
                  <div className="absolute top-0 left-0 w-full h-2 bg-primary/30 shadow-[0_0_30px_rgba(90,111,166,0.4)] animate-scan"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center relative z-50">
          <div className="inline-flex flex-col md:flex-row items-center gap-8 bg-accent px-12 py-8 rounded-[3rem] shadow-2xl border border-white/5">
            <div className="flex items-center gap-4">
              <Zap className="text-primary animate-pulse w-8 h-8" fill="currentColor" />
              <span className="text-white font-black uppercase italic text-xl md:text-2xl tracking-tighter">Rede de Resposta Crítica</span>
            </div>
            <div className="hidden md:block w-px h-12 bg-white/10"></div>
            <p className="text-gray-400 font-bold uppercase tracking-[0.2em] text-xs md:text-sm">
              Operações em Tempo Real com Tecnologia CMD
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
