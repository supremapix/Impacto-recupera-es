
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Clock, MapPin } from 'lucide-react';

const slides = [
  {
    id: 1,
    icon: <Clock size={48} className="text-primary mb-4" />,
    title: "Nossa Central 24 Horas",
    subtitle: "Trabalha 7 dias por semana",
    text: "Equipe/parceiros em todo território nacional, abrangendo profissionais, entre outros, policiais militares, civis, guardas municipais, experientes em prestação de serviços (armados ou desarmados) de pronta resposta, preservação de carga, averiguação, entre outras atividades."
  },
  {
    id: 2,
    icon: <MapPin size={48} className="text-primary mb-4" />,
    title: "Nossa Área de Atuação",
    subtitle: "Cobertura Nacional",
    text: "Hoje temos mais de 630 profissionais cadastrados em nosso sistema, que nos atendem (dependendo de sua disponibilidade) 24hs nos 7 dias da semana. Atendemos capitais, regiões metropolitanas e interiores de todo o Brasil."
  }
];

export const Carousel: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prev = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 relative">
        <div className="overflow-hidden rounded-3xl bg-gray-50 shadow-inner border border-gray-100">
          <div 
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides.map((slide) => (
              <div key={slide.id} className="min-w-full p-10 md:p-20 text-center">
                <div className="flex justify-center">{slide.icon}</div>
                <h3 className="text-3xl md:text-5xl font-black text-accent mb-2 uppercase italic">{slide.title}</h3>
                <p className="text-primary font-bold text-xl mb-8 tracking-widest">{slide.subtitle}</p>
                <p className="text-gray-600 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
                  {slide.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <button 
          onClick={prev}
          className="absolute left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white shadow-xl hover:bg-primary hover:text-white transition-all hidden md:block"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={next}
          className="absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white shadow-xl hover:bg-primary hover:text-white transition-all hidden md:block"
        >
          <ChevronRight size={24} />
        </button>

        <div className="flex justify-center gap-2 mt-8">
          {slides.map((_, i) => (
            <button 
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all ${current === i ? 'w-8 bg-primary' : 'w-2 bg-gray-300'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
