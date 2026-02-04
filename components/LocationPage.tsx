
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Shield, MapPin, Phone, ArrowLeft, Target, Activity, Users, Zap, CheckCircle } from 'lucide-react';
import { LOCATIONS } from '../constants/locations';
import { ContactForm } from './ContactForm';
import { TacticalQA } from './TacticalQA';
import { CargoEscortSection } from './CargoEscortSection';

export const LocationPage: React.FC = () => {
  const { city } = useParams<{ city: string }>();
  const location = LOCATIONS.find(l => l.slug === city);

  useEffect(() => {
    if (location) {
      window.scrollTo(0, 0);
      document.title = `Recuperação de Veículos em ${location.name} | Pronta Resposta 24h Impacto`;
    }
  }, [location]);

  if (!location) return <div className="py-40 text-center text-accent font-black">Localidade não encontrada em nosso sistema tático.</div>;

  return (
    <div className="bg-white">
      {/* City Hero */}
      <section className="relative pt-40 pb-24 bg-accent overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src={`https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=1920`} 
            alt={`Segurança em ${location.name}`} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-accent via-accent/50 to-accent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <Link to="/abrangencia" className="inline-flex items-center gap-2 text-primary font-bold mb-8 hover:translate-x-[-5px] transition-all">
            <ArrowLeft size={18} /> VOLTAR AO MAPA GERAL
          </Link>
          
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-xl border border-white/10 px-6 py-2 rounded-full mb-6">
              <Shield size={16} className="text-primary" />
              <span className="text-[10px] font-black tracking-widest uppercase text-white">Unidade Operacional: {location.name}</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black text-white uppercase italic leading-none tracking-tighter mb-8">
              Segurança Tática <br />
              em <span className="text-primary">{location.name}</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 font-medium leading-relaxed max-w-2xl mb-12">
              Pronta resposta especializada em veículos e cargas na região de {location.name}. Tecnologia CMD híbrida para localização em tempo real.
            </p>

            <div className="flex flex-wrap gap-4">
               <a href={`https://wa.me/5511965020011?text=Olá,%20preciso%20de%20atendimento%20tático%20imediato%20em%20${location.name}`} className="bg-primary text-white px-10 py-6 rounded-2xl font-black text-xl shadow-2xl hover:bg-white hover:text-primary transition-all flex items-center gap-3 active:scale-95">
                  <Phone size={24} /> ACIONAR CENTRAL 24H
               </a>
            </div>
          </div>
        </div>
      </section>

      {/* Tactical Stats */}
      <section className="py-20 -mt-10 relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: <Target />, label: 'Deslocamento', val: '< 25min', desc: 'Em toda {city}' },
              { icon: <Users />, label: 'Agentes Ativos', val: '24 Agentes', desc: 'Pronta Resposta' },
              { icon: <Activity />, label: 'Taxa de Sucesso', val: '94.2%', desc: 'Recuperados em {city}' },
              { icon: <Zap />, label: 'Tecnologia', val: 'CMD Híbrido', desc: 'Antena de Solo' },
            ].map((stat, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-xl hover:shadow-2xl transition-all group hover:-translate-y-2">
                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center shadow-inner mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                  {stat.icon}
                </div>
                <h3 className="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-1">{stat.label}</h3>
                <p className="text-3xl font-black text-accent mb-2">{stat.val}</p>
                <p className="text-sm text-gray-500 font-medium">{stat.desc.replace(/{city}/g, location.name)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CargoEscortSection />

      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-black text-accent uppercase italic mb-8">
                Operações de Risco <br /> em {location.name}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Nossa unidade em <strong>{location.name}</strong> é estratégica para a proteção de frotas logísticas. Com base de suporte avançado, garantimos que qualquer evento seja processado em tempo real pela nossa central.
              </p>
              <div className="grid grid-cols-1 gap-4">
                {[
                  'Varredura de Sinais em Galpões Logísticos',
                  'Escolta de Caminhões com Cargas Valiosas',
                  'Contenção Tática em Vias de Escoamento',
                  'Acompanhamento Especializado 24 Horas'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-5 bg-white rounded-3xl border border-gray-100 shadow-sm hover:border-primary transition-colors">
                    <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                    <span className="font-bold text-accent uppercase text-xs tracking-tight">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative rounded-[4rem] overflow-hidden shadow-2xl h-[500px]">
                <img 
                  src="https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=1200" 
                  alt="Operação Tática" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TacticalQA cityName={location.name} />

      <section className="py-24">
        <div className="container mx-auto px-4 max-w-4xl text-center">
           <h2 className="text-3xl md:text-6xl font-black text-accent mb-6 uppercase italic tracking-tighter">Acionamento <span className="text-primary">Estratégico</span></h2>
           <p className="text-gray-500 text-xl mb-12 font-medium">Solicite seu plano de segurança customizado para a região de {location.name}.</p>
           <ContactForm />
        </div>
      </section>
    </div>
  );
};
