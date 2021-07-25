import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      white: string
      green: string
      orange: string
      black: {
        primary: string
        secondary: string
        tertiary: string
      }

      blue: {
        primary: string
        secondary: string
        tertiary: string
        quaternary: string
        quinary: string
      }

      grey: {
        primary: string
        secondary: string
        tertiary: string
        quaternary: string
        quinary: string
        senary: string
        sectary: string
      }
    }

    spaces: {
      xxs: string
      xs: string
      sm: string
      md: string
      lg: string
      xl: string
      xxl: string

      custom: {
        mobileMenu: string
        desktopMenu: string
        narrowSection: string
        gutter: string
      }
    }

    borders: {
      sm: string
      md: string
    }

    transitions: {
      regular: string
      fast: string
    }

    typo: {
      sizes: {
        xs: {
          desktop: string
        }
        menuXs: {
          desktop: string
        }
        menu: {
          desktop: string
        }
        button: {
          mobile: string
          tablet: string
          desktop: string
        }
        sm: {
          mobile: string
          tablet: string
          desktop: string
        }
        md: {
          mobile: string
          tablet: string
          desktop: string
        }
        mdlg: {
          mobile: string
          desktop: string
        }
        lg: {
          mobile: string
          tablet: string
          desktop: string
        }
        xl: {
          mobile: string
          tablet: string
          desktop: string
        }
        xxl: {
          mobile: string
          tablet: string
          desktop: string
        }
      }
      lineHeight: {
        xs: {
          desktop: string
        }
        sm: {
          mobile: string
          tablet: string
          desktop: string
        }
        md: {
          mobile: string
          tablet: string
          desktop: string
        }
        mdlg: {
          mobile: string
          desktop: string
        }
        lg: {
          mobile: string
          tablet: string
          desktop: string
        }
        xl: {
          mobile: string
          tablet: string
          desktop: string
        }
        xxl: {
          mobile: string
          tablet: string
          desktop: string
        }
      }
      letterSpacing: {
        xl: {
          mobile: string
          tablet: string
          desktop: string
        }
        xxl: {
          mobile: string
          tablet: string
          desktop: string
        }
      }

      primary: {
        family: string
        weight: {
          normal: number
          bold: number
        }
      }

      secondary: {
        family: string
        weight: {
          normal: number
          bold: number
        }
      }

      header: {
        family: string
        weight: {
          normal: number
          bold: number
        }
      }
    }

    buttons: {
      primary: {
        text: string
        bg: string
        radius: string

        hover: {
          bg: string
        }
      }

      secondary: {
        text: string
        bg: string
        radius: string

        hover: {
          bg: string
          text: string
        }
      }
    }
  }
}
