import type { NextApiResponse } from 'next'
import FetchCounter from '@/lib/FetchCounter'
const addCommas = (nStr: string) => {
  nStr += ''
  const x = nStr.split('.')
  let x1 = x[0]
  const x2 = x.length > 1 ? '.' + x[1] : ''
  const rgx = /(\d+)(\d{3})/
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, '$1' + ',' + '$2')
  }
  return x1 + x2
}

export const BannerCounter = async () => {
  let result: string | number = await FetchCounter()
  result = addCommas(result.toString())
  addCommas(result)
}

export default async (res: NextApiResponse) => {
  const result = await BannerCounter()
  res.statusCode = 200
  res.json(result)
}
