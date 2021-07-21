import { css } from 'styled-components'

const FontColor = (bg: string): any => {
  switch (bg) {
    case 'grey':
      return css`
        color: ${(props) => props.theme.colors.grey.primary};
      `
    case 'trans':
      return css`
        color: inherent;
      `
    case 'greyQuin':
      return css`
        color: ${(props) => props.theme.colors.grey.quinary};
      `
    case `white`:
      return css`
        color: ${(props) => props.theme.colors.white};
      `
    case 'blue':
      return css`
        color: ${(props) => props.theme.colors.blue.primary};
      `
    case 'black':
      return css`
        color: ${(props) => props.theme.colors.black.primary};
      `
    default:
      return css`
        color: ${bg};
      `
  }
}

export default FontColor
