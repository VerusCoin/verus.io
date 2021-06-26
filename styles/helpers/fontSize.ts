import { css } from 'styled-components'
import { media } from 'styled-bootstrap-grid'

const fontSize = (
  bp: 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs' | 'menu' | 'menuXs' | 'button'
): any => {
  switch (bp) {
    case 'xs':
      return css`
        font-size: ${(props: any) => props.theme.typo.sizes.xs.desktop};
      `

    case 'sm':
      return css`
        font-size: ${(props: any) => props.theme.typo.sizes.sm.mobile};
        line-height: ${(props: any) => props.theme.typo.lineHeight.sm.mobile};

        ${media.tablet`
          font-size: ${(props: any) => props.theme.typo.sizes.sm.tablet};
          line-height: ${(props: any) => props.theme.typo.lineHeight.sm.tablet};
        `}

        ${media.desktop`
          font-size: ${(props: any) => props.theme.typo.sizes.sm.desktop};
          line-height: ${(props: any) =>
            props.theme.typo.lineHeight.sm.desktop};
        `}
      `

    case 'md':
      return css`
        font-size: ${(props: any) => props.theme.typo.sizes.md.mobile};
        line-height: ${(props: any) => props.theme.typo.lineHeight.md.mobile};

        ${media.tablet`
          font-size: ${(props: any) => props.theme.typo.sizes.md.tablet};
          line-height: ${(props: any) => props.theme.typo.lineHeight.md.tablet};
        `}

        ${media.desktop`
        font-size: ${(props: any) => props.theme.typo.sizes.md.desktop};
        line-height: ${(props: any) => props.theme.typo.lineHeight.md.desktop};
      `}
      `

    case 'lg':
      return css`
        font-size: ${(props: any) => props.theme.typo.sizes.lg.mobile};
        line-height: ${(props: any) => props.theme.typo.lineHeight.lg.mobile};

        ${media.tablet`
          font-size: ${(props: any) => props.theme.typo.sizes.lg.tablet};
          line-height: ${(props: any) => props.theme.typo.lineHeight.lg.tablet};
        `}

        ${media.desktop`
          font-size: ${(props: any) => props.theme.typo.sizes.lg.desktop};
          line-height: ${(props: any) =>
            props.theme.typo.lineHeight.lg.desktop};
        `}
      `

    case 'xl':
      return css`
        font-size: ${(props: any) => props.theme.typo.sizes.xl.mobile};
        line-height: ${(props: any) => props.theme.typo.lineHeight.xl.mobile};
        letter-spacing: ${(props: any) =>
          props.theme.typo.letterSpacing.xl.mobile};

        ${media.tablet`
          font-size: ${(props: any) => props.theme.typo.sizes.xl.tablet};
          line-height: ${(props: any) => props.theme.typo.lineHeight.xl.tablet};
          letter-spacing: ${(props: any) =>
            props.theme.typo.letterSpacing.xl.tablet};
        `}

        ${media.desktop`
          font-size: ${(props: any) => props.theme.typo.sizes.xl.desktop};
          line-height: ${(props: any) =>
            props.theme.typo.lineHeight.xl.desktop};
          letter-spacing: ${(props: any) =>
            props.theme.typo.letterSpacing.xl.desktop};
        `}
      `

    case 'xxl':
      return css`
        font-size: ${(props: any) => props.theme.typo.sizes.xxl.mobile};
        line-height: ${(props: any) => props.theme.typo.lineHeight.xxl.mobile};
        letter-spacing: ${(props: any) =>
          props.theme.typo.letterSpacing.xxl.mobile};

        ${media.tablet`
          font-size: ${(props: any) => props.theme.typo.sizes.xxl.tablet};
          line-height: ${(props: any) =>
            props.theme.typo.lineHeight.xxl.tablet};
          letter-spacing: ${(props: any) =>
            props.theme.typo.letterSpacing.xxl.tablet};
        `}

        ${media.desktop`
          font-size: ${(props: any) => props.theme.typo.sizes.xxl.desktop};
          line-height: ${(props: any) =>
            props.theme.typo.lineHeight.xxl.desktop};
          letter-spacing: ${(props: any) =>
            props.theme.typo.letterSpacing.xxl.desktop};
        `}
      `

    case 'button':
      return css`
        font-size: ${(props: any) => props.theme.typo.sizes.button.mobile};

        ${media.tablet`
          font-size: ${(props: any) => props.theme.typo.sizes.button.tablet};
        `}

        ${media.desktop`
          font-size: ${(props: any) => props.theme.typo.sizes.button.desktop};
        `}
      `

    case 'menu':
      return css`
        font-size: ${(props: any) => props.theme.typo.sizes.menu.desktop};
      `

    case 'menuXs':
      return css`
        font-size: ${(props: any) => props.theme.typo.sizes.menuXs.desktop};
      `
  }
}

export default fontSize
