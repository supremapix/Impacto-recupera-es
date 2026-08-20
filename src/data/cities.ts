import { COMPANY } from './company';

export interface CityData {
  slug: string;
  name: string;
  state: string;
  stateFull: string;
  isHeadquarters?: boolean;
  baseProxima: string;
  // TODO: validar com a operação tempos médios de resposta específicos por cidade
  tempoAcionamentoEstimado: string;
  highways: string[];
  districts: string[];
  logisticsHubs: string[];
  description: string;
  faqs: { pergunta: string; resposta: string }[];
  vizinhosSlugs: string[];
}

export const CITIES_DATA: Record<string, CityData> = {
  indaiatuba: {
    slug: 'indaiatuba',
    name: 'Indaiatuba',
    state: 'SP',
    stateFull: 'São Paulo',
    isHeadquarters: true,
    baseProxima: 'Sede Própria Central em Indaiatuba/SP (Rua Adaisio Giron, 55 — Jardim Regina)',
    tempoAcionamentoEstimado: 'Acionamento imediato · Sede local',
    highways: ['SP-075 (Rodovia Santos Dumont)', 'SP-324', 'Acesso à Rodovia dos Bandeirantes', 'Acesso à Rodovia Anhanguera'],
    districts: ['Distrito Industrial Europark', 'Distrito Industrial Recreio Campestre Joia', 'Jardim Morada do Sol', 'Jardim Regina', 'Itaici', 'Helvetia'],
    logisticsHubs: ['Corredor do Aeroporto Internacional de Viracopos (VCP)', 'Polos industriais metalmecânicos e de autopeças de Indaiatuba'],
    description: 'Sede operacional da Impacto Recuperações. Localizada na Rua Adaisio Giron, 55, Jardim Regina, com central de pronto atendimento 24 horas e cobertura tática imediata para todo o município, Aeroporto de Viracopos e Região Metropolitana de Campinas.',
    faqs: [
      {
        pergunta: 'Onde fica a base da Impacto em Indaiatuba?',
        resposta: 'Nossa sede fica na Rua Adaisio Giron, 55 — Jardim Regina, Indaiatuba/SP (CEP 13348-895). Atendemos 24 horas por dia pelo telefone (11) 96502-0011.',
      },
      {
        pergunta: 'Qual o tempo de resposta para ocorrências em Indaiatuba e na SP-075?',
        resposta: 'Por ser o município sede da nossa central e base de viaturas, o acionamento em Indaiatuba e no corredor da Rodovia Santos Dumont (SP-075) ocorre em poucos minutos.',
      },
      {
        pergunta: 'A Impacto atende o Polo Industrial de Indaiatuba e Viracopos?',
        resposta: 'Sim, realizamos pronta resposta e recuperação de veículos leves, caminhões e cargas em todos os distritos industriais de Indaiatuba e nas vias de acesso ao aeroporto de Viracopos.',
      },
    ],
    vizinhosSlugs: ['campinas', 'salto', 'itu'],
  },
  campinas: {
    slug: 'campinas',
    name: 'Campinas',
    state: 'SP',
    stateFull: 'São Paulo',
    baseProxima: 'Base Operacional Regional Indaiatuba/Campinas (a 25 km do centro de Campinas)',
    tempoAcionamentoEstimado: 'Acionamento imediato via equipes dedicadas na RMC',
    highways: ['SP-330 (Rodovia Anhanguera)', 'SP-348 (Rodovia dos Bandeirantes)', 'SP-075 (Santos Dumont)', 'SP-065 (Dom Pedro I)', 'SP-340 (Adhemar de Barros)'],
    districts: ['Techno Park Campinas', 'Distrito Industrial de Campinas (DIC)', 'Barão Geraldo', 'Sousas', 'Aparecidinha', 'Jardim do Trevo'],
    logisticsHubs: ['Terminal Intermodal de Cargas de Campinas', 'Complexo Logístico Viracopos', 'Eixo Anhanguera-Bandeirantes'],
    description: 'Pronta resposta e recuperação de veículos e cargas na Região Metropolitana de Campinas. Equipes operacionais monitorando os entroncamentos das rodovias Anhanguera, Bandeirantes, Santos Dumont e Dom Pedro I 24 horas por dia.',
    faqs: [
      {
        pergunta: 'Como funciona a pronta resposta em Campinas e Viracopos?',
        resposta: 'Nossas equipes táticas na RMC são acionadas pela central 24h imediatamente após o contato no (11) 96502-0011, atuando nas principais rodovias e bairros industriais de Campinas.',
      },
      {
        pergunta: 'Vocês recuperam carretas e cargas roubadas no entroncamento da Anhanguera com a Dom Pedro?',
        resposta: 'Sim, dispomos de equipes especializadas em transporte pesado e varredura de sinais RF anti-jammer para recuperação de cargas nesse importante entroncamento logístico.',
      },
      {
        pergunta: 'Quais tipos de veículos são atendidos em Campinas?',
        resposta: 'Atendemos automóveis particulares, utilitários, motocicletas, caminhões de entrega urbana e frotas pesadas.',
      },
    ],
    vizinhosSlugs: ['indaiatuba', 'valinhos', 'sumare'],
  },
  'sao-paulo': {
    slug: 'sao-paulo',
    name: 'São Paulo',
    state: 'SP',
    stateFull: 'São Paulo',
    baseProxima: 'Unidades Móveis de Pronta Resposta distribuídas na Capital e Grande SP',
    tempoAcionamentoEstimado: 'Acionamento imediato por setorização geográfica',
    highways: ['Rodoanel Mário Covas (SP-021)', 'Marginal Tietê', 'Marginal Pinheiros', 'Rodovia Presidente Dutra', 'Rodovia Fernão Dias', 'Rodovia dos Imigrantes', 'Rodovia Anchieta', 'Rodovia Castelo Branco'],
    districts: ['Zona Leste (Itaquera, São Mateus)', 'Zona Sul (Santo Amaro, Grajaú)', 'Zona Norte (Santana, Vila Maria)', 'Zona Oeste (Lapa, Jaguaré)', 'Centro Expandido'],
    logisticsHubs: ['Centros de Distribuição da Marginal Tietê e Fernão Dias', 'Polos Logísticos do Rodoanel Trechos Sul, Leste e Oeste'],
    description: 'Recuperação tática de veículos e cargas na capital paulista e Região Metropolitana. Apoio contínuo contra roubo e furto nas marginais, acessos rodoviários e áreas metropolitanas com agentes parceiros em prontidão.',
    faqs: [
      {
        pergunta: 'Como a central atua no trânsito intenso de São Paulo?',
        resposta: 'Nossa rede conta com unidades táticas móveis motorizadas e viaturas parceiras distribuídas estrategicamente pelas quatro zonas da capital e anel viário do Rodoanel.',
      },
      {
        pergunta: 'Existe cobertura no Rodoanel e nas marginais de SP?',
        resposta: 'Sim, cobrimos integralmente as Marginais Tietê e Pinheiros, bem como todos os trechos do Rodoanel Mário Covas.',
      },
      {
        pergunta: 'Como acionar em caso de roubo recente na capital?',
        resposta: 'Ligue imediatamente para (11) 96502-0011 informando a placa e a última coordenada ou bairro para iniciarmos a pronta resposta.',
      },
    ],
    vizinhosSlugs: ['jundiai', 'santos', 'sao-jose-dos-campos'],
  },
  sorocaba: {
    slug: 'sorocaba',
    name: 'Sorocaba',
    state: 'SP',
    stateFull: 'São Paulo',
    baseProxima: 'Base de Apoio Regional Sorocaba e Eixo Castelo Branco',
    tempoAcionamentoEstimado: 'Acionamento imediato via parceiros credenciados',
    highways: ['SP-280 (Rodovia Castelo Branco)', 'SP-075 (Rodovia Senador José Ermírio de Moraes / Castelinho)', 'SP-270 (Raposo Tavares)', 'SP-097'],
    districts: ['Zona Industrial de Sorocaba', 'Éden', 'Cajuru do Sul', 'Ibiti do Paço', 'Brigadeiro Tobias', 'Wanel Ville'],
    logisticsHubs: ['Polo Automotivo de Sorocaba', 'Condomínios Industriais da Castelo Branco'],
    description: 'Atendimento e pronta resposta 24 horas em Sorocaba, polo industrial e logístico do sudoeste paulista. Cobertura especializada ao longo da Rodovia Castelo Branco e Rodovia Raposo Tavares.',
    faqs: [
      {
        pergunta: 'Qual a cobertura da Impacto na Zona Industrial de Sorocaba?',
        resposta: 'Cobrimos integralmente as áreas industriais do Éden, Cajuru e entroncamentos da Castelinho e Castelo Branco.',
      },
      {
        pergunta: 'Atendem roubo de maquinário e cargas em Sorocaba?',
        resposta: 'Sim, atuamos na recuperação de maquinário agrícola/industrial, veículos pesados e frotas de distribuição.',
      },
      {
        pergunta: 'Como solicitar pronta resposta em Sorocaba?',
        resposta: 'Entre em contato pela central 24h no telefone (11) 96502-0011.',
      },
    ],
    vizinhosSlugs: ['itu', 'salto', 'indaiatuba'],
  },
  jundiai: {
    slug: 'jundiai',
    name: 'Jundiaí',
    state: 'SP',
    stateFull: 'São Paulo',
    baseProxima: 'Eixo Anhanguera-Bandeirantes / Base Indaiatuba (40 km)',
    tempoAcionamentoEstimado: 'Acionamento imediato',
    highways: ['SP-330 (Anhanguera)', 'SP-348 (Bandeirantes)', 'SP-360 (Constâncio Cintra)', 'SP-300 (Dom Gabriel)'],
    districts: ['Distrito Industrial FazGran', 'Medeiros', 'Eloy Chaves', 'Vila Arens', 'Ponte São João'],
    logisticsHubs: ['Polo de E-commerce e Galpões Logísticos de Jundiaí e Cajamar'],
    description: 'Atendimento estratégico em Jundiaí e corredor logístico de Cajamar. Pronta resposta para frotas de e-commerce, carretas e veículos de passeio.',
    faqs: [
      {
        pergunta: 'Vocês atendem os centros logísticos do FazGran e Cajamar?',
        resposta: 'Sim, atuamos no monitoramento de rota e pronta resposta nos principais condomínios logísticos da região de Jundiaí.',
      },
      {
        pergunta: 'Como acionar a Impacto para emergências na Rodovia dos Bandeirantes em Jundiaí?',
        resposta: 'Acione a central 24h no (11) 96502-0011 com os dados do veículo e última posição.',
      },
      {
        pergunta: 'Existe atendimento para motos e carros de passeio em Jundiaí?',
        resposta: 'Sim, atendemos todas as categorias de veículos 24 horas por dia.',
      },
    ],
    vizinhosSlugs: ['campinas', 'sao-paulo', 'vinhedo'],
  },
  piracicaba: {
    slug: 'piracicaba',
    name: 'Piracicaba',
    state: 'SP',
    stateFull: 'São Paulo',
    baseProxima: 'Polo Regional Piracicaba / RMC',
    tempoAcionamentoEstimado: 'Acionamento imediato',
    highways: ['SP-304 (Rodovia Geraldo de Barros / Luiz de Queiroz)', 'SP-127', 'SP-147'],
    districts: ['Distrito Industrial Uninorte', 'Unileste', 'Santa Terezinha', 'Nova Piracicaba'],
    logisticsHubs: ['Polo Sucroalcooleiro e Industrial Metalmecânico de Piracicaba'],
    description: 'Recuperação de veículos e pronta resposta em Piracicaba e microrregião. Presença tática em rodovias estaduais e distritos industriais.',
    faqs: [
      {
        pergunta: 'Atendem ocorrências na Rodovia Luiz de Queiroz (SP-304)?',
        resposta: 'Sim, cobrimos o trecho entre Americana, Santa Bárbara d’Oeste e Piracicaba.',
      },
      {
        pergunta: 'Como acionar busca de caminhão ou trator em Piracicaba?',
        resposta: 'Ligue na central 24h (11) 96502-0011.',
      },
      {
        pergunta: 'Realizam varredura RF anti-jammer em Piracicaba?',
        resposta: 'Sim, com equipamentos de detecção de sinal para galpões e zonas rurais.',
      },
    ],
    vizinhosSlugs: ['campinas', 'sumare', 'hortolandia'],
  },
  santos: {
    slug: 'santos',
    name: 'Santos',
    state: 'SP',
    stateFull: 'São Paulo',
    baseProxima: 'Polo Baixada Santista e Porto de Santos',
    tempoAcionamentoEstimado: 'Acionamento imediato',
    highways: ['SP-150 (Rodovia Anchieta)', 'SP-160 (Rodovia dos Imigrantes)', 'SP-055 (Padre Manoel da Nóbrega / Rio-Santos)'],
    districts: ['Porto de Santos / Alemoa', 'Ponta da Praia', 'Gonzaga', 'Chico de Paula', 'Macuco'],
    logisticsHubs: ['Complexo Portuário de Santos', 'Pátios de Triagem e Terminais Retroportuários de Cubatão e Santos'],
    description: 'Pronta resposta especializada no Porto de Santos, terminais retroportuários e Sistema Anchieta-Imigrantes contra roubo de cargas e veículos.',
    faqs: [
      {
        pergunta: 'Atendem terminais de contêineres e pátios retroportuários em Santos?',
        resposta: 'Sim, operamos em apoio a transportadoras e motoristas no corredor de acesso portuário.',
      },
      {
        pergunta: 'Como acionar em caso de desvio de rota na Anchieta/Imigrantes?',
        resposta: 'Contate imediatamente a central pelo (11) 96502-0011.',
      },
      {
        pergunta: 'Trabalham com cargas alfandegadas e contêineres?',
        resposta: 'Sim, com procedimentos táticos alinhados às gerenciadoras de risco.',
      },
    ],
    vizinhosSlugs: ['sao-paulo', 'rio-de-janeiro', 'curitiba'],
  },
  'sao-jose-dos-campos': {
    slug: 'sao-jose-dos-campos',
    name: 'São José dos Campos',
    state: 'SP',
    stateFull: 'São Paulo',
    baseProxima: 'Polo Vale do Paraíba / Corredor Dutra',
    tempoAcionamentoEstimado: 'Acionamento imediato',
    highways: ['BR-116 (Rodovia Presidente Dutra)', 'SP-070 (Rodovia Ayrton Senna / Carvalho Pinto)', 'SP-099 (Rodovia dos Tamoios)'],
    districts: ['Chácaras Reunidas', 'Parque Tecnológico', 'Jardim Aquarius', 'Eugênio de Melo', 'Santana'],
    logisticsHubs: ['Polo Aeroespacial e Tecnológico do Vale do Paraíba', 'Eixo Logístico Rio-São Paulo'],
    description: 'Recuperação veicular e pronta resposta em São José dos Campos e Vale do Paraíba, atuando na Rodovia Presidente Dutra e Carvalho Pinto.',
    faqs: [
      {
        pergunta: 'Qual a atuação da Impacto na Rodovia Presidente Dutra?',
        resposta: 'Monitoramos e realizamos pronta resposta em todo o trecho paulista da Via Dutra.',
      },
      {
        pergunta: 'Atendem chamados na Rodovia dos Tamoios?',
        resposta: 'Sim, cobrimos o trecho de serra e acesso ao Litoral Norte.',
      },
      {
        pergunta: 'Como solicitar atendimento emergencial no Vale do Paraíba?',
        resposta: 'Ligue 24h para (11) 96502-0011.',
      },
    ],
    vizinhosSlugs: ['sao-paulo', 'rio-de-janeiro', 'pouso-alegre'],
  },
  'ribeirao-preto': {
    slug: 'ribeirao-preto',
    name: 'Ribeirão Preto',
    state: 'SP',
    stateFull: 'São Paulo',
    baseProxima: 'Polo Regional Nordeste Paulista',
    tempoAcionamentoEstimado: 'Acionamento imediato',
    highways: ['SP-330 (Rodovia Anhanguera)', 'SP-334 (Cândido Portinari)', 'SP-322 (Attílio Balbo / Armando Salles)'],
    districts: ['Distrito Industrial de Ribeirão Preto', 'Campos Elíseos', 'Jardim Botânico', 'Bonfim Paulista'],
    logisticsHubs: ['Polo do Agronegócio e Distribuição do Interior de SP'],
    description: 'Pronta resposta em Ribeirão Preto e no nordeste paulista. Especialidade na recuperação de veículos de frota, caminhões agrícolas e utilitários.',
    faqs: [
      {
        pergunta: 'Vocês atendem frotas agrícolas e caminhões canavieiros na região de Ribeirão?',
        resposta: 'Sim, realizamos pronta resposta e buscas táticas em áreas industriais e rurais.',
      },
      {
        pergunta: 'Qual o telefone de plantão em Ribeirão Preto?',
        resposta: 'A central única 24h atende no (11) 96502-0011.',
      },
      {
        pergunta: 'Atendem na Rodovia Anhanguera próximo a Ribeirão?',
        resposta: 'Sim, cobrimos todo o trecho norte da SP-330.',
      },
    ],
    vizinhosSlugs: ['campinas', 'bauru', 'pocos-de-caldas'],
  },
  bauru: {
    slug: 'bauru',
    name: 'Bauru',
    state: 'SP',
    stateFull: 'São Paulo',
    baseProxima: 'Polo Regional Centro-Oeste Paulista',
    tempoAcionamentoEstimado: 'Acionamento imediato',
    highways: ['SP-300 (Rodovia Marechal Rondon)', 'SP-225 (Comandante João Ribeiro de Barros)', 'SP-294'],
    districts: ['Distrito Industrial I, II e III', 'Vila Falcão', 'Mary Dota', 'Geisel'],
    logisticsHubs: ['Entroncamento Ferroviário e Rodoviário do Centro Paulista'],
    description: 'Pronta resposta e localização de veículos em Bauru e entroncamento da Marechal Rondon. Cobertura para transporte de carga e veículos urbanos.',
    faqs: [
      {
        pergunta: 'Atendem ocorrências na Rodovia Marechal Rondon (SP-300)?',
        resposta: 'Sim, cobrimos os acessos e municípios vizinhos ao longo da SP-300.',
      },
      {
        pergunta: 'Como funciona o plantão 24h para Bauru?',
        resposta: 'Nossa central de comando 24h aciona viaturas parceiras locais pelo (11) 96502-0011.',
      },
      {
        pergunta: 'Atendem seguradoras e particulares em Bauru?',
        resposta: 'Sim, atendemos ambos com prontidão operacional.',
      },
    ],
    vizinhosSlugs: ['sorocaba', 'ribeirao-preto', 'piracicaba'],
  },
  itu: {
    slug: 'itu',
    name: 'Itu',
    state: 'SP',
    stateFull: 'São Paulo',
    baseProxima: 'Base Matriz Indaiatuba (a apenas 15 km de Itu)',
    tempoAcionamentoEstimado: 'Acionamento em minutos (base vizinha em Indaiatuba)',
    highways: ['SP-075 (Santos Dumont)', 'SP-300 (Marechal Rondon)', 'SP-312 (Estrada dos Romeiros)'],
    districts: ['Distrito Industrial de Itu', 'São Camilo', 'Rancho Grande', 'Pirapitingui'],
    logisticsHubs: ['Polos industriais de Itu e proximidade com a Castelo Branco e Santos Dumont'],
    description: 'Atendimento rápido e prioritário em Itu a partir da sede em Indaiatuba. Recuperação de veículos leves, utilitários e caminhões 24 horas.',
    faqs: [
      {
        pergunta: 'Por que o atendimento em Itu é tão ágil?',
        resposta: 'Porque a nossa sede central fica em Indaiatuba, a poucos minutos dos acessos rodoviários de Itu.',
      },
      {
        pergunta: 'Atendem a região do Pirapitingui e Castelo Branco em Itu?',
        resposta: 'Sim, cobrimos toda a extensão urbana e rodoviária do município.',
      },
      {
        pergunta: 'Como contatar para emergências em Itu?',
        resposta: 'Ligue imediatamente para (11) 96502-0011.',
      },
    ],
    vizinhosSlugs: ['indaiatuba', 'salto', 'sorocaba'],
  },
  salto: {
    slug: 'salto',
    name: 'Salto',
    state: 'SP',
    stateFull: 'São Paulo',
    baseProxima: 'Base Matriz Indaiatuba (a menos de 10 km de Salto)',
    tempoAcionamentoEstimado: 'Acionamento em minutos (base limítrofe em Indaiatuba)',
    highways: ['SP-075 (Santos Dumont)', 'SP-079', 'SP-300'],
    districts: ['Distrito Industrial de Salto', 'Jardim Nações', 'Bela Vista', 'Santa Cruz'],
    logisticsHubs: ['Polo Cerâmico e Metalúrgico de Salto'],
    description: 'Cobertura imediata em Salto diretamente da sede de Indaiatuba. Pronta resposta 24h para recuperação de cargas e veículos.',
    faqs: [
      {
        pergunta: 'Qual o tempo de chegada para uma ocorrência em Salto?',
        resposta: 'Como fazemos divisa direta com Salto a partir da nossa matriz em Indaiatuba, o deslocamento é praticamente instantâneo.',
      },
      {
        pergunta: 'Atendem motos e carros roubados em Salto?',
        resposta: 'Sim, realizamos busca e recuperação de qualquer tipo de veículo.',
      },
      {
        pergunta: 'Qual o número de emergência em Salto?',
        resposta: 'Ligue para (11) 96502-0011.',
      },
    ],
    vizinhosSlugs: ['indaiatuba', 'itu', 'campinas'],
  },
  valinhos: {
    slug: 'valinhos',
    name: 'Valinhos',
    state: 'SP',
    stateFull: 'São Paulo',
    baseProxima: 'Base Indaiatuba/Campinas (RMC)',
    tempoAcionamentoEstimado: 'Acionamento imediato na RMC',
    highways: ['SP-065 (Rodovia Dom Pedro I)', 'SP-330 (Anhanguera)', 'SP-083 (Anel Viário José Roberto Magalhães Teixeira)'],
    districts: ['Bairro Macuco', 'Dois Córregos', 'Jardim São Marcos', 'Ortizes'],
    logisticsHubs: ['Anel Viário de Campinas e Distrito Logístico de Valinhos'],
    description: 'Pronta resposta em Valinhos e anel viário Magalhães Teixeira. Equipes táticas para recuperação de veículos particulares e frotas empresariais.',
    faqs: [
      {
        pergunta: 'Como funciona a pronta resposta no anel viário de Valinhos?',
        resposta: 'Nossas equipes na RMC realizam buscas táticas integradas com telemetria nas alças do anel viário e Anhanguera.',
      },
      {
        pergunta: 'Qual o contato da central para Valinhos?',
        resposta: 'Disque (11) 96502-0011 24h por dia.',
      },
      {
        pergunta: 'Atendem condomínios e áreas rurais de Valinhos?',
        resposta: 'Sim, cobrimos áreas urbanas, industriais e vicinais.',
      },
    ],
    vizinhosSlugs: ['campinas', 'vinhedo', 'indaiatuba'],
  },
  vinhedo: {
    slug: 'vinhedo',
    name: 'Vinhedo',
    state: 'SP',
    stateFull: 'São Paulo',
    baseProxima: 'Base Matriz Indaiatuba / Eixo Anhanguera (18 km)',
    tempoAcionamentoEstimado: 'Acionamento imediato',
    highways: ['SP-330 (Anhanguera)', 'SP-324', 'Estrada da Boiada'],
    districts: ['Distrito Industrial de Vinhedo', 'Capela', 'Santa Rosa', 'Jardim Miriam'],
    logisticsHubs: ['Distrito Industrial de Vinhedo e polos de centros de distribuição'],
    description: 'Atuação tática de pronta resposta em Vinhedo e Distrito Industrial. Monitoramento de rotas e recuperação de veículos 24 horas por dia.',
    faqs: [
      {
        pergunta: 'Atendem o Distrito Industrial de Vinhedo?',
        resposta: 'Sim, realizamos pronta resposta e preservação de carga nas empresas do polo industrial de Vinhedo.',
      },
      {
        pergunta: 'Como solicitar equipe para Vinhedo?',
        resposta: 'Central 24h: (11) 96502-0011.',
      },
      {
        pergunta: 'Cobrem condomínios fechados em Vinhedo?',
        resposta: 'Sim, atuamos em apoio para localização de veículos na região.',
      },
    ],
    vizinhosSlugs: ['valinhos', 'jundiai', 'indaiatuba'],
  },
  hortolandia: {
    slug: 'hortolandia',
    name: 'Hortolândia',
    state: 'SP',
    stateFull: 'São Paulo',
    baseProxima: 'Polo RMC / Eixo Bandeirantes',
    tempoAcionamentoEstimado: 'Acionamento imediato',
    highways: ['SP-101 (Campinas-Monte Mor)', 'SP-348 (Rodovia dos Bandeirantes)', 'SP-330 (Anhanguera)'],
    districts: ['Jardim Amanda', 'Parque Ortolândia', 'Jardim Rosolém', 'Polo Tecnológico'],
    logisticsHubs: ['Centros Tecnológicos, Data Centers e Hubs Logísticos de Hortolândia'],
    description: 'Pronta resposta em Hortolândia e entroncamento da SP-101 com a Rodovia dos Bandeirantes. Especialidade em cargas de tecnologia e veículos de carga.',
    faqs: [
      {
        pergunta: 'Como funciona o atendimento na SP-101 em Hortolândia?',
        resposta: 'Equipes parceiras circulam no corredor da SP-101 para acionamento emergencial imediato.',
      },
      {
        pergunta: 'Atendem roubo de cargas de alto valor em Hortolândia?',
        resposta: 'Sim, prestamos serviço com tecnologia anti-jammer para cargas sensíveis.',
      },
      {
        pergunta: 'Qual o telefone para emergência em Hortolândia?',
        resposta: 'Ligue para (11) 96502-0011.',
      },
    ],
    vizinhosSlugs: ['campinas', 'sumare', 'indaiatuba'],
  },
  sumare: {
    slug: 'sumare',
    name: 'Sumaré',
    state: 'SP',
    stateFull: 'São Paulo',
    baseProxima: 'Polo RMC / Eixo Anhanguera',
    tempoAcionamentoEstimado: 'Acionamento imediato',
    highways: ['SP-330 (Anhanguera)', 'SP-101', 'Estrada Municipal Teodor Condiev'],
    districts: ['Nova Veneza', 'Matão', 'Área Cura', 'Distrito Industrial de Sumaré'],
    logisticsHubs: ['Polos Automotivos e Centros Logísticos de Sumaré'],
    description: 'Recuperação de veículos e pronta resposta 24h em Sumaré. Cobertura completa nos distritos de Nova Veneza, Matão e rodovia Anhanguera.',
    faqs: [
      {
        pergunta: 'Atendem a região do Matão e Nova Veneza em Sumaré?',
        resposta: 'Sim, realizamos buscas táticas em todos os distritos de Sumaré.',
      },
      {
        pergunta: 'Como acionar em caso de perda de sinal de rastreador em Sumaré?',
        resposta: 'Ligue na central (11) 96502-0011 com os últimos dados.',
      },
      {
        pergunta: 'Atendem veículos particulares e frotas?',
        resposta: 'Sim, 24 horas por dia.',
      },
    ],
    vizinhosSlugs: ['campinas', 'hortolandia', 'piracicaba'],
  },
  'rio-de-janeiro': {
    slug: 'rio-de-janeiro',
    name: 'Rio de Janeiro',
    state: 'RJ',
    stateFull: 'Rio de Janeiro',
    baseProxima: 'Base Operacional Regional Rio de Janeiro / Baixada Fluminense',
    tempoAcionamentoEstimado: 'Acionamento imediato via rede regional',
    highways: ['BR-116 (Presidente Dutra)', 'BR-101 (Avenida Brasil / Rio-Santos)', 'BR-040 (Washington Luís)', 'Arco Metropolitano (BR-493)'],
    districts: ['Avenida Brasil', 'Pavuna', 'Zona Norte', 'Baixada Fluminense', 'Zona Oeste (Campo Grande, Santa Cruz)'],
    logisticsHubs: ['Polos de Cargas da Pavuna e Rodovia Washington Luís', 'Arco Metropolitano do RJ'],
    description: 'Pronta resposta e recuperação de veículos e cargas no Rio de Janeiro e Baixada Fluminense. Equipes parceiras experientes na malha rodoviária carioca e eixos de alta complexidade.',
    faqs: [
      {
        pergunta: 'Como funciona a atuação na Avenida Brasil e Arco Metropolitano?',
        resposta: 'Dispomos de parceiros operacionais atuando em prontidão nas vias arteriais do estado do Rio de Janeiro.',
      },
      {
        pergunta: 'Vocês atendem caminhões e cargas de alto risco no RJ?',
        resposta: 'Sim, atuamos com procedimentos táticos rigorosos para averiguação e preservação do patrimônio.',
      },
      {
        pergunta: 'Qual o telefone de emergência para o Rio de Janeiro?',
        resposta: 'A central única 24h opera no (11) 96502-0011.',
      },
    ],
    vizinhosSlugs: ['sao-paulo', 'sao-jose-dos-campos', 'belo-horizonte'],
  },
  curitiba: {
    slug: 'curitiba',
    name: 'Curitiba',
    state: 'PR',
    stateFull: 'Paraná',
    baseProxima: 'Base Operacional Regional Curitiba e Região Metropolitana (RMC)',
    tempoAcionamentoEstimado: 'Acionamento imediato',
    highways: ['BR-116 (Régis Bittencourt / Contorno Sul)', 'BR-277 (Sentido Litoral e Interior)', 'BR-376 (Sentido Santa Catarina)'],
    districts: ['Cidade Industrial de Curitiba (CIC)', 'São José dos Pinhais', 'Araucária', 'Pinhais'],
    logisticsHubs: ['Polo Automotivo de São José dos Pinhais', 'Cidade Industrial de Curitiba', 'Eixo Logístico Sul'],
    description: 'Pronta resposta em Curitiba, CIC e Região Metropolitana. Cobertura nos eixos de conexão para o Porto de Paranaguá, Santa Catarina e São Paulo.',
    faqs: [
      {
        pergunta: 'Cobrem a Cidade Industrial de Curitiba (CIC) e São José dos Pinhais?',
        resposta: 'Sim, presença constante nos principais parques industriais da Grande Curitiba.',
      },
      {
        pergunta: 'Atendem ocorrências na BR-277 e BR-376?',
        resposta: 'Cobrimos os corredores de escoamento para o litoral e serra catarinense.',
      },
      {
        pergunta: 'Qual o contato 24h para Curitiba?',
        resposta: 'Ligue para (11) 96502-0011.',
      },
    ],
    vizinhosSlugs: ['sao-paulo', 'porto-alegre', 'santos'],
  },
  'belo-horizonte': {
    slug: 'belo-horizonte',
    name: 'Belo Horizonte',
    state: 'MG',
    stateFull: 'Minas Gerais',
    baseProxima: 'Base Operacional Regional Belo Horizonte / Contagem',
    tempoAcionamentoEstimado: 'Acionamento imediato',
    highways: ['BR-381 (Fernão Dias)', 'BR-040 (Brasília-Rio)', 'BR-262', 'Anel Rodoviário de Belo Horizonte'],
    districts: ['Cidade Industrial de Contagem', 'Betim', 'Olhos D’Água', 'Barreiro'],
    logisticsHubs: ['Complexo Logístico e Automotivo Betim-Contagem', 'Anel Rodoviário de BH'],
    description: 'Pronta resposta em Belo Horizonte, Betim e Contagem. Equipes parceiras atuando contra roubo e furto no Anel Rodoviário e Rodovia Fernão Dias.',
    faqs: [
      {
        pergunta: 'Atendem roubo de carretas no polo de Betim e Contagem?',
        resposta: 'Sim, atendemos transportadoras e motoristas nos maiores polos de carga de Minas Gerais.',
      },
      {
        pergunta: 'Como acionar em caso de emergência no Anel Rodoviário de BH?',
        resposta: 'Acione a central 24h no (11) 96502-0011.',
      },
      {
        pergunta: 'Cobrem carros de passeio e motos em BH?',
        resposta: 'Sim, atendemos particulares e frotistas 24 horas por dia.',
      },
    ],
    vizinhosSlugs: ['sao-paulo', 'rio-de-janeiro', 'brasilia'],
  },
  'porto-alegre': {
    slug: 'porto-alegre',
    name: 'Porto Alegre',
    state: 'RS',
    stateFull: 'Rio Grande do Sul',
    baseProxima: 'Polo Regional Porto Alegre e Vale dos Sinos',
    tempoAcionamentoEstimado: 'Acionamento imediato',
    highways: ['BR-116', 'BR-290 (Freeway)', 'BR-386', 'RS-020'],
    districts: ['Zona Norte de Porto Alegre', 'Canoas', 'Gravataí', 'Novo Hamburgo', 'São Leopoldo'],
    logisticsHubs: ['Polos Logísticos e Industriais de Canoas e Gravataí'],
    description: 'Pronta resposta e recuperação veicular em Porto Alegre e Região Metropolitana. Cobertura nos acessos da Freeway, BR-116 e Vale dos Sinos.',
    faqs: [
      {
        pergunta: 'Atendem a região metropolitana de Canoas e Gravataí?',
        resposta: 'Sim, cobrimos toda a grande Porto Alegre e os principais eixos industriais.',
      },
      {
        pergunta: 'Como solicitar pronta resposta no RS?',
        resposta: 'Ligue para a central nacional 24h no (11) 96502-0011.',
      },
      {
        pergunta: 'Atendem caminhões de grãos e carretas no Rio Grande do Sul?',
        resposta: 'Sim, atuamos na localização e recuperação de frotas pesadas.',
      },
    ],
    vizinhosSlugs: ['curitiba', 'sao-paulo', 'brasilia'],
  },
  brasilia: {
    slug: 'brasilia',
    name: 'Brasília',
    state: 'DF',
    stateFull: 'Distrito Federal',
    baseProxima: 'Base Operacional Regional Brasília / Entorno do DF',
    tempoAcionamentoEstimado: 'Acionamento imediato',
    highways: ['BR-020', 'BR-040', 'BR-060', 'BR-070', 'DF-001 (EPCL)'],
    districts: ['Setor de Indústria e Abastecimento (SIA)', 'Taguatinga', 'Ceilândia', 'Samambaia', 'Santa Maria'],
    logisticsHubs: ['SIA - Setor de Indústria e Abastecimento do DF', 'Corredor Brasília-Goiânia'],
    description: 'Pronta resposta para recuperação de veículos e cargas no Distrito Federal e Entorno. Atendimento ágil no SIA, Taguatinga e rodovias federais radiais.',
    faqs: [
      {
        pergunta: 'Cobrem ocorrências no SIA e cidades do DF?',
        resposta: 'Sim, atuamos no Setor de Indústria e Abastecimento e em todas as regiões administrativas do DF.',
      },
      {
        pergunta: 'Atendem o eixo Brasília-Goiânia (BR-060)?',
        resposta: 'Sim, realizamos pronta resposta em toda a extensão da BR-060.',
      },
      {
        pergunta: 'Como contatar a central em Brasília?',
        resposta: 'Disque (11) 96502-0011 para atendimento emergencial 24h.',
      },
    ],
    vizinhosSlugs: ['goiania', 'belo-horizonte', 'salvador'],
  },
  salvador: {
    slug: 'salvador',
    name: 'Salvador',
    state: 'BA',
    stateFull: 'Bahia',
    baseProxima: 'Polo Regional Salvador / Polo Petroquímico de Camaçari',
    tempoAcionamentoEstimado: 'Acionamento imediato',
    highways: ['BR-324', 'BA-099 (Linha Verde)', 'BA-093', 'Via Parafuso'],
    districts: ['Polo de Camaçari', 'Simões Filho', 'Lauro de Freitas', 'Pirajá', 'Valéria'],
    logisticsHubs: ['Polo Industrial de Camaçari', 'Porto de Salvador e Porto de Aratu'],
    description: 'Pronta resposta e recuperação veicular em Salvador, Simões Filho e Polo Industrial de Camaçari. Equipes táticas na BR-324 e região metropolitana.',
    faqs: [
      {
        pergunta: 'Atendem o Polo Industrial de Camaçari e Simões Filho?',
        resposta: 'Sim, realizamos acompanhamento e averiguação nos principais polos químicos e logísticos da Bahia.',
      },
      {
        pergunta: 'Qual o telefone de plantão em Salvador?',
        resposta: 'Nossa central 24h atende no (11) 96502-0011.',
      },
      {
        pergunta: 'Atendem carretas e frotas de distribuição na Bahia?',
        resposta: 'Sim, atendemos todo tipo de frota comercial e veículos particulares.',
      },
    ],
    vizinhosSlugs: ['recife', 'fortaleza', 'brasilia'],
  },
  goiania: {
    slug: 'goiania',
    name: 'Goiânia',
    state: 'GO',
    stateFull: 'Goiás',
    baseProxima: 'Polo Regional Goiânia e Aparecida de Goiânia',
    tempoAcionamentoEstimado: 'Acionamento imediato',
    highways: ['BR-153', 'BR-060', 'GO-020', 'GO-060', 'GO-080'],
    districts: ['Polo Empresarial de Aparecida de Goiânia', 'Distrito Agroindustrial de Anápolis (DAIA)', 'Campinas (Goiânia)', 'Jardim Goiás'],
    logisticsHubs: ['DAIA - Distrito Agroindustrial de Anápolis', 'Eixo Logístico do Centro-Oeste'],
    description: 'Recuperação de veículos, maquinários e cargas em Goiânia, Anápolis e Aparecida de Goiânia. Pronta resposta no eixo da BR-153 e BR-060.',
    faqs: [
      {
        pergunta: 'Atendem o polo DAIA em Anápolis e Aparecida de Goiânia?',
        resposta: 'Sim, temos parceiros posicionados no maior entroncamento do Centro-Oeste.',
      },
      {
        pergunta: 'Vocês recuperam maquinário agrícola e carretas de grãos em Goiás?',
        resposta: 'Sim, atuamos no agronegócio e transporte rodoviário.',
      },
      {
        pergunta: 'Como acionar em Goiânia?',
        resposta: 'Ligue imediatamente para (11) 96502-0011.',
      },
    ],
    vizinhosSlugs: ['brasilia', 'sao-paulo', 'belo-horizonte'],
  },
  fortaleza: {
    slug: 'fortaleza',
    name: 'Fortaleza',
    state: 'CE',
    stateFull: 'Ceará',
    baseProxima: 'Polo Regional Fortaleza / Pecém',
    tempoAcionamentoEstimado: 'Acionamento imediato',
    highways: ['BR-116', 'BR-222', 'CE-040', 'CE-085 (Estruturante)'],
    districts: ['Distrito Industrial de Maracanaú', 'Porto do Mucuripe', 'Complexo do Pecém', 'Messejana'],
    logisticsHubs: ['Complexo Industrial e Portuário do Pecém', 'Distrito Industrial de Maracanaú'],
    description: 'Pronta resposta em Fortaleza, Maracanaú e Complexo Portuário do Pecém. Equipes parceiras em prontidão para localização de cargas e veículos.',
    faqs: [
      {
        pergunta: 'Atendem no Porto do Pecém e Distrito de Maracanaú?',
        resposta: 'Sim, atuamos na recuperação de cargas e veículos pesados nas áreas portuárias e industriais.',
      },
      {
        pergunta: 'Qual o telefone de contato em Fortaleza?',
        resposta: 'Central 24h: (11) 96502-0011.',
      },
      {
        pergunta: 'Trabalham com veículos leves roubados em Fortaleza?',
        resposta: 'Sim, atendemos particulares, locadoras e seguradoras.',
      },
    ],
    vizinhosSlugs: ['recife', 'salvador', 'brasilia'],
  },
  recife: {
    slug: 'recife',
    name: 'Recife',
    state: 'PE',
    stateFull: 'Pernambuco',
    baseProxima: 'Polo Regional Recife / Complexo de Suape',
    tempoAcionamentoEstimado: 'Acionamento imediato',
    highways: ['BR-101', 'BR-232', 'PE-060', 'PE-009 (Rota dos Coqueiros)'],
    districts: ['Complexo Industrial e Portuário de Suape', 'Jaboatão dos Guararapes', 'Cabo de Santo Agostinho', 'Imbiribeira'],
    logisticsHubs: ['Porto e Distrito de Suape', 'Eixo Logístico BR-101 Nordeste'],
    description: 'Pronta resposta e recuperação de veículos em Recife, Jaboatão e Complexo Industrial de Suape. Cobertura nos eixos da BR-101 e BR-232.',
    faqs: [
      {
        pergunta: 'Cobrem o Complexo Portuário de Suape e Jaboatão?',
        resposta: 'Sim, atuamos nos principais polos de cargas e distribuição do Grande Recife.',
      },
      {
        pergunta: 'Como solicitar pronta resposta em Pernambuco?',
        resposta: 'Ligue 24h na central pelo (11) 96502-0011.',
      },
      {
        pergunta: 'Realizam varredura RF anti-jammer no Nordeste?',
        resposta: 'Sim, em conjunto com equipamentos de rastreamento secundário.',
      },
    ],
    vizinhosSlugs: ['fortaleza', 'salvador', 'brasilia'],
  },
  'pouso-alegre': {
    slug: 'pouso-alegre',
    name: 'Pouso Alegre',
    state: 'MG',
    stateFull: 'Minas Gerais',
    baseProxima: 'Polo Sul de Minas / Corredor Fernão Dias',
    tempoAcionamentoEstimado: 'Acionamento imediato',
    highways: ['BR-381 (Rodovia Fernão Dias)', 'MG-179', 'BR-459'],
    districts: ['Distrito Industrial de Pouso Alegre', 'São Cristóvão', 'Fátima', 'Centro'],
    logisticsHubs: ['Polo Farmacêutico e Logístico do Sul de Minas', 'Eixo Fernão Dias SP-BH'],
    description: 'Pronta resposta e localização de veículos em Pouso Alegre e Sul de Minas Gerais. Cobertura tática estratégica ao longo da Rodovia Fernão Dias.',
    faqs: [
      {
        pergunta: 'Como funciona a atuação na Rodovia Fernão Dias em Pouso Alegre?',
        resposta: 'Nossas equipes parceiras monitoram o trecho de serra e entroncamentos da BR-381.',
      },
      {
        pergunta: 'Atendem caminhões e polos farmacêuticos locais?',
        resposta: 'Sim, atendemos transportadoras e frotas de distribuição da região.',
      },
      {
        pergunta: 'Qual o telefone de plantão?',
        resposta: 'Central 24h: (11) 96502-0011.',
      },
    ],
    vizinhosSlugs: ['pocos-de-caldas', 'campinas', 'sao-jose-dos-campos'],
  },
  'pocos-de-caldas': {
    slug: 'pocos-de-caldas',
    name: 'Poços de Caldas',
    state: 'MG',
    stateFull: 'Minas Gerais',
    baseProxima: 'Polo Regional Sul de Minas / Leste Paulista',
    tempoAcionamentoEstimado: 'Acionamento imediato',
    highways: ['BR-267', 'BR-146', 'SP-342 (Acesso a São João da Boa Vista / SP)'],
    districts: ['Distrito Industrial de Poços de Caldas', 'Jardim Country Club', 'Zona Sul', 'Cascatinha'],
    logisticsHubs: ['Distrito Industrial e Conexão Minas-São Paulo'],
    description: 'Pronta resposta e recuperação de veículos em Poços de Caldas e divisa MG/SP. Atendimento ágil para veículos de passeio, carga e frotas comerciais.',
    faqs: [
      {
        pergunta: 'Atendem a divisa entre Poços de Caldas e São Paulo?',
        resposta: 'Sim, cobrimos os acessos rodoviários da BR-267 e SP-342.',
      },
      {
        pergunta: 'Como solicitar acionamento em Poços de Caldas?',
        resposta: 'Ligue 24h na central: (11) 96502-0011.',
      },
      {
        pergunta: 'Atendem seguradoras e particulares?',
        resposta: 'Sim, com pronto despacho de agentes locais.',
      },
    ],
    vizinhosSlugs: ['pouso-alegre', 'campinas', 'ribeirao-preto'],
  },
};
