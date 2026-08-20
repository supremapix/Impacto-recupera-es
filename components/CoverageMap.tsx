import React from 'react';
import { Link } from 'react-router-dom';
import { Car, ShieldAlert, Phone, Activity, Target, ShieldCheck, ArrowRight } from 'lucide-react';
import { COMPANY } from '../src/data/company';
import Container from '../src/components/ui/Container';
import Section from '../src/components/ui/Section';

export const CoverageMap: React.FC = () => {
  return (
    <Section id="abrangencia" className="bg-white overflow-hidden border-t border-gray-100">
      <Container wide>
        {/* Anatomia Padronizada de Seção (PARTE 3.4) */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-[#5a6fa6] px-4 py-1.5 rounded-full mb-4 font-bold text-xs tracking-wider uppercase border border-blue-100">
              <Activity className="w-4 h-4 text-[#5a6fa6] animate-pulse" />
              <span>Malha Operacional de Pronta Resposta</span>
            </div>
            <h2 className="t-h2 font-black text-gray-900 tracking-tight mb-4 text-balance">
              Cobertura Nacional com Sede em Indaiatuba-SP
            </h2>
            <p className="t-body text-gray-600 max-w-[65ch] text-pretty">
              Com central de comando 24 horas em Indaiatuba (SP) e {COMPANY.redeParceiros}, garantimos pronta resposta ágil nos principais eixos logísticos, capitais e regiões metropolitanas do país.
            </p>
          </div>

          {/* Badges de Status (Legibilidade >= 13px) */}
          <div className="flex flex-wrap gap-3">
            {[
              { color: 'bg-gray-900', label: 'Unidades Móveis Parceiras', icon: <Car className="w-4 h-4" /> },
              { color: 'bg-[#5a6fa6]', label: 'Base Matriz Indaiatuba', icon: <Phone className="w-4 h-4" /> },
              { color: 'bg-emerald-700', label: 'Central de Comando 24h', icon: <ShieldAlert className="w-4 h-4" /> },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 bg-gray-50 px-4 py-3 rounded-xl border border-gray-200 text-xs sm:text-sm font-medium text-gray-800 shadow-sm"
              >
                <div className={`w-8 h-8 ${item.color} text-white rounded-lg flex items-center justify-center shrink-0`}>
                  {item.icon}
                </div>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tactical Map Card / Radar UI */}
        <div className="relative w-full rounded-3xl bg-gradient-to-br from-gray-900 via-slate-900 to-black p-8 sm:p-12 text-white border border-gray-800 shadow-2xl overflow-hidden mb-12">
          {/* Grid decorativo */}
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: 'linear-gradient(#5a6fa6 1px, transparent 1px), linear-gradient(90deg, #5a6fa6 1px, transparent 1px)',
              backgroundSize: '48px 48px',
            }}
          />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-gray-400 uppercase tracking-widest block mb-2">Base Principal</span>
                <p className="text-2xl font-black text-white">Indaiatuba - SP</p>
                <p className="text-xs text-gray-300 mt-2">
                  {COMPANY.endereco.logradouro} · Central de Operações e Monitoramento 24h
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-white/10 text-xs text-emerald-400 font-mono">
                ● Base Matriz Operando 24/7
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-gray-400 uppercase tracking-widest block mb-2">Região Metropolitana</span>
                <p className="text-2xl font-black text-white">RMC & Grande SP</p>
                <p className="text-xs text-gray-300 mt-2">
                  Campinas, Sorocaba, Jundiaí, Rodoanel Mário Covas e Marginais
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-white/10 text-xs text-[#8ba2d4] font-mono">
                ● Despacho Tático Imediato
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-gray-400 uppercase tracking-widest block mb-2">Rede Homologada</span>
                <p className="text-2xl font-black text-white">+630 Profissionais</p>
                <p className="text-xs text-gray-300 mt-2">
                  Parceiros estratégicos em capitais, interiores e principais rodovias do Brasil
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-white/10 text-xs text-gray-400 font-mono">
                ● Cobertura Nacional
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-gray-400 uppercase tracking-widest block mb-2">Tecnologia RF</span>
                <p className="text-2xl font-black text-white">Anti-Jammer</p>
                <p className="text-xs text-gray-300 mt-2">
                  Varredura de radiofrequência para localização mesmo com inibidores de sinal
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-white/10 text-xs text-emerald-400 font-mono">
                ● Protocolo CMD Ativo
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs sm:text-sm text-gray-300 font-medium text-center sm:text-left">
              Precisa de pronta resposta em uma cidade específica? Consulte nossas 27 cidades atendidas.
            </p>
            <Link
              to="/abrangencia"
              className="w-full sm:w-auto min-h-[44px] px-6 py-2.5 rounded-xl bg-white text-gray-950 font-bold text-xs sm:text-sm inline-flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors shrink-0"
            >
              <span>Ver Mapa Completo de Abrangência</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </Link>
          </div>
        </div>

        {/* 4.2 Grade Estratégica com Alturas Iguais (auto-rows-fr, items-stretch) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch auto-rows-fr">
          {[
            {
              title: 'Tecnologia Anti-Jammer',
              desc: 'Equipamentos de rastreamento com frequência secundária imune a bloqueadores de sinal convencionais utilizados em roubos de carga.',
              icon: <Target className="w-6 h-6 text-[#5a6fa6]" />,
            },
            {
              title: 'Rede de Parceiros Credenciados',
              desc: 'Mais de 630 profissionais parceiros capacitados e posicionados nos principais entroncamentos rodoviários de São Paulo e do Brasil.',
              icon: <ShieldCheck className="w-6 h-6 text-[#5a6fa6]" />,
            },
            {
              title: 'Central 24h Centralizada',
              desc: 'Comando unificado em Indaiatuba com operadores de plantão ininterrupto para despacho imediato de viaturas e averiguação em campo.',
              icon: <Activity className="w-6 h-6 text-[#5a6fa6]" />,
            },
          ].map((card, idx) => (
            <div
              key={idx}
              className="bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:border-gray-300 hover:bg-white transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#5a6fa6] flex items-center justify-center mb-6">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{card.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default CoverageMap;
