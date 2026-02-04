
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Shield, Zap } from 'lucide-react';
import { LOCATIONS } from '../constants/locations';

export const LocationShelf: React.FC = () => {
  // Duplicamos a lista para criar o efeito infinito sem gaps
  const doubledLocations = [...LOCATIONS, ...LOCATIONS];

  return (
    <section className="py-16 bg-accent overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4 mb-10 text-center">
        <h3 className="text-white font-black text-2xl md:text-3xl uppercase italic tracking-tighter">
          Pronta Resposta <span className="text-primary">Regional</span>
        </h3>
        <p className="text-gray-500 font-bold uppercase text-[10px] tracking-[0.3em] mt-2">
          Unidades Táticas em Alerta Máximo
        </p>
      </div>

      <div className="scroller-x-container flex relative">
        <div className="flex gap-6 scroller-x-content animate-infinite-scroll-x">
          {doubledLocations.map((loc, idx) => (
            <Link
              key={`${loc.slug}-${idx}`}
              to={`/servicos-em/${loc.slug}`}
              className="flex-shrink-0 w-[280px] group"
            >
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-3xl hover:bg-primary/20 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_rgba(90,111,166,0.3)]">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-primary/20 rounded-2xl text-primary group-hover:bg-white group-hover:text-primary transition-colors">
                    <MapPin size={20} />
                  </div>
                  <div className="flex gap-1">
                    <Shield size={12} className="text-green-500" fill="currentColor" />
                    <Zap size={12} className="text-primary" fill="currentColor" />
                  </div>
                </div>
                <h4 className="text-white font-black text-lg uppercase tracking-tight mb-1 group-hover:text-primary transition-colors">
                  {loc.name}
                </h4>
                <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-4">
                  Raio de Atendimento: {loc.radius}km
                </p>
                <div className="flex items-center gap-2 text-primary font-black text-[10px] uppercase tracking-tighter">
                  <span>Ver Detalhes Táticos</span>
                  <div className="w-4 h-px bg-primary group-hover:w-8 transition-all"></div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
