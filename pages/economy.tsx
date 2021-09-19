import React from 'react'
import { NextSeo } from 'next-seo'
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

const Economy = () => {
  const { t } = useTranslation('economy')
  const title = t('seo:page.economy.title')
  const description = t('seo.page.economy.description')
  const JumbotronJSON = {
    header: t('jumbotron.heading'),
    text: t('jumbotron.text'),
    width: 1000,
  }
  const ProgressBarValue = 75
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
              text="42,631,653"
            />
            <CardText
              book
              fontSz="sm"
              margin="16px 0 60px 0"
              text={`/ 62,467,134 ${t('staking.outOf')}`}
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
              text="356 GH/s"
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
                text={`118,666 ${t('hashrate.mobile')}`}
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
                text={`11,866 ${t('hashrate.desktop')}`}
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
