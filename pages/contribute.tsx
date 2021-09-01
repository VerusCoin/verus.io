import React, { useState } from 'react'
import styled from 'styled-components'
import { media } from 'styled-bootstrap-grid'
import useTranslation from 'next-translate/useTranslation'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { MainLayout, Grid } from '@/components/layouts'
import { Button, Card, CardText, DefaultText, Img } from '@/components/elements'
import { bgColor } from '@/styles/helpers'
import { SocialCards, DonationSection } from '@/components/sections/Community'

const StyledAddress = styled.div`
  margin-top: 30px;
  margin-bottom: 10px;
  justify-content: center;
  display: inline-flex;
  flex-wrap: wrap;

  p {
    font-size: 12px;
  }
  ${media.tablet`
    p{font-size: inherit;}
  `}
`

const StyledAddressBox = styled.div`
  ${bgColor('#F3F3F3')}
  border: solid 1px;

  padding: 15px;
  border-radius: 5px;
  margin-bottom: 0;
  margin-right: 20px;
`

const Contribute = () => {
  const { t } = useTranslation('contribute')
  const [copy, setCopy] = useState(false)
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
          <CardText
            book
            fontSz="md"
            text={t('supportCard.mine')}
            margin="200px auto 32px;"
            styles="max-width: 550px;"
          />
          <Button
            transparent
            svg={{ type: 'tab', rotate: false }}
            href="https://pool.verus.io"
            as="a"
            color="#3165d4"
          >
            {t(`supportCard.mineLink`)}
          </Button>
          <CardText
            book
            fontSz="md"
            text={t('supportCard.referral')}
            margin="146px auto 32px;"
            styles="max-width: 550px;"
          />
          <StyledAddress>
            <StyledAddressBox>
              <DefaultText>{t('supportCard.referralLink')}</DefaultText>
            </StyledAddressBox>
            <CopyToClipboard
              text="Verus Coin Foundation@"
              onCopy={() => setCopy(true)}
            >
              <Button transparent>
                <Img name="copy" height={21} />
              </Button>
            </CopyToClipboard>
          </StyledAddress>
          {copy && (
            <DefaultText align="center" customColor="green">
              Copied
            </DefaultText>
          )}
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
