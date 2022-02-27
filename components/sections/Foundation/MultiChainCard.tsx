import React from 'react'
import styled from 'styled-components'
import { media } from 'styled-bootstrap-grid'
import { bgColor } from '@/styles/helpers'
import useTranslation from 'next-translate/useTranslation'
import { Img, DefaultText } from '@/components/elements'
import { Grid } from '@/components/layouts'

const StyledCard = styled.div`
  ${bgColor('blueQuan')}
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

const StyledImgContainer = styled.div`
  ${bgColor('white')}
  height: 48px;
  width: 48px;
  padding: 8px;
  border-radius: 10px;
`

const MultiChainCard = () => {
  const { t } = useTranslation('foundation')
  return (
    <StyledCard>
      <StyledHeadingContainer>
        <Img height={120} name="scale" />
        <StyledHeading>
          <DefaultText fam="geoHead" fontSz="xl" customColor="white">
            {t('scalableLimits.header')}
          </DefaultText>
          <DefaultText
            fontSz="modal"
            customColor="rgba(255, 255, 255, 0.85)"
            className="subtext"
          >
            {t('scalableLimits.text')}
          </DefaultText>
        </StyledHeading>
      </StyledHeadingContainer>
      <Grid className="subGrid">
        <StyledGridCard>
          <StyledImgContainer>
            <Img height="32px" name="blockchainCreation" />
          </StyledImgContainer>
          <DefaultText
            fam="geoHead"
            fontSz="sm"
            customMargin="25px 0 10px"
            customColor="white"
          >
            {t('scalableLimits.card1.heading')}
          </DefaultText>
          <DefaultText customColor="white">
            {t('scalableLimits.card1.text')}
          </DefaultText>
        </StyledGridCard>
        <StyledGridCard>
          <StyledImgContainer>
            <Img height="32px" name="mined-icon" />
          </StyledImgContainer>
          <DefaultText
            fam="geoHead"
            fontSz="sm"
            customMargin="25px 0 10px"
            customColor="white"
          >
            {t('scalableLimits.card2.heading')}
          </DefaultText>
          <DefaultText customColor="white">
            {t('scalableLimits.card2.text')}
          </DefaultText>
        </StyledGridCard>
      </Grid>
    </StyledCard>
  )
}

export default MultiChainCard
