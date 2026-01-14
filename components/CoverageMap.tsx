
import React, { useMemo } from 'react';
import { Phone, Car, ShieldAlert, Zap, Info } from 'lucide-react';

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

  const getColor = () => {
    switch (type) {
      case 'car': return 'bg-black text-white border-gray-700';
      case 'recovery': return 'bg-[#D81B60] text-white border-[#AD1457]';
      case 'support': return 'bg-[#1E88E5] text-white border-[#1565C0]';
      case 'dot': return 'bg-white border-sky-200';
    }
  };

  if (type === 'dot') {
    return (
      <div 
        className="absolute z-10 animate-fadeIn"
        style={{ top, left, animationDelay: delay }}
      >
        <div className="w-3 h-3 bg-white rounded-full flex items-center justify-center border border-sky-300 shadow-sm transition-transform hover:scale-150">
           <div className="w-1.5 h-1.5 bg-sky-500 rounded-full animate-pulse"></div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="absolute group transition-all duration-500 z-10 animate-fadeIn"
      style={{ top, left, animationDelay: delay }}
    >
      <div className={`
        relative flex items-center justify-center w-5 h-5 md:w-7 md:h-7 rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.3)] cursor-pointer
        transition-all duration-300 hover:scale-150 hover:z-50 border-2
        ${getColor()}
      `}>
        {getIcon()}
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

    // Fiel à densidade populacional brasileira
    addPoints(70, 70, 68, 10, 'car'); // Sudeste
    addPoints(45, 68, 69, 7, 'recovery');
    addPoints(25, 72, 67, 5, 'support');
    
    addPoints(40, 88, 55, 8, 'car'); // Sul
    addPoints(25, 86, 56, 6, 'recovery');
    
    addPoints(50, 30, 78, 12, 'car'); // Nordeste
    addPoints(35, 35, 80, 8, 'recovery');
    
    addPoints(30, 50, 45, 12, 'car'); // Centro-Oeste
    addPoints(20, 25, 40, 15, 'dot'); // Norte (Pontos esparsos)

    return list;
  }, []);

  return (
    <section id="abrangencia" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-5 py-2 rounded-full mb-6 font-bold text-sm tracking-widest uppercase border border-primary/20">
              <Zap size={16} fill="currentColor" className="animate-pulse" />
              Sincronização em Tempo Real
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-accent uppercase italic leading-none tracking-tighter">
              Rede de <span className="text-primary">Recuperação</span> <br />
              <span className="italic">Nível Nacional</span>
            </h2>
          </div>
          
          <div className="flex flex-wrap gap-3 mb-2">
            {[
              { color: 'bg-black', label: 'Unidades' },
              { color: 'bg-[#D81B60]', label: 'Ocorrências' },
              { color: 'bg-[#1E88E5]', label: 'Bases' },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3 bg-white px-5 py-3 rounded-2xl border border-gray-100 shadow-sm transition-all hover:shadow-md">
                <div className={`w-3.5 h-3.5 ${item.color} rounded-full`}></div>
                <span className="text-[11px] font-black uppercase text-gray-500 tracking-wider">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tactical Map Container */}
        <div className="relative w-full aspect-[4/5] md:aspect-[16/9] bg-[#f0f9ff] rounded-[3rem] shadow-[0_80px_160px_rgba(0,0,0,0.12)] border-[15px] md:border-[25px] border-white overflow-hidden group">
          
          {/* Scanning Radar Line */}
          <div className="absolute inset-0 z-20 pointer-events-none">
            <div className="w-full h-[150px] bg-gradient-to-b from-transparent via-primary/10 to-transparent absolute top-0 left-0 animate-[radarLine_6s_linear_infinite]"></div>
          </div>

          {/* High Precision Brazil Map */}
          <div className="absolute inset-0 flex items-center justify-center p-12 opacity-40">
            <svg viewBox="0 0 550 550" className="w-[90%] h-[90%] text-white fill-white drop-shadow-2xl">
              <path d="M472,235c-2-3-4-7-6-10c-3-4-5-9-8-13c-3-4-5-9-8-13c-2-3-4-7-6-10l-7-11c-2-3-4-7-6-10c-3-4-5-9-8-13c-1-2-3-5-4-7c-3-5-6-10-9-14 c-3-6-7-11-10-16c-3-5-6-10-9-14c-4-7-8-13-12-20c-3-5-6-10-9-14c-3-6-7-11-10-16c-3-5-6-10-9-14c-4-7-8-14-13-20 c-2-3-4-7-6-10c-3-5-6-10-9-15c-2-4-5-7-7-11c-3-5-6-9-9-14c-2-3-4-7-6-10l-5-9c-1-1-1-2-2-3L250,0c-1,1-1,2-2,3c-2,3-4,6-5,9 c-2,3-4,7-6,10c-3,5-6,9-9,14c-2,4-5,7-7,11c-3,5-6,10-9,15c-2,3-4,7-6,10c-4,7-8,14-13,20c-3,5-6,10-9,14c-3,6-7,11-10,16 c-3,5-6,10-9,14c-4,7-8,13-12,20c-3,5-6,10-9,14c-3,6-7,11-10,16c-3,5-6,10-9,14c-1,2-3,5-4,7c-3,4-5,9-8,13c-2,3-4,7-6,10l-7,11 c-2,3-4,7-6,10c-3,4-5,9-8,13c-3,4-5,9-8,13c-2,3-4,7-6,10c-1,2-3,5-4,7c-2,4-5,7-7,11l-3,4c-2,3-4,6-6,9c-2,4-5,7-7,11l-5,9 c-1,1-1,2-2,3c-2,4-5,8-7,12c-1,1-1,2-2,3c-2,3-4,7-6,10c-3,5-6,10-9,15l-1,2c-3,4-6,9-9,14c-2,3-4,7-6,11c-3,5-6,10-9,15 c-2,3-4,7-6,11c-3,5-6,10-9,14c-3,5-6,9-9,14c-3,5-6,10-9,15c-1,2-3,4-4,7l-4,7c-1,1-1,2-2,3c-2,4-5,7-7,11c-1,1-1,2-2,3 c-3,5-6,9-9,14c-2,3-4,7-6,11c-3,5-6,10-9,15l-1,2c-3,4-6,9-9,14c-2,3-4,7-6,11c-3,5-6,10-9,15c-2,3-4,7-6,11c-3,5-6,10-9,14 c-3,5-6,9-9,14c-3,5-6,10-9,15c-1,2-3,4-4,7l-4,7c-1,1-1,2-2,3c-2,4-5,7-7,11c-1,1-1,2-2,3c-3,5-6,9-9,14c-2,3-4,7-6,11 c-3,5-6,10-9,15l-1,2c-3,4-6,9-9,14c-2,3-4,7-6,11c-3,5-6,10-9,15c-2,3-4,7-6,11c-3,5-6,10-9,14c-3,5-6,9-9,14c-3,5-6,10-9,15 c-1,2-3,4-4,7l-4,7c-1,1-1,2-2,3c-2,4-5,7-7,11c-1,1-1,2-2,3c-3,5-6,9-9,14c-2,3-4,7-6,11c-3,5-6,10-9,15l-1,2c-3,4-6,9-9,14 c-2,3-4,7-6,11c-3,5-6,10-9,15c-2,3-4,7-6,11c-3,5-6,10-9,14c-3,5-6,9-9,14c-3,5-6,10-9,15c-1,2-3,4-4,7l-4,7c-1,1-1,2-2,3 c-2,4-5,7-7,11c-1,1-1,2-2,3c-3,5-6,9-9,14c-2,3-4,7-6,11c-3,5-6,10-9,15l-1,2c-3,4-6,9-9,14c-2,3-4,7-6,11c-3,5-6,10-9,15 c-2,3-4,7-6,11c-3,5-6,10-9,14c-3,5-6,9-9,14c-3,5-6,10-9,15c-1,2-3,4-4,7l-4,7l2,3c1,2,3,5,4,7c2,3,4,7,6,11c3,4,5,9,8,13 c3,4,5,9,8,13c2,3,4,7,6,11l7,11c2,3,4,7,6,11c3,4,5,9,8,13c1,2,3,5,4,7c3,5,6,10,9,14c3,6,7,11,10,16c3,5,6,10,9,14 c4,7,8,13,12,20c3,5,6,10,9,14c3,6,7,11,10,16c3,5,6,10,9,14c4,7,8,14,13,20c2,3,4,7,6,10c3,5,6,10,9,15c2,4,5,7,7,11 c3,5,6,9,9,14c2,3,4,7,6,10l5,9c1,1,1,2,2,3l4,7c1-1,1-2,2-3c2-3,4-6,5-9c2-3,4-7,6-10c3-5,6-9,9-14c2-4,5-7,7-11 c3-5,6-10,9-15c2-3,4-7,6-10c4-7,8-14,13-20c3-5,6-10,9-14c3-6,7-11,10-16c3-5,6-10,9-14c4-7,8-13,12-20c3-5,6-10,9-14 c3-6,7-11,10-16c3-5,6-10,9-14c1-2,3-5,4-7c3-4,5-9,8-13c2-3,4-7,6-10l7-11c2-3,4-7,6-10c3-4,5-9,8-13c3-4,5-9,8-13c2-3,4-7,6-10 c1-2,3-5,4-7l2-3l-4-7c-1-2-3-4-4-7c-3-5-6-10-9-14c-3-5-6-9-9-14c-3-5-6-10-9-14c-2-3-4-7-6-11c-3-5-6-10-9-15 c-2-3-4-7-6-11c-3-4-6-9-9-14l-1-2c-3-5-6-10-9-15c-2-3-4-7-6-11c-1-1-1-2-2-3c-2-4-5-8-7-12c-1-1-1-2-2-3l-5-9 c-2-4-5-7-7-11c-2-3-4-6-6-9l-3-4c-2-4-5-7-7-11c-1-2-3-4-4-7c-2-4-5-7-6-11c-3-4-5-9-8-13c-3-4-5-9-8-13c-2-3-4-7-6-11 l-7-11c-2-3-4-7-6-11c-3-4-5-9-8-13c-1-2-3-5-4-7c-3-5-6-10-9-14c-3-6-7-11-10-16c-3-5-6-10-9-14c-4-7-8-13-12-20 c-3-5-6-10-9-14c-3-6-7-11-10-16c-3-5-6-10-9-14c-4-7-8-14-13-20c-2-3-4-7-6-10c-3-5-6-10-9-15c-2-4-5-7-7-11 c-3-5-6-9-9-14c-2-3-4-7-6-10l-5-9c-1-1-1-2-2-3l4-7c1,1,1,2,2,3l5,9c2,3,4,7,6,10c3,5,6,9,9,14c2,4,5,7,7,11 c3,5,6,10,9,15c2,3,4,7,6,10c4,7,8,14,13,20c3,5,6,10,9,14c3,6,7,11,10,16c3,5,6,10,9,14c4,7,8,13,12,20 c3,5,6,10,9,14c3,6,7,11,10,16c3,5,6,10,9,14c1,2,3,5,4,7c3,4,5,9,8,13l7,11c2,3,4,7,6,10c3,4,5,9,8,13c3,4,5,9,8,13 c2,3,4,7,6,10c1,2,3,5,4,7l2,3l4,7c1,2,3,4,4,7c3,5,6,10,9,14c3,5,6,9,9,14c3,5,6,10,9,14c2,3,4,7,6,11 c3,5,6,10,9,15c2,3,4,7,6,11c3,4,6,9,9,14l1,2c3,5,6,10,9,15c2,3,4,7,6,11c1,1,1,2,2,3c2,4,5,8,7,12c1,1,1,2,2,3 l5,9c2,4,5,7,7,11c2,3,4,6,6,9l3,4c2,4,5,7,7,11c1,2,3,4,4,7c2,4,5,7,6,11c3,4,5,9,8,13c3,4,5,9,8,13c2,3,4,7,6,11 l7,11c2,3,4,7,6,11c3,4,5,9,8,13c1,2,3,5,4,7c3,5,6,10,9,14c3,6,7,11,10,16c3,5,6,10,9,14c4,7,8,13,12,20 c3,5,6,10,9,14c3,6,7,11,10,16c3,5,6,10,9,14c4,7,8,14,13,20c2,3,4,7,6,10c3,5,6,10,9,15c2,4,5,7,7,11 c3,5,6,9,9,14c2,3,4,7,6,10l5,9c1,1,1,2,2,3L472,235z"/>
            </svg>
          </div>

          {/* Markers Layer */}
          <div className="absolute inset-0 overflow-hidden z-30">
            {markers.map((m, i) => (
              <Marker key={i} {...m} />
            ))}
          </div>

          {/* Tactical Overlay UI */}
          <div className="absolute top-8 left-8 z-40">
             <div className="glass px-6 py-4 rounded-[2rem] border border-white/40 shadow-xl animate-fadeInLeft">
                <div className="flex items-center gap-3">
                   <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.6)]"></div>
                   <p className="text-accent font-black text-sm uppercase italic tracking-tighter">Link de Dados Estável</p>
                </div>
                <p className="text-[9px] font-bold text-gray-500 uppercase mt-1 tracking-widest">Central de Monitoramento: ON</p>
             </div>
          </div>

          <div className="absolute bottom-8 right-8 z-40 hidden md:block">
            <div className="bg-accent/90 backdrop-blur-md p-6 rounded-[2rem] border border-white/10 shadow-2xl space-y-3 animate-fadeIn">
               {[
                 { icon: <Car size={12} />, label: 'Pronta Resposta', color: 'bg-black' },
                 { icon: <ShieldAlert size={12} />, label: 'Ocorrência Ativa', color: 'bg-[#D81B60]' },
                 { icon: <Phone size={12} />, label: 'Central de Apoio', color: 'bg-[#1E88E5]' },
               ].map((legend) => (
                 <div key={legend.label} className="flex items-center gap-3">
                    <div className={`w-6 h-6 ${legend.color} rounded-full flex items-center justify-center text-white shadow-lg`}>
                      {legend.icon}
                    </div>
                    <span className="text-[10px] font-black uppercase text-gray-300 tracking-wider">{legend.label}</span>
                 </div>
               ))}
            </div>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
           {[
             { title: 'Tempo de Resposta', desc: 'Média nacional recorde de 35 minutos para o primeiro contato físico no local.', icon: <Zap className="text-primary" fill="currentColor" /> },
             { title: 'Equipe de Elite', desc: 'Composta por ex-militares e profissionais treinados em contenção de riscos.', icon: <ShieldAlert className="text-[#D81B60]" /> },
             { title: 'Rastreamento Híbrido', desc: 'Combinação de GPS, RF e Comando de Voz para zero zonas cegas.', icon: <Info className="text-sky-500" /> },
           ].map((card, idx) => (
             <div key={idx} className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 hover:bg-white hover:shadow-2xl transition-all duration-500 group">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-md mb-6 group-hover:scale-110 transition-transform">
                   {card.icon}
                </div>
                <h4 className="text-2xl font-black text-accent uppercase mb-3 italic tracking-tight">{card.title}</h4>
                <p className="text-gray-500 font-medium leading-relaxed">{card.desc}</p>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};
