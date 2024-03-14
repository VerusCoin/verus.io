import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import styled from 'styled-components'
import { media } from 'styled-bootstrap-grid'
import { Grid } from '@/components/layouts'
import { bgColor } from '@/styles/helpers'
import { NetTag, CardText } from '@/components/elements'

const StyledLifeBlood1Cards = styled.div`
  ${bgColor('white')}
  border-radius: 8px;
  padding: 100px 30px;
  justify-content: space-between;
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 425px;
  box-shadow: 0 0 13px -50px rgb(0 0 0 / 13%);
  background-image: url('/svg/lifeblood1.svg');
  background-repeat: no-repeat;
  background-size: cover;
  ${media.tablet`
    border-radius: 20px
  `}
`
const StyledLifeBlood2Cards = styled.div`
  ${bgColor('white')}
  border-radius: 8px;
  padding: 100px 30px;
  justify-content: space-between;
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 425px;
  box-shadow: 0 0 13px -50px rgb(0 0 0 / 13%);
  background-image: url('/svg/lifeblood2.svg');
  background-repeat: no-repeat;
  background-size: cover;
  ${media.tablet`
    border-radius: 20px
  `}
`
const StyledLifeBlood3Cards = styled.div`
  ${bgColor('white')}
  border-radius: 8px;
  padding: 100px 30px;
  justify-content: space-between;
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 425px;
  box-shadow: 0 0 13px -50px rgb(0 0 0 / 13%);
  background-image: url('/svg/lifeblood3.svg');
  background-repeat: no-repeat;
  background-size: cover;
  ${media.tablet`
    border-radius: 20px
  `}
`
const CoinCard = styled.div`
  ${bgColor('white')}
  border-radius: 8px;
  padding: 100px 30px;
  justify-content: space-between;
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 425px;
  box-shadow: 0 0 13px -50px rgb(0 0 0 / 13%);
  ${media.tablet`
    border-radius: 20px
  `}
`

const CardSection = () => {
  const { t } = useTranslation('coin')
  return (
    <Grid>
      <StyledLifeBlood1Cards>
        <NetTag net="main" />
        <CardText
          book
          fontSz="xl"
          margin="0"
          text={t(`cards.payment.heading`)}
        />
        <CardText book margin="25px 40px 0" text={t(`cards.payment.text`)} />
      </StyledLifeBlood1Cards>
      <CoinCard>
        <NetTag net="main" />
        <CardText
          book
          fontSz="xl"
          margin="0"
          text={t(`cards.staking.heading`)}
        />
        <CardText book margin="25px 30px 0" text={t(`cards.staking.text`)} />
      </CoinCard>
      <CoinCard>
        <NetTag net="main" />
        <CardText book fontSz="xl" margin="0" text={t(`cards.verus.heading`)} />
        <CardText book margin="25px 30px 0" text={t(`cards.verus.text`)} />
      </CoinCard>
      <StyledLifeBlood2Cards>
        <NetTag net="main" />
        <CardText
          book
          fontSz="xl"
          margin="0"
          text={t(`cards.blockchain.heading`)}
        />
        <CardText book margin="25px 30px 0" text={t(`cards.blockchain.text`)} />
      </StyledLifeBlood2Cards>
      <StyledLifeBlood3Cards>
        <NetTag net="main" />
        <CardText book fontSz="xl" margin="0" text={t(`cards.token.heading`)} />
        <CardText book margin="25px 30px 0" text={t(`cards.token.text`)} />
      </StyledLifeBlood3Cards>
      <CoinCard>
        <NetTag net="main" />
        <CardText book fontSz="xl" margin="0" text={t(`cards.defi.heading`)} />
        <CardText book margin="25px 30px 0" text={t(`cards.defi.text`)} />
      </CoinCard>
    </Grid>
  )
}

export default CardSection
