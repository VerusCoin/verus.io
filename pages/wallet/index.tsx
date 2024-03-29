import { NextSeo } from 'next-seo'
import { GetServerSideProps } from 'next'
import styled from 'styled-components'
import { media } from 'styled-bootstrap-grid'
import useTranslation from 'next-translate/useTranslation'
import dayjs from 'dayjs'
import { MainLayout, Grid } from '@/components/layouts'
import {
  Button,
  CardHeader,
  CardText,
  DefaultText,
  SVGs,
} from '@/components/elements'

import { fontFam, bgColor } from '@/styles/helpers'

import { CLIdownload, WalletSubtext } from '@/components/sections/Wallet'
import DesktopTestnetDownload from '@/components/sections/Wallet/DesktopTestnetDownload'

const StyledCard = styled.div<any>`
  ${bgColor('white')}
  border-radius: 8px;

  justify-content: space-between;
  align-items: center;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 13px -10px rgb(0 0 0 / 13%);
  padding: ${(props: any) =>
    props.large ? '100px 65px 332px' : '100px 25px 50px'};
  height: ${(props: any) => (props.large ? '536px' : '540px')};
  ${media.tablet`
    border-radius: 20px;
    max-width: 400px;
    min-width: 342px;
    padding: ${(props: any) =>
      props.large ? '100px 25px 275px' : '100px 65px 50px'};
    height: ${(props: any) => (props.large ? '586px' : '540px')};
    ${(props: any) =>
      props.desktop &&
      `
      background-size:  341px auto;
      background-position: center bottom -43px;
      `}
    ${(props: any) =>
      props.mobile &&
      `
        background-position: left 76px bottom -19px,left 136px bottom -84px;
        background-size: 116px auto, 177px auto;
      `}
  `}

  ${media.desktop`
    min-width: 490px;
    max-width: none;
    padding: ${(props: any) =>
      props.large ? '100px 35px 332px' : '100px 95px 50px'};
    height: ${(props: any) => (props.large ? '636px' : '540px')};
    ${(props: any) => props.desktop && 'background-size:  387px auto;'}
    ${(props: any) =>
      props.mobile &&
      `
        background-position: left 106px bottom -26px,left 166px bottom -118px;
        background-size: 148px auto, 227px auto;
      `}
  `}

  ${media.giant`
    padding: ${(props: any) =>
      props.large ? '100px 65px 332px' : '100px 95px 50px'};
    ${(props: any) => props.desktop && 'background-size:  434px auto;'}
    ${(props: any) =>
      props.mobile &&
      `
        background-position: left 136px bottom -26px,left 196px bottom -118px;
        
      `}
  `}

  ${(props: any) =>
    props.desktop &&
    `
      background-image: url('/images/desktop-wallet.png');
      background-repeat: no-repeat;
      background-position: center bottom -33px;
      background-size: 295px auto;
    `}
  ${(props: any) =>
    props.mobile &&
    `
      background-image: url('/images/mobile-front.png'),url('/images/mobile-back.png');
      background-repeat: no-repeat;
      background-position: left 96px bottom -16px,left 156px bottom -68px;
      background-size: 99px auto, 152px auto;
    `}
  p.info span {
    ${fontFam('geoHead')}
  }
  a.external {
    svg {
      height: 12px;
      margin-left: 5px;
    }
  }
`

const StyledDownload = styled.a`
  ${bgColor('white')}
  border: 1px solid #dfdfdf;
  background: transparent;
  display: inline-flex;
  width: 228px;
  margin-top: 61px;
  margin-bottom: 120px;
  justify-content: space-between;
  align-items: center;
  padding: 14px 20px;
  box-shadow: 0px 0px 16px -4px #0000001f;
  border-radius: 10px;
  text-decoration: none;
  color: inherit;
`

const StyledTestNet = styled.div`
  display: flex;
`

interface List {
  linuxApp: string
  winApp: string
  macApp: string
  armApp: string
  name: string
  published_at: string
}

interface FullList extends List {
  name: string
  published_at: string
}

interface WalletLists {
  cli: FullList
  testnet: List
}

