/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.tsx', './**/*.html'],
  theme: {
    extend: {
      backgroundImage: {
        galaxy: "url('/background-galaxy.png')"
      }
    }
  },
  plugins: []
}
