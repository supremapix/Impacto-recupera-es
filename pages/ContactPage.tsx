import React from 'react';
import { Seo } from '../src/components/Seo';
import {
  generateLocalBusinessJsonLd,
  generateBreadcrumbJsonLd,
  generateFaqJsonLd,
} from '../src/lib/schema';
import { ContactForm } from '../components/ContactForm';
import { TacticalQA } from '../components/TacticalQA';
import { COMPANY } from '../src/data/company';
import { FAQ_DATA } from '../src/data/faq';
import { PhoneCall, Mail, MapPin, Clock, ShieldCheck, Building2 } from 'lucide-react';
import Container from '../src/components/ui/Container';
import Section from '../src/components/ui/Section';

export const ContactPage: React.FC = () => {
  const localBusinessSchema = generateLocalBusinessJsonLd();
  const breadcrumbSchema = generateBreadcrumbJsonLd([
    { name: 'Início', url: 'https://impactorecuperacoes.com.br/' },
    { name: 'Contato', url: 'https://impactorecuperacoes.com.br/contato' },
  ]);
  const faqSchema = generateFaqJsonLd(
    FAQ_DATA.map((f) => ({ pergunta: f.pergunta, resposta: f.resposta }))
  );

  return (
    <>
      <Seo
        title="Contato e Plantão 24h | Impacto Recuperações"
        description="Fale com a central 24 horas da Impacto Recuperações. Telefone (11) 96502-0011, e-mail contato@impactorecuperacoes.com.br. Sede em Indaiatuba/SP."
        canonicalUrl="https://impactorecuperacoes.com.br/contato"
        structuredData={[localBusinessSchema, breadcrumbSchema, faqSchema]}
      />

      <div className="bg-white">
        {/* Header */}
        <section className="pt-32 pb-16 bg-[#171922] text-white">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-[#8ba2d4] bg-white/10 px-3 py-1 rounded-full border border-white/15">
                Canais de Atendimento Oficial
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-4 mb-4 tracking-tight">
                Central de Atendimento 24 Horas
              </h1>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                Prontidão para acionamentos de emergência, orçamentos para frotas e dúvidas técnicas operacionais.
              </p>
            </div>
          </Container>
        </section>

        {/* Cards de Contato Rápido */}
        <Section className="bg-gray-50 -mt-8 relative z-10 pt-0">
          <Container>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center mb-3">
                  <PhoneCall className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono uppercase text-gray-500 font-bold">Plantão 24 Horas</span>
                <a
                  href={`tel:${COMPANY.telefone.e164}`}
                  className="text-base font-bold text-gray-900 hover:text-[#5a6fa6] mt-1 transition-colors"
                >
                  {COMPANY.telefone.exibicao}
                </a>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono uppercase text-gray-500 font-bold">WhatsApp Direto</span>
                <a
                  href={`https://wa.me/${COMPANY.whatsapp?.internacional || '5511965020011'}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-bold text-gray-900 hover:text-emerald-600 mt-1 transition-colors"
                >
                  {COMPANY.telefone.exibicao}
                </a>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#5a6fa6] flex items-center justify-center mb-3">
                  <Mail className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono uppercase text-gray-500 font-bold">E-mail Corporativo</span>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-sm font-bold text-gray-900 hover:text-[#5a6fa6] mt-1 transition-colors break-all"
                >
                  {COMPANY.email}
                </a>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-xl bg-gray-100 text-gray-800 flex items-center justify-center mb-3">
                  <Building2 className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono uppercase text-gray-500 font-bold">Sede Própria</span>
                <p className="text-xs font-bold text-gray-900 mt-1">
                  {COMPANY.endereco.resumo}
                </p>
              </div>
            </div>

            {/* Formulário Principal */}
            <ContactForm />
          </Container>
        </Section>

        {/* FAQ Estruturado */}
        <TacticalQA />
      </div>
    </>
  );
};

export default ContactPage;
