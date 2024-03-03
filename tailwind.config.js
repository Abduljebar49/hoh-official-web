/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#333333",
        default: "#D7B867"
      },
      fontFamily: {
        work: ['Work Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
