
import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, Home, ArrowLeft } from 'lucide-react';
import { Logo } from './Logo';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-accent flex flex-col items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Background Decorative Effects */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-gradient-to-tr from-primary/20 via-transparent to-primary/10 animate-spin-slow"></div>
      </div>

      <div className="relative z-10 text-center max-w-2xl">
        <div className="mb-12 relative inline-block">
          <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-150 animate-pulse"></div>
          <Logo size={120} light className="mx-auto relative z-10" />
        </div>

        <h1 className="text-9xl font-black text-white/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none tracking-tighter">404</h1>
        
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-[3rem] shadow-2xl relative z-10">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-red-500/10 rounded-2xl flex items-center justify-center border border-red-500/20">
              <ShieldAlert className="text-red-500" size={32} />
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase italic tracking-tighter mb-4">
            Rota <span className="text-primary">Não Encontrada</span>
          </h2>
          
          <p className="text-gray-400 text-lg md:text-xl font-medium mb-10 leading-relaxed">
            Desculpe, a página que você está procurando não existe ou foi movida. Nossa central de monitoramento não detectou sinal nesta área.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/" 
              className="w-full sm:w-auto bg-primary text-white px-8 py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:bg-white hover:text-primary transition-all shadow-xl hover:-translate-y-1 active:scale-95"
            >
              <Home size={22} />
              VOLTAR AO INÍCIO
            </Link>
            <button 
              onClick={() => window.history.back()}
              className="w-full sm:w-auto bg-white/5 border border-white/10 text-white px-8 py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-white/10 transition-all active:scale-95"
            >
              <ArrowLeft size={22} />
              PÁGINA ANTERIOR
            </button>
          </div>
        </div>

        <div className="mt-12 text-gray-500 text-sm font-bold uppercase tracking-[0.3em]">
          IMPACTO RECUPERAÇÕES - PRONTA RESPOSTA 24H
        </div>
      </div>
    </div>
  );
};
