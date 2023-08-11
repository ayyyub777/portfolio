/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    colors: {
      black: "#1d1d1f",
      gray: "#969696",
      white: "#fff",
      "light-gray": "#ececec",
    },
    extend: {},
  },
  plugins: [],
};
