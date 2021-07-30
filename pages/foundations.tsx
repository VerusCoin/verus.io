import React from 'react'

import useTranslation from 'next-translate/useTranslation'
import { MainLayout, Grid } from '@/components/layouts'
import {
  Button,
  DefaultLinkCard,
  Img,
  Card,
  CardText,
} from '@/components/elements'

// import { GetStaticProps, InferGetStaticPropsType } from 'next'
// import { FoundationsProps } from '@/types/foundations'
import {
  EarthCard,
  KeychainCard,
  Banner,
  NetworkCard,
} from '@/components/sections/Foundation'

const Foundations = () => {
  const { t } = useTranslation('foundation')
  const JumbotronJSON = {
    header: t('jumbotron.heading'),
    text: t('jumbotron.text'),
    width: 1000,
  }
  return (
    <MainLayout jumbotronData={JumbotronJSON}>
      <Grid>
        <EarthCard>
          <CardText book fontSz="xl" text={t('earthCard.header')} />
          <CardText
            book
            fontSz="lg"
            color="blue"
            margin="32px 0"
            text={t('earthCard.text')}
          />
          <Button fontRegular small>
            {`${t('common:findMore')}`}
          </Button>
        </EarthCard>
        <KeychainCard>
          <div className="keychain-image">
            <Img name="keychain" />
          </div>
          <Card>
            <div>
              <CardText book fontSz="xl" text={t('keychainCard.header')} />
              <CardText
                book
                fontSz="lg"
                color="blue"
                margin="32px 0"
                text={t('keychainCard.text')}
              />
            </div>
            <Button fontRegular small>
              {`${t('common:findMore')}`}
            </Button>
          </Card>
        </KeychainCard>
        <Card>
          <div style={{ marginBottom: '90px' }}>
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
          <Button fontRegular small>
            {`${t('common:findMore')}`}
          </Button>
        </Card>
        <Card>
          <div style={{ marginBottom: '90px' }}>
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
          <Button fontRegular small>
            {`${t('common:findMore')}`}
          </Button>
        </Card>
        <Banner />
        <NetworkCard>
          <div className="checkmark-image">
            <Img name="checkmark" />
          </div>
          <Card>
            <CardText
              book
              fontSz="xl"
              margin="0 75px"
              text={t('smartContracts')}
            />

            <Button fontRegular small margin="42px 0">
              {`${t('common:findMore')}`}
            </Button>
          </Card>
        </NetworkCard>
        <Card>
          <div style={{ marginBottom: '90px' }}>
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
              margin="32px 100px;"
            />
          </div>
          <Button fontRegular small>
            {`${t('common:findMore')}`}
          </Button>
        </Card>
        <Card>
          <div style={{ marginBottom: '90px' }}>
            <CardText
              book
              fontSz="xl"
              margin="32px 15px;"
              text={t('mev.header')}
            />
            <CardText
              book
              fontSz="lg"
              color="blue"
              text={t('mev.text')}
              margin="32px 50px;"
            />
          </div>
          <Button fontRegular small>
            {`${t('common:findMore')}`}
          </Button>
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
