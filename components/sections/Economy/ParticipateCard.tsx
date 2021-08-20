import React from 'react'
import styled from 'styled-components'
import { media } from 'styled-bootstrap-grid'
import useTranslation from 'next-translate/useTranslation'

import { Button, Img, Card, CardHeader } from '@/components/elements'

const StyledLinkSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;

  align-items: center;
  justify-content: center;
  ${media.tablet`
    margin-top: 85px;
  `}
`
const StyledSVG = styled.div`
  margin-top: 17px;
  ${media.tablet`
    margin-top: 117px;
  `}
`

const ParticipateCard = () => {
  const { t } = useTranslation('economy')
  return (
    <Card
      span={2}
      desktopStyles="height: unset !important;"
      styles="padding: 25px 30px 15px;"
    >
      <CardHeader
        text={t('participate.heading')}
        width="750px"
        margin="20px 0"
      />
      <StyledLinkSection>
        <Button
          transparent
          svg={{ type: 'tab', rotate: false }}
          href="https://docs.verus.io/economy/start-mining.html"
          as="a"
          color="#3165d4"
          fontRegular
        >
          {t('participate.mining')}
        </Button>
        <Button
          transparent
          svg={{ type: 'tab', rotate: false }}
          href="https://docs.verus.io/economy/start-staking.html"
          as="a"
          color="#3165d4"
          fontRegular
          margin="32px 0"
        >
          {t('participate.staking')}
        </Button>
        <Button
          transparent
          svg={{ type: 'tab', rotate: false }}
          href="https://docs.verus.io/economy/#block-rewards"
          as="a"
          color="#3165d4"
          fontRegular
        >
          {t('participate.schedule')}
        </Button>
        <StyledSVG>
          <Img name="mining" height="234px" />
        </StyledSVG>
      </StyledLinkSection>
    </Card>
  )
}

export default ParticipateCard
