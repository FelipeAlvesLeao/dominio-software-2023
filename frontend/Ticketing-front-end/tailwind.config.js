/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
    extend: {
      colors: {
        'customBlue': '#112557',
        'fontGray': '#D9D9D9'
      },
      fontFamily: {
        'poppins': ['Poppins'],
     }
    },
    
  },
  plugins: [],
}

