import { useState } from 'react'
import { NextSeo } from 'next-seo'
import { SlugMenuColored } from '@src/components'
import { NewSlugTest } from '@src/constants/newSlugTest'

const StatCheck = (props) => {
  const { data } = props
  const [verusID, setVerusID] = useState()
  const [verusMessage, setVerusMessage] = useState()
  const [verusHash, setVerusHash] = useState()

  const onVerusCheck = async () => {
    setVerusID({ checking: '...checking status' })
    let url = '/api/verusIDcheck?id=test'
    let result = await fetch(url)
    let data = await result.json()
    if (data.result) {
      setVerusID(data)
    } else {
      setVerusID({ error: data.error.message })
    }
  }

  const onVerusMessageCheck = async () => {
    setVerusMessage({ checking: '...checking status' })
    let query = {
      Message: 'Foo',
      Identity: 'Verus Coin Foundation Releases@',
      Signature:
        'Adi8EgABQSChIFfXvaQazM5nM3FO8TcorOeSeuW+iUVz89YGT4R/dQFuEPvSW+8N7Yq59w7uacbt8Zx2mIgPQRvwEh9VUXxU',
    }
    let url = '/api/verusSignatureMessage'
    let result = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(query),
    })
    let data = await result.json()
    if (data) {
      setVerusMessage(data)
    } else {
      setVerusMessage({
        error_text: 'network issues',
      })
    }
  }

  const onVerusHashCheck = async () => {
    setVerusHash({ checking: '...checking status' })
    let query = {
      Hash: 'a0acf513b4bc31e369953ba673057c1ff0f50da3f37a7b0b47cb5d25434dee40',
      Identity: 'Verus Coin Foundation Releases@',
      Signature:
        'AeakEwABQR9uuPx8ZVr+f1Go1uSkyoZ6Kk5pkXQFnxjlPyNy1LeCoC/9VzfpsxrpP6GetiG8XlMEZqOJ2Hh1Lm25pljoNhhD',
    }
    let url = '/api/verusSignatureHash'
    let result = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(query),
    })
    let data = await result.json()

    if (data) {
      setVerusHash(data)
    } else {
      setVerusHash({
        error_text: 'Currently experiencing network issues. Try again later.',
      })
    }
  }
  return (
    <>
      <NextSeo noindex={true} nofollow={true} />
      <div
        className="container items-center justify-center"
        style={{
          minHeight: 'calc(70vh - 100px)',
        }}
      >
        <h2 className="text-4xl text-center">System Check</h2>

        <div className="p-4 space-y-4 border border-solid">
          <div className="flex flex-row items-center space-x-4 ">
            <p>VerusID API</p>
            <button
              className="px-2 text-sm bg-gray-300 rounded-lg"
              onClick={onVerusCheck}
            >
              Check
            </button>
            {verusID &&
              (verusID.checking ? (
                <p>...Checking Status</p>
              ) : verusID.error ? (
                <p className="px-3 font-semibold bg-red-400 rounded-md">
                  {verusID.error}
                </p>
              ) : (
                <p className="px-3 font-semibold bg-green-400 rounded-md">
                  Good
                </p>
              ))}
          </div>
          <div className="flex flex-row items-center space-x-4">
            <p>Verus Signature Message API</p>
            <button
              className="px-2 text-sm bg-gray-300 rounded-lg"
              onClick={onVerusMessageCheck}
            >
              Check
            </button>
            {verusMessage &&
              (verusMessage.checking ? (
                <p>...Checking Status</p>
              ) : verusMessage.error_text ? (
                <p className="px-3 font-semibold bg-red-400 rounded-md">
                  {verusMessage.error_text}
                </p>
              ) : (
                <p className="px-3 font-semibold bg-green-400 rounded-md">
                  Good
                </p>
              ))}
          </div>
          <div className="flex flex-row items-center space-x-4">
            <p>Verus Signature Hash API</p>
            <button
              className="px-2 text-sm bg-gray-300 rounded-lg"
              onClick={onVerusHashCheck}
            >
              Check
            </button>
            {verusHash &&
              (verusHash.checking ? (
                <p>...Checking Status</p>
              ) : verusHash.error_text ? (
                <p className="px-3 font-semibold bg-red-400 rounded-md">
                  {verusHash.error_text}
                </p>
              ) : (
                <p className="px-3 font-semibold bg-green-400 rounded-md">
                  Good
                </p>
              ))}
          </div>
          <div className="flex flex-row items-center space-x-4">
            <p>Verus SSR Articles Pull API</p>
            <pre className="overflow-x-scroll">
              {JSON.stringify(data, null, 1)}
            </pre>
          </div>
        </div>
      </div>
      <div className="container items-center justify-center max-w-4xl my-12">
        <h2 className="my-4 text-4xl">Testing of new slug menus</h2>
        <SlugMenuColored pathList={NewSlugTest} />
      </div>
    </>
  )
}

export default StatCheck

export async function getServerSideProps(ctx) {
  let URI = ctx.req.headers.referer
  let data = null
  // let result = await fetch(`${URI}api/verusArticles`);
  let result = await fetch('http://localhost:3000/api/verusArticles')
  try {
    data = await result.json()
  } finally {
    return {
      props: { data },
    }
  }
}
