import React from 'react'
import styled from 'styled-components'
import { media } from 'styled-bootstrap-grid'
import { bgColor } from '@/styles/helpers'

const StyledKeychainCard = styled.div`
  ${bgColor('white')}
  border-radius: 20px;
  padding: 40px 0 100px;
  justify-content: space-between;
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 275px;
  box-shadow: 0 0 13px -10px rgb(0 0 0 / 13%);
  transition: all 1s linear;
  grid-column: span 2;

  div.keychain-image {
    margin: 36px 0;
  }
  div:not(.keychain-image) {
    padding: 0;
  }
  ${media.tablet`
    padding: 100px 50px 100px 0 ;
    flex-direction: row;
    min-height: 480px;
  
    div.keychain-image {
      overflow: hidden;
      img {
        height: 440px;
        position: relative;
        left: -70px;
      }
    }
    > div:not(.keychain-image){
      width: 600px;
      
    }
  `}
`

const KeychainCard = ({ children }: { children: React.ReactNode }) => {
  return <StyledKeychainCard>{children}</StyledKeychainCard>
}

export default KeychainCard
