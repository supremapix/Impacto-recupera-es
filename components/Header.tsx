
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Logo } from './Logo';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'Abrangência', href: '#abrangencia' },
    { name: 'Contato', href: '#contato' },
  ];

  const whatsappUrl = "https://wa.me/5511965020011?text=Olá,%20vi%20seu%20site%20e%20cliquei%20no%20contato%20do%20Cabeçalho.";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-4 group cursor-pointer">
          <Logo size={isScrolled ? 48 : 60} light={!isScrolled} className="transition-all duration-500 group-hover:scale-110" />
          <div className="flex flex-col">
            <p className={`font-black text-xl md:text-2xl tracking-tighter leading-none transition-colors duration-500 ${isScrolled ? 'text-accent' : 'text-white'}`}>
              IMPACTO
            </p>
            <p className={`font-bold text-[10px] md:text-xs uppercase tracking-[0.3em] transition-colors duration-500 ${isScrolled ? 'text-primary' : 'text-gray-300'}`}>
              RECUPERAÇÕES
            </p>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-bold text-sm uppercase tracking-widest hover:text-primary transition-all relative group ${isScrolled ? 'text-accent' : 'text-white'}`}
            >
              {link.name}
              <span className={`absolute -bottom-2 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full`}></span>
            </a>
          ))}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              px-7 py-3.5 rounded-2xl font-black text-sm uppercase tracking-wider flex items-center gap-2 transition-all duration-300 shadow-xl hover:-translate-y-1 active:scale-95
              ${isScrolled ? 'bg-primary text-white hover:bg-accent' : 'bg-white text-primary hover:bg-primary hover:text-white'}
            `}
          >
            <Phone size={18} />
            (11) 96502-0011
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className={`lg:hidden p-2 rounded-xl transition-colors ${isScrolled ? 'text-accent bg-gray-100' : 'text-white bg-white/10'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden glass absolute top-full left-0 right-0 py-10 px-6 flex flex-col gap-6 shadow-2xl border-t border-gray-100 animate-fadeInUp">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-black text-accent py-3 border-b border-gray-100 flex items-center justify-between group hover:text-primary transition-colors"
            >
              {link.name}
              <div className="w-3 h-3 rounded-full bg-primary transform scale-0 group-hover:scale-100 transition-transform"></div>
            </a>
          ))}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white text-center py-5 rounded-2xl font-black text-lg flex justify-center items-center gap-3 mt-4 shadow-xl active:scale-95 transition-all duration-300 hover:bg-accent"
          >
            <Phone size={24} />
            CANAL ATENDIMENTO
          </a>
        </div>
      )}
    </header>
  );
};
