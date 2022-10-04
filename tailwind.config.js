/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#68e3df',
        secondary: '#050A30',
        // bkg: '#03001d',
        bkg: '#050A30',
        primaryDark: '#A0E7E5',
        secondaryDark: '#06091c',
      }
    },
  },
  plugins: [
    // require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio')
  ],
}
