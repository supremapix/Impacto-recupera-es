import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  wide?: boolean;
}

/**
 * Container Padronizado (PARTE 1.1)
 * Aplica limites de largura e espaçamento horizontal simétrico em todo o site.
 */
export const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  wide = false,
}) => (
  <div
    className={`mx-auto w-full ${
      wide ? 'max-w-[1600px]' : 'max-w-[1280px]'
    } px-5 sm:px-8 lg:px-12 2xl:px-16 ${className}`}
  >
    {children}
  </div>
);

export default Container;
