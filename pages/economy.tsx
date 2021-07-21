import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import { MainLayout, Section, Grid } from '@/components/layouts'
import {
  DefaultHeader,
  DefaultText,
  DefaultLink,
  Button,
  DefaultSVGs,
  Img,
  Progressbar,
} from '@/components/elements'

import Cards from '@/components/elements/Cards/Cards'
import CardHeader from '@/components/elements/Cards/CardHeader'
import CardText from '@/components/elements/Cards/CardText'

import {
  ParticipateCard,
  EconomicCard,
  Banner,
} from '@/components/sections/Economy'

const Economy = () => {
  const { t } = useTranslation('economy')
  const JumbotronJSON = {
    header: t('jumbotron.heading'),
    text: t('jumbotron.text'),
    width: 1000,
  }
  const ProgressBarValue = 75
  return (
    <MainLayout bG="greyQuin" jumbotronData={JumbotronJSON}>
      <Grid>
        <Cards>
          <CardText book fontSz="sm" text={t('staking.heading')} />
          <CardText
            book
            fontSz="xl"
            margin="27px 0 0 0"
            color="blue"
            text="42,631,653"
          />
          <CardText
            book
            fontSz="sm"
            margin="16px 0 60px 0"
            text={`/ 62,467,134 ${t('staking.outOf')}`}
          />
          <Progressbar
            value={ProgressBarValue}
            max={100}
            color="#4AA658"
            width="150px"
          />
          <CardText
            fontSz="sm"
            book
            text={`${ProgressBarValue}% ${t('staking.staking')}`}
          />
        </Cards>
        <Cards>
          <CardText book fontSz="sm" text={t('hashrate.heading')} />
          <CardText
            book
            fontSz="xl"
            margin="27px 0 0 0"
            color="blue"
            text="356 GH/s"
          />
          <CardText
            book
            fontSz="xs"
            margin="47px 0 0 0"
            text={t('hashrate.text')}
          />
          <div
            style={{
              marginTop: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Img name="iconmonstr-smartphone" height={24} />
            <CardText
              book
              fontSz="sm"
              margin="0"
              text={`118,666 ${t('hashrate.mobile')}`}
            />
          </div>
          <CardText book fontSz="xs" text={t('hashrate.or')} />
          <div
            style={{
              marginTop: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Img name="iconmonstr-cpu" height={24} />
            <CardText
              book
              fontSz="sm"
              margin="0"
              text={`11,866 ${t('hashrate.desktop')}`}
            />
          </div>
        </Cards>
        <div
          style={{
            gridColumn: 'span 2',
            width: '750px',
            margin: 'auto',
          }}
        >
          <DefaultText align="center">{t('note')}</DefaultText>
        </div>
        <ParticipateCard />
        <EconomicCard />
        <Banner />
      </Grid>

      {/* <Card
          bgImage="/images/round-publicinfrastructure.png"
          span={2}
          height="232px"
        >
          <CardHeader as="h3">
            Use Verus decentralized & rent-free community infrastructure.
          </CardHeader>
        </Card>
        <Card bGcolor="white">
          <DefaultSVGs name="payment" />

          <CardHeader>Payments</CardHeader>
          <CardText>
            You get cheap, fast, scalable and final payments. An essential
            element of all decentralized systems.
          </CardText>
        </Card>
        <Card bGcolor="white">
          <DefaultSVGs name="privacy" />

          <DefaultHeader align="center">Privacy</DefaultHeader>

          <CardText>
            Your privacy is a human right. Get fully encrypted zero knowledge
            private transactions.
          </CardText>
        </Card>
        <Card bGcolor="white">
          <DefaultSVGs name="identity" />

          <DefaultHeader align="center">VerusID</DefaultHeader>

          <CardText>
            Use decentralized self-sovereign identities for your project.
            Include any type of data. Set up vaults. Highly versatile and
            customizable.
          </CardText>
        </Card>
        <Card bGcolor="white">
          <DefaultSVGs name="finance" />

          <DefaultHeader align="center">DeFi</DefaultHeader>

          <CardText>
            No front-running and low fees. Who doesn't want that? Use now for
            lending, borrowing, funding, instant liquidity and conversions.
          </CardText>
        </Card>

        <Card bGcolor="white">
          <DefaultSVGs name="data" />

          <DefaultHeader align="center">Data</DefaultHeader>

          <CardText>
            Define and publish verifiable data structures across blockchains and
            other systems. With Verus Data Exchange Format (VDXF) it’s never
            been easier.
          </CardText>
        </Card>
        <Card bGcolor="white">
          <DefaultSVGs name="interoperability" />

          <DefaultHeader align="center">Interoperability</DefaultHeader>

          <CardText>
            Exchange value and data seamlessly across blockchains. Connect any
            systems together with Verus advanced bridging technology.
          </CardText>
        </Card>
        <Card bGcolor="white">
          <DefaultSVGs name="blockchainCreation" />

          <DefaultHeader align="center">PBaas</DefaultHeader>

          <CardText>
            Use Public Blockchains as a Service to deploy customizable, scalable
            and interoperable blockchains within minutes. No need to provision
            additional resources.
          </CardText>
        </Card>
        <Card bgImage="/images/bg-create.png" pRight={40} pLeft={40} pTop={40}>
          <div style={{ marginBottom: '60px' }}>
            <CardHeader color="white">
              Change the world. It's simple.
            </CardHeader>
          </div>
          <Button
            transparent
            svg={{ type: 'arrow', rotate: false }}
            href="#"
            as="a"
            color="white"
            fontRegular
          >
            Create with Verus
          </Button>
        </Card>
        <Card bGcolor="white" span={2} padding="140px">
          <div style={{ marginBottom: '60px', maxWidth: '600px' }}>
            <CardHeader>Strong foundations. Built to last.</CardHeader>
          </div>
          <Button
            transparent
            svg={{ type: 'arrow', rotate: false }}
            href="#"
            as="a"
            color="#3165d4"
            fontRegular
          >
            More on strong foundations
          </Button>
        </Card>
        <Card bGcolor="white" span={2} padding="140px">
          <div style={{ marginBottom: '60px', maxWidth: '600px' }}>
            <CardHeader>The network that connects all cryptos.</CardHeader>
          </div>
          <Button
            transparent
            svg={{ type: 'arrow', rotate: false }}
            href="#"
            as="a"
            color="#3165d4"
            fontRegular
          >
            More on bridges
          </Button>
        </Card> */}
    </MainLayout>
  )
}

export default Economy
