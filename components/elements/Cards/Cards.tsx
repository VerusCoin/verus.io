import React from 'react'
import styled from 'styled-components'
import { media } from 'styled-bootstrap-grid'
import { bgColor } from '@/styles/helpers'

const StyledCard = styled.div<any>`
  ${(props) => bgColor(props.bGcolor)}
  border-radius: 20px;
  padding: 100px 30px;
  justify-content: space-evenly;
  align-items: center;
  display: flex;
  flex-direction: column;

  box-shadow: 0 0 13px -10px rgb(0 0 0 / 13%);
  ${media.tablet`
  min-height: 480px;
  padding: 100px 60px;
  `}
  ${(props) => props.span && `grid-column: span ${props.span}`};
`

const Cards: React.FC<
  React.PropsWithChildren<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    > & { span?: number; bgColor?: string }
  >
> = ({ bgColor = 'white', span, children }) => {
  return (
    <StyledCard bGcolor={bgColor} span={span}>
      {children}
    </StyledCard>
  )
}

export default Cards
