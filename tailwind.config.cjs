/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: '"Outfit", sans-serif',
      },
      colors: {
        'overlay-bg': '#d5e1ef',
        'title': '#1f3149',
        'bodytext': '#4c5e77',
      },
      boxShadow: {
        'custom': '0 20px 50px -18px rgba(100, 100, 100, 0.2)',
      }
    },
  },
  plugins: [],
}
