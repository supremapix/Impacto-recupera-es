
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
    image: "https://i.pravatar.cc/150?u=ricardo",
    rating: 5.0
  },
  {
    id: 2,
    name: "Ana Cláudia Silva",
    role: "Proprietária de Veículo",
    content: "Meu carro foi furtado durante a noite. Liguei para a central e em poucas horas o sinal foi rastreado e o veículo recuperado. O atendimento humano e o suporte emocional da equipe no DP fizeram toda a diferença.",
    image: "https://i.pravatar.cc/150?u=ana",
    rating: 4.9
  },
  {
    id: 3,
    name: "Marcos Oliveira",
    role: "Gerente de Frota",
    company: "LocaSul",
    content: "Trabalhamos com locação e a apropriação indébita é um problema constante. A Impacto é nossa parceira estratégica há 2 anos, com taxa de recuperação superior a 90%. São extremamente técnicos.",
    image: "https://i.pravatar.cc/150?u=marcos",
    rating: 4.8
  },
  {
    id: 4,
    name: "Juliana Santos",
    role: "Motorista Autônoma",
    content: "Excelente serviço de rastreamento. Recuperaram minha caminhonete em menos de 1 hora. Recomendo fortemente para quem busca segurança real.",
    image: "https://i.pravatar.cc/150?u=juliana",
    rating: 5.0
  },
  {
    id: 5,
    name: "Sérgio Ramos",
    role: "Segurança Patrimonial",
    company: "GSP Alimentos",
    content: "Parceria de sucesso. O tempo de resposta deles é imbatível nas capitais. Profissionais altamente capacitados e equipamentos de ponta.",
    image: "https://i.pravatar.cc/150?u=sergio",
    rating: 4.7
  },
  {
    id: 6,
    name: "Camila Duarte",
    role: "Proprietária",
    content: "Serviço impecável. A central 24h me manteve informada o tempo todo enquanto a equipe tática localizava meu veículo. Profissionais educados.",
    image: "https://i.pravatar.cc/150?u=camila",
    rating: 5.0
  },
  {
    id: 7,
    name: "Bruno Lima",
    role: "Supervisor de Logística",
    company: "LogTech BR",
    content: "Impacto é sinônimo de eficiência. Já tivemos diversas situações de risco resolvidas com sucesso. Os relatórios fotográficos são detalhados.",
    image: "https://i.pravatar.cc/150?u=bruno",
    rating: 4.5
  },
  {
    id: 8,
    name: "Patrícia Gomes",
    role: "Advogada",
    content: "Rápido e discreto. Precisava de uma escolta velada de emergência e fui atendida prontamente. Transmitem muita confiança em momentos críticos.",
    image: "https://i.pravatar.cc/150?u=patricia",
    rating: 5.0
  },
  {
    id: 9,
    name: "Fernando Costa",
    role: "Proprietário de Moto",
    content: "Minha moto foi roubada a mão armada. Graças ao sinal RF e à agilidade da Impacto, conseguimos recuperar o bem no mesmo dia.",
    image: "https://i.pravatar.cc/150?u=fernando",
    rating: 4.4
  },
  {
    id: 10,
    name: "Letícia Almeida",
    role: "Gerente de Operações",
    company: "FastCargo",
    content: "Trabalhamos com cargas sensíveis e a preservação feita pela Impacto nos dá tranquilidade. Equipe disciplinada e muito atenta aos detalhes.",
    image: "https://i.pravatar.cc/150?u=leticia",
    rating: 4.9
  },
  {
    id: 11,
    name: "Gustavo Mendes",
    role: "Empresário",
    content: "O melhor custo-benefício do mercado de segurança. Agilidade real no atendimento de emergência.",
    image: "https://i.pravatar.cc/150?u=gustavo",
    rating: 5.0
  },
  {
    id: 12,
    name: "Renata Vieira",
    role: "Professora",
    content: "Equipe muito atenciosa. Me ajudaram num momento de desespero com meu carro. Só tenho a agradecer.",
    image: "https://i.pravatar.cc/150?u=renata",
    rating: 4.8
  },
  {
    id: 13,
    name: "Rodrigo Paz",
    role: "Motorista de Aplicativo",
    content: "Para quem trabalha na rua, esse serviço é essencial. A Impacto me deu suporte total na recuperação do meu instrumento de trabalho.",
    image: "https://i.pravatar.cc/150?u=rodrigo",
    rating: 4.7
  },
  {
    id: 14,
    name: "Bárbara Luz",
    role: "Diretora",
    company: "Eventos VIP",
    content: "Segurança de alto nível. Escolta impecável para nossos convidados. Pontualidade e descrição absoluta.",
    image: "https://i.pravatar.cc/150?u=barbara",
    rating: 5.0
  },
  {
    id: 15,
    name: "Carlos Eduardo",
    role: "Comerciante",
    content: "Tive um problema com apropriação indébita e eles resolveram de forma jurídica e operacional exemplar.",
    image: "https://i.pravatar.cc/150?u=carlos",
    rating: 4.6
  }
];

