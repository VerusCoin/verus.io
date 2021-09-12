import React from 'react'
import styled from 'styled-components'
import { media } from 'styled-bootstrap-grid'
import { bgColor } from '@/styles/helpers'

const StyledKeychainCard = styled.div`
  ${bgColor('white')}
  border-radius: 8px;
  padding: 40px 0 100px;
  justify-content: space-between;
  align-items: center;
  display: flex;
  flex-direction: column;

  box-shadow: 0 0 13px -10px rgb(0 0 0 / 13%);

  grid-column: span 2;
  height: 520px;
  div.keychain-image {
    img {
      height: 113px;
    }
    margin: 2px 0 42px;
  }
  div.card {
    text-align: center;
    justify-content: space-between;
    align-items: center;
    margin: 0 23px;
  }
  ${media.tablet`
    border-radius: 20px;
    padding: 100px 50px 100px 0 ;
    flex-direction: row;
    
    div.keychain-image {
      overflow: hidden;
      img {
        height: 272px;
        position: relative;
        left: -35px;
      }
    }
    div.card{
      width: 700px;
      
    }
  `}
  ${media.desktop`
    height: 750px;
    div.keychain-image{
      img {
        height: 431px;
        left: -70px;
      }
    }
   
  `}
`

const KeychainCard = ({ children }: { children: React.ReactNode }) => {
  return <StyledKeychainCard>{children}</StyledKeychainCard>
}

export default KeychainCard
