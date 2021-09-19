import { NextSeo } from 'next-seo'
import { GetServerSideProps } from 'next'
import styled from 'styled-components'
import { media } from 'styled-bootstrap-grid'
import useTranslation from 'next-translate/useTranslation'
import { MainLayout } from '@/components/layouts'
import { Button, Card, CardText } from '@/components/elements'
import {
  fontFam,
  bgColor,
  formatDateFromString,
  spacer,
} from '@/styles/helpers'

import {
  MobileDownload,
  WalletSubtext,
  CoinCard,
} from '@/components/sections/Wallet'

const StyledMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${media.tablet`
      flex-direction: row;
    `}
`

const StyledInfo = styled.div`
  margin-top: 29px;
  margin-left: auto;
  margin-right: auto;
  p.info span {
    ${fontFam('geoHead')}
  }
  a.external {
    svg {
      margin-left: 5px;
      height: 12px;
      width: 12px;
    }
  }
  ${media.tablet`
    margin-top: 0;
    margin-left: 82px;
  `}
`

const StyledCard = styled.div<any>`
  ${bgColor('white')}
  border-radius: 8px;
  padding: ${(props) => (props.bg ? '44px 50px 278px' : '75px 30px')};
  justify-content: space-between;
  align-items: center;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 13px -10px rgb(0 0 0 / 13%);
  height: 316px;
  background-repeat: no-repeat;
  background-position: center bottom -151px;
  background-size: 167px auto;
  ${media.tablet`
    border-radius: 20px;
    height: ${(props: any) => (props.bg ? '566px' : '370px')};
    padding: ${(props: any) => (props.bg ? '86px 84px 378px' : '100px 185px')};
    min-width: 342px;
    background-repeat: no-repeat;
    background-position: center bottom -201px;
    background-size: 267px auto;
    
    
  `}
  ${media.desktop`
    padding: ${(props: any) => (props.bg ? '86px 84px 378px' : '100px')};
  `}
  ${(props: any) =>
    props.wallet &&
    `
    background-image: url('/images/mobile-wallet.png');
    
  `}
  ${(props: any) =>
    props.verusId &&
    `
      background-image: url('/images/mobile-verusID.png');
      
  `}
`

const StyledContainer = styled.div<any>`
  ${spacer('xxl')}
  justify-content: center;
  grid-auto-rows: auto;
  padding: 0 20px;
  margin-left: auto;
  margin-right: auto;
  max-width: 430px;

  display: flex;
  flex-direction: column;
  grid-gap: 20px;
  grid-template-rows: auto;

  ${media.tablet`
    
    max-width: 750px;
    padding: 0;
  
  `}
`

const Mobile = ({
  name,
  published_at,
}: {
  name: string
  published_at: string
}) => {
  const { t } = useTranslation('walletMobile')
  const title = t('seo:page.mobile.title')
  const description = t('seo.page.mobile.description')
  const JumbotronJSON = {
    header: t('jumbotron.heading'),
    text: t('jumbotron.text'),
    width: 1000,
  }
  return (
    <>
      <NextSeo title={title} description={description} />
      <MainLayout jumbotronData={JumbotronJSON}>
        <StyledContainer>
          <Card
            styles={
              'background-color: transparent; min-height:unset; padding: 0 30px 50px ;'
            }
            tabletStyles={
              ' min-height:unset; padding: 0 60px 75px ; max-width:unset;'
            }
            desktopStyles={' padding: 0 60px 100px; height: unset !important;'}
          >
            <StyledMenu>
              <MobileDownload />
              <StyledInfo>
                <CardText
                  className="info"
                  margin="0"
                  fontSz="xs"
                  align="left"
                  text={t('common:latestVersion', { walletVersion: name })}
                />
                <CardText
                  className="info"
                  margin="16px 0"
                  fontSz="xs"
                  align="left"
                  text={t('common:released', {
                    release: formatDateFromString(published_at),
                  })}
                />
                <Button
                  className="external"
                  transparent
                  svg={{ type: 'miniTab', rotate: false }}
                  href="https://github.com/VerusCoin/Verus-Mobile/releases/latest"
                  as="a"
                  color="#3165d4"
                  margin="0"
                  fontSize="xs"
                  target="_blank"
                >
                  {t('common:githubRepo')}
                </Button>
              </StyledInfo>
            </StyledMenu>
          </Card>
          <StyledCard wallet bg>
            <CardText book fontSz="mdlg" margin="0" text={t('cards.wallet')} />
          </StyledCard>
          <StyledCard verusId bg>
            <CardText book fontSz="mdlg" margin="0" text={t('cards.verusId')} />
          </StyledCard>

          <CoinCard
            header={t('cards.support.header')}
            text={t('cards.support.text')}
          />
          <StyledCard>
            <CardText
              book
              fontSz="mdlg"
              margin="0 0 50px"
              text={t('cards.useMobile')}
            />
            <MobileDownload />
          </StyledCard>
          <WalletSubtext />
        </StyledContainer>
      </MainLayout>
    </>
  )
}

export default Mobile

export const getServerSideProps: GetServerSideProps = async () => {
  const result = await fetch(
    'https://api.github.com/repos/VerusCoin/Verus-Mobile/releases'
  )
  const latestAndroid = await result.json()
  const name = latestAndroid[0].name
  const published_at = latestAndroid[0].published_at
  return {
    props: { name, published_at },
  }
}
