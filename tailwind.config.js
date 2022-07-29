/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './containers/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      'white': '#ffffff',
      'black':'#27292E',
      'primary':'#6759FF',
      'bg1':'#F9F9FF',
      'bg2':'#7544FF',
      'text':'#5F626B'
    },
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
      },
    },
  },
  plugins: [],
}
