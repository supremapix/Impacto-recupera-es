/**
 * Escala de z-index unificada (PARTE 1.5)
 * Garante consistência e elimina valores arbitrários no CSS.
 */
export const Z_INDEX = {
  base: 0,
  contentElevated: 10,
  footerFloating: 20,
  fabs: 40,
  socialBar: 45,
  header: 50,
  mobileMenu: 60,
  modal: 70,
} as const;
