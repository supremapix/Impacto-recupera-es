import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronRight, Instagram, Facebook, Linkedin } from 'lucide-react';
import { Logo } from './Logo';
import { COMPANY } from '../src/data/company';
import { Z_INDEX } from '../src/constants/zIndex';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2.4 Fechar ao trocar de rota e controlar scroll lock
  useEffect(() => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = 'unset';
  }, [location.pathname]);

  // Fechar com tecla ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        document.body.style.overflow = 'unset';
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    const nextState = !isMobileMenuOpen;
    setIsMobileMenuOpen(nextState);
    document.body.style.overflow = nextState ? 'hidden' : 'unset';
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Serviços', href: '/servicos' },
    { name: 'Artigos', href: '/conteudo' },
    { name: 'Depoimentos', href: '/depoimentos' },
    { name: 'Abrangência', href: '/abrangencia' },
    { name: 'Contato', href: '/contato' },
  ];

  const showBackground = isScrolled || isMobileMenuOpen;

  return (
    <>
      {/* 2.7 Link de Acessibilidade: Pular para o Conteúdo */}
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2.5 focus:bg-[#5a6fa6] focus:text-white focus:font-bold focus:rounded-lg focus:shadow-xl focus:outline-none"
      >
        Pular para o conteúdo principal
      </a>

      <header
        style={{ zIndex: Z_INDEX.header }}
        className={`fixed top-0 left-0 right-0 transition-all duration-300 ease-in-out ${
          showBackground
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3 sm:py-4 border-b border-gray-100'
            : 'bg-gradient-to-b from-black/60 via-black/30 to-transparent py-4 sm:py-6'
        }`}
      >
        <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-12 flex justify-between items-center gap-6 xl:gap-10">
          {/* LOGO (2.3: shrink-0 e sem colisão) */}
          <Link
            to="/"
            className="flex items-center gap-3 shrink-0 group focus:outline-none focus:ring-2 focus:ring-[#5a6fa6] rounded-lg p-1"
            aria-label="Impacto Recuperações - Página Inicial"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0">
              <Logo light={!showBackground} className="transition-transform duration-300 group-hover:scale-105" />
            </div>
            <div className="flex flex-col text-left">
              <span
                className={`font-black text-lg sm:text-xl xl:text-2xl tracking-tight leading-none transition-colors duration-300 ${
                  showBackground ? 'text-gray-950' : 'text-white'
                }`}
              >
                IMPACTO
              </span>
              <span
                className={`font-bold text-[10px] sm:text-xs uppercase tracking-[0.2em] transition-colors duration-300 ${
                  showBackground ? 'text-[#5a6fa6]' : 'text-gray-300'
                }`}
              >
                RECUPERAÇÕES
              </span>
            </div>
          </Link>

          {/* DESKTOP NAV (2.3: Breakpoint xl: 1280px) */}
          <nav className="hidden xl:flex items-center gap-6 2xl:gap-8" aria-label="Navegação Principal">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`font-bold text-[13px] uppercase tracking-wider transition-colors relative py-1.5 ${
                  showBackground ? 'text-gray-800' : 'text-white'
                } ${
                  location.pathname === link.href
                    ? 'text-[#5a6fa6] font-extrabold'
                    : 'hover:text-[#5a6fa6]'
                }`}
              >
                {link.name}
                {location.pathname === link.href && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#5a6fa6] rounded-full" />
                )}
              </Link>
            ))}

            {/* CTA TELEFONE DESKTOP (2.3: whitespace-nowrap, min-h-[48px], shrink-0) */}
            <a
              href={`tel:${COMPANY.telefone.e164}`}
              className={`min-h-[48px] h-12 px-6 rounded-xl font-bold text-xs uppercase tracking-wider inline-flex items-center gap-2.5 whitespace-nowrap shrink-0 transition-all shadow-md hover:-translate-y-0.5 active:translate-y-0 ${
                showBackground
                  ? 'bg-[#5a6fa6] text-white hover:bg-[#4b5d8d]'
                  : 'bg-white text-gray-900 hover:bg-[#5a6fa6] hover:text-white'
              }`}
            >
              <Phone className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>{COMPANY.telefone.exibicao}</span>
            </a>
          </nav>

          {/* MOBILE CONTROLS (< 1280px: Hamburguer e Telefone) */}
          <div className="flex xl:hidden items-center gap-2.5">
            <a
              href={`tel:${COMPANY.telefone.e164}`}
              aria-label={`Ligar para a Central 24h: ${COMPANY.telefone.exibicao}`}
              className={`min-w-[44px] min-h-[44px] w-11 h-11 rounded-xl flex items-center justify-center transition-colors shadow-sm ${
                showBackground ? 'bg-[#5a6fa6] text-white' : 'bg-white text-gray-900'
              }`}
            >
              <Phone className="w-5 h-5 shrink-0" />
            </a>

            <button
              type="button"
              onClick={toggleMobileMenu}
              aria-expanded={isMobileMenuOpen}
              aria-controls="menu-mobile-painel"
              aria-label={isMobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
              className={`min-w-[44px] min-h-[44px] w-11 h-11 rounded-xl flex items-center justify-center transition-colors ${
                showBackground ? 'bg-gray-100 text-gray-900' : 'bg-white/20 text-white backdrop-blur-md'
              }`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* 2.4 MENU MOBILE PAINEL */}
        <div
          id="menu-mobile-painel"
          ref={mobileMenuRef}
          style={{ zIndex: Z_INDEX.mobileMenu }}
          aria-hidden={!isMobileMenuOpen}
          className={`xl:hidden fixed inset-0 top-[68px] bg-gray-950 text-white transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? 'opacity-100 pointer-events-auto translate-y-0'
              : 'opacity-0 pointer-events-none -translate-y-4'
          }`}
        >
          <div className="h-[calc(100vh-68px)] flex flex-col justify-between p-6 sm:p-8 overflow-y-auto">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center justify-between py-3.5 px-4 rounded-xl text-lg font-bold uppercase tracking-wide transition-colors ${
                    location.pathname === link.href
                      ? 'bg-[#5a6fa6]/20 text-[#5a6fa6] border-l-4 border-[#5a6fa6]'
                      : 'text-gray-200 hover:bg-white/5'
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-5 h-5 text-gray-500" />
                </Link>
              ))}
            </nav>

            <div className="mt-8 pt-6 border-t border-gray-800 space-y-6">
              {/* Plantão Central */}
              <div className="bg-gray-900 p-5 rounded-2xl border border-gray-800 text-center">
                <span className="text-[13px] text-gray-400 font-bold uppercase tracking-widest block mb-1">
                  Plantão de Emergência 24h
                </span>
                <a
                  href={`tel:${COMPANY.telefone.e164}`}
                  className="text-2xl font-black text-white hover:text-[#5a6fa6] transition-colors"
                >
                  {COMPANY.telefone.exibicao}
                </a>
              </div>

              {/* Botão Acionar WhatsApp */}
              <a
                href={COMPANY.telefone.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full min-h-[52px] bg-[#5a6fa6] hover:bg-[#4b5d8d] text-white font-bold text-base rounded-xl flex items-center justify-center gap-3 shadow-lg transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>Acionar Central via WhatsApp</span>
              </a>

              {/* 2.1 Redes Sociais no Menu Mobile */}
              <div className="flex items-center justify-center gap-4 pt-2">
                <a
                  href={COMPANY.redes.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Oficial Impacto"
                  className="min-w-[44px] min-h-[44px] w-11 h-11 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href={COMPANY.redes.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook Oficial Impacto"
                  className="min-w-[44px] min-h-[44px] w-11 h-11 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href={COMPANY.redes.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Oficial Impacto"
                  className="min-w-[44px] min-h-[44px] w-11 h-11 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
