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
    cache.del(cacheArticles)
    // cache.clear()
    index = 0
  }

  if (!cache.get(cacheArticles)) {
    // result = await fetch(
    //   'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/veruscoin'
    // )
    result = await fetch(
      'https://api.factmaven.com/xml-to-json/?xml=https://medium.com/feed/veruscoin'
    )
    //!Data comes in as xml converted to json
    //!need to extrapulate the information into
    //* {thumbnail, title, pubDate, link} json format
    //!TODO: Need to create default image if image not found. 
    try {
      articles = await result.json()
      articles = articles.rss.channel.item.splice(0, 3)
      data = articles.map((item: any) => {
        const img = /\d\*\w*\W\w*.(?:jpg|gif|png|jpeg)/g
        
        return {
          title: item.title,
          pubDate: item.pubDate,
          link: item.link,
          thumbnail: item.encoded.match(img)[0],
        }
      })
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
