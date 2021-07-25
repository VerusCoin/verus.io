import React from 'react'
import styled from 'styled-components'
import { media } from 'styled-bootstrap-grid'
import { bgColor } from '@/styles/helpers'

const StyledPrivacyCard = styled.div`
  ${bgColor('blackTer')}
  border-radius: 20px;
  padding: 40px 0 100px;
  justify-content: space-between;
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 275px;
  box-shadow: 0 0 13px -10px rgb(0 0 0 / 13%);

  grid-column: span 2;
  div.privacy-image {
    img {
      height: 87px;
    }
  }
  > div:not(.privacy-image) {
    padding: 0;
  }
  ${media.tablet`
    padding: 0 25% 0 0 ;
    flex-direction: row;
    min-height: 480px;
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
    > div:not(.privacy-image){
      padding: 100px 0 ;
      
     
    }
  `}
`

const PrivacyCard = ({ children }: { children: React.ReactNode }) => {
  return <StyledPrivacyCard>{children}</StyledPrivacyCard>
}

export default PrivacyCard
