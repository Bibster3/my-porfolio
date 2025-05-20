/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',           
    './src/**/*.{js,jsx,ts,tsx}', // all JS/TS React source files
  ],
  theme: {
    extend: {
      colors: {
        jet: '#121212',
      },
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
        'pulse-slow': 'pulse-slow 10s ease-in-out infinite',

      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: 0,
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
        'pulse-slow': {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.1' },
          '50%': { transform: 'scale(1.2)', opacity: '0.2' },
        },
      },
     
    },
  },
  plugins: [],
}