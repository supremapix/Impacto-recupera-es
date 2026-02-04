
import React from 'react';
import { AccordionSection } from '../components/Accordion';
import { Carousel } from '../components/Carousel';
import { Shield, Target, Zap, Activity } from 'lucide-react';

export const ServicesPage: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="pt-32 pb-20 bg-accent text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-8xl font-black uppercase italic leading-none tracking-tighter mb-8">
              Soluções em <span className="text-primary">Recuperação</span>
            </h1>
            <p className="text-xl text-gray-400 font-medium">Oferecemos a mais avançada tecnologia de pronta resposta do Brasil para veículos, frotas e ativos de alto valor.</p>
          </div>
        </div>
      </section>

      <div className="py-12">
        <Carousel />
      </div>

      <AccordionSection />

      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: <Shield size={32} />, label: 'Segurança Total', desc: 'Protocolos militares de proteção' },
              { icon: <Target size={32} />, label: 'Precisão CMD', desc: 'Rastreamento por radiofrequência' },
              { icon: <Zap size={32} />, label: 'Resposta Imediata', desc: 'Menos de 30 min nas capitais' },
              { icon: <Activity size={32} />, label: 'Monitoramento 24h', desc: 'Central ativa 7 dias por semana' },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary shadow-lg mb-6">{item.icon}</div>
                <h3 className="text-lg font-black text-accent uppercase mb-2">{item.label}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
