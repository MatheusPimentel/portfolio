/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '.body--dark'],
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx,css,scss,sass}'],
  theme: {
    extend: {
      colors: { bg: 'var(--bg)', surface: 'var(--surface)', line: 'var(--line)', fg: 'var(--fg)', mute: 'var(--mute)', accent: 'var(--accent)' },
      fontFamily: {
        sans: ['Geist', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"Geist Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
    },
  },
  plugins: [],
};
