const withMT = require("@material-tailwind/react/utils/withMT");
const colors = require('tailwindcss/colors')


/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
    },
    extend: { 
        colors: {
          transparent: 'transparent',
          current: 'currentColor',
          black: colors.black,
          white: colors.white,
          emerald: colors.emerald,
          indigo: colors.indigo,
          yellow: colors.yellow,
          stone: colors.warmGray,
          sky: colors.lightBlue,
          neutral: colors.trueGray,
          gray: colors.coolGray,
          slate: colors.blueGray,
          violet: colors.violet,
          zinc: colors.zinc,

          // minha cores
          "roxo": "#3E1E75",
          "roxo-light": "#5218B7",
          "roxo-normal": "#4C3F99",
          "limeyellow": "#E9E107",
        },     
    },
  },
  plugins: [],
});
