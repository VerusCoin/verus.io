import { css } from 'styled-components'

const bgColor = (bg: 'grey' | 'trans'): any => {
  switch (bg) {
    case 'grey':
      return css`
        background-color: ${(props) => props.theme.colors.grey.quinary};
      `
    case 'trans':
      return css`
        background-color: inherent;
      `
    default:
      return css`
        background-color: ${(props) => props.theme.colors.blue.primary};
      `
  }
}

export default bgColor
