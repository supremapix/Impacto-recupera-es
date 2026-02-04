
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

  // Fecha o menu ao mudar de rota ou ao redimensionar para desktop
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

  // O Header fica sólido se estiver com scroll OU se o menu mobile estiver aberto
  const showBackground = isScrolled || isMobileMenuOpen;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ease-in-out ${
        showBackground 
        ? 'bg-white shadow-[0_10px_40px_rgba(0,0,0,0.1)] py-3' 
        : 'bg-black/20 backdrop-blur-sm py-5 sm:py-7'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
        {/* LOGO AREA */}
        <Link to="/" className="flex items-center gap-2 sm:gap-3 group cursor-pointer z-[1100]">
          <div className="w-9 h-9 sm:w-12 sm:h-12 flex-shrink-0">
            <Logo size={undefined} light={!showBackground} className="transition-all duration-500 group-hover:scale-105" />
          </div>
          <div className="flex flex-col text-left">
            <p className={`font-black text-lg sm:text-2xl tracking-tighter leading-none transition-colors duration-500 ${showBackground ? 'text-accent' : 'text-white'}`}>
              IMPACTO
            </p>
            <p className={`font-bold text-[7px] sm:text-[9px] uppercase tracking-[0.2em] transition-colors duration-500 ${showBackground ? 'text-primary' : 'text-gray-300'}`}>
              RECUPERAÇÕES
            </p>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`font-black text-[11px] uppercase tracking-widest transition-all relative group ${
                showBackground ? 'text-accent' : 'text-white'
              } ${location.pathname === link.href ? 'text-primary' : 'hover:text-primary'}`}
            >
              {link.name}
              <span className={`absolute -bottom-1.5 left-0 h-0.5 bg-primary transition-all duration-300 ${location.pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
          ))}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-5 py-3 rounded-xl font-black text-[11px] uppercase tracking-wider flex items-center gap-2 transition-all duration-300 shadow-lg hover:-translate-y-0.5 active:scale-95 ${
              showBackground ? 'bg-primary text-white hover:bg-accent' : 'bg-white text-primary hover:bg-primary hover:text-white'
            }`}
          >
            <Phone size={13} /> (11) 96502-0011
          </a>
        </nav>

        {/* MOBILE CONTROLS */}
        <div className="flex lg:hidden items-center gap-3 z-[1100]">
          <a 
            href={whatsappUrl} 
            target="_blank" 
            className={`p-2.5 rounded-xl transition-all shadow-md ${showBackground ? 'bg-primary text-white' : 'bg-white text-primary'}`}
          >
            <Phone size={18} />
          </a>
          <button 
            className={`p-2.5 rounded-xl transition-all ${showBackground ? 'text-accent bg-gray-100' : 'text-white bg-white/10'}`} 
            onClick={toggleMobileMenu}
            aria-label="Abrir Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY - SOLID BG FOR CONTRAST */}
      <div className={`lg:hidden fixed inset-0 bg-accent z-[1050] transition-all duration-500 ease-in-out transform ${
        isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      }`}>
        <div className="h-full flex flex-col pt-24 px-6 pb-10">
          <div className="flex flex-col gap-1">
            {navLinks.map((link, idx) => (
              <Link 
                key={link.name} 
                to={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center justify-between py-5 border-b border-white/5 text-2xl font-black uppercase tracking-tighter transition-all ${
                  location.pathname === link.href ? 'text-primary pl-4' : 'text-white hover:text-primary'
                }`}
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                {link.name} 
                <ChevronRight size={20} className={location.pathname === link.href ? 'text-primary' : 'text-white/20'} />
              </Link>
            ))}
          </div>
          
          <div className="mt-auto space-y-4">
             <div className="p-6 bg-white/5 rounded-3xl border border-white/10 text-center">
                <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest mb-2">Plantão de Emergência 24h</p>
                <p className="text-white text-2xl font-black tracking-tighter">(11) 96502-0011</p>
             </div>
             <a 
               href={whatsappUrl} 
               className="w-full bg-primary text-white py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 shadow-2xl active:scale-95 transition-transform"
             >
                ACIONAR CENTRAL <Phone size={20} />
             </a>
          </div>
        </div>
      </div>
    </header>
  );
};
