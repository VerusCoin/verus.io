import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import { Button, Img } from '@/components/elements'
import { MainLayout, Grid } from '@/components/layouts'
// import { GetStaticProps, InferGetStaticPropsType } from 'next'
// import { CreateWithVerusProps } from 'types/createpage'
// import { useModal } from '@/components/elements/Modal/Modal'

import {
  BlueEarthCard,
  DigitalCard,
  EarthCard,
  LiquidityCard,
  PrivacyCard,
} from '@/components/sections/Create'

import {
  LinkCards,
  LifeBloodLinkCards,
  ChainLinkCards,
} from '@/components/sections/Home'

import Cards from '@/components/elements/Cards/Cards'
import CardText from '@/components/elements/Cards/CardText'

const CreateWithVerus = () => {
  const { t } = useTranslation('create')
  // const { isShown, toggle } = useModal()

  const JumbotronJSON = {
    header: t('jumbotron.heading'),
    text: t('jumbotron.text'),
    width: 1000,
  }
  return (
    <MainLayout jumbotronData={JumbotronJSON}>
      <Grid>
        <BlueEarthCard>
          <CardText
            fontSz="xl"
            color="white"
            book
            text={t('cards.doc.heading')}
          />
          <CardText
            fontSz="xl"
            color="white"
            book
            margin="0"
            text={t('cards.doc.text')}
          />
          <Button
            white
            svg={{ type: 'tab', rotate: false }}
            href="/foundations"
            as="a"
            color="#3165d4"
            fontRegular
            margin="42px 0 0 0"
          >
            {`${t('cards.doc.link')} docs.verus.io`}
          </Button>
        </BlueEarthCard>
        <Cards>
          <div style={{ marginBottom: '115px' }}>
            <CardText book fontSz="xs" color="orange" text={t('tryTest')} />
            <CardText
              margin="32px 32px 0 "
              book
              fontSz="lg"
              text={t('cards.launchBlockchain.heading')}
            />

            <CardText
              book
              fontSz="lg"
              color="blue"
              text={t('cards.launchBlockchain.text')}
              margin="32px 0 0 0 "
            />
          </div>
          <Button fontRegular small>
            {`${t('common:findMore')}`}
          </Button>
        </Cards>
        <Cards>
          <div style={{ marginBottom: '115px' }}>
            <CardText book fontSz="xs" color="orange" text={t('tryTest')} />

            <CardText
              margin="32px 32px 0 "
              book
              fontSz="lg"
              text={t('cards.createToken.heading')}
            />

            <CardText
              book
              fontSz="lg"
              color="blue"
              text={t('cards.createToken.text')}
              margin="32px 0 0 0 "
            />
          </div>
          <Button small fontRegular>
            {`${t('common:findMore')}`}
          </Button>
        </Cards>
        <LiquidityCard>
          <Cards>
            <div style={{ marginBottom: '90px' }}>
              <CardText book fontSz="xs" color="orange" text={t('tryTest')} />
              <CardText
                book
                fontSz="lg"
                margin="32px 32px 0 "
                text={t('cards.instantLiquidity.heading')}
              />
              <CardText
                book
                fontSz="lg"
                color="blue"
                margin="32px 0 0 "
                text={t('cards.instantLiquidity.text')}
              />
            </div>
            <Button small fontRegular>
              {`${t('common:findMore')}`}
            </Button>
          </Cards>
          <div className="liquidity-image">
            <Img name="liquidity-image" />
          </div>
        </LiquidityCard>
        <PrivacyCard>
          <div className="privacy-image">
            <Img name="privacy-image" />
          </div>
          <Cards bgColor="blackTer">
            <div>
              <CardText book fontSz="xs" color="green" text={t('liveMain')} />
              <CardText
                margin="32px 32px 0 "
                book
                fontSz="lg"
                color="white"
                text={t('cards.getPrivacy.heading')}
              />
              <CardText
                margin="32px 0 0 "
                book
                fontSz="lg"
                color="greySectary"
                text={t('cards.getPrivacy.text')}
              />
            </div>
            <Button white small fontRegular margin="90px 0 0 0">
              {`${t('common:findMore')}`}
            </Button>
          </Cards>
        </PrivacyCard>
        <DigitalCard>
          <Cards>
            <div style={{ marginBottom: '90px' }}>
              <CardText book fontSz="xs" color="orange" text={t('tryTest')} />
              <CardText
                margin="32px auto"
                book
                fontSz="lg"
                text={t('cards.digitalIdentity.heading')}
              />
              <CardText
                book
                fontSz="lg"
                color="blue"
                text={t('cards.digitalIdentity.text')}
              />
            </div>
            <Button small fontRegular>
              {`${t('common:findMore')}`}
            </Button>
          </Cards>
          <div className="identity-image">
            <Img name="identity-image" />
          </div>
        </DigitalCard>
        <EarthCard>
          <div className="earth-image">
            <Img name="earth-image" />
          </div>
          <Cards>
            <div style={{ marginBottom: '90px' }}>
              <CardText book fontSz="xs" color="orange" text={t('tryTest')} />
              <CardText
                book
                fontSz="lg"
                margin="32px auto"
                text={t('cards.dataValue.heading')}
              />
              <CardText
                book
                fontSz="lg"
                color="blue"
                text={t('cards.dataValue.text')}
              />
            </div>
            <Button small fontRegular>
              {`${t('common:findMore')}`}
            </Button>
          </Cards>
        </EarthCard>
        <Cards bgColor="#0A3FB1" span={2}>
          <CardText
            fontSz="xl"
            color="white"
            book
            styles="max-width: 600px;"
            text={t('cards.changeWorld.heading')}
          />
          <CardText
            fontSz="sm"
            color="white"
            margin="32px 0 "
            styles="max-width: 525px;"
            text={t('cards.changeWorld.text')}
          />

          <Button
            white
            small
            svg={{ type: 'tab', rotate: false }}
            href="#"
            as="a"
            color="#3165d4"
            fontRegular
          >
            {`${t('cards.doc.link')} docs.verus.io`}
          </Button>
        </Cards>
        <ChainLinkCards>
          <CardText
            book
            fontSz="xl"
            margin="32px 0 64px"
            text={t('common:globalCard.header')}
          />
          <Button
            transparent
            svg={{ type: 'arrow', rotate: false }}
            href="/global-network"
            as="a"
            color="#3165d4"
            fontRegular
          >
            {t('common:globalCard.link')}
          </Button>
        </ChainLinkCards>
        <LinkCards>
          <CardText
            book
            fontSz="xl"
            margin="32px 0 64px"
            text={t('common:foundationCard.header')}
          />
          <Button
            transparent
            svg={{ type: 'arrow', rotate: false }}
            href="/foundations"
            as="a"
            color="#3165d4"
            fontRegular
          >
            {t('common:foundationCard.link')}
          </Button>
        </LinkCards>
        <LifeBloodLinkCards>
          <CardText
            book
            fontSz="xl"
            margin="32px 0 64px"
            text={t('common:coinCard.header')}
          />
          <Button
            transparent
            svg={{ type: 'arrow', rotate: false }}
            href="/coin"
            as="a"
            color="#3165d4"
            fontRegular
          >
            {t('common:coinCard.link')}
          </Button>
        </LifeBloodLinkCards>
      </Grid>
    </MainLayout>
  )
}

// export const getStaticProps: GetStaticProps = async () => {
//   return {
//     props: {
//       data: {
//         JumbotronJSON,
//         StartAProjectJSON,
//         SelfSovereignJSON,
//         DefiSovereignJSON,
//       },
//     },
//   }
// }

export default CreateWithVerus
