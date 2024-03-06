export type HomepageProps = {
  data: {
    CardsJSON: ICard[]
    HighlightJSON: IBlogItem[]
    LatestJSON: IBlogItem[]
  }
}

export interface IBlogItem {
  thumbnail: string
  title: string
  pubDate: string
  link: string
}

export interface IBlog {
  title: string
  data: IBlogItem[]
  link?: boolean
}

export interface ICard {
  svg?: string
  card: string
  buttonHref?: string
}

