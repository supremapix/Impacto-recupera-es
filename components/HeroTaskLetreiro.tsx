import React from 'react';
import { Link } from 'react-router-dom';
import {
  PhoneCall,
  Phone,
  ShieldAlert,
  Radio,
  MapPin,
  Zap,
  ChevronRight,
  ShieldCheck,
  Activity,
  Navigation,
  Clock,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { COMPANY } from '../src/data/company';
import Container from '../src/components/ui/Container';

export const HeroTaskLetreiro: React.FC = () => {
  // Itens do Letreiro Digital Tático Interativo (Tudo Clicável)
  const tickerItems = [
    {
      tipo: 'emergencia',
      texto: '🚨 PLANTÃO 24H ATIVO',
      sub: 'Acionar WhatsApp',
      href: COMPANY.telefone.whatsappUrl,
      isExternal: true,
      tagColor: 'bg-red-500/20 text-red-300 border-red-500/40 hover:bg-red-500/30'
    },
    {
      tipo: 'fone',
      texto: '📞 CENTRAL DIRETA: (11) 96502-0011',
      sub: 'Ligar Agora',
      href: `tel:${COMPANY.telefone.e164}`,
      isExternal: true,
      tagColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40 hover:bg-emerald-500/30'
    },
    {
      tipo: 'sede',
      texto: '📍 BASE MATRIZ INDAIATUBA / SP',
      sub: 'Ver Polo Operacional',
      href: '/servicos-em/indaiatuba',
      isExternal: false,
      tagColor: 'bg-[#5a6fa6]/25 text-[#8ba2d4] border-[#5a6fa6]/40 hover:bg-[#5a6fa6]/35'
    },
    {
      tipo: 'abrangencia',
      texto: '⚡ +630 HOMOLOGADOS EM TODO O BRASIL',
      sub: 'Ver Abrangência',
      href: '/abrangencia',
      isExternal: false,
      tagColor: 'bg-amber-500/20 text-amber-300 border-amber-500/40 hover:bg-amber-500/30'
    },
    {
      tipo: 'tecnologia',
      texto: '📡 VARREDURA ANTI-JAMMER & RF',
      sub: 'Ver Tecnologia',
      href: '/servicos',
      isExternal: false,
      tagColor: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40 hover:bg-indigo-500/30'
    },
    {
      tipo: 'guias',
      texto: '🛡️ GUIAS OFICIAIS DE SEGURANÇA 24H',
      sub: 'Ler Artigos',
      href: '/conteudo',
      isExternal: false,
      tagColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40 hover:bg-cyan-500/30'
    }
  ];

  return (
    <div id="task-comando-24h" className="relative z-20 bg-[#0c101a] border-b border-slate-800 shadow-2xl">
      {/* 1. LETREIRO DIGITAL CONTÍNUO (STREAMING LIVE TICKER COM EFEITO CYBER/TÁTICO) */}
      <div className="relative bg-black/80 border-y border-[#5a6fa6]/30 py-2 sm:py-2.5 overflow-hidden backdrop-blur-md">
        {/* Glow lateral para fusão suave */}
        <div className="absolute left-0 inset-y-0 w-12 sm:w-20 bg-gradient-to-r from-[#0c101a] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 inset-y-0 w-12 sm:w-20 bg-gradient-to-l from-[#0c101a] to-transparent z-10 pointer-events-none" />

        {/* Fita Animada Contínua (Duplicada para Loop Infinito Suave) */}
        <div className="flex w-max animate-ticker">
          {[...tickerItems, ...tickerItems].map((item, idx) => {
            const isExt = item.isExternal;
            const Component = isExt ? 'a' : Link;
            const extraProps = isExt
              ? { target: '_blank', rel: 'noopener noreferrer' }
              : {};

            return (
              <Component
                key={`${item.texto}-${idx}`}
                to={!isExt ? item.href : undefined}
                href={isExt ? item.href : undefined}
                {...extraProps}
                className={`mx-2 sm:mx-3 px-3 sm:px-4 py-1.5 rounded-full border text-xs sm:text-[13px] font-mono font-bold tracking-wide flex items-center gap-2 transition-all duration-200 cursor-pointer shadow-sm hover:scale-105 active:scale-95 shrink-0 ${item.tagColor}`}
                title={`Clique para: ${item.sub}`}
              >
                <span>{item.texto}</span>
                <span className="text-[10px] opacity-70 border-l border-current/30 pl-2 uppercase font-sans font-semibold hidden md:inline">
                  {item.sub}
                </span>
                <ExternalLink className="w-3 h-3 opacity-60 shrink-0" />
              </Component>
            );
          })}
        </div>
      </div>

      {/* 2. TASK PRINCIPAL DE COMANDO & ACIONAMENTO 24H */}
      <div className="relative py-10 sm:py-14 lg:py-16 overflow-hidden">
        {/* Elementos Gráficos de Iluminação Tática */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#5a6fa6]/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: 'radial-gradient(#8ba2d4 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />
        </div>

        <Container wide className="relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Card Tático Holográfico com Borda Iluminada */}
            <div className="relative rounded-3xl bg-gradient-to-b from-slate-900/95 via-slate-900/90 to-[#0d121f]/95 border border-slate-700/80 hover:border-[#5a6fa6]/70 shadow-[0_0_50px_rgba(0,0,0,0.6)] p-6 sm:p-10 lg:p-12 transition-all duration-300 backdrop-blur-2xl">
              
              {/* Badge Clicável: Plantão 24h Ativo · Indaiatuba & Cobertura Brasil */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <a
                  href={COMPANY.telefone.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 hover:border-emerald-400 px-4 py-2 rounded-full text-slate-200 transition-all shadow-md group cursor-pointer"
                  title="Clique para acionar a central no WhatsApp"
                >
                  <span className="flex h-2.5 w-2.5 relative shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                  </span>
                  <span className="text-xs sm:text-sm font-mono font-bold tracking-wide text-emerald-300">
                    Plantão 24h Ativo · Indaiatuba & Cobertura Brasil
                  </span>
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-400 group-hover:translate-x-1 transition-transform" />
                </a>

                {/* Status Operacional Auxiliar Clicável */}
                <Link
                  to="/servicos"
                  className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-[#8ba2d4] transition-colors py-1 px-3 rounded-lg bg-black/40 border border-white/5 hover:border-white/15"
                >
                  <Clock className="w-3.5 h-3.5 text-[#8ba2d4]" />
                  <span>Despacho em Minutos</span>
                </Link>
              </div>

              {/* Título Principal Requisitado */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] font-extrabold text-white tracking-tight leading-[1.14] mb-5 text-balance">
                Pronta resposta e recuperação tática de veículos e cargas
              </h2>

              {/* Texto Descritivo Requisitado */}
              <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed mb-8 max-w-4xl text-pretty font-normal">
                Atuação especializada na localização e recuperação de frotas e cargas roubadas ou furtadas. Central 24 horas em <strong className="text-white font-semibold">Indaiatuba/SP</strong> com malha de mais de <strong className="text-white font-semibold">630 profissionais homologados</strong> e varredura de radiofrequência anti-jammer em todo o território nacional.
              </p>

              {/* Botões de Ação Clicáveis com Efeitos Premium */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
                {/* Botão 1: Acionar Plantão 24h */}
                <a
                  href={COMPANY.telefone.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[54px] px-8 py-3.5 rounded-2xl bg-gradient-to-r from-[#5a6fa6] via-[#657db8] to-[#4b5e91] hover:from-[#6b82bc] hover:to-[#556ca3] text-white font-extrabold text-base sm:text-lg flex items-center justify-center gap-3 shadow-[0_0_25px_rgba(90,111,166,0.4)] hover:shadow-[0_0_35px_rgba(90,111,166,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all ring-2 ring-white/15 hover:ring-[#8ba2d4]"
                  aria-label="Acionar Central de Emergência 24h via WhatsApp"
                >
                  <PhoneCall className="w-5 h-5 shrink-0 animate-pulse" />
                  <span>Acionar Plantão 24h</span>
                  <ChevronRight className="w-5 h-5 shrink-0 opacity-80" />
                </a>

                {/* Botão 2: Ligar (11) 96502-0011 */}
                <a
                  href={`tel:${COMPANY.telefone.e164}`}
                  className="min-h-[54px] px-7 py-3.5 rounded-2xl bg-slate-800/90 hover:bg-slate-800 border border-slate-600/80 hover:border-[#8ba2d4] text-white font-bold text-base sm:text-lg flex items-center justify-center gap-3 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all"
                  aria-label={`Ligar para ${COMPANY.telefone.exibicao}`}
                >
                  <Phone className="w-5 h-5 text-[#8ba2d4] shrink-0" />
                  <span className="text-xs font-mono uppercase tracking-wider text-[#8ba2d4]">Ligar:</span>
                  <span className="font-extrabold tracking-wide">{COMPANY.telefone.exibicao}</span>
                </a>
              </div>

              {/* 3. GRID DE ATALHOS TÁTICOS (TODOS CLICÁVEIS COM EFEITO ELEGANTE) */}
              <div className="pt-6 border-t border-slate-700/60 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {/* Item 1: Base Indaiatuba */}
                <Link
                  to="/servicos-em/indaiatuba"
                  className="p-3.5 rounded-xl bg-black/40 hover:bg-black/70 border border-white/5 hover:border-[#5a6fa6]/50 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2.5">
                    <MapPin className="w-4 h-4 text-[#8ba2d4] shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-white group-hover:text-[#8ba2d4] transition-colors">
                        Base Indaiatuba / SP
                      </p>
                      <p className="text-[11px] text-slate-400 font-mono">Sede Operacional</p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                </Link>

                {/* Item 2: +630 Profissionais Homologados */}
                <Link
                  to="/abrangencia"
                  className="p-3.5 rounded-xl bg-black/40 hover:bg-black/70 border border-white/5 hover:border-[#5a6fa6]/50 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2.5">
                    <Zap className="w-4 h-4 text-amber-400 shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-white group-hover:text-amber-300 transition-colors">
                        +630 Homologados
                      </p>
                      <p className="text-[11px] text-slate-400 font-mono">Cobertura Brasil</p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                </Link>

                {/* Item 3: Varredura Anti-Jammer */}
                <Link
                  to="/servicos"
                  className="p-3.5 rounded-xl bg-black/40 hover:bg-black/70 border border-white/5 hover:border-[#5a6fa6]/50 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2.5">
                    <Radio className="w-4 h-4 text-emerald-400 shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-white group-hover:text-emerald-300 transition-colors">
                        Varredura Anti-Jammer
                      </p>
                      <p className="text-[11px] text-slate-400 font-mono">Detecção de Sinal</p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                </Link>

                {/* Item 4: Escolta Homologada PF */}
                <Link
                  to="/servicos"
                  className="p-3.5 rounded-xl bg-black/40 hover:bg-black/70 border border-white/5 hover:border-[#5a6fa6]/50 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-indigo-400 shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-white group-hover:text-indigo-300 transition-colors">
                        Escolta Armada PF
                      </p>
                      <p className="text-[11px] text-slate-400 font-mono">Parceiras Lei 7.102</p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default HeroTaskLetreiro;
