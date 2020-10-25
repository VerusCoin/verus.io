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
    <>
      <div className="container grid max-w-5xl grid-cols-1 gap-6 mb-40 md:grid-cols-4">
        <div className="">
          <Menu pathList={walletLinks} href="/wallet" />
        </div>

        <div className="max-w-5xl p-6 md:col-span-3">
          <h1 className="p-0 m-0 text-4xl font-normal ">Alternate Wallets</h1>
          <p className="my-8">
            Wallets not developed by the Verus Community that can hold VRSC.
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
                className="leading-relaxed underline cursor-pointer  font-p"
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
                className="leading-relaxed underline cursor-pointer  font-p"
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
                className="leading-relaxed underline cursor-pointer font-p"
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
