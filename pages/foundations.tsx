import React, { useState } from 'react'
import { NextSeo } from 'next-seo'
import useTranslation from 'next-translate/useTranslation'
import { MainLayout, Grid } from '@/components/layouts'
import {
  Button,
  DefaultLinkCard,
  Img,
  Card,
  CardText,
  CardHeader,
} from '@/components/elements'
import Modal, { useModal } from '@/components/elements/Modal/Modal'

import {
  EarthCard,
  KeychainCard,
  FoundationBanner,
  NetworkCard,
  MultiChainCard,
} from '@/components/sections/Foundation'

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
  const title = t('seo:page.foundations.title')
  const description = t('seo:page.foundations.description')
  const JumbotronJSON = {
    header: t('jumbotron.heading'),
    text: t('jumbotron.text'),
    width: 1000,
  }

  return (
    <>
      <NextSeo title={title} description={description} />
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
          <KeychainCard />
          <MultiChainCard />
          <FoundationBanner />
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
            tabletStyles="padding: 30px 5px 100px;"
            desktopStyles="padding: 30px 5px;"
          >
            <div>
              <CardHeader margin="32px 0;" text={t('mev.header')} />
              <CardText
                book
                fontSz="mdlg"
                color="blue"
                text={t('mev.text')}
                margin="32px 0 ;"
              />
            </div>
            <Button onClick={() => multiModal('mev')} fontRegular small>
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
    </>
  )
}


export default Foundations
