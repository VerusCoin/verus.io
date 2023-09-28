import { MainLayout, Grid } from '@/components/layouts'
import { NextSeo } from 'next-seo'
import styled from 'styled-components'
import { media } from 'styled-bootstrap-grid'
import { bgColor, fontFam, fontSize } from '@/styles/helpers'
import React from 'react'
import { Button } from '@/components/elements'
import { FaMedium } from 'react-icons/fa'
// import useSWR from 'swr'

const title = ''
const description = ''

const EthBridgeTopCard = styled.div`
  ${bgColor('white')}
  border-radius: 8px;
  padding: 20px;
  justify-content: space-between;

  display: flex;
  grid-column: span 2;
  gap: 20px;

  flex-direction: column;
  ${media.desktop`
    flex-direction: row;
    padding: 80px;
  `}
`

const EthTopLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  div {
    display: flex;
    height: fit-content;
  }
`

const EthTopRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 15px 20px 50px;
  div {
    display: flex;
    height: fit-content;
  }
  h5 {
    ${fontSize('sm')}
    margin-bottom: 0;
    padding-bottom: 0;
  }
  p {
    ${fontSize('menu')}
  }
  a {
    margin-top: 40px;
    display: flex;
    align-items: center;
    width: fit-content;
    svg {
      height: 16px;
    }
    svg.medium {
      height: 24px;
      margin-right: 5px;
      fill: black;
    }
  }

  ${media.desktop`
    width: 600px;
    padding: 15px 50px;
  `}
`

const StyledBadgeRow = styled.div`
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  span {
    ${fontFam('geoHead')}
    font-size: 14px;
    color: #969696;
  }
  ${media.desktop`
    flex-direction: row;
  `}
`

const PreBadge = styled.p`
  ${fontFam('geoHead')}
  width: 125px;
  height: 24px;
  flex-shrink: 0;
  border-radius: 7px;
  background: #008f06;
  font-size: 12px;
  diplay: flex;

  padding: 5px 7px;
  text-align: center;
  color: white;
`

const DateP = styled.p`
  ${fontFam('geoHead')}
  margin: 0 5px;
`

const BlueBarTextWrapper = styled.div<any>`
  ${(props: any) => props.top && 'margin-top: 25px;'}

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  ${media.desktop`
    ${(props: any) => props.top && 'margin-top: 60px;'}
  `}
`
const BlueBarTextDiv = styled.div`
  width: 100%;
  height: 60px;
  flex-shrink: 0;
  border-radius: 7px;
  border: 1px solid #3165d4;
  background: rgba(49, 101, 212, 0.08);
  color: #3165d4;
  padding: 22px;
  ${fontFam('geoHead')}
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  display: flex;
  justify-content: space-between;
  p {
    margin: 0;
    padding: 0;
    width: 100%;
  }
  p.qty {
    width: 75%;
  }
  div.lastPrice {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 20%;
    gap: 5px;
    p.currency {
      width: fit-content;
      ${fontSize('xxs')}
      color: rgba(49, 101, 212, 0.59);
    }
  }
  ${media.tablet`
    p.qty {
      width: 50%;
    }
    div.lastPrice {
      flex-direction: row;
      align-items: baseline;
      width: auto;
    }
  `}
`
const BlueBarTopBar = styled.div`
  color: rgba(49, 101, 212, 0.59);

  ${fontFam('gepHead')}
  font-size: 12px;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  display: flex;
  justify-conent: end;
  align-items: center;
`

const BlueSecondTopBar = styled(BlueBarTopBar)`
  justify-content: space-between;
  width: 100%;
  span.reserve {
    width: 35%;
  }
  div.lastPrice {
    width: 30%;
  }
  ${media.tablet`
  span.reserve {
    width: auto;
  }
  div.lastPrice {
    width: auto;
  }
  `}
`
const StyledQuestionTip = styled.div`
  margin-left: 5px;
  display: flex;
  justify-content: center;
  position: relative;
  color: white;
  background: rgba(49, 101, 212, 0.59);
  border-radius: 100%;
  width: 12px;
  font-size: 10px;
`

