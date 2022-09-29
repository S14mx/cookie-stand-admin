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
        'button-green': '#15b981',
        'form-input-box-green': '#a8f4d0',
        'table-cell-green': '#6fe6b7',
        'table-cell-darker-green': '#35d399',
        'th-green': '#15b981',
        'fake-button': '#d1fae4',
      },
    },
  },
  plugins: [],
}
