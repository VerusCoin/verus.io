import React from 'react'
import styled from 'styled-components'
import { media } from 'styled-bootstrap-grid'
import { bgColor } from '@/styles/helpers'

const StyledBlueEarthCard = styled.div`
  ${bgColor('blueQuan')};

  border-radius: 20px;
  padding: 190px 25px 72px;
  height: 520px;

  align-items: center;
  display: flex;
  flex-direction: column;
  grid-column: span 2;
  box-shadow: 0 0 13px -10px rgb(0 0 0 / 13%);
  background-image: url('/svg/earth.svg');
  background-repeat: no-repeat;
  justify-content: space-between;
  background-position: center top -35px;
  background-size: 200px;

  a {
    padding: 10px 30px 10px 20px;
  }
  p {
    margin: 0 25px;
  }
  ${media.tablet`
    background-position: center right -30px;
    background-size: 303px;
    padding: 174px 117px 164px 27px;
    justify-content: space-between;
    p {
      margin: 0;
    }
    
  `}
  ${media.desktop`
    height: 750px;
    background-size: 460px;
    padding: 263px 357px 253px 93px;
  `}
`

const BlueEarthCard = ({ children }: { children: React.ReactNode }) => {
  return <StyledBlueEarthCard>{children}</StyledBlueEarthCard>
}

export default BlueEarthCard
