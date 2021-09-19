import { GetServerSideProps } from 'next'
import { NextSeo } from 'next-seo'
import styled from 'styled-components'
import { media } from 'styled-bootstrap-grid'
import useTranslation from 'next-translate/useTranslation'
import { MainLayout } from '@/components/layouts'
import { Button, Card, CardText, NetTag } from '@/components/elements'
import {
  fontFam,
  bgColor,
  formatDateFromString,
  spacer,
} from '@/styles/helpers'

import {
  DesktopDownload,
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
  padding: ${(props: any) =>
    props.bg
      ? '44px 50px 278px'
      : props.convert
      ? '24px 50px 300px'
      : '75px 30px'};
  justify-content: space-between;
  align-items: center;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 13px -10px rgb(0 0 0 / 13%);
  height: 316px;
  background-repeat: no-repeat;
  background-position: center bottom -30px;
  ${media.tablet`
    border-radius: 20px;
    height: ${(props: any) => (props.bg || props.convert ? '566px' : '370px')};
    padding: ${(props: any) =>
      props.bg
        ? '86px 84px 378px'
        : props.convert
        ? '56px 184px 400px'
        : '100px 185px'};
    min-width: 342px;
    background-repeat: no-repeat;
    background-position: center bottom -60px;
    ${(props: any) => props.getToKnow && 'background-size: 619px auto;'}
    ${(props: any) => props.staking && 'background-size: 616px auto;'}
    ${(props: any) => props.convert && 'background-size: 618px auto;'}
  `}
  ${media.desktop`
    padding: ${(props: any) =>
      props.bg
        ? '86px 84px 378px'
        : props.convert
        ? '56px 84px 378px'
        : '100px'};
  `}
  ${(props: any) =>
    props.getToKnow &&
    `
    background-image: url('/images/getToKnow.png');
    background-size: 295px auto;
  `}
  ${(props: any) =>
    props.staking &&
    `
      background-image: url('/images/staking.png');
      background-size: 295px auto;
  `}
  ${(props: any) =>
    props.convert &&
    `
      background-image: url('/images/convert.png');
      background-size: 295px auto;
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

const Desktop = ({
  linuxApp,
  winApp,
  macApp,
  armApp,
  name,
  published_at,
}: {
  linuxApp: string
  winApp: string
  macApp: string
  armApp: string
  name: string
  published_at: string
}) => {
  const { t } = useTranslation('walletDesktop')
  const title = t('seo:page.desktop.title')
  const description = t('seo.page.desktop.description')
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
              <DesktopDownload
                linuxApp={linuxApp}
                winApp={winApp}
                macApp={macApp}
                armApp={armApp}
              />
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
                  href="https://github.com/VerusCoin/Verus-Desktop/releases/latest"
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
          <StyledCard getToKnow bg>
            <CardText
              book
              fontSz="mdlg"
              margin="0"
              text={t('cards.getToKnow')}
            />
          </StyledCard>
          <StyledCard staking bg>
            <CardText book fontSz="mdlg" margin="0" text={t('cards.staking')} />
          </StyledCard>
          <StyledCard convert>
            <NetTag net="test" unMargin />
            <CardText book fontSz="mdlg" margin="0" text={t('cards.convert')} />
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
              text={t('cards.store')}
            />
            <DesktopDownload
              linuxApp={linuxApp}
              winApp={winApp}
              macApp={macApp}
              armApp={armApp}
            />
          </StyledCard>
          <WalletSubtext />
        </StyledContainer>
      </MainLayout>
    </>
  )
}

export default Desktop

export const getServerSideProps: GetServerSideProps = async () => {
  const result = await fetch(
    'https://api.github.com/repos/VerusCoin/Verus-Desktop/releases/latest'
  )
  const latestDesktop = await result.json()
  let linuxApp,
    winApp,
    macApp,
    armApp = ''

  const name = latestDesktop.name
  const published_at = latestDesktop.published_at
  latestDesktop.assets.map((asset: any) => {
    if (asset.name.includes('arm64')) {
      armApp = asset.browser_download_url
    }

    if (asset.name.includes('Windows')) {
      winApp = asset.browser_download_url
    }

    if (asset.name.includes('MacOS')) {
      macApp = asset.browser_download_url
    }

    if (asset.name.includes('x86_64')) {
      linuxApp = asset.browser_download_url
    }
  })

  return {
    props: { name, published_at, linuxApp, winApp, macApp, armApp },
  }
}
