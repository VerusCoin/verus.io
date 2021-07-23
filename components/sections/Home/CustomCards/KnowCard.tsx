import React from 'react'
import styled from 'styled-components'
import { media } from 'styled-bootstrap-grid'
import { bgColor } from '@/styles/helpers'

const StyledKnowCards = styled.div`
  ${bgColor('#03102C')}
  border-radius: 20px;
  padding: 100px;
  justify-content: space-between;
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 275px;
  box-shadow: 0 0 13px -10px rgb(0 0 0 / 13%);
  ${media.tablet`
    min-height: 480px;
  `}
  >p {
    opacity: 58%;
    margin-top: 0;
  }
`

const KnowCards: React.FC<
  React.PropsWithChildren<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >
  >
> = ({ children }) => {
  return <StyledKnowCards>{children}</StyledKnowCards>
}

export default KnowCards
