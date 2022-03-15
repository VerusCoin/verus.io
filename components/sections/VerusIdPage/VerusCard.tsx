import styled from 'styled-components'
import { media } from 'styled-bootstrap-grid'
import { bgColor } from '@/styles/helpers'
import useTranslation from 'next-translate/useTranslation'
import { DefaultText } from '@/components/elements'
import Construction from './iconmonstr-construction-37.svg'
import Blockchain from './blockchain-creation.svg'
import Coin from './iconmonstr-coin-8.svg'
import Identity from './identity.svg'

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
  max-width: 575px;
  margin: 0 auto 50px;
  p {
    color: #0f0f0f;
  }
  p:last-child {
    opacity: 0.87;
    line-height: 20px;
  }
  ${media.tablet`
    flex-direction: row;
    align-items: start;
  `}
`

const StyledCardText = styled.div`
  max-width: 500px;
`
const StyledDefaultText = styled(DefaultText)`
  text-align: center;
  margin: 20px 0 0;
  ${media.tablet`
    text-align: left;
    margin: 25px 0 0;
  `};
`

const StyledImgContainer = styled.div`
  background-color: #4aa658;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  width: 48px;
  border-radius: 10px;
  margin-top: 0;
  svg {
    height: 24px;
    fill: ${(props) => props.theme.colors.white};
  }
  ${media.tablet`
    margin-right: 25px;
  `}
`

const StyledHeadImg = styled(StyledImgContainer)`
  height: 70px;
  width: 70px;
  margin: 0 auto 40px;
  svg {
    height: 47px;
  }
  ${media.tablet`
    margin: 10px 0;
    height: 120px;
    width: 120px;
    svg {
      height: 80px;
    }
  `}
`

const VerusCard = () => {
  const { t } = useTranslation('verusIdPage')
  return (
    <StyledCard>
      <StyledHeadingContainer>
        <StyledHeadImg>
          <Construction />
        </StyledHeadImg>

        <StyledHeading>
          <DefaultText fam="geoHead" fontSz="xl" customColor="#0F0F0F">
            {t('verusid.heading')}
          </DefaultText>
          <DefaultText fontSz="modal" customColor="#676767" className="subtext">
            {t('verusid.text')}
          </DefaultText>
        </StyledHeading>
      </StyledHeadingContainer>
      <StyledGridCard>
        <StyledImgContainer>
          <Blockchain />
        </StyledImgContainer>
        <StyledCardText>
          <StyledDefaultText fam="geoHead" fontSz="sm" customMargin="0 0 10px">
            {t('verusid.cards.blockchains.heading')}
          </StyledDefaultText>
          <StyledDefaultText>
            {t('verusid.cards.blockchains.text')}
          </StyledDefaultText>
        </StyledCardText>
      </StyledGridCard>
      <StyledGridCard>
        <StyledImgContainer>
          <Coin />
        </StyledImgContainer>
        <StyledCardText>
          <StyledDefaultText fam="geoHead" fontSz="sm" customMargin="0 0 10px">
            {t('verusid.cards.currencies.heading')}
          </StyledDefaultText>
          <StyledDefaultText>
            {t('verusid.cards.currencies.text')}
          </StyledDefaultText>
        </StyledCardText>
      </StyledGridCard>
      <StyledGridCard>
        <StyledImgContainer>
          <Identity />
        </StyledImgContainer>
        <StyledCardText>
          <StyledDefaultText fam="geoHead" fontSz="sm" customMargin="0 0 10px">
            {t('verusid.cards.identities.heading')}
          </StyledDefaultText>
          <StyledDefaultText>
            {t('verusid.cards.identities.text')}
          </StyledDefaultText>
        </StyledCardText>
      </StyledGridCard>
    </StyledCard>
  )
}

export default VerusCard
