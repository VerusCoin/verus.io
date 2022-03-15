import React from 'react'
import styled from 'styled-components'
import { media } from 'styled-bootstrap-grid'
import { bgColor } from '@/styles/helpers'
import useTranslation from 'next-translate/useTranslation'
import { Img, DefaultText } from '@/components/elements'
import { Grid } from '@/components/layouts'

const StyledCard = styled.div`
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
    margin: 10px auto 40px;
    height: 70px;
    width: 70px;

    border-radius: 10px;
  }
  ${media.tablet`
    flex-direction: row;
    img {
      height: 120px;
      
      margin: 10px initial initial;
    width: 120px;
    }
  `}
`
const StyledHeading = styled.div`
  margin-top: 10px;
  p {
    text-align: center;
  }
  .subtext {
    margin-top: 25px;
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
  p:last-child {
    line-height: 20px;
  }
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

const StyledImgContainer = styled.div`
  ${bgColor('#465F2B')}
  height: 48px;
  width: 48px;
  padding: 8px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const FoundationBanner = () => {
  const { t } = useTranslation('foundation')

  return (
    <StyledCard>
      <StyledHeadingContainer>
        <img height={120} src="/images/bg-green.png" />
        <StyledHeading>
          <DefaultText fam="geoHead" fontSz="xl" customColor="#465F2B">
            {t('highEfficient.header')}
          </DefaultText>
          <DefaultText fontSz="modal" customColor="#676767" className="subtext">
            {t('highEfficient.text')}
          </DefaultText>
        </StyledHeading>
      </StyledHeadingContainer>
      <Grid className="subGrid">
        <StyledGridCard>
          <StyledImgContainer>
            <Img height={24} name="iconmonstr-battery" />
          </StyledImgContainer>
          <DefaultText
            fam="geoHead"
            fontSz="sm"
            customMargin="25px 0 10px"
            customColor="#0F0F0F"
          >
            {t('highEfficient.card1.heading')}
          </DefaultText>
          <DefaultText customColor="#0F0F0FDE">
            {t('highEfficient.card1.text')}
          </DefaultText>
        </StyledGridCard>
        <StyledGridCard>
          <StyledImgContainer>
            <Img height={24} name="iconmonstr-tree" />
          </StyledImgContainer>
          <DefaultText
            fam="geoHead"
            fontSz="sm"
            customMargin="25px 0 10px"
            customColor="#0F0F0F"
          >
            {t('highEfficient.card2.heading')}
          </DefaultText>
          <DefaultText customColor="#0F0F0FDE">
            {t('highEfficient.card2.text')}
          </DefaultText>
        </StyledGridCard>
        <StyledGridCard>
          <StyledImgContainer>
            <Img height={24} name="staking-icon" />
          </StyledImgContainer>
          <DefaultText
            fam="geoHead"
            fontSz="sm"
            customMargin="25px 0 10px"
            customColor="#0F0F0F"
          >
            {t('highEfficient.card3.heading')}
          </DefaultText>
          <DefaultText customColor="#0F0F0FDE">
            {t('highEfficient.card3.text')}
          </DefaultText>
        </StyledGridCard>
      </Grid>
    </StyledCard>
  )
}

export default FoundationBanner
