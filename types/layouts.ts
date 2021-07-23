import { ReactNode } from 'react'
import { IMenuItem } from 'types/general'
import { ISocialCTA, ICategoryNavigation, ICopyright } from '@/types/molecules'

export interface IMainLayout {
  children: ReactNode
  jumbotronData?: any
  bG?: string
}

export interface IMainNavigation {
  menu: IMenuItem[]
}

export interface ITopNavigation {
  language: string
  menu: IMenuItem[]
}

export interface IFooter {
  social: ISocialCTA[]
  links: ICategoryNavigation[]
  copyright: ICopyright
}

export interface ISection {
  children: ReactNode
  border?: boolean
  width?: number
  bG?: string
  base?: boolean
}

export interface INarrowSection {
  children: ReactNode
  colorBG?: string
  cPadding?: number
}
