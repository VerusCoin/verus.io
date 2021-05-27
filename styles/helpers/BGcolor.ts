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
    case 'white':
      return css`
        background-color: ${(props) => props.theme.colors.grey.quinary};
      `
    case 'blue':
      return css`
        background-color: ${(props) => props.theme.colors.blue.primary};
      `
    default:
      return css`
        background-color: ${bg};
      `
  }
}

export default bgColor
