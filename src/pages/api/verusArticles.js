import cache from 'memory-cache'

const cacheArticles = '@articlesList'

export default async (req, res) => {
  let articles = null
  let data = null
  let result = null
  // TODO: Remove before master branch
  // cache.clear();

  if (!cache.get(cacheArticles)) {
    result = await fetch(
      'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/veruscoin'
    )
    try {
      articles = await result.json()
      data = articles.items.splice(0, 6)
    } catch (error) {
      console.error(
        '%s: fetching Articles %s',
        Date(Date.now()).toString(),
        error
      )
    }

    // 900000 = 15 minutes
    // 43200000 = 12 Hours
    // 86400000 = 24 hours

    cache.put(cacheArticles, data, 43200000)
  } else {
    data = cache.get(cacheArticles)
  }
  if (!data) {
    res.statusCode = 200
    res.json(data)
  } else {
    res.statusCode = 200
    res.json(data)
  }
}
