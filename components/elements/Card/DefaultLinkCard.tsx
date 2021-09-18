import React from 'react'
import styled from 'styled-components'
import { media } from 'styled-bootstrap-grid'
import { bgColor } from '@/styles/helpers'
import useTranslation from 'next-translate/useTranslation'

import { Button, CardHeader } from '@/components/elements'

const StyledLinkCard = styled.div<any>`
  ${(props) => (props.create ? bgColor('blueQuan') : bgColor('white'))}
  border-radius: 8px;
  padding: 40px 40px 100px;
  justify-content: space-between;
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 275px;
  box-shadow: 0 0 13px -10px rgb(0 0 0 / 13%);
  max-width: 390px;
  text-decoration: none;
  &:hover {
    button {
      text-decoration: underline;
      svg {
        transform: translateX(6px);
      }
    }
  }
  ${(props) =>
    props.global &&
    `
    background-image: url('/svg/chains.svg');
    background-repeat: no-repeat;
    background-position: center right;
    padding: 40px 50px 100px;
  `}
  ${(props) =>
    props.coin &&
    `
    background-image: url('/svg/lifeblood.svg');
    background-repeat: no-repeat;
    background-size: cover;
    padding: 40px 50px 100px;
  `}
  ${(props) =>
    props.create &&
    `
    background-image: url('/svg/earth.svg');
    background-repeat: no-repeat;
    min-height: 350px;
    background-position: 50% 255px;
    background-size: 371px;
    padding: 40px 50px 100px;
    
  `}
  ${(props) =>
    props.foundation &&
    `
    padding: 40px 60px 100px;
    background-image: url('/svg/leaf1.svg'),url('/svg/leaf2.svg'),url('/svg/leaf3.svg');
    background-repeat: no-repeat;
    min-height: 350px;
    background-position: bottom 34px left -21px, bottom 168px right -56px,bottom 141px right -56px;
    background-size: 136px, 146px, 146px;
    div {
      margin: 32px 90px 64px;
    }
  `}
  
  ${media.tablet`
    min-height: 480px;
    max-width: 400px;
    min-width: 342px;
    border-radius: 20px;
    padding: 30px 40px 110px;
    ${(props: any) =>
      props.create &&
      `
      background-position: bottom -260px center;
      padding: 30px 50px 110px;
    `}
    ${(props: any) =>
      props.global &&
      `
        background-position: center right -15px;
    `}
    ${(props: any) =>
      props.foundation &&
      `
      padding: 40px 40px 110px;
      >div {
        margin: 32px 0 64px;
      }
    `}
  `}
  
  ${media.desktop`
    min-width: 490px;
    max-width: none;
    height: 480px;
    ${(props: any) =>
      props.global &&
      `
        background-position: center right;
    `}
    ${(props: any) =>
      props.foundation &&
      `
      padding: 40px 60px 100px;
    `}
  `}
`

const CardInfo = (name: string) => {
  const { t } = useTranslation('common')
  let href = ''
  let header = ''
  let text = ''
  switch (name) {
    case 'foundation':
      header = t('foundationCard.header')
      text = t('foundationCard.link')
      href = '/foundations'
      return { header, text, href }
    case 'global':
      header = t('globalCard.header')
      text = t('globalCard.link')
      href = '/global-network'
      return { header, text, href }
    case 'coin':
      header = t('coinCard.header')
      text = t('coinCard.link')
      href = '/coin'
      return { header, text, href }
    case 'create':
      header = t('createCard.header')
      text = t('createCard.link')
      href = '/create-with-verus'
      return { header, href, text }
    default:
      return { header, href, text }
  }
}

const DefaultLinkCard = ({ card }: { card: string }) => {
  const { href, header, text } = CardInfo(card)

  return (
    <StyledLinkCard
      global={card === 'global'}
      coin={card === 'coin'}
      create={card === 'create'}
      foundation={card === 'foundation'}
      as="a"
      href={href}
    >
      <CardHeader
        color={card === 'create' ? 'white' : 'default'}
        margin="32px 0 64px"
        text={header}
      />
      {card === 'create' ? (
        <Button
          transparent
          svg={{ type: 'arrow', rotate: false }}
          color="white"
        >
          {text}
        </Button>
      ) : (
        <Button
          transparent
          svg={{ type: 'arrow', rotate: false }}
          color="#3165d4"
        >
          {text}
        </Button>
      )}
    </StyledLinkCard>
  )
}

export default DefaultLinkCard
