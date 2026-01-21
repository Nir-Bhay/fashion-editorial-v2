/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'warm-white': '#F5F4F2',
        'charcoal': '#111111',
        'soft-gray': '#E6E6E6',
        'muted-taupe': '#CFC8BE',
        'sunset-orange': '#F4A340',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'display': ['clamp(4rem, 8vw, 6rem)', { lineHeight: '1', letterSpacing: '-0.02em', fontWeight: '700' }], // 64-96px
        'section': ['clamp(2rem, 4vw, 2.5rem)', { lineHeight: '1.2', fontWeight: '600' }], // 32-40px
        'body': ['1.125rem', { lineHeight: '1.6', fontWeight: '400' }], // 18px
        'meta': ['0.875rem', { lineHeight: '1.4', fontWeight: '400' }], // 14px
      },
    },
  },
  plugins: [],
}
