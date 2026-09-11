import { useState } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import { storeConfig } from '../config/store';
import { ChevronIcon } from '../components/Icons';

const faqs = [
  {
    q: 'كيف يمكنني الطلب من NAITECH؟',
    a: 'تصفح المنتجات، أضف ما يعجبك إلى السلة، ثم أكمل معلومات التوصيل. سيتم فتح واتساب برسالة جاهزة تحتوي على تفاصيل طلبك، ونتواصل معك مباشرة لتأكيده.',
  },
  {
    q: 'هل الدفع عند الاستلام متاح؟',
    a: `نعم، طريقة الدفع المعتمدة حالياً هي ${storeConfig.paymentMethod}.`,
  },
  {
    q: 'هل توصلون إلى جميع مدن المغرب؟',
    a: 'نعمل على توصيل طلباتنا إلى مختلف مدن المغرب. تفاصيل التوصيل الدقيقة لمدينتك يتم تأكيدها معك عبر واتساب عند الطلب.',
  },
  {
    q: 'لماذا يتم الطلب عبر واتساب فقط؟',
    a: 'اخترنا واتساب لأنه يسهّل التواصل المباشر معك، للإجابة على أي سؤال وتأكيد تفاصيل طلبك قبل الشحن، بدون تعقيد الدفع الإلكتروني.',
  },
  {
    q: 'متى يعتبر طلبي مؤكداً؟',
    a: 'إرسال رسالة واتساب هو الخطوة الأولى فقط. طلبك يُعتبر مؤكداً بعد أن نتواصل معك على واتساب ونتفق معك على تفاصيل التوصيل.',
  },
  {
    q: 'ماذا لو لم يكن المنتوج متوفراً؟',
    a: 'إذا نفدت كمية أحد المنتجات سنعلمك بذلك مباشرة عند التواصل معك على واتساب، ونقترح عليك بدائل من نفس الفئة إذا رغبت.',
  },
  {
    q: 'هل يمكنني إرجاع أو تبديل منتوج؟',
    a: 'نناقش كل حالة إرجاع أو تبديل مباشرة معك عبر واتساب حسب حالة المنتوج. تواصل معنا وسنساعدك بأفضل حل ممكن.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="container-page py-8">
      <Breadcrumb items={[{ label: 'الأسئلة الشائعة' }]} />
      <h1 className="mt-4 mb-8 text-2xl">الأسئلة الشائعة</h1>

      <div className="mx-auto max-w-2xl divide-y divide-line rounded-card border border-line bg-white">
        {faqs.map((item, i) => {
          const open = openIndex === i;
          return (
            <div key={item.q}>
              <button
                type="button"
                onClick={() => setOpenIndex(open ? -1 : i)}
                aria-expanded={open}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-right"
              >
                <span className="text-sm font-bold text-ink">{item.q}</span>
                <ChevronIcon direction={open ? 'up' : 'down'} className="h-4 w-4 flex-none text-ink-soft" />
              </button>
              {open && <p className="px-5 pb-5 text-sm leading-relaxed text-ink-soft">{item.a}</p>}
            </div>
          );
        })}
      </div>
    </div>
  );
}
