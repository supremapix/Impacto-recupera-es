
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, CheckCircle, Users, Truck, Globe, Shield } from 'lucide-react';

interface AccordionItemProps {
  title: string;
  icon: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, icon, isOpen, onToggle, children }) => {
  return (
    <div className="mb-4 border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <button 
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 bg-white hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-4">
          <div className="text-primary">{icon}</div>
          <span className="text-xl font-bold text-accent">{title}</span>
        </div>
        {isOpen ? <ChevronUp className="text-primary" /> : <ChevronDown className="text-gray-400" />}
      </button>
      {isOpen && (
        <div className="p-8 bg-white border-t border-gray-50 animate-fadeIn">
          {children}
        </div>
      )}
    </div>
  );
};

export const AccordionSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const services = [
    "Recuperação de Veículos Roubados e Furtados (antena RF/CMD/LL)",
    "Elaboração de Planos de Varreduras",
    "Acompanhamento da Vítima no DP",
    "Apropriação Indébita para Locadoras",
    "Preservação de Caminhões e Carga",
    "Preservação de Obras e Empreendimentos",
    "Investigação Veicular",
    "Escolta Armada e Velada",
    "Emissão de Relatórios / Laudo Fotográfico",
    "Parceria com grande rede de Policiais Militares e Civis"
  ];

  const regions = [
    "São Paulo SP e região metropolitana",
    "Campinas/SP",
    "Porto Alegre RS e região metropolitana",
    "Belo Horizonte e Triângulo Mineiro MG",
    "Curitiba PR e região metropolitana",
    "Salvador BA e região metropolitana",
    "E muitos outros polos regionais..."
  ];

  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-accent mb-4">ATUAMOS EM TODO O PAÍS</h2>
          <div className="w-24 h-2 bg-primary mx-auto rounded-full"></div>
        </div>

        <AccordionItem 
          title="Nossos Serviços" 
          icon={<Shield size={24} />} 
          isOpen={openIndex === 0} 
          onToggle={() => toggle(0)}
        >
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((service, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle size={18} className="text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{service}</span>
              </li>
            ))}
          </ul>
        </AccordionItem>

        <AccordionItem 
          title="Colaboradores" 
          icon={<Users size={24} />} 
          isOpen={openIndex === 1} 
          onToggle={() => toggle(1)}
        >
          <p className="text-lg text-gray-700 leading-relaxed">
            Time superior de <span className="font-bold text-primary">550 colaboradores</span> de Pronta Resposta distribuídos em todos os estados, com ênfase nas capitais, prontos para agir em qualquer situação de risco.
          </p>
        </AccordionItem>

        <AccordionItem 
          title="Tempo de Deslocamento" 
          icon={<Truck size={24} />} 
          isOpen={openIndex === 2} 
          onToggle={() => toggle(2)}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-primary/5 rounded-xl border-l-4 border-primary">
              <p className="text-sm uppercase font-bold text-primary mb-1">Capitais e Metrópoles</p>
              <p className="text-2xl font-black text-accent">Inferior a 30 min</p>
            </div>
            <div className="p-4 bg-gray-100 rounded-xl border-l-4 border-gray-400">
              <p className="text-sm uppercase font-bold text-gray-500 mb-1">Outras Regiões</p>
              <p className="text-2xl font-black text-accent">Máximo 60 min</p>
            </div>
          </div>
        </AccordionItem>

        <AccordionItem 
          title="Disponibilidade da Central" 
          icon={<Globe size={24} />} 
          isOpen={openIndex === 3} 
          onToggle={() => toggle(3)}
        >
          <p className="text-xl font-bold text-center text-primary py-4 italic border-2 border-dashed border-primary/20 rounded-xl">
             ⚡ NOSSA CENTRAL: 24 HORAS / 7 DIAS POR SEMANA ⚡
          </p>
        </AccordionItem>

        <AccordionItem 
          title="Principais Regiões de Atendimento" 
          icon={<MapPin size={24} />} 
          isOpen={openIndex === 4} 
          onToggle={() => toggle(4)}
        >
          <div id="abrangencia" className="grid grid-cols-1 md:grid-cols-2 gap-4">
             {regions.map((region, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
                  <span className="text-primary">📍</span>
                  <span className="font-semibold text-gray-600">{region}</span>
                </div>
             ))}
          </div>
        </AccordionItem>
      </div>
    </section>
  );
};

const MapPin = ({ size, className }: { size?: number, className?: string }) => (
  <svg width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
);
