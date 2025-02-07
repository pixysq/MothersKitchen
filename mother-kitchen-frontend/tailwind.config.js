/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'green-base': '#039860',
        'red-base': '#9F2700',
        'yellow-base': '#ffc66a',
        'yellow-dark': '#FCAF0B',
      },
      boxShadow: {
        '3xl': '1px 1px 5px -15px rgb(0, 0, 0)',
      },
      dropShadow: {
        '3xl': '1px 1px 3px rgb(0, 0, 0)',
        small: '10px 10px 15px rgb(0, 0, 0,0.5)',
      },
    },
    fontFamily: {
      lexend: ['Lexend Peta'],
      gluten: ['Gluten'],
      jua: ['Jua'],
    },
  },
  plugins: [],
}
