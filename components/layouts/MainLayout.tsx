// This will be the main standard layout for all pages
import React, { useState } from 'react'
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
`

const MainLayout: React.FC<IMainLayout> = ({
  jumbotronData,
  bG = 'greyQuin',
  children,
}) => {
  const [notify, setNotify] = useState(true)
  return (
    <StyledContainer bG={bG}>
      <header>
        <NotifyBanner notify={notify} setNote={() => setNotify(!notify)} />
        <TopNavigation {...TopNavigationJSON} notify={notify} />
        <MainNavigation {...MainNavigationJSON} notify={notify} />
        {jumbotronData && <Jumbotron {...jumbotronData} />}
      </header>
      <main>{children}</main>
      <Footer {...FooterJSON} />
    </StyledContainer>
  )
}

export default MainLayout
