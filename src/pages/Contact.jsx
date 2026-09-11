import { useState } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import { storeConfig, whatsappLink } from '../config/store';
import { WhatsAppIcon } from '../components/Icons';

export default function Contact() {
  const [form, setForm] = useState({ name: '', message: '' });

  const handleChange = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `السلام عليكم، معي سؤال بخصوص NAITECH.\n\nالاسم: ${form.name}\n\nالرسالة:\n${form.message}`;
    window.open(whatsappLink(text), '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="container-page py-8">
      <Breadcrumb items={[{ label: 'تواصل معنا' }]} />
      <h1 className="mt-4 mb-8 text-2xl">تواصل معنا</h1>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="card-surface p-6">
          <h2 className="text-sm font-bold text-ink">أرسل رسالتك</h2>
          <p className="mt-1 text-xs text-ink-soft">
            سيتم فتح واتساب برسالتك جاهزة للإرسال مباشرة إلينا.
          </p>
          <form onSubmit={handleSubmit} className="mt-5 space-y-4">
            <label className="block">
              <span className="mb-1.5 block text-xs font-semibold text-ink-soft">الاسم</span>
              <input
                required
                className="input-field"
                value={form.name}
                onChange={handleChange('name')}
              />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-xs font-semibold text-ink-soft">رسالتك</span>
              <textarea
                required
                className="input-field min-h-[130px] resize-y"
                value={form.message}
                onChange={handleChange('message')}
              />
            </label>
            <button type="submit" className="btn-whatsapp w-full py-3.5">
              <WhatsAppIcon />
              إرسال عبر واتساب
            </button>
          </form>
        </div>

        <div className="card-surface flex flex-col justify-center gap-5 p-6">
          <div>
            <h2 className="text-sm font-bold text-ink">واتساب</h2>
            <p className="mt-1 text-sm text-ink-soft">
              أسرع طريقة للتواصل معنا للاستفسار عن أي منتوج أو طلب.
            </p>
            <a
              href={`https://wa.me/${storeConfig.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp mt-4 inline-flex"
            >
              <WhatsAppIcon />
              {storeConfig.whatsappDisplay}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
