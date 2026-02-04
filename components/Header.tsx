
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronRight } from 'lucide-react';
import { Logo } from './Logo';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'Abrangência', href: '#abrangencia' },
    { name: 'Contato', href: '#contato' },
  ];

  const whatsappUrl = "https://wa.me/5511965020011?text=Olá,%20vi%20seu%20site%20e%20cliquei%20no%20contato%20do%20Cabeçalho.";

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled || isMobileMenuOpen ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" onClick={closeMobileMenu} className="flex items-center gap-3 sm:gap-4 group cursor-pointer">
          <Logo size={isScrolled ? 42 : 56} light={!isScrolled && !isMobileMenuOpen} className="transition-all duration-500 group-hover:scale-110" />
          <div className="flex flex-col">
            <p className={`font-black text-lg sm:text-2xl tracking-tighter leading-none transition-colors duration-500 ${isScrolled || isMobileMenuOpen ? 'text-accent' : 'text-white'}`}>
              IMPACTO
            </p>
            <p className={`font-bold text-[8px] sm:text-xs uppercase tracking-[0.3em] transition-colors duration-500 ${isScrolled || isMobileMenuOpen ? 'text-primary' : 'text-gray-300'}`}>
              RECUPERAÇÕES
            </p>
          </div>
        </a>

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
          className={`lg:hidden p-2.5 rounded-xl transition-all active:scale-90 ${isScrolled || isMobileMenuOpen ? 'text-accent bg-gray-100' : 'text-white bg-white/10'}`}
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`lg:hidden fixed inset-0 top-[60px] sm:top-[70px] bg-white z-[90] transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}
      >
        <div className="h-full flex flex-col overflow-y-auto px-6 py-8 pb-32">
          <div className="space-y-2">
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMobileMenu}
                className="flex items-center justify-between py-5 border-b border-gray-100 text-2xl font-black text-accent uppercase tracking-tighter group transition-all animate-fadeInUp"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {link.name}
                <ChevronRight className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" size={20} />
              </a>
            ))}
          </div>
          
          <div className="mt-12 space-y-4 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] text-center mb-6">Canais de Atendimento</p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-primary text-white py-5 rounded-2xl font-black text-lg flex justify-center items-center gap-3 shadow-xl active:scale-95 transition-all hover:bg-accent"
            >
              <Phone size={24} />
              SUPORTE 24H
            </a>
            <div className="grid grid-cols-2 gap-4">
               <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 flex flex-col items-center">
                  <span className="text-[10px] font-black text-primary uppercase">Central</span>
                  <span className="text-accent font-bold text-sm">(11) 96502-0011</span>
               </div>
               <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 flex flex-col items-center">
                  <span className="text-[10px] font-black text-primary uppercase">Escritório</span>
                  <span className="text-accent font-bold text-sm">(11) 94726-4106</span>
               </div>
            </div>
          </div>

          {/* Mobile Menu Decoration */}
          <div className="mt-auto pt-10 text-center">
            <Logo size={40} className="mx-auto opacity-20 mb-4" />
            <p className="text-[9px] font-bold text-gray-300 uppercase tracking-widest">Impacto Recuperações &copy; {new Date().getFullYear()}</p>
          </div>
        </div>
      </div>
    </header>
  );
};
