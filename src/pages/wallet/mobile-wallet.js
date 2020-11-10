import { useState, useEffect, createRef } from 'react';
import { NextSeo } from 'next-seo';
import Menu from '../../components/Menu';
import { walletLinks } from '../../constants/wallet';
import { formatDateFromString, date_diff_indays } from '../../utils/helpers';
import FooterMenu from '../../components/FooterMenu';

const MobileWallet = ({ latestAndroid }) => {
  const [showDownloads, setShowDownloads] = useState(false);
  const container = createRef();

  useEffect(() => {
    const handleBodyClick = () => {
      setShowDownloads(false);
    };
    document.addEventListener('mousedown', handleBodyClick);
    return () => {
      document.removeEventListener('mousedown', handleBodyClick);
    };
  });
  return (
    <>
      <NextSeo
        title="Mobile Wallets"
        description="Verus mobile multi-coin wallet for Android and iOS."
        additionalMetaTags={[
          {
            name: 'keywords',
            content:
              'verus, ERC-20, VerusID, verus signatures, privacy, wallet, verus wallet, VRSC, mobile wallet, android wallet, ios wallet',
          },
        ]}
      />
      <div className="container grid max-w-5xl grid-cols-1 gap-6 mt-8 mb-40 modalBody modal-active md:grid-cols-4">
        <div>
          <Menu pathList={walletLinks} href="/wallet" />
        </div>

        <div className="p-6 md:col-span-3">
          <div className="mb-4 text-center md:text-left">
            <h1 className="p-0 m-0 text-2xl font-normal md:text-4xl ">
              Verus Mobile: multi-coin wallet.
            </h1>
            <button
              onClick={() => {
                setShowDownloads(!showDownloads);
              }}
              className="inline-flex items-center px-12 py-5 mt-4 text-lg text-white border-0 rounded-full focus:outline-none bg-bluebutton hover:bg-bluebutton-hover"
            >
              <span className="mr-1">Download Verus Mobile</span>
              {showDownloads ? (
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform rotate-180 md:-mt-1 "
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              ) : (
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1 "
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              )}
            </button>
            <div
              className={
                showDownloads
                  ? 'absolute z-30 pt-0 -mt-3 dropdown-menu block'
                  : 'hidden'
              }
            >
              <ul
                className={
                  ' pt-1 pb-1 pl-4 pr-4  bg-white rounded-lg shadow-menu  md:z-50 '
                }
              >
                <li className="block px-4 py-3 whitespace-no-wrap">
                  <a
                    href="https://testflight.apple.com/join/ZS43lYcw"
                    className="flex flex-row items-center flex-shrink-0 py-2 space-x-2 no-underline whitespace-no-wrap cursor-pointer text-navlink hover:text-navlink-hover"
                  >
                    <p className="pl-2 m-0">Verus Mobile for iOS</p>
                  </a>
                </li>
                <li className="block px-4 py-3 whitespace-no-wrap">
                  <a
                    href="https://github.com/VerusCoin/Verus-Mobile/releases"
                    className="flex flex-row items-center flex-shrink-0 py-2 space-x-2 no-underline whitespace-no-wrap cursor-pointer text-navlink hover:text-navlink-hover"
                  >
                    <p className="pl-2 m-0">Verus Mobile for Android</p>
                  </a>
                </li>
              </ul>
            </div>
            <p className="mb-0">
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

          <div className="pr-6 mt-32 space-y-24 text-center sm:text-left sm:col-span-2">
            <div className="flex flex-row items-center space-x-8">
              <img
                src="/images/icons/safe-icon.svg"
                alt="Safe Icon"
                width="50"
              />
              <div className="">
                <h2 className="mb-2 text-2xl font-normal">
                  Easy and Safe & Always Secure
                </h2>
                <p className=" text-md">
                  Verus Desktop is created for beginners and experts in mind.
                  Easy to use yet advanced in capabilities. Security has highest
                  priority that's why all Verus software is open-source.
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center space-x-8">
              <img
                src="/images/icons/bitcoin-icon.svg"
                alt="BTC icon"
                width="50"
              />

              <div className="">
                <h2 className="mb-2 text-2xl font-normal">
                  Multi-Currency Wallet
                </h2>
                <p className=" text-md">Store hundreds of coisn and tokens!</p>
              </div>
            </div>
          </div>
          <div className="p-6 mt-16 space-y-8 text-sm bg-gray-200 rounded-lg sm:text-left">
            <p className="text-sm font-p">
              This is experimental and unfinished software. Use at your own
              risk! No warranty for any kind of damage!Permission is hereby
              granted, free of charge, to any person obtaining a copy of this
              software and associated documentation files (the "Software"), to
              deal in the Software without restriction, including without
              limitation the rights to use, copy, modify, merge, publish,
              distribute, sublicense, and/or sell copies of the Software, and to
              permit persons to whom the Software is furnished to do so, subject
              to the following conditions:The enclosed copyright notice and this
              permission notice shall be included in all copies or substantial
              portions of the Software.
            </p>
            <p className="text-sm font-p">
              THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
              EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
              MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
              NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
              HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
              WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
              OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
              DEALINGS IN THE SOFTWARE.
            </p>
          </div>
        </div>
      </div>

      <FooterMenu hrefLocation="/wallet" pathList={walletLinks} />
    </>
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
