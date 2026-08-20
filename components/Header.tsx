import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronRight, Instagram, Facebook, Linkedin, ShieldCheck } from 'lucide-react';
import { Logo } from './Logo';
import { COMPANY } from '../src/data/company';
import { Z_INDEX } from '../src/constants/zIndex';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fechar ao trocar de rota e liberar o scroll da página
  useEffect(() => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = 'unset';
  }, [location.pathname]);

  // Fechar automaticamente se a tela for redimensionada para desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        document.body.style.overflow = 'unset';
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);

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

  // Cleanup de segurança ao desmontar
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const toggleMobileMenu = () => {
    const nextState = !isMobileMenuOpen;
    setIsMobileMenuOpen(nextState);
    document.body.style.overflow = nextState ? 'hidden' : 'unset';
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = 'unset';
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Serviços', href: '/servicos' },
    { name: 'Depoimentos', href: '/depoimentos' },
    { name: 'Abrangência', href: '/abrangencia' },
    { name: 'Contato', href: '/contato' },
  ];

  const showBackground = isScrolled;

  return (
    <>
      {/* Link de Acessibilidade: Pular para o Conteúdo */}
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2.5 focus:bg-[#5a6fa6] focus:text-white focus:font-bold focus:rounded-lg focus:shadow-xl focus:outline-none"
      >
        Pular para o conteúdo principal
      </a>

      {/* Header Principal Fixo */}
      <header
        style={{ zIndex: Z_INDEX.header }}
        className={`fixed top-0 left-0 right-0 transition-all duration-300 ease-in-out ${
          showBackground
            ? 'bg-slate-950/95 backdrop-blur-md shadow-lg py-3 sm:py-4 border-b border-slate-800/80'
            : 'bg-gradient-to-b from-black/70 via-black/30 to-transparent py-4 sm:py-6'
        }`}
      >
        <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-8 lg:px-12 flex justify-between items-center gap-4 sm:gap-6 xl:gap-10">
          {/* LOGO */}
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="flex items-center gap-2.5 sm:gap-3 shrink-0 group focus:outline-none focus:ring-2 focus:ring-[#5a6fa6] rounded-lg p-1"
            aria-label="Impacto Recuperações - Página Inicial"
          >
            <div className="w-9 h-9 sm:w-11 sm:h-11 shrink-0">
              <Logo light className="w-full h-full transition-transform duration-300 group-hover:scale-105" />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-black text-base sm:text-xl xl:text-2xl tracking-tight leading-none text-white">
                IMPACTO
              </span>
              <span className="font-bold text-[9px] sm:text-xs uppercase tracking-[0.2em] text-[#8ba2d4]">
                RECUPERAÇÕES
              </span>
            </div>
          </Link>

          {/* DESKTOP NAV (Breakpoint xl: 1280px) */}
          <nav className="hidden xl:flex items-center gap-6 2xl:gap-8" aria-label="Navegação Principal">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`font-bold text-[13px] uppercase tracking-wider transition-colors relative py-1.5 ${
                  location.pathname === link.href
                    ? 'text-[#8ba2d4] font-extrabold'
                    : 'text-slate-200 hover:text-white'
                }`}
              >
                {link.name}
                {location.pathname === link.href && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#8ba2d4] rounded-full" />
                )}
              </Link>
            ))}

            {/* CTA TELEFONE DESKTOP */}
            <a
              href={`tel:${COMPANY.telefone.e164}`}
              className="min-h-[46px] px-5 rounded-xl font-bold text-xs uppercase tracking-wider inline-flex items-center gap-2.5 whitespace-nowrap shrink-0 transition-all bg-[#5a6fa6] text-white hover:bg-[#4b5e91] shadow-md hover:-translate-y-0.5 active:translate-y-0 border border-white/10"
            >
              <Phone className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>{COMPANY.telefone.exibicao}</span>
            </a>
          </nav>

          {/* MOBILE CONTROLS (< 1280px: Telefone Rápido e Botão Menu) */}
          <div className="flex xl:hidden items-center gap-2">
            <a
              href={`tel:${COMPANY.telefone.e164}`}
              aria-label={`Ligar para a Central 24h: ${COMPANY.telefone.exibicao}`}
              className="min-w-[42px] min-h-[42px] w-10 h-10 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white flex items-center justify-center transition-all active:scale-95 shadow-sm"
            >
              <Phone className="w-4 h-4 text-[#8ba2d4]" />
            </a>

            <button
              type="button"
              id="btn-mobile-menu-toggle"
              onClick={toggleMobileMenu}
              aria-expanded={isMobileMenuOpen}
              aria-controls="menu-mobile-painel"
              aria-label={isMobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
              className="min-w-[42px] min-h-[42px] w-10 h-10 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white flex items-center justify-center transition-all active:scale-95 shadow-sm"
            >
              <Menu className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </header>

      {/* PAINEL MENU MOBILE FULLSCREEN (z-[80] - Acima de qualquer elemento/botão flutuante) */}
      <div
        id="menu-mobile-painel"
        aria-hidden={!isMobileMenuOpen}
        style={{ zIndex: Z_INDEX.modal }}
        className={`xl:hidden fixed inset-0 bg-[#0a0d14]/98 backdrop-blur-2xl text-white transition-all duration-300 ease-in-out flex flex-col ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto translate-x-0'
            : 'opacity-0 pointer-events-none translate-x-full'
        }`}
      >
        {/* Barra Superior do Menu Mobile */}
        <div className="px-5 py-4 border-b border-slate-800/80 flex items-center justify-between shrink-0 bg-slate-950/80">
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="flex items-center gap-2.5 focus:outline-none"
            aria-label="Impacto Recuperações"
          >
            <div className="w-9 h-9 shrink-0">
              <Logo light className="w-full h-full" />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-black text-base tracking-tight leading-none text-white">
                IMPACTO
              </span>
              <span className="font-bold text-[9px] uppercase tracking-[0.2em] text-[#8ba2d4]">
                RECUPERAÇÕES
              </span>
            </div>
          </Link>

          <button
            type="button"
            id="btn-close-mobile-menu"
            onClick={closeMobileMenu}
            aria-label="Fechar menu"
            className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors active:scale-95"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Conteúdo Rolável do Menu Mobile com Suporte a Safe-Area no rodapé */}
        <div className="flex-1 overflow-y-auto overscroll-contain px-5 py-6 flex flex-col justify-between space-y-6">
          {/* Lista de Navegação Principal */}
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={closeMobileMenu}
                  className={`flex items-center justify-between py-3.5 px-4 rounded-2xl text-base font-bold uppercase tracking-wider transition-all active:scale-[0.99] ${
                    isActive
                      ? 'bg-[#5a6fa6]/25 text-[#8ba2d4] border border-[#5a6fa6]/40 shadow-sm'
                      : 'text-slate-200 hover:bg-white/5 border border-transparent'
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    {isActive && <span className="w-2 h-2 rounded-full bg-[#8ba2d4] animate-pulse" />}
                    <span>{link.name}</span>
                  </span>
                  <ChevronRight className={`w-4 h-4 ${isActive ? 'text-[#8ba2d4]' : 'text-slate-500'}`} />
                </Link>
              );
            })}
          </nav>

          {/* Seção Tática de Contato e Plantão 24h */}
          <div className="space-y-4 pt-4 border-t border-slate-800/80">
            {/* Box Plantão de Emergência */}
            <div className="bg-slate-900/90 p-4 rounded-2xl border border-slate-800 text-center">
              <div className="flex items-center justify-center gap-1.5 mb-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[11px] text-emerald-400 font-mono font-bold uppercase tracking-wider">
                  Plantão Tático 24 Horas
                </span>
              </div>
              <a
                href={`tel:${COMPANY.telefone.e164}`}
                className="text-xl font-black text-white hover:text-[#8ba2d4] transition-colors font-mono tracking-tight block"
              >
                {COMPANY.telefone.exibicao}
              </a>
            </div>

            {/* Botão de Acionamento Imediato WhatsApp */}
            <a
              href={COMPANY.telefone.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full min-h-[50px] bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-white font-bold text-sm sm:text-base rounded-2xl flex items-center justify-center gap-2.5 shadow-lg shadow-emerald-950/40 transition-all active:scale-[0.98]"
            >
              <Phone className="w-4 h-4" />
              <span>Acionar Central via WhatsApp</span>
            </a>

            {/* Redes Sociais */}
            <div className="flex items-center justify-center gap-3 pt-2">
              <a
                href={COMPANY.redes.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Oficial Impacto"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={COMPANY.redes.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Oficial Impacto"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={COMPANY.redes.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Oficial Impacto"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
