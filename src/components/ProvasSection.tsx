import React from 'react';
import { ShieldCheck, Building2, Calendar, MapPin, PhoneCall, CheckCircle2, ArrowRight } from 'lucide-react';
import { COMPANY, anosDeOperacao } from '../data/company';
import Container from './ui/Container';
import Section from './ui/Section';

/**
 * Seção de Provas Verificáveis e E-E-A-T (PARTE 11.2 & 11.3)
 * Apresenta dados públicos cadastrais consultáveis na Receita Federal.
 * Não utiliza avaliações falsas nem schema Review.
 */
export const ProvasSection: React.FC = () => {
  const anos = anosDeOperacao();

  return (
    <Section id="provas-verificaveis" className="bg-gray-50/80 border-t border-gray-200">
      <Container>
        {/* Anatomia Padronizada (PARTE 3.4) */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#5a6fa6] text-xs font-semibold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-4 h-4 shrink-0" />
            <span>Transparência e Registro Oficial</span>
          </div>

          <h2 className="t-h2 font-black tracking-tight text-gray-900 mb-4 text-balance">
            Empresa Registrada e Ativa desde 2019
          </h2>

          <p className="t-body text-gray-600 max-w-[65ch] mx-auto text-pretty">
            No mercado de recuperação veicular e pronta resposta, a idoneidade jurídica e o endereço físico
            são as principais garantias do cliente. Confira nossos dados públicos oficiais.
          </p>
        </div>

        {/* Grade de Cards Verificáveis (PARTE 4.2 & 11.2) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 items-stretch auto-rows-fr">
          {/* Card 1: CNPJ e Registro */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm flex flex-col justify-between hover:border-gray-300 transition-colors">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#5a6fa6] flex items-center justify-center mb-6">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Registro na Receita Federal</h3>
              <p className="text-sm text-gray-600 mb-4">
                CNPJ ativo e regular para atividades de monitoramento e segurança eletrônica.
              </p>
              <dl className="space-y-2 text-xs sm:text-sm font-mono border-t border-gray-100 pt-4">
                <div>
                  <dt className="text-gray-500 font-sans">CNPJ:</dt>
                  <dd className="font-bold text-gray-900">{COMPANY.cnpj}</dd>
                </div>
                <div>
                  <dt className="text-gray-500 font-sans">Razão Social:</dt>
                  <dd className="font-bold text-gray-900">{COMPANY.razaoSocial}</dd>
                </div>
                <div>
                  <dt className="text-gray-500 font-sans">Inscrição Estadual (SP):</dt>
                  <dd className="font-bold text-gray-900">{COMPANY.inscricaoEstadual}</dd>
                </div>
                <div>
                  <dt className="text-gray-500 font-sans">Situação Cadastral:</dt>
                  <dd className="font-bold text-emerald-700">{COMPANY.situacaoCadastral}</dd>
                </div>
              </dl>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-100 text-xs text-gray-500">
              CNAE 80.20-0-01 (Monitoramento de segurança)
            </div>
          </div>

          {/* Card 2: Tempo de Operação */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm flex flex-col justify-between hover:border-gray-300 transition-colors">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#5a6fa6] flex items-center justify-center mb-6">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{anos} Anos de Operação</h3>
              <p className="text-sm text-gray-600 mb-4">
                Fundada em 05/07/2019, atuando continuamente na proteção patrimonial e pronta resposta.
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-700 border-t border-gray-100 pt-4">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Histórico contínuo de atuação sem interrupções cadastrais.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>{COMPANY.redeParceiros}.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Atuação integrada com seguradoras e gerenciadoras de risco.</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-100 text-xs text-gray-500">
              Data de Abertura: 05 de Julho de 2019
            </div>
          </div>

          {/* Card 3: Base Física e Plantão */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm flex flex-col justify-between hover:border-gray-300 transition-colors">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#5a6fa6] flex items-center justify-center mb-6">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sede Física Comprovada</h3>
              <p className="text-sm text-gray-600 mb-4">
                Base própria em Indaiatuba/SP com central de operações e despacho 24 horas.
              </p>
              <div className="space-y-3 text-xs sm:text-sm text-gray-700 border-t border-gray-100 pt-4">
                <div className="font-mono bg-gray-50 p-3 rounded-lg border border-gray-200">
                  <p className="font-bold text-gray-900">{COMPANY.endereco.logradouro}</p>
                  <p className="text-gray-600">{COMPANY.endereco.bairro}</p>
                  <p className="text-gray-600">{COMPANY.endereco.cidade} - {COMPANY.endereco.uf} · CEP {COMPANY.endereco.cep}</p>
                </div>
                <div className="flex items-center gap-2 text-[#5a6fa6] font-semibold">
                  <PhoneCall className="w-4 h-4 shrink-0" />
                  <span>Central 24h: {COMPANY.telefone.exibicao}</span>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-100 text-xs text-gray-500">
              Atendimento 24/7 em todo o território nacional
            </div>
          </div>
        </div>

        {/* 11.2 Bloco de Destaque / Fecho */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-gray-900 via-[#1e2738] to-[#232323] text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
              Consulte o CNPJ na Receita Federal e depois nos ligue.
            </h3>
            <p className="text-gray-300 text-sm sm:text-base max-w-xl">
              Preferimos cliente que checa. Transparência cadastral e comprovação de sede são as bases do nosso trabalho.
            </p>
          </div>
          <a
            href={`tel:${COMPANY.telefone.e164}`}
            className="w-full md:w-auto min-h-[52px] px-8 py-3.5 rounded-xl bg-[#5a6fa6] hover:bg-[#4b5d8d] text-white font-bold text-sm sm:text-base inline-flex items-center justify-center gap-3 transition-colors shrink-0 shadow-lg"
          >
            <PhoneCall className="w-5 h-5 shrink-0" />
            <span>Falar com a Central 24h</span>
            <ArrowRight className="w-4 h-4 shrink-0" />
          </a>
        </div>
      </Container>
    </Section>
  );
};

export default ProvasSection;
