
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
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Serviços', href: '/servicos' },
    { name: 'Depoimentos', href: '/depoimentos' },
    { name: 'Abrangência', href: '/abrangencia' },
    { name: 'Contato', href: '/contato' },
  ];

  const whatsappUrl = "https://wa.me/5511965020011?text=Olá,%20vi%20seu%20site%20e%20cliquei%20no%20contato%20do%20Cabeçalho.";

  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled || isMobileMenuOpen ? 'bg-white/95 backdrop-blur-xl shadow-2xl py-2 sm:py-3' : 'bg-transparent py-4 sm:py-6'}`}>
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 sm:gap-3 group cursor-pointer z-[110]">
          <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0">
            <Logo size={undefined} light={!isScrolled && !isMobileMenuOpen} className="transition-all duration-500 group-hover:scale-110" />
          </div>
          <div className="flex flex-col text-left">
            <p className={`font-black text-lg sm:text-2xl tracking-tighter leading-none transition-colors duration-500 ${isScrolled || isMobileMenuOpen ? 'text-accent' : 'text-white'}`}>
              IMPACTO
            </p>
            <p className={`font-bold text-[7px] sm:text-[9px] uppercase tracking-[0.2em] transition-colors duration-500 ${isScrolled || isMobileMenuOpen ? 'text-primary' : 'text-gray-300'}`}>
              RECUPERAÇÕES
            </p>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`font-bold text-xs uppercase tracking-widest hover:text-primary transition-all relative group ${isScrolled ? 'text-accent' : 'text-white'} ${location.pathname === link.href ? 'text-primary' : ''}`}
            >
              {link.name}
              <span className={`absolute -bottom-2 left-0 h-0.5 bg-primary transition-all duration-300 ${location.pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
          ))}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-5 py-2.5 rounded-xl font-black text-xs uppercase tracking-wider flex items-center gap-2 transition-all duration-300 shadow-xl hover:-translate-y-1 active:scale-95 ${isScrolled ? 'bg-primary text-white' : 'bg-white text-primary'}`}
          >
            <Phone size={14} /> (11) 96502-0011
          </a>
        </nav>

        <div className="flex lg:hidden items-center gap-2 z-[110]">
          <a href={whatsappUrl} target="_blank" className={`p-2.5 rounded-xl transition-all shadow-lg ${isScrolled || isMobileMenuOpen ? 'bg-primary text-white' : 'bg-white text-primary'}`}><Phone size={18} /></a>
          <button className={`p-2.5 rounded-xl transition-all ${isScrolled || isMobileMenuOpen ? 'text-accent bg-gray-100/50' : 'text-white bg-white/10'}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 bg-white z-[90] transition-all duration-500 ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
        <div className="h-full flex flex-col pt-24 px-6 pb-10">
          <div className="space-y-1">
            {navLinks.map((link, idx) => (
              <Link key={link.name} to={link.href} className="flex items-center justify-between py-5 border-b border-gray-50 text-2xl font-black text-accent uppercase tracking-tighter">
                {link.name} <ChevronRight className="text-primary" size={20} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};
