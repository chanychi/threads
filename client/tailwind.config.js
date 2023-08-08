/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
    screens: {
      'xl': {'max': '1200px'},
      'lg': {'max': '991px'},
      'md': {'max': '767px'},
      'sm': {'max': '550px'},
      'xsm': {'max': '375px'},

      // //  Potentially more responsive breakpoints
      // 'sm': {'min': '0px', 'max': '550px'},   // Extra Small: Up to 550px
      // 'md': {'min': '551px', 'max': '767px'},  // Small: 551px to 767px
      // 'lg': {'min': '768px', 'max': '991px'},  // Medium: 768px to 991px
      // 'xl': {'min': '992px', 'max': '1200px'}, // Large: 992px to 1200px
      // '2xl': {'min': '1201px'},                // Extra Large: 1201px and above

    }
  },
  plugins: [],
}

