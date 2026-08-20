import React from 'react';
import { Seo } from '../src/components/Seo';
import {
  generateLocalBusinessJsonLd,
  generateBreadcrumbJsonLd,
} from '../src/lib/schema';
import { CoverageMap } from '../components/CoverageMap';
import { LocationShelf } from '../components/LocationShelf';
import { EmergencyBanner } from '../components/EmergencyBanner';
import { CITIES_DATA } from '../src/data/cities';
import { COMPANY } from '../src/data/company';
import { Link } from 'react-router-dom';
import { MapPin, Building2, ShieldCheck, ArrowRight } from 'lucide-react';
import Container from '../src/components/ui/Container';
import Section from '../src/components/ui/Section';

export const CoveragePage: React.FC = () => {
  const localBusinessSchema = generateLocalBusinessJsonLd();
  const breadcrumbSchema = generateBreadcrumbJsonLd([
    { name: 'Início', url: 'https://impactorecuperacoes.com.br/' },
    { name: 'Abrangência', url: 'https://impactorecuperacoes.com.br/abrangencia' },
  ]);

  const citiesList = Object.values(CITIES_DATA);

  return (
    <>
      <Seo
        title="Abrangência Nacional e Polos Operacionais | Impacto Recuperações"
        description="Cobertura de pronta resposta em 27 cidades estratégicas, capitais e principais eixos rodoviários do Brasil. Sede operacional em Indaiatuba/SP."
        canonicalUrl="https://impactorecuperacoes.com.br/abrangencia"
        structuredData={[localBusinessSchema, breadcrumbSchema]}
      />

      <div className="bg-white">
        {/* Header */}
        <section className="pt-32 pb-16 bg-[#171922] text-white">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-[#8ba2d4] bg-white/10 px-3 py-1 rounded-full border border-white/15">
                Rede de Pronta Resposta
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-4 mb-4 tracking-tight">
                Cobertura Operacional em Todo o Brasil
              </h1>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                Central de inteligência com sede em Indaiatuba/SP conectada aos principais corredores logísticos, portos, aeroportos e regiões metropolitanas.
              </p>
            </div>
          </Container>
        </section>

        {/* Mapa Interativo */}
        <CoverageMap />

        {/* Todas as Cidades Cadastradas com Links SEO */}
        <Section className="bg-gray-50 border-t border-gray-200">
          <Container>
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-black text-gray-900">
                Diretório de Cidades com Atendimento Dedicado
              </h2>
              <p className="text-sm text-gray-600 mt-2">
                Acesse a página específica da sua região para consultar rodovias monitoradas, tempos médios de acionamento e bases mais próximas.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {citiesList.map((c) => (
                <Link
                  key={c.slug}
                  to={`/servicos-em/${c.slug}`}
                  className="bg-white hover:bg-[#5a6fa6] hover:text-white p-5 rounded-2xl border border-gray-200 shadow-sm transition-all duration-200 group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <MapPin className="w-4 h-4 text-[#5a6fa6] group-hover:text-white transition-colors" />
                      {c.isHeadquarters && (
                        <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-md group-hover:bg-white group-hover:text-emerald-900">
                          SEDE OFICIAL
                        </span>
                      )}
                    </div>
                    <h3 className="font-bold text-base text-gray-900 group-hover:text-white transition-colors">
                      {c.name}
                    </h3>
                    <p className="text-xs text-gray-500 group-hover:text-gray-200 mt-0.5">
                      {c.stateFull} ({c.state})
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-gray-100 group-hover:border-white/20 flex items-center justify-between text-xs font-semibold text-[#5a6fa6] group-hover:text-white">
                    <span>Ver cobertura</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </Section>

        {/* Prateleira Rápida */}
        <LocationShelf />

        {/* Banner de Verificação de Raio */}
        <EmergencyBanner />
      </div>
    </>
  );
};

export default CoveragePage;
