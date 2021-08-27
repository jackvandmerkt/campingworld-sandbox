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
        lightOrange: '#FF974580',
        proposalsGray: '#EAECEF'
      },
      spacing: {
        '6.5': '26px',
        '13': '52px',
        '13.5': '55px',
        '15': '60px',
        '110': '110px',
        '116': '116.41px',
        '34': '136px',
        '200': '200px',
        '222': '222px',
        '330': '330px',
        '416': '416px',
        '454': '454px',
        '526': '526px',
        '584': '584px',
        '636': '636px',
        
      },
      fontSize: {
        '12px16px': ['12px', '16px'],
        '12px18px': ['12px', '18px'],
        '14px24px': ['14px', '24px'],
        '16px26px': ['16px', '26px'],
        '18px24px': ['18px', '24px'],
        '20px26px': ['20px', '26px'],
        '28px34px': ['28px', '34px'],
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
