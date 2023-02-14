import type { NextApiRequest, NextApiResponse } from 'next'

import { parseString } from 'xml2js'

const img = /\d\*?(:\w*|\w*\W\w*).(?:jpg|gif|png|jpeg)/g

export default async (req: NextApiRequest, res: NextApiResponse) => {
  let response: any = req
  response = await fetch('https://www.medium.com/feed/veruscoin')
  const body = await response.text()
  const ArticleList: any = []
  // title: item.title,
  //           pubDate: item.pubDate,
  //           link: item.link,
  //           thumbnail: item.description.match(img)[0],
  parseString(body, (err, data) => {
    let channel = data.rss.channel[0].item
    channel = channel.slice(0, 3)
    channel.map((article: any) => {
      const data = {
        title: article.title[0],
        link: article.link[0],
        pubDate: article.pubDate[0],
        thumbnail: article['content:encoded'][0].match(img)[0],
      }
      ArticleList.push(data)
    })

    if (err) {
      console.error(err)
    }
  })

  res.statusCode = 200
  res.json(ArticleList)
}
