/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        's-large': { 'raw': '(min-height: 830px)' },
        'ss-large': { 'raw': '(min-width: 130px)' }
      },
      colors: {
        orange: {
          600: '#d15404'
        },
        yellow: {
          600: '#ce9800'
        },
        amber: {
          600: '#d86f2c'
        }
      },
      fontFamily: {
        'roboto': ['Roboto', 'system-ui', 'sans-serif'],
        'lilita': ['Lilita One', 'system-ui', 'sans-serif']
      },
      fontSize: {
        'md': '1.5rem'
      }
    },
  },
  plugins: [],
}

