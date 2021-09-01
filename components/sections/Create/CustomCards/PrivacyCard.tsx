import React from 'react'
import styled from 'styled-components'
import { media } from 'styled-bootstrap-grid'
import { bgColor } from '@/styles/helpers'

const StyledPrivacyCard = styled.div`
  ${bgColor('blackTer')}
  border-radius: 8px;
  padding: 40px 0;
  justify-content: space-between;
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 520px;
  box-shadow: 0 0 13px -10px rgb(0 0 0 / 13%);

  grid-column: span 2;
  div.privacy-image {
    img {
      height: 87px;
    }
  }
  div.card {
    text-align: center;
    justify-content: space-between;
    align-items: center;
  }
  ${media.tablet`
    border-radius: 20px;
    padding: 87px 100px 87px 0;
    flex-direction: row;
    
    div.privacy-image {
      width: fit-content;
      height: fit-content;
      overflow: hidden;
      img{
        position: relative;
        left: -30px;
        height: 257px;
      }
    }
    
  `}
  ${media.desktop`
    height: 750px;
    padding: 133px 269px 133px 0;
    div.privacy-image {
      img{
      height: 379px;
      }
    }
  `}
`

const PrivacyCard = ({ children }: { children: React.ReactNode }) => {
  return <StyledPrivacyCard>{children}</StyledPrivacyCard>
}

export default PrivacyCard
