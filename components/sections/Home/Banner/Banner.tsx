import React from 'react'
import styled from 'styled-components'
import { media } from 'styled-bootstrap-grid'
import { Button, DefaultText, Img } from '@/components/elements'
import { bgColor } from '@/styles/helpers'
import useTranslation from 'next-translate/useTranslation'

const StyledBanner = styled.div<any>`
  ${bgColor('white')};
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0 0 13px -10px rgb(0 0 0 / 13%);
  grid-column: span 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  min-height: 200px;
  ${media.tablet`
    min-height: auto;
    border-radius: 20px;
    flex-direction: row;
  `}
`
const StyledImgContainer = styled.div`
  ${bgColor('blueQuan')}
  height: 48px;
  width: 48px;
  padding: 8px;
  border-radius: 10px;
  margin-right: 18px;
`
const StyledLeft = styled.div`
  display: flex;
  justify-content: between;
  align-items: center;
`
const StyledCenter = styled.div`
  max-width: 316px;
`

const Banner = () => {
  const { t } = useTranslation('home')
  return (
    <StyledBanner>
      <StyledLeft>
        <StyledImgContainer>
          <Img height="32px" name="iconmonstr-school" />
        </StyledImgContainer>
        <DefaultText fontSz="mdlg" align="center">
          {t('banner.title')}
        </DefaultText>
      </StyledLeft>
      <StyledCenter>
        <DefaultText fontSz="menu" align="center">
          {t('banner.text')}
        </DefaultText>
      </StyledCenter>
      <Button transparent svg={{ type: 'arrow', rotate: false }} href="" as="a">
        {t('banner.link')}
      </Button>
    </StyledBanner>
  )
}

export default Banner
