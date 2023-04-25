module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#0070f3',
        dollar: '#6B8F71'
      },
      borderWidth: {
        '10': '10px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}