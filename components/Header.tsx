
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronRight } from 'lucide-react';
import { Logo } from './Logo';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '/#' },
    { name: 'Serviços', href: '/#servicos' },
    { name: 'Depoimentos', href: '/#depoimentos' },
    { name: 'Abrangência', href: '/#abrangencia' },
    { name: 'Contato', href: '/#contato' },
  ];

  const whatsappUrl = "https://wa.me/5511965020011?text=Olá,%20vi%20seu%20site%20e%20cliquei%20no%20contato%20do%20Cabeçalho.";

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled || isMobileMenuOpen ? 'bg-white/95 backdrop-blur-xl shadow-2xl py-2 sm:py-3' : 'bg-transparent py-4 sm:py-6'}`}>
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
        {/* Logo Section */}
        <a href="/#" onClick={closeMobileMenu} className="flex items-center gap-2 sm:gap-3 group cursor-pointer z-[110]">
          <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0">
            <Logo size={undefined} light={!isScrolled && !isMobileMenuOpen} className="transition-all duration-500 group-hover:scale-110" />
          </div>
          <div className="flex flex-col">
            <p className={`font-black text-lg sm:text-2xl tracking-tighter leading-none transition-colors duration-500 ${isScrolled || isMobileMenuOpen ? 'text-accent' : 'text-white'}`}>
              IMPACTO
            </p>
            <p className={`font-bold text-[7px] sm:text-[9px] uppercase tracking-[0.2em] transition-colors duration-500 ${isScrolled || isMobileMenuOpen ? 'text-primary' : 'text-gray-300'}`}>
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
              className={`font-bold text-xs uppercase tracking-widest hover:text-primary transition-all relative group ${isScrolled ? 'text-accent' : 'text-white'}`}
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
              px-5 py-2.5 rounded-xl font-black text-xs uppercase tracking-wider flex items-center gap-2 transition-all duration-300 shadow-xl hover:-translate-y-1 active:scale-95
              ${isScrolled ? 'bg-primary text-white hover:bg-accent' : 'bg-white text-primary hover:bg-primary hover:text-white'}
            `}
          >
            <Phone size={14} />
            (11) 96502-0011
          </a>
        </nav>

        {/* Mobile Actions Container */}
        <div className="flex lg:hidden items-center gap-2 z-[110]">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2.5 rounded-xl transition-all shadow-lg active:scale-90 ${isScrolled || isMobileMenuOpen ? 'bg-primary text-white' : 'bg-white text-primary'}`}
          >
            <Phone size={18} />
          </a>
          <button 
            className={`p-2.5 rounded-xl transition-all active:scale-90 ${isScrolled || isMobileMenuOpen ? 'text-accent bg-gray-100/50' : 'text-white bg-white/10'}`}
            onClick={toggleMobileMenu}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`lg:hidden fixed inset-0 bg-white z-[90] transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}
      >
        <div className="h-full flex flex-col pt-24 px-6 pb-10 overflow-y-auto">
          <div className="space-y-1">
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMobileMenu}
                className="flex items-center justify-between py-5 border-b border-gray-50 text-2xl font-black text-accent uppercase tracking-tighter group transition-all"
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                {link.name}
                <ChevronRight className="text-primary" size={20} />
              </a>
            ))}
          </div>
          
          <div className="mt-10 space-y-4">
             <a href={whatsappUrl} target="_blank" className="bg-primary text-white py-5 rounded-2xl font-black text-lg flex justify-center items-center gap-3 shadow-xl active:scale-95 transition-all">
                <Phone size={24} /> SUPORTE 24H
             </a>
             <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100 flex flex-col items-center">
                <span className="text-[10px] font-black text-primary uppercase mb-1">Central 24h</span>
                <span className="text-accent font-black text-base">(11) 96502-0011</span>
             </div>
          </div>
        </div>
      </div>
    </header>
  );
};
