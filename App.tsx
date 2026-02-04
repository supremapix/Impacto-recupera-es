
import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Carousel } from './components/Carousel';
import { AccordionSection } from './components/Accordion';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { EmergencyBanner } from './components/EmergencyBanner';
import { BackToTop } from './components/BackToTop';
import { CoverageMap } from './components/CoverageMap';
import { FeaturedVisual } from './components/FeaturedVisual';
import { Testimonials } from './components/Testimonials';
import { NotFound } from './components/NotFound';
import { LocationShelf } from './components/LocationShelf';
import { LocationPage } from './components/LocationPage';

// Novos Componentes de Página
import { ServicesPage } from './pages/ServicesPage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { CoveragePage } from './pages/CoveragePage';
import { ContactPage } from './pages/ContactPage';

const HomePage: React.FC = () => (
  <div className="animate-page-enter">
    <Hero />
    <Carousel />
    <CoverageMap />
    <AccordionSection />
    <Testimonials />
    <FeaturedVisual />
    <LocationShelf />
    <EmergencyBanner />
    <section className="py-20 bg-gray-50">
      <ContactForm />
    </section>
  </div>
);

const App: React.FC = () => {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen bg-white">
      <Header />
      <div key={location.pathname} className="animate-page-enter">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/servicos" element={<ServicesPage />} />
          <Route path="/depoimentos" element={<TestimonialsPage />} />
          <Route path="/abrangencia" element={<CoveragePage />} />
          <Route path="/contato" element={<ContactPage />} />
          <Route path="/servicos-em/:city" element={<LocationPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
};

export default App;
