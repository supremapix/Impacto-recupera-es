import React from 'react';
import { DEPOIMENTOS_REAIS, DepoimentoItem } from '../data/depoimentos';
import Container from './ui/Container';
import Section from './ui/Section';

interface DepoimentosReaisProps {
  depoimentos?: DepoimentoItem[];
}

/**
 * Componente de Depoimentos Reais (PARTE 11.4)
 * Preparado para receber depoimentos autenticados por escrito.
 * Permanece oculto enquanto o array em src/data/depoimentos.ts for vazio.
 */
export const DepoimentosReais: React.FC<DepoimentosReaisProps> = ({
  depoimentos = DEPOIMENTOS_REAIS,
}) => {
  if (!depoimentos || depoimentos.length === 0) {
    return null;
  }

  return (
    <Section id="depoimentos-verificados" className="bg-white border-b border-gray-100">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#5a6fa6] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            Depoimentos Verificados
          </span>
          <h2 className="t-h2 font-black text-gray-900 mt-3 mb-4">
            O que dizem os clientes atendidos
          </h2>
          <p className="t-body text-gray-600">
            Relatos reais de proprietários e frotistas atendidos pela nossa central de pronta resposta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {depoimentos.map((item) => (
            <div
              key={item.id}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-200 shadow-sm flex flex-col justify-between"
            >
              <p className="text-gray-700 italic text-sm mb-6 leading-relaxed">
                "{item.texto}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                {item.fotoUrl ? (
                  <img
                    src={item.fotoUrl}
                    alt={item.nome}
                    width={44}
                    height={44}
                    className="w-11 h-11 rounded-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-11 h-11 rounded-full bg-[#5a6fa6] text-white font-bold flex items-center justify-center text-sm shrink-0">
                    {item.iniciais}
                  </div>
                )}
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">{item.nome}</h4>
                  <p className="text-xs text-gray-500">
                    {item.empresa ? `${item.empresa} · ` : ''}{item.cidade}
                  </p>
                  <p className="text-[11px] text-gray-400 font-mono mt-0.5">Atendimento em {item.data}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default DepoimentosReais;
