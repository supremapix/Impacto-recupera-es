
import React from 'react';
import { Truck, ShieldAlert, Target, Zap, Clock, Map } from 'lucide-react';

export const CargoEscortSection: React.FC = () => {
  return (
    <section className="py-24 bg-accent text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
        <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1920" className="w-full h-full object-cover" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 bg-primary/20 border border-white/10 px-5 py-2 rounded-full mb-8">
              <Truck size={20} className="text-primary-light" />
              <span className="text-xs font-black uppercase tracking-widest">Divisão de Cargas Pesadas</span>
            </div>
            <h2 className="text-5xl md:text-8xl font-black uppercase italic leading-none tracking-tighter mb-8">
              Recuperação de <br /> <span className="text-primary">Cargas Valiosas</span>
            </h2>
            <p className="text-xl text-gray-400 font-medium leading-relaxed mb-10">
              Operações táticas especializadas em caminhões de grande porte e ativos logísticos sensíveis. Utilizamos escolta armada velada e tecnologia de ponta para garantir a integridade do seu frete.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: <ShieldAlert />, label: 'Escolta Armada', desc: 'Agentes treinados em contenção' },
                { icon: <Target />, label: 'Rastreio CMD', desc: 'Indetectável por Jammers' },
                { icon: <Zap />, label: 'Pronta Resposta', desc: 'Intervenção em rodovias' },
                { icon: <Map />, label: 'Monitoramento 24h', desc: 'Visibilidade total da frota' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-6 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="text-primary">{item.icon}</div>
                  <div>
                    <h4 className="font-black text-sm uppercase tracking-tight">{item.label}</h4>
                    <p className="text-xs text-gray-500 font-bold uppercase mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 relative">
             <div className="relative rounded-[4rem] overflow-hidden shadow-[0_60px_120px_rgba(0,0,0,0.4)] border-[15px] border-white/5">
                <img 
                  src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=1200" 
                  alt="Escolta Pesada" 
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-accent via-transparent to-transparent"></div>
                <div className="absolute bottom-10 left-10 right-10">
                   <div className="flex items-center gap-4 bg-primary px-8 py-5 rounded-2xl shadow-2xl">
                      <Clock size={28} className="animate-pulse" />
                      <div>
                         <p className="text-[10px] font-black uppercase opacity-60">Status de Prontidão</p>
                         <p className="text-xl font-black uppercase tracking-tighter">ACIONAMENTO EM 00:45s</p>
                      </div>
                   </div>
                </div>
             </div>
             
             {/* Floating UI Elements */}
             <div className="absolute -top-10 -right-10 glass p-8 rounded-[2.5rem] border border-white/20 hidden md:block animate-bounce-slow">
                <div className="flex flex-col items-center">
                   <p className="text-primary font-black text-4xl leading-none">630+</p>
                   <p className="text-[8px] font-black text-accent uppercase tracking-widest mt-2">Agentes no Brasil</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
