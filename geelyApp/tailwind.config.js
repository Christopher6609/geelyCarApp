/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        euclid:["euclid-flex"],
        nunito:["Nunito+Sans"],
      }
    },
  },
  plugins: [],
}

