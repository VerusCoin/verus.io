export type IExchangesPageProps = {
  data: {
    ExchangesJSON: IExchanges
  }
}

export interface IExchanges {
  title: string
  text: string
  text2: string
  exchanges: IExchange[]
}

export interface IExchange {
  logo: string
  url: string
  name: string
}
