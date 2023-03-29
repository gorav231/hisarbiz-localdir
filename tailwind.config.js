/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navyblue: {
          950: '#002067;'
        },
        lightblue: {
          10: "#0077b6"
        },
        light1: {
          11: "hsla(0,0%,100%,.1)"
        },
        gray: {
          10: "#676767"
        },
        light: {
          12: "#aaa"
        },
        black1: {
          1: '#0d0d0d'
        },
        lightb: {
          1: "#418fc6 "
        },
        lightg: {
          1: "#666666"
        },
        footer2: {
          1: "#0077b6"
        },
        hoverColor: "#1054a5"
      },
      screens: {
        'xxs': '200px',
        'xs': '540px'
      },
      backgroundImage: {
        'homeBanner': 'url("/images/home/homebanner.svg")',
      },
      fontFamily: {
        'Quicksand': ['sans-serif', 'Quicksand'],
        'Mulish': ['Mulish', 'sans-serif'],
        'Josefin': ['Josefin Sans', 'sans-serif'],
      },
      scale: {
        '7': ".7"
      },
      keyframes: {
        'loadershake':{
          '0%': {
            transform: 'translateY(5x)'
          },
          '50%': {
            transform: 'translateY(10px)'
          },
          '100%': {
            transform: 'translateY(5px)'
          },
        },
        // 'fade-in-down': {
        //   '0%': {
        //     opacity: '0',
        //     transform: 'translateY(-10px)'
        //   },
        //   '100%': {
        //     opacity: '1',
        //     transform: 'translateY(0)'
        //   },
        // },
        // 'fade-out-down': {
        //   'from': {
        //     opacity: '1',
        //     transform: 'translateY(0px)'
        //   },
        //   'to': {
        //     opacity: '0',
        //     transform: 'translateY(10px)'
        //   },
        // },
        // 'fade-in-up': {
        //   '0%': {
        //     opacity: '0',
        //     transform: 'translateY(10px)'
        //   },
        //   '100%': {
        //     opacity: '1',
        //     transform: 'translateY(0)'
        //   },
        // },
        // 'fade-out-up': {
        //   'from': {
        //     opacity: '1',
        //     transform: 'translateY(0px)'
        //   },
        //   'to': {
        //     opacity: '0',
        //     transform: 'translateY(10px)'
        //   },
        // }
      },
      // animation: {
      //   'loadershake': 'loadershake infinite 0.8s linear',
      //   'fade-in-down': 'fade-in-down 0.5s ease-out',
      //   'fade-out-down': 'fade-out-down 0.5s ease-out',
      //   'fade-in-up': 'fade-in-up 0.5s ease-out',
      //   'fade-out-up': 'fade-out-up 0.5s ease-out'
      // }
    },
  },
  plugins: [
    // require('tailwind-scrollbar')
  ],
}