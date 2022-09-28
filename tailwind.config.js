/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      'sans': ['Poppins'],
      'serif': ['Poppins'],
      'mono': ['Poppins'],
    },
      extend: {
      colors: {
        yellow: {
          'knox': '#F5DA2A'
        },
        'knox-yellow': '#F5DA2A',
        'knox-orange': '#F1945B',
        'knox-purple': '#EA10B8',
        'primary': '#64004D',
        'primary-dark': '#3B002E'
      },
    },
  },
  plugins: [],
}
