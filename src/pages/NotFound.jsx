import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="container-page flex flex-col items-center justify-center gap-4 py-24 text-center">
      <span className="text-6xl font-extrabold text-brandblue">404</span>
      <h1 className="text-2xl">لم نجد هذه الصفحة</h1>
      <p className="max-w-sm text-sm text-ink-soft">
        الرابط الذي فتحته غير موجود أو تم نقله. جرب العودة إلى الصفحة الرئيسية أو تصفح منتجاتنا.
      </p>
      <div className="mt-2 flex gap-3">
        <Link to="/" className="btn-primary px-6 py-3">الصفحة الرئيسية</Link>
        <Link to="/products" className="btn-secondary px-6 py-3">تصفح المنتجات</Link>
      </div>
    </div>
  );
}
