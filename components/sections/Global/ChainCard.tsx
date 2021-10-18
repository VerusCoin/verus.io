import React from 'react'
import styled from 'styled-components'
import { media } from 'styled-bootstrap-grid'
import { bgColor } from '@/styles/helpers'

const StyledChainCard = styled.div`
  ${bgColor('white')}
  border-radius: 8px;
  padding: 0 0 100px;
  justify-content: space-between;
  align-items: center;
  display: flex;
  flex-direction: column-reverse;

  box-shadow: 0 0 13px -10px rgb(0 0 0 / 13%);

  grid-column: span 2;
  height: 520px;
  div.image {
    overflow: hidden;
    width: 280px;
    height: 120px;
    svg {
      height: 250px;
      transform: rotate(270deg);
      position: relative;
      top: -110px;
      left: 31px;
    }
  }
  div.card {
    text-align: center;
    justify-content: space-between;
    align-items: center;
    margin: 0 23px;
    width: 300px;
  }
  ${media.tablet`
    border-radius: 20px;
    padding: 0  0 0 66px ;
    flex-direction: row;
    
    div.image {
      overflow: hidden;
      width: unset;
      height: 520px;
      svg {
        height: 550px;
        
        left: 25px;
        top: -11px;
        transform: rotate(0deg);
      }
    }
    div.card{
      width: 500px;
      
    }
  `}
  ${media.desktop`
    padding: 0  0 0 100px ;
    height: 750px;
    
    div.image{
     height: 750px;
     
     svg {
        height: 790px;
        top: -15px;
        left: 30px;
      }
    }
    div.card{
      width: 600px;
      
    }
  `}
  ${media.giant`
    div.image{
    height: 750px;
    
    svg {
    
       top: -15px;
       left: 100px;
     }
   }
  `}
`

const ChainCard = ({ children }: { children: React.ReactNode }) => {
  return <StyledChainCard>{children}</StyledChainCard>
}

export default ChainCard
