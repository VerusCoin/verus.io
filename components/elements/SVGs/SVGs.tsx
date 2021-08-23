import { ReactNode, ReactElement } from 'react'
import styled from 'styled-components'
// SVGs
// TODO: need to clean up
import ArrowDown from './assets/arrow-down.svg'
import Arrow from './assets/arrow.svg'
import Bridge from './assets/bridge.svg'
import Build from './assets/build.svg'
import Coin from './assets/coin.svg'
import Contribute from './assets/contribute.svg'
import Chains from './assets/chains.svg'
import Close from './assets/close.svg'
import Discord from './assets/discord.svg'
import Documentation from './assets/documentation.svg'
import Download from './assets/download.svg'
import Exchanges from './assets/exchanges.svg'
import Explorer from './assets/explorer.svg'
import Faq from './assets/faq.svg'
import Foundations from './assets/foundations.svg'
import Github from './assets/github.svg'
import Logo from './assets/logo.svg'
import OpenInNew from './assets/open_in_new.svg'
import Papers from './assets/papers.svg'
import People from './assets/people.svg'
import SupportWiki from './assets/support-wiki.svg'
import Telegram from './assets/telegram.svg'
import Twitter from './assets/twitter.svg'
import VerusIdLookup from './assets/verusid-lookup.svg'
import VerusSignatures from './assets/verusid-signatures.svg'
import Youtube from './assets/youtube.svg'

// interface SVGList {
//   [key: string]: ReactNode
// }

// interface ISVG {
//   name: string
// }

const SVGIcon: Record<string, ReactElement> = {
  arrowDown: <ArrowDown />,
  arrow: <Arrow />,
  bridge: <Bridge />,
  build: <Build />,
  chains: <Chains />,
  close: <Close />,
  coin: <Coin />,
  contribute: <Contribute />,
  discord: <Discord />,
  documentation: <Documentation />,
  download: <Download />,
  exchanges: <Exchanges />,
  explorer: <Explorer />,
  faq: <Faq />,
  foundations: <Foundations />,
  github: <Github />,
  logo: <Logo />,
  papers: <Papers />,
  people: <People />,
  supportWiki: <SupportWiki />,
  tab: <OpenInNew />,
  telegram: <Telegram />,
  twitter: <Twitter />,
  verusIdLookup: <VerusIdLookup />,
  verusSignatures: <VerusSignatures />,
  youtube: <Youtube />,
}

export function SVGs({ name }: { name: string }): ReactElement | null {
  return SVGIcon[name] || null
}

const StyledSVG = styled.div`
  text-align: center;
  color: ${(props) => props.theme.colors.white};
  svg {
    height: 100px;
  }
`

export function DefaultSVGs({ name }: { name: string }): ReactNode | null {
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
