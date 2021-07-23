import { ReactNode } from 'react'
import styled from 'styled-components'
// SVGs
// TODO: need to clean up
import ArrowDown from './assets/arrow-down.svg'
import Arrow from './assets/arrow.svg'
import BlockchainCreation from './assets/blockchain-creation.svg'
import BlockchainCreation1 from './assets/blockchain-creation-1.svg'
import Bridge from './assets/bridge.svg'
import Build from './assets/build.svg'
import Coin from './assets/coin.svg'
import Contribute from './assets/contribute.svg'
import Checkmark from './assets/checkmark.svg'
import Data from './assets/data.svg'
import Discord from './assets/discord.svg'
import Documentation from './assets/documentation.svg'
import Download from './assets/download.svg'
import Exchanges from './assets/exchanges.svg'
import Explorer from './assets/explorer.svg'
import Faq from './assets/faq.svg'
import Finance from './assets/finance.svg'
import Finance2 from './assets/finance-2.svg'
import Foundations from './assets/foundations.svg'
import Hamburger from './assets/hamburger.svg'
import Identity from './assets/identity.svg'
import Identity2 from './assets/identity-2.svg'
import Identity3 from './assets/identity-3.svg'
import Interoperability from './assets/interoperability.svg'
import Interoperability1 from './assets/interoperability-1.svg'
import Logo from './assets/logo.svg'
import OpenInNew from './assets/open_in_new.svg'
import Papers from './assets/papers.svg'
import Payment from './assets/payment.svg'
import People from './assets/people.svg'
import PlaceHolder from './assets/placeholder.svg'
import Plus from './assets/plus.svg'
import Privacy from './assets/privacy.svg'
import Privacy2 from './assets/privacy-2.svg'
import SupportWiki from './assets/support-wiki.svg'
import Telegram from './assets/telegram.svg'
import UspSvg from './assets/usp-svg.svg'
import VerusIdLookup from './assets/verusid-lookup.svg'
import VerusSignatures from './assets/verusid-signatures.svg'

interface SVGList {
  [key: string]: ReactNode
}

// interface ISVG {
//   name: string
// }

const SVGIcon: SVGList = {
  arrowDown: <ArrowDown />,
  arrow: <Arrow />,
  blockchainCreation: <BlockchainCreation />,
  blockchainCreation1: <BlockchainCreation1 />,
  bridge: <Bridge />,
  build: <Build />,
  coin: <Coin />,
  contribute: <Contribute />,
  checkmark: <Checkmark />,
  data: <Data />,
  discord: <Discord />,
  documentation: <Documentation />,
  download: <Download />,
  exchanges: <Exchanges />,
  explorer: <Explorer />,
  faq: <Faq />,
  finance: <Finance />,
  finance2: <Finance2 />,
  foundations: <Foundations />,
  hamburger: <Hamburger />,
  identity: <Identity />,
  identity2: <Identity2 />,
  identity3: <Identity3 />,
  interoperability: <Interoperability />,
  interoperability1: <Interoperability1 />,
  logo: <Logo />,
  papers: <Papers />,
  people: <People />,
  payment: <Payment />,
  placeHolder: <PlaceHolder />,
  plus: <Plus />,
  privacy: <Privacy />,
  privacy2: <Privacy2 />,
  supportWiki: <SupportWiki />,
  tab: <OpenInNew />,
  telegram: <Telegram />,
  usp: <UspSvg />,
  verusIdLookup: <VerusIdLookup />,
  verusSignatures: <VerusSignatures />,
}

export function SVGs({ name }: { name: string }): any | undefined {
  return SVGIcon[name]
}

const StyledSVG = styled.div`
  text-align: center;
  color: ${(props) => props.theme.colors.white};
  svg {
    height: 100px;
  }
`

export function DefaultSVGs({ name }: { name: string }): any | undefined {
  return (
    <StyledSVG>
      <SVGs name={name} />
    </StyledSVG>
  )
}
// export const SVGs: ISVG = ({ name }) => SVGIcon[name] || null

// interface IconProps {
//   name: string
//   style: string
// }

// export const Icon: React.FC<IconProps> = ({ name, style }) => {
//   const { style } = props
//   return (
//     <>
//       <SVGs name={name} />
//     </>
//   )
// }
