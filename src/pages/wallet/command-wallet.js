import Menu from '../../components/Menu'
import { walletLinks } from '../../constants/wallet'
import { NextSeo } from 'next-seo'
import FooterMenu from '../../components/FooterMenu'
import { formatDateFromString, date_diff_indays } from '../../utils/helpers'

const CommandWallet = ({
  linuxApp,
  winApp,
  macApp,
  armApp,
  name,
  published_at,
}) => {
  return (
    <>
      <NextSeo
        title="CLI Wallets"
        description="Verus desktop command line multi-coin wallet for Windows, macOS, Linux, ARM."
        additionalMetaTags={[
          {
            name: 'keywords',
            content:
              'verus, ERC-20, VerusID, verus signatures, VRSC, privacy, wallet, verus wallet, desktop wallet, command line wallet, cli wallet, mining, staking',
          },
        ]}
      />
      <div className="container grid max-w-5xl grid-cols-1 gap-6 mt-8 mb-40 md:grid-cols-4">
        <div>
          <Menu pathList={walletLinks} href="/wallet" />
        </div>

        <div className="grid grid-cols-1 p-6 space-y-12 md:col-span-3">
          <div className="text-center sm:text-left">
            <h1 className="p-0 m-0 text-2xl font-normal md:text-4xl ">
              Verus Command Line (CLI)
            </h1>
            <p className="my-8 ">
              Save hours on synchronising, jumpstart your native wallet using{' '}
              <a
                href="https://wiki.verus.io/#!how-to%5Chow-to_bootstrap.md"
                target="_blank"
                className="underline external font-p text-bluebutton-default"
              >
                this bootstrap
              </a>
              .
            </p>
          </div>

          <table
            className="w-2/3 border-collapse font-p"
            style={{ marginTop: '0' }}
          >
            <tbody>
              <tr>
                <td className="flex items-center p-4 space-x-4">
                  <img src="/images/logos/windows.svg" className="opacity-25" />
                  <p className="text-xl">{name} Windows</p>
                </td>
                <td>
                  {winApp && (
                    <a href={winApp} target="_blank">
                      Download
                    </a>
                  )}
                </td>
              </tr>
              <tr className="bg-gray-100">
                <td className="flex items-center p-4 space-x-4">
                  <img src="/images/logos/macos.svg" className="opacity-25" />
                  <p className="text-xl ">{name} macOS</p>
                </td>
                <td>
                  {macApp && (
                    <a href={macApp} target="_blank">
                      Download
                    </a>
                  )}
                </td>
              </tr>
              <tr>
                <td className="flex items-center p-4 space-x-4">
                  <img src="/images/logos/linux.svg" className="opacity-25" />
                  <p className="text-xl ">{name} Linux</p>
                </td>
                <td>
                  {linuxApp && (
                    <a href={linuxApp} target="_blank">
                      Download
                    </a>
                  )}
                </td>
              </tr>
              <tr className="bg-gray-100">
                <td className="flex items-center p-4 space-x-4">
                  <img src="/images/logos/linux.svg" className="opacity-25" />
                  <p className="text-xl ">{name} Linux ARM</p>
                </td>
                <td>
                  {armApp && (
                    <a href={armApp} target="_blank">
                      Download
                    </a>
                  )}
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr className="col-span-2">
                Latest release: {formatDateFromString(published_at)}{' '}
                {date_diff_indays(published_at) < 14 ? (
                  <span className="px-2 py-1 mx-1 font-bold text-red-600 whitespace-nowrap">
                    New Update
                  </span>
                ) : null}
              </tr>
            </tfoot>
          </table>

          <div className="max-w-3xl p-8 space-y-8 bg-gray-100">
            <p className="text-sm font-p text-gray-500">
              This is experimental and unfinished software. Use at your own
              risk! No warranty for any kind of damage! Permission is hereby
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
            <p className="text-sm font-p text-gray-500">
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
  )
}

export default CommandWallet

export async function getServerSideProps(context) {
  let result = await fetch(
    'https://api.github.com/repos/VerusCoin/VerusCoin/releases/latest'
  )
  let latestCMDwallet = await result.json()
  let linuxApp,
    winApp,
    macApp,
    name,
    armApp = '',
    published_at = ''

  name = latestCMDwallet.name
  published_at = latestCMDwallet.published_at
  latestCMDwallet.assets.map((asset) => {
    if (asset.name.includes('arm64')) {
      armApp = asset.browser_download_url
    }
    if (asset.name.includes('Windows')) {
      winApp = asset.browser_download_url
    }

    if (asset.name.includes('MacOS')) {
      macApp = asset.browser_download_url
    }

    if (asset.name.includes('amd64')) {
      linuxApp = asset.browser_download_url
    }
  })
  return {
    props: { linuxApp, winApp, macApp, armApp, name, published_at },
  }
}
