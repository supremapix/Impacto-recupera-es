export type BlocoConteudo =
  | { tipo: 'h2'; texto: string; id: string }
  | { tipo: 'h3'; texto: string; id: string }
  | { tipo: 'p'; texto: string }
  | { tipo: 'lista'; ordenada: boolean; itens: string[] }
  | { tipo: 'passos'; itens: { titulo: string; texto: string }[] }
  | { tipo: 'tabela'; colunas: string[]; linhas: string[][] }
  | { tipo: 'destaque'; variante: 'atencao' | 'dica' | 'aviso'; texto: string }
  | { tipo: 'citacaoFonte'; texto: string; fonte: string; url: string };

export interface Artigo {
  slug: string;
  titulo: string;            // H1
  tituloSeo: string;         // <title>, até 60 caracteres
  descricao: string;         // meta description, 150-160 caracteres
  resumo: string;            // 40-60 palavras, o bloco de resposta direta
  categoria: 'Emergência' | 'Prevenção' | 'Cargas' | 'Como contratar' | 'Regional';
  tempoLeitura: number;      // minutos, calculado por 200 palavras/min
  publicadoEm: string;       // ISO
  atualizadoEm: string;      // ISO
  destaque: boolean;
  imagemCard?: string;
  imagemAlt?: string;
  corpo: BlocoConteudo[];
  faq: { pergunta: string; resposta: string }[];
  relacionados: string[];    // slugs
  cidadesRelacionadas: string[]; // slugs de /servicos-em/*
  temAvisoLegal?: boolean;
}

