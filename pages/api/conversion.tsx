import type { NextApiRequest, NextApiResponse } from 'next'
import FetchConversion from '@/lib/fetchCoversion'
import cache from 'memory-cache'
import { Min15 } from '@/lib/clocks'

const cacheConversionPrice = '@conversionPrice'

const CoinGeckoVRSC = 'https://api.coingecko.com/api/v3/coins/verus-coin'
const CoinGeckoETH = 'https://api.coingecko.com/api/v3/coins/ethereum'
const CoinGeckoMRK = 'https://api.coingecko.com/api/v3/coins/maker'
const CoinGeckoDAI = 'https://api.coingecko.com/api/v3/coins/dai'
const urls = [CoinGeckoVRSC, CoinGeckoETH, CoinGeckoMRK, CoinGeckoDAI]

type Conversions = {
  symbol: string
  price: number
}
type Token = {
  name: string
  amount: number
  daiPrice: number
}
let index = 1
export default async (req: NextApiRequest, res: NextApiResponse) => {
  let result: any = req.query
  result = await FetchConversion()
  if (index) {
    // NOTE: Comment below for master branch.
    cache.del(cacheConversionPrice)
    // cache.clear()
    index = 0
  }
  let conversions: Conversions[] = [
    { symbol: 'vrsc', price: 0.412836 },
    { symbol: 'eth', price: 1666.45 },
    { symbol: 'mkr', price: 1449.5 },
    { symbol: 'dai', price: 1 },
  ]
  if (!cache.get(cacheConversionPrice)) {
    try {
      conversions = await Promise.all(
        urls.map(async (url) => {
          return await fetch(url)
            .then((res) => res.json())
            .then((c): { symbol: string; price: number } => ({
              symbol: c.symbol,
              price: c.market_data.current_price.usd,
            }))
        })
      )
    } catch (error) {
      console.error('%s: fetching prices %s', Date().toString(), error)
    }
    cache.put(cacheConversionPrice, conversions, Min15)
  } else {
    conversions = cache.get(cacheConversionPrice)
  }

  result.list = result.list.map((token: Token) => {
    switch (token.name) {
      case 'VRSCTEST':
      case 'VRSC':
        return {
          ...token,
          price:
            conversions.find((c) => c.symbol === 'vrsc')?.price || 0.412836,
        }
      case 'vETH':
        return {
          ...token,
          price: conversions.find((c) => c.symbol === 'eth')?.price || 1666.45,
        }
      case 'DAI.vETH':
        return {
          ...token,
          price: 1,
        }
      case 'MKR.vETH':
        return {
          ...token,
          price: conversions.find((c) => c.symbol === 'mkr')?.price || 1449.5,
        }
      // return { ...token, price: vrscPrice }
      default:
        return { ...token }
    }
  })

  res.statusCode = 200
  res.json(result)
}
