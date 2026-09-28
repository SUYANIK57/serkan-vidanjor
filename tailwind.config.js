/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./hizmetler/**/*.html",
    "./bolgeler/**/*.html",
    "./fiyatlar/**/*.html",
    "./iletisim/**/*.html",
    "./hakkimizda/**/*.html",
    "./assets/js/**/*.js"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      colors: {
        corporate: {
          DEFAULT: '#0B1F33',
          dark: '#071522',
          medium: '#163A5F',
          light: '#DCE8F2',
          bg: '#F4F7FA',
          white: '#FFFFFF'
        },
        brandNavy: {
          DEFAULT: '#0B1F33',
          dark: '#071522',
          light: '#163A5F',
          surface: '#0B1F33'
        },
        brandBlue: {
          DEFAULT: '#163A5F',
          hover: '#0B1F33',
          light: '#DCE8F2'
        },
        brandYellow: {
          DEFAULT: '#163A5F',
          hover: '#0B1F33',
          light: '#DCE8F2',
          dark: '#071522'
        }
      }
    }
  },
  plugins: [],
}
