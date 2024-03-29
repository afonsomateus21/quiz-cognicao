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
        yellow: {
          600: '#ce9800'
        }
      },
      fontFamily: {
        'roboto': ['Roboto', 'system-ui', 'sans-serif']
      }
    },
  },
  plugins: [],
}

