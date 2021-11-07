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
  notify?: boolean
}

export interface ITopNavigation {
  language: string
  menu: IMenuItem[]
  notify?: boolean
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
  styles?: string
}

export interface INarrowSection {
  children: ReactNode
  colorBG?: string
  cPadding?: number
}
