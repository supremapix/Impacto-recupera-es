import React from 'react';
import { Truck, ShieldAlert, Target, Zap, Clock, Map, PhoneCall } from 'lucide-react';
import { COMPANY } from '../src/data/company';
import Container from '../src/components/ui/Container';
import Section from '../src/components/ui/Section';

/**
 * Seção de Recuperação de Cargas e Escolta Especializada (PARTE 1 & DADOS OFICIAIS)
 * // TODO: inserir nº da autorização da PF da parceira, ou remover o serviço.
 */
export const CargoEscortSection: React.FC = () => {
  return (
    <Section id="divisao-cargas" className="bg-[#171922] text-white relative overflow-hidden">
      {/* Decoração Tática Vetorial */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#5a6fa6]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl" />
      </div>

      <Container>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Coluna Texto */}
          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center gap-2 bg-[#5a6fa6]/20 border border-white/10 px-4 py-2 rounded-full mb-6">
              <Truck className="w-4 h-4 text-[#8ba2d4] shrink-0" />
              <span className="text-[13px] font-bold uppercase tracking-wider text-gray-200">
                Divisão de Cargas & Frotas Pesadas
              </span>
            </div>

            <h2 className="t-h2 font-black tracking-tight text-white mb-6 text-balance">
              Recuperação de cargas e <br />
              <span className="text-[#8ba2d4]">escolta para rodovias</span>
            </h2>

            <p className="t-body text-gray-300 mb-6 max-w-[65ch] text-pretty">
              Atendimento tático especializado em caminhões pesados, carretas e cargas de alto valor agregado.
              A escolta armada é <strong>executada exclusivamente por empresas parceiras autorizadas pela Polícia Federal</strong> nos termos da Lei 7.102/83.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                {
                  icon: <ShieldAlert className="w-6 h-6 text-[#8ba2d4]" />,
                  label: 'Escolta Homologada PF',
                  desc: 'Executada por parceiros com alvará da Polícia Federal',
                },
                {
                  icon: <Target className="w-6 h-6 text-[#8ba2d4]" />,
                  label: 'Varredura Anti-Jammer',
                  desc: 'Detecção de sinais RF em zonas de sombra',
                },
                {
                  icon: <Zap className="w-6 h-6 text-[#8ba2d4]" />,
                  label: 'Pronta Resposta Rodoviária',
                  desc: 'Acionamento ágil nos principais eixos de SP e BR',
                },
                {
                  icon: <Map className="w-6 h-6 text-[#8ba2d4]" />,
                  label: 'Monitoramento 24h',
                  desc: 'Integração direta com gerenciadoras de risco',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-5 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors flex flex-col justify-between"
                >
                  <div className="mb-3">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-sm text-white">{item.label}</h4>
                    <p className="text-xs text-gray-400 mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href={COMPANY.telefone.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto min-h-[52px] px-8 py-3.5 rounded-xl bg-[#5a6fa6] hover:bg-[#4b5d8d] text-white font-bold text-sm sm:text-base inline-flex items-center justify-center gap-3 shadow-xl transition-colors"
            >
              <PhoneCall className="w-5 h-5 shrink-0" />
              <span>Solicitar Apoio para Carga</span>
            </a>
          </div>

          {/* Coluna Visual e Painel de Prontidão (Sem fotos de stock) */}
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-3xl bg-gradient-to-b from-gray-900 to-black p-8 sm:p-10 border border-white/15 shadow-2xl overflow-hidden">
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-6">
                  <div>
                    <span className="text-xs font-mono text-gray-400 uppercase tracking-wider block">Central de Despacho</span>
                    <span className="text-xl font-black text-white">Status de Prontidão 24h</span>
                  </div>
                  <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/30 px-3 py-1 rounded-full text-emerald-400 text-xs font-mono">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>ONLINE</span>
                  </div>
                </div>

                <div className="space-y-4 text-sm text-gray-300 font-mono">
                  <div className="bg-white/5 p-4 rounded-xl border border-white/5 flex items-center justify-between">
                    <span className="text-gray-400">Base Central:</span>
                    <span className="font-bold text-white">Indaiatuba / SP</span>
                  </div>
                  <div className="bg-white/5 p-4 rounded-xl border border-white/5 flex items-center justify-between">
                    <span className="text-gray-400">Malha de Apoio:</span>
                    <span className="font-bold text-white">+630 Profissionais Parceiros</span>
                  </div>
                  <div className="bg-white/5 p-4 rounded-xl border border-white/5 flex items-center justify-between">
                    <span className="text-gray-400">Frequência RF:</span>
                    <span className="font-bold text-emerald-400">Monitoramento Ativo</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#5a6fa6]/20 border border-[#5a6fa6]/40 flex items-center gap-3">
                  <Clock className="w-6 h-6 text-[#8ba2d4] shrink-0" />
                  <div>
                    <p className="text-[13px] font-bold text-white">Pronta Resposta Imediata</p>
                    <p className="text-xs text-gray-300">Despacho para o ponto de última telemetria.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default CargoEscortSection;
