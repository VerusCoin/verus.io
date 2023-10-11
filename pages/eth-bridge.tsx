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
import { useNotifyContext } from '@/lib/Contexts'
const title = 'Verus-Ethereum Bridge'
const description = 'Use the non-custodial bridge'

const StyledEthBridgeGrid = styled(Grid)`
  padding: 0;

  ${media.tablet`
    padding: 0 20px;
    
  `}
`

const EthBridgeTopCard = styled.div`
  ${bgColor('white')}

  padding: 20px;
  justify-content: space-between;

  display: flex;
  grid-column: span 2;
  gap: 20px;

  flex-direction: column;
  ${media.tablet`
    border-radius: 8px;  
  `}
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
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
  span {
    ${fontFam('geoHead')}
    font-size: 14px;
    color: #969696;
  }
  ${media.desktop`
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  `}
`

const PreBadge = styled.div`
  ${fontFam('geoHead')}
  width: 104px !important;
  height: 17px !important;
  flex-shrink: 0;
  border-radius: 7px;
  background: #008f06;
  font-size: 10px;
  diplay: flex;
  align-items: center;
  justify-content: center;
  // padding: 5px 7px;
  text-align: center;
  color: white;
  margin-right: 10px;
  margin-bottom: 10px;
  ${media.tablet`
    margin-bottom: 0;
    font-size: 12px;
    width: 125px !important;
  height: 24px !important;
  `}
`

const DateP = styled.p`
  ${fontFam('geoHead')}
  margin: 0 5px;
`

const BlueBarTextWrapper = styled.div<any>`
  ${(props: any) => props.top && 'margin-top: 25px;'}
  &.toptop {
    margin-top: 25px;
  }
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
  color: black;
  text-align: left;
  font-weight: 400;
  // background-color: #3165d4;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.52);
  font-size: 12px;
  font-weight: 400;
  padding: 8px 8px;
  border-radius: 8px;
  display: none;
  visibility: hidden;
  right: -50px;
  a {
    color: #3165d4;
  }
  ${StyledQuestionTip}:hover & {
    display: block;
    visibility: visible;
  }
  p:first-child {
    width: 100% !important;
  }
  &:after {
    content: ' ';
    position: absolute;
    top: 100%; /* At the bottom of the tooltip */
    right: 16%;

    border-width: 8px;
    border-style: solid;

    border-color: rgba(0, 0, 0, 0.5) transparent transparent transparent;
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
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: flex-end;

  width: 100%;
  padding: 2px 5px;
  p:first-child {
    width: 125%;
  }
  p {
    ${fontFam('gepHead')}
    font-size: 10px;
    font-weight: 700;
    line-height: normal;

    padding: 0;
    margin: 0;

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

    justify-content: end;
    &.pricein {
      align-items: flex-end;
    }
  }
  p.equal {
    text-align: right;
    display: flex;
    font-size: 12px;
    justify-content: end;
    align-items: center;
    svg {
      margin-right: 2px;
      height: 10px;
    }
    &.less {
      color: #ea1818 !important;
      svg {
        transform: rotate(180deg);
      }
    }
    &.equal {
      color: #939393;

      svg {
        visible: hidden;
      }
    }
    &.greater {
      color: #229904 !important;
    }
  }
  ${media.tablet`
  padding: 2px 10px;
  
  p{
    font-size: 12px;
    &.equal {
      font-size: 16px;
    }
    &.last {
    text-align:left;
    align-items: center;
    justify-content: end;
      span{
        margin-left: 5px;
      }
      svg{
        margin-right: 4px;
        height: 12px;
      }
      &.pricein {
        br {
          display: none;
        }
      }
    }
  }
  
  
  `}
`

const StyledBlueRowContent = styled(StyledBlueRow)`
  padding: 14px;
  border-radius: 7px;
  align-items: center;
  border: 1px solid #3165d4;
  background: rgba(49, 101, 212, 0.08);
  &.breaker {
    margin-bottom: 2px;
  }
  p {
    ${fontFam('geoHead')}

    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    color: rgba(49, 101, 212, 0.59);
  }
  p.last {
    color: #3165d4;
  }
  p:first-child {
    text-transform: none;
    color: #3165d4;
  }
  ${media.tablet`
    padding: 18px;
    p{font-size: 16px;}
    
    &.breaker{
      margin-bottom: 5px;
    }

  `}
  ${media.desktop`
  padding: 22px;
  p{
    font-size: 20px;
  }
  `}
`

