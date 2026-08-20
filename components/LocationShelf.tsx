import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ShieldCheck, ArrowRight } from 'lucide-react';
import { CITIES_DATA } from '../src/data/cities';
import Container from '../src/components/ui/Container';

export const LocationShelf: React.FC = () => {
  const cities = Object.values(CITIES_DATA);

  return (
    <section className="py-16 bg-[#1a1c23] overflow-hidden border-t border-gray-800 text-white">
      <Container>
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#8ba2d4] bg-white/5 px-3 py-1 rounded-full border border-white/10">
              Presença Regional
            </span>
            <h3 className="t-h3 font-black text-white mt-2">
              Pronta Resposta em Cidades Estratégicas
            </h3>
          </div>
          <Link
            to="/abrangencia"
            className="text-xs sm:text-sm font-bold text-[#8ba2d4] hover:text-white inline-flex items-center gap-1.5 transition-colors"
          >
            <span>Ver todas as 27 cidades</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Grade de Cidades com Scroll Suave ou Grid Responsivo */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
          {cities.slice(0, 12).map((city) => (
            <Link
              key={city.slug}
              to={`/servicos-em/${city.slug}`}
              className="bg-white/5 hover:bg-white/10 border border-white/10 p-4 rounded-xl transition-all duration-200 group flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-2">
                <MapPin className="w-4 h-4 text-[#8ba2d4] group-hover:scale-110 transition-transform" />
                {city.isHeadquarters && (
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 font-bold px-1.5 py-0.5 rounded">
                    SEDE
                  </span>
                )}
              </div>
              <div>
                <h4 className="font-bold text-sm text-white group-hover:text-[#8ba2d4] transition-colors leading-snug">
                  {city.name}
                </h4>
                <p className="text-xs text-gray-400 mt-0.5">{city.state}</p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default LocationShelf;
