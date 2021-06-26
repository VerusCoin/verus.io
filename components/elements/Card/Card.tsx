import React from 'react'
import styled from 'styled-components'

import { bgColor } from '@/styles/helpers'

const StyledCard = styled.div<any>`
  ${(props: any) => bgColor(props.bGcolor)}
  border-radius: 20px;
  padding: ${(props) => props.theme.spaces.sm};
  ${(props) =>
    (props.justify && 'justify-content: center') || 'justify-content: start'};
  align-items: center;
  display: flex;
  flex-direction: column;
  height: ${(props) => props.height || '100%'};
  box-shadow: 0 0 13px -10px rgb(0 0 0 / 13%);
  ${(props: any) =>
    props.bgImage &&
    `background-image:url(${props.bgImage}); background-position: 50% 50%; background-repeat: no-repeat; background-size: cover;`}
  ${(props) => props.span && `grid-column: span ${props.span};`} ${(props) =>
    props.marginB && `margin-bottom: ${props.marginB}px;`};

  ${(props) =>
    (props.padding && `padding: ${props.padding}`) || 'padding: 100px 60px'};
  ${(props: any) => props.pLeft && `padding-left: ${props.pLeft}px`};
  ${(props: any) => props.pRight && `padding-right: ${props.pRight}px`};
  ${(props: any) => props.pTop && `padding-top: ${props.pTop}px`};
`

interface ICard {
  children?: React.ReactNode
  bGcolor?: string
  bgImage?: string
  span?: number
  height?: string
  padding?: string
  pRight?: number
  pLeft?: number
  pTop?: number
  justify?: boolean
}

const Card: React.FC<ICard> = ({
  bGcolor = '#04205c',
  bgImage,
  span,
  height,
  padding,
  pRight,
  pLeft,
  pTop,
  justify = true,
  children,
}) => {
  return (
    <StyledCard
      bGcolor={bGcolor}
      bgImage={bgImage}
      span={span}
      height={height}
      padding={padding}
      pRight={pRight}
      pLeft={pLeft}
      pTop={pTop}
      justify={justify}
    >
      {children}
    </StyledCard>
  )
}

export default Card
