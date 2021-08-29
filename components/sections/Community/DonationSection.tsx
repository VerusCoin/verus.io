import React, { useState } from 'react'
import styled from 'styled-components'
import { media } from 'styled-bootstrap-grid'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Button, DefaultText, Img, SVGs } from '@/components/elements'
import useTranslation from 'next-translate/useTranslation'
import { QRCode } from 'react-qrcode-logo'
import { bgColor } from '@/styles/helpers'

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 75%;
  margin: auto;
  justify-content: space-between;
  align-items: center;
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
  button.active {
    min-width: 125px;
    min-height: 100px;
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
    height: 48px;
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

  margin-bottom: 10px;
  padding: 15px;
  border-radius: px;
  ${media.tablet`
    margin-bottom: 0;
    margin-right: 20px;
  `}
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
  return (
    <StyledContainer>
      {list.map((coin) => (
        <StyledCol key={coin}>
          <Button
            transparent
            onClick={() => ShowDonationSection(coin)}
            href="#"
            color="#3165d4"
            className={
              donationInfo.coin === coin && showDonation ? 'active' : ''
            }
          >
            <StyledCoin>
              <Img name={`${coin}-logo`} />
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
                <Img name="copy" height={21} />
              </Button>
            </CopyToClipboard>
          </StyledAddress>
          {copy && (
            <DefaultText align="center" customColor="green">
              Copied
            </DefaultText>
          )}
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
