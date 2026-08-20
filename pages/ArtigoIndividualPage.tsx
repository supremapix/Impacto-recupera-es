import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { AlertCircle, ArrowLeft, BookOpen } from 'lucide-react';
import { getArtigoBySlug } from '../src/data/artigos';
import { ArtigoLayout } from '../src/components/conteudo/ArtigoLayout';
import { Seo } from '../src/components/Seo';
import { generateBreadcrumbJsonLd, generateFaqJsonLd, generateOrganizationJsonLd } from '../src/lib/schema';
import Container from '../src/components/ui/Container';

export const ArtigoIndividualPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const artigo = slug ? getArtigoBySlug(slug) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!artigo) {
    return (
      <div className="min-h-[75vh] flex items-center justify-center bg-slate-50 py-24">
        <Seo
          title="Artigo não encontrado | Impacto Recuperações"
          description="O guia solicitado não foi localizado em nossa base de conteúdo."
          noindex={true}
        />
        <Container className="text-center max-w-lg">
          <div className="w-16 h-16 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <AlertCircle className="w-8 h-8" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 mb-2">
            Guia não encontrado
          </h1>
          <p className="text-sm text-slate-600 mb-8 leading-relaxed">
            Não encontramos o artigo no endereço solicitado. Ele pode ter sido atualizado ou remanejado.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/conteudo"
              className="min-h-[46px] bg-[#5a6fa6] hover:bg-[#4b5e91] text-white font-bold px-6 py-3 rounded-xl text-sm transition-colors inline-flex items-center justify-center gap-2"
            >
              <BookOpen className="w-4 h-4" />
              <span>Ver Todos os Guias</span>
            </Link>
            <Link
              to="/"
              className="min-h-[46px] bg-white border border-slate-300 hover:bg-slate-100 text-slate-800 font-bold px-6 py-3 rounded-xl text-sm transition-colors inline-flex items-center justify-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Voltar ao Início</span>
            </Link>
          </div>
        </Container>
      </div>
    );
  }

  const canonicalUrl = `https://www.impactorecuperacoes.com.br/conteudo/${artigo.slug}`;

  const breadcrumbs = [
    { name: 'Início', url: 'https://www.impactorecuperacoes.com.br/' },
    { name: 'Conteúdo', url: 'https://www.impactorecuperacoes.com.br/conteudo' },
    { name: artigo.titulo, url: canonicalUrl },
  ];

  // Schema do Artigo
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${canonicalUrl}#article`,
    isPartOf: {
      '@type': 'WebPage',
      '@id': canonicalUrl,
      url: canonicalUrl,
      name: artigo.tituloSeo,
    },
    headline: artigo.titulo,
    description: artigo.descricao,
    inLanguage: 'pt-BR',
    datePublished: artigo.publicadoEm,
    dateModified: artigo.atualizadoEm,
    mainEntityOfPage: canonicalUrl,
    articleSection: artigo.categoria,
    author: {
      '@type': 'Organization',
      name: 'Impacto Recuperações',
      url: 'https://www.impactorecuperacoes.com.br/',
    },
    publisher: {
      '@id': 'https://www.impactorecuperacoes.com.br/#organization',
    },
    ...(artigo.imagemCard ? { image: artigo.imagemCard } : {}),
    wordCount: artigo.tempoLeitura * 200,
  };

  const breadcrumbSchema = generateBreadcrumbJsonLd(breadcrumbs);
  const faqSchema = artigo.faq && artigo.faq.length > 0 ? generateFaqJsonLd(artigo.faq) : null;

  const structuredData = [
    generateOrganizationJsonLd(),
    articleSchema,
    breadcrumbSchema,
    ...(faqSchema ? [faqSchema] : []),
  ];

  return (
    <>
      <Seo
        title={`${artigo.tituloSeo} | Impacto Recuperações`}
        description={artigo.descricao}
        canonicalUrl={canonicalUrl}
        ogType="article"
        ogImage={artigo.imagemCard}
        structuredData={structuredData}
      />
      <ArtigoLayout artigo={artigo} />
    </>
  );
};

export default ArtigoIndividualPage;
