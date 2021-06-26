// This will be the main standard layout for all pages
import React from 'react'
import styled from 'styled-components'
import { media } from 'styled-bootstrap-grid'
import { IMainLayout } from '@/types/layouts'
import {
  TopNavigation,
  MainNavigation,
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
  bG = 'white',
  children,
}) => {
  return (
    <StyledContainer bG={bG}>
      <header>
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
