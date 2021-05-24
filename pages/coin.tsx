import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { CoinpageProps } from '@/types/coinpage'

import { JumbotronJSON, CoinUtilitiesJSON, FaqJSON } from '@/data/coinpage'

import { CoinUtilities, FAQ } from '@/components/sections/Coin'
import { MainLayout } from '@/components/layouts'

const Coin = ({
  data,
}: CoinpageProps): InferGetStaticPropsType<typeof getStaticProps> => {
  return (
    <MainLayout jumbotronData={data.JumbotronJSON}>
      <CoinUtilities {...data.CoinUtilitiesJSON} />

      <FAQ {...data.FaqJSON} />
    </MainLayout>
  )
}

export default Coin

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      data: {
        JumbotronJSON,
        CoinUtilitiesJSON,
        FaqJSON,
      },
    },
  }
}
