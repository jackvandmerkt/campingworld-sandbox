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
        '306': '306px',
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
        '32px38px': ['32px', '38px'],
        '20px30px': ['20px', '30px']
      }
    },
    boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
       '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        none: 'none'
    }
  },
  variants: {
    extend: {
      width: ["hover"],
      height: ["hover"]
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
