// import { GetStaticProps, InferGetStaticPropsType } from 'next'
// import { FoundationsProps } from '@/types/foundations'
import { Row, Col } from 'styled-bootstrap-grid'
import { DefaultHeader, Button } from '@/components/elements'
import { Card, CardHeader, CardText } from '@/components/elements/Card'
import { MainLayout, Section, Grid } from '@/components/layouts'

const Foundations = () => {
  return (
    <MainLayout bG="greyQuin">
      <Section width={1000}>
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
