
export interface LocationData {
  slug: string;
  name: string;
  radius: number;
  coords: { lat: number; lng: number };
}

export const LOCATIONS: LocationData[] = [
  // Polos São Paulo (Interior e Litoral)
  { slug: 'indaiatuba', name: 'Indaiatuba', radius: 50, coords: { lat: -23.0886, lng: -47.2183 } },
  { slug: 'campinas', name: 'Campinas', radius: 100, coords: { lat: -22.9099, lng: -47.0626 } },
  { slug: 'sao-paulo', name: 'São Paulo', radius: 150, coords: { lat: -23.5505, lng: -46.6333 } },
  { slug: 'sorocaba', name: 'Sorocaba', radius: 120, coords: { lat: -23.5015, lng: -47.4521 } },
  { slug: 'jundiai', name: 'Jundiaí', radius: 80, coords: { lat: -23.1857, lng: -46.8845 } },
  { slug: 'piracicaba', name: 'Piracicaba', radius: 90, coords: { lat: -22.7343, lng: -47.6479 } },
  { slug: 'santos', name: 'Santos', radius: 180, coords: { lat: -23.9608, lng: -46.3339 } },
  { slug: 'sao-jose-dos-campos', name: 'São José dos Campos', radius: 200, coords: { lat: -23.1791, lng: -45.8872 } },
  { slug: 'ribeirao-preto', name: 'Ribeirão Preto', radius: 320, coords: { lat: -21.1704, lng: -47.8103 } },
  { slug: 'bauru', name: 'Bauru', radius: 300, coords: { lat: -22.3145, lng: -49.0587 } },
  { slug: 'itu', name: 'Itu', radius: 60, coords: { lat: -23.2641, lng: -47.2991 } },
  { slug: 'salto', name: 'Salto', radius: 55, coords: { lat: -23.2008, lng: -47.2882 } },
  { slug: 'valinhos', name: 'Valinhos', radius: 85, coords: { lat: -22.9678, lng: -46.9944 } },
  { slug: 'vinhedo', name: 'Vinhedo', radius: 80, coords: { lat: -23.0305, lng: -46.9744 } },
  { slug: 'hortolandia', name: 'Hortolândia', radius: 110, coords: { lat: -22.8583, lng: -47.2201 } },
  { slug: 'sumare', name: 'Sumaré', radius: 115, coords: { lat: -22.8211, lng: -47.2669 } },
  
  // Capitais e Polos Nacionais
  { slug: 'rio-de-janeiro', name: 'Rio de Janeiro', radius: 400, coords: { lat: -22.9068, lng: -43.1729 } },
  { slug: 'curitiba', name: 'Curitiba', radius: 400, coords: { lat: -25.4290, lng: -49.2671 } },
  { slug: 'belo-horizonte', name: 'Belo Horizonte', radius: 350, coords: { lat: -19.9167, lng: -43.9345 } },
  { slug: 'porto-alegre', name: 'Porto Alegre', radius: 450, coords: { lat: -30.0346, lng: -51.2177 } },
  { slug: 'brasilia', name: 'Brasília', radius: 500, coords: { lat: -15.7975, lng: -47.8919 } },
  { slug: 'salvador', name: 'Salvador', radius: 600, coords: { lat: -12.9714, lng: -38.5014 } },
  { slug: 'goiania', name: 'Goiânia', radius: 300, coords: { lat: -16.6869, lng: -49.2648 } },
  { slug: 'fortaleza', name: 'Fortaleza', radius: 700, coords: { lat: -3.7319, lng: -38.5267 } },
  { slug: 'recife', name: 'Recife', radius: 650, coords: { lat: -8.0476, lng: -34.8770 } },
  
  // Outros Polos
  { slug: 'pouso-alegre', name: 'Pouso Alegre', radius: 210, coords: { lat: -22.2307, lng: -45.9377 } },
  { slug: 'pocos-de-caldas', name: 'Poços de Caldas', radius: 240, coords: { lat: -21.7892, lng: -46.5681 } }
];
