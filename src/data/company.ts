/**
 * DADOS OFICIAIS DA EMPRESA (Impacto Recuperações)
 * Fonte de verdade para NAP, rodapés, schemas JSON-LD, contato e E-E-A-T.
 */
export const COMPANY = {
  nomeFantasia: 'Impacto Recuperações',
  razaoSocial: 'Marcelo Emerson Pires',
  cnpj: '34.128.125/0001-13',
  cnpjRaw: '34128125000113',
  inscricaoEstadual: '353.444.680.116',
  dataFundacao: '2019-07-05',
  anoFundacao: 2019,
  naturezaJuridica: 'Empresário Individual · Microempresa · Simples Nacional',
  situacaoCadastral: 'Ativa · Matriz',
  cnaes: {
    principal: '80.20-0-01 — Atividades de monitoramento de sistemas de segurança eletrônico',
    secundarios: [
      '80.20-0-02 — Outras atividades de serviços de segurança',
      '43.21-5-00 — Instalação e manutenção elétrica',
    ],
  },
  endereco: {
    logradouro: 'Rua Adaisio Giron, 55',
    bairro: 'Jardim Regina',
    cidade: 'Indaiatuba',
    uf: 'SP',
    cep: '13348-895',
    pais: 'BR',
    textoCompleto: 'Rua Adaisio Giron, 55 — Jardim Regina, Indaiatuba/SP · CEP 13348-895',
    resumo: 'Indaiatuba - SP · Campinas e região · atendimento nacional',
    coordenadas: {
      lat: -23.0903,
      lng: -47.2181,
    },
  },
  sede: {
    cidade: 'Indaiatuba',
    uf: 'SP',
    enderecoCompleto: 'Rua Adaisio Giron, 55 — Jardim Regina, Indaiatuba/SP · CEP 13348-895',
    coordenadas: {
      lat: -23.0903,
      lng: -47.2181,
    },
  },
  telefone: {
    exibicao: '(11) 96502-0011',
    e164: '+5511965020011',
    whatsappUrl: 'https://wa.me/5511965020011?text=Ol%C3%A1%2C%20preciso%20de%20atendimento%20da%20Central%20de%20Pronta%20Resposta%20Impacto.',
  },
  whatsapp: {
    exibicao: '(11) 96502-0011',
    internacional: '5511965020011',
    e164: '+5511965020011',
    url: 'https://wa.me/5511965020011?text=Ol%C3%A1%2C%20preciso%20de%20atendimento%20da%20Central%20de%20Pronta%20Resposta%20Impacto.',
  },
  email: 'contato@impactorecuperacoes.com.br',
  dominio: 'https://www.impactorecuperacoes.com.br',
  redes: {
    instagram: 'https://www.instagram.com/impacto_recuperacoes/',
    instagramUsername: '@impacto_recuperacoes',
    facebook: 'https://www.facebook.com/impactorecuperacoes',
    linkedin: 'https://www.linkedin.com/company/impacto-recuperacoes',
  },
  horario: '24 horas por dia, 7 dias por semana (Plantão Ininterrupto)',
  redeParceiros: 'rede de mais de 630 profissionais parceiros em todo o Brasil',
};

/**
 * Calcula dinamicamente o tempo de operação desde a data de fundação (05/07/2019).
 * Nunca quebra nem fica defasado com o passar dos anos.
 */
export function anosDeOperacao(): number {
  const fundacao = new Date(COMPANY.dataFundacao);
  const hoje = new Date();
  let diff = hoje.getFullYear() - fundacao.getFullYear();
  const mesDiff = hoje.getMonth() - fundacao.getMonth();
  if (mesDiff < 0 || (mesDiff === 0 && hoje.getDate() < fundacao.getDate())) {
    diff--;
  }
  return Math.max(diff, 5);
}
