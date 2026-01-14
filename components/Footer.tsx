
import React from 'react';
import { Phone, Mail, Instagram, MapPin, ChevronRight, Heart } from 'lucide-react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  const whatsappFooterSocialUrl = "https://wa.me/5511965020011?text=Olá,%20vi%20seu%20contato%20no%20Rodapé%20(Ícone%20Social).";
  const whatsappFooterContactUrl = "https://wa.me/5511965020011?text=Olá,%20estou%20entrando%20em%20contato%20pelo%20telefone%20listado%20no%20Rodapé.";

  return (
    <footer className="bg-accent text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Column 1 */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <Logo size={60} light />
              <div className="flex flex-col">
                <p className="font-black text-2xl tracking-tighter leading-none">IMPACTO</p>
                <p className="text-xs uppercase tracking-[0.3em] text-primary font-bold">RECUPERAÇÕES</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-8">
              Somos uma empresa prestadora de serviços especializados em Pronta Resposta, comprometidos com a segurança e a recuperação ágil de veículos e cargas em todo o território nacional.
            </p>
            <div className="flex gap-4">
               <a href="https://instagram.com/impacto_recuperacoes" target="_blank" className="p-3 bg-white/5 rounded-full hover:bg-primary transition-all hover:-translate-y-1">
                  <Instagram size={20} />
               </a>
               <a href={whatsappFooterSocialUrl} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-primary transition-all hover:-translate-y-1">
                  <Phone size={20} />
               </a>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-xl font-bold mb-8 flex items-center gap-2">
              <div className="w-1.5 h-6 bg-primary rounded-full"></div>
              Empresa
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <MapPin className="text-primary" size={20} />
                </div>
                <span className="text-gray-400">São Paulo SP e Região Metropolitana (Atendimento Nacional)</span>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Mail className="text-primary" size={20} />
                </div>
                <a href="mailto:contato@impactorecuperacoes.com.br" className="text-gray-400 hover:text-white transition-colors">contato@impactorecuperacoes.com.br</a>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Phone className="text-primary" size={20} />
                </div>
                <a href={whatsappFooterContactUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">(11) 96502-0011</a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-xl font-bold mb-8 flex items-center gap-2">
              <div className="w-1.5 h-6 bg-primary rounded-full"></div>
              Links Úteis
            </h4>
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: 'Home', href: '#' },
                { name: 'Serviços', href: '#servicos' },
                { name: 'Abrangência', href: '#abrangencia' },
                { name: 'Contato', href: '#contato' },
                { name: 'Sistema', href: '#' },
                { name: 'Instagram', href: 'https://instagram.com/impacto_recuperacoes' },
              ].map((link) => (
                <a key={link.name} href={link.href} className="flex items-center gap-2 text-gray-400 hover:text-primary transition-all group">
                  <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform text-primary" />
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Impacto Recuperações - Pronta Resposta | Criação de Sites - Suprema Midia
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            Desenvolvido 
            <Heart size={16} className="text-red-500 fill-red-500 animate-heart-beat inline-block" /> 
            por 
            <a href="https://supremasite.com.br" target="_blank" rel="noopener noreferrer" className="font-bold text-white hover:text-primary transition-colors">
              Suprema Sites Express
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
