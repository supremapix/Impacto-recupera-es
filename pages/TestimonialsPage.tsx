import React from 'react';
import { Seo } from '../src/components/Seo';
import {
  generateLocalBusinessJsonLd,
  generateBreadcrumbJsonLd,
} from '../src/lib/schema';
import { DepoimentosReais } from '../src/components/DepoimentosReais';
import { ProvasSection } from '../src/components/ProvasSection';
import { InstagramSection } from '../src/components/InstagramSection';
import { ContactForm } from '../components/ContactForm';
import { COMPANY } from '../src/data/company';
import { ShieldCheck, Award, FileCheck2, Instagram } from 'lucide-react';
import Container from '../src/components/ui/Container';
import Section from '../src/components/ui/Section';

export const TestimonialsPage: React.FC = () => {
  const localBusinessSchema = generateLocalBusinessJsonLd();
  const breadcrumbSchema = generateBreadcrumbJsonLd([
    { name: 'Início', url: 'https://impactorecuperacoes.com.br/' },
    { name: 'Provas e Depoimentos', url: 'https://impactorecuperacoes.com.br/depoimentos' },
  ]);

  return (
    <>
      <Seo
        title="Provas Operacionais e Casos Reais | Impacto Recuperações"
        description="Conheça nossos registros operacionais reais de recuperação de veículos e cargas. Transparência, conformidade jurídica e integridade E-E-A-T."
        canonicalUrl="https://impactorecuperacoes.com.br/depoimentos"
        structuredData={[localBusinessSchema, breadcrumbSchema]}
      />

      <div className="bg-white">
        {/* Header */}
        <section className="pt-32 pb-16 bg-[#171922] text-white">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full mb-4 border border-white/15">
                <ShieldCheck className="w-4 h-4 text-[#8ba2d4]" />
                <span className="text-xs font-bold uppercase tracking-wider text-gray-200">
                  Transparência e E-E-A-T
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
                Casos Reais & Provas Operacionais
              </h1>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                Resultados comprovados em campo, documentados com laudos, registros policiais e acompanhamento operacional em tempo real.
              </p>
            </div>
          </Container>
        </section>

        {/* Depoimentos Verificados (Renderiza se houver cadastros reais) */}
        <DepoimentosReais />

        {/* Provas Operacionais Reais */}
        <ProvasSection />

        {/* Feed Operacional Oficial do Instagram */}
        <InstagramSection />

        {/* Formulário de Atendimento */}
        <Section className="bg-gray-50 border-t border-gray-200">
          <Container className="max-w-4xl">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-black text-gray-900">
                Fale com Nossos Especialistas
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                Proteja sua frota ou consulte soluções para o seu veículo com nossa equipe técnica.
              </p>
            </div>
            <ContactForm />
          </Container>
        </Section>
      </div>
    </>
  );
};

export default TestimonialsPage;
