import React from 'react'
import styled from 'styled-components'
import { media } from 'styled-bootstrap-grid'
import { bgColor } from '@/styles/helpers'

const StyledCard = styled.div<any>`
  ${(props) => bgColor(props.bGcolor)}
  border-radius: 8px;
  padding: 100px 30px;
  justify-content: space-between;
  align-items: center;
  display: flex;
  flex-direction: column;

  box-shadow: 0 0 13px -10px rgb(0 0 0 / 13%);
  ${(props: any) => props.large && `height: 520px;`}
  ${media.tablet`
    border-radius: 20px;
    ${(props: any) => (props.span ? `` : 'max-width: 400px;')}
    
    min-height: 480px;
    padding: 100px 60px;
    min-width: 342px;
    ${(props: any) => props?.tabletStyles}
  `}

  ${media.desktop`
    min-width: 490px;
    max-width: none;
    ${(props: any) => props?.desktopStyles}
    height: ${(props: any) => (props.large && '750px') || '480px'};
    
  `}
  ${media.giant`
    ${(props: any) => props?.giantStyles}
  `}
  ${(props: any) =>
    props.span ? `grid-column: span ${props.span};` : 'max-width: 390px;'}
  ${(props: any) => props?.styles}
`

export interface CardProps {
  span?: number
  bgColor?: string
  children: React.ReactNode
  styles?: string
  tabletStyles?: string
  desktopStyles?: string
  giantStyles?: string
  large?: boolean
}

const Card = ({
  bgColor = 'white',
  span,
  children,
  styles,
  tabletStyles,
  desktopStyles,
  giantStyles,
  large,
}: CardProps) => {
  return (
    <StyledCard
      bGcolor={bgColor}
      span={span}
      styles={styles}
      tabletStyles={tabletStyles}
      desktopStyles={desktopStyles}
      giantStyles={giantStyles}
      large={large}
    >
      {children}
    </StyledCard>
  )
}

export default Card
