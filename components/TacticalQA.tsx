
import React, { useEffect, useState } from 'react';
import { HelpCircle, ChevronRight, Zap, Search, ShieldCheck } from 'lucide-react';

interface TacticalQAProps {
  cityName: string;
}

export const TacticalQA: React.FC<TacticalQAProps> = ({ cityName }) => {
  const [visibleItems, setVisibleItems] = useState<number>(12);

  const generateQA = (city: string) => {
    const templates = [
      { q: "Como funciona a recuperação de veículos em {city}?", a: "Nossa unidade em {city} opera com tecnologia CMD e radiofrequência, permitindo localizar veículos mesmo em galpões ou subsolos blindados em até 30 minutos." },
      { q: "Qual o tempo médio de chegada em {city}?", a: "Para ocorrências no perímetro urbano de {city}, nosso tempo médio de resposta tática é inferior a 25 minutos após o acionamento da central." },
      { q: "Vocês fazem escolta de cargas em {city}?", a: "Sim, realizamos escolta armada e velada para caminhões e cargas de alto valor saindo ou cruzando a região de {city}." },
      { q: "A Impacto Recuperações atende roubos de motos em {city}?", a: "Atendemos todos os tipos de veículos em {city}, incluindo motocicletas de alta cilindrada, com agentes especializados em perseguição urbana." },
      { q: "Existe base física em {city}?", a: "Mantemos unidades de pronta resposta estratégicas em {city} para garantir que o deslocamento seja o mais rápido do mercado." },
      { q: "Como solicitar uma varredura de sinal em {city}?", a: "Basta entrar em contato com nossa central 24h. Enviamos uma unidade móvel em {city} equipada com analisadores de espectro para detectar jammers." },
      { q: "O serviço de recuperação em {city} é garantido?", a: "Nossa taxa de sucesso em {city} é superior a 94%, graças ao mapeamento constante de rotas de fuga e desmanches na região." },
      { q: "Vocês atendem apropriação indébita em {city}?", a: "Sim, somos especialistas em recuperação de ativos para locadoras que tiveram veículos desviados em {city} e região." }
    ];

    const allQA = [];
    for (let i = 0; i < 50; i++) {
      const template = templates[i % templates.length];
      allQA.push({
        id: i,
        question: template.q.replace(/{city}/g, city),
        answer: template.a.replace(/{city}/g, city)
      });
    }
    return allQA;
  };

  const qaData = generateQA(cityName);

  return (
    <section className="py-24 bg-white overflow-hidden border-t border-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-accent/5 px-6 py-2.5 rounded-full mb-6 border border-accent/10">
            <Search size={16} className="text-primary animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-accent">Base de Conhecimento Tático: {cityName}</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-accent uppercase italic leading-none tracking-tighter mb-6">
            Inteligência <span className="text-primary">Regional</span>
          </h2>
          <p className="text-gray-500 font-medium max-w-2xl mx-auto text-lg">
            Esclarecemos todas as dúvidas operacionais sobre nossos serviços de pronta resposta e escolta em {cityName}.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {qaData.slice(0, visibleItems).map((item, idx) => (
            <div 
              key={item.id} 
              className="group bg-gray-50 p-8 rounded-[2.5rem] border border-gray-100 hover:bg-white hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] transition-all duration-700 animate-fadeInUp"
              style={{ animationDelay: `${(idx % 6) * 0.1}s` }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <Zap size={20} />
                </div>
                <h4 className="text-lg font-black text-accent uppercase leading-tight tracking-tight group-hover:text-primary transition-colors">
                  {item.question}
                </h4>
              </div>
              <p className="text-gray-500 font-medium leading-relaxed border-l-2 border-gray-200 pl-4 group-hover:border-primary transition-colors">
                {item.answer}
              </p>
              <div className="mt-6 flex items-center gap-2 text-[10px] font-black uppercase text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Protocolo Ativo</span>
                <ChevronRight size={14} />
              </div>
            </div>
          ))}
        </div>

        {visibleItems < 50 && (
          <div className="mt-20 text-center">
            <button 
              onClick={() => setVisibleItems(prev => Math.min(prev + 12, 50))}
              className="bg-accent text-white px-12 py-6 rounded-[2rem] font-black text-lg hover:bg-primary transition-all shadow-xl active:scale-95 flex items-center gap-4 mx-auto"
            >
              CARREGAR MAIS PERGUNTAS <HelpCircle size={24} />
            </button>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-6">Mostrando {visibleItems} de 50 tópicos de inteligência em {cityName}</p>
          </div>
        )}
      </div>
    </section>
  );
};