const TestimonialCard: React.FC<{ t: Testimonial }> = ({ t }) => (
  <div className="bg-gray-50 p-6 md:p-8 rounded-[2rem] border border-gray-100 hover:bg-white hover:shadow-xl transition-all duration-300 w-full mb-6 md:mb-8">
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star 
          key={i} 
          size={12} 
          className={i < Math.floor(t.rating) ? "text-yellow-500" : "text-gray-300"} 
          fill={i < Math.floor(t.rating) ? "currentColor" : "none"} 
        />
      ))}
      <span className="text-[10px] font-black text-accent ml-2">{t.rating.toFixed(1)}</span>
    </div>
    <p className="text-gray-600 text-xs md:text-sm italic leading-relaxed mb-6">"{t.content}"</p>
    <div className="flex items-center gap-4">
      <img src={t.image} alt={t.name} className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white shadow-sm" loading="lazy" />
      <div>
        <h4 className="font-black text-accent uppercase text-[10px] md:text-xs tracking-tighter">{t.name}</h4>
        <p className="text-primary font-bold text-[8px] md:text-[10px] uppercase tracking-widest">{t.role}</p>
      </div>
    </div>
  </div>
);

export const Testimonials: React.FC = () => {
  // Balanced testimonials for performance
  const col1 = testimonials.slice(0, 5);
  const col2 = testimonials.slice(5, 10);
  const col3 = testimonials.slice(10, 15);

  return (
    <section id="depoimentos" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4 font-bold text-xs tracking-widest uppercase">
            <Star size={14} fill="currentColor" />
            Prova Social de Alto Impacto
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-accent uppercase italic tracking-tighter">
            FEEDBACK DOS <span className="text-primary">CLIENTES</span>
          </h2>
          <p className="text-gray-400 font-bold uppercase tracking-[0.2em] text-[10px] mt-2">
            Comprometimento e Resultados Reais
          </p>
          <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mt-4"></div>
        </div>

        {/* Scrolling Container */}
        <div className="relative h-[500px] md:h-[700px] overflow-hidden">
          {/* Top and Bottom Gradients */}
          <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent z-20 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-20 pointer-events-none"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 h-full scroller-container">
            {/* Column 1 */}
            <div className="flex flex-col scroller-content animate-infinite-scroll-up">
              {[...col1, ...col1].map((t, idx) => (
                <TestimonialCard key={`${t.id}-${idx}`} t={t} />
              ))}
            </div>

            {/* Column 2 */}
            <div className="hidden md:flex flex-col scroller-content animate-infinite-scroll-up-delayed">
              {[...col2, ...col2].map((t, idx) => (
                <TestimonialCard key={`${t.id}-${idx}`} t={t} />
              ))}
            </div>

            {/* Column 3 */}
            <div className="hidden lg:flex flex-col scroller-content animate-infinite-scroll-up">
              {[...col3, ...col3].map((t, idx) => (
                <TestimonialCard key={`${t.id}-${idx}`} t={t} />
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center animate-fadeInUp">
          <div className="inline-block p-5 sm:p-6 bg-accent rounded-[2rem] shadow-2xl">
             <div className="flex items-center gap-4 text-white">
                <div className="flex -space-x-3">
                   {testimonials.slice(0, 3).map(t => (
                      <img key={t.id} src={t.image} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-accent" alt="User" />
                   ))}
                   <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary border-2 border-accent flex items-center justify-center text-[8px] sm:text-[10px] font-black">+500</div>
                </div>
                <div className="text-left">
                   <div className="flex gap-0.5 mb-0.5">
                      {[...Array(5)].map((_, i) => <Star key={i} size={10} fill="#eab308" className="text-yellow-500" />)}
                   </div>
                   <p className="text-[8px] sm:text-[10px] font-black uppercase tracking-widest text-gray-400">Nota Média de <span className="text-white">4.9/5.0</span> no Google Business</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
