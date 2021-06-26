import React from 'react'
// import { GetStaticProps, InferGetStaticPropsType } from 'next'
// import { CreateWithVerusProps } from 'types/createpage'
// import styled from 'styled-components'
import { Row, Col } from 'styled-bootstrap-grid'
import {
  DefaultHeader,
  // DefaultText,
  Button,
  Modal,
} from '@/components/elements'
import { useModal } from '@/components/elements/Modal/Modal'
import { MainLayout, Section, Grid } from '@/components/layouts'
import { Card, CardHeader, CardText } from '@/components/elements/Card'
// import { StartAProject, SelfSovereign } from '@/components/sections/Create'
// import { JumbotronJSON } from '@/data/createpage/json/JumbotronJSON'
// import {
//   StartAProjectJSON,
//   SelfSovereignJSON,
//   DefiSovereignJSON,
// } from '@/data/createpage'
// import { spacer, fontColor } from '@/styles/helpers'

// const StyledTextSection = styled.div`
//   text-align: center;
//   margin-bottom: ${(props) => props.theme.spaces.xs};
//   p {
//     font-size: 18px;
//   }
// `

const CreateWithVerus = () => {
  const { isShown, toggle } = useModal()
  return (
    <MainLayout bG="greyQuin">
      <Section width={900}>
        <DefaultHeader as="h1" fontNormal align="center" customColor="blue">
          Change the world.
        </DefaultHeader>
        <DefaultHeader fontNormal align="center">
          Create products and business you care about.
        </DefaultHeader>
      </Section>
      <Grid>
        <Card padding="140px" bGcolor="#12347c" span={2} justify={false}>
          <Row>
            <Col col={8}>
              <CardHeader color="white" align="left">
                Blockchain or token currency. It's in your hands.
              </CardHeader>
              <div style={{ margin: '60px 0', maxWidth: '500px' }}>
                <CardText color="white" align="left">
                  Take matters into your own hands. In just a few commands.
                  Almost unbelievable.
                </CardText>
              </div>
              <Button primary wide as="a" href="#">
                Get started on docs.verus.io
              </Button>
            </Col>
          </Row>
        </Card>
        <Card padding="100px 70px 60px" bGcolor="white">
          <CardHeader>Interoperable blockchains.</CardHeader>
          <div style={{ margin: '60px 0' }}>
            <CardText>
              Independent and customizable. The network takes care of the rest.
            </CardText>
          </div>
          <Button onClick={toggle} small>
            Find out more (test)
          </Button>
        </Card>
        <Modal
          isShown={isShown}
          hide={toggle}
          title="Our plan to reach everyone with VerusID"
        >
          Payments Cheap, fast, scalable and final payments are an essential
          element of all decentralized systems. In Verus, the $VRSC coin
          represents that function. Privacy Privacy are fundamental human
          rights. Verus supports fully encrypted zero knowledge private
          transactions. Self-Sovereign Identity The necessity for users to own
          their own identity, data, social graphs and reputation is
          self-evident. Verus implements identity in the protocol level of the
          blockchain, enabling core requirements for decentralized identities.
          Decentralized Finance DeFi enables lending, borrowing and automated
          market makers. Verus provides decentralized finance that is fair and
          has low fees for everyone. Data The decentralized internet will
          consist of different systems exchanging data that they can all
          understand. Verus enables this through its VDXF, the ability to define
          and publish data structures at the protocol level, which can then be
          shared across bridges and gateways. Interoperability By enabling full
          scale interoperability at the protocol level the Verus system does not
          need a turing complete programmable layer. Actions can occur on other
          systems where required, provided that systems are exchanging data in a
          way that they can all understand.
        </Modal>
        <Card padding="100px 70px 60px" bGcolor="white">
          <CardHeader>Interoperable blockchains.</CardHeader>
          <div style={{ margin: '60px 0' }}>
            <CardText>
              Tailor a token currency for your needs. Upgrade to a blockchain
              later.
            </CardText>
          </div>
          <Button small as="a" href="#">
            Find out more
          </Button>
        </Card>
        <Card padding="140px" bGcolor="white" span={2} justify={false}>
          <Row>
            <Col col={8}>
              <CardHeader align="left">
                Instant liquidity for your project.
              </CardHeader>
              <div style={{ margin: '60px 0', maxWidth: '500px' }}>
                <CardText align="left">
                  Including funding options you didn't even know exist. Verus
                  DeFi facilitates you and your users.
                </CardText>
              </div>
              <Button as="a" href="#">
                How it works
              </Button>
            </Col>
          </Row>
        </Card>
        <Card padding="140px" bGcolor="#181818" span={2} justify={false}>
          <Row>
            <Col col={8}>
              <CardHeader color="white" align="left">
                You get privacy. By design.
              </CardHeader>
              <div style={{ margin: '60px 0', maxWidth: '500px' }}>
                <CardText color="white" align="left">
                  With zero knowledge proofs, you and your users can make
                  conscious decisions on what to share, and keep private.
                </CardText>
              </div>
              <Button as="a" href="#">
                Find out more
              </Button>
            </Col>
          </Row>
        </Card>
        <Card padding="140px" bGcolor="white" span={2} justify={false}>
          <Row>
            <Col col={8}>
              <CardHeader align="left">
                Self-sovereign identities. And more.
              </CardHeader>
              <div style={{ margin: '60px 0', maxWidth: '500px' }}>
                <CardText align="left">
                  VerusID supports and enhances human autonomous behavior. It is
                  also a foundational part of the ecosystem.
                </CardText>
              </div>
              <Button as="a" href="#">
                Find out more
              </Button>
            </Col>
          </Row>
        </Card>
        <Card padding="140px" bGcolor="white" span={2} justify={false}>
          <Row>
            <Col col={8}>
              <CardHeader align="left">
                Send data all over the place.
              </CardHeader>
              <div style={{ margin: '60px 0', maxWidth: '500px' }}>
                <CardText align="left">
                  Sending verifiable data across blockchains and other systems
                  has always been a giant challenge. Not anymore.
                </CardText>
              </div>
              <Button as="a" href="#">
                Find out more
              </Button>
            </Col>
          </Row>
        </Card>
        <Card padding="100px 70px 60px" bGcolor="#3165d4" span={2}>
          <CardHeader color="white">Get started.</CardHeader>
          <div style={{ marginBottom: '60px' }}>
            <CardHeader as="h4" color="white">
              A few simple commands away from changing the world.
            </CardHeader>
          </div>
          <Button primary wide as="a" href="#">
            Learn more on docs.verus.io
          </Button>
        </Card>
      </Grid>
      <Section width={900}>
        <DefaultHeader as="h1" fontNormal align="center" customColor="blue">
          Build to last.
        </DefaultHeader>
        <DefaultHeader fontNormal align="center">
          Strong foundations for continual growth.
        </DefaultHeader>
      </Section>
      <Grid>
        <Card padding="140px" bGcolor="white" span={2} justify={false}>
          <Row>
            <Col col={9}>
              <CardHeader color="#2f8a3d" align="left">
                Made for you, by the community.
              </CardHeader>
              <div style={{ margin: '60px 0', maxWidth: '500px' }}>
                <CardText align="left">
                  No ICO. No premine. No developer or founder fees. Something
                  unique in the cryptocurrency world.
                </CardText>
              </div>
              <Button as="a" href="#">
                Find out more
              </Button>
            </Col>
          </Row>
        </Card>
        <Card padding="140px" bGcolor="white" span={2} justify={false}>
          <Row>
            <Col col={9}>
              <CardHeader align="left">
                A safe network to store your wealth.
              </CardHeader>
              <div style={{ margin: '60px 0', maxWidth: '500px' }}>
                <CardText align="left">
                  An attack resistant network. Powerful digital vaults. You can
                  sleep like a baby.
                </CardText>
              </div>
              <Button as="a" href="#">
                Find out more
              </Button>
            </Col>
          </Row>
        </Card>
        <Card padding="140px" bGcolor="white" span={2} justify={false}>
          <Row>
            <Col col={9}>
              <CardHeader align="left">
                Don't be afraid of faulty smart contracts.
              </CardHeader>
              <div style={{ margin: '60px 0', maxWidth: '500px' }}>
                <CardText align="left">
                  Make transactions and conversions with full confidence.
                </CardText>
              </div>
              <Button as="a" href="#">
                Find out more
              </Button>
            </Col>
          </Row>
        </Card>
        <Card padding="140px" bGcolor="white" span={2} justify={false}>
          <Row>
            <Col col={9}>
              <CardHeader align="left">
                No one takes advantage of you.
              </CardHeader>
              <div style={{ margin: '60px 0', maxWidth: '500px' }}>
                <CardText align="left">
                  Unlike other blockchain networks where miners take advantage
                  of your transactions and conversions, Verus does things
                  differently.
                </CardText>
              </div>
              <Button as="a" href="#">
                Find out more
              </Button>
            </Col>
          </Row>
        </Card>
        <Card padding="100px 70px 60px" bGcolor="white">
          <CardHeader>Scalable without limits.</CardHeader>
          <div style={{ margin: '60px 0' }}>
            <CardText>
              A multichain network that scales, and scales, and scales.
            </CardText>
          </div>
          <Button as="a" href="#" small>
            Find out more
          </Button>
        </Card>
        <Card padding="100px 70px 60px" bGcolor="white">
          <CardHeader>Quantum future proof.</CardHeader>
          <div style={{ margin: '60px 0' }}>
            <CardText>
              Quantum computers won't surprise Verus, so they won't surprise
              you.
            </CardText>
          </div>
          <Button as="a" href="#" small>
            Find out more
          </Button>
        </Card>
        <Card padding="100px 70px 60px" bGcolor="white">
          <CardHeader>Top-tier decentralized network.</CardHeader>
          <div style={{ margin: '60px 0' }}>
            <CardText>
              One of the most decentralized networks of all cryptocurrency
              networks. Seriously.
            </CardText>
          </div>
          <Button as="a" href="#" small>
            Find out more
          </Button>
        </Card>
        <Card padding="100px 70px 60px" bGcolor="white">
          <CardHeader>Lifeblood. Utility. Usage.</CardHeader>

          <div style={{ marginTop: '210px', marginBottom: '20px' }}>
            <Button
              transparent
              svg={{ type: 'arrow', rotate: false }}
              href="#"
              as="a"
              color="#3165d4"
              fontRegular
            >
              More on coin $VRSC
            </Button>
          </div>
        </Card>
      </Grid>
      {/* <StartAProject {...data.StartAProjectJSON} />
      <Section width={710}>
        <StyledTextSection>
          <DefaultText>Did you know?</DefaultText>
        </StyledTextSection>
        <DefaultHeader as="h2" align="center">
          A secure and scalable system with the most important functions at the
          protocol level.import DefaultHeader from '../components/elements/DefaultHeader/DefaultHeader';

          <div>
            <Button
              transparent
              svg={{ type: 'arrow', rotate: false }}
              href="#"
              as="a"
            >
              Read more about our strong foundations
            </Button>
          </div>
        </DefaultHeader>
      </Section>
      <SelfSovereign {...data.SelfSovereignJSON} />
      <SelfSovereign {...data.DefiSovereignJSON} /> */}
    </MainLayout>
  )
}

// export const getStaticProps: GetStaticProps = async () => {
//   return {
//     props: {
//       data: {
//         JumbotronJSON,
//         StartAProjectJSON,
//         SelfSovereignJSON,
//         DefiSovereignJSON,
//       },
//     },
//   }
// }

export default CreateWithVerus
