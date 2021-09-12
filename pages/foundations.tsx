import React, { useState } from 'react'

import useTranslation from 'next-translate/useTranslation'
import { MainLayout, Grid } from '@/components/layouts'
import {
  Button,
  DefaultLinkCard,
  Img,
  Card,
  CardText,
  Modal,
  useModal,
} from '@/components/elements'

// import { GetStaticProps, InferGetStaticPropsType } from 'next'
// import { FoundationsProps } from '@/types/foundations'
import {
  EarthCard,
  KeychainCard,
  Banner,
  NetworkCard,
} from '@/components/sections/Foundation'

// const ModalToggle=(modal, setModal)=>{

// }

const Foundations = () => {
  const { t } = useTranslation('foundation')
  const [modalTitle, setModalTitle] = useState<string>('')
  const [modalText, setModalText] = useState<string | string[]>('')
  const { isShown, toggle } = useModal()
  const multiModal = (modalName: string) => {
    if (modalName === 'undefined') {
      setModalTitle('')
      setModalText('')
    } else {
      setModalTitle(t(`${modalName}.modal.header`))
      setModalText(t(`${modalName}.modal.text`))
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
        <EarthCard>
          <div>
            <CardText book fontSz="xl" text={t('earthCard.header')} />

            <CardText
              book
              fontSz="lg"
              color="blue"
              margin="32px 0"
              text={t('earthCard.text')}
            />
          </div>
          <Button
            onClick={() => multiModal('earthCard')}
            fontRegular
            small
            margin="50px 0 0"
          >
            {`${t('common:findMore')}`}
          </Button>
        </EarthCard>
        <KeychainCard>
          <div className="keychain-image">
            <Img name="keychain" />
          </div>
          <div className="card">
            <div>
              <CardText
                book
                fontSz="xl"
                margin="0"
                text={t('keychainCard.header')}
              />
            </div>
            <Button
              onClick={() => multiModal('keychainCard')}
              fontRegular
              small
              margin="50px 0 0 0 "
            >
              {`${t('common:findMore')}`}
            </Button>
          </div>
        </KeychainCard>
        <Card
          large
          scales
          bgColor="#0A3FB1"
          tabletStyles="padding: 50px 60px 100px;"
          desktopStyles="padding: 100px 60px ;"
        >
          <div>
            <CardText
              book
              color="white"
              fontSz="xl"
              margin="32px 64px;"
              text={t('scalableLimits.header')}
            />
            <CardText
              book
              color="#C1D5FF"
              fontSz="lg"
              text={t('scalableLimits.text')}
              margin="32px 64px;"
            />
          </div>
          <Button
            white
            onClick={() => multiModal('scalableLimits')}
            fontRegular
            small
            margin="40px 0 0"
          >
            {`${t('common:findMore')}`}
          </Button>
        </Card>
        <Card
          large
          grid
          tabletStyles="padding: 50px 60px 100px;"
          desktopStyles="padding: 100px 60px ;"
        >
          <div>
            <CardText
              book
              fontSz="xl"
              margin="32px 64px;"
              text={t('topTier.header')}
            />
            <CardText
              book
              fontSz="lg"
              color="blue"
              text={t('topTier.text')}
              margin="32px 70px;"
            />
          </div>
          <Button
            onClick={() => multiModal('topTier')}
            fontRegular
            small
            margin="40px 0 0"
          >
            {`${t('common:findMore')}`}
          </Button>
        </Card>
        <Banner />
        <NetworkCard>
          <div className="checkmark-image">
            <Img name="checkmark" />
          </div>
          <div className="card">
            <CardText
              book
              fontSz="xl"
              margin="32px 0"
              text={t('smartContracts.header')}
            />

            <Button
              onClick={() => multiModal('smartContracts')}
              fontRegular
              small
              margin="60px 0"
            >
              {`${t('common:findMore')}`}
            </Button>
          </div>
        </NetworkCard>
        <Card
          large
          tabletStyles="padding: 50px 60px 100px;"
          desktopStyles="padding: 100px 60px;"
        >
          <div>
            <CardText
              book
              fontSz="xl"
              margin="32px 64px;"
              text={t('quantumProof.header')}
            />
            <CardText
              book
              fontSz="lg"
              color="blue"
              text={t('quantumProof.text')}
              margin="56px 90px;"
            />
          </div>
          <Button
            onClick={() => multiModal('quantumProof')}
            fontRegular
            small
            margin="50px 0 0"
          >
            {`${t('common:findMore')}`}
          </Button>
        </Card>
        <Card
          large
          tabletStyles="padding: 50px 5px 100px;"
          desktopStyles="padding: 100px 5px;"
          giantStyles="padding: 100px 50px;"
        >
          <div>
            <CardText
              book
              fontSz="xl"
              margin="32px 0;"
              text={t('mev.header')}
            />
            <CardText
              book
              fontSz="lg"
              color="blue"
              text={t('mev.text')}
              margin="32px 0;"
            />
          </div>
          <Button
            onClick={() => multiModal('mev')}
            fontRegular
            small
            margin="50px 0 0"
          >
            {`${t('common:findMore')}`}
          </Button>
        </Card>
        <DefaultLinkCard card="global" />
        <DefaultLinkCard card="create" />
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
//       data: null,
//     },
//   }
// }

export default Foundations
