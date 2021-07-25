import React from 'react'
import styled from 'styled-components'
import { media } from 'styled-bootstrap-grid'
import { DefaultText } from '@/components/elements'
import { bgColor } from '@/styles/helpers'
import useTranslation from 'next-translate/useTranslation'

const StyledBanner = styled.div<any>`
  ${bgColor('blueQuan')};

  border-radius: 20px;
  padding: 30px;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 13px -10px rgb(0 0 0 / 13%);
  grid-column: span 2;
  background-image: url('/svg/earth.svg');
  background-repeat: no-repeat;
  height: 120px;
  background-position: 50% 28px;
  background-size: 75%;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  ${media.tablet`
    background-position: 110% 36px;
    height: 200px;  
    background-size: 30%;
    padding: 100px 60px;

  `}
  ${media.desktop`
    background-position: 102% 50px;
    background-size: 20%;
  `}

  ${media.giant`
    background-position: 102% 25px;
    
  `}
`

const Banner = () => {
  const { t } = useTranslation('home')
  return (
    <StyledBanner>
      <DefaultText fontSz="md" align="center" customColor="white">
        {t('banner')}
      </DefaultText>
    </StyledBanner>
  )
}

export default Banner
