/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      'rosado': '#EB0062',
      'verde' : '#72DB85',
    },
    extend: {
      fontFamily:{
        rubik:['Rubik Wet Paint', 'sans-serif']
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}


