import React from 'react'
import styled from 'styled-components'
import { media } from 'styled-bootstrap-grid'
import { bgColor } from '@/styles/helpers'
import useTranslation from 'next-translate/useTranslation'
import Trans from 'next-translate/Trans'
import { Img, DefaultText, Button } from '@/components/elements'
import { Grid } from '@/components/layouts'

const StyledKeychainCard = styled.div`
  ${bgColor('white')}
  border-radius: 8px;
  padding: 40px 25px;
  box-shadow: 0 0 13px -10px rgb(0 0 0 / 13%);
  grid-column: span 2;
  .subGrid {
    min-width: 0px;
    max-width: 800px;
    grid-gap: 40px;
    margin: 0 auto;
  }
  ${media.tablet`
    border-radius: 20px;
    padding: 100px 70px;  
    .subGrid {
      grid-gap: 75px; 40px;
    }
  `}
`
const StyledHeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 75px;

  img {
    margin-top: 10px;
  }
  ${media.tablet`
    flex-direction: row;
  `}
`
const StyledHeading = styled.div`
  margin-top: 10px;
  p {
    text-align: center;
  }
  .subtext {
    margin-top: 25px;
    text-align: justify;
    text-decoration: underline;
    span {
      font-weight: bold;
      color: initial;
    }
  }
  ${media.tablet`
    p {
      text-align: left;
    }
    margin-top:0;
    margin-left: 70px;
    max-width: 700px;
    .subtext{
      margin-top: 50px;
      max-width: 575px;
    }
  `}
`

const StyledGridCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  a.external {
    svg {
      height: 12px;
      margin-left: 5px;
    }
  }
  ${media.tablet`
    align-items: start;
  `}
`

const StyledImgContainer = styled.div<{ color: string }>`
  background-color: ${(props: any) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  width: 48px;
  border-radius: 10px;
  color: ${(props) => props.theme.colors.white};
  .img {
    font-weight: bold;
  }
`

const KeychainCard = () => {
  const { t } = useTranslation('foundation')

  return (
    <StyledKeychainCard>
      <StyledHeadingContainer>
        <Img height={120} name="keychain" />
        <StyledHeading>
          <DefaultText fam="geoHead" fontSz="xl">
            {t('keychainCard.header')}
          </DefaultText>
          <DefaultText fontSz="md" customColor="#676767" className="subtext">
            <Trans
              i18nKey={'foundation:keychainCard.subheading'}
              components={{
                0: <span />,
                1: <span />,
              }}
            />
          </DefaultText>
        </StyledHeading>
      </StyledHeadingContainer>
      <Grid className="subGrid">
        <StyledGridCard>
          <StyledImgContainer color="#979797">
            <DefaultText fontSz="menu" className="img" align="center">
              PoW
            </DefaultText>
          </StyledImgContainer>
          <DefaultText fam="geoHead" fontSz="sm" customMargin="25px 0 10px">
            {t('keychainCard.card1.heading')}
          </DefaultText>
          <DefaultText>{t('keychainCard.card1.text')}</DefaultText>
        </StyledGridCard>
        <StyledGridCard>
          <StyledImgContainer color="#979797">
            <DefaultText fontSz="menu" className="img" align="center">
              PoS
            </DefaultText>
          </StyledImgContainer>
          <DefaultText fam="geoHead" fontSz="sm" customMargin="25px 0 10px">
            {t('keychainCard.card2.heading')}
          </DefaultText>
          <DefaultText>{t('keychainCard.card2.text')}</DefaultText>
        </StyledGridCard>
        <StyledGridCard>
          <StyledImgContainer color="#3165D4">
            <Img height={24} name="iconmonstr-shield" />
          </StyledImgContainer>
          <DefaultText fam="geoHead" fontSz="sm" customMargin="25px 0 10px">
            {t('keychainCard.card3.heading')}
          </DefaultText>
          <DefaultText>{t('keychainCard.card3.text')}</DefaultText>
          <Button
            className="external"
            transparent
            svg={{ type: 'miniTab', rotate: false }}
            href=""
            as="a"
            color="#3165d4"
            margin="25px 0"
            fontSize="xs"
            target="_blank"
          >
            {t('keychainCard.card3.link')}
          </Button>
        </StyledGridCard>
        <StyledGridCard>
          <StyledImgContainer color="green">
            <Img height={24} name="iconmonstr-lock" />
          </StyledImgContainer>
          <DefaultText fam="geoHead" fontSz="sm" customMargin="25px 0 10px">
            {t('keychainCard.card4.heading')}
          </DefaultText>
          <DefaultText>{t('keychainCard.card4.text')}</DefaultText>
          <Button
            className="external"
            transparent
            svg={{ type: 'miniTab', rotate: false }}
            href=""
            as="a"
            color="#3165d4"
            margin="25px 0"
            fontSize="xs"
            target="_blank"
          >
            {t('keychainCard.card4.link')}
          </Button>
        </StyledGridCard>
      </Grid>
    </StyledKeychainCard>
  )
}

export default KeychainCard
