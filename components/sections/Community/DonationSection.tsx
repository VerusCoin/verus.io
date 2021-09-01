import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { media } from 'styled-bootstrap-grid'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Button, DefaultText, Img, SVGs } from '@/components/elements'
import useTranslation from 'next-translate/useTranslation'
import { QRCode } from 'react-qrcode-logo'
import { bgColor, fontFam, fontSize } from '@/styles/helpers'

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  margin: auto;
  justify-content: space-between;
  align-items: center;
  ${media.tablet`
    width: 75%;
  `}
`
const StyledCol = styled.div`
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 0 0 50%;
  max-width: 50%;
  text-align: center;
  button {
    min-width: 100px;
    min-height: 100px;
  }
  button.active {
    border-radius: 12px;
    ${bgColor('#F3F3F3')}
  }

  ${media.tablet`
    flex: 0 0 25%;
    max-width: 25%;
  `}
`

const StyledCoin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin: 10px auto;
  img {
    margin-bottom: 10px;
  }
`
const StyledDonationSection = styled.div`
  display: flex;

  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin: 100px auto 25px;
  a {
    color: #3165d4;
    align-items: center;
    display: inline-flex;
    margin-top: 30px;
    padding: 0 0 0 10px;
    width: contain-content;
    svg {
      height: 24px;
      width: 30px;
      transform: scale(0.75);
    }
  }
  ${media.tablet`
  margin: 100px auto 50px ;
  `}
`

const StyledQRCode = styled.div`
  padding: 20px;
  border: solid 1px;
  border-radius: 5px;
`

const StyledAddress = styled.div`
  position: relative;
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
  margin-right: 20px;
  padding: 15px;
  border-radius: px;
`

const TooltipBox = styled.div<any>`
  ${fontFam('geoReg')}
  ${fontSize('xxs')}
  position: absolute;
  top: calc(100% - 77px);
  left: calc(100% - 30px);
  color: #fff;
  background-color: #3165d4;
  visibility: ${(props: any) => (props.copyStat ? 'visible' : 'hidden')};
  padding: 8px 8px;
  border-radius: 8px;
  opacity: ${(props: any) => (props.copyStat ? '1' : '0')};
  transition: visibility 2.5s, opacity 1s ease-in-out;
  &:after {
    content: ' ';
    position: absolute;
    top: 100%; /* At the bottom of the tooltip */
    left: 50%;
    margin-left: -15px;
    border-width: 10px;
    border-style: solid;
    border-color: #3165d4 transparent transparent transparent;
  }
`

const DonationInfo: Record<string, string> = {
  verus: 'RVjvbZuqSGLGDm1B9BFkbHWySPKEx4tfjQ',
  bitcoin: '1FoRNRPTuXHseNPRc54yLwyeVrVGJgH5eo',
  komodo: 'RVjvbZuqSGLGDm1B9BFkbHWySPKEx4tfjQ',
  ethereum: '0x06E2F78E650C88c6D89440E778004037FEAbefC5',
}

const ExternalLink: Record<string, string> = {
  verus: 'https://explorer.verus.io/address/',
  bitcoin: 'https://www.blockchain.com/btc/address/',
  komodo: 'https://kmdexplorer.io/address/',
  ethereum: 'https://etherscan.io/address/',
}

const DonationSection = () => {
  const { t } = useTranslation('coins')
  const list = Object.keys(DonationInfo)
  const [showDonation, setShowDonation] = useState(false)
  const [donationInfo, setDonationInfo] = useState({ value: '', coin: '' })
  const [copy, setCopy] = useState(false)
  const ShowDonationSection = (coin: string) => {
    setCopy(false)
    if (
      (donationInfo.coin === coin && showDonation === true) ||
      showDonation === false
    ) {
      setShowDonation(!showDonation)
    }
    setDonationInfo({
      value: DonationInfo[coin],
      coin: coin,
    })
  }
  useEffect(() => {
    setTimeout(() => {
      // do something 1 sec after clicked has changed
      setCopy(false)
    }, 5000)
  }, [copy])
  return (
    <StyledContainer>
      {list.map((coin) => (
        <StyledCol key={coin}>
          <Button
            transparent
            onClick={() => ShowDonationSection(coin)}
            color="#3165d4"
            className={
              donationInfo.coin === coin && showDonation ? 'active' : ''
            }
          >
            <StyledCoin>
              <Img name={`${coin}-logo`} height={24} />
              {t(coin)}
            </StyledCoin>
          </Button>
        </StyledCol>
      ))}
      {showDonation && (
        <StyledDonationSection>
          <StyledQRCode>
            <QRCode
              value={donationInfo.value}
              size={185}
              logoImage={`./svg/${donationInfo.coin}-logo.svg`}
              logoOpacity={0.5}
              logoWidth={100}
              qrStyle="dots"
            />
          </StyledQRCode>
          <StyledAddress>
            <StyledAddressBox>
              <DefaultText>{donationInfo.value}</DefaultText>
            </StyledAddressBox>
            <CopyToClipboard
              text={donationInfo.value}
              onCopy={() => setCopy(true)}
            >
              <Button transparent>
                <TooltipBox copyStat={copy}>Copied</TooltipBox>
                <Img name="copy" height={21} />
              </Button>
            </CopyToClipboard>
          </StyledAddress>

          <a
            target="_blank"
            href={ExternalLink[donationInfo.coin] + donationInfo.value}
            rel="noreferrer"
          >
            <DefaultText fam="geoBook" fontSz="xs">
              Open in Explorer
            </DefaultText>

            <SVGs name="tab" />
          </a>
        </StyledDonationSection>
      )}
    </StyledContainer>
  )
}

export default DonationSection
