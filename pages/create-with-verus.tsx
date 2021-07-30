import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import {
  Button,
  Img,
  DefaultLinkCard,
  Card,
  CardText,
} from '@/components/elements'
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
        <Card>
          <div style={{ marginBottom: '115px' }}>
            <CardText book fontSz="xs" color="orange" text={t('tryTest')} />
            <CardText
              margin="32px 32px 0 "
              book
              fontSz="xl"
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
        </Card>
        <Card>
          <div style={{ marginBottom: '115px' }}>
            <CardText book fontSz="xs" color="orange" text={t('tryTest')} />

            <CardText
              margin="32px 32px 0 "
              book
              fontSz="xl"
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
        </Card>
        <LiquidityCard>
          <Card>
            <div style={{ marginBottom: '90px' }}>
              <CardText book fontSz="xs" color="orange" text={t('tryTest')} />
              <CardText
                book
                fontSz="xl"
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
          </Card>
          <div className="liquidity-image">
            <Img name="liquidity-image" />
          </div>
        </LiquidityCard>
        <PrivacyCard>
          <div className="privacy-image">
            <Img name="privacy-image" />
          </div>
          <Card bgColor="blackTer">
            <div>
              <CardText book fontSz="xs" color="green" text={t('liveMain')} />
              <CardText
                margin="32px 32px 0 "
                book
                fontSz="xl"
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
          </Card>
        </PrivacyCard>
        <DigitalCard>
          <Card>
            <div style={{ marginBottom: '90px' }}>
              <CardText book fontSz="xs" color="orange" text={t('tryTest')} />
              <CardText
                margin="32px auto"
                book
                fontSz="xl"
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
          </Card>
          <div className="identity-image">
            <Img name="identity-image" />
          </div>
        </DigitalCard>
        <EarthCard>
          <div className="earth-image">
            <Img name="earth-image" />
          </div>
          <Card>
            <div style={{ marginBottom: '90px' }}>
              <CardText book fontSz="xs" color="orange" text={t('tryTest')} />
              <CardText
                book
                fontSz="xl"
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
          </Card>
        </EarthCard>
        <Card bgColor="#0A3FB1" span={2}>
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
            svg={{ type: 'tab', rotate: false }}
            href="#"
            as="a"
            color="#3165d4"
            fontRegular
          >
            {`${t('cards.doc.link')} docs.verus.io`}
          </Button>
        </Card>
        <DefaultLinkCard card="global" />
        <DefaultLinkCard card="foundation" />
        <DefaultLinkCard card="coin" />
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
