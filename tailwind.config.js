/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        monk: {
          blue: '#181391',
          gold: '#D6A85C',
          goldDark: '#b0853f',
          lightBlue: '#F4F4FC',
          navy: '#0C0959',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
