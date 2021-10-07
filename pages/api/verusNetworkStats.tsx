import type { NextApiRequest, NextApiResponse } from 'next'
import { HashRateConverter } from '@/styles/helpers'

//hashRate Calculation constants
const MobileHash = 3000000 //3Mh
const DesktopHash = 30000000 //30Mh
const URLMiningStats = 'https://explorer.verus.io/api/getmininginfo'
const URLCoinSupply = 'https://explorer.verus.io/api/coinsupply'

interface Data {
  staking: any
  miningHashRate: any
  totalHashRate: any
  coinSupply: any
  progressBarValue: any
  mobile: any
  desktop: any
}

export async function getVerusStats() {
  const data: Data = {
    staking: 0,
    miningHashRate: 0,
    totalHashRate: 0,
    coinSupply: 0,
    progressBarValue: 0,
    mobile: 0,
    desktop: 0,
  }
  let results = await fetch(URLCoinSupply).then((res) => res.json())
  data.coinSupply = parseFloat(results.total).toFixed(0)
  results = await fetch(URLMiningStats).then((res) => res.json())
  data.mobile = (results.networkhashps / 2 / MobileHash)
    .toFixed(0)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  data.desktop = (results.networkhashps / 2 / DesktopHash)
    .toFixed(0)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  data.totalHashRate = HashRateConverter(results.networkhashps, 1)
  data.miningHashRate = HashRateConverter(results.networkhashps, 2)
  data.staking = parseFloat(results.stakingsupply).toFixed(0)
  data.progressBarValue = ((data.staking / data.coinSupply) * 100).toFixed(0)
  data.coinSupply = data.coinSupply
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  data.staking = data.staking.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')

  return data
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  let data: any = req.query
  data = await getVerusStats()

  res.statusCode = 200
  res.json(data)
}
