//import { VerusIdInterface } from 'verusid-ts-client'
import { VerusRPC } from './VerusIdLogin/LoginConsentRequest'
//const VerusTestRPC = new VerusIdInterface(
//  'VRSCTEST',
//  'https://api.verustest.net'
//)

export type Conversion = {
  name: string
  amount: number
  daiPrice: number
}

const FetchCoversion = async () => {
  const res = await VerusRPC.interface.getCurrency('bridge.veth')
  const block = await VerusRPC.getCurrentHeight()
  const bestState = res.result?.bestcurrencystate
  const currencyNames = res.result?.currencynames || {}
  const currencies = bestState?.reservecurrencies
  const count = currencies?.length || 4
  const supply = bestState?.supply || 100000

  //need to get DAI first as base
  const daiKey = Object.keys(currencyNames || {}).find(
    (key) => currencyNames !== undefined && currencyNames[key] === 'DAI.vETH'
  )
  const daiAmount =
    currencies?.find((c) => c.currencyid === daiKey)?.reserves || 0

  //get price of each reserve coin
  //(reserve DAI / reserve currency ) = price of reserve currency in DAI
  //(reserve DAI * count ) / supply = price of Bridge.vETH in DAI
  const list: Conversion[] | undefined = currencies?.map((token) => {
    return {
      name: currencyNames[token.currencyid],
      amount: token.reserves,
      daiPrice: daiAmount / token.reserves,
    }
  })
  const bridge: Omit<Conversion, 'convertPrice'> = {
    name: 'Bridge.vEth',
    amount: supply,
    daiPrice: (daiAmount * count) / supply,
  }

  return { list, bridge, block, currencies }
}

export default FetchCoversion
