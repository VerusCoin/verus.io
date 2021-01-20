import { NextSeo } from 'next-seo'
import { IndexPage, SlugMenu } from '@src/components'
import { walletLinks } from '@src/constants/wallet'

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
      <IndexPage
        menuList={walletLinks}
        menuRef="/wallet"
        nextRoutePath={`/wallet/${nextRoute.path}`}
        nextRouteName={nextRoute.name}
      >
        <h1 className="p-0 m-0 text-2xl font-normal md:text-4xl ">
          Verus Wallets
        </h1>
        <p className="my-8 leading-relaxed">
          Verus is actively developing multi-coin wallets for Windows, macOS,
          Linux, ARM. And on mobile for Android and iOS.
        </p>

        <h2 className="mt-12 mb-4 text-2xl font-normal">Wallets</h2>
        <SlugMenu pathList={walletLinks} href="/wallet" />
      </IndexPage>
    </>
  )
}

export default WalletOverview
