module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing:{
        '75': '25rem',
        '76': '29rem',
        '77': '30rem',
        '64': '15rem',
        '65': '24rem',
        '66': '25rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
