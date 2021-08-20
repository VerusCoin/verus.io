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
  const [showEarthModal, setShowEarthModal] = useState(false)
  const [showKeyChainModal, setShowKeyChainModal] = useState(false)
  const [showScalableModal, setShowScalableModal] = useState(false)
  const [showTopTierModal, setShowTopTierModal] = useState(false)
  const [showContractsModal, setShowContractsModal] = useState(false)
  const [showProofModal, setShowProofModal] = useState(false)
  const [showMevModal, setShowMevModal] = useState(false)

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
            onClick={() => setShowEarthModal(!showEarthModal)}
            fontRegular
            small
            margin="50px 0 0"
          >
            {`${t('common:findMore')}`}
          </Button>
          <Modal
            isShown={showEarthModal}
            hide={() => setShowEarthModal(!showEarthModal)}
            title={t('earthCard.modal.header')}
            text={t('earthCard.modal.text')}
          />
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
              <CardText
                book
                fontSz="lg"
                color="blue"
                margin="32px 0"
                text={t('keychainCard.text')}
              />
            </div>
            <Button
              onClick={() => setShowKeyChainModal(!showKeyChainModal)}
              fontRegular
              small
              margin="50px 0 0 0 "
            >
              {`${t('common:findMore')}`}
            </Button>
            <Modal
              isShown={showKeyChainModal}
              hide={() => setShowKeyChainModal(!showKeyChainModal)}
              title={t('keychainCard.modal.header')}
              text={t('keychainCard.modal.text')}
            />
          </div>
        </KeychainCard>
        <Card large>
          <div>
            <CardText
              book
              fontSz="xl"
              margin="32px 64px;"
              text={t('scalableLimits.header')}
            />
            <CardText
              book
              fontSz="lg"
              color="blue"
              text={t('scalableLimits.text')}
              margin="32px 64px;"
            />
          </div>
          <Button
            onClick={() => setShowScalableModal(!showScalableModal)}
            fontRegular
            small
            margin="50px 0 0"
          >
            {`${t('common:findMore')}`}
          </Button>
          <Modal
            isShown={showScalableModal}
            hide={() => setShowScalableModal(!showScalableModal)}
            title={t('scalableLimits.modal.header')}
            text={t('scalableLimits.modal.text')}
          />
        </Card>
        <Card large>
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
            onClick={() => setShowTopTierModal(!showTopTierModal)}
            fontRegular
            small
            margin="50px 0 0"
          >
            {`${t('common:findMore')}`}
          </Button>
          <Modal
            isShown={showTopTierModal}
            hide={() => setShowTopTierModal(!showTopTierModal)}
            title={t('topTier.modal.header')}
            text={t('topTier.modal.text')}
          />
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
              onClick={() => setShowContractsModal(!showContractsModal)}
              fontRegular
              small
              margin="60px 0"
            >
              {`${t('common:findMore')}`}
            </Button>
            <Modal
              isShown={showContractsModal}
              hide={() => setShowContractsModal(!showContractsModal)}
              title={t('smartContracts.modal.header')}
              text={t('smartContracts.modal.text')}
            />
          </div>
        </NetworkCard>
        <Card large>
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
            onClick={() => setShowProofModal(!showProofModal)}
            fontRegular
            small
            margin="50px 0 0"
          >
            {`${t('common:findMore')}`}
          </Button>
          <Modal
            isShown={showProofModal}
            hide={() => setShowProofModal(!showProofModal)}
            title={t('quantumProof.modal.header')}
            text={t('quantumProof.modal.text')}
          />
        </Card>
        <Card
          large
          tabletStyles="padding: 100px 25px;"
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
            onClick={() => setShowMevModal(!showMevModal)}
            fontRegular
            small
            margin="5px 0 0"
          >
            {`${t('common:findMore')}`}
          </Button>
          <Modal
            isShown={showMevModal}
            hide={() => setShowMevModal(!showMevModal)}
            title={t('mev.modal.header')}
            text={t('mev.modal.text')}
          />
        </Card>
        <DefaultLinkCard card="global" />
        <DefaultLinkCard card="create" />
        <DefaultLinkCard card="coin" />
      </Grid>
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
