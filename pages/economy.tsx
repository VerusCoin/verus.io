import React from 'react'
import { NextSeo } from 'next-seo'
import { GetServerSideProps } from 'next'
import useTranslation from 'next-translate/useTranslation'
import { MainLayout, Grid, Section } from '@/components/layouts'
import {
  DefaultText,
  Img,
  Progressbar,
  NetTag,
  Card,
  CardText,
} from '@/components/elements'

import {
  ParticipateCard,
  EconomicCard,
  Banner,
} from '@/components/sections/Economy'
import { HashRateConverter } from '@/styles/helpers'

interface EconomyProps {
  staking: string
  hashRate: string
  ProgressBarValue: number
  coinSupply: string
  mobile: string
  desktop: string
}

const Economy = ({
  staking,
  hashRate,
  ProgressBarValue,
  coinSupply,
  mobile,
  desktop,
}: EconomyProps) => {
  const { t } = useTranslation('economy')

  const title = t('seo:page.economy.title')
  const description = t('seo:page.economy.description')
  const JumbotronJSON = {
    header: t('jumbotron.heading'),
    text: t('jumbotron.text'),
    width: 1000,
  }

  return (
    <>
      <NextSeo title={title} description={description} />
      <MainLayout jumbotronData={JumbotronJSON}>
        <Grid>
          <Card styles="justify-content: flex-end; padding: 50px 20px;">
            <CardText book fontSz="sm" text={t('staking.heading')} />
            <CardText
              book
              fontSz="xl"
              margin="27px 0 0 0"
              color="blue"
              text={staking}
            />
            <CardText
              book
              fontSz="sm"
              margin="16px 0 60px 0"
              text={`/ ${coinSupply} ${t('staking.outOf')}`}
            />
            <Progressbar value={ProgressBarValue} />
            <CardText
              fontSz="sm"
              book
              text={`${ProgressBarValue}% ${t('staking.staking')}`}
            />
          </Card>
          <Card styles="justify-content: flex-end; padding: 50px 20px;">
            <CardText book fontSz="sm" text={t('hashrate.heading')} />
            <CardText
              book
              fontSz="xl"
              margin="27px 0 0 0"
              color="blue"
              text={hashRate}
            />

            <CardText
              book
              fontSz="xs"
              margin="47px 0 0 0"
              text={t('hashrate.text')}
            />
            <div
              style={{
                marginTop: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Img
                name="iconmonstr-smartphone"
                height={24}
                styles="margin-right: 6px;"
              />
              <CardText
                book
                fontSz="sm"
                margin="0"
                text={`${mobile} ${t('hashrate.mobile')}`}
              />
            </div>
            <CardText book fontSz="xs" text={t('hashrate.or')} />
            <div
              style={{
                marginTop: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Img
                name="iconmonstr-cpu"
                height={24}
                styles="margin-right: 6px;"
              />
              <CardText
                book
                fontSz="sm"
                margin="0"
                text={`${desktop} ${t('hashrate.desktop')}`}
              />
            </div>
          </Card>

          <Section styles="grid-column: span 2; margin: auto;" width={800}>
            <DefaultText
              fontSz="xxs"
              fam="geoReg"
              customColor="#676767"
              align="center"
            >
              {t('note')}
            </DefaultText>
          </Section>

          <ParticipateCard />
          <EconomicCard />
          <Banner />
          <Card desktopStyles="height: unset">
            <NetTag net="test" />
            <CardText book fontSz="xl" text={t('defi.heading')} />
            <CardText margin="32px 0" book fontSz="sm" text={t('defi.text')} />
          </Card>
          <Card desktopStyles="height: unset">
            <NetTag net="main" />
            <CardText book fontSz="xl" text={t('referral.heading')} />
            <CardText
              margin="32px 0"
              book
              fontSz="sm"
              text={t('referral.text')}
            />
          </Card>
        </Grid>
      </MainLayout>
    </>
  )
}

export default Economy

export const getServerSideProps: GetServerSideProps = async () => {
  const MobileHash = 3000000 //3Mh
  const DesktopHash = 30000000 //30Mh
  try {
    let result = await fetch('https://explorer.verus.io/api/getmininginfo')
    const miningInfo = await result.json()
    result = await fetch('https://explorer.verus.io/api/coinsupply')
    let coinSupply = await result.json()
    const mobile = (miningInfo.networkhashps / MobileHash)
      .toFixed(0)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    const desktop = (miningInfo.networkhashps / DesktopHash)
      .toFixed(0)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')

    miningInfo.networkhashps = HashRateConverter(miningInfo.networkhashps)
    const stakingSupply: any = parseFloat(miningInfo.stakingsupply).toFixed(0)
    coinSupply = parseFloat(coinSupply.total).toFixed(0)
    const ProgressBarValue: any = ((stakingSupply / coinSupply) * 100).toFixed(
      0
    )
    coinSupply = coinSupply.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')

    miningInfo.stakingsupply = stakingSupply
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    return {
      props: {
        staking: miningInfo.stakingsupply,
        hashRate: miningInfo.networkhashps,
        coinSupply: coinSupply,
        ProgressBarValue: ProgressBarValue,
        mobile: mobile,
        desktop: desktop,
      },
    }
  } catch (err) {
    console.error('error in economy: %s', err)
    return {
      props: {
        staking: '42,631,653',
        hashRate: '800 GH/s',
        coinSupply: '62,467,134',
        ProgressBarValue: 75,
        mobile: '118,666',
        desktop: '11,866',
      },
    }
  }
}