const Tooltip = styled.div<any>`
  ${fontFam('geoReg')}
  text-transform: none;
  position: absolute;
  bottom: 150%;
  width: 300px;
  color: #fff;
  background-color: #3165d4;
  font-size: 12px;
  font-weight: 400;
  padding: 8px 8px;
  border-radius: 8px;
  display: none;
  visibility: hidden;
  right: -50px;
  ${StyledQuestionTip}:hover & {
    display: block;
    visibility: visible;
  }

  &:after {
    content: ' ';
    position: absolute;
    top: 97%; /* At the bottom of the tooltip */
    right: 16%;

    border-width: 8px;
    border-style: solid;
    border-color: #3165d4 transparent transparent transparent;
  }
`

const StyledBottomCard = styled(EthTopLeft)`
  h5 {
    ${fontSize('sm')}
    margin-bottom: 0;
    padding-bottom: 0;
  }
  p {
    ${fontSize('menu')}
    max-width: 575px;
  }
  a {
    margin-top: 40px;
    display: flex;
    align-items: center;
    width: fit-content;
    svg {
      height: 16px;
    }
    svg.medium {
      height: 24px;
      margin-right: 5px;
      fill: black;
    }
  }
`
// const fetcher = (url: string) => fetch(url).then((res) => res.json())
const blockNumber: number = parseInt(
  process.env.NEXT_PUBLIC_NOTIFY_BANNER_BLOCK || '0'
)

