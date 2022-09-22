/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#243c5a',
        'lab-green': '#24cca9',
        'other-green': '#ecfdf5',
        'form-green': '#6fe6b7',
        'button-green': '#15b981'
      },
    },
  },
  plugins: [],
}
