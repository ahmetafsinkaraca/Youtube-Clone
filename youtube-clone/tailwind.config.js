/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      width:{
        base:540,
        baseImage:355
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

