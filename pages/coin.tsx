import React from 'react'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import useTranslation from 'next-translate/useTranslation'
import { MainLayout, Grid } from '@/components/layouts'
import { NetTag } from '@/components/elements'

import Cards from '@/components/elements/Cards/Cards'
import CardText from '@/components/elements/Cards/CardText'

import { CoinpageProps } from '@/types/coinpage'

import { CardJSON, FaqJSON } from '@/data/coinpage'

import { FAQ } from '@/components/sections/Coin'

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
      <Grid>
        {data.CardJSON.map((card, index) => {
          return (
            <Cards key={index}>
              <NetTag net={card.net} />
              <CardText
                fontSz="xl"
                margin="0"
                text={t(`cards.${card.card}.heading`)}
              />
              <CardText
                book
                margin="25px 10px 0"
                text={t(`cards.${card.card}.text`)}
              />
            </Cards>
          )
        })}
      </Grid>

      <FAQ {...data.FaqJSON} />
    </MainLayout>
  )
}

export default Coin

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      data: {
        CardJSON,
        FaqJSON,
      },
    },
  }
}
