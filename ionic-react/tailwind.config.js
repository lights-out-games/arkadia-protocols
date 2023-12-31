/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./dist/index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  mode: 'jit', // Optionally use just in time engine
  // purge: ['./src/**/*.{js,jsx,ts,tsx,css}', './public/index.html'],
  media: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  plugins: [],
}