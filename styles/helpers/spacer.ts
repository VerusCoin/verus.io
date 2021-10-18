import { css } from 'styled-components'
import { media } from 'styled-bootstrap-grid'

const spacer = (variant: 'xxl' | 'xl'): any => {
  if (variant === 'xxl')
    return css`
      margin-bottom: ${(props: any) => props.theme.spaces.xl};

      ${media.desktop`
        margin-bottom: ${(props: any) => props.theme.spaces.xxl};
      `}
    `
  if (variant === 'xl')
    return css`
      margin-bottom: ${(props: any) => props.theme.spaces.lg};
      ${media.desktop`
        margin-bottom: ${(props: any) => props.theme.spaces.xl};
      `}
    `
}

export default spacer
