import React from 'react'
import styled from 'styled-components'
import { media } from 'styled-bootstrap-grid'
import { bgColor } from '@/styles/helpers'

const StyledNetworkCard = styled.div`
  ${bgColor('white')}
  border-radius: 8px;
  padding: 0;
  justify-content: space-between;
  align-items: center;
  display: flex;
  flex-direction: column;

  box-shadow: 0 0 13px -10px rgb(0 0 0 / 13%);

  grid-column: span 2;
  height: 520px;
  div.checkmark-image {
    margin: 0;
    overflow: hidden;
    img {
      height: 196px;
      position: relative;
      top: -47px;
    }
  }
  div.card {
    text-align: center;
    justify-content: space-between;
    align-items: center;
    margin: 0 23px;
    button {
      margin-top: 90px;
    }
  }
  ${media.tablet`
    border-radius: 20px;
    padding: 100px 50px 100px 0 ;
    flex-direction: row;
  
    div.checkmark-image {
      overflow: hidden;
      img {
        height: 337px;
        top: 0;
        left: -35px;
      }
    }
    div.card{
      margin: 0;
      width: 600px;
      margin-top: 60px;
    }
  `}
  ${media.desktop`
    height: 750px;
    div.checkmark-image {
      img{
        height: 478px;
        left: -62px;
      }
    }
     
  `}
`

const NetworkCard = ({ children }: { children: React.ReactNode }) => {
  return <StyledNetworkCard>{children}</StyledNetworkCard>
}

export default NetworkCard
