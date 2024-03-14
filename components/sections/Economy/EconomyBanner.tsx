import React from 'react'
import styled from 'styled-components'
import { media } from 'styled-bootstrap-grid'
import { NetTag, CardText } from '@/components/elements'
import { fontSize, fontFam, fontColor } from '@/styles/helpers'
import useTranslation from 'next-translate/useTranslation'

const StyledBanner = styled.div<any>`
  border-radius: 8px;
  padding: 60px;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 13px -10px rgb(0 0 0 / 13%);
  grid-column: span 2;
  background-image: url('/images/bg-green.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;

  ${media.tablet`   
    border-radius: 20px;
    padding: 100px 60px;
  `}
  ${media.desktop`
  height: 470px;
  `}
`

const ExtraCardText = styled.p`
  ${fontFam('geoReg')};
  ${fontColor('white')};
  ${fontSize('sm')};
  text-align: center;
  margin: 30px 0;
  ${media.tablet`
  margin:30px 100px;
  `}
  ${media.giant`
  margin:30px 200px;
  `}
`

const EconomyBanner = () => {
  const { t } = useTranslation('economy')
  return (
    <StyledBanner>
      <NetTag net="main" />
      <CardText book fontSz="xl" color="white" text={t('banner.heading')} />
      <ExtraCardText>{t('banner.text')}</ExtraCardText>
    </StyledBanner>
  )
}

export default EconomyBanner
