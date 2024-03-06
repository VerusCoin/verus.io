import React from 'react'
import { NextSeo } from 'next-seo'
import useTranslation from 'next-translate/useTranslation'
import { MainLayout, Grid } from '@/components/layouts'
import { Button, Card, CardText, AddressCopy } from '@/components/elements'
import { SocialCards, DonationSection } from '@/components/sections/Community'

const Contribute = () => {
  const { t } = useTranslation('contribute')
  const title = t('seo:page.contribute.title')
  const description = t('seo:page.contribute.description')
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
          <SocialCards />

          <Card
            span={2}
            styles="height: unset"
            tabletStyles="height: unset"
            desktopStyles="height: unset"
          >
            <CardText
              book
              fontSz="xl"
              margin="32px 64px;"
              text={t('supportCard.header')}
            />
            <CardText
              book
              fontSz="md"
              text={t('supportCard.text')}
              margin="32px auto;"
              styles="max-width: 550px;"
            />
            <CardText
              fontSz="xs"
              text={t('supportCard.subtext')}
              margin="32px auto;"
              color="#676767"
            />
            <DonationSection />
            <CardText
              book
              fontSz="md"
              text={t('supportCard.mine')}
              margin="200px auto 32px;"
              styles="max-width: 550px;"
            />
            <Button
              transparent
              svg={{ type: 'tab', rotate: false }}
              href="https://pool.verus.io"
              as="a"
              color="#3165d4"
              target="_blank"
            >
              {t(`supportCard.mineLink`)}
            </Button>
            <CardText
              book
              fontSz="md"
              text={t('supportCard.referral')}
              margin="146px auto 32px;"
              styles="max-width: 550px;"
            />
            <AddressCopy text="Verus Coin Foundation@" />
          </Card>
        </Grid>
      </MainLayout>
    </>
  )
}


export default Contribute
