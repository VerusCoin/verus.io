import { Exchange } from '@src/components'
import { ExchangeLinks } from '@src/constants/exchange'
import { NextSeo } from 'next-seo'

const GetVRSC = () => {
  return (
    <>
      <NextSeo
        title="Get VRSC"
        description="A simply list of exchanges that are known to trade VRSC."
        additionalMetaTags={[
          {
            name: 'keywords',
            content:
              'VRSC, Verus, Exchanges, Verus Mining, Verus Staking, Earn Verus, Earn VRSC, get VRSC, VRSC Exchanges',
          },
        ]}
      />
      <div className="container flex flex-col items-center justify-center mt-8 ">
        <div className="max-w-3xl mb-12 md:mb-32">
          <h1 className="p-0 m-0 text-2xl font-normal md:text-4xl md:leading-tight">
            Get Verus on Exchanges
          </h1>
          <p className="my-8">
            We simply list the exchanges that are known to us that trade Verus.
            Perform sufficient due-diligence on the exchange.
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {ExchangeLinks.map((exchange) => {
              return <Exchange key={exchange.title} exchange={exchange} />
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default GetVRSC
