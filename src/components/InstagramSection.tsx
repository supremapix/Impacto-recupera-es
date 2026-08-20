import React, { useState, useEffect, useRef } from 'react';
import { Instagram, ArrowRight, ShieldCheck } from 'lucide-react';
import { COMPANY } from '../data/company';

export interface InstagramSectionProps {
  className?: string;
}

/**
 * Hook utilitário useInView com IntersectionObserver (PARTE 9.5 & 9.6)
 */
function useInView<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<T | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.disconnect();
      }
    }, options || { threshold: 0.15 });

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [options]);

  return { ref, isInView };
}

/**
 * Seção Oficial do Instagram (PARTE 9)
 * Exibe o perfil real @impacto_recuperacoes com embed verificado e sem fotos de stock.
 */
export const InstagramSection: React.FC<InstagramSectionProps> = ({ className = '' }) => {
  const { ref: sectionRef, isInView } = useInView<HTMLElement>();

  return (
    <section
      ref={sectionRef}
      id="instagram-social-real"
      className={`relative overflow-hidden bg-gray-50/70 border-y border-gray-200 py-12 md:py-20 px-4 ${className}`}
    >
      {/* 9.1 Luz difusa decorativa */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-gradient-to-br from-pink-500/10 via-amber-500/10 to-transparent blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-gradient-to-tl from-purple-500/10 via-pink-500/10 to-transparent blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl">
        {/* 9.2 Cabeçalho */}
        <div
          className={`text-center mb-10 transition-all duration-700 ease-out ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#DD2A7B] via-[#8134AF] to-[#515BD4] text-white shadow-sm mb-4">
            <Instagram className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span className="font-mono text-xs uppercase font-bold tracking-wider">
              Social Real {COMPANY.redes.instagramUsername}
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase text-gray-950 tracking-tight mb-3">
            Siga-nos no Instagram ·{' '}
            <span className="text-[#5a6fa6] underline decoration-pink-500/40 decoration-2 underline-offset-4">
              {COMPANY.redes.instagramUsername}
            </span>
          </h3>

          <p className="max-w-2xl mx-auto text-gray-600 font-medium text-sm sm:text-base leading-relaxed text-pretty">
            Acompanhe nossos stories em tempo real, bastidores táticos, movimentação da central 24h
            e a rotina das equipes de campo em todo o Brasil.
          </p>
        </div>

        {/* 9.3 Feed Embed Real */}
        <div
          className={`mx-auto max-w-md transition-all duration-700 delay-100 ease-out ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="rounded-3xl bg-white border border-gray-200 p-2 sm:p-3 shadow-xl hover:scale-[1.01] transition-transform duration-300 overflow-hidden">
            {isInView ? (
              <iframe
                src="https://www.instagram.com/impacto_recuperacoes/embed"
                className="w-full aspect-[9/11] md:aspect-[4/5] rounded-2xl border-0 bg-gray-50"
                title="Feed Oficial da Impacto Recuperações no Instagram"
                loading="lazy"
                allowTransparency
              />
            ) : (
              <div className="w-full aspect-[9/11] md:aspect-[4/5] rounded-2xl bg-gray-100 animate-pulse flex items-center justify-center">
                <Instagram className="w-12 h-12 text-gray-300" />
              </div>
            )}
          </div>
        </div>

        {/* 9.4 CTA e Selo de Autenticidade */}
        <div
          className={`mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-200 ease-out ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <a
            href={COMPANY.redes.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full sm:w-auto min-h-[52px] px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white font-bold text-sm sm:text-base inline-flex items-center justify-center gap-3 shadow-lg hover:brightness-110 transition-all duration-200"
          >
            <Instagram className="w-5 h-5 shrink-0" aria-hidden="true" />
            <span>Seguir no Instagram Oficial</span>
            <ArrowRight className="w-4 h-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
          </a>

          <div className="w-full sm:w-auto min-h-[52px] px-5 py-3 rounded-xl bg-white border border-gray-200 text-gray-800 text-xs sm:text-sm font-mono inline-flex items-center justify-center gap-2.5 shadow-sm">
            <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" aria-hidden="true" />
            <span>Operações reais · Indaiatuba/SP e todo o Brasil</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
