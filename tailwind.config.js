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

        lightPrimary: '#40bcd8',
        lightSecondary: '#383961',

        darkPrimary: '#EC5809',
        darkSecondary: '#5F3052',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
