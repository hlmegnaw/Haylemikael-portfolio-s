/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        academic: {
          50: '#f0f5fe',
          100: '#e1ecfd',
          200: '#c7dcfa',
          300: '#9ec4f5',
          400: '#6ea4ef',
          500: '#4381e6',
          600: '#2b65d6',
          700: '#1d4fb3',
          800: '#1a4190',
          900: '#183774',
          950: '#0f224a',
        },
        navy: {
          800: '#111b2f',
          850: '#0e1626',
          900: '#0b132b',
          950: '#060a17',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
