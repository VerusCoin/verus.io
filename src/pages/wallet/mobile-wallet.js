import { useState } from 'react';

import Menu from '../../components/Menu';
import { walletLinks } from '../../constants/wallet';
import { formatDateFromString, date_diff_indays } from '../../utils/helpers';
import MarkdownModal from '../../components/MarkdownModal';
import FooterMenu from '../../components/FooterMenu';

const MobileWallet = ({ latestAndroid }) => {
  const [modalShow, setModalShow] = useState(false);
  const _handleModal = (value) => {
    setModalShow(value);
  };

  return (
    <div className="container max-w-5xl modalBody modal-active">
      <div className="grid grid-cols-1 gap-6 mb-40 md:grid-cols-4">
        <div className="">
          <Menu pathList={walletLinks} href="/wallet" />
        </div>

        <div className="grid grid-cols-1 p-6 space-y-4 sm:grid-cols-3 md:col-span-3">
          <div className="text-center sm:text-left sm:col-span-2">
            <h2 className="p-0 m-0 text-4xl font-normal text-bluebutton">
              Verus for Mobile
            </h2>
            <p className="mb-0 font-light font-p">
              Latest version: {latestAndroid.name} <br />
              Latest release: {formatDateFromString(
                latestAndroid.published_at
              )}{' '}
              {date_diff_indays(latestAndroid.published_at) < 7 ? (
                <span className="px-6 py-1 mx-4 font-bold whitespace-no-wrap bg-red-600 rounded-full ">
                  New Update
                </span>
              ) : null}
            </p>
          </div>
          <div className="left-0">
            <img
              src="/images/VerusDesktopImg3.png"
              className="w-full"
              srcSet="/images/VerusDesktopImg3-p-500.png 500w, /images/VerusDesktopImg3-p-800.png 800w, /images/VerusDesktopImg3-p-1080.png 1080w, /images/VerusDesktopImg3.png 1600w"
              sizes="(max-width: 479px) 43vw, (max-width: 767px) 51vw, (max-width: 991px) 54vw, 56vw"
              alt=""
            />
          </div>
          <div className="items-center justify-center sm:col-span-3">
            <a href="https://testflight.apple.com/join/ZS43lYcw">
              <button className="px-12 py-4 mt-4 mr-4 text-lg text-white border-0 rounded-full focus:outline-none bg-bluebutton hover:bg-bluebutton-hover">
                Verus Mobile for iOS
              </button>
            </a>
            <a href="https://github.com/VerusCoin/Verus-Mobile/releases">
              <button className="px-12 py-4 mt-4 mr-4 text-lg text-white border-0 rounded-full focus:outline-none bg-bluebutton hover:bg-bluebutton-hover">
                Verus Mobile for Android
              </button>
            </a>
          </div>

          <div className="pr-6 space-y-20 text-center sm:text-left sm:col-span-2">
            <div>
              <h3 className="mb-2 text-2xl font-normal">Easy and Safe</h3>
              <p className="font-light text-md font-p">
                Verus Mobile is created for beginners and exports in mind.
                Anyone can get started, no matter previous cryptocurrency
                experiences.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-2xl font-normal">VerusID</h3>
              <p className="font-light text-md font-p">
                Create and manage self-sovereign identities on the blockchain.
                With user-friendly names as addresses, and more.
              </p>
            </div>
          </div>
          <div className="p-6 space-y-2 text-sm bg-gray-200 rounded-lg sm:text-left">
            <div className="space-y-0">
              <p className="font-light font-p">System requirements:</p>
              <p className="font-light text-navlink-hover font-p">
                Operating Systems: Android, iOS
              </p>
            </div>
            <div>
              <p className="font-light font-p">Release Notes</p>
            </div>
            <div className="text-center">
              <button
                onClick={() => _handleModal(true)}
                className="block w-1/2 py-3 text-sm no-underline border-2 border-solid rounded-full cursor-pointer focus:outline-none bg-gray-105 md:w-full border-bluetrans hover:border-bluebutton text-bluebutton hover:bg-bluetrans-alter"
              >
                Release Notes
              </button>
            </div>
            <div>
              <p className="m-0 font-light font-p">Supported Coins:</p>
              <p className="m-0 font-light font-p">
                VRSC, BTC, KMD, LTC, ETH, .........
              </p>
            </div>
            <div>
              <p className="text-xs font-light font-p">
                This is experimental and unfinished software. Use at your own
                risk! No warranty for any kind of damage!Permission is hereby
                granted, free of charge, to any person obtaining a copy of this
                software and associated documentation files (the "Software"), to
                deal in the Software without restriction, including without
                limitation the rights to use, copy, modify, merge, publish,
                distribute, sublicense, and/or sell copies of the Software, and
                to permit persons to whom the Software is furnished to do so,
                subject to the following conditions:The enclosed copyright
                notice and this permission notice shall be included in all
                copies or substantial portions of the Software.
              </p>
              <p className="text-xs font-light font-p">
                THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
                EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
                OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
                NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
                HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
                WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
                FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
                OTHER DEALINGS IN THE SOFTWARE.
              </p>
            </div>
          </div>
        </div>
      </div>

      <MarkdownModal
        modalTitle="Release Notes"
        modalShow={modalShow}
        modalToggle={_handleModal}
        modalBody={latestAndroid.body}
      />

      <FooterMenu hrefLocation="/wallet" pathList={walletLinks} />
    </div>
  );
};

export default MobileWallet;

export async function getServerSideProps(context) {
  let result = await fetch(
    'https://api.github.com/repos/VerusCoin/Verus-Mobile/releases'
  );
  let latestAndroid = await result.json();

  return {
    props: { latestAndroid: latestAndroid[0] },
  };
}
