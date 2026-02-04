
import React, { useMemo } from 'react';
import { Phone, Car, ShieldAlert, Zap, Target, Activity, ShieldCheck } from 'lucide-react';

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
      case 'dot': return <div className="w-1 h-1 bg-sky-400 rounded-full" />;
    }
  };

  const getLabel = () => {
    switch (type) {
      case 'car': return 'VTR Impacto - Disponível';
      case 'recovery': return 'OPERACIONAL: Recuperação em Curso';
      case 'support': return 'Base Tática de Apoio';
      case 'dot': return 'Ponto de Monitoramento';
    }
  };

  const getColorClass = () => {
    switch (type) {
      case 'car': return 'bg-accent text-white border-primary/40 group-hover:bg-primary group-hover:border-white group-hover:shadow-[0_0_30px_rgba(90,111,166,0.8)]';
      case 'recovery': return 'bg-[#D81B60] text-white border-white/40 group-hover:shadow-[0_0_40px_rgba(216,27,96,1)]';
      case 'support': return 'bg-primary text-white border-white/40 group-hover:bg-accent group-hover:shadow-[0_0_30px_rgba(35,35,35,0.6)]';
      case 'dot': return 'bg-white/80 border-sky-100 group-hover:bg-sky-500 group-hover:scale-150 group-hover:shadow-[0_0_15px_rgba(14,165,233,0.8)]';
    }
  };

  if (type === 'dot') {
    return (
      <div 
        className="absolute z-10 animate-fadeIn group cursor-crosshair"
        style={{ top, left, animationDelay: delay }}
      >
        <div className={`w-2 h-2 rounded-full border border-sky-300 flex items-center justify-center transition-all duration-500 group-hover:scale-[2.5] group-hover:z-50 ${getColorClass()}`}>
          <div className="w-1 h-1 bg-sky-500 rounded-full animate-pulse"></div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="absolute group z-20 animate-fadeIn"
      style={{ top, left, animationDelay: delay }}
    >
      {/* Premium Tooltip */}
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-accent/95 backdrop-blur-md text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-tighter opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300 pointer-events-none whitespace-nowrap z-[100] border border-white/20 shadow-2xl scale-75 group-hover:scale-100">
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${type === 'recovery' ? 'bg-red-500 animate-pulse' : 'bg-green-500'}`}></div>
          {getLabel()}
        </div>
        {/* Tooltip arrow */}
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-accent/95 rotate-45 border-r border-b border-white/20"></div>
      </div>

      <div className={`
        relative flex items-center justify-center w-5 h-5 md:w-8 md:h-8 rounded-full shadow-[0_4px_15px_rgba(0,0,0,0.2)] cursor-pointer
        transition-all duration-500 cubic-bezier(0.175, 0.885, 0.32, 1.275) hover:scale-[1.6] hover:z-[60] border-2
        ${getColorClass()}
      `}>
        {getIcon()}
        
        {/* Animated Radar Rings on Hover */}
        <div className="absolute inset-0 rounded-full border-2 border-primary opacity-0 group-hover:animate-ping group-hover:opacity-40 pointer-events-none"></div>
        <div className="absolute inset-[-10px] rounded-full border border-primary/20 opacity-0 group-hover:scale-100 scale-50 transition-all duration-500 pointer-events-none"></div>
        
        {type === 'recovery' && (
          <div className="absolute inset-0 rounded-full animate-ping opacity-40 bg-[#D81B60] pointer-events-none"></div>
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
        const t = Math.max(5, Math.min(95, centerTop + Math.sin(angle) * r));
        const l = Math.max(5, Math.min(95, centerLeft + Math.cos(angle) * r));
        
        list.push({
          top: `${t}%`,
          left: `${l}%`,
          type,
          delay: `${(Math.random() * 4).toFixed(1)}s`
        });
      }
    };

    // SUDOESTE (ALTA DENSIDADE - SP/RJ/MG)
    addPoints(150, 70, 68, 14, 'car'); 
    addPoints(70, 68, 70, 10, 'recovery');
    addPoints(45, 72, 66, 8, 'support'); 
    
    // SUL (ALTA DENSIDADE - PR/SC/RS)
    addPoints(85, 88, 55, 10, 'car'); 
    addPoints(40, 86, 56, 8, 'recovery');
    addPoints(25, 87, 56, 6, 'support'); 
    
    // NORDESTE (LITORAL E CAPITAIS)
    addPoints(90, 35, 78, 16, 'car'); 
    addPoints(50, 32, 80, 10, 'recovery');
    addPoints(20, 30, 82, 8, 'support'); 
    
    // CENTRO-OESTE (GO/MT/MS)
    addPoints(60, 50, 45, 15, 'car'); 
    addPoints(25, 52, 44, 9, 'recovery');
    addPoints(15, 51, 46, 7, 'support'); 

    // NORTE (PONTOS ESTRATÉGICOS)
    addPoints(35, 25, 35, 12, 'car');
    addPoints(15, 20, 38, 8, 'support');
    addPoints(80, 25, 40, 25, 'dot'); 

    return list;
  }, []);

  return (
    <section id="abrangencia" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl animate-fadeInUp">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-2.5 rounded-full mb-6 font-black text-xs tracking-[0.2em] uppercase border border-primary/20 shadow-sm">
              <Activity size={16} className="animate-pulse" />
              Monitoramento Geográfico Ativo
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-accent uppercase italic leading-none tracking-tighter">
              Área de Atuação <span className="text-primary">Premium</span> <br />
              <span className="italic">Rede de Resposta 24h</span>
            </h2>
            <p className="text-gray-500 mt-6 text-lg font-medium leading-relaxed max-w-xl">
              Nossa tecnologia de rastreamento híbrido permite uma cobertura granular em todo território nacional, com foco em zonas de alto risco e principais eixos logísticos.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 mb-2">
            {[
              { color: 'bg-accent', label: 'Unidades VTR', icon: <Car size={12} /> },
              { color: 'bg-[#D81B60]', label: 'Recuperações', icon: <ShieldAlert size={12} /> },
              { color: 'bg-primary', label: 'Bases Fixas', icon: <Phone size={12} /> },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-4 bg-gray-50 px-6 py-4 rounded-2xl border border-gray-100 shadow-sm transition-all hover:shadow-xl hover:border-primary/40 group cursor-default">
                <div className={`w-8 h-8 ${item.color} text-white rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 shadow-lg`}>
                  {item.icon}
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black uppercase text-gray-400 tracking-widest">{item.label}</span>
                  <span className="text-accent font-black text-xs">ONLINE</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tactical Map Container */}
        <div className="relative w-full aspect-[4/5] md:aspect-[16/9] bg-[#f8fafc] rounded-[4rem] shadow-[0_100px_200px_rgba(0,0,0,0.1)] border-[15px] md:border-[30px] border-white overflow-hidden group">
          
          {/* HUD Tech Elements */}
          <div className="absolute inset-0 z-10 pointer-events-none">
             {/* Scanning Bar */}
             <div className="w-full h-[300px] bg-gradient-to-b from-transparent via-primary/5 to-transparent absolute top-0 left-0 animate-radar-line"></div>
             
             {/* Corner HUD Markers */}
             <div className="absolute top-10 right-10 flex gap-4">
                <div className="flex flex-col items-end">
                   <span className="text-[10px] font-black text-primary uppercase tracking-widest">SINAL SATELITAL</span>
                   <div className="flex gap-1 mt-1">
                      {[1,2,3,4,5].map(i => <div key={i} className="w-1 h-3 bg-primary rounded-full animate-pulse" style={{ animationDelay: `${i*0.2}s` }}></div>)}
                   </div>
                </div>
             </div>
          </div>

          {/* Tactical Grid Overlay */}
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none z-10" style={{ backgroundImage: 'linear-gradient(#5a6fa6 1px, transparent 1px), linear-gradient(90deg, #5a6fa6 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>

          {/* Brazil Map Base SVG */}
          <div className="absolute inset-0 flex items-center justify-center p-12 opacity-[0.15] group-hover:opacity-[0.25] transition-opacity duration-1000">
            <svg viewBox="0 0 550 550" className="w-[90%] h-[90%] text-accent fill-accent drop-shadow-2xl">
              <path d="M472,235c-2-3-4-7-6-10c-3-4-5-9-8-13c-3-4-5-9-8-13c-2-3-4-7-6-10l-7-11c-2-3-4-7-6-10c-3-4-5-9-8-13c-1-2-3-5-4-7c-3-5-6-10-9-14 c-3-6-7-11-10-16c-3-5-6-10-9-14c-4-7-8-13-12-20c-3-5-6-10-9-14c-3-6-7-11-10-16c-3-5-6-10-9-14c-4-7-8-14-13-20 c-2-3-4-7-6-10c-3-5-6-10-9-15c-2-4-5-7-7-11c-3-5-6-9-9-14c-2-3-4-7-6-10l-5-9c-1-1-1-2-2-3L250,0c-1,1-1,2-2,3c-2,3-4,6-5,9 c-2,3-4,7-6,10c-3,5-6,9-9,14c-2,4-5,7-7,11c-3,5-6,10-9,15c-2,3-4,7-6,10c-4,7-8,14-13,20c-3,5-6,10-9,14c-3,6-7,11-10,16 c-3,5-6,10-9,14c-4,7-8,13-12,20c-3,5-6,10-9,14c-3,6-7,11-10,16c-3,5-6,10-9,14c-1,2-3,5-4,7c-3,4-5,9-8,13c-2,3-4,7-6,10l-7,11 c-2,3-4,7-6,10c-3,4-5,9-8,13c-3,4-5,9-8,13c-2,3-4,7-6,10c-1,2-3,5-4,7c-2,4-5,7-7,11l-3,4c-2,3-4,6-6,9c-2,4-5,7-7,11l-5,9 c-1,1-1,2-2,3c-2,4-5,8-7,12c-1,1-1,2-2,3c-2,3-4,7-6,10c-3,5-6,10-9,15l-1,2c-3,4-6,9-9,14c-2,3-4,7-6,11c-3,5-6,10-9,15 c-2,3-4,7-6,11c-3,5-6,10-9,14c-3,5-6,9-9,14c-3,5-6,10-9,15c-1,2-3,4-4,7l-4,7c-1,1-1,2-2,3c-2,4-5,7-7,11c-1,1-1,2-2,3 c-3,5-6,9-9,14c-2,3-4,7-6,11c-3,5-6,10-9,15l-1,2c-3,4-6,9-9,14c-2,3-4,7-6,11c-3,5-6,10-9,15c-2,3-4,7-6,11c-3,5-6,10-9,14 c-3,5-6,9-9,14c-3,5-6,10-9,15c-1,2-3,4-4,7l-4,7c-1,1-1,2-2,3c-2,4-5,7-7,11c-1,1-1,2-2,3c-3,5-6,9-9,14c-2,3-4,7-6,11 c-3,5-6,10-9,15l-1,2c-3,4-6,9-9,14c-2,3-4,7-6,11c-3,5-6,10-9,15c-2,3-4,7-6,11c-3,5-6,10-9,14c-3,5-6,9-9,14c-3,5-6,10-9,15 c-1,2-3,4-4,7l-4,7c-1,1-1,2-2,3c-2,4-5,7-7,11c-1,1-1,2-2,3c-3,5-6,9-9,14c-2,3-4,7-6,11c-3,5-6,10-9,15l-1,2c-3,4-6,9-9,14 c-2,3-4,7-6,11c-3,5-6,10-9,15c-2,3-4,7-6,11c-3,5-6,10-9,14c-3,5-6,9-9,14c-3,5-6,10-9,15c-1,2-3,4-4,7l-4,7c-1,1-1,2-2,3 c-2,4-5,7-7,11c-1,1-1,2-2,3c-3,5-6,9-9,14c-2,3-4,7-6,11c-3,5-6,10-9,15l-1,2c-3,4-6,9-9,14c-2,3-4,7-6,11c-3,5-6,10-9,15 c-2,3-4,7-6,11c-3,5-6,10-9,14c-3,5-6,9-9,14c-3,5-6,10-9,15c-1,2-3,4-4,7l-4,7c-1,1-1,2-2,3 c-2,4-5,7-7,11c-1,1-1,2-2,3c-3,5-6,9-9,14c-2,3-4,7-6,11c-3,5-6,10-9,15l-1,2c-3,4-6,9-9,14c-2,3-4,7-6,11c-3,5-6,10-9,15 c-2,3-4,7-6,11c-3,5-6,10-9,14c-3,5-6,9-9,14c-3,5-6,10-9,15c-1,2-3,4-4,7l-4,7l2,3c1,2,3,5,4,7c2,3,4,7,6,11c3,4,5,9,8,13 c3,4,5,9,8,13c2,3,4,7,6,11l7,11c2,3,4,7,6,11c3,4,5,9,8,13c1,2,3,5,4,7c3,5,6,10,9,14c3,6,7,11,10,16c3,5,6,10,9,14 c4,7,8,13,12,20c3,5,6,10,9,14c3,6,7,11,10,16c3,5,6,10,9,14 c4,7,8,14,13,20c2,3,4,7,6,10c3,5,6,10,9,15c2,4,5,7,7,11 c3,5,6,9,9,14c2,3,4,7,6,10l5,9c1,1,1,2,2,3l4,7c1-1,1-2,2-3c2-3,4-6,5-9c2-3,4-7,6-10c3-5,6-9,9-14c2-4,5-7,7-11 c3-5,6-10,9-15c2-3,4-7,6-10c4-7,8-14,13-20c3-5,6-10,9-14c3-6,7-11,10-16c3-5,6-10,9-14c4-7,8-13,12-20c3-5,6-10,9-14 c3-6,7-11,10-16c3-5,6-10,9-14c1-2,3-5,4-7c3-4,5-9,8-13c2-3,4-7,6-10l7-11c2-3,4-7,6-10c3-4,5-9,8-13c3-4,5-9,8-13c2-3,4-7,6-10 c1-2,3-5,4-7l2-3l-4-7c-1-2-3-4-4-7c-3-5-6-10-9-14c-3-5-6-9-9-14c-3-5-6-10-9-14c-2-3-4-7-6-11c-3-5-6-10-9-15 c-2-3-4-7-6-11c-3-4-6-9-9-14l-1-2c-3-5-6-10-9-15c-2-3-4-7-6-11c-1-1-1-2-2-3c-2-4-5-8-7-12c-1-1-1-2-2-3l-5-9 c-2-4-5-7-7-11c-2-3-4-6-6-9l-3-4c-2-4-5-7-7-11c-1-2-3-4-4-7c-2-4-5-7-6-11c-3-4-5-9-8-13c-3-4-5-9-8-13c-2-3-4-7-6-11 l-7-11c-2-3-4-7-6-11c-3-4-5-9-8-13c-1-2-3-5-4-7c-3-5-6-10-9-14c-3-6-7-11-10-16c-3-5-6-10-9-14c-4-7-8-13-12-20 c-3-5-6-10-9-14c-3-6-7-11-10-16c-3-5-6-10-9-14c-4-7-8-14-13-20c-2-3-4-7-6-10c-3-5-6-10-9-15c-2-4-5-7-7-11 c-3-5-6-9-9-14c-2-3-4-7-6-10l-5-9c-1-1-1-2-2-3l4-7c1,1,1,2,2,3l5,9c2,3,4,7,6,10c3,5,6,9,9,14c2,4,5,7,7,11 c3,5,6,10,9,15c2,3,4,7,6,10c4,7,8,14,13,20c3,5,6,10,9,14c3,6,7,11,10,16c3,5,6,10,9,14c4,7,8,13,12,20 c3,5,6,10,9,14c3,6,7,11,10,16c3,5,6,10,9,14c1,2,3,5,4,7c3,4,5,9,8,13l7,11c2,3,4,7,6,10c3,4,5,9,8,13c3,4,5,9,8,13 c2,3,4,7,6,10c1,2,3,5,4,7l2,3l4,7c1,2,3,4,4,7c3,5,6,10,9,14c3,5,6,9,9,14c3,5,6,10,9,14c2,3,4,7,6,11 c3,5,6,10,9,15c2,3,4,7,6,11c3,4,6,9,9,14l1,2c3,5,6,10,9,15c2,3,4,7,6,11c1,1,1,2,2,3c2,4,5,8,7,12c1,1,1,2,2,3 l5,9c2,4,5,7,7,11c2,3,4,6,6,9l3,4c2,4,5,7,7,11c1,2,3,4,4,7c2,4,5,7,6,11c3,4,5,9,8,13c3,4,5,9,8,13c2,3,4,7,6,11 l7,11c2,3,4,7,6,11c3,4,5,9,8,13c1,2,3,5,4,7c3,5,6,10,9,14c3,6,7,11,10,16c3,5,6,10,9,14c4,7,8,13,12,20 c3,5,6,10,9,14c3,6,7,11,10,16c3,5,6,10,9,14c4,7,8,14,13,20c2,3,4,7,6,10c3,5,6,10,9,15c2,4,5,7,7,11 c3,5,6,9,9,14c2,3,4,7,6,10l5,9c1,1,1,2,2,3L472,235z"/>
            </svg>
          </div>

          {/* Markers Layer */}
          <div className="absolute inset-0 overflow-hidden z-30 pointer-events-auto">
            {markers.map((m, i) => (
              <Marker key={i} {...m} />
            ))}
          </div>

          {/* Tactical Overlay UI */}
          <div className="absolute top-10 left-10 z-40 space-y-4">
             <div className="glass px-8 py-5 rounded-[2.5rem] border border-white/40 shadow-2xl animate-fadeInLeft">
                <div className="flex items-center gap-4">
                   <div className="relative">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-[0_0_15px_rgba(34,197,94,0.8)]"></div>
                      <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
                   </div>
                   <div className="flex flex-col">
                      <p className="text-accent font-black text-sm uppercase italic tracking-tighter">Central Operacional SP</p>
                      <p className="text-[9px] font-bold text-gray-500 uppercase tracking-[0.2em] mt-1">Status: Conexão Criptografada</p>
                   </div>
                </div>
             </div>
             
             <div className="glass px-8 py-4 rounded-[2.5rem] border border-white/20 shadow-2xl animate-fadeInLeft" style={{ animationDelay: '0.4s' }}>
                <div className="flex items-center gap-5">
                   <Target size={20} className="text-primary animate-spin-slow" />
                   <div className="text-[10px] font-black uppercase tracking-[0.15em] text-accent">
                      <span className="block opacity-50 text-[8px]">Latência Rede</span>
                      <span className="text-primary text-xs">12ms - ULTRA LOW</span>
                   </div>
                </div>
             </div>
          </div>

          <div className="absolute bottom-10 right-10 z-40 hidden lg:block">
            <div className="bg-accent/95 backdrop-blur-xl p-10 rounded-[3.5rem] border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.5)] space-y-5 animate-fadeIn">
               <div className="flex items-center gap-3 mb-4 border-b border-white/10 pb-4">
                  <ShieldCheck size={24} className="text-primary" />
                  <h5 className="text-white font-black text-sm uppercase tracking-[0.3em]">Status Operacional</h5>
               </div>
               {[
                 { icon: <Car size={16} />, label: 'Agentes Ativos', val: '432', color: 'bg-primary' },
                 { icon: <ShieldAlert size={16} />, label: 'Ocorrências Dia', val: '08', color: 'bg-[#D81B60]' },
                 { icon: <Activity size={16} />, label: 'Disponibilidade', val: '100%', color: 'bg-green-500' },
               ].map((item) => (
                 <div key={item.label} className="flex items-center justify-between gap-16 group cursor-default transition-all hover:translate-x-1">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 ${item.color} rounded-2xl flex items-center justify-center text-white shadow-xl transition-transform group-hover:scale-110 group-hover:rotate-6`}>
                        {item.icon}
                      </div>
                      <span className="text-[10px] font-black uppercase text-gray-400 tracking-wider group-hover:text-white transition-colors">{item.label}</span>
                    </div>
                    <span className="text-white font-black text-sm">{item.val}</span>
                 </div>
               ))}
               <div className="pt-4 border-t border-white/5 text-center">
                  <p className="text-[8px] text-gray-500 font-bold uppercase tracking-widest">Atualizado em tempo real via Satélite</p>
               </div>
            </div>
          </div>
        </div>

        {/* Strategic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
           {[
             { 
               title: 'Invisibilidade Tática', 
               desc: 'Utilizamos tecnologias que operam abaixo do ruído eletromagnético, garantindo que o rastreador nunca seja detectado por jammers.', 
               icon: <Target className="text-primary" />
             },
             { 
               title: 'Rede de Elite', 
               desc: 'Nossa malha de agentes é composta por profissionais com treinamento militar especializado em contenção e recuperação tática.', 
               icon: <ShieldCheck className="text-[#D81B60]" />
             },
             { 
               title: 'Comando Centralizado', 
               desc: 'Nossa central monitora 100% dos eventos via telemetria avançada, permitindo o acionamento em milissegundos após um alerta.', 
               icon: <Activity className="text-sky-500" />
             },
           ].map((card, idx) => (
             <div key={idx} className="bg-gray-50 p-12 rounded-[3.5rem] border border-gray-100 hover:bg-white hover:shadow-2xl transition-all duration-700 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full -mr-24 -mt-24 transition-transform group-hover:scale-150 duration-700"></div>
                <div className="w-20 h-20 bg-white rounded-[2rem] flex items-center justify-center shadow-lg mb-8 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500 relative z-10">
                   {card.icon}
                </div>
                <h4 className="text-2xl font-black text-accent uppercase mb-4 italic tracking-tight relative z-10 group-hover:text-primary transition-colors">{card.title}</h4>
                <p className="text-gray-500 font-medium leading-relaxed relative z-10 text-lg">{card.desc}</p>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};
