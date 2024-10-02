/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'gold': '0 0 30px #c8a560',
        'gold-small': '0 0 5px #c8a560',
      },
      width: {
        '50%': '50%'
      },
      height: {
        '100dvh': '100dvh',
      },
      minHeight: {
        '100dvh': '100dvh',
      },
      colors: {
        'gold': '#c8a560',
        'black': '#101012',
        'white': '#d3d3d3',
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
      animation: {
        blink: 'blink 1s steps(1) infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-glow-gold': {
          textShadow: '0 0 5px #c8a560',
        },
      }

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}

