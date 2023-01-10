import { css } from 'styled-components'
import { media } from 'styled-bootstrap-grid'

const fontSize = (
  bp:
    | 'xxxl'
    | 'xxl'
    | 'xl'
    | 'lg'
    | 'mdlg'
    | 'modal'
    | 'md'
    | 'sm'
    | 'xs'
    | 'xxs'
    | 'menu'
    | 'menuXs'
    | 'button'
): any => {
  switch (bp) {
    case 'xxs':
      return css`
        font-size: 12px;

        ${media.tablet`
          font-size: ${(props: any) => props.theme.typo.sizes.xs.desktop};
        `}
      `
    case 'xs':
      return css`
        font-size: ${(props: any) => props.theme.typo.sizes.xs.desktop};
        line-height: ${(props: any) =>
          `calc(${props.theme.typo.sizes.xs.desktop} + 4px)`};
      `

    case 'sm':
      return css`
        font-size: ${(props: any) => props.theme.typo.sizes.sm.mobile};
        line-height: ${(props: any) =>
          `calc(${props.theme.typo.sizes.sm.mobile} + 4px)`};

        ${media.tablet`
          font-size: ${(props: any) => props.theme.typo.sizes.sm.tablet};
          line-height: ${(props: any) =>
            `calc(${props.theme.typo.sizes.sm.tablet} + 4px)`};
        `}

        ${media.desktop`
          font-size: ${(props: any) => props.theme.typo.sizes.sm.desktop};
          line-height: ${(props: any) =>
            `calc(${props.theme.typo.sizes.sm.desktop} + 4px)`};
        `}
      `

    case 'md':
      return css`
        font-size: ${(props: any) => props.theme.typo.sizes.md.mobile};
        line-height: ${(props: any) =>
          `calc(${props.theme.typo.sizes.md.mobile} + 4px)`};

        ${media.tablet`
          font-size: ${(props: any) => props.theme.typo.sizes.md.tablet};
          line-height: ${(props: any) =>
            `calc(${props.theme.typo.sizes.md.tablet} + 4px)`};
        `}

        ${media.desktop`
        font-size: ${(props: any) => props.theme.typo.sizes.md.desktop};
        line-height: ${(props: any) =>
          `calc(${props.theme.typo.sizes.md.desktop} + 4px)`};
      `}
      `
    case 'mdlg':
      return css`
        font-size: ${(props: any) => props.theme.typo.sizes.mdlg.mobile};
        line-height: ${(props: any) =>
          `calc(${props.theme.typo.sizes.mdlg.mobile} + 4px)`};

        ${media.desktop`
          font-size: ${(props: any) => props.theme.typo.sizes.mdlg.desktop};
          line-height: ${(props: any) =>
            `calc(${props.theme.typo.sizes.mdlg.desktop} + 4px)`};
        `}
      `
    case 'modal':
      return css`
        font-size: ${(props: any) => props.theme.typo.sizes.modal.mobile};
        line-height: ${(props: any) =>
          `calc(${props.theme.typo.sizes.modal.mobile} + 4px)`};

        ${media.desktop`
        font-size: ${(props: any) => props.theme.typo.sizes.modal.desktop};
        line-height: ${(props: any) =>
          `calc(${props.theme.typo.sizes.modal.desktop} + 4px)`};
        `}
      `
    case 'lg':
      return css`
        font-size: ${(props: any) => props.theme.typo.sizes.lg.mobile};
        line-height: ${(props: any) =>
          `calc(${props.theme.typo.sizes.lg.mobile} + 4px)`};

        ${media.tablet`
          font-size: ${(props: any) => props.theme.typo.sizes.lg.tablet};
          line-height: ${(props: any) =>
            `calc(${props.theme.typo.sizes.lg.tablet} + 4px)`};
        `}

        ${media.desktop`
          font-size: ${(props: any) => props.theme.typo.sizes.lg.desktop};
          line-height: ${(props: any) =>
            `calc(${props.theme.typo.sizes.lg.desktop} + 4px)`};
        `}
      `

    case 'xl':
      return css`
        font-size: ${(props: any) => props.theme.typo.sizes.xl.mobile};
        line-height: ${(props: any) =>
          `calc(${props.theme.typo.sizes.xl.mobile} + 4px)`};
        letter-spacing: ${(props: any) =>
          props.theme.typo.letterSpacing.xl.mobile};

        ${media.tablet`
          font-size: ${(props: any) => props.theme.typo.sizes.xl.tablet};
          line-height: ${(props: any) =>
            `calc(${props.theme.typo.sizes.xl.tablet} + 4px)`};
          letter-spacing: ${(props: any) =>
            props.theme.typo.letterSpacing.xl.tablet};
        `}

        ${media.desktop`
          font-size: ${(props: any) => props.theme.typo.sizes.xl.desktop};
          line-height: ${(props: any) =>
            `calc(${props.theme.typo.sizes.xl.desktop} + 4px)`};
          letter-spacing: ${(props: any) =>
            props.theme.typo.letterSpacing.xl.desktop};
        `}
      `

    case 'xxl':
      return css`
        font-size: ${(props: any) => props.theme.typo.sizes.xxl.mobile};
        line-height: ${(props: any) =>
          `calc(${props.theme.typo.sizes.xxl.mobile} + 4px)`};
        letter-spacing: ${(props: any) =>
          props.theme.typo.letterSpacing.xxl.mobile};

        ${media.tablet`
          font-size: ${(props: any) => props.theme.typo.sizes.xxl.tablet};
          line-height: ${(props: any) =>
            `calc(${props.theme.typo.sizes.xxl.tablet} + 4px)`};
          letter-spacing: ${(props: any) =>
            props.theme.typo.letterSpacing.xxl.tablet};
        `}

        ${media.desktop`
          font-size: ${(props: any) => props.theme.typo.sizes.xxl.desktop};
          line-height: ${(props: any) =>
            `calc(${props.theme.typo.sizes.xxl.desktop} + 4px)`};
          letter-spacing: ${(props: any) =>
            props.theme.typo.letterSpacing.xxl.desktop};
        `}
      `
    case 'xxxl':
      return css`
        font-size: calc(
          ${(props: any) => props.theme.typo.sizes.xxl.mobile} + 18px
        );
        line-height: ${(props: any) =>
          `calc(${props.theme.typo.sizes.xxl.mobile} + 4px + 18px)`};
        letter-spacing: ${(props: any) =>
          props.theme.typo.letterSpacing.xxl.mobile};

        ${media.tablet`
          font-size: calc(${(props: any) =>
            props.theme.typo.sizes.xxl.tablet} + 18px);
          line-height: ${(props: any) =>
            `calc(${props.theme.typo.sizes.xxl.tablet} + 4px + 18px)`};
          letter-spacing: ${(props: any) =>
            props.theme.typo.letterSpacing.xxl.tablet};
        `}

        ${media.desktop`
          font-size: calc(${(props: any) =>
            props.theme.typo.sizes.xxl.desktop} + 18px);
          line-height: ${(props: any) =>
            `calc(${props.theme.typo.sizes.xxl.desktop} + 4px + 18px)`};
          letter-spacing: ${(props: any) =>
            `calc(${props.theme.typo.letterSpacing.xxl.desktop} - 1.6px)`};
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
