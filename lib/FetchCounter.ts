const URLMiningStats = 'https://explorer.verus.io/api/getmininginfo'
const blockGoal = process.env.NEXT_PUBLIC_NOTIFY_BANNER_BLOCK
const addCommas = (nStr: number | string) => {
  nStr = nStr.toString()
  const x = nStr.split('.')
  let x1 = x[0]
  const x2 = x.length > 1 ? '.' + x[1] : ''
  const rgx = /(\d+)(\d{3})/
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, '$1' + ',' + '$2')
  }
  return x1 + x2
}

const FetchCounter = async () => {
  const data = {
    blockCount: 0,
    blockString: '0',
  }
  const results = await fetch(URLMiningStats).then((res) => res.json())
  if (blockGoal) {
    const goal = parseInt(blockGoal)
    const current = parseInt(parseFloat(results.blocks).toFixed(0))
    data.blockCount = goal - current
    data.blockString = addCommas(data.blockCount)
  }

  return data
}

export default FetchCounter
