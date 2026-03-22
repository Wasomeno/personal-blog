/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#5B8FB9',
        'background-light': '#F9F9F8',
        'background-dark': '#211511',
        surface: '#FFFFFF',
        sidebar: '#F3F3F1',
        'text-main': '#2D2B2A',
        'text-muted': '#8A8785',
        'accent-mint': '#EBEBE9',
        'border-soft': '#EBEBE9',
      },
      fontFamily: {
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        DEFAULT: '1rem',
        card: '24px',
        xl: '2rem',
      },
      boxShadow: {
        soft: '0 12px 40px rgba(45, 43, 42, 0.04)',
        hover: '0 20px 40px rgba(45, 43, 42, 0.08)',
      },
    },
  },
  plugins: [],
};
