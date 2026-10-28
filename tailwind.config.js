/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      "3xs": "320px",
      "2xs": "410px",
      xs: "576px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1535px",
      dlxl: "1919px",
      "4k": "2560px",
    },

    extend: {},
  },
  plugins: [],
};
