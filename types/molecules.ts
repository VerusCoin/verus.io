import { IMenuItem, IMenuSubItem, IFooterItem } from '@/types/general'

export interface IJumbotron {
  text: string
  button?: {
    text: string
    href: string
  }
  width?: number
  left?: number
}

//Navbar Components
export interface IHamburger {
  openMenu: boolean
  setOpenMenu: (e: boolean) => void
}

export interface IHamburgerMenu {
  openMenu: boolean
  menu: IMenuItem[]
}

export interface IHamburgerSubMenu {
  menu: IMenuSubItem[]
  openSubMenu: boolean
}

export interface IListNavigation {
  menu: IMenuItem[]
}

//Footer Components
export interface ICategoryNavigation {
  category: string
  items: IFooterItem[]
}

export interface ISocialCTA {
  svg: 'discord' | 'telegram'
  title: string
  text: string
  href: string
  label?: {
    color: 'green'
    text: string
  }
}

export interface ICopyright {
  companyName: string
  links: IFooterItem[]
}
