
import React from 'react';
import { Testimonials } from '../components/Testimonials';
import { Star, MessageSquare } from 'lucide-react';

export const TestimonialsPage: React.FC = () => {
  return (
    <div className="pt-24 bg-white">
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6">
            <Star size={16} fill="white" />
            <span className="text-xs font-black uppercase tracking-widest">Excelência Comprovada</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black uppercase italic italic leading-none tracking-tighter mb-6">
            Histórias de <br /> <span className="text-accent">Sucesso</span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">Confira os relatos de quem confiou na Impacto Recuperações para proteger seu patrimônio.</p>
        </div>
      </section>
      
      <div className="-mt-10">
        <Testimonials />
      </div>

      <section className="py-20 bg-gray-50 text-center">
        <div className="container mx-auto px-4">
           <MessageSquare size={48} className="text-primary mx-auto mb-6" />
           <h2 className="text-3xl font-black text-accent mb-4 uppercase">QUER COMPARTILHAR SUA EXPERIÊNCIA?</h2>
           <p className="text-gray-500 mb-8">Envie seu depoimento para nossa central e ajude outros a escolherem a melhor segurança.</p>
           <a href="mailto:depoimentos@impactorecuperacoes.com.br" className="bg-accent text-white px-10 py-5 rounded-2xl font-black hover:bg-primary transition-all inline-block shadow-xl">ENVIAR FEEDBACK</a>
        </div>
      </section>
    </div>
  );
};
