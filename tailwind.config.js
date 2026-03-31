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
        background: {
          light: '#ffffff',
          dark: '#0b0b0b',
          DEFAULT: '#ffffff'
        },
        'background-dark': '#0b0b0b',
        surface: {
          light: '#f6f6f6',
          dark: '#1a1a1a',
          DEFAULT: '#f6f6f6'
        },
        'surface-dark': '#1a1a1a',
        primary: '#0f9f6e',
        secondary: '#0c7a58',
        text: {
          light: '#111827',
          dark: '#f0f0f0',
          DEFAULT: '#111827'
        },
        'text-dark': '#f0f0f0',
        darker: {
          light: '#0b0b0b',
          dark: '#ffffff',
          DEFAULT: '#0b0b0b'
        },
        secondary: {
          light: '#0c7a58',
          dark: '#10b981',
          DEFAULT: '#0c7a58'
        },
        'secondary-dark': '#10b981',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'neon': '0 0 10px rgba(102, 252, 241, 0.3), 0 0 20px rgba(102, 252, 241, 0.2)',
      }
    },
  },
  plugins: [],
}