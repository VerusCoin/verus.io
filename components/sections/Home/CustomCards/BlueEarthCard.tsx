import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { media } from 'styled-bootstrap-grid'
import { Img } from '@/components/elements'
import { bgColor } from '@/styles/helpers'
import Cards from '@/components/elements/Cards/Cards'

const StyledBlueEarthCard = styled.div`
  ${bgColor('blueQuan')};

  border-radius: 20px;
  padding: 40px 50px 100px;

  justify-content: space-between;
  align-items: center;
  display: flex;
  flex-direction: column;

  box-shadow: 0 0 13px -10px rgb(0 0 0 / 13%);
  background-image: url('/svg/earth.svg');
  background-repeat: no-repeat;
  min-height: 350px;
  background-position: 50% 255px;
  background-size: 371px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  ${media.tablet`
  // background-position: 50% 350px;
  background-position: bottom -235.85% center;
  padding: 30px 50px 120px;
  // padding: 100px 60px;
  min-height: 480px;
 
  `}
`

const BlueEarthCard: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <StyledBlueEarthCard>{children}</StyledBlueEarthCard>
}

export default BlueEarthCard
