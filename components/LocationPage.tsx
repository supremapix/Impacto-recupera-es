
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Shield, MapPin, Phone, ArrowLeft, Target, Activity, Users, Zap, CheckCircle } from 'lucide-react';
import { LOCATIONS } from '../constants/locations';
import { ContactForm } from './ContactForm';

export const LocationPage: React.FC = () => {
  const { city } = useParams<{ city: string }>();
  const location = LOCATIONS.find(l => l.slug === city);

  useEffect(() => {
    if (location) {
      window.scrollTo(0, 0);
      document.title = `Recuperação de Veículos em ${location.name} | Impacto Recuperações Pronta Resposta`;
      
      // Meta description dinâmica
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', `Recuperação especializada de veículos roubados e furtados em ${location.name} e região. Pronta resposta armada 24h com agentes treinados. Atendimento em até 30 min.`);
      }

      // Adicionar Schema Markup Local
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": `Impacto Recuperações - Unidade ${location.name}`,
        "image": "https://www.impactorecuperacoes.com.br/assets/images/impacto-recuperacoes-og-image.jpg",
        "url": `https://www.impactorecuperacoes.com.br/servicos-em/${location.slug}`,
        "telephone": "+5511965020011",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": location.name,
          "addressRegion": "SP",
          "addressCountry": "BR"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": location.coords.lat,
          "longitude": location.coords.lng
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "00:00",
          "closes": "23:59"
        }
      };
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);

      return () => {
        document.head.removeChild(script);
      };
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
          <Link to="/" className="inline-flex items-center gap-2 text-primary font-bold mb-8 hover:translate-x-[-5px] transition-all">
            <ArrowLeft size={18} /> VOLTAR AO MAPA GERAL
          </Link>
          
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-xl border border-white/10 px-6 py-2 rounded-full mb-6">
              <Shield size={16} className="text-primary" />
              <span className="text-[10px] font-black tracking-widest uppercase text-white">Base Operacional {location.name}</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black text-white uppercase italic leading-none tracking-tighter mb-8">
              Recuperação de <br />
              Ativos em <span className="text-primary">{location.name}</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 font-medium leading-relaxed max-w-2xl mb-12">
              Pronta resposta especializada com tecnologia CMD e profissionais armados. Segurança de elite para o seu patrimônio na região de {location.name}.
            </p>

            <div className="flex flex-wrap gap-4">
               <a href={`https://wa.me/5511965020011?text=Olá,%20preciso%20de%20atendimento%20tático%20imediato%20em%20${location.name}`} className="bg-primary text-white px-10 py-6 rounded-2xl font-black text-xl shadow-2xl hover:bg-white hover:text-primary transition-all flex items-center gap-3">
                  <Phone size={24} /> ACIONAR CENTRAL 24H
               </a>
            </div>
          </div>
        </div>
      </section>

      {/* Tactical Stats */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: <Target />, label: 'Tempo de Resposta', val: '< 30min', desc: 'Em toda malha urbana' },
              { icon: <Users />, label: 'Agentes na Região', val: '24 Ativos', desc: 'Profissionais de Elite' },
              { icon: <Activity />, label: 'Taxa de Sucesso', val: '94.2%', desc: 'Recuperações 2024' },
              { icon: <Zap />, label: 'Tecnologia', val: 'Híbrida', desc: 'CMD + RF + Satélite' },
            ].map((stat, i) => (
              <div key={i} className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 hover:shadow-xl transition-all group">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-md mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                  {stat.icon}
                </div>
                <h3 className="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-1">{stat.label}</h3>
                <p className="text-3xl font-black text-accent mb-2">{stat.val}</p>
                <p className="text-sm text-gray-500 font-medium">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specific Content */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-20">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-black text-accent uppercase italic mb-8">
                Operações táticas em <br /> {location.name}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Nossa unidade em <strong>{location.name}</strong> é estratégica para o escoamento de cargas e proteção de frotas. Com uma base de suporte avançado, garantimos que qualquer sinal de alerta seja processado em milissegundos.
              </p>
              <div className="space-y-4">
                {[
                  'Patrulhamento Ostensivo com Agentes Armados',
                  'Recuperação de Carga e Veículos com Tecnologia CMD',
                  'Varredura de Sinais Jammer e Bloqueadores',
                  'Acompanhamento de Vítimas com Segurança Velada',
                  'Investigação Tática no Perímetro Urbano e Rural'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                    <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                    <span className="font-bold text-accent">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl h-full min-h-[400px]">
                <img 
                  src="https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=1200" 
                  alt="Operação Tática" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
                <div className="absolute bottom-10 left-10 right-10 glass p-8 rounded-3xl border border-white/40">
                   <div className="flex items-center gap-4">
                      <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                      <p className="font-black text-accent uppercase text-sm italic">Feed de Operação em Tempo Real - {location.name}</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 max-w-4xl text-center">
           <h2 className="text-3xl md:text-5xl font-black text-accent mb-6 uppercase italic">Dúvidas sobre o atendimento em {location.name}?</h2>
           <p className="text-gray-500 text-lg mb-12">Nossa central operacional está pronta para detalhar o plano de segurança para sua frota ou veículo particular.</p>
           <ContactForm />
        </div>
      </section>
    </div>
  );
};
