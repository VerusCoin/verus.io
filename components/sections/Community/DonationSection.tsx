import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { media } from 'styled-bootstrap-grid'

import {
  Button,
  DefaultText,
  Img,
  SVGs,
  AddressCopy,
} from '@/components/elements'
import useTranslation from 'next-translate/useTranslation'
import { QRCode } from 'react-qrcode-logo'
import { bgColor } from '@/styles/helpers'

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
    text-decoration: none;
    padding: 0 0 0 10px;
    width: contain-content;
    &:hover {
      text-decoration: underline;
    }
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

const DonationInfo: Record<string, string> = {
  verus: 'Verus Coin Foundation@',
  bitcoin: '1FoRNRPTuXHseNPRc54yLwyeVrVGJgH5eo',
  komodo: 'RQ5cSwGkWM6SiNkd5F46SUJrG7wrxRwrTc',
  ethereum: '0xFA825bAd52101bEC6c2ee06b88f47E8DF03f66Eb',
}

const ExternalLink: Record<string, string> = {
  verus: 'https://insight.verus.io/address/',
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
              logoOpacity={0.3}
              logoWidth={100}
              qrStyle="dots"
            />
          </StyledQRCode>
          <AddressCopy
            text={donationInfo.value}
            tooltip={donationInfo.coin === 'verus'}
          />

          <a
            target="_blank"
            href={ExternalLink[donationInfo.coin] + donationInfo.value}
            rel="noreferrer"
          >
            <DefaultText fam="geoBook" fontSz="menu">
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
