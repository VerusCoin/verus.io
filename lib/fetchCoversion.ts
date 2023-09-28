import { VerusIdInterface } from 'verusid-ts-client'

const VerusTestRPC = new VerusIdInterface(
  'VRSCTEST',
  'https://api.verustest.net'
)
const FetchCoversion = async () => {
  const res = await VerusTestRPC.interface.getCurrency('vrsc-eth-bridge')
  // console.log(res)
  // const conversionPacket = {
  //   currency: 'iN9vbHXexEh6GTZ45fRoJGKTQThfbgUwMh',
  //   convertto: 'iSojYsotVzXz4wh2eJriASGo6UidJDDhL2',
  //   amount: 1,
  //   via: 'iSM7svCHRZezdtR54b37oYCnT4ic936tFy',
  // }
  // const estimation = await VerusTestRPC.interface.estimateConversion(
  //   conversionPacket
  // )
  // console.log(estimation)
  return res
}

export default FetchCoversion
