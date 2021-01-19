import Link from 'next/link'
import Menu from '../../components/Menu'
import { SlugMenu } from '../../components/SlugMenu'
import { walletLinks } from '../../constants/wallet'
import { NextSeo } from 'next-seo'

const WalletOverview = () => {
  const nextRoute = walletLinks[0]

  return (
    <>
      <NextSeo
        title="Verus Wallets"
        description="Verus is actively developing multi-coin wallets for Windows, macOS,
        Linux, ARM. And on mobile for Android and iOS."
        additionalMetaTags={[
          {
            name: 'keywords',
            content:
              'verus, ERC-20, VerusID, verus signatures, privacy, wallet, verus wallet, mobile wallet, VRSC, desktop wallet, cli wallet, commandline wallet, 3rd party wallet, paper wallet',
          },
        ]}
      />
      <div className="container grid max-w-5xl grid-cols-1 gap-6 mt-8 md:grid-cols-4">
        <div>
          <Menu pathList={walletLinks} href="/wallet" />
        </div>
        <div className="p-6 md:col-span-3">
          <h1 className="p-0 m-0 text-2xl font-normal md:text-4xl ">
            Verus Wallets
          </h1>
          <p className="my-8 leading-relaxed">
            Verus is actively developing multi-coin wallets for Windows, macOS,
            Linux, ARM. And on mobile for Android and iOS.
          </p>

          <h2 className="mt-12 mb-4 text-2xl font-normal">Wallets</h2>
          <SlugMenu pathList={walletLinks} href="/wallet" />
        </div>
      </div>

      <div className="flex flex-row items-center justify-end p-2 md:hidden">
        <Link href={`/wallet/${nextRoute.path}`}>
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

export default WalletOverview
