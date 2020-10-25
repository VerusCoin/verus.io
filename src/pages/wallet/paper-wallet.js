import { useState } from 'react';

import Menu from '../../components/Menu';
import { walletLinks } from '../../constants/wallet';
import { formatDateFromString, date_diff_indays } from '../../utils/helpers';
import MarkdownModal from '../../components/MarkdownModal';
import FooterMenu from '../../components/FooterMenu';

const PaperWallet = () => {
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
          <h1 className="p-0 m-0 text-4xl font-normal ">Paper Wallet</h1>
          <p className="mt-8 mb-4">
            Use a paper wallet if you want to store your coins offline. This is
            a very safe method since the private key is only stored on a piece
            of paper. Follow the instructions closely for maximum security.
          </p>
          <a
            href="https://paperwallet.veruscoin.io/"
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

//https://paperwallet.veruscoin.io/
