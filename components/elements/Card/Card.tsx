import React from 'react'
import styled from 'styled-components'
import { media } from 'styled-bootstrap-grid'
import { bgColor } from '@/styles/helpers'

const StyledCard = styled.div<any>`
  ${(props) => bgColor(props.bGcolor)}
  border-radius: 20px;
  padding: 100px 30px;
  justify-content: space-between;
  align-items: center;
  display: flex;
  flex-direction: column;

  box-shadow: 0 0 13px -10px rgb(0 0 0 / 13%);
  ${media.tablet`
    min-height: 480px;
    padding: 100px 60px;
    min-width: 342px;
  `}

  ${media.desktop`
    min-width: 490px;
  `}
  ${(props) => props.span && `grid-column: span ${props.span}`};
`

export interface CardProps {
  span?: number
  bgColor?: string
  children: React.ReactNode
}

const Card = ({ bgColor = 'white', span, children }: CardProps) => {
  return (
    <StyledCard bGcolor={bgColor} span={span}>
      {children}
    </StyledCard>
  )
}

export default Card
