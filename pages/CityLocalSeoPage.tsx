import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ShieldCheck,
  MapPin,
  PhoneCall,
  ArrowLeft,
  Navigation,
  CheckCircle2,
  AlertTriangle,
  Building2,
  ChevronRight,
  HelpCircle,
  Clock,
  Compass,
} from 'lucide-react';
import { CITIES_DATA, CityData } from '../src/data/cities';
import { COMPANY } from '../src/data/company';
import { Seo } from '../src/components/Seo';
import {
  generateLocalBusinessJsonLd,
  generateBreadcrumbJsonLd,
  generateFaqJsonLd,
} from '../src/lib/schema';
import Container from '../src/components/ui/Container';
import Section from '../src/components/ui/Section';
import { ContactForm } from '../components/ContactForm';
import { CargoEscortSection } from '../components/CargoEscortSection';

interface CityLocalSeoPageProps {
  citySlugOverride?: string;
}

export const CityLocalSeoPage: React.FC<CityLocalSeoPageProps> = ({ citySlugOverride }) => {
  const params = useParams<{ city?: string }>();
  const navigate = useNavigate();

  const slug = (citySlugOverride || params.city || '').toLowerCase().trim();
  const city: CityData | undefined = CITIES_DATA[slug];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!city) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-gray-50 py-20">
        <Container className="text-center max-w-lg">
          <div className="w-16 h-16 bg-amber-100 text-amber-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <AlertTriangle className="w-8 h-8" />
          </div>
          <h1 className="text-2xl font-black text-gray-900 mb-2">Cidade não localizada</h1>
          <p className="text-sm text-gray-600 mb-6">
            Não encontramos a localidade especificada em nossa base direta. Porém, atendemos todo o território nacional.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/abrangencia"
              className="bg-[#5a6fa6] hover:bg-[#4b5d8d] text-white font-bold px-6 py-3 rounded-xl text-sm transition-colors"
            >
              Ver Todas as Cidades
            </Link>
            <Link
              to="/"
              className="bg-white border border-gray-300 hover:bg-gray-100 text-gray-800 font-bold px-6 py-3 rounded-xl text-sm transition-colors"
            >
              Voltar ao Início
            </Link>
          </div>
        </Container>
      </div>
    );
  }

  const pageTitle = `Recuperação de Veículos e Cargas em ${city.name}/${city.state} | Pronta Resposta 24h Impacto`;
  const pageDescription = `Pronta resposta 24h para localização e recuperação de veículos roubados e furtados em ${city.name} (${city.state}). Atendimento em ${city.highways.slice(0, 2).join(', ')} e distritos industriais.`;
  const canonicalUrl = `https://impactorecuperacoes.com.br/servicos-em/${city.slug}`;

  const breadcrumbs = [
    { name: 'Início', url: 'https://impactorecuperacoes.com.br/' },
    { name: 'Abrangência', url: 'https://impactorecuperacoes.com.br/abrangencia' },
    { name: `${city.name} - ${city.state}`, url: canonicalUrl },
  ];

  const localBusinessSchema = generateLocalBusinessJsonLd();
  const breadcrumbSchema = generateBreadcrumbJsonLd(breadcrumbs);
  const faqSchema = generateFaqJsonLd(city.faqs);

  const whatsappMessage = encodeURIComponent(
    `Olá, preciso de pronta resposta / recuperação de veículo em ${city.name}/${city.state}. Podem me atender?`
  );

  return (
    <>
      <Seo
        title={pageTitle}
        description={pageDescription}
        canonicalUrl={canonicalUrl}
        structuredData={[localBusinessSchema, breadcrumbSchema, faqSchema]}
      />

      {/* Hero da Cidade */}
      <section className="pt-32 pb-16 bg-[#171922] text-white relative overflow-hidden">
        <Container>
          {/* Breadcrumb Visual */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-xs text-gray-400 font-mono">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3.5 h-3.5 text-gray-500" />
              </li>
              <li>
                <Link to="/abrangencia" className="hover:text-white transition-colors">
                  Abrangência
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3.5 h-3.5 text-gray-500" />
              </li>
              <li className="text-[#8ba2d4] font-bold" aria-current="page">
                {city.name} ({city.state})
              </li>
            </ol>
          </nav>

          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-2.5 mb-4">
              {city.isHeadquarters ? (
                <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5" /> Sede Operacional Oficial
                </span>
              ) : (
                <span className="bg-white/10 text-gray-200 border border-white/15 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#8ba2d4]" /> Polo Regional Ativo
                </span>
              )}
              <span className="bg-blue-500/20 text-blue-300 border border-blue-500/30 text-xs font-mono font-semibold px-2.5 py-1 rounded-full">
                {city.tempoAcionamentoEstimado}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4">
              Recuperação de Veículos e Pronta Resposta em <span className="text-[#8ba2d4]">{city.name}</span> — {city.state}
            </h1>

            <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-8">
              {city.description}
            </p>

            {/* CTAs Imediatos */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`https://wa.me/${COMPANY.whatsapp?.internacional || '5511965020011'}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-lg transition-colors"
              >
                <PhoneCall className="w-5 h-5" />
                <span>Acionar Pronta Resposta em {city.name}</span>
              </a>
              <a
                href={`tel:${COMPANY.telefone.e164}`}
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-colors"
              >
                <span>Ligar Central 24h: {COMPANY.telefone.exibicao}</span>
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Detalhes Logísticos & Cobertura da Cidade */}
      <Section className="bg-gray-50">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Rodovias */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <Compass className="w-5 h-5 text-[#5a6fa6]" />
                <h2 className="font-bold text-base text-gray-900">Eixos Rodoviários</h2>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
                {city.highways.map((hw, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5a6fa6] mt-1.5 shrink-0" />
                    <span>{hw}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bairros e Distritos */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-5 h-5 text-[#5a6fa6]" />
                <h2 className="font-bold text-base text-gray-900">Bairros & Polos Cobertos</h2>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
                {city.districts.map((dst, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5a6fa6] mt-1.5 shrink-0" />
                    <span>{dst}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Polos Logísticos & Hubs */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <Navigation className="w-5 h-5 text-[#5a6fa6]" />
                <h2 className="font-bold text-base text-gray-900">Hubs de Integração</h2>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
                {city.logisticsHubs.map((hub, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5a6fa6] mt-1.5 shrink-0" />
                    <span>{hub}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 pt-3 border-t border-gray-100 text-xs text-gray-500">
                <strong>Base de Referência:</strong> {city.baseProxima}
              </div>
            </div>
          </div>

          {/* Destaque Técnico dos Procedimentos de Recuperação */}
          <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm">
            <h2 className="text-2xl font-black text-gray-900 mb-4">
              Como funciona a Pronta Resposta em {city.name}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                <div className="font-mono text-xs font-bold text-[#5a6fa6] mb-1">01. ACIONAMENTO</div>
                <h3 className="font-bold text-sm text-gray-900 mb-1">Central 24h & Triagem</h3>
                <p className="text-xs text-gray-600">
                  Recebimento dos dados do veículo, rastreador, placa e último ponto de sinal transmitido.
                </p>
              </div>

              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                <div className="font-mono text-xs font-bold text-[#5a6fa6] mb-1">02. DESLOCAMENTO</div>
                <h3 className="font-bold text-sm text-gray-900 mb-1">Equipe Tática em Solo</h3>
                <p className="text-xs text-gray-600">
                  Agentes direcionados para os acessos de {city.name} e rodovias com equipamento detector de RF.
                </p>
              </div>

              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                <div className="font-mono text-xs font-bold text-[#5a6fa6] mb-1">03. LOCALIZAÇÃO</div>
                <h3 className="font-bold text-sm text-gray-900 mb-1">Varredura Anti-Jammer</h3>
                <p className="text-xs text-gray-600">
                  Localização precisa mesmo quando criminosos utilizam bloqueadores de sinal (capetinha).
                </p>
              </div>

              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                <div className="font-mono text-xs font-bold text-[#5a6fa6] mb-1">04. PRESERVAÇÃO</div>
                <h3 className="font-bold text-sm text-gray-900 mb-1">Apoio com Órgãos Oficiais</h3>
                <p className="text-xs text-gray-600">
                  Preservação do bem, acionamento da PM/PC e acompanhamento da ocorrência policial no DP.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Escolta Armada Homologada (com Disclaimer Legal) */}
      <CargoEscortSection />

      {/* FAQs da Cidade */}
      <Section className="bg-white">
        <Container className="max-w-4xl">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#5a6fa6] bg-[#5a6fa6]/10 px-3 py-1 rounded-full">
              Dúvidas Frequentes
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mt-2">
              Perguntas sobre Atendimento em {city.name}
            </h2>
          </div>

          <div className="space-y-4">
            {city.faqs.map((faq, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
                <h3 className="font-bold text-base text-gray-900 flex items-start gap-2.5 mb-2">
                  <HelpCircle className="w-5 h-5 text-[#5a6fa6] shrink-0 mt-0.5" />
                  <span>{faq.pergunta}</span>
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed pl-7.5">{faq.resposta}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Cidades Vizinhas & Interligadas */}
      {city.vizinhosSlugs && city.vizinhosSlugs.length > 0 && (
        <section className="py-12 bg-gray-100 border-t border-gray-200">
          <Container>
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4 text-center">
              Cidades Vizinhas e Corredores Próximos a {city.name}
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {city.vizinhosSlugs.map((vSlug) => {
                const neighbor = CITIES_DATA[vSlug];
                if (!neighbor) return null;
                return (
                  <Link
                    key={vSlug}
                    to={`/servicos-em/${neighbor.slug}`}
                    className="bg-white hover:bg-[#5a6fa6] hover:text-white text-gray-800 border border-gray-300 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-colors shadow-sm inline-flex items-center gap-1.5"
                  >
                    <MapPin className="w-3.5 h-3.5" />
                    <span>
                      {neighbor.name} ({neighbor.state})
                    </span>
                  </Link>
                );
              })}
            </div>
          </Container>
        </section>
      )}

      {/* Formulário de Contato / Orçamento */}
      <Section className="bg-gray-50">
        <Container className="max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900">
              Solicitar Atendimento em {city.name}
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              Preencha o formulário abaixo ou fale imediatamente com nosso plantão de operações.
            </p>
          </div>
          <ContactForm />
        </Container>
      </Section>
    </>
  );
};

export default CityLocalSeoPage;
