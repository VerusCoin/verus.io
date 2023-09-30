import { MainLayout, Grid } from '@/components/layouts'
import { NextSeo } from 'next-seo'
import styled from 'styled-components'
import { media } from 'styled-bootstrap-grid'
import { bgColor, fontFam, fontSize } from '@/styles/helpers'
import React, { useEffect, useState } from 'react'
import { Button } from '@/components/elements'
import { FaMedium } from 'react-icons/fa'
import useSWR from 'swr'
import FetchCoversion from '@/lib/fetchCoversion'
import { GetServerSideProps } from 'next'
import { BiSolidUpArrow } from 'react-icons/bi'
// import { useForm } from 'react-hook-form'
import {useNotifyContext} from '@/lib/Contexts'
const title = 'Verus-Ethereum Bridge'
const description = 'Use the non-custodial bridge'

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
  justify-content: center;
  padding: 5px 7px;
  text-align: center;
  color: white;
  margin-right: 10px;
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

// const StyledBottomCard = styled(EthTopLeft)`
//   h5 {
//     ${fontSize('sm')}
//     margin-bottom: 0;
//     padding-bottom: 0;
//   }
//   p {
//     ${fontSize('menu')}
//     max-width: 575px;
//   }
//   a {
//     margin-top: 40px;
//     display: flex;
//     align-items: center;
//     width: fit-content;
//     svg {
//       height: 16px;
//     }
//     svg.medium {
//       height: 24px;
//       margin-right: 5px;
//       fill: black;
//     }
//   }
// `

const StyledBlueRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  padding: 2px 10px;

  p {
    ${fontFam('gepHead')}
    font-size: 12px;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
    padding: 0;
    margin: 0;
    color: rgba(49, 101, 212, 0.59);
    width: 100%;
  }

  p.middle {
    display: flex;
    align-items: center;
    justify-content: end;
  }
  p.last {
    text-align: right;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: end;
    span {
      font-size: 10px;
      display: flex;
      align-items: center;
    }
    &.less {
      color: red;
      span > svg {
        transform: rotate(180deg);
      }
    }
    &.equal {
      color: black;
      span > svg {
        visible: hidden;
      }
    }
    &.greater {
      color: green;
    }
  }

  ${media.tablet`
  p.last {
   flex-direction: row;
    align-items: center;
    justify-content: end;
    span{
      margin-left: 5px;
    }
  }
  `}
