/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': {'max': '767px'},
      'md': {'min': '768px', 'max': '1023px'},
      'lg': {'min': '1024px', 'max': '1279px'},
      'xl': {'min': '1280px', 'max': '1599px'},
      '2xl': {'min': '1600px'},
    },
    container: {
      center: true,
      maxWidth: {
        '1': '600px'
      }
    },
    colors: {
      'primary01': '#1B2436',
      'neutrals01': '#EAEAEA',
      'yellow': '#EFD26B',
      'tertiary01': '#D94092',
      'background': '#F9FCFC'
    },
    fontFamily: {
      'montserrat': 'Montserrat',
    },
    fontSize: {
      'h5': '24px',
      'h4': '32px',
      'h1': '56px',
    },
    maxWidth: {
      '65': '65%',
      '100': '100%',
      'sm': '400px',
      'md': '700px',
      'lg': '1000px',
      'xl': '1200px',
      '2xl': '1500px',
    },
    extend: {
      lineHeight: {
        'h1': '4.25rem',
      }}
  },
  plugins: [],
}