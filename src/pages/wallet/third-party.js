import { useState } from 'react';

import Menu from '../../components/Menu';
import { walletLinks } from '../../constants/wallet';
import { formatDateFromString, date_diff_indays } from '../../utils/helpers';
import MarkdownModal from '../../components/MarkdownModal';
import FooterMenu from '../../components/FooterMenu';

const ThirdPartyWallet = () => {
  const [modalShow, setModalShow] = useState(false);
  const _handleModal = (value) => {
    setModalShow(value);
  };

  return (
    <div className="container max-w-5xl">
      <div className="grid grid-cols-1 gap-6 mb-40 md:grid-cols-4">
        <div className="">
          <Menu pathList={walletLinks} href="/wallet" />
        </div>

        <div className="max-w-5xl p-6 md:col-span-3">
          <h1 className="p-0 m-0 text-4xl font-normal text-bluebutton">
            Alternate Wallets
          </h1>
          <p className="leading-normal font-p">
            Wallets not developed by the Verus Community that can hold VRSC.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="box-border flex items-center flex-shrink-0 h-40 p-4 border border-solid rounded">
                <img
                  src="/images/logos/coincollect-logo.png"
                  className="object-contain w-full my-auto"
                  alt="coincollect logo"
                />
              </div>
              <p className="py-2 m-0 font-p text-custom">Mobile Only</p>
              <a
                href="http://www.coincollect.cc/"
                target="_blank"
                className="py-2 leading-relaxed underline cursor-pointer"
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
              <p className="py-2 m-0 font-p text-custom">Desktop & Mobile</p>
              <a
                href="http://www.vidulum.app/"
                target="_blank"
                className="py-2 leading-relaxed underline cursor-pointer"
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
              <p className="py-2 m-0 font-p text-custom">Mobile Only</p>
              <a
                href="https://www.chainzilla.io/chameleonpay.html"
                target="_blank"
                className="py-2 leading-relaxed underline cursor-pointer"
              >
                Go to Chameleon website
              </a>
            </div>
          </div>
          <p className="leading-normal font-p">Content</p>
          <h2 className="mt-16 text-2xl font-normal">H2</h2>
        </div>
      </div>

      <FooterMenu hrefLocation="/wallet" pathList={walletLinks} />
    </div>
  );
};

export default ThirdPartyWallet;
