
import React from 'react';
import { Quote, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company?: string;
  content: string;
  image: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ricardo Mendes",
    role: "Diretor de Logística",
    company: "TransExpress",
    content: "Tivemos uma carga de alto valor interceptada em uma zona de risco. A Impacto Recuperações agiu em menos de 25 minutos. A agilidade e o profissionalismo da equipe foram determinantes para recuperarmos o patrimônio intacto.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200",
    rating: 5
  },
  {
    id: 2,
    name: "Ana Cláudia Silva",
    role: "Proprietária de Veículo",
    content: "Meu carro foi furtado durante a noite. Liguei para a central e em poucas horas o sinal foi rastreado e o veículo recuperado. O atendimento humano e o suporte emocional da equipe no DP fizeram toda a diferença.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200",
    rating: 5
  },
  {
    id: 3,
    name: "Marcos Oliveira",
    role: "Gerente de Frota",
    company: "LocaSul",
    content: "Trabalhamos com locação e a apropriação indébita é um problema constante. A Impacto é nossa parceira estratégica há 2 anos, com taxa de recuperação superior a 90%. São extremamente técnicos e confiáveis.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200",
    rating: 5
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4 font-bold text-xs tracking-widest uppercase">
            <Star size={14} fill="currentColor" />
            Credibilidade Comprovada
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-accent uppercase italic tracking-tighter">
            O QUE NOSSOS <span className="text-primary">CLIENTES</span> DIZEM
          </h2>
          <div className="w-24 h-2 bg-primary mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div 
              key={t.id} 
              className="group relative bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 hover:bg-white hover:shadow-2xl transition-all duration-500 animate-fadeInUp"
              style={{ animationDelay: `${idx * 0.2}s` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-8 right-10 text-primary/10 group-hover:text-primary/20 transition-colors">
                <Quote size={60} fill="currentColor" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-500" fill="currentColor" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-600 font-medium leading-relaxed mb-10 relative z-10 italic">
                "{t.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <img 
                    src={t.image} 
                    alt={t.name} 
                    className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md relative z-10"
                  />
                </div>
                <div>
                  <h4 className="font-black text-accent uppercase text-lg leading-tight">{t.name}</h4>
                  <p className="text-primary font-bold text-xs uppercase tracking-wider mt-1">
                    {t.role} {t.company ? `| ${t.company}` : ''}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Confidence Badge */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 font-bold uppercase tracking-[0.2em] text-xs">
            Mais de <span className="text-accent">1.500 veículos recuperados</span> nos últimos 12 meses
          </p>
        </div>
      </div>
    </section>
  );
};
