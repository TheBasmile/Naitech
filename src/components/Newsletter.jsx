import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Note: there is no email backend connected yet. We don't claim the
  // address is stored anywhere — just acknowledge interest locally.
  // Wire this up to a real provider (Mailchimp, Brevo, etc.) before relying on it.
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section className="container-page py-14">
      <div className="card-surface flex flex-col items-center gap-4 px-6 py-12 text-center sm:px-12">
        <h2 className="text-xl font-extrabold text-ink sm:text-2xl">ابق على اطلاع</h2>
        <p className="max-w-sm text-sm text-ink-soft">
          اشترك ليصلك خبر كل منتج ووصلة تقنية جديدة عند NAITECH.
        </p>
        <form onSubmit={handleSubmit} className="mt-2 flex w-full max-w-sm flex-col gap-3 sm:flex-row">
          <label htmlFor="newsletter-email" className="sr-only">البريد الإلكتروني</label>
          <input
            id="newsletter-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="بريدك الإلكتروني"
            className="input-field flex-1"
            dir="ltr"
          />
          <button type="submit" className="btn-primary px-6 py-3 whitespace-nowrap">اشترك</button>
        </form>
        {submitted && (
          <p role="status" className="text-xs font-medium text-brandblue">
            شكراً على اهتمامك! سنوافيك بجديد NAITECH قريباً.
          </p>
        )}
      </div>
    </section>
  );
}
