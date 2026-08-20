import React from 'react';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

/**
 * Section com Espaçamento Vertical Padronizado (PARTE 1.2)
 * py-14 md:py-20 lg:py-28 2xl:py-32
 */
export const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  ...props
}) => (
  <section
    className={`py-14 md:py-20 lg:py-28 2xl:py-32 ${className}`}
    {...props}
  >
    {children}
  </section>
);

export default Section;
