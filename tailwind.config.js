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
          NBimg1: "url('/src/assets/NBimg1.png')",
          Getimg1: "url('/src/assets/Getimg1.png')",
          Wimg1: "url('/src/assets/Wimg1.png')",
          Wimg2: "url('/src/assets/Wimg2.png')",
          Wimg3: "url('/src/assets/Wimg3.png')",
      },
      keyframes: {

    rotateBorder: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        moveBox: {
          '0%': {
            top: '600px',
            right: '-300px',
            transform: 'rotate(-5deg)',
          },
          '100%': {
            top: '216px',
            right: '100px',
            transform: 'rotate(-5deg)',
          },
        },
         growScale: {
          '0%': {
            transform: 'scaleY(0)',
          },
          '100%': {
            transform: 'scaleY(1)',
          },
        },
         moveBox2: {
          '0%': {
            top : '0px',
            left : '0px',
            opacity : 0
          },
          '100%': {
            top : '207px',
            left : '400px',
            opacity : 1
          },
        },
  },
   animation: {
      rotateBorder: 'rotateBorder 1s linear infinite',
     moveBox: 'moveBox 1s ease-out forwards',
     moveBox2: 'moveBox2 1s ease-out forwards',
      BT: 'growScale 1s ease-out forwards',
  },
    },
  },
  plugins: [],
}
