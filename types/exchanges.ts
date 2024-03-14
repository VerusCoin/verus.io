export type IExchangesPageProps = {
  data: {
    ExchangesJSON: IExchanges
  }
}

export interface IExchanges {
  exchanges: IExchange[]
}

export interface IExchange {
  logo: string
  url: string
}
