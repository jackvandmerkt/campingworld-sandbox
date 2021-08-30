module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        'listing-w': '28.8889%',
        'orders-w': '59.4444%'
      },
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
        '7.5': '30px',
        '13': '52px',
        '13.5': '55px',
        '15': '60px',
        '18': '72px',
        '90': '90px',
        '110': '110px',
        '116': '116.41px',
        '124':'124px',
        '34': '136px',
        '200': '200px',
        '222': '222px',
        '330': '330px',
        '402': '402px',
        '416': '416px',
        '454': '454px',
        '510': '510px',
        '526': '526px',
        '584': '584px',
        '636': '636px',
        '856': '856px',
        '1296': '1296px'
        
      },
      fontSize: {
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