const EthBridge = () => {
  // const { data } = useSWR('/api/conversion', fetcher, {
  //   refreshInterval: 60000,
  // })
  // const currencyNames = data?.result.currencynames
  // const currencyRates = data?.result.bestcurrencystate.currencies
  // const currentyReservers = data?.result.bestcurrencystate.reservecurrencies
  // const supply = data?.result.bestcurrencystate.supply

  // console.log(currencyRates, currencyNames, currentyReservers, supply)
  return (
    <>
      <NextSeo title={title} description={description} />
      <MainLayout>
        <Grid>
          <EthBridgeTopCard>
            <EthTopLeft>
              <StyledBadgeRow>
                <PreBadge>IN PRECONVERSION</PreBadge>
                <DateP>6d, 21h, 25m left</DateP>
                <span>
                  Launch block: {Intl.NumberFormat().format(blockNumber)}
                </span>
              </StyledBadgeRow>
              <BlueBarTextWrapper>
                <BlueBarTopBar>
                  Supply
                  <StyledQuestionTip>
                    ?
                    <Tooltip>
                      <span>
                        During the preconversion timeframe there is a fixed
                        initial supply. This initial supply will be distributed
                        by the protocol once the currency is launched.
                      </span>
                      <br />
                      <br />
                      <span>
                        After the launch the supply is dynamic since people can
                        convert to it, and out of it.
                      </span>
                    </Tooltip>
                  </StyledQuestionTip>
                </BlueBarTopBar>
                <BlueBarTextDiv>
                  <p>Bridge.vETH</p>

                  <p>100,000</p>
                </BlueBarTextDiv>
              </BlueBarTextWrapper>

              <BlueBarTextWrapper top>
                <BlueSecondTopBar>
                  <span>RESERVE CURRENCIES for bridge.veth</span>
                  <span className="reserve">IN RESERVES</span>
                  <div className="lastPrice">
                    <span style={{ textAlign: 'right' }}>LAST PRICE</span>
                    <StyledQuestionTip>
                      ?
                      <Tooltip>
                        <span>
                          This is the last protocol price for the Bridge.vETH
                          currency.
                        </span>
                      </Tooltip>
                    </StyledQuestionTip>
                  </div>
                </BlueSecondTopBar>
                <BlueBarTextDiv>
                  <p>VRSC</p>
                  <p className="qty">77,060</p>
                  <div className="lastPrice">
                    <p>2.168</p>
                    <p className="currency">$0.80</p>
                  </div>
                </BlueBarTextDiv>
              </BlueBarTextWrapper>
              <BlueBarTextWrapper style={{ margin: '5px 0' }}>
                <BlueBarTextDiv>
                  <p>DAI.vETH</p>
                  <p className="qty">122,135</p>
                  <div className="lastPrice">
                    <p>3.436</p>
                    <p className="currency">$2.43</p>
                  </div>
                </BlueBarTextDiv>
              </BlueBarTextWrapper>
              <BlueBarTextWrapper>
                <BlueBarTextDiv>
                  <p>vETH</p>
                  <p className="qty">62.4336</p>
                  <div className="lastPrice">
                    <p>0.00175</p>
                    <p className="currency">$2.48</p>
                  </div>
                </BlueBarTextDiv>
              </BlueBarTextWrapper>
              <h4 style={{ fontWeight: '400' }}>
                Total market value of liquidity: $288,225.75{' '}
              </h4>
            </EthTopLeft>
            <EthTopRight>
              <h5>Verus-Ethereum Bridge</h5>

              <p>
                The first ever truly non-custodial, trustless and consensus
                proven cryptocurrency bridge.
              </p>
              <Button
                fontSize="menu"
                as="a"
                target="_blank"
                href="https://verus.io"
                svg={{ type: 'miniTab', rotate: false }}
              >
                Connect to the bridge
              </Button>
              <Button
                className="btn3"
                fontSize="menu"
                transparent
                color="#3165D4"
                svg={{ type: 'miniTab', rotate: false }}
                href="https://medium.com/veruscoin/community-currencies-a-case-study-to-explore-new-technical-possibilities-ede897433b55"
                as="a"
                margin="45px 0 0"
                target="_blank"
              >
                <FaMedium size={24} className="medium" />
                Learn more on Medium
              </Button>
            </EthTopRight>
          </EthBridgeTopCard>
          <EthBridgeTopCard>
            <StyledBottomCard>
              <h5>Informational Calculator</h5>
              <p>
                Estimations based on current block height and reserves. The
                calculator is just for informational purposes.{' '}
                <b>Rates can vastly change each block.</b>
              </p>
              <div
                style={{
                  width: '100%',
                  justifyContent: 'space-between',
                  maxWidth: '300px',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '5px',
                  }}
                >
                  <p>If you put in:</p>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px',
                    }}
                  >
                    <input
                      name="ETH"
                      style={{
                        width: '100px',
                        height: '32px',
                        borderRadius: '5px',
                        border: '1px solid #AFAFAF',
                        background: 'white',
                      }}
                    />
                    <h4 style={{ margin: '0' }}>ETH</h4>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px',
                    }}
                  >
                    <input
                      name="DAI"
                      style={{
                        width: '100px',
                        height: '32px',
                        borderRadius: '5px',
                        border: '1px solid #AFAFAF',
                        background: 'white',
                      }}
                    />
                    <h4 style={{ margin: '0' }}>DAI</h4>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px',
                    }}
                  >
                    <input
                      name="VRSC"
                      style={{
                        width: '100px',
                        height: '32px',
                        borderRadius: '5px',
                        border: '1px solid #AFAFAF',
                        background: 'white',
                      }}
                    />
                    <h4 style={{ margin: '0' }}>VRSC</h4>
                  </div>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '5px',
                  }}
                >
                  <p>You get:</p>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px',
                    }}
                  >
                    <h4 style={{ margin: '0' }}>0 Bridge.vETH</h4>
                  </div>
                </div>
              </div>
            </StyledBottomCard>
          </EthBridgeTopCard>
        </Grid>
      </MainLayout>
    </>
  )
}

export default EthBridge
