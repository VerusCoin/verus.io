import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import styled from 'styled-components'
import { media } from 'styled-bootstrap-grid'
import { Grid } from '@/components/layouts'
import { bgColor } from '@/styles/helpers'
import { NetTag, Card, CardText } from '@/components/elements'

const StyledLifeBlood1Cards = styled.div`
  ${bgColor('white')}
  border-radius: 20px;
  padding: 100px 30px;
  justify-content: space-between;
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 275px;
  box-shadow: 0 0 13px -50px rgb(0 0 0 / 13%);
  background-image: url('/svg/lifeblood1.svg');
  background-repeat: no-repeat;
  background-size: cover;

  ${media.tablet`
    min-height: 480px;
  `}
`
const StyledLifeBlood2Cards = styled.div`
  ${bgColor('white')}
  border-radius: 20px;
  padding: 100px 30px;
  justify-content: space-between;
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 275px;
  box-shadow: 0 0 13px -50px rgb(0 0 0 / 13%);
  background-image: url('/svg/lifeblood2.svg');
  background-repeat: no-repeat;
  background-size: cover;

  ${media.tablet`
    min-height: 480px;
  `}
`
const StyledLifeBlood3Cards = styled.div`
  ${bgColor('white')}
  border-radius: 20px;
  padding: 100px 30px;
  justify-content: space-between;
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 275px;
  box-shadow: 0 0 13px -50px rgb(0 0 0 / 13%);
  background-image: url('/svg/lifeblood3.svg');
  background-repeat: no-repeat;
  background-size: cover;

  ${media.tablet`
    min-height: 480px;
  `}
`
const CardSection = () => {
  const { t } = useTranslation('coin')
  return (
    <Grid>
      <StyledLifeBlood1Cards>
        <NetTag net="main" />
        <CardText fontSz="xl" margin="0" text={t(`cards.payment.heading`)} />
        <CardText book margin="25px 40px 0" text={t(`cards.payment.text`)} />
      </StyledLifeBlood1Cards>
      <Card>
        <NetTag net="main" />
        <CardText fontSz="xl" margin="0" text={t(`cards.staking.heading`)} />
        <CardText book margin="25px 30px 0" text={t(`cards.staking.text`)} />
      </Card>
      <Card>
        <NetTag net="main" />
        <CardText fontSz="xl" margin="0" text={t(`cards.verus.heading`)} />
        <CardText book margin="25px 30px 0" text={t(`cards.verus.text`)} />
      </Card>
      <StyledLifeBlood2Cards>
        <NetTag net="test" />
        <CardText fontSz="xl" margin="0" text={t(`cards.blockchain.heading`)} />
        <CardText book margin="25px 30px 0" text={t(`cards.blockchain.text`)} />
      </StyledLifeBlood2Cards>
      <StyledLifeBlood3Cards>
        <NetTag net="test" />
        <CardText fontSz="xl" margin="0" text={t(`cards.token.heading`)} />
        <CardText book margin="25px 30px 0" text={t(`cards.token.text`)} />
      </StyledLifeBlood3Cards>
      <Card>
        <NetTag net="test" />
        <CardText fontSz="xl" margin="0" text={t(`cards.defi.heading`)} />
        <CardText book margin="25px 30px 0" text={t(`cards.defi.text`)} />
      </Card>
    </Grid>
  )
}

export default CardSection
