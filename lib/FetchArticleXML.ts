import { parseString } from 'xml2js'

const img = /\d\*?(:\w*|\w*\W\w*).(?:jpg|gif|png|jpeg)/g

const FetchArticleXML = async () => {
  const response = await fetch('https://www.medium.com/feed/veruscoin')
  const body = await response.text()
  const ArticleList: any = []
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
  return ArticleList
}

export default FetchArticleXML
