import { DefaultTheme } from 'styled-components'
import { createSpacing } from 'spacing-helper'

const spacing = createSpacing({ factor: 10 })

const primary: DefaultTheme = {
  colors: {
    white: '#FFFFFF',
    green: '#4AA658',
    orange: '#DE9D3B',

    black: {
      primary: '#272727',
      secondary: '#292A2D',
    },

    blue: {
      primary: '#3165D4',
      secondary: '#001135',
      tertiary: '#F5F8FF',
    },

    grey: {
      primary: '#ECECEC',
      secondary: '#878787',
      tertiary: '#B9B9B9',
      quaternary: '#FBFBFB',
      quinary: `#F6F6F6`,
      senary: '#E8E8E8',
    },
  },

  spaces: {
    xxs: spacing(1), //10px
    xs: spacing(2), //20px
    sm: spacing(3), //30px
    md: spacing(4), //40px
    lg: spacing(5), //50px
    xl: spacing(6), //60px
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
        mobile: '14px',
        desktop: '14px',
      },
      sm: {
        mobile: '16px',
        desktop: '16px',
      },
      md: {
        mobile: '20px',
        desktop: '24px',
      },
      md2: {
        mobile: '20px',
        tablet: '24px',
        desktop: '28px',
      },
      lg: {
        mobile: '22px',
        desktop: '32px',
      },
      xl: {
        mobile: '26px',
        desktop: '36px',
      },
      xxl: {
        mobile: '40px',
        tablet: '48px',
        desktop: '64px',
      },
    },

    primary: {
      family: '"Source Sans Pro", sans-serif',
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
        bg: '#4C74C9',
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
