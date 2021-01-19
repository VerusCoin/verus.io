import Link from 'next/link'
import { NextSeo } from 'next-seo'
import { Menu, SlugMenu } from '@src/components'

import { technologyLinks } from '@src/constants/technology'

const TechnologyOverview = () => {
  const nextRoute = technologyLinks[0]

  return (
    <>
      <NextSeo
        title="Techonolgy"
        description="We are an open-source platform available to anyone. We supply tools
        for individuals and organizations to build equitable frameworks for
        social and economic change."
        additionalMetaTags={[
          {
            name: 'keywords',
            content:
              'verus, pbaas, public blockchains as a service, proof of power, proof-of-power, cryptocurrency, Open Source, Privacy, VerusID, ERC-20, decentralized finance, verus signatures',
          },
        ]}
      />
      <div className="container grid max-w-5xl grid-cols-1 gap-6 mt-8 md:grid-cols-4">
        <div>
          <Menu pathList={technologyLinks} href="/technology" />
        </div>
        <div className="p-6 md:col-span-3">
          <h1 className="p-0 mt-0 text-2xl font-normal md:text-4xl ">
            Technology Deep Dive: Inside Verus
          </h1>
          <p className="my-8 leading-relaxed">
            We are an open-source platform available to anyone. We supply tools
            for individuals and organizations to build equitable frameworks for
            social and economic change.
          </p>
          <p className="my-8 leading-relaxed">
            The initial Verus release was pre-announced on Bitcointalk with zero
            premine, and team members mined and staked along with everyone else
            to generate coins. The Verus developers donated their early mining
            and staking proceeds to a community foundation, which has also been
            supported with other community donations in order to support the
            ongoing growth and project development by core developers and the
            community for years to come.
          </p>
          <div className="grid grid-cols-1 p-8 my-16 bg-center bg-cover rounded md:grid-cols-2 md:gap-6 bg-features-bg">
            <div className="flex flex-row items-center flex-shrink-0">
              <img
                src="/images/icons/community.png"
                alt="community image"
                width="100"
              />
              <p className="pl-3 text-lg font-semibold text-white font-p">
                Community driven project in the true spirit of Bitcoin
              </p>
            </div>

            <div className="flex flex-row items-center flex-shrink-0">
              <img
                src="/images/icons/noICO.png"
                alt="no ico image"
                width="100"
              />
              <p className="pl-3 text-lg font-semibold text-white font-p">
                No ICO was held
              </p>
            </div>
            <div className="flex flex-row items-center flex-shrink-0">
              <img
                src="/images/icons/noPREmine.png"
                alt="no premine image"
                width="100"
              />
              <p className="pl-3 text-lg font-semibold leading-normal text-white font-p">
                No coins were pre-mined
              </p>
            </div>
            <div className="flex flex-row items-center flex-shrink-0">
              <img
                src="/images/icons/noDEV.png"
                alt="no dev image"
                width="100"
              />
              <p className="pl-3 text-lg font-semibold text-white font-p">
                No founder or developer fees
              </p>
            </div>
          </div>

          <h2 className="mt-16 mb-4 text-2xl font-normal">Coin Overview</h2>

          <ul className="flex flex-col p-0 m-0 my-8 mb-24 space-y-2 leading-relaxed">
            <li className="inline-flex items-start">
              <img src="/images/icons/keyboard_arrow_right-24px.svg" alt="" />
              <p>Launch Date: May 21, 2018</p>
            </li>
            <li className="inline-flex items-start">
              <img src="/images/icons/keyboard_arrow_right-24px.svg" alt="" />
              <p>Coin Ticker: VRSC</p>
            </li>
            <li className="inline-flex items-start">
              <img src="/images/icons/keyboard_arrow_right-24px.svg" alt="" />
              <p>Average Block Time: 1 minute</p>
            </li>
            <li className="inline-flex items-start">
              <img src="/images/icons/keyboard_arrow_right-24px.svg" alt="" />
              <p>Max Supply: 83,540,184</p>
            </li>
            <li className="inline-flex items-start">
              <img src="/images/icons/keyboard_arrow_right-24px.svg" alt="" />
              <p>
                Consensus Algorithm:{' '}
                <a
                  className="underline text-bluebutton-default"
                  href="/technology/verus_proof_of_power"
                >
                  Verus Proof of Power
                </a>
              </p>
            </li>
            <li className="inline-flex items-start">
              <img src="/images/icons/keyboard_arrow_right-24px.svg" alt="" />
              <p>
                Hash Algorithm:{' '}
                <a
                  className="underline text-bluebutton-default"
                  href="/technology/verushash"
                >
                  VerusHash 2.2
                </a>{' '}
              </p>
            </li>
            <li className="inline-flex items-start">
              <img src="/images/icons/keyboard_arrow_right-24px.svg" alt="" />
              <p>UTXO-based, with zk-SNARKs-based zero-knowledge privacy</p>
            </li>
          </ul>

          <h2 className="mt-16 mb-4 text-2xl font-normal">
            Technology Deep Dive
          </h2>
          <SlugMenu pathList={technologyLinks} href="/technology" />

          <h5 className="mt-8 mb-4 text-2xl font-normal">Download Papers</h5>
          <ul className="flex flex-col p-0 m-0 mb-24 space-y-2">
            <li className="inline-flex">
              <img src="/images/icons/keyboard_arrow_right-24px.svg" alt="" />
              <a
                className="underline text-bluebutton-default"
                href="/docs/VerusVision.pdf"
                target="_blank"
              >
                Verus Vision Paper
              </a>
            </li>
            <li className="inline-flex">
              <img
                className="items-centedr "
                src="/images/icons/keyboard_arrow_right-24px.svg"
                alt=""
              />
              <a
                className="underline text-bluebutton-default"
                href="/docs/VerusPoP.pdf"
                target="_blank"
              >
                Verus Proof of Power Paper
              </a>
            </li>
            <li className="inline-flex">
              <img src="/images/icons/keyboard_arrow_right-24px.svg" alt="" />
              <a
                className="underline text-bluebutton-default"
                href="/docs/VerusPhaseI.pdf"
                target="_blank"
              >
                Verus Phase One Paper
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-row items-center justify-end p-2 md:hidden">
        <Link href={`/technology/${nextRoute.path}`}>
          <a className="items-center py-2 text-sm no-underline md:text-baseLink text-navlink-default hover:text-navlink-hover ">
            {nextRoute.name}&nbsp;{' '}
            <svg
              width="8"
              height="18"
              viewBox="0 0 6 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.4 8.56L4.67 5M1.4 1.23L4.66 4.7"
                stroke="#999"
                strokeLinecap="square"
              ></path>
            </svg>{' '}
          </a>
        </Link>
      </div>
    </>
  )
}

export default TechnologyOverview
