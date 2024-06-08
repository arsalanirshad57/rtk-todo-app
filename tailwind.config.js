/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      width: {
        '600': '600px'
      },
      letterSpacing: {
        5: '5px',
      }
    },
  },
  plugins: [],
}