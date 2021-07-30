import React from 'react'
import styled from 'styled-components'
import { media } from 'styled-bootstrap-grid'
import { bgColor } from '@/styles/helpers'

const StyledNetworkCard = styled.div`
  ${bgColor('white')}
  border-radius: 20px;
  padding: 0 0 100px;
  justify-content: space-between;
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 275px;
  box-shadow: 0 0 13px -10px rgb(0 0 0 / 13%);
  transition: all 1s linear;
  grid-column: span 2;

  div.checkmark-image {
    margin: 0;
    overflow: hidden;
    img {
      height: 163px;
      position: relative;
      top: -39px;
    }
  }
  div:not(.checkmark-image) {
    padding: 0;
  }
  ${media.tablet`
    padding: 100px 50px 100px 0 ;
    flex-direction: row;
    min-height: 480px;
  
    div.checkmark-image {
      overflow: hidden;
      img {
        height: 440px;
        top: 0;
        left: -56px;
      }
    }
    > div:not(.checkmark-image){
      width: 600px;
      justify-content: space-evenly;
      
    }
  `}
`

const NetworkCard = ({ children }: { children: React.ReactNode }) => {
  return <StyledNetworkCard>{children}</StyledNetworkCard>
}

export default NetworkCard
