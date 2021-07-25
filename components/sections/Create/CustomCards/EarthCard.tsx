import React from 'react'
import styled from 'styled-components'
import { media } from 'styled-bootstrap-grid'
import { bgColor } from '@/styles/helpers'

const StyledEarthCard = styled.div`
  ${bgColor('white')}
  border-radius: 20px;
  padding: 40px 0 100px;
  justify-content: space-between;
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 275px;
  box-shadow: 0 0 13px -10px rgb(0 0 0 / 13%);

  grid-column: span 2;

  div.earth-image {
    margin: 36px 0;
  }
  div:not(.earth-image) {
    padding: 0;
  }
  ${media.tablet`
    padding: 100px 50px 100px 0 ;
    flex-direction: row;
    min-height: 480px;
  
    div.earth-image {
      overflow: hidden;
      img {
        height: 440px;
        position: relative;
        left: -50px;
      }
    }
    > div:not(.earth-image){
      width: 600px;
      
    }
  `}
`

const EarthCard = ({ children }: { children: React.ReactNode }) => {
  return <StyledEarthCard>{children}</StyledEarthCard>
}

export default EarthCard
