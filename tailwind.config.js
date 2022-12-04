/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['poppins', 'sans-serif'],
        'roboto': ['roboto', 'sans-serif'],
        'inter': ['inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}