import { useState } from 'react';
import Menu from '../../components/Menu';
import { walletLinks } from '../../constants/wallet';
import { formatDateFromString, date_diff_indays } from '../../utils/helpers';
import MarkdownModal from '../../components/MarkdownModal';
import FooterMenu from '../../components/FooterMenu';

const CommandWallet = ({ linuxApp, winApp, macApp, armApp }) => {
  return (
    <div className="container">
      <div className="grid grid-cols-1 gap-6 mb-40 md:grid-cols-4">
        <div className="">
          <Menu pathList={walletLinks} href="/wallet" />
        </div>

        <div className="grid grid-cols-1 p-6 space-y-12 md:col-span-3">
          <div className="text-center sm:text-left">
            <h2 className="p-0 m-0 text-4xl font-normal text-bluebutton">
              Verus Command Line (CLI)
            </h2>
            <p className="mb-0 font-light font-p">
              Save hours on synchronising, jumpstart your native wallet using{' '}
              <a
                href="https://wiki.veruscoin.io/#!how-to%5Chow-to_bootstrap.md"
                target="_blank"
                className="font-light no-underline external font-p text-bluebutton"
              >
                this bootstrap
              </a>
              .
            </p>
          </div>

          <table className="w-2/3 border-collapse font-p">
            <tbody>
              <tr>
                <td className="flex items-center justify-between px-4 py-2 space-x-4">
                  <img src="/images/windows.svg" />
                  <p className="text-xl">Windows</p>
                  {winApp && (
                    <a href={winApp} target="_blank">
                      Download
                    </a>
                  )}
                </td>
              </tr>
              <tr className="bg-gray-100">
                <td className="flex items-center justify-between px-4 py-2 space-x-4">
                  <img src="/images/macos.svg" />
                  <p className="text-xl ">MacOS</p>
                  {macApp && (
                    <a href={macApp} target="_blank">
                      Download
                    </a>
                  )}
                </td>
              </tr>
              <tr>
                <td className="flex items-center justify-between px-4 py-2 space-x-4">
                  <img src="/images/linux.svg" />
                  <p className="text-xl ">Linux</p>
                  {linuxApp && (
                    <a href={linuxApp} target="_blank">
                      Download
                    </a>
                  )}
                </td>
              </tr>
              <tr className="bg-gray-100">
                <td className="flex items-center justify-between px-4 py-2 space-x-4">
                  <img src="/images/linux.svg" />
                  <p className="text-xl ">ARM</p>
                  {armApp && (
                    <a href={armApp} target="_blank">
                      Download
                    </a>
                  )}
                </td>
              </tr>
            </tbody>
          </table>

          <div className="max-w-3xl p-8 bg-gray-200">
            <p className="text-sm font-light font-p">
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
            <p className="text-sm font-light font-p">
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
    </div>
  );
};

export default CommandWallet;

export async function getServerSideProps(context) {
  let result = await fetch(
    'https://api.github.com/repos/VerusCoin/VerusCoin/releases/latest'
  );
  let latestCMDwallet = await result.json();
  let linuxApp,
    winApp,
    macApp,
    armApp = '';

  latestCMDwallet.assets.map((asset) => {
    if (asset.name.includes('arm64')) {
      armApp = asset.browser_download_url;
    }
    if (asset.name.includes('Windows')) {
      winApp = asset.browser_download_url;
    }

    if (asset.name.includes('MacOS')) {
      macApp = asset.browser_download_url;
    }

    if (asset.name.includes('amd64')) {
      linuxApp = asset.browser_download_url;
    }
  });
  return {
    props: { linuxApp, winApp, macApp, armApp },
  };
}
