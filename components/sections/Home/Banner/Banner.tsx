import React from 'react'
import styled from 'styled-components'
import { media } from 'styled-bootstrap-grid'
import { Button, DefaultText, Img } from '@/components/elements'
import { bgColor } from '@/styles/helpers'
import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'

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
  cursor: pointer;
  &:hover {
    a {
      text-decoration: underline;
    }
  }
  ${media.tablet`
    min-height: auto;
    border-radius: 20px;
    flex-direction: row;
  `}
`
const StyledImgContainer = styled.div`
  ${bgColor('blue')}
  height: 48px;
  width: 48px;
  min-width: 48px;
  padding: 8px 9px 8px 7px;
  border-radius: 9px;
  margin-right: 18px;
`
const StyledLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${media.tablet`
    min-width: 250px;
  `}
`
const StyledCenter = styled.div`
  max-width: 316px;
  margin: 15px 0;
  p {
    line-height: 20px;
  }
  ${media.tablet`
    margin:0;
  `}
`
const StyledRight = styled.div`
  display: flex;
  justify-content: center;
  ${media.tablet`
    min-width: 250px;
    justify-content: end;
  `}
`

const Banner = () => {
  const { t } = useTranslation('home')
  return (
    <Link href="/" passHref>
      <StyledBanner>
        <StyledLeft>
          <StyledImgContainer>
            <Img height="32px" name="iconmonstr-school" />
          </StyledImgContainer>
          <DefaultText fontSz="mdlg" fam="geoHead" align="left">
            {t('banner.title')}
          </DefaultText>
        </StyledLeft>
        <StyledCenter>
          <DefaultText fontSz="menu" align="center">
            {t('banner.text')}
          </DefaultText>
        </StyledCenter>
        <StyledRight>
          <Button transparent svg={{ type: 'arrow', rotate: false }} as="a">
            {t('banner.link')}
          </Button>
        </StyledRight>
      </StyledBanner>
    </Link>
  )
}

export default Banner
