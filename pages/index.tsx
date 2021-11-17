import React from 'react'
import styled from 'styled-components'
import { bgColor } from '@/styles/helpers'
import { NextSeo } from 'next-seo'
import { GetServerSideProps } from 'next'
import useTranslation from 'next-translate/useTranslation'
import { HomepageProps } from 'types/homepage'
import { CardsJSON, BlogJSON } from '@/data/homepage'
import { MainLayout, Grid } from '@/components/layouts'
import {
  Img,
  CardHeader,
  CardText,
  DefaultLinkCard,
} from '@/components/elements'
import { Container, Row, Col } from 'styled-bootstrap-grid'
import { Banner, Blog, KnowCards } from '@/components/sections/Home'

const StyledCardContainer = styled(Container)`
  ${bgColor('white')}
  border-radius: 8px;
  padding: 75px;
  grid-column: span 2;
  box-shadow: 0 0 13px -10px rgb(0 0 0 / 13%);
`

const StyledCard = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin: 45px 0;
`

const Home = ({ data }: HomepageProps) => {
  const { t } = useTranslation('home')
  const title = t('seo:page.index.title')
  const description = t('seo:page.index.description')
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
          <StyledCardContainer>
            <Row justifyContent="center">
              {CardList.map((card, index) => {
                const heading = t(`cards.${card.card}.header`)
                return (
                  <Col key={index} md={6} lg={4}>
                    <StyledCard>
                      <Img height="75px" name={card.svg} />
                      <CardHeader align="left" text={heading} as="h4" />
                      <CardText
                        align="left"
                        text={t(`cards.${card.card}.text`)}
                        margin="0 0 16px"
                      />
                    </StyledCard>
                  </Col>
                )
              })}
            </Row>
          </StyledCardContainer>
          {/* {CardList.map((card, index) => {
            const heading = t(`cards.${card.card}.header`)
            return (
              <Card key={index}>
                <Img height="75px" name={card.svg} />
                <CardHeader text={heading} />
                <CardText text={t(`cards.${card.card}.text`)} />
              </Card>
            )
          })} */}
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

        <Blog title={t('blog')} data={data.BlogJSON} />
      </MainLayout>
    </>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const result = await fetch('http://localhost:3000/api/verusArticles')
    const blogJSON = await result.json()

    return {
      props: {
        data: { BlogJSON: blogJSON, CardsJSON },
      },
    }
  } catch (err) {
    const blogJSON = BlogJSON.data
    return {
      props: {
        data: { BlogJSON: blogJSON, CardsJSON },
      },
    }
  }
}
