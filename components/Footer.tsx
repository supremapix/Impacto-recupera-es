import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Instagram, MapPin, ChevronRight, Facebook, Linkedin, ShieldCheck } from 'lucide-react';
import { Logo } from './Logo';
import { COMPANY } from '../src/data/company';
import Container from '../src/components/ui/Container';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1a1c23] text-white pt-16 md:pt-20 pb-12 border-t border-gray-800">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-14">
          {/* Coluna 1: Marca e Posicionamento */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6 group inline-flex" aria-label="Impacto Recuperações Home">
              <div className="w-12 h-12 shrink-0">
                <Logo light className="transition-transform group-hover:scale-105" />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-xl tracking-tight leading-none text-white">IMPACTO</span>
                <span className="text-[11px] uppercase tracking-[0.25em] text-[#5a6fa6] font-bold mt-1">RECUPERAÇÕES</span>
              </div>
            </Link>

            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Central de pronta resposta 24 horas especializada em recuperação de veículos e cargas roubados ou furtados, com {COMPANY.redeParceiros}.
            </p>

            <div className="flex items-center gap-3">
              <a
                href={COMPANY.redes.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Oficial Impacto"
                className="min-w-[44px] min-h-[44px] w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#5a6fa6] hover:border-transparent transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={COMPANY.redes.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Oficial Impacto"
                className="min-w-[44px] min-h-[44px] w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#5a6fa6] hover:border-transparent transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={COMPANY.redes.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Oficial Impacto"
                className="min-w-[44px] min-h-[44px] w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#5a6fa6] hover:border-transparent transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Coluna 2: Contato e Base Física (NAP Consistente) */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2 text-white">
              <span className="w-1.5 h-5 bg-[#5a6fa6] rounded-full" />
              <span>Base & Contato 24h</span>
            </h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#5a6fa6] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-gray-200 block">Sede Operacional:</strong>
                  <span>{COMPANY.endereco.resumo}</span>
                  <span className="text-xs text-gray-500 block mt-0.5">{COMPANY.endereco.logradouro}, {COMPANY.endereco.bairro}</span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#5a6fa6] shrink-0" />
                <div>
                  <strong className="text-gray-200 block text-xs">Plantão 24/7:</strong>
                  <a
                    href={`tel:${COMPANY.telefone.e164}`}
                    className="text-white hover:text-[#5a6fa6] font-bold transition-colors text-base"
                  >
                    {COMPANY.telefone.exibicao}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#5a6fa6] shrink-0" />
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="hover:text-white transition-colors text-xs sm:text-sm break-all"
                >
                  {COMPANY.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Navegação Institucional */}
          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2 text-white">
              <span className="w-1.5 h-5 bg-[#5a6fa6] rounded-full" />
              <span>Navegação</span>
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { name: 'Página Inicial', href: '/' },
                { name: 'Serviços Especializados', href: '/servicos' },
                { name: 'Artigos & Guias', href: '/conteudo' },
                { name: 'Depoimentos & Registro', href: '/depoimentos' },
                { name: 'Abrangência Nacional', href: '/abrangencia' },
                { name: 'Central de Contato', href: '/contato' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="min-h-[36px] inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors group py-1"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#5a6fa6] group-hover:translate-x-1 transition-transform" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 4: Polos de Atendimento Rápido */}
          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2 text-white">
              <span className="w-1.5 h-5 bg-[#5a6fa6] rounded-full" />
              <span>Polos em Destaque</span>
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {[
                { name: 'Indaiatuba (Sede Matriz)', href: '/servicos-em/indaiatuba' },
                { name: 'Campinas & RMC', href: '/servicos-em/campinas' },
                { name: 'São Paulo & Rodoanel', href: '/servicos-em/sao-paulo' },
                { name: 'Sorocaba & Castelo Branco', href: '/servicos-em/sorocaba' },
                { name: 'Jundiaí & Anhanguera', href: '/servicos-em/jundiai' },
                { name: 'Santos & Complexo Portuário', href: '/servicos-em/santos' },
              ].map((city) => (
                <li key={city.name}>
                  <Link
                    to={city.href}
                    className="text-gray-400 hover:text-white transition-colors py-0.5 inline-block"
                  >
                    {city.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 8.5 BLOCO E-E-A-T OFICIAL E INFORMAÇÕES CADASTRAIS (Legível >= 13px) */}
        <div className="pt-8 border-t border-gray-800/80 text-center sm:text-left">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 mb-8 text-[13px] text-gray-300 leading-relaxed font-mono">
            <p className="font-sans font-bold text-white text-sm mb-1.5 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 inline" />
              Dados Cadastrais Públicos & Transparência Empresarial
            </p>
            <p className="text-gray-300">
              Impacto Recuperações · Marcelo Emerson Pires · CNPJ 34.128.125/0001-13
            </p>
            <p className="text-gray-300">
              Inscrição Estadual 353.444.680.116
            </p>
            <p className="text-gray-300">
              Rua Adaisio Giron, 55 — Jardim Regina, Indaiatuba/SP · CEP 13348-895
            </p>
            <p className="text-[#8ba2d4] font-semibold mt-1">
              Atuando desde 2019 · Atendimento 24h em todo o território nacional
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
            <p>
              &copy; {new Date().getFullYear()} Impacto Recuperações — Todos os direitos reservados.
            </p>
            <p className="text-gray-400">
              Pronta Resposta 24h · Central: {COMPANY.telefone.exibicao}
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
