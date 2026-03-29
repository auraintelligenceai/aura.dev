/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'pixel': {
          bg: '#0a0a0f',
          dark: '#151520',
          card: '#1a1a2e',
          accent: '#00ff88',
          cyan: '#00ffff',
          magenta: '#ff00ff',
          yellow: '#ffff00',
          orange: '#ff6600',
        }
      },
      fontFamily: {
        'pixel': ['"Press Start 2P"', 'cursive'],
        'code': ['"VT323"', 'monospace'],
      },
      animation: {
        'pulse-pixel': 'pulse-pixel 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glitch': 'glitch 0.3s infinite',
        'float': 'float 3s ease-in-out infinite',
        'cursor-blink': 'cursor-blink 1s step-end infinite',
      },
      keyframes: {
        'pulse-pixel': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        'glitch': {
          '0%, 100%': { transform: 'translate(0)' },
          '25%': { transform: 'translate(-2px, 2px)' },
          '50%': { transform: 'translate(2px, -2px)' },
          '75%': { transform: 'translate(-1px, 1px)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'cursor-blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      boxShadow: {
        'pixel': '4px 4px 0px 0px rgba(0,255,136,0.5)',
        'pixel-lg': '8px 8px 0px 0px rgba(0,255,136,0.5)',
        'glow': '0 0 20px rgba(0,255,136,0.5)',
      },
    },
  },
  plugins: [],
}