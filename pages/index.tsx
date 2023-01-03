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
  Button,
  DefaultLinkCard,
  DefaultHeader,
  DefaultText,
  SVGs,
} from '@/components/elements'
import { FaMedium } from 'react-icons/fa'
import { Container, Row, Col, media } from 'styled-bootstrap-grid'
// import { Banner, Blog, KnowCards } from '@/components/sections/Home'
import { Blog, KnowCards } from '@/components/sections/Home'

const StyledCardContainer = styled(Container)`
  ${bgColor('blueQuan')}
  border-radius: 8px;
  padding: 100px 35px 35px;
  grid-column: span 2;
  box-shadow: 0 0 13px -10px rgb(0 0 0 / 13%);
  background-image: url('/svg/earth-big.svg');
  background-repeat: no-repeat;
  background-size: 75%;
  background-position: 50% 100%;
  ${media.tablet`
    padding: 110px 75px;
  
    background-size: 50%;

  `}

  ${media.giant`
    background-size: 613px;
    
  `}
`

const StyledMultiChainCard = styled(StyledCardContainer)`
  ${bgColor('white')}
  background-image: none;
  .medium {
    margin-top: 24px;
    text-align: center;
  }

  .btn1,
  .btn2 {
    margin-top: 12px;
  }
  .btn2 {
    color: black;
    background-color: transparent;
    border: black solid 2px;
    svg {
      fill: black;
    }
    &:hover {
      svg {
        transform: inherit;
      }
    }
  }
  .btn3 {
    svg:first-child {
      margin-right: 6px;
      min-height: 24px;
      min-width: 24px;
    }
    svg:last-child {
      height: 13px;
    }
  }

  ${media.tablet`
    .btn1, .btn2 {
      margin:initial;
    }
  `}
`

const StyledCard = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin: 35px 0;
  .cardText {
    margin: 10px 0 0;
    line-height: 20px;
  }
  h4 {
    margin: 10px 0 0;
  }

  ${media.tablet`
    h4 {
      margin: 25px 0 0;
    }
    .cardText {
      margin: 25px 0 0;
    }
  `}
`

const StyledImgContainer = styled.div`
  ${bgColor('white')}
  height: 48px;
  width: 48px;
  padding: 8px;
  border-radius: 10px;
`

const Home = ({ data }: HomepageProps) => {
  const { t } = useTranslation('home')
  const title = t('seo:page.index.title')
  const description = t('seo:page.index.description')
  const JumbotronJSON = {
    title: t('jumbotron.title'),
    header: t('jumbotron.heading'),
    color: 'default',
    texts: [t('jumbotron.text1'), t('jumbotron.text2')],
    buttons: [
      { text: t('jumbotron.buttons.first'), href: '/create' },
      { text: t('jumbotron.buttons.second'), href: '/verusid' },
    ],
    youtube: {
      text: t('jumbotron.youtube'),
      href: 'https://www.youtube.com/watch?v=qN30YmG3nEg',
    },
    width: 1000,
    main: true,
  }

  const CardList = data.CardsJSON
  const knowCardList = t('cards.knowCard.text').split(' ')

  return (
    <>
      <NextSeo title={title} description={description} />
      <MainLayout jumbotronData={JumbotronJSON}>
        <Grid bottom>
          {/* <Banner /> */}
          <StyledMultiChainCard>
            <Row justifyContent="center">
              <Col md={10} lg={9} xl={8}>
                <DefaultHeader
                  as="h2"
                  align="center"
                  headerStyle="margin: 0 0 30px 0 !important; font-weight:bold !important; "
                >
                  {t('multiChainCard.title')}
                </DefaultHeader>
              </Col>
            </Row>
            <Row justifyContent="center">
              <Col lg={12} xl={11}>
                <DefaultText
                  fontSz="mdlg"
                  align="center"
                  customMargin="0 0 40px"
                >
                  {t('multiChainCard.description')}
                </DefaultText>
              </Col>
            </Row>
            <Row justifyContent="center">
              <Col auto offset-1>
                <Button
                  fontSize="menu"
                  className="btn1"
                  href="/foundations"
                  as="a"
                  color="#3165d4"
                >
                  {t('multiChainCard.btn1')}
                </Button>
              </Col>
              <Col auto offset-1>
                <Button
                  fontSize="menu"
                  className="btn2"
                  href="/papers/VerusVision.pdf"
                  as="a"
                  download
                >
                  {t('multiChainCard.btn2')}
                  <SVGs name="download" />
                </Button>
              </Col>
            </Row>
            <Row justifyContent="center">
              <Col className="medium">
                <Button
                  className="btn3"
                  fontSize="xs"
                  transparent
                  svg={{ type: 'miniTab', rotate: false }}
                  href="https://medium.com/veruscoin/community-currencies-a-case-study-to-explore-new-technical-possibilities-ede897433b55"
                  as="a"
                  margin="45px 0 0"
                  target="_blank"
                >
                  <FaMedium size={24} />
                  {t('multiChainCard.medium')}
                </Button>
              </Col>
            </Row>
          </StyledMultiChainCard>
          <StyledCardContainer>
            <Row justifyContent="center">
              <DefaultHeader
                as="h4"
                align="center"
                customColor="white"
                headerStyle="margin: 0 0 70px 0 !important;"
              >
                {t('cardBanner')}
              </DefaultHeader>
              {CardList.map((card, index) => {
                const heading = t(`cards.${card.card}.header`)
                return (
                  <Col key={index} md={6} lg={4}>
                    <StyledCard>
                      <StyledImgContainer>
                        <Img height="32px" name={card.svg} />
                      </StyledImgContainer>
                      <CardHeader
                        align="left"
                        text={heading}
                        as="h4"
                        margin="0"
                        color="white"
                      />
                      <CardText
                        align="left"
                        text={t(`cards.${card.card}.text`)}
                        fontSz="menu"
                        color="white"
                        className="cardText"
                      />
                    </StyledCard>
                  </Col>
                )
              })}
            </Row>
          </StyledCardContainer>
        </Grid>
        <Blog title={t('highlighted')} data={data.HighlightJSON} />

        <Blog title={t('latest')} data={data.LatestJSON} link />

        <Grid>
          <DefaultLinkCard card="create" />
          <DefaultLinkCard card="foundation" />
          <DefaultLinkCard card="global" />
          <DefaultLinkCard card="coin" />

          <KnowCards>
            <CardText
              fontSz="xs"
              color="white"
              text={t('cards.knowCard.know')}
              className="title"
            />
            <CardText
              book
              fontSz="sm"
              color="white"
              text={t('cards.knowCard.header')}
            />
            <div>
              {knowCardList.map((w) => (
                <CardText
                  fontSz="mdlg"
                  color="white"
                  text={w}
                  key={w}
                  margin="0"
                />
              ))}
            </div>
          </KnowCards>
        </Grid>
      </MainLayout>
    </>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const result = await fetch('http://localhost:3000/api/verusArticles')
    const latestJSON = await result.json()

    return {
      props: {
        data: {
          HighlightJSON: BlogJSON.data,
          LatestJSON: latestJSON,
          CardsJSON,
        },
      },
    }
  } catch (err) {
    const blogJSON = BlogJSON.data
    return {
      props: {
        data: { HighlightJSON: blogJSON, LatestJSON: blogJSON, CardsJSON },
      },
    }
  }
}
