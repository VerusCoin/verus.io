import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import { MainLayout, Grid } from '@/components/layouts'
import { Card, CardText } from '@/components/elements'

import { SocialCards, DonationSection } from '@/components/sections/Community'

const Contribute = () => {
  const { t } = useTranslation('contribute')

  const JumbotronJSON = {
    header: t('jumbotron.heading'),
    text: t('jumbotron.text'),
    width: 1000,
  }

  return (
    <MainLayout jumbotronData={JumbotronJSON}>
      <Grid>
        <SocialCards />

        <Card
          span={2}
          styles="height: unset"
          tabletStyles="height: unset"
          desktopStyles="height: unset"
        >
          <CardText
            book
            fontSz="xl"
            margin="32px 64px;"
            text={t('supportCard.header')}
          />
          <CardText
            book
            fontSz="md"
            text={t('supportCard.text')}
            margin="32px auto;"
            styles="max-width: 550px;"
          />
          <CardText
            regular
            fontSz="xs"
            text={t('supportCard.subtext')}
            margin="32px auto;"
            color="#676767"
          />
          <DonationSection />
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

export default Contribute
