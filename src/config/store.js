// Centralized store/business configuration.
// Update these values in ONE place — every component reads from here,
// so nothing about the store's identity or contact info is hardcoded elsewhere.
export const storeConfig = {
  storeName: 'NAITECH',
  tagline: 'تقنية تختارها بثقة',
  currency: 'DH',
  whatsappNumber: '212708969958', // digits only, no + or spaces (used in wa.me links)
  whatsappDisplay: '+212 708 969 958',
  email: '',
  instagram: '',
  facebook: '',
  tiktok: '',
  deliveryFee: null, // unknown / not provided — do not display a made-up fee
  freeDeliveryThreshold: null,
  paymentMethod: 'الدفع عند الاستلام',
  brands: [
    { slug: 'soundpeats', name: 'SOUNDPEATS' },
    { slug: 'ugreen', name: 'UGREEN' },
    { slug: 'kieslect', name: 'KIESLECT' },
  ],
  categories: [
    { slug: 'earbuds', name: 'السماعات' },
    { slug: 'chargers', name: 'الشواحن والكابلات' },
    { slug: 'watches', name: 'الساعات الذكية' },
    { slug: 'trackers', name: 'أجهزة التتبع' },
  ],
};

export function whatsappLink(message) {
  return `https://wa.me/${storeConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
