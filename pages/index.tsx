import React from 'react'
import { NextSeo } from 'next-seo'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import useTranslation from 'next-translate/useTranslation'
import { HomepageProps } from 'types/homepage'
import { CardsJSON, BlogJSON } from '@/data/homepage'
import { MainLayout, Grid } from '@/components/layouts'
import {
  Img,
  Card,
  CardHeader,
  CardText,
  DefaultLinkCard,
} from '@/components/elements'

import { Banner, Blog, KnowCards } from '@/components/sections/Home'

const Home = ({
  data,
}: HomepageProps): InferGetStaticPropsType<typeof getStaticProps> => {
  const { t } = useTranslation('home')
  const title = t('seo:page.index.title')
  const description = t('seo.page.index.description')
  const JumbotronJSON = {
    header: t('jumbotron.heading'),
    color: 'default',
    buttons: [
      { text: t('jumbotron.buttons.first'), href: '/economy' },
      { text: t('jumbotron.buttons.second'), href: '/create' },
    ],
    youtube: {
      text: t('jumbotron.youtube'),
      href: 'https://www.youtube.com/watch?v=eOn9XpjkuCA',
    },
    width: 1000,
  }

  const CardList = data.CardsJSON
  return (
    <>
      <NextSeo title={title} description={description} />
      <MainLayout jumbotronData={JumbotronJSON}>
        <Grid>
          <Banner />

          {CardList.map((card, index) => {
            const heading = t(`cards.${card.card}.header`)
            return (
              <Card key={index}>
                <Img height="75px" name={card.svg} />
                <CardHeader text={heading} />
                <CardText text={t(`cards.${card.card}.text`)} />
              </Card>
            )
          })}
          <DefaultLinkCard card="create" />
          <DefaultLinkCard card="foundation" />
          <DefaultLinkCard card="global" />
          <DefaultLinkCard card="coin" />

          <KnowCards>
            <CardText
              fontSz="xs"
              color="white"
              text={t('cards.knowCard.know')}
            />
            <CardText
              book
              fontSz="sm"
              color="white"
              text={t('cards.knowCard.header')}
            />

            <CardText
              fontSz="mdlg"
              color="white"
              text={t('cards.knowCard.text')}
            />
          </KnowCards>
        </Grid>

        <Blog {...data.BlogJSON} />
      </MainLayout>
    </>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      data: {
        BlogJSON,
        CardsJSON,
      },
    },
  }
}
