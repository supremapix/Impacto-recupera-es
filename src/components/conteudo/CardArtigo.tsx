import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Calendar, ArrowRight } from 'lucide-react';
import { Artigo } from '../../data/artigos';

interface CardArtigoProps {
  artigo: Artigo;
}

const CATEGORIA_COLORS: Record<Artigo['categoria'], { bg: string; text: string; border: string }> = {
  Emergência: { bg: 'bg-red-50', text: 'text-red-700', border: 'border-red-200' },
  Prevenção: { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200' },
  Cargas: { bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200' },
  'Como contratar': { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200' },
  Regional: { bg: 'bg-indigo-50', text: 'text-indigo-700', border: 'border-indigo-200' },
};

export const CardArtigo: React.FC<CardArtigoProps> = ({ artigo }) => {
  const cores = CATEGORIA_COLORS[artigo.categoria] || {
    bg: 'bg-slate-50',
    text: 'text-slate-700',
    border: 'border-slate-200',
  };

  const dataFormatada = new Date(artigo.atualizadoEm).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

  return (
    <article className="h-full flex flex-col justify-between rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#5a6fa6]/40 transition-all duration-300 overflow-hidden group">
      {/* Imagem / Card Gráfico de Identidade */}
      <Link
        to={`/conteudo/${artigo.slug}`}
        tabIndex={-1}
        aria-hidden="true"
        className="relative w-full aspect-[16/9] bg-[#1e293b] overflow-hidden flex flex-col justify-between p-6 text-white border-b border-slate-100 select-none block"
      >
        {artigo.imagemCard ? (
          <>
            <img
              src={artigo.imagemCard}
              alt={artigo.imagemAlt || artigo.titulo}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            {/* Gradiente para legibilidade dos badges e textos */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-slate-900/20 group-hover:via-slate-950/30 transition-colors" />
          </>
        ) : (
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(#5a6fa6 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />
        )}

        <div className="flex items-center justify-between z-10">
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/40 text-slate-200 border border-white/20 backdrop-blur-md">
            Guia Operacional
          </span>
          <span className="text-[10px] font-mono text-slate-200 bg-black/30 px-2 py-0.5 rounded-md backdrop-blur-sm">
            Impacto · 24h
          </span>
        </div>

        <div className="z-10 mt-auto">
          <span className="text-xs font-bold text-[#8ba2d4] font-mono uppercase tracking-wider block mb-1 drop-shadow-sm">
            {artigo.categoria}
          </span>
          <p className="text-sm font-black text-white line-clamp-2 leading-snug group-hover:text-[#8ba2d4] transition-colors drop-shadow-md">
            {artigo.titulo}
          </p>
        </div>
      </Link>

      {/* Conteúdo do Card */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span
              className={`text-xs font-bold px-3 py-1 rounded-full border ${cores.bg} ${cores.text} ${cores.border}`}
            >
              {artigo.categoria}
            </span>
            {artigo.destaque && (
              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-slate-900 text-white font-mono">
                Destaque
              </span>
            )}
          </div>

          <h2 className="text-lg sm:text-xl font-black text-slate-900 leading-snug group-hover:text-[#5a6fa6] transition-colors">
            <Link to={`/conteudo/${artigo.slug}`} className="focus:outline-none focus:underline">
              {artigo.titulo}
            </Link>
          </h2>

          <p className="text-sm text-slate-600 leading-relaxed line-clamp-2">
            {artigo.resumo}
          </p>
        </div>

        {/* Metadados e CTA */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-mono">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>{artigo.tempoLeitura} min</span>
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <span>{dataFormatada}</span>
            </span>
          </div>

          <Link
            to={`/conteudo/${artigo.slug}`}
            className="min-h-[44px] inline-flex items-center gap-1.5 font-bold text-[#5a6fa6] group-hover:translate-x-1 transition-transform"
            aria-label={`Ler o guia completo: ${artigo.titulo}`}
          >
            <span>Ler o guia</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default CardArtigo;
