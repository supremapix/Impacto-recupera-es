import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SocialShare } from './components/SocialShare';
import { FloatingActions } from './components/FloatingActions';
import { NotFound } from './components/NotFound';
import { CITIES_DATA } from './src/data/cities';

// Páginas
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { CoveragePage } from './pages/CoveragePage';
import { ContactPage } from './pages/ContactPage';
import { CityLocalSeoPage } from './pages/CityLocalSeoPage';
import { ConteudoHubPage } from './pages/ConteudoHubPage';
import { ArtigoIndividualPage } from './pages/ArtigoIndividualPage';

/**
 * Componente de Fallback Inteligente para Rotas Catch-All
 * Conforme Regra Crítica de Roteamento React Router v6:
 * Verifica manualmente location.pathname para padrões com prefixo textual
 * sem barra separadora (ex.: /recuperacao-de-veiculos-em-indaiatuba ou /servicos-em-campinas)
 */
const FallbackOrCityRoute: React.FC = () => {
  const location = useLocation();
  const path = location.pathname.toLowerCase();

  const prefixes = [
    '/servicos-em/',
    '/servicos-em-',
    '/recuperacao-de-veiculos-em-',
    '/pronta-resposta-em-',
    '/conserto-de-geladeira-em-',
  ];

  for (const prefix of prefixes) {
    if (path.startsWith(prefix)) {
      const slug = path.slice(prefix.length).replace(/\/+$/, '');
      if (slug && CITIES_DATA[slug]) {
        return <CityLocalSeoPage citySlugOverride={slug} />;
      }
    }
  }

  return <NotFound />;
};

export const App: React.FC = () => {
  const location = useLocation();

  // Scroll suave para o topo em cada mudança de rota
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen bg-white flex flex-col justify-between text-gray-900 selection:bg-[#5a6fa6]/20 selection:text-gray-900">
      {/* Header Institucional com Acessibilidade e Skip Links */}
      <Header />

      {/* Compartilhamento Social Não Obstrutivo */}
      <SocialShare />

      {/* Conteúdo Principal com Transição */}
      <main id="main-content" className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/servicos" element={<ServicesPage />} />
          <Route path="/depoimentos" element={<TestimonialsPage />} />
          <Route path="/abrangencia" element={<CoveragePage />} />
          <Route path="/conteudo" element={<ConteudoHubPage />} />
          <Route path="/conteudo/:slug" element={<ArtigoIndividualPage />} />
          <Route path="/contato" element={<ContactPage />} />
          <Route path="/servicos-em/:city" element={<CityLocalSeoPage />} />
          <Route path="*" element={<FallbackOrCityRoute />} />
        </Routes>
      </main>

      {/* Rodapé Oficial com Dados E-E-A-T & NAP */}
      <Footer />

      {/* Botões Flutuantes Unificados (Compartilhamento + Contato Rápido + Voltar ao Topo) */}
      <FloatingActions />
    </div>
  );
};

export default App;
