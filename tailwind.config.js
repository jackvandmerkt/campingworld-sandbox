module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        cw: ['Montserrat'],
        lato: ['Lato']
      },
      colors: {
        cwRed: '#C30B24',
        cwGray: '#474342',
        cwLightGray: '#757272',
        cwBg: "#E5E5E5",
        formBlack: '#212B36',
        navGray: '#F8F9FA',
        cwBadgeGray: '#BFC5CE',
        lightOrange: '#FF974580'
      },
      spacing: {
        '6.5': '26px',
        '13': '52px',
        '13.5': '55px',
        '15': '60px',
        '34': '136px',
        '110': '110px',
        '116': '116.41px',
        '222': '222px',
        '584': '584px',
        '636': '636px',
        '454': '454px',
        '416': '416px',
        '200': '200px'

      },
      fontSize: {
        'nav': ['12px', '16px'],
        'newListing': ['32px', '38px'],
        'floatLabel': ['12px', '18px'],
        'evaluationLabel': ['16px', '26px'],
        '18px24px': ['18px', '24px'],
        'createListingSubMenu': ['14px', '24px'],
        '32px38px': ['32px', '38px']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
