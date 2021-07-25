import React from 'react'
import styled from 'styled-components'
import { media } from 'styled-bootstrap-grid'
import { bgColor } from '@/styles/helpers'

const StyledLiquidityCard = styled.div`
  ${bgColor('white')}
  border-radius: 20px;
  padding: 0 0 100px;
  justify-content: space-evenly;
  align-items: center;
  display: flex;
  flex-direction: column-reverse;
  min-height: 275px;
  box-shadow: 0 0 13px -10px rgb(0 0 0 / 13%);
  grid-column: span 2;
  div.liquidity-image {
    overflow: hidden;
    img {
      position: relative;
      top: -27px;

      width: 77px;
    }
  }
  > div:not(.liquidity-image) {
    padding: 0;
  }

  ${media.tablet`
    padding: 0;
    flex-direction: row;
    min-height: 480px;
    div.liquidity-image{
      height: fit-content;
      overflow: hidden;
      img{
        position: unset;
        top:0;
        width: auto;
        height:257px;
      }
    }
    > div:not(.liquidity-image){
      padding: 100px 0 100px 30px;
    }
  `}
`

const LiquidityCard = ({ children }: { children: React.ReactNode }) => {
  return <StyledLiquidityCard>{children}</StyledLiquidityCard>
}

export default LiquidityCard
