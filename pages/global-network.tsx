import React, { useState } from 'react'
import styled from 'styled-components'

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
  SVGs,
} from '@/components/elements'

import { ChainCard, CurvCard } from '@/components/sections/Global'

const StyledTable = styled.div`
  display: flex-column;

  width: 100%;
  > div:first-child {
    border-bottom: 1px solid #ececec;
  }
`
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
  const [showConnectModal, setShowConnectModal] = useState(false)
  const [showProvisionModal, setShowProvisionModal] = useState(false)
  const [showAdvantageModal, setShowAdvantageModal] = useState(false)

  const JumbotronJSON = {
    header: t('jumbotron.heading'),
    text: t('jumbotron.text'),
    width: 1000,
  }

  return (
    <MainLayout jumbotronData={JumbotronJSON}>
      <Grid>
        <ChainCard>
          <div className="card">
            <CardText book fontSz="xl" text={t('connectedCard.header')} />

            <Button
              onClick={() => setShowConnectModal(!showConnectModal)}
              fontRegular
              small
              margin="50px 0 0"
            >
              {`${t('common:findMore')}`}
            </Button>
            <Modal
              isShown={showConnectModal}
              hide={() => setShowConnectModal(!showConnectModal)}
              title={t('connectedCard.modal.header')}
              text={t('connectedCard.modal.text')}
            />
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
            onClick={() => setShowProvisionModal(!showProvisionModal)}
            white
            small
            color="#3165d4"
            fontRegular
            margin="50px 0 0 0"
          >
            {`${t('common:findMore')}`}
          </Button>
          <Modal
            isShown={showProvisionModal}
            hide={() => setShowProvisionModal(!showProvisionModal)}
            title={t('provisioningCard.modal.header')}
            text={t('provisioningCard.modal.text')}
          />
        </CurvCard>

        <Card
          span={2}
          large
          styles="padding: 100px 5px;"
          desktopStyles="padding: 170px 100px;"
          giantStyles="padding: 170px 200px;"
        >
          <div>
            <CardText
              book
              fontSz="xl"
              margin="32px 64px;"
              text={t('advantageCard.header')}
            />
            <CardText
              book
              fontSz="lg"
              color="blue"
              text={t('advantageCard.text')}
              margin="32px auto;"
              styles="max-width: 350px;"
            />
          </div>
          <Button
            onClick={() => setShowAdvantageModal(!showAdvantageModal)}
            fontRegular
            small
            margin="50px 0 0"
          >
            {`${t('common:findMore')}`}
          </Button>
          <Modal
            isShown={showAdvantageModal}
            hide={() => setShowAdvantageModal(!showAdvantageModal)}
            title={t('scalableLimits.modal.header')}
            text={t('scalableLimits.modal.text')}
          />
        </Card>
        <Card
          span={2}
          large
          styles="padding: 50px 25px 75px; "
          tabletStyles="padding: 50px 100px 75px;"
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
              <DefaultText fam="geoHead" fontSz="mdlg">
                {t('coins:ethereum')}
              </DefaultText>
              <NetTag net="test" unMargin />
            </StyledRow>

            <StyledRow>
              <div>
                <Img name="pirate-logo" height={32} />
              </div>
              <DefaultText fam="geoHead" fontSz="mdlg">
                {t('coins:pirate')}
              </DefaultText>
              <NetTag net="plan" unMargin />
            </StyledRow>
            <CardText
              regular
              fontSz="xs"
              text={t('bridgeCard.text')}
              margin="32px auto;"
              color="#676767"
            />
          </StyledTable>
          <Button
            transparent
            svg={{ type: 'tab', rotate: false }}
            href="#"
            as="a"
            color="#3165d4"
          >
            {t('bridgeCard.link')}
          </Button>
        </Card>
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
