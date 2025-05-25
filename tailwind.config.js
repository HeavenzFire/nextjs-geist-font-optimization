/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          900: '#1e3a8a'
        },
        purple: {
          400: '#c084fc',
          500: '#a855f7',
          900: '#581c87'
        },
        pink: {
          400: '#f472b6',
          500: '#ec4899'
        },
        gray: {
          400: '#9ca3af',
          700: '#374151',
          900: '#111827'
        },
        green: {
          300: '#86efac',
          900: '#14532d'
        },
        red: {
          300: '#fca5a5',
          900: '#7f1d1d'
        }
      },
      animation: {
        'quantum-pulse': 'quantum-pulse 3s ease-in-out infinite',
        'quantum-float': 'quantum-float 6s ease-in-out infinite',
        'quantum-glow': 'quantum-glow 4s ease-in-out infinite'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
  safelist: [
    'from-blue-500',
    'via-purple-500',
    'to-pink-500',
    'bg-blue-900',
    'bg-green-900',
    'bg-red-900',
    'text-blue-300',
    'text-green-300',
    'text-red-300',
    'text-blue-400',
    'text-purple-400',
    'text-pink-400',
    'hover:border-blue-500',
    'hover:border-purple-500',
    'hover:border-pink-500'
  ]
}
