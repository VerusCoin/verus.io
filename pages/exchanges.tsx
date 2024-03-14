import { NextSeo } from 'next-seo'
import styled from 'styled-components'
import useTranslation from 'next-translate/useTranslation'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { MainLayout, Grid } from '@/components/layouts'
import { DefaultText } from '@/components/elements'
import { IExchangesPageProps } from '@/types/exchanges'
import { ExchangesJSON } from '@/data/exchanges'
import ExchangeCard from '@/components/sections/Exchanges/ExchangeCard'

const StyledNote = styled.div`
  grid-column: span 2;
  margin: 64px auto;
  max-width: 600px;
`
const Exchanges = ({
  data,
}: IExchangesPageProps): InferGetStaticPropsType<typeof getStaticProps> => {
  const { t } = useTranslation('exchanges')
  const title = t('seo:page.exchanges.title')
  const description = t('seo:page.exchanges.description')
  const JumbotronJSON = {
    header: t('jumbotron.heading'),
    width: 1000,
  }
  return (
    <>
      <NextSeo title={title} description={description} />
      <MainLayout jumbotronData={JumbotronJSON}>
        <Grid>
          <ExchangeCard exchanges={data.ExchangesJSON.exchanges} />
          <StyledNote>
            <DefaultText align="center" fontSz="md">
              These are all exchanges listing $VRSC. Do your own due diligence
              on the exchanges.
            </DefaultText>
          </StyledNote>
        </Grid>
      </MainLayout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      data: { ExchangesJSON },
    },
  }
}

export default Exchanges
