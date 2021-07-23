import React from 'react'
import styled from 'styled-components'
import { media } from 'styled-bootstrap-grid'
import useTranslation from 'next-translate/useTranslation'
import { Button, NetTag } from '@/components/elements'

import Cards from '@/components/elements/Cards/Cards'
import CardHeader from '@/components/elements/Cards/CardHeader'
import CardText from '@/components/elements/Cards/CardText'
import { StyledNet } from '@/components/elements/NetTag/NetTag'

const StyledTagSection = styled.div<any>`
  margin: 30px 0;
  display: flex;
  flex-direction: column;

  > ${StyledNet} {
    flex-direction: column;
    p > span {
      margin-right: 0;
    }
    p:last-child {
      text-align: center;
    }
  }

  ${media.tablet`
  
    > ${StyledNet} {
      flex-direction: row;
      p > span {
        margin-right: 31px;
      }
      p:last-child {
        text-align: left;
      }
    }
  `}
`

const EconomicCard = () => {
  const { t } = useTranslation('economy')
  return (
    <Cards span={2}>
      <CardHeader text={t('economic.heading')} />
      <CardText book text={t('economic.text')} />
      <StyledTagSection>
        <NetTag
          fam="geoHead"
          fontSz="lg"
          net="main"
          text={t('economic.verus')}
        />

        <NetTag
          fam="geoHead"
          fontSz="lg"
          net="test"
          text={t('economic.conversion')}
        />

        <NetTag
          fam="geoHead"
          fontSz="lg"
          net="test"
          text={t('economic.blockchain')}
        />

        <NetTag
          fam="geoHead"
          fontSz="lg"
          net="test"
          text={t('economic.token')}
        />
      </StyledTagSection>
      <Button
        transparent
        svg={{ type: 'tab', rotate: false }}
        href="#"
        as="a"
        color="#3165d4"
        fontRegular
      >
        {t('economic.link')}
      </Button>
    </Cards>
  )
}

export default EconomicCard
