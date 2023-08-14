/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        zinc: colors.zinc,
        white: "#ffffff",
        primaryGreen: {
          50: "#ecfeef",
          100: "#e6f7e9",
          200: "#ddeee0",
          300: "#cedfd1",
          400: "#aabbad",
          500: "#8b9b8e",
          600: "#637266",
          700: "#505f53",
          800: "#324035",
          900: "#121f15",
        },
        secondaryBrown: {
          50: "#f8ede3",
          100: "#e4d2c6",
          200: "#cdb5a6",
          300: "#b49884",
          400: "#a18069",
          500: "#8e6a4f",
          600: "#825f47",
          700: "#71523d",
          800: "#634535",
          900: "#53372a",
        },
      },
    },
  },
  plugins: [],
};
