// This will be the main standard layout for all pages
import React from 'react'
import styled from 'styled-components'
import { media } from 'styled-bootstrap-grid'
import { IMainLayout } from '@/types/layouts'
import {
  TopNavigation,
  MainNavigation,
  NotifyBanner,
  Footer,
  Jumbotron,
} from '@/components/molecules'
import { bgColor } from '@/styles/helpers'
import { useNotifyContext } from '@/lib/Contexts'

import {
  TopNavigationJSON,
  MainNavigationJSON,
  FooterJSON,
} from 'data/navigation'

const StyledContainer = styled.div<any>`
  padding-top: ${(props) => props.theme.spaces.custom.mobileMenu};
  ${(props: any) => bgColor(props.bG)}
  ${media.desktop`
    padding-top: ${(props: any) => props.theme.spaces.custom.desktopMenu};
  `}
  
  ${(props) =>
    props.notify &&
    (props.jumbo
      ? 'header > section {transform: translateY(50px);} main {transform: translateY(50px);}'
      : 'main {transform: translateY(50px);}')}
`

const MainLayout: React.FC<IMainLayout> = ({
  jumbotronData,
  bG = 'greyQuin',
  children,
}) => {
  const { notify } = useNotifyContext()
  return (
    <StyledContainer bG={bG} notify={notify} jumbo={jumbotronData}>
      <header>
        <NotifyBanner />
        <TopNavigation {...TopNavigationJSON} />
        <MainNavigation {...MainNavigationJSON} />
        {jumbotronData && <Jumbotron {...jumbotronData} />}
      </header>
      <main>{children}</main>
      <Footer {...FooterJSON} />
    </StyledContainer>
  )
}

export default MainLayout
