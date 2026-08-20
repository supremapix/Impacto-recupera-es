import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ShieldCheck } from 'lucide-react';
import { FAQ_INSTITUCIONAL, FaqItem } from '../src/data/faq';
import Container from '../src/components/ui/Container';
import Section from '../src/components/ui/Section';

interface TacticalQAProps {
  cityName?: string;
  items?: FaqItem[];
  title?: string;
  subtitle?: string;
}

/**
 * Componente de Perguntas Frequentes Táticas (PARTE 10 & 12)
 * Utiliza o Source of Truth em src/data/faq.ts com suporte a acordeom acessível.
 */
export const TacticalQA: React.FC<TacticalQAProps> = ({
  cityName,
  items,
  title = 'Perguntas Frequentes & Protocolos Operacionais',
  subtitle = 'Respostas diretas e técnicas sobre os procedimentos de pronta resposta 24 horas.',
}) => {
  const faqList: FaqItem[] = items || FAQ_INSTITUCIONAL;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section id="faq-tatico" className="bg-gray-50 border-t border-b border-gray-200">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-[#5a6fa6] px-4 py-1.5 rounded-full mb-4 font-bold text-xs tracking-wider uppercase border border-blue-100">
            <HelpCircle className="w-4 h-4 text-[#5a6fa6]" />
            <span>{cityName ? `Dúvidas Frequentes: ${cityName}` : 'Central de Dúvidas'}</span>
          </div>

          <h2 className="t-h2 font-black text-gray-900 tracking-tight mb-4 text-balance">
            {cityName ? `Como funciona a pronta resposta em ${cityName}` : title}
          </h2>

          <p className="t-body text-gray-600 text-pretty">
            {cityName
              ? `Orientações operacionais sobre tempo de resposta, acionamento e recuperação de veículos na região de ${cityName}.`
              : subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqList.map((item, index) => {
            const isOpen = openIndex === index;
            const questionText = cityName
              ? item.pergunta.replace(/em Indaiatuba|no Brasil/gi, `em ${cityName}`)
              : item.pergunta;
            const answerText = cityName
              ? item.resposta.replace(/Indaiatuba/g, cityName)
              : item.resposta;

            return (
              <div
                key={item.id || index}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden transition-colors duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id || index}`}
                  id={`faq-btn-${item.id || index}`}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-bold text-gray-900 hover:text-[#5a6fa6] transition-colors focus:outline-none focus:ring-2 focus:ring-[#5a6fa6] rounded-2xl"
                >
                  <span className="text-base sm:text-lg flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-[#5a6fa6] shrink-0 mt-0.5" />
                    <span>{questionText}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#5a6fa6]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${item.id || index}`}
                    role="region"
                    aria-labelledby={`faq-btn-${item.id || index}`}
                    className="px-5 sm:px-6 pb-6 pt-1 text-gray-700 text-sm sm:text-base leading-relaxed border-t border-gray-100"
                  >
                    <p className="max-w-[70ch] text-pretty">{answerText}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};

export default TacticalQA;
