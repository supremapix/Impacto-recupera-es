import React, { useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { BookOpen, ShieldCheck, ChevronRight, Filter } from 'lucide-react';
import { ARTIGOS, Artigo, getArtigosPorCategoria } from '../src/data/artigos';
import { CardArtigo } from '../src/components/conteudo/CardArtigo';
import { CtaCentral } from '../src/components/conteudo/CtaCentral';
import { Seo } from '../src/components/Seo';
import Container from '../src/components/ui/Container';
import { generateBreadcrumbJsonLd, generateOrganizationJsonLd } from '../src/lib/schema';

const CATEGORIAS: Array<'Todas' | Artigo['categoria']> = [
  'Todas',
  'Emergência',
  'Prevenção',
  'Cargas',
  'Como contratar',
  'Regional',
];

export const ConteudoHubPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoriaParam = searchParams.get('categoria') || 'Todas';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categoriaParam]);

  const artigosFiltrados = getArtigosPorCategoria(categoriaParam);

  const handleSelectCategoria = (cat: string) => {
    if (cat === 'Todas') {
      searchParams.delete('categoria');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ categoria: cat });
    }
  };

  const breadcrumbs = [
    { name: 'Início', url: 'https://www.impactorecuperacoes.com.br/' },
    { name: 'Conteúdo', url: 'https://www.impactorecuperacoes.com.br/conteudo' },
  ];

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Conteúdo sobre roubo, recuperação e segurança de veículos',
    description:
      'Guias práticos sobre o que fazer após roubo de veículo, diferenças entre rastreador, seguro e pronta resposta, e como contratar uma empresa de recuperação. Impacto Recuperações.',
    url: 'https://www.impactorecuperacoes.com.br/conteudo',
    publisher: {
      '@id': 'https://www.impactorecuperacoes.com.br/#organization',
    },
    hasPart: ARTIGOS.map((artigo) => ({
      '@type': 'Article',
      headline: artigo.titulo,
      url: `https://www.impactorecuperacoes.com.br/conteudo/${artigo.slug}`,
      datePublished: artigo.publicadoEm,
      dateModified: artigo.atualizadoEm,
    })),
  };

  return (
    <>
      <Seo
        title="Conteúdo: Roubo, Recuperação e Segurança Veicular | Impacto"
        description="Guias práticos sobre o que fazer após roubo de veículo, diferenças entre rastreador, seguro e pronta resposta, e como contratar uma empresa de recuperação. Impacto Recuperações."
        canonicalUrl="https://www.impactorecuperacoes.com.br/conteudo"
        structuredData={[
          generateOrganizationJsonLd(),
          generateBreadcrumbJsonLd(breadcrumbs),
          collectionSchema,
        ]}
      />

      <div className="pt-32 pb-20 bg-slate-50 min-h-screen">
        <Container>
          {/* Breadcrumb Visual */}
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
              <li className="text-[#5a6fa6] font-bold" aria-current="page">
                Conteúdo
              </li>
            </ol>
          </nav>

          {/* Cabeçalho do Hub */}
          <header className="max-w-4xl mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#5a6fa6]/10 text-[#5a6fa6] text-xs font-mono font-bold uppercase tracking-wider mb-4">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Base de Conhecimento Operacional</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight leading-[1.15] mb-6">
              Conteúdo sobre roubo, recuperação e segurança de veículos
            </h1>

            {/* Bloco de Resposta Direta de 40 a 60 palavras */}
            <div
              className="p-6 rounded-2xl bg-white border-l-4 border-[#5a6fa6] border-y border-r border-slate-200/80 shadow-sm"
              role="region"
              aria-label="Sobre este acervo"
            >
              <p className="text-slate-800 text-base sm:text-lg leading-relaxed">
                Reunimos orientações práticas e procedimentos técnicos sobre o que fazer após o roubo de veículos, como funcionam as operações de pronta resposta e telemetria, e como escolher empresas sérias de recuperação e segurança logística em conformidade com as normas oficiais.
              </p>
            </div>
          </header>

          {/* Filtros de Categoria */}
          <div className="mb-10" aria-label="Filtro por categoria">
            <div className="flex items-center gap-2 mb-3 text-xs font-mono font-bold text-slate-600 uppercase tracking-wider">
              <Filter className="w-3.5 h-3.5 text-[#5a6fa6]" />
              <span>Filtrar por Categoria:</span>
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-2.5" role="toolbar" aria-label="Categorias de artigos">
              {CATEGORIAS.map((cat) => {
                const isActive = (cat === 'Todas' && !searchParams.get('categoria')) || categoriaParam.toLowerCase() === cat.toLowerCase();
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => handleSelectCategoria(cat)}
                    aria-pressed={isActive}
                    className={`min-h-[44px] px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center cursor-pointer ${
                      isActive
                        ? 'bg-slate-900 text-white shadow-md'
                        : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-100/70'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Grade de Cards de Artigos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 auto-rows-fr items-stretch gap-6 mb-16">
            {artigosFiltrados.map((artigo) => (
              <CardArtigo key={artigo.slug} artigo={artigo} />
            ))}
          </div>

          {/* CTA de Urgência no final da página */}
          <CtaCentral />
        </Container>
      </div>
    </>
  );
};

export default ConteudoHubPage;
