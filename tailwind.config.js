/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        container: "1320px",
      },
      fontFamily: {
        open : ["Open Sans", "sans-serif"],
        pop : ["Poppins", "sans-serif"],
        nun : ["Nunito", "sans-serif"],
      },
      colors :{
        c1 : "#29313D"
      }, 
      backgroundImage :{
          NB: "url('/src/assets/NB.png')",
      }
    },
  },
  plugins: [],
}
