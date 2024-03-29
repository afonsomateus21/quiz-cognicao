/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          600: '#d15404'
        },
      },
      fontFamily: {
        'roboto': ['Roboto', 'system-ui', 'sans-serif']
      }
    },
  },
  plugins: [],
}

