import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import { MainLayout, Grid, Section } from '@/components/layouts'
import { DefaultText, Img, Progressbar, NetTag } from '@/components/elements'

import Cards from '@/components/elements/Cards/Cards'
import CardText from '@/components/elements/Cards/CardText'

import {
  ParticipateCard,
  EconomicCard,
  Banner,
} from '@/components/sections/Economy'

const Economy = () => {
  const { t } = useTranslation('economy')
  const JumbotronJSON = {
    header: t('jumbotron.heading'),
    text: t('jumbotron.text'),
    width: 1000,
  }
  const ProgressBarValue = 75
  return (
    <MainLayout jumbotronData={JumbotronJSON}>
      <Grid>
        <Cards>
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
        </Cards>
        <Cards>
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
            <Img name="iconmonstr-smartphone" height={24} />
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
            <Img name="iconmonstr-cpu" height={24} />
            <CardText
              book
              fontSz="sm"
              margin="0"
              text={`11,866 ${t('hashrate.desktop')}`}
            />
          </div>
        </Cards>
        <div
          style={{
            gridColumn: 'span 2',
            width: '750px',
            margin: 'auto',
          }}
        >
          <Section>
            <DefaultText align="center">{t('note')}</DefaultText>
          </Section>
        </div>
        <ParticipateCard />
        <EconomicCard />
        <Banner />
        <Cards>
          <NetTag net="test" />
          <CardText book fontSz="xl" text={t('defi.heading')} />
          <CardText margin="32px 0" book fontSz="sm" text={t('defi.text')} />
        </Cards>
        <Cards>
          <NetTag net="main" />
          <CardText book fontSz="xl" text={t('referral.heading')} />
          <CardText
            margin="32px 0"
            book
            fontSz="sm"
            text={t('referral.text')}
          />
        </Cards>
      </Grid>
    </MainLayout>
  )
}

export default Economy
