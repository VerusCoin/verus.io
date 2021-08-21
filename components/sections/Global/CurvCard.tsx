import React from 'react'
import styled from 'styled-components'
import { media } from 'styled-bootstrap-grid'
import { bgColor } from '@/styles/helpers'

const StyledCurvCard = styled.div`
  ${bgColor('blueQuan')};

  border-radius: 8px;
  padding: 198px 25px 60px;
  height: 520px;
  align-items: center;
  display: flex;
  flex-direction: column;
  grid-column: span 2;
  box-shadow: 0 0 13px -10px rgb(0 0 0 / 13%);
  justify-content: space-between;

  background-image: url('/svg/curve.svg');
  background-repeat: no-repeat;
  background-position: right -90px top -160px;
  background-size: 510px;
  p {
    max-width: 290px;
  }
  ${media.tablet`
    border-radius: 20px;
    background-position: center right -30px;
    background-size: 810px;
    padding: 172px 100px;
    justify-content: space-between;
    background-image: url('/svg/curve.svg'), url('/svg/curve-revert.svg');
    background-position: right -140px top -245px,left -90px bottom -250px;
    background-size: 810px, 665px;
    
    p{
      max-width: 475px;
    }
   
    
  `}
  ${media.desktop`
    height: 750px;
    background-size: 460px;
    padding: 260px 207px;
    background-position: right -230px top -350px,left -90px bottom -250px;
    background-size: 1168px, 775px;
    
    p{
      max-width: 725px;
    }
  `}

  ${media.giant`
    background-position: right -430px top -500px,left -90px bottom -300px;
    background-size: 1526px, 885px;
  `}
`

const CurvCard = ({ children }: { children: React.ReactNode }) => {
  return <StyledCurvCard>{children}</StyledCurvCard>
}

export default CurvCard
