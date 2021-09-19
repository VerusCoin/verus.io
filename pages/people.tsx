import React from 'react'
import { NextSeo } from 'next-seo'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import styled from 'styled-components'
import { media } from 'styled-bootstrap-grid'
import useTranslation from 'next-translate/useTranslation'

import { PeopleJSON } from '@/data/peoplepage'
import { IPeopleJSON } from '@/types/peoplepage'

import { MainLayout } from '@/components/layouts'
import { Button, DefaultText, CardText, Img, SVGs } from '@/components/elements'

import { spacer, bgColor } from '@/styles/helpers'

export type PeoplePageProps = {
  data: {
    PeopleJSON: IPeopleJSON
  }
}

const StyledGridContainer = styled.div<any>`
  ${spacer('xxl')}
  justify-content: center;
  grid-auto-rows: auto;
  padding: 0 20px;
  margin-left: auto;
  margin-right: auto;
  max-width: 430px;
  display: flex;
  flex-direction: column;
  grid-gap: 20px;
  grid-template-rows: auto;

  ${media.tablet`
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-width: 812px;
    min-width: 696px;
  `}
  ${media.desktop`
    max-width: 1040px;
    grid-template-columns: 1fr 1fr 1fr;
  `}
  ${media.giant`
    padding: 0;
    min-width: 1004px;
    max-width: 1140px;
  `}
`

const StyledSVG = styled.div`
  text-align: center;
  ${media.tablet`
    grid-column: span 2;
  `}
  ${media.desktop`
    grid-column: span 3;
  `}
`

const StyledCard = styled.div<any>`
  ${bgColor('white')}
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 8px;
  padding: 54px 34px;
  min-height: 490px;
  min-width: 350px;
  box-shadow: 0 0 13px -10px rgb(0 0 0 / 13%);
  p.bio {
    font-size: 14px;
  }
`
const StyledLinks = styled.div`
  display: inline-flex;
  height: 48px;
  align-items: center;
  justify-content: center;
  margin: 16px 0 0;
  a {
    padding: 0 10px;
    text-decoration: none;
    svg {
      fill: #3165d4;
      width: 24px;
      height: 24px;
      margin: 0;
    }
    &:hover {
      svg {
        transform: scale(1.5);
      }
    }
  }
`
const StyledSmallContainer = styled.div<any>`
  justify-content: space-between;
  grid-auto-rows: auto;
  padding: 62px 0;
  width: 100%;
  margin-left: auto;
  margin-right: auto;

  display: flex;
  flex-direction: column;
  grid-gap: 20px;
  grid-template-rows: auto;
  p {
    margin-left: 70px;
  }
  ${media.tablet`
  grid-column: span 2;
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: unset;
  `}
  ${media.desktop`
    grid-column: span 3;  
    grid-template-columns: 1fr 1fr 1fr;
  
  `}
`
const People = ({
  data,
}: PeoplePageProps): InferGetStaticPropsType<typeof getStaticProps> => {
  const { t } = useTranslation('people')
  const title = t('seo:page.people.title')
  const description = t('seo.page.people.description')
  const JumbotronJSON = {
    header: t('jumbotron.heading'),
    text: t('jumbotron.text'),
    width: 1000,
  }
  const leads = data.PeopleJSON.leads
  const support = data.PeopleJSON.support

  return (
    <>
      <NextSeo title={title} description={description} />
      <MainLayout jumbotronData={JumbotronJSON}>
        <StyledGridContainer>
          <StyledSVG>
            <Img name="contribute" height={323} />
          </StyledSVG>
          {leads.map((lead) => (
            <StyledCard key={lead.per}>
              <CardText
                book
                fontSz="modal"
                margin="6px 0 0 0"
                text={t(`leads.${lead.per}.name`)}
              />
              <CardText
                color="#676767"
                fontSz="sm"
                margin="12px 0 0 0"
                text={t(`leads.${lead.per}.title`)}
              />
              <StyledLinks>
                {lead.linkedIn && (
                  <Button transparent as="a" href="#" target="_blank">
                    <SVGs name="linkedIn" />
                  </Button>
                )}
                {lead.twitter && (
                  <Button transparent as="a" href="#" target="_blank">
                    <SVGs name="twitter" />
                  </Button>
                )}
              </StyledLinks>
              <CardText
                className="bio"
                align="left"
                text={t(`leads.${lead.per}.description`)}
              />
            </StyledCard>
          ))}
          <StyledSmallContainer>
            {support.map((person) => (
              <DefaultText key={person.per} fam="geoHead" fontSz="modal">
                {person.per}
              </DefaultText>
            ))}
          </StyledSmallContainer>
        </StyledGridContainer>
      </MainLayout>
    </>
  )
}

export default People

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      data: {
        PeopleJSON,
      },
    },
  }
}
