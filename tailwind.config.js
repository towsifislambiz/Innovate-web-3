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
        c1 : "#29313D",
        c2 : "#7968EF"
      }, 
      backgroundImage :{
          NB: "url('/src/assets/NB.png')",
          Cimg: "url('/src/assets/Cimg.png')",
          Gimg: "url('/src/assets/Gimg.png')",
      },
      keyframes: {
    BT: {
      '0%': { height: '0px' },
      '100%': { height: '700px' },
    },
    rotateBorder: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
  },
   animation: {
    BT: 'BT .7s ease-out forwards',
      rotateBorder: 'rotateBorder 1s linear infinite',
  },
    },
  },
  plugins: [],
}
