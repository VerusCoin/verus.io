import React from 'react'

// import styled from 'styled-components'
import { MainLayout, Section, Grid } from '@/components/layouts'
import {
  DefaultHeader,
  // DefaultText,
  Button,
  DefaultSVGs,
} from '@/components/elements'
// import { Jumbotron } from '@/components/molecules'
import { Card, CardHeader, CardText } from '@/components/elements/Card'
// import { EconomyJSON } from '@/data/economy'

const EjumbotronData = {
  header: 'Participate and Create the Internet of Value',
  button: { text: 'Earn in our Open Economy', href: '#' },
}

const Economy = () => {
  return (
    <MainLayout bG="greyQuin">
      <Section width={1000}>
        <DefaultHeader as="h1" fontNormal align="center">
          {EjumbotronData.header}
        </DefaultHeader>
        <div style={{ textAlign: 'center' }}>
          <Button
            transparent
            svg={{ type: 'arrow', rotate: false }}
            href="#"
            as="a"
            color="#3165d4"
            fontRegular
          >
            Earn in the network economy
          </Button>
        </div>
        <div style={{ textAlign: 'center' }}>
          <Button
            transparent
            svg={{ type: 'arrow', rotate: false }}
            href="#"
            as="a"
            color="#3165d4"
            fontRegular
          >
            Create with Verus
          </Button>
        </div>
      </Section>

      <Grid>
        <Card
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
        </Card>
      </Grid>
    </MainLayout>
  )
}

export default Economy
