import Menu from '../../components/Menu';
import { walletLinks } from '../../constants/wallet';
import { NextSeo } from 'next-seo';
import FooterMenu from '../../components/FooterMenu';

const ThirdPartyWallet = () => {
  return (
    <>
      <NextSeo
        title="Alternate Wallets"
        description="Cryptocurrency Wallets developed by the extended Verus Community that work with VRSC."
        additionalMetaTags={[
          {
            name: 'keywords',
            content:
              'verus, ERC-20, privacy, wallet, VRSC, 3rd party wallet, third party wallet, alternative wallet',
          },
        ]}
      />
      <div className="container grid max-w-5xl grid-cols-1 gap-6 mt-8 mb-40 md:grid-cols-4">
        <div className="">
          <Menu pathList={walletLinks} href="/wallet" />
        </div>

        <div className="max-w-5xl p-6 md:col-span-3">
          <h1 className="p-0 m-0 text-2xl font-normal md:text-4xl ">
            Alternate Wallets
          </h1>
          <p className="my-8">
            Cryptocurrency Wallets developed by the extended Verus Community
            that work with VRSC. Listing here is not necessarily an endorsement,
            please do your own due dilligence regarding the safety of using any
            wallet.
          </p>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <div className="box-border flex items-center flex-shrink-0 h-40 p-4 border border-solid rounded">
                <img
                  src="/images/logos/coincollect-logo.png"
                  className="object-contain w-full my-auto"
                  alt="coincollect logo"
                />
              </div>
              <p className="pt-2 m-0 font-p text-custom">Mobile Only</p>
              <a
                href="http://www.coincollect.cc/"
                target="_blank"
                className="leading-relaxed underline cursor-pointer external font-p"
              >
                Go to CoinCollect website
              </a>
            </div>
            <div>
              <div className="box-border flex items-center flex-shrink-0 h-40 p-4 bg-gray-900 border border-solid rounded">
                <img
                  src="/images/logos/vidulum-logo.png"
                  className="object-contain w-full"
                  alt="vidulum logo"
                />
              </div>
              <p className="pt-2 m-0 font-p text-custom">Desktop & Mobile</p>
              <a
                href="http://www.vidulum.app/"
                target="_blank"
                className="leading-relaxed underline cursor-pointer external font-p"
              >
                Go to Vidulum website
              </a>
            </div>
            <div>
              <div className="box-border flex items-center flex-shrink-0 h-40 p-4 bg-gray-800 border border-solid rounded">
                <img
                  src="/images/logos/chameleon-logo.png"
                  className="w-full"
                  alt="chameleon logo"
                />
              </div>
              <p className="pt-2 m-0 font-p text-custom">Mobile Only</p>
              <a
                href="https://www.chainzilla.io/chameleonpay.html"
                target="_blank"
                className="leading-relaxed underline cursor-pointer external font-p"
              >
                Go to Chameleon website
              </a>
            </div>
          </div>
        </div>
      </div>

      <FooterMenu hrefLocation="/wallet" pathList={walletLinks} />
    </>
  );
};

export default ThirdPartyWallet;
