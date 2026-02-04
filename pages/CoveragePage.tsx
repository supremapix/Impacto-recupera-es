
import React from 'react';
import { CoverageMap } from '../components/CoverageMap';
import { LocationShelf } from '../components/LocationShelf';
import { EmergencyBanner } from '../components/EmergencyBanner';
import { Globe } from 'lucide-react';

export const CoveragePage: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="pt-32 pb-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-primary text-white rounded-3xl animate-bounce">
              <Globe size={40} />
            </div>
          </div>
          <h1 className="text-5xl md:text-8xl font-black uppercase italic leading-none tracking-tighter mb-6">
            Rede <span className="text-primary">Nacional</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed">Operamos em todas as capitais e principais eixos rodoviários do Brasil com mais de 630 agentes de pronta resposta.</p>
        </div>
      </section>

      <CoverageMap />
      
      <div className="py-12 bg-accent">
        <LocationShelf />
      </div>

      <EmergencyBanner />
    </div>
  );
};
