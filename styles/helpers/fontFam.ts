import { css } from 'styled-components'

const FontFam = (fam: string): any => {
  switch (fam) {
    case 'geoBold':
      return css`
        font-family: 'Geomanist Bold', sans-serif;
      `
    case 'geoHead':
      return css`
        font-family: ${(props) => props.theme.typo.header.family};
      `
    case 'geoReg':
      return css`
        font-family: ${(props) => props.theme.typo.primary.family};
      `

    default:
      return css`
        font-family: ${(props) => props.theme.typo.primary.family};
      `
  }
}

export default FontFam
