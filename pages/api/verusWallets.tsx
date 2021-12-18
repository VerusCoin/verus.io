import type { NextApiRequest, NextApiResponse } from 'next'
import cache from 'memory-cache'
import { Min5 } from '@/lib/clocks'

const cacheWallets = '@wallets'

const CleanJSON = (data: any) => {
  let linuxApp,
    winApp,
    macApp,
    armApp = ''
  const name = data.name
  const published_at = data.published_at

  data.assets.map((asset: any) => {
    if (asset.name.includes('arm64')) {
      armApp = asset.browser_download_url
    }

    if (asset.name.includes('Windows')) {
      winApp = asset.browser_download_url
    }

    if (asset.name.includes('MacOS')) {
      macApp = asset.browser_download_url
    }

    if (asset.name.includes('x86_64')) {
      linuxApp = asset.browser_download_url
    }
  })
  return { name, published_at, linuxApp, winApp, macApp, armApp }
}

let index = 1
export default async (req: NextApiRequest, res: NextApiResponse) => {
  let CLI: any = null
  let Desktop: any = null
  let Mobile: any = null

  let data: any = null
  if (index) {
    cache.del(cacheWallets)
    index = 0
  }
  if (!cache.get(cacheWallets)) {
    CLI = await fetch(
      'https://api.github.com/repos/VerusCoin/VerusCoin/releases/latest'
    ).then((res) => res.json())
    // console.log(CLI)
    Desktop = await fetch(
      'https://api.github.com/repos/VerusCoin/Verus-Desktop/releases/latest'
    ).then((res) => res.json())

    Mobile = await fetch(
      'https://api.github.com/repos/VerusCoin/Verus-Mobile/releases'
    ).then((res) => res.json())

    data = { cli: CLI, desktop: Desktop, mobile: Mobile }
    cache.put(cacheWallets, data, Min5)
  } else {
    data = cache.get(cacheWallets)
  }

  switch (req.query.wallet) {
    case 'cli':
      data = CleanJSON(data.cli)
      break
    case 'desktop':
      data = CleanJSON(data.desktop)
      break
    case 'mobile':
      data = data.mobile
      break
    default:
      break
  }
  res.statusCode = 200
  res.json(data)
}
