/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Tajawal', 'sans-serif'],
      },
      colors: {
        ink: {
          DEFAULT: '#101828',
          soft: '#475467',
        },
        brandblue: {
          DEFAULT: '#2E5EFF',
          soft: '#EAF0FF',
          dark: '#1E44D6',
        },
        whatsapp: {
          DEFAULT: '#25D366',
          dark: '#1FB855',
        },
        line: '#E7E9EF',
        surface: '#F7F8FA',
      },
      borderRadius: {
        card: '18px',
      },
      boxShadow: {
        soft: '0 8px 24px rgba(16, 24, 40, 0.06)',
        softer: '0 4px 12px rgba(16, 24, 40, 0.05)',
        lift: '0 16px 40px rgba(16, 24, 40, 0.10)',
      },
      maxWidth: {
        container: '1240px',
      },
    },
  },
  plugins: [],
}
