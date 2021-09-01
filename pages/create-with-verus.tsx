import React, { useState } from 'react'
import useTranslation from 'next-translate/useTranslation'
import {
  Button,
  Img,
  DefaultLinkCard,
  Card,
  CardText,
  Modal,
  useModal,
} from '@/components/elements'
import { MainLayout, Grid } from '@/components/layouts'

import {
  BlueEarthCard,
  DigitalCard,
  EarthCard,
  LiquidityCard,
  PrivacyCard,
} from '@/components/sections/Create'

const CreateWithVerus = () => {
  const { t } = useTranslation('create')
  const [modalTitle, setModalTitle] = useState<string>('')
  const [modalText, setModalText] = useState<string | string[]>('')
  const { isShown, toggle } = useModal()
  const multiModal = (modalName: string) => {
    if (modalName === 'launchBlockchain') {
      setModalTitle(t('cards.launchBlockchain.modal.header'))
      setModalText([
        t('cards.launchBlockchain.modal.text1'),
        t('cards.launchBlockchain.modal.text2'),
      ])
    } else if (modalName === 'undefined') {
      setModalTitle('')
      setModalText('')
    } else {
      setModalTitle(t(`cards.${modalName}.modal.header`))
      setModalText(t(`cards.${modalName}.modal.text`))
    }
    toggle()
  }

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
            svg={{ type: 'miniTab', rotate: false }}
            href="https://docs.verus.io"
            as="a"
            color="#3165d4"
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
            onClick={() => multiModal('launchBlockchain')}
            fontRegular
            small
            margin="50px 0 0 0 "
          >
            {`${t('common:findMore')}`}
          </Button>
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
          <Button onClick={() => multiModal('createToken')} small fontRegular>
            {`${t('common:findMore')}`}
          </Button>
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
              onClick={() => multiModal('instantLiquidity')}
              small
              fontRegular
              margin="50px 0 0 0 "
            >
              {`${t('common:findMore')}`}
            </Button>
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
              onClick={() => multiModal('getPrivacy')}
              white
              small
              fontRegular
              margin="50px 0 0 0"
            >
              {`${t('common:findMore')}`}
            </Button>
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
              onClick={() => multiModal('digitalIdentity')}
              small
              fontRegular
              margin="50px 0 0 0"
            >
              {`${t('common:findMore')}`}
            </Button>
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
              onClick={() => multiModal('dataValue')}
              small
              fontRegular
              margin="50px 0 0 0"
            >
              {`${t('common:findMore')}`}
            </Button>
          </div>
        </EarthCard>
        <Card
          bgColor="#0A3FB1"
          span={2}
          large
          styles="max-width: none; padding: 94px 22px;"
          tabletStyles="max-width: none; padding: 94px 98px; p {max-width:400px;}"
          desktopStyles="padding: 171px 120px;p {max-width:600px;} a {padding: 17px 30px;}"
          tools
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
            href="https://docs.verus.io"
            as="a"
            target="_blank"
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
      <Modal
        isShown={isShown}
        hide={() => multiModal('undefined')}
        title={modalTitle}
        text={modalText}
      />
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
