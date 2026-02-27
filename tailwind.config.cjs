const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '.body--dark'],
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx,css,scss,sass}'],
  theme: {
    extend: {
      colors: {
        primary: colors.sky,
      },
      fontFamily: {
        sans: ['Mada', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
