
import React, { useState } from 'react';
import { ShieldAlert, MapPin, Zap } from 'lucide-react';

export const EmergencyBanner: React.FC = () => {
  const [distance, setDistance] = useState<number | null>(null);
  const [isWithinRange, setIsWithinRange] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(false);

  // HQ Coordinates: São Paulo SP
  const HQ_LAT = -23.5505;
  const HQ_LNG = -46.6333;

  const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    const R = 6371; // Radius of the earth in km
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a = 
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) * 
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in km
  };

  const checkCoverage = () => {
    if (!navigator.geolocation) {
      alert('Geolocalização não suportada no seu navegador.');
      return;
    }

    setLoading(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const dist = calculateDistance(
          position.coords.latitude,
          position.coords.longitude,
          HQ_LAT,
          HQ_LNG
        );
        setDistance(dist);
        setIsWithinRange(dist <= 200);
        setLoading(false);
      },
      (error) => {
        console.error("Geolocation error:", error);
        setLoading(false);
      }
    );
  };

  return (
    <div className="bg-[#1a1a1a] py-10 text-white relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        
        {/* Left Side: Icon & Text */}
        <div className="flex items-center gap-6">
          <div className="relative">
            <div className="bg-[#c62828] w-20 h-20 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(198,40,40,0.4)] animate-pulse">
              <ShieldAlert size={40} className="text-white" />
            </div>
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center">
              <span className="text-red-600 font-black text-xs">!</span>
            </div>
          </div>
          <div>
            <h4 className="text-2xl md:text-3xl font-black uppercase italic tracking-tighter">
              Atendimento de Emergência
            </h4>
            <p className="text-gray-400 font-medium text-lg">
              Verifique se você está na área de pronta resposta rápida (200km)
            </p>
          </div>
        </div>

        {/* Right Side: Button / Result */}
        <div className="flex flex-col items-center md:items-end w-full md:w-auto">
          {!isWithinRange && distance === null ? (
            <button 
              onClick={checkCoverage}
              disabled={loading}
              className="bg-primary text-white hover:bg-white hover:text-primary transition-all duration-300 px-10 py-5 rounded-2xl font-black text-lg flex items-center gap-3 shadow-2xl uppercase tracking-tighter min-w-[280px] justify-center hover:-translate-y-1 active:scale-95"
            >
              {loading ? (
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                  LOCALIZANDO...
                </div>
              ) : (
                <>
                  <MapPin size={24} />
                  Checar Cobertura Local
                </>
              )}
            </button>
          ) : (
            <div className={`px-8 py-5 rounded-2xl flex items-center gap-4 border-2 shadow-2xl animate-fadeInUp ${isWithinRange ? 'bg-green-600/10 border-green-500' : 'bg-yellow-600/10 border-yellow-500'}`}>
              <div className={`p-3 rounded-full ${isWithinRange ? 'bg-green-600' : 'bg-yellow-600'}`}>
                <Zap size={24} className="text-white" fill="currentColor" />
              </div>
              <div>
                <p className="font-black text-xl uppercase italic">
                  {isWithinRange ? 'ÁREA COBERTA!' : 'FORA DA ZONA EXPRESSA'}
                </p>
                <p className="text-sm font-bold opacity-70">
                  {isWithinRange 
                    ? `Nossa equipe está a apenas ${distance?.toFixed(0)}km de você.` 
                    : `Sua distância: ${distance?.toFixed(0)}km. Atendimento sujeito a disponibilidade.`}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Decorative slant overlay for dark theme */}
      <div className="absolute top-0 right-0 w-1/4 h-full bg-white/[0.02] -skew-x-12 transform origin-top-right"></div>
    </div>
  );
};
