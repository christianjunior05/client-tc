/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'custom': '1111px', // Ajout du point de rupture personnalisé
      },
    },
  },
  variants: {},
  plugins: [],
};
