import React from 'react'
import { NextSeo } from 'next-seo'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import useTranslation from 'next-translate/useTranslation'
import { MainLayout, Grid } from '@/components/layouts'
import { DefaultLinkCard } from '@/components/elements'
import { CoinpageProps } from '@/types/coinpage'

import { FaqJSON } from '@/data/coinpage'

import { CardSection, FAQ } from '@/components/sections/Coin'

const Coin = ({
  data,
}: CoinpageProps): InferGetStaticPropsType<typeof getStaticProps> => {
  const { t } = useTranslation('coin')
  const title = t('seo:page.coin.title')
  const description = t('seo.page.coin.description')
  const JumbotronJSON = {
    header: t('jumbotron.heading'),
    text: t('jumbotron.text'),
    width: 1000,
  }

  return (
    <>
      <NextSeo title={title} description={description} />
      <MainLayout jumbotronData={JumbotronJSON}>
        <CardSection />
        <FAQ {...data.FaqJSON} />
        <Grid>
          <DefaultLinkCard card="create" />
          <DefaultLinkCard card="global" />
          <DefaultLinkCard card="foundation" />
        </Grid>
      </MainLayout>
    </>
  )
}

export default Coin

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      data: {
        FaqJSON,
      },
    },
  }
}
