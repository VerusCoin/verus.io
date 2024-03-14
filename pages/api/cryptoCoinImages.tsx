import type { NextApiResponse } from 'next'
import cache from 'memory-cache'
// import { Hour24 } from '@/lib/clocks';

const cacheCryptoCoins = '@cryptoCoinList'
let index = 1
// export default async (req: NextApiRequest, res: NextApiResponse) => {
export default async (res: NextApiResponse) => {
  let data: any = null
  // let result: any = req //used to clear no-unused-variable error
  // result = null
  if (index) {
    // cache.clear()
    cache.del(cacheCryptoCoins)
    index = 0
  }
  if (!cache.get(cacheCryptoCoins)) {
    //rebuild the list
    // result = await fetch(
    //   'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/veruscoin'
    // )
    // try {
    //   articles = await result.json()
    //   data = articles.items.splice(0, 6)
    // } catch (error) {
    //   console.error('%s: fetching Articles %s', Date().toString(), error)
    // }
    // cache.put(cacheArticles, data, Hour12)
  } else {
    //get the list from memory
    data = cache.get(cacheCryptoCoins)
  }
  res.statusCode = 200
  res.json(data)
}
