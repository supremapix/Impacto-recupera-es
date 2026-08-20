import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, MapPin, Zap, PhoneCall } from 'lucide-react';
import { Logo } from './Logo';
import { COMPANY } from '../src/data/company';
import Container from '../src/components/ui/Container';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero-principal"
      className="relative min-h-[100svh] md:min-h-[720px] 2xl:min-h-[820px] [@media(min-width:1024px)_and_(max-height:1100px)]:max-h-[86vh] flex items-center bg-[#15171e] overflow-hidden pt-28 pb-20 md:py-32"
    >
      {/* Fundo Tático Limpo e Abstrato (Sem fotos de stock falsas - PARTE 7.4) */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-1/4 -right-1/4 w-[700px] h-[700px] rounded-full bg-gradient-to-bl from-[#5a6fa6]/25 via-blue-900/10 to-transparent blur-3xl" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#5a6fa6]/20 via-slate-900/10 to-transparent blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(#5a6fa6_1px,transparent_1px)] [background-size:32px_32px] opacity-15" />
      </div>

      <Container wide className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 2xl:gap-20">
          {/* Lado Esquerdo: Conteúdo Textual e SEO */}
          <div className="w-full lg:w-[62%] text-center lg:text-left">
            {/* Badge de Status Oficial */}
            <div className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-md border border-white/15 px-4 py-2 rounded-full text-white mb-6 shadow-md">
              <ShieldCheck className="w-4 h-4 text-[#8ba2d4] shrink-0 animate-pulse" />
              <span className="text-[13px] font-bold tracking-wider uppercase">
                Plantão 24h · Atendimento em Todo o Brasil
              </span>
            </div>

            {/* Subtítulo Tático */}
            <p className="text-[#8ba2d4] font-bold text-sm sm:text-base uppercase tracking-[0.2em] mb-3">
              Pronta Resposta & Localização Tática
            </p>

            {/* H1 Completo e Estável para Crawlers (PARTE 3.1) */}
            <h1 className="t-display font-black text-white tracking-tight mb-6 text-balance">
              Recuperação de veículos e cargas com pronta resposta 24h
            </h1>

            {/* 8.1 Bloco de Resposta Direta (GEO / AIO / IA) */}
            <div className="bg-white/5 border-l-4 border-[#5a6fa6] p-4 sm:p-5 rounded-r-2xl mb-8 max-w-[65ch] mx-auto lg:mx-0 text-left">
              <p className="text-gray-200 text-sm sm:text-base leading-relaxed text-pretty">
                A <strong>Impacto Recuperações</strong> é uma empresa de pronta resposta com base em{' '}
                <strong>Indaiatuba (SP)</strong> e atuação em todo o Brasil, especializada na recuperação
                de veículos e cargas roubados ou furtados. A central opera 24 horas por dia, com{' '}
                <strong>{COMPANY.redeParceiros}</strong>, e aciona equipes em campo em minutos pelo
                telefone <strong>{COMPANY.telefone.exibicao}</strong>.
              </p>
            </div>

            {/* 3.3 Botões do Hero: w-full no mobile empilhados; sm:w-auto lado a lado; min-h-[52px] */}
            <div className="flex flex-col sm:flex-row gap-3.5 justify-center lg:justify-start mb-10">
              <a
                href={COMPANY.telefone.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto min-h-[52px] px-8 py-3.5 rounded-xl bg-[#5a6fa6] hover:bg-[#4b5d8d] text-white font-bold text-base flex items-center justify-center gap-3 shadow-xl transition-colors shrink-0"
              >
                <PhoneCall className="w-5 h-5 shrink-0" />
                <span>Acionar Central de Emergência</span>
                <ArrowRight className="w-5 h-5 shrink-0" />
              </a>

              <Link
                to="/servicos"
                className="w-full sm:w-auto min-h-[52px] px-8 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-base flex items-center justify-center transition-colors shrink-0"
              >
                <span>Conhecer Serviços</span>
              </Link>
            </div>

            {/* Badges de Operação Legíveis (>= 13px) */}
            <div className="flex flex-wrap items-center gap-4 justify-center lg:justify-start">
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-3 rounded-xl">
                <MapPin className="w-5 h-5 text-[#8ba2d4] shrink-0" />
                <div className="text-left">
                  <p className="text-white font-bold text-[13px] leading-tight">Base Indaiatuba/SP</p>
                  <p className="text-gray-400 text-xs mt-0.5">Cobertura em todo o Brasil</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-3 rounded-xl">
                <Zap className="w-5 h-5 text-[#8ba2d4] shrink-0" />
                <div className="text-left">
                  <p className="text-white font-bold text-[13px] leading-tight">Rede de Parceiros</p>
                  <p className="text-gray-400 text-xs mt-0.5">+630 profissionais no país</p>
                </div>
              </div>
            </div>
          </div>

          {/* Lado Direito: Emblema Oficial da Marca */}
          <div className="hidden lg:flex w-full lg:w-[38%] justify-center 2xl:justify-end">
            <div className="relative w-full max-w-[400px] aspect-square rounded-3xl bg-gradient-to-b from-white/10 to-white/5 border border-white/15 p-8 flex flex-col items-center justify-center shadow-2xl backdrop-blur-xl">
              <div className="w-28 h-28 mb-6 drop-shadow-lg">
                <Logo light className="w-full h-full" />
              </div>
              <p className="text-white font-black text-3xl tracking-tight text-center">
                IMPACTO
              </p>
              <p className="text-[#8ba2d4] font-bold text-xs uppercase tracking-[0.3em] mt-1 text-center">
                RECUPERAÇÕES
              </p>

              <div className="mt-8 pt-6 border-t border-white/10 w-full text-center">
                <p className="text-xs text-gray-300 font-mono">
                  Central Ininterrupta 24 Horas
                </p>
                <p className="text-white font-mono font-bold text-sm mt-1">
                  {COMPANY.telefone.exibicao}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
