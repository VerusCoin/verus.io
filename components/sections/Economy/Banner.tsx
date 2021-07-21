import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { media } from 'styled-bootstrap-grid'
import { DefaultHeader, DefaultText, NetTag } from '@/components/elements'
import { bgColor, fontSize, fontFam, fontColor } from '@/styles/helpers'
import useTranslation from 'next-translate/useTranslation'

import CardText from '@/components/elements/Cards/CardText'

const StyledBanner = styled.div<any>`
  border-radius: 20px;
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
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  ${media.tablet`   
    
    padding: 100px 60px;
  `}
`

const ExtraCardText = styled.p`
  ${fontFam('geoReg')};
  ${(props) => fontColor('white')};
  ${fontSize('sm')};
  text-align: center;
  margin: 30px 50px;
  ${media.tablet`
  margin:30px 100px;
  `}
  ${media.giant`
  margin:30px 200px;
  `}
`

const Banner: React.FC<
  DetailedHTMLFactory<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = (): ReactNode => {
  const { t } = useTranslation('economy')
  return (
    <StyledBanner>
      <NetTag net="test" />
      <CardText book fontSz="xl" color="white" text={t('banner.heading')} />
      <ExtraCardText>{t('banner.text')}</ExtraCardText>
    </StyledBanner>
  )
}

export default Banner
