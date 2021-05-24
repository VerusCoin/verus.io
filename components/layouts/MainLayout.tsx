// This will be the main standard layout for all pages
import React from 'react'
import { IMainLayout } from '@/types/layouts'
import {
  TopNavigation,
  MainNavigation,
  Footer,
  Jumbotron,
} from '@/components/molecules'

import {
  TopNavigationJSON,
  MainNavigationJSON,
  FooterJSON,
} from 'data/navigation'

const MainLayout: React.FC<IMainLayout> = ({ jumbotronData, children }) => {
  return (
    <>
      <header>
        <TopNavigation {...TopNavigationJSON} />
        <MainNavigation {...MainNavigationJSON} />
        {jumbotronData && <Jumbotron {...jumbotronData} />}
      </header>
      <main>{children}</main>
      <Footer {...FooterJSON} />
    </>
  )
}

export default MainLayout
