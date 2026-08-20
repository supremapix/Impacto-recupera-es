export interface ArticleItem {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  publishedAt: string;
  modifiedAt: string;
  readingTime: string;
  directAnswer: string;
  tableOfContents: { id: string; title: string }[];
  contentSections: {
    id: string;
    h2: string;
    h3?: string[];
    paragraphs: string[];
  }[];
  comparativeTable: {
    caption: string;
    headers: string[];
    rows: string[][];
  };
  faqs: { pergunta: string; resposta: string }[];
}

export const ARTICLES_DATA: ArticleItem[] = [
  {
    slug: 'roubo-de-veiculo-passo-a-passo-primeiras-24-horas',
    title: 'Roubo de veículo: o passo a passo das primeiras 24 horas',
    subtitle: 'Protocolo de emergência, janela crítica de recuperação e medidas imediatas para proteger o patrimônio.',
    description: 'Guia completo sobre o que fazer nas primeiras 24 horas após o roubo ou furto de veículo. Entenda a janela crítica, comunicação com autoridades e acionamento de pronta resposta.',
    publishedAt: '2025-01-15T08:00:00-03:00',
    modifiedAt: '2026-08-20T10:00:00-03:00',
    readingTime: '8 min de leitura',
    directAnswer: 'Nas primeiras 24 horas após o roubo de um veículo, a prioridade absoluta é garantir a integridade física das vítimas, acionar a Polícia Militar (190) para o alerta de rede e contactar a central de pronta resposta da Impacto Recuperações no telefone (11) 96502-0011 com o último ponto de telemetria. Mais de 80% das recuperações bem-sucedidas ocorrem nas primeiras 4 a 6 horas.',
    tableOfContents: [
      { id: 'janela-critica', title: '1. A Janela Crítica de Ouro (0h a 4h)' },
      { id: 'comunicacao-policial', title: '2. Registro e Comunicação com as Autoridades (190 e B.O.)' },
      { id: 'acionamento-pronta-resposta', title: '3. Como a Pronta Resposta Age em Campo' },
      { id: 'tabela-procedimentos', title: '4. Comparativo de Ações por Faixa de Tempo' },
      { id: 'bloqueadores-e-jammers', title: '5. O Risco dos Inibidores de Sinal (Jammers)' },
      { id: 'perguntas-frequentes', title: '6. Perguntas Frequentes sobre Roubo Recente' },
    ],
    contentSections: [
      {
        id: 'janela-critica',
        h2: '1. A Janela Crítica de Ouro: Por Que o Tempo é Decisivo',
        paragraphs: [
          'Estatísticas do setor de rastreamento e segurança pública indicam que as primeiras quatro horas após a subtração de um veículo representam a maior probabilidade de localização do bem intacto. Nesse intervalo, os criminosos costumam realizar o chamado "esfriamento" do veículo — estacionando o automóvel ou caminhão em vias públicas residenciais ou pátios abertos para testar se há rastreador ativo ou acompanhamento policial.',
          'Conforme o tempo passa e a ocorrência atinge 12 a 24 horas, o destino do veículo se transforma rapidamente: ele pode ser levado a galpões fechados para desmanche clandestino, ter suas placas adulteradas (clonagem) ou ser transferido para outros estados e rotas de fronteira.',
        ],
      },
      {
        id: 'comunicacao-policial',
        h2: '2. Registro e Comunicação com as Autoridades (190 e B.O.)',
        paragraphs: [
          'Assim que estiver em local seguro, faça a ligação emergencial para o 190. O operador da PM insere o alerta na rede de viaturas com o número da placa e modelo, alertando os sistemas de câmeras inteligentes de radares (Muralha Paulista / City Câmeras).',
          'Em seguida, dirija-se à delegacia mais próxima ou registre o Boletim de Ocorrência Eletrônico no portal da Polícia Civil do respectivo estado. Anote o número do RDO (Registro Digital de Ocorrência) e os nomes de possíveis testemunhas ou câmeras de monitoramento do local.',
        ],
      },
      {
        id: 'acionamento-pronta-resposta',
        h2: '3. Como a Pronta Resposta Age em Campo',
        paragraphs: [
          'Enquanto as autoridades cobrem a segurança geral, a empresa de pronta resposta direciona agentes táticos dedicados ao perímetro onde o rastreador emitiu o último sinal ou aos eixos lógicos de fuga.',
          'Os agentes da Impacto Recuperações utilizam receptores de radiofrequência para captar sinais mesmo quando os bandidos utilizam bloqueadores portáteis. Uma vez avistado o veículo, é feita a preservação do perímetro e acionamento imediato da polícia para a apreensão formal.',
        ],
      },
      {
        id: 'bloqueadores-e-jammers',
        h2: '5. O Risco dos Inibidores de Sinal (Jammers) e a Tecnologia RF',
        paragraphs: [
          'Os inibidores de sinal, popularmente conhecidos como "jammers" ou "capetinhas", emitem ruído eletromagnético nas frequências de celular (GSM/4G) e GPS. Isso faz com que o aplicativo de rastreamento do celular do usuário mostre o veículo como "offline" ou parado em local incorreto.',
          'Para contornar essa tática criminosa, sistemas modernos combinam GPS com radiofrequência (RF) terrestre em bandas imunes ao ruído de jammers convencionais, permitindo que as antenas direcionais dos agentes em campo identifiquem a garagem ou viela onde o veículo foi escondido.',
        ],
      },
    ],
    comparativeTable: {
      caption: 'Cronograma de Ações e Probabilidade de Recuperação',
      headers: ['Tempo Decorrido', 'Ação Principal', 'Comportamento Típico dos Suspeitos', 'Taxa Média de Sucesso'],
      rows: [
        ['0h a 2h', 'Alerta 190 + Central de Pronta Resposta', 'Deslocamento inicial e tentativa de bloqueio de sinal', 'Superior a 85%'],
        ['2h a 6h', 'Varredura RF e cerco do perímetro de última posição', '"Esfriamento" em via pública ou estacionamento aberto', 'Aproximadamente 70%'],
        ['6h a 12h', 'Cruzar leituras de radares de OCR com agentes regionais', 'Deslocamento para ponto secundário ou garagem coberta', 'Entre 40% e 50%'],
        ['12h a 24h+', 'Averiguação em galpões industriais e desmanches', 'Início de adulteração de chassis, placas ou desmonte', 'Inferior a 30%'],
      ],
    },
    faqs: [
      {
        pergunta: 'Devo tentar rastrear e ir atrás do veículo por conta própria?',
        resposta: 'Nunca. A aproximação de um veículo roubado sem treinamento tático e sem o apoio dos órgãos de segurança coloca a vida em perigo iminente. Deixe a averiguação com profissionais especializados e com as polícias militar e civil.',
      },
      {
        pergunta: 'Se o rastreador sumiu do mapa, significa que o carro já era?',
        resposta: 'Não. É muito comum o uso temporário de jammers portáteis que perdem a bateria após algumas horas, ou o veículo ser estacionado em locais com sinal de RF detectável por varredura de solo.',
      },
      {
        pergunta: 'Qual o telefone de emergência da Impacto?',
        resposta: 'A central de comando 24 horas atende pelo telefone e WhatsApp (11) 96502-0011.',
      },
    ],
  },
  {
    slug: 'rastreador-seguro-pronta-resposta-diferencas',
    title: 'Rastreador, seguro e pronta resposta: o que cada um resolve',
    subtitle: 'Compreenda as três camadas fundamentais de proteção patrimonial veicular e como elas se complementam.',
    description: 'Entenda a diferença técnica e prática entre seguro automóvel, rastreador veicular e serviço de pronta resposta. Descubra como economizar e proteger frotas e carros particulares.',
    publishedAt: '2025-01-20T08:00:00-03:00',
    modifiedAt: '2026-08-20T10:00:00-03:00',
    readingTime: '7 min de leitura',
    directAnswer: 'O rastreador informa a localização geográfica do bem via GPS/RF; o seguro ressarce financeiramente o proprietário após a perda definitiva mediante pagamento de franquia e trâmites documentais; a pronta resposta atua fisicamente no terreno com agentes móveis para recuperar e preservar o veículo antes que ele seja desmanchado.',
    tableOfContents: [
      { id: 'visao-geral', title: '1. O Tripé da Proteção Patrimonial' },
      { id: 'papel-rastreador', title: '2. O Papel e os Limites do Rastreador' },
      { id: 'papel-seguro', title: '3. A Indenização Financeira do Seguro' },
      { id: 'papel-pronta-resposta', title: '4. A Pronta Resposta como Ação de Campo' },
      { id: 'tabela-comparativa', title: '5. Matriz Comparativa Detalhada' },
      { id: 'faq-tripé', title: '6. Perguntas Frequentes' },
    ],
    contentSections: [
      {
        id: 'visao-geral',
        h2: '1. O Tripé da Proteção Patrimonial: Como Cada Camada se Conecta',
        paragraphs: [
          'Muitos proprietários e gestores de frota acreditam que possuir apenas um dos serviços é suficiente. No entanto, cada uma dessas soluções resolve uma dor totalmente diferente dentro do ciclo de vida da segurança de um veículo.',
          'Um rastreador sem pronta resposta é apenas uma tela piscando com coordenadas que ninguém vai averiguar. Um seguro sem rastreador e sem pronta resposta arca com custos elevados de sinistro, gerando aumento constante de apólices.',
        ],
      },
      {
        id: 'papel-rastreador',
        h2: '2. O Papel e os Limites da Tecnologia de Rastreamento',
        paragraphs: [
          'Os equipamentos de telemetria e rastreamento coletam posições de satélites GPS/GLONASS e transmitem via sinal de rede móvel (2G/4G/Cat-M/NB-IoT) ou satelital dedicado.',
          'O limitador dessa camada é físico: o rastreador não corre atrás do veículo, não aborda o local do esconderijo e não preserva a carga quando ela está prestes a ser transbordada. A tecnologia precisa de braço operacional humano.',
        ],
      },
      {
        id: 'papel-seguro',
        h2: '3. A Indenização Financeira do Seguro Tradicional',
        paragraphs: [
          'A seguradora opera no modelo de reposição de capital. Caso o bem não seja localizado em até 30 dias após o B.O., é paga a tabela FIPE descontando eventuais pendências financeiras.',
          'Contudo, para empresas e autônomos que dependem do caminhão ou utilitário para faturar diariamente, a perda do instrumento de trabalho resulta em semanas ou meses de faturamento zero e perda de contratos com clientes.',
        ],
      },
      {
        id: 'papel-pronta-resposta',
        h2: '4. A Pronta Resposta como Ação de Campo Imediata',
        paragraphs: [
          'A equipe de pronta resposta transforma o ponto no mapa em ação física. Viaturas táticas se deslocam até as proximidades, realizam averiguação visual com prudência, checam galpões e acionam a força policial para recuperar o bem ainda com a carga intacta.',
          'Com mais de 630 parceiros espalhados pelas rodovias e polos metropolitanos, a Impacto Recuperações encurta o tempo de deslocamento a uma fração do que seria necessário sem uma malha integrada.',
        ],
      },
    ],
    comparativeTable: {
      caption: 'Matriz Comparativa: Rastreador vs. Seguro vs. Pronta Resposta',
      headers: ['Critério', 'Rastreador', 'Seguro Tradicional', 'Pronta Resposta'],
      rows: [
        ['Objetivo Central', 'Monitorar telemetria e coordenadas', 'Compensação financeira pós-perda', 'Resgate e preservação física do bem'],
        ['Tempo de Atuação', 'Tempo real contínuo', 'Dias a semanas para regulação', 'Minutos após o acionamento'],
        ['Presença Física em Campo', 'Não possui', 'Vistoriador após dias', 'Sim, agentes táticos móveis'],
        ['Impacto na Carga Transportada', 'Apenas aponta o local', 'Cobertura depende de apólice específica', 'Evita o transbordo e desmanche'],
      ],
    },
    faqs: [
      {
        pergunta: 'Se eu já pago seguro, vale a pena ter pronta resposta?',
        resposta: 'Sim. A recuperação do bem evita o pagamento de franquia alta, não perde o bônus na renovação da apólice e previne a perda de faturamento diário por indisponibilidade do veículo de trabalho.',
      },
      {
        pergunta: 'A pronta resposta substitui o seguro?',
        resposta: 'Eles são complementares. A pronta resposta maximiza a taxa de recuperação em quase 90%, enquanto o seguro protege contra danos de colisão e perda total.',
      },
    ],
  },
  {
    slug: 'seguranca-de-cargas-rodovias-sp-escolta-armada',
    title: 'Segurança de cargas nas rodovias de São Paulo: como funciona a escolta',
    subtitle: 'Diretrizes da Lei 7.102/83, pontos críticos do estado e boas práticas no transporte rodoviário.',
    description: 'Saiba como funciona a escolta armada e velada para transporte de cargas nas rodovias paulistas. Normas da Polícia Federal, rotas de alto risco e protocolos preventivos.',
    publishedAt: '2025-02-01T08:00:00-03:00',
    modifiedAt: '2026-08-20T10:00:00-03:00',
    readingTime: '9 min de leitura',
    directAnswer: 'A segurança de cargas nas rodovias paulistas exige planejamento de rota, integração com gerenciadoras de risco e utilização de escolta armada executada por empresas parceiras devidamente homologadas pela Polícia Federal nos termos da Lei 7.102/83. Os corredores Anhanguera, Bandeirantes, Dutra, Rodoanel e Castelo Branco concentram os maiores fluxos de valor agregado.',
    tableOfContents: [
      { id: 'panorama-rodoviario', title: '1. O Panorama das Rodovias de São Paulo' },
      { id: 'legislacao-escolta', title: '2. Legislação e Homologação na Polícia Federal' },
      { id: 'escolta-ostensiva-velada', title: '3. Escolta Ostensiva vs. Escolta Velada' },
      { id: 'tabela-corredores', title: '4. Principais Corredores Logísticos e Recomendações' },
      { id: 'integracao-pronta-resposta', title: '5. A Parceria entre Escolta e Pronta Resposta' },
      { id: 'faq-escolta', title: '6. Perguntas Frequentes sobre Escolta' },
    ],
    contentSections: [
      {
        id: 'panorama-rodoviario',
        h2: '1. O Panorama das Rodovias de São Paulo e os Eixos de Risco',
        paragraphs: [
          'O estado de São Paulo concentra a malha logística mais densa da América Latina. Rodovias como a Anhanguera (SP-330), Bandeirantes (SP-348), Presidente Dutra (BR-116), Fernão Dias (BR-381) e o Rodoanel Mário Covas (SP-021) movimentam diariamente bilhões de reais em produtos farmacêuticos, eletrônicos, combustíveis e carnes.',
          'Por concentrarem alto valor, esses corredores exigem protocolos rigorosos de contingência, com paradas pré-programadas em postos credenciados e monitoramento ininterrupto de telemetria.',
        ],
      },
      {
        id: 'legislacao-escolta',
        h2: '2. Legislação e Homologação na Polícia Federal (Lei 7.102/83)',
        paragraphs: [
          'A atividade de escolta armada no Brasil é estritamente regulamentada pela Lei Federal nº 7.102/1983 e fiscalizada pela Delegacia de Controle de Segurança Privada (DELESP/DREX) da Polícia Federal.',
          'Toda operação de escolta armada comercializada pela Impacto Recuperações é executada por empresas parceiras com Alvará de Autorização de Funcionamento e Certificado de Segurança válidos emitidos pela Polícia Federal. // TODO: inserir nº da autorização da PF da parceira, ou remover o serviço.',
        ],
      },
      {
        id: 'escolta-ostensiva-velada',
        h2: '3. Escolta Ostensiva vs. Escolta Velada: Quando Usar Cada Uma',
        paragraphs: [
          'A escolta ostensiva utiliza viaturas caracterizadas e agentes uniformizados, gerando efeito dissuasório imediato contra abordagens oportunistas ao caminhão.',
          'Já o acompanhamento tático velado utiliza veículos descaracterizados para observar a movimentação e detectar veículos batedores de quadrilhas sem chamar atenção indesejada, sendo muito aplicado no transporte de cargas ultrassensíveis como tecnologia e alta costura.',
        ],
      },
    ],
    comparativeTable: {
      caption: 'Corredores Rodoviários de SP e Medidas Recomendadas',
      headers: ['Rodovia', 'Trecho Crítico', 'Tipo de Carga Frequente', 'Procedimento Operacional Sugerido'],
      rows: [
        ['Rodoanel Mário Covas (SP-021)', 'Trechos Sul e Leste', 'E-commerce, alimentos e químicos', 'Janela de tráfego diurna e apoio de pronta resposta'],
        ['Rod. Pres. Dutra (BR-116)', 'Eixo Guarulhos a São José dos Campos', 'Eletroeletrônicos e autopeças', 'Escolta armada com comunicação ponto a ponto'],
        ['Rod. Fernão Dias (BR-381)', 'Serra de Mairiporã a Atibaia', 'Farmacêuticos e confecções', 'Monitoramento com sensores de desengate de carreta'],
        ['Rod. Anhanguera / Bandeirantes', 'Corredor Campinas - Viracopos', 'Cargas aéreas de alto valor agregado', 'Comboio monitorado e base próxima em Indaiatuba'],
      ],
    },
    faqs: [
      {
        pergunta: 'Como é feita a autorização para transporte de cargas com escolta?',
        resposta: 'A transportadora emite o Plano de Viagem junto à gerenciadora de risco e as empresas parceiras autorizadas pela PF emitem a Guia de Transporte de Armas e Munições correspondente.',
      },
      {
        pergunta: 'A Impacto executa a escolta com equipe própria?',
        resposta: 'A Impacto coordena as operações logísticas e executa a escolta armada exclusivamente através de empresas parceiras credenciadas e autorizadas pela Polícia Federal.',
      },
    ],
  },
  {
    slug: 'como-escolher-empresa-de-recuperacao-de-veiculos',
    title: 'Como escolher uma empresa de recuperação de veículos (checklist)',
    subtitle: 'Critérios indispensáveis de idoneidade jurídica, capacidade de campo, tecnologia e tempo de resposta.',
    description: 'Checklist completo para contratar uma empresa de pronta resposta e recuperação veicular séria. Verifique CNPJ, endereço físico, atuação 24h e tecnologias anti-jammer.',
    publishedAt: '2025-02-10T08:00:00-03:00',
    modifiedAt: '2026-08-20T10:00:00-03:00',
    readingTime: '8 min de leitura',
    directAnswer: 'Para escolher uma empresa confiável de recuperação veicular, verifique se ela possui CNPJ ativo e regular (como o CNPJ 34.128.125/0001-13 da Impacto Recuperações, fundada em 2019), endereço físico comprovado, central telefônica 24 horas ininterrupta, tecnologia de radiofrequência contra jammers e uma rede capilarizada de profissionais parceiros.',
    tableOfContents: [
      { id: 'criterios-juridicos', title: '1. Regularidade Jurídica e Cadastral (CNPJ e CNAE)' },
      { id: 'infraestrutura-fisica', title: '2. Sede Física e Central 24h Real' },
      { id: 'tecnologia-campo', title: '3. Capacidade Tecnológica de Campo (Anti-Jammer)' },
      { id: 'checklist-avaliacao', title: '4. Checklist Interativo de Avaliação' },
      { id: 'transparencia-eeat', title: '5. Transparência e E-E-A-T nas Contratações' },
      { id: 'faq-checklist', title: '6. Perguntas Frequentes' },
    ],
    contentSections: [
      {
        id: 'criterios-juridicos',
        h2: '1. Regularidade Jurídica e Cadastral: Por Onde Começar',
        paragraphs: [
          'No mercado de segurança e recuperação, desconfie de prestadores anônimos que divulgam apenas números de WhatsApp em redes sociais sem divulgar CNPJ ou endereço físico.',
          'Consulte a situação cadastral no portal da Receita Federal. Empresas sérias como a Impacto Recuperações (CNPJ 34.128.125/0001-13, razão social Marcelo Emerson Pires) possuem registro ativo sob o CNAE 80.20-0-01 (Monitoramento de sistemas de segurança eletrônico) desde julho de 2019.',
        ],
      },
      {
        id: 'infraestrutura-fisica',
        h2: '2. Sede Física e Central 24 Horas em Funcionamento',
        paragraphs: [
          'Uma empresa de pronta resposta necessita de um centro de operações que nunca durma. Verifique se o endereço da base é real — como nossa matriz na Rua Adaisio Giron, 55, Jardim Regina, em Indaiatuba/SP.',
          'Faça uma ligação de teste em horários de madrugada ou fins de semana para comprovar que o atendimento emergencial é imediato e tripulado por operadores humanos capacitados.',
        ],
      },
      {
        id: 'tecnologia-campo',
        h2: '3. Capacidade Tecnológica de Campo e Tecnologia Anti-Jammer',
        paragraphs: [
          'Equipes que dependem unicamente do aplicativo de celular do motorista ficam cegas quando os criminosos ligam inibidores de frequência (jammers).',
          'Exija que o prestador conte com ferramentas de varredura por antena direcional de radiofrequência e analisadores de espectro para localização no solo.',
        ],
      },
    ],
    comparativeTable: {
      caption: 'Checklist Comparativo: Empresa Confiável vs. Prestador Clandestino',
      headers: ['Item Avaliado', 'Empresa Estruturada (Padrão Impacto)', 'Prestador Clandestino / Risco'],
      rows: [
        ['CNPJ e Razão Social', 'Aberto e consultável na Receita Federal (Ativo desde 2019)', 'Não informa ou utiliza CNPJ inapto/terceirizado'],
        ['Endereço Físico', 'Sede física com endereço comprovado em Indaiatuba/SP', 'Sem endereço comercial ou endereço falso em coworking'],
        ['Disponibilidade da Central', '24 horas / 7 dias por semana ininterruptos', 'Horário comercial ou celular pessoal desligado à noite'],
        ['Equipamentos de Campo', 'Receptores RF direcionais e varredura de jammer', 'Apenas celular pessoal com mapa convencional'],
      ],
    },
    faqs: [
      {
        pergunta: 'Como consultar o CNPJ da Impacto Recuperações?',
        resposta: 'Acesse o site oficial da Receita Federal (Emissão de Comprovante de Inscrição e Situação Cadastral) e digite o CNPJ 34.128.125/0001-13.',
      },
      {
        pergunta: 'Qual a sede oficial da Impacto?',
        resposta: 'Ficamos localizados na Rua Adaisio Giron, 55 — Jardim Regina, Indaiatuba/SP, CEP 13348-895.',
      },
    ],
  },
];
