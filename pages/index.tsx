import React from 'react'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import useTranslation from 'next-translate/useTranslation'
import { HomepageProps } from 'types/homepage'
import { CardsJSON, BlogJSON } from '@/data/homepage'
import { MainLayout, Section, Grid } from '@/components/layouts'
import {
  Button,
  DefaultHeader,
  // TypedJS,
  DefaultSVGs,
  Img,
} from '@/components/elements'

import {
  Banner,
  Blog,
  BlueEarthCard,
  LinkCards,
  ChainLinkCards,
  LifeBloodLinkCards,
  KnowCards,
} from '@/components/sections/Home'

import Cards from '@/components/elements/Cards/Cards'
import CardHeader from '@/components/elements/Cards/CardHeader'
import CardText from '@/components/elements/Cards/CardText'

const Home = ({
  data,
}: HomepageProps): InferGetStaticPropsType<typeof getStaticProps> => {
  const { t } = useTranslation('home')
  const JumbotronJSON = {
    header: t('jumbotron.heading'),
    color: 'default',
    buttons: [
      { text: t('jumbotron.buttons.first'), href: '#' },
      { text: t('jumbotron.buttons.second'), href: '/create-with-verus' },
    ],
    width: 1000,
  }
  return (
    <MainLayout bG="greyQuin" jumbotronData={JumbotronJSON}>
      <Grid>
        <Banner />

        {CardsJSON.map((card, index) => {
          const heading = t(`cards.${card.card}.header`)
          return (
            <Cards key={index}>
              <Img name={card.svg} />
              <CardHeader text={heading} />
              <CardText regular={true} text={t(`cards.${card.card}.text`)} />
            </Cards>
          )
        })}
        <BlueEarthCard>
          <CardHeader color="white" text={t('cards.createCard.header')} />
          <Button
            transparent
            svg={{ type: 'arrow', rotate: false }}
            href="/create-with-verus"
            as="a"
            color="white"
            fontRegular
          >
            {t('cards.createCard.link')}
          </Button>
        </BlueEarthCard>
        <LinkCards>
          <CardHeader text={t('cards.foundationCard.header')} />
          <Button
            transparent
            svg={{ type: 'arrow', rotate: false }}
            href="/foundations"
            as="a"
            color="#3165d4"
            fontRegular
          >
            {t('cards.foundationCard.link')}
          </Button>
        </LinkCards>
        <ChainLinkCards>
          <CardHeader text={t('cards.globalCard.header')} />
          <Button
            transparent
            svg={{ type: 'arrow', rotate: false }}
            href="/global-network"
            as="a"
            color="#3165d4"
            fontRegular
          >
            {t('cards.globalCard.link')}
          </Button>
        </ChainLinkCards>
        <LifeBloodLinkCards>
          <CardHeader text={t('cards.coinCard.header')} />
          <Button
            transparent
            svg={{ type: 'arrow', rotate: false }}
            href="/coin"
            as="a"
            color="#3165d4"
            fontRegular
          >
            {t('cards.coinCard.link')}
          </Button>
        </LifeBloodLinkCards>
        <KnowCards>
          <CardText fontSz="xs" color="white" text={t('cards.knowCard.know')} />
          <CardHeader as="h5" color="white" text={t('cards.knowCard.header')} />

          <CardHeader
            width="50px"
            as="h3"
            color="white"
            text={t('cards.knowCard.text')}
          />
        </KnowCards>
      </Grid>

      <Blog {...data.BlogJSON} />
    </MainLayout>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      data: {
        BlogJSON,
      },
    },
  }
}
