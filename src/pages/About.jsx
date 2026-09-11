import Breadcrumb from '../components/Breadcrumb';
import { storeConfig } from '../config/store';
import { CashIcon, ShieldIcon, TruckIcon, WhatsAppIcon } from '../components/Icons';

const points = [
  { icon: ShieldIcon, title: 'علامات موثوقة', text: 'نختار منتجاتنا من علامات تقنية معروفة عالمياً مثل SOUNDPEATS وUGREEN وKIESLECT.' },
  { icon: TruckIcon, title: 'توصيل داخل المغرب', text: 'نوصل طلباتك إلى مختلف المدن المغربية.' },
  { icon: CashIcon, title: 'الدفع عند الاستلام', text: 'ادفع فقط عند استلام طلبك، بدون أي مخاطرة.' },
  { icon: WhatsAppIcon, title: 'طلب سهل عبر واتساب', text: 'نتواصل معك مباشرة لتأكيد كل تفاصيل طلبك.' },
];

export default function About() {
  return (
    <div className="container-page py-8">
      <Breadcrumb items={[{ label: 'من نحن' }]} />

      <div className="mx-auto mt-6 max-w-2xl text-center">
        <span className="section-eyebrow">{storeConfig.storeName}</span>
        <h1 className="mt-2 text-3xl">من نحن</h1>
        <p className="mt-4 text-sm leading-relaxed text-ink-soft">
          NAITECH متجر مغربي متخصص في الأكسسوارات والمنتجات التقنية، يركز على انتقاء منتجات
          مدروسة من علامات عالمية موثوقة بدل عرض كل ما هو متوفر في السوق. هدفنا أن تجد عند
          NAITECH منتوجاً تقنياً تثق فيه، بسعر واضح، وتجربة طلب بسيطة عبر واتساب.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {points.map((p) => (
          <div key={p.title} className="card-surface flex flex-col items-start gap-3 p-5">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brandblue-soft text-brandblue">
              <p.icon className="h-5 w-5" />
            </span>
            <h3 className="text-sm font-bold text-ink">{p.title}</h3>
            <p className="text-xs text-ink-soft">{p.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
