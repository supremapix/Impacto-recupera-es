import React from 'react';
import { DepoimentosReais } from '../src/components/DepoimentosReais';
import { ProvasSection } from '../src/components/ProvasSection';
import { InstagramSection } from '../src/components/InstagramSection';

/**
 * Seção de Depoimentos e Prova Social (PARTE 11.4 & E-E-A-T)
 * Não utiliza avaliações falsas nem fotos de stock (pravatar).
 * Exibe registros operacionais reais verificáveis e depoimentos reais quando cadastrados.
 */
export const Testimonials: React.FC = () => {
  return (
    <>
      {/* Depoimentos Verificados (Renderiza se houver cadastros reais em src/data/depoimentos.ts) */}
      <DepoimentosReais />

      {/* Provas Operacionais Reais & E-E-A-T */}
      <ProvasSection />

      {/* Feed Operacional Oficial do Instagram */}
      <InstagramSection />
    </>
  );
};

export default Testimonials;
