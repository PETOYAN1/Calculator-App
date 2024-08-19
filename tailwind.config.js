/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      Urbanist: 'Urbanist'
    },
    extend: {
      textOverflow: ['hover', 'focus'],
    },
  },
  plugins: [],
}

