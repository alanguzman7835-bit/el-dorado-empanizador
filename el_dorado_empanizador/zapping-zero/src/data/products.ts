/** Único origen de verdad del catálogo. */
export interface Product {
  id: string;          // ancla de la sección y nombre de la imagen
  nav: string;         // texto del botón del menú
  name: string;
  weight: string;
  price: number;       // MXN
  punchline: string;
  description: string;
  seals: string[];
  accent: string;      // color principal del sabor (botón, precio)
  tint: string;        // tono pastel de fondo de la sección
  ink: string;         // texto legible sobre el acento
  image: string;
}

export const CURRENCY = 'MXN';
/** Número de WhatsApp en formato internacional, sin "+" ni espacios. CAMBIAR. */
export const WHATSAPP_NUMBER = '5213318867947';

export const PRODUCTS: Product[] = [
  { id: 'molido', nav: 'Molido', name: 'Molido', weight: '250 g', price: 17,
    punchline: 'El clásico que nunca falla en la cocina.',
    description: 'Miga fina y pareja para milanesas, pollo y pescado. Cubre bien y deja una costra dorada.',
    seals: ['Natural', 'Sin conservadores'], accent: '#4F7396', tint: '#DCE6EF', ink: '#FFFFFF', image: '/img/molido.jpg' },
  { id: 'hierbas-finas', nav: 'Hierbas finas', name: 'Hierbas Finas', weight: '250 g', price: 17,
    punchline: 'Aroma de hierbas desde la sartén.',
    description: 'Empanizador con hierbas aromáticas para darle más carácter a pollo, pescado y verduras.',
    seals: ['Natural', 'Sin conservadores'], accent: '#5B7A5E', tint: '#DDE7D9', ink: '#FFFFFF', image: '/img/hierbas-finas.jpg' },
  { id: 'cruji', nav: 'Cruji', name: 'Cruji', weight: '200 g', price: 17,
    punchline: 'Máximo crunch en cada mordida.',
    description: 'Hojuela gruesa para un acabado extra crocante, en fritura o al horno.',
    seals: ['Natural', 'Sin conservadores'], accent: '#A5642C', tint: '#F3E1CC', ink: '#FFFFFF', image: '/img/cruji.jpg' },
  { id: 'mixto', nav: 'Mixto', name: 'Mixto', weight: '250 g', price: 17,
    punchline: 'Lo fino y lo crujiente, juntos.',
    description: 'Balance entre miga fina y gránulo crujiente: cobertura pareja con textura.',
    seals: ['Natural', 'Sin conservadores'], accent: '#7F6D1F', tint: '#F3EBC9', ink: '#FFFFFF', image: '/img/mixto.jpg' },
  { id: 'ajo', nav: 'Ajo', name: 'Ajo', weight: '250 g', price: 17,
    punchline: 'Ajo con carácter, sin exagerar.',
    description: 'Sabor intenso con notas equilibradas de ajo. Ya viene listo para empanizar.',
    seals: ['Natural', 'Sin conservadores'], accent: '#7A6A4F', tint: '#EFE9D6', ink: '#FFFFFF', image: '/img/ajo.jpg' },
];

export const formatPrice = (p: Product) => `$${p.price.toFixed(2)} ${CURRENCY}`;

export function getWhatsAppLink(product: Product, phone: string = WHATSAPP_NUMBER): string {
  const text =
    `Hola, quiero hacer un pedido de Empanizador El Dorado:\n` +
    `• Sabor: ${product.name} (${product.weight})\n` +
    `• Precio: ${formatPrice(product)}\n` +
    `¿Me confirmas disponibilidad y forma de entrega?`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}