# NAITECH — متجر تقني مغربي

موقع تجارة إلكترونية كامل لمتجر **NAITECH**، مبني بـ React + Vite + Tailwind CSS، بدون أي بوابة دفع إلكتروني — الطلبات تتم عبر رسالة واتساب جاهزة تلقائياً.

---

## 1. المتطلبات

- [Node.js](https://nodejs.org) نسخة 18 أو أحدث (يتضمن npm)

تأكد أنها مثبتة عندك:

```bash
node -v
npm -v
```

---

## 2. التثبيت

داخل مجلد المشروع:

```bash
npm install
```

هاد الأمر غادي يحمل جميع المكتبات المذكورة فـ `package.json` (React, React Router, Tailwind, Vite...).

---

## 3. التشغيل محلياً (Development)

```bash
npm run dev
```

غادي يبان لك رابط محلي (عادة `http://localhost:5173`). افتحو فالمتصفح باش تشوف الموقع ويتحدث تلقائياً كل ما بدلتي شي حاجة فالكود.

---

## 4. البناء للإنتاج (Build)

```bash
npm run build
```

هاد الأمر كيدير build كامل ديال الموقع ويحطو فمجلد `dist/`. هذا هو المجلد لي خاصك تنشرو.

يمكن تجرب النتيجة محلياً قبل النشر بـ:

```bash
npm run preview
```

---

## 5. النشر المجاني على GitHub Pages

### الخطوة أ — رفع المشروع لـ GitHub

1. دير حساب / repository جديد على [github.com](https://github.com) (مثلاً `naitech`).
2. من داخل مجلد المشروع:

```bash
git init
git add .
git commit -m "NAITECH store - initial version"
git branch -M main
git remote add origin https://github.com/USERNAME/REPO-NAME.git
git push -u origin main
```

استبدل `USERNAME/REPO-NAME` باسم المستخدم والـ repository ديالك.

### الخطوة ب — النشر بأمر واحد

المشروع فيه أداة `gh-pages` جاهزة. غير دير:

```bash
npm run deploy
```

هاد الأمر غادي:
1. يبني الموقع (`npm run build`)
2. يدفع محتوى `dist/` لبرانش اسمه `gh-pages` فالـ repository ديالك

### الخطوة ج — تفعيل GitHub Pages

1. فـ GitHub، دخل لـ **Settings** ديال الـ repository
2. من الجهة اليسرى اختار **Pages**
3. فـ "Build and deployment" → **Source** اختار: **Deploy from a branch**
4. فـ **Branch** اختار `gh-pages` و `/ (root)`
5. **Save**

من بعد دقيقة أو دقيقتين، الموقع يكون متوفر على:

```
https://USERNAME.github.io/REPO-NAME/
```

### ملاحظة مهمة على الروابط (Routing)

المشروع مبني بـ `HashRouter` (تلقى الروابط شكل `/#/products` بدل `/products`). هاد الشي **مقصود** باش الموقع يخدم مزيان فـ GitHub Pages بلا "404" عند تحديث الصفحة أو فتح رابط مباشر لمنتوج معين. `vite.config.js` معمر بـ `base: './'` (مسار نسبي) باش يخدم فأي repository بلا ما تحتاج تبدلو.

---

## 6. هيكل المشروع

```
src/
  components/     مكونات قابلة لإعادة الاستخدام (Header, Footer, ProductCard...)
  pages/          صفحات الموقع (Home, Products, ProductDetail, Cart...)
  data/
    products.js   قائمة المنتجات الكاملة (29 منتوج) والأثمنة الحقيقية — عدّل هنا فقط
  config/
    store.js      إعدادات المتجر المركزية (الاسم، رقم واتساب، الماركات، الفئات)
  context/        Cart و Wishlist (محفوظين فـ localStorage)
  hooks/          useLocalStorage
  utils/
    whatsapp.js   بناء رسالة الطلب على واتساب
  assets/products/  صور المنتجات المتوفرة حالياً
```

---

## 7. تعديلات شائعة

### تبديل رقم واتساب
فـ `src/config/store.js`:
```js
whatsappNumber: '212708969958',
```

### تعديل ثمن أو وصف منتوج
فـ `src/data/products.js`، دور على المنتوج وبدل `price` أو `description` مباشرة.

### إضافة صورة حقيقية لمنتوج
1. حط الصورة فـ `src/assets/products/`
2. فـ `src/data/products.js`، زيد `import` فالأعلى، وضيفها فـ `images: [...]` ديال المنتوج

### إضافة عرض/تخفيض حقيقي
بدل فالمنتوج:
```js
oldPrice: 799, // الثمن القديم الحقيقي
```
قسم "عروض حالية" فالصفحة الرئيسية غادي يبان تلقائياً بمجرد ما يكون عندك منتوج فيه `oldPrice`.

---

## 8. الصور الناقصة

من أصل 29 منتوج، **8 منتجات فقط** عندها صور حقيقية حالياً (بناءً على الصور لي تصيفطات):

- SOUNDPEATS H3, AIR5 PRO, AIR CLIP
- UGREEN Light Buds Magic, Fine Track Google
- KIESLECT ELITE2, LORA 3, SEEKTAG + ADJUSTABLE

باقي 21 منتوج كيبانو بـ **placeholder أنيق** مبني على نوع المنتوج (سماعة / ساعة / جهاز تتبع / شاحن) بدل صورة حقيقية. ضيف الصور الحقيقية بمجرد ما تكون متوفرة عندك (شوف القسم 7 فوق).

---

## 9. ما تم تجنبه عمداً (حسب طلبك)

- ما كايناش بوابة دفع إلكتروني (Stripe/PayPal) — الطلب كيمر عبر واتساب فقط
- ما كايناش تقييمات/آراء عملاء وهمية
- ما كايناش عروض أو تخفيضات مختلقة
- ما كايناش إحصائيات وهمية ("+100,000 زبون" إلخ)
- ما كايناش تاريخ مختلق للشركة فصفحة "من نحن"
