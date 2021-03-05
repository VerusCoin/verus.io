import Link from 'next/link'
import { NextSeo } from 'next-seo'
import { SubjectPage, YoutubeLink } from '@src/components'
import { technologyLinks } from '@src/constants/technology'

const Verusid = () => {
  return (
    <>
      <NextSeo
        title="VerusID"
        description="The first self-sovereign, decentralized identities on the
        blockchain of its kind as its address that can
        hold funds and stake its $VRSC."
        additionalMetaTags={[
          {
            name: 'keywords',
            content:
              'verus, pbaas, public blockchains as a service, proof of power, proof-of-power, cryptocurrency, Service Economy, economy, Privacy, VerusID, ERC-20, decentralized finance, verus signatures',
          },
        ]}
      />
      <SubjectPage menuList={technologyLinks} menuRef="/technology">
        <div className="mb-6">
          <h1 className="p-0 m-0 text-2xl font-normal md:leading-tight md:text-4xl">
            VerusID: First Decentralized and Self-Sovereign Identity of Its Kind
          </h1>
          <p className="mt-8 leading-relaxed ">
            The first self-sovereign, decentralized identities on the blockchain
            of its kind. A VerusID is a blockchain address that can hold funds
            and stake Verus. Future proof and packed with advanced capabilities.
            In this permissionless system anyone can create a VerusID and have
            complete ownership.{' '}
            <Link href="/wallet/desktop-wallet" className="font-p no-font-p ">
              <span className="underline cursor-pointer text-bluebutton-default">
                Register VerusID with Verus Desktop
              </span>
            </Link>
            .
          </p>

          <YoutubeLink
            title="Watch explainer video on YouTube"
            URI="EyC-EMiI4FM"
          />
        </div>
        <h2 className="mb-4 text-2xl">Features</h2>

        <div className="grid grid-cols-1 p-8 mb-8 bg-center bg-cover rounded bg-features-bg gap-y-12 gap-x-12 md:grid-cols-2 md:gap-12">
          <div className="flex flex-row items-center flex-shrink-0">
            <img
              src="/images/icons/easynameIcon.png"
              alt="Friendly Name Icon"
              width="100"
            />
            <div className="ml-4">
              <h3 className="mb-0 text-xl font-semibold text-white font-p">
                Friendly Name
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-theme-feature">
                Always remember your crypto address.
              </p>
            </div>
          </div>

          <div className="flex flex-row items-center flex-shrink-0">
            <img
              src="/images/icons/vaultIcon.png"
              alt="vault Icon"
              width="100"
            />
            <div className="ml-4">
              <h3 className="mb-0 text-xl font-semibold text-white font-p">
                Verus Vault
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-theme-feature">
                Set (time) locks for theft proof staking and workflow.
              </p>
            </div>
          </div>

          <div className="flex flex-row items-center flex-shrink-0">
            <img
              src="/images/icons/revokeIcon.png"
              alt="Revoke Icon"
              width="100"
            />
            <div className="ml-4">
              <h3 className="mb-0 text-xl font-semibold text-white font-p">
                Revoking
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-theme-feature">
                Revoke spending abilities on your identity.
              </p>
            </div>
          </div>

          <div className="flex flex-row items-center flex-shrink-0">
            <img
              src="/images/icons/recoverIcon.png"
              alt="Recover Icon"
              width="100"
            />
            <div className="ml-4">
              <h3 className="mb-0 text-xl font-semibold text-white font-p">
                Recovering
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-theme-feature">
                Recover funds and UTXOs to an assigned identity.
              </p>
            </div>
          </div>

          <div className="flex flex-row items-center flex-shrink-0">
            <img
              src="/images/icons/signatureIcon.png"
              alt="Signature Icon"
              width="100"
            />
            <div className="ml-4">
              <h3 className="mb-0 text-xl font-semibold text-white font-p">
                Signatures
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-theme-feature">
                Create unforgeable signatures for files and messages.
              </p>
            </div>
          </div>

          <div className="flex flex-row items-center flex-shrink-0">
            <img
              src="/images/icons/multisigIcon2.png"
              alt="Multisig Icon Icon"
              width="100"
            />
            <div className="ml-4">
              <h3 className="mb-0 text-xl font-semibold text-white font-p">
                Multisig
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-theme-feature">
                Multiple identities can control one identity.
              </p>
            </div>
          </div>

          <div className="flex flex-row items-center flex-shrink-0">
            <img
              src="/images/icons/privateIcon.png"
              alt="Privacy Icon"
              width="100"
            />
            <div className="ml-4">
              <h3 className="mb-0 text-xl font-semibold text-white font-p">
                Privacy
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-theme-feature">
                Attach a private address (Sapling).
              </p>
            </div>
          </div>

          <div className="flex flex-row items-center flex-shrink-0">
            <img
              src="/images/icons/messageIcon.png"
              alt="Message Icon"
              width="100"
            />
            <div className="ml-4">
              <h3 className="mb-0 text-xl font-semibold text-white font-p">
                Messaging
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-theme-feature">
                Send and receive private messages.
              </p>
            </div>
          </div>
        </div>
        <div className="p-12 mt-16 mb-16 bg-gray-100">
          <h2 className="m-0 text-2xl font-normal ">
            Always remember your crypto address
          </h2>
          <p className="my-8 leading-relaxed text-p ">
            Each VerusID has an easy to remember name, chosen by you. No more
            hassle with copying long complicated addresses or being scared of
            making a typing error.
          </p>

          <p className="my-8 leading-relaxed text-p ">
            All characters from all character sets except{' '}
            <span className="px-1 py-1 text-span-code">{`\/:*?"<>|@`}</span>.
            are available to create your own VerusID, with a maximum of 64
            characters. All identities end with the{' '}
            <span className="px-1 py-1 text-span-code">@</span> sign.
          </p>
          <p className="leading-relaxed text-p ">
            The Verus Foundation identity is{' '}
            <span className="px-1 py-1 text-span-code">
              Verus Coin Foundation@
            </span>
          </p>
        </div>
        <div className="mb-16">
          <h2 className="mt-16 text-2xl font-normal">Verus Vault</h2>
          <p className="my-8 leading-relaxed text-p">
            Verus Vault is a lock mechanism to create virtually theft proof
            security for your funds and workflow. When a VerusID is locked, it
            can't spend, but it can still receive, hold, and stake funds. It can
            also still be used for signing.
          </p>
          <p className="my-8 leading-relaxed text-p">
            A VerusID can be locked indefinitely. Or locked and will unlock only
            after: an unlock has been requested, and a predetermined amount of
            time elapses after the request. Or unlocked.
          </p>
          <p className="my-8 leading-relaxed text-p">
            Even when an identity is locked, its spending power can still be
            revoked, and thus recovered. More about revoking and recovering in
            the next part.
          </p>
        </div>
        <div className="mb-16">
          <h2 className="mt-16 text-2xl font-normal">
            Revoking and Recovering
          </h2>
          <p className="my-8 leading-relaxed text-p">
            Each VerusID can be revoked and recovered by another identity that
            you authorized. The revokeID and recoverID are specified by
            yourself.
          </p>
          <p className="my-8 leading-relaxed text-p">
            Verus believes that this functionality is critical for any system of
            self-sovereign identities; users need a path to recover their
            identities if their private keys are lost or stolen, otherwise there
            is just too much risk in a self-sovereign system where an identity
            can become inaccessible with a single mistake.
          </p>
          <p className="my-8 leading-relaxed text-p">
            It’s now possible for the first time ever that you can recover from
            private key loss or theft in a completely decentralized,
            self-sovereign way.
          </p>
        </div>
        <div className="mb-16">
          <h2 className="mt-16 text-2xl font-normal">Signatures</h2>
          <p className="my-8 leading-relaxed text-p">
            Verus enables free verifiable digital signatures for all through the
            VerusID protocol. Sign and verify data, files and messages with your
            own VerusID.
          </p>
          <p className="my-8 leading-relaxed text-p">
            A great example is the Verus Coin Foundation signing the Verus
            Desktop binaries. Users can verify if the software is legit and not
            manipulated by bad actors.
          </p>
        </div>
        <Link href="/verify-signatures">
          <button className="px-12 py-5 mb-16 bg-transparent border border-solid rounded-full text-p border-bluetrans-default hover:border-bluebutton-default text-bluebutton-default">
            Verify signatures here
          </button>
        </Link>
      </SubjectPage>
    </>
  )
}

export default Verusid
