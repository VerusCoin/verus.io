import React from 'react'
import styled from 'styled-components'
import { media } from 'styled-bootstrap-grid'
import { bgColor } from '@/styles/helpers'

const StyledDigitalCard = styled.div`
  ${bgColor('white')}
  border-radius: 8px;
  padding: 0 0 41px;
  justify-content: space-between;
  align-items: center;
  display: flex;
  flex-direction: column-reverse;
  height: 520px;
  box-shadow: 0 0 13px -10px rgb(0 0 0 / 13%);
  grid-column: span 2;
  div.identity-image {
    margin: 36px 0 0;
  }
  div.card {
    text-align: center;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  ${media.tablet`
    border-radius: 20px;
    padding: 100px 0 100px 50px ;
    flex-direction: row;
    overflow: hidden;
    div.identity-image {
      
      img {
        height: 393px;
        position: relative;
        right: -90px;
        
      } 
    }
    div.card {
      width: 600px;
    }
    
  `}
  ${media.desktop`
    height: 750px;
    padding: 169px 0 124px 99px;
    div.identity-image {
      img {
        
        right: -115px;
      } 
    }
  `}
  ${media.giant`
  div.identity-image {
    img {
      
      right: -135px;
    } 
  }
  `}
`

const DigitalCard = ({ children }: { children: React.ReactNode }) => {
  return <StyledDigitalCard>{children}</StyledDigitalCard>
}

export default DigitalCard