export const ARTIGOS: Artigo[] = [
  // =========================================================================
  // ARTIGO 1 — EMERGÊNCIA
  // =========================================================================
  {
    slug: 'roubo-de-veiculo-primeiras-24-horas',
    titulo: 'Roubo de veículo: o que fazer nas primeiras 24 horas',
    tituloSeo: 'Roubo de Veículo: O Que Fazer nas Primeiras 24 Horas',
    descricao: 'Passo a passo imediato após roubo de veículo: acionamento do 190, registro de boletim de ocorrência eletrônico em SP, rastreamento e pronta resposta.',
    resumo: 'Ao sofrer um roubo de veículo, preserve sua integridade física e acione imediatamente a Polícia Militar pelo 190, informando placa, modelo e ponto exato. Em seguida, acione sua central de pronta resposta ou rastreador e registre o boletim de ocorrência na Delegacia Eletrônica para viabilizar buscas táticas nas primeiras horas.',
    categoria: 'Emergência',
    tempoLeitura: 8,
    publicadoEm: '2026-03-01T08:00:00.000Z',
    atualizadoEm: '2026-03-15T10:00:00.000Z',
    destaque: true,
    imagemCard: 'https://img.supremasite.com.br/highway_security_sunset.webp',
    imagemAlt: 'Viaturas de pronta resposta em rodovia no pôr do sol - O que fazer em caso de roubo de veículo nas primeiras 24 horas',
    temAvisoLegal: true,
    relacionados: [
      'rastreador-seguro-ou-pronta-resposta',
      'como-escolher-empresa-recuperacao-de-veiculos',
      'roubo-de-veiculos-indaiatuba-regiao'
    ],
    cidadesRelacionadas: ['indaiatuba', 'campinas', 'sao-paulo', 'sorocaba', 'jundiai'],
    faq: [
      {
        pergunta: 'Devo registrar o Boletim de Ocorrência antes de acionar o rastreador ou a pronta resposta?',
        resposta: 'Não. Você deve ligar para o 190 e acionar a central de rastreamento e pronta resposta nos primeiros minutos para iniciar a varredura de sinal imediatamente. O Boletim de Ocorrência pela Delegacia Eletrônica pode ser preenchido logo em seguida.'
      },
      {
        pergunta: 'O que fazer se o rastreador parar de emitir sinal logo após o roubo?',
        resposta: 'A interrupção de sinal frequentemente indica o uso de inibidores de frequência (jammers). Nesses casos, informe imediatamente a central de pronta resposta para que equipes de campo utilizem equipamentos portáteis de detecção de radiofrequência para varredura física.'
      },
      {
        pergunta: 'Posso ir sozinho ao local indicado pelo aplicativo de rastreamento?',
        resposta: 'Nunca vá sozinho ao ponto indicado. O sinal pode apontar para áreas de risco, galpões fechados ou locais sob vigilância de criminosos. A aproximação deve ser feita exclusivamente por equipes técnicas de pronta resposta em conjunto com a Polícia Militar.'
      },
      {
        pergunta: 'Como funciona a liberação do veículo quando ele é encontrado?',
        resposta: 'Após a localização e preservação do veículo pelas equipes em campo com apoio da Polícia Militar, o automóvel é apresentado à autoridade policial no Distrito Policial da área para elaboração do auto de exibição, apreensão e entrega ao proprietário legal.'
      },
      {
        pergunta: 'Quanto tempo leva para o bloqueio do veículo ser ativado pelo rastreador?',
        resposta: 'O envio do comando de bloqueio ocorre em segundos pela central de monitoramento, porém sua execução prática pelo veículo depende da recepção de sinal celular e de protocolos de segurança que evitam paradas bruscas em alta velocidade.'
      }
    ],
    corpo: [
      {
        tipo: 'p',
        texto: 'As primeiras horas após a subtração de um veículo são determinantes para a sua localização. A rapidez e a ordem das decisões tomadas pelo proprietário ou motorista influenciam diretamente a preservação da integridade física e o início das ações de busca tática.'
      },
      {
        tipo: 'h2',
        id: 'primeiros-10-minutos',
        texto: 'Os primeiros 10 minutos: o que fazer antes de qualquer outra coisa'
      },
      {
        tipo: 'p',
        texto: 'Nos primeiros dez minutos após o roubo, o objetivo central é garantir a sua segurança e repassar os dados essenciais para as forças policiais e para a central de monitoramento. Qualquer hesitação ou atitude intempestiva pode comprometer a sua vida ou atrasar o início das buscas.'
      },
      {
        tipo: 'h3',
        id: 'seguranca-em-primeiro-lugar',
        texto: 'Segurança em primeiro lugar: não persiga, não reaja'
      },
      {
        tipo: 'p',
        texto: 'Se você foi vítima de abordagem armada, mantenha a calma e afaste-se da linha de visão dos criminosos assim que possível. Não tente perseguir o veículo a pé ou com auxílio de outros motoristas, e não confronte os ocupantes em hipótese alguma. Procure um estabelecimento comercial, posto de combustível ou base policial para se abrigar e utilizar um telefone seguro.'
      },
      {
        tipo: 'h3',
        id: 'ligue-190',
        texto: 'Ligue 190 e informe placa, modelo, cor e local exato'
      },
      {
        tipo: 'p',
        texto: 'Comunique a ocorrência à Polícia Militar pelo telefone 190. Forneça com precisão a placa, a marca, o modelo, a cor do veículo, eventuais avarias ou características visuais distintas, a direção tomada pelos criminosos e o horário exato da abordagem. O operador do Centro de Operações da Polícia Militar (COPOM) emitirá um alerta imediato na rede de rádio para as viaturas do setor.'
      },
      {
        tipo: 'h3',
        id: 'acione-pronta-resposta',
        texto: 'Acione a central de pronta resposta ou seu rastreador'
      },
      {
        tipo: 'p',
        texto: 'Logo após desligar com o 190, faça contato com a central da sua empresa de rastreamento ou com a central de pronta resposta 24 horas da Impacto Recuperações pelo telefone (11) 96502-0011. Informe que o roubo acabou de acontecer para que o operador inicie o rastreamento em tempo real, envie comandos de telemetria e mobilize viaturas táticas para a região.'
      },
      {
        tipo: 'h2',
        id: 'registrar-boletim-de-ocorrencia',
        texto: 'Registrar o boletim de ocorrência'
      },
      {
        tipo: 'p',
        texto: 'O registro formal do Boletim de Ocorrência (BO) é a medida legal que insere o alerta de roubo ou furto nos sistemas estaduais e federais de trânsito, impedindo que infrações posteriores sejam atribuídas a você e autorizando a abordagem policial em rodovias e cidades.'
      },
      {
        tipo: 'h3',
        id: 'delegacia-eletronica-sp',
        texto: 'Como registrar pela Delegacia Eletrônica em São Paulo'
      },
      {
        tipo: 'p',
        texto: 'No estado de São Paulo, o registro pode ser realizado pela internet através do portal oficial da Delegacia Eletrônica da Polícia Civil de SP. O serviço funciona 24 horas por dia e gera um protocolo com força de documento oficial após validação da autoridade policial.'
      },
      {
        tipo: 'citacaoFonte',
        texto: 'Acesse o canal oficial da Polícia Civil do Estado de São Paulo para registrar ocorrências de roubo ou furto de veículos de forma eletrônica.',
        fonte: 'Delegacia Eletrônica da Polícia Civil de SP',
        url: 'https://www.delegaciaeletronica.policiacivil.sp.gov.br/'
      },
      {
        tipo: 'h3',
        id: 'quando-ir-presencialmente',
        texto: 'Quando é obrigatório ir presencialmente à delegacia'
      },
      {
        tipo: 'p',
        texto: 'O registro presencial em um Distrito Policial é obrigatório quando houver vítimas feridas, disparo de arma de fogo, retenção de pessoas em cárcere privado (sequestro relâmpago) ou quando os documentos de porte obrigatório tiverem sido subtraídos com violência física grave. Nestes casos, dirija-se à delegacia da circunscrição onde o fato ocorreu.'
      },
      {
        tipo: 'h3',
        id: 'informacoes-necessarias',
        texto: 'Que informações ter em mãos: documento, placa, chassi, último local'
      },
      {
        tipo: 'p',
        texto: 'Para preencher o BO sem retrabalho, tenha em mãos o Certificado de Registro e Licenciamento do Veículo (CRLV digital), número do chassi e Renavam, além do endereço exato do evento, descrição das vestimentas e quantidade de envolvidos na ação criminosa.'
      },
      {
        tipo: 'h2',
        id: 'avisar-quem-precisa-saber',
        texto: 'Avisar quem precisa saber, nesta ordem'
      },
      {
        tipo: 'p',
        texto: 'A comunicação com as partes interessadas deve seguir uma ordem lógica de prioridade para não dispersar o tempo de reação tática nas primeiras horas.'
      },
      {
        tipo: 'passos',
        itens: [
          {
            titulo: '1. Seguradora ou Associação de Proteção Veicular',
            texto: 'Abra o aviso de sinistro fornecendo o número do protocolo do Boletim de Ocorrência para dar início aos prazos regulamentares da apólice.'
          },
          {
            titulo: '2. Empresa de Rastreamento e Pronta Resposta',
            texto: 'Mantenha a linha aberta com os operadores táticos para acompanhar telemetria, bloqueios e posicionamento das equipes em solo.'
          },
          {
            titulo: '3. Financeira ou Banco (se o veículo for financiado)',
            texto: 'Notifique a instituição credora sobre a perda temporária do bem alienado para registro cadastral e congelamento de eventuais cobranças acessórias.'
          },
          {
            titulo: '4. Gestão de Frotas da Empresa (se veículo corporativo)',
            texto: 'Avise o departamento de logística ou segurança patrimonial para acionamento de protocolos corporativos e conferência de manifesto de carga.'
          }
        ]
      },
      {
        tipo: 'h2',
        id: 'o-que-costuma-acontecer-primeiras-24-horas',
        texto: 'O que costuma acontecer nas primeiras 24 horas'
      },
      {
        tipo: 'p',
        texto: 'Durante as primeiras 24 horas após a abordagem, o veículo roubado passa por fases operacionais típicas executadas pelos infratores, conhecidas como "esfriamento", transporte para galpões ou tentativa de neutralização dos equipamentos eletrônicos.'
      },
      {
        tipo: 'h3',
        id: 'bloqueio-e-rastreamento',
        texto: 'Bloqueio e rastreamento'
      },
      {
        tipo: 'p',
        texto: 'Quando o comando de bloqueio é acionado pela central, o circuito da bomba de combustível ou ignição é interrompido assim que o veículo atinge parâmetros seguros de velocidade. As equipes em campo utilizam as coordenadas de última transmissão para iniciar a aproximação.'
      },
      {
        tipo: 'h3',
        id: 'janela-de-tempo',
        texto: 'A janela de tempo e por que ela importa'
      },
      {
        tipo: 'p',
        texto: 'Quanto mais cedo as equipes táticas e viaturas chegam à região do último sinal, maior a probabilidade de localizar o veículo antes que ele seja recolhido a locais fechados ou desmontado. A velocidade de deslocamento da rede em solo é o elemento crítico dessa etapa.'
      },
      {
        tipo: 'h3',
        id: 'rastreador-parou-de-responder',
        texto: 'O que fazer se o rastreador parou de responder'
      },
      {
        tipo: 'p',
        texto: 'Se a comunicação do rastreador cessar, equipes de pronta resposta iniciam varreduras com antenas direcionais e equipamentos receptores de radiofrequência, que captam sinais mesmo em ambientes subterrâneos ou quando inibidores de sinal estão em funcionamento.'
      },
      {
        tipo: 'h2',
        id: 'erros-comuns',
        texto: 'Erros comuns que atrapalham a recuperação'
      },
      {
        tipo: 'p',
        texto: 'Diante do impacto emocional da ocorrência, condutas impulsivas podem comprometer o trabalho policial e a segurança do proprietário.'
      },
      {
        tipo: 'lista',
        ordenada: false,
        itens: [
          'Deslocar-se sozinho até a coordenada do aplicativo de celular sem apoio especializado.',
          'Negociar ou pagar resgate para golpistas que entram em contato afirmando ter encontrado o carro.',
          'Demorar horas para avisar a central de monitoramento ou a Polícia Militar.',
          'Publicar placa, telefone pessoal e localização em redes sociais, expondo-se a golpes de extorsão.',
          'Omitir informações sobre a presença de chaves reservas ou documentos deixados dentro do automóvel.',
          'Assumir que o seguro dispensará a necessidade de formalização imediata do Boletim de Ocorrência.'
        ]
      },
      {
        tipo: 'h2',
        id: 'depois-que-veiculo-e-localizado',
        texto: 'Depois que o veículo é localizado'
      },
      {
        tipo: 'p',
        texto: 'Quando a equipe de pronta resposta ou a polícia localiza o bem, iniciam-se os procedimentos legais e operacionais de preservação, vistoria e restituição oficial ao proprietário.'
      },
      {
        tipo: 'h3',
        id: 'liberacao-e-vistoria',
        texto: 'Liberação, remoção e vistoria'
      },
      {
        tipo: 'p',
        texto: 'O local onde o veículo foi abandonado é isolado e preservado para perícia se houver indícios de outros crimes. O automóvel é conduzido ao Distrito Policial ou pátio credenciado, onde é feito o auto de entrega após a conferência documental.'
      },
      {
        tipo: 'h3',
        id: 'documentacao-detran',
        texto: 'Documentação junto ao Detran'
      },
      {
        tipo: 'p',
        texto: 'Após a recuperação formal e emissão do documento de entrega pela Polícia Civil, o sistema do Detran deve ser atualizado para baixa do alerta de roubo/furto, regularizando a situação cadastral do veículo para circulação normal.'
      },
      {
        tipo: 'citacaoFonte',
        texto: 'Consulte os procedimentos de regularização de cadastro de veículos recuperados no portal oficial do Detran-SP.',
        fonte: 'Detran-SP — Portal Oficial de Trânsito',
        url: 'https://www.detran.sp.gov.br/'
      },
      {
        tipo: 'h2',
        id: 'tabela-primeiras-horas',
        texto: 'Comparativo de conduta nas primeiras horas'
      },
      {
        tipo: 'tabela',
        colunas: ['Situação', 'Faça', 'Não faça', 'Por quê'],
        linhas: [
          [
            'Abordagem armada em andamento',
            'Entregue o veículo sem movimentos bruscos e afaste-se',
            'Não reaja e não tente acelerar',
            'A vida e a integridade física têm prioridade absoluta sobre o patrimônio material.'
          ],
          [
            'Logo após estar em local seguro',
            'Ligue imediatamente para o 190 e informe dados essenciais',
            'Não ligue primeiro para amigos ou parentes',
            'O COPOM precisa de minutos para lançar o alerta na rede de viaturas em patrulhamento.'
          ],
          [
            'Acionamento de tecnologia',
            'Contate a central de rastreamento e pronta resposta',
            'Não tente seguir o sinal por conta própria no app',
            'Equipes treinadas possuem protocolos de aproximação tática e rastreadores RF portáteis.'
          ],
          [
            'Contato de terceiros cobrando valores',
            'Bloqueie o contato e repasse o número à polícia',
            'Não transfira PIX nem marque encontros a sós',
            'Golpistas monitoram redes sociais para extorquir vítimas de roubo.'
          ],
          [
            'Registro de documentação legal',
            'Emita o BO pela Delegacia Eletrônica com todos os detalhes',
            'Não deixe para o dia seguinte',
            'A queixa formal é exigência contratual de seguradoras e bloqueia multas posteriores.'
          ],
          [
            'Localização confirmada da unidade',
            'Aguarde a chegada da Polícia Militar e a liberação formal',
            'Não retire o carro do local sem autorização',
            'Retirar o veículo sem baixa no BO pode gerar nova abordagem policial com voz de prisão.'
          ]
        ]
      }
    ]
  },

  // =========================================================================
  // ARTIGO 2 — PREVENÇÃO
  // =========================================================================
  {
    slug: 'rastreador-seguro-ou-pronta-resposta',
    titulo: 'Rastreador, seguro e pronta resposta: o que cada um resolve',
    tituloSeo: 'Rastreador, Seguro ou Pronta Resposta: Qual Você Precisa?',
    descricao: 'Entenda as diferenças reais entre rastreador veicular, seguro auto e pronta resposta tática 24h. Saiba como cada solução atua na proteção do veículo.',
    resumo: 'O rastreador veicular informa a localização geográfica por satélite ou telemetria, o seguro auto indeniza financeiramente após os prazos regulamentares caso o bem não seja recuperado, e a pronta resposta tática é o serviço que desloca equipes operacionais em solo para localizar e preservar o veículo.',
    categoria: 'Prevenção',
    tempoLeitura: 7,
    publicadoEm: '2026-03-02T08:00:00.000Z',
    atualizadoEm: '2026-03-15T10:00:00.000Z',
    destaque: false,
    imagemCard: 'https://img.supremasite.com.br/impacto_recuperacoes_triptych.webp',
    imagemAlt: 'Diferenças entre rastreador, seguro auto e pronta resposta tática 24h',
    temAvisoLegal: false,
    relacionados: [
      'roubo-de-veiculo-primeiras-24-horas',
      'como-escolher-empresa-recuperacao-de-veiculos',
      'seguranca-de-cargas-rodovias-sao-paulo'
    ],
    cidadesRelacionadas: ['indaiatuba', 'campinas', 'sao-paulo', 'sorocaba'],
    faq: [
      {
        pergunta: 'Ter apenas rastreador veicular garante que meu carro será recuperado?',
        resposta: 'Não. O rastreador é um dispositivo eletrônico transmissor de coordenadas geográficas. Sem uma central de operações e uma equipe de pronta resposta em solo para se deslocar e realizar a averiguação, o proprietário apenas visualiza o ponto no mapa sem meios seguros de recuperação.'
      },
      {
        pergunta: 'Se eu contratar pronta resposta, ainda preciso de seguro?',
        resposta: 'Sim. A pronta resposta atua na tentativa de localização rápida e preservação do patrimônio, enquanto o seguro cobre danos parciais, acidentes com terceiros, incêndio e indenização integral caso o veículo seja descaracterizado ou não localizado.'
      },
      {
        pergunta: 'Como a seguradora se beneficia quando o cliente tem pronta resposta?',
        resposta: 'A pronta resposta reduz o índice de sinistros indenizados integralmente pelas seguradoras e associações, localizando o patrimônio antes da desmancha e minimizando o prejuízo da operação securitária.'
      },
      {
        pergunta: 'Quem aciona a equipe de pronta resposta?',
        resposta: 'O acionamento pode ser feito pelo próprio proprietário, pelo gestor de frotas da empresa ou de forma automática pela central de monitoramento quando há disparos de alarmes de violação, botão de pânico ou desvio não autorizado de rota.'
      },
      {
        pergunta: 'O serviço de pronta resposta substitui o trabalho da Polícia Militar?',
        resposta: 'Não. A pronta resposta é um serviço privado de apoio logístico e averiguação tática. Quando o veículo é avistado, a equipe mantém a preservação e aciona as forças policiais para cumprimento das medidas de polícia judiciária e segurança pública.'
      }
    ],
    corpo: [
      {
        tipo: 'p',
        texto: 'Muitos proprietários e gestores de frota acreditam que contratar apenas uma dessas ferramentas resolve integralmente a segurança veicular. Na prática, rastreador, seguro e pronta resposta atuam em etapas distintas e complementares de uma ocorrência.'
      },
      {
        tipo: 'h2',
        id: 'o-que-cada-servico-realmente-faz',
        texto: 'O que cada serviço realmente faz'
      },
      {
        tipo: 'p',
        texto: 'Compreender o escopo e o limite operacional de cada solução evita falsas expectativas em momentos de crise. Cada ferramenta possui um objetivo técnico bem definido no ecossistema de segurança.'
      },
      {
        tipo: 'h3',
        id: 'rastreador-localizacao',
        texto: 'Rastreador: localização, não recuperação'
      },
      {
        tipo: 'p',
        texto: 'O rastreador é um módulo instalado no veículo que recebe dados de satélite (GPS) e transmite telemetria através da rede celular (GPRS/M2M) ou radiofrequência (RF). Ele responde à pergunta: "Onde o dispositivo está emitindo sinal agora?". Ele não realiza diligências físicas, não se desloca até galpões e não aborda locais suspeitos.'
      },
      {
        tipo: 'h3',
        id: 'seguro-indenizacao',
        texto: 'Seguro: indenização, com prazos e franquia'
      },
      {
        tipo: 'p',
        texto: 'A apólice de seguro automotivo é um contrato financeiro regulado pela Superintendência de Seguros Privados (Susep). Seu papel é ressarcir o prejuízo financeiro conforme a tabela FIPE caso o veículo não seja localizado ou sofra perda total, observando prazos contratuais de liquidação de sinistro e pagamento de franquia.'
      },
      {
        tipo: 'citacaoFonte',
        texto: 'Consulte informações e normas regulatórias sobre contratos de seguros no portal oficial da Susep.',
        fonte: 'Susep — Superintendência de Seguros Privados',
        url: 'https://www.gov.br/susep/pt-br'
      },
      {
        tipo: 'h3',
        id: 'pronta-resposta-equipe',
        texto: 'Pronta resposta: a equipe que se desloca'
      },
      {
        tipo: 'p',
        texto: 'A pronta resposta é o braço operacional humano e veicular. Trata-se do envio imediato de agentes capacitados e viaturas equipadas para a coordenada indicada pelo rastreador, com a finalidade de realizar averiguação in loco, varredura anti-jammer, preservação do patrimônio e apoio às autoridades policiais.'
      },
      {
        tipo: 'h2',
        id: 'tabela-comparativa-solucoes',
        texto: 'Tabela comparativa: Rastreador x Seguro x Pronta Resposta'
      },
      {
        tipo: 'tabela',
        colunas: ['Critério', 'Rastreador', 'Seguro Auto', 'Pronta Resposta'],
        linhas: [
          [
            'O que resolve',
            'Coleta e transmite dados geográficos e de telemetria',
            'Indeniza financeiramente o valor do bem após o sinistro',
            'Desloca agentes para busca em solo, averiguação e preservação'
          ],
          [
            'Quando age',
            'Em tempo real, 24 horas por dia de forma contínua',
            'Após a ocorrência consolidada e término das investigações',
            'Imediatamente ao alerta de roubo, furto ou violação de rota'
          ],
          [
            'Modelo de cobrança',
            'Mensalidade de monitoramento e custo de locação/aquisição do hardware',
            'Prêmio anual parcelado, com franquia em caso de sinistro parcial',
            'Taxa mensal de disponibilidade ou valor por acionamento operacional'
          ],
          [
            'O que NÃO cobre',
            'Não impede o roubo nem se desloca para buscar o carro',
            'Não busca o veículo no momento do roubo nem garante o retorno do bem',
            'Não substitui a indenização financeira caso o carro seja destruído'
          ],
          [
            'Depende de quê para funcionar',
            'Sinal celular/satelital e integridade física da bateria do veículo',
            'Contrato ativo, quitação de parcelas e envio de documentos oficiais',
            'Informações de última posição e operadores em prontidão 24 horas'
          ]
        ]
      },
      {
        tipo: 'h2',
        id: 'os-tres-se-substituem',
        texto: 'Os três se substituem? Não — e o motivo'
      },
      {
        tipo: 'p',
        texto: 'Nenhuma dessas soluções anula a outra porque atuam em elos diferentes da cadeia de proteção. Ter apenas seguro pode significar semanas aguardando indenização e a perda definitiva de equipamentos de trabalho ou ferramentas personalizadas; ter apenas rastreador expõe o proprietário ao risco de tentar buscar o carro por conta própria; ter apenas pronta resposta sem rastreamento impede o direcionamento tático das equipes.'
      },
      {
        tipo: 'h2',
        id: 'cenarios-reais-de-decisao',
        texto: 'Cenários reais de decisão'
      },
      {
        tipo: 'p',
        texto: 'A combinação ideal das ferramentas depende do perfil de utilização, do tipo de veículo e da exposição a riscos rodoviários e urbanos.'
      },
      {
        tipo: 'h3',
        id: 'carro-de-passeio-financiado',
        texto: 'Carro de passeio financiado'
      },
      {
        tipo: 'p',
        texto: 'Em veículos de passeio financiados, a combinação de seguro total com rastreador conectado a central com pronta resposta protege o condutor de ter que continuar pagando parcelas de um bem roubado, aumentando a chance de devolução do automóvel intacto.'
      },
      {
        tipo: 'h3',
        id: 'moto-usada-trabalho',
        texto: 'Moto usada para trabalho'
      },
      {
        tipo: 'p',
        texto: 'Para motocicletas e veículos de aplicativo, onde o valor do seguro tradicional pode ser elevado, a associação de rastreador com botão de emergência e suporte de pronta resposta 24 horas oferece proteção ativa contra o desmanche rápido.'
      },
      {
        tipo: 'h3',
        id: 'frota-entrega-last-mile',
        texto: 'Frota de entrega e last mile'
      },
      {
        tipo: 'p',
        texto: 'Em operações de distribuição urbana e transporte rodoviário de cargas, a pronta resposta é contratada corporativamente para agir em minutos após paradas não programadas ou desvios de rota, preservando tanto o caminhão quanto o lote de mercadorias transportado.'
      },
      {
        tipo: 'h2',
        id: 'como-funcionam-juntos',
        texto: 'Como os três funcionam juntos numa ocorrência'
      },
      {
        tipo: 'passos',
        itens: [
          {
            titulo: 'Momento Zero — O Roubo',
            texto: 'A ocorrência é detectada pelo motorista ou gerada por alarme automático do rastreador após corte de ignição não autorizado.'
          },
          {
            titulo: 'Minuto 5 — Acionamento Tático',
            texto: 'A central de monitoramento dispara o alerta para viaturas de pronta resposta na região e notifica a rede de emergência 190.'
          },
          {
            titulo: 'Minuto 30 — Localização em Solo',
            texto: 'A equipe de pronta resposta chega às imediações do sinal, identifica o veículo abandonado em via pública ou galpão e faz a preservação física.'
          },
          {
            titulo: 'Pós-Ocorrência — Sinistro Evitado ou Liquidado',
            texto: 'Com o bem recuperado, a seguradora é informada para realização de vistoria e o proprietário retoma a posse sem necessidade de indenização integral.'
          }
        ]
      },
      {
        tipo: 'h2',
        id: 'perguntas-antes-de-contratar',
        texto: 'Perguntas que você deve fazer antes de contratar qualquer um dos três'
      },
      {
        tipo: 'lista',
        ordenada: true,
        itens: [
          'A empresa de rastreamento possui equipe de pronta resposta própria ou homologada, ou apenas fornece o login do aplicativo?',
          'Qual é o procedimento da central caso o veículo entre em área de sombra ou sofra interferência de jammer?',
          'A apólice de seguro exige a instalação de rastreador homologado para validar a cobertura contra roubo?',
          'Qual é o tempo médio de deslocamento e quais regiões estão cobertas pela rede de pronta resposta?',
          'O contrato de pronta resposta inclui acompanhamento policial e preservação no local até a entrega formal?'
        ]
      }
    ]
  },

  // =========================================================================
  // ARTIGO 3 — CARGAS
  // =========================================================================
  {
    slug: 'seguranca-de-cargas-rodovias-sao-paulo',
    titulo: 'Segurança de cargas nas rodovias de São Paulo: como funciona na prática',
    tituloSeo: 'Segurança de Cargas nas Rodovias de SP: Como Funciona',
    descricao: 'Como funciona o gerenciamento de risco, rastreamento, escolta homologada pela PF e pronta resposta no transporte rodoviário de cargas no estado de SP.',
    resumo: 'A segurança de cargas nas rodovias de São Paulo opera em camadas integradas: gerenciamento de riscos com regras de gerenciamento (PGR), telemetria com sensores eletrônicos, escolta armada executada por empresas parceiras autorizadas pela Polícia Federal e equipes de pronta resposta para intervenções e averiguações em solo.',
    categoria: 'Cargas',
    tempoLeitura: 8,
    publicadoEm: '2026-03-03T08:00:00.000Z',
    atualizadoEm: '2026-03-15T10:00:00.000Z',
    destaque: false,
    imagemCard: 'https://img.supremasite.com.br/highway_hud_sunset.webp',
    imagemAlt: 'Segurança e escolta homologada de transporte de cargas nas rodovias de São Paulo',
    temAvisoLegal: true,
    relacionados: [
      'como-escolher-empresa-recuperacao-de-veiculos',
      'rastreador-seguro-ou-pronta-resposta',
      'roubo-de-veiculo-primeiras-24-horas'
    ],
    cidadesRelacionadas: ['campinas', 'sorocaba', 'indaiatuba', 'santos', 'sao-paulo'],
    faq: [
      {
        pergunta: 'O que é PGR e por que ele é obrigatório no transporte de cargas?',
        resposta: 'O Plano de Gerenciamento de Riscos (PGR) é o conjunto de regras operacionais estipulado pela seguradora do embarcador ou transportador, definindo horários permitidos de rodagem, rotas autorizadas, paradas obrigatórias em postos credenciados e necessidade de escolta.'
      },
      {
        pergunta: 'A Impacto Recuperações realiza escolta armada diretamente?',
        resposta: 'Não. Os serviços de escolta armada são executados exclusivamente por empresas parceiras autorizadas e fiscalizadas pela Polícia Federal, em estrito cumprimento à Lei 7.102/1983. A Impacto atua no monitoramento e na pronta resposta tática desarmada de apoio logístico.'
      },
      {
        pergunta: 'Quais rodovias paulistas concentram maiores exigências de segurança?',
        resposta: 'Os principais corredores logísticos como a Rodovia Anhanguera (SP-330), Rodovia dos Bandeirantes (SP-348), Rodovia Presidente Dutra (BR-116), Rodovia Castello Branco (SP-280) e o Rodoanel Mário Covas (SP-021) possuem protocolos rigorosos de PGR.'
      },
      {
        pergunta: 'O que acontece quando o caminhão perde sinal em rodovia?',
        resposta: 'A central de monitoramento classifica a perda como alerta de criticidade alta, enviando comandos automáticos de trava de baú e bloqueio progressivo, ao mesmo tempo em que despacha a unidade de pronta resposta mais próxima para averiguação da coordenada.'
      },
      {
        pergunta: 'O seguro de transporte cobre a carga se o motorista descumprir o PGR?',
        resposta: 'Não. O descumprimento de cláusulas contratuais do PGR (como parar em postos não homologados ou rodar fora da janela autorizada) pode resultar na recusa de cobertura de sinistro pela seguradora.'
      }
    ],
    corpo: [
      {
        tipo: 'p',
        texto: 'O estado de São Paulo concentra os maiores eixos de circulação de mercadorias do país, conectando indústrias, centros de distribuição e o Porto de Santos. A proteção desse fluxo exige uma estrutura multidisciplinar de inteligência logística, tecnologia embarcada e capacidade de resposta tática rápida.'
      },
      {
        tipo: 'h2',
        id: 'como-roubo-de-carga-acontece',
        texto: 'Como o roubo de carga costuma acontecer'
      },
      {
        tipo: 'p',
        texto: 'As ações contra o transporte rodoviário ocorrem predominantemente em momentos de vulnerabilidade operacional planejada, explorando paradas não programadas ou trechos com lentidão de tráfego.'
      },
      {
        tipo: 'h3',
        id: 'pontos-de-parada',
        texto: 'Pontos de parada e vulnerabilidade'
      },
      {
        tipo: 'p',
        texto: 'Os momentos de maior exposição ocorrem durante pernoites em postos sem segurança patrimonial, paradas em acostamentos, paradas para refeições em locais não homologados e nos momentos de carga e descarga em áreas urbanas de alta densidade.'
      },
      {
        tipo: 'h3',
        id: 'eixos-logisticos-sp',
        texto: 'Os eixos logísticos do interior paulista'
      },
      {
        tipo: 'p',
        texto: 'Corredores como Anhanguera, Bandeirantes, Castello Branco, Santos Dumont, Dutra e os trechos Sul e Leste do Rodoanel recebem grande volume de cargas de eletrônicos, farmacêuticos, defensivos agrícolas e alimentos processados, demandando atenção ininterrupta das centrais de monitoramento.'
      },
      {
        tipo: 'destaque',
        variante: 'aviso',
        texto: '{{DADO A CONFIRMAR: número de ocorrências consolidadas de roubo de carga no estado de SP — buscar em ssp.sp.gov.br/estatistica/consultas}}'
      },
      {
        tipo: 'h2',
        id: 'as-camadas-de-protecao',
        texto: 'As camadas de proteção'
      },
      {
        tipo: 'p',
        texto: 'Uma operação de transporte segura baseia-se no conceito de defesa em profundidade, onde múltiplas barreiras operacionais e tecnológicas atuam de forma coordenada.'
      },
      {
        tipo: 'h3',
        id: 'gerenciamento-de-risco',
        texto: 'Gerenciamento de risco e checklist de viagem'
      },
      {
        tipo: 'p',
        texto: 'O gerenciamento de risco valida o cadastro de motoristas e veículos, estabelece o itinerário eletrônico e programa janelas horárias de viagem. Antes de cada partida, é realizado o checklist de funcionamento de todas as travas, sensores de porta e botões de pânico.'
      },
      {
        tipo: 'h3',
        id: 'rastreamento-e-telemetria',
        texto: 'Rastreamento e telemetria'
      },
      {
        tipo: 'p',
        texto: 'Caminhões e carretas contam com sistemas de redundância (rastreador principal via satélite/GPRS e iscas de carga autônomas por radiofrequência). Sensores de desengate de quinta roda, abertura de portas de baú e violação de painel geram alertas automáticos imediatos.'
      },
      {
        tipo: 'h3',
        id: 'escolta-armada-homologada',
        texto: 'Escolta armada homologada pela Polícia Federal'
      },
      {
        tipo: 'p',
        texto: 'Para cargas de alto valor agregado conforme estipulado no PGR, a escolta armada é executada por empresas parceiras autorizadas pela Polícia Federal, em conformidade estrita com a Lei 7.102/1983. Os vigilantes de escolta atuam na proteção física de proximidade da composição durante todo o percurso rodoviário.'
      },
      {
        tipo: 'citacaoFonte',
        texto: 'Consulte a Lei 7.102/1983 que regulamenta a segurança privada e as atividades de escolta armada no Brasil.',
        fonte: 'Portal da Legislação — Presidência da República',
        url: 'https://www.planalto.gov.br/ccivil_03/leis/l7102.htm'
      },
      {
        tipo: 'citacaoFonte',
        texto: 'Consulte as normas e exigências para empresas de segurança privada e escolta no portal oficial da Polícia Federal.',
        fonte: 'Polícia Federal — Segurança Privada',
        url: 'https://www.gov.br/pf/pt-br/assuntos/seguranca-privada'
      },
      {
        tipo: 'h3',
        id: 'pronta-resposta-e-recuperacao',
        texto: 'Pronta resposta e recuperação'
      },
      {
        tipo: 'p',
        texto: 'Em caso de sinal de alerta, bloqueio ou desvio de rota, unidades móveis de pronta resposta posicionadas estrategicamente ao longo das principais rodovias são acionadas para deslocamento imediato, prestando apoio operacional e transmitindo a situação em solo para as autoridades.'
      },
      {
        tipo: 'h2',
        id: 'tabela-camadas-seguranca',
        texto: 'Estrutura de camadas de proteção no transporte rodoviário'
      },
      {
        tipo: 'tabela',
        colunas: ['Camada', 'O que previne', 'O que NÃO previne', 'Quando faz sentido contratar'],
        linhas: [
          [
            'PGR & Cadastro',
            'Desvios intencionais, fraudes cadastrais e circulação em horários críticos',
            'Abordagens armadas violentas com uso de armamento pesado em rodovia',
            'Obrigatório em todas as viagens com cobertura de seguro de carga'
          ],
          [
            'Telemetria e Travas',
            'Abertura indevida de baú, desengate de carreta e partida não autorizada',
            'Não se desloca fisicamente para impedir a remoção mecânica do veículo',
            'Em frotas próprias e terceirizadas transportando mercadorias visadas'
          ],
          [
            'Escolta Armada (Parceiras PF)',
            'Incursões criminosas diretas contra o caminhão durante o trânsito',
            'Não substitui o rastreamento nem as regras de parada do PGR',
            'Quando o valor da carga ultrapassa os limites da apólice sem escolta'
          ],
          [
            'Pronta Resposta Tática',
            'Perda de localização, descarte em áreas de desmanche e tempo de reação',
            'Não realiza confronto armado direto nem substitui a força pública',
            'Em todas as rotas com necessidade de tempo de resposta em minutos'
          ]
        ]
      },
      {
        tipo: 'h2',
        id: 'o-que-embarcador-cobra',
        texto: 'O que o embarcador cobra do transportador'
      },
      {
        tipo: 'p',
        texto: 'As indústrias e distribuidoras exigem comprovação rigorosa do cumprimento de cada item da apólice: ficha cadastral de motorista atualizada, laudo de teste de telemetria emitido em menos de 24 horas antes do carregamento e contrato ativo de pronta resposta 24 horas.'
      },
      {
        tipo: 'h2',
        id: 'papel-do-seguro-de-carga',
        texto: 'O papel do seguro de carga e o que costuma ficar de fora'
      },
      {
        tipo: 'p',
        texto: 'Os seguros obrigatórios de Responsabilidade Civil do Transportador Rodoviário de Carga (RCTR-C) e de Desaparecimento de Carga (RC-DC) cobrem o valor das mercadorias, mas não indenizam lucros cessantes, perdas contratuais por atraso de entrega e desgastes na relação comercial com o cliente final.'
      },
      {
        tipo: 'h2',
        id: 'checklist-antes-de-rodar',
        texto: 'Checklist de segurança antes de rodar'
      },
      {
        tipo: 'lista',
        ordenada: true,
        itens: [
          'Efetuar o teste de envio de sinal e comando de bloqueio com a central de monitoramento.',
          'Testar o botão de pânico silencioso e o sensor de abertura de portas da cabine e baú.',
          'Verificar se as travas eletrônicas de baú e quinta roda estão operando normalmente.',
          'Conferir a fixação e a carga da bateria das iscas de radiofrequência ocultas na carga.',
          'Confirmar a aprovação cadastral do motorista e ajudante no sistema de gerenciamento de risco.',
          'Planejar a rota estritamente pelos corredores homologados na apólice de seguro.',
          'Cadastrar previamente no sistema todos os pontos de abastecimento e pernoite permitidos.',
          'Garantir que os números da central 24h e da emergência estejam memorizados e acessíveis.',
          'Confirmar o plano de escolta armada executada por parceiras autorizadas pela PF, quando exigido.',
          'Verificar o funcionamento do sistema de comunicação secundário de redundância.'
        ]
      }
    ]
  },

  // =========================================================================
  // ARTIGO 4 — COMO CONTRATAR
  // =========================================================================
  {
    slug: 'como-escolher-empresa-recuperacao-de-veiculos',
    titulo: 'Como escolher uma empresa de recuperação de veículos',
    tituloSeo: 'Como Escolher Empresa de Recuperação de Veículos | Guia',
    descricao: 'Critérios fundamentais para contratar empresa de pronta resposta e recuperação veicular: CNPJ ativo, contratos claros, transparência e segurança jurídica.',
    resumo: 'Para escolher uma empresa de recuperação de veículos e pronta resposta, exija CNPJ ativo com CNAE de segurança eletrônica/monitoramento, sede física verificável, contrato formal de prestação de serviços sem promessas irreais de resultado e clareza quanto à execução de escolta por parceiras autorizadas pela Polícia Federal.',
    categoria: 'Como contratar',
    tempoLeitura: 7,
    publicadoEm: '2026-03-04T08:00:00.000Z',
    atualizadoEm: '2026-03-15T10:00:00.000Z',
    destaque: false,
    imagemCard: 'https://img.supremasite.com.br/corporate_office_photoreal.webp',
    imagemAlt: 'Critérios para contratação de empresa de recuperação de veículos e pronta resposta',
    temAvisoLegal: false,
    relacionados: [
      'roubo-de-veiculo-primeiras-24-horas',
      'rastreador-seguro-ou-pronta-resposta',
      'seguranca-de-cargas-rodovias-sao-paulo'
    ],
    cidadesRelacionadas: ['indaiatuba', 'campinas', 'sao-paulo', 'sorocaba', 'jundiai'],
    faq: [
      {
        pergunta: 'Como consultar se o CNPJ de uma empresa de recuperação veicular é regular?',
        resposta: 'Acesse o portal da Receita Federal e emita o Comprovante de Inscrição e Situação Cadastral digitando o CNPJ. Verifique se o status é "ATIVA", a data de abertura e se os CNAEs correspondem a serviços de monitoramento, rastreamento ou apoio logístico.'
      },
      {
        pergunta: 'Uma empresa pode prometer 100% de recuperação do meu veículo?',
        resposta: 'Não. Nenhuma empresa séria pode garantir a recuperação de um veículo, pois o desfecho depende de variáveis incontroláveis como tempo de aviso, desmanche rápido ou travessia de fronteiras. A contratação diz respeito ao empenho e aos procedimentos técnicos empregados.'
      },
      {
        pergunta: 'Qual a diferença entre pronta resposta e segurança armada privada?',
        resposta: 'A pronta resposta realiza averiguação técnica, localização por telemetria e preservação do local com apoio policial. A segurança armada e vigilância patrimonial exigem porte de arma específico e autorização da Polícia Federal sob a Lei 7.102/1983.'
      },
      {
        pergunta: 'É normal a empresa cobrar valores adicionais no momento do acionamento?',
        resposta: 'Isso depende do formato contratado. Existem planos com mensalidade fixa que cobrem acionamentos e planos sob demanda (pay-per-use). O importante é que todas as condições financeiras estejam estipuladas expressamente em contrato antes do evento.'
      },
      {
        pergunta: 'Quais documentos a empresa deve fornecer após uma ocorrência?',
        resposta: 'A prestadora deve emitir um relatório operacional detalhado com linha do tempo do acionamento, coordenadas de localização, fotos da vistoria no local e identificação do Boletim de Ocorrência registrado junto à autoridade policial.'
      }
    ],
    corpo: [
      {
        tipo: 'p',
        texto: 'O mercado de segurança e recuperação veicular envolve operações sensíveis e de alta responsabilidade. A contratação de prestadores despreparados ou clandestinos expõe contratantes a riscos jurídicos, vazamento de dados de localização e prejuízos financeiros graves.'
      },
      {
        tipo: 'h2',
        id: 'o-que-verificar-antes-de-fechar',
        texto: 'O que verificar antes de fechar'
      },
      {
        tipo: 'p',
        texto: 'Antes de assinar qualquer proposta comercial ou integrar sistemas de rastreamento com uma central, faça uma diligência cadastral e operacional rigorosa.'
      },
      {
        tipo: 'h3',
        id: 'cnpj-ativo-atividade',
        texto: 'CNPJ ativo e atividade compatível'
      },
      {
        tipo: 'p',
        texto: 'Consulte a situação cadastral na Receita Federal do Brasil. A empresa deve possuir CNAE principal ou secundário compatível com monitoramento e rastreamento (ex: CNAE 80.20-0-01). Como parâmetro de transparência, a Impacto Recuperações opera sob o CNPJ 34.128.125/0001-13 (Marcelo Emerson Pires), ativo e regular desde 2019 — confira o nosso e exija o mesmo de qualquer concorrente.'
      },
      {
        tipo: 'h3',
        id: 'endereco-fisico-tempo',
        texto: 'Endereço físico e tempo de operação'
      },
      {
        tipo: 'p',
        texto: 'Empresas idôneas possuem sede física com alvará de funcionamento, central operacional estruturada e histórico contínuo de atuação no mercado. Desconfie de empresas que operam exclusivamente por números virtuais de WhatsApp sem sede comercial.'
      },
      {
        tipo: 'h3',
        id: 'autorizacao-pf-escolta',
        texto: 'Autorização da Polícia Federal quando houver escolta armada'
      },
      {
        tipo: 'p',
        texto: 'A prestação de serviços com emprego de vigilantes armados é rigorosamente disciplinada pela Lei Federal 7.102/1983. Empresas de pronta resposta não podem executar escolta armada por conta própria sem registro específico; quando essa modalidade for necessária, ela deve ser executada por empresas parceiras autorizadas pela Polícia Federal.'
      },
      {
        tipo: 'citacaoFonte',
        texto: 'Consulte a lista de empresas com autorização regular para serviços de segurança armada no portal oficial da Polícia Federal.',
        fonte: 'Polícia Federal — Consulta de Segurança Privada',
        url: 'https://www.gov.br/pf/pt-br/assuntos/seguranca-privada'
      },
      {
        tipo: 'h3',
        id: 'contrato-claro',
        texto: 'Contrato claro: escopo, acionamento, limites'
      },
      {
        tipo: 'p',
        texto: 'O contrato deve discriminar com exatidão a abrangência geográfica do atendimento, o tempo médio estimado de mobilização, os canais de contato da central 24h e a responsabilidade de acionamento das forças policiais no momento da localização.'
      },
      {
        tipo: 'h2',
        id: 'sinais-de-alerta',
        texto: 'Sinais de alerta ao avaliar empresas'
      },
      {
        tipo: 'p',
        texto: 'A presença de qualquer uma das práticas abaixo indica amadorismo ou tentativa de fraude comercial.'
      },
      {
        tipo: 'lista',
        ordenada: false,
        itens: [
          'Atendimento feito exclusivamente por perfis pessoais sem razão social ou contrato formal.',
          'Promessa de "100% de garantia de recuperação do veículo" ou prazos mágicos de minutos em qualquer lugar.',
          'Exigência de pagamento adiantado em contas bancárias de pessoas físicas sem emissão de Nota Fiscal.',
          'Endereço comercial falso ou inexistente nos mapas públicos de consulta cadastral.',
          'Alegação de possuir "policiais na equipe" como argumento comercial de venda.',
          'Oferta de escolta armada sem comprovação da documentação da Polícia Federal da empresa executora.',
          'Ausência de central ininterrupta de atendimento 24 horas por dia e 7 dias por semana.',
          'Recusa em detalhar os procedimentos operacionais de segurança aplicados em campo.'
        ]
      },
      {
        tipo: 'h2',
        id: 'tabela-perguntas-avaliar-empresa',
        texto: 'Guia de perguntas para avaliação técnica de fornecedores'
      },
      {
        tipo: 'tabela',
        colunas: ['Pergunta a fazer', 'Boa resposta', 'Resposta que acende alerta'],
        linhas: [
          [
            'Qual é o CNPJ da empresa e onde fica a sede física?',
            'Informa CNPJ ativo, endereço completo para visita e certidões negativas.',
            'Diz que atua apenas online e recusa fornecer dados cadastrais completos.'
          ],
          [
            'A empresa garante que vai recuperar meu veículo roubado?',
            'Não promete resultado; explica o método técnico de busca, tecnologias RF e protocolos.',
            '"Garantimos 100% de recuperação com nossa equipe exclusiva".'
          ],
          [
            'Como funciona o acionamento em feriados ou durante a madrugada?',
            'Central própria 24/7 com telefones fixos e móveis monitorados permanentemente.',
            'Celular de plantão que pode demorar para atender fora do horário comercial.'
          ],
          [
            'A empresa executa escolta armada?',
            'Esclarece que escoltas são realizadas por parceiras homologadas e autorizadas pela PF.',
            '"Nossos próprios agentes andam armados" sem comprovar autorização da PF.'
          ],
          [
            'Qual é a tecnologia utilizada para buscar veículos com jammer?',
            'Equipamentos portáteis receptores de radiofrequência (RF) e varredura direcional em solo.',
            '"Apenas acompanhamos o aplicativo do cliente pela internet".'
          ],
          [
            'Como o serviço é formalizado juridicamente?',
            'Contrato de prestação de serviços com emissão de Nota Fiscal eletrônica.',
            'Acordo verbal por aplicativo de mensagens sem recibo fiscal oficial.'
          ],
          [
            'O que acontece após a localização do automóvel?',
            'Preservação do local, acionamento da Polícia Militar e acompanhamento formal no DP.',
            'Tentativa de retirar o veículo do local sem registro policial prévio.'
          ]
        ]
      },
      {
        tipo: 'h2',
        id: 'como-funciona-cobranca',
        texto: 'Como funciona a cobrança nesse mercado'
      },
      {
        tipo: 'p',
        texto: 'Existem três modelos comerciais predominantes na contratação de serviços de pronta resposta e recuperação veicular:'
      },
      {
        tipo: 'passos',
        itens: [
          {
            titulo: '1. Mensalidade Fixa com Prontidão Inclusa',
            texto: 'Modelo comum para frotas e transportadores, onde uma taxa mensal garante a disponibilidade contínua da central 24h e um número pré-definido de acionamentos mensais sem custo extra.'
          },
          {
            titulo: '2. Sob Demanda (Acionamento Avulso / Pay-per-use)',
            texto: 'Cobrança efetuada somente quando há necessidade de deslocamento de viaturas em campo, calculada com base na distância, tempo de permanência da equipe e complexidade da ocorrência.'
          },
          {
            titulo: '3. Contrato Corporativo Integrado',
            texto: 'Contratos corporativos com empresas de rastreamento e associações de proteção veicular, estabelecendo níveis de serviço (SLA), relatórios mensais e integração de sistemas via API.'
          }
        ]
      },
      {
        tipo: 'h2',
        id: 'o-que-pedir-por-escrito',
        texto: 'O que pedir por escrito antes de assinar'
      },
      {
        tipo: 'lista',
        ordenada: true,
        itens: [
          'Contrato social consolidado ou comprovante de MEI/Empresa Individual ativo na Receita Federal.',
          'Quadro de rotas e cidades atendidas pela malha de viaturas operacionais.',
          'Definição expressa das obrigações da central em relação à preservação do patrimônio.',
          'Modelo do relatório técnico de ocorrência emitido após cada atendimento.',
          'Termo de confidencialidade e proteção de dados (LGPD) referente às coordenadas dos veículos.'
        ]
      },
      {
        tipo: 'h2',
        id: 'como-impacto-responde',
        texto: 'Como a Impacto Recuperações responde a cada um desses critérios'
      },
      {
        tipo: 'p',
        texto: 'A Impacto Recuperações atua com transparência cadastral e conformidade jurídica em todas as suas operações. Fundada em julho de 2019, possui sede operacional em Indaiatuba/SP (Rua Adaisio Giron, 55 — Jardim Regina), central ininterrupta de plantão 24 horas pelo telefone (11) 96502-0011 e rede de mais de 630 profissionais cadastrados em todo o território nacional. A escolta armada, quando demandada em operações de carga, é executada exclusivamente por empresas parceiras autorizadas e fiscalizadas pela Polícia Federal, assegurando total legalidade e segurança institucional a nossos clientes.'
      }
    ]
  },

  // =========================================================================
  // ARTIGO 5 — REGIONAL
  // =========================================================================
  {
    slug: 'roubo-de-veiculos-indaiatuba-regiao',
    titulo: 'Roubo e furto de veículos em Indaiatuba e região: o que fazer',
    tituloSeo: 'Roubo de Veículo em Indaiatuba: O Que Fazer | Impacto',
    descricao: 'Guia de emergência para roubo e furto de veículos em Indaiatuba, Campinas e RMC. Contatos oficiais, rodovias da região e acionamento de pronta resposta 24h.',
    resumo: 'Em caso de roubo ou furto de veículo em Indaiatuba e na Região Metropolitana de Campinas, ligue imediatamente para a Polícia Militar pelo 190 e acione a central da Impacto Recuperações pelo telefone (11) 96502-0011 para despacho de equipes a partir da base local de Indaiatuba.',
    categoria: 'Regional',
    tempoLeitura: 6,
    publicadoEm: '2026-03-05T08:00:00.000Z',
    atualizadoEm: '2026-03-15T10:00:00.000Z',
    destaque: false,
    imagemCard: 'https://img.supremasite.com.br/tactical_suv_sunset.webp',
    imagemAlt: 'Pronta resposta e recuperação veicular em Indaiatuba, Campinas e RMC',
    temAvisoLegal: true,
    relacionados: [
      'roubo-de-veiculo-primeiras-24-horas',
      'rastreador-seguro-ou-pronta-resposta',
      'seguranca-de-cargas-rodovias-sao-paulo'
    ],
    cidadesRelacionadas: [
      'indaiatuba',
      'campinas',
      'salto',
      'itu',
      'valinhos',
      'vinhedo',
      'hortolandia',
      'sumare',
      'jundiai',
      'sorocaba',
      'piracicaba'
    ],
    faq: [
      {
        pergunta: 'Onde fica a base operacional da Impacto Recuperações em Indaiatuba?',
        resposta: 'A sede operacional da Impacto Recuperações está localizada na Rua Adaisio Giron, 55 — Jardim Regina, Indaiatuba/SP (CEP 13348-895), operando com central 24 horas e viaturas de pronta resposta para atendimento regional e nacional.'
      },
      {
        pergunta: 'Qual delegacia atende ocorrências de roubo presencial em Indaiatuba?',
        resposta: 'Ocorrências presenciais são atendidas na Delegacia de Polícia de Indaiatuba (1º DP / Plantão Policial), localizada na área central do município, além do registro 24h via Delegacia Eletrônica da Polícia Civil de SP.'
      },
      {
        pergunta: 'Quais cidades vizinhas a Indaiatuba são atendidas com rapidez pela base local?',
        resposta: 'A partir da base de Indaiatuba, as equipes atendem de forma imediata municípios vizinhos como Salto, Itu, Campinas, Vinhedo, Valinhos, Monte Mor, Jundiaí e Sorocaba, através das rodovias SP-075 e corredores adjacentes.'
      },
      {
        pergunta: 'O que fazer se o veículo roubado em Indaiatuba for flagrado indo em direção à Rodovia Santos Dumont?',
        resposta: 'Informe imediatamente o sentido de fuga à Polícia Militar pelo 190 e à central de prontidão da Impacto pelo (11) 96502-0011 para que viaturas realizem pontos de interceptação e monitoramento nos acessos à SP-075, Anhanguera e Bandeirantes.'
      }
    ],
    corpo: [
      {
        tipo: 'p',
        texto: 'Indaiatuba e os municípios que compõem a Região Metropolitana de Campinas (RMC) possuem uma das malhas rodoviárias mais desenvolvidas da América Latina. Essa facilidade de deslocamento é vantajosa para a logística, mas exige agilidade nas ações de contenção quando ocorre um roubo ou furto de veículo.'
      },
      {
        tipo: 'h2',
        id: 'canais-oficiais-na-regiao',
        texto: 'Canais oficiais na região'
      },
      {
        tipo: 'p',
        texto: 'Ao constatar o crime, utilize imediatamente os canais de emergência das forças públicas de segurança pública do estado de São Paulo.'
      },
      {
        tipo: 'h3',
        id: 'emergencia-190-e-181',
        texto: 'Emergência: 190 · Denúncia anônima: 181'
      },
      {
        tipo: 'p',
        texto: 'O 190 aciona as viaturas da 4ª Companhia do 47º Batalhão da Polícia Militar do Interior (47º BPM/I) em Indaiatuba e municípios da região. O Disque Denúncia (181) permite repassar informações anônimas sobre desmanches clandestinos ou locais de depósito de veículos roubados.'
      },
      {
        tipo: 'h3',
        id: 'delegacia-eletronica-sp-regional',
        texto: 'Delegacia Eletrônica da Polícia Civil de SP'
      },
      {
        tipo: 'p',
        texto: 'Se a abordagem não resultou em lesões corporais, registre o BO imediatamente no portal oficial da Delegacia Eletrônica da Polícia Civil de SP para gerar o bloqueio criminal da placa no sistema de monitoramento de câmeras (Muralha Digital).'
      },
      {
        tipo: 'citacaoFonte',
        texto: 'Acesse o canal oficial da Polícia Civil para registrar o boletim de ocorrência eletrônico de roubo ou furto.',
        fonte: 'Delegacia Eletrônica da Polícia Civil de SP',
        url: 'https://www.delegaciaeletronica.policiacivil.sp.gov.br/'
      },
      {
        tipo: 'h3',
        id: 'estatisticas-oficiais-ssp',
        texto: 'Onde consultar estatísticas oficiais da região'
      },
      {
        tipo: 'p',
        texto: 'Os dados consolidados de criminalidade de Indaiatuba, Campinas e todo o estado são publicados mensalmente pela Secretaria de Segurança Pública de São Paulo.'
      },
      {
        tipo: 'citacaoFonte',
        texto: 'Consulte os relatórios estatísticos trimestrais e anuais de segurança pública de Indaiatuba e região.',
        fonte: 'Secretaria da Segurança Pública do Estado de São Paulo (SSP-SP)',
        url: 'https://www.ssp.sp.gov.br/estatistica/consultas'
      },
      {
        tipo: 'h2',
        id: 'malha-viaria-da-regiao',
        texto: 'A malha viária da região e por que ela importa'
      },
      {
        tipo: 'p',
        texto: 'A geografia rodoviária de Indaiatuba permite que criminosos alcancem diferentes rodovias em menos de quinze minutos. Os principais eixos que demandam vigilância incluem:'
      },
      {
        tipo: 'lista',
        ordenada: false,
        itens: [
          'Rodovia Santos Dumont (SP-075): Conexão direta entre Campinas, Indaiatuba, Salto e Itu, com acesso rápido ao Aeroporto Internacional de Viracopos.',
          'Rodovia Anhanguera (SP-330): Eixo de ligação rápida com Jundiaí, Grande São Paulo, Americana e interior norte.',
          'Rodovia dos Bandeirantes (SP-348): Corredor de alta velocidade utilizado para escoamento rápido de veículos roubados em direção à capital.',
          'Rodovia Castello Branco (SP-280): Acessível via Itu e Sorocaba, conectando ao polo industrial do sudoeste paulista.',
          'Rodovia Jornalista Francisco Aguirre Proença (SP-101): Ligação de Campinas a Monte Mor e Capivari.'
        ]
      },
      {
        tipo: 'h2',
        id: 'o-que-impacto-faz-na-regiao',
        texto: 'O que a Impacto Recuperações faz quando é acionada aqui'
      },
      {
        tipo: 'p',
        texto: 'Ao receber o acionamento em sua central 24 horas, a Impacto despacha imediatamente agentes a partir da sede em Indaiatuba ou posiciona parceiros homologados nos acessos rodoviários da SP-075. As viaturas realizam varredura com detectores de radiofrequência (RF) para localizar transmissores sob efeito de jammer e, ao identificar o veículo, acionam as viaturas da PM e Guardas Civis Municipais para apoio e liberação formal.'
      },
      {
        tipo: 'h2',
        id: 'cidades-atendidas-a-partir-de-indaiatuba',
        texto: 'Cidades atendidas a partir da base de Indaiatuba'
      },
      {
        tipo: 'p',
        texto: 'A rede de prontidão operacional cobre integralmente os seguintes municípios da região com tempo de resposta ágil:'
      },
      {
        tipo: 'lista',
        ordenada: false,
        itens: [
          'Indaiatuba (Sede Matriz da Empresa)',
          'Campinas e Distritos (Barão Geraldo, Campo Grande, Ouro Verde, Aparecidinha)',
          'Salto e Polo Industrial',
          'Itu e Acesso à Rodovia Castello Branco',
          'Valinhos e Vinhedo',
          'Hortolândia e Sumaré',
          'Jundiaí e Eixo Anhanguera',
          'Sorocaba e Região Metropolitana',
          'Piracicaba e Corredor Sucroalcooleiro'
        ]
      }
    ]
  }
];

export function getArtigoBySlug(slug: string): Artigo | undefined {
  return ARTIGOS.find((a) => a.slug === slug.toLowerCase().trim());
}

export function getArtigosRelacionados(slugs: string[]): Artigo[] {
  return ARTIGOS.filter((a) => slugs.includes(a.slug));
}

export function getArtigosPorCategoria(categoria?: string): Artigo[] {
  if (!categoria || categoria === 'Todas') return ARTIGOS;
  return ARTIGOS.filter((a) => a.categoria.toLowerCase() === categoria.toLowerCase());
}
