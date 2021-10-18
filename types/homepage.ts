export type HomepageProps = {
  data: {
    CardsJSON: ICard[]
    BlogJSON: IBlogItem[]
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
}

export interface ICard {
  svg?: string
  card: string
  buttonHref?: string
}

// export interface IUniqueSellingPoints {
//   title: string
//   items: IUSP[]
// }

// export interface IUSP {
//   color: 'blue' | 'darkblue' | 'white' | 'green'
//   title: string
//   text: string
// }
// export interface IUspBanner {
//   svg?: 'usp'
//   text: string
//   button?: {
//     href: string
//     text: string
//   }
// }

// export interface IServices {
//   data: IServiceItem[]
// }

// export interface IServiceItem {
//   svg: string
//   title: string
//   text: string
// }
