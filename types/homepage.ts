import { IJumbotron } from '@/types/molecules'

export type HomepageProps = {
  data: {
    JumbotronJSON: IJumbotron
    UspBannerJSON: IUspBanner
    ServicesJSON: IServices
    UniqueSellingPointsJSON: IUniqueSellingPoints
    BlogJSON: IBlog
  }
}

export interface IUniqueSellingPoints {
  title: string
  items: IUSP[]
}

export interface IUSP {
  color: 'blue' | 'darkblue' | 'white' | 'green'
  title: string
  text: string
}
export interface IUspBanner {
  svg?: 'usp'
  text: string
  button?: {
    href: string
    text: string
  }
}

export interface IServices {
  data: IServiceItem[]
}

export interface IServiceItem {
  svg: string
  title: string
  text: string
}

export interface IBlogItem {
  image: string
  title: string
  date: string
  href: string
}

export interface IBlog {
  title: string
  data: IBlogItem[]
}
