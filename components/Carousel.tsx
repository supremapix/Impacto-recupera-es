
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Clock, MapPin } from 'lucide-react';

const slides = [
  {
    id: 1,
    icon: <Clock size={40} className="text-primary mb-4 sm:mb-6" />,
    title: "Central 24 Horas",
    subtitle: "Prontidão Absoluta",
    text: "Equipe especializada em território nacional abrangendo PM, PC e Guardas Municipais experientes em serviços de pronta resposta, preservação de carga e averiguação tática."
  },
  {
    id: 2,
    icon: <MapPin size={40} className="text-primary mb-4 sm:mb-6" />,
    title: "Área de Atuação",
    subtitle: "Cobertura Nacional",
    text: "Mais de 630 profissionais cadastrados atendendo capitais, regiões metropolitanas e interiores de todo o Brasil com zero latência operacional."
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
    <section className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 relative">
        <div className="overflow-hidden rounded-[2rem] sm:rounded-[3rem] bg-gray-50 shadow-inner border border-gray-100">
          <div 
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides.map((slide) => (
              <div key={slide.id} className="min-w-full px-6 py-12 sm:p-20 text-center">
                <div className="flex justify-center">{slide.icon}</div>
                <h3 className="text-2xl sm:text-4xl md:text-5xl font-black text-accent mb-2 uppercase italic leading-tight">{slide.title}</h3>
                <p className="text-primary font-bold text-sm sm:text-xl mb-6 sm:mb-10 tracking-widest uppercase">{slide.subtitle}</p>
                <p className="text-gray-600 text-sm sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                  {slide.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="hidden sm:block">
          <button 
            onClick={prev}
            className="absolute left-6 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white shadow-xl hover:bg-primary hover:text-white transition-all"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={next}
            className="absolute right-6 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white shadow-xl hover:bg-primary hover:text-white transition-all"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {slides.map((_, i) => (
            <button 
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all ${current === i ? 'w-8 bg-primary' : 'w-2 bg-gray-300'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
