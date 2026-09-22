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
        ink: {
          950: '#05070A',
          900: '#0A0A1A',
          800: '#0F1220',
          700: '#15182E',
        },
        zinc: {
          950: '#09090b',
          900: '#18181b',
        }
      },
      fontFamily: {
        sans: ['Instrument Sans', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Instrument Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 2s ease-in-out infinite',
        'spin-slow': 'spin-slow 20s linear infinite',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
    },
  },
  plugins: [],
}
