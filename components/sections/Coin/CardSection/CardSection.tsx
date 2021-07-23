import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import styled from 'styled-components'
import { media } from 'styled-bootstrap-grid'
import { Grid } from '@/components/layouts'
import { bgColor } from '@/styles/helpers'
import { NetTag } from '@/components/elements'
import Cards from '@/components/elements/Cards/Cards'
import CardText from '@/components/elements/Cards/CardText'

const StyledLifeBlood1Cards = styled.div`
  ${bgColor('white')}
  border-radius: 20px;
  padding: 40px 50px 100px;
  justify-content: space-between;
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 275px;
  box-shadow: 0 0 13px -10px rgb(0 0 0 / 13%);
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
  padding: 40px 50px 100px;
  justify-content: space-between;
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 275px;
  box-shadow: 0 0 13px -10px rgb(0 0 0 / 13%);
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
  padding: 40px 50px 100px;
  justify-content: space-between;
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 275px;
  box-shadow: 0 0 13px -10px rgb(0 0 0 / 13%);
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
        <CardText book margin="25px 10px 0" text={t(`cards.payment.text`)} />
      </StyledLifeBlood1Cards>
      <Cards>
        <NetTag net="main" />
        <CardText fontSz="xl" margin="0" text={t(`cards.staking.heading`)} />
        <CardText book margin="25px 10px 0" text={t(`cards.staking.text`)} />
      </Cards>
      <Cards>
        <NetTag net="main" />
        <CardText fontSz="xl" margin="0" text={t(`cards.verus.heading`)} />
        <CardText book margin="25px 10px 0" text={t(`cards.verus.text`)} />
      </Cards>
      <StyledLifeBlood2Cards>
        <NetTag net="test" />
        <CardText fontSz="xl" margin="0" text={t(`cards.blockchain.heading`)} />
        <CardText book margin="25px 10px 0" text={t(`cards.blockchain.text`)} />
      </StyledLifeBlood2Cards>
      <StyledLifeBlood3Cards>
        <NetTag net="test" />
        <CardText fontSz="xl" margin="0" text={t(`cards.token.heading`)} />
        <CardText book margin="25px 10px 0" text={t(`cards.token.text`)} />
      </StyledLifeBlood3Cards>
      <Cards>
        <NetTag net="test" />
        <CardText fontSz="xl" margin="0" text={t(`cards.defi.heading`)} />
        <CardText book margin="25px 10px 0" text={t(`cards.defi.text`)} />
      </Cards>
    </Grid>
  )
}

export default CardSection
