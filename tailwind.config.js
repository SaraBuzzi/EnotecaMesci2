/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        noir: {
          50: '#f7f5f3',
          100: '#e8e2dc',
          200: '#c9bfb4',
          300: '#a89c8e',
          400: '#7d6f60',
          500: '#5a4d40',
          600: '#443a30',
          700: '#332b23',
          800: '#221c17',
          900: '#15110e',
          950: '#0c0907',
        },
        wine: {
          50: '#fdf2f4',
          100: '#fce7eb',
          200: '#f9d0d9',
          300: '#f4a8b8',
          400: '#ec7591',
          500: '#dc4367',
          600: '#c52b53',
          700: '#9d1d42',
          800: '#7b1a37',
          900: '#5e1530',
          950: '#3d0d20',
        },
        gold: {
          50: '#fdfaf3',
          100: '#f8efcf',
          200: '#f0dd9e',
          300: '#e6c668',
          400: '#d4af37',
          500: '#c49a2a',
          600: '#a87d20',
          700: '#855f1d',
          800: '#6e4d1e',
          900: '#5d411f',
          950: '#362210',
        },
        cream: {
          50: '#fefcf9',
          100: '#fdf6ee',
          200: '#faecd9',
          300: '#f5dcc0',
          400: '#eccaa4',
          500: '#e0b385',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'slide-in': 'slideIn 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};
