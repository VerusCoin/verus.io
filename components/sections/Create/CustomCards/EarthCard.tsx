import React from 'react'
import styled from 'styled-components'
import { media } from 'styled-bootstrap-grid'
import { bgColor } from '@/styles/helpers'

const StyledEarthCard = styled.div`
  ${bgColor('white')}
  border-radius: 8px;
  padding: 0 0 41px;
  justify-content: space-between;
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 520px;
  box-shadow: 0 0 13px -10px rgb(0 0 0 / 13%);

  grid-column: span 2;

  div.earth-image {
    margin: 36px 0 0;
  }
  div.card {
    text-align: center;
    justify-content: space-between;
    align-items: center;
  }
  ${media.tablet`
    border-radius: 20px;
    padding: 100px 50px 100px 0 ;
    flex-direction: row;
    div.earth-image {
      overflow: hidden;
      img {
        height: 214px;
        position: relative;
        left: -50px;
      }
    }

    div.card{
      width: 454px;
    }
  `}

  ${media.desktop`
    height: 750px;
    padding: 100px 23px 100px 0 ;
    div.earth-image {
      img {
        height: 440px;
      } 
    }
    div.card {
      width: 600px;
    }
  `}
  ${media.giant`
  padding: 100px 99px 100px 0 ;
  `}
`

const EarthCard = ({ children }: { children: React.ReactNode }) => {
  return <StyledEarthCard>{children}</StyledEarthCard>
}

export default EarthCard
