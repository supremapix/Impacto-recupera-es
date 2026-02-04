
import React from 'react';
import { Routes, Route } from 'react-router-dom';
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

const HomePage: React.FC = () => (
  <main>
    <div id="home">
      <Hero />
    </div>
    <Carousel />
    <CoverageMap />
    <AccordionSection />
    <Testimonials />
    <FeaturedVisual />
    <LocationShelf />
    <EmergencyBanner />
    <section id="contato" className="py-20 bg-gray-50">
      <ContactForm />
    </section>
  </main>
);

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-white">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/servicos-em/:city" element={<LocationPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
};

export default App;
