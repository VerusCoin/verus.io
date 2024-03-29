import React from 'react'
import styled from 'styled-components'
import { media } from 'styled-bootstrap-grid'
import useTranslation from 'next-translate/useTranslation'
import {
  Button,
  NetTag,
  Card,
  CardHeader,
  CardText,
} from '@/components/elements'

import { StyledNet } from '@/components/elements/NetTag/NetTag'

const StyledCardText = styled.div`
  margin: 16px 0;
  max-width: 500px;
`

const StyledTagSection = styled.div<any>`
  margin: 32px 0;
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
      justify-content: center;
      align-items:center;
      p {
        margin: 20px 0;
        line-height: 0;
      }
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
    <Card span={2} desktopStyles="height: unset !important;">
      <CardHeader text={t('economic.heading')} />
      <StyledCardText>
        <CardText book text={t('economic.text')} />
      </StyledCardText>
      <StyledTagSection>
        <NetTag
          fam="geoHead"
          fontSz="mdlg"
          net="main"
          text={t('economic.verus')}
        />

        <NetTag
          fam="geoHead"
          fontSz="mdlg"
          net="main"
          text={t('economic.conversion')}
        />

        <NetTag
          fam="geoHead"
          fontSz="mdlg"
          net="main"
          text={t('economic.blockchain')}
        />

        <NetTag
          fam="geoHead"
          fontSz="mdlg"
          net="main"
          text={t('economic.token')}
        />
      </StyledTagSection>
      <Button
        transparent
        svg={{ type: 'tab', rotate: false }}
        href="https://docs.verus.io/economy/#block-fees"
        as="a"
        color="#3165d4"
        target="_blank"
      >
        {t('economic.link')}
      </Button>
    </Card>
  )
}

export default EconomicCard
