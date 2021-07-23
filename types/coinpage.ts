//Standard JSON data Types

import { IJumbotron } from '@/types/molecules'

export type CoinpageProps = {
  data: {
    JumbotronJSON: IJumbotron
    CoinUtilitiesJSON: ICoinUtilities
    FaqJSON: IFAQ
  }
}

export interface ICoinUtilities {
  title: string
  data: ICoinUtilityItem[]
}

export interface ICoinUtilityItem {
  net: 'main' | 'test'
  title: string
  text: string
  link?: {
    text: string
    href: string
    external?: boolean
  }
}

//Sections specifically associated with page
export interface IFAQ {
  title: string
  data: IFAQItem[]
}

export interface IFAQItem {
  header: string
  panel: string
}
