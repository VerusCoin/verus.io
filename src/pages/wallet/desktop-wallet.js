import { useState } from 'react';
import Menu from '../../components/Menu';
import { walletLinks } from '../../constants/wallet';
import { formatDateFromString, date_diff_indays } from '../../utils/helpers';
import FooterMenu from '../../components/FooterMenu';

const DesktopWallet = (props) => {
  const [showDownloads, setShowDownloads] = useState(false);
  const { name, published_at, linuxApp, winApp, macApp, armApp } = props;

  return (
    <div className="container">
      <div className="grid grid-cols-1 gap-6 mb-40 md:grid-cols-4">
        <div>
          <Menu pathList={walletLinks} href="/wallet" />
        </div>
        <div className="grid grid-cols-1 p-6 space-y-12 sm:grid-cols-2 md:col-span-3">
          <div className="text-center sm:text-left">
            <h2 className="p-0 m-0 text-4xl font-normal text-bluebutton">
              Verus for Desktop
            </h2>
            <p className="mt-8 mb-0 font-light font-p">
              Latest version: {name} <br />
              Latest release: {formatDateFromString(published_at)}{' '}
              {date_diff_indays(published_at) < 14 ? (
                <span className="px-6 py-1 mx-4 font-bold whitespace-no-wrap bg-red-300 rounded-full ">
                  New Update
                </span>
              ) : null}
              <br />
              <a
                href="https://github.com/VerusCoin/VerusCoin/releases/latest"
                target="_blank"
                className="font-light no-underline external font-p text-bluebutton"
              >
                Bootstrap Install Instruction
              </a>
            </p>
            <button
              onClick={() => {
                setShowDownloads(!showDownloads);
              }}
              className="inline-flex items-center px-12 py-5 mt-4 text-lg text-white border-0 rounded-full focus:outline-none bg-bluebutton hover:bg-bluebutton-hover"
            >
              <span className="mr-1">Download Verus Desktop</span>
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
                {winApp && (
                  <li className="block px-4 py-3 whitespace-no-wrap">
                    <a
                      href={winApp}
                      className="flex flex-row items-center flex-shrink-0 py-2 space-x-2 no-underline whitespace-no-wrap cursor-pointer text-navlink hover:text-navlink-hover"
                    >
                      <img className="opacity-25" src="/images/windows.svg" />
                      <p className="pl-2 m-0">Download Windows app</p>
                    </a>
                  </li>
                )}
                {macApp && (
                  <li className="block px-4 py-3 whitespace-no-wrap">
                    <a
                      href={macApp}
                      className="flex flex-row items-center flex-shrink-0 py-2 space-x-2 no-underline whitespace-no-wrap cursor-pointer text-navlink hover:text-navlink-hover"
                    >
                      <img className="opacity-25" src="/images/macos.svg" />
                      <p className="pl-2 m-0">Download Mac app</p>
                    </a>
                  </li>
                )}
                {linuxApp && (
                  <li className="block px-4 py-3 whitespace-no-wrap">
                    <a
                      href={linuxApp}
                      className="flex flex-row items-center flex-shrink-0 py-2 space-x-2 no-underline whitespace-no-wrap cursor-pointer text-navlink hover:text-navlink-hover"
                    >
                      <img className="opacity-25" src="/images/linux.svg" />
                      <p className="pl-2 m-0">Download Linux app</p>
                    </a>
                  </li>
                )}
                {armApp && (
                  <li className="block px-4 py-3 whitespace-no-wrap">
                    <a
                      href={armApp}
                      className="flex flex-row items-center flex-shrink-0 py-2 space-x-2 no-underline whitespace-no-wrap cursor-pointer text-navlink hover:text-navlink-hover"
                    >
                      
                      <p className="pl-2 m-0">Download ARM app</p>
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>
          <img
            src="/images/VerusDesktopImg3.png"
            width="800px"
            className="w-full"
            srcSet="/images/VerusDesktopImg3-p-500.png 500w, /images/VerusDesktopImg3-p-800.png 800w, /images/VerusDesktopImg3-p-1080.png 1080w, /images/VerusDesktopImg3.png 1600w"
            sizes="(max-width: 479px) 43vw, (max-width: 767px) 51vw, (max-width: 991px) 54vw, 56vw"
            alt=""
          />
          <div className="max-w-4xl space-y-16 text-center sm:text-left sm:col-span-2">
            <div className="max-w-2xl space-y-8">
              <div className="flex flex-row space-x-8">
                <img src="/images/safe-icon.svg" alt="Safe Icon" width="50" />
                <div className="">
                  <h3 className="mb-2 text-2xl font-normal">
                    Easy and Safe & Always Secure
                  </h3>
                  <p className="font-light text-md font-p">
                    Verus Desktop is created for beginners and experts in mind.
                    Easy to use yet advanced in capabilities. Security has
                    highest priority that's why all Verus software is
                    open-source.
                  </p>
                </div>
              </div>
              <div className="flex flex-row space-x-8">
                <img
                  src="/images/verusid-icon.svg"
                  alt="VerusID Icon"
                  width="50"
                />
                <div>
                  <h3 className="mb-2 text-2xl font-normal">
                    VerusID Capabilities
                  </h3>
                  <p className="font-light text-md font-p">
                    Create and manage self-sovereign identities on the
                    blockchain. Use VerusID as friendly crypto name, sign and
                    verify files and message and many more features.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 px-12 py-6 rounded gap-y-4 gap-x-12 sm:grid-cols-2 bg-gray-105">
              <div className="flex flex-row items-center flex-shrink-0 space-x-6">
                <img src="/images/bitcoin-icon.svg" alt="BTC icon" width="25" />
                <div className="ml-2">
                  <h4 className="mb-0 text-base font-semibold font-p">
                    Multi-Currency Wallet
                  </h4>
                  <p className="mt-1 text-sm font-light leading-normal font-p">
                    Store hundreds of coins and tokens!
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-center flex-shrink-0 space-x-6">
                <img
                  src="/images/mining-staking-icon.svg"
                  alt="Mining and Staking icon"
                  width="25"
                />
                <div className="ml-2">
                  <h4 className="mb-0 text-base font-semibold font-p">
                    Mining & Staking
                  </h4>
                  <p className="mt-1 text-sm font-light leading-normal font-p">
                    Earn VRSC with Verus Desktop. Mine and stake easily from
                    within your wallet.
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-center flex-shrink-0 space-x-6">
                <img
                  src="/images/converting-icon.svg"
                  alt="Converting icon"
                  width="25"
                />
                <div className="ml-2">
                  <h4 className="mb-0 text-base font-semibold font-p">
                    Converting{' '}
                    <span className="text-green-500">TESTNET ONLY</span>
                  </h4>
                  <p className="mt-1 text-sm font-light leading-normal font-p">
                    Convert from one currency to another through multi-reserve
                    currencies.
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-center flex-shrink-0 space-x-6">
                <img
                  src="/images/currencies-icon.svg"
                  alt="Currencies icon"
                  width="25"
                />
                <div className="ml-2">
                  <h4 className="mb-0 text-base font-semibold font-p">
                    Currencies{' '}
                    <span className="text-green-500">TESTNET ONLY</span>
                  </h4>
                  <p className="mt-1 text-sm font-light leading-normal font-p">
                    Create multi-reserve and fractional currencies with a few
                    clicks.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center ">
              <div className="flex justify-center max-w-xl space-x-8">
                <img src="/images/time-icon.svg" alt="time-icon" width="30" />
                <p className="text-xl font-light font-p">
                  Jumpstart your native Verus wallet and save hours on
                  synchronizing.{' '}
                  <a
                    href="https://wiki.veruscoin.io/#!how-to%5Chow-to_bootstrap.md"
                    target="_blank"
                    className="font-light no-underline external font-p text-bluebutton"
                  >
                    Download Bootstrap
                  </a>
                </p>
              </div>
            </div>
            <div className="p-8 bg-gray-105">
              <p className="text-sm font-light font-p">
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
              <p className="text-sm font-light font-p">
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

      <FooterMenu hrefLocation="/wallet" pathList={walletLinks} />
    </div>
  );
};

export default DesktopWallet;

export async function getServerSideProps(context) {
  let result = await fetch(
    'https://api.github.com/repos/VerusCoin/Verus-Desktop/releases/latest'
  );
  let latestDesktop = await result.json();
  let linuxApp,
    winApp,
    macApp,
    armApp,
    name,
    published_at = '';

  name = latestDesktop.name;
  published_at = latestDesktop.published_at;
  latestDesktop.assets.map((asset) => {
    if (asset.name.includes('arm64')) {
      armApp = asset.browser_download_url;
    }

    if (asset.name.includes('Windows')) {
      winApp = asset.browser_download_url;
    }

    if (asset.name.includes('MacOS')) {
      macApp = asset.browser_download_url;
    }

    if (asset.name.includes('x86_64')) {
      linuxApp = asset.browser_download_url;
    }
  });

  return {
    props: { name, published_at, linuxApp, winApp, macApp, armApp },
  };
}
