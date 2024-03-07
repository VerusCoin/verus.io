import { ReactNode, ReactElement } from 'react'
import styled from 'styled-components'
// SVGs
// TODO: need to clean up
import Android from './assets/android.svg'
import ArrowDown from './assets/arrow-down.svg'
import Arrow from './assets/arrow.svg'
import Bridge from './assets/bridge.svg'
import Build from './assets/build.svg'
import Coin from './assets/coin.svg'
import Contribute from './assets/contribute.svg'
import Chains from './assets/chains.svg'
import Close from './assets/close.svg'
import Discord from './assets/discord.svg'
import DiscordIcon from './assets/discordIcon.svg'
import Documentation from './assets/documentation.svg'
import Download from './assets/download1.svg'
import Dropdown from './assets/dropdown.svg'
import Exchanges from './assets/exchanges.svg'
import Explorer from './assets/explorer.svg'
import Faq from './assets/faq.svg'
import Foundations from './assets/foundations.svg'
import Github from './assets/github.svg'
import LinkedIn from './assets/linkedIn.svg'
import Linux from './assets/linux.svg'
import Logo from './assets/logo.svg'
import MacOS from './assets/macOS.svg'
import OpenInNew from './assets/open-in-new.svg'
import MiniOpenInNew from './assets/miniOpenInNew.svg'
import Papers from './assets/papers.svg'
import People from './assets/people.svg'
import SupportWiki from './assets/support-wiki.svg'
import Telegram from './assets/telegram.svg'
import TelegramIcon from './assets/telegramIcon.svg'
import Twitter from './assets/twitter.svg'
import VerusIdLookup from './assets/verusid-lookup.svg'
import VerusSignatures from './assets/verusid-signatures.svg'
import VerusIcon from './assets/identity.svg'
import Windows from './assets/windows.svg'
import Youtube from './assets/youtube.svg'
import Testnet from './assets/testnet.svg'
import VerusBridge from './assets/eth-bridge-icon.svg'
import EthLogo from './assets/eth-logo.svg'
// interface SVGList {
//   [key: string]: ReactNode
// }

// interface ISVG {
//   name: string
// }

const SVGIcon: Record<string, ReactElement> = {
  android: <Android />,
  arrowDown: <ArrowDown />,
  arrow: <Arrow />,
  bridge: <Bridge />,
  build: <Build />,
  chains: <Chains />,
  close: <Close />,
  coin: <Coin />,
  contribute: <Contribute />,
  discord: <Discord />,
  discordIcon: <DiscordIcon />,
  documentation: <Documentation />,
  download: <Download />,
  dropdown: <Dropdown />,
  exchanges: <Exchanges />,
  explorer: <Explorer />,
  faq: <Faq />,
  foundations: <Foundations />,
  github: <Github />,
  linkedIn: <LinkedIn />,
  linux: <Linux />,
  logo: <Logo />,
  macOS: <MacOS />,
  papers: <Papers />,
  people: <People />,
  supportWiki: <SupportWiki />,
  tab: <OpenInNew />,
  miniTab: <MiniOpenInNew />,
  telegram: <Telegram />,
  telegramIcon: <TelegramIcon />,
  testnet: <Testnet />,
  twitter: <Twitter />,
  verusIdLookup: <VerusIdLookup />,
  verusBridge: <VerusBridge />,
  verusSignatures: <VerusSignatures />,
  verusid: <VerusIcon />,
  windows: <Windows />,
  youtube: <Youtube />,
  ethlogo: <EthLogo />,
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
