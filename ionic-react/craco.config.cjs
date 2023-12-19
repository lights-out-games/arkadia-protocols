// craco.config.js
module.exports = {
    style: {
      postcss: {
        plugins: [
          require('tailwindcss'),
          require('autoprefixer'),
        ],
      },
    },
  }

  // "start": "TAILWIND_MODE=watch craco start",
  // "build": "craco build",
  // "ionic:serve": "TAILWIND_MODE=watch craco start",
  // "ionic:build": "craco build",

//   OLD package.json before CRACO 
//   "scripts": {
//     "dev": "vite",
//     "build": "tsc && vite build",
//     "preview": "vite preview",
//     "test.e2e": "cypress run",
//     "test.unit": "vitest",
//     "lint": "eslint"
//   },