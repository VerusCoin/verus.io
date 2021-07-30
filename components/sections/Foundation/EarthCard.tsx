import React from 'react'
import styled from 'styled-components'
import { media } from 'styled-bootstrap-grid'
import { bgColor } from '@/styles/helpers'

const StyledEarthCard = styled.div`
  ${bgColor('white')};

  border-radius: 20px;
  padding: 120px 25px 60px 25px;

  justify-content: space-between;
  align-items: center;
  display: flex;
  flex-direction: column;
  grid-column: span 2;
  box-shadow: 0 0 13px -10px rgb(0 0 0 / 13%);
  background-image: url('/svg/earth.svg');
  background-repeat: no-repeat;
  min-height: 350px;
  background-position: center -5vw;
  background-size: 50vw;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  transition: background-position 1s linear;
  ${media.tablet`
    background-position: center right -50px;
    background-size: 40vh;
    padding: 15% 25% 15% 5%;
  `}
`

const EarthCard = ({ children }: { children: React.ReactNode }) => {
  return <StyledEarthCard>{children}</StyledEarthCard>
}

export default EarthCard
