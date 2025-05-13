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
    },
  },
  plugins: [],
}