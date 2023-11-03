import React from 'react'
import { IExchanges, IExchange } from '@/types/exchanges'

import styled from 'styled-components'
import { media } from 'styled-bootstrap-grid'
import { bgColor } from '@/styles/helpers'
import { Button, Img } from '@/components/elements'

const StyledContainer = styled.div<any>`
  grid-column: span 2;
  justify-content: space-between;
  grid-auto-rows: auto;
  padding: 0;
  width: 100%;
  margin-left: auto;
  margin-right: auto;

  display: flex;
  flex-direction: column;
  grid-gap: 20px;
  grid-template-rows: auto;

  ${media.tablet`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: unset;
  `}
  ${media.desktop`
    
    grid-template-columns: 1fr 1fr 1fr;
  
  `}
`

const StyledCard = styled.div<any>`
  ${bgColor('white')}
  border-radius: 8px;
  padding: 50px 30px 55px;
  justify-content: space-between;
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 230px;
  box-shadow: 0 0 13px -10px rgb(0 0 0 / 13%);

  img.safeTrade {
    height: 65px;
  }
  img.atomicDex {
    height: 70px;
  }
  img.whiteBit {
    height: 72px;
  }
  img.bitGlobal {
    height: 90px;
  }
  img.graviex {
    height: 60px;
  }
  img.stex {
    height: 30px;
  }

  > div {
    height: 100px;
    justify-content: center;
    align-items: center;
    display: flex;
  }
  a {
    svg {
      height: 25px;
    }
  }
`

const ExchangeCard = ({ exchanges }: IExchanges) => {
  return (
    <StyledContainer>
      <StyledCard>
        <div>
          <Img className="verusBridge" name="verusBridge" logo height={70} />
        </div>
        <Button
          transparent
          svg={{ type: 'tab', rotate: false }}
          href="https://eth.verusbridge.io"
          as="a"
          color="#3165d4"
          target="_blank"
        >
          Verus Defi AMM
        </Button>
      </StyledCard>
      {exchanges.map((element: IExchange, index: number) => (
        <StyledCard key={index}>
          <div>
            <Img className={element.logo} name={element.logo} logo />
          </div>
          <Button
            transparent
            svg={{ type: 'tab', rotate: false }}
            href={`https://${element.url}`}
            as="a"
            color="#3165d4"
            target="_blank"
          >
            {element.url}
          </Button>
        </StyledCard>
      ))}
    </StyledContainer>
  )
}

export default ExchangeCard
