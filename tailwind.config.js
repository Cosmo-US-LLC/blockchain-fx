/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "<md": { max: "850px" },
        "<sm": { max: "450px" },
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