const Wallet = ({ cli, testnet }: WalletLists) => {
  const { t } = useTranslation('wallet')
  const title = t('seo:page.wallet.title')
  const description = t('seo:page.wallet.description')

  return (
    <>
      <NextSeo title={title} description={description} />
      <MainLayout>
        <Grid>
          <StyledCard large desktop>
            <CardHeader margin="0" text={t('cards.desktop.header')} />
            <CardText margin="25px 0 0 " text={t('cards.desktop.text')} />
            <Button
              transparent
              svg={{ type: 'arrow', rotate: false }}
              href="/wallet/desktop"
              as="a"
              color="#3165d4"
              margin="65px 0 0 "
            >
              {t('cards.desktop.link')}
            </Button>
          </StyledCard>
          <StyledCard large mobile>
            <CardHeader margin="0" text={t('cards.mobile.header')} />
            <CardText margin="25px 0 0 " text={t('cards.mobile.text')} />
            <Button
              transparent
              svg={{ type: 'arrow', rotate: false }}
              href="/wallet/mobile"
              as="a"
              color="#3165d4"
              margin="65px 0 0 "
            >
              {t('cards.mobile.link')}
            </Button>
          </StyledCard>
          <StyledCard>
            <CardHeader margin="0" text={t('cards.cli.header')} />
            <CardText margin="25px 0 0 " text={t('cards.cli.text')} />
            <CLIdownload
              linuxApp={cli.linuxApp}
              winApp={cli.winApp}
              macApp={cli.macApp}
              armApp={cli.armApp}
            />
            <div>
              <CardText
                className="info"
                margin="29px 0 0 "
                fontSz="xs"
                align="left"
                text={t('common:latestVersion', { walletVersion: cli.name })}
              />
              <CardText
                className="info"
                margin="16px 0"
                fontSz="xs"
                align="left"
                text={t('common:released', {
                  release: dayjs(cli.published_at).format('MMM DD, YYYY'),
                })}
              />
              <Button
                className="external"
                transparent
                svg={{ type: 'miniTab', rotate: false }}
                href="https://github.com/VerusCoin/VerusCoin/releases/latest"
                as="a"
                color="#3165d4"
                margin="0"
                fontSize="xs"
                target="_blank"
              >
                {t('common:githubRepo')}
              </Button>
            </div>
          </StyledCard>
          <StyledCard>
            <CardHeader margin="0" text={t('cards.storage.header')} />
            <CardText margin="25px 0 0 " text={t('cards.storage.text')} />
            <StyledDownload
              href="https://paperwallet.verus.io/VerusPaperWallet.zip"
              download
            >
              <DefaultText align="center" fam="geoHead" fontSz="menu">
                {t('cards.storage.download')}
              </DefaultText>
            </StyledDownload>
          </StyledCard>
          <StyledCard>
            <StyledTestNet>
              <SVGs name="testnet" />
              <CardHeader margin="0" text="Desktop Testnet" />
            </StyledTestNet>

            <CardText
              margin="15px 0 0 "
              text="Participate in Verus testnet to get to know the functions at no financial risk, test your usecases or help development."
            />
            <DesktopTestnetDownload
              linuxApp={testnet.linuxApp}
              winApp={testnet.winApp}
              macApp={testnet.macApp}
              armApp={testnet.armApp}
            />
            <div>
              <Button
                className="external"
                transparent
                svg={{ type: 'miniTab', rotate: false }}
                href="https://github.com/VerusCoin/Verus-Desktop/releases"
                as="a"
                color="#3165d4"
                margin="0"
                fontSize="xs"
                target="_blank"
              >
                {t('common:githubRepo')}
              </Button>
            </div>
          </StyledCard>

          <WalletSubtext />
        </Grid>
      </MainLayout>
    </>
  )
}

export default Wallet

export const getServerSideProps: GetServerSideProps = async () => {
  // const result = await fetch(
  //   'https://api.github.com/repos/VerusCoin/VerusCoin/releases/latest'
  // )
  const cliResult = await fetch(
    'http://localhost:3000/api/verusWallets?wallet=cli'
  ).then((res) => res.json())
  const testnetResult = await fetch(
    'http://localhost:3000/api/verusWallets?wallet=testnet'
  ).then((res) => res.json())

  return {
    // props: { linuxApp, winApp, macApp, armApp, name, published_at },
    props: { cli: cliResult, testnet: testnetResult },
  }
}
