import Menu from '../../components/Menu';
import { walletLinks } from '../../constants/wallet';
import FooterMenu from '../../components/FooterMenu';
import { NextSeo } from 'next-seo';

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
      <div className="container grid max-w-5xl grid-cols-1 gap-6 mt-8 mb-40 md:grid-cols-4">
        <div className="">
          <Menu pathList={walletLinks} href="/wallet" />
        </div>

        <div className="max-w-5xl p-6 md:col-span-3">
          <h1 className="p-0 m-0 text-2xl font-normal md:text-4xl ">
            Paper Wallet
          </h1>
          <p className="mt-8 mb-4">
            Use a paper wallet if you want to store your coins offline. This is
            a very safe method since the private key is only stored on a piece
            of paper. Follow the instructions closely for maximum security.
          </p>
          <a
            href="https://paperwallet.verus.io/"
            target="_blank"
            className="underline external font-p text-bluebutton"
          >
            Get PaperWallet here
          </a>
        </div>
      </div>

      <FooterMenu hrefLocation="/wallet" pathList={walletLinks} />
    </>
  );
};

export default PaperWallet;

//https://paperwallet.verus.io/
