import React from 'react'
import useSWR from 'swr'
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
  EconomyBanner,
} from '@/components/sections/Economy'

import { getVerusStats } from './api/verusNetworkStats'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const Economy = ({ fallback }: { fallback: any }) => {
  const { t } = useTranslation('economy')
  const { data } = useSWR('/api/verusNetworkStats', fetcher, {
    refreshInterval: 60000,
    fallback,
  })

  const title = t('seo:page.economy.title')
  const description = t('seo:page.economy.description')

  return (
    <>
      <NextSeo title={title} description={description} />
      <MainLayout>
        <Grid>
          <Card styles="justify-content: flex-end; padding: 50px 20px;">
            <CardText book fontSz="sm" text={t('staking.heading')} />
            <CardText
              book
              fontSz="xl"
              margin="27px 0 0 0"
              color="blue"
              text={data.staking}
            />
            <CardText
              book
              fontSz="sm"
              margin="16px 0 60px 0"
              text={`/ ${data.coinSupply} ${t('staking.outOf')}`}
            />
            <Progressbar value={data.progressBarValue} />
            <CardText
              fontSz="sm"
              book
              text={`${data.progressBarValue}% ${t('staking.staking')}`}
            />
          </Card>
          <Card styles="justify-content: flex-end; padding: 50px 20px;">
            <CardText book fontSz="sm" text={t('hashrate.heading')} />
            <CardText
              book
              fontSz="xl"
              margin="27px 0 0 0"
              color="blue"
              text={data.miningHashRate}
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
                text={`${data.mobile} ${t('hashrate.mobile')}`}
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
                text={`${data.desktop} ${t('hashrate.desktop')}`}
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
              {t('note', { totalHash: data.totalHashRate })}
            </DefaultText>
          </Section>

          <ParticipateCard />
          <EconomicCard />
          <EconomyBanner />
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
  const stats = await getVerusStats()
  return {
    props: {
      fallback: {
        '/api/verusNetworkStats': stats,
      },
    },
  }
}
