const HashRate = ['H/s', 'KH/s', 'MH/s', 'GH/s', 'TH/s']

const HashRateConverter = (hash: number): string => {
  let hashValue: number | string = hash / 2 //GH/s

  const hashRateSize: number = Math.floor(Math.log(hashValue) / Math.log(1000))
  hashValue = (hashValue / Math.pow(1000, hashRateSize)).toFixed(0)
  return `${hashValue} ${HashRate[hashRateSize]}`
}

export default HashRateConverter
