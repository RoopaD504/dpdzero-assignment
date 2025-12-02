/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Inter", "Helvetica", "Arial", "sans-serif"],
      },
      colors: {
        primaryGreen: "rgb(0,71,63)",
      },
      
    },
  },
  plugins: [],
};
