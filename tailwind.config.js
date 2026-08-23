/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#FAF8F5',
        cream: '#F4EFE9',
        blush: '#E9D5D0',
        rose: '#B98282',
        burgundy: '#5A2832',
        espresso: '#211A18',
        champagne: '#C9B49A',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Jost', 'system-ui', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
      letterSpacing: {
        widest: '.25em',
      },
      transitionTimingFunction: {
        'soft': 'cubic-bezier(0.22, 0.61, 0.36, 1)',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.8s cubic-bezier(0.22, 0.61, 0.36, 1) both',
        fadeIn: 'fadeIn 0.5s ease both',
        slideInRight: 'slideInRight 0.4s cubic-bezier(0.22, 0.61, 0.36, 1) both',
        slideInLeft: 'slideInLeft 0.3s cubic-bezier(0.22, 0.61, 0.36, 1) both',
        scaleIn: 'scaleIn 0.3s ease both',
      },
    },
  },
  plugins: [],
};
