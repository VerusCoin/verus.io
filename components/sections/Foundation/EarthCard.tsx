import React from 'react'
import styled from 'styled-components'
import { media } from 'styled-bootstrap-grid'
import { bgColor } from '@/styles/helpers'

const StyledEarthCard = styled.div`
  ${bgColor('white')};

  border-radius: 20px;
  padding: 157px 25px 41px;
  height: 520px;
  justify-content: space-between;
  align-items: center;
  display: flex;
  flex-direction: column;
  grid-column: span 2;
  box-shadow: 0 0 13px -10px rgb(0 0 0 / 13%);
  background-image: url('/svg/earth.svg');
  background-repeat: no-repeat;
  min-height: 350px;
  background-position: center top -35px;
  background-size: 167px;

  ${media.tablet`
    background-position: center right -35px;
    background-size: 264px;
    padding: 100px 250px 126px 90px;
  `}
  ${media.desktop`
    height: 750px;
    background-position: center right -47px;
    background-size: 362px;
    padding: 166px 350px 166px 90px;
  `}
  ${media.giant`
    background-size: 460px;
    background-position: center right -59px;
    padding: 166px 450px 166px 90px;
  `}
`

const EarthCard = ({ children }: { children: React.ReactNode }) => {
  return <StyledEarthCard>{children}</StyledEarthCard>
}

export default EarthCard
