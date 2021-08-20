//Standard JSON data Types

export type CoinpageProps = {
  data: {
    CardJSON: ICard[]
    FaqJSON: IFAQ
  }
}

export interface ICard {
  net: 'main' | 'test'
  card: string
}

//Sections specifically associated with page
export interface IFAQ {
  title: string
  data: IFAQItem[]
}

export interface IFAQItem {
  faq: string
  link?: string
  query?: string
}
