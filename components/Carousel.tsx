
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Clock, MapPin, ShieldCheck, Zap } from 'lucide-react';
import Container from '../src/components/ui/Container';

const slides = [
  {
    id: 1,
    icon: <Clock className="w-8 h-8 text-[#5a6fa6]" />,
    tag: 'Operação Ininterrupta',
    title: 'Central Tática 24 Horas',
    subtitle: 'Prontidão Operacional Imediata',
    text: 'Equipes especializadas de pronta resposta com atuação estratégica em território nacional, capacitadas na preservação de veículos, frotas e cargas de alto valor.'
  },
  {
    id: 2,
    icon: <MapPin className="w-8 h-8 text-[#5a6fa6]" />,
    tag: 'Cobertura Estratégica',
    title: 'Rede de Homologados em Todo o Brasil',
    subtitle: 'Capitais, Interiores e Eixos Rodoviários',
    text: 'Mais de 630 profissionais credenciados atuando com velocidade de deslocamento para averiguação in loco e apoio às autoridades policiais.'
  },
  {
    id: 3,
    icon: <Zap className="w-8 h-8 text-[#5a6fa6]" />,
    tag: 'Tecnologia de Campo',
    title: 'Varredura Anti-Jammer Avançada',
    subtitle: 'Localização em Zonas Críticas',
    text: 'Equipamentos portáteis de detecção por radiofrequência capazes de rastrear e localizar sinais mesmo sob a ação de bloqueadores ilegais.'
  }
];

export const Carousel: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prev = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <section className="py-12 sm:py-16 bg-slate-50/70 border-y border-slate-100">
      <Container>
        <div className="relative max-w-4xl mx-auto">
          {/* Card Principal */}
          <div className="relative overflow-hidden rounded-3xl bg-white border border-slate-200/80 shadow-sm p-6 sm:p-10 md:p-12 text-center transition-all duration-300">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {slides.map((slide) => (
                <div key={slide.id} className="min-w-full flex flex-col items-center px-2 sm:px-6">
                  {/* Ícone e Tag */}
                  <div className="w-14 h-14 rounded-2xl bg-slate-100/80 border border-slate-200 flex items-center justify-center mb-4">
                    {slide.icon}
                  </div>

                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#5a6fa6] bg-[#5a6fa6]/10 px-3 py-1 rounded-full mb-3">
                    {slide.tag}
                  </span>

                  <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mb-1.5">
                    {slide.title}
                  </h3>

                  <p className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">
                    {slide.subtitle}
                  </p>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl text-pretty">
                    {slide.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Controles Laterais Sutis */}
            <button 
              type="button"
              onClick={prev}
              aria-label="Slide anterior"
              className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 border border-slate-200 text-slate-700 shadow-md hover:bg-[#5a6fa6] hover:text-white items-center justify-center transition-all active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button 
              type="button"
              onClick={next}
              aria-label="Próximo slide"
              className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 border border-slate-200 text-slate-700 shadow-md hover:bg-[#5a6fa6] hover:text-white items-center justify-center transition-all active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Indicadores de Paginação */}
          <div className="flex justify-center items-center gap-2 mt-5">
            {slides.map((_, i) => (
              <button 
                key={i}
                type="button"
                onClick={() => setCurrent(i)}
                aria-label={`Ir para o slide ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  current === i ? 'w-7 bg-[#5a6fa6]' : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Carousel;

