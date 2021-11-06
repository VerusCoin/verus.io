import { css } from 'styled-components'

// const FontFam = (fam: string): any => {
//   switch (fam) {
//     case 'geoHead':
//       return css`
//         font-family: ${(props) => props.theme.typo.header.family};
//       `
//     case 'geoReg':
//       return css`
//         font-family: ${(props) => props.theme.typo.primary.family};
//       `

//     default:
//       return css`
//         font-family: ${(props) => props.theme.typo.primary.family};
//       `
//   }
// }

// export default FontFam
const spinner = () => {
  return css`
    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  `
}

export default spinner
