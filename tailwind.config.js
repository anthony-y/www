/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        dark: '#1c1b22',
        myorange: '#cc5500',
        mygreen: '#3e3914',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
