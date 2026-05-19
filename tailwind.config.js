/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        pulse: {
          50: '#eefbff',
          100: '#d4f4ff',
          200: '#b2edff',
          300: '#7de3ff',
          400: '#40d0ff',
          500: '#14b5ff',
          600: '#0096ff',
          700: '#0077cc',
          800: '#0063a6',
          900: '#065489',
          950: '#043453',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
