import React from 'react';
import { Seo } from '../src/components/Seo';
import {
  generateLocalBusinessJsonLd,
  generateBreadcrumbJsonLd,
  generateFaqJsonLd,
} from '../src/lib/schema';
import { FAQ_DATA } from '../src/data/faq';
import { Hero } from '../components/Hero';
import { Carousel } from '../components/Carousel';
import { CoverageMap } from '../components/CoverageMap';
import { InstagramSection } from '../src/components/InstagramSection';
import { AccordionSection } from '../components/Accordion';
import { CargoEscortSection } from '../components/CargoEscortSection';
import { DepoimentosReais } from '../src/components/DepoimentosReais';
import { ProvasSection } from '../src/components/ProvasSection';
import { FeaturedVisual } from '../components/FeaturedVisual';
import { LocationShelf } from '../components/LocationShelf';
import { TacticalQA } from '../components/TacticalQA';
import { EmergencyBanner } from '../components/EmergencyBanner';
import { ContactForm } from '../components/ContactForm';
import Container from '../src/components/ui/Container';
import Section from '../src/components/ui/Section';

export const HomePage: React.FC = () => {
  const localBusinessSchema = generateLocalBusinessJsonLd();
  const breadcrumbSchema = generateBreadcrumbJsonLd([
    { name: 'Início', url: 'https://impactorecuperacoes.com.br/' },
  ]);
  const faqSchema = generateFaqJsonLd(
    FAQ_DATA.map((item) => ({
      pergunta: item.pergunta,
      resposta: item.resposta,
    }))
  );

  return (
    <>
      <Seo
        title="Impacto Recuperações | Pronta Resposta 24h para Veículos e Cargas"
        description="Especialistas em recuperação de veículos roubados e furtados, pronta resposta e preservação de cargas em todo o Brasil. Sede em Indaiatuba/SP. Central 24h."
        canonicalUrl="https://impactorecuperacoes.com.br/"
        structuredData={[localBusinessSchema, breadcrumbSchema, faqSchema]}
      />

      <div className="animate-page-enter">
        {/* Hero Section Oficial */}
        <Hero />

        {/* Carousel de Diferenciais */}
        <Carousel />

        {/* Mapa e Abrangência com Sede em Indaiatuba */}
        <CoverageMap />

        {/* Escolta Homologada com Disclaimer Legal */}
        <CargoEscortSection />

        {/* Feed Operacional Oficial do Instagram */}
        <InstagramSection />

        {/* Serviços em Detalhes */}
        <AccordionSection />

        {/* Provas Operacionais Reais & E-E-A-T */}
        <ProvasSection />

        {/* Depoimentos Verificados (Renderiza se houver dados reais) */}
        <DepoimentosReais />

        {/* Seção Visual de Equipamentos Táticos & CMD */}
        <FeaturedVisual />

        {/* Prateleira de Cidades Estratégicas */}
        <LocationShelf />

        {/* FAQ Estruturado Oficial */}
        <TacticalQA />

        {/* Banner de Verificação de Raio */}
        <EmergencyBanner />

        {/* Formulário de Contato Direto */}
        <Section className="bg-gray-50">
          <Container>
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-[#5a6fa6] bg-[#5a6fa6]/10 px-3 py-1 rounded-full">
                Atendimento Imediato
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mt-2">
                Fale com Nossa Central de Operações
              </h2>
              <p className="text-sm text-gray-600 mt-2">
                Plantão 24 horas para pronta resposta, varreduras de sinal e consultas corporativas.
              </p>
            </div>
            <ContactForm />
          </Container>
        </Section>
      </div>
    </>
  );
};

export default HomePage;
