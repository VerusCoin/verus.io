import React from 'react'
import styled from 'styled-components'
import { media } from 'styled-bootstrap-grid'
import { bgColor } from '@/styles/helpers'

const StyledDigitalCard = styled.div`
  ${bgColor('white')}
  border-radius: 20px;
  padding: 40px 0 100px;
  justify-content: space-evenly;
  align-items: center;
  display: flex;
  flex-direction: column-reverse;
  min-height: 275px;
  box-shadow: 0 0 13px -10px rgb(0 0 0 / 13%);

  grid-column: span 2;
  div.identity-image {
    margin: 36px 0;
  }
  > div:not(.identity-image) {
    padding: 0;
  }
  ${media.tablet`
  padding: 100px 0 100px 50px ;
    flex-direction: row;
    min-height: 480px;
    div.identity-image {
      overflow: hidden;
      img {
        height: 390px;
        position: relative;
        right: -185px;
      } 
    }
    > div { 
      width: 600px;
    }
    
    
  `}
`

const DigitalCard = ({ children }: { children: React.ReactNode }) => {
  return <StyledDigitalCard>{children}</StyledDigitalCard>
}

export default DigitalCard
