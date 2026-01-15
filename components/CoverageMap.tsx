
import React, { useMemo } from 'react';
import { Phone, Car, ShieldAlert, Zap, Info, Target, Activity } from 'lucide-react';

interface MarkerProps {
  top: string;
  left: string;
  type: 'car' | 'recovery' | 'support' | 'dot';
  delay: string;
}

const Marker: React.FC<MarkerProps> = ({ top, left, type, delay }) => {
  const getIcon = () => {
    switch (type) {
      case 'car': return <Car size={10} className="md:w-3.5 md:h-3.5" />;
      case 'recovery': return <ShieldAlert size={10} className="md:w-3.5 md:h-3.5" />;
      case 'support': return <Phone size={10} className="md:w-3.5 md:h-3.5" />;
      case 'dot': return <div className="w-1.5 h-1.5 bg-sky-400 rounded-full shadow-sm" />;
    }
  };

  const getLabel = () => {
    switch (type) {
      case 'car': return 'VTR Pronta Resposta';
      case 'recovery': return 'Ocorrência Ativa';
      case 'support': return 'Base de Apoio';
      case 'dot': return 'Ponto de Presença';
    }
  };

  const getColor = () => {
    switch (type) {
      case 'car': return 'bg-black text-white border-gray-700 hover:shadow-[0_0_25px_rgba(0,0,0,0.6)]';
      case 'recovery': return 'bg-[#D81B60] text-white border-[#AD1457] hover:shadow-[0_0_25px_rgba(216,27,96,0.6)]';
      case 'support': return 'bg-[#1E88E5] text-white border-[#1565C0] hover:shadow-[0_0_25px_rgba(30,136,229,0.6)]';
      case 'dot': return 'bg-white border-sky-200 hover:shadow-[0_0_15px_rgba(14,165,233,0.5)]';
    }
  };

  if (type === 'dot') {
    return (
      <div 
        className="absolute z-10 animate-fadeIn"
        style={{ top, left, animationDelay: delay }}
      >
        <div className="w-3 h-3 bg-white rounded-full flex items-center justify-center border border-sky-300 shadow-sm transition-all duration-500 hover:scale-[1.8] hover:z-50 hover:border-sky-500 cursor-crosshair">
           <div className="w-1.5 h-1.5 bg-sky-500 rounded-full animate-pulse"></div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="absolute group z-10 animate-fadeIn"
      style={{ top, left, animationDelay: delay }}
    >
      {/* Tooltip */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-accent/90 backdrop-blur-md text-white px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-[100] border border-white/20 shadow-2xl">
        {getLabel()}
      </div>

      <div className={`
        relative flex items-center justify-center w-5 h-5 md:w-7 md:h-7 rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.3)] cursor-pointer
        transition-all duration-500 cubic-bezier(0.34, 1.56, 0.64, 1) hover:scale-[1.5] hover:z-[60] border-2
        ${getColor()}
      `}>
        {getIcon()}
        
        {/* Pulsating Ring on Hover */}
        <div className="absolute inset-0 rounded-full border-2 border-white opacity-0 group-hover:animate-ping group-hover:opacity-100 transition-opacity"></div>
        
        {type === 'recovery' && (
          <div className="absolute inset-0 rounded-full animate-ping opacity-30 bg-[#D81B60] pointer-events-none"></div>
        )}
      </div>
    </div>
  );
};

export const CoverageMap: React.FC = () => {
  const markers: MarkerProps[] = useMemo(() => {
    const list: MarkerProps[] = [];
    
    const addPoints = (count: number, centerTop: number, centerLeft: number, radius: number, type: MarkerProps['type']) => {
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const r = Math.sqrt(Math.random()) * radius;
        const t = centerTop + Math.sin(angle) * r;
        const l = centerLeft + Math.cos(angle) * r;
        
        list.push({
          top: `${t}%`,
          left: `${l}%`,
          type,
          delay: `${(Math.random() * 3).toFixed(1)}s`
        });
      }
    };

    // Densidade Operacional Elevada (Visual Tático)
    // Sudeste (Destaque SP/RJ/MG)
    addPoints(90, 70, 68, 12, 'car'); 
    addPoints(55, 68, 69, 8, 'recovery');
    addPoints(35, 72, 67, 6, 'support'); 
    
    // Sul
    addPoints(50, 88, 55, 9, 'car'); 
    addPoints(30, 86, 56, 7, 'recovery');
    addPoints(15, 87, 56, 5, 'support'); 
    
    // Nordeste (Litoral e Capitais)
    addPoints(65, 30, 78, 14, 'car'); 
    addPoints(40, 35, 80, 9, 'recovery');
    addPoints(12, 32, 79, 6, 'support'); 
    
    // Centro-Oeste
    addPoints(40, 50, 45, 13, 'car'); 
    addPoints(10, 51, 46, 5, 'support'); 
    addPoints(15, 52, 44, 8, 'recovery');

    // Norte (Pontos Estratégicos Manaus/Belém)
    addPoints(25, 20, 35, 10, 'car');
    addPoints(5, 18, 36, 4, 'support');
    addPoints(30, 25, 40, 20, 'dot'); 

    return list;
  }, []);

  return (
    <section id="abrangencia" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-5 py-2 rounded-full mb-6 font-bold text-sm tracking-widest uppercase border border-primary/20">
              <Zap size={16} fill="currentColor" className="animate-pulse" />
              Sincronização Tática Ativa
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-accent uppercase italic leading-none tracking-tighter">
              Area de Atuação <span className="text-primary">Premium</span> <br />
              <span className="italic">Rede de Resposta</span>
            </h2>
          </div>
          
          <div className="flex flex-wrap gap-3 mb-2">
            {[
              { color: 'bg-black', label: 'Unidades Prontas', icon: <Car size={10} /> },
              { color: 'bg-[#D81B60]', label: 'Recuperações', icon: <ShieldAlert size={10} /> },
              { color: 'bg-[#1E88E5]', label: 'Centrais de Apoio', icon: <Phone size={10} /> },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3 bg-white px-5 py-3 rounded-2xl border border-gray-100 shadow-sm transition-all hover:shadow-lg hover:border-primary/30 group">
                <div className={`w-6 h-6 ${item.color} text-white rounded-full flex items-center justify-center transition-transform group-hover:scale-110`}>
                  {item.icon}
                </div>
                <span className="text-[10px] font-black uppercase text-gray-500 tracking-wider">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tactical Map Container */}
        <div className="relative w-full aspect-[4/5] md:aspect-[16/9] bg-[#f0f9ff] rounded-[3rem] shadow-[0_80px_160px_rgba(0,0,0,0.12)] border-[15px] md:border-[25px] border-white overflow-hidden group">
          
          {/* Tactical Grid Overlay */}
          <div className="absolute inset-0 opacity-[0.08] pointer-events-none z-10" style={{ backgroundImage: 'linear-gradient(#5a6fa6 1px, transparent 1px), linear-gradient(90deg, #5a6fa6 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>

          {/* Scanning Radar Line */}
          <div className="absolute inset-0 z-20 pointer-events-none">
            <div className="w-full h-[200px] bg-gradient-to-b from-transparent via-primary/15 to-transparent absolute top-0 left-0 animate-[radarLine_8s_linear_infinite]"></div>
          </div>

          {/* High Precision Brazil Map */}
          <div className="absolute inset-0 flex items-center justify-center p-12 opacity-30 group-hover:opacity-40 transition-opacity duration-700">
            <svg viewBox="0 0 550 550" className="w-[95%] h-[95%] text-white fill-white drop-shadow-2xl">
              <path d="M472,235c-2-3-4-7-6-10c-3-4-5-9-8-13c-3-4-5-9-8-13c-2-3-4-7-6-10l-7-11c-2-3-4-7-6-10c-3-4-5-9-8-13c-1-2-3-5-4-7c-3-5-6-10-9-14 c-3-6-7-11-10-16c-3-5-6-10-9-14c-4-7-8-13-12-20c-3-5-6-10-9-14c-3-6-7-11-10-16c-3-5-6-10-9-14c-4-7-8-14-13-20 c-2-3-4-7-6-10c-3-5-6-10-9-15c-2-4-5-7-7-11c-3-5-6-9-9-14c-2-3-4-7-6-10l-5-9c-1-1-1-2-2-3L250,0c-1,1-1,2-2,3c-2,3-4,6-5,9 c-2,3-4,7-6,10c-3,5-6,9-9,14c-2,4-5,7-7,11c-3,5-6,10-9,15c-2,3-4,7-6,10c-4,7-8,14-13,20c-3,5-6,10-9,14c-3,6-7,11-10,16 c-3,5-6,10-9,14c-4,7-8,13-12,20c-3,5-6,10-9,14c-3,6-7,11-10,16c-3,5-6,10-9,14c-1,2-3,5-4,7c-3,4-5,9-8,13c-2,3-4,7-6,10l-7,11 c-2,3-4,7-6,10c-3,4-5,9-8,13c-3,4-5,9-8,13c-2,3-4,7-6,10c-1,2-3,5-4,7c-2,4-5,7-7,11l-3,4c-2,3-4,6-6,9c-2,4-5,7-7,11l-5,9 c-1,1-1,2-2,3c-2,4-5,8-7,12c-1,1-1,2-2,3c-2,3-4,7-6,10c-3,5-6,10-9,15l-1,2c-3,4-6,9-9,14c-2,3-4,7-6,11c-3,5-6,10-9,15 c-2,3-4,7-6,11c-3,5-6,10-9,14c-3,5-6,9-9,14c-3,5-6,10-9,15c-1,2-3,4-4,7l-4,7c-1,1-1,2-2,3c-2,4-5,7-7,11c-1,1-1,2-2,3 c-3,5-6,9-9,14c-2,3-4,7-6,11c-3,5-6,10-9,15l-1,2c-3,4-6,9-9,14c-2,3-4,7-6,11c-3,5-6,10-9,15c-2,3-4,7-6,11c-3,5-6,10-9,14 c-3,5-6,9-9,14c-3,5-6,10-9,15c-1,2-3,4-4,7l-4,7c-1,1-1,2-2,3c-2,4-5,7-7,11c-1,1-1,2-2,3c-3,5-6,9-9,14c-2,3-4,7-6,11 c-3,5-6,10-9,15l-1,2c-3,4-6,9-9,14c-2,3-4,7-6,11c-3,5-6,10-9,15c-2,3-4,7-6,11c-3,5-6,10-9,14c-3,5-6,9-9,14c-3,5-6,10-9,15 c-1,2-3,4-4,7l-4,7c-1,1-1,2-2,3c-2,4-5,7-7,11c-1,1-1,2-2,3c-3,5-6,9-9,14c-2,3-4,7-6,11c-3,5-6,10-9,15l-1,2c-3,4-6,9-9,14 c-2,3-4,7-6,11c-3,5-6,10-9,15c-2,3-4,7-6,11c-3,5-6,10-9,14c-3,5-6,9-9,14c-3,5-6,10-9,15c-1,2-3,4-4,7l-4,7c-1,1-1,2-2,3 c-2,4-5,7-7,11c-1,1-1,2-2,3c-3,5-6,9-9,14c-2,3-4,7-6,11c-3,5-6,10-9,15l-1,2c-3,4-6,9-9,14c-2,3-4,7-6,11c-3,5-6,10-9,15 c-2,3-4,7-6,11c-3,5-6,10-9,14c-3,5-6,9-9,14c-3,5-6,10-9,15c-1,2-3,4-4,7l-4,7c-1,1-1,2-2,3 c-2,4-5,7-7,11c-1,1-1,2-2,3c-3,5-6,9-9,14c-2,3-4,7-6,11c-3,5-6,10-9,15l-1,2c-3,4-6,9-9,14c-2,3-4,7-6,11c-3,5-6,10-9,15 c-2,3-4,7-6,11c-3,5-6,10-9,14c-3,5-6,9-9,14c-3,5-6,10-9,15c-1,2-3,4-4,7l-4,7l2,3c1,2,3,5,4,7c2,3,4,7,6,11c3,4,5,9,8,13 c3,4,5,9,8,13c2,3,4,7,6,11l7,11c2,3,4,7,6,11c3,4,5,9,8,13c1,2,3,5,4,7c3,5,6,10,9,14c3,6,7,11,10,16c3,5,6,10,9,14 c4,7,8,13,12,20c3,5,6,10,9,14c3,6,7,11,10,16c3,5,6,10,9,14 c4,7,8,14,13,20c2,3,4,7,6,10c3,5,6,10,9,15c2,4,5,7,7,11 c3,5,6,9,9,14c2,3,4,7,6,10l5,9c1,1,1,2,2,3l4,7c1-1,1-2,2-3c2-3,4-6,5-9c2-3,4-7,6-10c3-5,6-9,9-14c2-4,5-7,7-11 c3-5,6-10,9-15c2-3,4-7,6-10c4-7,8-14,13-20c3-5,6-10,9-14c3-6,7-11,10-16c3-5,6-10,9-14c4-7,8-13,12-20c3-5,6-10,9-14 c3-6,7-11,10-16c3-5,6-10,9-14c1-2,3-5,4-7c3-4,5-9,8-13c2-3,4-7,6-10l7-11c2-3,4-7,6-10c3-4,5-9,8-13c3-4,5-9,8-13c2-3,4-7,6-10 c1-2,3-5,4-7l2-3l-4-7c-1-2-3-4-4-7c-3-5-6-10-9-14c-3-5-6-9-9-14c-3-5-6-10-9-14c-2-3-4-7-6-11c-3-5-6-10-9-15 c-2-3-4-7-6-11c-3-4-6-9-9-14l-1-2c-3-5-6-10-9-15c-2-3-4-7-6-11c-1-1-1-2-2-3c-2-4-5-8-7-12c-1-1-1-2-2-3l-5-9 c-2-4-5-7-7-11c-2-3-4-6-6-9l-3-4c-2-4-5-7-7-11c-1-2-3-4-4-7c-2-4-5-7-6-11c-3-4-5-9-8-13c-3-4-5-9-8-13c-2-3-4-7-6-11 l-7-11c-2-3-4-7-6-11c-3-4-5-9-8-13c-1-2-3-5-4-7c-3-5-6-10-9-14c-3-6-7-11-10-16c-3-5-6-10-9-14c-4-7-8-13-12-20 c-3-5-6-10-9-14c-3-6-7-11-10-16c-3-5-6-10-9-14c-4-7-8-14-13-20c-2-3-4-7-6-10c-3-5-6-10-9-15c-2-4-5-7-7-11 c-3-5-6-9-9-14c-2-3-4-7-6-10l-5-9c-1-1-1-2-2-3l4-7c1,1,1,2,2,3l5,9c2,3,4,7,6,10c3,5,6,9,9,14c2,4,5,7,7,11 c3,5,6,10,9,15c2,3,4,7,6,10c4,7,8,14,13,20c3,5,6,10,9,14c3,6,7,11,10,16c3,5,6,10,9,14c4,7,8,13,12,20 c3,5,6,10,9,14c3,6,7,11,10,16c3,5,6,10,9,14c1,2,3,5,4,7c3,4,5,9,8,13l7,11c2,3,4,7,6,10c3,4,5,9,8,13c3,4,5,9,8,13 c2,3,4,7,6,10c1,2,3,5,4,7l2,3l4,7c1,2,3,4,4,7c3,5,6,10,9,14c3,5,6,9,9,14c3,5,6,10,9,14c2,3,4,7,6,11 c3,5,6,10,9,15c2,3,4,7,6,11c3,4,6,9,9,14l1,2c3,5,6,10,9,15c2,3,4,7,6,11c1,1,1,2,2,3c2,4,5,8,7,12c1,1,1,2,2,3 l5,9c2,4,5,7,7,11c2,3,4,6,6,9l3,4c2,4,5,7,7,11c1,2,3,4,4,7c2,4,5,7,6,11c3,4,5,9,8,13c3,4,5,9,8,13c2,3,4,7,6,11 l7,11c2,3,4,7,6,11c3,4,5,9,8,13c1,2,3,5,4,7c3,5,6,10,9,14c3,6,7,11,10,16c3,5,6,10,9,14c4,7,8,13,12,20 c3,5,6,10,9,14c3,6,7,11,10,16c3,5,6,10,9,14c4,7,8,14,13,20c2,3,4,7,6,10c3,5,6,10,9,15c2,4,5,7,7,11 c3,5,6,9,9,14c2,3,4,7,6,10l5,9c1,1,1,2,2,3L472,235z"/>
            </svg>
          </div>

          {/* Markers Layer */}
          <div className="absolute inset-0 overflow-hidden z-30">
            {markers.map((m, i) => (
              <Marker key={i} {...m} />
            ))}
          </div>

          {/* Tactical Overlay UI */}
          <div className="absolute top-8 left-8 z-40 space-y-3">
             <div className="glass px-6 py-4 rounded-[2rem] border border-white/40 shadow-xl animate-fadeInLeft">
                <div className="flex items-center gap-3">
                   <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.6)]"></div>
                   <p className="text-accent font-black text-xs md:text-sm uppercase italic tracking-tighter">Sinal de Rede Híbrido Estável</p>
                </div>
                <p className="text-[9px] font-bold text-gray-500 uppercase mt-1 tracking-[0.2em]">Criptografia Militar AES-256</p>
             </div>
             
             <div className="glass px-6 py-3 rounded-[2rem] border border-white/20 shadow-xl animate-fadeInLeft" style={{ animationDelay: '0.3s' }}>
                <div className="flex items-center gap-4">
                   <Activity size={16} className="text-primary animate-pulse" />
                   <div className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-accent">
                      <span className="block opacity-50">Fluxo de Dados</span>
                      <span className="text-primary">124.8 GB/s</span>
                   </div>
                </div>
             </div>
          </div>

          <div className="absolute bottom-8 right-8 z-40 hidden lg:block">
            <div className="bg-accent/90 backdrop-blur-md p-8 rounded-[3rem] border border-white/10 shadow-2xl space-y-4 animate-fadeIn">
               <h5 className="text-primary font-black text-xs uppercase tracking-[0.3em] mb-4 border-b border-white/10 pb-2">Status da Rede</h5>
               {[
                 { icon: <Car size={14} />, label: 'Unidades Ativas', val: '284', color: 'bg-black' },
                 { icon: <ShieldAlert size={14} />, label: 'Ocorrências', val: '12', color: 'bg-[#D81B60]' },
                 { icon: <Phone size={14} />, label: 'Centrais Offline', val: '0', color: 'bg-[#1E88E5]' },
                 { icon: <Target size={14} />, label: 'Precisão GPS', val: '99.8%', color: 'bg-green-500' },
               ].map((item) => (
                 <div key={item.label} className="flex items-center justify-between gap-12 group cursor-default">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 ${item.color} rounded-xl flex items-center justify-center text-white shadow-lg transition-transform group-hover:scale-110`}>
                        {item.icon}
                      </div>
                      <span className="text-[10px] font-black uppercase text-gray-300 tracking-wider">{item.label}</span>
                    </div>
                    <span className="text-white font-black text-xs">{item.val}</span>
                 </div>
               ))}
            </div>
          </div>
        </div>

        {/* Tactical Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
           {[
             { title: 'Resposta Crítica', desc: 'Protocolo de acionamento imediato com redundância de comunicação em áreas de sombra.', icon: <Zap className="text-primary" fill="currentColor" />, color: 'primary' },
             { title: 'Contenção Tática', desc: 'Agentes treinados para preservação imediata da integridade da carga e do veículo.', icon: <Target className="text-[#D81B60]" />, color: '[#D81B60]' },
             { title: 'Visão 360°', desc: 'Monitoramento contínuo via rede híbrida (Satélite + RF) em 100% do trajeto.', icon: <Activity className="text-sky-500" />, color: 'sky-500' },
           ].map((card, idx) => (
             <div key={idx} className="bg-gray-50 p-10 rounded-[3rem] border border-gray-100 hover:bg-white hover:shadow-2xl transition-all duration-500 group relative overflow-hidden">
                <div className={`absolute top-0 right-0 w-32 h-32 bg-${card.color}/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150`}></div>
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-md mb-8 group-hover:scale-110 transition-transform relative z-10">
                   {card.icon}
                </div>
                <h4 className="text-2xl font-black text-accent uppercase mb-4 italic tracking-tight relative z-10">{card.title}</h4>
                <p className="text-gray-500 font-medium leading-relaxed relative z-10">{card.desc}</p>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};