const StyledLaunchBlock = styled.div`
  display: flex;
  p {
    font-size: 12px;
  }

  align-items: center;
  span {
    font-size: 12px;
  }
  ${media.tablet`
  p{font-size: 16px;}
  
  span{font-size:14px;}
  align-items: baseline;
  `};
`
const StyledLiquid = styled(StyledBlueRowContent)`
  border-radius: 7px;
  border: 1px solid #3165d4;
  background: none;
  margin-top: 28px;
  p {
    grid-column: span 2;
  }
  ${media.desktop`
    margin-top: 40px;
  `}
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
      const newBlockCount = blockCount * 1.03
      const days = Math.floor((newBlockCount / 1440)

      const hours = Math.floor((newBlockCount % 1440) / 60)

      const minutes = Math.floor((newBlockCount % 1440) % 60)
      setTimeLeft(`${days}d, ${hours}h, ${minutes}m`)
    }
  }, [blockCount])

  return (
    <>
      <NextSeo title={title} description={description} />
      <MainLayout>
        <StyledEthBridgeGrid>
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
              <BlueBarTextWrapper className="toptop">
                <StyledBlueRow>
                  <p style={{ marginLeft: '2px' }}>Liquidity pool</p>
                  <p className="middle">
                    Supply
                    <StyledQuestionTip>
                      ?
                      <Tooltip>
                        <p style={{ textAlign: 'left', fontWeight: '400' }}>
                          During the preconversion timeframe there is a fixed
                          initial supply. This initial supply will be
                          distributed by the protocol once the currency is
                          launched.
                        </p>
                        <br />

                        <p style={{ textAlign: 'left', fontWeight: '400' }}>
                          After the launch the supply is dynamic since people
                          can convert to it, and out of it.
                        </p>
                      </Tooltip>
                    </StyledQuestionTip>
                  </p>
                  <p className="last">
                    Price in DAI{' '}
                    <StyledQuestionTip>
                      ?
                      <Tooltip>
                        <p style={{ textAlign: 'left', fontWeight: '400' }}>
                          This is the last protocol price for the Bridge.vETH
                          currency.
                        </p>
                      </Tooltip>
                    </StyledQuestionTip>
                  </p>
                </StyledBlueRow>
                <StyledBlueRowContent style={{ background: 'none' }}>
                  <p style={{ textTransform: 'none' }}>Bridge.vETH</p>
                  <p className="middle">
                    {Intl.NumberFormat('en-US', {
                      style: 'decimal',
                      maximumFractionDigits: 0,
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
                  <p>
                    Bridge.vETH
                    <br />
                    reserve currencies
                  </p>
                  <p className="middle">In reserves</p>
                  <p className="last pricein">
                    Price <br />
                    in DAI
                    <StyledQuestionTip>
                      ?
                      <Tooltip>
                        <p style={{ textAlign: 'left', fontWeight: '400' }}>
                          The protocol price of the reserves in DAI.
                        </p>
                      </Tooltip>
                    </StyledQuestionTip>
                  </p>
                  <p className="last" style={{ alignItems: 'flex-end' }}>
                    Compared to <br />
                    CoinGecko
                    <StyledQuestionTip
                      style={{ marginBottom: '2px', marginLeft: '2px' }}
                    >
                      ?
                      <Tooltip>
                        <p style={{ textAlign: 'left', fontWeight: '400' }}>
                          The protocol price compared to CoinGecko market price
                          (source:{' '}
                          <a
                            href="https://www.coingecko.com/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            coingecko.com
                          </a>
                          ).
                        </p>
                      </Tooltip>
                    </StyledQuestionTip>
                  </p>
                </StyledBlueRow>
                {ConversionList.list.map((token: Token, index: number) => {
                  const rate =
                    token.daiPrice < token.price
                      ? 'less'
                      : token.daiPrice > token.price
                      ? 'greater'
                      : 'equal'

                  const percent = Math.abs(token.daiPrice / token.price) - 1

                  return (
                    <StyledBlueRowContent key={index} className="breaker">
                      <p>{token.name}</p>
                      <p className="middle">
                        {Intl.NumberFormat('en-US', {
                          style: 'decimal',
                          maximumFractionDigits: 3,
                          minimumFractionDigits: 3,
                        }).format(token.amount)}
                      </p>

                      <p className="last">
                        {Intl.NumberFormat('en-US', {
                          style: 'decimal',
                          maximumFractionDigits: 2,
                          minimumFractionDigits: 2,
                        }).format(token.daiPrice)}
                      </p>
                      <p className={`equal ${rate}`}>
                        {rate !== 'equal' && <BiSolidUpArrow />}
                        {Intl.NumberFormat('en-US', {
                          style: 'percent',
                          maximumFractionDigits: 2,
                          minimumFractionDigits: 2,
                        }).format(Math.abs(percent))}
                      </p>
                    </StyledBlueRowContent>
                  )
                })}
              </BlueBarTextWrapper>
              <StyledLiquid>
                <p>Total value of liquidity</p>
                <p className="last">
                  {Intl.NumberFormat('en-US', {
                    style: 'decimal',

                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  }).format(
                    ConversionList.bridge.daiPrice *
                      ConversionList.bridge.amount
                  )}{' '}
                  DAI
                </p>
              </StyledLiquid>
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
                href="https://eth.verusbridge.io"
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
                href={process.env.NEXT_PUBLIC_NOTIFY_BANNER_LINK}
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
        </StyledEthBridgeGrid>
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

