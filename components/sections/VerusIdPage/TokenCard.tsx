import styled from 'styled-components'
import { media } from 'styled-bootstrap-grid'
import { bgColor } from '@/styles/helpers'
import useTranslation from 'next-translate/useTranslation'
import { Img, DefaultText } from '@/components/elements'
import { Grid } from '@/components/layouts'
import Bank from './iconmonstr-bank-1.svg'
import Eye from './iconmonstr-eye-8.svg'
import File from './iconmonstr-file-10.svg'
import User from './iconmonstr-user-19.svg'
import Key from './iconmonstr-key-2.svg'
import Lock from './iconmonstr-lock-4.svg'

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
    height: 70px;
    margin-bottom: 15px;
  }
  ${media.tablet`
    flex-direction: row;
    img {
      height: 120px;
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
const StyledEmpower = styled.div`
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 400px;
  img {
    margin-bottom: 5px;
  }
`
const StyledGridCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    color: #0f0f0f;
  }

  margin: 20px 0;
  ${media.tablet`
    align-items: start;
    justify-content: flex-start;
    margin: initial;
  `}
`
const StyledDefaultText = styled(DefaultText)`
  text-align: center;
  margin: 20px 0 0;
  ${media.tablet`
    text-align: left;
    margin: 25px 0 0;
  `};
`

const StyledSubText = styled(StyledDefaultText)`
  line-height: 20px;
  opacity: 0.87;
`

const StyledImgContainer = styled.div`
  ${bgColor('blue')}
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  width: 48px;
  border-radius: 10px;
  svg {
    height: 24px;
    fill: ${(props) => props.theme.colors.white};
  }
`

const TokenCard = () => {
  const { t } = useTranslation('verusIdPage')
  return (
    <StyledCard>
      <StyledHeadingContainer>
        <Img name="identity-bgBlue" />
        <StyledHeading>
          <DefaultText fam="geoHead" fontSz="xl" customColor="#0F0F0F">
            {t('takeControl.heading')}
          </DefaultText>
          <DefaultText fontSz="modal" customColor="#676767" className="subtext">
            {t('takeControl.text')}
          </DefaultText>
        </StyledHeading>
      </StyledHeadingContainer>
      <StyledEmpower>
        <Img height={48} name="iconmonstr-user" />
        <DefaultText fam="geoHead" fontSz="mdlg" align="center">
          {t('takeControl.empower')}
        </DefaultText>
      </StyledEmpower>
      <Grid className="subGrid">
        <StyledGridCard>
          <StyledImgContainer>
            <Bank />
          </StyledImgContainer>
          <StyledDefaultText
            fam="geoHead"
            fontSz="sm"
            customMargin="25px 0 10px"
          >
            {t('takeControl.cards.store.heading')}
          </StyledDefaultText>
          <StyledSubText>{t('takeControl.cards.store.text')}</StyledSubText>
        </StyledGridCard>
        <StyledGridCard>
          <StyledImgContainer>
            <Eye />
          </StyledImgContainer>
          <StyledDefaultText fam="geoHead" fontSz="sm">
            {t('takeControl.cards.privacy.heading')}
          </StyledDefaultText>
          <StyledSubText>{t('takeControl.cards.privacy.text')}</StyledSubText>
        </StyledGridCard>
        <StyledGridCard>
          <StyledImgContainer>
            <File />
          </StyledImgContainer>
          <StyledDefaultText fam="geoHead" fontSz="sm">
            {t('takeControl.cards.data.heading')}
          </StyledDefaultText>
          <StyledSubText>{t('takeControl.cards.data.text')}</StyledSubText>
        </StyledGridCard>
        <StyledGridCard>
          <StyledImgContainer>
            <User />
          </StyledImgContainer>
          <StyledDefaultText fam="geoHead" fontSz="sm">
            {t('takeControl.cards.passwordless.heading')}
          </StyledDefaultText>
          <StyledSubText>
            {t('takeControl.cards.passwordless.text')}
          </StyledSubText>
        </StyledGridCard>
        <StyledGridCard>
          <StyledImgContainer>
            <Key />
          </StyledImgContainer>
          <StyledDefaultText fam="geoHead" fontSz="sm">
            {t('takeControl.cards.recovery.heading')}
          </StyledDefaultText>
          <StyledSubText>{t('takeControl.cards.recovery.text')}</StyledSubText>
        </StyledGridCard>
        <StyledGridCard>
          <StyledImgContainer>
            <Lock />
          </StyledImgContainer>
          <StyledDefaultText fam="geoHead" fontSz="sm">
            {t('takeControl.cards.vault.heading')}
          </StyledDefaultText>
          <StyledSubText>{t('takeControl.cards.vault.text')}</StyledSubText>
        </StyledGridCard>
      </Grid>
    </StyledCard>
  )
}

export default TokenCard
