import React from 'react';
import { Link } from 'react-router-dom';
import {
  PhoneCall,
  Phone,
  ShieldCheck,
  Radio,
  MapPin,
  Users,
  ChevronRight,
  Clock,
  ExternalLink,
  ShieldAlert
} from 'lucide-react';
import { COMPANY } from '../src/data/company';
import Container from '../src/components/ui/Container';

export const HeroTaskLetreiro: React.FC = () => {
  // Itens do Letreiro Operacional Institucional (Todos Clicáveis)
  const tickerItems = [
    {
      label: 'PLANTÃO 24 HORAS',
      action: 'Acionar WhatsApp',
      href: COMPANY.telefone.whatsappUrl,
      isExternal: true,
    },
    {
      label: 'CENTRAL DE COMANDO',
      action: '(11) 96502-0011',
      href: `tel:${COMPANY.telefone.e164}`,
      isExternal: true,
    },
    {
      label: 'BASE MATRIZ OPERACIONAL',
      action: 'Indaiatuba / SP',
      href: '/servicos-em/indaiatuba',
      isExternal: false,
    },
    {
      label: 'REDE INTEGRADA',
      action: '+630 Homologados no Brasil',
      href: '/abrangencia',
      isExternal: false,
    },
    {
      label: 'TECNOLOGIA DE CAMPO',
      action: 'Varredura Anti-Jammer & RF',
      href: '/servicos',
      isExternal: false,
    },
    {
      label: 'PROTOCOLO DE SEGURANÇA',
      action: 'Ver Diretrizes 24h',
      href: '/conteudo',
      isExternal: false,
    }
  ];

  return (
    <div id="task-comando-24h" className="relative z-20 bg-[#0a0d14] border-b border-slate-800/80">
      {/* 1. LETREIRO OPERACIONAL DISCRETO & ELEGANTE */}
      <div className="relative bg-[#0d111a] border-y border-slate-800/70 py-2.5 overflow-hidden">
        {/* Desfoque suave nas extremidades para transição limpa */}
        <div className="absolute left-0 inset-y-0 w-8 sm:w-16 bg-gradient-to-r from-[#0d111a] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 inset-y-0 w-8 sm:w-16 bg-gradient-to-l from-[#0d111a] to-transparent z-10 pointer-events-none" />

        {/* Fita Contínua */}
        <div className="flex w-max animate-ticker items-center">
          {[...tickerItems, ...tickerItems].map((item, idx) => {
            const isExt = item.isExternal;
            const Component = isExt ? 'a' : Link;
            const extraProps = isExt
              ? { target: '_blank', rel: 'noopener noreferrer' }
              : {};

            return (
              <Component
                key={`${item.label}-${idx}`}
                to={!isExt ? item.href : undefined}
                href={isExt ? item.href : undefined}
                {...extraProps}
                className="mx-3 sm:mx-4 px-3 py-1 rounded-md text-xs tracking-wider uppercase flex items-center gap-2 transition-colors cursor-pointer text-slate-300 hover:text-white group border border-transparent hover:border-slate-700/60 hover:bg-white/[0.03]"
                title={`Acessar: ${item.action}`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#8ba2d4]/70 shrink-0" />
                <span className="font-bold text-slate-200">{item.label}</span>
                <span className="text-slate-400 font-normal lowercase tracking-normal hidden md:inline">
                  — {item.action}
                </span>
                <ChevronRight className="w-3 h-3 text-slate-500 group-hover:text-[#8ba2d4] transition-colors shrink-0" />
              </Component>
            );
          })}
        </div>
      </div>

      {/* 2. PAINEL DE COMANDO E PRONTA RESPOSTA */}
      <div className="relative py-12 sm:py-16 overflow-hidden">
        <Container wide className="relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Card com Estilo Institucional Sólido */}
            <div className="relative rounded-2xl bg-[#0f1420] border border-slate-800 p-6 sm:p-10 lg:p-12 shadow-xl">
              
              {/* Topo do Card: Status Operacional Real */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-6 border-b border-slate-800/80">
                <a
                  href={COMPANY.telefone.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-800/40 text-emerald-300 text-xs font-medium hover:bg-emerald-950/70 transition-colors"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                  <span>Plantão 24h Ativo · Central Matriz em Indaiatuba / SP</span>
                  <ChevronRight className="w-3 h-3 text-emerald-400" />
                </a>

                <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                  <Clock className="w-3.5 h-3.5 text-[#8ba2d4]" />
                  <span>Prontidão Imediata em Eixos Rodoviários</span>
                </div>
              </div>

              {/* Título Principal */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4 text-balance">
                Pronta resposta e recuperação tática de veículos e cargas
              </h2>

              {/* Texto Descritivo Oficial */}
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 max-w-4xl text-pretty">
                Atuação especializada na localização e recuperação de frotas e cargas roubadas ou furtadas. Central 24 horas em <strong className="text-white font-semibold">Indaiatuba/SP</strong> com malha de mais de <strong className="text-white font-semibold">630 profissionais homologados</strong> e varredura de radiofrequência anti-jammer em todo o território nacional.
              </p>

              {/* Botões de Ação Institucionais */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-8">
                {/* Botão 1: Acionar Plantão 24h */}
                <a
                  href={COMPANY.telefone.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[50px] px-7 py-3 rounded-xl bg-[#5a6fa6] hover:bg-[#4d5f8f] text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg transition-all border border-white/10 active:scale-[0.99]"
                  aria-label="Acionar Central de Emergência 24h via WhatsApp"
                >
                  <PhoneCall className="w-4 h-4 shrink-0" />
                  <span>Acionar Plantão 24h</span>
                  <ChevronRight className="w-4 h-4 shrink-0 opacity-70" />
                </a>

                {/* Botão 2: Ligar (11) 96502-0011 */}
                <a
                  href={`tel:${COMPANY.telefone.e164}`}
                  className="min-h-[50px] px-6 py-3 rounded-xl bg-slate-850 hover:bg-slate-800 bg-[#161c2b] border border-slate-700/80 hover:border-slate-600 text-white font-semibold text-sm sm:text-base flex items-center justify-center gap-2.5 transition-all active:scale-[0.99]"
                  aria-label={`Ligar para ${COMPANY.telefone.exibicao}`}
                >
                  <Phone className="w-4 h-4 text-[#8ba2d4] shrink-0" />
                  <span className="text-slate-400 text-xs uppercase tracking-wider">Ligar:</span>
                  <span className="font-bold tracking-wide">{COMPANY.telefone.exibicao}</span>
                </a>
              </div>

              {/* 3. ATALHOS OPERACIONAIS ESTRATÉGICOS */}
              <div className="pt-6 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {/* Item 1: Base Indaiatuba */}
                <Link
                  to="/servicos-em/indaiatuba"
                  className="p-3.5 rounded-xl bg-[#131826] hover:bg-[#182033] border border-slate-800 hover:border-slate-700 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-[#8ba2d4] shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-white group-hover:text-[#8ba2d4] transition-colors">
                        Base Indaiatuba / SP
                      </p>
                      <p className="text-[11px] text-slate-400">Sede e Coordenação 24h</p>
                    </div>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-white transition-colors" />
                </Link>

                {/* Item 2: +630 Profissionais Homologados */}
                <Link
                  to="/abrangencia"
                  className="p-3.5 rounded-xl bg-[#131826] hover:bg-[#182033] border border-slate-800 hover:border-slate-700 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <Users className="w-4 h-4 text-[#8ba2d4] shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-white group-hover:text-[#8ba2d4] transition-colors">
                        +630 Homologados
                      </p>
                      <p className="text-[11px] text-slate-400">Cobertura Nacional</p>
                    </div>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-white transition-colors" />
                </Link>

                {/* Item 3: Varredura Anti-Jammer */}
                <Link
                  to="/servicos"
                  className="p-3.5 rounded-xl bg-[#131826] hover:bg-[#182033] border border-slate-800 hover:border-slate-700 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <Radio className="w-4 h-4 text-[#8ba2d4] shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-white group-hover:text-[#8ba2d4] transition-colors">
                        Varredura Anti-Jammer
                      </p>
                      <p className="text-[11px] text-slate-400">Localização por RF</p>
                    </div>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-white transition-colors" />
                </Link>

                {/* Item 4: Escolta Homologada PF */}
                <Link
                  to="/servicos"
                  className="p-3.5 rounded-xl bg-[#131826] hover:bg-[#182033] border border-slate-800 hover:border-slate-700 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="w-4 h-4 text-[#8ba2d4] shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-white group-hover:text-[#8ba2d4] transition-colors">
                        Escolta Homologada
                      </p>
                      <p className="text-[11px] text-slate-400">Parceiros Lei 7.102/83</p>
                    </div>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-white transition-colors" />
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
