import { COMPANY } from '../data/company';

/**
 * SCHEMA.ORG GENERATORS (PARTE 6)
 * Constrói JSON-LD válidos segundo diretrizes do Google Rich Results.
 * Não gera Review, AggregateRating nem Offer com preços fictícios.
 */

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'LocalBusiness'],
    '@id': `${COMPANY.dominio}/#organization`,
    name: COMPANY.nomeFantasia,
    legalName: COMPANY.razaoSocial,
    taxID: COMPANY.cnpj,
    vatID: COMPANY.cnpjRaw,
    identifier: [
      {
        '@type': 'PropertyValue',
        name: 'CNPJ',
        value: COMPANY.cnpj,
      },
      {
        '@type': 'PropertyValue',
        name: 'Inscrição Estadual',
        value: COMPANY.inscricaoEstadual,
      },
    ],
    foundingDate: COMPANY.dataFundacao,
    url: COMPANY.dominio,
    logo: `${COMPANY.dominio}/favicon.svg`,
    image: `${COMPANY.dominio}/favicon.svg`,
    telephone: COMPANY.telefone.e164,
    email: COMPANY.email,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: COMPANY.endereco.logradouro,
      addressLocality: COMPANY.endereco.cidade,
      addressRegion: COMPANY.endereco.uf,
      postalCode: COMPANY.endereco.cep,
      addressCountry: COMPANY.endereco.pais,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '00:00',
        closes: '23:59',
      },
    ],
    areaServed: [
      { '@type': 'Country', name: 'Brasil' },
      { '@type': 'State', name: 'São Paulo' },
    ],
    sameAs: [
      COMPANY.redes.instagram,
      COMPANY.redes.facebook,
      COMPANY.redes.linkedin,
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: COMPANY.telefone.e164,
      contactType: 'emergencies',
      availableLanguage: 'pt-BR',
      hoursAvailable: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '00:00',
        closes: '23:59',
      },
    },
  };
}

export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${COMPANY.dominio}/#website`,
    url: COMPANY.dominio,
    name: COMPANY.nomeFantasia,
    inLanguage: 'pt-BR',
    publisher: {
      '@id': `${COMPANY.dominio}/#organization`,
    },
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${COMPANY.dominio}${item.url}`,
    })),
  };
}

export function getServicesListSchema() {
  const services = [
    {
      name: 'Recuperação de veículos roubados e furtados',
      type: 'Recuperação Veicular 24h',
      desc: 'Localização e recuperação tática de veículos leves e utilitários roubados ou furtados com suporte a telemetria e tecnologia de radiofrequência anti-jammer.',
    },
    {
      name: 'Recuperação de cargas',
      type: 'Recuperação de Cargas e Frotas',
      desc: 'Pronta resposta especializada em caminhões pesados, carretas e cargas de alto valor agregado em rodovias e centros de distribuição.',
    },
    {
      name: 'Escolta armada e velada',
      type: 'Escolta e Preservação',
      desc: 'Acompanhamento preventivo de cargas de alto valor executado em parceria com empresas autorizadas pela Polícia Federal nos termos da Lei 7.102/83.',
    },
    {
      name: 'Pronta resposta 24h',
      type: 'Pronta Resposta Emergencial',
      desc: 'Central de comando ativa 24/7/365 para despacho imediato de agentes em campo com cobertura nacional.',
    },
    {
      name: 'Investigação e varredura eletrônica',
      type: 'Varredura de Sinais RF/CMD',
      desc: 'Identificação de sinais de rastreadores sob interferência de inibidores de sinal (jammers) e averiguação em galpões e zonas de sombra.',
    },
    {
      name: 'Monitoramento e central de comando',
      type: 'Monitoramento e Telemetria',
      desc: 'Integração de protocolos com gerenciadoras de risco, seguradoras e transportadoras para averiguação imediata de desvio de rotas.',
    },
  ];

  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Serviços Especializados de Pronta Resposta',
    itemListElement: services.map((s, index) => ({
      '@type': 'Service',
      position: index + 1,
      name: s.name,
      serviceType: s.type,
      description: s.desc,
      provider: {
        '@id': `${COMPANY.dominio}/#organization`,
      },
      areaServed: {
        '@type': 'Country',
        name: 'Brasil',
      },
    })),
  };
}

export function getFaqSchema(faqs: { pergunta: string; resposta: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.pergunta,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.resposta,
      },
    })),
  };
}

export function getCitySchema(city: {
  name: string;
  slug: string;
  state: string;
  highways: string[];
  faqs: { pergunta: string; resposta: string }[];
}) {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: `Recuperação de Veículos e Pronta Resposta em ${city.name} - ${city.state}`,
      serviceType: 'Recuperação Veicular e Pronta Resposta',
      description: `Pronta resposta 24h e recuperação de veículos e cargas em ${city.name}/${city.state}. Atendimento nas rodovias ${city.highways.join(', ')} e distritos industriais.`,
      provider: {
        '@id': `${COMPANY.dominio}/#organization`,
      },
      areaServed: {
        '@type': 'City',
        name: `${city.name}, ${city.state}`,
      },
    },
    getFaqSchema(city.faqs),
  ];
}

export function getArticleSchema(article: {
  title: string;
  description: string;
  slug: string;
  publishedAt: string;
  modifiedAt: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    mainEntityOfPage: `${COMPANY.dominio}/conteudo/${article.slug}`,
    url: `${COMPANY.dominio}/conteudo/${article.slug}`,
    datePublished: article.publishedAt,
    dateModified: article.modifiedAt,
    author: {
      '@type': 'Organization',
      '@id': `${COMPANY.dominio}/#organization`,
      name: COMPANY.nomeFantasia,
    },
    publisher: {
      '@type': 'Organization',
      '@id': `${COMPANY.dominio}/#organization`,
      name: COMPANY.nomeFantasia,
      logo: {
        '@type': 'ImageObject',
        url: `${COMPANY.dominio}/favicon.svg`,
      },
    },
  };
}

export function getServiceSchema(name: string, description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@id': `${COMPANY.dominio}/#organization`,
    },
    areaServed: {
      '@type': 'Country',
      name: 'Brasil',
    },
  };
}

// Aliases para conveniência e compatibilidade
export const generateLocalBusinessJsonLd = getOrganizationSchema;
export const generateBreadcrumbJsonLd = getBreadcrumbSchema;
export const generateFaqJsonLd = getFaqSchema;
export const generateCityJsonLd = getCitySchema;

