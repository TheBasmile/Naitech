import { storeConfig, whatsappLink } from '../config/store';

// Builds the full Arabic order message from the cart + customer info,
// then returns a ready-to-open wa.me link. Nothing here invents prices —
// every line uses item.price exactly as stored in the product catalog.
export function buildOrderMessage(cartItems, customer) {
  const lines = [];
  lines.push('السلام عليكم 👋');
  lines.push('');
  lines.push(`أرغب في تأكيد طلبي من ${storeConfig.storeName}:`);
  lines.push('');

  cartItems.forEach((item, i) => {
    lines.push(`${i + 1}. ${item.brand} ${item.name}`);
    lines.push(`الكمية: ${item.quantity}`);
    lines.push(`السعر: ${item.price} ${storeConfig.currency}`);
    lines.push('');
  });

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  lines.push('--------------------');
  lines.push('');
  lines.push(`مجموع المنتجات: ${total} ${storeConfig.currency}`);
  lines.push('');
  lines.push('معلومات التوصيل:');
  lines.push('');
  lines.push(`الاسم: ${customer.name}`);
  lines.push(`الهاتف: ${customer.phone}`);
  lines.push(`المدينة: ${customer.city}`);
  lines.push(`العنوان: ${customer.address}`);

  if (customer.notes && customer.notes.trim()) {
    lines.push('');
    lines.push('ملاحظات:');
    lines.push(customer.notes.trim());
  }

  lines.push('');
  lines.push('طريقة الدفع:');
  lines.push(storeConfig.paymentMethod);
  lines.push('');
  lines.push('شكراً لكم ❤️');

  return lines.join('\n');
}

export function buildQuickOrderMessage(product, quantity = 1) {
  const lines = [
    'السلام عليكم 👋',
    '',
    `أرغب في تأكيد طلبي من ${storeConfig.storeName}:`,
    '',
    `${product.brand} ${product.name}`,
    `الكمية: ${quantity}`,
    `السعر: ${product.price * quantity} ${storeConfig.currency}`,
    '',
    'طريقة الدفع:',
    storeConfig.paymentMethod,
    '',
    'شكراً لكم ❤️',
  ];
  return lines.join('\n');
}

export const GENERAL_INQUIRY_MESSAGE = `السلام عليكم، أريد الاستفسار عن منتجات ${storeConfig.storeName}.`;

export function openWhatsappOrder(cartItems, customer) {
  const message = buildOrderMessage(cartItems, customer);
  window.open(whatsappLink(message), '_blank', 'noopener,noreferrer');
}

export function openWhatsappQuickOrder(product, quantity = 1) {
  const message = buildQuickOrderMessage(product, quantity);
  window.open(whatsappLink(message), '_blank', 'noopener,noreferrer');
}
