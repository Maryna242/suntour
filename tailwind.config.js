/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ['./src/**/*.html'],
  content: ["./src/**/*.css", "./**/*.html"],
  theme: {
    extend: {
      colors: {
        'light-yellow': '#FFF200',
      },
      fontFamily: {
        'Trebuchet': 'TrebuchetMS, Helvetica, sans-serif',
      },
    },
  },
  plugins: [],
}
