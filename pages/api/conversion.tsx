import type { NextApiRequest, NextApiResponse } from 'next'
import FetchConversion from '@/lib/fetchCoversion'
import cache from 'memory-cache'
import { Min1, Min15 } from '@/lib/clocks'

const cacheConversionPrice = '@conversionPrice'
const cacheConverstionBridge = '@converstionBridge'

// const CoinGeckoVRSC = 'https://api.coingecko.com/api/v3/coins/verus-coin'
// const CoinGeckoETH = 'https://api.coingecko.com/api/v3/coins/ethereum'
// const CoinGeckoMRK = 'https://api.coingecko.com/api/v3/coins/maker'
// const CoinGeckoDAI = 'https://api.coingecko.com/api/v3/coins/dai'
// const urls = [CoinGeckoVRSC, CoinGeckoETH, CoinGeckoMRK, CoinGeckoDAI]
const CoinpaprikaURL = 'https://api.coinpaprika.com/v1/tickers'
type Conversions = {
  symbol: string
  price: number
}
type Token = {
  name: string
  amount: number
  daiPrice: number
}

type CoinpaprikaUSD = {
  price: number
  [key: string]: string | number
}

type CoinpaprikaData = {
  id: string
  name: string
  symbol: string
  rank: number
  circulating_supply: number
  total_supply: number
  max_supply: number
  beta_value: number
  first_data_at: string
  last_updated: string
  quotes: { USD: CoinpaprikaUSD }
}[]

let index = 1
export default async (req: NextApiRequest, res: NextApiResponse) => {
  let result: any = req.query

  if (index) {
    // NOTE: Comment below for master branch.
    cache.del(cacheConversionPrice)
    cache.del(cacheConverstionBridge)
    // cache.clear()
    index = 0
  }
  let conversions: Conversions[] = [
    { symbol: 'vrsc', price: 0 },
    { symbol: 'eth', price: 0 },
    { symbol: 'mkr', price: 0 },
    { symbol: 'dai', price: 0 },
  ]
  if (!cache.get(cacheConversionPrice)) {
    try {
      // conversions = await Promise.all(
      //   urls.map(async (url) => fetch(url)
      //     .then((res) => res.json())
      //     .then((c) => ({
      //       symbol: c.symbol,
      //       price: c.market_data.current_price.usd
      //     })))
      // )
      conversions = await fetch(CoinpaprikaURL)
        .then((res) => res.json())
        .then((c: CoinpaprikaData) => {
          const m = conversions.map((t) => {
            switch (t.symbol) {
              case 'vrsc':
                return {
                  symbol: t.symbol,
                  price:
                    c.filter((x) => x.id === 'vrsc-verus-coin')[0].quotes.USD
                      .price || 0,
                }
              case 'eth':
                return {
                  symbol: t.symbol,
                  price:
                    c.filter((x) => x.id === 'eth-ethereum')[0].quotes.USD
                      .price || 0,
                }
              case 'mkr':
                return {
                  symbol: t.symbol,
                  price:
                    c.filter((x) => x.id === 'mkr-maker')[0].quotes.USD.price ||
                    0,
                }
              case 'dai':
                return {
                  symbol: t.symbol,
                  price:
                    c.filter((x) => x.id === 'dai-dai')[0].quotes.USD.price ||
                    0,
                }
              default:
                return { symbol: t.symbol, price: 0 }
            }
          })
          return m
        })
    } catch (error) {
      console.error('%s: fetching prices %s', Date().toString(), error)
    }
    cache.put(cacheConversionPrice, conversions, Min15)
  } else {
    conversions = cache.get(cacheConversionPrice)
  }
  if (!cache.get(cacheConverstionBridge)) {
    result = await FetchConversion()
    cache.put(cacheConverstionBridge, result, Min1)
  } else {
    result = cache.get(cacheConverstionBridge)
  }

  result.list = result.list.map((token: Token) => {
    switch (token.name) {
      case 'VRSCTEST':
      case 'VRSC':
        return {
          ...token,
          price: conversions.find((c) => c.symbol === 'vrsc')?.price || 0,
        }
      case 'vETH':
        return {
          ...token,
          price: conversions.find((c) => c.symbol === 'eth')?.price || 0,
        }
      case 'DAI.vETH':
        return {
          ...token,
          price: 1,
        }
      case 'MKR.vETH':
        return {
          ...token,
          price: conversions.find((c) => c.symbol === 'mkr')?.price || 0,
        }
      // return { ...token, price: vrscPrice }
      default:
        return { ...token }
    }
  })

  res.statusCode = 200
  res.json(result)
}
