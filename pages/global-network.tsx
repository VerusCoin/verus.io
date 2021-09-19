import React, { useState } from 'react'
import styled from 'styled-components'
import { NextSeo } from 'next-seo'
import useTranslation from 'next-translate/useTranslation'
import { MainLayout, Grid } from '@/components/layouts'
import {
  Button,
  DefaultText,
  Img,
  Card,
  CardText,
  NetTag,
  Modal,
  useModal,
  SVGs,
} from '@/components/elements'

import { ChainCard, CurvCard } from '@/components/sections/Global'

const StyledTable = styled.div`
  display: flex-column;

  width: 100%;
`
// > div:first-child {
//   border-bottom: 1px solid #ececec;
// }
const StyledRow = styled.div`
  display: flex;
  align-items: center;
  div:first-child {
    min-width: 64px;

    text-align: center;
  }
  div:last-child {
    min-width: 87px;
    justify-content: center;
  }
`

const Foundations = () => {
  const { t } = useTranslation('globalNetwork')
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
  const title = t('seo:page.global.title')
  const description = t('seo.page.global.description')
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
          <ChainCard>
            <div className="card">
              <CardText book fontSz="xl" text={t('connectedCard.header')} />

              <Button
                onClick={() => multiModal('connectedCard')}
                fontRegular
                small
                margin="50px 0 0"
              >
                {`${t('common:findMore')}`}
              </Button>
            </div>
            <div className="image">
              <SVGs name="chains" />
            </div>
          </ChainCard>
          <CurvCard>
            <CardText
              fontSz="xl"
              color="white"
              book
              text={t('provisioningCard.header')}
            />

            <Button
              onClick={() => multiModal('provisioningCard')}
              white
              small
              color="#3165d4"
              fontRegular
              margin="50px 0 0 0"
            >
              {`${t('common:findMore')}`}
            </Button>
          </CurvCard>

          <Card
            span={2}
            large
            styles="padding: 191px 5px 41px ;"
            tabletStyles="padding: 120px 75px 150px;"
            desktopStyles="padding: 220px 75px ;"
            giantStyles="padding: 250px 200px;"
            stars
          >
            <div>
              <CardText
                book
                fontSz="xl"
                margin="32px 64px;"
                text={t('advantageCard.header')}
              />
            </div>
            <Button
              onClick={() => multiModal('advantageCard')}
              fontRegular
              small
              margin="50px 0 0"
            >
              {`${t('common:findMore')}`}
            </Button>
          </Card>
          <Card
            span={2}
            styles="padding: 50px 25px 75px; "
            tabletStyles="padding: 50px 100px 75px; min-height: unset;"
            desktopStyles="padding: 100px 198px 150px;"
            giantStyles="padding: 100px 270px 150px;"
          >
            <CardText
              book
              fontSz="mdlg"
              margin="32px auto;"
              text={t('bridgeCard.header')}
            />

            <StyledTable>
              <StyledRow>
                <div>
                  <Img name="ethereum-logo" height={32} />
                </div>
                <DefaultText fam="geoHead" fontSz="sm">
                  {t('coins:ethereum')}
                </DefaultText>
                <NetTag net="test" unMargin />
              </StyledRow>

              {/* <StyledRow>
              <div>
                <Img name="pirate-logo" height={32} />
              </div>
              <DefaultText fam="geoHead" fontSz="mdlg">
                {t('coins:pirate')}
              </DefaultText>
              <NetTag net="plan" unMargin />
            </StyledRow> */}
              <CardText
                fontSz="xs"
                text={t('bridgeCard.text')}
                margin="32px auto;"
                color="#676767"
              />
            </StyledTable>
            {/* <Button
            transparent
            svg={{ type: 'tab', rotate: false }}
            href="#"
            as="a"
            color="#3165d4"
          >
            {t('bridgeCard.link')}
          </Button> */}
          </Card>
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
