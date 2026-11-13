export interface ContactMessageInput { nome: string; telefone: string; email: string; empresa: string; servico: string; mensagem: string; }
export function prepareContactMessage(data: ContactMessageInput): string {
  const services: Record<string, string> = { recuperacao: 'Recuperação de veículo', cargas: 'Atendimento para cargas e frotas', escolta: 'Consulta sobre escolta', varredura: 'Consulta sobre varredura de sinal', parceria: 'Parceria' };
  return ['Olá! Gostaria de atendimento da Impacto Recuperações.', 'Nome: ' + data.nome.trim(), 'Telefone: ' + data.telefone.trim(), data.email.trim() ? 'E-mail: ' + data.email.trim() : '', data.empresa.trim() ? 'Empresa: ' + data.empresa.trim() : '', 'Interesse: ' + (services[data.servico] || data.servico), data.mensagem.trim()].filter(Boolean).join('\n');
}
