import React from 'react'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import useTranslation from 'next-translate/useTranslation'
import { MainLayout } from '@/components/layouts'

import { CoinpageProps } from '@/types/coinpage'

import { FaqJSON } from '@/data/coinpage'

import { CardSection, FAQ } from '@/components/sections/Coin'

const Coin = ({
  data,
}: CoinpageProps): InferGetStaticPropsType<typeof getStaticProps> => {
  const { t } = useTranslation('coin')
  const JumbotronJSON = {
    header: t('jumbotron.heading'),
    text: t('jumbotron.text'),
    width: 1000,
  }

  return (
    <MainLayout jumbotronData={JumbotronJSON}>
      <CardSection />
      <FAQ {...data.FaqJSON} />
    </MainLayout>
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
