// Centralized product catalog.
// All 29 products, exact prices, real brand/category data.
// Do NOT hardcode product info anywhere else — import from here.
//
// Fields:
//  id, name, slug, brand, brandSlug, category, price, oldPrice, images,
//  description (long), shortDescription, specifications[], stock,
//  isFeatured, isNew, isOnSale
//
// Editing note: oldPrice / isOnSale are left as null/false for every
// product because no real discount data was provided. Set a real
// oldPrice + isOnSale: true on a product once an actual promotion exists —
// the Promotions section on the homepage will pick it up automatically.

import h3 from '../assets/products/h3.jpg';
import air5pro from '../assets/products/air5pro.jpg';
import airclip from '../assets/products/airclip.jpg';
import lightbudsmagic from '../assets/products/lightbudsmagic.jpg';
import finetrack from '../assets/products/finetrack.jpg';
import seektagAdjustable from '../assets/products/seektag_adjustable.jpg';
import lora3 from '../assets/products/lora3.jpg';
import elite2 from '../assets/products/elite2.jpg';

function slugify(brand, name) {
  return `${brand}-${name}`
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

const raw = [
  // ===== SOUNDPEATS — earbuds =====
  {
    brand: 'SOUNDPEATS',
    name: 'H3',
    category: 'earbuds',
    categoryLabel: 'سماعات لاسلكية (Earbuds)',
    description: 'معالج Snapdragon Sound, بلوتوث 5.4, 6 ميكروفونات وعزل ضوضاء 55dB, بطارية 37 ساعة, صوت عالي الدقة',
    price: 850,
    images: [h3],
    isFeatured: true,
    isNew: false,
  },
  {
    brand: 'SOUNDPEATS',
    name: 'AIR5 PRO',
    category: 'earbuds',
    categoryLabel: 'سماعات لاسلكية (Earbuds)',
    description: 'بطارية 37 ساعة, بلوتوث 5.4, 6 ميكروفونات + عزل ضوضاء 55dB, معالج Snapdragon',
    price: 650,
    images: [air5pro],
    isFeatured: true,
    isNew: true,
  },
  {
    brand: 'SOUNDPEATS',
    name: 'AIR5',
    category: 'earbuds',
    categoryLabel: 'سماعات لاسلكية (Earbuds)',
    description: 'بطارية 30 ساعة, بلوتوث 5.4, 6 ميكروفونات, تكنولوجيا إلغاء الضوضاء 45dB, معالج Snapdragon',
    price: 600,
    images: [],
  },
  {
    brand: 'SOUNDPEATS',
    name: 'COVE PRO',
    category: 'earbuds',
    categoryLabel: 'سماعات لاسلكية (Earbuds)',
    description: 'بلوتوث 6.0, 7 ميكروفونات وعزل ضوضاء 56dB, بطارية تصل إلى 95 ساعة, صوت عالي الدقة',
    price: 520,
    images: [],
  },
  {
    brand: 'SOUNDPEATS',
    name: 'AIR5 LITE',
    category: 'earbuds',
    categoryLabel: 'سماعات لاسلكية (Earbuds)',
    description: 'بطارية 30 ساعة, بلوتوث 5.4, 4 ميكروفونات وعزل الضجيج, وضع الألعاب',
    price: 350,
    images: [],
  },
  {
    brand: 'SOUNDPEATS',
    name: 'C30',
    category: 'earbuds',
    categoryLabel: 'سماعات لاسلكية (Earbuds)',
    description: 'بلوتوث 6.0, 6 ميكروفونات وعزل ضوضاء 52dB, بطارية 52 ساعة, صوت عالي الدقة',
    price: 280,
    images: [],
  },
  {
    brand: 'SOUNDPEATS',
    name: 'AIR CLIP',
    category: 'earbuds',
    categoryLabel: 'سماعات لاسلكية مشبكية (Clip-on Earbuds)',
    description: 'بطارية 28 ساعة, بلوتوث 5.4, إلغاء الضجيج للمكالمات, مقاومة للماء IPX5',
    price: 279,
    images: [airclip],
  },
  {
    brand: 'SOUNDPEATS',
    name: 'Q3 PRO',
    category: 'earbuds',
    categoryLabel: 'سماعات لاسلكية (Earbuds)',
    description: 'بلوتوث 6.0, عزل ضوضاء 38dB, بطارية 42 ساعة, 4 ميكروفونات',
    price: 230,
    images: [],
  },

  // ===== UGREEN — chargers & cables =====
  {
    brand: 'UGREEN',
    name: 'GaN 20W Chargeur Rapide USB-C',
    category: 'chargers',
    categoryLabel: 'شاحن سريع (Fast Charger)',
    description: 'شاحن 20 واط بتقنية GaN, معتمد من Apple, شحن سريع وتصميم صغير',
    price: 149,
    images: [],
  },
  {
    brand: 'UGREEN',
    name: 'GaN 30W Chargeur Rapide USB-C',
    category: 'chargers',
    categoryLabel: 'شاحن سريع (Fast Charger)',
    description: 'شاحن 30 واط بتقنية GaN, معتمد من Apple, شحن سريع',
    price: 179,
    images: [],
  },
  {
    brand: 'UGREEN',
    name: 'Pack Chargeur GaN 30W + Cable en Tissu 60W',
    category: 'chargers',
    categoryLabel: 'حزمة شاحن + كابل (Charger + Cable Pack)',
    description: 'شاحن 30 واط + كابل قماشي 60 واط, معتمد من Apple',
    price: 249,
    images: [],
    isFeatured: true,
  },
  {
    brand: 'UGREEN',
    name: '60W USB-C to USB-C Cable (Silicone) 1m',
    category: 'chargers',
    categoryLabel: 'كابل شحن (Silicone Cable)',
    description: 'كابل سيليكون متين ومرن, 60 واط, معتمد من Apple',
    price: 79,
    images: [],
  },
  {
    brand: 'UGREEN',
    name: '60W USB-C to USB-C Braided Cable 1m',
    category: 'chargers',
    categoryLabel: 'كابل شحن مجدول (Braided Cable)',
    description: 'كابل مجدول 60 واط, مقاوم للتلف والتشابك, معتمد من Apple',
    price: 85,
    images: [],
  },
  {
    brand: 'UGREEN',
    name: '100W USB-C to USB-C Braided Cable 1m',
    category: 'chargers',
    categoryLabel: 'كابل شحن مجدول (Braided Cable)',
    description: 'كابل مجدول 100 واط, شحن سريع, معتمد من Apple',
    price: 129,
    images: [],
  },
  {
    brand: 'UGREEN',
    name: 'Uno USB-C to USB-C Cable 100W',
    category: 'chargers',
    categoryLabel: 'كابل شحن بشاشة مدمجة (Smart Cable)',
    description: 'كابل مجدول 100 واط مع شاشة مدمجة, معتمد من Apple',
    price: 149,
    images: [],
  },

  // ===== UGREEN — earbuds =====
  {
    brand: 'UGREEN',
    name: 'LightBuds',
    category: 'earbuds',
    categoryLabel: 'سماعات لاسلكية (Earbuds)',
    description: 'بلوتوث 6.0, 4 ميكروفونات + ENC, بطارية حتى 35 ساعة',
    price: 249,
    images: [],
  },
  {
    brand: 'UGREEN',
    name: 'Light Buds Magic',
    category: 'earbuds',
    categoryLabel: 'سماعات لاسلكية بشاشة لمس (Smart Earbuds)',
    description: 'صوت عالي الدقة LDAC, شاشة لمس ملونة, بطارية 35 ساعة, عزل ضوضاء ANC, مقاومة للماء IPX5',
    price: 599,
    images: [lightbudsmagic],
    isFeatured: true,
    isNew: true,
  },

  // ===== UGREEN — trackers =====
  {
    brand: 'UGREEN',
    name: 'Finder 2 iOS',
    category: 'trackers',
    categoryLabel: 'جهاز تتبع وأمان (iOS Tracker)',
    description: 'يعمل مع Apple Find My, بطارية تدوم 12 شهرا, تنبيهات صوتية للنسيان',
    price: 199,
    images: [],
    isNew: true,
  },
  {
    brand: 'UGREEN',
    name: 'Fine Track Google (Android)',
    category: 'trackers',
    categoryLabel: 'جهاز تتبع وأمان (Android Tracker)',
    description: 'متوافق مع Find Hub, بطارية تدوم 12 شهرا, تنبيهات صوتية',
    price: 199,
    images: [finetrack],
  },

  // ===== KIESLECT — watches =====
  {
    brand: 'KIESLECT',
    name: 'ELITE2',
    category: 'watches',
    categoryLabel: 'ساعة ذكية (Smartwatch)',
    description: 'شاشة 1.46 بوصة AMOLED, بطارية 14 يوما, مساعد ذكي, GPS, مقاومة للماء 5ATM',
    price: 900,
    images: [elite2],
    isFeatured: true,
  },
  {
    brand: 'KIESLECT',
    name: 'Elfin Series',
    category: 'watches',
    categoryLabel: "ساعة ذكية نسائية (Women's Smartwatch)",
    description: 'أرق ساعة نسائية, شاشة 1.32 بوصة AMOLED, مقاومة للماء 2ATM, 178 وضع رياضي',
    price: 749,
    images: [],
  },

  // ===== KIESLECT — tracker & earbuds combo =====
  {
    brand: 'KIESLECT',
    name: 'SEEKTAG + ADJUSTABLE',
    category: 'trackers',
    categoryLabel: 'جهاز تتبع لسماعات الأذن (Tracker & Earbuds Combo)',
    description: 'جهاز تتبع متوافق مع Apple و Google, بطارية قابلة للاستبدال, مقاوم للماء IP67',
    price: 300,
    images: [seektagAdjustable],
  },

  {
    brand: 'KIESLECT',
    name: 'KR3',
    category: 'watches',
    categoryLabel: 'ساعة ذكية (Smartwatch)',
    description: 'شاشة 1.5 بوصة AMOLED, تردد 60Hz, إطار من الفولاذ, GPS, مقاومة للماء 5ATM',
    price: 700,
    images: [],
  },
  {
    brand: 'KIESLECT',
    name: 'KS3',
    category: 'watches',
    categoryLabel: 'ساعة ذكية (Smartwatch)',
    description: 'شاشة AMOLED منحنية 60Hz, بطارية 15 يوما, GPS, إمكانية الربط بالسماعات مباشرة, 5ATM',
    price: 700,
    images: [],
  },
  {
    brand: 'KIESLECT',
    name: 'RENO 3',
    category: 'watches',
    categoryLabel: 'ساعة ذكية (Smartwatch)',
    description: 'شاشة 1.32 بوصة AMOLED 60Hz, إمكانية فتح الأبواب بـ NFC, مقاومة للماء 5ATM',
    price: 599,
    images: [],
  },
  {
    brand: 'KIESLECT',
    name: 'LORA 3',
    category: 'watches',
    categoryLabel: "ساعة ذكية نسائية (Women's Smartwatch)",
    description: 'شاشة 1.32 بوصة AMOLED 60Hz, فتح الأبواب بـ NFC, مقاومة للماء 5ATM',
    price: 549,
    images: [lora3],
    isFeatured: true,
  },
  {
    brand: 'KIESLECT',
    name: 'QUALY PLUS',
    category: 'watches',
    categoryLabel: 'ساعة ذكية للأطفال (Kids Smartwatch)',
    description: 'تتبع الموقع GPS/Wi-Fi, شاشة 1.85 بوصة, مكالمات فيديو 4G, بطارية تدوم يومين',
    price: 599,
    images: [],
  },
  {
    brand: 'KIESLECT',
    name: 'BALANCER',
    category: 'watches',
    categoryLabel: 'ساعة ذكية (Smartwatch)',
    description: 'شاشة 1.43 بوصة AMOLED 60Hz, NFC, مكالمات بلوتوث مستقرة, مقاومة 2ATM',
    price: 350,
    images: [],
  },

  // ===== KIESLECT — tracker =====
  {
    brand: 'KIESLECT',
    name: 'SEEKTAG',
    category: 'trackers',
    categoryLabel: 'جهاز تتبع (Tracker)',
    description: 'متوافق مع Apple Find My و Google Find Hub, بطارية 8-12 شهر, حماية للخصوصية',
    price: 150,
    images: [],
  },
];

export const products = raw.map((p, index) => {
  const brandSlug = p.brand.toLowerCase();
  return {
    id: index + 1,
    slug: slugify(p.brand, p.name),
    brand: p.brand,
    brandSlug,
    name: p.name,
    category: p.category,
    categoryLabel: p.categoryLabel,
    price: p.price, // exact price, DH — never modified
    oldPrice: p.oldPrice ?? null,
    isOnSale: Boolean(p.oldPrice),
    images: p.images ?? [],
    description: p.description,
    shortDescription: p.description.split(',')[0],
    specifications: p.description.split(',').map((s) => s.trim()).filter(Boolean),
    stock: 'in_stock',
    isFeatured: Boolean(p.isFeatured),
    isNew: Boolean(p.isNew),
  };
});

export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category) {
  return products.filter((p) => p.category === category);
}

export function getProductsByBrand(brandSlug) {
  return products.filter((p) => p.brandSlug === brandSlug);
}

export const featuredProducts = products.filter((p) => p.isFeatured);
export const newProducts = products.filter((p) => p.isNew);
export const onSaleProducts = products.filter((p) => p.isOnSale);
