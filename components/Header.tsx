
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronRight } from 'lucide-react';
import { Logo } from './Logo';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [location.pathname]);

  const toggleMobileMenu = () => {
    const newState = !isMobileMenuOpen;
    setIsMobileMenuOpen(newState);
    document.body.style.overflow = newState ? 'hidden' : 'unset';
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Serviços', href: '/servicos' },
    { name: 'Depoimentos', href: '/depoimentos' },
    { name: 'Abrangência', href: '/abrangencia' },
    { name: 'Contato', href: '/contato' },
  ];

  const whatsappUrl = "https://wa.me/5511965020011?text=Olá,%20vi%20seu%20site%20e%20cliquei%20no%20contato%20do%20Cabeçalho.";

  const showBackground = isScrolled || isMobileMenuOpen;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ease-in-out ${
        showBackground 
        ? 'bg-white shadow-[0_15px_60px_rgba(0,0,0,0.12)] py-3 sm:py-4' 
        : 'bg-black/20 backdrop-blur-sm py-5 sm:py-8'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
        {/* LOGO AREA */}
        <Link to="/" className="flex items-center gap-3 sm:gap-4 group cursor-pointer z-[1100]">
          <div className="w-10 h-10 sm:w-14 sm:h-14 flex-shrink-0">
            <Logo size={undefined} light={!showBackground} className="transition-all duration-500 group-hover:scale-105" />
          </div>
          <div className="flex flex-col text-left">
            <p className={`font-black text-xl sm:text-2xl lg:text-3xl tracking-tighter leading-none transition-colors duration-500 ${showBackground ? 'text-accent' : 'text-white'}`}>
              IMPACTO
            </p>
            <p className={`font-bold text-[8px] sm:text-[10px] uppercase tracking-[0.25em] transition-colors duration-500 ${showBackground ? 'text-primary' : 'text-gray-300'}`}>
              RECUPERAÇÕES
            </p>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`font-black text-[12px] uppercase tracking-widest transition-all relative group ${
                showBackground ? 'text-accent' : 'text-white'
              } ${location.pathname === link.href ? 'text-primary' : 'hover:text-primary'}`}
            >
              {link.name}
              <span className={`absolute -bottom-2 left-0 h-1 bg-primary transition-all duration-300 ${location.pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
          ))}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-wider flex items-center gap-3 transition-all duration-300 shadow-xl hover:-translate-y-1 active:scale-95 ${
              showBackground ? 'bg-primary text-white hover:bg-accent' : 'bg-white text-primary hover:bg-primary hover:text-white'
            }`}
          >
            <Phone size={14} /> (11) 96502-0011
          </a>
        </nav>

        {/* MOBILE CONTROLS */}
        <div className="flex lg:hidden items-center gap-3 z-[1100]">
          <a 
            href={whatsappUrl} 
            target="_blank" 
            className={`p-3 rounded-2xl transition-all shadow-lg ${showBackground ? 'bg-primary text-white' : 'bg-white text-primary'}`}
          >
            <Phone size={20} />
          </a>
          <button 
            className={`p-3 rounded-2xl transition-all ${showBackground ? 'text-accent bg-gray-100' : 'text-white bg-white/10'}`} 
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY - FONTE ROBUSTA E FUNDO SÓLIDO */}
      <div className={`lg:hidden fixed inset-0 bg-accent z-[1050] transition-all duration-500 ease-in-out transform ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="h-full flex flex-col pt-32 px-8 pb-12 overflow-y-auto">
          <div className="flex flex-col gap-2">
            {navLinks.map((link, idx) => (
              <Link 
                key={link.name} 
                to={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center justify-between py-6 border-b border-white/5 text-[clamp(1.5rem,8vw,3rem)] font-black uppercase tracking-tighter transition-all ${
                  location.pathname === link.href ? 'text-primary pl-4' : 'text-white'
                }`}
              >
                {link.name} 
                <ChevronRight size={24} className={location.pathname === link.href ? 'text-primary' : 'text-white/20'} />
              </Link>
            ))}
          </div>
          
          <div className="mt-auto space-y-6">
             <div className="p-8 bg-white/5 rounded-[2.5rem] border border-white/10 text-center">
                <p className="text-gray-400 text-xs font-black uppercase tracking-[0.2em] mb-3">Plantão de Emergência 24h</p>
                <p className="text-white text-3xl font-black tracking-tighter">(11) 96502-0011</p>
             </div>
             <a 
               href={whatsappUrl} 
               className="w-full bg-primary text-white py-6 rounded-[2rem] font-black text-xl flex items-center justify-center gap-4 shadow-2xl active:scale-95 transition-transform"
             >
                ACIONAR CENTRAL <Phone size={24} />
             </a>
          </div>
        </div>
      </div>
    </header>
  );
};