`

const StyledBlueRowContent = styled(StyledBlueRow)`
  padding: 22px;
  border-radius: 7px;
  border: 1px solid #3165d4;
  background: rgba(49, 101, 212, 0.08);
  p {
    ${fontFam('geoHead')}
    color: #3165d4;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`

const StyledLaunchBlock = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  ${media.tablet`
  flex-direction: row;
  align-items: baseline;
  `};
`

type Token = {
  name: string
  amount: number
  daiPrice: number

  price: number
}

const fetcher = (url: string) => fetch(url).then((res) => res.json())
const blockNumber: number = parseInt(
  process.env.NEXT_PUBLIC_NOTIFY_BANNER_BLOCK || '0'
)

const EthBridge = ({ bridgeFallback }: { bridgeFallback: any }) => {
  const { blockCount } = useNotifyContext()
  const [timeLeft, setTimeLeft] = useState<string>()

  const { data: ConversionList } = useSWR('/api/conversion', fetcher, {
    refreshInterval: 60000,
    fallback: bridgeFallback,
  })

  useEffect(() => {
    if (blockCount) {
      //1 block = approx 1 minute
      const days = Math.floor(blockCount / 1440)

      const hours = Math.floor((blockCount % 1440) / 60)

      const minutes = Math.floor((blockCount % 1440) % 60)
      setTimeLeft(`${days}d, ${hours}h, ${minutes}m`)
    }
  }, [blockCount])

  // const [bridgeVeth, setBridgeVeth] = useState(0)
  // const { register, watch, resetField } = useForm()
  // const ETHchange = watch('ETH')
  // const VRSCchange = watch('VRSC')
  // const DAIchange = watch('DAI')

  // useEffect(() => {
  //   if (ETHchange !== '') {
  //     const ETH = ConversionList.list.find((t: any) => t.name === 'vETH')
  //     //       //ETH Field value * ETH Price / Bridge Price
  //     const total =
  //       (parseInt(ETHchange) * ETH.price) / ConversionList.bridge.daiPrice
  //     setBridgeVeth(total)
  //     resetField('VRSC')
  //     resetField('DAI')
  //   }
  // }, [ETHchange])

  // useEffect(() => {
  //   if (VRSCchange !== '') {
  //     const VRSC = ConversionList.list.find(
  //       (t: any) => t.name === 'VRSC' || t.name === 'VRSCTEST'
  //     )
  //     //       //ETH Field value * ETH Price / Bridge Price
  //     const total =
  //       (parseInt(VRSCchange) * VRSC.price) / ConversionList.bridge.daiPrice
  //     setBridgeVeth(total)
  //     resetField('ETH')
  //     resetField('DAI')
  //   }
  // }, [VRSCchange])

  // useEffect(() => {
  //   if (DAIchange !== '') {
  //     const total = parseInt(DAIchange) / ConversionList.bridge.daiPrice
  //     setBridgeVeth(total)
  //     resetField('VRSC')
  //     resetField('ETH')
  //   }
  // }, [DAIchange])

  return (
    <>
      <NextSeo title={title} description={description} />
      <MainLayout>
        <Grid>
          <EthBridgeTopCard>
            <EthTopLeft>
              <StyledBadgeRow>
                <PreBadge>IN PRECONVERSION</PreBadge>
                <StyledLaunchBlock>
                  <DateP>{timeLeft} left</DateP>
                  <span>
                    Launch block: {Intl.NumberFormat().format(blockNumber)}
                  </span>
                </StyledLaunchBlock>
              </StyledBadgeRow>
              <BlueBarTextWrapper>
                <StyledBlueRow>
                  <p>Liquidity Pool</p>
                  <p className="middle">
                    Supply
                    <StyledQuestionTip>
                      ?
                      <Tooltip>
                        <span>
                          During the preconversion timeframe there is a fixed
                          initial supply. This initial supply will be
                          distributed by the protocol once the currency is
                          launched.
                        </span>
                        <br />
                        <br />
                        <span>
                          After the launch the supply is dynamic since people
                          can convert to it, and out of it.
                        </span>
                      </Tooltip>
                    </StyledQuestionTip>
                  </p>
                  <p className="last">
                    Price in DAI{' '}
                    <StyledQuestionTip>
                      ?
                      <Tooltip>
                        <span style={{ textAlign: 'left' }}>
                          This is the last protocol price for the Bridge.vETH
                          currency.
                        </span>
                      </Tooltip>
                    </StyledQuestionTip>
                  </p>
                </StyledBlueRow>
                <StyledBlueRowContent>
                  <p style={{ textTransform: 'none' }}>
                    {ConversionList.bridge.name}
                  </p>
                  <p className="middle">
                    {Intl.NumberFormat('en-US', {
                      style: 'decimal',
                      maximumFractionDigits: 3,
                      minimumFractionDigits: 3,
                    }).format(ConversionList.bridge.amount)}
                  </p>
                  <p className="last">
                    {Intl.NumberFormat('en-US', {
                      style: 'decimal',
                      maximumFractionDigits: 3,
                      minimumFractionDigits: 3,
                    }).format(ConversionList.bridge.daiPrice)}
                  </p>
                </StyledBlueRowContent>
              </BlueBarTextWrapper>

              <BlueBarTextWrapper top>
                <StyledBlueRow>
                  <p style={{ textTransform: 'none' }}>
                    Bridge.vETH CURRENCIES
                  </p>
                  <p className="middle">Reserves</p>
                  <p className="last">
                    Price in DAI
                    <StyledQuestionTip>
                      ?
                      <Tooltip>
                        <span style={{ textAlign: 'left' }}>
                          The protocol price of the reserves in DAI, compared to
                          the market price. (if the percentage is up, the
                          protocol price is higher than the market price, and
                          vice versa)
                        </span>
                      </Tooltip>
                    </StyledQuestionTip>
                  </p>
                </StyledBlueRow>
                {ConversionList.list.map((token: Token, index: number) => {
                  const diff = token.price - token.daiPrice
                  const percent =
                    Math.abs(token.price - token.daiPrice) /
                    Math.abs((token.price + token.daiPrice) / 2)
                  const rate =
                    diff < 0 ? 'less' : diff > 0 ? 'greater' : 'equal'

                  return (
                    <StyledBlueRowContent
                      key={index}
                      style={{ marginBottom: '5px' }}
                    >
                      <p style={{ textTransform: 'none' }}>{token.name}</p>
                      <p className="middle">
                        {Intl.NumberFormat('en-US', {
                          style: 'decimal',
                          maximumFractionDigits: 3,
                          minimumFractionDigits: 3,
                        }).format(token.amount)}
                      </p>

                      <p className={`last ${rate}`}>
                        {Intl.NumberFormat('en-US', {
                          style: 'decimal',
                          maximumFractionDigits: 2,
                          minimumFractionDigits: 2,
                        }).format(token.daiPrice)}

                        <span className="equal">
                          <BiSolidUpArrow />
                          {Intl.NumberFormat('en-US', {
                            style: 'percent',
                            maximumFractionDigits: 2,
                            minimumFractionDigits: 2,
                          }).format(percent)}
                        </span>
                      </p>
                    </StyledBlueRowContent>
                  )
                })}
              </BlueBarTextWrapper>

              <h4 style={{ fontWeight: '400' }}>
                Total market value of liquidity:{' '}
                {Intl.NumberFormat('en-US', {
                  style: 'decimal',

                  minimumFractionDigits: 2,
                  maximumFractionDigits: 6,
                }).format(
                  ConversionList.bridge.daiPrice * ConversionList.bridge.amount
                )}{' '}
                DAI
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
          {/* <EthBridgeTopCard>
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
                  maxWidth: '350px',
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
                      style={{
                        width: '100px',
                        height: '32px',
                        borderRadius: '5px',
                        border: '1px solid #AFAFAF',
                        background: 'white',
                      }}
                      {...register('ETH')}
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
                      style={{
                        width: '100px',
                        height: '32px',
                        borderRadius: '5px',
                        border: '1px solid #AFAFAF',
                        background: 'white',
                      }}
                      {...register('DAI')}
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
                      style={{
                        width: '100px',
                        height: '32px',
                        borderRadius: '5px',
                        border: '1px solid #AFAFAF',
                        background: 'white',
                      }}
                      {...register('VRSC')}
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
                    <h4 style={{ margin: '0' }}>
                      {Intl.NumberFormat('en-US', {
                        style: 'decimal',
                        maximumFractionDigits: 2,
                        minimumFractionDigits: 2,
                      }).format(bridgeVeth || 0)}
                      {` `}Bridge.vETH
                    </h4>
                  </div>
                </div>
              </div>
            </StyledBottomCard>
          </EthBridgeTopCard> */}
        </Grid>
      </MainLayout>
    </>
  )
}

export default EthBridge

export const getServerSideProps: GetServerSideProps = async () => {
  const bridgeInfo = await FetchCoversion()
  bridgeInfo.list = bridgeInfo?.list?.map((token) => ({
    ...token,
    price: token.daiPrice,
  }))

  return {
    props: {
      bridgeFallback: {
        '/api/conversion': bridgeInfo,
      },
    },
  }
}

