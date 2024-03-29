import { css } from 'styled-components'

const bgColor = (bg: string): any => {
  switch (bg) {
    case 'grey':
      return css`
        background-color: ${(props) => props.theme.colors.grey.primary};
      `
    case 'trans':
      return css`
        background-color: inherent;
      `
    case 'greyQuin':
      return css`
        background-color: ${(props) => props.theme.colors.grey.quinary};
      `
    case 'grey97':
      return css`
        background-color: #979797;
      `
    case `white`:
      return css`
        background-color: ${(props) => props.theme.colors.white};
      `
    case 'blue':
      return css`
        background-color: ${(props) => props.theme.colors.blue.primary};
        color: ${(props) => props.theme.colors.white};
      `
    case 'blueQuin':
      return css`
        background-color: ${(props) => props.theme.colors.blue.quaternary};
      `
    case 'blueQuan':
      return css`
        background-color: ${(props) => props.theme.colors.blue.quinary};
      `
    case 'blackTer':
      return css`
        background-color: ${(props) => props.theme.colors.black.tertiary};
      `
    default:
      return css`
        background-color: ${bg};
      `
  }
}

export default bgColor
