// Internal Checks
const GetInternalVerusIDcheck = async () => {
  let url = 'http://localhost:3000/api/verusIDcheck?id=test'
  let result = await fetch(url)
  let data = await result.json()
  return data
}

const GetInternalVerusMessageCheck = async () => {
  let query = {
    Message: 'Foo',
    Identity: 'Verus Coin Foundation Releases@',
    Signature:
      'Adi8EgABQSChIFfXvaQazM5nM3FO8TcorOeSeuW+iUVz89YGT4R/dQFuEPvSW+8N7Yq59w7uacbt8Zx2mIgPQRvwEh9VUXxU',
  }
  let url = 'http://localhost:3000/api/verusSignatureMessage'
  let result = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(query),
  })
  let data = await result.json()
  return data
}

const GetInternalHashCheck = async () => {
  let query = {
    Hash: 'a0acf513b4bc31e369953ba673057c1ff0f50da3f37a7b0b47cb5d25434dee40',
    Identity: 'Verus Coin Foundation Releases@',
    Signature:
      'AeakEwABQR9uuPx8ZVr+f1Go1uSkyoZ6Kk5pkXQFnxjlPyNy1LeCoC/9VzfpsxrpP6GetiG8XlMEZqOJ2Hh1Lm25pljoNhhD',
  }
  let url = 'http://localhost:3000/api/verusSignatureHash'
  let result = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(query),
  })
  let data = await result.json()
  return data
}

const GetInternalAPI = async () => {
  let testResult = []
  const iVerusID = await GetInternalVerusIDcheck()
  const iVerusMessage = await GetInternalVerusMessageCheck()
  const iVerusHash = await GetInternalHashCheck()
  if (iVerusID.result) {
    testResult.push({ iIDcheck: 'GOOD' })
  } else {
    testResult.push({ iIDcheck: 'DOWN' })
  }
  if (iVerusMessage.valid) {
    testResult.push({ iMsgCheck: 'GOOD' })
  } else {
    testResult.push({ iMsgCheck: 'DOWN' })
  }
  if (iVerusHash.valid) {
    testResult.push({ iHashCheck: 'GOOD' })
  } else {
    testResult.push({ iHashCheck: 'DOWN' })
  }

  return testResult
}

// External Checks
const GetExternalArticles = async () => {
  let articles = null
  let data = null
  let result = null
  result = await fetch(
    'https://medium-f.herokuapp.com/api/v1/articles?orgid=veruscoin'
  )
  try {
    articles = await result.json()
    data = articles.articles.splice(0, 6)
  } catch (error) {
    console.error(
      '%s: fetching Articles %s',
      Date(Date.now()).toString(),
      error
    )
  }
  return data
}

const GetExternalIDcheck = async () => {
  let url = `${process.env.NEXT_PUBLIC_VERUSTOOL_URL}/getid/?id=test@`
  try {
    let result = await fetch(url)
    let data = await result.json()
    return data
  } catch (error) {
    return { result: null, error: { code: -5, message: 'network issue' } }
  }
}

const GetExternalMsgCheck = async () => {
  let query = {
    Message: 'Foo',
    Identity: 'Verus Coin Foundation Releases@',
    Signature:
      'Adi8EgABQSChIFfXvaQazM5nM3FO8TcorOeSeuW+iUVz89YGT4R/dQFuEPvSW+8N7Yq59w7uacbt8Zx2mIgPQRvwEh9VUXxU',
  }
  let message = encodeURI(query.Message)
  let signer = encodeURI(query.Identity)
  let url = `${process.env.NEXT_PUBLIC_VERUSTOOL_URL}/verifymessage/?message=${message}&signer=${signer}&signature=${query.Signature}`
  try {
    let result = await fetch(url)
    let data = await result.json()

    return data
  } catch (error) {
    return {
      error: -5,
      error_text: 'Currently having network issue. Try again later',
    }
  }
}

const GetExternalHashCheck = async () => {
  let query = {
    Hash: 'a0acf513b4bc31e369953ba673057c1ff0f50da3f37a7b0b47cb5d25434dee40',
    Identity: 'Verus Coin Foundation Releases@',
    Signature:
      'AeakEwABQR9uuPx8ZVr+f1Go1uSkyoZ6Kk5pkXQFnxjlPyNy1LeCoC/9VzfpsxrpP6GetiG8XlMEZqOJ2Hh1Lm25pljoNhhD',
  }
  let signer = encodeURI(query.Identity)
  let url = `${process.env.NEXT_PUBLIC_VERUSTOOL_URL}/verifyhash/?hash=${query.Hash}&signer=${signer}&signature=${query.Signature}`
  try {
    let result = await fetch(url)
    let data = await result.json()
    return data
  } catch (error) {
    return {
      error: -5,
      error_text: 'Currently having network issue. Try again later',
    }
  }
}

const GetExternalAPI = async () => {
  let testResult = []
  const eArticles = await GetExternalArticles()
  const eIDcheck = await GetExternalIDcheck()
  const eMsgCheck = await GetExternalMsgCheck()
  const eHashCheck = await GetExternalHashCheck()
  if (eArticles !== null) {
    testResult.push({ eArticles: 'GOOD' })
  } else {
    testResult.push({ eArticles: 'DOWN' })
  }
  if (eIDcheck.result) {
    testResult.push({ eIDcheck: 'GOOD' })
  } else {
    testResult.push({ eIDcheck: 'DOWN' })
  }
  if (eMsgCheck.valid) {
    testResult.push({ eMsgCheck: 'GOOD' })
  } else {
    testResult.push({ eMsgCheck: 'DOWN' })
  }
  if (eHashCheck.valid) {
    testResult.push({ eHashCheck: 'GOOD' })
  } else {
    testResult.push({ eHashCheck: 'DOWN' })
  }
  return testResult
}

export default async (req, res) => {
  let internalCheckFrom = req.headers.host
  let InternalTest = await GetInternalAPI()
  let ExternalTest = await GetExternalAPI()
  if (internalCheckFrom.includes('localhost')) {
    res.status(200)
    res.json({ status: 'online', InternalTest, ExternalTest })
  } else {
    res.status(404)
  }
}
