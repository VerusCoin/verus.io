import type { NextApiRequest, NextApiResponse } from 'next'
import cache from 'memory-cache'
import { Hour12 } from '@/lib/clocks'

const cacheArticles = '@articlesList'

let index = 1
export default async (req: NextApiRequest, res: NextApiResponse) => {
  let articles: any = null
  let data: any = null
  let result: any = req //used to clear no-unused-variable error
  result = null
  if (index) {
    // NOTE: Comment below for master branch.
    // cache.del(cacheArticles)
    cache.clear()
    index = 0
  }

  if (!cache.get(cacheArticles)) {
    // console.log(index)
    result = await fetch(
      'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/veruscoin'
    )
    try {
      articles = await result.json()
      data = articles.items.splice(0, 6)
    } catch (error) {
      console.error('%s: fetching Articles %s', Date().toString(), error)
    }
    cache.put(cacheArticles, data, Hour12)
  } else {
    data = cache.get(cacheArticles)
  }

  res.statusCode = 200
  res.json(data)
}
