import React from 'react'
import styled from 'styled-components'
import { media } from 'styled-bootstrap-grid'
import { bgColor } from '@/styles/helpers'

const StyledLiquidityCard = styled.div`
  ${bgColor('white')}
  border-radius: 20px;
  padding: 0 0 41px;
  justify-content: space-between;
  align-items: center;
  display: flex;
  flex-direction: column-reverse;
  height: 520px;
  box-shadow: 0 0 13px -10px rgb(0 0 0 / 13%);
  grid-column: span 2;
  div.liquidity-image {
    overflow: hidden;
    img {
      position: relative;
      top: -15px;

      height: 129px;
    }
  }
  div.card {
    text-align: center;
    justify-content: space-between;
    align-items: center;
  }

  ${media.tablet`
    padding: 115px 0 61px 77px;
    flex-direction: row;
    
    div.liquidity-image{
      height: fit-content;
      overflow: hidden;
      img{
        
        top:0;  
        height:188px;
        right: -20px;
      }
    }
    
    
    
  `}
  ${media.desktop`
    height: 750px;
    padding: 157px 0 127px 99px;
    div.liquidity-image{
      img{
        height:321px;
        right: -35px;
      }
    }
    
  `}
`

const LiquidityCard = ({ children }: { children: React.ReactNode }) => {
  return <StyledLiquidityCard>{children}</StyledLiquidityCard>
}

export default LiquidityCard
