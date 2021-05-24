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
      }

      blue: {
        primary: string
        secondary: string
        tertiary: string
      }

      grey: {
        primary: string
        secondary: string
        tertiary: string
        quaternary: string
        quinary: string
        senary: string
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
          mobile: string
          desktop: string
        }
        sm: {
          mobile: string
          desktop: string
        }
        md: {
          mobile: string
          desktop: string
        }
        lg: {
          mobile: string
          desktop: string
        }
        xl: {
          mobile: string
          desktop: string
        }
        xxl: {
          mobile: string
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
