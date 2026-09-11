import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { openWhatsappOrder } from '../utils/whatsapp';
import { WhatsAppIcon } from './Icons';

const initialForm = { name: '', phone: '', city: '', address: '', notes: '' };

export default function CheckoutForm() {
  const { items, totalPrice } = useCart();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const handleChange = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = 'الاسم الكامل مطلوب';
    if (!form.phone.trim()) next.phone = 'رقم الهاتف مطلوب';
    if (!form.city.trim()) next.city = 'المدينة مطلوبة';
    if (!form.address.trim()) next.address = 'العنوان مطلوب';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!items.length) return;
    if (!validate()) return;
    openWhatsappOrder(items, form);
    setSent(true);
  };

  if (!items.length) return null;

  return (
    <form onSubmit={handleSubmit} className="card-surface p-5 sm:p-6" noValidate>
      <h2 className="text-base font-bold text-ink">معلومات التوصيل</h2>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field label="الاسم الكامل" error={errors.name}>
          <input
            className="input-field"
            value={form.name}
            onChange={handleChange('name')}
            aria-required="true"
            aria-invalid={Boolean(errors.name)}
          />
        </Field>
        <Field label="رقم الهاتف" error={errors.phone}>
          <input
            type="tel"
            className="input-field"
            value={form.phone}
            onChange={handleChange('phone')}
            aria-required="true"
            aria-invalid={Boolean(errors.phone)}
            dir="ltr"
          />
        </Field>
        <Field label="المدينة" error={errors.city}>
          <input
            className="input-field"
            value={form.city}
            onChange={handleChange('city')}
            aria-required="true"
            aria-invalid={Boolean(errors.city)}
          />
        </Field>
        <Field label="العنوان" error={errors.address}>
          <input
            className="input-field"
            value={form.address}
            onChange={handleChange('address')}
            aria-required="true"
            aria-invalid={Boolean(errors.address)}
          />
        </Field>
        <div className="sm:col-span-2">
          <Field label="ملاحظات إضافية (اختياري)">
            <textarea
              className="input-field min-h-[90px] resize-y"
              value={form.notes}
              onChange={handleChange('notes')}
            />
          </Field>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
        <span className="text-sm font-medium text-ink-soft">المجموع</span>
        <span className="text-lg font-extrabold text-ink">{totalPrice} DH</span>
      </div>

      <button type="submit" className="btn-whatsapp mt-4 w-full py-3.5 text-sm">
        <WhatsAppIcon />
        إتمام الطلب عبر واتساب
      </button>

      {sent && (
        <div
          role="status"
          className="mt-4 rounded-xl bg-brandblue-soft px-4 py-3 text-sm font-medium text-ink"
        >
          تم تجهيز طلبك 🎉 سيتم فتح واتساب لإرسال تفاصيل طلبك إلى NAITECH. طلبك يُعتبر مؤكداً
          فقط بعد تواصلنا معك على واتساب.
        </div>
      )}
    </form>
  );
}

function Field({ label, error, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold text-ink-soft">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs text-red-500">{error}</span>}
    </label>
  );
}
