import React from 'react';
import { Seo } from '../src/components/Seo';
import {
  generateLocalBusinessJsonLd,
  generateBreadcrumbJsonLd,
  generateFaqJsonLd,
} from '../src/lib/schema';
import { AccordionSection } from '../components/Accordion';
import { Carousel } from '../components/Carousel';
import { CargoEscortSection } from '../components/CargoEscortSection';
import { TacticalQA } from '../components/TacticalQA';
import { ContactForm } from '../components/ContactForm';
import { FAQ_DATA } from '../src/data/faq';
import { ShieldCheck, Target, Radio, Clock, FileCheck, CheckCircle2 } from 'lucide-react';
import Container from '../src/components/ui/Container';
import Section from '../src/components/ui/Section';

export const ServicesPage: React.FC = () => {
  const localBusinessSchema = generateLocalBusinessJsonLd();
  const breadcrumbSchema = generateBreadcrumbJsonLd([
    { name: 'Início', url: 'https://impactorecuperacoes.com.br/' },
    { name: 'Serviços', url: 'https://impactorecuperacoes.com.br/servicos' },
  ]);
  const faqSchema = generateFaqJsonLd(
    FAQ_DATA.map((f) => ({ pergunta: f.pergunta, resposta: f.resposta }))
  );

  return (
    <>
      <Seo
        title="Serviços Especializados em Pronta Resposta e Recuperação | Impacto Recuperações"
        description="Recuperação de veículos roubados e furtados com tecnologia RF anti-jammer, pronta resposta de cargas, varredura de sinais e apoio com escolta homologada pela PF."
        canonicalUrl="https://impactorecuperacoes.com.br/servicos"
        structuredData={[localBusinessSchema, breadcrumbSchema, faqSchema]}
      />

      <div className="bg-white">
        {/* Header da Página */}
        <section className="pt-32 pb-16 bg-[#171922] text-white">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-[#8ba2d4] bg-white/10 px-3 py-1 rounded-full border border-white/15">
                Capacidade Técnica & Operacional
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-4 mb-4 tracking-tight">
                Soluções em Pronta Resposta e Recuperação
              </h1>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                Tecnologia avançada de rastreamento por radiofrequência, agentes em campo e central ativa 24 horas por dia para proteger seu patrimônio e sua carga.
              </p>
            </div>
          </Container>
        </section>

        {/* Pilares Técnicos */}
        <Section className="bg-gray-50 border-b border-gray-200">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#5a6fa6]/10 text-[#5a6fa6] flex items-center justify-center mb-4">
                  <Radio className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Varredura RF Anti-Jammer</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Equipamentos detectores de radiofrequência capazes de localizar veículos mesmo sob ação de inibidores de sinal GPS/GPRS instalados por criminosos.
                </p>
              </div>

              <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#5a6fa6]/10 text-[#5a6fa6] flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Central 24h & Triagem Ágil</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Operadores de prontidão permanente para receber alertas, checar dados de telemetria e acionar imediatamente a viatura mais próxima.
                </p>
              </div>

              <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#5a6fa6]/10 text-[#5a6fa6] flex items-center justify-center mb-4">
                  <FileCheck className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Laudo & Apoio Policial</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Acompanhamento até a delegacia de polícia competente, preservação do local e emissão de laudo técnico fotográfico da recuperação.
                </p>
              </div>
            </div>
          </Container>
        </Section>

        {/* Carousel de Diferenciais */}
        <div className="py-8">
          <Carousel />
        </div>

        {/* Accordion Detalhado */}
        <AccordionSection />

        {/* Escolta Homologada */}
        <CargoEscortSection />

        {/* FAQ Estruturado */}
        <TacticalQA />

        {/* Formulário de Contato */}
        <Section className="bg-gray-50">
          <Container className="max-w-4xl">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-black text-gray-900">
                Solicite uma Consulta Operacional
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                Fale com nossa central para orçamentos de pronta resposta para frotas, locadoras e seguradoras.
              </p>
            </div>
            <ContactForm />
          </Container>
        </Section>
      </div>
    </>
  );
};

export default ServicesPage;
