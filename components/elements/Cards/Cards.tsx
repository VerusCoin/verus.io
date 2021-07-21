import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { media } from 'styled-bootstrap-grid'
import { bgColor } from '@/styles/helpers'

const StyledCard = styled.div<any>`
  ${bgColor('white')}
  border-radius: 20px;
  padding: 100px 60px;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;

  box-shadow: 0 0 13px -10px rgb(0 0 0 / 13%);
  ${media.tablet`
  min-height: 480px;
  `}
  ${(props) => props.span && `grid-column: span ${props.span}`};
`

const Cards: React.FC<{ children: ReactNode; span: number }> = ({
  span,
  children,
}) => {
  return <StyledCard span={span}>{children}</StyledCard>
}

export default Cards
