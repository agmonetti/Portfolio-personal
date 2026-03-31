/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#ffffff',
        surface: '#f6f6f6',
        primary: '#0f9f6e',
        secondary: '#0c7a58',
        text: '#111827',
        darker: '#0b0b0b'
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