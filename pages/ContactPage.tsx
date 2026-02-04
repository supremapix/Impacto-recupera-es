
import React from 'react';
import { ContactForm } from '../components/ContactForm';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export const ContactPage: React.FC = () => {
  return (
    <div className="pt-24 bg-white">
      <section className="py-20 bg-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-8xl font-black uppercase italic leading-none tracking-tighter mb-6">
            Suporte <span className="text-primary">Estratégico</span>
          </h1>
          <p className="text-xl text-gray-400">Atendimento imediato 24h para emergências e orçamentos corporativos.</p>
        </div>
      </section>

      <div className="container mx-auto px-4 -mt-16 relative z-10 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-12">
          {[
            { icon: <Phone />, label: 'Emergência 24h', val: '(11) 96502-0011', color: 'bg-red-600' },
            { icon: <Mail />, label: 'E-mail Comercial', val: 'contato@impacto.com.br', color: 'bg-primary' },
            { icon: <MapPin />, label: 'Base Operacional', val: 'São Paulo - SP', color: 'bg-accent' },
            { icon: <Clock />, label: 'Disponibilidade', val: 'Full Time 24/7', color: 'bg-green-600' },
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-[2rem] shadow-2xl border border-gray-100 flex flex-col items-center text-center">
               <div className={`w-14 h-14 ${item.color} text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>{item.icon}</div>
               <h3 className="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-1">{item.label}</h3>
               <p className="text-lg font-black text-accent">{item.val}</p>
            </div>
          ))}
        </div>

        <ContactForm />
      </div>

      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 text-center">
           <h2 className="text-3xl font-black text-accent mb-12 uppercase italic">PERGUNTAS FREQUENTES</h2>
           <div className="max-w-3xl mx-auto space-y-6 text-left">
              {[
                { q: "Qual o tempo médio de atendimento?", a: "Nas capitais, nosso tempo de resposta é inferior a 30 minutos via acionamento central." },
                { q: "Vocês atendem veículos particulares?", a: "Sim, atendemos tanto frotas corporativas de logística quanto veículos de passeio e motos." },
                { q: "O serviço de escolta é armado?", a: "Sim, possuímos equipes autorizadas para escolta armada e velada em conformidade com a legislação." }
              ].map((faq, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl border border-gray-200">
                  <h4 className="font-black text-primary uppercase text-sm mb-2">{faq.q}</h4>
                  <p className="text-gray-600 font-medium">{faq.a}</p>
                </div>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
};
