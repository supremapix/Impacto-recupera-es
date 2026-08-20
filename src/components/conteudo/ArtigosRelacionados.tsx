import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, MapPin, ArrowRight } from 'lucide-react';
import { getArtigosRelacionados } from '../../data/artigos';
import { CardArtigo } from './CardArtigo';
import { CITIES_DATA } from '../../data/cities';

interface ArtigosRelacionadosProps {
  slugs: string[];
  cidadesSlugs?: string[];
}

export const ArtigosRelacionados: React.FC<ArtigosRelacionadosProps> = ({
  slugs,
  cidadesSlugs = [],
}) => {
  const artigos = getArtigosRelacionados(slugs);

  if (artigos.length === 0 && cidadesSlugs.length === 0) return null;

  return (
    <section className="my-16 pt-12 border-t border-slate-200" aria-label="Guias e Cidades Relacionadas">
      {artigos.length > 0 && (
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-[#5a6fa6]/10 text-[#5a6fa6] flex items-center justify-center">
                <BookOpen className="w-4 h-4" />
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                Guias Recomendados
              </h2>
            </div>
            <Link
              to="/conteudo"
              className="text-xs sm:text-sm font-bold text-[#5a6fa6] hover:underline flex items-center gap-1 min-h-[44px]"
            >
              <span>Ver todos os guias</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {artigos.map((artigo) => (
              <CardArtigo key={artigo.slug} artigo={artigo} />
            ))}
          </div>
        </div>
      )}

      {/* Cidades Relacionadas com Pronta Resposta */}
      {cidadesSlugs.length > 0 && (
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200">
          <div className="flex items-center gap-2 mb-3">
            <MapPin className="w-4 h-4 text-[#5a6fa6]" />
            <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-slate-700">
              Pronta Resposta e Cobertura nas Cidades
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 mb-4">
            Veja detalhes da operação e tempo de mobilização da Impacto Recuperações nestes polos regionais:
          </p>
          <div className="flex flex-wrap gap-2.5">
            {cidadesSlugs.map((cSlug) => {
              const city = CITIES_DATA[cSlug];
              if (!city) return null;
              return (
                <Link
                  key={cSlug}
                  to={`/servicos-em/${city.slug}`}
                  className="min-h-[40px] px-3.5 py-2 rounded-xl bg-white hover:bg-[#5a6fa6] hover:text-white text-slate-800 border border-slate-200 text-xs sm:text-sm font-bold transition-colors inline-flex items-center gap-1.5 shadow-sm"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#5a6fa6]" />
                  <span>{city.name} ({city.state})</span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
};

export default ArtigosRelacionados;
