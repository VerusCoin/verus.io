import { NextSeo } from 'next-seo'
import { SubjectPage } from '@src/components'
import { walletLinks } from '@src/constants/wallet'

const PaperWallet = () => {
  return (
    <>
      <NextSeo
        title="Paper Wallet"
        description="Verus paper wallet to store your coins offline."
        additionalMetaTags={[
          {
            name: 'keywords',
            content:
              'verus, ERC-20, VerusID, verus signatures, privacy, wallet, verus wallet, paper wallet, offline wallet, VRSC',
          },
        ]}
      />
      <SubjectPage menuList={walletLinks} menuRef="/wallet" classnames="mb-40">
        <h1 className="p-0 m-0 text-2xl font-normal md:text-4xl ">
          Paper Wallet
        </h1>
        <p className="mt-8 mb-4">
          Use a paper wallet if you want to store your coins offline. This is a
          very safe method since the private key is only stored on a piece of
          paper. Follow the instructions closely for maximum security.
        </p>
        <a
          href="https://paperwallet.verus.io/"
          target="_blank"
          className="underline external font-p text-bluebutton-default"
        >
          Get PaperWallet here
        </a>
      </SubjectPage>
    </>
  )
}

export default PaperWallet

//https://paperwallet.verus.io/
