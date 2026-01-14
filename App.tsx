
import React from 'react';
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

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-white">
      <Header />
      <main>
        <div id="home">
          <Hero />
        </div>
        <EmergencyBanner />
        <Carousel />
        <CoverageMap />
        <AccordionSection />
        <Testimonials />
        <FeaturedVisual />
        <section id="contato" className="py-20 bg-gray-50">
          <ContactForm />
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
};

export default App;
