import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FaqItem {
  pergunta: string;
  resposta: string;
}

interface FaqArtigoProps {
  itens: FaqItem[];
  titulo?: string;
}

export const FaqArtigo: React.FC<FaqArtigoProps> = ({
  itens,
  titulo = 'Perguntas Frequentes',
}) => {
  const [abertoIndex, setAbertoIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setAbertoIndex((prev) => (prev === index ? null : index));
  };

  if (!itens || itens.length === 0) return null;

  return (
    <section className="my-12 pt-8 border-t border-slate-200" aria-label={titulo}>
      <div className="flex items-center gap-2.5 mb-6">
        <div className="w-9 h-9 rounded-xl bg-[#5a6fa6]/10 text-[#5a6fa6] flex items-center justify-center">
          <HelpCircle className="w-5 h-5" />
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
          {titulo}
        </h2>
      </div>

      <div className="space-y-3">
        {itens.map((item, idx) => {
          const isAberto = abertoIndex === idx;
          const faqId = `faq-artigo-${idx}`;
          const contentId = `faq-content-${idx}`;

          return (
            <div
              key={idx}
              className="rounded-2xl border border-slate-200 bg-white overflow-hidden transition-colors hover:border-slate-300"
            >
              <h3>
                <button
                  id={faqId}
                  type="button"
                  onClick={() => toggleIndex(idx)}
                  aria-expanded={isAberto}
                  aria-controls={contentId}
                  className="w-full text-left px-5 py-4 min-h-[52px] flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#5a6fa6] focus:bg-slate-50"
                >
                  <span className="leading-snug">{item.pergunta}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#5a6fa6] shrink-0 transition-transform duration-200 ${
                      isAberto ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>
              </h3>

              <div
                id={contentId}
                role="region"
                aria-labelledby={faqId}
                hidden={!isAberto}
                className={`px-5 pb-5 pt-1 text-slate-700 text-sm sm:text-base leading-relaxed border-t border-slate-100 ${
                  isAberto ? 'block' : 'hidden'
                }`}
              >
                <p>{item.resposta}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FaqArtigo;
