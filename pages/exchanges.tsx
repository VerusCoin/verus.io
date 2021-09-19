import { NextSeo } from 'next-seo'
import useTranslation from 'next-translate/useTranslation'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { MainLayout, Section } from '@/components/layouts'
import { DefaultHeader } from '@/components/elements'
import styled from 'styled-components'
import { Container, Row, Col } from 'styled-bootstrap-grid'

import { IExchangesPageProps, IExchange } from '@/types/exchanges'
import { ExchangesJSON } from '@/data/exchanges'
import ExchangeCard from '@/components/sections/Exchanges/ExchangeCard'

const StyledSection = styled.div`
  margin-top: 20px;
  s h5 {
    text-align: center;
    font-size: 18px;
  }
  span {
    color: red;
  }
`

const Exchanges = ({
  data,
}: IExchangesPageProps): InferGetStaticPropsType<typeof getStaticProps> => {
  const { t } = useTranslation()
  const title = t('seo:page.exchanges.title')
  const description = t('seo.page.exchanges.description')
  return (
    <>
      <NextSeo title={title} description={description} />
      <MainLayout>
        <Section>
          <DefaultHeader as="h2" align="center">
            {data.ExchangesJSON.title}
          </DefaultHeader>
          <StyledSection>
            <DefaultHeader as="h5">{data.ExchangesJSON.text}</DefaultHeader>
            <DefaultHeader as="h5">
              <span>{data.ExchangesJSON.text2}</span>
            </DefaultHeader>
          </StyledSection>
        </Section>
        <Section>
          <Container>
            <Row>
              {data.ExchangesJSON.exchanges.map(
                (exchange: IExchange, index: number) => (
                  <Col col={4} key={index}>
                    <ExchangeCard {...exchange} />
                  </Col>
                )
              )}
            </Row>
          </Container>
        </Section>
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
