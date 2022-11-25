/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    fontFamily: {
      'inter': ['Inter', 'sans-serif'],
      'lexendDeca': ['Lexend Deca', 'sans-serif']
    },
    colors: {
      'mainBlue': 'hsl(233, 47%, 7%)',
      'secondBlue': 'hsl(244, 38%, 16%)',
      'softViolet': 'hsl(277, 64%, 61%)',
      'mainWhite': 'hsl(0, 0%, 100%)',
      'secondWhite': 'hsla(0, 0%, 100%, 0.75)',
      'thirdWhite': 'hsla(0, 0%, 100%, 0.6)'
    }
  },
  plugins: [],
}
