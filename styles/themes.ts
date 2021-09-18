import { DefaultTheme } from 'styled-components'
import { createSpacing } from 'spacing-helper'

const spacing = createSpacing({ factor: 10 })

const primary: DefaultTheme = {
  colors: {
    white: '#FFFFFF',
    green: '#4AA658',
    orange: '#DF910B',

    black: {
      primary: '#272727',
      secondary: '#292A2D',
      tertiary: '#242424',
    },

    blue: {
      primary: '#3165D4',
      secondary: '#001135',
      tertiary: '#F5F8FF',
      quaternary: '#04205c',
      quinary: '#0A3FB1',
    },

    grey: {
      primary: '#ECECEC',
      secondary: '#878787',
      tertiary: '#B9B9B9',
      quaternary: '#FBFBFB',
      quinary: `#F6F6F6`,
      senary: '#E8E8E8',
      sectary: '#A1A1A1',
    },
  },

  spaces: {
    xxs: spacing(1), //10px
    xs: spacing(2), //20px
    sm: spacing(3), //30px
    md: spacing(4), //40px
    lg: spacing(5), //50px
    xl: spacing(11), //110px
    xxl: spacing(15), //150px

    custom: {
      mobileMenu: '65px',
      desktopMenu: '165px',
      narrowSection: spacing(10), //100px
      gutter: '15px',
    },
  },

  borders: {
    sm: '10px',
    md: '30px',
  },

  transitions: {
    regular: '125ms ease-in',
    fast: '300ms ease-in-out',
  },

  typo: {
    sizes: {
      xs: {
        desktop: '14px',
      },
      menuXs: {
        desktop: '14px',
      },
      menu: {
        desktop: '16px',
      },
      button: {
        mobile: '17px',
        tablet: '19px',
        desktop: '21px',
      },
      sm: {
        mobile: '19px',
        tablet: '21px',
        desktop: '21px',
      },
      md: {
        mobile: '21px',
        tablet: '25px',
        desktop: '25px',
      },
      mdlg: {
        mobile: '21px',
        desktop: '32px',
      },
      modal: {
        mobile: '21px',
        desktop: '28px',
      },
      lg: {
        mobile: '24px',
        tablet: '24px',
        desktop: '44px',
      },
      xl: {
        mobile: '32px',
        tablet: '48px',
        desktop: '64px',
      },
      xxl: {
        mobile: '40px',
        tablet: '80px',
        desktop: '96px',
      },
    },
    letterSpacing: {
      xl: {
        mobile: '-0.1px',
        tablet: '-0.1px',
        desktop: '-0.6px',
      },
      xxl: {
        mobile: '-0.1px',
        tablet: '-1.2px',
        desktop: '-1.4px',
      },
    },
    primary: {
      family: ' "Geomanist Regular", sans-serif',
      weight: {
        normal: 300,
        bold: 800,
      },
    },

    header: {
      family: ' "Geomanist Book", sans-serif',
      weight: {
        normal: 300,
        bold: 800,
      },
    },
  },

  buttons: {
    primary: {
      text: '#FFFFFF',
      bg: '#3165D4',
      radius: '30px',

      hover: {
        bg: '#0C3DA7',
      },
    },

    secondary: {
      text: '#000000',
      bg: '#FFFFFF',
      radius: '30px',

      hover: {
        bg: '#f1f1f1',
        text: '#272727',
      },
    },
  },
}

export { primary }
