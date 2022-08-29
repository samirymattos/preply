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
      'secondary01': '#7BD9DA',
      'secondary02': '#8FCBCC',
      'tertiary01': '#D94092',

      'neutrals01': '#EAEAEA',
      'neutrals03': '#FFFFFF',

      'background': '#F9FCFC',
      'background2': '#4B5159',

      'yellow': '#EFD26B',

      'secondary01-opacity': 'rgba(123, 217, 218, 0.75)',
      'tertiary01-opacity': 'rgba(217, 64, 146, 0.3)',
      'black-opacity25': 'rgba(0, 0, 0, 0.25)',
      'white-opacity': 'rgba(255, 255, 255, 0.01)',
    },
    fontFamily: {
      'montserrat': 'Montserrat',
    },
    fontSize: {
      'min-caption': '10px',
      'caption': '12px',
      'button': '14px',
      'currency': '16px',
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
    dropShadow: {
      'black': '0px -400px 23px 0px rgba(0,0,0,1)',
    },
    backdropBlur: {
      '10': '10px',
    },
    extend: {
      lineHeight: {
        'h1': '4.25rem',
      },
    },
  },
  plugins: [],
}