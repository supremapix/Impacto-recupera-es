/**
 * DEPOIMENTOS DE CLIENTES (PARTE 11.4 & 11.5)
 * 
 * Regra Inegociável: Este array deve ser exportado VAZIO até que existam
 * depoimentos reais com autorização expressa por escrito.
 * Proibido inventar nomes, empresas fictícias ou avatares de banco de imagem.
 */

export interface DepoimentoItem {
  id: string;
  nome: string;
  empresa: string;
  cidade: string;
  texto: string;
  data: string;
  iniciais: string;
  fotoUrl?: string;
}

// TODO: Inserir depoimentos reais de clientes e parceiros autorizados por escrito
export const DEPOIMENTOS_REAIS: DepoimentoItem[] = [];
