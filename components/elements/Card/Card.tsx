import React from 'react'
import styled from 'styled-components'
import { media } from 'styled-bootstrap-grid'
import { bgColor } from '@/styles/helpers'

const StyledCard = styled.div<any>`
  ${(props) => bgColor(props.bGcolor)}
  border-radius: 8px;
  padding: 100px 30px;
  justify-content: space-between;
  align-items: center;
  display: flex;
  flex-direction: column;

  box-shadow: 0 0 13px -10px rgb(0 0 0 / 13%);
  ${(props: any) => props.large && `height: 520px;`}
  ${media.tablet`
    border-radius: 20px;
    ${(props: any) => (props.span ? `` : 'max-width: 400px;')}
    
    min-height: 480px;
    padding: 100px 60px;
    min-width: 342px;
    ${(props: any) => props?.tabletStyles}
    ${(props: any) =>
      props.stars &&
      "background-size: 90%; background-image: url('/svg/stars.svg');"}
  `}

  ${media.desktop`
    min-width: 490px;
    max-width: none;
    ${(props: any) => props?.desktopStyles}
    height: ${(props: any) =>
      (props.large && '750px') || (props.medium && '570px') || '480px'};
    ${(props: any) => props.chain && 'background-size: 500px;'}
    ${(props: any) => props.coin && 'background-size: 550px;'}
    ${(props: any) => props.grid && 'background-size: 575px;'}
  `}
  ${media.giant`
    ${(props: any) => props?.giantStyles}
    ${(props: any) => props.chain && 'background-size: 600px;'}
    ${(props: any) => props.coin && 'background-size: 600px;'}
    ${(props: any) => props.grid && 'background-size: 650px;'}
  `}
  ${(props: any) =>
    props.span ? `grid-column: span ${props.span};` : 'max-width: 390px;'}
  ${(props: any) => props?.styles}

  ${(props: any) =>
    props.chain &&
    `
    background-image: url('/svg/blockchain.svg');
    background-repeat: no-repeat;
    background-position: center top 46px;
    background-size: 400px;
  `}
  ${(props: any) =>
    props.coin &&
    `
    background-image: url('/svg/coins.svg');
    background-repeat: no-repeat;
    background-position: center bottom -13px;
    background-size: 425px;
  `}
  
  ${(props: any) =>
    props.stars &&
    `
    background-image: url('/svg/stars-mobile.svg');
    background-repeat: no-repeat;
    background-size: 253px 366px;
    background-position: center center;
  `}
  ${(props: any) =>
    props.tools &&
    `
    background-image: url('/svg/tools.svg');
    background-repeat: no-repeat;
    background-size: 85%;
    background-position: center center;
  `}
`

export interface CardProps {
  span?: number
  bgColor?: string
  children: React.ReactNode
  styles?: string
  tabletStyles?: string
  desktopStyles?: string
  giantStyles?: string
  medium?: boolean
  large?: boolean
  chain?: boolean
  coin?: boolean

  stars?: boolean
  tools?: boolean
  scales?: boolean
}

const Card = ({
  bgColor = 'white',
  span,
  children,
  styles,
  tabletStyles,
  desktopStyles,
  giantStyles,
  medium,
  large,
  chain,
  coin,

  stars,
  tools,
}: CardProps) => {
  return (
    <StyledCard
      bGcolor={bgColor}
      span={span}
      styles={styles}
      tabletStyles={tabletStyles}
      desktopStyles={desktopStyles}
      giantStyles={giantStyles}
      medium={medium}
      large={large}
      chain={chain}
      coin={coin}
      stars={stars}
      tools={tools}
    >
      {children}
    </StyledCard>
  )
}

export default Card
