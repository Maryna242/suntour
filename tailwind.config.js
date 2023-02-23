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
      backgroundImage:{
        'main-gradient': "linear-gradient(180deg, #00AAAA 0%, #008BAA 100%)"
      }
    },
  },
  plugins: [],
}
