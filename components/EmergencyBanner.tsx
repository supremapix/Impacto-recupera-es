import React, { useState } from 'react';
import { ShieldAlert, MapPin, Zap, Navigation } from 'lucide-react';
import { COMPANY } from '../src/data/company';

export const EmergencyBanner: React.FC = () => {
  const [distance, setDistance] = useState<number | null>(null);
  const [isWithinRange, setIsWithinRange] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Coordenadas da Sede Operacional Oficial (Indaiatuba/SP) com fallback seguro
  const HQ_LAT = COMPANY.sede?.coordenadas?.lat ?? COMPANY.endereco?.coordenadas?.lat ?? -23.0903;
  const HQ_LNG = COMPANY.sede?.coordenadas?.lng ?? COMPANY.endereco?.coordenadas?.lng ?? -47.2181;

  const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    const R = 6371; // Raio da Terra em km
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  const checkCoverage = () => {
    if (!navigator.geolocation) {
      setErrorMsg('Geolocalização não suportada no seu navegador.');
      return;
    }

    setLoading(true);
    setErrorMsg(null);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const dist = calculateDistance(
          position.coords.latitude,
          position.coords.longitude,
          HQ_LAT,
          HQ_LNG
        );
        setDistance(dist);
        setIsWithinRange(dist <= 250);
        setLoading(false);
      },
      (error) => {
        console.warn('Geolocation permission or error:', error.message);
        setErrorMsg('Permissão de localização não concedida. Nossa rede atende todo o território nacional.');
        setLoading(false);
      },
      { timeout: 8000 }
    );
  };

  return (
    <div className="bg-[#171922] py-8 text-white relative overflow-hidden border-t border-white/10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        {/* Lado Esquerdo: Identificação & Sede */}
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-[#5a6fa6]/20 border border-[#5a6fa6]/40 flex items-center justify-center shrink-0">
            <ShieldAlert className="w-7 h-7 text-[#8ba2d4]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded">
                Sede Indaiatuba/SP
              </span>
              <span className="text-xs text-gray-400">Atendimento 24h</span>
            </div>
            <h4 className="text-lg sm:text-xl font-black text-white mt-1">
              Verificação de Raio de Pronta Resposta
            </h4>
            <p className="text-xs sm:text-sm text-gray-300">
              Base operacional estratégica conectada às rodovias SP-075, Anhanguera e Bandeirantes.
            </p>
          </div>
        </div>

        {/* Lado Direito: Ação de checagem */}
        <div className="flex flex-col items-center md:items-end w-full md:w-auto">
          {!isWithinRange && distance === null ? (
            <div className="flex flex-col items-center md:items-end gap-2">
              <button
                type="button"
                onClick={checkCoverage}
                disabled={loading}
                className="bg-[#5a6fa6] hover:bg-[#4b5d8d] text-white px-6 py-3 rounded-xl font-bold text-sm flex items-center gap-2 transition-colors shadow-md disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Calculando distância...</span>
                  </>
                ) : (
                  <>
                    <Navigation className="w-4 h-4" />
                    <span>Checar Distância da Base</span>
                  </>
                )}
              </button>
              {errorMsg && (
                <p className="text-xs text-amber-300 font-medium text-center md:text-right max-w-xs">
                  {errorMsg}
                </p>
              )}
            </div>
          ) : (
            <div className={`px-5 py-3 rounded-xl flex items-center gap-3 border ${isWithinRange ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-200' : 'bg-blue-950/40 border-blue-500/40 text-blue-200'}`}>
              <Zap className="w-5 h-5 shrink-0" />
              <div>
                <p className="font-bold text-sm">
                  {isWithinRange ? 'Raio Operacional Imediato' : 'Cobertura via Rede Nacional'}
                </p>
                <p className="text-xs opacity-90">
                  {distance !== null ? `Distância estimada da sede: ${Math.round(distance)} km.` : ''} Atendimento 24/7.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmergencyBanner;
