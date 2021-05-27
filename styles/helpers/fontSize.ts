import { css } from 'styled-components'
import { media } from 'styled-bootstrap-grid'

const fontSize = (
  bp: 'xxl' | 'xl' | 'lg' | 'md2' | 'md' | 'sm' | 'xs'
): any => {
  switch (bp) {
    case 'xs':
      return css`
        font-size: ${(props) => props.theme.typo.sizes.xs.mobile};

        ${media.desktop`
        font-size: ${(props: any) => props.theme.typo.sizes.xs.desktop};
      `}
      `

    case 'sm':
      return css`
        font-size: ${(props) => props.theme.typo.sizes.sm.mobile};

        ${media.desktop`
        font-size: ${(props: any) => props.theme.typo.sizes.sm.desktop};
      `}
      `

    case 'md':
      return css`
        font-size: ${(props) => props.theme.typo.sizes.md.mobile};

        ${media.desktop`
        font-size: ${(props: any) => props.theme.typo.sizes.md.desktop};
      `}
      `
    case 'md2':
      return css`
        font-size: ${(props) => props.theme.typo.sizes.md2.mobile};
        ${media.tablet`
          font-size: ${(props: any) => props.theme.typo.sizes.md2.tablet};
          `}
        ${media.desktop`
          font-size: ${(props: any) => props.theme.typo.sizes.md2.desktop};
        `}
      `

    case 'lg':
      return css`
        font-size: ${(props) => props.theme.typo.sizes.lg.mobile};

        ${media.desktop`
        font-size: ${(props: any) => props.theme.typo.sizes.lg.desktop};
      `}
      `

    case 'xl':
      return css`
        font-size: ${(props) => props.theme.typo.sizes.xl.mobile};

        ${media.desktop`
        font-size: ${(props: any) => props.theme.typo.sizes.xl.desktop};
      `}
      `

    case 'xxl':
      return css`
        font-size: ${(props) => props.theme.typo.sizes.xxl.mobile};
        ${media.tablet`
        font-size: ${(props: any) => props.theme.typo.sizes.xxl.tablet};
        `}
        ${media.desktop`
        font-size: ${(props: any) => props.theme.typo.sizes.xxl.desktop};
      `}
      `
  }
}

export default fontSize
