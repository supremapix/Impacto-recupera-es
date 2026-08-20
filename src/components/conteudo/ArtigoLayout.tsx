import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Calendar, Clock, AlertTriangle, ShieldCheck } from 'lucide-react';
import { Artigo } from '../../data/artigos';
import { SumarioArtigo } from './SumarioArtigo';
import { BlocoRenderer } from './BlocoRenderer';
import { FaqArtigo } from './FaqArtigo';
import { CtaCentral } from './CtaCentral';
import { ArtigosRelacionados } from './ArtigosRelacionados';
import Container from '../ui/Container';

interface ArtigoLayoutProps {
  artigo: Artigo;
}

export const ArtigoLayout: React.FC<ArtigoLayoutProps> = ({ artigo }) => {
  const dataPublicacao = new Date(artigo.publicadoEm).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  const dataAtualizacao = new Date(artigo.atualizadoEm).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className="pt-28 pb-20 bg-white text-slate-900">
      <Container>
        {/* 1. Breadcrumb Visível */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex flex-wrap items-center gap-2 text-xs text-slate-500 font-mono">
            <li>
              <Link to="/" className="hover:text-slate-900 transition-colors">
                Início
              </Link>
            </li>
            <li>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            </li>
            <li>
              <Link to="/conteudo" className="hover:text-slate-900 transition-colors">
                Conteúdo
              </Link>
            </li>
            <li>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            </li>
            <li className="text-[#5a6fa6] font-bold truncate max-w-[240px] sm:max-w-md" aria-current="page">
              {artigo.titulo}
            </li>
          </ol>
        </nav>

        {/* Cabeçalho do Artigo */}
        <header className="max-w-[68ch] mx-auto mb-10 text-center sm:text-left">
          {/* 2. Categoria */}
          <div className="mb-4">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold font-mono tracking-wider uppercase bg-[#5a6fa6]/10 text-[#5a6fa6] border border-[#5a6fa6]/20">
              {artigo.categoria}
            </span>
          </div>

          {/* 3. H1 */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight leading-[1.15] mb-6">
            {artigo.titulo}
          </h1>

          {/* 4. Linha de Metadados */}
          <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs sm:text-sm text-slate-500 font-mono border-b border-slate-200 pb-6 mb-8">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-slate-400" />
              <span>Publicado em {dataPublicacao}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-slate-300" />
              <span>Atualizado em {dataAtualizacao}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-slate-400" />
              <span>{artigo.tempoLeitura} min de leitura</span>
            </div>
            <div className="flex items-center gap-1.5 text-emerald-700 font-bold">
              <ShieldCheck className="w-4 h-4" />
              <span>Revisão Técnica Operacional</span>
            </div>
          </div>

          {/* 5. BLOCO DE RESPOSTA DIRETA (Destaque Visual) */}
          <div
            className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50/40 border-l-4 border-[#5a6fa6] border-y border-r border-slate-200/80 shadow-sm"
            role="region"
            aria-label="Resposta direta ao leitor"
          >
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#5a6fa6] mb-2 flex items-center gap-1.5">
              <span>Resposta Rápida</span>
            </div>
            <p className="text-slate-900 text-base sm:text-lg leading-relaxed font-medium">
              {artigo.resumo}
            </p>
          </div>

          {/* Imagem Destacada do Artigo */}
          {artigo.imagemCard && (
            <div className="mt-8 rounded-3xl overflow-hidden shadow-md border border-slate-200 bg-slate-900 relative aspect-[16/9] sm:aspect-[21/9]">
              <img
                src={artigo.imagemCard}
                alt={artigo.imagemAlt || artigo.titulo}
                className="w-full h-full object-cover"
                loading="eager"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-4 right-4 sm:bottom-4 sm:left-6 sm:right-6 flex items-center justify-between text-xs text-white font-mono drop-shadow-md">
                <span className="bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
                  Impacto Recuperações · Operações 24h
                </span>
                <span className="bg-[#5a6fa6]/80 backdrop-blur-md text-white font-bold px-2.5 py-1 rounded-full">
                  {artigo.categoria}
                </span>
              </div>
            </div>
          )}
        </header>

        {/* Layout de Conteúdo com Sumário Sticky (xl) e Corpo Principal */}
        <div className="flex flex-col xl:flex-row gap-12 max-w-6xl mx-auto">
          {/* 6. Sumário Lateral */}
          <SumarioArtigo corpo={artigo.corpo} />

          {/* 7. Corpo do Artigo */}
          <main className="flex-1 min-w-0">
            <BlocoRenderer blocos={artigo.corpo} />

            {/* 8. FAQ */}
            <FaqArtigo itens={artigo.faq} />

            {/* 9. Aviso da Regra R6 (se aplicável) */}
            {artigo.temAvisoLegal && (
              <div className="my-10 p-5 rounded-2xl bg-amber-50/80 border border-amber-200 text-amber-900 text-xs sm:text-sm leading-relaxed flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <p>
                  <strong>Aviso Legal Importante:</strong> Este conteúdo tem caráter informativo e não substitui orientação jurídica ou o procedimento oficial do órgão competente. Procedimentos variam entre estados e podem mudar; confirme sempre no canal oficial.
                </p>
              </div>
            )}

            {/* 10. CTA Central ao Final */}
            <CtaCentral />

            {/* 11 & 12. Artigos e Cidades Relacionadas */}
            <ArtigosRelacionados
              slugs={artigo.relacionados}
              cidadesSlugs={artigo.cidadesRelacionadas}
            />
          </main>
        </div>
      </Container>
    </div>
  );
};

export default ArtigoLayout;
