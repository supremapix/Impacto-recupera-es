import { COMPANY } from './company';

export interface FaqItem {
  pergunta: string;
  resposta: string;
  categoria?: string;
}

/**
 * FAQ TÁTICO INSTITUCIONAL (PARTE 8.2)
 * Respostas diretas, objetivas e citáveis por motores de busca e IA (GEO/AIO).
 */
export const FAQS_INSTITUCIONAIS: FaqItem[] = [
  {
    pergunta: 'O que fazer nas primeiras horas após o roubo de um veículo?',
    resposta:
      'Nas primeiras horas críticas, acione imediatamente a polícia militar (190) para registrar o alerta inicial e entre em contato com a central da Impacto Recuperações pelo telefone (11) 96502-0011. Informe o último ponto de telemetria ou rastreamento, placa, modelo e características específicas do veículo ou carga para o despacho tático em campo.',
    categoria: 'Emergência',
  },
  {
    pergunta: 'Qual a diferença entre rastreamento, recuperação e escolta armada?',
    resposta:
      'O rastreamento realiza o monitoramento remoto de posição por GPS/GPRS/RF. A recuperação é a ação de pronta resposta com equipes em campo para localizar, averiguar e preservar o bem roubado. A escolta armada é o acompanhamento preventivo do transporte de cargas executado por empresas parceiras homologadas pela Polícia Federal.',
    categoria: 'Serviços',
  },
  {
    pergunta: 'Quanto tempo leva para acionar uma equipe em campo?',
    resposta:
      'O acionamento pela central 24h é imediato. Assim que as informações são validadas pelo operador, o alerta é enviado para a unidade móvel parceira mais próxima do último ponto de contato ou rota provável em todo o território nacional.',
    categoria: 'Operação',
  },
  {
    pergunta: 'Vocês atendem veículos particulares ou só frotas?',
    resposta:
      'Atendemos tanto proprietários particulares (veículos de passeio, utilitários, motocicletas e caminhões) quanto seguradoras, gerenciadoras de risco, frotistas e transportadoras de carga.',
    categoria: 'Atendimento',
  },
  {
    pergunta: 'Precisa ter boletim de ocorrência para acionar a Impacto?',
    resposta:
      'O acionamento emergencial da central e a busca preventiva podem ser iniciados imediatamente para não perder a janela crítica de recuperação. No entanto, o Boletim de Ocorrência é indispensável para os trâmites legais junto aos órgãos de segurança pública e liberação do veículo.',
    categoria: 'Legal',
  },
  {
    pergunta: 'Vocês trabalham com seguradoras?',
    resposta:
      'Sim. Atuamos em estreita cooperação técnica e operacional com seguradoras, cooperativas de proteção veicular e gerenciadoras de risco em todo o Brasil.',
    categoria: 'Parcerias',
  },
  {
    pergunta: 'O serviço de escolta é armado e legalizado?',
    resposta:
      'Sim. Os serviços de escolta armada comercializados pela Impacto Recuperações são estritamente executados por empresas parceiras devidamente homologadas e autorizadas pela Polícia Federal nos termos da Lei 7.102/83.',
    categoria: 'Legal',
  },
  {
    pergunta: 'Como funciona a cobrança: por acionamento ou por contrato?',
    resposta:
      'Trabalhamos com formatos flexíveis: acionamento avulso emergencial sob demanda (spot) para particulares e transportadores, bem como contratos mensais corporativos com condições dedicadas para frotas e gerenciadoras.',
    categoria: 'Comercial',
  },
  {
    pergunta: 'Vocês atuam fora do estado de São Paulo?',
    resposta:
      'Sim. Nossa base operacional e sede administrativa ficam em Indaiatuba (SP), e contamos com uma rede de mais de 630 profissionais parceiros cobrindo capitais, interiores e os principais corredores rodoviários do Brasil.',
    categoria: 'Cobertura',
  },
  {
    pergunta: 'O que é varredura eletrônica e quando ela é necessária?',
    resposta:
      'A varredura eletrônica é o procedimento técnico que utiliza receptores de radiofrequência e analisadores de espectro para detectar sinais de rastreadores secundários, dispositivos ocultos ou identificar a presença de inibidores de sinal (jammers) em galpões e estacionamentos clandestinos.',
    categoria: 'Tecnologia',
  },
  {
    pergunta: 'O rastreador do meu carro parou de responder, o que fazer?',
    resposta:
      'Se o rastreador parou de transmitir repentinamente em movimento ou após parada suspeita, pode haver uso de inibidor de sinal (jammer) ou entrada em zona de sombra. Entre em contato com a Impacto pelo (11) 96502-0011 com o último histórico de posições para iniciarmos averiguação presencial.',
    categoria: 'Emergência',
  },
  {
    pergunta: 'Como funciona o acionamento pela central 24h, passo a passo?',
    resposta:
      '1º Contato telefônico ou WhatsApp no (11) 96502-0011; 2º Coleta e triagem dos dados do veículo e última posição; 3º Despacho e direcionamento da equipe parceira mais próxima; 4º Localização, averiguação e preservação no local; 5º Apoio aos órgãos policiais e devolução ao proprietário.',
    categoria: 'Operação',
  },
];

export const FAQ_DATA = FAQS_INSTITUCIONAIS;
export const FAQ_INSTITUCIONAL = FAQS_INSTITUCIONAIS;

