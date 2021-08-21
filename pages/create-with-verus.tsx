import React, { useState } from 'react'
import useTranslation from 'next-translate/useTranslation'
import {
  Button,
  Img,
  DefaultLinkCard,
  Card,
  CardText,
  Modal,
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

  const [showBlockchain, setShowBlockchain] = useState(false)
  const [showTokens, setShowTokens] = useState(false)
  const [showLiquidity, setShowLiquidity] = useState(false)
  const [showPrivacy, setShowPrivacy] = useState(false)
  const [showIdentity, setShowIdentity] = useState(false)
  const [showGlobal, setShowGlobal] = useState(false)

  const JumbotronJSON = {
    header: t('jumbotron.heading'),
    text: t('jumbotron.text'),
    width: 1000,
  }
  return (
    <MainLayout jumbotronData={JumbotronJSON}>
      <Grid>
        <BlueEarthCard>
          <div>
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
              text={t('cards.doc.text')}
            />
          </div>
          <Button
            white
            svg={{ type: 'tab', rotate: false }}
            href="/foundations"
            as="a"
            color="#3165d4"
            fontRegular
          >
            {`${t('cards.doc.link')} docs.verus.io`}
          </Button>
        </BlueEarthCard>
        <Card
          large
          styles="padding: 77px 27px 41px;"
          tabletStyles="padding: 79px 27px 71px;"
          desktopStyles="padding: 143px 55px 73px;"
          chain
        >
          <div>
            <CardText book fontSz="xs" color="orange" text={t('tryTest')} />

            <CardText
              book
              fontSz="xl"
              text={t('cards.launchBlockchain.heading')}
              margin="32px 0 0 0 "
            />

            <CardText
              book
              fontSz="lg"
              color="blue"
              margin="32px 23px 0"
              text={t('cards.launchBlockchain.text')}
            />
          </div>

          <Button
            onClick={() => setShowBlockchain(!showBlockchain)}
            fontRegular
            small
            margin="50px 0 0 0 "
          >
            {`${t('common:findMore')}`}
          </Button>
          <Modal
            isShown={showBlockchain}
            hide={() => setShowBlockchain(!showBlockchain)}
            title={t('cards.launchBlockchain.modal.header')}
            text={[
              t('cards.launchBlockchain.modal.text1'),
              t('cards.launchBlockchain.modal.text2'),
            ]}
          />
        </Card>
        <Card
          large
          styles="padding: 77px 27px 41px;"
          tabletStyles="padding: 79px 27px 71px;"
          desktopStyles="padding: 143px 55px 73px;"
          coin
        >
          <div>
            <CardText book fontSz="xs" color="orange" text={t('tryTest')} />

            <CardText
              book
              fontSz="xl"
              margin="32px 0 0 0 "
              text={t('cards.createToken.heading')}
            />

            <CardText
              book
              fontSz="lg"
              color="blue"
              margin="32px 0 0 0 "
              text={t('cards.createToken.text')}
            />
          </div>
          <Button onClick={() => setShowTokens(!showTokens)} small fontRegular>
            {`${t('common:findMore')}`}
          </Button>
          <Modal
            isShown={showTokens}
            hide={() => setShowTokens(!showTokens)}
            title={t('cards.createToken.modal.header')}
            text={t('cards.createToken.modal.text')}
          />
        </Card>
        <LiquidityCard>
          <div className="card">
            <div>
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
                margin="32px 0 "
                text={t('cards.instantLiquidity.text')}
              />
            </div>
            <Button
              onClick={() => setShowLiquidity(!showLiquidity)}
              small
              fontRegular
              margin="50px 0 0 0 "
            >
              {`${t('common:findMore')}`}
            </Button>
            <Modal
              isShown={showLiquidity}
              hide={() => setShowLiquidity(!showLiquidity)}
              title={t('cards.instantLiquidity.modal.header')}
              text={t('cards.instantLiquidity.modal.text')}
            />
          </div>
          <div className="liquidity-image">
            <Img name="drops" />
          </div>
        </LiquidityCard>
        <PrivacyCard>
          <div className="privacy-image">
            <Img name="privacy-image" />
          </div>
          <div className="card">
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
            <Button
              onClick={() => setShowPrivacy(!showPrivacy)}
              white
              small
              fontRegular
              margin="50px 0 0 0"
            >
              {`${t('common:findMore')}`}
            </Button>
            <Modal
              isShown={showPrivacy}
              hide={() => setShowPrivacy(!showPrivacy)}
              title={t('cards.getPrivacy.modal.header')}
              text={t('cards.getPrivacy.modal.text')}
            />
          </div>
        </PrivacyCard>
        <DigitalCard>
          <div className="card">
            <div>
              <CardText book fontSz="xs" color="green" text={t('liveMain')} />
              <CardText
                margin="32px auto"
                book
                fontSz="xl"
                text={t('cards.digitalIdentity.heading')}
              />
              <CardText
                margin="32px 0 0 "
                book
                fontSz="lg"
                color="blue"
                text={t('cards.digitalIdentity.text')}
              />
            </div>
            <Button
              onClick={() => setShowIdentity(!showIdentity)}
              small
              fontRegular
              margin="50px 0 0 0"
            >
              {`${t('common:findMore')}`}
            </Button>
            <Modal
              isShown={showIdentity}
              hide={() => setShowIdentity(!showIdentity)}
              title={t('cards.digitalIdentity.modal.header')}
              text={t('cards.digitalIdentity.modal.text')}
            />
          </div>
          <div className="identity-image">
            <Img name="identity-image" />
          </div>
        </DigitalCard>
        <EarthCard>
          <div className="earth-image">
            <Img name="earth-image" />
          </div>
          <div className="card">
            <div>
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
                margin="32px 0 0 "
                text={t('cards.dataValue.text')}
              />
            </div>
            <Button
              onClick={() => setShowGlobal(!showGlobal)}
              small
              fontRegular
              margin="50px 0 0 0"
            >
              {`${t('common:findMore')}`}
            </Button>
            <Modal
              isShown={showGlobal}
              hide={() => setShowGlobal(!showGlobal)}
              title={t('cards.dataValue.modal.header')}
              text={t('cards.dataValue.modal.text')}
            />
          </div>
        </EarthCard>
        <Card
          bgColor="#0A3FB1"
          span={2}
          large
          styles="max-width: none; padding: 94px 22px;"
          tabletStyles="max-width: none; padding: 94px 98px; p {max-width:400px;}"
          desktopStyles="padding: 171px 120px;p {max-width:600px;}"
        >
          <div>
            <CardText
              fontSz="xl"
              color="white"
              book
              margin="32px auto"
              text={t('cards.changeWorld.heading')}
            />
            <CardText
              fontSz="sm"
              color="white"
              margin="32px auto "
              styles="max-width: 525px !important;"
              text={t('cards.changeWorld.text')}
            />
          </div>
          <Button
            white
            svg={{ type: 'tab', rotate: false }}
            href="/foundations"
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
